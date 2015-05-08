(ns knowledge.plates.study-list
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [knowledge.plates.base.study :as study]
   [knowledge.plates.base.base :as base]))


(defn builder [app-state path state]
  (add-watch state :plates (fn [key ref old new] (print new)))
  (fn [app-state path state] nil))

(def t ::study-list)

(derive t ::base/base)
(def plate
  {:sockets [::study/study]
   :type t
   :name "study list"
   :group-title "lists"
   :children-above? true
   :icon "mdi-editor-format-list-bulleted"})
