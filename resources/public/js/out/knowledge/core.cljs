(ns knowledge.core
  (:require
   [clojure.zip :as z]
   [reagent.core :as reagent :refer [atom]]
   [secretary.core :as secretary]
   [reagent.session :as session]
   [reagent-forms.core :refer [bind-fields]]
   [cljs-uuid-utils.core :as uuid]
   [ajax.core :refer [GET POST]]))

(enable-console-print!)

(defn new-plate
  [type title]
  {:plates {}
   :type type
   :title (or title type)
   :state {}})

(def default-state
  {:plates
   {(uuid/make-random-squuid)
    (new-plate nil "Welcome to knowledge")}})

(def default-type "foobar")

(def app-state (atom default-state))

(defn add-plate
  [path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (into path [:plates new-id])]
    (swap! app-state assoc-in new-path (new-plate type nil))))

(defn socket-button
  [path]
  [:a.btn-flat.waves-effect.waves-teal
   {:style {:color "#343434"}
    :on-click #(add-plate path default-type)}
   [:i.mdi-content-add]])

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
    (fn [title edit-title! show-edit-title!]
      (let [stop (fn [] (edit-title! title) (show-edit-title!))
            save! #(edit-title! (-> % .-target .-value))]
        (fn [title edit-title! show-edit-title!]
          [:input.title-edit
           {:type "text"
            :value title
            :on-key-down #(case (.-which %)
                            13 (do (save! %) (show-edit-title!))
                            27 (stop)
                            nil)
            :on-blur #(do (save! %) (show-edit-title!))
            :on-change save!}])))
    {:component-did-mount #(.focus (reagent/dom-node %))}))

(defn plate-header
  [title path collapsed?]
  (let [collapse! (fn [] (swap! collapsed? not) nil)
        edit-title! (fn [value]
                      (swap! app-state assoc-in (into path [:title]) value))
        show-edit-title? (atom false)
        show-edit-title! (fn [] (swap! show-edit-title? not) nil)]
    (fn [title path collapsed?]
      [:h6
       [(str "i.mdi-editor-mode-edit.edit-title"
             (when @show-edit-title? ".teal-text"))
        {:on-click show-edit-title!}]
       (if @show-edit-title?
         [title-edit title edit-title! show-edit-title!]
         [:span title])
       [(if @collapsed?
          :i.mdi-navigation-expand-more
          :i.mdi-navigation-expand-less)
        {:on-click collapse!
         :style {:float "right"}}]])))

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
          (child-plates (conj path :plates))
          [:br]
          [socket-button path]]]]])))

(defn app []
  [:div.row
   [:div.col.s12
    (child-plates [:plates])]
   [socket-button []]])

(defn mount-components []
  (reagent/render-component [app] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (mount-components))
