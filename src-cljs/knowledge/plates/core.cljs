(ns knowledge.plates.core
  (:require
   [knowledge.plates.markdown :as markdown]
   [knowledge.plates.basic-study :as basic-study]
   [knowledge.plates.study-list :as study-list]))

(def default-plates
  [:knowledge.plates.base.text/text
   study-list/t])

(def all-plates
  {markdown/t      [markdown/plate   markdown/builder]
   basic-study/t   [basic-study/plate   basic-study/builder]
   study-list/t    [study-list/plate study-list/builder]})
