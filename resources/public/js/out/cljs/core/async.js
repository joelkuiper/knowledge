// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t45163 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45163 = (function (f,fn_handler,meta45164){
this.f = f;
this.fn_handler = fn_handler;
this.meta45164 = meta45164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45163.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t45163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t45163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45165){
var self__ = this;
var _45165__$1 = this;
return self__.meta45164;
});

cljs.core.async.t45163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45165,meta45164__$1){
var self__ = this;
var _45165__$1 = this;
return (new cljs.core.async.t45163(self__.f,self__.fn_handler,meta45164__$1));
});

cljs.core.async.t45163.cljs$lang$type = true;

cljs.core.async.t45163.cljs$lang$ctorStr = "cljs.core.async/t45163";

cljs.core.async.t45163.cljs$lang$ctorPrWriter = (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t45163");
});

cljs.core.async.__GT_t45163 = (function cljs$core$async$fn_handler_$___GT_t45163(f__$1,fn_handler__$1,meta45164){
return (new cljs.core.async.t45163(f__$1,fn_handler__$1,meta45164));
});

}

return (new cljs.core.async.t45163(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__45167 = buff;
if(G__45167){
var bit__29536__auto__ = null;
if(cljs.core.truth_((function (){var or__28862__auto__ = bit__29536__auto__;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return G__45167.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__45167.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__45167);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__45167);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__45169 = arguments.length;
switch (G__45169) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__45172 = arguments.length;
switch (G__45172) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45174 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45174);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45174,ret){
return (function (){
return fn1.call(null,val_45174);
});})(val_45174,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__45176 = arguments.length;
switch (G__45176) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29747__auto___45178 = n;
var x_45179 = (0);
while(true){
if((x_45179 < n__29747__auto___45178)){
(a[x_45179] = (0));

var G__45180 = (x_45179 + (1));
x_45179 = G__45180;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45181 = (i + (1));
i = G__45181;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t45185 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45185 = (function (flag,alt_flag,meta45186){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta45186 = meta45186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45185.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t45185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t45185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45187){
var self__ = this;
var _45187__$1 = this;
return self__.meta45186;
});})(flag))
;

cljs.core.async.t45185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45187,meta45186__$1){
var self__ = this;
var _45187__$1 = this;
return (new cljs.core.async.t45185(self__.flag,self__.alt_flag,meta45186__$1));
});})(flag))
;

cljs.core.async.t45185.cljs$lang$type = true;

cljs.core.async.t45185.cljs$lang$ctorStr = "cljs.core.async/t45185";

cljs.core.async.t45185.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t45185");
});})(flag))
;

cljs.core.async.__GT_t45185 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t45185(flag__$1,alt_flag__$1,meta45186){
return (new cljs.core.async.t45185(flag__$1,alt_flag__$1,meta45186));
});})(flag))
;

}

return (new cljs.core.async.t45185(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t45191 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t45191 = (function (cb,flag,alt_handler,meta45192){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta45192 = meta45192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45191.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t45191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t45191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t45191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45193){
var self__ = this;
var _45193__$1 = this;
return self__.meta45192;
});

cljs.core.async.t45191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45193,meta45192__$1){
var self__ = this;
var _45193__$1 = this;
return (new cljs.core.async.t45191(self__.cb,self__.flag,self__.alt_handler,meta45192__$1));
});

cljs.core.async.t45191.cljs$lang$type = true;

cljs.core.async.t45191.cljs$lang$ctorStr = "cljs.core.async/t45191";

cljs.core.async.t45191.cljs$lang$ctorPrWriter = (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t45191");
});

cljs.core.async.__GT_t45191 = (function cljs$core$async$alt_handler_$___GT_t45191(cb__$1,flag__$1,alt_handler__$1,meta45192){
return (new cljs.core.async.t45191(cb__$1,flag__$1,alt_handler__$1,meta45192));
});

}

return (new cljs.core.async.t45191(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45194_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45194_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45195_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45195_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28862__auto__ = wport;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45196 = (i + (1));
i = G__45196;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28862__auto__ = ret;
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__28850__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28850__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28850__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__29902__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29902__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45199){
var map__45200 = p__45199;
var map__45200__$1 = ((cljs.core.seq_QMARK_.call(null,map__45200))?cljs.core.apply.call(null,cljs.core.hash_map,map__45200):map__45200);
var opts = map__45200__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45197){
var G__45198 = cljs.core.first.call(null,seq45197);
var seq45197__$1 = cljs.core.next.call(null,seq45197);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45198,seq45197__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__45202 = arguments.length;
switch (G__45202) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32383__auto___45251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___45251){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___45251){
return (function (state_45226){
var state_val_45227 = (state_45226[(1)]);
if((state_val_45227 === (7))){
var inst_45222 = (state_45226[(2)]);
var state_45226__$1 = state_45226;
var statearr_45228_45252 = state_45226__$1;
(statearr_45228_45252[(2)] = inst_45222);

(statearr_45228_45252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (1))){
var state_45226__$1 = state_45226;
var statearr_45229_45253 = state_45226__$1;
(statearr_45229_45253[(2)] = null);

(statearr_45229_45253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (4))){
var inst_45205 = (state_45226[(7)]);
var inst_45205__$1 = (state_45226[(2)]);
var inst_45206 = (inst_45205__$1 == null);
var state_45226__$1 = (function (){var statearr_45230 = state_45226;
(statearr_45230[(7)] = inst_45205__$1);

return statearr_45230;
})();
if(cljs.core.truth_(inst_45206)){
var statearr_45231_45254 = state_45226__$1;
(statearr_45231_45254[(1)] = (5));

} else {
var statearr_45232_45255 = state_45226__$1;
(statearr_45232_45255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (13))){
var state_45226__$1 = state_45226;
var statearr_45233_45256 = state_45226__$1;
(statearr_45233_45256[(2)] = null);

(statearr_45233_45256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (6))){
var inst_45205 = (state_45226[(7)]);
var state_45226__$1 = state_45226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45226__$1,(11),to,inst_45205);
} else {
if((state_val_45227 === (3))){
var inst_45224 = (state_45226[(2)]);
var state_45226__$1 = state_45226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45226__$1,inst_45224);
} else {
if((state_val_45227 === (12))){
var state_45226__$1 = state_45226;
var statearr_45234_45257 = state_45226__$1;
(statearr_45234_45257[(2)] = null);

(statearr_45234_45257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (2))){
var state_45226__$1 = state_45226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45226__$1,(4),from);
} else {
if((state_val_45227 === (11))){
var inst_45215 = (state_45226[(2)]);
var state_45226__$1 = state_45226;
if(cljs.core.truth_(inst_45215)){
var statearr_45235_45258 = state_45226__$1;
(statearr_45235_45258[(1)] = (12));

} else {
var statearr_45236_45259 = state_45226__$1;
(statearr_45236_45259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (9))){
var state_45226__$1 = state_45226;
var statearr_45237_45260 = state_45226__$1;
(statearr_45237_45260[(2)] = null);

(statearr_45237_45260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (5))){
var state_45226__$1 = state_45226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45238_45261 = state_45226__$1;
(statearr_45238_45261[(1)] = (8));

} else {
var statearr_45239_45262 = state_45226__$1;
(statearr_45239_45262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (14))){
var inst_45220 = (state_45226[(2)]);
var state_45226__$1 = state_45226;
var statearr_45240_45263 = state_45226__$1;
(statearr_45240_45263[(2)] = inst_45220);

(statearr_45240_45263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (10))){
var inst_45212 = (state_45226[(2)]);
var state_45226__$1 = state_45226;
var statearr_45241_45264 = state_45226__$1;
(statearr_45241_45264[(2)] = inst_45212);

(statearr_45241_45264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45227 === (8))){
var inst_45209 = cljs.core.async.close_BANG_.call(null,to);
var state_45226__$1 = state_45226;
var statearr_45242_45265 = state_45226__$1;
(statearr_45242_45265[(2)] = inst_45209);

(statearr_45242_45265[(1)] = (10));


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
});})(c__32383__auto___45251))
;
return ((function (switch__32321__auto__,c__32383__auto___45251){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_45246 = [null,null,null,null,null,null,null,null];
(statearr_45246[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_45246[(1)] = (1));

return statearr_45246;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_45226){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45247){if((e45247 instanceof Object)){
var ex__32325__auto__ = e45247;
var statearr_45248_45266 = state_45226;
(statearr_45248_45266[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45267 = state_45226;
state_45226 = G__45267;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_45226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_45226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___45251))
})();
var state__32385__auto__ = (function (){var statearr_45249 = f__32384__auto__.call(null);
(statearr_45249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___45251);

return statearr_45249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___45251))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45451){
var vec__45452 = p__45451;
var v = cljs.core.nth.call(null,vec__45452,(0),null);
var p = cljs.core.nth.call(null,vec__45452,(1),null);
var job = vec__45452;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32383__auto___45634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___45634,res,vec__45452,v,p,job,jobs,results){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___45634,res,vec__45452,v,p,job,jobs,results){
return (function (state_45457){
var state_val_45458 = (state_45457[(1)]);
if((state_val_45458 === (2))){
var inst_45454 = (state_45457[(2)]);
var inst_45455 = cljs.core.async.close_BANG_.call(null,res);
var state_45457__$1 = (function (){var statearr_45459 = state_45457;
(statearr_45459[(7)] = inst_45454);

return statearr_45459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45457__$1,inst_45455);
} else {
if((state_val_45458 === (1))){
var state_45457__$1 = state_45457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45457__$1,(2),res,v);
} else {
return null;
}
}
});})(c__32383__auto___45634,res,vec__45452,v,p,job,jobs,results))
;
return ((function (switch__32321__auto__,c__32383__auto___45634,res,vec__45452,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0 = (function (){
var statearr_45463 = [null,null,null,null,null,null,null,null];
(statearr_45463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__);

(statearr_45463[(1)] = (1));

return statearr_45463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1 = (function (state_45457){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45464){if((e45464 instanceof Object)){
var ex__32325__auto__ = e45464;
var statearr_45465_45635 = state_45457;
(statearr_45465_45635[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45636 = state_45457;
state_45457 = G__45636;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = function(state_45457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1.call(this,state_45457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___45634,res,vec__45452,v,p,job,jobs,results))
})();
var state__32385__auto__ = (function (){var statearr_45466 = f__32384__auto__.call(null);
(statearr_45466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___45634);

return statearr_45466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___45634,res,vec__45452,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45467){
var vec__45468 = p__45467;
var v = cljs.core.nth.call(null,vec__45468,(0),null);
var p = cljs.core.nth.call(null,vec__45468,(1),null);
var job = vec__45468;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29747__auto___45637 = n;
var __45638 = (0);
while(true){
if((__45638 < n__29747__auto___45637)){
var G__45469_45639 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__45469_45639) {
case "async":
var c__32383__auto___45641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45638,c__32383__auto___45641,G__45469_45639,n__29747__auto___45637,jobs,results,process,async){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (__45638,c__32383__auto___45641,G__45469_45639,n__29747__auto___45637,jobs,results,process,async){
return (function (state_45482){
var state_val_45483 = (state_45482[(1)]);
if((state_val_45483 === (7))){
var inst_45478 = (state_45482[(2)]);
var state_45482__$1 = state_45482;
var statearr_45484_45642 = state_45482__$1;
(statearr_45484_45642[(2)] = inst_45478);

(statearr_45484_45642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (6))){
var state_45482__$1 = state_45482;
var statearr_45485_45643 = state_45482__$1;
(statearr_45485_45643[(2)] = null);

(statearr_45485_45643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (5))){
var state_45482__$1 = state_45482;
var statearr_45486_45644 = state_45482__$1;
(statearr_45486_45644[(2)] = null);

(statearr_45486_45644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (4))){
var inst_45472 = (state_45482[(2)]);
var inst_45473 = async.call(null,inst_45472);
var state_45482__$1 = state_45482;
if(cljs.core.truth_(inst_45473)){
var statearr_45487_45645 = state_45482__$1;
(statearr_45487_45645[(1)] = (5));

} else {
var statearr_45488_45646 = state_45482__$1;
(statearr_45488_45646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45483 === (3))){
var inst_45480 = (state_45482[(2)]);
var state_45482__$1 = state_45482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45482__$1,inst_45480);
} else {
if((state_val_45483 === (2))){
var state_45482__$1 = state_45482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45482__$1,(4),jobs);
} else {
if((state_val_45483 === (1))){
var state_45482__$1 = state_45482;
var statearr_45489_45647 = state_45482__$1;
(statearr_45489_45647[(2)] = null);

(statearr_45489_45647[(1)] = (2));


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
});})(__45638,c__32383__auto___45641,G__45469_45639,n__29747__auto___45637,jobs,results,process,async))
;
return ((function (__45638,switch__32321__auto__,c__32383__auto___45641,G__45469_45639,n__29747__auto___45637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0 = (function (){
var statearr_45493 = [null,null,null,null,null,null,null];
(statearr_45493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__);

(statearr_45493[(1)] = (1));

return statearr_45493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1 = (function (state_45482){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45494){if((e45494 instanceof Object)){
var ex__32325__auto__ = e45494;
var statearr_45495_45648 = state_45482;
(statearr_45495_45648[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45649 = state_45482;
state_45482 = G__45649;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = function(state_45482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1.call(this,state_45482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__;
})()
;})(__45638,switch__32321__auto__,c__32383__auto___45641,G__45469_45639,n__29747__auto___45637,jobs,results,process,async))
})();
var state__32385__auto__ = (function (){var statearr_45496 = f__32384__auto__.call(null);
(statearr_45496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___45641);

return statearr_45496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(__45638,c__32383__auto___45641,G__45469_45639,n__29747__auto___45637,jobs,results,process,async))
);


break;
case "compute":
var c__32383__auto___45650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45638,c__32383__auto___45650,G__45469_45639,n__29747__auto___45637,jobs,results,process,async){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (__45638,c__32383__auto___45650,G__45469_45639,n__29747__auto___45637,jobs,results,process,async){
return (function (state_45509){
var state_val_45510 = (state_45509[(1)]);
if((state_val_45510 === (7))){
var inst_45505 = (state_45509[(2)]);
var state_45509__$1 = state_45509;
var statearr_45511_45651 = state_45509__$1;
(statearr_45511_45651[(2)] = inst_45505);

(statearr_45511_45651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45510 === (6))){
var state_45509__$1 = state_45509;
var statearr_45512_45652 = state_45509__$1;
(statearr_45512_45652[(2)] = null);

(statearr_45512_45652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45510 === (5))){
var state_45509__$1 = state_45509;
var statearr_45513_45653 = state_45509__$1;
(statearr_45513_45653[(2)] = null);

(statearr_45513_45653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45510 === (4))){
var inst_45499 = (state_45509[(2)]);
var inst_45500 = process.call(null,inst_45499);
var state_45509__$1 = state_45509;
if(cljs.core.truth_(inst_45500)){
var statearr_45514_45654 = state_45509__$1;
(statearr_45514_45654[(1)] = (5));

} else {
var statearr_45515_45655 = state_45509__$1;
(statearr_45515_45655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45510 === (3))){
var inst_45507 = (state_45509[(2)]);
var state_45509__$1 = state_45509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45509__$1,inst_45507);
} else {
if((state_val_45510 === (2))){
var state_45509__$1 = state_45509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45509__$1,(4),jobs);
} else {
if((state_val_45510 === (1))){
var state_45509__$1 = state_45509;
var statearr_45516_45656 = state_45509__$1;
(statearr_45516_45656[(2)] = null);

(statearr_45516_45656[(1)] = (2));


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
});})(__45638,c__32383__auto___45650,G__45469_45639,n__29747__auto___45637,jobs,results,process,async))
;
return ((function (__45638,switch__32321__auto__,c__32383__auto___45650,G__45469_45639,n__29747__auto___45637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0 = (function (){
var statearr_45520 = [null,null,null,null,null,null,null];
(statearr_45520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__);

(statearr_45520[(1)] = (1));

return statearr_45520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1 = (function (state_45509){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45521){if((e45521 instanceof Object)){
var ex__32325__auto__ = e45521;
var statearr_45522_45657 = state_45509;
(statearr_45522_45657[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45658 = state_45509;
state_45509 = G__45658;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = function(state_45509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1.call(this,state_45509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__;
})()
;})(__45638,switch__32321__auto__,c__32383__auto___45650,G__45469_45639,n__29747__auto___45637,jobs,results,process,async))
})();
var state__32385__auto__ = (function (){var statearr_45523 = f__32384__auto__.call(null);
(statearr_45523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___45650);

return statearr_45523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(__45638,c__32383__auto___45650,G__45469_45639,n__29747__auto___45637,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__45659 = (__45638 + (1));
__45638 = G__45659;
continue;
} else {
}
break;
}

var c__32383__auto___45660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___45660,jobs,results,process,async){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___45660,jobs,results,process,async){
return (function (state_45545){
var state_val_45546 = (state_45545[(1)]);
if((state_val_45546 === (9))){
var inst_45538 = (state_45545[(2)]);
var state_45545__$1 = (function (){var statearr_45547 = state_45545;
(statearr_45547[(7)] = inst_45538);

return statearr_45547;
})();
var statearr_45548_45661 = state_45545__$1;
(statearr_45548_45661[(2)] = null);

(statearr_45548_45661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (8))){
var inst_45531 = (state_45545[(8)]);
var inst_45536 = (state_45545[(2)]);
var state_45545__$1 = (function (){var statearr_45549 = state_45545;
(statearr_45549[(9)] = inst_45536);

return statearr_45549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45545__$1,(9),results,inst_45531);
} else {
if((state_val_45546 === (7))){
var inst_45541 = (state_45545[(2)]);
var state_45545__$1 = state_45545;
var statearr_45550_45662 = state_45545__$1;
(statearr_45550_45662[(2)] = inst_45541);

(statearr_45550_45662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (6))){
var inst_45531 = (state_45545[(8)]);
var inst_45526 = (state_45545[(10)]);
var inst_45531__$1 = cljs.core.async.chan.call(null,(1));
var inst_45532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45533 = [inst_45526,inst_45531__$1];
var inst_45534 = (new cljs.core.PersistentVector(null,2,(5),inst_45532,inst_45533,null));
var state_45545__$1 = (function (){var statearr_45551 = state_45545;
(statearr_45551[(8)] = inst_45531__$1);

return statearr_45551;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45545__$1,(8),jobs,inst_45534);
} else {
if((state_val_45546 === (5))){
var inst_45529 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45545__$1 = state_45545;
var statearr_45552_45663 = state_45545__$1;
(statearr_45552_45663[(2)] = inst_45529);

(statearr_45552_45663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (4))){
var inst_45526 = (state_45545[(10)]);
var inst_45526__$1 = (state_45545[(2)]);
var inst_45527 = (inst_45526__$1 == null);
var state_45545__$1 = (function (){var statearr_45553 = state_45545;
(statearr_45553[(10)] = inst_45526__$1);

return statearr_45553;
})();
if(cljs.core.truth_(inst_45527)){
var statearr_45554_45664 = state_45545__$1;
(statearr_45554_45664[(1)] = (5));

} else {
var statearr_45555_45665 = state_45545__$1;
(statearr_45555_45665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (3))){
var inst_45543 = (state_45545[(2)]);
var state_45545__$1 = state_45545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45545__$1,inst_45543);
} else {
if((state_val_45546 === (2))){
var state_45545__$1 = state_45545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45545__$1,(4),from);
} else {
if((state_val_45546 === (1))){
var state_45545__$1 = state_45545;
var statearr_45556_45666 = state_45545__$1;
(statearr_45556_45666[(2)] = null);

(statearr_45556_45666[(1)] = (2));


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
});})(c__32383__auto___45660,jobs,results,process,async))
;
return ((function (switch__32321__auto__,c__32383__auto___45660,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0 = (function (){
var statearr_45560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__);

(statearr_45560[(1)] = (1));

return statearr_45560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1 = (function (state_45545){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45561){if((e45561 instanceof Object)){
var ex__32325__auto__ = e45561;
var statearr_45562_45667 = state_45545;
(statearr_45562_45667[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45668 = state_45545;
state_45545 = G__45668;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = function(state_45545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1.call(this,state_45545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___45660,jobs,results,process,async))
})();
var state__32385__auto__ = (function (){var statearr_45563 = f__32384__auto__.call(null);
(statearr_45563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___45660);

return statearr_45563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___45660,jobs,results,process,async))
);


var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__,jobs,results,process,async){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__,jobs,results,process,async){
return (function (state_45601){
var state_val_45602 = (state_45601[(1)]);
if((state_val_45602 === (7))){
var inst_45597 = (state_45601[(2)]);
var state_45601__$1 = state_45601;
var statearr_45603_45669 = state_45601__$1;
(statearr_45603_45669[(2)] = inst_45597);

(statearr_45603_45669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (20))){
var state_45601__$1 = state_45601;
var statearr_45604_45670 = state_45601__$1;
(statearr_45604_45670[(2)] = null);

(statearr_45604_45670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (1))){
var state_45601__$1 = state_45601;
var statearr_45605_45671 = state_45601__$1;
(statearr_45605_45671[(2)] = null);

(statearr_45605_45671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (4))){
var inst_45566 = (state_45601[(7)]);
var inst_45566__$1 = (state_45601[(2)]);
var inst_45567 = (inst_45566__$1 == null);
var state_45601__$1 = (function (){var statearr_45606 = state_45601;
(statearr_45606[(7)] = inst_45566__$1);

return statearr_45606;
})();
if(cljs.core.truth_(inst_45567)){
var statearr_45607_45672 = state_45601__$1;
(statearr_45607_45672[(1)] = (5));

} else {
var statearr_45608_45673 = state_45601__$1;
(statearr_45608_45673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (15))){
var inst_45579 = (state_45601[(8)]);
var state_45601__$1 = state_45601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45601__$1,(18),to,inst_45579);
} else {
if((state_val_45602 === (21))){
var inst_45592 = (state_45601[(2)]);
var state_45601__$1 = state_45601;
var statearr_45609_45674 = state_45601__$1;
(statearr_45609_45674[(2)] = inst_45592);

(statearr_45609_45674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (13))){
var inst_45594 = (state_45601[(2)]);
var state_45601__$1 = (function (){var statearr_45610 = state_45601;
(statearr_45610[(9)] = inst_45594);

return statearr_45610;
})();
var statearr_45611_45675 = state_45601__$1;
(statearr_45611_45675[(2)] = null);

(statearr_45611_45675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (6))){
var inst_45566 = (state_45601[(7)]);
var state_45601__$1 = state_45601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45601__$1,(11),inst_45566);
} else {
if((state_val_45602 === (17))){
var inst_45587 = (state_45601[(2)]);
var state_45601__$1 = state_45601;
if(cljs.core.truth_(inst_45587)){
var statearr_45612_45676 = state_45601__$1;
(statearr_45612_45676[(1)] = (19));

} else {
var statearr_45613_45677 = state_45601__$1;
(statearr_45613_45677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (3))){
var inst_45599 = (state_45601[(2)]);
var state_45601__$1 = state_45601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45601__$1,inst_45599);
} else {
if((state_val_45602 === (12))){
var inst_45576 = (state_45601[(10)]);
var state_45601__$1 = state_45601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45601__$1,(14),inst_45576);
} else {
if((state_val_45602 === (2))){
var state_45601__$1 = state_45601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45601__$1,(4),results);
} else {
if((state_val_45602 === (19))){
var state_45601__$1 = state_45601;
var statearr_45614_45678 = state_45601__$1;
(statearr_45614_45678[(2)] = null);

(statearr_45614_45678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (11))){
var inst_45576 = (state_45601[(2)]);
var state_45601__$1 = (function (){var statearr_45615 = state_45601;
(statearr_45615[(10)] = inst_45576);

return statearr_45615;
})();
var statearr_45616_45679 = state_45601__$1;
(statearr_45616_45679[(2)] = null);

(statearr_45616_45679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (9))){
var state_45601__$1 = state_45601;
var statearr_45617_45680 = state_45601__$1;
(statearr_45617_45680[(2)] = null);

(statearr_45617_45680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (5))){
var state_45601__$1 = state_45601;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45618_45681 = state_45601__$1;
(statearr_45618_45681[(1)] = (8));

} else {
var statearr_45619_45682 = state_45601__$1;
(statearr_45619_45682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (14))){
var inst_45579 = (state_45601[(8)]);
var inst_45581 = (state_45601[(11)]);
var inst_45579__$1 = (state_45601[(2)]);
var inst_45580 = (inst_45579__$1 == null);
var inst_45581__$1 = cljs.core.not.call(null,inst_45580);
var state_45601__$1 = (function (){var statearr_45620 = state_45601;
(statearr_45620[(8)] = inst_45579__$1);

(statearr_45620[(11)] = inst_45581__$1);

return statearr_45620;
})();
if(inst_45581__$1){
var statearr_45621_45683 = state_45601__$1;
(statearr_45621_45683[(1)] = (15));

} else {
var statearr_45622_45684 = state_45601__$1;
(statearr_45622_45684[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (16))){
var inst_45581 = (state_45601[(11)]);
var state_45601__$1 = state_45601;
var statearr_45623_45685 = state_45601__$1;
(statearr_45623_45685[(2)] = inst_45581);

(statearr_45623_45685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (10))){
var inst_45573 = (state_45601[(2)]);
var state_45601__$1 = state_45601;
var statearr_45624_45686 = state_45601__$1;
(statearr_45624_45686[(2)] = inst_45573);

(statearr_45624_45686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (18))){
var inst_45584 = (state_45601[(2)]);
var state_45601__$1 = state_45601;
var statearr_45625_45687 = state_45601__$1;
(statearr_45625_45687[(2)] = inst_45584);

(statearr_45625_45687[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45602 === (8))){
var inst_45570 = cljs.core.async.close_BANG_.call(null,to);
var state_45601__$1 = state_45601;
var statearr_45626_45688 = state_45601__$1;
(statearr_45626_45688[(2)] = inst_45570);

(statearr_45626_45688[(1)] = (10));


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
});})(c__32383__auto__,jobs,results,process,async))
;
return ((function (switch__32321__auto__,c__32383__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0 = (function (){
var statearr_45630 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__);

(statearr_45630[(1)] = (1));

return statearr_45630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1 = (function (state_45601){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45631){if((e45631 instanceof Object)){
var ex__32325__auto__ = e45631;
var statearr_45632_45689 = state_45601;
(statearr_45632_45689[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45690 = state_45601;
state_45601 = G__45690;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__ = function(state_45601){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1.call(this,state_45601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__,jobs,results,process,async))
})();
var state__32385__auto__ = (function (){var statearr_45633 = f__32384__auto__.call(null);
(statearr_45633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_45633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__,jobs,results,process,async))
);

return c__32383__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__45692 = arguments.length;
switch (G__45692) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__45695 = arguments.length;
switch (G__45695) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__45698 = arguments.length;
switch (G__45698) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32383__auto___45750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___45750,tc,fc){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___45750,tc,fc){
return (function (state_45724){
var state_val_45725 = (state_45724[(1)]);
if((state_val_45725 === (7))){
var inst_45720 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
var statearr_45726_45751 = state_45724__$1;
(statearr_45726_45751[(2)] = inst_45720);

(statearr_45726_45751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (1))){
var state_45724__$1 = state_45724;
var statearr_45727_45752 = state_45724__$1;
(statearr_45727_45752[(2)] = null);

(statearr_45727_45752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (4))){
var inst_45701 = (state_45724[(7)]);
var inst_45701__$1 = (state_45724[(2)]);
var inst_45702 = (inst_45701__$1 == null);
var state_45724__$1 = (function (){var statearr_45728 = state_45724;
(statearr_45728[(7)] = inst_45701__$1);

return statearr_45728;
})();
if(cljs.core.truth_(inst_45702)){
var statearr_45729_45753 = state_45724__$1;
(statearr_45729_45753[(1)] = (5));

} else {
var statearr_45730_45754 = state_45724__$1;
(statearr_45730_45754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (13))){
var state_45724__$1 = state_45724;
var statearr_45731_45755 = state_45724__$1;
(statearr_45731_45755[(2)] = null);

(statearr_45731_45755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (6))){
var inst_45701 = (state_45724[(7)]);
var inst_45707 = p.call(null,inst_45701);
var state_45724__$1 = state_45724;
if(cljs.core.truth_(inst_45707)){
var statearr_45732_45756 = state_45724__$1;
(statearr_45732_45756[(1)] = (9));

} else {
var statearr_45733_45757 = state_45724__$1;
(statearr_45733_45757[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (3))){
var inst_45722 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45724__$1,inst_45722);
} else {
if((state_val_45725 === (12))){
var state_45724__$1 = state_45724;
var statearr_45734_45758 = state_45724__$1;
(statearr_45734_45758[(2)] = null);

(statearr_45734_45758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (2))){
var state_45724__$1 = state_45724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45724__$1,(4),ch);
} else {
if((state_val_45725 === (11))){
var inst_45701 = (state_45724[(7)]);
var inst_45711 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45724__$1,(8),inst_45711,inst_45701);
} else {
if((state_val_45725 === (9))){
var state_45724__$1 = state_45724;
var statearr_45735_45759 = state_45724__$1;
(statearr_45735_45759[(2)] = tc);

(statearr_45735_45759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (5))){
var inst_45704 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45705 = cljs.core.async.close_BANG_.call(null,fc);
var state_45724__$1 = (function (){var statearr_45736 = state_45724;
(statearr_45736[(8)] = inst_45704);

return statearr_45736;
})();
var statearr_45737_45760 = state_45724__$1;
(statearr_45737_45760[(2)] = inst_45705);

(statearr_45737_45760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (14))){
var inst_45718 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
var statearr_45738_45761 = state_45724__$1;
(statearr_45738_45761[(2)] = inst_45718);

(statearr_45738_45761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (10))){
var state_45724__$1 = state_45724;
var statearr_45739_45762 = state_45724__$1;
(statearr_45739_45762[(2)] = fc);

(statearr_45739_45762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45725 === (8))){
var inst_45713 = (state_45724[(2)]);
var state_45724__$1 = state_45724;
if(cljs.core.truth_(inst_45713)){
var statearr_45740_45763 = state_45724__$1;
(statearr_45740_45763[(1)] = (12));

} else {
var statearr_45741_45764 = state_45724__$1;
(statearr_45741_45764[(1)] = (13));

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
});})(c__32383__auto___45750,tc,fc))
;
return ((function (switch__32321__auto__,c__32383__auto___45750,tc,fc){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_45745 = [null,null,null,null,null,null,null,null,null];
(statearr_45745[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_45745[(1)] = (1));

return statearr_45745;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_45724){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45746){if((e45746 instanceof Object)){
var ex__32325__auto__ = e45746;
var statearr_45747_45765 = state_45724;
(statearr_45747_45765[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45766 = state_45724;
state_45724 = G__45766;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_45724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_45724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___45750,tc,fc))
})();
var state__32385__auto__ = (function (){var statearr_45748 = f__32384__auto__.call(null);
(statearr_45748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___45750);

return statearr_45748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___45750,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_45813){
var state_val_45814 = (state_45813[(1)]);
if((state_val_45814 === (7))){
var inst_45809 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
var statearr_45815_45831 = state_45813__$1;
(statearr_45815_45831[(2)] = inst_45809);

(statearr_45815_45831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (6))){
var inst_45799 = (state_45813[(7)]);
var inst_45802 = (state_45813[(8)]);
var inst_45806 = f.call(null,inst_45799,inst_45802);
var inst_45799__$1 = inst_45806;
var state_45813__$1 = (function (){var statearr_45816 = state_45813;
(statearr_45816[(7)] = inst_45799__$1);

return statearr_45816;
})();
var statearr_45817_45832 = state_45813__$1;
(statearr_45817_45832[(2)] = null);

(statearr_45817_45832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (5))){
var inst_45799 = (state_45813[(7)]);
var state_45813__$1 = state_45813;
var statearr_45818_45833 = state_45813__$1;
(statearr_45818_45833[(2)] = inst_45799);

(statearr_45818_45833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (4))){
var inst_45802 = (state_45813[(8)]);
var inst_45802__$1 = (state_45813[(2)]);
var inst_45803 = (inst_45802__$1 == null);
var state_45813__$1 = (function (){var statearr_45819 = state_45813;
(statearr_45819[(8)] = inst_45802__$1);

return statearr_45819;
})();
if(cljs.core.truth_(inst_45803)){
var statearr_45820_45834 = state_45813__$1;
(statearr_45820_45834[(1)] = (5));

} else {
var statearr_45821_45835 = state_45813__$1;
(statearr_45821_45835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45814 === (3))){
var inst_45811 = (state_45813[(2)]);
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45813__$1,inst_45811);
} else {
if((state_val_45814 === (2))){
var state_45813__$1 = state_45813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45813__$1,(4),ch);
} else {
if((state_val_45814 === (1))){
var inst_45799 = init;
var state_45813__$1 = (function (){var statearr_45822 = state_45813;
(statearr_45822[(7)] = inst_45799);

return statearr_45822;
})();
var statearr_45823_45836 = state_45813__$1;
(statearr_45823_45836[(2)] = null);

(statearr_45823_45836[(1)] = (2));


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
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32322__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32322__auto____0 = (function (){
var statearr_45827 = [null,null,null,null,null,null,null,null,null];
(statearr_45827[(0)] = cljs$core$async$reduce_$_state_machine__32322__auto__);

(statearr_45827[(1)] = (1));

return statearr_45827;
});
var cljs$core$async$reduce_$_state_machine__32322__auto____1 = (function (state_45813){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45828){if((e45828 instanceof Object)){
var ex__32325__auto__ = e45828;
var statearr_45829_45837 = state_45813;
(statearr_45829_45837[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45838 = state_45813;
state_45813 = G__45838;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32322__auto__ = function(state_45813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32322__auto____1.call(this,state_45813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32322__auto____0;
cljs$core$async$reduce_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32322__auto____1;
return cljs$core$async$reduce_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_45830 = f__32384__auto__.call(null);
(statearr_45830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_45830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__45840 = arguments.length;
switch (G__45840) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_45865){
var state_val_45866 = (state_45865[(1)]);
if((state_val_45866 === (7))){
var inst_45847 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45867_45891 = state_45865__$1;
(statearr_45867_45891[(2)] = inst_45847);

(statearr_45867_45891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (1))){
var inst_45841 = cljs.core.seq.call(null,coll);
var inst_45842 = inst_45841;
var state_45865__$1 = (function (){var statearr_45868 = state_45865;
(statearr_45868[(7)] = inst_45842);

return statearr_45868;
})();
var statearr_45869_45892 = state_45865__$1;
(statearr_45869_45892[(2)] = null);

(statearr_45869_45892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (4))){
var inst_45842 = (state_45865[(7)]);
var inst_45845 = cljs.core.first.call(null,inst_45842);
var state_45865__$1 = state_45865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45865__$1,(7),ch,inst_45845);
} else {
if((state_val_45866 === (13))){
var inst_45859 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45870_45893 = state_45865__$1;
(statearr_45870_45893[(2)] = inst_45859);

(statearr_45870_45893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (6))){
var inst_45850 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45850)){
var statearr_45871_45894 = state_45865__$1;
(statearr_45871_45894[(1)] = (8));

} else {
var statearr_45872_45895 = state_45865__$1;
(statearr_45872_45895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (3))){
var inst_45863 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45865__$1,inst_45863);
} else {
if((state_val_45866 === (12))){
var state_45865__$1 = state_45865;
var statearr_45873_45896 = state_45865__$1;
(statearr_45873_45896[(2)] = null);

(statearr_45873_45896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (2))){
var inst_45842 = (state_45865[(7)]);
var state_45865__$1 = state_45865;
if(cljs.core.truth_(inst_45842)){
var statearr_45874_45897 = state_45865__$1;
(statearr_45874_45897[(1)] = (4));

} else {
var statearr_45875_45898 = state_45865__$1;
(statearr_45875_45898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (11))){
var inst_45856 = cljs.core.async.close_BANG_.call(null,ch);
var state_45865__$1 = state_45865;
var statearr_45876_45899 = state_45865__$1;
(statearr_45876_45899[(2)] = inst_45856);

(statearr_45876_45899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (9))){
var state_45865__$1 = state_45865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45877_45900 = state_45865__$1;
(statearr_45877_45900[(1)] = (11));

} else {
var statearr_45878_45901 = state_45865__$1;
(statearr_45878_45901[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (5))){
var inst_45842 = (state_45865[(7)]);
var state_45865__$1 = state_45865;
var statearr_45879_45902 = state_45865__$1;
(statearr_45879_45902[(2)] = inst_45842);

(statearr_45879_45902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (10))){
var inst_45861 = (state_45865[(2)]);
var state_45865__$1 = state_45865;
var statearr_45880_45903 = state_45865__$1;
(statearr_45880_45903[(2)] = inst_45861);

(statearr_45880_45903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45866 === (8))){
var inst_45842 = (state_45865[(7)]);
var inst_45852 = cljs.core.next.call(null,inst_45842);
var inst_45842__$1 = inst_45852;
var state_45865__$1 = (function (){var statearr_45881 = state_45865;
(statearr_45881[(7)] = inst_45842__$1);

return statearr_45881;
})();
var statearr_45882_45904 = state_45865__$1;
(statearr_45882_45904[(2)] = null);

(statearr_45882_45904[(1)] = (2));


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
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_45886 = [null,null,null,null,null,null,null,null];
(statearr_45886[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_45886[(1)] = (1));

return statearr_45886;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_45865){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_45865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e45887){if((e45887 instanceof Object)){
var ex__32325__auto__ = e45887;
var statearr_45888_45905 = state_45865;
(statearr_45888_45905[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45906 = state_45865;
state_45865 = G__45906;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_45865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_45865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_45889 = f__32384__auto__.call(null);
(statearr_45889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_45889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj45908 = {};
return obj45908;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__28850__auto__ = _;
if(and__28850__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__28850__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29498__auto__ = (((_ == null))?null:_);
return (function (){var or__28862__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj45910 = {};
return obj45910;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t46132 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46132 = (function (cs,ch,mult,meta46133){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta46133 = meta46133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46132.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t46132.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t46132.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t46132.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t46132.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t46132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t46132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46134){
var self__ = this;
var _46134__$1 = this;
return self__.meta46133;
});})(cs))
;

cljs.core.async.t46132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46134,meta46133__$1){
var self__ = this;
var _46134__$1 = this;
return (new cljs.core.async.t46132(self__.cs,self__.ch,self__.mult,meta46133__$1));
});})(cs))
;

cljs.core.async.t46132.cljs$lang$type = true;

cljs.core.async.t46132.cljs$lang$ctorStr = "cljs.core.async/t46132";

cljs.core.async.t46132.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t46132");
});})(cs))
;

cljs.core.async.__GT_t46132 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t46132(cs__$1,ch__$1,mult__$1,meta46133){
return (new cljs.core.async.t46132(cs__$1,ch__$1,mult__$1,meta46133));
});})(cs))
;

}

return (new cljs.core.async.t46132(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32383__auto___46353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___46353,cs,m,dchan,dctr,done){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___46353,cs,m,dchan,dctr,done){
return (function (state_46265){
var state_val_46266 = (state_46265[(1)]);
if((state_val_46266 === (7))){
var inst_46261 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46267_46354 = state_46265__$1;
(statearr_46267_46354[(2)] = inst_46261);

(statearr_46267_46354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (20))){
var inst_46166 = (state_46265[(7)]);
var inst_46176 = cljs.core.first.call(null,inst_46166);
var inst_46177 = cljs.core.nth.call(null,inst_46176,(0),null);
var inst_46178 = cljs.core.nth.call(null,inst_46176,(1),null);
var state_46265__$1 = (function (){var statearr_46268 = state_46265;
(statearr_46268[(8)] = inst_46177);

return statearr_46268;
})();
if(cljs.core.truth_(inst_46178)){
var statearr_46269_46355 = state_46265__$1;
(statearr_46269_46355[(1)] = (22));

} else {
var statearr_46270_46356 = state_46265__$1;
(statearr_46270_46356[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (27))){
var inst_46208 = (state_46265[(9)]);
var inst_46206 = (state_46265[(10)]);
var inst_46213 = (state_46265[(11)]);
var inst_46137 = (state_46265[(12)]);
var inst_46213__$1 = cljs.core._nth.call(null,inst_46206,inst_46208);
var inst_46214 = cljs.core.async.put_BANG_.call(null,inst_46213__$1,inst_46137,done);
var state_46265__$1 = (function (){var statearr_46271 = state_46265;
(statearr_46271[(11)] = inst_46213__$1);

return statearr_46271;
})();
if(cljs.core.truth_(inst_46214)){
var statearr_46272_46357 = state_46265__$1;
(statearr_46272_46357[(1)] = (30));

} else {
var statearr_46273_46358 = state_46265__$1;
(statearr_46273_46358[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (1))){
var state_46265__$1 = state_46265;
var statearr_46274_46359 = state_46265__$1;
(statearr_46274_46359[(2)] = null);

(statearr_46274_46359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (24))){
var inst_46166 = (state_46265[(7)]);
var inst_46183 = (state_46265[(2)]);
var inst_46184 = cljs.core.next.call(null,inst_46166);
var inst_46146 = inst_46184;
var inst_46147 = null;
var inst_46148 = (0);
var inst_46149 = (0);
var state_46265__$1 = (function (){var statearr_46275 = state_46265;
(statearr_46275[(13)] = inst_46148);

(statearr_46275[(14)] = inst_46183);

(statearr_46275[(15)] = inst_46146);

(statearr_46275[(16)] = inst_46147);

(statearr_46275[(17)] = inst_46149);

return statearr_46275;
})();
var statearr_46276_46360 = state_46265__$1;
(statearr_46276_46360[(2)] = null);

(statearr_46276_46360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (39))){
var state_46265__$1 = state_46265;
var statearr_46280_46361 = state_46265__$1;
(statearr_46280_46361[(2)] = null);

(statearr_46280_46361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (4))){
var inst_46137 = (state_46265[(12)]);
var inst_46137__$1 = (state_46265[(2)]);
var inst_46138 = (inst_46137__$1 == null);
var state_46265__$1 = (function (){var statearr_46281 = state_46265;
(statearr_46281[(12)] = inst_46137__$1);

return statearr_46281;
})();
if(cljs.core.truth_(inst_46138)){
var statearr_46282_46362 = state_46265__$1;
(statearr_46282_46362[(1)] = (5));

} else {
var statearr_46283_46363 = state_46265__$1;
(statearr_46283_46363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (15))){
var inst_46148 = (state_46265[(13)]);
var inst_46146 = (state_46265[(15)]);
var inst_46147 = (state_46265[(16)]);
var inst_46149 = (state_46265[(17)]);
var inst_46162 = (state_46265[(2)]);
var inst_46163 = (inst_46149 + (1));
var tmp46277 = inst_46148;
var tmp46278 = inst_46146;
var tmp46279 = inst_46147;
var inst_46146__$1 = tmp46278;
var inst_46147__$1 = tmp46279;
var inst_46148__$1 = tmp46277;
var inst_46149__$1 = inst_46163;
var state_46265__$1 = (function (){var statearr_46284 = state_46265;
(statearr_46284[(13)] = inst_46148__$1);

(statearr_46284[(15)] = inst_46146__$1);

(statearr_46284[(16)] = inst_46147__$1);

(statearr_46284[(18)] = inst_46162);

(statearr_46284[(17)] = inst_46149__$1);

return statearr_46284;
})();
var statearr_46285_46364 = state_46265__$1;
(statearr_46285_46364[(2)] = null);

(statearr_46285_46364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (21))){
var inst_46187 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46289_46365 = state_46265__$1;
(statearr_46289_46365[(2)] = inst_46187);

(statearr_46289_46365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (31))){
var inst_46213 = (state_46265[(11)]);
var inst_46217 = done.call(null,null);
var inst_46218 = cljs.core.async.untap_STAR_.call(null,m,inst_46213);
var state_46265__$1 = (function (){var statearr_46290 = state_46265;
(statearr_46290[(19)] = inst_46217);

return statearr_46290;
})();
var statearr_46291_46366 = state_46265__$1;
(statearr_46291_46366[(2)] = inst_46218);

(statearr_46291_46366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (32))){
var inst_46205 = (state_46265[(20)]);
var inst_46208 = (state_46265[(9)]);
var inst_46206 = (state_46265[(10)]);
var inst_46207 = (state_46265[(21)]);
var inst_46220 = (state_46265[(2)]);
var inst_46221 = (inst_46208 + (1));
var tmp46286 = inst_46205;
var tmp46287 = inst_46206;
var tmp46288 = inst_46207;
var inst_46205__$1 = tmp46286;
var inst_46206__$1 = tmp46287;
var inst_46207__$1 = tmp46288;
var inst_46208__$1 = inst_46221;
var state_46265__$1 = (function (){var statearr_46292 = state_46265;
(statearr_46292[(22)] = inst_46220);

(statearr_46292[(20)] = inst_46205__$1);

(statearr_46292[(9)] = inst_46208__$1);

(statearr_46292[(10)] = inst_46206__$1);

(statearr_46292[(21)] = inst_46207__$1);

return statearr_46292;
})();
var statearr_46293_46367 = state_46265__$1;
(statearr_46293_46367[(2)] = null);

(statearr_46293_46367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (40))){
var inst_46233 = (state_46265[(23)]);
var inst_46237 = done.call(null,null);
var inst_46238 = cljs.core.async.untap_STAR_.call(null,m,inst_46233);
var state_46265__$1 = (function (){var statearr_46294 = state_46265;
(statearr_46294[(24)] = inst_46237);

return statearr_46294;
})();
var statearr_46295_46368 = state_46265__$1;
(statearr_46295_46368[(2)] = inst_46238);

(statearr_46295_46368[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (33))){
var inst_46224 = (state_46265[(25)]);
var inst_46226 = cljs.core.chunked_seq_QMARK_.call(null,inst_46224);
var state_46265__$1 = state_46265;
if(inst_46226){
var statearr_46296_46369 = state_46265__$1;
(statearr_46296_46369[(1)] = (36));

} else {
var statearr_46297_46370 = state_46265__$1;
(statearr_46297_46370[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (13))){
var inst_46156 = (state_46265[(26)]);
var inst_46159 = cljs.core.async.close_BANG_.call(null,inst_46156);
var state_46265__$1 = state_46265;
var statearr_46298_46371 = state_46265__$1;
(statearr_46298_46371[(2)] = inst_46159);

(statearr_46298_46371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (22))){
var inst_46177 = (state_46265[(8)]);
var inst_46180 = cljs.core.async.close_BANG_.call(null,inst_46177);
var state_46265__$1 = state_46265;
var statearr_46299_46372 = state_46265__$1;
(statearr_46299_46372[(2)] = inst_46180);

(statearr_46299_46372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (36))){
var inst_46224 = (state_46265[(25)]);
var inst_46228 = cljs.core.chunk_first.call(null,inst_46224);
var inst_46229 = cljs.core.chunk_rest.call(null,inst_46224);
var inst_46230 = cljs.core.count.call(null,inst_46228);
var inst_46205 = inst_46229;
var inst_46206 = inst_46228;
var inst_46207 = inst_46230;
var inst_46208 = (0);
var state_46265__$1 = (function (){var statearr_46300 = state_46265;
(statearr_46300[(20)] = inst_46205);

(statearr_46300[(9)] = inst_46208);

(statearr_46300[(10)] = inst_46206);

(statearr_46300[(21)] = inst_46207);

return statearr_46300;
})();
var statearr_46301_46373 = state_46265__$1;
(statearr_46301_46373[(2)] = null);

(statearr_46301_46373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (41))){
var inst_46224 = (state_46265[(25)]);
var inst_46240 = (state_46265[(2)]);
var inst_46241 = cljs.core.next.call(null,inst_46224);
var inst_46205 = inst_46241;
var inst_46206 = null;
var inst_46207 = (0);
var inst_46208 = (0);
var state_46265__$1 = (function (){var statearr_46302 = state_46265;
(statearr_46302[(20)] = inst_46205);

(statearr_46302[(9)] = inst_46208);

(statearr_46302[(10)] = inst_46206);

(statearr_46302[(21)] = inst_46207);

(statearr_46302[(27)] = inst_46240);

return statearr_46302;
})();
var statearr_46303_46374 = state_46265__$1;
(statearr_46303_46374[(2)] = null);

(statearr_46303_46374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (43))){
var state_46265__$1 = state_46265;
var statearr_46304_46375 = state_46265__$1;
(statearr_46304_46375[(2)] = null);

(statearr_46304_46375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (29))){
var inst_46249 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46305_46376 = state_46265__$1;
(statearr_46305_46376[(2)] = inst_46249);

(statearr_46305_46376[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (44))){
var inst_46258 = (state_46265[(2)]);
var state_46265__$1 = (function (){var statearr_46306 = state_46265;
(statearr_46306[(28)] = inst_46258);

return statearr_46306;
})();
var statearr_46307_46377 = state_46265__$1;
(statearr_46307_46377[(2)] = null);

(statearr_46307_46377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (6))){
var inst_46197 = (state_46265[(29)]);
var inst_46196 = cljs.core.deref.call(null,cs);
var inst_46197__$1 = cljs.core.keys.call(null,inst_46196);
var inst_46198 = cljs.core.count.call(null,inst_46197__$1);
var inst_46199 = cljs.core.reset_BANG_.call(null,dctr,inst_46198);
var inst_46204 = cljs.core.seq.call(null,inst_46197__$1);
var inst_46205 = inst_46204;
var inst_46206 = null;
var inst_46207 = (0);
var inst_46208 = (0);
var state_46265__$1 = (function (){var statearr_46308 = state_46265;
(statearr_46308[(20)] = inst_46205);

(statearr_46308[(9)] = inst_46208);

(statearr_46308[(29)] = inst_46197__$1);

(statearr_46308[(10)] = inst_46206);

(statearr_46308[(21)] = inst_46207);

(statearr_46308[(30)] = inst_46199);

return statearr_46308;
})();
var statearr_46309_46378 = state_46265__$1;
(statearr_46309_46378[(2)] = null);

(statearr_46309_46378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (28))){
var inst_46205 = (state_46265[(20)]);
var inst_46224 = (state_46265[(25)]);
var inst_46224__$1 = cljs.core.seq.call(null,inst_46205);
var state_46265__$1 = (function (){var statearr_46310 = state_46265;
(statearr_46310[(25)] = inst_46224__$1);

return statearr_46310;
})();
if(inst_46224__$1){
var statearr_46311_46379 = state_46265__$1;
(statearr_46311_46379[(1)] = (33));

} else {
var statearr_46312_46380 = state_46265__$1;
(statearr_46312_46380[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (25))){
var inst_46208 = (state_46265[(9)]);
var inst_46207 = (state_46265[(21)]);
var inst_46210 = (inst_46208 < inst_46207);
var inst_46211 = inst_46210;
var state_46265__$1 = state_46265;
if(cljs.core.truth_(inst_46211)){
var statearr_46313_46381 = state_46265__$1;
(statearr_46313_46381[(1)] = (27));

} else {
var statearr_46314_46382 = state_46265__$1;
(statearr_46314_46382[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (34))){
var state_46265__$1 = state_46265;
var statearr_46315_46383 = state_46265__$1;
(statearr_46315_46383[(2)] = null);

(statearr_46315_46383[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (17))){
var state_46265__$1 = state_46265;
var statearr_46316_46384 = state_46265__$1;
(statearr_46316_46384[(2)] = null);

(statearr_46316_46384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (3))){
var inst_46263 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46265__$1,inst_46263);
} else {
if((state_val_46266 === (12))){
var inst_46192 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46317_46385 = state_46265__$1;
(statearr_46317_46385[(2)] = inst_46192);

(statearr_46317_46385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (2))){
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46265__$1,(4),ch);
} else {
if((state_val_46266 === (23))){
var state_46265__$1 = state_46265;
var statearr_46318_46386 = state_46265__$1;
(statearr_46318_46386[(2)] = null);

(statearr_46318_46386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (35))){
var inst_46247 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46319_46387 = state_46265__$1;
(statearr_46319_46387[(2)] = inst_46247);

(statearr_46319_46387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (19))){
var inst_46166 = (state_46265[(7)]);
var inst_46170 = cljs.core.chunk_first.call(null,inst_46166);
var inst_46171 = cljs.core.chunk_rest.call(null,inst_46166);
var inst_46172 = cljs.core.count.call(null,inst_46170);
var inst_46146 = inst_46171;
var inst_46147 = inst_46170;
var inst_46148 = inst_46172;
var inst_46149 = (0);
var state_46265__$1 = (function (){var statearr_46320 = state_46265;
(statearr_46320[(13)] = inst_46148);

(statearr_46320[(15)] = inst_46146);

(statearr_46320[(16)] = inst_46147);

(statearr_46320[(17)] = inst_46149);

return statearr_46320;
})();
var statearr_46321_46388 = state_46265__$1;
(statearr_46321_46388[(2)] = null);

(statearr_46321_46388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (11))){
var inst_46146 = (state_46265[(15)]);
var inst_46166 = (state_46265[(7)]);
var inst_46166__$1 = cljs.core.seq.call(null,inst_46146);
var state_46265__$1 = (function (){var statearr_46322 = state_46265;
(statearr_46322[(7)] = inst_46166__$1);

return statearr_46322;
})();
if(inst_46166__$1){
var statearr_46323_46389 = state_46265__$1;
(statearr_46323_46389[(1)] = (16));

} else {
var statearr_46324_46390 = state_46265__$1;
(statearr_46324_46390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (9))){
var inst_46194 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46325_46391 = state_46265__$1;
(statearr_46325_46391[(2)] = inst_46194);

(statearr_46325_46391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (5))){
var inst_46144 = cljs.core.deref.call(null,cs);
var inst_46145 = cljs.core.seq.call(null,inst_46144);
var inst_46146 = inst_46145;
var inst_46147 = null;
var inst_46148 = (0);
var inst_46149 = (0);
var state_46265__$1 = (function (){var statearr_46326 = state_46265;
(statearr_46326[(13)] = inst_46148);

(statearr_46326[(15)] = inst_46146);

(statearr_46326[(16)] = inst_46147);

(statearr_46326[(17)] = inst_46149);

return statearr_46326;
})();
var statearr_46327_46392 = state_46265__$1;
(statearr_46327_46392[(2)] = null);

(statearr_46327_46392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (14))){
var state_46265__$1 = state_46265;
var statearr_46328_46393 = state_46265__$1;
(statearr_46328_46393[(2)] = null);

(statearr_46328_46393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (45))){
var inst_46255 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46329_46394 = state_46265__$1;
(statearr_46329_46394[(2)] = inst_46255);

(statearr_46329_46394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (26))){
var inst_46197 = (state_46265[(29)]);
var inst_46251 = (state_46265[(2)]);
var inst_46252 = cljs.core.seq.call(null,inst_46197);
var state_46265__$1 = (function (){var statearr_46330 = state_46265;
(statearr_46330[(31)] = inst_46251);

return statearr_46330;
})();
if(inst_46252){
var statearr_46331_46395 = state_46265__$1;
(statearr_46331_46395[(1)] = (42));

} else {
var statearr_46332_46396 = state_46265__$1;
(statearr_46332_46396[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (16))){
var inst_46166 = (state_46265[(7)]);
var inst_46168 = cljs.core.chunked_seq_QMARK_.call(null,inst_46166);
var state_46265__$1 = state_46265;
if(inst_46168){
var statearr_46333_46397 = state_46265__$1;
(statearr_46333_46397[(1)] = (19));

} else {
var statearr_46334_46398 = state_46265__$1;
(statearr_46334_46398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (38))){
var inst_46244 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46335_46399 = state_46265__$1;
(statearr_46335_46399[(2)] = inst_46244);

(statearr_46335_46399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (30))){
var state_46265__$1 = state_46265;
var statearr_46336_46400 = state_46265__$1;
(statearr_46336_46400[(2)] = null);

(statearr_46336_46400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (10))){
var inst_46147 = (state_46265[(16)]);
var inst_46149 = (state_46265[(17)]);
var inst_46155 = cljs.core._nth.call(null,inst_46147,inst_46149);
var inst_46156 = cljs.core.nth.call(null,inst_46155,(0),null);
var inst_46157 = cljs.core.nth.call(null,inst_46155,(1),null);
var state_46265__$1 = (function (){var statearr_46337 = state_46265;
(statearr_46337[(26)] = inst_46156);

return statearr_46337;
})();
if(cljs.core.truth_(inst_46157)){
var statearr_46338_46401 = state_46265__$1;
(statearr_46338_46401[(1)] = (13));

} else {
var statearr_46339_46402 = state_46265__$1;
(statearr_46339_46402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (18))){
var inst_46190 = (state_46265[(2)]);
var state_46265__$1 = state_46265;
var statearr_46340_46403 = state_46265__$1;
(statearr_46340_46403[(2)] = inst_46190);

(statearr_46340_46403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (42))){
var state_46265__$1 = state_46265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46265__$1,(45),dchan);
} else {
if((state_val_46266 === (37))){
var inst_46137 = (state_46265[(12)]);
var inst_46233 = (state_46265[(23)]);
var inst_46224 = (state_46265[(25)]);
var inst_46233__$1 = cljs.core.first.call(null,inst_46224);
var inst_46234 = cljs.core.async.put_BANG_.call(null,inst_46233__$1,inst_46137,done);
var state_46265__$1 = (function (){var statearr_46341 = state_46265;
(statearr_46341[(23)] = inst_46233__$1);

return statearr_46341;
})();
if(cljs.core.truth_(inst_46234)){
var statearr_46342_46404 = state_46265__$1;
(statearr_46342_46404[(1)] = (39));

} else {
var statearr_46343_46405 = state_46265__$1;
(statearr_46343_46405[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46266 === (8))){
var inst_46148 = (state_46265[(13)]);
var inst_46149 = (state_46265[(17)]);
var inst_46151 = (inst_46149 < inst_46148);
var inst_46152 = inst_46151;
var state_46265__$1 = state_46265;
if(cljs.core.truth_(inst_46152)){
var statearr_46344_46406 = state_46265__$1;
(statearr_46344_46406[(1)] = (10));

} else {
var statearr_46345_46407 = state_46265__$1;
(statearr_46345_46407[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__32383__auto___46353,cs,m,dchan,dctr,done))
;
return ((function (switch__32321__auto__,c__32383__auto___46353,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32322__auto__ = null;
var cljs$core$async$mult_$_state_machine__32322__auto____0 = (function (){
var statearr_46349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46349[(0)] = cljs$core$async$mult_$_state_machine__32322__auto__);

(statearr_46349[(1)] = (1));

return statearr_46349;
});
var cljs$core$async$mult_$_state_machine__32322__auto____1 = (function (state_46265){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_46265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e46350){if((e46350 instanceof Object)){
var ex__32325__auto__ = e46350;
var statearr_46351_46408 = state_46265;
(statearr_46351_46408[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46409 = state_46265;
state_46265 = G__46409;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32322__auto__ = function(state_46265){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32322__auto____1.call(this,state_46265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32322__auto____0;
cljs$core$async$mult_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32322__auto____1;
return cljs$core$async$mult_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___46353,cs,m,dchan,dctr,done))
})();
var state__32385__auto__ = (function (){var statearr_46352 = f__32384__auto__.call(null);
(statearr_46352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___46353);

return statearr_46352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___46353,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__46411 = arguments.length;
switch (G__46411) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj46414 = {};
return obj46414;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__28850__auto__ = m;
if(and__28850__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__28850__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29498__auto__ = (((m == null))?null:m);
return (function (){var or__28862__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__29902__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29902__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46419){
var map__46420 = p__46419;
var map__46420__$1 = ((cljs.core.seq_QMARK_.call(null,map__46420))?cljs.core.apply.call(null,cljs.core.hash_map,map__46420):map__46420);
var opts = map__46420__$1;
var statearr_46421_46424 = state;
(statearr_46421_46424[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__46420,map__46420__$1,opts){
return (function (val){
var statearr_46422_46425 = state;
(statearr_46422_46425[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46420,map__46420__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_46423_46426 = state;
(statearr_46423_46426[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46415){
var G__46416 = cljs.core.first.call(null,seq46415);
var seq46415__$1 = cljs.core.next.call(null,seq46415);
var G__46417 = cljs.core.first.call(null,seq46415__$1);
var seq46415__$2 = cljs.core.next.call(null,seq46415__$1);
var G__46418 = cljs.core.first.call(null,seq46415__$2);
var seq46415__$3 = cljs.core.next.call(null,seq46415__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46416,G__46417,G__46418,seq46415__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t46546 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46546 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46547){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46547 = meta46547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46546.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t46546.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t46546.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46548){
var self__ = this;
var _46548__$1 = this;
return self__.meta46547;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46548,meta46547__$1){
var self__ = this;
var _46548__$1 = this;
return (new cljs.core.async.t46546(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46547__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t46546.cljs$lang$type = true;

cljs.core.async.t46546.cljs$lang$ctorStr = "cljs.core.async/t46546";

cljs.core.async.t46546.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t46546");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t46546 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t46546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46547){
return (new cljs.core.async.t46546(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46547));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t46546(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32383__auto___46665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___46665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___46665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46618){
var state_val_46619 = (state_46618[(1)]);
if((state_val_46619 === (7))){
var inst_46562 = (state_46618[(7)]);
var inst_46567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46562);
var state_46618__$1 = state_46618;
var statearr_46620_46666 = state_46618__$1;
(statearr_46620_46666[(2)] = inst_46567);

(statearr_46620_46666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (20))){
var inst_46577 = (state_46618[(8)]);
var state_46618__$1 = state_46618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46618__$1,(23),out,inst_46577);
} else {
if((state_val_46619 === (1))){
var inst_46552 = (state_46618[(9)]);
var inst_46552__$1 = calc_state.call(null);
var inst_46553 = cljs.core.seq_QMARK_.call(null,inst_46552__$1);
var state_46618__$1 = (function (){var statearr_46621 = state_46618;
(statearr_46621[(9)] = inst_46552__$1);

return statearr_46621;
})();
if(inst_46553){
var statearr_46622_46667 = state_46618__$1;
(statearr_46622_46667[(1)] = (2));

} else {
var statearr_46623_46668 = state_46618__$1;
(statearr_46623_46668[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (24))){
var inst_46570 = (state_46618[(10)]);
var inst_46562 = inst_46570;
var state_46618__$1 = (function (){var statearr_46624 = state_46618;
(statearr_46624[(7)] = inst_46562);

return statearr_46624;
})();
var statearr_46625_46669 = state_46618__$1;
(statearr_46625_46669[(2)] = null);

(statearr_46625_46669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (4))){
var inst_46552 = (state_46618[(9)]);
var inst_46558 = (state_46618[(2)]);
var inst_46559 = cljs.core.get.call(null,inst_46558,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46560 = cljs.core.get.call(null,inst_46558,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46561 = cljs.core.get.call(null,inst_46558,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46562 = inst_46552;
var state_46618__$1 = (function (){var statearr_46626 = state_46618;
(statearr_46626[(11)] = inst_46561);

(statearr_46626[(12)] = inst_46560);

(statearr_46626[(13)] = inst_46559);

(statearr_46626[(7)] = inst_46562);

return statearr_46626;
})();
var statearr_46627_46670 = state_46618__$1;
(statearr_46627_46670[(2)] = null);

(statearr_46627_46670[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (15))){
var state_46618__$1 = state_46618;
var statearr_46628_46671 = state_46618__$1;
(statearr_46628_46671[(2)] = null);

(statearr_46628_46671[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (21))){
var inst_46570 = (state_46618[(10)]);
var inst_46562 = inst_46570;
var state_46618__$1 = (function (){var statearr_46629 = state_46618;
(statearr_46629[(7)] = inst_46562);

return statearr_46629;
})();
var statearr_46630_46672 = state_46618__$1;
(statearr_46630_46672[(2)] = null);

(statearr_46630_46672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (13))){
var inst_46614 = (state_46618[(2)]);
var state_46618__$1 = state_46618;
var statearr_46631_46673 = state_46618__$1;
(statearr_46631_46673[(2)] = inst_46614);

(statearr_46631_46673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (22))){
var inst_46612 = (state_46618[(2)]);
var state_46618__$1 = state_46618;
var statearr_46632_46674 = state_46618__$1;
(statearr_46632_46674[(2)] = inst_46612);

(statearr_46632_46674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (6))){
var inst_46616 = (state_46618[(2)]);
var state_46618__$1 = state_46618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46618__$1,inst_46616);
} else {
if((state_val_46619 === (25))){
var state_46618__$1 = state_46618;
var statearr_46633_46675 = state_46618__$1;
(statearr_46633_46675[(2)] = null);

(statearr_46633_46675[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (17))){
var inst_46592 = (state_46618[(14)]);
var state_46618__$1 = state_46618;
var statearr_46634_46676 = state_46618__$1;
(statearr_46634_46676[(2)] = inst_46592);

(statearr_46634_46676[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (3))){
var inst_46552 = (state_46618[(9)]);
var state_46618__$1 = state_46618;
var statearr_46635_46677 = state_46618__$1;
(statearr_46635_46677[(2)] = inst_46552);

(statearr_46635_46677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (12))){
var inst_46578 = (state_46618[(15)]);
var inst_46592 = (state_46618[(14)]);
var inst_46573 = (state_46618[(16)]);
var inst_46592__$1 = inst_46573.call(null,inst_46578);
var state_46618__$1 = (function (){var statearr_46636 = state_46618;
(statearr_46636[(14)] = inst_46592__$1);

return statearr_46636;
})();
if(cljs.core.truth_(inst_46592__$1)){
var statearr_46637_46678 = state_46618__$1;
(statearr_46637_46678[(1)] = (17));

} else {
var statearr_46638_46679 = state_46618__$1;
(statearr_46638_46679[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (2))){
var inst_46552 = (state_46618[(9)]);
var inst_46555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46552);
var state_46618__$1 = state_46618;
var statearr_46639_46680 = state_46618__$1;
(statearr_46639_46680[(2)] = inst_46555);

(statearr_46639_46680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (23))){
var inst_46603 = (state_46618[(2)]);
var state_46618__$1 = state_46618;
if(cljs.core.truth_(inst_46603)){
var statearr_46640_46681 = state_46618__$1;
(statearr_46640_46681[(1)] = (24));

} else {
var statearr_46641_46682 = state_46618__$1;
(statearr_46641_46682[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (19))){
var inst_46600 = (state_46618[(2)]);
var state_46618__$1 = state_46618;
if(cljs.core.truth_(inst_46600)){
var statearr_46642_46683 = state_46618__$1;
(statearr_46642_46683[(1)] = (20));

} else {
var statearr_46643_46684 = state_46618__$1;
(statearr_46643_46684[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (11))){
var inst_46577 = (state_46618[(8)]);
var inst_46583 = (inst_46577 == null);
var state_46618__$1 = state_46618;
if(cljs.core.truth_(inst_46583)){
var statearr_46644_46685 = state_46618__$1;
(statearr_46644_46685[(1)] = (14));

} else {
var statearr_46645_46686 = state_46618__$1;
(statearr_46645_46686[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (9))){
var inst_46570 = (state_46618[(10)]);
var inst_46570__$1 = (state_46618[(2)]);
var inst_46571 = cljs.core.get.call(null,inst_46570__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46572 = cljs.core.get.call(null,inst_46570__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46573 = cljs.core.get.call(null,inst_46570__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_46618__$1 = (function (){var statearr_46646 = state_46618;
(statearr_46646[(16)] = inst_46573);

(statearr_46646[(10)] = inst_46570__$1);

(statearr_46646[(17)] = inst_46572);

return statearr_46646;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46618__$1,(10),inst_46571);
} else {
if((state_val_46619 === (5))){
var inst_46562 = (state_46618[(7)]);
var inst_46565 = cljs.core.seq_QMARK_.call(null,inst_46562);
var state_46618__$1 = state_46618;
if(inst_46565){
var statearr_46647_46687 = state_46618__$1;
(statearr_46647_46687[(1)] = (7));

} else {
var statearr_46648_46688 = state_46618__$1;
(statearr_46648_46688[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (14))){
var inst_46578 = (state_46618[(15)]);
var inst_46585 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46578);
var state_46618__$1 = state_46618;
var statearr_46649_46689 = state_46618__$1;
(statearr_46649_46689[(2)] = inst_46585);

(statearr_46649_46689[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (26))){
var inst_46608 = (state_46618[(2)]);
var state_46618__$1 = state_46618;
var statearr_46650_46690 = state_46618__$1;
(statearr_46650_46690[(2)] = inst_46608);

(statearr_46650_46690[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (16))){
var inst_46588 = (state_46618[(2)]);
var inst_46589 = calc_state.call(null);
var inst_46562 = inst_46589;
var state_46618__$1 = (function (){var statearr_46651 = state_46618;
(statearr_46651[(7)] = inst_46562);

(statearr_46651[(18)] = inst_46588);

return statearr_46651;
})();
var statearr_46652_46691 = state_46618__$1;
(statearr_46652_46691[(2)] = null);

(statearr_46652_46691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (10))){
var inst_46577 = (state_46618[(8)]);
var inst_46578 = (state_46618[(15)]);
var inst_46576 = (state_46618[(2)]);
var inst_46577__$1 = cljs.core.nth.call(null,inst_46576,(0),null);
var inst_46578__$1 = cljs.core.nth.call(null,inst_46576,(1),null);
var inst_46579 = (inst_46577__$1 == null);
var inst_46580 = cljs.core._EQ_.call(null,inst_46578__$1,change);
var inst_46581 = (inst_46579) || (inst_46580);
var state_46618__$1 = (function (){var statearr_46653 = state_46618;
(statearr_46653[(8)] = inst_46577__$1);

(statearr_46653[(15)] = inst_46578__$1);

return statearr_46653;
})();
if(cljs.core.truth_(inst_46581)){
var statearr_46654_46692 = state_46618__$1;
(statearr_46654_46692[(1)] = (11));

} else {
var statearr_46655_46693 = state_46618__$1;
(statearr_46655_46693[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (18))){
var inst_46578 = (state_46618[(15)]);
var inst_46573 = (state_46618[(16)]);
var inst_46572 = (state_46618[(17)]);
var inst_46595 = cljs.core.empty_QMARK_.call(null,inst_46573);
var inst_46596 = inst_46572.call(null,inst_46578);
var inst_46597 = cljs.core.not.call(null,inst_46596);
var inst_46598 = (inst_46595) && (inst_46597);
var state_46618__$1 = state_46618;
var statearr_46656_46694 = state_46618__$1;
(statearr_46656_46694[(2)] = inst_46598);

(statearr_46656_46694[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46619 === (8))){
var inst_46562 = (state_46618[(7)]);
var state_46618__$1 = state_46618;
var statearr_46657_46695 = state_46618__$1;
(statearr_46657_46695[(2)] = inst_46562);

(statearr_46657_46695[(1)] = (9));


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
});})(c__32383__auto___46665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32321__auto__,c__32383__auto___46665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32322__auto__ = null;
var cljs$core$async$mix_$_state_machine__32322__auto____0 = (function (){
var statearr_46661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46661[(0)] = cljs$core$async$mix_$_state_machine__32322__auto__);

(statearr_46661[(1)] = (1));

return statearr_46661;
});
var cljs$core$async$mix_$_state_machine__32322__auto____1 = (function (state_46618){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_46618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e46662){if((e46662 instanceof Object)){
var ex__32325__auto__ = e46662;
var statearr_46663_46696 = state_46618;
(statearr_46663_46696[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46697 = state_46618;
state_46618 = G__46697;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32322__auto__ = function(state_46618){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32322__auto____1.call(this,state_46618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32322__auto____0;
cljs$core$async$mix_$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32322__auto____1;
return cljs$core$async$mix_$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___46665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32385__auto__ = (function (){var statearr_46664 = f__32384__auto__.call(null);
(statearr_46664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___46665);

return statearr_46664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___46665,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj46699 = {};
return obj46699;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__28850__auto__ = p;
if(and__28850__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__28850__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29498__auto__ = (((p == null))?null:p);
return (function (){var or__28862__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__28850__auto__ = p;
if(and__28850__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__28850__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29498__auto__ = (((p == null))?null:p);
return (function (){var or__28862__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__46701 = arguments.length;
switch (G__46701) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__28850__auto__ = p;
if(and__28850__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__28850__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29498__auto__ = (((p == null))?null:p);
return (function (){var or__28862__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__28850__auto__ = p;
if(and__28850__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__28850__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29498__auto__ = (((p == null))?null:p);
return (function (){var or__28862__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29498__auto__)]);
if(or__28862__auto__){
return or__28862__auto__;
} else {
var or__28862__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__28862__auto____$1){
return or__28862__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__46705 = arguments.length;
switch (G__46705) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28862__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28862__auto__)){
return or__28862__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28862__auto__,mults){
return (function (p1__46703_SHARP_){
if(cljs.core.truth_(p1__46703_SHARP_.call(null,topic))){
return p1__46703_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46703_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28862__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t46706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t46706 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta46707){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta46707 = meta46707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t46706.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t46706.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t46706.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t46706.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t46706.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t46706.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t46706.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t46706.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46708){
var self__ = this;
var _46708__$1 = this;
return self__.meta46707;
});})(mults,ensure_mult))
;

cljs.core.async.t46706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46708,meta46707__$1){
var self__ = this;
var _46708__$1 = this;
return (new cljs.core.async.t46706(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta46707__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t46706.cljs$lang$type = true;

cljs.core.async.t46706.cljs$lang$ctorStr = "cljs.core.async/t46706";

cljs.core.async.t46706.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t46706");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t46706 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t46706(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta46707){
return (new cljs.core.async.t46706(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta46707));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t46706(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32383__auto___46829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___46829,mults,ensure_mult,p){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___46829,mults,ensure_mult,p){
return (function (state_46780){
var state_val_46781 = (state_46780[(1)]);
if((state_val_46781 === (7))){
var inst_46776 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46782_46830 = state_46780__$1;
(statearr_46782_46830[(2)] = inst_46776);

(statearr_46782_46830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (20))){
var state_46780__$1 = state_46780;
var statearr_46783_46831 = state_46780__$1;
(statearr_46783_46831[(2)] = null);

(statearr_46783_46831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (1))){
var state_46780__$1 = state_46780;
var statearr_46784_46832 = state_46780__$1;
(statearr_46784_46832[(2)] = null);

(statearr_46784_46832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (24))){
var inst_46759 = (state_46780[(7)]);
var inst_46768 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46759);
var state_46780__$1 = state_46780;
var statearr_46785_46833 = state_46780__$1;
(statearr_46785_46833[(2)] = inst_46768);

(statearr_46785_46833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (4))){
var inst_46711 = (state_46780[(8)]);
var inst_46711__$1 = (state_46780[(2)]);
var inst_46712 = (inst_46711__$1 == null);
var state_46780__$1 = (function (){var statearr_46786 = state_46780;
(statearr_46786[(8)] = inst_46711__$1);

return statearr_46786;
})();
if(cljs.core.truth_(inst_46712)){
var statearr_46787_46834 = state_46780__$1;
(statearr_46787_46834[(1)] = (5));

} else {
var statearr_46788_46835 = state_46780__$1;
(statearr_46788_46835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (15))){
var inst_46753 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46789_46836 = state_46780__$1;
(statearr_46789_46836[(2)] = inst_46753);

(statearr_46789_46836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (21))){
var inst_46773 = (state_46780[(2)]);
var state_46780__$1 = (function (){var statearr_46790 = state_46780;
(statearr_46790[(9)] = inst_46773);

return statearr_46790;
})();
var statearr_46791_46837 = state_46780__$1;
(statearr_46791_46837[(2)] = null);

(statearr_46791_46837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (13))){
var inst_46735 = (state_46780[(10)]);
var inst_46737 = cljs.core.chunked_seq_QMARK_.call(null,inst_46735);
var state_46780__$1 = state_46780;
if(inst_46737){
var statearr_46792_46838 = state_46780__$1;
(statearr_46792_46838[(1)] = (16));

} else {
var statearr_46793_46839 = state_46780__$1;
(statearr_46793_46839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (22))){
var inst_46765 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46765)){
var statearr_46794_46840 = state_46780__$1;
(statearr_46794_46840[(1)] = (23));

} else {
var statearr_46795_46841 = state_46780__$1;
(statearr_46795_46841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (6))){
var inst_46761 = (state_46780[(11)]);
var inst_46759 = (state_46780[(7)]);
var inst_46711 = (state_46780[(8)]);
var inst_46759__$1 = topic_fn.call(null,inst_46711);
var inst_46760 = cljs.core.deref.call(null,mults);
var inst_46761__$1 = cljs.core.get.call(null,inst_46760,inst_46759__$1);
var state_46780__$1 = (function (){var statearr_46796 = state_46780;
(statearr_46796[(11)] = inst_46761__$1);

(statearr_46796[(7)] = inst_46759__$1);

return statearr_46796;
})();
if(cljs.core.truth_(inst_46761__$1)){
var statearr_46797_46842 = state_46780__$1;
(statearr_46797_46842[(1)] = (19));

} else {
var statearr_46798_46843 = state_46780__$1;
(statearr_46798_46843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (25))){
var inst_46770 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46799_46844 = state_46780__$1;
(statearr_46799_46844[(2)] = inst_46770);

(statearr_46799_46844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (17))){
var inst_46735 = (state_46780[(10)]);
var inst_46744 = cljs.core.first.call(null,inst_46735);
var inst_46745 = cljs.core.async.muxch_STAR_.call(null,inst_46744);
var inst_46746 = cljs.core.async.close_BANG_.call(null,inst_46745);
var inst_46747 = cljs.core.next.call(null,inst_46735);
var inst_46721 = inst_46747;
var inst_46722 = null;
var inst_46723 = (0);
var inst_46724 = (0);
var state_46780__$1 = (function (){var statearr_46800 = state_46780;
(statearr_46800[(12)] = inst_46721);

(statearr_46800[(13)] = inst_46724);

(statearr_46800[(14)] = inst_46723);

(statearr_46800[(15)] = inst_46722);

(statearr_46800[(16)] = inst_46746);

return statearr_46800;
})();
var statearr_46801_46845 = state_46780__$1;
(statearr_46801_46845[(2)] = null);

(statearr_46801_46845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (3))){
var inst_46778 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46780__$1,inst_46778);
} else {
if((state_val_46781 === (12))){
var inst_46755 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46802_46846 = state_46780__$1;
(statearr_46802_46846[(2)] = inst_46755);

(statearr_46802_46846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (2))){
var state_46780__$1 = state_46780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46780__$1,(4),ch);
} else {
if((state_val_46781 === (23))){
var state_46780__$1 = state_46780;
var statearr_46803_46847 = state_46780__$1;
(statearr_46803_46847[(2)] = null);

(statearr_46803_46847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (19))){
var inst_46761 = (state_46780[(11)]);
var inst_46711 = (state_46780[(8)]);
var inst_46763 = cljs.core.async.muxch_STAR_.call(null,inst_46761);
var state_46780__$1 = state_46780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46780__$1,(22),inst_46763,inst_46711);
} else {
if((state_val_46781 === (11))){
var inst_46721 = (state_46780[(12)]);
var inst_46735 = (state_46780[(10)]);
var inst_46735__$1 = cljs.core.seq.call(null,inst_46721);
var state_46780__$1 = (function (){var statearr_46804 = state_46780;
(statearr_46804[(10)] = inst_46735__$1);

return statearr_46804;
})();
if(inst_46735__$1){
var statearr_46805_46848 = state_46780__$1;
(statearr_46805_46848[(1)] = (13));

} else {
var statearr_46806_46849 = state_46780__$1;
(statearr_46806_46849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (9))){
var inst_46757 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46807_46850 = state_46780__$1;
(statearr_46807_46850[(2)] = inst_46757);

(statearr_46807_46850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (5))){
var inst_46718 = cljs.core.deref.call(null,mults);
var inst_46719 = cljs.core.vals.call(null,inst_46718);
var inst_46720 = cljs.core.seq.call(null,inst_46719);
var inst_46721 = inst_46720;
var inst_46722 = null;
var inst_46723 = (0);
var inst_46724 = (0);
var state_46780__$1 = (function (){var statearr_46808 = state_46780;
(statearr_46808[(12)] = inst_46721);

(statearr_46808[(13)] = inst_46724);

(statearr_46808[(14)] = inst_46723);

(statearr_46808[(15)] = inst_46722);

return statearr_46808;
})();
var statearr_46809_46851 = state_46780__$1;
(statearr_46809_46851[(2)] = null);

(statearr_46809_46851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (14))){
var state_46780__$1 = state_46780;
var statearr_46813_46852 = state_46780__$1;
(statearr_46813_46852[(2)] = null);

(statearr_46813_46852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (16))){
var inst_46735 = (state_46780[(10)]);
var inst_46739 = cljs.core.chunk_first.call(null,inst_46735);
var inst_46740 = cljs.core.chunk_rest.call(null,inst_46735);
var inst_46741 = cljs.core.count.call(null,inst_46739);
var inst_46721 = inst_46740;
var inst_46722 = inst_46739;
var inst_46723 = inst_46741;
var inst_46724 = (0);
var state_46780__$1 = (function (){var statearr_46814 = state_46780;
(statearr_46814[(12)] = inst_46721);

(statearr_46814[(13)] = inst_46724);

(statearr_46814[(14)] = inst_46723);

(statearr_46814[(15)] = inst_46722);

return statearr_46814;
})();
var statearr_46815_46853 = state_46780__$1;
(statearr_46815_46853[(2)] = null);

(statearr_46815_46853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (10))){
var inst_46721 = (state_46780[(12)]);
var inst_46724 = (state_46780[(13)]);
var inst_46723 = (state_46780[(14)]);
var inst_46722 = (state_46780[(15)]);
var inst_46729 = cljs.core._nth.call(null,inst_46722,inst_46724);
var inst_46730 = cljs.core.async.muxch_STAR_.call(null,inst_46729);
var inst_46731 = cljs.core.async.close_BANG_.call(null,inst_46730);
var inst_46732 = (inst_46724 + (1));
var tmp46810 = inst_46721;
var tmp46811 = inst_46723;
var tmp46812 = inst_46722;
var inst_46721__$1 = tmp46810;
var inst_46722__$1 = tmp46812;
var inst_46723__$1 = tmp46811;
var inst_46724__$1 = inst_46732;
var state_46780__$1 = (function (){var statearr_46816 = state_46780;
(statearr_46816[(12)] = inst_46721__$1);

(statearr_46816[(17)] = inst_46731);

(statearr_46816[(13)] = inst_46724__$1);

(statearr_46816[(14)] = inst_46723__$1);

(statearr_46816[(15)] = inst_46722__$1);

return statearr_46816;
})();
var statearr_46817_46854 = state_46780__$1;
(statearr_46817_46854[(2)] = null);

(statearr_46817_46854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (18))){
var inst_46750 = (state_46780[(2)]);
var state_46780__$1 = state_46780;
var statearr_46818_46855 = state_46780__$1;
(statearr_46818_46855[(2)] = inst_46750);

(statearr_46818_46855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46781 === (8))){
var inst_46724 = (state_46780[(13)]);
var inst_46723 = (state_46780[(14)]);
var inst_46726 = (inst_46724 < inst_46723);
var inst_46727 = inst_46726;
var state_46780__$1 = state_46780;
if(cljs.core.truth_(inst_46727)){
var statearr_46819_46856 = state_46780__$1;
(statearr_46819_46856[(1)] = (10));

} else {
var statearr_46820_46857 = state_46780__$1;
(statearr_46820_46857[(1)] = (11));

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
});})(c__32383__auto___46829,mults,ensure_mult,p))
;
return ((function (switch__32321__auto__,c__32383__auto___46829,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_46824 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46824[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_46824[(1)] = (1));

return statearr_46824;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_46780){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_46780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e46825){if((e46825 instanceof Object)){
var ex__32325__auto__ = e46825;
var statearr_46826_46858 = state_46780;
(statearr_46826_46858[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46859 = state_46780;
state_46780 = G__46859;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_46780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_46780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___46829,mults,ensure_mult,p))
})();
var state__32385__auto__ = (function (){var statearr_46827 = f__32384__auto__.call(null);
(statearr_46827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___46829);

return statearr_46827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___46829,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__46861 = arguments.length;
switch (G__46861) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__46864 = arguments.length;
switch (G__46864) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__46867 = arguments.length;
switch (G__46867) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32383__auto___46937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___46937,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___46937,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46906){
var state_val_46907 = (state_46906[(1)]);
if((state_val_46907 === (7))){
var state_46906__$1 = state_46906;
var statearr_46908_46938 = state_46906__$1;
(statearr_46908_46938[(2)] = null);

(statearr_46908_46938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (1))){
var state_46906__$1 = state_46906;
var statearr_46909_46939 = state_46906__$1;
(statearr_46909_46939[(2)] = null);

(statearr_46909_46939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (4))){
var inst_46870 = (state_46906[(7)]);
var inst_46872 = (inst_46870 < cnt);
var state_46906__$1 = state_46906;
if(cljs.core.truth_(inst_46872)){
var statearr_46910_46940 = state_46906__$1;
(statearr_46910_46940[(1)] = (6));

} else {
var statearr_46911_46941 = state_46906__$1;
(statearr_46911_46941[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (15))){
var inst_46902 = (state_46906[(2)]);
var state_46906__$1 = state_46906;
var statearr_46912_46942 = state_46906__$1;
(statearr_46912_46942[(2)] = inst_46902);

(statearr_46912_46942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (13))){
var inst_46895 = cljs.core.async.close_BANG_.call(null,out);
var state_46906__$1 = state_46906;
var statearr_46913_46943 = state_46906__$1;
(statearr_46913_46943[(2)] = inst_46895);

(statearr_46913_46943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (6))){
var state_46906__$1 = state_46906;
var statearr_46914_46944 = state_46906__$1;
(statearr_46914_46944[(2)] = null);

(statearr_46914_46944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (3))){
var inst_46904 = (state_46906[(2)]);
var state_46906__$1 = state_46906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46906__$1,inst_46904);
} else {
if((state_val_46907 === (12))){
var inst_46892 = (state_46906[(8)]);
var inst_46892__$1 = (state_46906[(2)]);
var inst_46893 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46892__$1);
var state_46906__$1 = (function (){var statearr_46915 = state_46906;
(statearr_46915[(8)] = inst_46892__$1);

return statearr_46915;
})();
if(cljs.core.truth_(inst_46893)){
var statearr_46916_46945 = state_46906__$1;
(statearr_46916_46945[(1)] = (13));

} else {
var statearr_46917_46946 = state_46906__$1;
(statearr_46917_46946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (2))){
var inst_46869 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46870 = (0);
var state_46906__$1 = (function (){var statearr_46918 = state_46906;
(statearr_46918[(9)] = inst_46869);

(statearr_46918[(7)] = inst_46870);

return statearr_46918;
})();
var statearr_46919_46947 = state_46906__$1;
(statearr_46919_46947[(2)] = null);

(statearr_46919_46947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (11))){
var inst_46870 = (state_46906[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46906,(10),Object,null,(9));
var inst_46879 = chs__$1.call(null,inst_46870);
var inst_46880 = done.call(null,inst_46870);
var inst_46881 = cljs.core.async.take_BANG_.call(null,inst_46879,inst_46880);
var state_46906__$1 = state_46906;
var statearr_46920_46948 = state_46906__$1;
(statearr_46920_46948[(2)] = inst_46881);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46906__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (9))){
var inst_46870 = (state_46906[(7)]);
var inst_46883 = (state_46906[(2)]);
var inst_46884 = (inst_46870 + (1));
var inst_46870__$1 = inst_46884;
var state_46906__$1 = (function (){var statearr_46921 = state_46906;
(statearr_46921[(10)] = inst_46883);

(statearr_46921[(7)] = inst_46870__$1);

return statearr_46921;
})();
var statearr_46922_46949 = state_46906__$1;
(statearr_46922_46949[(2)] = null);

(statearr_46922_46949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (5))){
var inst_46890 = (state_46906[(2)]);
var state_46906__$1 = (function (){var statearr_46923 = state_46906;
(statearr_46923[(11)] = inst_46890);

return statearr_46923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46906__$1,(12),dchan);
} else {
if((state_val_46907 === (14))){
var inst_46892 = (state_46906[(8)]);
var inst_46897 = cljs.core.apply.call(null,f,inst_46892);
var state_46906__$1 = state_46906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46906__$1,(16),out,inst_46897);
} else {
if((state_val_46907 === (16))){
var inst_46899 = (state_46906[(2)]);
var state_46906__$1 = (function (){var statearr_46924 = state_46906;
(statearr_46924[(12)] = inst_46899);

return statearr_46924;
})();
var statearr_46925_46950 = state_46906__$1;
(statearr_46925_46950[(2)] = null);

(statearr_46925_46950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (10))){
var inst_46874 = (state_46906[(2)]);
var inst_46875 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46906__$1 = (function (){var statearr_46926 = state_46906;
(statearr_46926[(13)] = inst_46874);

return statearr_46926;
})();
var statearr_46927_46951 = state_46906__$1;
(statearr_46927_46951[(2)] = inst_46875);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46906__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46907 === (8))){
var inst_46888 = (state_46906[(2)]);
var state_46906__$1 = state_46906;
var statearr_46928_46952 = state_46906__$1;
(statearr_46928_46952[(2)] = inst_46888);

(statearr_46928_46952[(1)] = (5));


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
});})(c__32383__auto___46937,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32321__auto__,c__32383__auto___46937,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_46932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46932[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_46932[(1)] = (1));

return statearr_46932;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_46906){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_46906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e46933){if((e46933 instanceof Object)){
var ex__32325__auto__ = e46933;
var statearr_46934_46953 = state_46906;
(statearr_46934_46953[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46954 = state_46906;
state_46906 = G__46954;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_46906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_46906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___46937,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32385__auto__ = (function (){var statearr_46935 = f__32384__auto__.call(null);
(statearr_46935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___46937);

return statearr_46935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___46937,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__46957 = arguments.length;
switch (G__46957) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32383__auto___47012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___47012,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___47012,out){
return (function (state_46987){
var state_val_46988 = (state_46987[(1)]);
if((state_val_46988 === (7))){
var inst_46967 = (state_46987[(7)]);
var inst_46966 = (state_46987[(8)]);
var inst_46966__$1 = (state_46987[(2)]);
var inst_46967__$1 = cljs.core.nth.call(null,inst_46966__$1,(0),null);
var inst_46968 = cljs.core.nth.call(null,inst_46966__$1,(1),null);
var inst_46969 = (inst_46967__$1 == null);
var state_46987__$1 = (function (){var statearr_46989 = state_46987;
(statearr_46989[(7)] = inst_46967__$1);

(statearr_46989[(9)] = inst_46968);

(statearr_46989[(8)] = inst_46966__$1);

return statearr_46989;
})();
if(cljs.core.truth_(inst_46969)){
var statearr_46990_47013 = state_46987__$1;
(statearr_46990_47013[(1)] = (8));

} else {
var statearr_46991_47014 = state_46987__$1;
(statearr_46991_47014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (1))){
var inst_46958 = cljs.core.vec.call(null,chs);
var inst_46959 = inst_46958;
var state_46987__$1 = (function (){var statearr_46992 = state_46987;
(statearr_46992[(10)] = inst_46959);

return statearr_46992;
})();
var statearr_46993_47015 = state_46987__$1;
(statearr_46993_47015[(2)] = null);

(statearr_46993_47015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (4))){
var inst_46959 = (state_46987[(10)]);
var state_46987__$1 = state_46987;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46987__$1,(7),inst_46959);
} else {
if((state_val_46988 === (6))){
var inst_46983 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_46994_47016 = state_46987__$1;
(statearr_46994_47016[(2)] = inst_46983);

(statearr_46994_47016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (3))){
var inst_46985 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46987__$1,inst_46985);
} else {
if((state_val_46988 === (2))){
var inst_46959 = (state_46987[(10)]);
var inst_46961 = cljs.core.count.call(null,inst_46959);
var inst_46962 = (inst_46961 > (0));
var state_46987__$1 = state_46987;
if(cljs.core.truth_(inst_46962)){
var statearr_46996_47017 = state_46987__$1;
(statearr_46996_47017[(1)] = (4));

} else {
var statearr_46997_47018 = state_46987__$1;
(statearr_46997_47018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (11))){
var inst_46959 = (state_46987[(10)]);
var inst_46976 = (state_46987[(2)]);
var tmp46995 = inst_46959;
var inst_46959__$1 = tmp46995;
var state_46987__$1 = (function (){var statearr_46998 = state_46987;
(statearr_46998[(11)] = inst_46976);

(statearr_46998[(10)] = inst_46959__$1);

return statearr_46998;
})();
var statearr_46999_47019 = state_46987__$1;
(statearr_46999_47019[(2)] = null);

(statearr_46999_47019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (9))){
var inst_46967 = (state_46987[(7)]);
var state_46987__$1 = state_46987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46987__$1,(11),out,inst_46967);
} else {
if((state_val_46988 === (5))){
var inst_46981 = cljs.core.async.close_BANG_.call(null,out);
var state_46987__$1 = state_46987;
var statearr_47000_47020 = state_46987__$1;
(statearr_47000_47020[(2)] = inst_46981);

(statearr_47000_47020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (10))){
var inst_46979 = (state_46987[(2)]);
var state_46987__$1 = state_46987;
var statearr_47001_47021 = state_46987__$1;
(statearr_47001_47021[(2)] = inst_46979);

(statearr_47001_47021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46988 === (8))){
var inst_46967 = (state_46987[(7)]);
var inst_46968 = (state_46987[(9)]);
var inst_46959 = (state_46987[(10)]);
var inst_46966 = (state_46987[(8)]);
var inst_46971 = (function (){var c = inst_46968;
var v = inst_46967;
var vec__46964 = inst_46966;
var cs = inst_46959;
return ((function (c,v,vec__46964,cs,inst_46967,inst_46968,inst_46959,inst_46966,state_val_46988,c__32383__auto___47012,out){
return (function (p1__46955_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46955_SHARP_);
});
;})(c,v,vec__46964,cs,inst_46967,inst_46968,inst_46959,inst_46966,state_val_46988,c__32383__auto___47012,out))
})();
var inst_46972 = cljs.core.filterv.call(null,inst_46971,inst_46959);
var inst_46959__$1 = inst_46972;
var state_46987__$1 = (function (){var statearr_47002 = state_46987;
(statearr_47002[(10)] = inst_46959__$1);

return statearr_47002;
})();
var statearr_47003_47022 = state_46987__$1;
(statearr_47003_47022[(2)] = null);

(statearr_47003_47022[(1)] = (2));


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
});})(c__32383__auto___47012,out))
;
return ((function (switch__32321__auto__,c__32383__auto___47012,out){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_47007 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47007[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_47007[(1)] = (1));

return statearr_47007;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_46987){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_46987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47008){if((e47008 instanceof Object)){
var ex__32325__auto__ = e47008;
var statearr_47009_47023 = state_46987;
(statearr_47009_47023[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47024 = state_46987;
state_46987 = G__47024;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_46987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_46987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___47012,out))
})();
var state__32385__auto__ = (function (){var statearr_47010 = f__32384__auto__.call(null);
(statearr_47010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___47012);

return statearr_47010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___47012,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__47026 = arguments.length;
switch (G__47026) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32383__auto___47074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___47074,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___47074,out){
return (function (state_47050){
var state_val_47051 = (state_47050[(1)]);
if((state_val_47051 === (7))){
var inst_47032 = (state_47050[(7)]);
var inst_47032__$1 = (state_47050[(2)]);
var inst_47033 = (inst_47032__$1 == null);
var inst_47034 = cljs.core.not.call(null,inst_47033);
var state_47050__$1 = (function (){var statearr_47052 = state_47050;
(statearr_47052[(7)] = inst_47032__$1);

return statearr_47052;
})();
if(inst_47034){
var statearr_47053_47075 = state_47050__$1;
(statearr_47053_47075[(1)] = (8));

} else {
var statearr_47054_47076 = state_47050__$1;
(statearr_47054_47076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (1))){
var inst_47027 = (0);
var state_47050__$1 = (function (){var statearr_47055 = state_47050;
(statearr_47055[(8)] = inst_47027);

return statearr_47055;
})();
var statearr_47056_47077 = state_47050__$1;
(statearr_47056_47077[(2)] = null);

(statearr_47056_47077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (4))){
var state_47050__$1 = state_47050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47050__$1,(7),ch);
} else {
if((state_val_47051 === (6))){
var inst_47045 = (state_47050[(2)]);
var state_47050__$1 = state_47050;
var statearr_47057_47078 = state_47050__$1;
(statearr_47057_47078[(2)] = inst_47045);

(statearr_47057_47078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (3))){
var inst_47047 = (state_47050[(2)]);
var inst_47048 = cljs.core.async.close_BANG_.call(null,out);
var state_47050__$1 = (function (){var statearr_47058 = state_47050;
(statearr_47058[(9)] = inst_47047);

return statearr_47058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47050__$1,inst_47048);
} else {
if((state_val_47051 === (2))){
var inst_47027 = (state_47050[(8)]);
var inst_47029 = (inst_47027 < n);
var state_47050__$1 = state_47050;
if(cljs.core.truth_(inst_47029)){
var statearr_47059_47079 = state_47050__$1;
(statearr_47059_47079[(1)] = (4));

} else {
var statearr_47060_47080 = state_47050__$1;
(statearr_47060_47080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (11))){
var inst_47027 = (state_47050[(8)]);
var inst_47037 = (state_47050[(2)]);
var inst_47038 = (inst_47027 + (1));
var inst_47027__$1 = inst_47038;
var state_47050__$1 = (function (){var statearr_47061 = state_47050;
(statearr_47061[(10)] = inst_47037);

(statearr_47061[(8)] = inst_47027__$1);

return statearr_47061;
})();
var statearr_47062_47081 = state_47050__$1;
(statearr_47062_47081[(2)] = null);

(statearr_47062_47081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (9))){
var state_47050__$1 = state_47050;
var statearr_47063_47082 = state_47050__$1;
(statearr_47063_47082[(2)] = null);

(statearr_47063_47082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (5))){
var state_47050__$1 = state_47050;
var statearr_47064_47083 = state_47050__$1;
(statearr_47064_47083[(2)] = null);

(statearr_47064_47083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (10))){
var inst_47042 = (state_47050[(2)]);
var state_47050__$1 = state_47050;
var statearr_47065_47084 = state_47050__$1;
(statearr_47065_47084[(2)] = inst_47042);

(statearr_47065_47084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47051 === (8))){
var inst_47032 = (state_47050[(7)]);
var state_47050__$1 = state_47050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47050__$1,(11),out,inst_47032);
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
});})(c__32383__auto___47074,out))
;
return ((function (switch__32321__auto__,c__32383__auto___47074,out){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_47069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47069[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_47069[(1)] = (1));

return statearr_47069;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_47050){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_47050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47070){if((e47070 instanceof Object)){
var ex__32325__auto__ = e47070;
var statearr_47071_47085 = state_47050;
(statearr_47071_47085[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47086 = state_47050;
state_47050 = G__47086;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_47050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_47050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___47074,out))
})();
var state__32385__auto__ = (function (){var statearr_47072 = f__32384__auto__.call(null);
(statearr_47072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___47074);

return statearr_47072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___47074,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t47094 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47094 = (function (ch,f,map_LT_,meta47095){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47095 = meta47095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t47097 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47097 = (function (fn1,_,meta47095,map_LT_,f,ch,meta47098){
this.fn1 = fn1;
this._ = _;
this.meta47095 = meta47095;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta47098 = meta47098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47097.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t47097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t47097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47087_SHARP_){
return f1.call(null,(((p1__47087_SHARP_ == null))?null:self__.f.call(null,p1__47087_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t47097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47099){
var self__ = this;
var _47099__$1 = this;
return self__.meta47098;
});})(___$1))
;

cljs.core.async.t47097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47099,meta47098__$1){
var self__ = this;
var _47099__$1 = this;
return (new cljs.core.async.t47097(self__.fn1,self__._,self__.meta47095,self__.map_LT_,self__.f,self__.ch,meta47098__$1));
});})(___$1))
;

cljs.core.async.t47097.cljs$lang$type = true;

cljs.core.async.t47097.cljs$lang$ctorStr = "cljs.core.async/t47097";

cljs.core.async.t47097.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t47097");
});})(___$1))
;

cljs.core.async.__GT_t47097 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t47097(fn1__$1,___$2,meta47095__$1,map_LT___$1,f__$1,ch__$1,meta47098){
return (new cljs.core.async.t47097(fn1__$1,___$2,meta47095__$1,map_LT___$1,f__$1,ch__$1,meta47098));
});})(___$1))
;

}

return (new cljs.core.async.t47097(fn1,___$1,self__.meta47095,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28850__auto__ = ret;
if(cljs.core.truth_(and__28850__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28850__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t47094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t47094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47096){
var self__ = this;
var _47096__$1 = this;
return self__.meta47095;
});

cljs.core.async.t47094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47096,meta47095__$1){
var self__ = this;
var _47096__$1 = this;
return (new cljs.core.async.t47094(self__.ch,self__.f,self__.map_LT_,meta47095__$1));
});

cljs.core.async.t47094.cljs$lang$type = true;

cljs.core.async.t47094.cljs$lang$ctorStr = "cljs.core.async/t47094";

cljs.core.async.t47094.cljs$lang$ctorPrWriter = (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t47094");
});

cljs.core.async.__GT_t47094 = (function cljs$core$async$map_LT__$___GT_t47094(ch__$1,f__$1,map_LT___$1,meta47095){
return (new cljs.core.async.t47094(ch__$1,f__$1,map_LT___$1,meta47095));
});

}

return (new cljs.core.async.t47094(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t47103 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47103 = (function (ch,f,map_GT_,meta47104){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47104 = meta47104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t47103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47105){
var self__ = this;
var _47105__$1 = this;
return self__.meta47104;
});

cljs.core.async.t47103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47105,meta47104__$1){
var self__ = this;
var _47105__$1 = this;
return (new cljs.core.async.t47103(self__.ch,self__.f,self__.map_GT_,meta47104__$1));
});

cljs.core.async.t47103.cljs$lang$type = true;

cljs.core.async.t47103.cljs$lang$ctorStr = "cljs.core.async/t47103";

cljs.core.async.t47103.cljs$lang$ctorPrWriter = (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t47103");
});

cljs.core.async.__GT_t47103 = (function cljs$core$async$map_GT__$___GT_t47103(ch__$1,f__$1,map_GT___$1,meta47104){
return (new cljs.core.async.t47103(ch__$1,f__$1,map_GT___$1,meta47104));
});

}

return (new cljs.core.async.t47103(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t47109 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t47109 = (function (ch,p,filter_GT_,meta47110){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47110 = meta47110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t47109.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t47109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47111){
var self__ = this;
var _47111__$1 = this;
return self__.meta47110;
});

cljs.core.async.t47109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47111,meta47110__$1){
var self__ = this;
var _47111__$1 = this;
return (new cljs.core.async.t47109(self__.ch,self__.p,self__.filter_GT_,meta47110__$1));
});

cljs.core.async.t47109.cljs$lang$type = true;

cljs.core.async.t47109.cljs$lang$ctorStr = "cljs.core.async/t47109";

cljs.core.async.t47109.cljs$lang$ctorPrWriter = (function (this__29441__auto__,writer__29442__auto__,opt__29443__auto__){
return cljs.core._write.call(null,writer__29442__auto__,"cljs.core.async/t47109");
});

cljs.core.async.__GT_t47109 = (function cljs$core$async$filter_GT__$___GT_t47109(ch__$1,p__$1,filter_GT___$1,meta47110){
return (new cljs.core.async.t47109(ch__$1,p__$1,filter_GT___$1,meta47110));
});

}

return (new cljs.core.async.t47109(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__47113 = arguments.length;
switch (G__47113) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32383__auto___47156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___47156,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___47156,out){
return (function (state_47134){
var state_val_47135 = (state_47134[(1)]);
if((state_val_47135 === (7))){
var inst_47130 = (state_47134[(2)]);
var state_47134__$1 = state_47134;
var statearr_47136_47157 = state_47134__$1;
(statearr_47136_47157[(2)] = inst_47130);

(statearr_47136_47157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (1))){
var state_47134__$1 = state_47134;
var statearr_47137_47158 = state_47134__$1;
(statearr_47137_47158[(2)] = null);

(statearr_47137_47158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (4))){
var inst_47116 = (state_47134[(7)]);
var inst_47116__$1 = (state_47134[(2)]);
var inst_47117 = (inst_47116__$1 == null);
var state_47134__$1 = (function (){var statearr_47138 = state_47134;
(statearr_47138[(7)] = inst_47116__$1);

return statearr_47138;
})();
if(cljs.core.truth_(inst_47117)){
var statearr_47139_47159 = state_47134__$1;
(statearr_47139_47159[(1)] = (5));

} else {
var statearr_47140_47160 = state_47134__$1;
(statearr_47140_47160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (6))){
var inst_47116 = (state_47134[(7)]);
var inst_47121 = p.call(null,inst_47116);
var state_47134__$1 = state_47134;
if(cljs.core.truth_(inst_47121)){
var statearr_47141_47161 = state_47134__$1;
(statearr_47141_47161[(1)] = (8));

} else {
var statearr_47142_47162 = state_47134__$1;
(statearr_47142_47162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (3))){
var inst_47132 = (state_47134[(2)]);
var state_47134__$1 = state_47134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47134__$1,inst_47132);
} else {
if((state_val_47135 === (2))){
var state_47134__$1 = state_47134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47134__$1,(4),ch);
} else {
if((state_val_47135 === (11))){
var inst_47124 = (state_47134[(2)]);
var state_47134__$1 = state_47134;
var statearr_47143_47163 = state_47134__$1;
(statearr_47143_47163[(2)] = inst_47124);

(statearr_47143_47163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (9))){
var state_47134__$1 = state_47134;
var statearr_47144_47164 = state_47134__$1;
(statearr_47144_47164[(2)] = null);

(statearr_47144_47164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (5))){
var inst_47119 = cljs.core.async.close_BANG_.call(null,out);
var state_47134__$1 = state_47134;
var statearr_47145_47165 = state_47134__$1;
(statearr_47145_47165[(2)] = inst_47119);

(statearr_47145_47165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (10))){
var inst_47127 = (state_47134[(2)]);
var state_47134__$1 = (function (){var statearr_47146 = state_47134;
(statearr_47146[(8)] = inst_47127);

return statearr_47146;
})();
var statearr_47147_47166 = state_47134__$1;
(statearr_47147_47166[(2)] = null);

(statearr_47147_47166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47135 === (8))){
var inst_47116 = (state_47134[(7)]);
var state_47134__$1 = state_47134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47134__$1,(11),out,inst_47116);
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
});})(c__32383__auto___47156,out))
;
return ((function (switch__32321__auto__,c__32383__auto___47156,out){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_47151 = [null,null,null,null,null,null,null,null,null];
(statearr_47151[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_47151[(1)] = (1));

return statearr_47151;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_47134){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_47134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47152){if((e47152 instanceof Object)){
var ex__32325__auto__ = e47152;
var statearr_47153_47167 = state_47134;
(statearr_47153_47167[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47168 = state_47134;
state_47134 = G__47168;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_47134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_47134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___47156,out))
})();
var state__32385__auto__ = (function (){var statearr_47154 = f__32384__auto__.call(null);
(statearr_47154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___47156);

return statearr_47154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___47156,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__47170 = arguments.length;
switch (G__47170) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32383__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto__){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto__){
return (function (state_47337){
var state_val_47338 = (state_47337[(1)]);
if((state_val_47338 === (7))){
var inst_47333 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47339_47380 = state_47337__$1;
(statearr_47339_47380[(2)] = inst_47333);

(statearr_47339_47380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (20))){
var inst_47303 = (state_47337[(7)]);
var inst_47314 = (state_47337[(2)]);
var inst_47315 = cljs.core.next.call(null,inst_47303);
var inst_47289 = inst_47315;
var inst_47290 = null;
var inst_47291 = (0);
var inst_47292 = (0);
var state_47337__$1 = (function (){var statearr_47340 = state_47337;
(statearr_47340[(8)] = inst_47290);

(statearr_47340[(9)] = inst_47291);

(statearr_47340[(10)] = inst_47289);

(statearr_47340[(11)] = inst_47292);

(statearr_47340[(12)] = inst_47314);

return statearr_47340;
})();
var statearr_47341_47381 = state_47337__$1;
(statearr_47341_47381[(2)] = null);

(statearr_47341_47381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (1))){
var state_47337__$1 = state_47337;
var statearr_47342_47382 = state_47337__$1;
(statearr_47342_47382[(2)] = null);

(statearr_47342_47382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (4))){
var inst_47278 = (state_47337[(13)]);
var inst_47278__$1 = (state_47337[(2)]);
var inst_47279 = (inst_47278__$1 == null);
var state_47337__$1 = (function (){var statearr_47343 = state_47337;
(statearr_47343[(13)] = inst_47278__$1);

return statearr_47343;
})();
if(cljs.core.truth_(inst_47279)){
var statearr_47344_47383 = state_47337__$1;
(statearr_47344_47383[(1)] = (5));

} else {
var statearr_47345_47384 = state_47337__$1;
(statearr_47345_47384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (15))){
var state_47337__$1 = state_47337;
var statearr_47349_47385 = state_47337__$1;
(statearr_47349_47385[(2)] = null);

(statearr_47349_47385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (21))){
var state_47337__$1 = state_47337;
var statearr_47350_47386 = state_47337__$1;
(statearr_47350_47386[(2)] = null);

(statearr_47350_47386[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (13))){
var inst_47290 = (state_47337[(8)]);
var inst_47291 = (state_47337[(9)]);
var inst_47289 = (state_47337[(10)]);
var inst_47292 = (state_47337[(11)]);
var inst_47299 = (state_47337[(2)]);
var inst_47300 = (inst_47292 + (1));
var tmp47346 = inst_47290;
var tmp47347 = inst_47291;
var tmp47348 = inst_47289;
var inst_47289__$1 = tmp47348;
var inst_47290__$1 = tmp47346;
var inst_47291__$1 = tmp47347;
var inst_47292__$1 = inst_47300;
var state_47337__$1 = (function (){var statearr_47351 = state_47337;
(statearr_47351[(8)] = inst_47290__$1);

(statearr_47351[(14)] = inst_47299);

(statearr_47351[(9)] = inst_47291__$1);

(statearr_47351[(10)] = inst_47289__$1);

(statearr_47351[(11)] = inst_47292__$1);

return statearr_47351;
})();
var statearr_47352_47387 = state_47337__$1;
(statearr_47352_47387[(2)] = null);

(statearr_47352_47387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (22))){
var state_47337__$1 = state_47337;
var statearr_47353_47388 = state_47337__$1;
(statearr_47353_47388[(2)] = null);

(statearr_47353_47388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (6))){
var inst_47278 = (state_47337[(13)]);
var inst_47287 = f.call(null,inst_47278);
var inst_47288 = cljs.core.seq.call(null,inst_47287);
var inst_47289 = inst_47288;
var inst_47290 = null;
var inst_47291 = (0);
var inst_47292 = (0);
var state_47337__$1 = (function (){var statearr_47354 = state_47337;
(statearr_47354[(8)] = inst_47290);

(statearr_47354[(9)] = inst_47291);

(statearr_47354[(10)] = inst_47289);

(statearr_47354[(11)] = inst_47292);

return statearr_47354;
})();
var statearr_47355_47389 = state_47337__$1;
(statearr_47355_47389[(2)] = null);

(statearr_47355_47389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (17))){
var inst_47303 = (state_47337[(7)]);
var inst_47307 = cljs.core.chunk_first.call(null,inst_47303);
var inst_47308 = cljs.core.chunk_rest.call(null,inst_47303);
var inst_47309 = cljs.core.count.call(null,inst_47307);
var inst_47289 = inst_47308;
var inst_47290 = inst_47307;
var inst_47291 = inst_47309;
var inst_47292 = (0);
var state_47337__$1 = (function (){var statearr_47356 = state_47337;
(statearr_47356[(8)] = inst_47290);

(statearr_47356[(9)] = inst_47291);

(statearr_47356[(10)] = inst_47289);

(statearr_47356[(11)] = inst_47292);

return statearr_47356;
})();
var statearr_47357_47390 = state_47337__$1;
(statearr_47357_47390[(2)] = null);

(statearr_47357_47390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (3))){
var inst_47335 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47337__$1,inst_47335);
} else {
if((state_val_47338 === (12))){
var inst_47323 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47358_47391 = state_47337__$1;
(statearr_47358_47391[(2)] = inst_47323);

(statearr_47358_47391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (2))){
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47337__$1,(4),in$);
} else {
if((state_val_47338 === (23))){
var inst_47331 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47359_47392 = state_47337__$1;
(statearr_47359_47392[(2)] = inst_47331);

(statearr_47359_47392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (19))){
var inst_47318 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47360_47393 = state_47337__$1;
(statearr_47360_47393[(2)] = inst_47318);

(statearr_47360_47393[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (11))){
var inst_47303 = (state_47337[(7)]);
var inst_47289 = (state_47337[(10)]);
var inst_47303__$1 = cljs.core.seq.call(null,inst_47289);
var state_47337__$1 = (function (){var statearr_47361 = state_47337;
(statearr_47361[(7)] = inst_47303__$1);

return statearr_47361;
})();
if(inst_47303__$1){
var statearr_47362_47394 = state_47337__$1;
(statearr_47362_47394[(1)] = (14));

} else {
var statearr_47363_47395 = state_47337__$1;
(statearr_47363_47395[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (9))){
var inst_47325 = (state_47337[(2)]);
var inst_47326 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47337__$1 = (function (){var statearr_47364 = state_47337;
(statearr_47364[(15)] = inst_47325);

return statearr_47364;
})();
if(cljs.core.truth_(inst_47326)){
var statearr_47365_47396 = state_47337__$1;
(statearr_47365_47396[(1)] = (21));

} else {
var statearr_47366_47397 = state_47337__$1;
(statearr_47366_47397[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (5))){
var inst_47281 = cljs.core.async.close_BANG_.call(null,out);
var state_47337__$1 = state_47337;
var statearr_47367_47398 = state_47337__$1;
(statearr_47367_47398[(2)] = inst_47281);

(statearr_47367_47398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (14))){
var inst_47303 = (state_47337[(7)]);
var inst_47305 = cljs.core.chunked_seq_QMARK_.call(null,inst_47303);
var state_47337__$1 = state_47337;
if(inst_47305){
var statearr_47368_47399 = state_47337__$1;
(statearr_47368_47399[(1)] = (17));

} else {
var statearr_47369_47400 = state_47337__$1;
(statearr_47369_47400[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (16))){
var inst_47321 = (state_47337[(2)]);
var state_47337__$1 = state_47337;
var statearr_47370_47401 = state_47337__$1;
(statearr_47370_47401[(2)] = inst_47321);

(statearr_47370_47401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47338 === (10))){
var inst_47290 = (state_47337[(8)]);
var inst_47292 = (state_47337[(11)]);
var inst_47297 = cljs.core._nth.call(null,inst_47290,inst_47292);
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47337__$1,(13),out,inst_47297);
} else {
if((state_val_47338 === (18))){
var inst_47303 = (state_47337[(7)]);
var inst_47312 = cljs.core.first.call(null,inst_47303);
var state_47337__$1 = state_47337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47337__$1,(20),out,inst_47312);
} else {
if((state_val_47338 === (8))){
var inst_47291 = (state_47337[(9)]);
var inst_47292 = (state_47337[(11)]);
var inst_47294 = (inst_47292 < inst_47291);
var inst_47295 = inst_47294;
var state_47337__$1 = state_47337;
if(cljs.core.truth_(inst_47295)){
var statearr_47371_47402 = state_47337__$1;
(statearr_47371_47402[(1)] = (10));

} else {
var statearr_47372_47403 = state_47337__$1;
(statearr_47372_47403[(1)] = (11));

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
});})(c__32383__auto__))
;
return ((function (switch__32321__auto__,c__32383__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32322__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32322__auto____0 = (function (){
var statearr_47376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47376[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32322__auto__);

(statearr_47376[(1)] = (1));

return statearr_47376;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32322__auto____1 = (function (state_47337){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_47337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47377){if((e47377 instanceof Object)){
var ex__32325__auto__ = e47377;
var statearr_47378_47404 = state_47337;
(statearr_47378_47404[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47405 = state_47337;
state_47337 = G__47405;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32322__auto__ = function(state_47337){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32322__auto____1.call(this,state_47337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32322__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32322__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto__))
})();
var state__32385__auto__ = (function (){var statearr_47379 = f__32384__auto__.call(null);
(statearr_47379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto__);

return statearr_47379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto__))
);

return c__32383__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__47407 = arguments.length;
switch (G__47407) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__47410 = arguments.length;
switch (G__47410) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__47413 = arguments.length;
switch (G__47413) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32383__auto___47463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___47463,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___47463,out){
return (function (state_47437){
var state_val_47438 = (state_47437[(1)]);
if((state_val_47438 === (7))){
var inst_47432 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47439_47464 = state_47437__$1;
(statearr_47439_47464[(2)] = inst_47432);

(statearr_47439_47464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (1))){
var inst_47414 = null;
var state_47437__$1 = (function (){var statearr_47440 = state_47437;
(statearr_47440[(7)] = inst_47414);

return statearr_47440;
})();
var statearr_47441_47465 = state_47437__$1;
(statearr_47441_47465[(2)] = null);

(statearr_47441_47465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (4))){
var inst_47417 = (state_47437[(8)]);
var inst_47417__$1 = (state_47437[(2)]);
var inst_47418 = (inst_47417__$1 == null);
var inst_47419 = cljs.core.not.call(null,inst_47418);
var state_47437__$1 = (function (){var statearr_47442 = state_47437;
(statearr_47442[(8)] = inst_47417__$1);

return statearr_47442;
})();
if(inst_47419){
var statearr_47443_47466 = state_47437__$1;
(statearr_47443_47466[(1)] = (5));

} else {
var statearr_47444_47467 = state_47437__$1;
(statearr_47444_47467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (6))){
var state_47437__$1 = state_47437;
var statearr_47445_47468 = state_47437__$1;
(statearr_47445_47468[(2)] = null);

(statearr_47445_47468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (3))){
var inst_47434 = (state_47437[(2)]);
var inst_47435 = cljs.core.async.close_BANG_.call(null,out);
var state_47437__$1 = (function (){var statearr_47446 = state_47437;
(statearr_47446[(9)] = inst_47434);

return statearr_47446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47437__$1,inst_47435);
} else {
if((state_val_47438 === (2))){
var state_47437__$1 = state_47437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47437__$1,(4),ch);
} else {
if((state_val_47438 === (11))){
var inst_47417 = (state_47437[(8)]);
var inst_47426 = (state_47437[(2)]);
var inst_47414 = inst_47417;
var state_47437__$1 = (function (){var statearr_47447 = state_47437;
(statearr_47447[(7)] = inst_47414);

(statearr_47447[(10)] = inst_47426);

return statearr_47447;
})();
var statearr_47448_47469 = state_47437__$1;
(statearr_47448_47469[(2)] = null);

(statearr_47448_47469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (9))){
var inst_47417 = (state_47437[(8)]);
var state_47437__$1 = state_47437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47437__$1,(11),out,inst_47417);
} else {
if((state_val_47438 === (5))){
var inst_47417 = (state_47437[(8)]);
var inst_47414 = (state_47437[(7)]);
var inst_47421 = cljs.core._EQ_.call(null,inst_47417,inst_47414);
var state_47437__$1 = state_47437;
if(inst_47421){
var statearr_47450_47470 = state_47437__$1;
(statearr_47450_47470[(1)] = (8));

} else {
var statearr_47451_47471 = state_47437__$1;
(statearr_47451_47471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (10))){
var inst_47429 = (state_47437[(2)]);
var state_47437__$1 = state_47437;
var statearr_47452_47472 = state_47437__$1;
(statearr_47452_47472[(2)] = inst_47429);

(statearr_47452_47472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47438 === (8))){
var inst_47414 = (state_47437[(7)]);
var tmp47449 = inst_47414;
var inst_47414__$1 = tmp47449;
var state_47437__$1 = (function (){var statearr_47453 = state_47437;
(statearr_47453[(7)] = inst_47414__$1);

return statearr_47453;
})();
var statearr_47454_47473 = state_47437__$1;
(statearr_47454_47473[(2)] = null);

(statearr_47454_47473[(1)] = (2));


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
});})(c__32383__auto___47463,out))
;
return ((function (switch__32321__auto__,c__32383__auto___47463,out){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_47458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47458[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_47458[(1)] = (1));

return statearr_47458;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_47437){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_47437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47459){if((e47459 instanceof Object)){
var ex__32325__auto__ = e47459;
var statearr_47460_47474 = state_47437;
(statearr_47460_47474[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47475 = state_47437;
state_47437 = G__47475;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_47437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_47437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___47463,out))
})();
var state__32385__auto__ = (function (){var statearr_47461 = f__32384__auto__.call(null);
(statearr_47461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___47463);

return statearr_47461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___47463,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__47477 = arguments.length;
switch (G__47477) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32383__auto___47546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___47546,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___47546,out){
return (function (state_47515){
var state_val_47516 = (state_47515[(1)]);
if((state_val_47516 === (7))){
var inst_47511 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
var statearr_47517_47547 = state_47515__$1;
(statearr_47517_47547[(2)] = inst_47511);

(statearr_47517_47547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (1))){
var inst_47478 = (new Array(n));
var inst_47479 = inst_47478;
var inst_47480 = (0);
var state_47515__$1 = (function (){var statearr_47518 = state_47515;
(statearr_47518[(7)] = inst_47480);

(statearr_47518[(8)] = inst_47479);

return statearr_47518;
})();
var statearr_47519_47548 = state_47515__$1;
(statearr_47519_47548[(2)] = null);

(statearr_47519_47548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (4))){
var inst_47483 = (state_47515[(9)]);
var inst_47483__$1 = (state_47515[(2)]);
var inst_47484 = (inst_47483__$1 == null);
var inst_47485 = cljs.core.not.call(null,inst_47484);
var state_47515__$1 = (function (){var statearr_47520 = state_47515;
(statearr_47520[(9)] = inst_47483__$1);

return statearr_47520;
})();
if(inst_47485){
var statearr_47521_47549 = state_47515__$1;
(statearr_47521_47549[(1)] = (5));

} else {
var statearr_47522_47550 = state_47515__$1;
(statearr_47522_47550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (15))){
var inst_47505 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
var statearr_47523_47551 = state_47515__$1;
(statearr_47523_47551[(2)] = inst_47505);

(statearr_47523_47551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (13))){
var state_47515__$1 = state_47515;
var statearr_47524_47552 = state_47515__$1;
(statearr_47524_47552[(2)] = null);

(statearr_47524_47552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (6))){
var inst_47480 = (state_47515[(7)]);
var inst_47501 = (inst_47480 > (0));
var state_47515__$1 = state_47515;
if(cljs.core.truth_(inst_47501)){
var statearr_47525_47553 = state_47515__$1;
(statearr_47525_47553[(1)] = (12));

} else {
var statearr_47526_47554 = state_47515__$1;
(statearr_47526_47554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (3))){
var inst_47513 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47515__$1,inst_47513);
} else {
if((state_val_47516 === (12))){
var inst_47479 = (state_47515[(8)]);
var inst_47503 = cljs.core.vec.call(null,inst_47479);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47515__$1,(15),out,inst_47503);
} else {
if((state_val_47516 === (2))){
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47515__$1,(4),ch);
} else {
if((state_val_47516 === (11))){
var inst_47495 = (state_47515[(2)]);
var inst_47496 = (new Array(n));
var inst_47479 = inst_47496;
var inst_47480 = (0);
var state_47515__$1 = (function (){var statearr_47527 = state_47515;
(statearr_47527[(7)] = inst_47480);

(statearr_47527[(8)] = inst_47479);

(statearr_47527[(10)] = inst_47495);

return statearr_47527;
})();
var statearr_47528_47555 = state_47515__$1;
(statearr_47528_47555[(2)] = null);

(statearr_47528_47555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (9))){
var inst_47479 = (state_47515[(8)]);
var inst_47493 = cljs.core.vec.call(null,inst_47479);
var state_47515__$1 = state_47515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47515__$1,(11),out,inst_47493);
} else {
if((state_val_47516 === (5))){
var inst_47480 = (state_47515[(7)]);
var inst_47479 = (state_47515[(8)]);
var inst_47488 = (state_47515[(11)]);
var inst_47483 = (state_47515[(9)]);
var inst_47487 = (inst_47479[inst_47480] = inst_47483);
var inst_47488__$1 = (inst_47480 + (1));
var inst_47489 = (inst_47488__$1 < n);
var state_47515__$1 = (function (){var statearr_47529 = state_47515;
(statearr_47529[(11)] = inst_47488__$1);

(statearr_47529[(12)] = inst_47487);

return statearr_47529;
})();
if(cljs.core.truth_(inst_47489)){
var statearr_47530_47556 = state_47515__$1;
(statearr_47530_47556[(1)] = (8));

} else {
var statearr_47531_47557 = state_47515__$1;
(statearr_47531_47557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (14))){
var inst_47508 = (state_47515[(2)]);
var inst_47509 = cljs.core.async.close_BANG_.call(null,out);
var state_47515__$1 = (function (){var statearr_47533 = state_47515;
(statearr_47533[(13)] = inst_47508);

return statearr_47533;
})();
var statearr_47534_47558 = state_47515__$1;
(statearr_47534_47558[(2)] = inst_47509);

(statearr_47534_47558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (10))){
var inst_47499 = (state_47515[(2)]);
var state_47515__$1 = state_47515;
var statearr_47535_47559 = state_47515__$1;
(statearr_47535_47559[(2)] = inst_47499);

(statearr_47535_47559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47516 === (8))){
var inst_47479 = (state_47515[(8)]);
var inst_47488 = (state_47515[(11)]);
var tmp47532 = inst_47479;
var inst_47479__$1 = tmp47532;
var inst_47480 = inst_47488;
var state_47515__$1 = (function (){var statearr_47536 = state_47515;
(statearr_47536[(7)] = inst_47480);

(statearr_47536[(8)] = inst_47479__$1);

return statearr_47536;
})();
var statearr_47537_47560 = state_47515__$1;
(statearr_47537_47560[(2)] = null);

(statearr_47537_47560[(1)] = (2));


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
});})(c__32383__auto___47546,out))
;
return ((function (switch__32321__auto__,c__32383__auto___47546,out){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_47541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47541[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_47541[(1)] = (1));

return statearr_47541;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_47515){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_47515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47542){if((e47542 instanceof Object)){
var ex__32325__auto__ = e47542;
var statearr_47543_47561 = state_47515;
(statearr_47543_47561[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47562 = state_47515;
state_47515 = G__47562;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_47515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_47515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___47546,out))
})();
var state__32385__auto__ = (function (){var statearr_47544 = f__32384__auto__.call(null);
(statearr_47544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___47546);

return statearr_47544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___47546,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__47564 = arguments.length;
switch (G__47564) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32383__auto___47637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32383__auto___47637,out){
return (function (){
var f__32384__auto__ = (function (){var switch__32321__auto__ = ((function (c__32383__auto___47637,out){
return (function (state_47606){
var state_val_47607 = (state_47606[(1)]);
if((state_val_47607 === (7))){
var inst_47602 = (state_47606[(2)]);
var state_47606__$1 = state_47606;
var statearr_47608_47638 = state_47606__$1;
(statearr_47608_47638[(2)] = inst_47602);

(statearr_47608_47638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (1))){
var inst_47565 = [];
var inst_47566 = inst_47565;
var inst_47567 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47606__$1 = (function (){var statearr_47609 = state_47606;
(statearr_47609[(7)] = inst_47567);

(statearr_47609[(8)] = inst_47566);

return statearr_47609;
})();
var statearr_47610_47639 = state_47606__$1;
(statearr_47610_47639[(2)] = null);

(statearr_47610_47639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (4))){
var inst_47570 = (state_47606[(9)]);
var inst_47570__$1 = (state_47606[(2)]);
var inst_47571 = (inst_47570__$1 == null);
var inst_47572 = cljs.core.not.call(null,inst_47571);
var state_47606__$1 = (function (){var statearr_47611 = state_47606;
(statearr_47611[(9)] = inst_47570__$1);

return statearr_47611;
})();
if(inst_47572){
var statearr_47612_47640 = state_47606__$1;
(statearr_47612_47640[(1)] = (5));

} else {
var statearr_47613_47641 = state_47606__$1;
(statearr_47613_47641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (15))){
var inst_47596 = (state_47606[(2)]);
var state_47606__$1 = state_47606;
var statearr_47614_47642 = state_47606__$1;
(statearr_47614_47642[(2)] = inst_47596);

(statearr_47614_47642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (13))){
var state_47606__$1 = state_47606;
var statearr_47615_47643 = state_47606__$1;
(statearr_47615_47643[(2)] = null);

(statearr_47615_47643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (6))){
var inst_47566 = (state_47606[(8)]);
var inst_47591 = inst_47566.length;
var inst_47592 = (inst_47591 > (0));
var state_47606__$1 = state_47606;
if(cljs.core.truth_(inst_47592)){
var statearr_47616_47644 = state_47606__$1;
(statearr_47616_47644[(1)] = (12));

} else {
var statearr_47617_47645 = state_47606__$1;
(statearr_47617_47645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (3))){
var inst_47604 = (state_47606[(2)]);
var state_47606__$1 = state_47606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47606__$1,inst_47604);
} else {
if((state_val_47607 === (12))){
var inst_47566 = (state_47606[(8)]);
var inst_47594 = cljs.core.vec.call(null,inst_47566);
var state_47606__$1 = state_47606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47606__$1,(15),out,inst_47594);
} else {
if((state_val_47607 === (2))){
var state_47606__$1 = state_47606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47606__$1,(4),ch);
} else {
if((state_val_47607 === (11))){
var inst_47570 = (state_47606[(9)]);
var inst_47574 = (state_47606[(10)]);
var inst_47584 = (state_47606[(2)]);
var inst_47585 = [];
var inst_47586 = inst_47585.push(inst_47570);
var inst_47566 = inst_47585;
var inst_47567 = inst_47574;
var state_47606__$1 = (function (){var statearr_47618 = state_47606;
(statearr_47618[(11)] = inst_47586);

(statearr_47618[(12)] = inst_47584);

(statearr_47618[(7)] = inst_47567);

(statearr_47618[(8)] = inst_47566);

return statearr_47618;
})();
var statearr_47619_47646 = state_47606__$1;
(statearr_47619_47646[(2)] = null);

(statearr_47619_47646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (9))){
var inst_47566 = (state_47606[(8)]);
var inst_47582 = cljs.core.vec.call(null,inst_47566);
var state_47606__$1 = state_47606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47606__$1,(11),out,inst_47582);
} else {
if((state_val_47607 === (5))){
var inst_47570 = (state_47606[(9)]);
var inst_47574 = (state_47606[(10)]);
var inst_47567 = (state_47606[(7)]);
var inst_47574__$1 = f.call(null,inst_47570);
var inst_47575 = cljs.core._EQ_.call(null,inst_47574__$1,inst_47567);
var inst_47576 = cljs.core.keyword_identical_QMARK_.call(null,inst_47567,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47577 = (inst_47575) || (inst_47576);
var state_47606__$1 = (function (){var statearr_47620 = state_47606;
(statearr_47620[(10)] = inst_47574__$1);

return statearr_47620;
})();
if(cljs.core.truth_(inst_47577)){
var statearr_47621_47647 = state_47606__$1;
(statearr_47621_47647[(1)] = (8));

} else {
var statearr_47622_47648 = state_47606__$1;
(statearr_47622_47648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (14))){
var inst_47599 = (state_47606[(2)]);
var inst_47600 = cljs.core.async.close_BANG_.call(null,out);
var state_47606__$1 = (function (){var statearr_47624 = state_47606;
(statearr_47624[(13)] = inst_47599);

return statearr_47624;
})();
var statearr_47625_47649 = state_47606__$1;
(statearr_47625_47649[(2)] = inst_47600);

(statearr_47625_47649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (10))){
var inst_47589 = (state_47606[(2)]);
var state_47606__$1 = state_47606;
var statearr_47626_47650 = state_47606__$1;
(statearr_47626_47650[(2)] = inst_47589);

(statearr_47626_47650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47607 === (8))){
var inst_47570 = (state_47606[(9)]);
var inst_47574 = (state_47606[(10)]);
var inst_47566 = (state_47606[(8)]);
var inst_47579 = inst_47566.push(inst_47570);
var tmp47623 = inst_47566;
var inst_47566__$1 = tmp47623;
var inst_47567 = inst_47574;
var state_47606__$1 = (function (){var statearr_47627 = state_47606;
(statearr_47627[(7)] = inst_47567);

(statearr_47627[(8)] = inst_47566__$1);

(statearr_47627[(14)] = inst_47579);

return statearr_47627;
})();
var statearr_47628_47651 = state_47606__$1;
(statearr_47628_47651[(2)] = null);

(statearr_47628_47651[(1)] = (2));


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
});})(c__32383__auto___47637,out))
;
return ((function (switch__32321__auto__,c__32383__auto___47637,out){
return (function() {
var cljs$core$async$state_machine__32322__auto__ = null;
var cljs$core$async$state_machine__32322__auto____0 = (function (){
var statearr_47632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47632[(0)] = cljs$core$async$state_machine__32322__auto__);

(statearr_47632[(1)] = (1));

return statearr_47632;
});
var cljs$core$async$state_machine__32322__auto____1 = (function (state_47606){
while(true){
var ret_value__32323__auto__ = (function (){try{while(true){
var result__32324__auto__ = switch__32321__auto__.call(null,state_47606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32324__auto__;
}
break;
}
}catch (e47633){if((e47633 instanceof Object)){
var ex__32325__auto__ = e47633;
var statearr_47634_47652 = state_47606;
(statearr_47634_47652[(5)] = ex__32325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47653 = state_47606;
state_47606 = G__47653;
continue;
} else {
return ret_value__32323__auto__;
}
break;
}
});
cljs$core$async$state_machine__32322__auto__ = function(state_47606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32322__auto____1.call(this,state_47606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32322__auto____0;
cljs$core$async$state_machine__32322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32322__auto____1;
return cljs$core$async$state_machine__32322__auto__;
})()
;})(switch__32321__auto__,c__32383__auto___47637,out))
})();
var state__32385__auto__ = (function (){var statearr_47635 = f__32384__auto__.call(null);
(statearr_47635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32383__auto___47637);

return statearr_47635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32385__auto__);
});})(c__32383__auto___47637,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map