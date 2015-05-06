(ns knowledge.plates
  (:require
   [knowledge.plates.markdown :as markdown]
   [knowledge.plates.base.text :as text]
   [knowledge.plates.study-list :as study-list]
   [reagent.core :as reagent :refer [cursor]]
   [cljs-uuid-utils.core :as uuid]))

(def untitled-counter (atom {}))

(defn untitled
  [type]
  (str "Untitled " (name type) " "
       (get (swap! untitled-counter update type inc) type)))

(def default-types
  [::text/text study-list/t])

;; TODO Fix this mess, pity you can't use vars in ClojureScript
;; Because, then you could just traverse the descendants (descendants :knowledge.plates.base/base)
(def all
  {markdown/t   [markdown/plate   markdown/builder]
   study-list/t [study-list/plate study-list/builder]})
;; END TODO

(defn new-plate
  [type title]
  (let [new-title (or title (untitled type))
        [plate builder] (get all type)
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
  (second (get all type)))

(defn set-title!
  [title-curr title]
  (reset! title-curr title))

(defn title
  [app-state path]
  (cursor app-state (into path [:title])))
