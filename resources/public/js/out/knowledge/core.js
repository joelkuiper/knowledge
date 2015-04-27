// Compiled by ClojureScript 0.0-3196 {}
goog.provide('knowledge.core');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('clojure.zip');
goog.require('reagent.session');
goog.require('reagent_forms.core');
cljs.core.enable_console_print_BANG_.call(null);
knowledge.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
knowledge.core.fill_socket = (function knowledge$core$fill_socket(path,type){
var new_id = cljs_uuid_utils.core.make_random_squuid.call(null);
var new_path = cljs.core.conj.call(null,path,new_id);
cljs.core.println.call(null,new_path);

return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.assoc_in,new_path,cljs.core.PersistentArrayMap.EMPTY);
});
knowledge.core.socket_button = (function knowledge$core$socket_button(path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-flat.waves-effect.waves","a.btn-flat.waves-effect.waves",-1815255157),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return knowledge.core.fill_socket.call(null,path,null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi-content-add","i.mdi-content-add",-22739464)], null)], null);
});
knowledge.core.depth__GT_class = (function knowledge$core$depth__GT_class(depth){
if(cljs.core._EQ_.call(null,depth,(0))){
return null;
} else {
return [cljs.core.str("grey.lighten-"),cljs.core.str(((6) - depth))].join('');
}
});
knowledge.core.child_plates = (function knowledge$core$child_plates(path){
var iter__29127__auto__ = (function knowledge$core$child_plates_$_iter__31419(s__31420){
return (new cljs.core.LazySeq(null,(function (){
var s__31420__$1 = s__31420;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31420__$1);
if(temp__4126__auto__){
var s__31420__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31420__$2)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,s__31420__$2);
var size__29126__auto__ = cljs.core.count.call(null,c__29125__auto__);
var b__31422 = cljs.core.chunk_buffer.call(null,size__29126__auto__);
if((function (){var i__31421 = (0);
while(true){
if((i__31421 < size__29126__auto__)){
var vec__31427 = cljs.core._nth.call(null,c__29125__auto__,i__31421);
var id = cljs.core.nth.call(null,vec__31427,(0),null);
var map__31428 = cljs.core.nth.call(null,vec__31427,(1),null);
var map__31428__$1 = ((cljs.core.seq_QMARK_.call(null,map__31428))?cljs.core.apply.call(null,cljs.core.hash_map,map__31428):map__31428);
var type = cljs.core.get.call(null,map__31428__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var plates = cljs.core.get.call(null,map__31428__$1,new cljs.core.Keyword(null,"plates","plates",358109965));
cljs.core.chunk_append.call(null,b__31422,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),type,plates], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__31431 = (i__31421 + (1));
i__31421 = G__31431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31422),knowledge$core$child_plates_$_iter__31419.call(null,cljs.core.chunk_rest.call(null,s__31420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31422),null);
}
} else {
var vec__31429 = cljs.core.first.call(null,s__31420__$2);
var id = cljs.core.nth.call(null,vec__31429,(0),null);
var map__31430 = cljs.core.nth.call(null,vec__31429,(1),null);
var map__31430__$1 = ((cljs.core.seq_QMARK_.call(null,map__31430))?cljs.core.apply.call(null,cljs.core.hash_map,map__31430):map__31430);
var type = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var plates = cljs.core.get.call(null,map__31430__$1,new cljs.core.Keyword(null,"plates","plates",358109965));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),type,plates], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),knowledge$core$child_plates_$_iter__31419.call(null,cljs.core.rest.call(null,s__31420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29127__auto__.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,knowledge.core.app_state),path));
});
knowledge.core.plate = (function knowledge$core$plate(path,type,plates){
cljs.core.println.call(null,path);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("div.gray.card."),cljs.core.str(knowledge.core.depth__GT_class.call(null,cljs.core.count.call(null,path)))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),knowledge.core.child_plates.call(null,path)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-action.right-align","div.card-action.right-align",1748854680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket_button,path], null)], null)], null)], null)], null);
});
knowledge.core.app = (function knowledge$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Welcome to knowledge"], null),knowledge.core.child_plates.call(null,cljs.core.PersistentVector.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket_button,cljs.core.PersistentVector.EMPTY], null)], null);
});
knowledge.core.debug = (function knowledge$core$debug(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),[cljs.core.str(cljs.core.deref.call(null,knowledge.core.app_state))].join('')], null);
});
knowledge.core.mount_components = (function knowledge$core$mount_components(){
if(cljs.core.truth_(development)){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.debug], null),document.getElementById("debug"));
} else {
}

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.app], null),document.getElementById("app"));
});
knowledge.core.init_BANG_ = (function knowledge$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return knowledge.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map