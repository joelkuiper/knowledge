// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36563__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__36563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36564__i = 0, G__36564__a = new Array(arguments.length -  0);
while (G__36564__i < G__36564__a.length) {G__36564__a[G__36564__i] = arguments[G__36564__i + 0]; ++G__36564__i;}
  args = new cljs.core.IndexedSeq(G__36564__a,0);
} 
return G__36563__delegate.call(this,args);};
G__36563.cljs$lang$maxFixedArity = 0;
G__36563.cljs$lang$applyTo = (function (arglist__36565){
var args = cljs.core.seq(arglist__36565);
return G__36563__delegate(args);
});
G__36563.cljs$core$IFn$_invoke$arity$variadic = G__36563__delegate;
return G__36563;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36566){
var map__36568 = p__36566;
var map__36568__$1 = ((cljs.core.seq_QMARK_.call(null,map__36568))?cljs.core.apply.call(null,cljs.core.hash_map,map__36568):map__36568);
var class$ = cljs.core.get.call(null,map__36568__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__36568__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28373__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28361__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28361__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28361__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31644__auto___36697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___36697,ch){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___36697,ch){
return (function (state_36671){
var state_val_36672 = (state_36671[(1)]);
if((state_val_36672 === (7))){
var inst_36667 = (state_36671[(2)]);
var state_36671__$1 = state_36671;
var statearr_36673_36698 = state_36671__$1;
(statearr_36673_36698[(2)] = inst_36667);

(statearr_36673_36698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (1))){
var state_36671__$1 = state_36671;
var statearr_36674_36699 = state_36671__$1;
(statearr_36674_36699[(2)] = null);

(statearr_36674_36699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (4))){
var inst_36635 = (state_36671[(7)]);
var inst_36635__$1 = (state_36671[(2)]);
var state_36671__$1 = (function (){var statearr_36675 = state_36671;
(statearr_36675[(7)] = inst_36635__$1);

return statearr_36675;
})();
if(cljs.core.truth_(inst_36635__$1)){
var statearr_36676_36700 = state_36671__$1;
(statearr_36676_36700[(1)] = (5));

} else {
var statearr_36677_36701 = state_36671__$1;
(statearr_36677_36701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (13))){
var state_36671__$1 = state_36671;
var statearr_36678_36702 = state_36671__$1;
(statearr_36678_36702[(2)] = null);

(statearr_36678_36702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (6))){
var state_36671__$1 = state_36671;
var statearr_36679_36703 = state_36671__$1;
(statearr_36679_36703[(2)] = null);

(statearr_36679_36703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (3))){
var inst_36669 = (state_36671[(2)]);
var state_36671__$1 = state_36671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36671__$1,inst_36669);
} else {
if((state_val_36672 === (12))){
var inst_36642 = (state_36671[(8)]);
var inst_36655 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36642);
var inst_36656 = cljs.core.first.call(null,inst_36655);
var inst_36657 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36656);
var inst_36658 = console.warn("Figwheel: Not loading code with warnings - ",inst_36657);
var state_36671__$1 = state_36671;
var statearr_36680_36704 = state_36671__$1;
(statearr_36680_36704[(2)] = inst_36658);

(statearr_36680_36704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (2))){
var state_36671__$1 = state_36671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36671__$1,(4),ch);
} else {
if((state_val_36672 === (11))){
var inst_36651 = (state_36671[(2)]);
var state_36671__$1 = state_36671;
var statearr_36681_36705 = state_36671__$1;
(statearr_36681_36705[(2)] = inst_36651);

(statearr_36681_36705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (9))){
var inst_36641 = (state_36671[(9)]);
var inst_36653 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36641,opts);
var state_36671__$1 = state_36671;
if(cljs.core.truth_(inst_36653)){
var statearr_36682_36706 = state_36671__$1;
(statearr_36682_36706[(1)] = (12));

} else {
var statearr_36683_36707 = state_36671__$1;
(statearr_36683_36707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (5))){
var inst_36635 = (state_36671[(7)]);
var inst_36641 = (state_36671[(9)]);
var inst_36637 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36638 = (new cljs.core.PersistentArrayMap(null,2,inst_36637,null));
var inst_36639 = (new cljs.core.PersistentHashSet(null,inst_36638,null));
var inst_36640 = figwheel.client.focus_msgs.call(null,inst_36639,inst_36635);
var inst_36641__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36640);
var inst_36642 = cljs.core.first.call(null,inst_36640);
var inst_36643 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36641__$1,opts);
var state_36671__$1 = (function (){var statearr_36684 = state_36671;
(statearr_36684[(8)] = inst_36642);

(statearr_36684[(9)] = inst_36641__$1);

return statearr_36684;
})();
if(cljs.core.truth_(inst_36643)){
var statearr_36685_36708 = state_36671__$1;
(statearr_36685_36708[(1)] = (8));

} else {
var statearr_36686_36709 = state_36671__$1;
(statearr_36686_36709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (14))){
var inst_36661 = (state_36671[(2)]);
var state_36671__$1 = state_36671;
var statearr_36687_36710 = state_36671__$1;
(statearr_36687_36710[(2)] = inst_36661);

(statearr_36687_36710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (10))){
var inst_36663 = (state_36671[(2)]);
var state_36671__$1 = (function (){var statearr_36688 = state_36671;
(statearr_36688[(10)] = inst_36663);

return statearr_36688;
})();
var statearr_36689_36711 = state_36671__$1;
(statearr_36689_36711[(2)] = null);

(statearr_36689_36711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36672 === (8))){
var inst_36642 = (state_36671[(8)]);
var inst_36645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36646 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36642);
var inst_36647 = cljs.core.async.timeout.call(null,(1000));
var inst_36648 = [inst_36646,inst_36647];
var inst_36649 = (new cljs.core.PersistentVector(null,2,(5),inst_36645,inst_36648,null));
var state_36671__$1 = state_36671;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36671__$1,(11),inst_36649);
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
});})(c__31644__auto___36697,ch))
;
return ((function (switch__31582__auto__,c__31644__auto___36697,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_36693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36693[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__);

(statearr_36693[(1)] = (1));

return statearr_36693;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____1 = (function (state_36671){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36694){if((e36694 instanceof Object)){
var ex__31586__auto__ = e36694;
var statearr_36695_36712 = state_36671;
(statearr_36695_36712[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36713 = state_36671;
state_36671 = G__36713;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__ = function(state_36671){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____1.call(this,state_36671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31583__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___36697,ch))
})();
var state__31646__auto__ = (function (){var statearr_36696 = f__31645__auto__.call(null);
(statearr_36696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___36697);

return statearr_36696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___36697,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36714_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36714_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_36723 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__36716_SHARP_,p2__36715_SHARP_){
return [cljs.core.str(p2__36715_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36723){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_36721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36722 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_36721,_STAR_print_newline_STAR_36722,base_path_36723){
return (function() { 
var G__36724__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__36724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36725__i = 0, G__36725__a = new Array(arguments.length -  0);
while (G__36725__i < G__36725__a.length) {G__36725__a[G__36725__i] = arguments[G__36725__i + 0]; ++G__36725__i;}
  args = new cljs.core.IndexedSeq(G__36725__a,0);
} 
return G__36724__delegate.call(this,args);};
G__36724.cljs$lang$maxFixedArity = 0;
G__36724.cljs$lang$applyTo = (function (arglist__36726){
var args = cljs.core.seq(arglist__36726);
return G__36724__delegate(args);
});
G__36724.cljs$core$IFn$_invoke$arity$variadic = G__36724__delegate;
return G__36724;
})()
;})(_STAR_print_fn_STAR_36721,_STAR_print_newline_STAR_36722,base_path_36723))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36722;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36721;
}}catch (e36720){if((e36720 instanceof Error)){
var e = e36720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36723], null));
} else {
var e = e36720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36723))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36727){
var map__36732 = p__36727;
var map__36732__$1 = ((cljs.core.seq_QMARK_.call(null,map__36732))?cljs.core.apply.call(null,cljs.core.hash_map,map__36732):map__36732);
var opts = map__36732__$1;
var build_id = cljs.core.get.call(null,map__36732__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36732,map__36732__$1,opts,build_id){
return (function (p__36733){
var vec__36734 = p__36733;
var map__36735 = cljs.core.nth.call(null,vec__36734,(0),null);
var map__36735__$1 = ((cljs.core.seq_QMARK_.call(null,map__36735))?cljs.core.apply.call(null,cljs.core.hash_map,map__36735):map__36735);
var msg = map__36735__$1;
var msg_name = cljs.core.get.call(null,map__36735__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36734,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__36734,map__36735,map__36735__$1,msg,msg_name,_,map__36732,map__36732__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36734,map__36735,map__36735__$1,msg,msg_name,_,map__36732,map__36732__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36732,map__36732__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36739){
var vec__36740 = p__36739;
var map__36741 = cljs.core.nth.call(null,vec__36740,(0),null);
var map__36741__$1 = ((cljs.core.seq_QMARK_.call(null,map__36741))?cljs.core.apply.call(null,cljs.core.hash_map,map__36741):map__36741);
var msg = map__36741__$1;
var msg_name = cljs.core.get.call(null,map__36741__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36740,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36742){
var map__36750 = p__36742;
var map__36750__$1 = ((cljs.core.seq_QMARK_.call(null,map__36750))?cljs.core.apply.call(null,cljs.core.hash_map,map__36750):map__36750);
var on_compile_fail = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__36750__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__36750,map__36750__$1,on_compile_fail,on_compile_warning){
return (function (p__36751){
var vec__36752 = p__36751;
var map__36753 = cljs.core.nth.call(null,vec__36752,(0),null);
var map__36753__$1 = ((cljs.core.seq_QMARK_.call(null,map__36753))?cljs.core.apply.call(null,cljs.core.hash_map,map__36753):map__36753);
var msg = map__36753__$1;
var msg_name = cljs.core.get.call(null,map__36753__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36752,(1));
var pred__36754 = cljs.core._EQ_;
var expr__36755 = msg_name;
if(cljs.core.truth_(pred__36754.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36755))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36754.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36755))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36750,map__36750__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__,msg_hist,msg_names,msg){
return (function (state_36952){
var state_val_36953 = (state_36952[(1)]);
if((state_val_36953 === (7))){
var inst_36888 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36954_36995 = state_36952__$1;
(statearr_36954_36995[(2)] = inst_36888);

(statearr_36954_36995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (20))){
var inst_36914 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36914)){
var statearr_36955_36996 = state_36952__$1;
(statearr_36955_36996[(1)] = (22));

} else {
var statearr_36956_36997 = state_36952__$1;
(statearr_36956_36997[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (27))){
var inst_36926 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36927 = figwheel.client.heads_up.display_warning.call(null,inst_36926);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(30),inst_36927);
} else {
if((state_val_36953 === (1))){
var inst_36876 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36876)){
var statearr_36957_36998 = state_36952__$1;
(statearr_36957_36998[(1)] = (2));

} else {
var statearr_36958_36999 = state_36952__$1;
(statearr_36958_36999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (24))){
var inst_36942 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36959_37000 = state_36952__$1;
(statearr_36959_37000[(2)] = inst_36942);

(statearr_36959_37000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (4))){
var inst_36950 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36952__$1,inst_36950);
} else {
if((state_val_36953 === (15))){
var inst_36903 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36904 = figwheel.client.format_messages.call(null,inst_36903);
var inst_36905 = figwheel.client.heads_up.display_error.call(null,inst_36904);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(18),inst_36905);
} else {
if((state_val_36953 === (21))){
var inst_36944 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36960_37001 = state_36952__$1;
(statearr_36960_37001[(2)] = inst_36944);

(statearr_36960_37001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (31))){
var inst_36933 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(34),inst_36933);
} else {
if((state_val_36953 === (32))){
var state_36952__$1 = state_36952;
var statearr_36961_37002 = state_36952__$1;
(statearr_36961_37002[(2)] = null);

(statearr_36961_37002[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (33))){
var inst_36938 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36962_37003 = state_36952__$1;
(statearr_36962_37003[(2)] = inst_36938);

(statearr_36962_37003[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (13))){
var inst_36894 = (state_36952[(2)]);
var inst_36895 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36896 = figwheel.client.format_messages.call(null,inst_36895);
var inst_36897 = figwheel.client.heads_up.display_error.call(null,inst_36896);
var state_36952__$1 = (function (){var statearr_36963 = state_36952;
(statearr_36963[(7)] = inst_36894);

return statearr_36963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(14),inst_36897);
} else {
if((state_val_36953 === (22))){
var inst_36916 = figwheel.client.heads_up.clear.call(null);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(25),inst_36916);
} else {
if((state_val_36953 === (29))){
var inst_36940 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36964_37004 = state_36952__$1;
(statearr_36964_37004[(2)] = inst_36940);

(statearr_36964_37004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (6))){
var inst_36884 = figwheel.client.heads_up.clear.call(null);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(9),inst_36884);
} else {
if((state_val_36953 === (28))){
var inst_36931 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36931)){
var statearr_36965_37005 = state_36952__$1;
(statearr_36965_37005[(1)] = (31));

} else {
var statearr_36966_37006 = state_36952__$1;
(statearr_36966_37006[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (25))){
var inst_36918 = (state_36952[(2)]);
var inst_36919 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36920 = figwheel.client.heads_up.display_warning.call(null,inst_36919);
var state_36952__$1 = (function (){var statearr_36967 = state_36952;
(statearr_36967[(8)] = inst_36918);

return statearr_36967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(26),inst_36920);
} else {
if((state_val_36953 === (34))){
var inst_36935 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36968_37007 = state_36952__$1;
(statearr_36968_37007[(2)] = inst_36935);

(statearr_36968_37007[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (17))){
var inst_36946 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36969_37008 = state_36952__$1;
(statearr_36969_37008[(2)] = inst_36946);

(statearr_36969_37008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (3))){
var inst_36890 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36890)){
var statearr_36970_37009 = state_36952__$1;
(statearr_36970_37009[(1)] = (10));

} else {
var statearr_36971_37010 = state_36952__$1;
(statearr_36971_37010[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (12))){
var inst_36948 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36972_37011 = state_36952__$1;
(statearr_36972_37011[(2)] = inst_36948);

(statearr_36972_37011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (2))){
var inst_36878 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36878)){
var statearr_36973_37012 = state_36952__$1;
(statearr_36973_37012[(1)] = (5));

} else {
var statearr_36974_37013 = state_36952__$1;
(statearr_36974_37013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (23))){
var inst_36924 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36924)){
var statearr_36975_37014 = state_36952__$1;
(statearr_36975_37014[(1)] = (27));

} else {
var statearr_36976_37015 = state_36952__$1;
(statearr_36976_37015[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (19))){
var inst_36911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36912 = figwheel.client.heads_up.append_message.call(null,inst_36911);
var state_36952__$1 = state_36952;
var statearr_36977_37016 = state_36952__$1;
(statearr_36977_37016[(2)] = inst_36912);

(statearr_36977_37016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (11))){
var inst_36901 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36901)){
var statearr_36978_37017 = state_36952__$1;
(statearr_36978_37017[(1)] = (15));

} else {
var statearr_36979_37018 = state_36952__$1;
(statearr_36979_37018[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (9))){
var inst_36886 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36980_37019 = state_36952__$1;
(statearr_36980_37019[(2)] = inst_36886);

(statearr_36980_37019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (5))){
var inst_36880 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(8),inst_36880);
} else {
if((state_val_36953 === (14))){
var inst_36899 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36981_37020 = state_36952__$1;
(statearr_36981_37020[(2)] = inst_36899);

(statearr_36981_37020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (26))){
var inst_36922 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36982_37021 = state_36952__$1;
(statearr_36982_37021[(2)] = inst_36922);

(statearr_36982_37021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (16))){
var inst_36909 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36952__$1 = state_36952;
if(cljs.core.truth_(inst_36909)){
var statearr_36983_37022 = state_36952__$1;
(statearr_36983_37022[(1)] = (19));

} else {
var statearr_36984_37023 = state_36952__$1;
(statearr_36984_37023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (30))){
var inst_36929 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36985_37024 = state_36952__$1;
(statearr_36985_37024[(2)] = inst_36929);

(statearr_36985_37024[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (10))){
var inst_36892 = figwheel.client.heads_up.clear.call(null);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(13),inst_36892);
} else {
if((state_val_36953 === (18))){
var inst_36907 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36986_37025 = state_36952__$1;
(statearr_36986_37025[(2)] = inst_36907);

(statearr_36986_37025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (8))){
var inst_36882 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36987_37026 = state_36952__$1;
(statearr_36987_37026[(2)] = inst_36882);

(statearr_36987_37026[(1)] = (7));


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
});})(c__31644__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31582__auto__,c__31644__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____0 = (function (){
var statearr_36991 = [null,null,null,null,null,null,null,null,null];
(statearr_36991[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__);

(statearr_36991[(1)] = (1));

return statearr_36991;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____1 = (function (state_36952){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_36952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e36992){if((e36992 instanceof Object)){
var ex__31586__auto__ = e36992;
var statearr_36993_37027 = state_36952;
(statearr_36993_37027[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37028 = state_36952;
state_36952 = G__37028;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__ = function(state_36952){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____1.call(this,state_36952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__,msg_hist,msg_names,msg))
})();
var state__31646__auto__ = (function (){var statearr_36994 = f__31645__auto__.call(null);
(statearr_36994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_36994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__,msg_hist,msg_names,msg))
);

return c__31644__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31644__auto___37091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___37091,ch){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___37091,ch){
return (function (state_37074){
var state_val_37075 = (state_37074[(1)]);
if((state_val_37075 === (8))){
var inst_37066 = (state_37074[(2)]);
var state_37074__$1 = (function (){var statearr_37076 = state_37074;
(statearr_37076[(7)] = inst_37066);

return statearr_37076;
})();
var statearr_37077_37092 = state_37074__$1;
(statearr_37077_37092[(2)] = null);

(statearr_37077_37092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (7))){
var inst_37070 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37078_37093 = state_37074__$1;
(statearr_37078_37093[(2)] = inst_37070);

(statearr_37078_37093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (6))){
var state_37074__$1 = state_37074;
var statearr_37079_37094 = state_37074__$1;
(statearr_37079_37094[(2)] = null);

(statearr_37079_37094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (5))){
var inst_37062 = (state_37074[(8)]);
var inst_37064 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37062);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(8),inst_37064);
} else {
if((state_val_37075 === (4))){
var inst_37062 = (state_37074[(8)]);
var inst_37062__$1 = (state_37074[(2)]);
var state_37074__$1 = (function (){var statearr_37080 = state_37074;
(statearr_37080[(8)] = inst_37062__$1);

return statearr_37080;
})();
if(cljs.core.truth_(inst_37062__$1)){
var statearr_37081_37095 = state_37074__$1;
(statearr_37081_37095[(1)] = (5));

} else {
var statearr_37082_37096 = state_37074__$1;
(statearr_37082_37096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (3))){
var inst_37072 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37074__$1,inst_37072);
} else {
if((state_val_37075 === (2))){
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(4),ch);
} else {
if((state_val_37075 === (1))){
var state_37074__$1 = state_37074;
var statearr_37083_37097 = state_37074__$1;
(statearr_37083_37097[(2)] = null);

(statearr_37083_37097[(1)] = (2));


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
});})(c__31644__auto___37091,ch))
;
return ((function (switch__31582__auto__,c__31644__auto___37091,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_37087 = [null,null,null,null,null,null,null,null,null];
(statearr_37087[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31583__auto__);

(statearr_37087[(1)] = (1));

return statearr_37087;
});
var figwheel$client$heads_up_plugin_$_state_machine__31583__auto____1 = (function (state_37074){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e37088){if((e37088 instanceof Object)){
var ex__31586__auto__ = e37088;
var statearr_37089_37098 = state_37074;
(statearr_37089_37098[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37099 = state_37074;
state_37074 = G__37099;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31583__auto__ = function(state_37074){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31583__auto____1.call(this,state_37074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31583__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31583__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___37091,ch))
})();
var state__31646__auto__ = (function (){var statearr_37090 = f__31645__auto__.call(null);
(statearr_37090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___37091);

return statearr_37090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___37091,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_37120){
var state_val_37121 = (state_37120[(1)]);
if((state_val_37121 === (2))){
var inst_37117 = (state_37120[(2)]);
var inst_37118 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37120__$1 = (function (){var statearr_37122 = state_37120;
(statearr_37122[(7)] = inst_37117);

return statearr_37122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37120__$1,inst_37118);
} else {
if((state_val_37121 === (1))){
var inst_37115 = cljs.core.async.timeout.call(null,(3000));
var state_37120__$1 = state_37120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37120__$1,(2),inst_37115);
} else {
return null;
}
}
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____0 = (function (){
var statearr_37126 = [null,null,null,null,null,null,null,null];
(statearr_37126[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__);

(statearr_37126[(1)] = (1));

return statearr_37126;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____1 = (function (state_37120){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e37127){if((e37127 instanceof Object)){
var ex__31586__auto__ = e37127;
var statearr_37128_37130 = state_37120;
(statearr_37128_37130[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37131 = state_37120;
state_37120 = G__37131;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__ = function(state_37120){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____1.call(this,state_37120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31583__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_37129 = f__31645__auto__.call(null);
(statearr_37129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_37129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__28361__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__28361__auto__)){
return ("CustomEvent" in window);
} else {
return and__28361__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj37135 = {"detail":url};
return obj37135;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37136){
var map__37142 = p__37136;
var map__37142__$1 = ((cljs.core.seq_QMARK_.call(null,map__37142))?cljs.core.apply.call(null,cljs.core.hash_map,map__37142):map__37142);
var ed = map__37142__$1;
var exception_data = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__37142__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37143_37147 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37144_37148 = null;
var count__37145_37149 = (0);
var i__37146_37150 = (0);
while(true){
if((i__37146_37150 < count__37145_37149)){
var msg_37151 = cljs.core._nth.call(null,chunk__37144_37148,i__37146_37150);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37151);

var G__37152 = seq__37143_37147;
var G__37153 = chunk__37144_37148;
var G__37154 = count__37145_37149;
var G__37155 = (i__37146_37150 + (1));
seq__37143_37147 = G__37152;
chunk__37144_37148 = G__37153;
count__37145_37149 = G__37154;
i__37146_37150 = G__37155;
continue;
} else {
var temp__4126__auto___37156 = cljs.core.seq.call(null,seq__37143_37147);
if(temp__4126__auto___37156){
var seq__37143_37157__$1 = temp__4126__auto___37156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37143_37157__$1)){
var c__29158__auto___37158 = cljs.core.chunk_first.call(null,seq__37143_37157__$1);
var G__37159 = cljs.core.chunk_rest.call(null,seq__37143_37157__$1);
var G__37160 = c__29158__auto___37158;
var G__37161 = cljs.core.count.call(null,c__29158__auto___37158);
var G__37162 = (0);
seq__37143_37147 = G__37159;
chunk__37144_37148 = G__37160;
count__37145_37149 = G__37161;
i__37146_37150 = G__37162;
continue;
} else {
var msg_37163 = cljs.core.first.call(null,seq__37143_37157__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37163);

var G__37164 = cljs.core.next.call(null,seq__37143_37157__$1);
var G__37165 = null;
var G__37166 = (0);
var G__37167 = (0);
seq__37143_37147 = G__37164;
chunk__37144_37148 = G__37165;
count__37145_37149 = G__37166;
i__37146_37150 = G__37167;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37168){
var map__37170 = p__37168;
var map__37170__$1 = ((cljs.core.seq_QMARK_.call(null,map__37170))?cljs.core.apply.call(null,cljs.core.hash_map,map__37170):map__37170);
var w = map__37170__$1;
var message = cljs.core.get.call(null,map__37170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28361__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28361__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28361__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37177 = cljs.core.seq.call(null,plugins);
var chunk__37178 = null;
var count__37179 = (0);
var i__37180 = (0);
while(true){
if((i__37180 < count__37179)){
var vec__37181 = cljs.core._nth.call(null,chunk__37178,i__37180);
var k = cljs.core.nth.call(null,vec__37181,(0),null);
var plugin = cljs.core.nth.call(null,vec__37181,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37183 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37177,chunk__37178,count__37179,i__37180,pl_37183,vec__37181,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37183.call(null,msg_hist);
});})(seq__37177,chunk__37178,count__37179,i__37180,pl_37183,vec__37181,k,plugin))
);
} else {
}

var G__37184 = seq__37177;
var G__37185 = chunk__37178;
var G__37186 = count__37179;
var G__37187 = (i__37180 + (1));
seq__37177 = G__37184;
chunk__37178 = G__37185;
count__37179 = G__37186;
i__37180 = G__37187;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__37177);
if(temp__4126__auto__){
var seq__37177__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177__$1)){
var c__29158__auto__ = cljs.core.chunk_first.call(null,seq__37177__$1);
var G__37188 = cljs.core.chunk_rest.call(null,seq__37177__$1);
var G__37189 = c__29158__auto__;
var G__37190 = cljs.core.count.call(null,c__29158__auto__);
var G__37191 = (0);
seq__37177 = G__37188;
chunk__37178 = G__37189;
count__37179 = G__37190;
i__37180 = G__37191;
continue;
} else {
var vec__37182 = cljs.core.first.call(null,seq__37177__$1);
var k = cljs.core.nth.call(null,vec__37182,(0),null);
var plugin = cljs.core.nth.call(null,vec__37182,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37192 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37177,chunk__37178,count__37179,i__37180,pl_37192,vec__37182,k,plugin,seq__37177__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37192.call(null,msg_hist);
});})(seq__37177,chunk__37178,count__37179,i__37180,pl_37192,vec__37182,k,plugin,seq__37177__$1,temp__4126__auto__))
);
} else {
}

var G__37193 = cljs.core.next.call(null,seq__37177__$1);
var G__37194 = null;
var G__37195 = (0);
var G__37196 = (0);
seq__37177 = G__37193;
chunk__37178 = G__37194;
count__37179 = G__37195;
i__37180 = G__37196;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__37198 = arguments.length;
switch (G__37198) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__29413__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29413__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37201){
var map__37202 = p__37201;
var map__37202__$1 = ((cljs.core.seq_QMARK_.call(null,map__37202))?cljs.core.apply.call(null,cljs.core.hash_map,map__37202):map__37202);
var opts = map__37202__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37200){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37200));
});

//# sourceMappingURL=client.js.map