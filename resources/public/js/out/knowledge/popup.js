// Compiled by ClojureScript 0.0-3196 {}
goog.provide('knowledge.popup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('knowledge.plates');
knowledge.popup.css_transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
knowledge.popup.add_to_plate = (function knowledge$popup$add_to_plate(app_state,path,type){
knowledge.plates.add_plate.call(null,app_state,path,type);

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null),false);
});
knowledge.popup.types = (function knowledge$popup$types(app_state,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__29616__auto__ = (function knowledge$popup$types_$_iter__49121(s__49122){
return (new cljs.core.LazySeq(null,(function (){
var s__49122__$1 = s__49122;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49122__$1);
if(temp__4126__auto__){
var s__49122__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49122__$2)){
var c__29614__auto__ = cljs.core.chunk_first.call(null,s__49122__$2);
var size__29615__auto__ = cljs.core.count.call(null,c__29614__auto__);
var b__49124 = cljs.core.chunk_buffer.call(null,size__29615__auto__);
if((function (){var i__49123 = (0);
while(true){
if((i__49123 < size__29615__auto__)){
var vec__49135 = cljs.core._nth.call(null,c__29614__auto__,i__49123);
var title = cljs.core.nth.call(null,vec__49135,(0),null);
var group = cljs.core.nth.call(null,vec__49135,(1),null);
cljs.core.chunk_append.call(null,b__49124,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.group","li.group",-1413616641),title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.types","div.types",2043608691),(function (){var iter__29616__auto__ = ((function (i__49123,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__){
return (function knowledge$popup$types_$_iter__49121_$_iter__49136(s__49137){
return (new cljs.core.LazySeq(null,((function (i__49123,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__){
return (function (){
var s__49137__$1 = s__49137;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__49137__$1);
if(temp__4126__auto____$1){
var s__49137__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49137__$2)){
var c__29614__auto____$1 = cljs.core.chunk_first.call(null,s__49137__$2);
var size__29615__auto____$1 = cljs.core.count.call(null,c__29614__auto____$1);
var b__49139 = cljs.core.chunk_buffer.call(null,size__29615__auto____$1);
if((function (){var i__49138 = (0);
while(true){
if((i__49138 < size__29615__auto____$1)){
var plate = cljs.core._nth.call(null,c__29614__auto____$1,i__49138);
cljs.core.chunk_append.call(null,b__49139,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type","div.type",1802536445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49138,i__49123,plate,c__29614__auto____$1,size__29615__auto____$1,b__49139,s__49137__$2,temp__4126__auto____$1,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__){
return (function (){
return knowledge.popup.add_to_plate.call(null,app_state,path,new cljs.core.Keyword(null,"plate","plate",-1920178141).cljs$core$IFn$_invoke$arity$1(cljs.core.type));
});})(i__49138,i__49123,plate,c__29614__auto____$1,size__29615__auto____$1,b__49139,s__49137__$2,temp__4126__auto____$1,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i."),cljs.core.str(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(plate))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)));

var G__49145 = (i__49138 + (1));
i__49138 = G__49145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49139),knowledge$popup$types_$_iter__49121_$_iter__49136.call(null,cljs.core.chunk_rest.call(null,s__49137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49139),null);
}
} else {
var plate = cljs.core.first.call(null,s__49137__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type","div.type",1802536445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49123,plate,s__49137__$2,temp__4126__auto____$1,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__){
return (function (){
return knowledge.popup.add_to_plate.call(null,app_state,path,new cljs.core.Keyword(null,"plate","plate",-1920178141).cljs$core$IFn$_invoke$arity$1(cljs.core.type));
});})(i__49123,plate,s__49137__$2,temp__4126__auto____$1,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i."),cljs.core.str(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(plate))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)),knowledge$popup$types_$_iter__49121_$_iter__49136.call(null,cljs.core.rest.call(null,s__49137__$2)));
}
} else {
return null;
}
break;
}
});})(i__49123,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__))
,null,null));
});})(i__49123,vec__49135,title,group,c__29614__auto__,size__29615__auto__,b__49124,s__49122__$2,temp__4126__auto__))
;
return iter__29616__auto__.call(null,group);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)));

var G__49146 = (i__49123 + (1));
i__49123 = G__49146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49124),knowledge$popup$types_$_iter__49121.call(null,cljs.core.chunk_rest.call(null,s__49122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49124),null);
}
} else {
var vec__49140 = cljs.core.first.call(null,s__49122__$2);
var title = cljs.core.nth.call(null,vec__49140,(0),null);
var group = cljs.core.nth.call(null,vec__49140,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.group","li.group",-1413616641),title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.types","div.types",2043608691),(function (){var iter__29616__auto__ = ((function (vec__49140,title,group,s__49122__$2,temp__4126__auto__){
return (function knowledge$popup$types_$_iter__49121_$_iter__49141(s__49142){
return (new cljs.core.LazySeq(null,((function (vec__49140,title,group,s__49122__$2,temp__4126__auto__){
return (function (){
var s__49142__$1 = s__49142;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__49142__$1);
if(temp__4126__auto____$1){
var s__49142__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49142__$2)){
var c__29614__auto__ = cljs.core.chunk_first.call(null,s__49142__$2);
var size__29615__auto__ = cljs.core.count.call(null,c__29614__auto__);
var b__49144 = cljs.core.chunk_buffer.call(null,size__29615__auto__);
if((function (){var i__49143 = (0);
while(true){
if((i__49143 < size__29615__auto__)){
var plate = cljs.core._nth.call(null,c__29614__auto__,i__49143);
cljs.core.chunk_append.call(null,b__49144,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type","div.type",1802536445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49143,plate,c__29614__auto__,size__29615__auto__,b__49144,s__49142__$2,temp__4126__auto____$1,vec__49140,title,group,s__49122__$2,temp__4126__auto__){
return (function (){
return knowledge.popup.add_to_plate.call(null,app_state,path,new cljs.core.Keyword(null,"plate","plate",-1920178141).cljs$core$IFn$_invoke$arity$1(cljs.core.type));
});})(i__49143,plate,c__29614__auto__,size__29615__auto__,b__49144,s__49142__$2,temp__4126__auto____$1,vec__49140,title,group,s__49122__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i."),cljs.core.str(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(plate))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)));

var G__49147 = (i__49143 + (1));
i__49143 = G__49147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49144),knowledge$popup$types_$_iter__49121_$_iter__49141.call(null,cljs.core.chunk_rest.call(null,s__49142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49144),null);
}
} else {
var plate = cljs.core.first.call(null,s__49142__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type","div.type",1802536445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (plate,s__49142__$2,temp__4126__auto____$1,vec__49140,title,group,s__49122__$2,temp__4126__auto__){
return (function (){
return knowledge.popup.add_to_plate.call(null,app_state,path,new cljs.core.Keyword(null,"plate","plate",-1920178141).cljs$core$IFn$_invoke$arity$1(cljs.core.type));
});})(plate,s__49142__$2,temp__4126__auto____$1,vec__49140,title,group,s__49122__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("i."),cljs.core.str(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(plate))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(plate)], null)),knowledge$popup$types_$_iter__49121_$_iter__49141.call(null,cljs.core.rest.call(null,s__49142__$2)));
}
} else {
return null;
}
break;
}
});})(vec__49140,title,group,s__49122__$2,temp__4126__auto__))
,null,null));
});})(vec__49140,title,group,s__49122__$2,temp__4126__auto__))
;
return iter__29616__auto__.call(null,group);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null)),knowledge$popup$types_$_iter__49121.call(null,cljs.core.rest.call(null,s__49122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29616__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"group-title","group-title",392188964),knowledge.plates.all_types));
})()], null);
});
knowledge.popup.popup = (function knowledge$popup$popup(app_state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (app_state__$1){
var visible_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null));
var offset = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
var path = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"socket-popup","socket-popup",-273923444),new cljs.core.Keyword(null,"path","path",-188191168)], null));
var position = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(function (){var x__29174__auto__ = (0);
var y__29175__auto__ = (new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offset) - ((320) / (2)));
return ((x__29174__auto__ > y__29175__auto__) ? x__29174__auto__ : y__29175__auto__);
})(),new cljs.core.Keyword(null,"left","left",-399115937),((25) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offset))], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"popup",new cljs.core.Keyword(null,"style","style",-496642736),position,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (visible_QMARK_,offset,path,position){
return (function (p1__49148_SHARP_){
return p1__49148_SHARP_.stopPropagation();
});})(visible_QMARK_,offset,path,position))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.popup.css_transition_group,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"zoom"], null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.socket-popup.animated.zoom-in","div.socket-popup.animated.zoom-in",-2075816280),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [knowledge.popup.types,app_state__$1,path], null)], null):null)], null)], null);
})], null));
});

//# sourceMappingURL=popup.js.map