(ns knowledge.plates
  (:require
   [knowledge.plates.markdown :as markdown]
   [cljs-uuid-utils.core :as uuid]))

(def untitled-counter (atom {}))

(defn untitled
  [type]
  (str "Untitled " (name type) " " (get (swap! untitled-counter update type inc) type)))

(def all-types
  [markdown/plate])

(defn find-type
  [type]
  (first (filter #(= type (:type %)) all-types)))

(defn new-plate
  [type title]
  (let [new-title (or title (untitled type))
        plate (find-type type)
        base {:title new-title
              :plates {}
              :state {}}]
    (merge base plate)))

(defn add-plate
  [app-state path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (into path [:plates new-id])]
    (swap! app-state assoc-in new-path
           (new-plate type nil))))
