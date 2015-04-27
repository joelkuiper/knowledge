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
return cljs.core.reduce.call(null,(function (p1__37517_SHARP_,p2__37518_SHARP_){
var and__28361__auto__ = p1__37517_SHARP_;
if(cljs.core.truth_(and__28361__auto__)){
return p2__37518_SHARP_;
} else {
return and__28361__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28373__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28373__auto__){
return or__28373__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__37520_SHARP_,p2__37519_SHARP_){
return [cljs.core.str(p2__37519_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__28373__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__28373__auto__){
return or__28373__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__28373__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__29268__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29272__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29272__auto__,method_table__29268__auto__,prefer_table__29269__auto__,method_cache__29270__auto__,cached_hierarchy__29271__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37521){
var map__37522 = p__37521;
var map__37522__$1 = ((cljs.core.seq_QMARK_.call(null,map__37522))?cljs.core.apply.call(null,cljs.core.hash_map,map__37522):map__37522);
var file = cljs.core.get.call(null,map__37522__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__37523){
var map__37524 = p__37523;
var map__37524__$1 = ((cljs.core.seq_QMARK_.call(null,map__37524))?cljs.core.apply.call(null,cljs.core.hash_map,map__37524):map__37524);
var namespace = cljs.core.get.call(null,map__37524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__29268__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29272__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29272__auto__,method_table__29268__auto__,prefer_table__29269__auto__,method_cache__29270__auto__,cached_hierarchy__29271__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e37525){if((e37525 instanceof Error)){
var e = e37525;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37525;

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
var G__37527 = arguments.length;
switch (G__37527) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37529,callback){
var map__37531 = p__37529;
var map__37531__$1 = ((cljs.core.seq_QMARK_.call(null,map__37531))?cljs.core.apply.call(null,cljs.core.hash_map,map__37531):map__37531);
var file_msg = map__37531__$1;
var request_url = cljs.core.get.call(null,map__37531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37531,map__37531__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37531,map__37531__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37532){
var map__37534 = p__37532;
var map__37534__$1 = ((cljs.core.seq_QMARK_.call(null,map__37534))?cljs.core.apply.call(null,cljs.core.hash_map,map__37534):map__37534);
var file_msg = map__37534__$1;
var meta_data = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__37534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__28373__auto__ = meta_data;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__28361__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__28361__auto__){
var or__28373__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__28373__auto____$1)){
return or__28373__auto____$1;
} else {
var and__28361__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__28361__auto____$1){
var or__28373__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__28373__auto____$2){
return or__28373__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__28361__auto____$1;
}
}
}
} else {
return and__28361__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37535,callback){
var map__37537 = p__37535;
var map__37537__$1 = ((cljs.core.seq_QMARK_.call(null,map__37537))?cljs.core.apply.call(null,cljs.core.hash_map,map__37537):map__37537);
var file_msg = map__37537__$1;
var namespace = cljs.core.get.call(null,map__37537__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__37537__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__31644__auto___37624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___37624,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___37624,out){
return (function (state_37606){
var state_val_37607 = (state_37606[(1)]);
if((state_val_37607 === (7))){
var inst_37590 = (state_37606[(7)]);
var inst_37596 = (state_37606[(2)]);
var inst_37597 = cljs.core.async.put_BANG_.call(null,out,inst_37596);
var inst_37586 = inst_37590;
var state_37606__$1 = (function (){var statearr_37608 = state_37606;
(statearr_37608[(8)] = inst_37586);

(statearr_37608[(9)] = inst_37597);

return statearr_37608;
})();
var statearr_37609_37625 = state_37606__$1;
(statearr_37609_37625[(2)] = null);

(statearr_37609_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (6))){
var inst_37602 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37610_37626 = state_37606__$1;
(statearr_37610_37626[(2)] = inst_37602);

(statearr_37610_37626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (5))){
var inst_37600 = cljs.core.async.close_BANG_.call(null,out);
var state_37606__$1 = state_37606;
var statearr_37611_37627 = state_37606__$1;
(statearr_37611_37627[(2)] = inst_37600);

(statearr_37611_37627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (4))){
var inst_37589 = (state_37606[(10)]);
var inst_37594 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37589);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37606__$1,(7),inst_37594);
} else {
if((state_val_37607 === (3))){
var inst_37604 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37606__$1,inst_37604);
} else {
if((state_val_37607 === (2))){
var inst_37586 = (state_37606[(8)]);
var inst_37589 = (state_37606[(10)]);
var inst_37589__$1 = cljs.core.nth.call(null,inst_37586,(0),null);
var inst_37590 = cljs.core.nthnext.call(null,inst_37586,(1));
var inst_37591 = (inst_37589__$1 == null);
var inst_37592 = cljs.core.not.call(null,inst_37591);
var state_37606__$1 = (function (){var statearr_37612 = state_37606;
(statearr_37612[(7)] = inst_37590);

(statearr_37612[(10)] = inst_37589__$1);

return statearr_37612;
})();
if(inst_37592){
var statearr_37613_37628 = state_37606__$1;
(statearr_37613_37628[(1)] = (4));

} else {
var statearr_37614_37629 = state_37606__$1;
(statearr_37614_37629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (1))){
var inst_37584 = cljs.core.nth.call(null,files,(0),null);
var inst_37585 = cljs.core.nthnext.call(null,files,(1));
var inst_37586 = files;
var state_37606__$1 = (function (){var statearr_37615 = state_37606;
(statearr_37615[(8)] = inst_37586);

(statearr_37615[(11)] = inst_37585);

(statearr_37615[(12)] = inst_37584);

return statearr_37615;
})();
var statearr_37616_37630 = state_37606__$1;
(statearr_37616_37630[(2)] = null);

(statearr_37616_37630[(1)] = (2));


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
});})(c__31644__auto___37624,out))
;
return ((function (switch__31582__auto__,c__31644__auto___37624,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____0 = (function (){
var statearr_37620 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37620[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__);

(statearr_37620[(1)] = (1));

return statearr_37620;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____1 = (function (state_37606){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e37621){if((e37621 instanceof Object)){
var ex__31586__auto__ = e37621;
var statearr_37622_37631 = state_37606;
(statearr_37622_37631[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37632 = state_37606;
state_37606 = G__37632;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__ = function(state_37606){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____1.call(this,state_37606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___37624,out))
})();
var state__31646__auto__ = (function (){var statearr_37623 = f__31645__auto__.call(null);
(statearr_37623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___37624);

return statearr_37623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___37624,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__37633,p__37634){
var map__37637 = p__37633;
var map__37637__$1 = ((cljs.core.seq_QMARK_.call(null,map__37637))?cljs.core.apply.call(null,cljs.core.hash_map,map__37637):map__37637);
var opts = map__37637__$1;
var url_rewriter = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__37638 = p__37634;
var map__37638__$1 = ((cljs.core.seq_QMARK_.call(null,map__37638))?cljs.core.apply.call(null,cljs.core.hash_map,map__37638):map__37638);
var file_msg = map__37638__$1;
var file = cljs.core.get.call(null,map__37638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37639){
var map__37642 = p__37639;
var map__37642__$1 = ((cljs.core.seq_QMARK_.call(null,map__37642))?cljs.core.apply.call(null,cljs.core.hash_map,map__37642):map__37642);
var file = cljs.core.get.call(null,map__37642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__37642__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__28361__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28361__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28361__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e37643){var e = e37643;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37648,p__37649){
var map__37850 = p__37648;
var map__37850__$1 = ((cljs.core.seq_QMARK_.call(null,map__37850))?cljs.core.apply.call(null,cljs.core.hash_map,map__37850):map__37850);
var opts = map__37850__$1;
var load_unchanged_files = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__37850__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__37851 = p__37649;
var map__37851__$1 = ((cljs.core.seq_QMARK_.call(null,map__37851))?cljs.core.apply.call(null,cljs.core.hash_map,map__37851):map__37851);
var msg = map__37851__$1;
var files = cljs.core.get.call(null,map__37851__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (state_37975){
var state_val_37976 = (state_37975[(1)]);
if((state_val_37976 === (7))){
var inst_37865 = (state_37975[(7)]);
var inst_37863 = (state_37975[(8)]);
var inst_37864 = (state_37975[(9)]);
var inst_37862 = (state_37975[(10)]);
var inst_37870 = cljs.core._nth.call(null,inst_37863,inst_37865);
var inst_37871 = figwheel.client.file_reloading.eval_body.call(null,inst_37870);
var inst_37872 = (inst_37865 + (1));
var tmp37977 = inst_37863;
var tmp37978 = inst_37864;
var tmp37979 = inst_37862;
var inst_37862__$1 = tmp37979;
var inst_37863__$1 = tmp37977;
var inst_37864__$1 = tmp37978;
var inst_37865__$1 = inst_37872;
var state_37975__$1 = (function (){var statearr_37980 = state_37975;
(statearr_37980[(7)] = inst_37865__$1);

(statearr_37980[(11)] = inst_37871);

(statearr_37980[(8)] = inst_37863__$1);

(statearr_37980[(9)] = inst_37864__$1);

(statearr_37980[(10)] = inst_37862__$1);

return statearr_37980;
})();
var statearr_37981_38050 = state_37975__$1;
(statearr_37981_38050[(2)] = null);

(statearr_37981_38050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (20))){
var inst_37912 = (state_37975[(12)]);
var inst_37908 = (state_37975[(13)]);
var inst_37907 = (state_37975[(14)]);
var inst_37911 = (state_37975[(15)]);
var inst_37914 = (state_37975[(16)]);
var inst_37917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37919 = (function (){var files_not_loaded = inst_37914;
var res = inst_37912;
var res_SINGLEQUOTE_ = inst_37911;
var files_SINGLEQUOTE_ = inst_37908;
var all_files = inst_37907;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37914,inst_37917,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (p__37918){
var map__37982 = p__37918;
var map__37982__$1 = ((cljs.core.seq_QMARK_.call(null,map__37982))?cljs.core.apply.call(null,cljs.core.hash_map,map__37982):map__37982);
var file = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__37982__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37914,inst_37917,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37920 = cljs.core.map.call(null,inst_37919,inst_37912);
var inst_37921 = cljs.core.pr_str.call(null,inst_37920);
var inst_37922 = figwheel.client.utils.log.call(null,inst_37921);
var inst_37923 = (function (){var files_not_loaded = inst_37914;
var res = inst_37912;
var res_SINGLEQUOTE_ = inst_37911;
var files_SINGLEQUOTE_ = inst_37908;
var all_files = inst_37907;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37914,inst_37917,inst_37919,inst_37920,inst_37921,inst_37922,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37914,inst_37917,inst_37919,inst_37920,inst_37921,inst_37922,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37924 = setTimeout(inst_37923,(10));
var state_37975__$1 = (function (){var statearr_37983 = state_37975;
(statearr_37983[(17)] = inst_37922);

(statearr_37983[(18)] = inst_37917);

return statearr_37983;
})();
var statearr_37984_38051 = state_37975__$1;
(statearr_37984_38051[(2)] = inst_37924);

(statearr_37984_38051[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (27))){
var inst_37934 = (state_37975[(19)]);
var state_37975__$1 = state_37975;
var statearr_37985_38052 = state_37975__$1;
(statearr_37985_38052[(2)] = inst_37934);

(statearr_37985_38052[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (1))){
var inst_37854 = (state_37975[(20)]);
var inst_37852 = before_jsload.call(null,files);
var inst_37853 = (function (){return ((function (inst_37854,inst_37852,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (p1__37644_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37644_SHARP_);
});
;})(inst_37854,inst_37852,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37854__$1 = cljs.core.filter.call(null,inst_37853,files);
var inst_37855 = cljs.core.not_empty.call(null,inst_37854__$1);
var state_37975__$1 = (function (){var statearr_37986 = state_37975;
(statearr_37986[(20)] = inst_37854__$1);

(statearr_37986[(21)] = inst_37852);

return statearr_37986;
})();
if(cljs.core.truth_(inst_37855)){
var statearr_37987_38053 = state_37975__$1;
(statearr_37987_38053[(1)] = (2));

} else {
var statearr_37988_38054 = state_37975__$1;
(statearr_37988_38054[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (24))){
var state_37975__$1 = state_37975;
var statearr_37989_38055 = state_37975__$1;
(statearr_37989_38055[(2)] = null);

(statearr_37989_38055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (4))){
var inst_37899 = (state_37975[(2)]);
var inst_37900 = (function (){return ((function (inst_37899,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (p1__37645_SHARP_){
var and__28361__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37645_SHARP_);
if(cljs.core.truth_(and__28361__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37645_SHARP_));
} else {
return and__28361__auto__;
}
});
;})(inst_37899,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37901 = cljs.core.filter.call(null,inst_37900,files);
var state_37975__$1 = (function (){var statearr_37990 = state_37975;
(statearr_37990[(22)] = inst_37901);

(statearr_37990[(23)] = inst_37899);

return statearr_37990;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_37991_38056 = state_37975__$1;
(statearr_37991_38056[(1)] = (16));

} else {
var statearr_37992_38057 = state_37975__$1;
(statearr_37992_38057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (15))){
var inst_37889 = (state_37975[(2)]);
var state_37975__$1 = state_37975;
var statearr_37993_38058 = state_37975__$1;
(statearr_37993_38058[(2)] = inst_37889);

(statearr_37993_38058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (21))){
var state_37975__$1 = state_37975;
var statearr_37994_38059 = state_37975__$1;
(statearr_37994_38059[(2)] = null);

(statearr_37994_38059[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (31))){
var inst_37942 = (state_37975[(24)]);
var inst_37952 = (state_37975[(2)]);
var inst_37953 = cljs.core.not_empty.call(null,inst_37942);
var state_37975__$1 = (function (){var statearr_37995 = state_37975;
(statearr_37995[(25)] = inst_37952);

return statearr_37995;
})();
if(cljs.core.truth_(inst_37953)){
var statearr_37996_38060 = state_37975__$1;
(statearr_37996_38060[(1)] = (32));

} else {
var statearr_37997_38061 = state_37975__$1;
(statearr_37997_38061[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (32))){
var inst_37942 = (state_37975[(24)]);
var inst_37955 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37942);
var inst_37956 = cljs.core.pr_str.call(null,inst_37955);
var inst_37957 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_37956)].join('');
var inst_37958 = figwheel.client.utils.log.call(null,inst_37957);
var state_37975__$1 = state_37975;
var statearr_37998_38062 = state_37975__$1;
(statearr_37998_38062[(2)] = inst_37958);

(statearr_37998_38062[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (33))){
var state_37975__$1 = state_37975;
var statearr_37999_38063 = state_37975__$1;
(statearr_37999_38063[(2)] = null);

(statearr_37999_38063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (13))){
var inst_37875 = (state_37975[(26)]);
var inst_37879 = cljs.core.chunk_first.call(null,inst_37875);
var inst_37880 = cljs.core.chunk_rest.call(null,inst_37875);
var inst_37881 = cljs.core.count.call(null,inst_37879);
var inst_37862 = inst_37880;
var inst_37863 = inst_37879;
var inst_37864 = inst_37881;
var inst_37865 = (0);
var state_37975__$1 = (function (){var statearr_38000 = state_37975;
(statearr_38000[(7)] = inst_37865);

(statearr_38000[(8)] = inst_37863);

(statearr_38000[(9)] = inst_37864);

(statearr_38000[(10)] = inst_37862);

return statearr_38000;
})();
var statearr_38001_38064 = state_37975__$1;
(statearr_38001_38064[(2)] = null);

(statearr_38001_38064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (22))){
var inst_37914 = (state_37975[(16)]);
var inst_37927 = (state_37975[(2)]);
var inst_37928 = cljs.core.not_empty.call(null,inst_37914);
var state_37975__$1 = (function (){var statearr_38002 = state_37975;
(statearr_38002[(27)] = inst_37927);

return statearr_38002;
})();
if(cljs.core.truth_(inst_37928)){
var statearr_38003_38065 = state_37975__$1;
(statearr_38003_38065[(1)] = (23));

} else {
var statearr_38004_38066 = state_37975__$1;
(statearr_38004_38066[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (36))){
var state_37975__$1 = state_37975;
var statearr_38005_38067 = state_37975__$1;
(statearr_38005_38067[(2)] = null);

(statearr_38005_38067[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (29))){
var inst_37943 = (state_37975[(28)]);
var inst_37946 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37943);
var inst_37947 = cljs.core.pr_str.call(null,inst_37946);
var inst_37948 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37947)].join('');
var inst_37949 = figwheel.client.utils.log.call(null,inst_37948);
var state_37975__$1 = state_37975;
var statearr_38006_38068 = state_37975__$1;
(statearr_38006_38068[(2)] = inst_37949);

(statearr_38006_38068[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (6))){
var inst_37896 = (state_37975[(2)]);
var state_37975__$1 = state_37975;
var statearr_38007_38069 = state_37975__$1;
(statearr_38007_38069[(2)] = inst_37896);

(statearr_38007_38069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (28))){
var inst_37943 = (state_37975[(28)]);
var inst_37940 = (state_37975[(2)]);
var inst_37941 = cljs.core.get.call(null,inst_37940,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37942 = cljs.core.get.call(null,inst_37940,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_37943__$1 = cljs.core.get.call(null,inst_37940,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37944 = cljs.core.not_empty.call(null,inst_37943__$1);
var state_37975__$1 = (function (){var statearr_38008 = state_37975;
(statearr_38008[(24)] = inst_37942);

(statearr_38008[(28)] = inst_37943__$1);

(statearr_38008[(29)] = inst_37941);

return statearr_38008;
})();
if(cljs.core.truth_(inst_37944)){
var statearr_38009_38070 = state_37975__$1;
(statearr_38009_38070[(1)] = (29));

} else {
var statearr_38010_38071 = state_37975__$1;
(statearr_38010_38071[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (25))){
var inst_37973 = (state_37975[(2)]);
var state_37975__$1 = state_37975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37975__$1,inst_37973);
} else {
if((state_val_37976 === (34))){
var inst_37941 = (state_37975[(29)]);
var inst_37961 = (state_37975[(2)]);
var inst_37962 = cljs.core.not_empty.call(null,inst_37941);
var state_37975__$1 = (function (){var statearr_38011 = state_37975;
(statearr_38011[(30)] = inst_37961);

return statearr_38011;
})();
if(cljs.core.truth_(inst_37962)){
var statearr_38012_38072 = state_37975__$1;
(statearr_38012_38072[(1)] = (35));

} else {
var statearr_38013_38073 = state_37975__$1;
(statearr_38013_38073[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (17))){
var inst_37901 = (state_37975[(22)]);
var state_37975__$1 = state_37975;
var statearr_38014_38074 = state_37975__$1;
(statearr_38014_38074[(2)] = inst_37901);

(statearr_38014_38074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (3))){
var state_37975__$1 = state_37975;
var statearr_38015_38075 = state_37975__$1;
(statearr_38015_38075[(2)] = null);

(statearr_38015_38075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (12))){
var inst_37892 = (state_37975[(2)]);
var state_37975__$1 = state_37975;
var statearr_38016_38076 = state_37975__$1;
(statearr_38016_38076[(2)] = inst_37892);

(statearr_38016_38076[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (2))){
var inst_37854 = (state_37975[(20)]);
var inst_37861 = cljs.core.seq.call(null,inst_37854);
var inst_37862 = inst_37861;
var inst_37863 = null;
var inst_37864 = (0);
var inst_37865 = (0);
var state_37975__$1 = (function (){var statearr_38017 = state_37975;
(statearr_38017[(7)] = inst_37865);

(statearr_38017[(8)] = inst_37863);

(statearr_38017[(9)] = inst_37864);

(statearr_38017[(10)] = inst_37862);

return statearr_38017;
})();
var statearr_38018_38077 = state_37975__$1;
(statearr_38018_38077[(2)] = null);

(statearr_38018_38077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (23))){
var inst_37912 = (state_37975[(12)]);
var inst_37908 = (state_37975[(13)]);
var inst_37907 = (state_37975[(14)]);
var inst_37911 = (state_37975[(15)]);
var inst_37934 = (state_37975[(19)]);
var inst_37914 = (state_37975[(16)]);
var inst_37930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37933 = (function (){var files_not_loaded = inst_37914;
var res = inst_37912;
var res_SINGLEQUOTE_ = inst_37911;
var files_SINGLEQUOTE_ = inst_37908;
var all_files = inst_37907;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37934,inst_37914,inst_37930,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (p__37932){
var map__38019 = p__37932;
var map__38019__$1 = ((cljs.core.seq_QMARK_.call(null,map__38019))?cljs.core.apply.call(null,cljs.core.hash_map,map__38019):map__38019);
var meta_data = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37934,inst_37914,inst_37930,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37934__$1 = cljs.core.group_by.call(null,inst_37933,inst_37914);
var inst_37935 = cljs.core.seq_QMARK_.call(null,inst_37934__$1);
var state_37975__$1 = (function (){var statearr_38020 = state_37975;
(statearr_38020[(19)] = inst_37934__$1);

(statearr_38020[(31)] = inst_37930);

return statearr_38020;
})();
if(inst_37935){
var statearr_38021_38078 = state_37975__$1;
(statearr_38021_38078[(1)] = (26));

} else {
var statearr_38022_38079 = state_37975__$1;
(statearr_38022_38079[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (35))){
var inst_37941 = (state_37975[(29)]);
var inst_37964 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37941);
var inst_37965 = cljs.core.pr_str.call(null,inst_37964);
var inst_37966 = [cljs.core.str("not required: "),cljs.core.str(inst_37965)].join('');
var inst_37967 = figwheel.client.utils.log.call(null,inst_37966);
var state_37975__$1 = state_37975;
var statearr_38023_38080 = state_37975__$1;
(statearr_38023_38080[(2)] = inst_37967);

(statearr_38023_38080[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (19))){
var inst_37912 = (state_37975[(12)]);
var inst_37908 = (state_37975[(13)]);
var inst_37907 = (state_37975[(14)]);
var inst_37911 = (state_37975[(15)]);
var inst_37911__$1 = (state_37975[(2)]);
var inst_37912__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37911__$1);
var inst_37913 = (function (){var res = inst_37912__$1;
var res_SINGLEQUOTE_ = inst_37911__$1;
var files_SINGLEQUOTE_ = inst_37908;
var all_files = inst_37907;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37911__$1,inst_37912__$1,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (p1__37647_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37647_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37912,inst_37908,inst_37907,inst_37911,inst_37911__$1,inst_37912__$1,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37914 = cljs.core.filter.call(null,inst_37913,inst_37911__$1);
var inst_37915 = cljs.core.not_empty.call(null,inst_37912__$1);
var state_37975__$1 = (function (){var statearr_38024 = state_37975;
(statearr_38024[(12)] = inst_37912__$1);

(statearr_38024[(15)] = inst_37911__$1);

(statearr_38024[(16)] = inst_37914);

return statearr_38024;
})();
if(cljs.core.truth_(inst_37915)){
var statearr_38025_38081 = state_37975__$1;
(statearr_38025_38081[(1)] = (20));

} else {
var statearr_38026_38082 = state_37975__$1;
(statearr_38026_38082[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (11))){
var state_37975__$1 = state_37975;
var statearr_38027_38083 = state_37975__$1;
(statearr_38027_38083[(2)] = null);

(statearr_38027_38083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (9))){
var inst_37894 = (state_37975[(2)]);
var state_37975__$1 = state_37975;
var statearr_38028_38084 = state_37975__$1;
(statearr_38028_38084[(2)] = inst_37894);

(statearr_38028_38084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (5))){
var inst_37865 = (state_37975[(7)]);
var inst_37864 = (state_37975[(9)]);
var inst_37867 = (inst_37865 < inst_37864);
var inst_37868 = inst_37867;
var state_37975__$1 = state_37975;
if(cljs.core.truth_(inst_37868)){
var statearr_38029_38085 = state_37975__$1;
(statearr_38029_38085[(1)] = (7));

} else {
var statearr_38030_38086 = state_37975__$1;
(statearr_38030_38086[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (14))){
var inst_37875 = (state_37975[(26)]);
var inst_37884 = cljs.core.first.call(null,inst_37875);
var inst_37885 = figwheel.client.file_reloading.eval_body.call(null,inst_37884);
var inst_37886 = cljs.core.next.call(null,inst_37875);
var inst_37862 = inst_37886;
var inst_37863 = null;
var inst_37864 = (0);
var inst_37865 = (0);
var state_37975__$1 = (function (){var statearr_38031 = state_37975;
(statearr_38031[(7)] = inst_37865);

(statearr_38031[(32)] = inst_37885);

(statearr_38031[(8)] = inst_37863);

(statearr_38031[(9)] = inst_37864);

(statearr_38031[(10)] = inst_37862);

return statearr_38031;
})();
var statearr_38032_38087 = state_37975__$1;
(statearr_38032_38087[(2)] = null);

(statearr_38032_38087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (26))){
var inst_37934 = (state_37975[(19)]);
var inst_37937 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37934);
var state_37975__$1 = state_37975;
var statearr_38033_38088 = state_37975__$1;
(statearr_38033_38088[(2)] = inst_37937);

(statearr_38033_38088[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (16))){
var inst_37901 = (state_37975[(22)]);
var inst_37903 = (function (){var all_files = inst_37901;
return ((function (all_files,inst_37901,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function (p1__37646_SHARP_){
return cljs.core.update_in.call(null,p1__37646_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_37901,state_val_37976,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var inst_37904 = cljs.core.map.call(null,inst_37903,inst_37901);
var state_37975__$1 = state_37975;
var statearr_38034_38089 = state_37975__$1;
(statearr_38034_38089[(2)] = inst_37904);

(statearr_38034_38089[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (30))){
var state_37975__$1 = state_37975;
var statearr_38035_38090 = state_37975__$1;
(statearr_38035_38090[(2)] = null);

(statearr_38035_38090[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (10))){
var inst_37875 = (state_37975[(26)]);
var inst_37877 = cljs.core.chunked_seq_QMARK_.call(null,inst_37875);
var state_37975__$1 = state_37975;
if(inst_37877){
var statearr_38036_38091 = state_37975__$1;
(statearr_38036_38091[(1)] = (13));

} else {
var statearr_38037_38092 = state_37975__$1;
(statearr_38037_38092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (18))){
var inst_37908 = (state_37975[(13)]);
var inst_37907 = (state_37975[(14)]);
var inst_37907__$1 = (state_37975[(2)]);
var inst_37908__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_37907__$1);
var inst_37909 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37908__$1);
var state_37975__$1 = (function (){var statearr_38038 = state_37975;
(statearr_38038[(13)] = inst_37908__$1);

(statearr_38038[(14)] = inst_37907__$1);

return statearr_38038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37975__$1,(19),inst_37909);
} else {
if((state_val_37976 === (37))){
var inst_37970 = (state_37975[(2)]);
var state_37975__$1 = state_37975;
var statearr_38039_38093 = state_37975__$1;
(statearr_38039_38093[(2)] = inst_37970);

(statearr_38039_38093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37976 === (8))){
var inst_37875 = (state_37975[(26)]);
var inst_37862 = (state_37975[(10)]);
var inst_37875__$1 = cljs.core.seq.call(null,inst_37862);
var state_37975__$1 = (function (){var statearr_38040 = state_37975;
(statearr_38040[(26)] = inst_37875__$1);

return statearr_38040;
})();
if(inst_37875__$1){
var statearr_38041_38094 = state_37975__$1;
(statearr_38041_38094[(1)] = (10));

} else {
var statearr_38042_38095 = state_37975__$1;
(statearr_38042_38095[(1)] = (11));

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
});})(c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
;
return ((function (switch__31582__auto__,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____0 = (function (){
var statearr_38046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38046[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__);

(statearr_38046[(1)] = (1));

return statearr_38046;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____1 = (function (state_37975){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38047){if((e38047 instanceof Object)){
var ex__31586__auto__ = e38047;
var statearr_38048_38096 = state_37975;
(statearr_38048_38096[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38097 = state_37975;
state_37975 = G__38097;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__ = function(state_37975){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____1.call(this,state_37975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
})();
var state__31646__auto__ = (function (){var statearr_38049 = f__31645__auto__.call(null);
(statearr_38049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_38049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__,map__37850,map__37850__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37851,map__37851__$1,msg,files))
);

return c__31644__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38100,link){
var map__38102 = p__38100;
var map__38102__$1 = ((cljs.core.seq_QMARK_.call(null,map__38102))?cljs.core.apply.call(null,cljs.core.hash_map,map__38102):map__38102);
var file = cljs.core.get.call(null,map__38102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__38102,map__38102__$1,file){
return (function (p1__38098_SHARP_,p2__38099_SHARP_){
if(cljs.core._EQ_.call(null,p1__38098_SHARP_,p2__38099_SHARP_)){
return p1__38098_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__38102,map__38102__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38106){
var map__38107 = p__38106;
var map__38107__$1 = ((cljs.core.seq_QMARK_.call(null,map__38107))?cljs.core.apply.call(null,cljs.core.hash_map,map__38107):map__38107);
var current_url_length = cljs.core.get.call(null,map__38107__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__38107__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38103_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38103_SHARP_);
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
var G__38109 = arguments.length;
switch (G__38109) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__38111){
var map__38113 = p__38111;
var map__38113__$1 = ((cljs.core.seq_QMARK_.call(null,map__38113))?cljs.core.apply.call(null,cljs.core.hash_map,map__38113):map__38113);
var f_data = map__38113__$1;
var request_url = cljs.core.get.call(null,map__38113__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__38113__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__28373__auto__ = request_url;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38114,files_msg){
var map__38136 = p__38114;
var map__38136__$1 = ((cljs.core.seq_QMARK_.call(null,map__38136))?cljs.core.apply.call(null,cljs.core.hash_map,map__38136):map__38136);
var opts = map__38136__$1;
var on_cssload = cljs.core.get.call(null,map__38136__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__38137_38157 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__38138_38158 = null;
var count__38139_38159 = (0);
var i__38140_38160 = (0);
while(true){
if((i__38140_38160 < count__38139_38159)){
var f_38161 = cljs.core._nth.call(null,chunk__38138_38158,i__38140_38160);
figwheel.client.file_reloading.reload_css_file.call(null,f_38161);

var G__38162 = seq__38137_38157;
var G__38163 = chunk__38138_38158;
var G__38164 = count__38139_38159;
var G__38165 = (i__38140_38160 + (1));
seq__38137_38157 = G__38162;
chunk__38138_38158 = G__38163;
count__38139_38159 = G__38164;
i__38140_38160 = G__38165;
continue;
} else {
var temp__4126__auto___38166 = cljs.core.seq.call(null,seq__38137_38157);
if(temp__4126__auto___38166){
var seq__38137_38167__$1 = temp__4126__auto___38166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38137_38167__$1)){
var c__29158__auto___38168 = cljs.core.chunk_first.call(null,seq__38137_38167__$1);
var G__38169 = cljs.core.chunk_rest.call(null,seq__38137_38167__$1);
var G__38170 = c__29158__auto___38168;
var G__38171 = cljs.core.count.call(null,c__29158__auto___38168);
var G__38172 = (0);
seq__38137_38157 = G__38169;
chunk__38138_38158 = G__38170;
count__38139_38159 = G__38171;
i__38140_38160 = G__38172;
continue;
} else {
var f_38173 = cljs.core.first.call(null,seq__38137_38167__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38173);

var G__38174 = cljs.core.next.call(null,seq__38137_38167__$1);
var G__38175 = null;
var G__38176 = (0);
var G__38177 = (0);
seq__38137_38157 = G__38174;
chunk__38138_38158 = G__38175;
count__38139_38159 = G__38176;
i__38140_38160 = G__38177;
continue;
}
} else {
}
}
break;
}

var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__,map__38136,map__38136__$1,opts,on_cssload){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__,map__38136,map__38136__$1,opts,on_cssload){
return (function (state_38147){
var state_val_38148 = (state_38147[(1)]);
if((state_val_38148 === (2))){
var inst_38143 = (state_38147[(2)]);
var inst_38144 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_38145 = on_cssload.call(null,inst_38144);
var state_38147__$1 = (function (){var statearr_38149 = state_38147;
(statearr_38149[(7)] = inst_38143);

return statearr_38149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38147__$1,inst_38145);
} else {
if((state_val_38148 === (1))){
var inst_38141 = cljs.core.async.timeout.call(null,(100));
var state_38147__$1 = state_38147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38147__$1,(2),inst_38141);
} else {
return null;
}
}
});})(c__31644__auto__,map__38136,map__38136__$1,opts,on_cssload))
;
return ((function (switch__31582__auto__,c__31644__auto__,map__38136,map__38136__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto____0 = (function (){
var statearr_38153 = [null,null,null,null,null,null,null,null];
(statearr_38153[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto__);

(statearr_38153[(1)] = (1));

return statearr_38153;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto____1 = (function (state_38147){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38154){if((e38154 instanceof Object)){
var ex__31586__auto__ = e38154;
var statearr_38155_38178 = state_38147;
(statearr_38155_38178[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38179 = state_38147;
state_38147 = G__38179;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto__ = function(state_38147){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto____1.call(this,state_38147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__,map__38136,map__38136__$1,opts,on_cssload))
})();
var state__31646__auto__ = (function (){var statearr_38156 = f__31645__auto__.call(null);
(statearr_38156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_38156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__,map__38136,map__38136__$1,opts,on_cssload))
);

return c__31644__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map