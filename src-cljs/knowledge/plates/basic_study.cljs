(ns knowledge.plates.basic-study
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [reagent-forms.core :refer [bind-fields]]
   [knowledge.plates.base.study :as study]))


(def form-template
  [:div [:input {:field :numeric :id :test}]])

(defn builder [app-state path state]
  (let [curr (cursor state [:state])]
    (fn [app-state path state]
      [:div
       [bind-fields form-template curr]])))

(def t ::basic-study)

(derive t ::study/study)
(def plate
  {:sockets :none
   :type t
   :state {}
   :name "study"
   :group-title "studies"
   :children-above? false
   :icon "mdi-social-school"})
