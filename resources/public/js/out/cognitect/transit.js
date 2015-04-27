// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__35517_35521 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__35518_35522 = null;
var count__35519_35523 = (0);
var i__35520_35524 = (0);
while(true){
if((i__35520_35524 < count__35519_35523)){
var k_35525 = cljs.core._nth.call(null,chunk__35518_35522,i__35520_35524);
var v_35526 = (b[k_35525]);
(a[k_35525] = v_35526);

var G__35527 = seq__35517_35521;
var G__35528 = chunk__35518_35522;
var G__35529 = count__35519_35523;
var G__35530 = (i__35520_35524 + (1));
seq__35517_35521 = G__35527;
chunk__35518_35522 = G__35528;
count__35519_35523 = G__35529;
i__35520_35524 = G__35530;
continue;
} else {
var temp__4126__auto___35531 = cljs.core.seq.call(null,seq__35517_35521);
if(temp__4126__auto___35531){
var seq__35517_35532__$1 = temp__4126__auto___35531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35517_35532__$1)){
var c__29158__auto___35533 = cljs.core.chunk_first.call(null,seq__35517_35532__$1);
var G__35534 = cljs.core.chunk_rest.call(null,seq__35517_35532__$1);
var G__35535 = c__29158__auto___35533;
var G__35536 = cljs.core.count.call(null,c__29158__auto___35533);
var G__35537 = (0);
seq__35517_35521 = G__35534;
chunk__35518_35522 = G__35535;
count__35519_35523 = G__35536;
i__35520_35524 = G__35537;
continue;
} else {
var k_35538 = cljs.core.first.call(null,seq__35517_35532__$1);
var v_35539 = (b[k_35538]);
(a[k_35538] = v_35539);

var G__35540 = cljs.core.next.call(null,seq__35517_35532__$1);
var G__35541 = null;
var G__35542 = (0);
var G__35543 = (0);
seq__35517_35521 = G__35540;
chunk__35518_35522 = G__35541;
count__35519_35523 = G__35542;
i__35520_35524 = G__35543;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var G__35545 = arguments.length;
switch (G__35545) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__35547 = (i + (2));
var G__35548 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__35547;
ret = G__35548;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35549_35553 = cljs.core.seq.call(null,v);
var chunk__35550_35554 = null;
var count__35551_35555 = (0);
var i__35552_35556 = (0);
while(true){
if((i__35552_35556 < count__35551_35555)){
var x_35557 = cljs.core._nth.call(null,chunk__35550_35554,i__35552_35556);
ret.push(x_35557);

var G__35558 = seq__35549_35553;
var G__35559 = chunk__35550_35554;
var G__35560 = count__35551_35555;
var G__35561 = (i__35552_35556 + (1));
seq__35549_35553 = G__35558;
chunk__35550_35554 = G__35559;
count__35551_35555 = G__35560;
i__35552_35556 = G__35561;
continue;
} else {
var temp__4126__auto___35562 = cljs.core.seq.call(null,seq__35549_35553);
if(temp__4126__auto___35562){
var seq__35549_35563__$1 = temp__4126__auto___35562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35549_35563__$1)){
var c__29158__auto___35564 = cljs.core.chunk_first.call(null,seq__35549_35563__$1);
var G__35565 = cljs.core.chunk_rest.call(null,seq__35549_35563__$1);
var G__35566 = c__29158__auto___35564;
var G__35567 = cljs.core.count.call(null,c__29158__auto___35564);
var G__35568 = (0);
seq__35549_35553 = G__35565;
chunk__35550_35554 = G__35566;
count__35551_35555 = G__35567;
i__35552_35556 = G__35568;
continue;
} else {
var x_35569 = cljs.core.first.call(null,seq__35549_35563__$1);
ret.push(x_35569);

var G__35570 = cljs.core.next.call(null,seq__35549_35563__$1);
var G__35571 = null;
var G__35572 = (0);
var G__35573 = (0);
seq__35549_35553 = G__35570;
chunk__35550_35554 = G__35571;
count__35551_35555 = G__35572;
i__35552_35556 = G__35573;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35574_35578 = cljs.core.seq.call(null,v);
var chunk__35575_35579 = null;
var count__35576_35580 = (0);
var i__35577_35581 = (0);
while(true){
if((i__35577_35581 < count__35576_35580)){
var x_35582 = cljs.core._nth.call(null,chunk__35575_35579,i__35577_35581);
ret.push(x_35582);

var G__35583 = seq__35574_35578;
var G__35584 = chunk__35575_35579;
var G__35585 = count__35576_35580;
var G__35586 = (i__35577_35581 + (1));
seq__35574_35578 = G__35583;
chunk__35575_35579 = G__35584;
count__35576_35580 = G__35585;
i__35577_35581 = G__35586;
continue;
} else {
var temp__4126__auto___35587 = cljs.core.seq.call(null,seq__35574_35578);
if(temp__4126__auto___35587){
var seq__35574_35588__$1 = temp__4126__auto___35587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35574_35588__$1)){
var c__29158__auto___35589 = cljs.core.chunk_first.call(null,seq__35574_35588__$1);
var G__35590 = cljs.core.chunk_rest.call(null,seq__35574_35588__$1);
var G__35591 = c__29158__auto___35589;
var G__35592 = cljs.core.count.call(null,c__29158__auto___35589);
var G__35593 = (0);
seq__35574_35578 = G__35590;
chunk__35575_35579 = G__35591;
count__35576_35580 = G__35592;
i__35577_35581 = G__35593;
continue;
} else {
var x_35594 = cljs.core.first.call(null,seq__35574_35588__$1);
ret.push(x_35594);

var G__35595 = cljs.core.next.call(null,seq__35574_35588__$1);
var G__35596 = null;
var G__35597 = (0);
var G__35598 = (0);
seq__35574_35578 = G__35595;
chunk__35575_35579 = G__35596;
count__35576_35580 = G__35597;
i__35577_35581 = G__35598;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__35599_35603 = cljs.core.seq.call(null,v);
var chunk__35600_35604 = null;
var count__35601_35605 = (0);
var i__35602_35606 = (0);
while(true){
if((i__35602_35606 < count__35601_35605)){
var x_35607 = cljs.core._nth.call(null,chunk__35600_35604,i__35602_35606);
ret.push(x_35607);

var G__35608 = seq__35599_35603;
var G__35609 = chunk__35600_35604;
var G__35610 = count__35601_35605;
var G__35611 = (i__35602_35606 + (1));
seq__35599_35603 = G__35608;
chunk__35600_35604 = G__35609;
count__35601_35605 = G__35610;
i__35602_35606 = G__35611;
continue;
} else {
var temp__4126__auto___35612 = cljs.core.seq.call(null,seq__35599_35603);
if(temp__4126__auto___35612){
var seq__35599_35613__$1 = temp__4126__auto___35612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35599_35613__$1)){
var c__29158__auto___35614 = cljs.core.chunk_first.call(null,seq__35599_35613__$1);
var G__35615 = cljs.core.chunk_rest.call(null,seq__35599_35613__$1);
var G__35616 = c__29158__auto___35614;
var G__35617 = cljs.core.count.call(null,c__29158__auto___35614);
var G__35618 = (0);
seq__35599_35603 = G__35615;
chunk__35600_35604 = G__35616;
count__35601_35605 = G__35617;
i__35602_35606 = G__35618;
continue;
} else {
var x_35619 = cljs.core.first.call(null,seq__35599_35613__$1);
ret.push(x_35619);

var G__35620 = cljs.core.next.call(null,seq__35599_35613__$1);
var G__35621 = null;
var G__35622 = (0);
var G__35623 = (0);
seq__35599_35603 = G__35620;
chunk__35600_35604 = G__35621;
count__35601_35605 = G__35622;
i__35602_35606 = G__35623;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var G__35625 = arguments.length;
switch (G__35625) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x35627 = cljs.core.clone.call(null,handlers);
x35627.forEach = ((function (x35627,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__35628 = cljs.core.seq.call(null,coll);
var chunk__35629 = null;
var count__35630 = (0);
var i__35631 = (0);
while(true){
if((i__35631 < count__35630)){
var vec__35632 = cljs.core._nth.call(null,chunk__35629,i__35631);
var k = cljs.core.nth.call(null,vec__35632,(0),null);
var v = cljs.core.nth.call(null,vec__35632,(1),null);
f.call(null,v,k);

var G__35635 = seq__35628;
var G__35636 = chunk__35629;
var G__35637 = count__35630;
var G__35638 = (i__35631 + (1));
seq__35628 = G__35635;
chunk__35629 = G__35636;
count__35630 = G__35637;
i__35631 = G__35638;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35628);
if(temp__4126__auto__){
var seq__35628__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35628__$1)){
var c__29158__auto__ = cljs.core.chunk_first.call(null,seq__35628__$1);
var G__35639 = cljs.core.chunk_rest.call(null,seq__35628__$1);
var G__35640 = c__29158__auto__;
var G__35641 = cljs.core.count.call(null,c__29158__auto__);
var G__35642 = (0);
seq__35628 = G__35639;
chunk__35629 = G__35640;
count__35630 = G__35641;
i__35631 = G__35642;
continue;
} else {
var vec__35633 = cljs.core.first.call(null,seq__35628__$1);
var k = cljs.core.nth.call(null,vec__35633,(0),null);
var v = cljs.core.nth.call(null,vec__35633,(1),null);
f.call(null,v,k);

var G__35643 = cljs.core.next.call(null,seq__35628__$1);
var G__35644 = null;
var G__35645 = (0);
var G__35646 = (0);
seq__35628 = G__35643;
chunk__35629 = G__35644;
count__35630 = G__35645;
i__35631 = G__35646;
continue;
}
} else {
return null;
}
}
break;
}
});})(x35627,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x35627;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__35626 = obj;
G__35626.push(kfn.call(null,k),vfn.call(null,v));

return G__35626;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var G__35648 = arguments.length;
switch (G__35648) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t35649 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t35649 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,meta35650){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.meta35650 = meta35650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t35649.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t35649.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t35649.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t35649.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t35649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35651){
var self__ = this;
var _35651__$1 = this;
return self__.meta35650;
});

cognitect.transit.t35649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35651,meta35650__$1){
var self__ = this;
var _35651__$1 = this;
return (new cognitect.transit.t35649(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,meta35650__$1));
});

cognitect.transit.t35649.cljs$lang$type = true;

cognitect.transit.t35649.cljs$lang$ctorStr = "cognitect.transit/t35649";

cognitect.transit.t35649.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cognitect.transit/t35649");
});

cognitect.transit.__GT_t35649 = (function cognitect$transit$__GT_t35649(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta35650){
return (new cognitect.transit.t35649(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,meta35650));
});

}

return (new cognitect.transit.t35649(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map