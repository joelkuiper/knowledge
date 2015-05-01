(ns knowledge.plates.markdown
  (:require
   [reagent.core :as reagent :refer [atom]]
   [knowledge.util :as util]
   [markdown.core :refer [md->html]]))



(def text-field
  (with-meta
    (fn [id form text]
      [:textarea.materialize-textarea
       {:id id
        :style {:padding "0px"
                :height "8em"
                :font-size "13.5px"
                :overflow-y "auto"}
        :on-change #(swap! form assoc :text (-> % .-target .-value))}
       text])
    {:component-did-mount #(.focus (reagent/dom-node %))}))


(defn- plate-fn
  [app-state path state]
  (let [form (atom {})
        save! #(swap! app-state assoc-in
                      (into path [:state :text]) %)
        toggle-edit! (fn [] (swap! app-state update-in
                                  (into path [:state :show-edit?]) util/toggle) nil)]
    (fn [app-state path state]
      (let [text (get-in @app-state (into path [:state :text]))
            show-edit? (get-in @app-state (into path [:state :show-edit?]) true)
            id (clojure.string/join path)]
        [:div.row
         [:div.col.s11
          (if show-edit?
            [:div
             [text-field id form text]
             [:a.btn.waves-effect.waves-light
              {:on-click (fn [] (do (save! (:text @form)) (toggle-edit!)))} "Save"]
             [:span " "]
             [:a.btn.red.waves-effect.waves-light
              {:on-click (fn [] (do (save! (:text state)) (toggle-edit!)))}
              "Cancel"]]
            [util/dangerous :div (md->html (or text "*Edit me!*"))])]
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
