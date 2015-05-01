(ns knowledge.plates.study-list)

(defn- plate-fn
  [app-state path state]
  [:div ""])

(def plate
  {:accepts [:study]
   :provides {}
   :type :study-list
   :name "study list"
   :fn plate-fn
   :group-title "lists"
   :icon "mdi-editor-format-list-bulleted"})
