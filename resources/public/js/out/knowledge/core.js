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
knowledge.core.new_plate = (function knowledge$core$new_plate(type){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"plates","plates",358109965),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"title","title",636505583),"Foobar",new cljs.core.Keyword(null,"accepts","accepts",1429714104),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"provides","provides",-1634397992),cljs.core.PersistentVector.EMPTY], null);
});
knowledge.core.fill_socket = (function knowledge$core$fill_socket(path,type){
var new_id = cljs_uuid_utils.core.make_random_squuid.call(null);
var new_path = cljs.core.into.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plates","plates",358109965),new_id], null));
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.assoc_in,new_path,knowledge.core.new_plate.call(null,type));
});
knowledge.core.socket_button = (function knowledge$core$socket_button(path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-flat.waves-effect.waves-teal","a.btn-flat.waves-effect.waves-teal",-1413370250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#343434"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return knowledge.core.fill_socket.call(null,path,null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi-content-add","i.mdi-content-add",-22739464)], null)], null);
});
knowledge.core.depth__GT_class = (function knowledge$core$depth__GT_class(depth){
if((depth > (2))){
return [cljs.core.str("grey.lighten-"),cljs.core.str(((7) - (depth / (2))))].join('');
} else {
return null;
}
});
knowledge.core.child_plates = (function knowledge$core$child_plates(path){
cljs.core.println.call(null,"child-plates",path);

var iter__29127__auto__ = (function knowledge$core$child_plates_$_iter__31157(s__31158){
return (new cljs.core.LazySeq(null,(function (){
var s__31158__$1 = s__31158;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31158__$1);
if(temp__4126__auto__){
var s__31158__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31158__$2)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,s__31158__$2);
var size__29126__auto__ = cljs.core.count.call(null,c__29125__auto__);
var b__31160 = cljs.core.chunk_buffer.call(null,size__29126__auto__);
if((function (){var i__31159 = (0);
while(true){
if((i__31159 < size__29126__auto__)){
var vec__31163 = cljs.core._nth.call(null,c__29125__auto__,i__31159);
var id = cljs.core.nth.call(null,vec__31163,(0),null);
var state = cljs.core.nth.call(null,vec__31163,(1),null);
cljs.core.chunk_append.call(null,b__31160,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__31165 = (i__31159 + (1));
i__31159 = G__31165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31160),knowledge$core$child_plates_$_iter__31157.call(null,cljs.core.chunk_rest.call(null,s__31158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31160),null);
}
} else {
var vec__31164 = cljs.core.first.call(null,s__31158__$2);
var id = cljs.core.nth.call(null,vec__31164,(0),null);
var state = cljs.core.nth.call(null,vec__31164,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),knowledge$core$child_plates_$_iter__31157.call(null,cljs.core.rest.call(null,s__31158__$2)));
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
knowledge.core.plate = (function knowledge$core$plate(path,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("div.gray.card."),cljs.core.str(knowledge.core.depth__GT_class.call(null,cljs.core.count.call(null,path)))].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state)], null),knowledge.core.child_plates.call(null,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"plates","plates",358109965)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-action.right-align","div.card-action.right-align",1748854680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket_button,path], null)], null)], null)], null)], null);
});
knowledge.core.app = (function knowledge$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Welcome to knowledge"], null),knowledge.core.child_plates.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plates","plates",358109965)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket_button,cljs.core.PersistentVector.EMPTY], null)], null);
});
knowledge.core.mount_components = (function knowledge$core$mount_components(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.app], null),document.getElementById("app"));
});
knowledge.core.init_BANG_ = (function knowledge$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

return knowledge.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map