(ns knowledge.core
  (:require
   [knowledge.popup :as popup]
   [knowledge.plates :as plates]
   [reagent.core :as reagent :refer [atom]]
   [secretary.core :as secretary]
   [reagent.session :as session]
   [reagent-forms.core :refer [bind-fields]]
   [goog.dom :as dom]
   [goog.events :as events]
   [cljs-uuid-utils.core :as uuid]
   [ajax.core :refer [GET POST]]))

(def default-type :text)

(def default-state
  {:socket-popup {:visible false}
   :plates
   {(uuid/make-random-squuid)
    (plates/new-plate default-type "Welcome to knowledge")}})

(def app-state (atom default-state))

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
  (fn [path]
    [(str "i.socket" (when (active-socket? path) ".active"))
     {:on-click
      (fn [e]
        (let [element (.-target e)
              client-rect (.getBoundingClientRect element)
              offset (calc-offset client-rect)
              new-popup {:path path
                         :visible (not (popup-visible?))
                         :offset offset}]
          (swap! app-state assoc :socket-popup new-popup)))}]))

(defn depth->class
  [depth]
  (when (> depth 2)
    (str "grey.lighten-" (max 2 (- 7 (/ depth 2))))))

(declare plate)
(defn child-plates
  [path]
  (for [[id state] (get-in @app-state path)]
    ^{:key id} [plate (conj path id) state]))

(def title-edit
  (with-meta
    (fn [title edit-title! hide-edit-title!]
      (let [stop (fn [] (edit-title! title) (hide-edit-title!))
            save! #(edit-title! (-> % .-target .-value))]
        (fn [title edit-title! show-edit-title!]
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

(defn plate-header
  [title path collapsed?]
  (let [collapse! (fn [] (swap! collapsed? not) nil)
        edit-title! (fn [value]
                      (swap! app-state assoc-in (into path [:title]) value))
        show-edit-title? (atom false)
        toggle-edit-title! (fn [] (swap! show-edit-title? not) nil)
        hide-edit-title! (fn [] (reset! show-edit-title? false) nil)
        delete! (fn [] (swap! app-state update-in (pop path) dissoc (last path)))]
    (fn [title path collapsed?]
      [:h6
       [(str "i.mdi-editor-mode-edit.edit-title"
             (when @show-edit-title? ".teal-text"))
        {:on-click toggle-edit-title!}]
       (if @show-edit-title?
         [title-edit title edit-title! hide-edit-title!]
         [:span title])
       [:div {:style {:float "right"}}
        [:i.mdi-navigation-close.delete
         {:on-click delete!}]
        [(if @collapsed?
           :i.mdi-navigation-expand-more
           :i.mdi-navigation-expand-less)
         {:on-click collapse!}]]])))

(defn plate
  [path state]
  (let [collapsed? (atom false)
        class-name (str "div.gray.card.plate."
                        (depth->class (count path)))]
    (fn [path state]
      [:div.row
       [:div.col.s12
        [(keyword class-name)
         [plate-header (:title state) path collapsed?]
         [(keyword (str "div.card-content" (when @collapsed? ".collapsed")))
          [(:fn state) app-state path state]
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

(defn listen-for-window-click
  []
  (events/listen
   (dom/getWindow)
   (.-MOUSEDOWN events/EventType)
   #(swap! app-state assoc-in [:socket-popup :visible] false)))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (listen-for-window-click)
  (mount-components))
