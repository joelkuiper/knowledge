// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__29413__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29413__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__37215_37223 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37216_37224 = null;
var count__37217_37225 = (0);
var i__37218_37226 = (0);
while(true){
if((i__37218_37226 < count__37217_37225)){
var k_37227 = cljs.core._nth.call(null,chunk__37216_37224,i__37218_37226);
e.setAttribute(cljs.core.name.call(null,k_37227),cljs.core.get.call(null,attrs,k_37227));

var G__37228 = seq__37215_37223;
var G__37229 = chunk__37216_37224;
var G__37230 = count__37217_37225;
var G__37231 = (i__37218_37226 + (1));
seq__37215_37223 = G__37228;
chunk__37216_37224 = G__37229;
count__37217_37225 = G__37230;
i__37218_37226 = G__37231;
continue;
} else {
var temp__4126__auto___37232 = cljs.core.seq.call(null,seq__37215_37223);
if(temp__4126__auto___37232){
var seq__37215_37233__$1 = temp__4126__auto___37232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37215_37233__$1)){
var c__29158__auto___37234 = cljs.core.chunk_first.call(null,seq__37215_37233__$1);
var G__37235 = cljs.core.chunk_rest.call(null,seq__37215_37233__$1);
var G__37236 = c__29158__auto___37234;
var G__37237 = cljs.core.count.call(null,c__29158__auto___37234);
var G__37238 = (0);
seq__37215_37223 = G__37235;
chunk__37216_37224 = G__37236;
count__37217_37225 = G__37237;
i__37218_37226 = G__37238;
continue;
} else {
var k_37239 = cljs.core.first.call(null,seq__37215_37233__$1);
e.setAttribute(cljs.core.name.call(null,k_37239),cljs.core.get.call(null,attrs,k_37239));

var G__37240 = cljs.core.next.call(null,seq__37215_37233__$1);
var G__37241 = null;
var G__37242 = (0);
var G__37243 = (0);
seq__37215_37223 = G__37240;
chunk__37216_37224 = G__37241;
count__37217_37225 = G__37242;
i__37218_37226 = G__37243;
continue;
}
} else {
}
}
break;
}

var seq__37219_37244 = cljs.core.seq.call(null,children);
var chunk__37220_37245 = null;
var count__37221_37246 = (0);
var i__37222_37247 = (0);
while(true){
if((i__37222_37247 < count__37221_37246)){
var ch_37248 = cljs.core._nth.call(null,chunk__37220_37245,i__37222_37247);
e.appendChild(ch_37248);

var G__37249 = seq__37219_37244;
var G__37250 = chunk__37220_37245;
var G__37251 = count__37221_37246;
var G__37252 = (i__37222_37247 + (1));
seq__37219_37244 = G__37249;
chunk__37220_37245 = G__37250;
count__37221_37246 = G__37251;
i__37222_37247 = G__37252;
continue;
} else {
var temp__4126__auto___37253 = cljs.core.seq.call(null,seq__37219_37244);
if(temp__4126__auto___37253){
var seq__37219_37254__$1 = temp__4126__auto___37253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37219_37254__$1)){
var c__29158__auto___37255 = cljs.core.chunk_first.call(null,seq__37219_37254__$1);
var G__37256 = cljs.core.chunk_rest.call(null,seq__37219_37254__$1);
var G__37257 = c__29158__auto___37255;
var G__37258 = cljs.core.count.call(null,c__29158__auto___37255);
var G__37259 = (0);
seq__37219_37244 = G__37256;
chunk__37220_37245 = G__37257;
count__37221_37246 = G__37258;
i__37222_37247 = G__37259;
continue;
} else {
var ch_37260 = cljs.core.first.call(null,seq__37219_37254__$1);
e.appendChild(ch_37260);

var G__37261 = cljs.core.next.call(null,seq__37219_37254__$1);
var G__37262 = null;
var G__37263 = (0);
var G__37264 = (0);
seq__37219_37244 = G__37261;
chunk__37220_37245 = G__37262;
count__37221_37246 = G__37263;
i__37222_37247 = G__37264;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq37212){
var G__37213 = cljs.core.first.call(null,seq37212);
var seq37212__$1 = cljs.core.next.call(null,seq37212);
var G__37214 = cljs.core.first.call(null,seq37212__$1);
var seq37212__$2 = cljs.core.next.call(null,seq37212__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__37213,G__37214,seq37212__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__29268__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29272__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__29268__auto__,prefer_table__29269__auto__,method_cache__29270__auto__,cached_hierarchy__29271__auto__,hierarchy__29272__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__29268__auto__,prefer_table__29269__auto__,method_cache__29270__auto__,cached_hierarchy__29271__auto__,hierarchy__29272__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29272__auto__,method_table__29268__auto__,prefer_table__29269__auto__,method_cache__29270__auto__,cached_hierarchy__29271__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_37265 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_37265.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37265.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_37265.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37265);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37266,st_map){
var map__37270 = p__37266;
var map__37270__$1 = ((cljs.core.seq_QMARK_.call(null,map__37270))?cljs.core.apply.call(null,cljs.core.hash_map,map__37270):map__37270);
var container_el = cljs.core.get.call(null,map__37270__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37270,map__37270__$1,container_el){
return (function (p__37271){
var vec__37272 = p__37271;
var k = cljs.core.nth.call(null,vec__37272,(0),null);
var v = cljs.core.nth.call(null,vec__37272,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37270,map__37270__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37273,dom_str){
var map__37275 = p__37273;
var map__37275__$1 = ((cljs.core.seq_QMARK_.call(null,map__37275))?cljs.core.apply.call(null,cljs.core.hash_map,map__37275):map__37275);
var c = map__37275__$1;
var content_area_el = cljs.core.get.call(null,map__37275__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37276){
var map__37278 = p__37276;
var map__37278__$1 = ((cljs.core.seq_QMARK_.call(null,map__37278))?cljs.core.apply.call(null,cljs.core.hash_map,map__37278):map__37278);
var content_area_el = cljs.core.get.call(null,map__37278__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_37320){
var state_val_37321 = (state_37320[(1)]);
if((state_val_37321 === (2))){
var inst_37305 = (state_37320[(7)]);
var inst_37314 = (state_37320[(2)]);
var inst_37315 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37316 = ["auto"];
var inst_37317 = cljs.core.PersistentHashMap.fromArrays(inst_37315,inst_37316);
var inst_37318 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37305,inst_37317);
var state_37320__$1 = (function (){var statearr_37322 = state_37320;
(statearr_37322[(8)] = inst_37314);

return statearr_37322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37320__$1,inst_37318);
} else {
if((state_val_37321 === (1))){
var inst_37305 = (state_37320[(7)]);
var inst_37305__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37306 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37307 = ["10px","10px","100%","68px","1.0"];
var inst_37308 = cljs.core.PersistentHashMap.fromArrays(inst_37306,inst_37307);
var inst_37309 = cljs.core.merge.call(null,inst_37308,style);
var inst_37310 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37305__$1,inst_37309);
var inst_37311 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37305__$1,msg);
var inst_37312 = cljs.core.async.timeout.call(null,(300));
var state_37320__$1 = (function (){var statearr_37323 = state_37320;
(statearr_37323[(7)] = inst_37305__$1);

(statearr_37323[(9)] = inst_37310);

(statearr_37323[(10)] = inst_37311);

return statearr_37323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37320__$1,(2),inst_37312);
} else {
return null;
}
}
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto____0 = (function (){
var statearr_37327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37327[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto__);

(statearr_37327[(1)] = (1));

return statearr_37327;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto____1 = (function (state_37320){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e37328){if((e37328 instanceof Object)){
var ex__31586__auto__ = e37328;
var statearr_37329_37331 = state_37320;
(statearr_37329_37331[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37332 = state_37320;
state_37320 = G__37332;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto__ = function(state_37320){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto____1.call(this,state_37320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_37330 = f__31645__auto__.call(null);
(statearr_37330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_37330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__37334 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__37334,(0),null);
var ln = cljs.core.nth.call(null,vec__37334,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__37337 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__37337,(0),null);
var file_line = cljs.core.nth.call(null,vec__37337,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__37337,file_name,file_line){
return (function (p1__37335_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__37335_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__37337,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__37339 = figwheel.client.heads_up.ensure_container.call(null);
var map__37339__$1 = ((cljs.core.seq_QMARK_.call(null,map__37339))?cljs.core.apply.call(null,cljs.core.hash_map,map__37339):map__37339);
var content_area_el = cljs.core.get.call(null,map__37339__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_37386){
var state_val_37387 = (state_37386[(1)]);
if((state_val_37387 === (3))){
var inst_37369 = (state_37386[(7)]);
var inst_37383 = (state_37386[(2)]);
var inst_37384 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37369,"");
var state_37386__$1 = (function (){var statearr_37388 = state_37386;
(statearr_37388[(8)] = inst_37383);

return statearr_37388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37386__$1,inst_37384);
} else {
if((state_val_37387 === (2))){
var inst_37369 = (state_37386[(7)]);
var inst_37376 = (state_37386[(2)]);
var inst_37377 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37378 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37379 = cljs.core.PersistentHashMap.fromArrays(inst_37377,inst_37378);
var inst_37380 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37369,inst_37379);
var inst_37381 = cljs.core.async.timeout.call(null,(200));
var state_37386__$1 = (function (){var statearr_37389 = state_37386;
(statearr_37389[(9)] = inst_37380);

(statearr_37389[(10)] = inst_37376);

return statearr_37389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37386__$1,(3),inst_37381);
} else {
if((state_val_37387 === (1))){
var inst_37369 = (state_37386[(7)]);
var inst_37369__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37370 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37371 = ["0.0"];
var inst_37372 = cljs.core.PersistentHashMap.fromArrays(inst_37370,inst_37371);
var inst_37373 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37369__$1,inst_37372);
var inst_37374 = cljs.core.async.timeout.call(null,(300));
var state_37386__$1 = (function (){var statearr_37390 = state_37386;
(statearr_37390[(11)] = inst_37373);

(statearr_37390[(7)] = inst_37369__$1);

return statearr_37390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37386__$1,(2),inst_37374);
} else {
return null;
}
}
}
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__31583__auto____0 = (function (){
var statearr_37394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37394[(0)] = figwheel$client$heads_up$clear_$_state_machine__31583__auto__);

(statearr_37394[(1)] = (1));

return statearr_37394;
});
var figwheel$client$heads_up$clear_$_state_machine__31583__auto____1 = (function (state_37386){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e37395){if((e37395 instanceof Object)){
var ex__31586__auto__ = e37395;
var statearr_37396_37398 = state_37386;
(statearr_37396_37398[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37399 = state_37386;
state_37386 = G__37399;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__31583__auto__ = function(state_37386){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__31583__auto____1.call(this,state_37386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__31583__auto____0;
figwheel$client$heads_up$clear_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__31583__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_37397 = f__31645__auto__.call(null);
(statearr_37397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_37397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_37431){
var state_val_37432 = (state_37431[(1)]);
if((state_val_37432 === (4))){
var inst_37429 = (state_37431[(2)]);
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37431__$1,inst_37429);
} else {
if((state_val_37432 === (3))){
var inst_37426 = (state_37431[(2)]);
var inst_37427 = figwheel.client.heads_up.clear.call(null);
var state_37431__$1 = (function (){var statearr_37433 = state_37431;
(statearr_37433[(7)] = inst_37426);

return statearr_37433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37431__$1,(4),inst_37427);
} else {
if((state_val_37432 === (2))){
var inst_37423 = (state_37431[(2)]);
var inst_37424 = cljs.core.async.timeout.call(null,(400));
var state_37431__$1 = (function (){var statearr_37434 = state_37431;
(statearr_37434[(8)] = inst_37423);

return statearr_37434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37431__$1,(3),inst_37424);
} else {
if((state_val_37432 === (1))){
var inst_37421 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37431__$1 = state_37431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37431__$1,(2),inst_37421);
} else {
return null;
}
}
}
}
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto____0 = (function (){
var statearr_37438 = [null,null,null,null,null,null,null,null,null];
(statearr_37438[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto__);

(statearr_37438[(1)] = (1));

return statearr_37438;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto____1 = (function (state_37431){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_37431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e37439){if((e37439 instanceof Object)){
var ex__31586__auto__ = e37439;
var statearr_37440_37442 = state_37431;
(statearr_37440_37442[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37443 = state_37431;
state_37431 = G__37443;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto__ = function(state_37431){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto____1.call(this,state_37431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_37441 = f__31645__auto__.call(null);
(statearr_37441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_37441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map