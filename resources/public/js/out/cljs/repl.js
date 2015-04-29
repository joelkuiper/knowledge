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
var seq__44391_44403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44392_44404 = null;
var count__44393_44405 = (0);
var i__44394_44406 = (0);
while(true){
if((i__44394_44406 < count__44393_44405)){
var f_44407 = cljs.core._nth.call(null,chunk__44392_44404,i__44394_44406);
cljs.core.println.call(null,"  ",f_44407);

var G__44408 = seq__44391_44403;
var G__44409 = chunk__44392_44404;
var G__44410 = count__44393_44405;
var G__44411 = (i__44394_44406 + (1));
seq__44391_44403 = G__44408;
chunk__44392_44404 = G__44409;
count__44393_44405 = G__44410;
i__44394_44406 = G__44411;
continue;
} else {
var temp__4126__auto___44412 = cljs.core.seq.call(null,seq__44391_44403);
if(temp__4126__auto___44412){
var seq__44391_44413__$1 = temp__4126__auto___44412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44391_44413__$1)){
var c__29647__auto___44414 = cljs.core.chunk_first.call(null,seq__44391_44413__$1);
var G__44415 = cljs.core.chunk_rest.call(null,seq__44391_44413__$1);
var G__44416 = c__29647__auto___44414;
var G__44417 = cljs.core.count.call(null,c__29647__auto___44414);
var G__44418 = (0);
seq__44391_44403 = G__44415;
chunk__44392_44404 = G__44416;
count__44393_44405 = G__44417;
i__44394_44406 = G__44418;
continue;
} else {
var f_44419 = cljs.core.first.call(null,seq__44391_44413__$1);
cljs.core.println.call(null,"  ",f_44419);

var G__44420 = cljs.core.next.call(null,seq__44391_44413__$1);
var G__44421 = null;
var G__44422 = (0);
var G__44423 = (0);
seq__44391_44403 = G__44420;
chunk__44392_44404 = G__44421;
count__44393_44405 = G__44422;
i__44394_44406 = G__44423;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__28862__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
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
var seq__44395 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44396 = null;
var count__44397 = (0);
var i__44398 = (0);
while(true){
if((i__44398 < count__44397)){
var vec__44399 = cljs.core._nth.call(null,chunk__44396,i__44398);
var name = cljs.core.nth.call(null,vec__44399,(0),null);
var map__44400 = cljs.core.nth.call(null,vec__44399,(1),null);
var map__44400__$1 = ((cljs.core.seq_QMARK_.call(null,map__44400))?cljs.core.apply.call(null,cljs.core.hash_map,map__44400):map__44400);
var arglists = cljs.core.get.call(null,map__44400__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__44400__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__44424 = seq__44395;
var G__44425 = chunk__44396;
var G__44426 = count__44397;
var G__44427 = (i__44398 + (1));
seq__44395 = G__44424;
chunk__44396 = G__44425;
count__44397 = G__44426;
i__44398 = G__44427;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__44395);
if(temp__4126__auto__){
var seq__44395__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44395__$1)){
var c__29647__auto__ = cljs.core.chunk_first.call(null,seq__44395__$1);
var G__44428 = cljs.core.chunk_rest.call(null,seq__44395__$1);
var G__44429 = c__29647__auto__;
var G__44430 = cljs.core.count.call(null,c__29647__auto__);
var G__44431 = (0);
seq__44395 = G__44428;
chunk__44396 = G__44429;
count__44397 = G__44430;
i__44398 = G__44431;
continue;
} else {
var vec__44401 = cljs.core.first.call(null,seq__44395__$1);
var name = cljs.core.nth.call(null,vec__44401,(0),null);
var map__44402 = cljs.core.nth.call(null,vec__44401,(1),null);
var map__44402__$1 = ((cljs.core.seq_QMARK_.call(null,map__44402))?cljs.core.apply.call(null,cljs.core.hash_map,map__44402):map__44402);
var arglists = cljs.core.get.call(null,map__44402__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__44402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__44432 = cljs.core.next.call(null,seq__44395__$1);
var G__44433 = null;
var G__44434 = (0);
var G__44435 = (0);
seq__44395 = G__44432;
chunk__44396 = G__44433;
count__44397 = G__44434;
i__44398 = G__44435;
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