(ns knowledge.plates
  (:require
   [knowledge.plates.core :refer [all-plates default-plates]]
   [reagent.core :as reagent :refer [cursor]]
   [cljs-uuid-utils.core :as uuid]))

(def untitled-counter (atom {}))

(defn untitled
  [type]
  (str "Untitled " (name type) " "
       (get (swap! untitled-counter update type inc) type)))

(defn new-plate
  [type title]
  (let [new-title (or title (untitled type))
        [plate builder] (get all-plates type)
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

(defn builder
  [type]
  (second (get all-plates type)))

(defn set-title!
  [title-curr title]
  (reset! title-curr title))

(defn title
  [app-state path]
  (cursor app-state (into path [:title])))
