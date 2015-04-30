(ns knowledge.util
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]])
  (:require
   [cljs.core.async :refer [chan close!]]))

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(defn wait-a-bit [& funs]
  "Waits 100 msec between calling functions"
  (go
    (doseq [fun funs]
      (fun)
      (<! (timeout 100)))))
