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
knowledge.core.new_plate = (function knowledge$core$new_plate(type,title){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"plates","plates",358109965),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__28373__auto__ = title;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return "Untitled";
}
})(),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY], null);
});
knowledge.core.default_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"plates","plates",358109965),new cljs.core.PersistentArrayMap.fromArray([cljs_uuid_utils.core.make_random_squuid.call(null),knowledge.core.new_plate.call(null,null,"Welcome to knowledge")], true, false)], null);
knowledge.core.default_type = "foobar";
knowledge.core.app_state = reagent.core.atom.call(null,knowledge.core.default_state);
knowledge.core.add_plate = (function knowledge$core$add_plate(path,type){
var new_id = cljs_uuid_utils.core.make_random_squuid.call(null);
var new_path = cljs.core.into.call(null,path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plates","plates",358109965),new_id], null));
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.assoc_in,new_path,knowledge.core.new_plate.call(null,type,null));
});
knowledge.core.socket_button = (function knowledge$core$socket_button(path){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn-flat.waves-effect.waves-teal","a.btn-flat.waves-effect.waves-teal",-1413370250),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#343434"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return knowledge.core.add_plate.call(null,path,knowledge.core.default_type);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi-content-add","i.mdi-content-add",-22739464)], null)], null);
});
knowledge.core.depth__GT_class = (function knowledge$core$depth__GT_class(depth){
if((depth > (2))){
return [cljs.core.str("grey.lighten-"),cljs.core.str((function (){var x__28685__auto__ = (2);
var y__28686__auto__ = ((7) - (depth / (2)));
return ((x__28685__auto__ > y__28686__auto__) ? x__28685__auto__ : y__28686__auto__);
})())].join('');
} else {
return null;
}
});
knowledge.core.child_plates = (function knowledge$core$child_plates(path){
var iter__29127__auto__ = (function knowledge$core$child_plates_$_iter__34373(s__34374){
return (new cljs.core.LazySeq(null,(function (){
var s__34374__$1 = s__34374;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34374__$1);
if(temp__4126__auto__){
var s__34374__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34374__$2)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,s__34374__$2);
var size__29126__auto__ = cljs.core.count.call(null,c__29125__auto__);
var b__34376 = cljs.core.chunk_buffer.call(null,size__29126__auto__);
if((function (){var i__34375 = (0);
while(true){
if((i__34375 < size__29126__auto__)){
var vec__34379 = cljs.core._nth.call(null,c__29125__auto__,i__34375);
var id = cljs.core.nth.call(null,vec__34379,(0),null);
var state = cljs.core.nth.call(null,vec__34379,(1),null);
cljs.core.chunk_append.call(null,b__34376,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__34381 = (i__34375 + (1));
i__34375 = G__34381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34376),knowledge$core$child_plates_$_iter__34373.call(null,cljs.core.chunk_rest.call(null,s__34374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34376),null);
}
} else {
var vec__34380 = cljs.core.first.call(null,s__34374__$2);
var id = cljs.core.nth.call(null,vec__34380,(0),null);
var state = cljs.core.nth.call(null,vec__34380,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate,cljs.core.conj.call(null,path,id),state], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),knowledge$core$child_plates_$_iter__34373.call(null,cljs.core.rest.call(null,s__34374__$2)));
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
knowledge.core.title_edit = cljs.core.with_meta.call(null,(function (title,edit_title_BANG_,show_edit_title_BANG_){
var stop = (function (){
edit_title_BANG_.call(null,title);

return show_edit_title_BANG_.call(null);
});
var save_BANG_ = ((function (stop){
return (function (p1__34382_SHARP_){
return edit_title_BANG_.call(null,p1__34382_SHARP_.target.value);
});})(stop))
;
return ((function (stop,save_BANG_){
return (function (title__$1,edit_title_BANG___$1,show_edit_title_BANG___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.title-edit","input.title-edit",-1182479795),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),title__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (stop,save_BANG_){
return (function (p1__34383_SHARP_){
var G__34386 = p1__34383_SHARP_.which;
switch (G__34386) {
case (13):
save_BANG_.call(null,p1__34383_SHARP_);

return show_edit_title_BANG___$1.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(stop,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (stop,save_BANG_){
return (function (p1__34384_SHARP_){
save_BANG_.call(null,p1__34384_SHARP_);

return show_edit_title_BANG___$1.call(null);
});})(stop,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),save_BANG_], null)], null);
});
;})(stop,save_BANG_))
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__34385_SHARP_){
return reagent.core.dom_node.call(null,p1__34385_SHARP_).focus();
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
var show_edit_title_BANG_ = ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_){
return (function (){
cljs.core.swap_BANG_.call(null,show_edit_title_QMARK_,cljs.core.not);

return null;
});})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_))
;
var delete_BANG_ = ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,show_edit_title_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,knowledge.core.app_state,cljs.core.update_in,cljs.core.pop.call(null,path),cljs.core.dissoc,cljs.core.last.call(null,path));
});})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,show_edit_title_BANG_))
;
return ((function (collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,show_edit_title_BANG_,delete_BANG_){
return (function (title__$1,path__$1,collapsed_QMARK___$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i.mdi-editor-mode-edit.edit-title"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,show_edit_title_QMARK_))?".teal-text":null))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),show_edit_title_BANG_], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,show_edit_title_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.title_edit,title__$1,edit_title_BANG_,show_edit_title_BANG_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title__$1], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi-navigation-close.delete","i.mdi-navigation-close.delete",-1386502712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),delete_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK___$1))?new cljs.core.Keyword(null,"i.mdi-navigation-expand-more","i.mdi-navigation-expand-more",560531563):new cljs.core.Keyword(null,"i.mdi-navigation-expand-less","i.mdi-navigation-expand-less",1971314850)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),collapse_BANG_], null)], null)], null)], null);
});
;})(collapse_BANG_,edit_title_BANG_,show_edit_title_QMARK_,show_edit_title_BANG_,delete_BANG_))
});
knowledge.core.plate = (function knowledge$core$plate(path,state){
var collapsed_QMARK_ = reagent.core.atom.call(null,false);
var class_name = [cljs.core.str("div.gray.card.plate."),cljs.core.str(knowledge.core.depth__GT_class.call(null,cljs.core.count.call(null,path)))].join('');
return ((function (collapsed_QMARK_,class_name){
return (function (path__$1,state__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,class_name),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.plate_header,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state__$1),path__$1,collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str("div.card-content"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?".collapsed":null))].join('')),knowledge.core.child_plates.call(null,cljs.core.conj.call(null,path__$1,new cljs.core.Keyword(null,"plates","plates",358109965))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket_button,path__$1], null)], null)], null)], null)], null);
});
;})(collapsed_QMARK_,class_name))
});
knowledge.core.app = (function knowledge$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.s12","div.col.s12",-255066824),knowledge.core.child_plates.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plates","plates",358109965)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.core.socket_button,cljs.core.PersistentVector.EMPTY], null)], null);
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