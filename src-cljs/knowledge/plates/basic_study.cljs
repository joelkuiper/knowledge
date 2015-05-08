(ns knowledge.plates.basic-study
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [knowledge.plates.base.study :as study]))


(defn builder [app-state path state]
  (fn [app-state path state]

    [:span
     #(swap! state assoc :state {1 "foobar"})
     "yes"
     ]))

(def t ::basic-study)

(derive t ::study/study)
(def plate
  {:sockets :none
   :type t
   :state {"1" "2"}
   :name "study"
   :group-title "studies"
   :children-above? false
   :icon "mdi-social-school"})
