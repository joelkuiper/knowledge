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
if(typeof cljs.core.async.t38230 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38230 = (function (f,fn_handler,meta38231){
this.f = f;
this.fn_handler = fn_handler;
this.meta38231 = meta38231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38230.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38230.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t38230.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t38230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38232){
var self__ = this;
var _38232__$1 = this;
return self__.meta38231;
});

cljs.core.async.t38230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38232,meta38231__$1){
var self__ = this;
var _38232__$1 = this;
return (new cljs.core.async.t38230(self__.f,self__.fn_handler,meta38231__$1));
});

cljs.core.async.t38230.cljs$lang$type = true;

cljs.core.async.t38230.cljs$lang$ctorStr = "cljs.core.async/t38230";

cljs.core.async.t38230.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t38230");
});

cljs.core.async.__GT_t38230 = (function cljs$core$async$fn_handler_$___GT_t38230(f__$1,fn_handler__$1,meta38231){
return (new cljs.core.async.t38230(f__$1,fn_handler__$1,meta38231));
});

}

return (new cljs.core.async.t38230(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38234 = buff;
if(G__38234){
var bit__29047__auto__ = null;
if(cljs.core.truth_((function (){var or__28373__auto__ = bit__29047__auto__;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return G__38234.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__38234.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38234);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__38234);
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
var G__38236 = arguments.length;
switch (G__38236) {
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
var G__38239 = arguments.length;
switch (G__38239) {
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
var val_38241 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38241);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38241,ret){
return (function (){
return fn1.call(null,val_38241);
});})(val_38241,ret))
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
var G__38243 = arguments.length;
switch (G__38243) {
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
var n__29258__auto___38245 = n;
var x_38246 = (0);
while(true){
if((x_38246 < n__29258__auto___38245)){
(a[x_38246] = (0));

var G__38247 = (x_38246 + (1));
x_38246 = G__38247;
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

var G__38248 = (i + (1));
i = G__38248;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t38252 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38252 = (function (flag,alt_flag,meta38253){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta38253 = meta38253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t38252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t38252.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38254){
var self__ = this;
var _38254__$1 = this;
return self__.meta38253;
});})(flag))
;

cljs.core.async.t38252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38254,meta38253__$1){
var self__ = this;
var _38254__$1 = this;
return (new cljs.core.async.t38252(self__.flag,self__.alt_flag,meta38253__$1));
});})(flag))
;

cljs.core.async.t38252.cljs$lang$type = true;

cljs.core.async.t38252.cljs$lang$ctorStr = "cljs.core.async/t38252";

cljs.core.async.t38252.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t38252");
});})(flag))
;

cljs.core.async.__GT_t38252 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t38252(flag__$1,alt_flag__$1,meta38253){
return (new cljs.core.async.t38252(flag__$1,alt_flag__$1,meta38253));
});})(flag))
;

}

return (new cljs.core.async.t38252(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t38258 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38258 = (function (cb,flag,alt_handler,meta38259){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta38259 = meta38259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38258.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t38258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t38258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38260){
var self__ = this;
var _38260__$1 = this;
return self__.meta38259;
});

cljs.core.async.t38258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38260,meta38259__$1){
var self__ = this;
var _38260__$1 = this;
return (new cljs.core.async.t38258(self__.cb,self__.flag,self__.alt_handler,meta38259__$1));
});

cljs.core.async.t38258.cljs$lang$type = true;

cljs.core.async.t38258.cljs$lang$ctorStr = "cljs.core.async/t38258";

cljs.core.async.t38258.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t38258");
});

cljs.core.async.__GT_t38258 = (function cljs$core$async$alt_handler_$___GT_t38258(cb__$1,flag__$1,alt_handler__$1,meta38259){
return (new cljs.core.async.t38258(cb__$1,flag__$1,alt_handler__$1,meta38259));
});

}

return (new cljs.core.async.t38258(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38261_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38261_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38262_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38262_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28373__auto__ = wport;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38263 = (i + (1));
i = G__38263;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28373__auto__ = ret;
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__28361__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28361__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28361__auto__;
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
var argseq__29413__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29413__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38266){
var map__38267 = p__38266;
var map__38267__$1 = ((cljs.core.seq_QMARK_.call(null,map__38267))?cljs.core.apply.call(null,cljs.core.hash_map,map__38267):map__38267);
var opts = map__38267__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38264){
var G__38265 = cljs.core.first.call(null,seq38264);
var seq38264__$1 = cljs.core.next.call(null,seq38264);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38265,seq38264__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__38269 = arguments.length;
switch (G__38269) {
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
var c__31644__auto___38318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___38318){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___38318){
return (function (state_38293){
var state_val_38294 = (state_38293[(1)]);
if((state_val_38294 === (7))){
var inst_38289 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38295_38319 = state_38293__$1;
(statearr_38295_38319[(2)] = inst_38289);

(statearr_38295_38319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (1))){
var state_38293__$1 = state_38293;
var statearr_38296_38320 = state_38293__$1;
(statearr_38296_38320[(2)] = null);

(statearr_38296_38320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (4))){
var inst_38272 = (state_38293[(7)]);
var inst_38272__$1 = (state_38293[(2)]);
var inst_38273 = (inst_38272__$1 == null);
var state_38293__$1 = (function (){var statearr_38297 = state_38293;
(statearr_38297[(7)] = inst_38272__$1);

return statearr_38297;
})();
if(cljs.core.truth_(inst_38273)){
var statearr_38298_38321 = state_38293__$1;
(statearr_38298_38321[(1)] = (5));

} else {
var statearr_38299_38322 = state_38293__$1;
(statearr_38299_38322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (13))){
var state_38293__$1 = state_38293;
var statearr_38300_38323 = state_38293__$1;
(statearr_38300_38323[(2)] = null);

(statearr_38300_38323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (6))){
var inst_38272 = (state_38293[(7)]);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38293__$1,(11),to,inst_38272);
} else {
if((state_val_38294 === (3))){
var inst_38291 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38293__$1,inst_38291);
} else {
if((state_val_38294 === (12))){
var state_38293__$1 = state_38293;
var statearr_38301_38324 = state_38293__$1;
(statearr_38301_38324[(2)] = null);

(statearr_38301_38324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (2))){
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38293__$1,(4),from);
} else {
if((state_val_38294 === (11))){
var inst_38282 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
if(cljs.core.truth_(inst_38282)){
var statearr_38302_38325 = state_38293__$1;
(statearr_38302_38325[(1)] = (12));

} else {
var statearr_38303_38326 = state_38293__$1;
(statearr_38303_38326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (9))){
var state_38293__$1 = state_38293;
var statearr_38304_38327 = state_38293__$1;
(statearr_38304_38327[(2)] = null);

(statearr_38304_38327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (5))){
var state_38293__$1 = state_38293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38305_38328 = state_38293__$1;
(statearr_38305_38328[(1)] = (8));

} else {
var statearr_38306_38329 = state_38293__$1;
(statearr_38306_38329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (14))){
var inst_38287 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38307_38330 = state_38293__$1;
(statearr_38307_38330[(2)] = inst_38287);

(statearr_38307_38330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (10))){
var inst_38279 = (state_38293[(2)]);
var state_38293__$1 = state_38293;
var statearr_38308_38331 = state_38293__$1;
(statearr_38308_38331[(2)] = inst_38279);

(statearr_38308_38331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38294 === (8))){
var inst_38276 = cljs.core.async.close_BANG_.call(null,to);
var state_38293__$1 = state_38293;
var statearr_38309_38332 = state_38293__$1;
(statearr_38309_38332[(2)] = inst_38276);

(statearr_38309_38332[(1)] = (10));


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
});})(c__31644__auto___38318))
;
return ((function (switch__31582__auto__,c__31644__auto___38318){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_38313 = [null,null,null,null,null,null,null,null];
(statearr_38313[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_38313[(1)] = (1));

return statearr_38313;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_38293){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38314){if((e38314 instanceof Object)){
var ex__31586__auto__ = e38314;
var statearr_38315_38333 = state_38293;
(statearr_38315_38333[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38334 = state_38293;
state_38293 = G__38334;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_38293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_38293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___38318))
})();
var state__31646__auto__ = (function (){var statearr_38316 = f__31645__auto__.call(null);
(statearr_38316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___38318);

return statearr_38316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___38318))
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
return (function (p__38518){
var vec__38519 = p__38518;
var v = cljs.core.nth.call(null,vec__38519,(0),null);
var p = cljs.core.nth.call(null,vec__38519,(1),null);
var job = vec__38519;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31644__auto___38701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___38701,res,vec__38519,v,p,job,jobs,results){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___38701,res,vec__38519,v,p,job,jobs,results){
return (function (state_38524){
var state_val_38525 = (state_38524[(1)]);
if((state_val_38525 === (2))){
var inst_38521 = (state_38524[(2)]);
var inst_38522 = cljs.core.async.close_BANG_.call(null,res);
var state_38524__$1 = (function (){var statearr_38526 = state_38524;
(statearr_38526[(7)] = inst_38521);

return statearr_38526;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38524__$1,inst_38522);
} else {
if((state_val_38525 === (1))){
var state_38524__$1 = state_38524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38524__$1,(2),res,v);
} else {
return null;
}
}
});})(c__31644__auto___38701,res,vec__38519,v,p,job,jobs,results))
;
return ((function (switch__31582__auto__,c__31644__auto___38701,res,vec__38519,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_38530 = [null,null,null,null,null,null,null,null];
(statearr_38530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_38530[(1)] = (1));

return statearr_38530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_38524){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38531){if((e38531 instanceof Object)){
var ex__31586__auto__ = e38531;
var statearr_38532_38702 = state_38524;
(statearr_38532_38702[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38703 = state_38524;
state_38524 = G__38703;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_38524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_38524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___38701,res,vec__38519,v,p,job,jobs,results))
})();
var state__31646__auto__ = (function (){var statearr_38533 = f__31645__auto__.call(null);
(statearr_38533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___38701);

return statearr_38533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___38701,res,vec__38519,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38534){
var vec__38535 = p__38534;
var v = cljs.core.nth.call(null,vec__38535,(0),null);
var p = cljs.core.nth.call(null,vec__38535,(1),null);
var job = vec__38535;
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
var n__29258__auto___38704 = n;
var __38705 = (0);
while(true){
if((__38705 < n__29258__auto___38704)){
var G__38536_38706 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38536_38706) {
case "async":
var c__31644__auto___38708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38705,c__31644__auto___38708,G__38536_38706,n__29258__auto___38704,jobs,results,process,async){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (__38705,c__31644__auto___38708,G__38536_38706,n__29258__auto___38704,jobs,results,process,async){
return (function (state_38549){
var state_val_38550 = (state_38549[(1)]);
if((state_val_38550 === (7))){
var inst_38545 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
var statearr_38551_38709 = state_38549__$1;
(statearr_38551_38709[(2)] = inst_38545);

(statearr_38551_38709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (6))){
var state_38549__$1 = state_38549;
var statearr_38552_38710 = state_38549__$1;
(statearr_38552_38710[(2)] = null);

(statearr_38552_38710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (5))){
var state_38549__$1 = state_38549;
var statearr_38553_38711 = state_38549__$1;
(statearr_38553_38711[(2)] = null);

(statearr_38553_38711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (4))){
var inst_38539 = (state_38549[(2)]);
var inst_38540 = async.call(null,inst_38539);
var state_38549__$1 = state_38549;
if(cljs.core.truth_(inst_38540)){
var statearr_38554_38712 = state_38549__$1;
(statearr_38554_38712[(1)] = (5));

} else {
var statearr_38555_38713 = state_38549__$1;
(statearr_38555_38713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38550 === (3))){
var inst_38547 = (state_38549[(2)]);
var state_38549__$1 = state_38549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38549__$1,inst_38547);
} else {
if((state_val_38550 === (2))){
var state_38549__$1 = state_38549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38549__$1,(4),jobs);
} else {
if((state_val_38550 === (1))){
var state_38549__$1 = state_38549;
var statearr_38556_38714 = state_38549__$1;
(statearr_38556_38714[(2)] = null);

(statearr_38556_38714[(1)] = (2));


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
});})(__38705,c__31644__auto___38708,G__38536_38706,n__29258__auto___38704,jobs,results,process,async))
;
return ((function (__38705,switch__31582__auto__,c__31644__auto___38708,G__38536_38706,n__29258__auto___38704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_38560 = [null,null,null,null,null,null,null];
(statearr_38560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_38560[(1)] = (1));

return statearr_38560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_38549){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38561){if((e38561 instanceof Object)){
var ex__31586__auto__ = e38561;
var statearr_38562_38715 = state_38549;
(statearr_38562_38715[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38716 = state_38549;
state_38549 = G__38716;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_38549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_38549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(__38705,switch__31582__auto__,c__31644__auto___38708,G__38536_38706,n__29258__auto___38704,jobs,results,process,async))
})();
var state__31646__auto__ = (function (){var statearr_38563 = f__31645__auto__.call(null);
(statearr_38563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___38708);

return statearr_38563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(__38705,c__31644__auto___38708,G__38536_38706,n__29258__auto___38704,jobs,results,process,async))
);


break;
case "compute":
var c__31644__auto___38717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38705,c__31644__auto___38717,G__38536_38706,n__29258__auto___38704,jobs,results,process,async){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (__38705,c__31644__auto___38717,G__38536_38706,n__29258__auto___38704,jobs,results,process,async){
return (function (state_38576){
var state_val_38577 = (state_38576[(1)]);
if((state_val_38577 === (7))){
var inst_38572 = (state_38576[(2)]);
var state_38576__$1 = state_38576;
var statearr_38578_38718 = state_38576__$1;
(statearr_38578_38718[(2)] = inst_38572);

(statearr_38578_38718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38577 === (6))){
var state_38576__$1 = state_38576;
var statearr_38579_38719 = state_38576__$1;
(statearr_38579_38719[(2)] = null);

(statearr_38579_38719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38577 === (5))){
var state_38576__$1 = state_38576;
var statearr_38580_38720 = state_38576__$1;
(statearr_38580_38720[(2)] = null);

(statearr_38580_38720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38577 === (4))){
var inst_38566 = (state_38576[(2)]);
var inst_38567 = process.call(null,inst_38566);
var state_38576__$1 = state_38576;
if(cljs.core.truth_(inst_38567)){
var statearr_38581_38721 = state_38576__$1;
(statearr_38581_38721[(1)] = (5));

} else {
var statearr_38582_38722 = state_38576__$1;
(statearr_38582_38722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38577 === (3))){
var inst_38574 = (state_38576[(2)]);
var state_38576__$1 = state_38576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38576__$1,inst_38574);
} else {
if((state_val_38577 === (2))){
var state_38576__$1 = state_38576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38576__$1,(4),jobs);
} else {
if((state_val_38577 === (1))){
var state_38576__$1 = state_38576;
var statearr_38583_38723 = state_38576__$1;
(statearr_38583_38723[(2)] = null);

(statearr_38583_38723[(1)] = (2));


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
});})(__38705,c__31644__auto___38717,G__38536_38706,n__29258__auto___38704,jobs,results,process,async))
;
return ((function (__38705,switch__31582__auto__,c__31644__auto___38717,G__38536_38706,n__29258__auto___38704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_38587 = [null,null,null,null,null,null,null];
(statearr_38587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_38587[(1)] = (1));

return statearr_38587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_38576){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38588){if((e38588 instanceof Object)){
var ex__31586__auto__ = e38588;
var statearr_38589_38724 = state_38576;
(statearr_38589_38724[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38725 = state_38576;
state_38576 = G__38725;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_38576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_38576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(__38705,switch__31582__auto__,c__31644__auto___38717,G__38536_38706,n__29258__auto___38704,jobs,results,process,async))
})();
var state__31646__auto__ = (function (){var statearr_38590 = f__31645__auto__.call(null);
(statearr_38590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___38717);

return statearr_38590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(__38705,c__31644__auto___38717,G__38536_38706,n__29258__auto___38704,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38726 = (__38705 + (1));
__38705 = G__38726;
continue;
} else {
}
break;
}

var c__31644__auto___38727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___38727,jobs,results,process,async){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___38727,jobs,results,process,async){
return (function (state_38612){
var state_val_38613 = (state_38612[(1)]);
if((state_val_38613 === (9))){
var inst_38605 = (state_38612[(2)]);
var state_38612__$1 = (function (){var statearr_38614 = state_38612;
(statearr_38614[(7)] = inst_38605);

return statearr_38614;
})();
var statearr_38615_38728 = state_38612__$1;
(statearr_38615_38728[(2)] = null);

(statearr_38615_38728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (8))){
var inst_38598 = (state_38612[(8)]);
var inst_38603 = (state_38612[(2)]);
var state_38612__$1 = (function (){var statearr_38616 = state_38612;
(statearr_38616[(9)] = inst_38603);

return statearr_38616;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38612__$1,(9),results,inst_38598);
} else {
if((state_val_38613 === (7))){
var inst_38608 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38617_38729 = state_38612__$1;
(statearr_38617_38729[(2)] = inst_38608);

(statearr_38617_38729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (6))){
var inst_38598 = (state_38612[(8)]);
var inst_38593 = (state_38612[(10)]);
var inst_38598__$1 = cljs.core.async.chan.call(null,(1));
var inst_38599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38600 = [inst_38593,inst_38598__$1];
var inst_38601 = (new cljs.core.PersistentVector(null,2,(5),inst_38599,inst_38600,null));
var state_38612__$1 = (function (){var statearr_38618 = state_38612;
(statearr_38618[(8)] = inst_38598__$1);

return statearr_38618;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38612__$1,(8),jobs,inst_38601);
} else {
if((state_val_38613 === (5))){
var inst_38596 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38612__$1 = state_38612;
var statearr_38619_38730 = state_38612__$1;
(statearr_38619_38730[(2)] = inst_38596);

(statearr_38619_38730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (4))){
var inst_38593 = (state_38612[(10)]);
var inst_38593__$1 = (state_38612[(2)]);
var inst_38594 = (inst_38593__$1 == null);
var state_38612__$1 = (function (){var statearr_38620 = state_38612;
(statearr_38620[(10)] = inst_38593__$1);

return statearr_38620;
})();
if(cljs.core.truth_(inst_38594)){
var statearr_38621_38731 = state_38612__$1;
(statearr_38621_38731[(1)] = (5));

} else {
var statearr_38622_38732 = state_38612__$1;
(statearr_38622_38732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (3))){
var inst_38610 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38612__$1,inst_38610);
} else {
if((state_val_38613 === (2))){
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38612__$1,(4),from);
} else {
if((state_val_38613 === (1))){
var state_38612__$1 = state_38612;
var statearr_38623_38733 = state_38612__$1;
(statearr_38623_38733[(2)] = null);

(statearr_38623_38733[(1)] = (2));


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
});})(c__31644__auto___38727,jobs,results,process,async))
;
return ((function (switch__31582__auto__,c__31644__auto___38727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_38627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_38627[(1)] = (1));

return statearr_38627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_38612){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38628){if((e38628 instanceof Object)){
var ex__31586__auto__ = e38628;
var statearr_38629_38734 = state_38612;
(statearr_38629_38734[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38735 = state_38612;
state_38612 = G__38735;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_38612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_38612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___38727,jobs,results,process,async))
})();
var state__31646__auto__ = (function (){var statearr_38630 = f__31645__auto__.call(null);
(statearr_38630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___38727);

return statearr_38630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___38727,jobs,results,process,async))
);


var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__,jobs,results,process,async){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__,jobs,results,process,async){
return (function (state_38668){
var state_val_38669 = (state_38668[(1)]);
if((state_val_38669 === (7))){
var inst_38664 = (state_38668[(2)]);
var state_38668__$1 = state_38668;
var statearr_38670_38736 = state_38668__$1;
(statearr_38670_38736[(2)] = inst_38664);

(statearr_38670_38736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (20))){
var state_38668__$1 = state_38668;
var statearr_38671_38737 = state_38668__$1;
(statearr_38671_38737[(2)] = null);

(statearr_38671_38737[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (1))){
var state_38668__$1 = state_38668;
var statearr_38672_38738 = state_38668__$1;
(statearr_38672_38738[(2)] = null);

(statearr_38672_38738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (4))){
var inst_38633 = (state_38668[(7)]);
var inst_38633__$1 = (state_38668[(2)]);
var inst_38634 = (inst_38633__$1 == null);
var state_38668__$1 = (function (){var statearr_38673 = state_38668;
(statearr_38673[(7)] = inst_38633__$1);

return statearr_38673;
})();
if(cljs.core.truth_(inst_38634)){
var statearr_38674_38739 = state_38668__$1;
(statearr_38674_38739[(1)] = (5));

} else {
var statearr_38675_38740 = state_38668__$1;
(statearr_38675_38740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (15))){
var inst_38646 = (state_38668[(8)]);
var state_38668__$1 = state_38668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38668__$1,(18),to,inst_38646);
} else {
if((state_val_38669 === (21))){
var inst_38659 = (state_38668[(2)]);
var state_38668__$1 = state_38668;
var statearr_38676_38741 = state_38668__$1;
(statearr_38676_38741[(2)] = inst_38659);

(statearr_38676_38741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (13))){
var inst_38661 = (state_38668[(2)]);
var state_38668__$1 = (function (){var statearr_38677 = state_38668;
(statearr_38677[(9)] = inst_38661);

return statearr_38677;
})();
var statearr_38678_38742 = state_38668__$1;
(statearr_38678_38742[(2)] = null);

(statearr_38678_38742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (6))){
var inst_38633 = (state_38668[(7)]);
var state_38668__$1 = state_38668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38668__$1,(11),inst_38633);
} else {
if((state_val_38669 === (17))){
var inst_38654 = (state_38668[(2)]);
var state_38668__$1 = state_38668;
if(cljs.core.truth_(inst_38654)){
var statearr_38679_38743 = state_38668__$1;
(statearr_38679_38743[(1)] = (19));

} else {
var statearr_38680_38744 = state_38668__$1;
(statearr_38680_38744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (3))){
var inst_38666 = (state_38668[(2)]);
var state_38668__$1 = state_38668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38668__$1,inst_38666);
} else {
if((state_val_38669 === (12))){
var inst_38643 = (state_38668[(10)]);
var state_38668__$1 = state_38668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38668__$1,(14),inst_38643);
} else {
if((state_val_38669 === (2))){
var state_38668__$1 = state_38668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38668__$1,(4),results);
} else {
if((state_val_38669 === (19))){
var state_38668__$1 = state_38668;
var statearr_38681_38745 = state_38668__$1;
(statearr_38681_38745[(2)] = null);

(statearr_38681_38745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (11))){
var inst_38643 = (state_38668[(2)]);
var state_38668__$1 = (function (){var statearr_38682 = state_38668;
(statearr_38682[(10)] = inst_38643);

return statearr_38682;
})();
var statearr_38683_38746 = state_38668__$1;
(statearr_38683_38746[(2)] = null);

(statearr_38683_38746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (9))){
var state_38668__$1 = state_38668;
var statearr_38684_38747 = state_38668__$1;
(statearr_38684_38747[(2)] = null);

(statearr_38684_38747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (5))){
var state_38668__$1 = state_38668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38685_38748 = state_38668__$1;
(statearr_38685_38748[(1)] = (8));

} else {
var statearr_38686_38749 = state_38668__$1;
(statearr_38686_38749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (14))){
var inst_38646 = (state_38668[(8)]);
var inst_38648 = (state_38668[(11)]);
var inst_38646__$1 = (state_38668[(2)]);
var inst_38647 = (inst_38646__$1 == null);
var inst_38648__$1 = cljs.core.not.call(null,inst_38647);
var state_38668__$1 = (function (){var statearr_38687 = state_38668;
(statearr_38687[(8)] = inst_38646__$1);

(statearr_38687[(11)] = inst_38648__$1);

return statearr_38687;
})();
if(inst_38648__$1){
var statearr_38688_38750 = state_38668__$1;
(statearr_38688_38750[(1)] = (15));

} else {
var statearr_38689_38751 = state_38668__$1;
(statearr_38689_38751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (16))){
var inst_38648 = (state_38668[(11)]);
var state_38668__$1 = state_38668;
var statearr_38690_38752 = state_38668__$1;
(statearr_38690_38752[(2)] = inst_38648);

(statearr_38690_38752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (10))){
var inst_38640 = (state_38668[(2)]);
var state_38668__$1 = state_38668;
var statearr_38691_38753 = state_38668__$1;
(statearr_38691_38753[(2)] = inst_38640);

(statearr_38691_38753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (18))){
var inst_38651 = (state_38668[(2)]);
var state_38668__$1 = state_38668;
var statearr_38692_38754 = state_38668__$1;
(statearr_38692_38754[(2)] = inst_38651);

(statearr_38692_38754[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38669 === (8))){
var inst_38637 = cljs.core.async.close_BANG_.call(null,to);
var state_38668__$1 = state_38668;
var statearr_38693_38755 = state_38668__$1;
(statearr_38693_38755[(2)] = inst_38637);

(statearr_38693_38755[(1)] = (10));


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
});})(c__31644__auto__,jobs,results,process,async))
;
return ((function (switch__31582__auto__,c__31644__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_38697 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__);

(statearr_38697[(1)] = (1));

return statearr_38697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1 = (function (state_38668){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38698){if((e38698 instanceof Object)){
var ex__31586__auto__ = e38698;
var statearr_38699_38756 = state_38668;
(statearr_38699_38756[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38757 = state_38668;
state_38668 = G__38757;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__ = function(state_38668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1.call(this,state_38668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__,jobs,results,process,async))
})();
var state__31646__auto__ = (function (){var statearr_38700 = f__31645__auto__.call(null);
(statearr_38700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_38700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__,jobs,results,process,async))
);

return c__31644__auto__;
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
var G__38759 = arguments.length;
switch (G__38759) {
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
var G__38762 = arguments.length;
switch (G__38762) {
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
var G__38765 = arguments.length;
switch (G__38765) {
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
var c__31644__auto___38817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___38817,tc,fc){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___38817,tc,fc){
return (function (state_38791){
var state_val_38792 = (state_38791[(1)]);
if((state_val_38792 === (7))){
var inst_38787 = (state_38791[(2)]);
var state_38791__$1 = state_38791;
var statearr_38793_38818 = state_38791__$1;
(statearr_38793_38818[(2)] = inst_38787);

(statearr_38793_38818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (1))){
var state_38791__$1 = state_38791;
var statearr_38794_38819 = state_38791__$1;
(statearr_38794_38819[(2)] = null);

(statearr_38794_38819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (4))){
var inst_38768 = (state_38791[(7)]);
var inst_38768__$1 = (state_38791[(2)]);
var inst_38769 = (inst_38768__$1 == null);
var state_38791__$1 = (function (){var statearr_38795 = state_38791;
(statearr_38795[(7)] = inst_38768__$1);

return statearr_38795;
})();
if(cljs.core.truth_(inst_38769)){
var statearr_38796_38820 = state_38791__$1;
(statearr_38796_38820[(1)] = (5));

} else {
var statearr_38797_38821 = state_38791__$1;
(statearr_38797_38821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (13))){
var state_38791__$1 = state_38791;
var statearr_38798_38822 = state_38791__$1;
(statearr_38798_38822[(2)] = null);

(statearr_38798_38822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (6))){
var inst_38768 = (state_38791[(7)]);
var inst_38774 = p.call(null,inst_38768);
var state_38791__$1 = state_38791;
if(cljs.core.truth_(inst_38774)){
var statearr_38799_38823 = state_38791__$1;
(statearr_38799_38823[(1)] = (9));

} else {
var statearr_38800_38824 = state_38791__$1;
(statearr_38800_38824[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (3))){
var inst_38789 = (state_38791[(2)]);
var state_38791__$1 = state_38791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38791__$1,inst_38789);
} else {
if((state_val_38792 === (12))){
var state_38791__$1 = state_38791;
var statearr_38801_38825 = state_38791__$1;
(statearr_38801_38825[(2)] = null);

(statearr_38801_38825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (2))){
var state_38791__$1 = state_38791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38791__$1,(4),ch);
} else {
if((state_val_38792 === (11))){
var inst_38768 = (state_38791[(7)]);
var inst_38778 = (state_38791[(2)]);
var state_38791__$1 = state_38791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38791__$1,(8),inst_38778,inst_38768);
} else {
if((state_val_38792 === (9))){
var state_38791__$1 = state_38791;
var statearr_38802_38826 = state_38791__$1;
(statearr_38802_38826[(2)] = tc);

(statearr_38802_38826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (5))){
var inst_38771 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38772 = cljs.core.async.close_BANG_.call(null,fc);
var state_38791__$1 = (function (){var statearr_38803 = state_38791;
(statearr_38803[(8)] = inst_38771);

return statearr_38803;
})();
var statearr_38804_38827 = state_38791__$1;
(statearr_38804_38827[(2)] = inst_38772);

(statearr_38804_38827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (14))){
var inst_38785 = (state_38791[(2)]);
var state_38791__$1 = state_38791;
var statearr_38805_38828 = state_38791__$1;
(statearr_38805_38828[(2)] = inst_38785);

(statearr_38805_38828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (10))){
var state_38791__$1 = state_38791;
var statearr_38806_38829 = state_38791__$1;
(statearr_38806_38829[(2)] = fc);

(statearr_38806_38829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38792 === (8))){
var inst_38780 = (state_38791[(2)]);
var state_38791__$1 = state_38791;
if(cljs.core.truth_(inst_38780)){
var statearr_38807_38830 = state_38791__$1;
(statearr_38807_38830[(1)] = (12));

} else {
var statearr_38808_38831 = state_38791__$1;
(statearr_38808_38831[(1)] = (13));

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
});})(c__31644__auto___38817,tc,fc))
;
return ((function (switch__31582__auto__,c__31644__auto___38817,tc,fc){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_38812 = [null,null,null,null,null,null,null,null,null];
(statearr_38812[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_38812[(1)] = (1));

return statearr_38812;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_38791){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38813){if((e38813 instanceof Object)){
var ex__31586__auto__ = e38813;
var statearr_38814_38832 = state_38791;
(statearr_38814_38832[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38833 = state_38791;
state_38791 = G__38833;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_38791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_38791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___38817,tc,fc))
})();
var state__31646__auto__ = (function (){var statearr_38815 = f__31645__auto__.call(null);
(statearr_38815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___38817);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___38817,tc,fc))
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
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_38880){
var state_val_38881 = (state_38880[(1)]);
if((state_val_38881 === (7))){
var inst_38876 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38882_38898 = state_38880__$1;
(statearr_38882_38898[(2)] = inst_38876);

(statearr_38882_38898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (6))){
var inst_38866 = (state_38880[(7)]);
var inst_38869 = (state_38880[(8)]);
var inst_38873 = f.call(null,inst_38866,inst_38869);
var inst_38866__$1 = inst_38873;
var state_38880__$1 = (function (){var statearr_38883 = state_38880;
(statearr_38883[(7)] = inst_38866__$1);

return statearr_38883;
})();
var statearr_38884_38899 = state_38880__$1;
(statearr_38884_38899[(2)] = null);

(statearr_38884_38899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (5))){
var inst_38866 = (state_38880[(7)]);
var state_38880__$1 = state_38880;
var statearr_38885_38900 = state_38880__$1;
(statearr_38885_38900[(2)] = inst_38866);

(statearr_38885_38900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (4))){
var inst_38869 = (state_38880[(8)]);
var inst_38869__$1 = (state_38880[(2)]);
var inst_38870 = (inst_38869__$1 == null);
var state_38880__$1 = (function (){var statearr_38886 = state_38880;
(statearr_38886[(8)] = inst_38869__$1);

return statearr_38886;
})();
if(cljs.core.truth_(inst_38870)){
var statearr_38887_38901 = state_38880__$1;
(statearr_38887_38901[(1)] = (5));

} else {
var statearr_38888_38902 = state_38880__$1;
(statearr_38888_38902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (3))){
var inst_38878 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38880__$1,inst_38878);
} else {
if((state_val_38881 === (2))){
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38880__$1,(4),ch);
} else {
if((state_val_38881 === (1))){
var inst_38866 = init;
var state_38880__$1 = (function (){var statearr_38889 = state_38880;
(statearr_38889[(7)] = inst_38866);

return statearr_38889;
})();
var statearr_38890_38903 = state_38880__$1;
(statearr_38890_38903[(2)] = null);

(statearr_38890_38903[(1)] = (2));


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
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31583__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31583__auto____0 = (function (){
var statearr_38894 = [null,null,null,null,null,null,null,null,null];
(statearr_38894[(0)] = cljs$core$async$reduce_$_state_machine__31583__auto__);

(statearr_38894[(1)] = (1));

return statearr_38894;
});
var cljs$core$async$reduce_$_state_machine__31583__auto____1 = (function (state_38880){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38895){if((e38895 instanceof Object)){
var ex__31586__auto__ = e38895;
var statearr_38896_38904 = state_38880;
(statearr_38896_38904[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38905 = state_38880;
state_38880 = G__38905;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31583__auto__ = function(state_38880){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31583__auto____1.call(this,state_38880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31583__auto____0;
cljs$core$async$reduce_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31583__auto____1;
return cljs$core$async$reduce_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_38897 = f__31645__auto__.call(null);
(statearr_38897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_38897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
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
var G__38907 = arguments.length;
switch (G__38907) {
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
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_38932){
var state_val_38933 = (state_38932[(1)]);
if((state_val_38933 === (7))){
var inst_38914 = (state_38932[(2)]);
var state_38932__$1 = state_38932;
var statearr_38934_38958 = state_38932__$1;
(statearr_38934_38958[(2)] = inst_38914);

(statearr_38934_38958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (1))){
var inst_38908 = cljs.core.seq.call(null,coll);
var inst_38909 = inst_38908;
var state_38932__$1 = (function (){var statearr_38935 = state_38932;
(statearr_38935[(7)] = inst_38909);

return statearr_38935;
})();
var statearr_38936_38959 = state_38932__$1;
(statearr_38936_38959[(2)] = null);

(statearr_38936_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (4))){
var inst_38909 = (state_38932[(7)]);
var inst_38912 = cljs.core.first.call(null,inst_38909);
var state_38932__$1 = state_38932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38932__$1,(7),ch,inst_38912);
} else {
if((state_val_38933 === (13))){
var inst_38926 = (state_38932[(2)]);
var state_38932__$1 = state_38932;
var statearr_38937_38960 = state_38932__$1;
(statearr_38937_38960[(2)] = inst_38926);

(statearr_38937_38960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (6))){
var inst_38917 = (state_38932[(2)]);
var state_38932__$1 = state_38932;
if(cljs.core.truth_(inst_38917)){
var statearr_38938_38961 = state_38932__$1;
(statearr_38938_38961[(1)] = (8));

} else {
var statearr_38939_38962 = state_38932__$1;
(statearr_38939_38962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (3))){
var inst_38930 = (state_38932[(2)]);
var state_38932__$1 = state_38932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38932__$1,inst_38930);
} else {
if((state_val_38933 === (12))){
var state_38932__$1 = state_38932;
var statearr_38940_38963 = state_38932__$1;
(statearr_38940_38963[(2)] = null);

(statearr_38940_38963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (2))){
var inst_38909 = (state_38932[(7)]);
var state_38932__$1 = state_38932;
if(cljs.core.truth_(inst_38909)){
var statearr_38941_38964 = state_38932__$1;
(statearr_38941_38964[(1)] = (4));

} else {
var statearr_38942_38965 = state_38932__$1;
(statearr_38942_38965[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (11))){
var inst_38923 = cljs.core.async.close_BANG_.call(null,ch);
var state_38932__$1 = state_38932;
var statearr_38943_38966 = state_38932__$1;
(statearr_38943_38966[(2)] = inst_38923);

(statearr_38943_38966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (9))){
var state_38932__$1 = state_38932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38944_38967 = state_38932__$1;
(statearr_38944_38967[(1)] = (11));

} else {
var statearr_38945_38968 = state_38932__$1;
(statearr_38945_38968[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (5))){
var inst_38909 = (state_38932[(7)]);
var state_38932__$1 = state_38932;
var statearr_38946_38969 = state_38932__$1;
(statearr_38946_38969[(2)] = inst_38909);

(statearr_38946_38969[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (10))){
var inst_38928 = (state_38932[(2)]);
var state_38932__$1 = state_38932;
var statearr_38947_38970 = state_38932__$1;
(statearr_38947_38970[(2)] = inst_38928);

(statearr_38947_38970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38933 === (8))){
var inst_38909 = (state_38932[(7)]);
var inst_38919 = cljs.core.next.call(null,inst_38909);
var inst_38909__$1 = inst_38919;
var state_38932__$1 = (function (){var statearr_38948 = state_38932;
(statearr_38948[(7)] = inst_38909__$1);

return statearr_38948;
})();
var statearr_38949_38971 = state_38932__$1;
(statearr_38949_38971[(2)] = null);

(statearr_38949_38971[(1)] = (2));


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
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_38953 = [null,null,null,null,null,null,null,null];
(statearr_38953[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_38953[(1)] = (1));

return statearr_38953;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_38932){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_38932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e38954){if((e38954 instanceof Object)){
var ex__31586__auto__ = e38954;
var statearr_38955_38972 = state_38932;
(statearr_38955_38972[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38973 = state_38932;
state_38932 = G__38973;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_38932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_38932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_38956 = f__31645__auto__.call(null);
(statearr_38956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_38956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
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

cljs.core.async.Mux = (function (){var obj38975 = {};
return obj38975;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__28361__auto__ = _;
if(and__28361__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__28361__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29009__auto__ = (((_ == null))?null:_);
return (function (){var or__28373__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj38977 = {};
return obj38977;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
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
if(typeof cljs.core.async.t39199 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39199 = (function (cs,ch,mult,meta39200){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta39200 = meta39200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39199.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t39199.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t39199.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t39199.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t39199.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t39199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39201){
var self__ = this;
var _39201__$1 = this;
return self__.meta39200;
});})(cs))
;

cljs.core.async.t39199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39201,meta39200__$1){
var self__ = this;
var _39201__$1 = this;
return (new cljs.core.async.t39199(self__.cs,self__.ch,self__.mult,meta39200__$1));
});})(cs))
;

cljs.core.async.t39199.cljs$lang$type = true;

cljs.core.async.t39199.cljs$lang$ctorStr = "cljs.core.async/t39199";

cljs.core.async.t39199.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t39199");
});})(cs))
;

cljs.core.async.__GT_t39199 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t39199(cs__$1,ch__$1,mult__$1,meta39200){
return (new cljs.core.async.t39199(cs__$1,ch__$1,mult__$1,meta39200));
});})(cs))
;

}

return (new cljs.core.async.t39199(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31644__auto___39420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___39420,cs,m,dchan,dctr,done){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___39420,cs,m,dchan,dctr,done){
return (function (state_39332){
var state_val_39333 = (state_39332[(1)]);
if((state_val_39333 === (7))){
var inst_39328 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39334_39421 = state_39332__$1;
(statearr_39334_39421[(2)] = inst_39328);

(statearr_39334_39421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (20))){
var inst_39233 = (state_39332[(7)]);
var inst_39243 = cljs.core.first.call(null,inst_39233);
var inst_39244 = cljs.core.nth.call(null,inst_39243,(0),null);
var inst_39245 = cljs.core.nth.call(null,inst_39243,(1),null);
var state_39332__$1 = (function (){var statearr_39335 = state_39332;
(statearr_39335[(8)] = inst_39244);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39245)){
var statearr_39336_39422 = state_39332__$1;
(statearr_39336_39422[(1)] = (22));

} else {
var statearr_39337_39423 = state_39332__$1;
(statearr_39337_39423[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (27))){
var inst_39204 = (state_39332[(9)]);
var inst_39273 = (state_39332[(10)]);
var inst_39280 = (state_39332[(11)]);
var inst_39275 = (state_39332[(12)]);
var inst_39280__$1 = cljs.core._nth.call(null,inst_39273,inst_39275);
var inst_39281 = cljs.core.async.put_BANG_.call(null,inst_39280__$1,inst_39204,done);
var state_39332__$1 = (function (){var statearr_39338 = state_39332;
(statearr_39338[(11)] = inst_39280__$1);

return statearr_39338;
})();
if(cljs.core.truth_(inst_39281)){
var statearr_39339_39424 = state_39332__$1;
(statearr_39339_39424[(1)] = (30));

} else {
var statearr_39340_39425 = state_39332__$1;
(statearr_39340_39425[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (1))){
var state_39332__$1 = state_39332;
var statearr_39341_39426 = state_39332__$1;
(statearr_39341_39426[(2)] = null);

(statearr_39341_39426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (24))){
var inst_39233 = (state_39332[(7)]);
var inst_39250 = (state_39332[(2)]);
var inst_39251 = cljs.core.next.call(null,inst_39233);
var inst_39213 = inst_39251;
var inst_39214 = null;
var inst_39215 = (0);
var inst_39216 = (0);
var state_39332__$1 = (function (){var statearr_39342 = state_39332;
(statearr_39342[(13)] = inst_39250);

(statearr_39342[(14)] = inst_39215);

(statearr_39342[(15)] = inst_39216);

(statearr_39342[(16)] = inst_39213);

(statearr_39342[(17)] = inst_39214);

return statearr_39342;
})();
var statearr_39343_39427 = state_39332__$1;
(statearr_39343_39427[(2)] = null);

(statearr_39343_39427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (39))){
var state_39332__$1 = state_39332;
var statearr_39347_39428 = state_39332__$1;
(statearr_39347_39428[(2)] = null);

(statearr_39347_39428[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (4))){
var inst_39204 = (state_39332[(9)]);
var inst_39204__$1 = (state_39332[(2)]);
var inst_39205 = (inst_39204__$1 == null);
var state_39332__$1 = (function (){var statearr_39348 = state_39332;
(statearr_39348[(9)] = inst_39204__$1);

return statearr_39348;
})();
if(cljs.core.truth_(inst_39205)){
var statearr_39349_39429 = state_39332__$1;
(statearr_39349_39429[(1)] = (5));

} else {
var statearr_39350_39430 = state_39332__$1;
(statearr_39350_39430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (15))){
var inst_39215 = (state_39332[(14)]);
var inst_39216 = (state_39332[(15)]);
var inst_39213 = (state_39332[(16)]);
var inst_39214 = (state_39332[(17)]);
var inst_39229 = (state_39332[(2)]);
var inst_39230 = (inst_39216 + (1));
var tmp39344 = inst_39215;
var tmp39345 = inst_39213;
var tmp39346 = inst_39214;
var inst_39213__$1 = tmp39345;
var inst_39214__$1 = tmp39346;
var inst_39215__$1 = tmp39344;
var inst_39216__$1 = inst_39230;
var state_39332__$1 = (function (){var statearr_39351 = state_39332;
(statearr_39351[(14)] = inst_39215__$1);

(statearr_39351[(15)] = inst_39216__$1);

(statearr_39351[(18)] = inst_39229);

(statearr_39351[(16)] = inst_39213__$1);

(statearr_39351[(17)] = inst_39214__$1);

return statearr_39351;
})();
var statearr_39352_39431 = state_39332__$1;
(statearr_39352_39431[(2)] = null);

(statearr_39352_39431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (21))){
var inst_39254 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39356_39432 = state_39332__$1;
(statearr_39356_39432[(2)] = inst_39254);

(statearr_39356_39432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (31))){
var inst_39280 = (state_39332[(11)]);
var inst_39284 = done.call(null,null);
var inst_39285 = cljs.core.async.untap_STAR_.call(null,m,inst_39280);
var state_39332__$1 = (function (){var statearr_39357 = state_39332;
(statearr_39357[(19)] = inst_39284);

return statearr_39357;
})();
var statearr_39358_39433 = state_39332__$1;
(statearr_39358_39433[(2)] = inst_39285);

(statearr_39358_39433[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (32))){
var inst_39273 = (state_39332[(10)]);
var inst_39274 = (state_39332[(20)]);
var inst_39272 = (state_39332[(21)]);
var inst_39275 = (state_39332[(12)]);
var inst_39287 = (state_39332[(2)]);
var inst_39288 = (inst_39275 + (1));
var tmp39353 = inst_39273;
var tmp39354 = inst_39274;
var tmp39355 = inst_39272;
var inst_39272__$1 = tmp39355;
var inst_39273__$1 = tmp39353;
var inst_39274__$1 = tmp39354;
var inst_39275__$1 = inst_39288;
var state_39332__$1 = (function (){var statearr_39359 = state_39332;
(statearr_39359[(10)] = inst_39273__$1);

(statearr_39359[(20)] = inst_39274__$1);

(statearr_39359[(22)] = inst_39287);

(statearr_39359[(21)] = inst_39272__$1);

(statearr_39359[(12)] = inst_39275__$1);

return statearr_39359;
})();
var statearr_39360_39434 = state_39332__$1;
(statearr_39360_39434[(2)] = null);

(statearr_39360_39434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (40))){
var inst_39300 = (state_39332[(23)]);
var inst_39304 = done.call(null,null);
var inst_39305 = cljs.core.async.untap_STAR_.call(null,m,inst_39300);
var state_39332__$1 = (function (){var statearr_39361 = state_39332;
(statearr_39361[(24)] = inst_39304);

return statearr_39361;
})();
var statearr_39362_39435 = state_39332__$1;
(statearr_39362_39435[(2)] = inst_39305);

(statearr_39362_39435[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (33))){
var inst_39291 = (state_39332[(25)]);
var inst_39293 = cljs.core.chunked_seq_QMARK_.call(null,inst_39291);
var state_39332__$1 = state_39332;
if(inst_39293){
var statearr_39363_39436 = state_39332__$1;
(statearr_39363_39436[(1)] = (36));

} else {
var statearr_39364_39437 = state_39332__$1;
(statearr_39364_39437[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (13))){
var inst_39223 = (state_39332[(26)]);
var inst_39226 = cljs.core.async.close_BANG_.call(null,inst_39223);
var state_39332__$1 = state_39332;
var statearr_39365_39438 = state_39332__$1;
(statearr_39365_39438[(2)] = inst_39226);

(statearr_39365_39438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (22))){
var inst_39244 = (state_39332[(8)]);
var inst_39247 = cljs.core.async.close_BANG_.call(null,inst_39244);
var state_39332__$1 = state_39332;
var statearr_39366_39439 = state_39332__$1;
(statearr_39366_39439[(2)] = inst_39247);

(statearr_39366_39439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (36))){
var inst_39291 = (state_39332[(25)]);
var inst_39295 = cljs.core.chunk_first.call(null,inst_39291);
var inst_39296 = cljs.core.chunk_rest.call(null,inst_39291);
var inst_39297 = cljs.core.count.call(null,inst_39295);
var inst_39272 = inst_39296;
var inst_39273 = inst_39295;
var inst_39274 = inst_39297;
var inst_39275 = (0);
var state_39332__$1 = (function (){var statearr_39367 = state_39332;
(statearr_39367[(10)] = inst_39273);

(statearr_39367[(20)] = inst_39274);

(statearr_39367[(21)] = inst_39272);

(statearr_39367[(12)] = inst_39275);

return statearr_39367;
})();
var statearr_39368_39440 = state_39332__$1;
(statearr_39368_39440[(2)] = null);

(statearr_39368_39440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (41))){
var inst_39291 = (state_39332[(25)]);
var inst_39307 = (state_39332[(2)]);
var inst_39308 = cljs.core.next.call(null,inst_39291);
var inst_39272 = inst_39308;
var inst_39273 = null;
var inst_39274 = (0);
var inst_39275 = (0);
var state_39332__$1 = (function (){var statearr_39369 = state_39332;
(statearr_39369[(10)] = inst_39273);

(statearr_39369[(20)] = inst_39274);

(statearr_39369[(21)] = inst_39272);

(statearr_39369[(12)] = inst_39275);

(statearr_39369[(27)] = inst_39307);

return statearr_39369;
})();
var statearr_39370_39441 = state_39332__$1;
(statearr_39370_39441[(2)] = null);

(statearr_39370_39441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (43))){
var state_39332__$1 = state_39332;
var statearr_39371_39442 = state_39332__$1;
(statearr_39371_39442[(2)] = null);

(statearr_39371_39442[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (29))){
var inst_39316 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39372_39443 = state_39332__$1;
(statearr_39372_39443[(2)] = inst_39316);

(statearr_39372_39443[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (44))){
var inst_39325 = (state_39332[(2)]);
var state_39332__$1 = (function (){var statearr_39373 = state_39332;
(statearr_39373[(28)] = inst_39325);

return statearr_39373;
})();
var statearr_39374_39444 = state_39332__$1;
(statearr_39374_39444[(2)] = null);

(statearr_39374_39444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (6))){
var inst_39264 = (state_39332[(29)]);
var inst_39263 = cljs.core.deref.call(null,cs);
var inst_39264__$1 = cljs.core.keys.call(null,inst_39263);
var inst_39265 = cljs.core.count.call(null,inst_39264__$1);
var inst_39266 = cljs.core.reset_BANG_.call(null,dctr,inst_39265);
var inst_39271 = cljs.core.seq.call(null,inst_39264__$1);
var inst_39272 = inst_39271;
var inst_39273 = null;
var inst_39274 = (0);
var inst_39275 = (0);
var state_39332__$1 = (function (){var statearr_39375 = state_39332;
(statearr_39375[(10)] = inst_39273);

(statearr_39375[(20)] = inst_39274);

(statearr_39375[(30)] = inst_39266);

(statearr_39375[(29)] = inst_39264__$1);

(statearr_39375[(21)] = inst_39272);

(statearr_39375[(12)] = inst_39275);

return statearr_39375;
})();
var statearr_39376_39445 = state_39332__$1;
(statearr_39376_39445[(2)] = null);

(statearr_39376_39445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (28))){
var inst_39291 = (state_39332[(25)]);
var inst_39272 = (state_39332[(21)]);
var inst_39291__$1 = cljs.core.seq.call(null,inst_39272);
var state_39332__$1 = (function (){var statearr_39377 = state_39332;
(statearr_39377[(25)] = inst_39291__$1);

return statearr_39377;
})();
if(inst_39291__$1){
var statearr_39378_39446 = state_39332__$1;
(statearr_39378_39446[(1)] = (33));

} else {
var statearr_39379_39447 = state_39332__$1;
(statearr_39379_39447[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (25))){
var inst_39274 = (state_39332[(20)]);
var inst_39275 = (state_39332[(12)]);
var inst_39277 = (inst_39275 < inst_39274);
var inst_39278 = inst_39277;
var state_39332__$1 = state_39332;
if(cljs.core.truth_(inst_39278)){
var statearr_39380_39448 = state_39332__$1;
(statearr_39380_39448[(1)] = (27));

} else {
var statearr_39381_39449 = state_39332__$1;
(statearr_39381_39449[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (34))){
var state_39332__$1 = state_39332;
var statearr_39382_39450 = state_39332__$1;
(statearr_39382_39450[(2)] = null);

(statearr_39382_39450[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (17))){
var state_39332__$1 = state_39332;
var statearr_39383_39451 = state_39332__$1;
(statearr_39383_39451[(2)] = null);

(statearr_39383_39451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (3))){
var inst_39330 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39332__$1,inst_39330);
} else {
if((state_val_39333 === (12))){
var inst_39259 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39384_39452 = state_39332__$1;
(statearr_39384_39452[(2)] = inst_39259);

(statearr_39384_39452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (2))){
var state_39332__$1 = state_39332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39332__$1,(4),ch);
} else {
if((state_val_39333 === (23))){
var state_39332__$1 = state_39332;
var statearr_39385_39453 = state_39332__$1;
(statearr_39385_39453[(2)] = null);

(statearr_39385_39453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (35))){
var inst_39314 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39386_39454 = state_39332__$1;
(statearr_39386_39454[(2)] = inst_39314);

(statearr_39386_39454[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (19))){
var inst_39233 = (state_39332[(7)]);
var inst_39237 = cljs.core.chunk_first.call(null,inst_39233);
var inst_39238 = cljs.core.chunk_rest.call(null,inst_39233);
var inst_39239 = cljs.core.count.call(null,inst_39237);
var inst_39213 = inst_39238;
var inst_39214 = inst_39237;
var inst_39215 = inst_39239;
var inst_39216 = (0);
var state_39332__$1 = (function (){var statearr_39387 = state_39332;
(statearr_39387[(14)] = inst_39215);

(statearr_39387[(15)] = inst_39216);

(statearr_39387[(16)] = inst_39213);

(statearr_39387[(17)] = inst_39214);

return statearr_39387;
})();
var statearr_39388_39455 = state_39332__$1;
(statearr_39388_39455[(2)] = null);

(statearr_39388_39455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (11))){
var inst_39233 = (state_39332[(7)]);
var inst_39213 = (state_39332[(16)]);
var inst_39233__$1 = cljs.core.seq.call(null,inst_39213);
var state_39332__$1 = (function (){var statearr_39389 = state_39332;
(statearr_39389[(7)] = inst_39233__$1);

return statearr_39389;
})();
if(inst_39233__$1){
var statearr_39390_39456 = state_39332__$1;
(statearr_39390_39456[(1)] = (16));

} else {
var statearr_39391_39457 = state_39332__$1;
(statearr_39391_39457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (9))){
var inst_39261 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39392_39458 = state_39332__$1;
(statearr_39392_39458[(2)] = inst_39261);

(statearr_39392_39458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (5))){
var inst_39211 = cljs.core.deref.call(null,cs);
var inst_39212 = cljs.core.seq.call(null,inst_39211);
var inst_39213 = inst_39212;
var inst_39214 = null;
var inst_39215 = (0);
var inst_39216 = (0);
var state_39332__$1 = (function (){var statearr_39393 = state_39332;
(statearr_39393[(14)] = inst_39215);

(statearr_39393[(15)] = inst_39216);

(statearr_39393[(16)] = inst_39213);

(statearr_39393[(17)] = inst_39214);

return statearr_39393;
})();
var statearr_39394_39459 = state_39332__$1;
(statearr_39394_39459[(2)] = null);

(statearr_39394_39459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (14))){
var state_39332__$1 = state_39332;
var statearr_39395_39460 = state_39332__$1;
(statearr_39395_39460[(2)] = null);

(statearr_39395_39460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (45))){
var inst_39322 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39396_39461 = state_39332__$1;
(statearr_39396_39461[(2)] = inst_39322);

(statearr_39396_39461[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (26))){
var inst_39264 = (state_39332[(29)]);
var inst_39318 = (state_39332[(2)]);
var inst_39319 = cljs.core.seq.call(null,inst_39264);
var state_39332__$1 = (function (){var statearr_39397 = state_39332;
(statearr_39397[(31)] = inst_39318);

return statearr_39397;
})();
if(inst_39319){
var statearr_39398_39462 = state_39332__$1;
(statearr_39398_39462[(1)] = (42));

} else {
var statearr_39399_39463 = state_39332__$1;
(statearr_39399_39463[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (16))){
var inst_39233 = (state_39332[(7)]);
var inst_39235 = cljs.core.chunked_seq_QMARK_.call(null,inst_39233);
var state_39332__$1 = state_39332;
if(inst_39235){
var statearr_39400_39464 = state_39332__$1;
(statearr_39400_39464[(1)] = (19));

} else {
var statearr_39401_39465 = state_39332__$1;
(statearr_39401_39465[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (38))){
var inst_39311 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39402_39466 = state_39332__$1;
(statearr_39402_39466[(2)] = inst_39311);

(statearr_39402_39466[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (30))){
var state_39332__$1 = state_39332;
var statearr_39403_39467 = state_39332__$1;
(statearr_39403_39467[(2)] = null);

(statearr_39403_39467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (10))){
var inst_39216 = (state_39332[(15)]);
var inst_39214 = (state_39332[(17)]);
var inst_39222 = cljs.core._nth.call(null,inst_39214,inst_39216);
var inst_39223 = cljs.core.nth.call(null,inst_39222,(0),null);
var inst_39224 = cljs.core.nth.call(null,inst_39222,(1),null);
var state_39332__$1 = (function (){var statearr_39404 = state_39332;
(statearr_39404[(26)] = inst_39223);

return statearr_39404;
})();
if(cljs.core.truth_(inst_39224)){
var statearr_39405_39468 = state_39332__$1;
(statearr_39405_39468[(1)] = (13));

} else {
var statearr_39406_39469 = state_39332__$1;
(statearr_39406_39469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (18))){
var inst_39257 = (state_39332[(2)]);
var state_39332__$1 = state_39332;
var statearr_39407_39470 = state_39332__$1;
(statearr_39407_39470[(2)] = inst_39257);

(statearr_39407_39470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (42))){
var state_39332__$1 = state_39332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39332__$1,(45),dchan);
} else {
if((state_val_39333 === (37))){
var inst_39204 = (state_39332[(9)]);
var inst_39300 = (state_39332[(23)]);
var inst_39291 = (state_39332[(25)]);
var inst_39300__$1 = cljs.core.first.call(null,inst_39291);
var inst_39301 = cljs.core.async.put_BANG_.call(null,inst_39300__$1,inst_39204,done);
var state_39332__$1 = (function (){var statearr_39408 = state_39332;
(statearr_39408[(23)] = inst_39300__$1);

return statearr_39408;
})();
if(cljs.core.truth_(inst_39301)){
var statearr_39409_39471 = state_39332__$1;
(statearr_39409_39471[(1)] = (39));

} else {
var statearr_39410_39472 = state_39332__$1;
(statearr_39410_39472[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39333 === (8))){
var inst_39215 = (state_39332[(14)]);
var inst_39216 = (state_39332[(15)]);
var inst_39218 = (inst_39216 < inst_39215);
var inst_39219 = inst_39218;
var state_39332__$1 = state_39332;
if(cljs.core.truth_(inst_39219)){
var statearr_39411_39473 = state_39332__$1;
(statearr_39411_39473[(1)] = (10));

} else {
var statearr_39412_39474 = state_39332__$1;
(statearr_39412_39474[(1)] = (11));

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
});})(c__31644__auto___39420,cs,m,dchan,dctr,done))
;
return ((function (switch__31582__auto__,c__31644__auto___39420,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31583__auto__ = null;
var cljs$core$async$mult_$_state_machine__31583__auto____0 = (function (){
var statearr_39416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39416[(0)] = cljs$core$async$mult_$_state_machine__31583__auto__);

(statearr_39416[(1)] = (1));

return statearr_39416;
});
var cljs$core$async$mult_$_state_machine__31583__auto____1 = (function (state_39332){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_39332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e39417){if((e39417 instanceof Object)){
var ex__31586__auto__ = e39417;
var statearr_39418_39475 = state_39332;
(statearr_39418_39475[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39476 = state_39332;
state_39332 = G__39476;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31583__auto__ = function(state_39332){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31583__auto____1.call(this,state_39332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31583__auto____0;
cljs$core$async$mult_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31583__auto____1;
return cljs$core$async$mult_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___39420,cs,m,dchan,dctr,done))
})();
var state__31646__auto__ = (function (){var statearr_39419 = f__31645__auto__.call(null);
(statearr_39419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___39420);

return statearr_39419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___39420,cs,m,dchan,dctr,done))
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
var G__39478 = arguments.length;
switch (G__39478) {
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

cljs.core.async.Mix = (function (){var obj39481 = {};
return obj39481;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__28361__auto__ = m;
if(and__28361__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__28361__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29009__auto__ = (((m == null))?null:m);
return (function (){var or__28373__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__29413__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29413__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39486){
var map__39487 = p__39486;
var map__39487__$1 = ((cljs.core.seq_QMARK_.call(null,map__39487))?cljs.core.apply.call(null,cljs.core.hash_map,map__39487):map__39487);
var opts = map__39487__$1;
var statearr_39488_39491 = state;
(statearr_39488_39491[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__39487,map__39487__$1,opts){
return (function (val){
var statearr_39489_39492 = state;
(statearr_39489_39492[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39487,map__39487__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_39490_39493 = state;
(statearr_39490_39493[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39482){
var G__39483 = cljs.core.first.call(null,seq39482);
var seq39482__$1 = cljs.core.next.call(null,seq39482);
var G__39484 = cljs.core.first.call(null,seq39482__$1);
var seq39482__$2 = cljs.core.next.call(null,seq39482__$1);
var G__39485 = cljs.core.first.call(null,seq39482__$2);
var seq39482__$3 = cljs.core.next.call(null,seq39482__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39483,G__39484,G__39485,seq39482__$3);
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
if(typeof cljs.core.async.t39613 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39613 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39614){
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
this.meta39614 = meta39614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39613.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t39613.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t39613.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39615){
var self__ = this;
var _39615__$1 = this;
return self__.meta39614;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39615,meta39614__$1){
var self__ = this;
var _39615__$1 = this;
return (new cljs.core.async.t39613(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39614__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t39613.cljs$lang$type = true;

cljs.core.async.t39613.cljs$lang$ctorStr = "cljs.core.async/t39613";

cljs.core.async.t39613.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t39613");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t39613 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t39613(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39614){
return (new cljs.core.async.t39613(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39614));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t39613(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31644__auto___39732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___39732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___39732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39685){
var state_val_39686 = (state_39685[(1)]);
if((state_val_39686 === (7))){
var inst_39629 = (state_39685[(7)]);
var inst_39634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39629);
var state_39685__$1 = state_39685;
var statearr_39687_39733 = state_39685__$1;
(statearr_39687_39733[(2)] = inst_39634);

(statearr_39687_39733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (20))){
var inst_39644 = (state_39685[(8)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39685__$1,(23),out,inst_39644);
} else {
if((state_val_39686 === (1))){
var inst_39619 = (state_39685[(9)]);
var inst_39619__$1 = calc_state.call(null);
var inst_39620 = cljs.core.seq_QMARK_.call(null,inst_39619__$1);
var state_39685__$1 = (function (){var statearr_39688 = state_39685;
(statearr_39688[(9)] = inst_39619__$1);

return statearr_39688;
})();
if(inst_39620){
var statearr_39689_39734 = state_39685__$1;
(statearr_39689_39734[(1)] = (2));

} else {
var statearr_39690_39735 = state_39685__$1;
(statearr_39690_39735[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (24))){
var inst_39637 = (state_39685[(10)]);
var inst_39629 = inst_39637;
var state_39685__$1 = (function (){var statearr_39691 = state_39685;
(statearr_39691[(7)] = inst_39629);

return statearr_39691;
})();
var statearr_39692_39736 = state_39685__$1;
(statearr_39692_39736[(2)] = null);

(statearr_39692_39736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (4))){
var inst_39619 = (state_39685[(9)]);
var inst_39625 = (state_39685[(2)]);
var inst_39626 = cljs.core.get.call(null,inst_39625,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39627 = cljs.core.get.call(null,inst_39625,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39628 = cljs.core.get.call(null,inst_39625,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39629 = inst_39619;
var state_39685__$1 = (function (){var statearr_39693 = state_39685;
(statearr_39693[(11)] = inst_39627);

(statearr_39693[(12)] = inst_39628);

(statearr_39693[(7)] = inst_39629);

(statearr_39693[(13)] = inst_39626);

return statearr_39693;
})();
var statearr_39694_39737 = state_39685__$1;
(statearr_39694_39737[(2)] = null);

(statearr_39694_39737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (15))){
var state_39685__$1 = state_39685;
var statearr_39695_39738 = state_39685__$1;
(statearr_39695_39738[(2)] = null);

(statearr_39695_39738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (21))){
var inst_39637 = (state_39685[(10)]);
var inst_39629 = inst_39637;
var state_39685__$1 = (function (){var statearr_39696 = state_39685;
(statearr_39696[(7)] = inst_39629);

return statearr_39696;
})();
var statearr_39697_39739 = state_39685__$1;
(statearr_39697_39739[(2)] = null);

(statearr_39697_39739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (13))){
var inst_39681 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39698_39740 = state_39685__$1;
(statearr_39698_39740[(2)] = inst_39681);

(statearr_39698_39740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (22))){
var inst_39679 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39699_39741 = state_39685__$1;
(statearr_39699_39741[(2)] = inst_39679);

(statearr_39699_39741[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (6))){
var inst_39683 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39685__$1,inst_39683);
} else {
if((state_val_39686 === (25))){
var state_39685__$1 = state_39685;
var statearr_39700_39742 = state_39685__$1;
(statearr_39700_39742[(2)] = null);

(statearr_39700_39742[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (17))){
var inst_39659 = (state_39685[(14)]);
var state_39685__$1 = state_39685;
var statearr_39701_39743 = state_39685__$1;
(statearr_39701_39743[(2)] = inst_39659);

(statearr_39701_39743[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (3))){
var inst_39619 = (state_39685[(9)]);
var state_39685__$1 = state_39685;
var statearr_39702_39744 = state_39685__$1;
(statearr_39702_39744[(2)] = inst_39619);

(statearr_39702_39744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (12))){
var inst_39645 = (state_39685[(15)]);
var inst_39640 = (state_39685[(16)]);
var inst_39659 = (state_39685[(14)]);
var inst_39659__$1 = inst_39640.call(null,inst_39645);
var state_39685__$1 = (function (){var statearr_39703 = state_39685;
(statearr_39703[(14)] = inst_39659__$1);

return statearr_39703;
})();
if(cljs.core.truth_(inst_39659__$1)){
var statearr_39704_39745 = state_39685__$1;
(statearr_39704_39745[(1)] = (17));

} else {
var statearr_39705_39746 = state_39685__$1;
(statearr_39705_39746[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (2))){
var inst_39619 = (state_39685[(9)]);
var inst_39622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39619);
var state_39685__$1 = state_39685;
var statearr_39706_39747 = state_39685__$1;
(statearr_39706_39747[(2)] = inst_39622);

(statearr_39706_39747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (23))){
var inst_39670 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39670)){
var statearr_39707_39748 = state_39685__$1;
(statearr_39707_39748[(1)] = (24));

} else {
var statearr_39708_39749 = state_39685__$1;
(statearr_39708_39749[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (19))){
var inst_39667 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39667)){
var statearr_39709_39750 = state_39685__$1;
(statearr_39709_39750[(1)] = (20));

} else {
var statearr_39710_39751 = state_39685__$1;
(statearr_39710_39751[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (11))){
var inst_39644 = (state_39685[(8)]);
var inst_39650 = (inst_39644 == null);
var state_39685__$1 = state_39685;
if(cljs.core.truth_(inst_39650)){
var statearr_39711_39752 = state_39685__$1;
(statearr_39711_39752[(1)] = (14));

} else {
var statearr_39712_39753 = state_39685__$1;
(statearr_39712_39753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (9))){
var inst_39637 = (state_39685[(10)]);
var inst_39637__$1 = (state_39685[(2)]);
var inst_39638 = cljs.core.get.call(null,inst_39637__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39639 = cljs.core.get.call(null,inst_39637__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39640 = cljs.core.get.call(null,inst_39637__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_39685__$1 = (function (){var statearr_39713 = state_39685;
(statearr_39713[(10)] = inst_39637__$1);

(statearr_39713[(17)] = inst_39639);

(statearr_39713[(16)] = inst_39640);

return statearr_39713;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39685__$1,(10),inst_39638);
} else {
if((state_val_39686 === (5))){
var inst_39629 = (state_39685[(7)]);
var inst_39632 = cljs.core.seq_QMARK_.call(null,inst_39629);
var state_39685__$1 = state_39685;
if(inst_39632){
var statearr_39714_39754 = state_39685__$1;
(statearr_39714_39754[(1)] = (7));

} else {
var statearr_39715_39755 = state_39685__$1;
(statearr_39715_39755[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (14))){
var inst_39645 = (state_39685[(15)]);
var inst_39652 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39645);
var state_39685__$1 = state_39685;
var statearr_39716_39756 = state_39685__$1;
(statearr_39716_39756[(2)] = inst_39652);

(statearr_39716_39756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (26))){
var inst_39675 = (state_39685[(2)]);
var state_39685__$1 = state_39685;
var statearr_39717_39757 = state_39685__$1;
(statearr_39717_39757[(2)] = inst_39675);

(statearr_39717_39757[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (16))){
var inst_39655 = (state_39685[(2)]);
var inst_39656 = calc_state.call(null);
var inst_39629 = inst_39656;
var state_39685__$1 = (function (){var statearr_39718 = state_39685;
(statearr_39718[(18)] = inst_39655);

(statearr_39718[(7)] = inst_39629);

return statearr_39718;
})();
var statearr_39719_39758 = state_39685__$1;
(statearr_39719_39758[(2)] = null);

(statearr_39719_39758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (10))){
var inst_39645 = (state_39685[(15)]);
var inst_39644 = (state_39685[(8)]);
var inst_39643 = (state_39685[(2)]);
var inst_39644__$1 = cljs.core.nth.call(null,inst_39643,(0),null);
var inst_39645__$1 = cljs.core.nth.call(null,inst_39643,(1),null);
var inst_39646 = (inst_39644__$1 == null);
var inst_39647 = cljs.core._EQ_.call(null,inst_39645__$1,change);
var inst_39648 = (inst_39646) || (inst_39647);
var state_39685__$1 = (function (){var statearr_39720 = state_39685;
(statearr_39720[(15)] = inst_39645__$1);

(statearr_39720[(8)] = inst_39644__$1);

return statearr_39720;
})();
if(cljs.core.truth_(inst_39648)){
var statearr_39721_39759 = state_39685__$1;
(statearr_39721_39759[(1)] = (11));

} else {
var statearr_39722_39760 = state_39685__$1;
(statearr_39722_39760[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (18))){
var inst_39639 = (state_39685[(17)]);
var inst_39645 = (state_39685[(15)]);
var inst_39640 = (state_39685[(16)]);
var inst_39662 = cljs.core.empty_QMARK_.call(null,inst_39640);
var inst_39663 = inst_39639.call(null,inst_39645);
var inst_39664 = cljs.core.not.call(null,inst_39663);
var inst_39665 = (inst_39662) && (inst_39664);
var state_39685__$1 = state_39685;
var statearr_39723_39761 = state_39685__$1;
(statearr_39723_39761[(2)] = inst_39665);

(statearr_39723_39761[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39686 === (8))){
var inst_39629 = (state_39685[(7)]);
var state_39685__$1 = state_39685;
var statearr_39724_39762 = state_39685__$1;
(statearr_39724_39762[(2)] = inst_39629);

(statearr_39724_39762[(1)] = (9));


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
});})(c__31644__auto___39732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31582__auto__,c__31644__auto___39732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31583__auto__ = null;
var cljs$core$async$mix_$_state_machine__31583__auto____0 = (function (){
var statearr_39728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39728[(0)] = cljs$core$async$mix_$_state_machine__31583__auto__);

(statearr_39728[(1)] = (1));

return statearr_39728;
});
var cljs$core$async$mix_$_state_machine__31583__auto____1 = (function (state_39685){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_39685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e39729){if((e39729 instanceof Object)){
var ex__31586__auto__ = e39729;
var statearr_39730_39763 = state_39685;
(statearr_39730_39763[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39764 = state_39685;
state_39685 = G__39764;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31583__auto__ = function(state_39685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31583__auto____1.call(this,state_39685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31583__auto____0;
cljs$core$async$mix_$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31583__auto____1;
return cljs$core$async$mix_$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___39732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31646__auto__ = (function (){var statearr_39731 = f__31645__auto__.call(null);
(statearr_39731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___39732);

return statearr_39731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___39732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj39766 = {};
return obj39766;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__28361__auto__ = p;
if(and__28361__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__28361__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29009__auto__ = (((p == null))?null:p);
return (function (){var or__28373__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__28361__auto__ = p;
if(and__28361__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__28361__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29009__auto__ = (((p == null))?null:p);
return (function (){var or__28373__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__39768 = arguments.length;
switch (G__39768) {
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
if((function (){var and__28361__auto__ = p;
if(and__28361__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__28361__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29009__auto__ = (((p == null))?null:p);
return (function (){var or__28373__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__28361__auto__ = p;
if(and__28361__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__28361__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29009__auto__ = (((p == null))?null:p);
return (function (){var or__28373__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29009__auto__)]);
if(or__28373__auto__){
return or__28373__auto__;
} else {
var or__28373__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__28373__auto____$1){
return or__28373__auto____$1;
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
var G__39772 = arguments.length;
switch (G__39772) {
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
var or__28373__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28373__auto__)){
return or__28373__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28373__auto__,mults){
return (function (p1__39770_SHARP_){
if(cljs.core.truth_(p1__39770_SHARP_.call(null,topic))){
return p1__39770_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39770_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28373__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t39773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39773 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta39774){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta39774 = meta39774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39773.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t39773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t39773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t39773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t39773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t39773.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t39773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t39773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39775){
var self__ = this;
var _39775__$1 = this;
return self__.meta39774;
});})(mults,ensure_mult))
;

cljs.core.async.t39773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39775,meta39774__$1){
var self__ = this;
var _39775__$1 = this;
return (new cljs.core.async.t39773(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta39774__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t39773.cljs$lang$type = true;

cljs.core.async.t39773.cljs$lang$ctorStr = "cljs.core.async/t39773";

cljs.core.async.t39773.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t39773");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t39773 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t39773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta39774){
return (new cljs.core.async.t39773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta39774));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t39773(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31644__auto___39896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___39896,mults,ensure_mult,p){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___39896,mults,ensure_mult,p){
return (function (state_39847){
var state_val_39848 = (state_39847[(1)]);
if((state_val_39848 === (7))){
var inst_39843 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
var statearr_39849_39897 = state_39847__$1;
(statearr_39849_39897[(2)] = inst_39843);

(statearr_39849_39897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (20))){
var state_39847__$1 = state_39847;
var statearr_39850_39898 = state_39847__$1;
(statearr_39850_39898[(2)] = null);

(statearr_39850_39898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (1))){
var state_39847__$1 = state_39847;
var statearr_39851_39899 = state_39847__$1;
(statearr_39851_39899[(2)] = null);

(statearr_39851_39899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (24))){
var inst_39826 = (state_39847[(7)]);
var inst_39835 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39826);
var state_39847__$1 = state_39847;
var statearr_39852_39900 = state_39847__$1;
(statearr_39852_39900[(2)] = inst_39835);

(statearr_39852_39900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (4))){
var inst_39778 = (state_39847[(8)]);
var inst_39778__$1 = (state_39847[(2)]);
var inst_39779 = (inst_39778__$1 == null);
var state_39847__$1 = (function (){var statearr_39853 = state_39847;
(statearr_39853[(8)] = inst_39778__$1);

return statearr_39853;
})();
if(cljs.core.truth_(inst_39779)){
var statearr_39854_39901 = state_39847__$1;
(statearr_39854_39901[(1)] = (5));

} else {
var statearr_39855_39902 = state_39847__$1;
(statearr_39855_39902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (15))){
var inst_39820 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
var statearr_39856_39903 = state_39847__$1;
(statearr_39856_39903[(2)] = inst_39820);

(statearr_39856_39903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (21))){
var inst_39840 = (state_39847[(2)]);
var state_39847__$1 = (function (){var statearr_39857 = state_39847;
(statearr_39857[(9)] = inst_39840);

return statearr_39857;
})();
var statearr_39858_39904 = state_39847__$1;
(statearr_39858_39904[(2)] = null);

(statearr_39858_39904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (13))){
var inst_39802 = (state_39847[(10)]);
var inst_39804 = cljs.core.chunked_seq_QMARK_.call(null,inst_39802);
var state_39847__$1 = state_39847;
if(inst_39804){
var statearr_39859_39905 = state_39847__$1;
(statearr_39859_39905[(1)] = (16));

} else {
var statearr_39860_39906 = state_39847__$1;
(statearr_39860_39906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (22))){
var inst_39832 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
if(cljs.core.truth_(inst_39832)){
var statearr_39861_39907 = state_39847__$1;
(statearr_39861_39907[(1)] = (23));

} else {
var statearr_39862_39908 = state_39847__$1;
(statearr_39862_39908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (6))){
var inst_39826 = (state_39847[(7)]);
var inst_39828 = (state_39847[(11)]);
var inst_39778 = (state_39847[(8)]);
var inst_39826__$1 = topic_fn.call(null,inst_39778);
var inst_39827 = cljs.core.deref.call(null,mults);
var inst_39828__$1 = cljs.core.get.call(null,inst_39827,inst_39826__$1);
var state_39847__$1 = (function (){var statearr_39863 = state_39847;
(statearr_39863[(7)] = inst_39826__$1);

(statearr_39863[(11)] = inst_39828__$1);

return statearr_39863;
})();
if(cljs.core.truth_(inst_39828__$1)){
var statearr_39864_39909 = state_39847__$1;
(statearr_39864_39909[(1)] = (19));

} else {
var statearr_39865_39910 = state_39847__$1;
(statearr_39865_39910[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (25))){
var inst_39837 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
var statearr_39866_39911 = state_39847__$1;
(statearr_39866_39911[(2)] = inst_39837);

(statearr_39866_39911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (17))){
var inst_39802 = (state_39847[(10)]);
var inst_39811 = cljs.core.first.call(null,inst_39802);
var inst_39812 = cljs.core.async.muxch_STAR_.call(null,inst_39811);
var inst_39813 = cljs.core.async.close_BANG_.call(null,inst_39812);
var inst_39814 = cljs.core.next.call(null,inst_39802);
var inst_39788 = inst_39814;
var inst_39789 = null;
var inst_39790 = (0);
var inst_39791 = (0);
var state_39847__$1 = (function (){var statearr_39867 = state_39847;
(statearr_39867[(12)] = inst_39791);

(statearr_39867[(13)] = inst_39788);

(statearr_39867[(14)] = inst_39790);

(statearr_39867[(15)] = inst_39789);

(statearr_39867[(16)] = inst_39813);

return statearr_39867;
})();
var statearr_39868_39912 = state_39847__$1;
(statearr_39868_39912[(2)] = null);

(statearr_39868_39912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (3))){
var inst_39845 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39847__$1,inst_39845);
} else {
if((state_val_39848 === (12))){
var inst_39822 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
var statearr_39869_39913 = state_39847__$1;
(statearr_39869_39913[(2)] = inst_39822);

(statearr_39869_39913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (2))){
var state_39847__$1 = state_39847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39847__$1,(4),ch);
} else {
if((state_val_39848 === (23))){
var state_39847__$1 = state_39847;
var statearr_39870_39914 = state_39847__$1;
(statearr_39870_39914[(2)] = null);

(statearr_39870_39914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (19))){
var inst_39828 = (state_39847[(11)]);
var inst_39778 = (state_39847[(8)]);
var inst_39830 = cljs.core.async.muxch_STAR_.call(null,inst_39828);
var state_39847__$1 = state_39847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39847__$1,(22),inst_39830,inst_39778);
} else {
if((state_val_39848 === (11))){
var inst_39788 = (state_39847[(13)]);
var inst_39802 = (state_39847[(10)]);
var inst_39802__$1 = cljs.core.seq.call(null,inst_39788);
var state_39847__$1 = (function (){var statearr_39871 = state_39847;
(statearr_39871[(10)] = inst_39802__$1);

return statearr_39871;
})();
if(inst_39802__$1){
var statearr_39872_39915 = state_39847__$1;
(statearr_39872_39915[(1)] = (13));

} else {
var statearr_39873_39916 = state_39847__$1;
(statearr_39873_39916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (9))){
var inst_39824 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
var statearr_39874_39917 = state_39847__$1;
(statearr_39874_39917[(2)] = inst_39824);

(statearr_39874_39917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (5))){
var inst_39785 = cljs.core.deref.call(null,mults);
var inst_39786 = cljs.core.vals.call(null,inst_39785);
var inst_39787 = cljs.core.seq.call(null,inst_39786);
var inst_39788 = inst_39787;
var inst_39789 = null;
var inst_39790 = (0);
var inst_39791 = (0);
var state_39847__$1 = (function (){var statearr_39875 = state_39847;
(statearr_39875[(12)] = inst_39791);

(statearr_39875[(13)] = inst_39788);

(statearr_39875[(14)] = inst_39790);

(statearr_39875[(15)] = inst_39789);

return statearr_39875;
})();
var statearr_39876_39918 = state_39847__$1;
(statearr_39876_39918[(2)] = null);

(statearr_39876_39918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (14))){
var state_39847__$1 = state_39847;
var statearr_39880_39919 = state_39847__$1;
(statearr_39880_39919[(2)] = null);

(statearr_39880_39919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (16))){
var inst_39802 = (state_39847[(10)]);
var inst_39806 = cljs.core.chunk_first.call(null,inst_39802);
var inst_39807 = cljs.core.chunk_rest.call(null,inst_39802);
var inst_39808 = cljs.core.count.call(null,inst_39806);
var inst_39788 = inst_39807;
var inst_39789 = inst_39806;
var inst_39790 = inst_39808;
var inst_39791 = (0);
var state_39847__$1 = (function (){var statearr_39881 = state_39847;
(statearr_39881[(12)] = inst_39791);

(statearr_39881[(13)] = inst_39788);

(statearr_39881[(14)] = inst_39790);

(statearr_39881[(15)] = inst_39789);

return statearr_39881;
})();
var statearr_39882_39920 = state_39847__$1;
(statearr_39882_39920[(2)] = null);

(statearr_39882_39920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (10))){
var inst_39791 = (state_39847[(12)]);
var inst_39788 = (state_39847[(13)]);
var inst_39790 = (state_39847[(14)]);
var inst_39789 = (state_39847[(15)]);
var inst_39796 = cljs.core._nth.call(null,inst_39789,inst_39791);
var inst_39797 = cljs.core.async.muxch_STAR_.call(null,inst_39796);
var inst_39798 = cljs.core.async.close_BANG_.call(null,inst_39797);
var inst_39799 = (inst_39791 + (1));
var tmp39877 = inst_39788;
var tmp39878 = inst_39790;
var tmp39879 = inst_39789;
var inst_39788__$1 = tmp39877;
var inst_39789__$1 = tmp39879;
var inst_39790__$1 = tmp39878;
var inst_39791__$1 = inst_39799;
var state_39847__$1 = (function (){var statearr_39883 = state_39847;
(statearr_39883[(12)] = inst_39791__$1);

(statearr_39883[(17)] = inst_39798);

(statearr_39883[(13)] = inst_39788__$1);

(statearr_39883[(14)] = inst_39790__$1);

(statearr_39883[(15)] = inst_39789__$1);

return statearr_39883;
})();
var statearr_39884_39921 = state_39847__$1;
(statearr_39884_39921[(2)] = null);

(statearr_39884_39921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (18))){
var inst_39817 = (state_39847[(2)]);
var state_39847__$1 = state_39847;
var statearr_39885_39922 = state_39847__$1;
(statearr_39885_39922[(2)] = inst_39817);

(statearr_39885_39922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39848 === (8))){
var inst_39791 = (state_39847[(12)]);
var inst_39790 = (state_39847[(14)]);
var inst_39793 = (inst_39791 < inst_39790);
var inst_39794 = inst_39793;
var state_39847__$1 = state_39847;
if(cljs.core.truth_(inst_39794)){
var statearr_39886_39923 = state_39847__$1;
(statearr_39886_39923[(1)] = (10));

} else {
var statearr_39887_39924 = state_39847__$1;
(statearr_39887_39924[(1)] = (11));

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
});})(c__31644__auto___39896,mults,ensure_mult,p))
;
return ((function (switch__31582__auto__,c__31644__auto___39896,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_39891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39891[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_39891[(1)] = (1));

return statearr_39891;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_39847){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_39847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e39892){if((e39892 instanceof Object)){
var ex__31586__auto__ = e39892;
var statearr_39893_39925 = state_39847;
(statearr_39893_39925[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39926 = state_39847;
state_39847 = G__39926;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_39847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_39847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___39896,mults,ensure_mult,p))
})();
var state__31646__auto__ = (function (){var statearr_39894 = f__31645__auto__.call(null);
(statearr_39894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___39896);

return statearr_39894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___39896,mults,ensure_mult,p))
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
var G__39928 = arguments.length;
switch (G__39928) {
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
var G__39931 = arguments.length;
switch (G__39931) {
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
var G__39934 = arguments.length;
switch (G__39934) {
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
var c__31644__auto___40004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39973){
var state_val_39974 = (state_39973[(1)]);
if((state_val_39974 === (7))){
var state_39973__$1 = state_39973;
var statearr_39975_40005 = state_39973__$1;
(statearr_39975_40005[(2)] = null);

(statearr_39975_40005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (1))){
var state_39973__$1 = state_39973;
var statearr_39976_40006 = state_39973__$1;
(statearr_39976_40006[(2)] = null);

(statearr_39976_40006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (4))){
var inst_39937 = (state_39973[(7)]);
var inst_39939 = (inst_39937 < cnt);
var state_39973__$1 = state_39973;
if(cljs.core.truth_(inst_39939)){
var statearr_39977_40007 = state_39973__$1;
(statearr_39977_40007[(1)] = (6));

} else {
var statearr_39978_40008 = state_39973__$1;
(statearr_39978_40008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (15))){
var inst_39969 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_39979_40009 = state_39973__$1;
(statearr_39979_40009[(2)] = inst_39969);

(statearr_39979_40009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (13))){
var inst_39962 = cljs.core.async.close_BANG_.call(null,out);
var state_39973__$1 = state_39973;
var statearr_39980_40010 = state_39973__$1;
(statearr_39980_40010[(2)] = inst_39962);

(statearr_39980_40010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (6))){
var state_39973__$1 = state_39973;
var statearr_39981_40011 = state_39973__$1;
(statearr_39981_40011[(2)] = null);

(statearr_39981_40011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (3))){
var inst_39971 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39973__$1,inst_39971);
} else {
if((state_val_39974 === (12))){
var inst_39959 = (state_39973[(8)]);
var inst_39959__$1 = (state_39973[(2)]);
var inst_39960 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39959__$1);
var state_39973__$1 = (function (){var statearr_39982 = state_39973;
(statearr_39982[(8)] = inst_39959__$1);

return statearr_39982;
})();
if(cljs.core.truth_(inst_39960)){
var statearr_39983_40012 = state_39973__$1;
(statearr_39983_40012[(1)] = (13));

} else {
var statearr_39984_40013 = state_39973__$1;
(statearr_39984_40013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (2))){
var inst_39936 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39937 = (0);
var state_39973__$1 = (function (){var statearr_39985 = state_39973;
(statearr_39985[(9)] = inst_39936);

(statearr_39985[(7)] = inst_39937);

return statearr_39985;
})();
var statearr_39986_40014 = state_39973__$1;
(statearr_39986_40014[(2)] = null);

(statearr_39986_40014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (11))){
var inst_39937 = (state_39973[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39973,(10),Object,null,(9));
var inst_39946 = chs__$1.call(null,inst_39937);
var inst_39947 = done.call(null,inst_39937);
var inst_39948 = cljs.core.async.take_BANG_.call(null,inst_39946,inst_39947);
var state_39973__$1 = state_39973;
var statearr_39987_40015 = state_39973__$1;
(statearr_39987_40015[(2)] = inst_39948);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (9))){
var inst_39937 = (state_39973[(7)]);
var inst_39950 = (state_39973[(2)]);
var inst_39951 = (inst_39937 + (1));
var inst_39937__$1 = inst_39951;
var state_39973__$1 = (function (){var statearr_39988 = state_39973;
(statearr_39988[(10)] = inst_39950);

(statearr_39988[(7)] = inst_39937__$1);

return statearr_39988;
})();
var statearr_39989_40016 = state_39973__$1;
(statearr_39989_40016[(2)] = null);

(statearr_39989_40016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (5))){
var inst_39957 = (state_39973[(2)]);
var state_39973__$1 = (function (){var statearr_39990 = state_39973;
(statearr_39990[(11)] = inst_39957);

return statearr_39990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39973__$1,(12),dchan);
} else {
if((state_val_39974 === (14))){
var inst_39959 = (state_39973[(8)]);
var inst_39964 = cljs.core.apply.call(null,f,inst_39959);
var state_39973__$1 = state_39973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39973__$1,(16),out,inst_39964);
} else {
if((state_val_39974 === (16))){
var inst_39966 = (state_39973[(2)]);
var state_39973__$1 = (function (){var statearr_39991 = state_39973;
(statearr_39991[(12)] = inst_39966);

return statearr_39991;
})();
var statearr_39992_40017 = state_39973__$1;
(statearr_39992_40017[(2)] = null);

(statearr_39992_40017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (10))){
var inst_39941 = (state_39973[(2)]);
var inst_39942 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39973__$1 = (function (){var statearr_39993 = state_39973;
(statearr_39993[(13)] = inst_39941);

return statearr_39993;
})();
var statearr_39994_40018 = state_39973__$1;
(statearr_39994_40018[(2)] = inst_39942);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39974 === (8))){
var inst_39955 = (state_39973[(2)]);
var state_39973__$1 = state_39973;
var statearr_39995_40019 = state_39973__$1;
(statearr_39995_40019[(2)] = inst_39955);

(statearr_39995_40019[(1)] = (5));


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
});})(c__31644__auto___40004,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31582__auto__,c__31644__auto___40004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_39999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39999[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_39999[(1)] = (1));

return statearr_39999;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_39973){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_39973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40000){if((e40000 instanceof Object)){
var ex__31586__auto__ = e40000;
var statearr_40001_40020 = state_39973;
(statearr_40001_40020[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40021 = state_39973;
state_39973 = G__40021;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_39973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_39973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40004,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31646__auto__ = (function (){var statearr_40002 = f__31645__auto__.call(null);
(statearr_40002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40004);

return statearr_40002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40004,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40024 = arguments.length;
switch (G__40024) {
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
var c__31644__auto___40079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40079,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40079,out){
return (function (state_40054){
var state_val_40055 = (state_40054[(1)]);
if((state_val_40055 === (7))){
var inst_40033 = (state_40054[(7)]);
var inst_40034 = (state_40054[(8)]);
var inst_40033__$1 = (state_40054[(2)]);
var inst_40034__$1 = cljs.core.nth.call(null,inst_40033__$1,(0),null);
var inst_40035 = cljs.core.nth.call(null,inst_40033__$1,(1),null);
var inst_40036 = (inst_40034__$1 == null);
var state_40054__$1 = (function (){var statearr_40056 = state_40054;
(statearr_40056[(9)] = inst_40035);

(statearr_40056[(7)] = inst_40033__$1);

(statearr_40056[(8)] = inst_40034__$1);

return statearr_40056;
})();
if(cljs.core.truth_(inst_40036)){
var statearr_40057_40080 = state_40054__$1;
(statearr_40057_40080[(1)] = (8));

} else {
var statearr_40058_40081 = state_40054__$1;
(statearr_40058_40081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (1))){
var inst_40025 = cljs.core.vec.call(null,chs);
var inst_40026 = inst_40025;
var state_40054__$1 = (function (){var statearr_40059 = state_40054;
(statearr_40059[(10)] = inst_40026);

return statearr_40059;
})();
var statearr_40060_40082 = state_40054__$1;
(statearr_40060_40082[(2)] = null);

(statearr_40060_40082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (4))){
var inst_40026 = (state_40054[(10)]);
var state_40054__$1 = state_40054;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40054__$1,(7),inst_40026);
} else {
if((state_val_40055 === (6))){
var inst_40050 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40061_40083 = state_40054__$1;
(statearr_40061_40083[(2)] = inst_40050);

(statearr_40061_40083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (3))){
var inst_40052 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40054__$1,inst_40052);
} else {
if((state_val_40055 === (2))){
var inst_40026 = (state_40054[(10)]);
var inst_40028 = cljs.core.count.call(null,inst_40026);
var inst_40029 = (inst_40028 > (0));
var state_40054__$1 = state_40054;
if(cljs.core.truth_(inst_40029)){
var statearr_40063_40084 = state_40054__$1;
(statearr_40063_40084[(1)] = (4));

} else {
var statearr_40064_40085 = state_40054__$1;
(statearr_40064_40085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (11))){
var inst_40026 = (state_40054[(10)]);
var inst_40043 = (state_40054[(2)]);
var tmp40062 = inst_40026;
var inst_40026__$1 = tmp40062;
var state_40054__$1 = (function (){var statearr_40065 = state_40054;
(statearr_40065[(10)] = inst_40026__$1);

(statearr_40065[(11)] = inst_40043);

return statearr_40065;
})();
var statearr_40066_40086 = state_40054__$1;
(statearr_40066_40086[(2)] = null);

(statearr_40066_40086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (9))){
var inst_40034 = (state_40054[(8)]);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40054__$1,(11),out,inst_40034);
} else {
if((state_val_40055 === (5))){
var inst_40048 = cljs.core.async.close_BANG_.call(null,out);
var state_40054__$1 = state_40054;
var statearr_40067_40087 = state_40054__$1;
(statearr_40067_40087[(2)] = inst_40048);

(statearr_40067_40087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (10))){
var inst_40046 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40068_40088 = state_40054__$1;
(statearr_40068_40088[(2)] = inst_40046);

(statearr_40068_40088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (8))){
var inst_40026 = (state_40054[(10)]);
var inst_40035 = (state_40054[(9)]);
var inst_40033 = (state_40054[(7)]);
var inst_40034 = (state_40054[(8)]);
var inst_40038 = (function (){var c = inst_40035;
var v = inst_40034;
var vec__40031 = inst_40033;
var cs = inst_40026;
return ((function (c,v,vec__40031,cs,inst_40026,inst_40035,inst_40033,inst_40034,state_val_40055,c__31644__auto___40079,out){
return (function (p1__40022_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40022_SHARP_);
});
;})(c,v,vec__40031,cs,inst_40026,inst_40035,inst_40033,inst_40034,state_val_40055,c__31644__auto___40079,out))
})();
var inst_40039 = cljs.core.filterv.call(null,inst_40038,inst_40026);
var inst_40026__$1 = inst_40039;
var state_40054__$1 = (function (){var statearr_40069 = state_40054;
(statearr_40069[(10)] = inst_40026__$1);

return statearr_40069;
})();
var statearr_40070_40089 = state_40054__$1;
(statearr_40070_40089[(2)] = null);

(statearr_40070_40089[(1)] = (2));


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
});})(c__31644__auto___40079,out))
;
return ((function (switch__31582__auto__,c__31644__auto___40079,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_40074 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40074[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_40074[(1)] = (1));

return statearr_40074;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_40054){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40075){if((e40075 instanceof Object)){
var ex__31586__auto__ = e40075;
var statearr_40076_40090 = state_40054;
(statearr_40076_40090[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40091 = state_40054;
state_40054 = G__40091;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_40054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_40054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40079,out))
})();
var state__31646__auto__ = (function (){var statearr_40077 = f__31645__auto__.call(null);
(statearr_40077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40079);

return statearr_40077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40079,out))
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
var G__40093 = arguments.length;
switch (G__40093) {
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
var c__31644__auto___40141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40141,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40141,out){
return (function (state_40117){
var state_val_40118 = (state_40117[(1)]);
if((state_val_40118 === (7))){
var inst_40099 = (state_40117[(7)]);
var inst_40099__$1 = (state_40117[(2)]);
var inst_40100 = (inst_40099__$1 == null);
var inst_40101 = cljs.core.not.call(null,inst_40100);
var state_40117__$1 = (function (){var statearr_40119 = state_40117;
(statearr_40119[(7)] = inst_40099__$1);

return statearr_40119;
})();
if(inst_40101){
var statearr_40120_40142 = state_40117__$1;
(statearr_40120_40142[(1)] = (8));

} else {
var statearr_40121_40143 = state_40117__$1;
(statearr_40121_40143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (1))){
var inst_40094 = (0);
var state_40117__$1 = (function (){var statearr_40122 = state_40117;
(statearr_40122[(8)] = inst_40094);

return statearr_40122;
})();
var statearr_40123_40144 = state_40117__$1;
(statearr_40123_40144[(2)] = null);

(statearr_40123_40144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (4))){
var state_40117__$1 = state_40117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40117__$1,(7),ch);
} else {
if((state_val_40118 === (6))){
var inst_40112 = (state_40117[(2)]);
var state_40117__$1 = state_40117;
var statearr_40124_40145 = state_40117__$1;
(statearr_40124_40145[(2)] = inst_40112);

(statearr_40124_40145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (3))){
var inst_40114 = (state_40117[(2)]);
var inst_40115 = cljs.core.async.close_BANG_.call(null,out);
var state_40117__$1 = (function (){var statearr_40125 = state_40117;
(statearr_40125[(9)] = inst_40114);

return statearr_40125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40117__$1,inst_40115);
} else {
if((state_val_40118 === (2))){
var inst_40094 = (state_40117[(8)]);
var inst_40096 = (inst_40094 < n);
var state_40117__$1 = state_40117;
if(cljs.core.truth_(inst_40096)){
var statearr_40126_40146 = state_40117__$1;
(statearr_40126_40146[(1)] = (4));

} else {
var statearr_40127_40147 = state_40117__$1;
(statearr_40127_40147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (11))){
var inst_40094 = (state_40117[(8)]);
var inst_40104 = (state_40117[(2)]);
var inst_40105 = (inst_40094 + (1));
var inst_40094__$1 = inst_40105;
var state_40117__$1 = (function (){var statearr_40128 = state_40117;
(statearr_40128[(8)] = inst_40094__$1);

(statearr_40128[(10)] = inst_40104);

return statearr_40128;
})();
var statearr_40129_40148 = state_40117__$1;
(statearr_40129_40148[(2)] = null);

(statearr_40129_40148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (9))){
var state_40117__$1 = state_40117;
var statearr_40130_40149 = state_40117__$1;
(statearr_40130_40149[(2)] = null);

(statearr_40130_40149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (5))){
var state_40117__$1 = state_40117;
var statearr_40131_40150 = state_40117__$1;
(statearr_40131_40150[(2)] = null);

(statearr_40131_40150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (10))){
var inst_40109 = (state_40117[(2)]);
var state_40117__$1 = state_40117;
var statearr_40132_40151 = state_40117__$1;
(statearr_40132_40151[(2)] = inst_40109);

(statearr_40132_40151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40118 === (8))){
var inst_40099 = (state_40117[(7)]);
var state_40117__$1 = state_40117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40117__$1,(11),out,inst_40099);
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
});})(c__31644__auto___40141,out))
;
return ((function (switch__31582__auto__,c__31644__auto___40141,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_40136 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40136[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_40136[(1)] = (1));

return statearr_40136;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_40117){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40137){if((e40137 instanceof Object)){
var ex__31586__auto__ = e40137;
var statearr_40138_40152 = state_40117;
(statearr_40138_40152[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40153 = state_40117;
state_40117 = G__40153;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_40117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_40117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40141,out))
})();
var state__31646__auto__ = (function (){var statearr_40139 = f__31645__auto__.call(null);
(statearr_40139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40141);

return statearr_40139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40141,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t40161 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40161 = (function (ch,f,map_LT_,meta40162){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta40162 = meta40162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t40164 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40164 = (function (fn1,_,meta40162,map_LT_,f,ch,meta40165){
this.fn1 = fn1;
this._ = _;
this.meta40162 = meta40162;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40165 = meta40165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t40164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40154_SHARP_){
return f1.call(null,(((p1__40154_SHARP_ == null))?null:self__.f.call(null,p1__40154_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t40164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40166){
var self__ = this;
var _40166__$1 = this;
return self__.meta40165;
});})(___$1))
;

cljs.core.async.t40164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40166,meta40165__$1){
var self__ = this;
var _40166__$1 = this;
return (new cljs.core.async.t40164(self__.fn1,self__._,self__.meta40162,self__.map_LT_,self__.f,self__.ch,meta40165__$1));
});})(___$1))
;

cljs.core.async.t40164.cljs$lang$type = true;

cljs.core.async.t40164.cljs$lang$ctorStr = "cljs.core.async/t40164";

cljs.core.async.t40164.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t40164");
});})(___$1))
;

cljs.core.async.__GT_t40164 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t40164(fn1__$1,___$2,meta40162__$1,map_LT___$1,f__$1,ch__$1,meta40165){
return (new cljs.core.async.t40164(fn1__$1,___$2,meta40162__$1,map_LT___$1,f__$1,ch__$1,meta40165));
});})(___$1))
;

}

return (new cljs.core.async.t40164(fn1,___$1,self__.meta40162,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28361__auto__ = ret;
if(cljs.core.truth_(and__28361__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28361__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40163){
var self__ = this;
var _40163__$1 = this;
return self__.meta40162;
});

cljs.core.async.t40161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40163,meta40162__$1){
var self__ = this;
var _40163__$1 = this;
return (new cljs.core.async.t40161(self__.ch,self__.f,self__.map_LT_,meta40162__$1));
});

cljs.core.async.t40161.cljs$lang$type = true;

cljs.core.async.t40161.cljs$lang$ctorStr = "cljs.core.async/t40161";

cljs.core.async.t40161.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t40161");
});

cljs.core.async.__GT_t40161 = (function cljs$core$async$map_LT__$___GT_t40161(ch__$1,f__$1,map_LT___$1,meta40162){
return (new cljs.core.async.t40161(ch__$1,f__$1,map_LT___$1,meta40162));
});

}

return (new cljs.core.async.t40161(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t40170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40170 = (function (ch,f,map_GT_,meta40171){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta40171 = meta40171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t40170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40170.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40172){
var self__ = this;
var _40172__$1 = this;
return self__.meta40171;
});

cljs.core.async.t40170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40172,meta40171__$1){
var self__ = this;
var _40172__$1 = this;
return (new cljs.core.async.t40170(self__.ch,self__.f,self__.map_GT_,meta40171__$1));
});

cljs.core.async.t40170.cljs$lang$type = true;

cljs.core.async.t40170.cljs$lang$ctorStr = "cljs.core.async/t40170";

cljs.core.async.t40170.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t40170");
});

cljs.core.async.__GT_t40170 = (function cljs$core$async$map_GT__$___GT_t40170(ch__$1,f__$1,map_GT___$1,meta40171){
return (new cljs.core.async.t40170(ch__$1,f__$1,map_GT___$1,meta40171));
});

}

return (new cljs.core.async.t40170(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t40176 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40176 = (function (ch,p,filter_GT_,meta40177){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta40177 = meta40177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t40176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t40176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40178){
var self__ = this;
var _40178__$1 = this;
return self__.meta40177;
});

cljs.core.async.t40176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40178,meta40177__$1){
var self__ = this;
var _40178__$1 = this;
return (new cljs.core.async.t40176(self__.ch,self__.p,self__.filter_GT_,meta40177__$1));
});

cljs.core.async.t40176.cljs$lang$type = true;

cljs.core.async.t40176.cljs$lang$ctorStr = "cljs.core.async/t40176";

cljs.core.async.t40176.cljs$lang$ctorPrWriter = (function (this__28952__auto__,writer__28953__auto__,opt__28954__auto__){
return cljs.core._write.call(null,writer__28953__auto__,"cljs.core.async/t40176");
});

cljs.core.async.__GT_t40176 = (function cljs$core$async$filter_GT__$___GT_t40176(ch__$1,p__$1,filter_GT___$1,meta40177){
return (new cljs.core.async.t40176(ch__$1,p__$1,filter_GT___$1,meta40177));
});

}

return (new cljs.core.async.t40176(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40180 = arguments.length;
switch (G__40180) {
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
var c__31644__auto___40223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40223,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40223,out){
return (function (state_40201){
var state_val_40202 = (state_40201[(1)]);
if((state_val_40202 === (7))){
var inst_40197 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40203_40224 = state_40201__$1;
(statearr_40203_40224[(2)] = inst_40197);

(statearr_40203_40224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (1))){
var state_40201__$1 = state_40201;
var statearr_40204_40225 = state_40201__$1;
(statearr_40204_40225[(2)] = null);

(statearr_40204_40225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (4))){
var inst_40183 = (state_40201[(7)]);
var inst_40183__$1 = (state_40201[(2)]);
var inst_40184 = (inst_40183__$1 == null);
var state_40201__$1 = (function (){var statearr_40205 = state_40201;
(statearr_40205[(7)] = inst_40183__$1);

return statearr_40205;
})();
if(cljs.core.truth_(inst_40184)){
var statearr_40206_40226 = state_40201__$1;
(statearr_40206_40226[(1)] = (5));

} else {
var statearr_40207_40227 = state_40201__$1;
(statearr_40207_40227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (6))){
var inst_40183 = (state_40201[(7)]);
var inst_40188 = p.call(null,inst_40183);
var state_40201__$1 = state_40201;
if(cljs.core.truth_(inst_40188)){
var statearr_40208_40228 = state_40201__$1;
(statearr_40208_40228[(1)] = (8));

} else {
var statearr_40209_40229 = state_40201__$1;
(statearr_40209_40229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (3))){
var inst_40199 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40201__$1,inst_40199);
} else {
if((state_val_40202 === (2))){
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40201__$1,(4),ch);
} else {
if((state_val_40202 === (11))){
var inst_40191 = (state_40201[(2)]);
var state_40201__$1 = state_40201;
var statearr_40210_40230 = state_40201__$1;
(statearr_40210_40230[(2)] = inst_40191);

(statearr_40210_40230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (9))){
var state_40201__$1 = state_40201;
var statearr_40211_40231 = state_40201__$1;
(statearr_40211_40231[(2)] = null);

(statearr_40211_40231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (5))){
var inst_40186 = cljs.core.async.close_BANG_.call(null,out);
var state_40201__$1 = state_40201;
var statearr_40212_40232 = state_40201__$1;
(statearr_40212_40232[(2)] = inst_40186);

(statearr_40212_40232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (10))){
var inst_40194 = (state_40201[(2)]);
var state_40201__$1 = (function (){var statearr_40213 = state_40201;
(statearr_40213[(8)] = inst_40194);

return statearr_40213;
})();
var statearr_40214_40233 = state_40201__$1;
(statearr_40214_40233[(2)] = null);

(statearr_40214_40233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40202 === (8))){
var inst_40183 = (state_40201[(7)]);
var state_40201__$1 = state_40201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40201__$1,(11),out,inst_40183);
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
});})(c__31644__auto___40223,out))
;
return ((function (switch__31582__auto__,c__31644__auto___40223,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_40218 = [null,null,null,null,null,null,null,null,null];
(statearr_40218[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_40218[(1)] = (1));

return statearr_40218;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_40201){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40219){if((e40219 instanceof Object)){
var ex__31586__auto__ = e40219;
var statearr_40220_40234 = state_40201;
(statearr_40220_40234[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40235 = state_40201;
state_40201 = G__40235;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_40201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_40201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40223,out))
})();
var state__31646__auto__ = (function (){var statearr_40221 = f__31645__auto__.call(null);
(statearr_40221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40223);

return statearr_40221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40223,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__40237 = arguments.length;
switch (G__40237) {
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
var c__31644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto__){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto__){
return (function (state_40404){
var state_val_40405 = (state_40404[(1)]);
if((state_val_40405 === (7))){
var inst_40400 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40406_40447 = state_40404__$1;
(statearr_40406_40447[(2)] = inst_40400);

(statearr_40406_40447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (20))){
var inst_40370 = (state_40404[(7)]);
var inst_40381 = (state_40404[(2)]);
var inst_40382 = cljs.core.next.call(null,inst_40370);
var inst_40356 = inst_40382;
var inst_40357 = null;
var inst_40358 = (0);
var inst_40359 = (0);
var state_40404__$1 = (function (){var statearr_40407 = state_40404;
(statearr_40407[(8)] = inst_40358);

(statearr_40407[(9)] = inst_40356);

(statearr_40407[(10)] = inst_40357);

(statearr_40407[(11)] = inst_40381);

(statearr_40407[(12)] = inst_40359);

return statearr_40407;
})();
var statearr_40408_40448 = state_40404__$1;
(statearr_40408_40448[(2)] = null);

(statearr_40408_40448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (1))){
var state_40404__$1 = state_40404;
var statearr_40409_40449 = state_40404__$1;
(statearr_40409_40449[(2)] = null);

(statearr_40409_40449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (4))){
var inst_40345 = (state_40404[(13)]);
var inst_40345__$1 = (state_40404[(2)]);
var inst_40346 = (inst_40345__$1 == null);
var state_40404__$1 = (function (){var statearr_40410 = state_40404;
(statearr_40410[(13)] = inst_40345__$1);

return statearr_40410;
})();
if(cljs.core.truth_(inst_40346)){
var statearr_40411_40450 = state_40404__$1;
(statearr_40411_40450[(1)] = (5));

} else {
var statearr_40412_40451 = state_40404__$1;
(statearr_40412_40451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (15))){
var state_40404__$1 = state_40404;
var statearr_40416_40452 = state_40404__$1;
(statearr_40416_40452[(2)] = null);

(statearr_40416_40452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (21))){
var state_40404__$1 = state_40404;
var statearr_40417_40453 = state_40404__$1;
(statearr_40417_40453[(2)] = null);

(statearr_40417_40453[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (13))){
var inst_40358 = (state_40404[(8)]);
var inst_40356 = (state_40404[(9)]);
var inst_40357 = (state_40404[(10)]);
var inst_40359 = (state_40404[(12)]);
var inst_40366 = (state_40404[(2)]);
var inst_40367 = (inst_40359 + (1));
var tmp40413 = inst_40358;
var tmp40414 = inst_40356;
var tmp40415 = inst_40357;
var inst_40356__$1 = tmp40414;
var inst_40357__$1 = tmp40415;
var inst_40358__$1 = tmp40413;
var inst_40359__$1 = inst_40367;
var state_40404__$1 = (function (){var statearr_40418 = state_40404;
(statearr_40418[(8)] = inst_40358__$1);

(statearr_40418[(9)] = inst_40356__$1);

(statearr_40418[(10)] = inst_40357__$1);

(statearr_40418[(14)] = inst_40366);

(statearr_40418[(12)] = inst_40359__$1);

return statearr_40418;
})();
var statearr_40419_40454 = state_40404__$1;
(statearr_40419_40454[(2)] = null);

(statearr_40419_40454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (22))){
var state_40404__$1 = state_40404;
var statearr_40420_40455 = state_40404__$1;
(statearr_40420_40455[(2)] = null);

(statearr_40420_40455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (6))){
var inst_40345 = (state_40404[(13)]);
var inst_40354 = f.call(null,inst_40345);
var inst_40355 = cljs.core.seq.call(null,inst_40354);
var inst_40356 = inst_40355;
var inst_40357 = null;
var inst_40358 = (0);
var inst_40359 = (0);
var state_40404__$1 = (function (){var statearr_40421 = state_40404;
(statearr_40421[(8)] = inst_40358);

(statearr_40421[(9)] = inst_40356);

(statearr_40421[(10)] = inst_40357);

(statearr_40421[(12)] = inst_40359);

return statearr_40421;
})();
var statearr_40422_40456 = state_40404__$1;
(statearr_40422_40456[(2)] = null);

(statearr_40422_40456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (17))){
var inst_40370 = (state_40404[(7)]);
var inst_40374 = cljs.core.chunk_first.call(null,inst_40370);
var inst_40375 = cljs.core.chunk_rest.call(null,inst_40370);
var inst_40376 = cljs.core.count.call(null,inst_40374);
var inst_40356 = inst_40375;
var inst_40357 = inst_40374;
var inst_40358 = inst_40376;
var inst_40359 = (0);
var state_40404__$1 = (function (){var statearr_40423 = state_40404;
(statearr_40423[(8)] = inst_40358);

(statearr_40423[(9)] = inst_40356);

(statearr_40423[(10)] = inst_40357);

(statearr_40423[(12)] = inst_40359);

return statearr_40423;
})();
var statearr_40424_40457 = state_40404__$1;
(statearr_40424_40457[(2)] = null);

(statearr_40424_40457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (3))){
var inst_40402 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40404__$1,inst_40402);
} else {
if((state_val_40405 === (12))){
var inst_40390 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40425_40458 = state_40404__$1;
(statearr_40425_40458[(2)] = inst_40390);

(statearr_40425_40458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (2))){
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40404__$1,(4),in$);
} else {
if((state_val_40405 === (23))){
var inst_40398 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40426_40459 = state_40404__$1;
(statearr_40426_40459[(2)] = inst_40398);

(statearr_40426_40459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (19))){
var inst_40385 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40427_40460 = state_40404__$1;
(statearr_40427_40460[(2)] = inst_40385);

(statearr_40427_40460[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (11))){
var inst_40370 = (state_40404[(7)]);
var inst_40356 = (state_40404[(9)]);
var inst_40370__$1 = cljs.core.seq.call(null,inst_40356);
var state_40404__$1 = (function (){var statearr_40428 = state_40404;
(statearr_40428[(7)] = inst_40370__$1);

return statearr_40428;
})();
if(inst_40370__$1){
var statearr_40429_40461 = state_40404__$1;
(statearr_40429_40461[(1)] = (14));

} else {
var statearr_40430_40462 = state_40404__$1;
(statearr_40430_40462[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (9))){
var inst_40392 = (state_40404[(2)]);
var inst_40393 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40404__$1 = (function (){var statearr_40431 = state_40404;
(statearr_40431[(15)] = inst_40392);

return statearr_40431;
})();
if(cljs.core.truth_(inst_40393)){
var statearr_40432_40463 = state_40404__$1;
(statearr_40432_40463[(1)] = (21));

} else {
var statearr_40433_40464 = state_40404__$1;
(statearr_40433_40464[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (5))){
var inst_40348 = cljs.core.async.close_BANG_.call(null,out);
var state_40404__$1 = state_40404;
var statearr_40434_40465 = state_40404__$1;
(statearr_40434_40465[(2)] = inst_40348);

(statearr_40434_40465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (14))){
var inst_40370 = (state_40404[(7)]);
var inst_40372 = cljs.core.chunked_seq_QMARK_.call(null,inst_40370);
var state_40404__$1 = state_40404;
if(inst_40372){
var statearr_40435_40466 = state_40404__$1;
(statearr_40435_40466[(1)] = (17));

} else {
var statearr_40436_40467 = state_40404__$1;
(statearr_40436_40467[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (16))){
var inst_40388 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40437_40468 = state_40404__$1;
(statearr_40437_40468[(2)] = inst_40388);

(statearr_40437_40468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (10))){
var inst_40357 = (state_40404[(10)]);
var inst_40359 = (state_40404[(12)]);
var inst_40364 = cljs.core._nth.call(null,inst_40357,inst_40359);
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40404__$1,(13),out,inst_40364);
} else {
if((state_val_40405 === (18))){
var inst_40370 = (state_40404[(7)]);
var inst_40379 = cljs.core.first.call(null,inst_40370);
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40404__$1,(20),out,inst_40379);
} else {
if((state_val_40405 === (8))){
var inst_40358 = (state_40404[(8)]);
var inst_40359 = (state_40404[(12)]);
var inst_40361 = (inst_40359 < inst_40358);
var inst_40362 = inst_40361;
var state_40404__$1 = state_40404;
if(cljs.core.truth_(inst_40362)){
var statearr_40438_40469 = state_40404__$1;
(statearr_40438_40469[(1)] = (10));

} else {
var statearr_40439_40470 = state_40404__$1;
(statearr_40439_40470[(1)] = (11));

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
});})(c__31644__auto__))
;
return ((function (switch__31582__auto__,c__31644__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____0 = (function (){
var statearr_40443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40443[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__);

(statearr_40443[(1)] = (1));

return statearr_40443;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____1 = (function (state_40404){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40444){if((e40444 instanceof Object)){
var ex__31586__auto__ = e40444;
var statearr_40445_40471 = state_40404;
(statearr_40445_40471[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40472 = state_40404;
state_40404 = G__40472;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__ = function(state_40404){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____1.call(this,state_40404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31583__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto__))
})();
var state__31646__auto__ = (function (){var statearr_40446 = f__31645__auto__.call(null);
(statearr_40446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto__);

return statearr_40446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto__))
);

return c__31644__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__40474 = arguments.length;
switch (G__40474) {
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
var G__40477 = arguments.length;
switch (G__40477) {
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
var G__40480 = arguments.length;
switch (G__40480) {
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
var c__31644__auto___40530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40530,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40530,out){
return (function (state_40504){
var state_val_40505 = (state_40504[(1)]);
if((state_val_40505 === (7))){
var inst_40499 = (state_40504[(2)]);
var state_40504__$1 = state_40504;
var statearr_40506_40531 = state_40504__$1;
(statearr_40506_40531[(2)] = inst_40499);

(statearr_40506_40531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (1))){
var inst_40481 = null;
var state_40504__$1 = (function (){var statearr_40507 = state_40504;
(statearr_40507[(7)] = inst_40481);

return statearr_40507;
})();
var statearr_40508_40532 = state_40504__$1;
(statearr_40508_40532[(2)] = null);

(statearr_40508_40532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (4))){
var inst_40484 = (state_40504[(8)]);
var inst_40484__$1 = (state_40504[(2)]);
var inst_40485 = (inst_40484__$1 == null);
var inst_40486 = cljs.core.not.call(null,inst_40485);
var state_40504__$1 = (function (){var statearr_40509 = state_40504;
(statearr_40509[(8)] = inst_40484__$1);

return statearr_40509;
})();
if(inst_40486){
var statearr_40510_40533 = state_40504__$1;
(statearr_40510_40533[(1)] = (5));

} else {
var statearr_40511_40534 = state_40504__$1;
(statearr_40511_40534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (6))){
var state_40504__$1 = state_40504;
var statearr_40512_40535 = state_40504__$1;
(statearr_40512_40535[(2)] = null);

(statearr_40512_40535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (3))){
var inst_40501 = (state_40504[(2)]);
var inst_40502 = cljs.core.async.close_BANG_.call(null,out);
var state_40504__$1 = (function (){var statearr_40513 = state_40504;
(statearr_40513[(9)] = inst_40501);

return statearr_40513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40504__$1,inst_40502);
} else {
if((state_val_40505 === (2))){
var state_40504__$1 = state_40504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40504__$1,(4),ch);
} else {
if((state_val_40505 === (11))){
var inst_40484 = (state_40504[(8)]);
var inst_40493 = (state_40504[(2)]);
var inst_40481 = inst_40484;
var state_40504__$1 = (function (){var statearr_40514 = state_40504;
(statearr_40514[(10)] = inst_40493);

(statearr_40514[(7)] = inst_40481);

return statearr_40514;
})();
var statearr_40515_40536 = state_40504__$1;
(statearr_40515_40536[(2)] = null);

(statearr_40515_40536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (9))){
var inst_40484 = (state_40504[(8)]);
var state_40504__$1 = state_40504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40504__$1,(11),out,inst_40484);
} else {
if((state_val_40505 === (5))){
var inst_40484 = (state_40504[(8)]);
var inst_40481 = (state_40504[(7)]);
var inst_40488 = cljs.core._EQ_.call(null,inst_40484,inst_40481);
var state_40504__$1 = state_40504;
if(inst_40488){
var statearr_40517_40537 = state_40504__$1;
(statearr_40517_40537[(1)] = (8));

} else {
var statearr_40518_40538 = state_40504__$1;
(statearr_40518_40538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (10))){
var inst_40496 = (state_40504[(2)]);
var state_40504__$1 = state_40504;
var statearr_40519_40539 = state_40504__$1;
(statearr_40519_40539[(2)] = inst_40496);

(statearr_40519_40539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40505 === (8))){
var inst_40481 = (state_40504[(7)]);
var tmp40516 = inst_40481;
var inst_40481__$1 = tmp40516;
var state_40504__$1 = (function (){var statearr_40520 = state_40504;
(statearr_40520[(7)] = inst_40481__$1);

return statearr_40520;
})();
var statearr_40521_40540 = state_40504__$1;
(statearr_40521_40540[(2)] = null);

(statearr_40521_40540[(1)] = (2));


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
});})(c__31644__auto___40530,out))
;
return ((function (switch__31582__auto__,c__31644__auto___40530,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_40525 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40525[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_40525[(1)] = (1));

return statearr_40525;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_40504){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40526){if((e40526 instanceof Object)){
var ex__31586__auto__ = e40526;
var statearr_40527_40541 = state_40504;
(statearr_40527_40541[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40542 = state_40504;
state_40504 = G__40542;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_40504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_40504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40530,out))
})();
var state__31646__auto__ = (function (){var statearr_40528 = f__31645__auto__.call(null);
(statearr_40528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40530);

return statearr_40528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40530,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__40544 = arguments.length;
switch (G__40544) {
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
var c__31644__auto___40613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40613,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40613,out){
return (function (state_40582){
var state_val_40583 = (state_40582[(1)]);
if((state_val_40583 === (7))){
var inst_40578 = (state_40582[(2)]);
var state_40582__$1 = state_40582;
var statearr_40584_40614 = state_40582__$1;
(statearr_40584_40614[(2)] = inst_40578);

(statearr_40584_40614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (1))){
var inst_40545 = (new Array(n));
var inst_40546 = inst_40545;
var inst_40547 = (0);
var state_40582__$1 = (function (){var statearr_40585 = state_40582;
(statearr_40585[(7)] = inst_40547);

(statearr_40585[(8)] = inst_40546);

return statearr_40585;
})();
var statearr_40586_40615 = state_40582__$1;
(statearr_40586_40615[(2)] = null);

(statearr_40586_40615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (4))){
var inst_40550 = (state_40582[(9)]);
var inst_40550__$1 = (state_40582[(2)]);
var inst_40551 = (inst_40550__$1 == null);
var inst_40552 = cljs.core.not.call(null,inst_40551);
var state_40582__$1 = (function (){var statearr_40587 = state_40582;
(statearr_40587[(9)] = inst_40550__$1);

return statearr_40587;
})();
if(inst_40552){
var statearr_40588_40616 = state_40582__$1;
(statearr_40588_40616[(1)] = (5));

} else {
var statearr_40589_40617 = state_40582__$1;
(statearr_40589_40617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (15))){
var inst_40572 = (state_40582[(2)]);
var state_40582__$1 = state_40582;
var statearr_40590_40618 = state_40582__$1;
(statearr_40590_40618[(2)] = inst_40572);

(statearr_40590_40618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (13))){
var state_40582__$1 = state_40582;
var statearr_40591_40619 = state_40582__$1;
(statearr_40591_40619[(2)] = null);

(statearr_40591_40619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (6))){
var inst_40547 = (state_40582[(7)]);
var inst_40568 = (inst_40547 > (0));
var state_40582__$1 = state_40582;
if(cljs.core.truth_(inst_40568)){
var statearr_40592_40620 = state_40582__$1;
(statearr_40592_40620[(1)] = (12));

} else {
var statearr_40593_40621 = state_40582__$1;
(statearr_40593_40621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (3))){
var inst_40580 = (state_40582[(2)]);
var state_40582__$1 = state_40582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40582__$1,inst_40580);
} else {
if((state_val_40583 === (12))){
var inst_40546 = (state_40582[(8)]);
var inst_40570 = cljs.core.vec.call(null,inst_40546);
var state_40582__$1 = state_40582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40582__$1,(15),out,inst_40570);
} else {
if((state_val_40583 === (2))){
var state_40582__$1 = state_40582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40582__$1,(4),ch);
} else {
if((state_val_40583 === (11))){
var inst_40562 = (state_40582[(2)]);
var inst_40563 = (new Array(n));
var inst_40546 = inst_40563;
var inst_40547 = (0);
var state_40582__$1 = (function (){var statearr_40594 = state_40582;
(statearr_40594[(7)] = inst_40547);

(statearr_40594[(8)] = inst_40546);

(statearr_40594[(10)] = inst_40562);

return statearr_40594;
})();
var statearr_40595_40622 = state_40582__$1;
(statearr_40595_40622[(2)] = null);

(statearr_40595_40622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (9))){
var inst_40546 = (state_40582[(8)]);
var inst_40560 = cljs.core.vec.call(null,inst_40546);
var state_40582__$1 = state_40582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40582__$1,(11),out,inst_40560);
} else {
if((state_val_40583 === (5))){
var inst_40547 = (state_40582[(7)]);
var inst_40546 = (state_40582[(8)]);
var inst_40550 = (state_40582[(9)]);
var inst_40555 = (state_40582[(11)]);
var inst_40554 = (inst_40546[inst_40547] = inst_40550);
var inst_40555__$1 = (inst_40547 + (1));
var inst_40556 = (inst_40555__$1 < n);
var state_40582__$1 = (function (){var statearr_40596 = state_40582;
(statearr_40596[(12)] = inst_40554);

(statearr_40596[(11)] = inst_40555__$1);

return statearr_40596;
})();
if(cljs.core.truth_(inst_40556)){
var statearr_40597_40623 = state_40582__$1;
(statearr_40597_40623[(1)] = (8));

} else {
var statearr_40598_40624 = state_40582__$1;
(statearr_40598_40624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (14))){
var inst_40575 = (state_40582[(2)]);
var inst_40576 = cljs.core.async.close_BANG_.call(null,out);
var state_40582__$1 = (function (){var statearr_40600 = state_40582;
(statearr_40600[(13)] = inst_40575);

return statearr_40600;
})();
var statearr_40601_40625 = state_40582__$1;
(statearr_40601_40625[(2)] = inst_40576);

(statearr_40601_40625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (10))){
var inst_40566 = (state_40582[(2)]);
var state_40582__$1 = state_40582;
var statearr_40602_40626 = state_40582__$1;
(statearr_40602_40626[(2)] = inst_40566);

(statearr_40602_40626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40583 === (8))){
var inst_40546 = (state_40582[(8)]);
var inst_40555 = (state_40582[(11)]);
var tmp40599 = inst_40546;
var inst_40546__$1 = tmp40599;
var inst_40547 = inst_40555;
var state_40582__$1 = (function (){var statearr_40603 = state_40582;
(statearr_40603[(7)] = inst_40547);

(statearr_40603[(8)] = inst_40546__$1);

return statearr_40603;
})();
var statearr_40604_40627 = state_40582__$1;
(statearr_40604_40627[(2)] = null);

(statearr_40604_40627[(1)] = (2));


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
});})(c__31644__auto___40613,out))
;
return ((function (switch__31582__auto__,c__31644__auto___40613,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_40608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40608[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_40608[(1)] = (1));

return statearr_40608;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_40582){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40609){if((e40609 instanceof Object)){
var ex__31586__auto__ = e40609;
var statearr_40610_40628 = state_40582;
(statearr_40610_40628[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40629 = state_40582;
state_40582 = G__40629;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_40582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_40582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40613,out))
})();
var state__31646__auto__ = (function (){var statearr_40611 = f__31645__auto__.call(null);
(statearr_40611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40613);

return statearr_40611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40613,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__40631 = arguments.length;
switch (G__40631) {
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
var c__31644__auto___40704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31644__auto___40704,out){
return (function (){
var f__31645__auto__ = (function (){var switch__31582__auto__ = ((function (c__31644__auto___40704,out){
return (function (state_40673){
var state_val_40674 = (state_40673[(1)]);
if((state_val_40674 === (7))){
var inst_40669 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
var statearr_40675_40705 = state_40673__$1;
(statearr_40675_40705[(2)] = inst_40669);

(statearr_40675_40705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (1))){
var inst_40632 = [];
var inst_40633 = inst_40632;
var inst_40634 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40673__$1 = (function (){var statearr_40676 = state_40673;
(statearr_40676[(7)] = inst_40633);

(statearr_40676[(8)] = inst_40634);

return statearr_40676;
})();
var statearr_40677_40706 = state_40673__$1;
(statearr_40677_40706[(2)] = null);

(statearr_40677_40706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (4))){
var inst_40637 = (state_40673[(9)]);
var inst_40637__$1 = (state_40673[(2)]);
var inst_40638 = (inst_40637__$1 == null);
var inst_40639 = cljs.core.not.call(null,inst_40638);
var state_40673__$1 = (function (){var statearr_40678 = state_40673;
(statearr_40678[(9)] = inst_40637__$1);

return statearr_40678;
})();
if(inst_40639){
var statearr_40679_40707 = state_40673__$1;
(statearr_40679_40707[(1)] = (5));

} else {
var statearr_40680_40708 = state_40673__$1;
(statearr_40680_40708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (15))){
var inst_40663 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
var statearr_40681_40709 = state_40673__$1;
(statearr_40681_40709[(2)] = inst_40663);

(statearr_40681_40709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (13))){
var state_40673__$1 = state_40673;
var statearr_40682_40710 = state_40673__$1;
(statearr_40682_40710[(2)] = null);

(statearr_40682_40710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (6))){
var inst_40633 = (state_40673[(7)]);
var inst_40658 = inst_40633.length;
var inst_40659 = (inst_40658 > (0));
var state_40673__$1 = state_40673;
if(cljs.core.truth_(inst_40659)){
var statearr_40683_40711 = state_40673__$1;
(statearr_40683_40711[(1)] = (12));

} else {
var statearr_40684_40712 = state_40673__$1;
(statearr_40684_40712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (3))){
var inst_40671 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40673__$1,inst_40671);
} else {
if((state_val_40674 === (12))){
var inst_40633 = (state_40673[(7)]);
var inst_40661 = cljs.core.vec.call(null,inst_40633);
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40673__$1,(15),out,inst_40661);
} else {
if((state_val_40674 === (2))){
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40673__$1,(4),ch);
} else {
if((state_val_40674 === (11))){
var inst_40641 = (state_40673[(10)]);
var inst_40637 = (state_40673[(9)]);
var inst_40651 = (state_40673[(2)]);
var inst_40652 = [];
var inst_40653 = inst_40652.push(inst_40637);
var inst_40633 = inst_40652;
var inst_40634 = inst_40641;
var state_40673__$1 = (function (){var statearr_40685 = state_40673;
(statearr_40685[(11)] = inst_40651);

(statearr_40685[(12)] = inst_40653);

(statearr_40685[(7)] = inst_40633);

(statearr_40685[(8)] = inst_40634);

return statearr_40685;
})();
var statearr_40686_40713 = state_40673__$1;
(statearr_40686_40713[(2)] = null);

(statearr_40686_40713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (9))){
var inst_40633 = (state_40673[(7)]);
var inst_40649 = cljs.core.vec.call(null,inst_40633);
var state_40673__$1 = state_40673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40673__$1,(11),out,inst_40649);
} else {
if((state_val_40674 === (5))){
var inst_40641 = (state_40673[(10)]);
var inst_40634 = (state_40673[(8)]);
var inst_40637 = (state_40673[(9)]);
var inst_40641__$1 = f.call(null,inst_40637);
var inst_40642 = cljs.core._EQ_.call(null,inst_40641__$1,inst_40634);
var inst_40643 = cljs.core.keyword_identical_QMARK_.call(null,inst_40634,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40644 = (inst_40642) || (inst_40643);
var state_40673__$1 = (function (){var statearr_40687 = state_40673;
(statearr_40687[(10)] = inst_40641__$1);

return statearr_40687;
})();
if(cljs.core.truth_(inst_40644)){
var statearr_40688_40714 = state_40673__$1;
(statearr_40688_40714[(1)] = (8));

} else {
var statearr_40689_40715 = state_40673__$1;
(statearr_40689_40715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (14))){
var inst_40666 = (state_40673[(2)]);
var inst_40667 = cljs.core.async.close_BANG_.call(null,out);
var state_40673__$1 = (function (){var statearr_40691 = state_40673;
(statearr_40691[(13)] = inst_40666);

return statearr_40691;
})();
var statearr_40692_40716 = state_40673__$1;
(statearr_40692_40716[(2)] = inst_40667);

(statearr_40692_40716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (10))){
var inst_40656 = (state_40673[(2)]);
var state_40673__$1 = state_40673;
var statearr_40693_40717 = state_40673__$1;
(statearr_40693_40717[(2)] = inst_40656);

(statearr_40693_40717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40674 === (8))){
var inst_40641 = (state_40673[(10)]);
var inst_40633 = (state_40673[(7)]);
var inst_40637 = (state_40673[(9)]);
var inst_40646 = inst_40633.push(inst_40637);
var tmp40690 = inst_40633;
var inst_40633__$1 = tmp40690;
var inst_40634 = inst_40641;
var state_40673__$1 = (function (){var statearr_40694 = state_40673;
(statearr_40694[(14)] = inst_40646);

(statearr_40694[(7)] = inst_40633__$1);

(statearr_40694[(8)] = inst_40634);

return statearr_40694;
})();
var statearr_40695_40718 = state_40673__$1;
(statearr_40695_40718[(2)] = null);

(statearr_40695_40718[(1)] = (2));


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
});})(c__31644__auto___40704,out))
;
return ((function (switch__31582__auto__,c__31644__auto___40704,out){
return (function() {
var cljs$core$async$state_machine__31583__auto__ = null;
var cljs$core$async$state_machine__31583__auto____0 = (function (){
var statearr_40699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40699[(0)] = cljs$core$async$state_machine__31583__auto__);

(statearr_40699[(1)] = (1));

return statearr_40699;
});
var cljs$core$async$state_machine__31583__auto____1 = (function (state_40673){
while(true){
var ret_value__31584__auto__ = (function (){try{while(true){
var result__31585__auto__ = switch__31582__auto__.call(null,state_40673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31585__auto__;
}
break;
}
}catch (e40700){if((e40700 instanceof Object)){
var ex__31586__auto__ = e40700;
var statearr_40701_40719 = state_40673;
(statearr_40701_40719[(5)] = ex__31586__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40720 = state_40673;
state_40673 = G__40720;
continue;
} else {
return ret_value__31584__auto__;
}
break;
}
});
cljs$core$async$state_machine__31583__auto__ = function(state_40673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31583__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31583__auto____1.call(this,state_40673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31583__auto____0;
cljs$core$async$state_machine__31583__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31583__auto____1;
return cljs$core$async$state_machine__31583__auto__;
})()
;})(switch__31582__auto__,c__31644__auto___40704,out))
})();
var state__31646__auto__ = (function (){var statearr_40702 = f__31645__auto__.call(null);
(statearr_40702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31644__auto___40704);

return statearr_40702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31646__auto__);
});})(c__31644__auto___40704,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map