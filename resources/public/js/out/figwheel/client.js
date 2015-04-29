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
var G__43496__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__43496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43497__i = 0, G__43497__a = new Array(arguments.length -  0);
while (G__43497__i < G__43497__a.length) {G__43497__a[G__43497__i] = arguments[G__43497__i + 0]; ++G__43497__i;}
  args = new cljs.core.IndexedSeq(G__43497__a,0);
} 
return G__43496__delegate.call(this,args);};
G__43496.cljs$lang$maxFixedArity = 0;
G__43496.cljs$lang$applyTo = (function (arglist__43498){
var args = cljs.core.seq(arglist__43498);
return G__43496__delegate(args);
});
G__43496.cljs$core$IFn$_invoke$arity$variadic = G__43496__delegate;
return G__43496;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43499){
var map__43501 = p__43499;
var map__43501__$1 = ((cljs.core.seq_QMARK_.call(null,map__43501))?cljs.core.apply.call(null,cljs.core.hash_map,map__43501):map__43501);
var class$ = cljs.core.get.call(null,map__43501__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__43501__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28862__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28850__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28850__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28850__auto__;
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
var c__32383__auto___43630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___43630,ch){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___43630,ch){
return (function (state_43604){
var state_val_43605 = (state_43604[(1)]);
if((state_val_43605 === (7))){
var inst_43600 = (state_43604[(2)]);
var state_43604__$1 = state_43604;
var statearr_43606_43631 = state_43604__$1;
(statearr_43606_43631[(2)] = inst_43600);

(statearr_43606_43631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (1))){
var state_43604__$1 = state_43604;
var statearr_43607_43632 = state_43604__$1;
(statearr_43607_43632[(2)] = null);

(statearr_43607_43632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (4))){
var inst_43568 = (state_43604[(7)]);
var inst_43568__$1 = (state_43604[(2)]);
var state_43604__$1 = (function (){var statearr_43608 = state_43604;
(statearr_43608[(7)] = inst_43568__$1);

return statearr_43608;
})();
if(cljs.core.truth_(inst_43568__$1)){
var statearr_43609_43633 = state_43604__$1;
(statearr_43609_43633[(1)] = (5));

} else {
var statearr_43610_43634 = state_43604__$1;
(statearr_43610_43634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (13))){
var state_43604__$1 = state_43604;
var statearr_43611_43635 = state_43604__$1;
(statearr_43611_43635[(2)] = null);

(statearr_43611_43635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (6))){
var state_43604__$1 = state_43604;
var statearr_43612_43636 = state_43604__$1;
(statearr_43612_43636[(2)] = null);

(statearr_43612_43636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (3))){
var inst_43602 = (state_43604[(2)]);
var state_43604__$1 = state_43604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43604__$1,inst_43602);
} else {
if((state_val_43605 === (12))){
var inst_43575 = (state_43604[(8)]);
var inst_43588 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43575);
var inst_43589 = cljs.core.first.call(null,inst_43588);
var inst_43590 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43589);
var inst_43591 = console.warn("Figwheel: Not loading code with warnings - ",inst_43590);
var state_43604__$1 = state_43604;
var statearr_43613_43637 = state_43604__$1;
(statearr_43613_43637[(2)] = inst_43591);

(statearr_43613_43637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (2))){
var state_43604__$1 = state_43604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43604__$1,(4),ch);
} else {
if((state_val_43605 === (11))){
var inst_43584 = (state_43604[(2)]);
var state_43604__$1 = state_43604;
var statearr_43614_43638 = state_43604__$1;
(statearr_43614_43638[(2)] = inst_43584);

(statearr_43614_43638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (9))){
var inst_43574 = (state_43604[(9)]);
var inst_43586 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43574,opts);
var state_43604__$1 = state_43604;
if(cljs.core.truth_(inst_43586)){
var statearr_43615_43639 = state_43604__$1;
(statearr_43615_43639[(1)] = (12));

} else {
var statearr_43616_43640 = state_43604__$1;
(statearr_43616_43640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (5))){
var inst_43568 = (state_43604[(7)]);
var inst_43574 = (state_43604[(9)]);
var inst_43570 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43571 = (new cljs.core.PersistentArrayMap(null,2,inst_43570,null));
var inst_43572 = (new cljs.core.PersistentHashSet(null,inst_43571,null));
var inst_43573 = figwheel.client.focus_msgs.call(null,inst_43572,inst_43568);
var inst_43574__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43573);
var inst_43575 = cljs.core.first.call(null,inst_43573);
var inst_43576 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43574__$1,opts);
var state_43604__$1 = (function (){var statearr_43617 = state_43604;
(statearr_43617[(8)] = inst_43575);

(statearr_43617[(9)] = inst_43574__$1);

return statearr_43617;
})();
if(cljs.core.truth_(inst_43576)){
var statearr_43618_43641 = state_43604__$1;
(statearr_43618_43641[(1)] = (8));

} else {
var statearr_43619_43642 = state_43604__$1;
(statearr_43619_43642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (14))){
var inst_43594 = (state_43604[(2)]);
var state_43604__$1 = state_43604;
var statearr_43620_43643 = state_43604__$1;
(statearr_43620_43643[(2)] = inst_43594);

(statearr_43620_43643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (10))){
var inst_43596 = (state_43604[(2)]);
var state_43604__$1 = (function (){var statearr_43621 = state_43604;
(statearr_43621[(10)] = inst_43596);

return statearr_43621;
})();
var statearr_43622_43644 = state_43604__$1;
(statearr_43622_43644[(2)] = null);

(statearr_43622_43644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43605 === (8))){
var inst_43575 = (state_43604[(8)]);
var inst_43578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43579 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43575);
var inst_43580 = cljs.core.async.timeout.call(null,(1000));
var inst_43581 = [inst_43579,inst_43580];
var inst_43582 = (new cljs.core.PersistentVector(null,2,(5),inst_43578,inst_43581,null));
var state_43604__$1 = state_43604;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43604__$1,(11),inst_43582);
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
});})(c__32383__auto___43630,ch))
;
return ((function (switch__32321__auto__,c__32383__auto___43630,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32322__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32322__auto____0 = (function (){
var statearr_43626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43626[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32322__auto__);

(statearr_43626[(1)] = (1));

return statearr_43626;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32322__auto____1 = (function (state_43604){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_43604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e43627){if((e43627 instanceof Object)){
var ex__32325__auto__ = e43627;
var statearr_43628_43645 = state_43604;
(statearr_43628_43645[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43646 = state_43604;
state_43604 = G__43646;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32322__auto__ = function(state_43604){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32322__auto____1.call(this,state_43604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32322__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32322__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___43630,ch))
})();
var state__32385__auto__ = (function (){var statearr_43629 = f__32384__auto__.call(null);
(statearr_43629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___43630);

return statearr_43629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___43630,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43647_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43647_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_43656 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__43649_SHARP_,p2__43648_SHARP_){
return [cljs.core.str(p2__43648_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43656){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_43654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_43655 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_43654,_STAR_print_newline_STAR_43655,base_path_43656){
return (function() { 
var G__43657__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__43657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43658__i = 0, G__43658__a = new Array(arguments.length -  0);
while (G__43658__i < G__43658__a.length) {G__43658__a[G__43658__i] = arguments[G__43658__i + 0]; ++G__43658__i;}
  args = new cljs.core.IndexedSeq(G__43658__a,0);
} 
return G__43657__delegate.call(this,args);};
G__43657.cljs$lang$maxFixedArity = 0;
G__43657.cljs$lang$applyTo = (function (arglist__43659){
var args = cljs.core.seq(arglist__43659);
return G__43657__delegate(args);
});
G__43657.cljs$core$IFn$_invoke$arity$variadic = G__43657__delegate;
return G__43657;
})()
;})(_STAR_print_fn_STAR_43654,_STAR_print_newline_STAR_43655,base_path_43656))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43655;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43654;
}}catch (e43653){if((e43653 instanceof Error)){
var e = e43653;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43656], null));
} else {
var e = e43653;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43656))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43660){
var map__43665 = p__43660;
var map__43665__$1 = ((cljs.core.seq_QMARK_.call(null,map__43665))?cljs.core.apply.call(null,cljs.core.hash_map,map__43665):map__43665);
var opts = map__43665__$1;
var build_id = cljs.core.get.call(null,map__43665__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43665,map__43665__$1,opts,build_id){
return (function (p__43666){
var vec__43667 = p__43666;
var map__43668 = cljs.core.nth.call(null,vec__43667,(0),null);
var map__43668__$1 = ((cljs.core.seq_QMARK_.call(null,map__43668))?cljs.core.apply.call(null,cljs.core.hash_map,map__43668):map__43668);
var msg = map__43668__$1;
var msg_name = cljs.core.get.call(null,map__43668__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43667,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__43667,map__43668,map__43668__$1,msg,msg_name,_,map__43665,map__43665__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43667,map__43668,map__43668__$1,msg,msg_name,_,map__43665,map__43665__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43665,map__43665__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43672){
var vec__43673 = p__43672;
var map__43674 = cljs.core.nth.call(null,vec__43673,(0),null);
var map__43674__$1 = ((cljs.core.seq_QMARK_.call(null,map__43674))?cljs.core.apply.call(null,cljs.core.hash_map,map__43674):map__43674);
var msg = map__43674__$1;
var msg_name = cljs.core.get.call(null,map__43674__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43673,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43675){
var map__43683 = p__43675;
var map__43683__$1 = ((cljs.core.seq_QMARK_.call(null,map__43683))?cljs.core.apply.call(null,cljs.core.hash_map,map__43683):map__43683);
var on_compile_fail = cljs.core.get.call(null,map__43683__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__43683__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__43683,map__43683__$1,on_compile_fail,on_compile_warning){
return (function (p__43684){
var vec__43685 = p__43684;
var map__43686 = cljs.core.nth.call(null,vec__43685,(0),null);
var map__43686__$1 = ((cljs.core.seq_QMARK_.call(null,map__43686))?cljs.core.apply.call(null,cljs.core.hash_map,map__43686):map__43686);
var msg = map__43686__$1;
var msg_name = cljs.core.get.call(null,map__43686__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43685,(1));
var pred__43687 = cljs.core._EQ_;
var expr__43688 = msg_name;
if(cljs.core.truth_(pred__43687.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43688))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43687.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43688))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43683,map__43683__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__,msg_hist,msg_names,msg){
return (function (state_43885){
var state_val_43886 = (state_43885[(1)]);
if((state_val_43886 === (7))){
var inst_43821 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43887_43928 = state_43885__$1;
(statearr_43887_43928[(2)] = inst_43821);

(statearr_43887_43928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (20))){
var inst_43847 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43847)){
var statearr_43888_43929 = state_43885__$1;
(statearr_43888_43929[(1)] = (22));

} else {
var statearr_43889_43930 = state_43885__$1;
(statearr_43889_43930[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (27))){
var inst_43859 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43860 = figwheel.client.heads_up.display_warning.call(null,inst_43859);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(30),inst_43860);
} else {
if((state_val_43886 === (1))){
var inst_43809 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43809)){
var statearr_43890_43931 = state_43885__$1;
(statearr_43890_43931[(1)] = (2));

} else {
var statearr_43891_43932 = state_43885__$1;
(statearr_43891_43932[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (24))){
var inst_43875 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43892_43933 = state_43885__$1;
(statearr_43892_43933[(2)] = inst_43875);

(statearr_43892_43933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (4))){
var inst_43883 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43885__$1,inst_43883);
} else {
if((state_val_43886 === (15))){
var inst_43836 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43837 = figwheel.client.format_messages.call(null,inst_43836);
var inst_43838 = figwheel.client.heads_up.display_error.call(null,inst_43837);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(18),inst_43838);
} else {
if((state_val_43886 === (21))){
var inst_43877 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43893_43934 = state_43885__$1;
(statearr_43893_43934[(2)] = inst_43877);

(statearr_43893_43934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (31))){
var inst_43866 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(34),inst_43866);
} else {
if((state_val_43886 === (32))){
var state_43885__$1 = state_43885;
var statearr_43894_43935 = state_43885__$1;
(statearr_43894_43935[(2)] = null);

(statearr_43894_43935[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (33))){
var inst_43871 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43895_43936 = state_43885__$1;
(statearr_43895_43936[(2)] = inst_43871);

(statearr_43895_43936[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (13))){
var inst_43827 = (state_43885[(2)]);
var inst_43828 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43829 = figwheel.client.format_messages.call(null,inst_43828);
var inst_43830 = figwheel.client.heads_up.display_error.call(null,inst_43829);
var state_43885__$1 = (function (){var statearr_43896 = state_43885;
(statearr_43896[(7)] = inst_43827);

return statearr_43896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(14),inst_43830);
} else {
if((state_val_43886 === (22))){
var inst_43849 = figwheel.client.heads_up.clear.call(null);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(25),inst_43849);
} else {
if((state_val_43886 === (29))){
var inst_43873 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43897_43937 = state_43885__$1;
(statearr_43897_43937[(2)] = inst_43873);

(statearr_43897_43937[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (6))){
var inst_43817 = figwheel.client.heads_up.clear.call(null);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(9),inst_43817);
} else {
if((state_val_43886 === (28))){
var inst_43864 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43864)){
var statearr_43898_43938 = state_43885__$1;
(statearr_43898_43938[(1)] = (31));

} else {
var statearr_43899_43939 = state_43885__$1;
(statearr_43899_43939[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (25))){
var inst_43851 = (state_43885[(2)]);
var inst_43852 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43853 = figwheel.client.heads_up.display_warning.call(null,inst_43852);
var state_43885__$1 = (function (){var statearr_43900 = state_43885;
(statearr_43900[(8)] = inst_43851);

return statearr_43900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(26),inst_43853);
} else {
if((state_val_43886 === (34))){
var inst_43868 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43901_43940 = state_43885__$1;
(statearr_43901_43940[(2)] = inst_43868);

(statearr_43901_43940[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (17))){
var inst_43879 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43902_43941 = state_43885__$1;
(statearr_43902_43941[(2)] = inst_43879);

(statearr_43902_43941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (3))){
var inst_43823 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43823)){
var statearr_43903_43942 = state_43885__$1;
(statearr_43903_43942[(1)] = (10));

} else {
var statearr_43904_43943 = state_43885__$1;
(statearr_43904_43943[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (12))){
var inst_43881 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43905_43944 = state_43885__$1;
(statearr_43905_43944[(2)] = inst_43881);

(statearr_43905_43944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (2))){
var inst_43811 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43811)){
var statearr_43906_43945 = state_43885__$1;
(statearr_43906_43945[(1)] = (5));

} else {
var statearr_43907_43946 = state_43885__$1;
(statearr_43907_43946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (23))){
var inst_43857 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43857)){
var statearr_43908_43947 = state_43885__$1;
(statearr_43908_43947[(1)] = (27));

} else {
var statearr_43909_43948 = state_43885__$1;
(statearr_43909_43948[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (19))){
var inst_43844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43845 = figwheel.client.heads_up.append_message.call(null,inst_43844);
var state_43885__$1 = state_43885;
var statearr_43910_43949 = state_43885__$1;
(statearr_43910_43949[(2)] = inst_43845);

(statearr_43910_43949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (11))){
var inst_43834 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43834)){
var statearr_43911_43950 = state_43885__$1;
(statearr_43911_43950[(1)] = (15));

} else {
var statearr_43912_43951 = state_43885__$1;
(statearr_43912_43951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (9))){
var inst_43819 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43913_43952 = state_43885__$1;
(statearr_43913_43952[(2)] = inst_43819);

(statearr_43913_43952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (5))){
var inst_43813 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(8),inst_43813);
} else {
if((state_val_43886 === (14))){
var inst_43832 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43914_43953 = state_43885__$1;
(statearr_43914_43953[(2)] = inst_43832);

(statearr_43914_43953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (26))){
var inst_43855 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43915_43954 = state_43885__$1;
(statearr_43915_43954[(2)] = inst_43855);

(statearr_43915_43954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (16))){
var inst_43842 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43885__$1 = state_43885;
if(cljs.core.truth_(inst_43842)){
var statearr_43916_43955 = state_43885__$1;
(statearr_43916_43955[(1)] = (19));

} else {
var statearr_43917_43956 = state_43885__$1;
(statearr_43917_43956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (30))){
var inst_43862 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43918_43957 = state_43885__$1;
(statearr_43918_43957[(2)] = inst_43862);

(statearr_43918_43957[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (10))){
var inst_43825 = figwheel.client.heads_up.clear.call(null);
var state_43885__$1 = state_43885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(13),inst_43825);
} else {
if((state_val_43886 === (18))){
var inst_43840 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43919_43958 = state_43885__$1;
(statearr_43919_43958[(2)] = inst_43840);

(statearr_43919_43958[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43886 === (8))){
var inst_43815 = (state_43885[(2)]);
var state_43885__$1 = state_43885;
var statearr_43920_43959 = state_43885__$1;
(statearr_43920_43959[(2)] = inst_43815);

(statearr_43920_43959[(1)] = (7));


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
});})(c__32383__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32321__auto__,c__32383__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto____0 = (function (){
var statearr_43924 = [null,null,null,null,null,null,null,null,null];
(statearr_43924[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto__);

(statearr_43924[(1)] = (1));

return statearr_43924;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto____1 = (function (state_43885){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_43885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e43925){if((e43925 instanceof Object)){
var ex__32325__auto__ = e43925;
var statearr_43926_43960 = state_43885;
(statearr_43926_43960[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43961 = state_43885;
state_43885 = G__43961;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto__ = function(state_43885){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto____1.call(this,state_43885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__,msg_hist,msg_names,msg))
})();
var state__32385__auto__ = (function (){var statearr_43927 = f__32384__auto__.call(null);
(statearr_43927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_43927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__,msg_hist,msg_names,msg))
);

return c__32383__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32383__auto___44024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___44024,ch){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___44024,ch){
return (function (state_44007){
var state_val_44008 = (state_44007[(1)]);
if((state_val_44008 === (8))){
var inst_43999 = (state_44007[(2)]);
var state_44007__$1 = (function (){var statearr_44009 = state_44007;
(statearr_44009[(7)] = inst_43999);

return statearr_44009;
})();
var statearr_44010_44025 = state_44007__$1;
(statearr_44010_44025[(2)] = null);

(statearr_44010_44025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44008 === (7))){
var inst_44003 = (state_44007[(2)]);
var state_44007__$1 = state_44007;
var statearr_44011_44026 = state_44007__$1;
(statearr_44011_44026[(2)] = inst_44003);

(statearr_44011_44026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44008 === (6))){
var state_44007__$1 = state_44007;
var statearr_44012_44027 = state_44007__$1;
(statearr_44012_44027[(2)] = null);

(statearr_44012_44027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44008 === (5))){
var inst_43995 = (state_44007[(8)]);
var inst_43997 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43995);
var state_44007__$1 = state_44007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44007__$1,(8),inst_43997);
} else {
if((state_val_44008 === (4))){
var inst_43995 = (state_44007[(8)]);
var inst_43995__$1 = (state_44007[(2)]);
var state_44007__$1 = (function (){var statearr_44013 = state_44007;
(statearr_44013[(8)] = inst_43995__$1);

return statearr_44013;
})();
if(cljs.core.truth_(inst_43995__$1)){
var statearr_44014_44028 = state_44007__$1;
(statearr_44014_44028[(1)] = (5));

} else {
var statearr_44015_44029 = state_44007__$1;
(statearr_44015_44029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44008 === (3))){
var inst_44005 = (state_44007[(2)]);
var state_44007__$1 = state_44007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44007__$1,inst_44005);
} else {
if((state_val_44008 === (2))){
var state_44007__$1 = state_44007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44007__$1,(4),ch);
} else {
if((state_val_44008 === (1))){
var state_44007__$1 = state_44007;
var statearr_44016_44030 = state_44007__$1;
(statearr_44016_44030[(2)] = null);

(statearr_44016_44030[(1)] = (2));


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
});})(c__32383__auto___44024,ch))
;
return ((function (switch__32321__auto__,c__32383__auto___44024,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32322__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32322__auto____0 = (function (){
var statearr_44020 = [null,null,null,null,null,null,null,null,null];
(statearr_44020[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32322__auto__);

(statearr_44020[(1)] = (1));

return statearr_44020;
});
var figwheel$client$heads_up_plugin_$_state_machine__32322__auto____1 = (function (state_44007){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44021){if((e44021 instanceof Object)){
var ex__32325__auto__ = e44021;
var statearr_44022_44031 = state_44007;
(statearr_44022_44031[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44032 = state_44007;
state_44007 = G__44032;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32322__auto__ = function(state_44007){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32322__auto____1.call(this,state_44007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32322__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32322__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___44024,ch))
})();
var state__32385__auto__ = (function (){var statearr_44023 = f__32384__auto__.call(null);
(statearr_44023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___44024);

return statearr_44023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___44024,ch))
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
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_44053){
var state_val_44054 = (state_44053[(1)]);
if((state_val_44054 === (2))){
var inst_44050 = (state_44053[(2)]);
var inst_44051 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44053__$1 = (function (){var statearr_44055 = state_44053;
(statearr_44055[(7)] = inst_44050);

return statearr_44055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44053__$1,inst_44051);
} else {
if((state_val_44054 === (1))){
var inst_44048 = cljs.core.async.timeout.call(null,(3000));
var state_44053__$1 = state_44053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44053__$1,(2),inst_44048);
} else {
return null;
}
}
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32322__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32322__auto____0 = (function (){
var statearr_44059 = [null,null,null,null,null,null,null,null];
(statearr_44059[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32322__auto__);

(statearr_44059[(1)] = (1));

return statearr_44059;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32322__auto____1 = (function (state_44053){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44060){if((e44060 instanceof Object)){
var ex__32325__auto__ = e44060;
var statearr_44061_44063 = state_44053;
(statearr_44061_44063[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44064 = state_44053;
state_44053 = G__44064;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32322__auto__ = function(state_44053){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32322__auto____1.call(this,state_44053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32322__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32322__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_44062 = f__32384__auto__.call(null);
(statearr_44062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_44062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__28850__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__28850__auto__)){
return ("CustomEvent" in window);
} else {
return and__28850__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj44068 = {"detail":url};
return obj44068;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44069){
var map__44075 = p__44069;
var map__44075__$1 = ((cljs.core.seq_QMARK_.call(null,map__44075))?cljs.core.apply.call(null,cljs.core.hash_map,map__44075):map__44075);
var ed = map__44075__$1;
var exception_data = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__44075__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44076_44080 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44077_44081 = null;
var count__44078_44082 = (0);
var i__44079_44083 = (0);
while(true){
if((i__44079_44083 < count__44078_44082)){
var msg_44084 = cljs.core._nth.call(null,chunk__44077_44081,i__44079_44083);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44084);

var G__44085 = seq__44076_44080;
var G__44086 = chunk__44077_44081;
var G__44087 = count__44078_44082;
var G__44088 = (i__44079_44083 + (1));
seq__44076_44080 = G__44085;
chunk__44077_44081 = G__44086;
count__44078_44082 = G__44087;
i__44079_44083 = G__44088;
continue;
} else {
var temp__4126__auto___44089 = cljs.core.seq.call(null,seq__44076_44080);
if(temp__4126__auto___44089){
var seq__44076_44090__$1 = temp__4126__auto___44089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44076_44090__$1)){
var c__29647__auto___44091 = cljs.core.chunk_first.call(null,seq__44076_44090__$1);
var G__44092 = cljs.core.chunk_rest.call(null,seq__44076_44090__$1);
var G__44093 = c__29647__auto___44091;
var G__44094 = cljs.core.count.call(null,c__29647__auto___44091);
var G__44095 = (0);
seq__44076_44080 = G__44092;
chunk__44077_44081 = G__44093;
count__44078_44082 = G__44094;
i__44079_44083 = G__44095;
continue;
} else {
var msg_44096 = cljs.core.first.call(null,seq__44076_44090__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44096);

var G__44097 = cljs.core.next.call(null,seq__44076_44090__$1);
var G__44098 = null;
var G__44099 = (0);
var G__44100 = (0);
seq__44076_44080 = G__44097;
chunk__44077_44081 = G__44098;
count__44078_44082 = G__44099;
i__44079_44083 = G__44100;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44101){
var map__44103 = p__44101;
var map__44103__$1 = ((cljs.core.seq_QMARK_.call(null,map__44103))?cljs.core.apply.call(null,cljs.core.hash_map,map__44103):map__44103);
var w = map__44103__$1;
var message = cljs.core.get.call(null,map__44103__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__28850__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28850__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28850__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44110 = cljs.core.seq.call(null,plugins);
var chunk__44111 = null;
var count__44112 = (0);
var i__44113 = (0);
while(true){
if((i__44113 < count__44112)){
var vec__44114 = cljs.core._nth.call(null,chunk__44111,i__44113);
var k = cljs.core.nth.call(null,vec__44114,(0),null);
var plugin = cljs.core.nth.call(null,vec__44114,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44116 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44110,chunk__44111,count__44112,i__44113,pl_44116,vec__44114,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44116.call(null,msg_hist);
});})(seq__44110,chunk__44111,count__44112,i__44113,pl_44116,vec__44114,k,plugin))
);
} else {
}

var G__44117 = seq__44110;
var G__44118 = chunk__44111;
var G__44119 = count__44112;
var G__44120 = (i__44113 + (1));
seq__44110 = G__44117;
chunk__44111 = G__44118;
count__44112 = G__44119;
i__44113 = G__44120;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__44110);
if(temp__4126__auto__){
var seq__44110__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44110__$1)){
var c__29647__auto__ = cljs.core.chunk_first.call(null,seq__44110__$1);
var G__44121 = cljs.core.chunk_rest.call(null,seq__44110__$1);
var G__44122 = c__29647__auto__;
var G__44123 = cljs.core.count.call(null,c__29647__auto__);
var G__44124 = (0);
seq__44110 = G__44121;
chunk__44111 = G__44122;
count__44112 = G__44123;
i__44113 = G__44124;
continue;
} else {
var vec__44115 = cljs.core.first.call(null,seq__44110__$1);
var k = cljs.core.nth.call(null,vec__44115,(0),null);
var plugin = cljs.core.nth.call(null,vec__44115,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44125 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44110,chunk__44111,count__44112,i__44113,pl_44125,vec__44115,k,plugin,seq__44110__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44125.call(null,msg_hist);
});})(seq__44110,chunk__44111,count__44112,i__44113,pl_44125,vec__44115,k,plugin,seq__44110__$1,temp__4126__auto__))
);
} else {
}

var G__44126 = cljs.core.next.call(null,seq__44110__$1);
var G__44127 = null;
var G__44128 = (0);
var G__44129 = (0);
seq__44110 = G__44126;
chunk__44111 = G__44127;
count__44112 = G__44128;
i__44113 = G__44129;
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
var G__44131 = arguments.length;
switch (G__44131) {
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
var argseq__29902__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29902__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44134){
var map__44135 = p__44134;
var map__44135__$1 = ((cljs.core.seq_QMARK_.call(null,map__44135))?cljs.core.apply.call(null,cljs.core.hash_map,map__44135):map__44135);
var opts = map__44135__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44133){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44133));
});

//# sourceMappingURL=client.js.map