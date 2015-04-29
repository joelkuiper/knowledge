// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__29902__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29902__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__44148_44156 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__44149_44157 = null;
var count__44150_44158 = (0);
var i__44151_44159 = (0);
while(true){
if((i__44151_44159 < count__44150_44158)){
var k_44160 = cljs.core._nth.call(null,chunk__44149_44157,i__44151_44159);
e.setAttribute(cljs.core.name.call(null,k_44160),cljs.core.get.call(null,attrs,k_44160));

var G__44161 = seq__44148_44156;
var G__44162 = chunk__44149_44157;
var G__44163 = count__44150_44158;
var G__44164 = (i__44151_44159 + (1));
seq__44148_44156 = G__44161;
chunk__44149_44157 = G__44162;
count__44150_44158 = G__44163;
i__44151_44159 = G__44164;
continue;
} else {
var temp__4126__auto___44165 = cljs.core.seq.call(null,seq__44148_44156);
if(temp__4126__auto___44165){
var seq__44148_44166__$1 = temp__4126__auto___44165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44148_44166__$1)){
var c__29647__auto___44167 = cljs.core.chunk_first.call(null,seq__44148_44166__$1);
var G__44168 = cljs.core.chunk_rest.call(null,seq__44148_44166__$1);
var G__44169 = c__29647__auto___44167;
var G__44170 = cljs.core.count.call(null,c__29647__auto___44167);
var G__44171 = (0);
seq__44148_44156 = G__44168;
chunk__44149_44157 = G__44169;
count__44150_44158 = G__44170;
i__44151_44159 = G__44171;
continue;
} else {
var k_44172 = cljs.core.first.call(null,seq__44148_44166__$1);
e.setAttribute(cljs.core.name.call(null,k_44172),cljs.core.get.call(null,attrs,k_44172));

var G__44173 = cljs.core.next.call(null,seq__44148_44166__$1);
var G__44174 = null;
var G__44175 = (0);
var G__44176 = (0);
seq__44148_44156 = G__44173;
chunk__44149_44157 = G__44174;
count__44150_44158 = G__44175;
i__44151_44159 = G__44176;
continue;
}
} else {
}
}
break;
}

var seq__44152_44177 = cljs.core.seq.call(null,children);
var chunk__44153_44178 = null;
var count__44154_44179 = (0);
var i__44155_44180 = (0);
while(true){
if((i__44155_44180 < count__44154_44179)){
var ch_44181 = cljs.core._nth.call(null,chunk__44153_44178,i__44155_44180);
e.appendChild(ch_44181);

var G__44182 = seq__44152_44177;
var G__44183 = chunk__44153_44178;
var G__44184 = count__44154_44179;
var G__44185 = (i__44155_44180 + (1));
seq__44152_44177 = G__44182;
chunk__44153_44178 = G__44183;
count__44154_44179 = G__44184;
i__44155_44180 = G__44185;
continue;
} else {
var temp__4126__auto___44186 = cljs.core.seq.call(null,seq__44152_44177);
if(temp__4126__auto___44186){
var seq__44152_44187__$1 = temp__4126__auto___44186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44152_44187__$1)){
var c__29647__auto___44188 = cljs.core.chunk_first.call(null,seq__44152_44187__$1);
var G__44189 = cljs.core.chunk_rest.call(null,seq__44152_44187__$1);
var G__44190 = c__29647__auto___44188;
var G__44191 = cljs.core.count.call(null,c__29647__auto___44188);
var G__44192 = (0);
seq__44152_44177 = G__44189;
chunk__44153_44178 = G__44190;
count__44154_44179 = G__44191;
i__44155_44180 = G__44192;
continue;
} else {
var ch_44193 = cljs.core.first.call(null,seq__44152_44187__$1);
e.appendChild(ch_44193);

var G__44194 = cljs.core.next.call(null,seq__44152_44187__$1);
var G__44195 = null;
var G__44196 = (0);
var G__44197 = (0);
seq__44152_44177 = G__44194;
chunk__44153_44178 = G__44195;
count__44154_44179 = G__44196;
i__44155_44180 = G__44197;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq44145){
var G__44146 = cljs.core.first.call(null,seq44145);
var seq44145__$1 = cljs.core.next.call(null,seq44145);
var G__44147 = cljs.core.first.call(null,seq44145__$1);
var seq44145__$2 = cljs.core.next.call(null,seq44145__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__44146,G__44147,seq44145__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__29757__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29758__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29759__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29760__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29761__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__29757__auto__,prefer_table__29758__auto__,method_cache__29759__auto__,cached_hierarchy__29760__auto__,hierarchy__29761__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__29757__auto__,prefer_table__29758__auto__,method_cache__29759__auto__,cached_hierarchy__29760__auto__,hierarchy__29761__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29761__auto__,method_table__29757__auto__,prefer_table__29758__auto__,method_cache__29759__auto__,cached_hierarchy__29760__auto__));
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
var el_44198 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_44198.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_44198.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_44198.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_44198);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__44199,st_map){
var map__44203 = p__44199;
var map__44203__$1 = ((cljs.core.seq_QMARK_.call(null,map__44203))?cljs.core.apply.call(null,cljs.core.hash_map,map__44203):map__44203);
var container_el = cljs.core.get.call(null,map__44203__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__44203,map__44203__$1,container_el){
return (function (p__44204){
var vec__44205 = p__44204;
var k = cljs.core.nth.call(null,vec__44205,(0),null);
var v = cljs.core.nth.call(null,vec__44205,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__44203,map__44203__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__44206,dom_str){
var map__44208 = p__44206;
var map__44208__$1 = ((cljs.core.seq_QMARK_.call(null,map__44208))?cljs.core.apply.call(null,cljs.core.hash_map,map__44208):map__44208);
var c = map__44208__$1;
var content_area_el = cljs.core.get.call(null,map__44208__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__44209){
var map__44211 = p__44209;
var map__44211__$1 = ((cljs.core.seq_QMARK_.call(null,map__44211))?cljs.core.apply.call(null,cljs.core.hash_map,map__44211):map__44211);
var content_area_el = cljs.core.get.call(null,map__44211__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_44253){
var state_val_44254 = (state_44253[(1)]);
if((state_val_44254 === (2))){
var inst_44238 = (state_44253[(7)]);
var inst_44247 = (state_44253[(2)]);
var inst_44248 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_44249 = ["auto"];
var inst_44250 = cljs.core.PersistentHashMap.fromArrays(inst_44248,inst_44249);
var inst_44251 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44238,inst_44250);
var state_44253__$1 = (function (){var statearr_44255 = state_44253;
(statearr_44255[(8)] = inst_44247);

return statearr_44255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44253__$1,inst_44251);
} else {
if((state_val_44254 === (1))){
var inst_44238 = (state_44253[(7)]);
var inst_44238__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_44239 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_44240 = ["10px","10px","100%","68px","1.0"];
var inst_44241 = cljs.core.PersistentHashMap.fromArrays(inst_44239,inst_44240);
var inst_44242 = cljs.core.merge.call(null,inst_44241,style);
var inst_44243 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44238__$1,inst_44242);
var inst_44244 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_44238__$1,msg);
var inst_44245 = cljs.core.async.timeout.call(null,(300));
var state_44253__$1 = (function (){var statearr_44256 = state_44253;
(statearr_44256[(9)] = inst_44244);

(statearr_44256[(10)] = inst_44243);

(statearr_44256[(7)] = inst_44238__$1);

return statearr_44256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44253__$1,(2),inst_44245);
} else {
return null;
}
}
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto____0 = (function (){
var statearr_44260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44260[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto__);

(statearr_44260[(1)] = (1));

return statearr_44260;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto____1 = (function (state_44253){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44261){if((e44261 instanceof Object)){
var ex__32325__auto__ = e44261;
var statearr_44262_44264 = state_44253;
(statearr_44262_44264[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44265 = state_44253;
state_44253 = G__44265;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto__ = function(state_44253){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto____1.call(this,state_44253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_44263 = f__32384__auto__.call(null);
(statearr_44263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_44263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
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
var vec__44267 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__44267,(0),null);
var ln = cljs.core.nth.call(null,vec__44267,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__44270 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__44270,(0),null);
var file_line = cljs.core.nth.call(null,vec__44270,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__44270,file_name,file_line){
return (function (p1__44268_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__44268_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__44270,file_name,file_line))
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
var map__44272 = figwheel.client.heads_up.ensure_container.call(null);
var map__44272__$1 = ((cljs.core.seq_QMARK_.call(null,map__44272))?cljs.core.apply.call(null,cljs.core.hash_map,map__44272):map__44272);
var content_area_el = cljs.core.get.call(null,map__44272__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_44319){
var state_val_44320 = (state_44319[(1)]);
if((state_val_44320 === (3))){
var inst_44302 = (state_44319[(7)]);
var inst_44316 = (state_44319[(2)]);
var inst_44317 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_44302,"");
var state_44319__$1 = (function (){var statearr_44321 = state_44319;
(statearr_44321[(8)] = inst_44316);

return statearr_44321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44319__$1,inst_44317);
} else {
if((state_val_44320 === (2))){
var inst_44302 = (state_44319[(7)]);
var inst_44309 = (state_44319[(2)]);
var inst_44310 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_44311 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_44312 = cljs.core.PersistentHashMap.fromArrays(inst_44310,inst_44311);
var inst_44313 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44302,inst_44312);
var inst_44314 = cljs.core.async.timeout.call(null,(200));
var state_44319__$1 = (function (){var statearr_44322 = state_44319;
(statearr_44322[(9)] = inst_44313);

(statearr_44322[(10)] = inst_44309);

return statearr_44322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44319__$1,(3),inst_44314);
} else {
if((state_val_44320 === (1))){
var inst_44302 = (state_44319[(7)]);
var inst_44302__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_44303 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_44304 = ["0.0"];
var inst_44305 = cljs.core.PersistentHashMap.fromArrays(inst_44303,inst_44304);
var inst_44306 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_44302__$1,inst_44305);
var inst_44307 = cljs.core.async.timeout.call(null,(300));
var state_44319__$1 = (function (){var statearr_44323 = state_44319;
(statearr_44323[(7)] = inst_44302__$1);

(statearr_44323[(11)] = inst_44306);

return statearr_44323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44319__$1,(2),inst_44307);
} else {
return null;
}
}
}
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__32322__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__32322__auto____0 = (function (){
var statearr_44327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44327[(0)] = figwheel$client$heads_up$clear_$_state_machine__32322__auto__);

(statearr_44327[(1)] = (1));

return statearr_44327;
});
var figwheel$client$heads_up$clear_$_state_machine__32322__auto____1 = (function (state_44319){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44328){if((e44328 instanceof Object)){
var ex__32325__auto__ = e44328;
var statearr_44329_44331 = state_44319;
(statearr_44329_44331[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44332 = state_44319;
state_44319 = G__44332;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__32322__auto__ = function(state_44319){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__32322__auto____1.call(this,state_44319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__32322__auto____0;
figwheel$client$heads_up$clear_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__32322__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_44330 = f__32384__auto__.call(null);
(statearr_44330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_44330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_44364){
var state_val_44365 = (state_44364[(1)]);
if((state_val_44365 === (4))){
var inst_44362 = (state_44364[(2)]);
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44364__$1,inst_44362);
} else {
if((state_val_44365 === (3))){
var inst_44359 = (state_44364[(2)]);
var inst_44360 = figwheel.client.heads_up.clear.call(null);
var state_44364__$1 = (function (){var statearr_44366 = state_44364;
(statearr_44366[(7)] = inst_44359);

return statearr_44366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44364__$1,(4),inst_44360);
} else {
if((state_val_44365 === (2))){
var inst_44356 = (state_44364[(2)]);
var inst_44357 = cljs.core.async.timeout.call(null,(400));
var state_44364__$1 = (function (){var statearr_44367 = state_44364;
(statearr_44367[(8)] = inst_44356);

return statearr_44367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44364__$1,(3),inst_44357);
} else {
if((state_val_44365 === (1))){
var inst_44354 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_44364__$1 = state_44364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44364__$1,(2),inst_44354);
} else {
return null;
}
}
}
}
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto____0 = (function (){
var statearr_44371 = [null,null,null,null,null,null,null,null,null];
(statearr_44371[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto__);

(statearr_44371[(1)] = (1));

return statearr_44371;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto____1 = (function (state_44364){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_44364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e44372){if((e44372 instanceof Object)){
var ex__32325__auto__ = e44372;
var statearr_44373_44375 = state_44364;
(statearr_44373_44375[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44376 = state_44364;
state_44364 = G__44376;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto__ = function(state_44364){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto____1.call(this,state_44364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_44374 = f__32384__auto__.call(null);
(statearr_44374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_44374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map