(ns knowledge.util
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]])
  (:require
   [cljs.core.async :refer [chan close!]]))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))


(defn dangerous
  ([comp content]
   (dangerous comp nil content))
  ([comp props content]
   [comp (assoc props :dangerouslySetInnerHTML {:__html content})]))

(defn toggle
  [bool]
  ;; We treat nil as truthy
  (if (nil? bool) false (not bool)))

(defn wait-a-bit [& funs]
  "Wait a bit between calling functions.
  Starts with the first call, then waits in between"
  (go
    (doseq [fun funs]
      (fun)
      (<! (timeout 150)))))
