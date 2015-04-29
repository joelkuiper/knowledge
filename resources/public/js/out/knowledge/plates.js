// Compiled by ClojureScript 0.0-3196 {}
goog.provide('knowledge.plates');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
knowledge.plates.untitled_counter = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
knowledge.plates.untitled = (function knowledge$plates$untitled(type){
return [cljs.core.str("Untitled "),cljs.core.str(cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,knowledge.plates.untitled_counter,cljs.core.update,type,cljs.core.inc),type))].join('');
});
knowledge.plates.new_plate = (function knowledge$plates$new_plate(type,title){
var new_title = (function (){var or__28862__auto__ = title;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return knowledge.plates.untitled.call(null,type);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"plates","plates",358109965),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"title","title",636505583),new_title,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY], null);
});
knowledge.plates.add_plate = (function knowledge$plates$add_plate(app_state,path,type){
var new_id = cljs_uuid_utils.core.make_random_squuid.call(null);
var new_path = cljs.core.into.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plates","plates",358109965),new_id], null));
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new_path,knowledge.plates.new_plate.call(null,type,null));
});
knowledge.plates.all_types = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"text",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"group-title","group-title",392188964),"standard",new cljs.core.Keyword(null,"icon","icon",1679606541),"mdi-action-subject"], null)], null);

//# sourceMappingURL=plates.js.map