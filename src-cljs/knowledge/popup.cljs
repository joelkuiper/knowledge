(ns knowledge.popup
  (:require
   [knowledge.plates :as plates]
   [knowledge.util :as util]
   [reagent.core :as reagent :refer [atom]]))

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

(def state (atom {}))

(defn visible? [] (:visible @state))

(defn calc-offset
  [rect]
  (let [container-x (.-pageXOffset js/window)
        container-y (.-pageYOffset js/window)]
    {:top  (+ (.-top rect) container-y)
     :left (+ (.-left rect) container-x)}))

(defn toggle-popup!
  [path rect]
  (let [offset (calc-offset rect)
        new-popup {:path path
                   :visible (util/toggle (visible?))
                   :offset offset}]
    (reset! state new-popup)))

(defn hide! []
  (swap! state assoc :visible false))

(defn- add-to-plate
  [app-state path type]
  (do
    (swap! state assoc :visible false)
    (plates/add-plate app-state path type)))

(defn- with-descendants
  [type]
  (into (descendants type) [type]))

(defn- filtered-plates
  [app-state path]
  (let [sockets (get-in @app-state (into path [:sockets]))
        types #(mapcat with-descendants %)
        filter-fn (if (nil? sockets)
                    (fn [el] (some #{(:type el)} (types plates/default-types)))
                    (fn [el] (some #{(:type el)} (types sockets))))]
    (print (types plates/default-types))
    (group-by :group-title
              (filter filter-fn (map first (vals plates/all))))))

(defn- types
  [app-state path]
  [:ul
   (for [[title group] (filtered-plates app-state path)]
     ^{:key title}
     [:li.group title
      [:div.types
       (for [plate group]
         ^{:key (:type plate)}
         [:div.type
          {:on-click
           (fn [] (add-to-plate app-state path (:type plate)))}
          [(str "i." (:icon plate))]
          [:br]
          [:span (:name plate)]])]])])

(defn popup
  [app-state]
  (reagent/create-class
   {:reagent-render
    (fn [app-state]
      (let [popup-state @state
            visible? (:visible popup-state)
            offset (:offset popup-state)
            path (:path popup-state)
            height 280
            style {:position "absolute"
                   :top (max 0 (- (:top offset) (/ height 2)))
                   :left (+ 25 (:left offset))}]
        [:div#popup
         {:style style
          :on-mouse-down #(.stopPropagation %)}
         [css-transition-group {:transition-name "zoom"}
          (when visible?
            [:div.socket-popup.animated.zoom-in
             {:key "popup"
              :style {:height height}}
             [types app-state path]])]]))}))
