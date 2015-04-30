(ns knowledge.plates.markdown
  (:require
   [reagent.core :as reagent :refer [atom]]
   [markdown.core :refer [md->html]]))


(defn dangerous
  ([comp content]
   (dangerous comp nil content))
  ([comp props content]
   [comp (assoc props :dangerouslySetInnerHTML {:__html content})]))

(defn plate
  [app-state path state]
  (let [form (atom {})
        save! #(swap! app-state assoc-in (into path [:state :text]) %)
        toggle-edit! (fn [] (swap! app-state update-in (into path [:state :show-edit?]) not) nil)]
    (fn [app-state path state]
      (let [text (get-in @app-state (into path [:state :text]))
            show-edit? (get-in @app-state (into path [:state :show-edit?]))
            id (clojure.string/join path)]
        [:div.row
         [:div.col.s11
          (if show-edit?
            [:div
             [:textarea.materialize-textarea
              {:id id
               :style {:width "90%"
                       :height "8em"
                       :overflow-y "auto"}
               :on-change #(swap! form assoc :text (-> % .-target .-value))}
              (:text state)]
             [:a.btn.waves-effect.waves-light
              {:on-click #(do (save! (:text @form)) (toggle-edit!))} "Save"]
             [:span " "]
             [:a.btn.red.waves-effect.waves-light
              {:on-click #(do (toggle-edit!) (save! (:text state)))} "Cancel"]]
            [dangerous :div (md->html (or text "*Edit me!*"))])]
         [:div.col.s1
          [(str "i.mdi-editor-mode-edit.edit-title"
                (when show-edit? ".teal-text"))
           {:on-click toggle-edit! :style {:float "right"}}]]]))))
