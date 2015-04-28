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

(def app-state (atom {}))

(defn new-plate
  [type]
  {:plates {}
   :type type
   :title "Foobar"
   :accepts []
   :provides []})

(defn fill-socket
  [path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (into path [:plates new-id])]
    (swap! app-state assoc-in new-path (new-plate type))))

(defn socket-button
  [path]
  [:a.btn-flat.waves-effect.waves-teal
   {:style {:color "#343434"}
    :on-click #(fill-socket path nil)}
   [:i.mdi-content-add]])

(defn depth->class
  [depth]
  (when (> depth 2)
    (str "grey.lighten-" (- 7 (/ depth 2)))))

(declare plate)
(defn child-plates
  [path]
  (println "child-plates" path)
  (for [[id state] (get-in @app-state path)]
    ^{:key id} [plate (conj path id) state]))

(defn plate
  [path state]
  [:div.row
   [:div.col.s12
    [(str "div.gray.card." (depth->class (count path)))
     [:div.card-content
      [:h6 (:title state)]
      (child-plates (conj path :plates))]
     [:div.card-action.right-align [socket-button path]]]]])

(defn app []
  [:div.row
   [:div.col.s12
    [:h4 "Welcome to knowledge"]
    (child-plates [:plates])]
   [socket-button []]])

(defn mount-components []
  (reagent/render-component [app] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (mount-components))
