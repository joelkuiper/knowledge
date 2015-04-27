// Compiled by ClojureScript 0.0-3196 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = (function (){var obj35204 = {};
return obj35204;
})();

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = (function (){var obj35206 = {};
return obj35206;
})();

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._abort[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._abort["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = (function (){var obj35208 = {};
return obj35208;
})();


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = (function (){var obj35210 = {};
return obj35210;
})();

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._status[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._status["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._status_text[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._status_text["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

/**
 * Returns the response body as a string.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._body[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._body["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._get_response_header[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((function (){var and__28361__auto__ = this$;
if(and__28361__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__28361__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__29009__auto__ = (((this$ == null))?null:this$);
return (function (){var or__28373__auto__ = (ajax.core._was_aborted[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__28373__auto__ = (function (){var G__35214 = params;
if(G__35214){
var bit__29047__auto__ = null;
if(cljs.core.truth_((function (){var or__28373__auto__ = bit__29047__auto__;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return G__35214.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__35214.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__35214);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__35214);
}
})();
if(or__28373__auto__){
return or__28373__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__35216){
var map__35217 = p__35216;
var map__35217__$1 = ((cljs.core.seq_QMARK_.call(null,map__35217))?cljs.core.apply.call(null,cljs.core.hash_map,map__35217):map__35217);
var with_credentials = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__35217__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var this$__$1 = this;
var G__35218 = this$__$1;
goog.events.listen(G__35218,goog.net.EventType.COMPLETE,((function (G__35218,this$__$1,map__35217,map__35217__$1,with_credentials,timeout){
return (function (p1__35215_SHARP_){
return handler.call(null,p1__35215_SHARP_.target);
});})(G__35218,this$__$1,map__35217,map__35217__$1,with_credentials,timeout))
);

G__35218.setTimeoutInterval(timeout);

G__35218.setWithCredentials(with_credentials);

G__35218.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__35218;
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__35220){
var map__35221 = p__35220;
var map__35221__$1 = ((cljs.core.seq_QMARK_.call(null,map__35221))?cljs.core.apply.call(null,cljs.core.hash_map,map__35221):map__35221);
var with_credentials = cljs.core.get.call(null,map__35221__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__35221__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__35221,map__35221__$1,with_credentials,timeout){
return (function (p1__35219_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__35219_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__35221,map__35221__$1,with_credentials,timeout))
;

var G__35222 = this$__$1;
G__35222.open(method,uri,true);

var t_35229 = G__35222;
var t_35230__$1 = (function (){var seq__35223 = cljs.core.seq.call(null,headers);
var chunk__35224 = null;
var count__35225 = (0);
var i__35226 = (0);
while(true){
if((i__35226 < count__35225)){
var vec__35227 = cljs.core._nth.call(null,chunk__35224,i__35226);
var k = cljs.core.nth.call(null,vec__35227,(0),null);
var v = cljs.core.nth.call(null,vec__35227,(1),null);
t_35229.setRequestHeader(k,v);

var G__35231 = seq__35223;
var G__35232 = chunk__35224;
var G__35233 = count__35225;
var G__35234 = (i__35226 + (1));
seq__35223 = G__35231;
chunk__35224 = G__35232;
count__35225 = G__35233;
i__35226 = G__35234;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35223);
if(temp__4126__auto__){
var seq__35223__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35223__$1)){
var c__29158__auto__ = cljs.core.chunk_first.call(null,seq__35223__$1);
var G__35235 = cljs.core.chunk_rest.call(null,seq__35223__$1);
var G__35236 = c__29158__auto__;
var G__35237 = cljs.core.count.call(null,c__29158__auto__);
var G__35238 = (0);
seq__35223 = G__35235;
chunk__35224 = G__35236;
count__35225 = G__35237;
i__35226 = G__35238;
continue;
} else {
var vec__35228 = cljs.core.first.call(null,seq__35223__$1);
var k = cljs.core.nth.call(null,vec__35228,(0),null);
var v = cljs.core.nth.call(null,vec__35228,(1),null);
t_35229.setRequestHeader(k,v);

var G__35239 = cljs.core.next.call(null,seq__35223__$1);
var G__35240 = null;
var G__35241 = (0);
var G__35242 = (0);
seq__35223 = G__35239;
chunk__35224 = G__35240;
count__35225 = G__35241;
i__35226 = G__35242;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__35222.send((function (){var or__28373__auto__ = body;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return "";
}
})());

return G__35222;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__35243){
var map__35244 = p__35243;
var map__35244__$1 = ((cljs.core.seq_QMARK_.call(null,map__35244))?cljs.core.apply.call(null,cljs.core.hash_map,map__35244):map__35244);
var max_retries = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var priority = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var timeout = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var id = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
var G__35246 = arguments.length;
switch (G__35246) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.call(null);
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function ajax$core$transit_write(){
var G__35249 = arguments.length;
switch (G__35249) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var G__35252 = arguments.length;
switch (G__35252) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__35253){
var map__35254 = p__35253;
var map__35254__$1 = ((cljs.core.seq_QMARK_.call(null,map__35254))?cljs.core.apply.call(null,cljs.core.hash_map,map__35254):map__35254);
var opts = map__35254__$1;
var writer = cljs.core.get.call(null,map__35254__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var type = cljs.core.get.call(null,map__35254__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer__$1 = (function (){var or__28373__auto__ = writer;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__28373__auto____$1 = type;
if(cljs.core.truth_(or__28373__auto____$1)){
return or__28373__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),ajax.core.transit_content_type], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(){
var G__35257 = arguments.length;
switch (G__35257) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var G__35260 = arguments.length;
switch (G__35260) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__35261){
var map__35262 = p__35261;
var map__35262__$1 = ((cljs.core.seq_QMARK_.call(null,map__35262))?cljs.core.apply.call(null,cljs.core.hash_map,map__35262):map__35262);
var opts = map__35262__$1;
var raw = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var type = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader__$1 = (function (){var or__28373__auto__ = reader;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__28373__auto____$1 = type;
if(cljs.core.truth_(or__28373__auto____$1)){
return or__28373__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var G__35265 = arguments.length;
switch (G__35265) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(){
var G__35268 = arguments.length;
switch (G__35268) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__28361__auto__ = prefix;
if(cljs.core.truth_(and__28361__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__28361__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__28361__auto__ = prefix;
if(cljs.core.truth_(and__28361__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__28361__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__28361__auto__ = prefix;
if(cljs.core.truth_(and__28361__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__28361__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__28361__auto__ = prefix;
if(cljs.core.truth_(and__28361__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__28361__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var G__35271 = arguments.length;
switch (G__35271) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__35272){
var map__35273 = p__35272;
var map__35273__$1 = ((cljs.core.seq_QMARK_.call(null,map__35273))?cljs.core.apply.call(null,cljs.core.hash_map,map__35273):map__35273);
var raw = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var keywords_QMARK_ = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var prefix = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(){
var G__35276 = arguments.length;
switch (G__35276) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(){
var G__35279 = arguments.length;
switch (G__35279) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__28373__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__28373__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var G__35282 = arguments.length;
switch (G__35282) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__35284){
var map__35286 = p__35284;
var map__35286__$1 = ((cljs.core.seq_QMARK_.call(null,map__35286))?cljs.core.apply.call(null,cljs.core.hash_map,map__35286):map__35286);
var opts = map__35286__$1;
var response_format = cljs.core.get.call(null,map__35286__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__28373__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var G__35288 = arguments.length;
switch (G__35288) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__35290){
var map__35292 = p__35290;
var map__35292__$1 = ((cljs.core.seq_QMARK_.call(null,map__35292))?cljs.core.apply.call(null,cljs.core.hash_map,map__35292):map__35292);
var opts = map__35292__$1;
var response_format = cljs.core.get.call(null,map__35292__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var G__35294 = arguments.length;
switch (G__35294) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__35296){
var map__35298 = p__35296;
var map__35298__$1 = ((cljs.core.seq_QMARK_.call(null,map__35298))?cljs.core.apply.call(null,cljs.core.hash_map,map__35298):map__35298);
var opts = map__35298__$1;
var response_format = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__35299,xhrio){
var map__35301 = p__35299;
var map__35301__$1 = ((cljs.core.seq_QMARK_.call(null,map__35301))?cljs.core.apply.call(null,cljs.core.hash_map,map__35301):map__35301);
var description = cljs.core.get.call(null,map__35301__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(){
var argseq__29413__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29413__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq35302){
var G__35303 = cljs.core.first.call(null,seq35302);
var seq35302__$1 = cljs.core.next.call(null,seq35302);
var G__35304 = cljs.core.first.call(null,seq35302__$1);
var seq35302__$2 = cljs.core.next.call(null,seq35302__$1);
var G__35305 = cljs.core.first.call(null,seq35302__$2);
var seq35302__$3 = cljs.core.next.call(null,seq35302__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__35303,G__35304,G__35305,seq35302__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__35306,xhrio){
var map__35310 = p__35306;
var map__35310__$1 = ((cljs.core.seq_QMARK_.call(null,map__35310))?cljs.core.apply.call(null,cljs.core.hash_map,map__35310):map__35310);
var format = map__35310__$1;
var read = cljs.core.get.call(null,map__35310__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}
} else {
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e35312){if((e35312 instanceof Object)){
var e = e35312;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e35312;

}
}}
}catch (e35311){if((e35311 instanceof Object)){
var e = e35311;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e35311;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__35313,p__35314){
var map__35318 = p__35313;
var map__35318__$1 = ((cljs.core.seq_QMARK_.call(null,map__35318))?cljs.core.apply.call(null,cljs.core.hash_map,map__35318):map__35318);
var headers = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"params","params",710516235));
var format = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var map__35319 = p__35314;
var map__35319__$1 = ((cljs.core.seq_QMARK_.call(null,map__35319))?cljs.core.apply.call(null,cljs.core.hash_map,map__35319):map__35319);
var content_type = cljs.core.get.call(null,map__35319__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__28373__auto__ = headers;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__35320 = ajax.core.get_request_format.call(null,format);
var map__35320__$1 = ((cljs.core.seq_QMARK_.call(null,map__35320))?cljs.core.apply.call(null,cljs.core.hash_map,map__35320):map__35320);
var content_type__$1 = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var write = cljs.core.get.call(null,map__35320__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var G__35322 = arguments.length;
switch (G__35322) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__35324){
var map__35326 = p__35324;
var map__35326__$1 = ((cljs.core.seq_QMARK_.call(null,map__35326))?cljs.core.apply.call(null,cljs.core.hash_map,map__35326):map__35326);
var handler = cljs.core.get.call(null,map__35326__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__35327){
var map__35330 = p__35327;
var map__35330__$1 = ((cljs.core.seq_QMARK_.call(null,map__35330))?cljs.core.apply.call(null,cljs.core.hash_map,map__35330):map__35330);
var opts = map__35330__$1;
var api = cljs.core.get.call(null,map__35330__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var method = cljs.core.get.call(null,map__35330__$1,new cljs.core.Keyword(null,"method","method",55703592));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__35331 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__35331,(0),null);
var body = cljs.core.nth.call(null,vec__35331,(1),null);
var headers = cljs.core.nth.call(null,vec__35331,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__28373__auto__ = api;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__35333 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__35333) {
case "url":
return ajax.core.url_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__35336 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__35336) {
case "detect":
return ajax.core.detect_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__35338_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__35338_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(){
var G__35340 = arguments.length;
switch (G__35340) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__35341,p__35342){
var map__35343 = p__35341;
var map__35343__$1 = ((cljs.core.seq_QMARK_.call(null,map__35343))?cljs.core.apply.call(null,cljs.core.hash_map,map__35343):map__35343);
var finally$ = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__35343__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var vec__35344 = p__35342;
var ok = cljs.core.nth.call(null,vec__35344,(0),null);
var result = cljs.core.nth.call(null,vec__35344,(1),null);
var temp__4124__auto___35350 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___35350)){
var h_35351 = temp__4124__auto___35350;
h_35351.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__35345){
var map__35346 = p__35345;
var map__35346__$1 = ((cljs.core.seq_QMARK_.call(null,map__35346))?cljs.core.apply.call(null,cljs.core.hash_map,map__35346):map__35346);
var finally$ = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__35346__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ((function (map__35346,map__35346__$1,finally$,error_handler,handler){
return (function (p__35347){
var vec__35348 = p__35347;
var ok = cljs.core.nth.call(null,vec__35348,(0),null);
var result = cljs.core.nth.call(null,vec__35348,(1),null);
var temp__4124__auto___35352 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___35352)){
var h_35353 = temp__4124__auto___35352;
h_35353.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__35346,map__35346__$1,finally$,error_handler,handler))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__35354){
var map__35356 = p__35354;
var map__35356__$1 = ((cljs.core.seq_QMARK_.call(null,map__35356))?cljs.core.apply.call(null,cljs.core.hash_map,map__35356):map__35356);
var opts = map__35356__$1;
var params = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"params","params",710516235));
var response_format = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var format = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__35356__$1,new cljs.core.Keyword(null,"method","method",55703592));

var needs_format = cljs.core.not.call(null,(function (){var or__28373__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__28373__auto__ = format;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq35357){
var G__35358 = cljs.core.first.call(null,seq35357);
var seq35357__$1 = cljs.core.next.call(null,seq35357);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__35358,seq35357__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq35359){
var G__35360 = cljs.core.first.call(null,seq35359);
var seq35359__$1 = cljs.core.next.call(null,seq35359);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__35360,seq35359__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq35361){
var G__35362 = cljs.core.first.call(null,seq35361);
var seq35361__$1 = cljs.core.next.call(null,seq35361);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__35362,seq35361__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq35363){
var G__35364 = cljs.core.first.call(null,seq35363);
var seq35363__$1 = cljs.core.next.call(null,seq35363);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__35364,seq35363__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq35365){
var G__35366 = cljs.core.first.call(null,seq35365);
var seq35365__$1 = cljs.core.next.call(null,seq35365);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__35366,seq35365__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq35367){
var G__35368 = cljs.core.first.call(null,seq35367);
var seq35367__$1 = cljs.core.next.call(null,seq35367);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__35368,seq35367__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__29694__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__29694__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__29694__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq35369){
var G__35370 = cljs.core.first.call(null,seq35369);
var seq35369__$1 = cljs.core.next.call(null,seq35369);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__35370,seq35369__$1);
});

//# sourceMappingURL=core.js.map