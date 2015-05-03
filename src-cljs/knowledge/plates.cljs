(ns knowledge.plates
  (:require
   [knowledge.plates.markdown :as markdown]
   [reagent.core :as reagent :refer [cursor]]
   [knowledge.plates.study-list :as study-list]
   [cljs-uuid-utils.core :as uuid]))

(def untitled-counter (atom {}))

(defn untitled
  [type]
  (str "Untitled " (name type) " "
       (get (swap! untitled-counter update type inc) type)))

(def default-types
  [:text :study-list])

(def all
  [markdown/plate
   study-list/plate])

(defn find-type
  [type]
  (first (filter #(= type (:type %)) all)))

(defn new-plate
  [type title]
  (let [new-title (or title (untitled type))
        plate (find-type type)
        base {:title new-title
              :plates {}
              :state {}}]
    (merge base plate)))

(defn delete-plate
  [app-state path]
  (swap! app-state update-in (pop path) dissoc (last path)))

(defn add-plate
  [app-state path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (into path [:plates new-id])]
    (swap! app-state assoc-in new-path
           (new-plate type nil))))

(defn set-title!
  [title-curr title]
  (reset! title-curr title))

(defn title
  [app-state path]
  (cursor app-state (into path [:title])))
