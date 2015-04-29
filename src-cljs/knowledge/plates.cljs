(ns knowledge.plates
  (:require
   [cljs-uuid-utils.core :as uuid]))

(def untitled-counter (atom {}))

(defn untitled
  [type]
  (str "Untitled " (name type) " " (get (swap! untitled-counter update type inc) type)))


(defn markdown
  [app-state]
  (fn [app-state path state]
    [:div "Neuken?!"]))

(defn fuck
  [app-state]
  (fn [app-state path state]
    [:div "Fuck you?!"]))

(def all-types
  [{:title "text"
    :type :text
    :fn markdown
    :group-title "standard"
    :icon "mdi-action-subject"}
   {:title "fuck"
    :type :fuck
    :fn fuck
    :group-title "standard"
    :icon "mdi-action-store"}
   ])

(defn find-type
  [type]
  (first (filter #(= type (:type %)) all-types)))

(defn new-plate
  [type title]
  (let [new-title (or title (untitled type))]
    {:plates {}
     :type type
     :title new-title
     :fn (:fn (find-type type))
     :state {}}))

(defn add-plate
  [app-state path type]
  (let [new-id (uuid/make-random-squuid)
        new-path (into path [:plates new-id])]
    (swap! app-state assoc-in new-path
           (new-plate type nil)
           )))
