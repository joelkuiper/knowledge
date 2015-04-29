(ns knowledge.plates
  (:require
   [cljs-uuid-utils.core :as uuid]))

(def untitled-counter (atom {}))

(defn untitled
  [type]
  (str "Untitled " (name type) " " (get (swap! untitled-counter update type inc) type)))

(defn new-plate
  [type title]
  (let [new-title (or title (untitled type))]
    {:plates {}
     :type type
     :title new-title
     :state {}}))

(defn add-plate
  [app-state path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (into path [:plates new-id])]
    (swap! app-state assoc-in new-path (new-plate type nil))))

(def all-types
  [{:title "text"
    :type :text
    :group-title "standard"
    :icon "mdi-action-subject"}
   ])
