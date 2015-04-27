// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37458_37470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37459_37471 = null;
var count__37460_37472 = (0);
var i__37461_37473 = (0);
while(true){
if((i__37461_37473 < count__37460_37472)){
var f_37474 = cljs.core._nth.call(null,chunk__37459_37471,i__37461_37473);
cljs.core.println.call(null,"  ",f_37474);

var G__37475 = seq__37458_37470;
var G__37476 = chunk__37459_37471;
var G__37477 = count__37460_37472;
var G__37478 = (i__37461_37473 + (1));
seq__37458_37470 = G__37475;
chunk__37459_37471 = G__37476;
count__37460_37472 = G__37477;
i__37461_37473 = G__37478;
continue;
} else {
var temp__4126__auto___37479 = cljs.core.seq.call(null,seq__37458_37470);
if(temp__4126__auto___37479){
var seq__37458_37480__$1 = temp__4126__auto___37479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37458_37480__$1)){
var c__29158__auto___37481 = cljs.core.chunk_first.call(null,seq__37458_37480__$1);
var G__37482 = cljs.core.chunk_rest.call(null,seq__37458_37480__$1);
var G__37483 = c__29158__auto___37481;
var G__37484 = cljs.core.count.call(null,c__29158__auto___37481);
var G__37485 = (0);
seq__37458_37470 = G__37482;
chunk__37459_37471 = G__37483;
count__37460_37472 = G__37484;
i__37461_37473 = G__37485;
continue;
} else {
var f_37486 = cljs.core.first.call(null,seq__37458_37480__$1);
cljs.core.println.call(null,"  ",f_37486);

var G__37487 = cljs.core.next.call(null,seq__37458_37480__$1);
var G__37488 = null;
var G__37489 = (0);
var G__37490 = (0);
seq__37458_37470 = G__37487;
chunk__37459_37471 = G__37488;
count__37460_37472 = G__37489;
i__37461_37473 = G__37490;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__28373__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37463 = null;
var count__37464 = (0);
var i__37465 = (0);
while(true){
if((i__37465 < count__37464)){
var vec__37466 = cljs.core._nth.call(null,chunk__37463,i__37465);
var name = cljs.core.nth.call(null,vec__37466,(0),null);
var map__37467 = cljs.core.nth.call(null,vec__37466,(1),null);
var map__37467__$1 = ((cljs.core.seq_QMARK_.call(null,map__37467))?cljs.core.apply.call(null,cljs.core.hash_map,map__37467):map__37467);
var arglists = cljs.core.get.call(null,map__37467__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__37467__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37491 = seq__37462;
var G__37492 = chunk__37463;
var G__37493 = count__37464;
var G__37494 = (i__37465 + (1));
seq__37462 = G__37491;
chunk__37463 = G__37492;
count__37464 = G__37493;
i__37465 = G__37494;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__37462);
if(temp__4126__auto__){
var seq__37462__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37462__$1)){
var c__29158__auto__ = cljs.core.chunk_first.call(null,seq__37462__$1);
var G__37495 = cljs.core.chunk_rest.call(null,seq__37462__$1);
var G__37496 = c__29158__auto__;
var G__37497 = cljs.core.count.call(null,c__29158__auto__);
var G__37498 = (0);
seq__37462 = G__37495;
chunk__37463 = G__37496;
count__37464 = G__37497;
i__37465 = G__37498;
continue;
} else {
var vec__37468 = cljs.core.first.call(null,seq__37462__$1);
var name = cljs.core.nth.call(null,vec__37468,(0),null);
var map__37469 = cljs.core.nth.call(null,vec__37468,(1),null);
var map__37469__$1 = ((cljs.core.seq_QMARK_.call(null,map__37469))?cljs.core.apply.call(null,cljs.core.hash_map,map__37469):map__37469);
var arglists = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__37499 = cljs.core.next.call(null,seq__37462__$1);
var G__37500 = null;
var G__37501 = (0);
var G__37502 = (0);
seq__37462 = G__37499;
chunk__37463 = G__37500;
count__37464 = G__37501;
i__37465 = G__37502;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map