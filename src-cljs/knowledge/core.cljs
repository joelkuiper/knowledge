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
   [cljs-uuid-utils.core :as uuid]
   [ajax.core :refer [GET POST]]))

(def intro
  (clojure.string/join
   " "
   ["Knowledge is an interactive document builder, it works by *nesting* plates, like this one."
    "These plates can be as complex, or simple, as you'd like."
    "You can make an interactive document in no time!"]))

(defonce default-state
  {:socket-popup {:visible false}
   :plates
   {(uuid/make-random-squuid)
    (assoc (plates/new-plate :text "Welcome to knowledge")
           :state {:text intro :show-edit? false})}})

(defonce app-state (atom default-state))
(hist/record! app-state :app-state)

(defn popup-visible? []
  (get-in @app-state [:socket-popup :visible]))

(defn active-socket?
  [path]
  (let [socket-popup (:socket-popup @app-state)
        visible? (:visible socket-popup)
        popup-path (:path socket-popup)]
    (and (= path popup-path) visible?)))

(defn calc-offset
  [rect]
  (let [container-x (.-pageXOffset js/window)
        container-y (.-pageYOffset js/window)]
    {:top  (+ (.-top rect) container-y)
     :left (+ (.-left rect) container-x)}))

(defn socket
  [path]
  [(str "i.socket.waves-effect.waves-light" (when (active-socket? path) ".active"))
   {:on-click
    (fn [e]
      (let [element (.-target e)
            client-rect (.getBoundingClientRect element)
            offset (calc-offset client-rect)
            new-popup {:path path
                       :visible (util/toggle (popup-visible?))
                       :offset offset}]
        (off-the-record
         (swap! app-state assoc :socket-popup new-popup))))}])

(defn depth->class
  [depth]
  (when (> depth 2)
    (str "grey.lighten-" (max 2 (- 7 (/ depth 2))))))

(declare plate)
(defn- child-plates
  [path]
  (for [[id state] (get-in @app-state path)]
    ^{:key id} [plate (conj path id)]))

(def ^:private title-edit
  (with-meta
    (fn [title edit-title! hide-edit-title!]
      (let [stop (fn [] (edit-title! title) (hide-edit-title!))
            save! #(edit-title! (-> % .-target .-value))]
        (fn [title edit-title! hide-edit-title!]
          [:input.title-edit
           {:type "text"
            :value title
            :on-key-down #(case (.-which %)
                            13 (do (save! %) (hide-edit-title!))
                            27 (stop)
                            nil)
            :on-blur #(do (save! %) (hide-edit-title!))
            :on-change save!}])))
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn- plate-header
  [title path local-state]
  (let [collapsed? (cursor local-state [:collapsed?])
        collapse! (fn [] (swap! collapsed? util/toggle) nil)
        edit-title! #(reset! title %)
        edit-title? (cursor local-state [:edit-title?])
        set-edit-title! (fn [val] (reset! edit-title? val))
        toggle-edit-title! (fn [] (set-edit-title! (util/toggle @edit-title?)))
        hide-edit-title! (fn [] (set-edit-title! false))
        delete! (fn [] (swap! app-state update-in (pop path) dissoc (last path)))]
    (fn [title path local-state]
      [:h6
       [(str "i.mdi-editor-mode-edit.edit-title"
             (when @edit-title? ".teal-text"))
        {:on-click toggle-edit-title! :style {:float "left"}}]
       (if (:edit-title? @local-state)
         [title-edit @title edit-title! hide-edit-title!]
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
  (let [curr (cursor app-state path)
        title (cursor curr [:title])
        local-state (atom {:collapsed? false
                           :edit-title? false})
        class-name (str "div.gray.card.plate."
                        (depth->class (count path)))]
    (fn [path]
      [:div.row
       [:div.col.s12
        [(keyword class-name)
         [plate-header title path local-state]
         [(keyword (str "div.card-content"
                        (when (:collapsed? @local-state) ".collapsed")))
          [:div.content [(:fn @curr) app-state path curr]]
          (child-plates (conj path :plates))
          [socket path]]]]])))

(defn app []
  (fn []
    [(str "div.app.row" (when (popup-visible?) ".popup-visible"))
     [:div.col.s12
      [popup/popup app-state]
      (child-plates [:plates])]
     [socket []]]))

(defn mount-components []
  (reagent/render-component [app] (.getElementById js/document "app")))

(defn listen-for-window-click []
  (events/listen
   (dom/getWindow)
   (.-MOUSEDOWN events/EventType)
   #(swap! app-state assoc-in [:socket-popup :visible] false)))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (listen-for-window-click)
  (hist-keys/bind-keys)
  (mount-components))
