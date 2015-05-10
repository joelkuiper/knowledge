(ns knowledge.core
  (:require-macros [historian.core :refer [off-the-record]])
  (:require
   [knowledge.popup :as popup]
   [knowledge.plates :as plates]
   [knowledge.util :as util]
   [reagent.core :as reagent :refer [atom cursor]]
   [historian.core :as hist]
   [historian.keys :as hist-keys]
   [secretary.core :as secretary]
   [reagent.session :as session]
   [reagent-forms.core :refer [bind-fields]]
   [goog.dom :as dom]
   [goog.events :as events]
   [knowledge.plates.markdown :as markdown]
   [cljs-uuid-utils.core :as uuid]
   [ajax.core :refer [GET POST]]))


(def intro
  (clojure.string/join
   " "
   ["Knowledge is an interactive document builder, it works by *nesting* plates, like this one."
    "These plates can be as complex, or simple, as you'd like."
    "You can make an interactive document in no time!"]))

(def default-state
  {:plates
   {(uuid/make-random-squuid)
    (assoc (plates/new-plate markdown/t
                             "Welcome to knowledge")
           :state {:first true
                   :text intro
                   :show-edit? false})}})

(hist/replace-library! (atom []))
(hist/replace-prophecy! (atom []))
(def app-state (atom default-state))
(hist/record! app-state :app-state)

(defn active-socket?
  [path]
  (let [socket-popup (deref popup/state)
        visible? (:visible socket-popup)
        popup-path (:path socket-popup)]
    (and (= path popup-path) visible?)))

(defn socket
  [path]
  [(str "i.socket.waves-effect.waves-light"
        (when (active-socket? path) ".active"))
   {:on-click
    (fn [e]
      (let [element (.-target e)
            client-rect (.getBoundingClientRect element)]
        (popup/toggle-popup! path client-rect)))}])

(def levels 7)
(defn depth->level
  [depth]
  (max 2 (- levels (/ depth 2))))

(defn depth->class
  [depth]
  (when (> depth 2)
    (str "grey.lighten-" (depth->level depth))))

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

(declare plate)
(defn- child-plates
  [path]
  [css-transition-group {:transition-name "zoom"}
   (for [[id state] (get-in @app-state path)]
     ^{:key id} [plate (conj path id)])])

(def ^:private title-edit
  (with-meta
    (fn [title hide-edit-title!]
      (let [temp-title (atom @title)]
        (fn [title hide-edit-title!]
          (let [stop (fn [] (hide-edit-title!))
                hold-on #(reset! temp-title (-> % .-target .-value))
                save! (fn [e] (reset! title @temp-title))]
            (fn [title hide-edit-title!]
              [:input.title-edit
               {:type "text"
                :default-value @title
                :on-key-down #(case (.-which %)
                                13 (do (save! %) (stop))
                                27 (stop)
                                nil)
                :on-blur #(do (save! %) (stop))
                :on-change hold-on}])))))
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn- plate-header
  [path local-state]
  (let [title (plates/title app-state path)
        collapsed? (cursor local-state [:collapsed?])
        collapse! (fn [] (swap! collapsed? util/toggle) nil)

        edit-title? (cursor local-state [:edit-title?])

        set-edit-title! (fn [val] (reset! edit-title? val))
        toggle-edit-title! (fn [] (set-edit-title! (util/toggle @edit-title?)) nil)
        hide-edit-title! (fn [] (set-edit-title! false) nil)
        delete! (fn [] (plates/delete-plate app-state path) nil)]
    (fn [path local-state]
      [(str "h" (- levels (depth->level (count path))))
       [(str "i.mdi-editor-mode-edit.edit-title"
             (when @edit-title? ".teal-text"))
        {:on-click toggle-edit-title! :style {:float "left"}}]
       (if (:edit-title? @local-state)
         [title-edit title hide-edit-title!]
         [:span.truncate-80 @title])
       [:div {:style {:float "right"}}
        [:i.mdi-navigation-close.delete
         {:on-click delete! :style {:float "left"}}]
        [(if (:collapsed? @local-state)
           :i.mdi-navigation-expand-more
           :i.mdi-navigation-expand-less)
         {:on-click collapse! :style {:float "left"}}]]])))


(defn plate
  [path]
  (let [local-state (atom {:collapsed? false
                           :edit-title? false})
        class-name (str "div.gray.card.plate."
                        (depth->class (count path)))]
    (fn [path]
      (let [curr (cursor app-state path)
            children-above? (:children-above? @curr)
            has-sockets? (not= :none (:sockets @curr))]
        [:div.row.animated.zoom
         [:div.col.s12
          [class-name
           [plate-header path local-state]
           [(str "div.card-content" (when (:collapsed? @local-state) ".collapsed"))
            (when (and children-above? has-sockets?)
              [:div
               (child-plates (conj path :plates))
               [socket path]])
            (when @curr [:div.content [(plates/builder (:type @curr)) app-state path curr]])
            (when (and (not children-above?) has-sockets?)
              [:div.div
               (child-plates (conj path :plates))
               [socket path]])]]]]))))


(defn undo-redo []
  [:div.undo-redo
   [(str "a.btn-floating"
         (if-not (hist/can-undo?)
           ".disabled"
           ".waves-effect.waves-light"))
    {:on-click hist/undo!}
    [:i.mdi-content-undo]]
   [:span " "]
   [(str "a.btn-floating"
         (if-not (hist/can-redo?)
           ".disabled"
           ".waves-effect.waves-light"))
    {:on-click hist/redo!}
    [:i.mdi-content-redo]]])

(def window-click-listener
  [(dom/getWindow) (.-MOUSEDOWN events/EventType) #(popup/hide!)])

(def app
  (with-meta
    (fn []
      [:div
       [undo-redo]
       [(str "div.app.row" (when (popup/visible?) ".popup-visible"))
        [:div.col.s12
         [popup/popup app-state]
         (child-plates [:plates])]
        [socket []]]])
    {:component-did-mount
     (fn [this]
       (apply events/listen window-click-listener))
     :component-will-unmount
     (fn [this]
       (apply events/unlisten window-click-listener))}))

(defn mount-components []
  (reagent/render-component [app] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (hist-keys/bind-keys)
  (mount-components))
