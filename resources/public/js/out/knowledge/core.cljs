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

(defn fill-socket
  [path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (conj path new-id)]
    (println new-path)
    (swap! app-state assoc-in
           new-path
           {})))

(defn socket-button
  [path]
  [:a.btn-flat.waves-effect.waves-teal
   {:style {:color "#343434"}
    :on-click #(fill-socket path nil)}
   [:i.mdi-content-add]])

(defn depth->class
  [depth]
  (when-not (= depth 0)
    (str "grey.lighten-" (- 6 depth))))

(declare plate)
(defn child-plates
  [path]
  (for [[id {:keys [plates type]}] (get-in @app-state path)]
    ^{:key id} [plate (conj path id) type plates]))

(defn plate
  [path type plates]
  (println path)
  [:div.row
   [:div.col.s12
    [(str "div.gray.card." (depth->class (count path)))
     [:div.card-content (child-plates path)]
     [:div.card-action.right-align [socket-button path]]]]])

(defn app
  []
  [:div.row
   [:div.col.s12
    [:h4 "Welcome to knowledge"]
    (child-plates [])
    ]
   [socket-button []]])

(defn debug []
  [:pre (str @app-state)])

(defn mount-components []
  (when js/development
    (reagent/render-component [debug] (.getElementById js/document "debug")))
  (reagent/render-component [app] (.getElementById js/document "app")))

(defn init! []
  (secretary/set-config! :prefix "#")
  (session/put! :page :home)
  (mount-components))
