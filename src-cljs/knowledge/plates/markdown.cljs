(ns knowledge.plates.markdown
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [knowledge.util :as util]
   [markdown.core :refer [md->html]]))

(def text-field
  (with-meta
    (fn [id local-state text]
      [:textarea.materialize-textarea
       {:id id
        :style {:padding "0px"
                :height "8em"
                :font-size "13.5px"
                :overflow-y "auto"}
        :on-change #(swap! local-state assoc :text (-> % .-target .-value))}
       text])
    {:component-did-mount #(.focus (reagent/dom-node %))}))


(defn- plate-fn
  [app-state path curr]
  (let [text (cursor curr [:state :text])
        local-state (atom {:text @text
                           :show-edit? (if @text false true)})
        save! #(reset! text %)
        toggle-edit! (fn [] (swap! local-state update-in [:show-edit?] util/toggle) nil)]
    (fn [app-state path curr]
      (let [show-edit? (:show-edit? @local-state)
            id (clojure.string/join path)]
        [:div.row
         [:div.col.s11
          (if show-edit?
            [:div
             [text-field id local-state @text]
             [:a.btn.waves-effect.waves-light
              {:on-click #(do (save! (:text @local-state)) (toggle-edit!))} "Save"]
             [:span " "]
             [:a.btn.red.waves-effect.waves-light
              {:on-click #(do (save! @text) (toggle-edit!))}
              "Cancel"]]
            [util/dangerous :div (md->html (or @text "*Edit me!*"))])]
         [:div.col.s1
          [(str "i.mdi-editor-mode-edit.edit-title"
                (when show-edit? ".teal-text"))
           {:on-click toggle-edit! :style {:float "right"}}]]]))))

(def plate
  {:accepts [:text :study-list]
   :provides {}
   :name "text"
   :type :text
   :fn plate-fn
   :group-title "standard"
   :icon "mdi-editor-format-size"})
