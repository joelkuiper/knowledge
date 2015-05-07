(ns knowledge.plates.core
  (:require [knowledge.plates.markdown :as markdown]
            [knowledge.plates.base.text :as text]
            [knowledge.plates.study-list :as study-list]))

(def default-plates
  [::text/text study-list/t])

(def all-plates
  {markdown/t   [markdown/plate   markdown/builder]
   study-list/t [study-list/plate study-list/builder]})
