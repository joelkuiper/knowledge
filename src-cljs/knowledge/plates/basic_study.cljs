(ns knowledge.plates.basic-study
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [knowledge.plates.base.study :as study]))


(defn builder [app-state path state]
  (add-watch state :plates (fn [e] (print e)))
  (fn [app-state path state] [:span "yes"]))

(def t ::basic-study)

(derive t ::study/study)
(def plate
  {:sockets :none
   :type t
   :name "study"
   :group-title "studies"
   :children-above? false
   :icon "mdi-social-school"})
