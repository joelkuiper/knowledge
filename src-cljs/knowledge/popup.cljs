(ns knowledge.popup
  (:require
   [knowledge.plates :as plates]
   [reagent.core :as reagent :refer [atom]]))

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

(defn add-to-plate
  [app-state path type]
  (plates/add-plate app-state path type)
  (println type)
  (swap! app-state assoc-in [:socket-popup :visible] false))

(defn- types
  [app-state path]
  [:ul
   (for [[title group] (group-by :group-title plates/all-types)]
     ^{:key title}
     [:li.group title
      [:div.types
       (for [plate group]
         ^{:key (:title plate)}
         [:div.type {:on-click
                     (fn [] (add-to-plate app-state path (:type plate)))}
          [(str "i." (:icon plate))]
          [:br]
          [:span (:title plate)]])]])])

(defn popup
  [app-state]
  (reagent/create-class
   {:reagent-render
    (fn [app-state]
      (let [visible? (get-in @app-state [:socket-popup :visible])
            offset (get-in @app-state [:socket-popup :offset])
            path (get-in @app-state [:socket-popup :path])
            position {:position "absolute"
                      :top (max 0 (- (:top offset) (/ 320 2)))
                      :left (+ 25 (:left offset))}]
        [:div {:id "popup"
               :style position
               :on-mouse-down #(.stopPropagation %)}
         [css-transition-group {:transition-name "zoom"}
          (when visible?
            [:div.socket-popup.animated.zoom-in
             [types app-state path]])]]))}))
