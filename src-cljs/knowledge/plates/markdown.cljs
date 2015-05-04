(ns knowledge.plates.markdown
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [knowledge.util :as util]
   [markdown.core :refer [md->html]]))

(defonce seen-before? (clojure.core/atom {}))

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


(defn build
  [app-state path curr]
  (let [text (cursor curr [:state :text])
        first? (get-in @curr [:state :first] false)
        is-seen-before? (contains? @seen-before? path)
        local-state (atom {:text @text
                           :show-edit? (and (not first?) (not is-seen-before?))})
        save! #(reset! text %)
        toggle-edit! (fn [] (swap! local-state update-in [:show-edit?] util/toggle) nil)]
    (swap! seen-before? assoc path true)
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
   :name "text"
   :type :text
   :group-title "standard"
   :icon "mdi-editor-format-size"})
