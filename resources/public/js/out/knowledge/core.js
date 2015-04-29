// Compiled by ClojureScript 0.0-3196 {}
goog.provide('knowledge.core');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('knowledge.popup');
goog.require('reagent_forms.core');
goog.require('knowledge.plates');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
knowledge.core.default_type = new cljs.core.Keyword(null,"text","text",-1790561697);
knowledge.core.default_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false], null),new cljs.core.Keyword(null,"plates","plates",358109965),new cljs.core.PersistentArrayMap.fromArray([cljs_uuid_utils.core.make_random_squuid.call(null),knowledge.plates.new_plate.call(null,null,"Welcome to knowledge")], true, false)], null);
knowledge.core.app_state = reagent.core.atom.call(null,knowledge.core.default_state);
knowledge.core.popup_visible_QMARK_ = (function knowledge$core$popup_visible_QMARK_(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,knowledge.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null));
});
knowledge.core.active_socket_QMARK_ = (function knowledge$core$active_socket_QMARK_(path){
var socket_popup = new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,knowledge.core.app_state));
var visible_QMARK_ = new cljs.core.Keyword(null,"visible","visible",-1024216805).cljs$core$IFn$_invoke$arity$1(socket_popup);
var popup_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(socket_popup);
var and__28850__auto__ = cljs.core._EQ_.call(null,path,popup_path);
if(and__28850__auto__){
return visible_QMARK_;
} else {
return and__28850__auto__;
}
});
knowledge.core.socket = (function knowledge$core$socket(path){
return (function (path__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i.socket"),cljs.core.str((cljs.core.truth_(knowledge.core.active_socket_QMARK_.call(null,path__$1))?".active":null))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
var element = e.target;
var client_rect = element.getBoundingClientRect();
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),client_rect.top,new cljs.core.Keyword(null,"left","left",-399115937),client_rect.left], null);
var new_popup = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not.call(null,knowledge.core.popup_visible_QMARK_.call(null)),new cljs.core.Keyword(null,"offset","offset",296498311),offset], null);
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new_popup);
})], null)], null);
});
});
knowledge.core.depth__GT_class = (function knowledge$core$depth__GT_class(depth){
if((depth > (2))){
return [cljs.core.str("grey.lighten-"),cljs.core.str((function (){var x__29174__auto__ = (2);
var y__29175__auto__ = ((7) - (depth / (2)));
return ((x__29174__auto__ > y__29175__auto__) ? x__29174__auto__ : y__29175__auto__);
})())].join('');
} else {
return null;
}
});
knowledge.core.child_plates = (function knowledge$core$child_plates(path){
var iter__29616__auto__ = (function knowledge$core$child_plates_$_iter__42115(s__42116){
return (new cljs.core.LazySeq(null,(function (){
var s__42116__$1 = s__42116;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42116__$1);
if(temp__4126__auto__){
var s__42116__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42116__$2)){
var c__29614__auto__ = cljs.core.chunk_first.call(null,s__42116__$2);
var size__29615__auto__ = cljs.core.count.call(null,c__29614__auto__);
var b__42118 = cljs.core.chunk_buffer.call(null,size__29615__auto__);
if((function (){var i__42117 = (0);
while(true){
if((i__42117 < size__29615__auto__)){
var vec__42121 = cljs.core._nth.call(null,c__29614__auto__,i__42117);
var id = cljs.core.nth.call(null,vec__42121,(0),null);
var state = cljs.core.nth.call(null,vec__42121,(1),null);
cljs.core.chunk_append.call(null,b__42118,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__42123 = (i__42117 + (1));
i__42117 = G__42123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42118),knowledge$core$child_plates_$_iter__42115.call(null,cljs.core.chunk_rest.call(null,s__42116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42118),null);
}
} else {
var vec__42122 = cljs.core.first.call(null,s__42116__$2);
var id = cljs.core.nth.call(null,vec__42122,(0),null);
var state = cljs.core.nth.call(null,vec__42122,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),knowledge$core$child_plates_$_iter__42115.call(null,cljs.core.rest.call(null,s__42116__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29616__auto__.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,knowledge.core.app_state),path));
});
knowledge.core.title_edit = cljs.core.with_meta.call(null,(function (title,edit_title_BANG_,hide_edit_title_BANG_){
var stop = (function (){
edit_title_BANG_.call(null,title);

return hide_edit_title_BANG_.call(null);
});
var save_BANG_ = ((function (stop){
return (function (p1__42124_SHARP_){
return edit_title_BANG_.call(null,p1__42124_SHARP_.target.value);
});})(stop))
;
return ((function (stop,save_BANG_){
return (function (title__$1,edit_title_BANG___$1,show_edit_title_BANG_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title-edit","input.title-edit",-1182479795),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),title__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (stop,save_BANG_){
return (function (p1__42125_SHARP_){
var G__42128 = p1__42125_SHARP_.which;
switch (G__42128) {
case (13):
save_BANG_.call(null,p1__42125_SHARP_);

return hide_edit_title_BANG_.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(stop,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (stop,save_BANG_){
return (function (p1__42126_SHARP_){
save_BANG_.call(null,p1__42126_SHARP_);

return hide_edit_title_BANG_.call(null);
});})(stop,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),save_BANG_], null)], null);
});
;})(stop,save_BANG_))
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__42127_SHARP_){
return reagent.core.dom_node.call(null,p1__42127_SHARP_).focus();
})], null));
knowledge.core.plate_header = (function knowledge$core$plate_header(title,path,collapsed_QMARK_){
var collapse_BANG_ = (function (){
cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);

return null;
});
var edit_title_BANG_ = ((function (collapse_BANG_){
return (function (value){
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.assoc_in,cljs.core.into.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null)),value);
});})(collapse_BANG_))
;
var show_edit_title_QMARK_ = reagent.core.atom.call(null,false);
var toggle_edit_title_BANG_ = ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_){
return (function (){
cljs.core.swap_BANG_.call(null,show_edit_title_QMARK_,cljs.core.not);

return null;
});})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_))
;
var hide_edit_title_BANG_ = ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,toggle_edit_title_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,show_edit_title_QMARK_,false);

return null;
});})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,toggle_edit_title_BANG_))
;
var delete_BANG_ = ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,toggle_edit_title_BANG_,hide_edit_title_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.update_in,cljs.core.pop.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
});})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,toggle_edit_title_BANG_,hide_edit_title_BANG_))
;
return ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,toggle_edit_title_BANG_,hide_edit_title_BANG_,delete_BANG_){
return (function (title__$1,path__$1,collapsed_QMARK___$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i.mdi-editor-mode-edit.edit-title"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,show_edit_title_QMARK_))?".teal-text":null))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_edit_title_BANG_], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,show_edit_title_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.title_edit,title__$1,edit_title_BANG_,hide_edit_title_BANG_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title__$1], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi-navigation-close.delete","i.mdi-navigation-close.delete",-1386502712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),delete_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK___$1))?new cljs.core.Keyword(null,"i.mdi-navigation-expand-more","i.mdi-navigation-expand-more",560531563):new cljs.core.Keyword(null,"i.mdi-navigation-expand-less","i.mdi-navigation-expand-less",1971314850)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),collapse_BANG_], null)], null)], null)], null);
});
;})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,toggle_edit_title_BANG_,hide_edit_title_BANG_,delete_BANG_))
});
knowledge.core.plate = (function knowledge$core$plate(path,state){
var collapsed_QMARK_ = reagent.core.atom.call(null,false);
var class_name = [cljs.core.str("div.gray.card.plate."),cljs.core.str(knowledge.core.depth__GT_class.call(null,cljs.core.count.call(null,path)))].join('');
return ((function (collapsed_QMARK_,class_name){
return (function (path__$1,state__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,class_name),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate_header,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state__$1),path__$1,collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.card-content"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?".collapsed":null))].join('')),knowledge.core.child_plates.call(null,cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"plates","plates",358109965))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket,path__$1], null)], null)], null)], null)], null);
});
;})(collapsed_QMARK_,class_name))
});
knowledge.core.app = (function knowledge$core$app(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("div.app.row"),cljs.core.str((cljs.core.truth_(knowledge.core.popup_visible_QMARK_.call(null))?".popup-visible":null))].join(''),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.popup.popup,knowledge.core.app_state], null),knowledge.core.child_plates.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plates","plates",358109965)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket,cljs.core.PersistentVector.EMPTY], null)], null);
});
});
knowledge.core.mount_components = (function knowledge$core$mount_components(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.app], null),document.getElementById("app"));
});
knowledge.core.listen_for_window_click = (function knowledge$core$listen_for_window_click(){
return goog.events.listen(goog.dom.getWindow(),goog.events.EventType.MOUSEDOWN,(function (){
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),false);
}));
});
knowledge.core.init_BANG_ = (function knowledge$core$init_BANG_(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));

knowledge.core.listen_for_window_click.call(null);

return knowledge.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map