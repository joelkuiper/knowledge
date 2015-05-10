(ns knowledge.plates.study-list
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require
   [reagent.core :as reagent :refer [atom cursor]]
   [cljs.core.async :as async
    :refer [<! >! chan close! sliding-buffer put! alts!]]
   [knowledge.plates.base.study :as study]
   [knowledge.plates.base.base :as base]))

(enable-console-print!)

(def select-child-states
  (comp (map :plates)
        (map vals)
        (map (fn [e] (map :state e)))))

(defn debug
  [studies]
  (apply + (map :test studies)))

(defn builder
  [app-state path state]
  (let [initial {:studies (transduce select-child-states concat [@state])}
        local (atom initial)
        c (chan 1 select-child-states)]
    (go-loop [new (<! c)]
      (swap! local assoc :studies new)
      (recur (<! c)))
    (reagent/create-class
     {:component-will-unmount
      (fn [this]
        (remove-watch state :plates))
      :component-did-mount
      (fn [this]
        (add-watch state ::plates
                   (fn [_ _ old new]
                     (when new (put! c new)))))
      :reagent-render
      (fn [app-state path state]
        [:span (debug (:studies @local))])})))


(def t ::study-list)
(derive t ::base/base)
(def plate
  {:sockets [::study/study]
   :type t
   :name "study list"
   :group-title "lists"
   :children-above? true
   :icon "mdi-editor-format-list-bulleted"})
