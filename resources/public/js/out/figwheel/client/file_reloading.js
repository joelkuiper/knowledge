// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__44450_SHARP_,p2__44451_SHARP_){
var and__28850__auto__ = p1__44450_SHARP_;
if(cljs.core.truth_(and__28850__auto__)){
return p2__44451_SHARP_;
} else {
return and__28850__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28862__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28862__auto__){
return or__28862__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__44453_SHARP_,p2__44452_SHARP_){
return [cljs.core.str(p2__44452_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__28862__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__28862__auto__){
return or__28862__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__28862__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__29757__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29758__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29759__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29760__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29761__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29761__auto__,method_table__29757__auto__,prefer_table__29758__auto__,method_cache__29759__auto__,cached_hierarchy__29760__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__44454){
var map__44455 = p__44454;
var map__44455__$1 = ((cljs.core.seq_QMARK_.call(null,map__44455))?cljs.core.apply.call(null,cljs.core.hash_map,map__44455):map__44455);
var file = cljs.core.get.call(null,map__44455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__44456){
var map__44457 = p__44456;
var map__44457__$1 = ((cljs.core.seq_QMARK_.call(null,map__44457))?cljs.core.apply.call(null,cljs.core.hash_map,map__44457):map__44457);
var namespace = cljs.core.get.call(null,map__44457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__29757__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29758__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29759__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29760__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29761__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29761__auto__,method_table__29757__auto__,prefer_table__29758__auto__,method_cache__29759__auto__,cached_hierarchy__29760__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e44458){if((e44458 instanceof Error)){
var e = e44458;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44458;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__44460 = arguments.length;
switch (G__44460) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44462,callback){
var map__44464 = p__44462;
var map__44464__$1 = ((cljs.core.seq_QMARK_.call(null,map__44464))?cljs.core.apply.call(null,cljs.core.hash_map,map__44464):map__44464);
var file_msg = map__44464__$1;
var request_url = cljs.core.get.call(null,map__44464__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44464,map__44464__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44464,map__44464__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44465){
var map__44467 = p__44465;
var map__44467__$1 = ((cljs.core.seq_QMARK_.call(null,map__44467))?cljs.core.apply.call(null,cljs.core.hash_map,map__44467):map__44467);
var file_msg = map__44467__$1;
var meta_data = cljs.core.get.call(null,map__44467__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__44467__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__28862__auto__ = meta_data;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__28850__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__28850__auto__){
var or__28862__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__28862__auto____$1)){
return or__28862__auto____$1;
} else {
var and__28850__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__28850__auto____$1){
var or__28862__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__28862__auto____$2){
return or__28862__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__28850__auto____$1;
}
}
}
} else {
return and__28850__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44468,callback){
var map__44470 = p__44468;
var map__44470__$1 = ((cljs.core.seq_QMARK_.call(null,map__44470))?cljs.core.apply.call(null,cljs.core.hash_map,map__44470):map__44470);
var file_msg = map__44470__$1;
var namespace = cljs.core.get.call(null,map__44470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__44470__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32383__auto___44557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___44557,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___44557,out){
return (function (state_44539){
var state_val_44540 = (state_44539[(1)]);
if((state_val_44540 === (7))){
var inst_44523 = (state_44539[(7)]);
var inst_44529 = (state_44539[(2)]);
var inst_44530 = cljs.core.async.put_BANG_.call(null,out,inst_44529);
var inst_44519 = inst_44523;
var state_44539__$1 = (function (){var statearr_44541 = state_44539;
(statearr_44541[(8)] = inst_44530);

(statearr_44541[(9)] = inst_44519);

return statearr_44541;
})();
var statearr_44542_44558 = state_44539__$1;
(statearr_44542_44558[(2)] = null);

(statearr_44542_44558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44540 === (6))){
var inst_44535 = (state_44539[(2)]);
var state_44539__$1 = state_44539;
var statearr_44543_44559 = state_44539__$1;
(statearr_44543_44559[(2)] = inst_44535);

(statearr_44543_44559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44540 === (5))){
var inst_44533 = cljs.core.async.close_BANG_.call(null,out);
var state_44539__$1 = state_44539;
var statearr_44544_44560 = state_44539__$1;
(statearr_44544_44560[(2)] = inst_44533);

(statearr_44544_44560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44540 === (4))){
var inst_44522 = (state_44539[(10)]);
var inst_44527 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44522);
var state_44539__$1 = state_44539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44539__$1,(7),inst_44527);
} else {
if((state_val_44540 === (3))){
var inst_44537 = (state_44539[(2)]);
var state_44539__$1 = state_44539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44539__$1,inst_44537);
} else {
if((state_val_44540 === (2))){
var inst_44519 = (state_44539[(9)]);
var inst_44522 = (state_44539[(10)]);
var inst_44522__$1 = cljs.core.nth.call(null,inst_44519,(0),null);
var inst_44523 = cljs.core.nthnext.call(null,inst_44519,(1));
var inst_44524 = (inst_44522__$1 == null);
var inst_44525 = cljs.core.not.call(null,inst_44524);
var state_44539__$1 = (function (){var statearr_44545 = state_44539;
(statearr_44545[(10)] = inst_44522__$1);

(statearr_44545[(7)] = inst_44523);

return statearr_44545;
})();
if(inst_44525){
var statearr_44546_44561 = state_44539__$1;
(statearr_44546_44561[(1)] = (4));

} else {
var statearr_44547_44562 = state_44539__$1;
(statearr_44547_44562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44540 === (1))){
var inst_44517 = cljs.core.nth.call(null,files,(0),null);
var inst_44518 = cljs.core.nthnext.call(null,files,(1));
var inst_44519 = files;
var state_44539__$1 = (function (){var statearr_44548 = state_44539;
(statearr_44548[(9)] = inst_44519);

(statearr_44548[(11)] = inst_44517);

(statearr_44548[(12)] = inst_44518);

return statearr_44548;
})();
var statearr_44549_44563 = state_44539__$1;
(statearr_44549_44563[(2)] = null);

(statearr_44549_44563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32383__auto___44557,out))
;
return ((function (switch__32321__auto__,c__32383__auto___44557,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto____0 = (function (){
var statearr_44553 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44553[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto__);

(statearr_44553[(1)] = (1));

return statearr_44553;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto____1 = (function (state_44539){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44554){if((e44554 instanceof Object)){
var ex__32325__auto__ = e44554;
var statearr_44555_44564 = state_44539;
(statearr_44555_44564[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44565 = state_44539;
state_44539 = G__44565;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto__ = function(state_44539){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto____1.call(this,state_44539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___44557,out))
})();
var state__32385__auto__ = (function (){var statearr_44556 = f__32384__auto__.call(null);
(statearr_44556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___44557);

return statearr_44556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___44557,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__44566,p__44567){
var map__44570 = p__44566;
var map__44570__$1 = ((cljs.core.seq_QMARK_.call(null,map__44570))?cljs.core.apply.call(null,cljs.core.hash_map,map__44570):map__44570);
var opts = map__44570__$1;
var url_rewriter = cljs.core.get.call(null,map__44570__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__44571 = p__44567;
var map__44571__$1 = ((cljs.core.seq_QMARK_.call(null,map__44571))?cljs.core.apply.call(null,cljs.core.hash_map,map__44571):map__44571);
var file_msg = map__44571__$1;
var file = cljs.core.get.call(null,map__44571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44572){
var map__44575 = p__44572;
var map__44575__$1 = ((cljs.core.seq_QMARK_.call(null,map__44575))?cljs.core.apply.call(null,cljs.core.hash_map,map__44575):map__44575);
var file = cljs.core.get.call(null,map__44575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__44575__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__28850__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28850__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28850__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e44576){var e = e44576;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44581,p__44582){
var map__44783 = p__44581;
var map__44783__$1 = ((cljs.core.seq_QMARK_.call(null,map__44783))?cljs.core.apply.call(null,cljs.core.hash_map,map__44783):map__44783);
var opts = map__44783__$1;
var load_unchanged_files = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__44783__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__44784 = p__44582;
var map__44784__$1 = ((cljs.core.seq_QMARK_.call(null,map__44784))?cljs.core.apply.call(null,cljs.core.hash_map,map__44784):map__44784);
var msg = map__44784__$1;
var files = cljs.core.get.call(null,map__44784__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (state_44908){
var state_val_44909 = (state_44908[(1)]);
if((state_val_44909 === (7))){
var inst_44796 = (state_44908[(7)]);
var inst_44795 = (state_44908[(8)]);
var inst_44798 = (state_44908[(9)]);
var inst_44797 = (state_44908[(10)]);
var inst_44803 = cljs.core._nth.call(null,inst_44796,inst_44798);
var inst_44804 = figwheel.client.file_reloading.eval_body.call(null,inst_44803);
var inst_44805 = (inst_44798 + (1));
var tmp44910 = inst_44796;
var tmp44911 = inst_44795;
var tmp44912 = inst_44797;
var inst_44795__$1 = tmp44911;
var inst_44796__$1 = tmp44910;
var inst_44797__$1 = tmp44912;
var inst_44798__$1 = inst_44805;
var state_44908__$1 = (function (){var statearr_44913 = state_44908;
(statearr_44913[(7)] = inst_44796__$1);

(statearr_44913[(11)] = inst_44804);

(statearr_44913[(8)] = inst_44795__$1);

(statearr_44913[(9)] = inst_44798__$1);

(statearr_44913[(10)] = inst_44797__$1);

return statearr_44913;
})();
var statearr_44914_44983 = state_44908__$1;
(statearr_44914_44983[(2)] = null);

(statearr_44914_44983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (20))){
var inst_44841 = (state_44908[(12)]);
var inst_44847 = (state_44908[(13)]);
var inst_44845 = (state_44908[(14)]);
var inst_44840 = (state_44908[(15)]);
var inst_44844 = (state_44908[(16)]);
var inst_44850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44852 = (function (){var files_not_loaded = inst_44847;
var res = inst_44845;
var res_SINGLEQUOTE_ = inst_44844;
var files_SINGLEQUOTE_ = inst_44841;
var all_files = inst_44840;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44847,inst_44845,inst_44840,inst_44844,inst_44850,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (p__44851){
var map__44915 = p__44851;
var map__44915__$1 = ((cljs.core.seq_QMARK_.call(null,map__44915))?cljs.core.apply.call(null,cljs.core.hash_map,map__44915):map__44915);
var file = cljs.core.get.call(null,map__44915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__44915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44847,inst_44845,inst_44840,inst_44844,inst_44850,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44853 = cljs.core.map.call(null,inst_44852,inst_44845);
var inst_44854 = cljs.core.pr_str.call(null,inst_44853);
var inst_44855 = figwheel.client.utils.log.call(null,inst_44854);
var inst_44856 = (function (){var files_not_loaded = inst_44847;
var res = inst_44845;
var res_SINGLEQUOTE_ = inst_44844;
var files_SINGLEQUOTE_ = inst_44841;
var all_files = inst_44840;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44847,inst_44845,inst_44840,inst_44844,inst_44850,inst_44852,inst_44853,inst_44854,inst_44855,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44847,inst_44845,inst_44840,inst_44844,inst_44850,inst_44852,inst_44853,inst_44854,inst_44855,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44857 = setTimeout(inst_44856,(10));
var state_44908__$1 = (function (){var statearr_44916 = state_44908;
(statearr_44916[(17)] = inst_44855);

(statearr_44916[(18)] = inst_44850);

return statearr_44916;
})();
var statearr_44917_44984 = state_44908__$1;
(statearr_44917_44984[(2)] = inst_44857);

(statearr_44917_44984[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (27))){
var inst_44867 = (state_44908[(19)]);
var state_44908__$1 = state_44908;
var statearr_44918_44985 = state_44908__$1;
(statearr_44918_44985[(2)] = inst_44867);

(statearr_44918_44985[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (1))){
var inst_44787 = (state_44908[(20)]);
var inst_44785 = before_jsload.call(null,files);
var inst_44786 = (function (){return ((function (inst_44787,inst_44785,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (p1__44577_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44577_SHARP_);
});
;})(inst_44787,inst_44785,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44787__$1 = cljs.core.filter.call(null,inst_44786,files);
var inst_44788 = cljs.core.not_empty.call(null,inst_44787__$1);
var state_44908__$1 = (function (){var statearr_44919 = state_44908;
(statearr_44919[(20)] = inst_44787__$1);

(statearr_44919[(21)] = inst_44785);

return statearr_44919;
})();
if(cljs.core.truth_(inst_44788)){
var statearr_44920_44986 = state_44908__$1;
(statearr_44920_44986[(1)] = (2));

} else {
var statearr_44921_44987 = state_44908__$1;
(statearr_44921_44987[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (24))){
var state_44908__$1 = state_44908;
var statearr_44922_44988 = state_44908__$1;
(statearr_44922_44988[(2)] = null);

(statearr_44922_44988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (4))){
var inst_44832 = (state_44908[(2)]);
var inst_44833 = (function (){return ((function (inst_44832,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (p1__44578_SHARP_){
var and__28850__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44578_SHARP_);
if(cljs.core.truth_(and__28850__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44578_SHARP_));
} else {
return and__28850__auto__;
}
});
;})(inst_44832,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44834 = cljs.core.filter.call(null,inst_44833,files);
var state_44908__$1 = (function (){var statearr_44923 = state_44908;
(statearr_44923[(22)] = inst_44832);

(statearr_44923[(23)] = inst_44834);

return statearr_44923;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_44924_44989 = state_44908__$1;
(statearr_44924_44989[(1)] = (16));

} else {
var statearr_44925_44990 = state_44908__$1;
(statearr_44925_44990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (15))){
var inst_44822 = (state_44908[(2)]);
var state_44908__$1 = state_44908;
var statearr_44926_44991 = state_44908__$1;
(statearr_44926_44991[(2)] = inst_44822);

(statearr_44926_44991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (21))){
var state_44908__$1 = state_44908;
var statearr_44927_44992 = state_44908__$1;
(statearr_44927_44992[(2)] = null);

(statearr_44927_44992[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (31))){
var inst_44875 = (state_44908[(24)]);
var inst_44885 = (state_44908[(2)]);
var inst_44886 = cljs.core.not_empty.call(null,inst_44875);
var state_44908__$1 = (function (){var statearr_44928 = state_44908;
(statearr_44928[(25)] = inst_44885);

return statearr_44928;
})();
if(cljs.core.truth_(inst_44886)){
var statearr_44929_44993 = state_44908__$1;
(statearr_44929_44993[(1)] = (32));

} else {
var statearr_44930_44994 = state_44908__$1;
(statearr_44930_44994[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (32))){
var inst_44875 = (state_44908[(24)]);
var inst_44888 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44875);
var inst_44889 = cljs.core.pr_str.call(null,inst_44888);
var inst_44890 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_44889)].join('');
var inst_44891 = figwheel.client.utils.log.call(null,inst_44890);
var state_44908__$1 = state_44908;
var statearr_44931_44995 = state_44908__$1;
(statearr_44931_44995[(2)] = inst_44891);

(statearr_44931_44995[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (33))){
var state_44908__$1 = state_44908;
var statearr_44932_44996 = state_44908__$1;
(statearr_44932_44996[(2)] = null);

(statearr_44932_44996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (13))){
var inst_44808 = (state_44908[(26)]);
var inst_44812 = cljs.core.chunk_first.call(null,inst_44808);
var inst_44813 = cljs.core.chunk_rest.call(null,inst_44808);
var inst_44814 = cljs.core.count.call(null,inst_44812);
var inst_44795 = inst_44813;
var inst_44796 = inst_44812;
var inst_44797 = inst_44814;
var inst_44798 = (0);
var state_44908__$1 = (function (){var statearr_44933 = state_44908;
(statearr_44933[(7)] = inst_44796);

(statearr_44933[(8)] = inst_44795);

(statearr_44933[(9)] = inst_44798);

(statearr_44933[(10)] = inst_44797);

return statearr_44933;
})();
var statearr_44934_44997 = state_44908__$1;
(statearr_44934_44997[(2)] = null);

(statearr_44934_44997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (22))){
var inst_44847 = (state_44908[(13)]);
var inst_44860 = (state_44908[(2)]);
var inst_44861 = cljs.core.not_empty.call(null,inst_44847);
var state_44908__$1 = (function (){var statearr_44935 = state_44908;
(statearr_44935[(27)] = inst_44860);

return statearr_44935;
})();
if(cljs.core.truth_(inst_44861)){
var statearr_44936_44998 = state_44908__$1;
(statearr_44936_44998[(1)] = (23));

} else {
var statearr_44937_44999 = state_44908__$1;
(statearr_44937_44999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (36))){
var state_44908__$1 = state_44908;
var statearr_44938_45000 = state_44908__$1;
(statearr_44938_45000[(2)] = null);

(statearr_44938_45000[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (29))){
var inst_44876 = (state_44908[(28)]);
var inst_44879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44876);
var inst_44880 = cljs.core.pr_str.call(null,inst_44879);
var inst_44881 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_44880)].join('');
var inst_44882 = figwheel.client.utils.log.call(null,inst_44881);
var state_44908__$1 = state_44908;
var statearr_44939_45001 = state_44908__$1;
(statearr_44939_45001[(2)] = inst_44882);

(statearr_44939_45001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (6))){
var inst_44829 = (state_44908[(2)]);
var state_44908__$1 = state_44908;
var statearr_44940_45002 = state_44908__$1;
(statearr_44940_45002[(2)] = inst_44829);

(statearr_44940_45002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (28))){
var inst_44876 = (state_44908[(28)]);
var inst_44873 = (state_44908[(2)]);
var inst_44874 = cljs.core.get.call(null,inst_44873,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_44875 = cljs.core.get.call(null,inst_44873,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_44876__$1 = cljs.core.get.call(null,inst_44873,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_44877 = cljs.core.not_empty.call(null,inst_44876__$1);
var state_44908__$1 = (function (){var statearr_44941 = state_44908;
(statearr_44941[(28)] = inst_44876__$1);

(statearr_44941[(24)] = inst_44875);

(statearr_44941[(29)] = inst_44874);

return statearr_44941;
})();
if(cljs.core.truth_(inst_44877)){
var statearr_44942_45003 = state_44908__$1;
(statearr_44942_45003[(1)] = (29));

} else {
var statearr_44943_45004 = state_44908__$1;
(statearr_44943_45004[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (25))){
var inst_44906 = (state_44908[(2)]);
var state_44908__$1 = state_44908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44908__$1,inst_44906);
} else {
if((state_val_44909 === (34))){
var inst_44874 = (state_44908[(29)]);
var inst_44894 = (state_44908[(2)]);
var inst_44895 = cljs.core.not_empty.call(null,inst_44874);
var state_44908__$1 = (function (){var statearr_44944 = state_44908;
(statearr_44944[(30)] = inst_44894);

return statearr_44944;
})();
if(cljs.core.truth_(inst_44895)){
var statearr_44945_45005 = state_44908__$1;
(statearr_44945_45005[(1)] = (35));

} else {
var statearr_44946_45006 = state_44908__$1;
(statearr_44946_45006[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (17))){
var inst_44834 = (state_44908[(23)]);
var state_44908__$1 = state_44908;
var statearr_44947_45007 = state_44908__$1;
(statearr_44947_45007[(2)] = inst_44834);

(statearr_44947_45007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (3))){
var state_44908__$1 = state_44908;
var statearr_44948_45008 = state_44908__$1;
(statearr_44948_45008[(2)] = null);

(statearr_44948_45008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (12))){
var inst_44825 = (state_44908[(2)]);
var state_44908__$1 = state_44908;
var statearr_44949_45009 = state_44908__$1;
(statearr_44949_45009[(2)] = inst_44825);

(statearr_44949_45009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (2))){
var inst_44787 = (state_44908[(20)]);
var inst_44794 = cljs.core.seq.call(null,inst_44787);
var inst_44795 = inst_44794;
var inst_44796 = null;
var inst_44797 = (0);
var inst_44798 = (0);
var state_44908__$1 = (function (){var statearr_44950 = state_44908;
(statearr_44950[(7)] = inst_44796);

(statearr_44950[(8)] = inst_44795);

(statearr_44950[(9)] = inst_44798);

(statearr_44950[(10)] = inst_44797);

return statearr_44950;
})();
var statearr_44951_45010 = state_44908__$1;
(statearr_44951_45010[(2)] = null);

(statearr_44951_45010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (23))){
var inst_44841 = (state_44908[(12)]);
var inst_44847 = (state_44908[(13)]);
var inst_44845 = (state_44908[(14)]);
var inst_44840 = (state_44908[(15)]);
var inst_44844 = (state_44908[(16)]);
var inst_44867 = (state_44908[(19)]);
var inst_44863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44866 = (function (){var files_not_loaded = inst_44847;
var res = inst_44845;
var res_SINGLEQUOTE_ = inst_44844;
var files_SINGLEQUOTE_ = inst_44841;
var all_files = inst_44840;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44847,inst_44845,inst_44840,inst_44844,inst_44867,inst_44863,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (p__44865){
var map__44952 = p__44865;
var map__44952__$1 = ((cljs.core.seq_QMARK_.call(null,map__44952))?cljs.core.apply.call(null,cljs.core.hash_map,map__44952):map__44952);
var meta_data = cljs.core.get.call(null,map__44952__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44847,inst_44845,inst_44840,inst_44844,inst_44867,inst_44863,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44867__$1 = cljs.core.group_by.call(null,inst_44866,inst_44847);
var inst_44868 = cljs.core.seq_QMARK_.call(null,inst_44867__$1);
var state_44908__$1 = (function (){var statearr_44953 = state_44908;
(statearr_44953[(31)] = inst_44863);

(statearr_44953[(19)] = inst_44867__$1);

return statearr_44953;
})();
if(inst_44868){
var statearr_44954_45011 = state_44908__$1;
(statearr_44954_45011[(1)] = (26));

} else {
var statearr_44955_45012 = state_44908__$1;
(statearr_44955_45012[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (35))){
var inst_44874 = (state_44908[(29)]);
var inst_44897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44874);
var inst_44898 = cljs.core.pr_str.call(null,inst_44897);
var inst_44899 = [cljs.core.str("not required: "),cljs.core.str(inst_44898)].join('');
var inst_44900 = figwheel.client.utils.log.call(null,inst_44899);
var state_44908__$1 = state_44908;
var statearr_44956_45013 = state_44908__$1;
(statearr_44956_45013[(2)] = inst_44900);

(statearr_44956_45013[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (19))){
var inst_44841 = (state_44908[(12)]);
var inst_44845 = (state_44908[(14)]);
var inst_44840 = (state_44908[(15)]);
var inst_44844 = (state_44908[(16)]);
var inst_44844__$1 = (state_44908[(2)]);
var inst_44845__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44844__$1);
var inst_44846 = (function (){var res = inst_44845__$1;
var res_SINGLEQUOTE_ = inst_44844__$1;
var files_SINGLEQUOTE_ = inst_44841;
var all_files = inst_44840;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44845,inst_44840,inst_44844,inst_44844__$1,inst_44845__$1,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (p1__44580_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44580_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_44841,inst_44845,inst_44840,inst_44844,inst_44844__$1,inst_44845__$1,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44847 = cljs.core.filter.call(null,inst_44846,inst_44844__$1);
var inst_44848 = cljs.core.not_empty.call(null,inst_44845__$1);
var state_44908__$1 = (function (){var statearr_44957 = state_44908;
(statearr_44957[(13)] = inst_44847);

(statearr_44957[(14)] = inst_44845__$1);

(statearr_44957[(16)] = inst_44844__$1);

return statearr_44957;
})();
if(cljs.core.truth_(inst_44848)){
var statearr_44958_45014 = state_44908__$1;
(statearr_44958_45014[(1)] = (20));

} else {
var statearr_44959_45015 = state_44908__$1;
(statearr_44959_45015[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (11))){
var state_44908__$1 = state_44908;
var statearr_44960_45016 = state_44908__$1;
(statearr_44960_45016[(2)] = null);

(statearr_44960_45016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (9))){
var inst_44827 = (state_44908[(2)]);
var state_44908__$1 = state_44908;
var statearr_44961_45017 = state_44908__$1;
(statearr_44961_45017[(2)] = inst_44827);

(statearr_44961_45017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (5))){
var inst_44798 = (state_44908[(9)]);
var inst_44797 = (state_44908[(10)]);
var inst_44800 = (inst_44798 < inst_44797);
var inst_44801 = inst_44800;
var state_44908__$1 = state_44908;
if(cljs.core.truth_(inst_44801)){
var statearr_44962_45018 = state_44908__$1;
(statearr_44962_45018[(1)] = (7));

} else {
var statearr_44963_45019 = state_44908__$1;
(statearr_44963_45019[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (14))){
var inst_44808 = (state_44908[(26)]);
var inst_44817 = cljs.core.first.call(null,inst_44808);
var inst_44818 = figwheel.client.file_reloading.eval_body.call(null,inst_44817);
var inst_44819 = cljs.core.next.call(null,inst_44808);
var inst_44795 = inst_44819;
var inst_44796 = null;
var inst_44797 = (0);
var inst_44798 = (0);
var state_44908__$1 = (function (){var statearr_44964 = state_44908;
(statearr_44964[(32)] = inst_44818);

(statearr_44964[(7)] = inst_44796);

(statearr_44964[(8)] = inst_44795);

(statearr_44964[(9)] = inst_44798);

(statearr_44964[(10)] = inst_44797);

return statearr_44964;
})();
var statearr_44965_45020 = state_44908__$1;
(statearr_44965_45020[(2)] = null);

(statearr_44965_45020[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (26))){
var inst_44867 = (state_44908[(19)]);
var inst_44870 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44867);
var state_44908__$1 = state_44908;
var statearr_44966_45021 = state_44908__$1;
(statearr_44966_45021[(2)] = inst_44870);

(statearr_44966_45021[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (16))){
var inst_44834 = (state_44908[(23)]);
var inst_44836 = (function (){var all_files = inst_44834;
return ((function (all_files,inst_44834,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function (p1__44579_SHARP_){
return cljs.core.update_in.call(null,p1__44579_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_44834,state_val_44909,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var inst_44837 = cljs.core.map.call(null,inst_44836,inst_44834);
var state_44908__$1 = state_44908;
var statearr_44967_45022 = state_44908__$1;
(statearr_44967_45022[(2)] = inst_44837);

(statearr_44967_45022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (30))){
var state_44908__$1 = state_44908;
var statearr_44968_45023 = state_44908__$1;
(statearr_44968_45023[(2)] = null);

(statearr_44968_45023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (10))){
var inst_44808 = (state_44908[(26)]);
var inst_44810 = cljs.core.chunked_seq_QMARK_.call(null,inst_44808);
var state_44908__$1 = state_44908;
if(inst_44810){
var statearr_44969_45024 = state_44908__$1;
(statearr_44969_45024[(1)] = (13));

} else {
var statearr_44970_45025 = state_44908__$1;
(statearr_44970_45025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (18))){
var inst_44841 = (state_44908[(12)]);
var inst_44840 = (state_44908[(15)]);
var inst_44840__$1 = (state_44908[(2)]);
var inst_44841__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_44840__$1);
var inst_44842 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44841__$1);
var state_44908__$1 = (function (){var statearr_44971 = state_44908;
(statearr_44971[(12)] = inst_44841__$1);

(statearr_44971[(15)] = inst_44840__$1);

return statearr_44971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44908__$1,(19),inst_44842);
} else {
if((state_val_44909 === (37))){
var inst_44903 = (state_44908[(2)]);
var state_44908__$1 = state_44908;
var statearr_44972_45026 = state_44908__$1;
(statearr_44972_45026[(2)] = inst_44903);

(statearr_44972_45026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44909 === (8))){
var inst_44808 = (state_44908[(26)]);
var inst_44795 = (state_44908[(8)]);
var inst_44808__$1 = cljs.core.seq.call(null,inst_44795);
var state_44908__$1 = (function (){var statearr_44973 = state_44908;
(statearr_44973[(26)] = inst_44808__$1);

return statearr_44973;
})();
if(inst_44808__$1){
var statearr_44974_45027 = state_44908__$1;
(statearr_44974_45027[(1)] = (10));

} else {
var statearr_44975_45028 = state_44908__$1;
(statearr_44975_45028[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
;
return ((function (switch__32321__auto__,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto____0 = (function (){
var statearr_44979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44979[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto__);

(statearr_44979[(1)] = (1));

return statearr_44979;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto____1 = (function (state_44908){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44980){if((e44980 instanceof Object)){
var ex__32325__auto__ = e44980;
var statearr_44981_45029 = state_44908;
(statearr_44981_45029[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45030 = state_44908;
state_44908 = G__45030;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto__ = function(state_44908){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto____1.call(this,state_44908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
})();
var state__32385__auto__ = (function (){var statearr_44982 = f__32384__auto__.call(null);
(statearr_44982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_44982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__,map__44783,map__44783__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__44784,map__44784__$1,msg,files))
);

return c__32383__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45033,link){
var map__45035 = p__45033;
var map__45035__$1 = ((cljs.core.seq_QMARK_.call(null,map__45035))?cljs.core.apply.call(null,cljs.core.hash_map,map__45035):map__45035);
var file = cljs.core.get.call(null,map__45035__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__45035,map__45035__$1,file){
return (function (p1__45031_SHARP_,p2__45032_SHARP_){
if(cljs.core._EQ_.call(null,p1__45031_SHARP_,p2__45032_SHARP_)){
return p1__45031_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__45035,map__45035__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45039){
var map__45040 = p__45039;
var map__45040__$1 = ((cljs.core.seq_QMARK_.call(null,map__45040))?cljs.core.apply.call(null,cljs.core.hash_map,map__45040):map__45040);
var current_url_length = cljs.core.get.call(null,map__45040__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__45040__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45036_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45036_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__45042 = arguments.length;
switch (G__45042) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45044){
var map__45046 = p__45044;
var map__45046__$1 = ((cljs.core.seq_QMARK_.call(null,map__45046))?cljs.core.apply.call(null,cljs.core.hash_map,map__45046):map__45046);
var f_data = map__45046__$1;
var request_url = cljs.core.get.call(null,map__45046__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__45046__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__28862__auto__ = request_url;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45047,files_msg){
var map__45069 = p__45047;
var map__45069__$1 = ((cljs.core.seq_QMARK_.call(null,map__45069))?cljs.core.apply.call(null,cljs.core.hash_map,map__45069):map__45069);
var opts = map__45069__$1;
var on_cssload = cljs.core.get.call(null,map__45069__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45070_45090 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__45071_45091 = null;
var count__45072_45092 = (0);
var i__45073_45093 = (0);
while(true){
if((i__45073_45093 < count__45072_45092)){
var f_45094 = cljs.core._nth.call(null,chunk__45071_45091,i__45073_45093);
figwheel.client.file_reloading.reload_css_file.call(null,f_45094);

var G__45095 = seq__45070_45090;
var G__45096 = chunk__45071_45091;
var G__45097 = count__45072_45092;
var G__45098 = (i__45073_45093 + (1));
seq__45070_45090 = G__45095;
chunk__45071_45091 = G__45096;
count__45072_45092 = G__45097;
i__45073_45093 = G__45098;
continue;
} else {
var temp__4126__auto___45099 = cljs.core.seq.call(null,seq__45070_45090);
if(temp__4126__auto___45099){
var seq__45070_45100__$1 = temp__4126__auto___45099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45070_45100__$1)){
var c__29647__auto___45101 = cljs.core.chunk_first.call(null,seq__45070_45100__$1);
var G__45102 = cljs.core.chunk_rest.call(null,seq__45070_45100__$1);
var G__45103 = c__29647__auto___45101;
var G__45104 = cljs.core.count.call(null,c__29647__auto___45101);
var G__45105 = (0);
seq__45070_45090 = G__45102;
chunk__45071_45091 = G__45103;
count__45072_45092 = G__45104;
i__45073_45093 = G__45105;
continue;
} else {
var f_45106 = cljs.core.first.call(null,seq__45070_45100__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45106);

var G__45107 = cljs.core.next.call(null,seq__45070_45100__$1);
var G__45108 = null;
var G__45109 = (0);
var G__45110 = (0);
seq__45070_45090 = G__45107;
chunk__45071_45091 = G__45108;
count__45072_45092 = G__45109;
i__45073_45093 = G__45110;
continue;
}
} else {
}
}
break;
}

var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__,map__45069,map__45069__$1,opts,on_cssload){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__,map__45069,map__45069__$1,opts,on_cssload){
return (function (state_45080){
var state_val_45081 = (state_45080[(1)]);
if((state_val_45081 === (2))){
var inst_45076 = (state_45080[(2)]);
var inst_45077 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_45078 = on_cssload.call(null,inst_45077);
var state_45080__$1 = (function (){var statearr_45082 = state_45080;
(statearr_45082[(7)] = inst_45076);

return statearr_45082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45080__$1,inst_45078);
} else {
if((state_val_45081 === (1))){
var inst_45074 = cljs.core.async.timeout.call(null,(100));
var state_45080__$1 = state_45080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45080__$1,(2),inst_45074);
} else {
return null;
}
}
});})(c__32383__auto__,map__45069,map__45069__$1,opts,on_cssload))
;
return ((function (switch__32321__auto__,c__32383__auto__,map__45069,map__45069__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto____0 = (function (){
var statearr_45086 = [null,null,null,null,null,null,null,null];
(statearr_45086[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto__);

(statearr_45086[(1)] = (1));

return statearr_45086;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto____1 = (function (state_45080){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45087){if((e45087 instanceof Object)){
var ex__32325__auto__ = e45087;
var statearr_45088_45111 = state_45080;
(statearr_45088_45111[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45112 = state_45080;
state_45080 = G__45112;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto__ = function(state_45080){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto____1.call(this,state_45080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__,map__45069,map__45069__$1,opts,on_cssload))
})();
var state__32385__auto__ = (function (){var statearr_45089 = f__32384__auto__.call(null);
(statearr_45089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_45089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__,map__45069,map__45069__$1,opts,on_cssload))
);

return c__32383__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map