(ns knowledge.plates.study-list
  (:require [knowledge.plates.base :as base]))

(defn builder [app-state path state]
  (fn [app-state path state] nil))

(def t ::study-list)

(derive t ::base/base)
(def plate
  {:sockets [::study]
   :type t
   :name "study list"
   :group-title "lists"
   :icon "mdi-editor-format-list-bulleted"})
