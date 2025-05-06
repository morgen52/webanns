(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("GWRAG", [], factory);
	else if(typeof exports === 'object')
		exports["GWRAG"] = factory();
	else
		root["GWRAG"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 126:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (e, t) {  true ? module.exports = t() : 0; })(this, function () {
    "use strict";
    var s = function (e, t) { return (s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t; } || function (e, t) { for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); })(e, t); };
    var _ = function () { return (_ = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)
        for (var i in t = arguments[n])
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }).apply(this, arguments); };
    function i(e, t, n) { if (n || 2 === arguments.length)
        for (var r, i = 0, o = t.length; i < o; i++)
            !r && i in t || ((r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i]); return e.concat(r || Array.prototype.slice.call(t)); }
    var f = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : __webpack_require__.g, x = Object.keys, k = Array.isArray;
    function a(t, n) { return "object" != typeof n || x(n).forEach(function (e) { t[e] = n[e]; }), t; }
    "undefined" == typeof Promise || f.Promise || (f.Promise = Promise);
    var c = Object.getPrototypeOf, n = {}.hasOwnProperty;
    function m(e, t) { return n.call(e, t); }
    function r(t, n) { "function" == typeof n && (n = n(c(t))), ("undefined" == typeof Reflect ? x : Reflect.ownKeys)(n).forEach(function (e) { l(t, e, n[e]); }); }
    var u = Object.defineProperty;
    function l(e, t, n, r) { u(e, t, a(n && m(n, "get") && "function" == typeof n.get ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r)); }
    function o(t) { return { from: function (e) { return t.prototype = Object.create(e.prototype), l(t.prototype, "constructor", t), { extend: r.bind(null, t.prototype) }; } }; }
    var h = Object.getOwnPropertyDescriptor;
    var d = [].slice;
    function b(e, t, n) { return d.call(e, t, n); }
    function p(e, t) { return t(e); }
    function y(e) { if (!e)
        throw new Error("Assertion Failed"); }
    function v(e) { f.setImmediate ? setImmediate(e) : setTimeout(e, 0); }
    function O(e, t) { if ("string" == typeof t && m(e, t))
        return e[t]; if (!t)
        return e; if ("string" != typeof t) {
        for (var n = [], r = 0, i = t.length; r < i; ++r) {
            var o = O(e, t[r]);
            n.push(o);
        }
        return n;
    } var a = t.indexOf("."); if (-1 !== a) {
        var u = e[t.substr(0, a)];
        return null == u ? void 0 : O(u, t.substr(a + 1));
    } }
    function P(e, t, n) { if (e && void 0 !== t && !("isFrozen" in Object && Object.isFrozen(e)))
        if ("string" != typeof t && "length" in t) {
            y("string" != typeof n && "length" in n);
            for (var r = 0, i = t.length; r < i; ++r)
                P(e, t[r], n[r]);
        }
        else {
            var o, a, u = t.indexOf(".");
            -1 !== u ? (o = t.substr(0, u), "" === (a = t.substr(u + 1)) ? void 0 === n ? k(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o] : e[o] = n : P(u = !(u = e[o]) || !m(e, o) ? e[o] = {} : u, a, n)) : void 0 === n ? k(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        } }
    function g(e) { var t, n = {}; for (t in e)
        m(e, t) && (n[t] = e[t]); return n; }
    var t = [].concat;
    function w(e) { return t.apply([], e); }
    var e = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(w([8, 16, 32, 64].map(function (t) { return ["Int", "Uint", "Float"].map(function (e) { return e + t + "Array"; }); }))).filter(function (e) { return f[e]; }), K = new Set(e.map(function (e) { return f[e]; }));
    var E = null;
    function S(e) { E = new WeakMap; e = function e(t) { if (!t || "object" != typeof t)
        return t; var n = E.get(t); if (n)
        return n; if (k(t)) {
        n = [], E.set(t, n);
        for (var r = 0, i = t.length; r < i; ++r)
            n.push(e(t[r]));
    }
    else if (K.has(t.constructor))
        n = t;
    else {
        var o, a = c(t);
        for (o in n = a === Object.prototype ? {} : Object.create(a), E.set(t, n), t)
            m(t, o) && (n[o] = e(t[o]));
    } return n; }(e); return E = null, e; }
    var j = {}.toString;
    function A(e) { return j.call(e).slice(8, -1); }
    var C = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator", T = "symbol" == typeof C ? function (e) { var t; return null != e && (t = e[C]) && t.apply(e); } : function () { return null; };
    function q(e, t) { t = e.indexOf(t); return 0 <= t && e.splice(t, 1), 0 <= t; }
    var D = {};
    function I(e) { var t, n, r, i; if (1 === arguments.length) {
        if (k(e))
            return e.slice();
        if (this === D && "string" == typeof e)
            return [e];
        if (i = T(e)) {
            for (n = []; !(r = i.next()).done;)
                n.push(r.value);
            return n;
        }
        if (null == e)
            return [e];
        if ("number" != typeof (t = e.length))
            return [e];
        for (n = new Array(t); t--;)
            n[t] = e[t];
        return n;
    } for (t = arguments.length, n = new Array(t); t--;)
        n[t] = arguments[t]; return n; }
    var B = "undefined" != typeof Symbol ? function (e) { return "AsyncFunction" === e[Symbol.toStringTag]; } : function () { return !1; }, R = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], F = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(R), M = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function N(e, t) { this.name = e, this.message = t; }
    function L(e, t) { return e + ". Errors: " + Object.keys(t).map(function (e) { return t[e].toString(); }).filter(function (e, t, n) { return n.indexOf(e) === t; }).join("\n"); }
    function U(e, t, n, r) { this.failures = t, this.failedKeys = r, this.successCount = n, this.message = L(e, t); }
    function V(e, t) { this.name = "BulkError", this.failures = Object.keys(t).map(function (e) { return t[e]; }), this.failuresByPos = t, this.message = L(e, this.failures); }
    o(N).from(Error).extend({ toString: function () { return this.name + ": " + this.message; } }), o(U).from(N), o(V).from(N);
    var z = F.reduce(function (e, t) { return e[t] = t + "Error", e; }, {}), W = N, Y = F.reduce(function (e, n) { var r = n + "Error"; function t(e, t) { this.name = r, e ? "string" == typeof e ? (this.message = "".concat(e).concat(t ? "\n " + t : ""), this.inner = t || null) : "object" == typeof e && (this.message = "".concat(e.name, " ").concat(e.message), this.inner = e) : (this.message = M[n] || r, this.inner = null); } return o(t).from(W), e[n] = t, e; }, {});
    Y.Syntax = SyntaxError, Y.Type = TypeError, Y.Range = RangeError;
    var $ = R.reduce(function (e, t) { return e[t + "Error"] = Y[t], e; }, {});
    var Q = F.reduce(function (e, t) { return -1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = Y[t]), e; }, {});
    function G() { }
    function X(e) { return e; }
    function H(t, n) { return null == t || t === X ? n : function (e) { return n(t(e)); }; }
    function J(e, t) { return function () { e.apply(this, arguments), t.apply(this, arguments); }; }
    function Z(i, o) { return i === G ? o : function () { var e = i.apply(this, arguments); void 0 !== e && (arguments[0] = e); var t = this.onsuccess, n = this.onerror; this.onsuccess = null, this.onerror = null; var r = o.apply(this, arguments); return t && (this.onsuccess = this.onsuccess ? J(t, this.onsuccess) : t), n && (this.onerror = this.onerror ? J(n, this.onerror) : n), void 0 !== r ? r : e; }; }
    function ee(n, r) { return n === G ? r : function () { n.apply(this, arguments); var e = this.onsuccess, t = this.onerror; this.onsuccess = this.onerror = null, r.apply(this, arguments), e && (this.onsuccess = this.onsuccess ? J(e, this.onsuccess) : e), t && (this.onerror = this.onerror ? J(t, this.onerror) : t); }; }
    function te(i, o) { return i === G ? o : function (e) { var t = i.apply(this, arguments); a(e, t); var n = this.onsuccess, r = this.onerror; this.onsuccess = null, this.onerror = null; e = o.apply(this, arguments); return n && (this.onsuccess = this.onsuccess ? J(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? J(r, this.onerror) : r), void 0 === t ? void 0 === e ? void 0 : e : a(t, e); }; }
    function ne(e, t) { return e === G ? t : function () { return !1 !== t.apply(this, arguments) && e.apply(this, arguments); }; }
    function re(i, o) { return i === G ? o : function () { var e = i.apply(this, arguments); if (e && "function" == typeof e.then) {
        for (var t = this, n = arguments.length, r = new Array(n); n--;)
            r[n] = arguments[n];
        return e.then(function () { return o.apply(t, r); });
    } return o.apply(this, arguments); }; }
    Q.ModifyError = U, Q.DexieError = N, Q.BulkError = V;
    var ie = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function oe(e) { ie = e; }
    var ae = {}, ue = 100, e = "undefined" == typeof Promise ? [] : function () { var e = Promise.resolve(); if ("undefined" == typeof crypto || !crypto.subtle)
        return [e, c(e), e]; var t = crypto.subtle.digest("SHA-512", new Uint8Array([0])); return [t, c(t), e]; }(), R = e[0], F = e[1], e = e[2], F = F && F.then, se = R && R.constructor, ce = !!e;
    var le = function (e, t) { be.push([e, t]), he && (queueMicrotask(Se), he = !1); }, fe = !0, he = !0, de = [], pe = [], ye = X, ve = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: G, pgp: !1, env: {}, finalize: G }, me = ve, be = [], ge = 0, we = [];
    function _e(e) { if ("object" != typeof this)
        throw new TypeError("Promises must be constructed via new"); this._listeners = [], this._lib = !1; var t = this._PSD = me; if ("function" != typeof e) {
        if (e !== ae)
            throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (!1 === this._state && Oe(this, this._value));
    } this._state = null, this._value = null, ++t.ref, function t(r, e) { try {
        e(function (n) { if (null === r._state) {
            if (n === r)
                throw new TypeError("A promise cannot be resolved with itself.");
            var e = r._lib && je();
            n && "function" == typeof n.then ? t(r, function (e, t) { n instanceof _e ? n._then(e, t) : n.then(e, t); }) : (r._state = !0, r._value = n, Pe(r)), e && Ae();
        } }, Oe.bind(null, r));
    }
    catch (e) {
        Oe(r, e);
    } }(this, e); }
    var xe = { get: function () { var u = me, t = Fe; function e(n, r) { var i = this, o = !u.global && (u !== me || t !== Fe), a = o && !Ue(), e = new _e(function (e, t) { Ke(i, new ke(Qe(n, u, o, a), Qe(r, u, o, a), e, t, u)); }); return this._consoleTask && (e._consoleTask = this._consoleTask), e; } return e.prototype = ae, e; }, set: function (e) { l(this, "then", e && e.prototype === ae ? xe : { get: function () { return e; }, set: xe.set }); } };
    function ke(e, t, n, r, i) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r, this.psd = i; }
    function Oe(e, t) { var n, r; pe.push(t), null === e._state && (n = e._lib && je(), t = ye(t), e._state = !1, e._value = t, r = e, de.some(function (e) { return e._value === r._value; }) || de.push(r), Pe(e), n && Ae()); }
    function Pe(e) { var t = e._listeners; e._listeners = []; for (var n = 0, r = t.length; n < r; ++n)
        Ke(e, t[n]); var i = e._PSD; --i.ref || i.finalize(), 0 === ge && (++ge, le(function () { 0 == --ge && Ce(); }, [])); }
    function Ke(e, t) { if (null !== e._state) {
        var n = e._state ? t.onFulfilled : t.onRejected;
        if (null === n)
            return (e._state ? t.resolve : t.reject)(e._value);
        ++t.psd.ref, ++ge, le(Ee, [n, e, t]);
    }
    else
        e._listeners.push(t); }
    function Ee(e, t, n) { try {
        var r, i = t._value;
        !t._state && pe.length && (pe = []), r = ie && t._consoleTask ? t._consoleTask.run(function () { return e(i); }) : e(i), t._state || -1 !== pe.indexOf(i) || function (e) { var t = de.length; for (; t;)
            if (de[--t]._value === e._value)
                return de.splice(t, 1); }(t), n.resolve(r);
    }
    catch (e) {
        n.reject(e);
    }
    finally {
        0 == --ge && Ce(), --n.psd.ref || n.psd.finalize();
    } }
    function Se() { $e(ve, function () { je() && Ae(); }); }
    function je() { var e = fe; return he = fe = !1, e; }
    function Ae() { var e, t, n; do {
        for (; 0 < be.length;)
            for (e = be, be = [], n = e.length, t = 0; t < n; ++t) {
                var r = e[t];
                r[0].apply(null, r[1]);
            }
    } while (0 < be.length); he = fe = !0; }
    function Ce() { var e = de; de = [], e.forEach(function (e) { e._PSD.onunhandled.call(null, e._value, e); }); for (var t = we.slice(0), n = t.length; n;)
        t[--n](); }
    function Te(e) { return new _e(ae, !1, e); }
    function qe(n, r) { var i = me; return function () { var e = je(), t = me; try {
        return We(i, !0), n.apply(this, arguments);
    }
    catch (e) {
        r && r(e);
    }
    finally {
        We(t, !1), e && Ae();
    } }; }
    r(_e.prototype, { then: xe, _then: function (e, t) { Ke(this, new ke(null, null, e, t, me)); }, catch: function (e) { if (1 === arguments.length)
            return this.then(null, e); var t = e, n = arguments[1]; return "function" == typeof t ? this.then(null, function (e) { return (e instanceof t ? n : Te)(e); }) : this.then(null, function (e) { return (e && e.name === t ? n : Te)(e); }); }, finally: function (t) { return this.then(function (e) { return _e.resolve(t()).then(function () { return e; }); }, function (e) { return _e.resolve(t()).then(function () { return Te(e); }); }); }, timeout: function (r, i) { var o = this; return r < 1 / 0 ? new _e(function (e, t) { var n = setTimeout(function () { return t(new Y.Timeout(i)); }, r); o.then(e, t).finally(clearTimeout.bind(null, n)); }) : this; } }), "undefined" != typeof Symbol && Symbol.toStringTag && l(_e.prototype, Symbol.toStringTag, "Dexie.Promise"), ve.env = Ye(), r(_e, { all: function () { var o = I.apply(null, arguments).map(Ve); return new _e(function (n, r) { 0 === o.length && n([]); var i = o.length; o.forEach(function (e, t) { return _e.resolve(e).then(function (e) { o[t] = e, --i || n(o); }, r); }); }); }, resolve: function (n) { return n instanceof _e ? n : n && "function" == typeof n.then ? new _e(function (e, t) { n.then(e, t); }) : new _e(ae, !0, n); }, reject: Te, race: function () { var e = I.apply(null, arguments).map(Ve); return new _e(function (t, n) { e.map(function (e) { return _e.resolve(e).then(t, n); }); }); }, PSD: { get: function () { return me; }, set: function (e) { return me = e; } }, totalEchoes: { get: function () { return Fe; } }, newPSD: Ne, usePSD: $e, scheduler: { get: function () { return le; }, set: function (e) { le = e; } }, rejectionMapper: { get: function () { return ye; }, set: function (e) { ye = e; } }, follow: function (i, n) { return new _e(function (e, t) { return Ne(function (n, r) { var e = me; e.unhandleds = [], e.onunhandled = r, e.finalize = J(function () { var t, e = this; t = function () { 0 === e.unhandleds.length ? n() : r(e.unhandleds[0]); }, we.push(function e() { t(), we.splice(we.indexOf(e), 1); }), ++ge, le(function () { 0 == --ge && Ce(); }, []); }, e.finalize), i(); }, n, e, t); }); } }), se && (se.allSettled && l(_e, "allSettled", function () { var e = I.apply(null, arguments).map(Ve); return new _e(function (n) { 0 === e.length && n([]); var r = e.length, i = new Array(r); e.forEach(function (e, t) { return _e.resolve(e).then(function (e) { return i[t] = { status: "fulfilled", value: e }; }, function (e) { return i[t] = { status: "rejected", reason: e }; }).then(function () { return --r || n(i); }); }); }); }), se.any && "undefined" != typeof AggregateError && l(_e, "any", function () { var e = I.apply(null, arguments).map(Ve); return new _e(function (n, r) { 0 === e.length && r(new AggregateError([])); var i = e.length, o = new Array(i); e.forEach(function (e, t) { return _e.resolve(e).then(function (e) { return n(e); }, function (e) { o[t] = e, --i || r(new AggregateError(o)); }); }); }); }), se.withResolvers && (_e.withResolvers = se.withResolvers));
    var De = { awaits: 0, echoes: 0, id: 0 }, Ie = 0, Be = [], Re = 0, Fe = 0, Me = 0;
    function Ne(e, t, n, r) { var i = me, o = Object.create(i); o.parent = i, o.ref = 0, o.global = !1, o.id = ++Me, ve.env, o.env = ce ? { Promise: _e, PromiseProp: { value: _e, configurable: !0, writable: !0 }, all: _e.all, race: _e.race, allSettled: _e.allSettled, any: _e.any, resolve: _e.resolve, reject: _e.reject } : {}, t && a(o, t), ++i.ref, o.finalize = function () { --this.parent.ref || this.parent.finalize(); }; r = $e(o, e, n, r); return 0 === o.ref && o.finalize(), r; }
    function Le() { return De.id || (De.id = ++Ie), ++De.awaits, De.echoes += ue, De.id; }
    function Ue() { return !!De.awaits && (0 == --De.awaits && (De.id = 0), De.echoes = De.awaits * ue, !0); }
    function Ve(e) { return De.echoes && e && e.constructor === se ? (Le(), e.then(function (e) { return Ue(), e; }, function (e) { return Ue(), Xe(e); })) : e; }
    function ze() { var e = Be[Be.length - 1]; Be.pop(), We(e, !1); }
    function We(e, t) { var n, r = me; (t ? !De.echoes || Re++ && e === me : !Re || --Re && e === me) || queueMicrotask(t ? function (e) { ++Fe, De.echoes && 0 != --De.echoes || (De.echoes = De.awaits = De.id = 0), Be.push(me), We(e, !0); }.bind(null, e) : ze), e !== me && (me = e, r === ve && (ve.env = Ye()), ce && (n = ve.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(f, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any)))); }
    function Ye() { var e = f.Promise; return ce ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {}; }
    function $e(e, t, n, r, i) { var o = me; try {
        return We(e, !0), t(n, r, i);
    }
    finally {
        We(o, !1);
    } }
    function Qe(t, n, r, i) { return "function" != typeof t ? t : function () { var e = me; r && Le(), We(n, !0); try {
        return t.apply(this, arguments);
    }
    finally {
        We(e, !1), i && queueMicrotask(Ue);
    } }; }
    function Ge(e) { Promise === se && 0 === De.echoes ? 0 === Re ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0); }
    -1 === ("" + F).indexOf("[native code]") && (Le = Ue = G);
    var Xe = _e.reject;
    var He = String.fromCharCode(65535), Je = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ze = "String expected.", et = [], tt = "__dbnames", nt = "readonly", rt = "readwrite";
    function it(e, t) { return e ? t ? function () { return e.apply(this, arguments) && t.apply(this, arguments); } : e : t; }
    var ot = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function at(t) { return "string" != typeof t || /\./.test(t) ? function (e) { return e; } : function (e) { return void 0 === e[t] && t in e && delete (e = S(e))[t], e; }; }
    function ut() { throw Y.Type(); }
    function st(e, t) { try {
        var n = ct(e), r = ct(t);
        if (n !== r)
            return "Array" === n ? 1 : "Array" === r ? -1 : "binary" === n ? 1 : "binary" === r ? -1 : "string" === n ? 1 : "string" === r ? -1 : "Date" === n ? 1 : "Date" !== r ? NaN : -1;
        switch (n) {
            case "number":
            case "Date":
            case "string": return t < e ? 1 : e < t ? -1 : 0;
            case "binary": return function (e, t) { for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o)
                if (e[o] !== t[o])
                    return e[o] < t[o] ? -1 : 1; return n === r ? 0 : n < r ? -1 : 1; }(lt(e), lt(t));
            case "Array": return function (e, t) { for (var n = e.length, r = t.length, i = n < r ? n : r, o = 0; o < i; ++o) {
                var a = st(e[o], t[o]);
                if (0 !== a)
                    return a;
            } return n === r ? 0 : n < r ? -1 : 1; }(e, t);
        }
    }
    catch (e) { } return NaN; }
    function ct(e) { var t = typeof e; if ("object" != t)
        return t; if (ArrayBuffer.isView(e))
        return "binary"; e = A(e); return "ArrayBuffer" === e ? "binary" : e; }
    function lt(e) { return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e); }
    var ft = (ht.prototype._trans = function (e, r, t) { var n = this._tx || me.trans, i = this.name, o = ie && "undefined" != typeof console && console.createTask && console.createTask("Dexie: ".concat("readonly" === e ? "read" : "write", " ").concat(this.name)); function a(e, t, n) { if (!n.schema[i])
        throw new Y.NotFound("Table " + i + " not part of transaction"); return r(n.idbtrans, n); } var u = je(); try {
        var s = n && n.db._novip === this.db._novip ? n === me.trans ? n._promise(e, a, t) : Ne(function () { return n._promise(e, a, t); }, { trans: n, transless: me.transless || me }) : function t(n, r, i, o) { if (n.idbdb && (n._state.openComplete || me.letThrough || n._vip)) {
            var a = n._createTransaction(r, i, n._dbSchema);
            try {
                a.create(), n._state.PR1398_maxLoop = 3;
            }
            catch (e) {
                return e.name === z.InvalidState && n.isOpen() && 0 < --n._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), n.close({ disableAutoOpen: !1 }), n.open().then(function () { return t(n, r, i, o); })) : Xe(e);
            }
            return a._promise(r, function (e, t) { return Ne(function () { return me.trans = a, o(e, t, a); }); }).then(function (e) { if ("readwrite" === r)
                try {
                    a.idbtrans.commit();
                }
                catch (e) { } return "readonly" === r ? e : a._completion.then(function () { return e; }); });
        } if (n._state.openComplete)
            return Xe(new Y.DatabaseClosed(n._state.dbOpenError)); if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen)
                return Xe(new Y.DatabaseClosed);
            n.open().catch(G);
        } return n._state.dbReadyPromise.then(function () { return t(n, r, i, o); }); }(this.db, e, [this.name], a);
        return o && (s._consoleTask = o, s = s.catch(function (e) { return console.trace(e), Xe(e); })), s;
    }
    finally {
        u && Ae();
    } }, ht.prototype.get = function (t, e) { var n = this; return t && t.constructor === Object ? this.where(t).first(e) : null == t ? Xe(new Y.Type("Invalid argument to Table.get()")) : this._trans("readonly", function (e) { return n.core.get({ trans: e, key: t }).then(function (e) { return n.hook.reading.fire(e); }); }).then(e); }, ht.prototype.where = function (o) { if ("string" == typeof o)
        return new this.db.WhereClause(this, o); if (k(o))
        return new this.db.WhereClause(this, "[".concat(o.join("+"), "]")); var n = x(o); if (1 === n.length)
        return this.where(n[0]).equals(o[n[0]]); var e = this.schema.indexes.concat(this.schema.primKey).filter(function (t) { if (t.compound && n.every(function (e) { return 0 <= t.keyPath.indexOf(e); })) {
        for (var e = 0; e < n.length; ++e)
            if (-1 === n.indexOf(t.keyPath[e]))
                return !1;
        return !0;
    } return !1; }).sort(function (e, t) { return e.keyPath.length - t.keyPath.length; })[0]; if (e && this.db._maxKey !== He) {
        var t = e.keyPath.slice(0, n.length);
        return this.where(t).equals(t.map(function (e) { return o[e]; }));
    } !e && ie && console.warn("The query ".concat(JSON.stringify(o), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]")); var a = this.schema.idxByName; function u(e, t) { return 0 === st(e, t); } var r = n.reduce(function (e, t) { var n = e[0], r = e[1], e = a[t], i = o[t]; return [n || e, n || !e ? it(r, e && e.multi ? function (e) { e = O(e, t); return k(e) && e.some(function (e) { return u(i, e); }); } : function (e) { return u(i, O(e, t)); }) : r]; }, [null, null]), t = r[0], r = r[1]; return t ? this.where(t.name).equals(o[t.keyPath]).filter(r) : e ? this.filter(r) : this.where(n).equals(""); }, ht.prototype.filter = function (e) { return this.toCollection().and(e); }, ht.prototype.count = function (e) { return this.toCollection().count(e); }, ht.prototype.offset = function (e) { return this.toCollection().offset(e); }, ht.prototype.limit = function (e) { return this.toCollection().limit(e); }, ht.prototype.each = function (e) { return this.toCollection().each(e); }, ht.prototype.toArray = function (e) { return this.toCollection().toArray(e); }, ht.prototype.toCollection = function () { return new this.db.Collection(new this.db.WhereClause(this)); }, ht.prototype.orderBy = function (e) { return new this.db.Collection(new this.db.WhereClause(this, k(e) ? "[".concat(e.join("+"), "]") : e)); }, ht.prototype.reverse = function () { return this.toCollection().reverse(); }, ht.prototype.mapToClass = function (r) { var e, t = this.db, n = this.name; function i() { return null !== e && e.apply(this, arguments) || this; } (this.schema.mappedClass = r).prototype instanceof ut && (function (e, t) { if ("function" != typeof t && null !== t)
        throw new TypeError("Class extends value " + String(t) + " is not a constructor or null"); function n() { this.constructor = e; } s(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n); }(i, e = r), Object.defineProperty(i.prototype, "db", { get: function () { return t; }, enumerable: !1, configurable: !0 }), i.prototype.table = function () { return n; }, r = i); for (var o = new Set, a = r.prototype; a; a = c(a))
        Object.getOwnPropertyNames(a).forEach(function (e) { return o.add(e); }); function u(e) { if (!e)
        return e; var t, n = Object.create(r.prototype); for (t in e)
        if (!o.has(t))
            try {
                n[t] = e[t];
            }
            catch (e) { } return n; } return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), r; }, ht.prototype.defineClass = function () { return this.mapToClass(function (e) { a(this, e); }); }, ht.prototype.add = function (t, n) { var r = this, e = this.schema.primKey, i = e.auto, o = e.keyPath, a = t; return o && i && (a = at(o)(t)), this._trans("readwrite", function (e) { return r.core.mutate({ trans: e, type: "add", keys: null != n ? [n] : null, values: [a] }); }).then(function (e) { return e.numFailures ? _e.reject(e.failures[0]) : e.lastResult; }).then(function (e) { if (o)
        try {
            P(t, o, e);
        }
        catch (e) { } return e; }); }, ht.prototype.update = function (e, t) { if ("object" != typeof e || k(e))
        return this.where(":id").equals(e).modify(t); e = O(e, this.schema.primKey.keyPath); return void 0 === e ? Xe(new Y.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t); }, ht.prototype.put = function (t, n) { var r = this, e = this.schema.primKey, i = e.auto, o = e.keyPath, a = t; return o && i && (a = at(o)(t)), this._trans("readwrite", function (e) { return r.core.mutate({ trans: e, type: "put", values: [a], keys: null != n ? [n] : null }); }).then(function (e) { return e.numFailures ? _e.reject(e.failures[0]) : e.lastResult; }).then(function (e) { if (o)
        try {
            P(t, o, e);
        }
        catch (e) { } return e; }); }, ht.prototype.delete = function (t) { var n = this; return this._trans("readwrite", function (e) { return n.core.mutate({ trans: e, type: "delete", keys: [t] }); }).then(function (e) { return e.numFailures ? _e.reject(e.failures[0]) : void 0; }); }, ht.prototype.clear = function () { var t = this; return this._trans("readwrite", function (e) { return t.core.mutate({ trans: e, type: "deleteRange", range: ot }); }).then(function (e) { return e.numFailures ? _e.reject(e.failures[0]) : void 0; }); }, ht.prototype.bulkGet = function (t) { var n = this; return this._trans("readonly", function (e) { return n.core.getMany({ keys: t, trans: e }).then(function (e) { return e.map(function (e) { return n.hook.reading.fire(e); }); }); }); }, ht.prototype.bulkAdd = function (r, e, t) { var o = this, a = Array.isArray(e) ? e : void 0, u = (t = t || (a ? void 0 : e)) ? t.allKeys : void 0; return this._trans("readwrite", function (e) { var t = o.schema.primKey, n = t.auto, t = t.keyPath; if (t && a)
        throw new Y.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys"); if (a && a.length !== r.length)
        throw new Y.InvalidArgument("Arguments objects and keys must have the same length"); var i = r.length, t = t && n ? r.map(at(t)) : r; return o.core.mutate({ trans: e, type: "add", keys: a, values: t, wantResults: u }).then(function (e) { var t = e.numFailures, n = e.results, r = e.lastResult, e = e.failures; if (0 === t)
        return u ? n : r; throw new V("".concat(o.name, ".bulkAdd(): ").concat(t, " of ").concat(i, " operations failed"), e); }); }); }, ht.prototype.bulkPut = function (r, e, t) { var o = this, a = Array.isArray(e) ? e : void 0, u = (t = t || (a ? void 0 : e)) ? t.allKeys : void 0; return this._trans("readwrite", function (e) { var t = o.schema.primKey, n = t.auto, t = t.keyPath; if (t && a)
        throw new Y.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys"); if (a && a.length !== r.length)
        throw new Y.InvalidArgument("Arguments objects and keys must have the same length"); var i = r.length, t = t && n ? r.map(at(t)) : r; return o.core.mutate({ trans: e, type: "put", keys: a, values: t, wantResults: u }).then(function (e) { var t = e.numFailures, n = e.results, r = e.lastResult, e = e.failures; if (0 === t)
        return u ? n : r; throw new V("".concat(o.name, ".bulkPut(): ").concat(t, " of ").concat(i, " operations failed"), e); }); }); }, ht.prototype.bulkUpdate = function (t) { var h = this, n = this.core, r = t.map(function (e) { return e.key; }), i = t.map(function (e) { return e.changes; }), d = []; return this._trans("readwrite", function (e) { return n.getMany({ trans: e, keys: r, cache: "clone" }).then(function (c) { var l = [], f = []; t.forEach(function (e, t) { var n = e.key, r = e.changes, i = c[t]; if (i) {
        for (var o = 0, a = Object.keys(r); o < a.length; o++) {
            var u = a[o], s = r[u];
            if (u === h.schema.primKey.keyPath) {
                if (0 !== st(s, n))
                    throw new Y.Constraint("Cannot update primary key in bulkUpdate()");
            }
            else
                P(i, u, s);
        }
        d.push(t), l.push(n), f.push(i);
    } }); var s = l.length; return n.mutate({ trans: e, type: "put", keys: l, values: f, updates: { keys: r, changeSpecs: i } }).then(function (e) { var t = e.numFailures, n = e.failures; if (0 === t)
        return s; for (var r = 0, i = Object.keys(n); r < i.length; r++) {
        var o, a = i[r], u = d[Number(a)];
        null != u && (o = n[a], delete n[a], n[u] = o);
    } throw new V("".concat(h.name, ".bulkUpdate(): ").concat(t, " of ").concat(s, " operations failed"), n); }); }); }); }, ht.prototype.bulkDelete = function (t) { var r = this, i = t.length; return this._trans("readwrite", function (e) { return r.core.mutate({ trans: e, type: "delete", keys: t }); }).then(function (e) { var t = e.numFailures, n = e.lastResult, e = e.failures; if (0 === t)
        return n; throw new V("".concat(r.name, ".bulkDelete(): ").concat(t, " of ").concat(i, " operations failed"), e); }); }, ht);
    function ht() { }
    function dt(i) { function t(e, t) { if (t) {
        for (var n = arguments.length, r = new Array(n - 1); --n;)
            r[n - 1] = arguments[n];
        return a[e].subscribe.apply(null, r), i;
    } if ("string" == typeof e)
        return a[e]; } var a = {}; t.addEventType = u; for (var e = 1, n = arguments.length; e < n; ++e)
        u(arguments[e]); return t; function u(e, n, r) { if ("object" != typeof e) {
        var i;
        n = n || ne;
        var o = { subscribers: [], fire: r = r || G, subscribe: function (e) { -1 === o.subscribers.indexOf(e) && (o.subscribers.push(e), o.fire = n(o.fire, e)); }, unsubscribe: function (t) { o.subscribers = o.subscribers.filter(function (e) { return e !== t; }), o.fire = o.subscribers.reduce(n, r); } };
        return a[e] = t[e] = o;
    } x(i = e).forEach(function (e) { var t = i[e]; if (k(t))
        u(e, i[e][0], i[e][1]);
    else {
        if ("asap" !== t)
            throw new Y.InvalidArgument("Invalid event config");
        var n = u(e, X, function () { for (var e = arguments.length, t = new Array(e); e--;)
            t[e] = arguments[e]; n.subscribers.forEach(function (e) { v(function () { e.apply(null, t); }); }); });
    } }); } }
    function pt(e, t) { return o(t).from({ prototype: e }), t; }
    function yt(e, t) { return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter); }
    function vt(e, t) { e.filter = it(e.filter, t); }
    function mt(e, t, n) { var r = e.replayFilter; e.replayFilter = r ? function () { return it(r(), t()); } : t, e.justLimit = n && !r; }
    function bt(e, t) { if (e.isPrimKey)
        return t.primaryKey; var n = t.getIndexByKeyPath(e.index); if (!n)
        throw new Y.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed"); return n; }
    function gt(e, t, n) { var r = bt(e, t.schema); return t.openCursor({ trans: n, values: !e.keysOnly, reverse: "prev" === e.dir, unique: !!e.unique, query: { index: r, range: e.range } }); }
    function wt(e, o, t, n) { var a = e.replayFilter ? it(e.filter, e.replayFilter()) : e.filter; if (e.or) {
        var u = {}, r = function (e, t, n) { var r, i; a && !a(t, n, function (e) { return t.stop(e); }, function (e) { return t.fail(e); }) || ("[object ArrayBuffer]" === (i = "" + (r = t.primaryKey)) && (i = "" + new Uint8Array(r)), m(u, i) || (u[i] = !0, o(e, t, n))); };
        return Promise.all([e.or._iterate(r, t), _t(gt(e, n, t), e.algorithm, r, !e.keysOnly && e.valueMapper)]);
    } return _t(gt(e, n, t), it(e.algorithm, a), o, !e.keysOnly && e.valueMapper); }
    function _t(e, r, i, o) { var a = qe(o ? function (e, t, n) { return i(o(e), t, n); } : i); return e.then(function (n) { if (n)
        return n.start(function () { var t = function () { return n.continue(); }; r && !r(n, function (e) { return t = e; }, function (e) { n.stop(e), t = G; }, function (e) { n.fail(e), t = G; }) || a(n.value, n, function (e) { return t = e; }), t(); }); }); }
    var xt = (kt.prototype.execute = function (e) { var t = this["@@propmod"]; if (void 0 !== t.add) {
        var n = t.add;
        if (k(n))
            return i(i([], k(e) ? e : [], !0), n, !0).sort();
        if ("number" == typeof n)
            return (Number(e) || 0) + n;
        if ("bigint" == typeof n)
            try {
                return BigInt(e) + n;
            }
            catch (e) {
                return BigInt(0) + n;
            }
        throw new TypeError("Invalid term ".concat(n));
    } if (void 0 !== t.remove) {
        var r = t.remove;
        if (k(r))
            return k(e) ? e.filter(function (e) { return !r.includes(e); }).sort() : [];
        if ("number" == typeof r)
            return Number(e) - r;
        if ("bigint" == typeof r)
            try {
                return BigInt(e) - r;
            }
            catch (e) {
                return BigInt(0) - r;
            }
        throw new TypeError("Invalid subtrahend ".concat(r));
    } n = null === (n = t.replacePrefix) || void 0 === n ? void 0 : n[0]; return n && "string" == typeof e && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e; }, kt);
    function kt(e) { this["@@propmod"] = e; }
    var Ot = (Pt.prototype._read = function (e, t) { var n = this._ctx; return n.error ? n.table._trans(null, Xe.bind(null, n.error)) : n.table._trans("readonly", e).then(t); }, Pt.prototype._write = function (e) { var t = this._ctx; return t.error ? t.table._trans(null, Xe.bind(null, t.error)) : t.table._trans("readwrite", e, "locked"); }, Pt.prototype._addAlgorithm = function (e) { var t = this._ctx; t.algorithm = it(t.algorithm, e); }, Pt.prototype._iterate = function (e, t) { return wt(this._ctx, e, t, this._ctx.table.core); }, Pt.prototype.clone = function (e) { var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx); return e && a(n, e), t._ctx = n, t; }, Pt.prototype.raw = function () { return this._ctx.valueMapper = null, this; }, Pt.prototype.each = function (t) { var n = this._ctx; return this._read(function (e) { return wt(n, t, e, n.table.core); }); }, Pt.prototype.count = function (e) { var i = this; return this._read(function (e) { var t = i._ctx, n = t.table.core; if (yt(t, !0))
        return n.count({ trans: e, query: { index: bt(t, n.schema), range: t.range } }).then(function (e) { return Math.min(e, t.limit); }); var r = 0; return wt(t, function () { return ++r, !1; }, e, n).then(function () { return r; }); }).then(e); }, Pt.prototype.sortBy = function (e, t) { var n = e.split(".").reverse(), r = n[0], i = n.length - 1; function o(e, t) { return t ? o(e[n[t]], t - 1) : e[r]; } var a = "next" === this._ctx.dir ? 1 : -1; function u(e, t) { return st(o(e, i), o(t, i)) * a; } return this.toArray(function (e) { return e.sort(u); }).then(t); }, Pt.prototype.toArray = function (e) { var o = this; return this._read(function (e) { var t = o._ctx; if ("next" === t.dir && yt(t, !0) && 0 < t.limit) {
        var n = t.valueMapper, r = bt(t, t.table.core.schema);
        return t.table.core.query({ trans: e, limit: t.limit, values: !0, query: { index: r, range: t.range } }).then(function (e) { e = e.result; return n ? e.map(n) : e; });
    } var i = []; return wt(t, function (e) { return i.push(e); }, e, t.table.core).then(function () { return i; }); }, e); }, Pt.prototype.offset = function (t) { var e = this._ctx; return t <= 0 || (e.offset += t, yt(e) ? mt(e, function () { var n = t; return function (e, t) { return 0 === n || (1 === n ? --n : t(function () { e.advance(n), n = 0; }), !1); }; }) : mt(e, function () { var e = t; return function () { return --e < 0; }; })), this; }, Pt.prototype.limit = function (e) { return this._ctx.limit = Math.min(this._ctx.limit, e), mt(this._ctx, function () { var r = e; return function (e, t, n) { return --r <= 0 && t(n), 0 <= r; }; }, !0), this; }, Pt.prototype.until = function (r, i) { return vt(this._ctx, function (e, t, n) { return !r(e.value) || (t(n), i); }), this; }, Pt.prototype.first = function (e) { return this.limit(1).toArray(function (e) { return e[0]; }).then(e); }, Pt.prototype.last = function (e) { return this.reverse().first(e); }, Pt.prototype.filter = function (t) { var e; return vt(this._ctx, function (e) { return t(e.value); }), (e = this._ctx).isMatch = it(e.isMatch, t), this; }, Pt.prototype.and = function (e) { return this.filter(e); }, Pt.prototype.or = function (e) { return new this.db.WhereClause(this._ctx.table, e, this); }, Pt.prototype.reverse = function () { return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this; }, Pt.prototype.desc = function () { return this.reverse(); }, Pt.prototype.eachKey = function (n) { var e = this._ctx; return e.keysOnly = !e.isMatch, this.each(function (e, t) { n(t.key, t); }); }, Pt.prototype.eachUniqueKey = function (e) { return this._ctx.unique = "unique", this.eachKey(e); }, Pt.prototype.eachPrimaryKey = function (n) { var e = this._ctx; return e.keysOnly = !e.isMatch, this.each(function (e, t) { n(t.primaryKey, t); }); }, Pt.prototype.keys = function (e) { var t = this._ctx; t.keysOnly = !t.isMatch; var n = []; return this.each(function (e, t) { n.push(t.key); }).then(function () { return n; }).then(e); }, Pt.prototype.primaryKeys = function (e) { var n = this._ctx; if ("next" === n.dir && yt(n, !0) && 0 < n.limit)
        return this._read(function (e) { var t = bt(n, n.table.core.schema); return n.table.core.query({ trans: e, values: !1, limit: n.limit, query: { index: t, range: n.range } }); }).then(function (e) { return e.result; }).then(e); n.keysOnly = !n.isMatch; var r = []; return this.each(function (e, t) { r.push(t.primaryKey); }).then(function () { return r; }).then(e); }, Pt.prototype.uniqueKeys = function (e) { return this._ctx.unique = "unique", this.keys(e); }, Pt.prototype.firstKey = function (e) { return this.limit(1).keys(function (e) { return e[0]; }).then(e); }, Pt.prototype.lastKey = function (e) { return this.reverse().firstKey(e); }, Pt.prototype.distinct = function () { var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index]; if (!e || !e.multi)
        return this; var n = {}; return vt(this._ctx, function (e) { var t = e.primaryKey.toString(), e = m(n, t); return n[t] = !0, !e; }), this; }, Pt.prototype.modify = function (w) { var n = this, r = this._ctx; return this._write(function (d) { var a, u, p; p = "function" == typeof w ? w : (a = x(w), u = a.length, function (e) { for (var t = !1, n = 0; n < u; ++n) {
        var r = a[n], i = w[r], o = O(e, r);
        i instanceof xt ? (P(e, r, i.execute(o)), t = !0) : o !== i && (P(e, r, i), t = !0);
    } return t; }); var y = r.table.core, e = y.schema.primaryKey, v = e.outbound, m = e.extractKey, b = 200, e = n.db._options.modifyChunkSize; e && (b = "object" == typeof e ? e[y.name] || e["*"] || 200 : e); function g(e, t) { var n = t.failures, t = t.numFailures; c += e - t; for (var r = 0, i = x(n); r < i.length; r++) {
        var o = i[r];
        s.push(n[o]);
    } } var s = [], c = 0, t = []; return n.clone().primaryKeys().then(function (l) { function f(s) { var c = Math.min(b, l.length - s); return y.getMany({ trans: d, keys: l.slice(s, s + c), cache: "immutable" }).then(function (e) { for (var n = [], t = [], r = v ? [] : null, i = [], o = 0; o < c; ++o) {
        var a = e[o], u = { value: S(a), primKey: l[s + o] };
        !1 !== p.call(u, u.value, u) && (null == u.value ? i.push(l[s + o]) : v || 0 === st(m(a), m(u.value)) ? (t.push(u.value), v && r.push(l[s + o])) : (i.push(l[s + o]), n.push(u.value)));
    } return Promise.resolve(0 < n.length && y.mutate({ trans: d, type: "add", values: n }).then(function (e) { for (var t in e.failures)
        i.splice(parseInt(t), 1); g(n.length, e); })).then(function () { return (0 < t.length || h && "object" == typeof w) && y.mutate({ trans: d, type: "put", keys: r, values: t, criteria: h, changeSpec: "function" != typeof w && w, isAdditionalChunk: 0 < s }).then(function (e) { return g(t.length, e); }); }).then(function () { return (0 < i.length || h && w === Kt) && y.mutate({ trans: d, type: "delete", keys: i, criteria: h, isAdditionalChunk: 0 < s }).then(function (e) { return g(i.length, e); }); }).then(function () { return l.length > s + c && f(s + b); }); }); } var h = yt(r) && r.limit === 1 / 0 && ("function" != typeof w || w === Kt) && { index: r.index, range: r.range }; return f(0).then(function () { if (0 < s.length)
        throw new U("Error modifying one or more objects", s, c, t); return l.length; }); }); }); }, Pt.prototype.delete = function () { var i = this._ctx, n = i.range; return yt(i) && (i.isPrimKey || 3 === n.type) ? this._write(function (e) { var t = i.table.core.schema.primaryKey, r = n; return i.table.core.count({ trans: e, query: { index: t, range: r } }).then(function (n) { return i.table.core.mutate({ trans: e, type: "deleteRange", range: r }).then(function (e) { var t = e.failures; e.lastResult, e.results; e = e.numFailures; if (e)
        throw new U("Could not delete some values", Object.keys(t).map(function (e) { return t[e]; }), n - e); return n - e; }); }); }) : this.modify(Kt); }, Pt);
    function Pt() { }
    var Kt = function (e, t) { return t.value = null; };
    function Et(e, t) { return e < t ? -1 : e === t ? 0 : 1; }
    function St(e, t) { return t < e ? -1 : e === t ? 0 : 1; }
    function jt(e, t, n) { e = e instanceof Dt ? new e.Collection(e) : e; return e._ctx.error = new (n || TypeError)(t), e; }
    function At(e) { return new e.Collection(e, function () { return qt(""); }).limit(0); }
    function Ct(e, s, n, r) { var i, c, l, f, h, d, p, y = n.length; if (!n.every(function (e) { return "string" == typeof e; }))
        return jt(e, Ze); function t(e) { i = "next" === e ? function (e) { return e.toUpperCase(); } : function (e) { return e.toLowerCase(); }, c = "next" === e ? function (e) { return e.toLowerCase(); } : function (e) { return e.toUpperCase(); }, l = "next" === e ? Et : St; var t = n.map(function (e) { return { lower: c(e), upper: i(e) }; }).sort(function (e, t) { return l(e.lower, t.lower); }); f = t.map(function (e) { return e.upper; }), h = t.map(function (e) { return e.lower; }), p = "next" === (d = e) ? "" : r; } t("next"); e = new e.Collection(e, function () { return Tt(f[0], h[y - 1] + r); }); e._ondirectionchange = function (e) { t(e); }; var v = 0; return e._addAlgorithm(function (e, t, n) { var r = e.key; if ("string" != typeof r)
        return !1; var i = c(r); if (s(i, h, v))
        return !0; for (var o = null, a = v; a < y; ++a) {
        var u = function (e, t, n, r, i, o) { for (var a = Math.min(e.length, r.length), u = -1, s = 0; s < a; ++s) {
            var c = t[s];
            if (c !== r[s])
                return i(e[s], n[s]) < 0 ? e.substr(0, s) + n[s] + n.substr(s + 1) : i(e[s], r[s]) < 0 ? e.substr(0, s) + r[s] + n.substr(s + 1) : 0 <= u ? e.substr(0, u) + t[u] + n.substr(u + 1) : null;
            i(e[s], c) < 0 && (u = s);
        } return a < r.length && "next" === o ? e + n.substr(e.length) : a < e.length && "prev" === o ? e.substr(0, n.length) : u < 0 ? null : e.substr(0, u) + r[u] + n.substr(u + 1); }(r, i, f[a], h[a], l, d);
        null === u && null === o ? v = a + 1 : (null === o || 0 < l(o, u)) && (o = u);
    } return t(null !== o ? function () { e.continue(o + p); } : n), !1; }), e; }
    function Tt(e, t, n, r) { return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r }; }
    function qt(e) { return { type: 1, lower: e, upper: e }; }
    var Dt = (Object.defineProperty(It.prototype, "Collection", { get: function () { return this._ctx.table.db.Collection; }, enumerable: !1, configurable: !0 }), It.prototype.between = function (e, t, n, r) { n = !1 !== n, r = !0 === r; try {
        return 0 < this._cmp(e, t) || 0 === this._cmp(e, t) && (n || r) && (!n || !r) ? At(this) : new this.Collection(this, function () { return Tt(e, t, !n, !r); });
    }
    catch (e) {
        return jt(this, Je);
    } }, It.prototype.equals = function (e) { return null == e ? jt(this, Je) : new this.Collection(this, function () { return qt(e); }); }, It.prototype.above = function (e) { return null == e ? jt(this, Je) : new this.Collection(this, function () { return Tt(e, void 0, !0); }); }, It.prototype.aboveOrEqual = function (e) { return null == e ? jt(this, Je) : new this.Collection(this, function () { return Tt(e, void 0, !1); }); }, It.prototype.below = function (e) { return null == e ? jt(this, Je) : new this.Collection(this, function () { return Tt(void 0, e, !1, !0); }); }, It.prototype.belowOrEqual = function (e) { return null == e ? jt(this, Je) : new this.Collection(this, function () { return Tt(void 0, e); }); }, It.prototype.startsWith = function (e) { return "string" != typeof e ? jt(this, Ze) : this.between(e, e + He, !0, !0); }, It.prototype.startsWithIgnoreCase = function (e) { return "" === e ? this.startsWith(e) : Ct(this, function (e, t) { return 0 === e.indexOf(t[0]); }, [e], He); }, It.prototype.equalsIgnoreCase = function (e) { return Ct(this, function (e, t) { return e === t[0]; }, [e], ""); }, It.prototype.anyOfIgnoreCase = function () { var e = I.apply(D, arguments); return 0 === e.length ? At(this) : Ct(this, function (e, t) { return -1 !== t.indexOf(e); }, e, ""); }, It.prototype.startsWithAnyOfIgnoreCase = function () { var e = I.apply(D, arguments); return 0 === e.length ? At(this) : Ct(this, function (t, e) { return e.some(function (e) { return 0 === t.indexOf(e); }); }, e, He); }, It.prototype.anyOf = function () { var t = this, i = I.apply(D, arguments), o = this._cmp; try {
        i.sort(o);
    }
    catch (e) {
        return jt(this, Je);
    } if (0 === i.length)
        return At(this); var e = new this.Collection(this, function () { return Tt(i[0], i[i.length - 1]); }); e._ondirectionchange = function (e) { o = "next" === e ? t._ascending : t._descending, i.sort(o); }; var a = 0; return e._addAlgorithm(function (e, t, n) { for (var r = e.key; 0 < o(r, i[a]);)
        if (++a === i.length)
            return t(n), !1; return 0 === o(r, i[a]) || (t(function () { e.continue(i[a]); }), !1); }), e; }, It.prototype.notEqual = function (e) { return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 }); }, It.prototype.noneOf = function () { var e = I.apply(D, arguments); if (0 === e.length)
        return new this.Collection(this); try {
        e.sort(this._ascending);
    }
    catch (e) {
        return jt(this, Je);
    } var t = e.reduce(function (e, t) { return e ? e.concat([[e[e.length - 1][1], t]]) : [[-1 / 0, t]]; }, null); return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 }); }, It.prototype.inAnyRange = function (e, t) { var o = this, a = this._cmp, u = this._ascending, n = this._descending, s = this._min, c = this._max; if (0 === e.length)
        return At(this); if (!e.every(function (e) { return void 0 !== e[0] && void 0 !== e[1] && u(e[0], e[1]) <= 0; }))
        return jt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Y.InvalidArgument); var r = !t || !1 !== t.includeLowers, i = t && !0 === t.includeUppers; var l, f = u; function h(e, t) { return f(e[0], t[0]); } try {
        (l = e.reduce(function (e, t) { for (var n = 0, r = e.length; n < r; ++n) {
            var i = e[n];
            if (a(t[0], i[1]) < 0 && 0 < a(t[1], i[0])) {
                i[0] = s(i[0], t[0]), i[1] = c(i[1], t[1]);
                break;
            }
        } return n === r && e.push(t), e; }, [])).sort(h);
    }
    catch (e) {
        return jt(this, Je);
    } var d = 0, p = i ? function (e) { return 0 < u(e, l[d][1]); } : function (e) { return 0 <= u(e, l[d][1]); }, y = r ? function (e) { return 0 < n(e, l[d][0]); } : function (e) { return 0 <= n(e, l[d][0]); }; var v = p, e = new this.Collection(this, function () { return Tt(l[0][0], l[l.length - 1][1], !r, !i); }); return e._ondirectionchange = function (e) { f = "next" === e ? (v = p, u) : (v = y, n), l.sort(h); }, e._addAlgorithm(function (e, t, n) { for (var r, i = e.key; v(i);)
        if (++d === l.length)
            return t(n), !1; return !p(r = i) && !y(r) || (0 === o._cmp(i, l[d][1]) || 0 === o._cmp(i, l[d][0]) || t(function () { f === u ? e.continue(l[d][0]) : e.continue(l[d][1]); }), !1); }), e; }, It.prototype.startsWithAnyOf = function () { var e = I.apply(D, arguments); return e.every(function (e) { return "string" == typeof e; }) ? 0 === e.length ? At(this) : this.inAnyRange(e.map(function (e) { return [e, e + He]; })) : jt(this, "startsWithAnyOf() only works with strings"); }, It);
    function It() { }
    function Bt(t) { return qe(function (e) { return Rt(e), t(e.target.error), !1; }); }
    function Rt(e) { e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(); }
    var Ft = "storagemutated", Mt = "x-storagemutated-1", Nt = dt(null, Ft), Lt = (Ut.prototype._lock = function () { return y(!me.global), ++this._reculock, 1 !== this._reculock || me.global || (me.lockOwnerFor = this), this; }, Ut.prototype._unlock = function () { if (y(!me.global), 0 == --this._reculock)
        for (me.global || (me.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked();) {
            var e = this._blockedFuncs.shift();
            try {
                $e(e[1], e[0]);
            }
            catch (e) { }
        } return this; }, Ut.prototype._locked = function () { return this._reculock && me.lockOwnerFor !== this; }, Ut.prototype.create = function (t) { var n = this; if (!this.mode)
        return this; var e = this.db.idbdb, r = this.db._state.dbOpenError; if (y(!this.idbtrans), !t && !e)
        switch (r && r.name) {
            case "DatabaseClosedError": throw new Y.DatabaseClosed(r);
            case "MissingAPIError": throw new Y.MissingAPI(r.message, r);
            default: throw new Y.OpenFailed(r);
        } if (!this.active)
        throw new Y.TransactionInactive; return y(null === this._completion._state), (t = this.idbtrans = t || (this.db.core || e).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = qe(function (e) { Rt(e), n._reject(t.error); }), t.onabort = qe(function (e) { Rt(e), n.active && n._reject(new Y.Abort(t.error)), n.active = !1, n.on("abort").fire(e); }), t.oncomplete = qe(function () { n.active = !1, n._resolve(), "mutatedParts" in t && Nt.storagemutated.fire(t.mutatedParts); }), this; }, Ut.prototype._promise = function (n, r, i) { var o = this; if ("readwrite" === n && "readwrite" !== this.mode)
        return Xe(new Y.ReadOnly("Transaction is readonly")); if (!this.active)
        return Xe(new Y.TransactionInactive); if (this._locked())
        return new _e(function (e, t) { o._blockedFuncs.push([function () { o._promise(n, r, i).then(e, t); }, me]); }); if (i)
        return Ne(function () { var e = new _e(function (e, t) { o._lock(); var n = r(e, t, o); n && n.then && n.then(e, t); }); return e.finally(function () { return o._unlock(); }), e._lib = !0, e; }); var e = new _e(function (e, t) { var n = r(e, t, o); n && n.then && n.then(e, t); }); return e._lib = !0, e; }, Ut.prototype._root = function () { return this.parent ? this.parent._root() : this; }, Ut.prototype.waitFor = function (e) { var t, r = this._root(), i = _e.resolve(e); r._waitingFor ? r._waitingFor = r._waitingFor.then(function () { return i; }) : (r._waitingFor = i, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function e() { for (++r._spinCount; r._waitingQueue.length;)
        r._waitingQueue.shift()(); r._waitingFor && (t.get(-1 / 0).onsuccess = e); }()); var o = r._waitingFor; return new _e(function (t, n) { i.then(function (e) { return r._waitingQueue.push(qe(t.bind(null, e))); }, function (e) { return r._waitingQueue.push(qe(n.bind(null, e))); }).finally(function () { r._waitingFor === o && (r._waitingFor = null); }); }); }, Ut.prototype.abort = function () { this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new Y.Abort)); }, Ut.prototype.table = function (e) { var t = this._memoizedTables || (this._memoizedTables = {}); if (m(t, e))
        return t[e]; var n = this.schema[e]; if (!n)
        throw new Y.NotFound("Table " + e + " not part of transaction"); n = new this.db.Table(e, n, this); return n.core = this.db.core.table(e), t[e] = n; }, Ut);
    function Ut() { }
    function Vt(e, t, n, r, i, o, a) { return { name: e, keyPath: t, unique: n, multi: r, auto: i, compound: o, src: (n && !a ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + zt(t) }; }
    function zt(e) { return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : ""; }
    function Wt(e, t, n) { return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function (e) { return [e.name, e]; }, n.reduce(function (e, t, n) { n = r(t, n); return n && (e[n[0]] = n[1]), e; }, {})) }; var r; }
    var Yt = function (e) { try {
        return e.only([[]]), Yt = function () { return [[]]; }, [[]];
    }
    catch (e) {
        return Yt = function () { return He; }, He;
    } };
    function $t(t) { return null == t ? function () { } : "string" == typeof t ? 1 === (n = t).split(".").length ? function (e) { return e[n]; } : function (e) { return O(e, n); } : function (e) { return O(e, t); }; var n; }
    function Qt(e) { return [].slice.call(e); }
    var Gt = 0;
    function Xt(e) { return null == e ? ":id" : "string" == typeof e ? e : "[".concat(e.join("+"), "]"); }
    function Ht(e, i, t) { function _(e) { if (3 === e.type)
        return null; if (4 === e.type)
        throw new Error("Cannot convert never type to IDBKeyRange"); var t = e.lower, n = e.upper, r = e.lowerOpen, e = e.upperOpen; return void 0 === t ? void 0 === n ? null : i.upperBound(n, !!e) : void 0 === n ? i.lowerBound(t, !!r) : i.bound(t, n, !!r, !!e); } function n(e) { var h, w = e.name; return { name: w, schema: e, mutate: function (e) { var y = e.trans, v = e.type, m = e.keys, b = e.values, g = e.range; return new Promise(function (t, e) { t = qe(t); var n = y.objectStore(w), r = null == n.keyPath, i = "put" === v || "add" === v; if (!i && "delete" !== v && "deleteRange" !== v)
            throw new Error("Invalid operation type: " + v); var o, a = (m || b || { length: 1 }).length; if (m && b && m.length !== b.length)
            throw new Error("Given keys array must have same length as given values array."); if (0 === a)
            return t({ numFailures: 0, failures: {}, results: [], lastResult: void 0 }); function u(e) { ++l, Rt(e); } var s = [], c = [], l = 0; if ("deleteRange" === v) {
            if (4 === g.type)
                return t({ numFailures: l, failures: c, results: [], lastResult: void 0 });
            3 === g.type ? s.push(o = n.clear()) : s.push(o = n.delete(_(g)));
        }
        else {
            var r = i ? r ? [b, m] : [b, null] : [m, null], f = r[0], h = r[1];
            if (i)
                for (var d = 0; d < a; ++d)
                    s.push(o = h && void 0 !== h[d] ? n[v](f[d], h[d]) : n[v](f[d])), o.onerror = u;
            else
                for (d = 0; d < a; ++d)
                    s.push(o = n[v](f[d])), o.onerror = u;
        } function p(e) { e = e.target.result, s.forEach(function (e, t) { return null != e.error && (c[t] = e.error); }), t({ numFailures: l, failures: c, results: "delete" === v ? m : s.map(function (e) { return e.result; }), lastResult: e }); } o.onerror = function (e) { u(e), p(e); }, o.onsuccess = p; }); }, getMany: function (e) { var f = e.trans, h = e.keys; return new Promise(function (t, e) { t = qe(t); for (var n, r = f.objectStore(w), i = h.length, o = new Array(i), a = 0, u = 0, s = function (e) { e = e.target; o[e._pos] = e.result, ++u === a && t(o); }, c = Bt(e), l = 0; l < i; ++l)
            null != h[l] && ((n = r.get(h[l]))._pos = l, n.onsuccess = s, n.onerror = c, ++a); 0 === a && t(o); }); }, get: function (e) { var r = e.trans, i = e.key; return new Promise(function (t, e) { t = qe(t); var n = r.objectStore(w).get(i); n.onsuccess = function (e) { return t(e.target.result); }, n.onerror = Bt(e); }); }, query: (h = s, function (f) { return new Promise(function (n, e) { n = qe(n); var r, i, o, t = f.trans, a = f.values, u = f.limit, s = f.query, c = u === 1 / 0 ? void 0 : u, l = s.index, s = s.range, t = t.objectStore(w), l = l.isPrimaryKey ? t : t.index(l.name), s = _(s); if (0 === u)
            return n({ result: [] }); h ? ((c = a ? l.getAll(s, c) : l.getAllKeys(s, c)).onsuccess = function (e) { return n({ result: e.target.result }); }, c.onerror = Bt(e)) : (r = 0, i = !a && "openKeyCursor" in l ? l.openKeyCursor(s) : l.openCursor(s), o = [], i.onsuccess = function (e) { var t = i.result; return t ? (o.push(a ? t.value : t.primaryKey), ++r === u ? n({ result: o }) : void t.continue()) : n({ result: o }); }, i.onerror = Bt(e)); }); }), openCursor: function (e) { var c = e.trans, o = e.values, a = e.query, u = e.reverse, l = e.unique; return new Promise(function (t, n) { t = qe(t); var e = a.index, r = a.range, i = c.objectStore(w), i = e.isPrimaryKey ? i : i.index(e.name), e = u ? l ? "prevunique" : "prev" : l ? "nextunique" : "next", s = !o && "openKeyCursor" in i ? i.openKeyCursor(_(r), e) : i.openCursor(_(r), e); s.onerror = Bt(n), s.onsuccess = qe(function (e) { var r, i, o, a, u = s.result; u ? (u.___id = ++Gt, u.done = !1, r = u.continue.bind(u), i = (i = u.continuePrimaryKey) && i.bind(u), o = u.advance.bind(u), a = function () { throw new Error("Cursor not stopped"); }, u.trans = c, u.stop = u.continue = u.continuePrimaryKey = u.advance = function () { throw new Error("Cursor not started"); }, u.fail = qe(n), u.next = function () { var e = this, t = 1; return this.start(function () { return t-- ? e.continue() : e.stop(); }).then(function () { return e; }); }, u.start = function (e) { function t() { if (s.result)
            try {
                e();
            }
            catch (e) {
                u.fail(e);
            }
        else
            u.done = !0, u.start = function () { throw new Error("Cursor behind last entry"); }, u.stop(); } var n = new Promise(function (t, e) { t = qe(t), s.onerror = Bt(e), u.fail = e, u.stop = function (e) { u.stop = u.continue = u.continuePrimaryKey = u.advance = a, t(e); }; }); return s.onsuccess = qe(function (e) { s.onsuccess = t, t(); }), u.continue = r, u.continuePrimaryKey = i, u.advance = o, t(), n; }, t(u)) : t(null); }, n); }); }, count: function (e) { var t = e.query, i = e.trans, o = t.index, a = t.range; return new Promise(function (t, e) { var n = i.objectStore(w), r = o.isPrimaryKey ? n : n.index(o.name), n = _(a), r = n ? r.count(n) : r.count(); r.onsuccess = qe(function (e) { return t(e.target.result); }), r.onerror = Bt(e); }); } }; } var r, o, a, u = (o = t, a = Qt((r = e).objectStoreNames), { schema: { name: r.name, tables: a.map(function (e) { return o.objectStore(e); }).map(function (t) { var e = t.keyPath, n = t.autoIncrement, r = k(e), i = {}, n = { name: t.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: null == e, compound: r, keyPath: e, autoIncrement: n, unique: !0, extractKey: $t(e) }, indexes: Qt(t.indexNames).map(function (e) { return t.index(e); }).map(function (e) { var t = e.name, n = e.unique, r = e.multiEntry, e = e.keyPath, r = { name: t, compound: k(e), keyPath: e, unique: n, multiEntry: r, extractKey: $t(e) }; return i[Xt(e)] = r; }), getIndexByKeyPath: function (e) { return i[Xt(e)]; } }; return i[":id"] = n.primaryKey, null != e && (i[Xt(e)] = n.primaryKey), n; }) }, hasGetAll: 0 < a.length && "getAll" in o.objectStore(a[0]) && !("undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), t = u.schema, s = u.hasGetAll, u = t.tables.map(n), c = {}; return u.forEach(function (e) { return c[e.name] = e; }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function (e) { if (!c[e])
            throw new Error("Table '".concat(e, "' not found")); return c[e]; }, MIN_KEY: -1 / 0, MAX_KEY: Yt(i), schema: t }; }
    function Jt(e, t, n, r) { var i = n.IDBKeyRange; return n.indexedDB, { dbcore: (r = Ht(t, i, r), e.dbcore.reduce(function (e, t) { t = t.create; return _(_({}, e), t(e)); }, r)) }; }
    function Zt(n, e) { var t = e.db, e = Jt(n._middlewares, t, n._deps, e); n.core = e.dbcore, n.tables.forEach(function (e) { var t = e.name; n.core.schema.tables.some(function (e) { return e.name === t; }) && (e.core = n.core.table(t), n[t] instanceof n.Table && (n[t].core = e.core)); }); }
    function en(i, e, t, o) { t.forEach(function (n) { var r = o[n]; e.forEach(function (e) { var t = function e(t, n) { return h(t, n) || (t = c(t)) && e(t, n); }(e, n); (!t || "value" in t && void 0 === t.value) && (e === i.Transaction.prototype || e instanceof i.Transaction ? l(e, n, { get: function () { return this.table(n); }, set: function (e) { u(this, n, { value: e, writable: !0, configurable: !0, enumerable: !0 }); } }) : e[n] = new i.Table(n, r)); }); }); }
    function tn(n, e) { e.forEach(function (e) { for (var t in e)
        e[t] instanceof n.Table && delete e[t]; }); }
    function nn(e, t) { return e._cfg.version - t._cfg.version; }
    function rn(n, r, i, e) { var o = n._dbSchema; i.objectStoreNames.contains("$meta") && !o.$meta && (o.$meta = Wt("$meta", hn("")[0], []), n._storeNames.push("$meta")); var a = n._createTransaction("readwrite", n._storeNames, o); a.create(i), a._completion.catch(e); var u = a._reject.bind(a), s = me.transless || me; Ne(function () { return me.trans = a, me.transless = s, 0 !== r ? (Zt(n, i), t = r, ((e = a).storeNames.includes("$meta") ? e.table("$meta").get("version").then(function (e) { return null != e ? e : t; }) : _e.resolve(t)).then(function (e) { return c = e, l = a, f = i, t = [], e = (s = n)._versions, h = s._dbSchema = ln(0, s.idbdb, f), 0 !== (e = e.filter(function (e) { return e._cfg.version >= c; })).length ? (e.forEach(function (u) { t.push(function () { var t = h, e = u._cfg.dbschema; fn(s, t, f), fn(s, e, f), h = s._dbSchema = e; var n = an(t, e); n.add.forEach(function (e) { un(f, e[0], e[1].primKey, e[1].indexes); }), n.change.forEach(function (e) { if (e.recreate)
        throw new Y.Upgrade("Not yet support for changing primary key"); var t = f.objectStore(e.name); e.add.forEach(function (e) { return cn(t, e); }), e.change.forEach(function (e) { t.deleteIndex(e.name), cn(t, e); }), e.del.forEach(function (e) { return t.deleteIndex(e); }); }); var r = u._cfg.contentUpgrade; if (r && u._cfg.version > c) {
        Zt(s, f), l._memoizedTables = {};
        var i = g(e);
        n.del.forEach(function (e) { i[e] = t[e]; }), tn(s, [s.Transaction.prototype]), en(s, [s.Transaction.prototype], x(i), i), l.schema = i;
        var o, a = B(r);
        a && Le();
        n = _e.follow(function () { var e; (o = r(l)) && a && (e = Ue.bind(null, null), o.then(e, e)); });
        return o && "function" == typeof o.then ? _e.resolve(o) : n.then(function () { return o; });
    } }), t.push(function (e) { var t, n, r = u._cfg.dbschema; t = r, n = e, [].slice.call(n.db.objectStoreNames).forEach(function (e) { return null == t[e] && n.db.deleteObjectStore(e); }), tn(s, [s.Transaction.prototype]), en(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), l.schema = s._dbSchema; }), t.push(function (e) { s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === u._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function (e) { return "$meta" !== e; })) : e.objectStore("$meta").put(u._cfg.version, "version")); }); }), function e() { return t.length ? _e.resolve(t.shift()(l.idbtrans)).then(e) : _e.resolve(); }().then(function () { sn(h, f); })) : _e.resolve(); var s, c, l, f, t, h; }).catch(u)) : (x(o).forEach(function (e) { un(i, e, o[e].primKey, o[e].indexes); }), Zt(n, i), void _e.follow(function () { return n.on.populate.fire(a); }).catch(u)); var e, t; }); }
    function on(e, r) { sn(e._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version"); var t = ln(0, e.idbdb, r); fn(e, e._dbSchema, r); for (var n = 0, i = an(t, e._dbSchema).change; n < i.length; n++) {
        var o = function (t) { if (t.change.length || t.recreate)
            return console.warn("Unable to patch indexes of table ".concat(t.name, " because it has changes on the type of index or primary key.")), { value: void 0 }; var n = r.objectStore(t.name); t.add.forEach(function (e) { ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(t.name, ".").concat(e.src)), cn(n, e); }); }(i[n]);
        if ("object" == typeof o)
            return o.value;
    } }
    function an(e, t) { var n, r = { del: [], add: [], change: [] }; for (n in e)
        t[n] || r.del.push(n); for (n in t) {
        var i = e[n], o = t[n];
        if (i) {
            var a = { name: n, def: o, recreate: !1, del: [], add: [], change: [] };
            if ("" + (i.primKey.keyPath || "") != "" + (o.primKey.keyPath || "") || i.primKey.auto !== o.primKey.auto)
                a.recreate = !0, r.change.push(a);
            else {
                var u = i.idxByName, s = o.idxByName, c = void 0;
                for (c in u)
                    s[c] || a.del.push(c);
                for (c in s) {
                    var l = u[c], f = s[c];
                    l ? l.src !== f.src && a.change.push(f) : a.add.push(f);
                }
                (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
        }
        else
            r.add.push([n, o]);
    } return r; }
    function un(e, t, n, r) { var i = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto }); return r.forEach(function (e) { return cn(i, e); }), i; }
    function sn(t, n) { x(t).forEach(function (e) { n.db.objectStoreNames.contains(e) || (ie && console.debug("Dexie: Creating missing table", e), un(n, e, t[e].primKey, t[e].indexes)); }); }
    function cn(e, t) { e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi }); }
    function ln(e, t, u) { var s = {}; return b(t.objectStoreNames, 0).forEach(function (e) { for (var t = u.objectStore(e), n = Vt(zt(a = t.keyPath), a || "", !0, !1, !!t.autoIncrement, a && "string" != typeof a, !0), r = [], i = 0; i < t.indexNames.length; ++i) {
        var o = t.index(t.indexNames[i]), a = o.keyPath, o = Vt(o.name, a, !!o.unique, !!o.multiEntry, !1, a && "string" != typeof a, !1);
        r.push(o);
    } s[e] = Wt(e, n, r); }), s; }
    function fn(e, t, n) { for (var r = n.db.objectStoreNames, i = 0; i < r.length; ++i) {
        var o = r[i], a = n.objectStore(o);
        e._hasGetAll = "getAll" in a;
        for (var u = 0; u < a.indexNames.length; ++u) {
            var s = a.indexNames[u], c = a.index(s).keyPath, l = "string" == typeof c ? c : "[" + b(c).join("+") + "]";
            !t[o] || (c = t[o].idxByName[l]) && (c.name = s, delete t[o].idxByName[l], t[o].idxByName[s] = c);
        }
    } "undefined" != typeof navigator && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1); }
    function hn(e) { return e.split(",").map(function (e, t) { var n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""), r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n; return Vt(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), k(r), 0 === t); }); }
    var dn = (pn.prototype._parseStoresSpec = function (r, i) { x(r).forEach(function (e) { if (null !== r[e]) {
        var t = hn(r[e]), n = t.shift();
        if (n.unique = !0, n.multi)
            throw new Y.Schema("Primary key cannot be multi-valued");
        t.forEach(function (e) { if (e.auto)
            throw new Y.Schema("Only primary key can be marked as autoIncrement (++)"); if (!e.keyPath)
            throw new Y.Schema("Index must have a name and cannot be an empty string"); }), i[e] = Wt(e, n, t);
    } }); }, pn.prototype.stores = function (e) { var t = this.db; this._cfg.storesSource = this._cfg.storesSource ? a(this._cfg.storesSource, e) : e; var e = t._versions, n = {}, r = {}; return e.forEach(function (e) { a(n, e._cfg.storesSource), r = e._cfg.dbschema = {}, e._parseStoresSpec(n, r); }), t._dbSchema = r, tn(t, [t._allTables, t, t.Transaction.prototype]), en(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], x(r), r), t._storeNames = x(r), this; }, pn.prototype.upgrade = function (e) { return this._cfg.contentUpgrade = re(this._cfg.contentUpgrade || G, e), this; }, pn);
    function pn() { }
    function yn(e, t) { var n = e._dbNamesDB; return n || (n = e._dbNamesDB = new er(tt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames"); }
    function vn(e) { return e && "function" == typeof e.databases; }
    function mn(e) { return Ne(function () { return me.letThrough = !0, e(); }); }
    function bn(e) { return !("from" in e); }
    var gn = function (e, t) { if (!this) {
        var n = new gn;
        return e && "d" in e && a(n, e), n;
    } a(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 }); };
    function wn(e, t, n) { var r = st(t, n); if (!isNaN(r)) {
        if (0 < r)
            throw RangeError();
        if (bn(e))
            return a(e, { from: t, to: n, d: 1 });
        var i = e.l, r = e.r;
        if (st(n, e.from) < 0)
            return i ? wn(i, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, On(e);
        if (0 < st(t, e.to))
            return r ? wn(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, On(e);
        st(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < st(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1);
        n = !e.r;
        i && !e.l && _n(e, i), r && n && _n(e, r);
    } }
    function _n(e, t) { bn(t) || function e(t, n) { var r = n.from, i = n.to, o = n.l, n = n.r; wn(t, r, i), o && e(t, o), n && e(t, n); }(e, t); }
    function xn(e, t) { var n = kn(t), r = n.next(); if (r.done)
        return !1; for (var i = r.value, o = kn(e), a = o.next(i.from), u = a.value; !r.done && !a.done;) {
        if (st(u.from, i.to) <= 0 && 0 <= st(u.to, i.from))
            return !0;
        st(i.from, u.from) < 0 ? i = (r = n.next(u.from)).value : u = (a = o.next(i.from)).value;
    } return !1; }
    function kn(e) { var n = bn(e) ? null : { s: 0, n: e }; return { next: function (e) { for (var t = 0 < arguments.length; n;)
            switch (n.s) {
                case 0: if (n.s = 1, t)
                    for (; n.n.l && st(e, n.n.from) < 0;)
                        n = { up: n, n: n.n.l, s: 1 };
                else
                    for (; n.n.l;)
                        n = { up: n, n: n.n.l, s: 1 };
                case 1: if (n.s = 2, !t || st(e, n.n.to) <= 0)
                    return { value: n.n, done: !1 };
                case 2: if (n.n.r) {
                    n.s = 3, n = { up: n, n: n.n.r, s: 0 };
                    continue;
                }
                case 3: n = n.up;
            } return { done: !0 }; } }; }
    function On(e) { var t, n, r = ((null === (t = e.r) || void 0 === t ? void 0 : t.d) || 0) - ((null === (n = e.l) || void 0 === n ? void 0 : n.d) || 0), i = 1 < r ? "r" : r < -1 ? "l" : ""; i && (t = "r" == i ? "l" : "r", n = _({}, e), r = e[i], e.from = r.from, e.to = r.to, e[i] = r[i], n[i] = r[t], (e[t] = n).d = Pn(n)), e.d = Pn(e); }
    function Pn(e) { var t = e.r, e = e.l; return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1; }
    function Kn(t, n) { return x(n).forEach(function (e) { t[e] ? _n(t[e], n[e]) : t[e] = function e(t) { var n, r, i = {}; for (n in t)
        m(t, n) && (r = t[n], i[n] = !r || "object" != typeof r || K.has(r.constructor) ? r : e(r)); return i; }(n[e]); }), t; }
    function En(t, n) { return t.all || n.all || Object.keys(t).some(function (e) { return n[e] && xn(n[e], t[e]); }); }
    r(gn.prototype, ((F = { add: function (e) { return _n(this, e), this; }, addKey: function (e) { return wn(this, e, e), this; }, addKeys: function (e) { var t = this; return e.forEach(function (e) { return wn(t, e, e); }), this; }, hasKey: function (e) { var t = kn(this).next(e).value; return t && st(t.from, e) <= 0 && 0 <= st(t.to, e); } })[C] = function () { return kn(this); }, F));
    var Sn = {}, jn = {}, An = !1;
    function Cn(e) { Kn(jn, e), An || (An = !0, setTimeout(function () { An = !1, Tn(jn, !(jn = {})); }, 0)); }
    function Tn(e, t) { void 0 === t && (t = !1); var n = new Set; if (e.all)
        for (var r = 0, i = Object.values(Sn); r < i.length; r++)
            qn(a = i[r], e, n, t);
    else
        for (var o in e) {
            var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(o);
            u && (o = u[1], u = u[2], (a = Sn["idb://".concat(o, "/").concat(u)]) && qn(a, e, n, t));
        } n.forEach(function (e) { return e(); }); }
    function qn(e, t, n, r) { for (var i = [], o = 0, a = Object.entries(e.queries.query); o < a.length; o++) {
        for (var u = a[o], s = u[0], c = [], l = 0, f = u[1]; l < f.length; l++) {
            var h = f[l];
            En(t, h.obsSet) ? h.subscribers.forEach(function (e) { return n.add(e); }) : r && c.push(h);
        }
        r && i.push([s, c]);
    } if (r)
        for (var d = 0, p = i; d < p.length; d++) {
            var y = p[d], s = y[0], c = y[1];
            e.queries.query[s] = c;
        } }
    function Dn(f) { var h = f._state, r = f._deps.indexedDB; if (h.isBeingOpened || f.idbdb)
        return h.dbReadyPromise.then(function () { return h.dbOpenError ? Xe(h.dbOpenError) : f; }); h.isBeingOpened = !0, h.dbOpenError = null, h.openComplete = !1; var t = h.openCanceller, d = Math.round(10 * f.verno), p = !1; function e() { if (h.openCanceller !== t)
        throw new Y.DatabaseClosed("db.open() was cancelled"); } function y() { return new _e(function (s, n) { if (e(), !r)
        throw new Y.MissingAPI; var c = f.name, l = h.autoSchema || !d ? r.open(c) : r.open(c, d); if (!l)
        throw new Y.MissingAPI; l.onerror = Bt(n), l.onblocked = qe(f._fireOnBlocked), l.onupgradeneeded = qe(function (e) { var t; v = l.transaction, h.autoSchema && !f._options.allowEmptyDB ? (l.onerror = Rt, v.abort(), l.result.close(), (t = r.deleteDatabase(c)).onsuccess = t.onerror = qe(function () { n(new Y.NoSuchDatabase("Database ".concat(c, " doesnt exist"))); })) : (v.onerror = Bt(n), e = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion, m = e < 1, f.idbdb = l.result, p && on(f, v), rn(f, e / 10, v, n)); }, n), l.onsuccess = qe(function () { v = null; var e, t, n, r, i, o = f.idbdb = l.result, a = b(o.objectStoreNames); if (0 < a.length)
        try {
            var u = o.transaction(1 === (r = a).length ? r[0] : r, "readonly");
            if (h.autoSchema)
                t = o, n = u, (e = f).verno = t.version / 10, n = e._dbSchema = ln(0, t, n), e._storeNames = b(t.objectStoreNames, 0), en(e, [e._allTables], x(n), n);
            else if (fn(f, f._dbSchema, u), ((i = an(ln(0, (i = f).idbdb, u), i._dbSchema)).add.length || i.change.some(function (e) { return e.add.length || e.change.length; })) && !p)
                return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), o.close(), d = o.version + 1, p = !0, s(y());
            Zt(f, u);
        }
        catch (e) { } et.push(f), o.onversionchange = qe(function (e) { h.vcFired = !0, f.on("versionchange").fire(e); }), o.onclose = qe(function (e) { f.on("close").fire(e); }), m && (i = f._deps, u = c, o = i.indexedDB, i = i.IDBKeyRange, vn(o) || u === tt || yn(o, i).put({ name: u }).catch(G)), s(); }, n); }).catch(function (e) { switch (null == e ? void 0 : e.name) {
        case "UnknownError":
            if (0 < h.PR1398_maxLoop)
                return h.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
            break;
        case "VersionError": if (0 < d)
            return d = 0, y();
    } return _e.reject(e); }); } var n, i = h.dbReadyResolve, v = null, m = !1; return _e.race([t, ("undefined" == typeof navigator ? _e.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function (e) { function t() { return indexedDB.databases().finally(e); } n = setInterval(t, 100), t(); }).finally(function () { return clearInterval(n); }) : Promise.resolve()).then(y)]).then(function () { return e(), h.onReadyBeingFired = [], _e.resolve(mn(function () { return f.on.ready.fire(f.vip); })).then(function e() { if (0 < h.onReadyBeingFired.length) {
        var t = h.onReadyBeingFired.reduce(re, G);
        return h.onReadyBeingFired = [], _e.resolve(mn(function () { return t(f.vip); })).then(e);
    } }); }).finally(function () { h.openCanceller === t && (h.onReadyBeingFired = null, h.isBeingOpened = !1); }).catch(function (e) { h.dbOpenError = e; try {
        v && v.abort();
    }
    catch (e) { } return t === h.openCanceller && f._close(), Xe(e); }).finally(function () { h.openComplete = !0, i(); }).then(function () { var n; return m && (n = {}, f.tables.forEach(function (t) { t.schema.indexes.forEach(function (e) { e.name && (n["idb://".concat(f.name, "/").concat(t.name, "/").concat(e.name)] = new gn(-1 / 0, [[[]]])); }), n["idb://".concat(f.name, "/").concat(t.name, "/")] = n["idb://".concat(f.name, "/").concat(t.name, "/:dels")] = new gn(-1 / 0, [[[]]]); }), Nt(Ft).fire(n), Tn(n, !0)), f; }); }
    function In(t) { function e(e) { return t.next(e); } var r = n(e), i = n(function (e) { return t.throw(e); }); function n(n) { return function (e) { var t = n(e), e = t.value; return t.done ? e : e && "function" == typeof e.then ? e.then(r, i) : k(e) ? Promise.all(e).then(r, i) : r(e); }; } return n(e)(); }
    function Bn(e, t, n) { for (var r = k(e) ? e.slice() : [e], i = 0; i < n; ++i)
        r.push(t); return r; }
    var Rn = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function (f) { return _(_({}, f), { table: function (e) { var a = f.table(e), t = a.schema, u = {}, s = []; function c(e, t, n) { var r = Xt(e), i = u[r] = u[r] || [], o = null == e ? 0 : "string" == typeof e ? 1 : e.length, a = 0 < t, a = _(_({}, n), { name: a ? "".concat(r, "(virtual-from:").concat(n.name, ")") : n.name, lowLevelIndex: n, isVirtual: a, keyTail: t, keyLength: o, extractKey: $t(e), unique: !a && n.unique }); return i.push(a), a.isPrimaryKey || s.push(a), 1 < o && c(2 === o ? e[0] : e.slice(0, o - 1), t + 1, n), i.sort(function (e, t) { return e.keyTail - t.keyTail; }), a; } e = c(t.primaryKey.keyPath, 0, t.primaryKey); u[":id"] = [e]; for (var n = 0, r = t.indexes; n < r.length; n++) {
                var i = r[n];
                c(i.keyPath, 0, i);
            } function l(e) { var t, n = e.query.index; return n.isVirtual ? _(_({}, e), { query: { index: n.lowLevelIndex, range: (t = e.query.range, n = n.keyTail, { type: 1 === t.type ? 2 : t.type, lower: Bn(t.lower, t.lowerOpen ? f.MAX_KEY : f.MIN_KEY, n), lowerOpen: !0, upper: Bn(t.upper, t.upperOpen ? f.MIN_KEY : f.MAX_KEY, n), upperOpen: !0 }) } }) : e; } return _(_({}, a), { schema: _(_({}, t), { primaryKey: e, indexes: s, getIndexByKeyPath: function (e) { return (e = u[Xt(e)]) && e[0]; } }), count: function (e) { return a.count(l(e)); }, query: function (e) { return a.query(l(e)); }, openCursor: function (t) { var e = t.query.index, r = e.keyTail, n = e.isVirtual, i = e.keyLength; return n ? a.openCursor(l(t)).then(function (e) { return e && o(e); }) : a.openCursor(t); function o(n) { return Object.create(n, { continue: { value: function (e) { null != e ? n.continue(Bn(e, t.reverse ? f.MAX_KEY : f.MIN_KEY, r)) : t.unique ? n.continue(n.key.slice(0, i).concat(t.reverse ? f.MIN_KEY : f.MAX_KEY, r)) : n.continue(); } }, continuePrimaryKey: { value: function (e, t) { n.continuePrimaryKey(Bn(e, f.MAX_KEY, r), t); } }, primaryKey: { get: function () { return n.primaryKey; } }, key: { get: function () { var e = n.key; return 1 === i ? e[0] : e.slice(0, i); } }, value: { get: function () { return n.value; } } }); } } }); } }); } };
    function Fn(i, o, a, u) { return a = a || {}, u = u || "", x(i).forEach(function (e) { var t, n, r; m(o, e) ? (t = i[e], n = o[e], "object" == typeof t && "object" == typeof n && t && n ? (r = A(t)) !== A(n) ? a[u + e] = o[e] : "Object" === r ? Fn(t, n, a, u + e + ".") : t !== n && (a[u + e] = o[e]) : t !== n && (a[u + e] = o[e])) : a[u + e] = void 0; }), x(o).forEach(function (e) { m(i, e) || (a[u + e] = o[e]); }), a; }
    function Mn(e, t) { return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey); }
    var Nn = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function (e) { return _(_({}, e), { table: function (r) { var y = e.table(r), v = y.schema.primaryKey; return _(_({}, y), { mutate: function (e) { var t = me.trans, n = t.table(r).hook, h = n.deleting, d = n.creating, p = n.updating; switch (e.type) {
                    case "add":
                        if (d.fire === G)
                            break;
                        return t._promise("readwrite", function () { return a(e); }, !0);
                    case "put":
                        if (d.fire === G && p.fire === G)
                            break;
                        return t._promise("readwrite", function () { return a(e); }, !0);
                    case "delete":
                        if (h.fire === G)
                            break;
                        return t._promise("readwrite", function () { return a(e); }, !0);
                    case "deleteRange":
                        if (h.fire === G)
                            break;
                        return t._promise("readwrite", function () { return function n(r, i, o) { return y.query({ trans: r, values: !1, query: { index: v, range: i }, limit: o }).then(function (e) { var t = e.result; return a({ type: "delete", keys: t, trans: r }).then(function (e) { return 0 < e.numFailures ? Promise.reject(e.failures[0]) : t.length < o ? { failures: [], numFailures: 0, lastResult: void 0 } : n(r, _(_({}, i), { lower: t[t.length - 1], lowerOpen: !0 }), o); }); }); }(e.trans, e.range, 1e4); }, !0);
                } return y.mutate(e); function a(c) { var e, t, n, l = me.trans, f = c.keys || Mn(v, c); if (!f)
                    throw new Error("Keys missing"); return "delete" !== (c = "add" === c.type || "put" === c.type ? _(_({}, c), { keys: f }) : _({}, c)).type && (c.values = i([], c.values, !0)), c.keys && (c.keys = i([], c.keys, !0)), e = y, n = f, ("add" === (t = c).type ? Promise.resolve([]) : e.getMany({ trans: t.trans, keys: n, cache: "immutable" })).then(function (u) { var s = f.map(function (e, t) { var n, r, i, o = u[t], a = { onerror: null, onsuccess: null }; return "delete" === c.type ? h.fire.call(a, e, o, l) : "add" === c.type || void 0 === o ? (n = d.fire.call(a, e, c.values[t], l), null == e && null != n && (c.keys[t] = e = n, v.outbound || P(c.values[t], v.keyPath, e))) : (n = Fn(o, c.values[t]), (r = p.fire.call(a, n, e, o, l)) && (i = c.values[t], Object.keys(r).forEach(function (e) { m(i, e) ? i[e] = r[e] : P(i, e, r[e]); }))), a; }); return y.mutate(c).then(function (e) { for (var t = e.failures, n = e.results, r = e.numFailures, e = e.lastResult, i = 0; i < f.length; ++i) {
                    var o = (n || f)[i], a = s[i];
                    null == o ? a.onerror && a.onerror(t[i]) : a.onsuccess && a.onsuccess("put" === c.type && u[i] ? c.values[i] : o);
                } return { failures: t, results: n, numFailures: r, lastResult: e }; }).catch(function (t) { return s.forEach(function (e) { return e.onerror && e.onerror(t); }), Promise.reject(t); }); }); } } }); } }); } };
    function Ln(e, t, n) { try {
        if (!t)
            return null;
        if (t.keys.length < e.length)
            return null;
        for (var r = [], i = 0, o = 0; i < t.keys.length && o < e.length; ++i)
            0 === st(t.keys[i], e[o]) && (r.push(n ? S(t.values[i]) : t.values[i]), ++o);
        return r.length === e.length ? r : null;
    }
    catch (e) {
        return null;
    } }
    var Un = { stack: "dbcore", level: -1, create: function (t) { return { table: function (e) { var n = t.table(e); return _(_({}, n), { getMany: function (t) { if (!t.cache)
                    return n.getMany(t); var e = Ln(t.keys, t.trans._cache, "clone" === t.cache); return e ? _e.resolve(e) : n.getMany(t).then(function (e) { return t.trans._cache = { keys: t.keys, values: "clone" === t.cache ? S(e) : e }, e; }); }, mutate: function (e) { return "add" !== e.type && (e.trans._cache = null), n.mutate(e); } }); } }; } };
    function Vn(e, t) { return "readonly" === e.trans.mode && !!e.subscr && !e.trans.explicit && "disabled" !== e.trans.db._options.cache && !t.schema.primaryKey.outbound; }
    function zn(e, t) { switch (e) {
        case "query": return t.values && !t.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor": return !1;
    } }
    var Wn = { stack: "dbcore", level: 0, name: "Observability", create: function (b) { var g = b.schema.name, w = new gn(b.MIN_KEY, b.MAX_KEY); return _(_({}, b), { transaction: function (e, t, n) { if (me.subscr && "readonly" !== t)
                throw new Y.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(me.querier)); return b.transaction(e, t, n); }, table: function (d) { var p = b.table(d), y = p.schema, v = y.primaryKey, e = y.indexes, c = v.extractKey, l = v.outbound, m = v.autoIncrement && e.filter(function (e) { return e.compound && e.keyPath.includes(v.keyPath); }), t = _(_({}, p), { mutate: function (a) { function u(e) { return e = "idb://".concat(g, "/").concat(d, "/").concat(e), n[e] || (n[e] = new gn); } var e, o, s, t = a.trans, n = a.mutatedParts || (a.mutatedParts = {}), r = u(""), i = u(":dels"), c = a.type, l = "deleteRange" === a.type ? [a.range] : "delete" === a.type ? [a.keys] : a.values.length < 50 ? [Mn(v, a).filter(function (e) { return e; }), a.values] : [], f = l[0], h = l[1], l = a.trans._cache; return k(f) ? (r.addKeys(f), (l = "delete" === c || f.length === h.length ? Ln(f, l) : null) || i.addKeys(f), (l || h) && (e = u, o = l, s = h, y.indexes.forEach(function (t) { var n = e(t.name || ""); function r(e) { return null != e ? t.extractKey(e) : null; } function i(e) { return t.multiEntry && k(e) ? e.forEach(function (e) { return n.addKey(e); }) : n.addKey(e); } (o || s).forEach(function (e, t) { var n = o && r(o[t]), t = s && r(s[t]); 0 !== st(n, t) && (null != n && i(n), null != t && i(t)); }); }))) : f ? (h = { from: null !== (h = f.lower) && void 0 !== h ? h : b.MIN_KEY, to: null !== (h = f.upper) && void 0 !== h ? h : b.MAX_KEY }, i.add(h), r.add(h)) : (r.add(w), i.add(w), y.indexes.forEach(function (e) { return u(e.name).add(w); })), p.mutate(a).then(function (o) { return !f || "add" !== a.type && "put" !== a.type || (r.addKeys(o.results), m && m.forEach(function (t) { for (var e = a.values.map(function (e) { return t.extractKey(e); }), n = t.keyPath.findIndex(function (e) { return e === v.keyPath; }), r = 0, i = o.results.length; r < i; ++r)
                    e[r][n] = o.results[r]; u(t.name).addKeys(e); })), t.mutatedParts = Kn(t.mutatedParts || {}, n), o; }); } }), e = function (e) { var t = e.query, e = t.index, t = t.range; return [e, new gn(null !== (e = t.lower) && void 0 !== e ? e : b.MIN_KEY, null !== (t = t.upper) && void 0 !== t ? t : b.MAX_KEY)]; }, f = { get: function (e) { return [v, new gn(e.key)]; }, getMany: function (e) { return [v, (new gn).addKeys(e.keys)]; }, count: e, query: e, openCursor: e }; return x(f).forEach(function (s) { t[s] = function (i) { var e = me.subscr, t = !!e, n = Vn(me, p) && zn(s, i) ? i.obsSet = {} : e; if (t) {
                var r = function (e) { e = "idb://".concat(g, "/").concat(d, "/").concat(e); return n[e] || (n[e] = new gn); }, o = r(""), a = r(":dels"), e = f[s](i), t = e[0], e = e[1];
                if (("query" === s && t.isPrimaryKey && !i.values ? a : r(t.name || "")).add(e), !t.isPrimaryKey) {
                    if ("count" !== s) {
                        var u = "query" === s && l && i.values && p.query(_(_({}, i), { values: !1 }));
                        return p[s].apply(this, arguments).then(function (t) { if ("query" === s) {
                            if (l && i.values)
                                return u.then(function (e) { e = e.result; return o.addKeys(e), t; });
                            var e = i.values ? t.result.map(c) : t.result;
                            (i.values ? o : a).addKeys(e);
                        }
                        else if ("openCursor" === s) {
                            var n = t, r = i.values;
                            return n && Object.create(n, { key: { get: function () { return a.addKey(n.primaryKey), n.key; } }, primaryKey: { get: function () { var e = n.primaryKey; return a.addKey(e), e; } }, value: { get: function () { return r && o.addKey(n.primaryKey), n.value; } } });
                        } return t; });
                    }
                    a.add(w);
                }
            } return p[s].apply(this, arguments); }; }), t; } }); } };
    function Yn(e, t, n) { if (0 === n.numFailures)
        return t; if ("deleteRange" === t.type)
        return null; var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1; if (n.numFailures === r)
        return null; t = _({}, t); return k(t.keys) && (t.keys = t.keys.filter(function (e, t) { return !(t in n.failures); })), "values" in t && k(t.values) && (t.values = t.values.filter(function (e, t) { return !(t in n.failures); })), t; }
    function $n(e, t) { return n = e, (void 0 === (r = t).lower || (r.lowerOpen ? 0 < st(n, r.lower) : 0 <= st(n, r.lower))) && (e = e, void 0 === (t = t).upper || (t.upperOpen ? st(e, t.upper) < 0 : st(e, t.upper) <= 0)); var n, r; }
    function Qn(e, d, t, n, r, i) { if (!t || 0 === t.length)
        return e; var o = d.query.index, p = o.multiEntry, y = d.query.range, v = n.schema.primaryKey.extractKey, m = o.extractKey, a = (o.lowLevelIndex || o).extractKey, t = t.reduce(function (e, t) { var n = e, r = []; if ("add" === t.type || "put" === t.type)
        for (var i = new gn, o = t.values.length - 1; 0 <= o; --o) {
            var a, u = t.values[o], s = v(u);
            i.hasKey(s) || (a = m(u), (p && k(a) ? a.some(function (e) { return $n(e, y); }) : $n(a, y)) && (i.addKey(s), r.push(u)));
        } switch (t.type) {
        case "add":
            var c = (new gn).addKeys(d.values ? e.map(function (e) { return v(e); }) : e), n = e.concat(d.values ? r.filter(function (e) { e = v(e); return !c.hasKey(e) && (c.addKey(e), !0); }) : r.map(function (e) { return v(e); }).filter(function (e) { return !c.hasKey(e) && (c.addKey(e), !0); }));
            break;
        case "put":
            var l = (new gn).addKeys(t.values.map(function (e) { return v(e); }));
            n = e.filter(function (e) { return !l.hasKey(d.values ? v(e) : e); }).concat(d.values ? r : r.map(function (e) { return v(e); }));
            break;
        case "delete":
            var f = (new gn).addKeys(t.keys);
            n = e.filter(function (e) { return !f.hasKey(d.values ? v(e) : e); });
            break;
        case "deleteRange":
            var h = t.range;
            n = e.filter(function (e) { return !$n(v(e), h); });
    } return n; }, e); return t === e ? e : (t.sort(function (e, t) { return st(a(e), a(t)) || st(v(e), v(t)); }), d.limit && d.limit < 1 / 0 && (t.length > d.limit ? t.length = d.limit : e.length === d.limit && t.length < d.limit && (r.dirty = !0)), i ? Object.freeze(t) : t); }
    function Gn(e, t) { return 0 === st(e.lower, t.lower) && 0 === st(e.upper, t.upper) && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen; }
    function Xn(e, t) { return function (e, t, n, r) { if (void 0 === e)
        return void 0 !== t ? -1 : 0; if (void 0 === t)
        return 1; if (0 === (t = st(e, t))) {
        if (n && r)
            return 0;
        if (n)
            return 1;
        if (r)
            return -1;
    } return t; }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function (e, t, n, r) { if (void 0 === e)
        return void 0 !== t ? 1 : 0; if (void 0 === t)
        return -1; if (0 === (t = st(e, t))) {
        if (n && r)
            return 0;
        if (n)
            return -1;
        if (r)
            return 1;
    } return t; }(e.upper, t.upper, e.upperOpen, t.upperOpen); }
    function Hn(n, r, i, e) { n.subscribers.add(i), e.addEventListener("abort", function () { var e, t; n.subscribers.delete(i), 0 === n.subscribers.size && (e = n, t = r, setTimeout(function () { 0 === e.subscribers.size && q(t, e); }, 3e3)); }); }
    var Jn = { stack: "dbcore", level: 0, name: "Cache", create: function (k) { var O = k.schema.name; return _(_({}, k), { transaction: function (g, w, e) { var _, t, x = k.transaction(g, w, e); return "readwrite" === w && (t = (_ = new AbortController).signal, e = function (b) { return function () { if (_.abort(), "readwrite" === w) {
                for (var t = new Set, e = 0, n = g; e < n.length; e++) {
                    var r = n[e], i = Sn["idb://".concat(O, "/").concat(r)];
                    if (i) {
                        var o = k.table(r), a = i.optimisticOps.filter(function (e) { return e.trans === x; });
                        if (x._explicit && b && x.mutatedParts)
                            for (var u = 0, s = Object.values(i.queries.query); u < s.length; u++)
                                for (var c = 0, l = (d = s[u]).slice(); c < l.length; c++)
                                    En((p = l[c]).obsSet, x.mutatedParts) && (q(d, p), p.subscribers.forEach(function (e) { return t.add(e); }));
                        else if (0 < a.length) {
                            i.optimisticOps = i.optimisticOps.filter(function (e) { return e.trans !== x; });
                            for (var f = 0, h = Object.values(i.queries.query); f < h.length; f++)
                                for (var d, p, y, v = 0, m = (d = h[f]).slice(); v < m.length; v++)
                                    null != (p = m[v]).res && x.mutatedParts && (b && !p.dirty ? (y = Object.isFrozen(p.res), y = Qn(p.res, p.req, a, o, p, y), p.dirty ? (q(d, p), p.subscribers.forEach(function (e) { return t.add(e); })) : y !== p.res && (p.res = y, p.promise = _e.resolve({ result: y }))) : (p.dirty && q(d, p), p.subscribers.forEach(function (e) { return t.add(e); })));
                        }
                    }
                }
                t.forEach(function (e) { return e(); });
            } }; }, x.addEventListener("abort", e(!1), { signal: t }), x.addEventListener("error", e(!1), { signal: t }), x.addEventListener("complete", e(!0), { signal: t })), x; }, table: function (c) { var l = k.table(c), i = l.schema.primaryKey; return _(_({}, l), { mutate: function (t) { var e = me.trans; if (i.outbound || "disabled" === e.db._options.cache || e.explicit || "readwrite" !== e.idbtrans.mode)
                    return l.mutate(t); var n = Sn["idb://".concat(O, "/").concat(c)]; if (!n)
                    return l.mutate(t); e = l.mutate(t); return "add" !== t.type && "put" !== t.type || !(50 <= t.values.length || Mn(i, t).some(function (e) { return null == e; })) ? (n.optimisticOps.push(t), t.mutatedParts && Cn(t.mutatedParts), e.then(function (e) { 0 < e.numFailures && (q(n.optimisticOps, t), (e = Yn(0, t, e)) && n.optimisticOps.push(e), t.mutatedParts && Cn(t.mutatedParts)); }), e.catch(function () { q(n.optimisticOps, t), t.mutatedParts && Cn(t.mutatedParts); })) : e.then(function (r) { var e = Yn(0, _(_({}, t), { values: t.values.map(function (e, t) { var n; if (r.failures[t])
                        return e; e = null !== (n = i.keyPath) && void 0 !== n && n.includes(".") ? S(e) : _({}, e); return P(e, i.keyPath, r.results[t]), e; }) }), r); n.optimisticOps.push(e), queueMicrotask(function () { return t.mutatedParts && Cn(t.mutatedParts); }); }), e; }, query: function (t) { if (!Vn(me, l) || !zn("query", t))
                    return l.query(t); var i = "immutable" === (null === (o = me.trans) || void 0 === o ? void 0 : o.db._options.cache), e = me, n = e.requery, r = e.signal, o = function (e, t, n, r) { var i = Sn["idb://".concat(e, "/").concat(t)]; if (!i)
                    return []; if (!(t = i.queries[n]))
                    return [null, !1, i, null]; var o = t[(r.query ? r.query.index.name : null) || ""]; if (!o)
                    return [null, !1, i, null]; switch (n) {
                    case "query":
                        var a = o.find(function (e) { return e.req.limit === r.limit && e.req.values === r.values && Gn(e.req.query.range, r.query.range); });
                        return a ? [a, !0, i, o] : [o.find(function (e) { return ("limit" in e.req ? e.req.limit : 1 / 0) >= r.limit && (!r.values || e.req.values) && Xn(e.req.query.range, r.query.range); }), !1, i, o];
                    case "count":
                        a = o.find(function (e) { return Gn(e.req.query.range, r.query.range); });
                        return [a, !!a, i, o];
                } }(O, c, "query", t), a = o[0], e = o[1], u = o[2], s = o[3]; return a && e ? a.obsSet = t.obsSet : (e = l.query(t).then(function (e) { var t = e.result; if (a && (a.res = t), i) {
                    for (var n = 0, r = t.length; n < r; ++n)
                        Object.freeze(t[n]);
                    Object.freeze(t);
                }
                else
                    e.result = S(t); return e; }).catch(function (e) { return s && a && q(s, a), Promise.reject(e); }), a = { obsSet: t.obsSet, promise: e, subscribers: new Set, type: "query", req: t, dirty: !1 }, s ? s.push(a) : (s = [a], (u = u || (Sn["idb://".concat(O, "/").concat(c)] = { queries: { query: {}, count: {} }, objs: new Map, optimisticOps: [], unsignaledParts: {} })).queries.query[t.query.index.name || ""] = s)), Hn(a, s, n, r), a.promise.then(function (e) { return { result: Qn(e.result, t, null == u ? void 0 : u.optimisticOps, l, a, i) }; }); } }); } }); } };
    function Zn(e, r) { return new Proxy(e, { get: function (e, t, n) { return "db" === t ? r : Reflect.get(e, t, n); } }); }
    var er = (tr.prototype.version = function (t) { if (isNaN(t) || t < .1)
        throw new Y.Type("Given version is not a positive number"); if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened)
        throw new Y.Schema("Cannot add version when database is open"); this.verno = Math.max(this.verno, t); var e = this._versions, n = e.filter(function (e) { return e._cfg.version === t; })[0]; return n || (n = new this.Version(t), e.push(n), e.sort(nn), n.stores({}), this._state.autoSchema = !1, n); }, tr.prototype._whenReady = function (e) { var n = this; return this.idbdb && (this._state.openComplete || me.letThrough || this._vip) ? e() : new _e(function (e, t) { if (n._state.openComplete)
        return t(new Y.DatabaseClosed(n._state.dbOpenError)); if (!n._state.isBeingOpened) {
        if (!n._state.autoOpen)
            return void t(new Y.DatabaseClosed);
        n.open().catch(G);
    } n._state.dbReadyPromise.then(e, t); }).then(e); }, tr.prototype.use = function (e) { var t = e.stack, n = e.create, r = e.level, i = e.name; i && this.unuse({ stack: t, name: i }); e = this._middlewares[t] || (this._middlewares[t] = []); return e.push({ stack: t, create: n, level: null == r ? 10 : r, name: i }), e.sort(function (e, t) { return e.level - t.level; }), this; }, tr.prototype.unuse = function (e) { var t = e.stack, n = e.name, r = e.create; return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function (e) { return r ? e.create !== r : !!n && e.name !== n; })), this; }, tr.prototype.open = function () { var e = this; return $e(ve, function () { return Dn(e); }); }, tr.prototype._close = function () { var n = this._state, e = et.indexOf(this); if (0 <= e && et.splice(e, 1), this.idbdb) {
        try {
            this.idbdb.close();
        }
        catch (e) { }
        this.idbdb = null;
    } n.isBeingOpened || (n.dbReadyPromise = new _e(function (e) { n.dbReadyResolve = e; }), n.openCanceller = new _e(function (e, t) { n.cancelOpen = t; })); }, tr.prototype.close = function (e) { var t = (void 0 === e ? { disableAutoOpen: !0 } : e).disableAutoOpen, e = this._state; t ? (e.isBeingOpened && e.cancelOpen(new Y.DatabaseClosed), this._close(), e.autoOpen = !1, e.dbOpenError = new Y.DatabaseClosed) : (this._close(), e.autoOpen = this._options.autoOpen || e.isBeingOpened, e.openComplete = !1, e.dbOpenError = null); }, tr.prototype.delete = function (n) { var i = this; void 0 === n && (n = { disableAutoOpen: !0 }); var o = 0 < arguments.length && "object" != typeof arguments[0], a = this._state; return new _e(function (r, t) { function e() { i.close(n); var e = i._deps.indexedDB.deleteDatabase(i.name); e.onsuccess = qe(function () { var e, t, n; e = i._deps, t = i.name, n = e.indexedDB, e = e.IDBKeyRange, vn(n) || t === tt || yn(n, e).delete(t).catch(G), r(); }), e.onerror = Bt(t), e.onblocked = i._fireOnBlocked; } if (o)
        throw new Y.InvalidArgument("Invalid closeOptions argument to db.delete()"); a.isBeingOpened ? a.dbReadyPromise.then(e) : e(); }); }, tr.prototype.backendDB = function () { return this.idbdb; }, tr.prototype.isOpen = function () { return null !== this.idbdb; }, tr.prototype.hasBeenClosed = function () { var e = this._state.dbOpenError; return e && "DatabaseClosed" === e.name; }, tr.prototype.hasFailed = function () { return null !== this._state.dbOpenError; }, tr.prototype.dynamicallyOpened = function () { return this._state.autoSchema; }, Object.defineProperty(tr.prototype, "tables", { get: function () { var t = this; return x(this._allTables).map(function (e) { return t._allTables[e]; }); }, enumerable: !1, configurable: !0 }), tr.prototype.transaction = function () { var e = function (e, t, n) { var r = arguments.length; if (r < 2)
        throw new Y.InvalidArgument("Too few arguments"); for (var i = new Array(r - 1); --r;)
        i[r - 1] = arguments[r]; return n = i.pop(), [e, w(i), n]; }.apply(this, arguments); return this._transaction.apply(this, e); }, tr.prototype._transaction = function (e, t, n) { var r = this, i = me.trans; i && i.db === this && -1 === e.indexOf("!") || (i = null); var o, a, u = -1 !== e.indexOf("?"); e = e.replace("!", "").replace("?", ""); try {
        if (a = t.map(function (e) { e = e instanceof r.Table ? e.name : e; if ("string" != typeof e)
            throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed"); return e; }), "r" == e || e === nt)
            o = nt;
        else {
            if ("rw" != e && e != rt)
                throw new Y.InvalidArgument("Invalid transaction mode: " + e);
            o = rt;
        }
        if (i) {
            if (i.mode === nt && o === rt) {
                if (!u)
                    throw new Y.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                i = null;
            }
            i && a.forEach(function (e) { if (i && -1 === i.storeNames.indexOf(e)) {
                if (!u)
                    throw new Y.SubTransaction("Table " + e + " not included in parent transaction.");
                i = null;
            } }), u && i && !i.active && (i = null);
        }
    }
    catch (n) {
        return i ? i._promise(null, function (e, t) { t(n); }) : Xe(n);
    } var s = function i(o, a, u, s, c) { return _e.resolve().then(function () { var e = me.transless || me, t = o._createTransaction(a, u, o._dbSchema, s); if (t.explicit = !0, e = { trans: t, transless: e }, s)
        t.idbtrans = s.idbtrans;
    else
        try {
            t.create(), t.idbtrans._explicit = !0, o._state.PR1398_maxLoop = 3;
        }
        catch (e) {
            return e.name === z.InvalidState && o.isOpen() && 0 < --o._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), o.close({ disableAutoOpen: !1 }), o.open().then(function () { return i(o, a, u, null, c); })) : Xe(e);
        } var n, r = B(c); return r && Le(), e = _e.follow(function () { var e; (n = c.call(t, t)) && (r ? (e = Ue.bind(null, null), n.then(e, e)) : "function" == typeof n.next && "function" == typeof n.throw && (n = In(n))); }, e), (n && "function" == typeof n.then ? _e.resolve(n).then(function (e) { return t.active ? e : Xe(new Y.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")); }) : e.then(function () { return n; })).then(function (e) { return s && t._resolve(), t._completion.then(function () { return e; }); }).catch(function (e) { return t._reject(e), Xe(e); }); }); }.bind(null, this, o, a, i, n); return i ? i._promise(o, s, "lock") : me.trans ? $e(me.transless, function () { return r._whenReady(s); }) : this._whenReady(s); }, tr.prototype.table = function (e) { if (!m(this._allTables, e))
        throw new Y.InvalidTable("Table ".concat(e, " does not exist")); return this._allTables[e]; }, tr);
    function tr(e, t) { var o = this; this._middlewares = {}, this.verno = 0; var n = tr.dependencies; this._options = t = _({ addons: tr.addons, autoOpen: !0, indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }; n = t.addons; this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this; var a, r, u, i, s, c = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: G, dbReadyPromise: null, cancelOpen: G, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen }; c.dbReadyPromise = new _e(function (e) { c.dbReadyResolve = e; }), c.openCanceller = new _e(function (e, t) { c.cancelOpen = t; }), this._state = c, this.name = e, this.on = dt(this, "populate", "blocked", "versionchange", "close", { ready: [re, G] }), this.on.ready.subscribe = p(this.on.ready.subscribe, function (i) { return function (n, r) { tr.vip(function () { var t, e = o._state; e.openComplete ? (e.dbOpenError || _e.resolve().then(n), r && i(n)) : e.onReadyBeingFired ? (e.onReadyBeingFired.push(n), r && i(n)) : (i(n), t = o, r || i(function e() { t.on.ready.unsubscribe(n), t.on.ready.unsubscribe(e); })); }); }; }), this.Collection = (a = this, pt(Ot.prototype, function (e, t) { this.db = a; var n = ot, r = null; if (t)
        try {
            n = t();
        }
        catch (e) {
            r = e;
        } var i = e._ctx, t = i.table, e = t.hook.reading.fire; this._ctx = { table: t, index: i.index, isPrimKey: !i.index || t.schema.primKey.keyPath && i.index === t.schema.primKey.name, range: n, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: r, or: i.or, valueMapper: e !== X ? e : null }; })), this.Table = (r = this, pt(ft.prototype, function (e, t, n) { this.db = r, this._tx = n, this.name = e, this.schema = t, this.hook = r._allTables[e] ? r._allTables[e].hook : dt(null, { creating: [Z, G], reading: [H, X], updating: [te, G], deleting: [ee, G] }); })), this.Transaction = (u = this, pt(Lt.prototype, function (e, t, n, r, i) { var o = this; this.db = u, this.mode = e, this.storeNames = t, this.schema = n, this.chromeTransactionDurability = r, this.idbtrans = null, this.on = dt(this, "complete", "error", "abort"), this.parent = i || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new _e(function (e, t) { o._resolve = e, o._reject = t; }), this._completion.then(function () { o.active = !1, o.on.complete.fire(); }, function (e) { var t = o.active; return o.active = !1, o.on.error.fire(e), o.parent ? o.parent._reject(e) : t && o.idbtrans && o.idbtrans.abort(), Xe(e); }); })), this.Version = (i = this, pt(dn.prototype, function (e) { this.db = i, this._cfg = { version: e, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null }; })), this.WhereClause = (s = this, pt(Dt.prototype, function (e, t, n) { if (this.db = s, this._ctx = { table: e, index: ":id" === t ? null : t, or: n }, this._cmp = this._ascending = st, this._descending = function (e, t) { return st(t, e); }, this._max = function (e, t) { return 0 < st(e, t) ? e : t; }, this._min = function (e, t) { return st(e, t) < 0 ? e : t; }, this._IDBKeyRange = s._deps.IDBKeyRange, !this._IDBKeyRange)
        throw new Y.MissingAPI; })), this.on("versionchange", function (e) { 0 < e.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 }); }), this.on("blocked", function (e) { !e.newVersion || e.newVersion < e.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(e.oldVersion / 10)); }), this._maxKey = Yt(t.IDBKeyRange), this._createTransaction = function (e, t, n, r) { return new o.Transaction(e, t, n, o._options.chromeTransactionDurability, r); }, this._fireOnBlocked = function (t) { o.on("blocked").fire(t), et.filter(function (e) { return e.name === o.name && e !== o && !e._state.vcFired; }).map(function (e) { return e.on("versionchange").fire(t); }); }, this.use(Un), this.use(Jn), this.use(Wn), this.use(Rn), this.use(Nn); var l = new Proxy(this, { get: function (e, t, n) { if ("_vip" === t)
            return !0; if ("table" === t)
            return function (e) { return Zn(o.table(e), l); }; var r = Reflect.get(e, t, n); return r instanceof ft ? Zn(r, l) : "tables" === t ? r.map(function (e) { return Zn(e, l); }) : "_createTransaction" === t ? function () { return Zn(r.apply(this, arguments), l); } : r; } }); this.vip = l, n.forEach(function (e) { return e(o); }); }
    var nr, F = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable", rr = (ir.prototype.subscribe = function (e, t, n) { return this._subscribe(e && "function" != typeof e ? e : { next: e, error: t, complete: n }); }, ir.prototype[F] = function () { return this; }, ir);
    function ir(e) { this._subscribe = e; }
    try {
        nr = { indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB, IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange };
    }
    catch (e) {
        nr = { indexedDB: null, IDBKeyRange: null };
    }
    function or(h) { var d, p = !1, e = new rr(function (r) { var i = B(h); var o, a = !1, u = {}, s = {}, e = { get closed() { return a; }, unsubscribe: function () { a || (a = !0, o && o.abort(), c && Nt.storagemutated.unsubscribe(f)); } }; r.start && r.start(e); var c = !1, l = function () { return Ge(t); }; var f = function (e) { Kn(u, e), En(s, u) && l(); }, t = function () { var t, n, e; !a && nr.indexedDB && (u = {}, t = {}, o && o.abort(), o = new AbortController, e = function (e) { var t = je(); try {
        i && Le();
        var n = Ne(h, e);
        return n = i ? n.finally(Ue) : n;
    }
    finally {
        t && Ae();
    } }(n = { subscr: t, signal: o.signal, requery: l, querier: h, trans: null }), Promise.resolve(e).then(function (e) { p = !0, d = e, a || n.signal.aborted || (u = {}, function (e) { for (var t in e)
        if (m(e, t))
            return; return 1; }(s = t) || c || (Nt(Ft, f), c = !0), Ge(function () { return !a && r.next && r.next(e); })); }, function (e) { p = !1, ["DatabaseClosedError", "AbortError"].includes(null == e ? void 0 : e.name) || a || Ge(function () { a || r.error && r.error(e); }); })); }; return setTimeout(l, 0), e; }); return e.hasValue = function () { return p; }, e.getValue = function () { return d; }, e; }
    var ar = er;
    function ur(e) { var t = cr; try {
        cr = !0, Nt.storagemutated.fire(e), Tn(e, !0);
    }
    finally {
        cr = t;
    } }
    r(ar, _(_({}, Q), { delete: function (e) { return new ar(e, { addons: [] }).delete(); }, exists: function (e) { return new ar(e, { addons: [] }).open().then(function (e) { return e.close(), !0; }).catch("NoSuchDatabaseError", function () { return !1; }); }, getDatabaseNames: function (e) { try {
            return t = ar.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (vn(n) ? Promise.resolve(n.databases()).then(function (e) { return e.map(function (e) { return e.name; }).filter(function (e) { return e !== tt; }); }) : yn(n, t).toCollection().primaryKeys()).then(e);
        }
        catch (e) {
            return Xe(new Y.MissingAPI);
        } var t, n; }, defineClass: function () { return function (e) { a(this, e); }; }, ignoreTransaction: function (e) { return me.trans ? $e(me.transless, e) : e(); }, vip: mn, async: function (t) { return function () { try {
            var e = In(t.apply(this, arguments));
            return e && "function" == typeof e.then ? e : _e.resolve(e);
        }
        catch (e) {
            return Xe(e);
        } }; }, spawn: function (e, t, n) { try {
            var r = In(e.apply(n, t || []));
            return r && "function" == typeof r.then ? r : _e.resolve(r);
        }
        catch (e) {
            return Xe(e);
        } }, currentTransaction: { get: function () { return me.trans || null; } }, waitFor: function (e, t) { t = _e.resolve("function" == typeof e ? ar.ignoreTransaction(e) : e).timeout(t || 6e4); return me.trans ? me.trans.waitFor(t) : t; }, Promise: _e, debug: { get: function () { return ie; }, set: function (e) { oe(e); } }, derive: o, extend: a, props: r, override: p, Events: dt, on: Nt, liveQuery: or, extendObservabilitySet: Kn, getByKeyPath: O, setByKeyPath: P, delByKeyPath: function (t, e) { "string" == typeof e ? P(t, e, void 0) : "length" in e && [].map.call(e, function (e) { P(t, e, void 0); }); }, shallowClone: g, deepClone: S, getObjectDiff: Fn, cmp: st, asap: v, minKey: -1 / 0, addons: [], connections: et, errnames: z, dependencies: nr, cache: Sn, semVer: "4.0.11", version: "4.0.11".split(".").map(function (e) { return parseInt(e); }).reduce(function (e, t, n) { return e + t / Math.pow(10, 2 * n); }) })), ar.maxKey = Yt(ar.dependencies.IDBKeyRange), "undefined" != typeof dispatchEvent && "undefined" != typeof addEventListener && (Nt(Ft, function (e) { cr || (e = new CustomEvent(Mt, { detail: e }), cr = !0, dispatchEvent(e), cr = !1); }), addEventListener(Mt, function (e) { e = e.detail; cr || ur(e); }));
    var sr, cr = !1, lr = function () { };
    return "undefined" != typeof BroadcastChannel && ((lr = function () { (sr = new BroadcastChannel(Mt)).onmessage = function (e) { return e.data && ur(e.data); }; })(), "function" == typeof sr.unref && sr.unref(), Nt(Ft, function (e) { cr || sr.postMessage(e); })), "undefined" != typeof addEventListener && (addEventListener("pagehide", function (e) { if (!er.disableBfCache && e.persisted) {
        ie && console.debug("Dexie: handling persisted pagehide"), null != sr && sr.close();
        for (var t = 0, n = et; t < n.length; t++)
            n[t].close({ disableAutoOpen: !1 });
    } }), addEventListener("pageshow", function (e) { !er.disableBfCache && e.persisted && (ie && console.debug("Dexie: handling persisted pageshow"), lr(), ur({ all: new gn(-1 / 0, [[]]) })); })), _e.rejectionMapper = function (e, t) { return !e || e instanceof N || e instanceof TypeError || e instanceof SyntaxError || !e.name || !$[e.name] ? e : (t = new $[e.name](t || e.message, e), "stack" in e && l(t, "stack", { get: function () { return this.inner.stack; } }), t); }, oe(ie), _(er, Object.freeze({ __proto__: null, Dexie: er, liveQuery: or, Entity: ut, cmp: st, PropModification: xt, replacePrefix: function (e, t) { return new xt({ replacePrefix: [e, t] }); }, add: function (e) { return new xt({ add: e }); }, remove: function (e) { return new xt({ remove: e }); }, default: er, RangeSet: gn, mergeRanges: _n, rangesOverlap: xn }), { default: er }), er;
});


/***/ }),

/***/ 233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "hnsw_main.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			787: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  evalQuery: () => (/* binding */ evalQuery),
  expSettings: () => (/* reexport */ expSettings),
  exportJsonlIndex: () => (/* binding */ exportJsonlIndex),
  fastQuery: () => (/* binding */ fastQuery),
  importData: () => (/* binding */ importData),
  importDataWithCache: () => (/* binding */ importDataWithCache),
  initWrag: () => (/* binding */ initWrag),
  wragInstance: () => (/* binding */ wragInstance)
});

;// ./src/wasm/hnsw_main.js
var createHNSW = (() => {
    var _scriptName = "file:///webanns_exchange/src/wasm/hnsw_main.js";
    return (async function (moduleArg = {}) {
        var moduleRtn;
        var Module = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        var readyPromise = new Promise((resolve, reject) => { readyPromiseResolve = resolve; readyPromiseReject = reject; });
        var ENVIRONMENT_IS_WEB = true;
        var ENVIRONMENT_IS_WORKER = false;
        var moduleOverrides = { ...Module };
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => { throw toThrow; };
        var scriptDirectory = "";
        function locateFile(path) { if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
        } return scriptDirectory + path; }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            if (ENVIRONMENT_IS_WORKER) {
                scriptDirectory = self.location.href;
            }
            else if (typeof document != "undefined" && document.currentScript) {
                scriptDirectory = document.currentScript.src;
            }
            if (_scriptName) {
                scriptDirectory = _scriptName;
            }
            if (scriptDirectory.startsWith("blob:")) {
                scriptDirectory = "";
            }
            else {
                scriptDirectory = scriptDirectory.slice(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
            }
            {
                readAsync = async (url) => { var response = await fetch(url, { credentials: "same-origin" }); if (response.ok) {
                    return response.arrayBuffer();
                } throw new Error(response.status + " : " + response.url); };
            }
        }
        else { }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        if (Module["arguments"])
            arguments_ = Module["arguments"];
        if (Module["thisProgram"])
            thisProgram = Module["thisProgram"];
        var wasmBinary = Module["wasmBinary"];
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPU64, HEAPF64;
        var runtimeInitialized = false;
        function updateMemoryViews() { var b = wasmMemory.buffer; Module["HEAP8"] = HEAP8 = new Int8Array(b); Module["HEAP16"] = HEAP16 = new Int16Array(b); Module["HEAPU8"] = HEAPU8 = new Uint8Array(b); Module["HEAPU16"] = HEAPU16 = new Uint16Array(b); Module["HEAP32"] = HEAP32 = new Int32Array(b); Module["HEAPU32"] = HEAPU32 = new Uint32Array(b); Module["HEAPF32"] = HEAPF32 = new Float32Array(b); Module["HEAPF64"] = HEAPF64 = new Float64Array(b); Module["HEAP64"] = HEAP64 = new BigInt64Array(b); Module["HEAPU64"] = HEAPU64 = new BigUint64Array(b); }
        function preRun() { if (Module["preRun"]) {
            if (typeof Module["preRun"] == "function")
                Module["preRun"] = [Module["preRun"]];
            while (Module["preRun"].length) {
                addOnPreRun(Module["preRun"].shift());
            }
        } callRuntimeCallbacks(onPreRuns); }
        function initRuntime() { runtimeInitialized = true; wasmExports["Q"](); }
        function postRun() { if (Module["postRun"]) {
            if (typeof Module["postRun"] == "function")
                Module["postRun"] = [Module["postRun"]];
            while (Module["postRun"].length) {
                addOnPostRun(Module["postRun"].shift());
            }
        } callRuntimeCallbacks(onPostRuns); }
        var runDependencies = 0;
        var dependenciesFulfilled = null;
        function addRunDependency(id) { runDependencies++; Module["monitorRunDependencies"]?.(runDependencies); }
        function removeRunDependency(id) { runDependencies--; Module["monitorRunDependencies"]?.(runDependencies); if (runDependencies == 0) {
            if (dependenciesFulfilled) {
                var callback = dependenciesFulfilled;
                dependenciesFulfilled = null;
                callback();
            }
        } }
        function abort(what) { Module["onAbort"]?.(what); what = "Aborted(" + what + ")"; err(what); ABORT = true; what += ". Build with -sASSERTIONS for more info."; var e = new WebAssembly.RuntimeError(what); readyPromiseReject(e); throw e; }
        var wasmBinaryFile;
        function findWasmBinary() { if (Module["locateFile"]) {
            return locateFile("hnsw_main.wasm");
        } return new URL(/* asset import */ __webpack_require__(233), __webpack_require__.b).href; }
        function getBinarySync(file) { if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
        } if (readBinary) {
            return readBinary(file);
        } throw "both async and sync fetching of the wasm failed"; }
        async function getWasmBinary(binaryFile) { if (!wasmBinary) {
            try {
                var response = await readAsync(binaryFile);
                return new Uint8Array(response);
            }
            catch { }
        } return getBinarySync(binaryFile); }
        async function instantiateArrayBuffer(binaryFile, imports) { try {
            var binary = await getWasmBinary(binaryFile);
            var instance = await WebAssembly.instantiate(binary, imports);
            return instance;
        }
        catch (reason) {
            err(`failed to asynchronously prepare wasm: ${reason}`);
            abort(reason);
        } }
        async function instantiateAsync(binary, binaryFile, imports) { if (!binary && typeof WebAssembly.instantiateStreaming == "function") {
            try {
                var response = fetch(binaryFile, { credentials: "same-origin" });
                var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
                return instantiationResult;
            }
            catch (reason) {
                err(`wasm streaming compile failed: ${reason}`);
                err("falling back to ArrayBuffer instantiation");
            }
        } return instantiateArrayBuffer(binaryFile, imports); }
        function getWasmImports() { return { a: wasmImports }; }
        async function createWasm() { function receiveInstance(instance, module) { wasmExports = instance.exports; wasmExports = Asyncify.instrumentWasmExports(wasmExports); wasmMemory = wasmExports["P"]; updateMemoryViews(); removeRunDependency("wasm-instantiate"); return wasmExports; } addRunDependency("wasm-instantiate"); function receiveInstantiationResult(result) { return receiveInstance(result["instance"]); } var info = getWasmImports(); if (Module["instantiateWasm"]) {
            return new Promise((resolve, reject) => { Module["instantiateWasm"](info, (mod, inst) => { receiveInstance(mod, inst); resolve(mod.exports); }); });
        } wasmBinaryFile ??= findWasmBinary(); try {
            var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
            var exports = receiveInstantiationResult(result);
            return exports;
        }
        catch (e) {
            readyPromiseReject(e);
            return Promise.reject(e);
        } }
        class ExitStatus {
            name = "ExitStatus";
            constructor(status) { this.message = `Program terminated with exit(${status})`; this.status = status; }
        }
        var callRuntimeCallbacks = callbacks => { while (callbacks.length > 0) {
            callbacks.shift()(Module);
        } };
        var onPostRuns = [];
        var addOnPostRun = cb => onPostRuns.unshift(cb);
        var onPreRuns = [];
        var addOnPreRun = cb => onPreRuns.unshift(cb);
        var noExitRuntime = Module["noExitRuntime"] || true;
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder : undefined;
        var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => { var endIdx = idx + maxBytesToRead; var endPtr = idx; while (heapOrArray[endPtr] && !(endPtr >= endIdx))
            ++endPtr; if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
        } var str = ""; while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            }
            else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0);
            }
            else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
        } return str; };
        var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        var ___assert_fail = (condition, filename, line, func) => abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
        class ExceptionInfo {
            constructor(excPtr) { this.excPtr = excPtr; this.ptr = excPtr - 24; }
            set_type(type) { HEAPU32[this.ptr + 4 >> 2] = type; }
            get_type() { return HEAPU32[this.ptr + 4 >> 2]; }
            set_destructor(destructor) { HEAPU32[this.ptr + 8 >> 2] = destructor; }
            get_destructor() { return HEAPU32[this.ptr + 8 >> 2]; }
            set_caught(caught) { caught = caught ? 1 : 0; HEAP8[this.ptr + 12] = caught; }
            get_caught() { return HEAP8[this.ptr + 12] != 0; }
            set_rethrown(rethrown) { rethrown = rethrown ? 1 : 0; HEAP8[this.ptr + 13] = rethrown; }
            get_rethrown() { return HEAP8[this.ptr + 13] != 0; }
            init(type, destructor) { this.set_adjusted_ptr(0); this.set_type(type); this.set_destructor(destructor); }
            set_adjusted_ptr(adjustedPtr) { HEAPU32[this.ptr + 16 >> 2] = adjustedPtr; }
            get_adjusted_ptr() { return HEAPU32[this.ptr + 16 >> 2]; }
        }
        var exceptionLast = 0;
        var uncaughtExceptionCount = 0;
        var ___cxa_throw = (ptr, type, destructor) => { var info = new ExceptionInfo(ptr); info.init(type, destructor); exceptionLast = ptr; uncaughtExceptionCount++; throw exceptionLast; };
        var __abort_js = () => abort("");
        var structRegistrations = {};
        var runDestructors = destructors => { while (destructors.length) {
            var ptr = destructors.pop();
            var del = destructors.pop();
            del(ptr);
        } };
        function readPointer(pointer) { return this["fromWireType"](HEAPU32[pointer >> 2]); }
        var awaitingDependencies = {};
        var registeredTypes = {};
        var typeDependencies = {};
        var InternalError = Module["InternalError"] = class InternalError extends Error {
            constructor(message) { super(message); this.name = "InternalError"; }
        };
        var throwInternalError = message => { throw new InternalError(message); };
        var whenDependentTypesAreResolved = (myTypes, dependentTypes, getTypeConverters) => { myTypes.forEach(type => typeDependencies[type] = dependentTypes); function onComplete(typeConverters) { var myTypeConverters = getTypeConverters(typeConverters); if (myTypeConverters.length !== myTypes.length) {
            throwInternalError("Mismatched type converter count");
        } for (var i = 0; i < myTypes.length; ++i) {
            registerType(myTypes[i], myTypeConverters[i]);
        } } var typeConverters = new Array(dependentTypes.length); var unregisteredTypes = []; var registered = 0; dependentTypes.forEach((dt, i) => { if (registeredTypes.hasOwnProperty(dt)) {
            typeConverters[i] = registeredTypes[dt];
        }
        else {
            unregisteredTypes.push(dt);
            if (!awaitingDependencies.hasOwnProperty(dt)) {
                awaitingDependencies[dt] = [];
            }
            awaitingDependencies[dt].push(() => { typeConverters[i] = registeredTypes[dt]; ++registered; if (registered === unregisteredTypes.length) {
                onComplete(typeConverters);
            } });
        } }); if (0 === unregisteredTypes.length) {
            onComplete(typeConverters);
        } };
        var __embind_finalize_value_object = structType => { var reg = structRegistrations[structType]; delete structRegistrations[structType]; var rawConstructor = reg.rawConstructor; var rawDestructor = reg.rawDestructor; var fieldRecords = reg.fields; var fieldTypes = fieldRecords.map(field => field.getterReturnType).concat(fieldRecords.map(field => field.setterArgumentType)); whenDependentTypesAreResolved([structType], fieldTypes, fieldTypes => { var fields = {}; fieldRecords.forEach((field, i) => { var fieldName = field.fieldName; var getterReturnType = fieldTypes[i]; var optional = fieldTypes[i].optional; var getter = field.getter; var getterContext = field.getterContext; var setterArgumentType = fieldTypes[i + fieldRecords.length]; var setter = field.setter; var setterContext = field.setterContext; fields[fieldName] = { read: ptr => getterReturnType["fromWireType"](getter(getterContext, ptr)), write: (ptr, o) => { var destructors = []; setter(setterContext, ptr, setterArgumentType["toWireType"](destructors, o)); runDestructors(destructors); }, optional }; }); return [{ name: reg.name, fromWireType: ptr => { var rv = {}; for (var i in fields) {
                    rv[i] = fields[i].read(ptr);
                } rawDestructor(ptr); return rv; }, toWireType: (destructors, o) => { for (var fieldName in fields) {
                    if (!(fieldName in o) && !fields[fieldName].optional) {
                        throw new TypeError(`Missing field: "${fieldName}"`);
                    }
                } var ptr = rawConstructor(); for (fieldName in fields) {
                    fields[fieldName].write(ptr, o[fieldName]);
                } if (destructors !== null) {
                    destructors.push(rawDestructor, ptr);
                } return ptr; }, argPackAdvance: GenericWireTypeSize, readValueFromPointer: readPointer, destructorFunction: rawDestructor }]; }); };
        var embindRepr = v => { if (v === null) {
            return "null";
        } var t = typeof v; if (t === "object" || t === "array" || t === "function") {
            return v.toString();
        }
        else {
            return "" + v;
        } };
        var embind_init_charCodes = () => { var codes = new Array(256); for (var i = 0; i < 256; ++i) {
            codes[i] = String.fromCharCode(i);
        } embind_charCodes = codes; };
        var embind_charCodes;
        var readLatin1String = ptr => { var ret = ""; var c = ptr; while (HEAPU8[c]) {
            ret += embind_charCodes[HEAPU8[c++]];
        } return ret; };
        var BindingError = Module["BindingError"] = class BindingError extends Error {
            constructor(message) { super(message); this.name = "BindingError"; }
        };
        var throwBindingError = message => { throw new BindingError(message); };
        function sharedRegisterType(rawType, registeredInstance, options = {}) { var name = registeredInstance.name; if (!rawType) {
            throwBindingError(`type "${name}" must have a positive integer typeid pointer`);
        } if (registeredTypes.hasOwnProperty(rawType)) {
            if (options.ignoreDuplicateRegistrations) {
                return;
            }
            else {
                throwBindingError(`Cannot register type '${name}' twice`);
            }
        } registeredTypes[rawType] = registeredInstance; delete typeDependencies[rawType]; if (awaitingDependencies.hasOwnProperty(rawType)) {
            var callbacks = awaitingDependencies[rawType];
            delete awaitingDependencies[rawType];
            callbacks.forEach(cb => cb());
        } }
        function registerType(rawType, registeredInstance, options = {}) { return sharedRegisterType(rawType, registeredInstance, options); }
        var integerReadValueFromPointer = (name, width, signed) => { switch (width) {
            case 1: return signed ? pointer => HEAP8[pointer] : pointer => HEAPU8[pointer];
            case 2: return signed ? pointer => HEAP16[pointer >> 1] : pointer => HEAPU16[pointer >> 1];
            case 4: return signed ? pointer => HEAP32[pointer >> 2] : pointer => HEAPU32[pointer >> 2];
            case 8: return signed ? pointer => HEAP64[pointer >> 3] : pointer => HEAPU64[pointer >> 3];
            default: throw new TypeError(`invalid integer width (${width}): ${name}`);
        } };
        var __embind_register_bigint = (primitiveType, name, size, minRange, maxRange) => { name = readLatin1String(name); var isUnsignedType = name.indexOf("u") != -1; if (isUnsignedType) {
            maxRange = (1n << 64n) - 1n;
        } registerType(primitiveType, { name, fromWireType: value => value, toWireType: function (destructors, value) { if (typeof value != "bigint" && typeof value != "number") {
                throw new TypeError(`Cannot convert "${embindRepr(value)}" to ${this.name}`);
            } if (typeof value == "number") {
                value = BigInt(value);
            } return value; }, argPackAdvance: GenericWireTypeSize, readValueFromPointer: integerReadValueFromPointer(name, size, !isUnsignedType), destructorFunction: null }); };
        var GenericWireTypeSize = 8;
        var __embind_register_bool = (rawType, name, trueValue, falseValue) => { name = readLatin1String(name); registerType(rawType, { name, fromWireType: function (wt) { return !!wt; }, toWireType: function (destructors, o) { return o ? trueValue : falseValue; }, argPackAdvance: GenericWireTypeSize, readValueFromPointer: function (pointer) { return this["fromWireType"](HEAPU8[pointer]); }, destructorFunction: null }); };
        var shallowCopyInternalPointer = o => ({ count: o.count, deleteScheduled: o.deleteScheduled, preservePointerOnDelete: o.preservePointerOnDelete, ptr: o.ptr, ptrType: o.ptrType, smartPtr: o.smartPtr, smartPtrType: o.smartPtrType });
        var throwInstanceAlreadyDeleted = obj => { function getInstanceTypeName(handle) { return handle.$$.ptrType.registeredClass.name; } throwBindingError(getInstanceTypeName(obj) + " instance already deleted"); };
        var finalizationRegistry = false;
        var detachFinalizer = handle => { };
        var runDestructor = $$ => { if ($$.smartPtr) {
            $$.smartPtrType.rawDestructor($$.smartPtr);
        }
        else {
            $$.ptrType.registeredClass.rawDestructor($$.ptr);
        } };
        var releaseClassHandle = $$ => { $$.count.value -= 1; var toDelete = 0 === $$.count.value; if (toDelete) {
            runDestructor($$);
        } };
        var attachFinalizer = handle => { if ("undefined" === typeof FinalizationRegistry) {
            attachFinalizer = handle => handle;
            return handle;
        } finalizationRegistry = new FinalizationRegistry(info => { releaseClassHandle(info.$$); }); attachFinalizer = handle => { var $$ = handle.$$; var hasSmartPtr = !!$$.smartPtr; if (hasSmartPtr) {
            var info = { $$ };
            finalizationRegistry.register(handle, info, handle);
        } return handle; }; detachFinalizer = handle => finalizationRegistry.unregister(handle); return attachFinalizer(handle); };
        var deletionQueue = [];
        var flushPendingDeletes = () => { while (deletionQueue.length) {
            var obj = deletionQueue.pop();
            obj.$$.deleteScheduled = false;
            obj["delete"]();
        } };
        var delayFunction;
        var init_ClassHandle = () => { let proto = ClassHandle.prototype; Object.assign(proto, { isAliasOf(other) { if (!(this instanceof ClassHandle)) {
                return false;
            } if (!(other instanceof ClassHandle)) {
                return false;
            } var leftClass = this.$$.ptrType.registeredClass; var left = this.$$.ptr; other.$$ = other.$$; var rightClass = other.$$.ptrType.registeredClass; var right = other.$$.ptr; while (leftClass.baseClass) {
                left = leftClass.upcast(left);
                leftClass = leftClass.baseClass;
            } while (rightClass.baseClass) {
                right = rightClass.upcast(right);
                rightClass = rightClass.baseClass;
            } return leftClass === rightClass && left === right; }, clone() { if (!this.$$.ptr) {
                throwInstanceAlreadyDeleted(this);
            } if (this.$$.preservePointerOnDelete) {
                this.$$.count.value += 1;
                return this;
            }
            else {
                var clone = attachFinalizer(Object.create(Object.getPrototypeOf(this), { $$: { value: shallowCopyInternalPointer(this.$$) } }));
                clone.$$.count.value += 1;
                clone.$$.deleteScheduled = false;
                return clone;
            } }, delete() { if (!this.$$.ptr) {
                throwInstanceAlreadyDeleted(this);
            } if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
                throwBindingError("Object already scheduled for deletion");
            } detachFinalizer(this); releaseClassHandle(this.$$); if (!this.$$.preservePointerOnDelete) {
                this.$$.smartPtr = undefined;
                this.$$.ptr = undefined;
            } }, isDeleted() { return !this.$$.ptr; }, deleteLater() { if (!this.$$.ptr) {
                throwInstanceAlreadyDeleted(this);
            } if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
                throwBindingError("Object already scheduled for deletion");
            } deletionQueue.push(this); if (deletionQueue.length === 1 && delayFunction) {
                delayFunction(flushPendingDeletes);
            } this.$$.deleteScheduled = true; return this; } }); const symbolDispose = Symbol.dispose; if (symbolDispose) {
            proto[symbolDispose] = proto["delete"];
        } };
        function ClassHandle() { }
        var createNamedFunction = (name, func) => Object.defineProperty(func, "name", { value: name });
        var registeredPointers = {};
        var ensureOverloadTable = (proto, methodName, humanName) => { if (undefined === proto[methodName].overloadTable) {
            var prevFunc = proto[methodName];
            proto[methodName] = function (...args) { if (!proto[methodName].overloadTable.hasOwnProperty(args.length)) {
                throwBindingError(`Function '${humanName}' called with an invalid number of arguments (${args.length}) - expects one of (${proto[methodName].overloadTable})!`);
            } return proto[methodName].overloadTable[args.length].apply(this, args); };
            proto[methodName].overloadTable = [];
            proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
        } };
        var exposePublicSymbol = (name, value, numArguments) => { if (Module.hasOwnProperty(name)) {
            if (undefined === numArguments || undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments]) {
                throwBindingError(`Cannot register public name '${name}' twice`);
            }
            ensureOverloadTable(Module, name, name);
            if (Module[name].overloadTable.hasOwnProperty(numArguments)) {
                throwBindingError(`Cannot register multiple overloads of a function with the same number of arguments (${numArguments})!`);
            }
            Module[name].overloadTable[numArguments] = value;
        }
        else {
            Module[name] = value;
            Module[name].argCount = numArguments;
        } };
        var char_0 = 48;
        var char_9 = 57;
        var makeLegalFunctionName = name => { name = name.replace(/[^a-zA-Z0-9_]/g, "$"); var f = name.charCodeAt(0); if (f >= char_0 && f <= char_9) {
            return `_${name}`;
        } return name; };
        function RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast) { this.name = name; this.constructor = constructor; this.instancePrototype = instancePrototype; this.rawDestructor = rawDestructor; this.baseClass = baseClass; this.getActualType = getActualType; this.upcast = upcast; this.downcast = downcast; this.pureVirtualFunctions = []; }
        var upcastPointer = (ptr, ptrClass, desiredClass) => { while (ptrClass !== desiredClass) {
            if (!ptrClass.upcast) {
                throwBindingError(`Expected null or instance of ${desiredClass.name}, got an instance of ${ptrClass.name}`);
            }
            ptr = ptrClass.upcast(ptr);
            ptrClass = ptrClass.baseClass;
        } return ptr; };
        function constNoSmartPtrRawPointerToWireType(destructors, handle) { if (handle === null) {
            if (this.isReference) {
                throwBindingError(`null is not a valid ${this.name}`);
            }
            return 0;
        } if (!handle.$$) {
            throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
        } if (!handle.$$.ptr) {
            throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
        } var handleClass = handle.$$.ptrType.registeredClass; var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass); return ptr; }
        function genericPointerToWireType(destructors, handle) { var ptr; if (handle === null) {
            if (this.isReference) {
                throwBindingError(`null is not a valid ${this.name}`);
            }
            if (this.isSmartPointer) {
                ptr = this.rawConstructor();
                if (destructors !== null) {
                    destructors.push(this.rawDestructor, ptr);
                }
                return ptr;
            }
            else {
                return 0;
            }
        } if (!handle || !handle.$$) {
            throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
        } if (!handle.$$.ptr) {
            throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
        } if (!this.isConst && handle.$$.ptrType.isConst) {
            throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`);
        } var handleClass = handle.$$.ptrType.registeredClass; ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass); if (this.isSmartPointer) {
            if (undefined === handle.$$.smartPtr) {
                throwBindingError("Passing raw pointer to smart pointer is illegal");
            }
            switch (this.sharingPolicy) {
                case 0:
                    if (handle.$$.smartPtrType === this) {
                        ptr = handle.$$.smartPtr;
                    }
                    else {
                        throwBindingError(`Cannot convert argument of type ${handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name} to parameter type ${this.name}`);
                    }
                    break;
                case 1:
                    ptr = handle.$$.smartPtr;
                    break;
                case 2:
                    if (handle.$$.smartPtrType === this) {
                        ptr = handle.$$.smartPtr;
                    }
                    else {
                        var clonedHandle = handle["clone"]();
                        ptr = this.rawShare(ptr, Emval.toHandle(() => clonedHandle["delete"]()));
                        if (destructors !== null) {
                            destructors.push(this.rawDestructor, ptr);
                        }
                    }
                    break;
                default: throwBindingError("Unsupporting sharing policy");
            }
        } return ptr; }
        function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) { if (handle === null) {
            if (this.isReference) {
                throwBindingError(`null is not a valid ${this.name}`);
            }
            return 0;
        } if (!handle.$$) {
            throwBindingError(`Cannot pass "${embindRepr(handle)}" as a ${this.name}`);
        } if (!handle.$$.ptr) {
            throwBindingError(`Cannot pass deleted object as a pointer of type ${this.name}`);
        } if (handle.$$.ptrType.isConst) {
            throwBindingError(`Cannot convert argument of type ${handle.$$.ptrType.name} to parameter type ${this.name}`);
        } var handleClass = handle.$$.ptrType.registeredClass; var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass); return ptr; }
        var downcastPointer = (ptr, ptrClass, desiredClass) => { if (ptrClass === desiredClass) {
            return ptr;
        } if (undefined === desiredClass.baseClass) {
            return null;
        } var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass); if (rv === null) {
            return null;
        } return desiredClass.downcast(rv); };
        var registeredInstances = {};
        var getBasestPointer = (class_, ptr) => { if (ptr === undefined) {
            throwBindingError("ptr should not be undefined");
        } while (class_.baseClass) {
            ptr = class_.upcast(ptr);
            class_ = class_.baseClass;
        } return ptr; };
        var getInheritedInstance = (class_, ptr) => { ptr = getBasestPointer(class_, ptr); return registeredInstances[ptr]; };
        var makeClassHandle = (prototype, record) => { if (!record.ptrType || !record.ptr) {
            throwInternalError("makeClassHandle requires ptr and ptrType");
        } var hasSmartPtrType = !!record.smartPtrType; var hasSmartPtr = !!record.smartPtr; if (hasSmartPtrType !== hasSmartPtr) {
            throwInternalError("Both smartPtrType and smartPtr must be specified");
        } record.count = { value: 1 }; return attachFinalizer(Object.create(prototype, { $$: { value: record, writable: true } })); };
        function RegisteredPointer_fromWireType(ptr) { var rawPointer = this.getPointee(ptr); if (!rawPointer) {
            this.destructor(ptr);
            return null;
        } var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer); if (undefined !== registeredInstance) {
            if (0 === registeredInstance.$$.count.value) {
                registeredInstance.$$.ptr = rawPointer;
                registeredInstance.$$.smartPtr = ptr;
                return registeredInstance["clone"]();
            }
            else {
                var rv = registeredInstance["clone"]();
                this.destructor(ptr);
                return rv;
            }
        } function makeDefaultHandle() { if (this.isSmartPointer) {
            return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: rawPointer, smartPtrType: this, smartPtr: ptr });
        }
        else {
            return makeClassHandle(this.registeredClass.instancePrototype, { ptrType: this, ptr });
        } } var actualType = this.registeredClass.getActualType(rawPointer); var registeredPointerRecord = registeredPointers[actualType]; if (!registeredPointerRecord) {
            return makeDefaultHandle.call(this);
        } var toType; if (this.isConst) {
            toType = registeredPointerRecord.constPointerType;
        }
        else {
            toType = registeredPointerRecord.pointerType;
        } var dp = downcastPointer(rawPointer, this.registeredClass, toType.registeredClass); if (dp === null) {
            return makeDefaultHandle.call(this);
        } if (this.isSmartPointer) {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp, smartPtrType: this, smartPtr: ptr });
        }
        else {
            return makeClassHandle(toType.registeredClass.instancePrototype, { ptrType: toType, ptr: dp });
        } }
        var init_RegisteredPointer = () => { Object.assign(RegisteredPointer.prototype, { getPointee(ptr) { if (this.rawGetPointee) {
                ptr = this.rawGetPointee(ptr);
            } return ptr; }, destructor(ptr) { this.rawDestructor?.(ptr); }, argPackAdvance: GenericWireTypeSize, readValueFromPointer: readPointer, fromWireType: RegisteredPointer_fromWireType }); };
        function RegisteredPointer(name, registeredClass, isReference, isConst, isSmartPointer, pointeeType, sharingPolicy, rawGetPointee, rawConstructor, rawShare, rawDestructor) { this.name = name; this.registeredClass = registeredClass; this.isReference = isReference; this.isConst = isConst; this.isSmartPointer = isSmartPointer; this.pointeeType = pointeeType; this.sharingPolicy = sharingPolicy; this.rawGetPointee = rawGetPointee; this.rawConstructor = rawConstructor; this.rawShare = rawShare; this.rawDestructor = rawDestructor; if (!isSmartPointer && registeredClass.baseClass === undefined) {
            if (isConst) {
                this["toWireType"] = constNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
            }
            else {
                this["toWireType"] = nonConstNoSmartPtrRawPointerToWireType;
                this.destructorFunction = null;
            }
        }
        else {
            this["toWireType"] = genericPointerToWireType;
        } }
        var replacePublicSymbol = (name, value, numArguments) => { if (!Module.hasOwnProperty(name)) {
            throwInternalError("Replacing nonexistent public symbol");
        } if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
            Module[name].overloadTable[numArguments] = value;
        }
        else {
            Module[name] = value;
            Module[name].argCount = numArguments;
        } };
        var dynCallLegacy = (sig, ptr, args) => { sig = sig.replace(/p/g, "i"); var f = Module["dynCall_" + sig]; return f(ptr, ...args); };
        var dynCall = (sig, ptr, args = [], promising = false) => { var rtn = dynCallLegacy(sig, ptr, args); return rtn; };
        var getDynCaller = (sig, ptr, promising = false) => (...args) => dynCall(sig, ptr, args, promising);
        var embind__requireFunction = (signature, rawFunction, isAsync = false) => { signature = readLatin1String(signature); function makeDynCaller() { return getDynCaller(signature, rawFunction); } var fp = makeDynCaller(); if (typeof fp != "function") {
            throwBindingError(`unknown function pointer with signature ${signature}: ${rawFunction}`);
        } return fp; };
        class UnboundTypeError extends Error {
        }
        var getTypeName = type => { var ptr = ___getTypeName(type); var rv = readLatin1String(ptr); _free(ptr); return rv; };
        var throwUnboundTypeError = (message, types) => { var unboundTypes = []; var seen = {}; function visit(type) { if (seen[type]) {
            return;
        } if (registeredTypes[type]) {
            return;
        } if (typeDependencies[type]) {
            typeDependencies[type].forEach(visit);
            return;
        } unboundTypes.push(type); seen[type] = true; } types.forEach(visit); throw new UnboundTypeError(`${message}: ` + unboundTypes.map(getTypeName).join([", "])); };
        var __embind_register_class = (rawType, rawPointerType, rawConstPointerType, baseClassRawType, getActualTypeSignature, getActualType, upcastSignature, upcast, downcastSignature, downcast, name, destructorSignature, rawDestructor) => { name = readLatin1String(name); getActualType = embind__requireFunction(getActualTypeSignature, getActualType); upcast &&= embind__requireFunction(upcastSignature, upcast); downcast &&= embind__requireFunction(downcastSignature, downcast); rawDestructor = embind__requireFunction(destructorSignature, rawDestructor); var legalFunctionName = makeLegalFunctionName(name); exposePublicSymbol(legalFunctionName, function () { throwUnboundTypeError(`Cannot construct ${name} due to unbound types`, [baseClassRawType]); }); whenDependentTypesAreResolved([rawType, rawPointerType, rawConstPointerType], baseClassRawType ? [baseClassRawType] : [], base => { base = base[0]; var baseClass; var basePrototype; if (baseClassRawType) {
            baseClass = base.registeredClass;
            basePrototype = baseClass.instancePrototype;
        }
        else {
            basePrototype = ClassHandle.prototype;
        } var constructor = createNamedFunction(name, function (...args) { if (Object.getPrototypeOf(this) !== instancePrototype) {
            throw new BindingError(`Use 'new' to construct ${name}`);
        } if (undefined === registeredClass.constructor_body) {
            throw new BindingError(`${name} has no accessible constructor`);
        } var body = registeredClass.constructor_body[args.length]; if (undefined === body) {
            throw new BindingError(`Tried to invoke ctor of ${name} with invalid number of parameters (${args.length}) - expected (${Object.keys(registeredClass.constructor_body).toString()}) parameters instead!`);
        } return body.apply(this, args); }); var instancePrototype = Object.create(basePrototype, { constructor: { value: constructor } }); constructor.prototype = instancePrototype; var registeredClass = new RegisteredClass(name, constructor, instancePrototype, rawDestructor, baseClass, getActualType, upcast, downcast); if (registeredClass.baseClass) {
            registeredClass.baseClass.__derivedClasses ??= [];
            registeredClass.baseClass.__derivedClasses.push(registeredClass);
        } var referenceConverter = new RegisteredPointer(name, registeredClass, true, false, false); var pointerConverter = new RegisteredPointer(name + "*", registeredClass, false, false, false); var constPointerConverter = new RegisteredPointer(name + " const*", registeredClass, false, true, false); registeredPointers[rawType] = { pointerType: pointerConverter, constPointerType: constPointerConverter }; replacePublicSymbol(legalFunctionName, constructor); return [referenceConverter, pointerConverter, constPointerConverter]; }); };
        var heap32VectorToArray = (count, firstElement) => { var array = []; for (var i = 0; i < count; i++) {
            array.push(HEAPU32[firstElement + i * 4 >> 2]);
        } return array; };
        function usesDestructorStack(argTypes) { for (var i = 1; i < argTypes.length; ++i) {
            if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) {
                return true;
            }
        } return false; }
        function createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync) { var needsDestructorStack = usesDestructorStack(argTypes); var argCount = argTypes.length - 2; var argsList = []; var argsListWired = ["fn"]; if (isClassMethodFunc) {
            argsListWired.push("thisWired");
        } for (var i = 0; i < argCount; ++i) {
            argsList.push(`arg${i}`);
            argsListWired.push(`arg${i}Wired`);
        } argsList = argsList.join(","); argsListWired = argsListWired.join(","); var invokerFnBody = `return function (${argsList}) {\n`; if (needsDestructorStack) {
            invokerFnBody += "var destructors = [];\n";
        } var dtorStack = needsDestructorStack ? "destructors" : "null"; var args1 = ["humanName", "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"]; if (isClassMethodFunc) {
            invokerFnBody += `var thisWired = classParam['toWireType'](${dtorStack}, this);\n`;
        } for (var i = 0; i < argCount; ++i) {
            invokerFnBody += `var arg${i}Wired = argType${i}['toWireType'](${dtorStack}, arg${i});\n`;
            args1.push(`argType${i}`);
        } invokerFnBody += (returns || isAsync ? "var rv = " : "") + `invoker(${argsListWired});\n`; var returnVal = returns ? "rv" : ""; args1.push("Asyncify"); invokerFnBody += `function onDone(${returnVal}) {\n`; if (needsDestructorStack) {
            invokerFnBody += "runDestructors(destructors);\n";
        }
        else {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
                var paramName = i === 1 ? "thisWired" : "arg" + (i - 2) + "Wired";
                if (argTypes[i].destructorFunction !== null) {
                    invokerFnBody += `${paramName}_dtor(${paramName});\n`;
                    args1.push(`${paramName}_dtor`);
                }
            }
        } if (returns) {
            invokerFnBody += "var ret = retType['fromWireType'](rv);\n" + "return ret;\n";
        }
        else { } invokerFnBody += "}\n"; invokerFnBody += `return Asyncify.currData ? Asyncify.whenDone().then(onDone) : onDone(${returnVal});\n`; invokerFnBody += "}\n"; return [args1, invokerFnBody]; }
        var runAndAbortIfError = func => { try {
            return func();
        }
        catch (e) {
            abort(e);
        } };
        var handleException = e => { if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
        } quit_(1, e); };
        var runtimeKeepaliveCounter = 0;
        var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
        var _proc_exit = code => { EXITSTATUS = code; if (!keepRuntimeAlive()) {
            Module["onExit"]?.(code);
            ABORT = true;
        } quit_(code, new ExitStatus(code)); };
        var exitJS = (status, implicit) => { EXITSTATUS = status; _proc_exit(status); };
        var _exit = exitJS;
        var maybeExit = () => { if (!keepRuntimeAlive()) {
            try {
                _exit(EXITSTATUS);
            }
            catch (e) {
                handleException(e);
            }
        } };
        var callUserCallback = func => { if (ABORT) {
            return;
        } try {
            func();
            maybeExit();
        }
        catch (e) {
            handleException(e);
        } };
        var Asyncify = { instrumentWasmImports(imports) { var importPattern = /^(invoke_.*|__asyncjs__.*)$/; for (let [x, original] of Object.entries(imports)) {
                if (typeof original == "function") {
                    let isAsyncifyImport = original.isAsync || importPattern.test(x);
                }
            } }, instrumentWasmExports(exports) { var ret = {}; for (let [x, original] of Object.entries(exports)) {
                if (typeof original == "function") {
                    ret[x] = (...args) => { Asyncify.exportCallStack.push(x); try {
                        return original(...args);
                    }
                    finally {
                        if (!ABORT) {
                            var y = Asyncify.exportCallStack.pop();
                            Asyncify.maybeStopUnwind();
                        }
                    } };
                }
                else {
                    ret[x] = original;
                }
            } return ret; }, State: { Normal: 0, Unwinding: 1, Rewinding: 2, Disabled: 3 }, state: 0, StackSize: 4096, currData: null, handleSleepReturnValue: 0, exportCallStack: [], callStackNameToId: {}, callStackIdToName: {}, callStackId: 0, asyncPromiseHandlers: null, sleepCallbacks: [], getCallStackId(funcName) { var id = Asyncify.callStackNameToId[funcName]; if (id === undefined) {
                id = Asyncify.callStackId++;
                Asyncify.callStackNameToId[funcName] = id;
                Asyncify.callStackIdToName[id] = funcName;
            } return id; }, maybeStopUnwind() { if (Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0) {
                Asyncify.state = Asyncify.State.Normal;
                runAndAbortIfError(_asyncify_stop_unwind);
                if (typeof Fibers != "undefined") {
                    Fibers.trampoline();
                }
            } }, whenDone() { return new Promise((resolve, reject) => { Asyncify.asyncPromiseHandlers = { resolve, reject }; }); }, allocateData() { var ptr = _malloc(12 + Asyncify.StackSize); Asyncify.setDataHeader(ptr, ptr + 12, Asyncify.StackSize); Asyncify.setDataRewindFunc(ptr); return ptr; }, setDataHeader(ptr, stack, stackSize) { HEAPU32[ptr >> 2] = stack; HEAPU32[ptr + 4 >> 2] = stack + stackSize; }, setDataRewindFunc(ptr) { var bottomOfCallStack = Asyncify.exportCallStack[0]; var rewindId = Asyncify.getCallStackId(bottomOfCallStack); HEAP32[ptr + 8 >> 2] = rewindId; }, getDataRewindFuncName(ptr) { var id = HEAP32[ptr + 8 >> 2]; var name = Asyncify.callStackIdToName[id]; return name; }, getDataRewindFunc(name) { var func = wasmExports[name]; return func; }, doRewind(ptr) { var name = Asyncify.getDataRewindFuncName(ptr); var func = Asyncify.getDataRewindFunc(name); return func(); }, handleSleep(startAsync) { if (ABORT)
                return; if (Asyncify.state === Asyncify.State.Normal) {
                var reachedCallback = false;
                var reachedAfterCallback = false;
                startAsync((handleSleepReturnValue = 0) => { if (ABORT)
                    return; Asyncify.handleSleepReturnValue = handleSleepReturnValue; reachedCallback = true; if (!reachedAfterCallback) {
                    return;
                } Asyncify.state = Asyncify.State.Rewinding; runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData)); if (typeof MainLoop != "undefined" && MainLoop.func) {
                    MainLoop.resume();
                } var asyncWasmReturnValue, isError = false; try {
                    asyncWasmReturnValue = Asyncify.doRewind(Asyncify.currData);
                }
                catch (err) {
                    asyncWasmReturnValue = err;
                    isError = true;
                } var handled = false; if (!Asyncify.currData) {
                    var asyncPromiseHandlers = Asyncify.asyncPromiseHandlers;
                    if (asyncPromiseHandlers) {
                        Asyncify.asyncPromiseHandlers = null;
                        (isError ? asyncPromiseHandlers.reject : asyncPromiseHandlers.resolve)(asyncWasmReturnValue);
                        handled = true;
                    }
                } if (isError && !handled) {
                    throw asyncWasmReturnValue;
                } });
                reachedAfterCallback = true;
                if (!reachedCallback) {
                    Asyncify.state = Asyncify.State.Unwinding;
                    Asyncify.currData = Asyncify.allocateData();
                    if (typeof MainLoop != "undefined" && MainLoop.func) {
                        MainLoop.pause();
                    }
                    runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData));
                }
            }
            else if (Asyncify.state === Asyncify.State.Rewinding) {
                Asyncify.state = Asyncify.State.Normal;
                runAndAbortIfError(_asyncify_stop_rewind);
                _free(Asyncify.currData);
                Asyncify.currData = null;
                Asyncify.sleepCallbacks.forEach(callUserCallback);
            }
            else {
                abort(`invalid state: ${Asyncify.state}`);
            } return Asyncify.handleSleepReturnValue; }, handleAsync(startAsync) { return Asyncify.handleSleep(wakeUp => { startAsync().then(wakeUp); }); } };
        function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc, isAsync) { var argCount = argTypes.length; if (argCount < 2) {
            throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
        } var isClassMethodFunc = argTypes[1] !== null && classType !== null; var needsDestructorStack = usesDestructorStack(argTypes); var returns = argTypes[0].name !== "void"; var closureArgs = [humanName, throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]]; for (var i = 0; i < argCount - 2; ++i) {
            closureArgs.push(argTypes[i + 2]);
        } closureArgs.push(Asyncify); if (!needsDestructorStack) {
            for (var i = isClassMethodFunc ? 1 : 2; i < argTypes.length; ++i) {
                if (argTypes[i].destructorFunction !== null) {
                    closureArgs.push(argTypes[i].destructorFunction);
                }
            }
        } let [args, invokerFnBody] = createJsInvoker(argTypes, isClassMethodFunc, returns, isAsync); var invokerFn = new Function(...args, invokerFnBody)(...closureArgs); return createNamedFunction(humanName, invokerFn); }
        var __embind_register_class_constructor = (rawClassType, argCount, rawArgTypesAddr, invokerSignature, invoker, rawConstructor) => { var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr); invoker = embind__requireFunction(invokerSignature, invoker); whenDependentTypesAreResolved([], [rawClassType], classType => { classType = classType[0]; var humanName = `constructor ${classType.name}`; if (undefined === classType.registeredClass.constructor_body) {
            classType.registeredClass.constructor_body = [];
        } if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
            throw new BindingError(`Cannot register multiple constructors with identical number of parameters (${argCount - 1}) for class '${classType.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        } classType.registeredClass.constructor_body[argCount - 1] = () => { throwUnboundTypeError(`Cannot construct ${classType.name} due to unbound types`, rawArgTypes); }; whenDependentTypesAreResolved([], rawArgTypes, argTypes => { argTypes.splice(1, 0, null); classType.registeredClass.constructor_body[argCount - 1] = craftInvokerFunction(humanName, argTypes, null, invoker, rawConstructor); return []; }); return []; }); };
        var getFunctionName = signature => { signature = signature.trim(); const argsIndex = signature.indexOf("("); if (argsIndex === -1)
            return signature; return signature.slice(0, argsIndex); };
        var __embind_register_class_function = (rawClassType, methodName, argCount, rawArgTypesAddr, invokerSignature, rawInvoker, context, isPureVirtual, isAsync, isNonnullReturn) => { var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr); methodName = readLatin1String(methodName); methodName = getFunctionName(methodName); rawInvoker = embind__requireFunction(invokerSignature, rawInvoker, isAsync); whenDependentTypesAreResolved([], [rawClassType], classType => { classType = classType[0]; var humanName = `${classType.name}.${methodName}`; if (methodName.startsWith("@@")) {
            methodName = Symbol[methodName.substring(2)];
        } if (isPureVirtual) {
            classType.registeredClass.pureVirtualFunctions.push(methodName);
        } function unboundTypesHandler() { throwUnboundTypeError(`Cannot call ${humanName} due to unbound types`, rawArgTypes); } var proto = classType.registeredClass.instancePrototype; var method = proto[methodName]; if (undefined === method || undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2) {
            unboundTypesHandler.argCount = argCount - 2;
            unboundTypesHandler.className = classType.name;
            proto[methodName] = unboundTypesHandler;
        }
        else {
            ensureOverloadTable(proto, methodName, humanName);
            proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
        } whenDependentTypesAreResolved([], rawArgTypes, argTypes => { var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context, isAsync); if (undefined === proto[methodName].overloadTable) {
            memberFunction.argCount = argCount - 2;
            proto[methodName] = memberFunction;
        }
        else {
            proto[methodName].overloadTable[argCount - 2] = memberFunction;
        } return []; }); return []; }); };
        var emval_freelist = [];
        var emval_handles = [];
        var __emval_decref = handle => { if (handle > 9 && 0 === --emval_handles[handle + 1]) {
            emval_handles[handle] = undefined;
            emval_freelist.push(handle);
        } };
        var count_emval_handles = () => emval_handles.length / 2 - 5 - emval_freelist.length;
        var init_emval = () => { emval_handles.push(0, 1, undefined, 1, null, 1, true, 1, false, 1); Module["count_emval_handles"] = count_emval_handles; };
        var Emval = { toValue: handle => { if (!handle) {
                throwBindingError(`Cannot use deleted val. handle = ${handle}`);
            } return emval_handles[handle]; }, toHandle: value => { switch (value) {
                case undefined: return 2;
                case null: return 4;
                case true: return 6;
                case false: return 8;
                default: {
                    const handle = emval_freelist.pop() || emval_handles.length;
                    emval_handles[handle] = value;
                    emval_handles[handle + 1] = 1;
                    return handle;
                }
            } } };
        var EmValType = { name: "emscripten::val", fromWireType: handle => { var rv = Emval.toValue(handle); __emval_decref(handle); return rv; }, toWireType: (destructors, value) => Emval.toHandle(value), argPackAdvance: GenericWireTypeSize, readValueFromPointer: readPointer, destructorFunction: null };
        var __embind_register_emval = rawType => registerType(rawType, EmValType);
        var floatReadValueFromPointer = (name, width) => { switch (width) {
            case 4: return function (pointer) { return this["fromWireType"](HEAPF32[pointer >> 2]); };
            case 8: return function (pointer) { return this["fromWireType"](HEAPF64[pointer >> 3]); };
            default: throw new TypeError(`invalid float width (${width}): ${name}`);
        } };
        var __embind_register_float = (rawType, name, size) => { name = readLatin1String(name); registerType(rawType, { name, fromWireType: value => value, toWireType: (destructors, value) => value, argPackAdvance: GenericWireTypeSize, readValueFromPointer: floatReadValueFromPointer(name, size), destructorFunction: null }); };
        var __embind_register_integer = (primitiveType, name, size, minRange, maxRange) => { name = readLatin1String(name); if (maxRange === -1) {
            maxRange = 4294967295;
        } var fromWireType = value => value; if (minRange === 0) {
            var bitshift = 32 - 8 * size;
            fromWireType = value => value << bitshift >>> bitshift;
        } var isUnsignedType = name.includes("unsigned"); var checkAssertions = (value, toTypeName) => { }; var toWireType; if (isUnsignedType) {
            toWireType = function (destructors, value) { checkAssertions(value, this.name); return value >>> 0; };
        }
        else {
            toWireType = function (destructors, value) { checkAssertions(value, this.name); return value; };
        } registerType(primitiveType, { name, fromWireType, toWireType, argPackAdvance: GenericWireTypeSize, readValueFromPointer: integerReadValueFromPointer(name, size, minRange !== 0), destructorFunction: null }); };
        var __embind_register_memory_view = (rawType, dataTypeIndex, name) => { var typeMapping = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array]; var TA = typeMapping[dataTypeIndex]; function decodeMemoryView(handle) { var size = HEAPU32[handle >> 2]; var data = HEAPU32[handle + 4 >> 2]; return new TA(HEAP8.buffer, data, size); } name = readLatin1String(name); registerType(rawType, { name, fromWireType: decodeMemoryView, argPackAdvance: GenericWireTypeSize, readValueFromPointer: decodeMemoryView }, { ignoreDuplicateRegistrations: true }); };
        var EmValOptionalType = Object.assign({ optional: true }, EmValType);
        var __embind_register_optional = (rawOptionalType, rawType) => { registerType(rawOptionalType, EmValOptionalType); };
        var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => { if (!(maxBytesToWrite > 0))
            return 0; var startIdx = outIdx; var endIdx = outIdx + maxBytesToWrite - 1; for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
                var u1 = str.charCodeAt(++i);
                u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
                if (outIdx >= endIdx)
                    break;
                heap[outIdx++] = u;
            }
            else if (u <= 2047) {
                if (outIdx + 1 >= endIdx)
                    break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
            }
            else if (u <= 65535) {
                if (outIdx + 2 >= endIdx)
                    break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
            }
            else {
                if (outIdx + 3 >= endIdx)
                    break;
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
            }
        } heap[outIdx] = 0; return outIdx - startIdx; };
        var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        var lengthBytesUTF8 = str => { var len = 0; for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
                len++;
            }
            else if (c <= 2047) {
                len += 2;
            }
            else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
            }
            else {
                len += 3;
            }
        } return len; };
        var __embind_register_std_string = (rawType, name) => { name = readLatin1String(name); var stdStringIsUTF8 = true; registerType(rawType, { name, fromWireType(value) { var length = HEAPU32[value >> 2]; var payload = value + 4; var str; if (stdStringIsUTF8) {
                var decodeStartPtr = payload;
                for (var i = 0; i <= length; ++i) {
                    var currentBytePtr = payload + i;
                    if (i == length || HEAPU8[currentBytePtr] == 0) {
                        var maxRead = currentBytePtr - decodeStartPtr;
                        var stringSegment = UTF8ToString(decodeStartPtr, maxRead);
                        if (str === undefined) {
                            str = stringSegment;
                        }
                        else {
                            str += String.fromCharCode(0);
                            str += stringSegment;
                        }
                        decodeStartPtr = currentBytePtr + 1;
                    }
                }
            }
            else {
                var a = new Array(length);
                for (var i = 0; i < length; ++i) {
                    a[i] = String.fromCharCode(HEAPU8[payload + i]);
                }
                str = a.join("");
            } _free(value); return str; }, toWireType(destructors, value) { if (value instanceof ArrayBuffer) {
                value = new Uint8Array(value);
            } var length; var valueIsOfTypeString = typeof value == "string"; if (!(valueIsOfTypeString || ArrayBuffer.isView(value) && value.BYTES_PER_ELEMENT == 1)) {
                throwBindingError("Cannot pass non-string to std::string");
            } if (stdStringIsUTF8 && valueIsOfTypeString) {
                length = lengthBytesUTF8(value);
            }
            else {
                length = value.length;
            } var base = _malloc(4 + length + 1); var ptr = base + 4; HEAPU32[base >> 2] = length; if (valueIsOfTypeString) {
                if (stdStringIsUTF8) {
                    stringToUTF8(value, ptr, length + 1);
                }
                else {
                    for (var i = 0; i < length; ++i) {
                        var charCode = value.charCodeAt(i);
                        if (charCode > 255) {
                            _free(base);
                            throwBindingError("String has UTF-16 code units that do not fit in 8 bits");
                        }
                        HEAPU8[ptr + i] = charCode;
                    }
                }
            }
            else {
                HEAPU8.set(value, ptr);
            } if (destructors !== null) {
                destructors.push(_free, base);
            } return base; }, argPackAdvance: GenericWireTypeSize, readValueFromPointer: readPointer, destructorFunction(ptr) { _free(ptr); } }); };
        var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;
        var UTF16ToString = (ptr, maxBytesToRead) => { var endPtr = ptr; var idx = endPtr >> 1; var maxIdx = idx + maxBytesToRead / 2; while (!(idx >= maxIdx) && HEAPU16[idx])
            ++idx; endPtr = idx << 1; if (endPtr - ptr > 32 && UTF16Decoder)
            return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr)); var str = ""; for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
            var codeUnit = HEAP16[ptr + i * 2 >> 1];
            if (codeUnit == 0)
                break;
            str += String.fromCharCode(codeUnit);
        } return str; };
        var stringToUTF16 = (str, outPtr, maxBytesToWrite) => { maxBytesToWrite ??= 2147483647; if (maxBytesToWrite < 2)
            return 0; maxBytesToWrite -= 2; var startPtr = outPtr; var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length; for (var i = 0; i < numCharsToWrite; ++i) {
            var codeUnit = str.charCodeAt(i);
            HEAP16[outPtr >> 1] = codeUnit;
            outPtr += 2;
        } HEAP16[outPtr >> 1] = 0; return outPtr - startPtr; };
        var lengthBytesUTF16 = str => str.length * 2;
        var UTF32ToString = (ptr, maxBytesToRead) => { var i = 0; var str = ""; while (!(i >= maxBytesToRead / 4)) {
            var utf32 = HEAP32[ptr + i * 4 >> 2];
            if (utf32 == 0)
                break;
            ++i;
            if (utf32 >= 65536) {
                var ch = utf32 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
            }
            else {
                str += String.fromCharCode(utf32);
            }
        } return str; };
        var stringToUTF32 = (str, outPtr, maxBytesToWrite) => { maxBytesToWrite ??= 2147483647; if (maxBytesToWrite < 4)
            return 0; var startPtr = outPtr; var endPtr = startPtr + maxBytesToWrite - 4; for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343) {
                var trailSurrogate = str.charCodeAt(++i);
                codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
            }
            HEAP32[outPtr >> 2] = codeUnit;
            outPtr += 4;
            if (outPtr + 4 > endPtr)
                break;
        } HEAP32[outPtr >> 2] = 0; return outPtr - startPtr; };
        var lengthBytesUTF32 = str => { var len = 0; for (var i = 0; i < str.length; ++i) {
            var codeUnit = str.charCodeAt(i);
            if (codeUnit >= 55296 && codeUnit <= 57343)
                ++i;
            len += 4;
        } return len; };
        var __embind_register_std_wstring = (rawType, charSize, name) => { name = readLatin1String(name); var decodeString, encodeString, readCharAt, lengthBytesUTF; if (charSize === 2) {
            decodeString = UTF16ToString;
            encodeString = stringToUTF16;
            lengthBytesUTF = lengthBytesUTF16;
            readCharAt = pointer => HEAPU16[pointer >> 1];
        }
        else if (charSize === 4) {
            decodeString = UTF32ToString;
            encodeString = stringToUTF32;
            lengthBytesUTF = lengthBytesUTF32;
            readCharAt = pointer => HEAPU32[pointer >> 2];
        } registerType(rawType, { name, fromWireType: value => { var length = HEAPU32[value >> 2]; var str; var decodeStartPtr = value + 4; for (var i = 0; i <= length; ++i) {
                var currentBytePtr = value + 4 + i * charSize;
                if (i == length || readCharAt(currentBytePtr) == 0) {
                    var maxReadBytes = currentBytePtr - decodeStartPtr;
                    var stringSegment = decodeString(decodeStartPtr, maxReadBytes);
                    if (str === undefined) {
                        str = stringSegment;
                    }
                    else {
                        str += String.fromCharCode(0);
                        str += stringSegment;
                    }
                    decodeStartPtr = currentBytePtr + charSize;
                }
            } _free(value); return str; }, toWireType: (destructors, value) => { if (!(typeof value == "string")) {
                throwBindingError(`Cannot pass non-string to C++ string type ${name}`);
            } var length = lengthBytesUTF(value); var ptr = _malloc(4 + length + charSize); HEAPU32[ptr >> 2] = length / charSize; encodeString(value, ptr + 4, length + charSize); if (destructors !== null) {
                destructors.push(_free, ptr);
            } return ptr; }, argPackAdvance: GenericWireTypeSize, readValueFromPointer: readPointer, destructorFunction(ptr) { _free(ptr); } }); };
        var __embind_register_value_object = (rawType, name, constructorSignature, rawConstructor, destructorSignature, rawDestructor) => { structRegistrations[rawType] = { name: readLatin1String(name), rawConstructor: embind__requireFunction(constructorSignature, rawConstructor), rawDestructor: embind__requireFunction(destructorSignature, rawDestructor), fields: [] }; };
        var __embind_register_value_object_field = (structType, fieldName, getterReturnType, getterSignature, getter, getterContext, setterArgumentType, setterSignature, setter, setterContext) => { structRegistrations[structType].fields.push({ fieldName: readLatin1String(fieldName), getterReturnType, getter: embind__requireFunction(getterSignature, getter), getterContext, setterArgumentType, setter: embind__requireFunction(setterSignature, setter), setterContext }); };
        var __embind_register_void = (rawType, name) => { name = readLatin1String(name); registerType(rawType, { isVoid: true, name, argPackAdvance: 0, fromWireType: () => undefined, toWireType: (destructors, o) => undefined }); };
        var requireRegisteredType = (rawType, humanName) => { var impl = registeredTypes[rawType]; if (undefined === impl) {
            throwBindingError(`${humanName} has unknown type ${getTypeName(rawType)}`);
        } return impl; };
        var emval_returnValue = (returnType, destructorsRef, handle) => { var destructors = []; var result = returnType["toWireType"](destructors, handle); if (destructors.length) {
            HEAPU32[destructorsRef >> 2] = Emval.toHandle(destructors);
        } return result; };
        var __emval_as = (handle, returnType, destructorsRef) => { handle = Emval.toValue(handle); returnType = requireRegisteredType(returnType, "emval::as"); return emval_returnValue(returnType, destructorsRef, handle); };
        var emval_methodCallers = [];
        var __emval_call = (caller, handle, destructorsRef, args) => { caller = emval_methodCallers[caller]; handle = Emval.toValue(handle); return caller(null, handle, destructorsRef, args); };
        var emval_symbols = {};
        var getStringOrSymbol = address => { var symbol = emval_symbols[address]; if (symbol === undefined) {
            return readLatin1String(address);
        } return symbol; };
        var __emval_call_method = (caller, objHandle, methodName, destructorsRef, args) => { caller = emval_methodCallers[caller]; objHandle = Emval.toValue(objHandle); methodName = getStringOrSymbol(methodName); return caller(objHandle, objHandle[methodName], destructorsRef, args); };
        var emval_get_global = () => { if (typeof globalThis == "object") {
            return globalThis;
        } return function () { return Function; }()("return this")(); };
        var __emval_get_global = name => { if (name === 0) {
            return Emval.toHandle(emval_get_global());
        }
        else {
            name = getStringOrSymbol(name);
            return Emval.toHandle(emval_get_global()[name]);
        } };
        var emval_addMethodCaller = caller => { var id = emval_methodCallers.length; emval_methodCallers.push(caller); return id; };
        var emval_lookupTypes = (argCount, argTypes) => { var a = new Array(argCount); for (var i = 0; i < argCount; ++i) {
            a[i] = requireRegisteredType(HEAPU32[argTypes + i * 4 >> 2], `parameter ${i}`);
        } return a; };
        var __emval_get_method_caller = (argCount, argTypes, kind) => { var types = emval_lookupTypes(argCount, argTypes); var retType = types.shift(); argCount--; var functionBody = `return function (obj, func, destructorsRef, args) {\n`; var offset = 0; var argsList = []; if (kind === 0) {
            argsList.push("obj");
        } var params = ["retType"]; var args = [retType]; for (var i = 0; i < argCount; ++i) {
            argsList.push(`arg${i}`);
            params.push(`argType${i}`);
            args.push(types[i]);
            functionBody += `  var arg${i} = argType${i}.readValueFromPointer(args${offset ? "+" + offset : ""});\n`;
            offset += types[i].argPackAdvance;
        } var invoker = kind === 1 ? "new func" : "func.call"; functionBody += `  var rv = ${invoker}(${argsList.join(", ")});\n`; if (!retType.isVoid) {
            params.push("emval_returnValue");
            args.push(emval_returnValue);
            functionBody += "  return emval_returnValue(retType, destructorsRef, rv);\n";
        } functionBody += "};\n"; var invokerFunction = new Function(...params, functionBody)(...args); var functionName = `methodCaller<(${types.map(t => t.name).join(", ")}) => ${retType.name}>`; return emval_addMethodCaller(createNamedFunction(functionName, invokerFunction)); };
        var __emval_get_property = (handle, key) => { handle = Emval.toValue(handle); key = Emval.toValue(key); return Emval.toHandle(handle[key]); };
        var __emval_incref = handle => { if (handle > 9) {
            emval_handles[handle + 1] += 1;
        } };
        var __emval_new_array_from_memory_view = view => { view = Emval.toValue(view); var a = new Array(view.length); for (var i = 0; i < view.length; i++)
            a[i] = view[i]; return Emval.toHandle(a); };
        var __emval_new_cstring = v => Emval.toHandle(getStringOrSymbol(v));
        var __emval_run_destructors = handle => { var destructors = Emval.toValue(handle); runDestructors(destructors); __emval_decref(handle); };
        var __emval_take_value = (type, arg) => { type = requireRegisteredType(type, "_emval_take_value"); var v = type["readValueFromPointer"](arg); return Emval.toHandle(v); };
        var __tzset_js = (timezone, daylight, std_name, dst_name) => { var currentYear = (new Date).getFullYear(); var winter = new Date(currentYear, 0, 1); var summer = new Date(currentYear, 6, 1); var winterOffset = winter.getTimezoneOffset(); var summerOffset = summer.getTimezoneOffset(); var stdTimezoneOffset = Math.max(winterOffset, summerOffset); HEAPU32[timezone >> 2] = stdTimezoneOffset * 60; HEAP32[daylight >> 2] = Number(winterOffset != summerOffset); var extractZone = timezoneOffset => { var sign = timezoneOffset >= 0 ? "-" : "+"; var absOffset = Math.abs(timezoneOffset); var hours = String(Math.floor(absOffset / 60)).padStart(2, "0"); var minutes = String(absOffset % 60).padStart(2, "0"); return `UTC${sign}${hours}${minutes}`; }; var winterName = extractZone(winterOffset); var summerName = extractZone(summerOffset); if (summerOffset < winterOffset) {
            stringToUTF8(winterName, std_name, 17);
            stringToUTF8(summerName, dst_name, 17);
        }
        else {
            stringToUTF8(winterName, dst_name, 17);
            stringToUTF8(summerName, std_name, 17);
        } };
        var _emscripten_get_now = () => performance.now();
        var _emscripten_date_now = () => Date.now();
        var nowIsMonotonic = 1;
        var checkWasiClock = clock_id => clock_id >= 0 && clock_id <= 3;
        var INT53_MAX = 9007199254740992;
        var INT53_MIN = -9007199254740992;
        var bigintToI53Checked = num => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
        function _clock_time_get(clk_id, ignored_precision, ptime) { ignored_precision = bigintToI53Checked(ignored_precision); if (!checkWasiClock(clk_id)) {
            return 28;
        } var now; if (clk_id === 0) {
            now = _emscripten_date_now();
        }
        else if (nowIsMonotonic) {
            now = _emscripten_get_now();
        }
        else {
            return 52;
        } var nsec = Math.round(now * 1e3 * 1e3); HEAP64[ptime >> 3] = BigInt(nsec); return 0; }
        var getHeapMax = () => 2147483648;
        var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
        var growMemory = size => { var b = wasmMemory.buffer; var pages = (size - b.byteLength + 65535) / 65536 | 0; try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
        }
        catch (e) { } };
        var _emscripten_resize_heap = requestedSize => { var oldSize = HEAPU8.length; requestedSize >>>= 0; var maxHeapSize = getHeapMax(); if (requestedSize > maxHeapSize) {
            return false;
        } for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
            overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
            var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
            var replacement = growMemory(newSize);
            if (replacement) {
                return true;
            }
        } return false; };
        var safeSetTimeout = (func, timeout) => setTimeout(() => { callUserCallback(func); }, timeout);
        var _emscripten_sleep = ms => Asyncify.handleSleep(wakeUp => safeSetTimeout(wakeUp, ms));
        _emscripten_sleep.isAsync = true;
        var ENV = {};
        var getExecutableName = () => thisProgram || "./this.program";
        var getEnvStrings = () => { if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: lang, _: getExecutableName() };
            for (var x in ENV) {
                if (ENV[x] === undefined)
                    delete env[x];
                else
                    env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
                strings.push(`${x}=${env[x]}`);
            }
            getEnvStrings.strings = strings;
        } return getEnvStrings.strings; };
        var stringToAscii = (str, buffer) => { for (var i = 0; i < str.length; ++i) {
            HEAP8[buffer++] = str.charCodeAt(i);
        } HEAP8[buffer] = 0; };
        var _environ_get = (__environ, environ_buf) => { var bufSize = 0; getEnvStrings().forEach((string, i) => { var ptr = environ_buf + bufSize; HEAPU32[__environ + i * 4 >> 2] = ptr; stringToAscii(string, ptr); bufSize += string.length + 1; }); return 0; };
        var _environ_sizes_get = (penviron_count, penviron_buf_size) => { var strings = getEnvStrings(); HEAPU32[penviron_count >> 2] = strings.length; var bufSize = 0; strings.forEach(string => bufSize += string.length + 1); HEAPU32[penviron_buf_size >> 2] = bufSize; return 0; };
        var _fd_close = fd => 52;
        var _fd_read = (fd, iov, iovcnt, pnum) => 52;
        function _fd_seek(fd, offset, whence, newOffset) { offset = bigintToI53Checked(offset); return 70; }
        var printCharBuffers = [null, [], []];
        var printChar = (stream, curr) => { var buffer = printCharBuffers[stream]; if (curr === 0 || curr === 10) {
            (stream === 1 ? out : err)(UTF8ArrayToString(buffer));
            buffer.length = 0;
        }
        else {
            buffer.push(curr);
        } };
        var _fd_write = (fd, iov, iovcnt, pnum) => { var num = 0; for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            for (var j = 0; j < len; j++) {
                printChar(fd, HEAPU8[ptr + j]);
            }
            num += len;
        } HEAPU32[pnum >> 2] = num; return 0; };
        embind_init_charCodes();
        init_ClassHandle();
        init_RegisteredPointer();
        init_emval();
        var wasmImports = { a: ___assert_fail, c: ___cxa_throw, G: __abort_js, N: __embind_finalize_value_object, v: __embind_register_bigint, L: __embind_register_bool, o: __embind_register_class, k: __embind_register_class_constructor, b: __embind_register_class_function, J: __embind_register_emval, u: __embind_register_float, g: __embind_register_integer, e: __embind_register_memory_view, s: __embind_register_optional, K: __embind_register_std_string, p: __embind_register_std_wstring, O: __embind_register_value_object, x: __embind_register_value_object_field, M: __embind_register_void, j: __emval_as, q: __emval_call, l: __emval_call_method, d: __emval_decref, r: __emval_get_global, h: __emval_get_method_caller, m: __emval_get_property, w: __emval_incref, z: __emval_new_array_from_memory_view, n: __emval_new_cstring, f: __emval_run_destructors, i: __emval_take_value, A: __tzset_js, H: _clock_time_get, I: _emscripten_resize_heap, y: _emscripten_sleep, B: _environ_get, C: _environ_sizes_get, D: _fd_close, E: _fd_read, F: _fd_seek, t: _fd_write };
        var wasmExports = await createWasm();
        var ___wasm_call_ctors = wasmExports["Q"];
        var _malloc = wasmExports["S"];
        var ___getTypeName = wasmExports["T"];
        var _free = wasmExports["U"];
        var dynCall_ii = Module["dynCall_ii"] = wasmExports["V"];
        var dynCall_vi = Module["dynCall_vi"] = wasmExports["W"];
        var dynCall_iii = Module["dynCall_iii"] = wasmExports["X"];
        var dynCall_vii = Module["dynCall_vii"] = wasmExports["Y"];
        var dynCall_viii = Module["dynCall_viii"] = wasmExports["Z"];
        var dynCall_i = Module["dynCall_i"] = wasmExports["_"];
        var dynCall_fii = Module["dynCall_fii"] = wasmExports["$"];
        var dynCall_viif = Module["dynCall_viif"] = wasmExports["aa"];
        var dynCall_iiiiiffi = Module["dynCall_iiiiiffi"] = wasmExports["ba"];
        var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = wasmExports["ca"];
        var dynCall_viiii = Module["dynCall_viiii"] = wasmExports["da"];
        var dynCall_viiiii = Module["dynCall_viiiii"] = wasmExports["ea"];
        var dynCall_viiif = Module["dynCall_viiif"] = wasmExports["fa"];
        var dynCall_iiii = Module["dynCall_iiii"] = wasmExports["ga"];
        var dynCall_iiiif = Module["dynCall_iiiif"] = wasmExports["ha"];
        var dynCall_iiiii = Module["dynCall_iiiii"] = wasmExports["ia"];
        var dynCall_v = Module["dynCall_v"] = wasmExports["ja"];
        var dynCall_iidiiii = Module["dynCall_iidiiii"] = wasmExports["ka"];
        var dynCall_viijii = Module["dynCall_viijii"] = wasmExports["la"];
        var dynCall_jiji = Module["dynCall_jiji"] = wasmExports["ma"];
        var dynCall_iiiiii = Module["dynCall_iiiiii"] = wasmExports["na"];
        var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = wasmExports["oa"];
        var dynCall_iiiiij = Module["dynCall_iiiiij"] = wasmExports["pa"];
        var dynCall_iiiiid = Module["dynCall_iiiiid"] = wasmExports["qa"];
        var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = wasmExports["ra"];
        var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = wasmExports["sa"];
        var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = wasmExports["ta"];
        var dynCall_viiiiii = Module["dynCall_viiiiii"] = wasmExports["ua"];
        var _asyncify_start_unwind = wasmExports["va"];
        var _asyncify_stop_unwind = wasmExports["wa"];
        var _asyncify_start_rewind = wasmExports["xa"];
        var _asyncify_stop_rewind = wasmExports["ya"];
        function run() { if (runDependencies > 0) {
            dependenciesFulfilled = run;
            return;
        } preRun(); if (runDependencies > 0) {
            dependenciesFulfilled = run;
            return;
        } function doRun() { Module["calledRun"] = true; if (ABORT)
            return; initRuntime(); readyPromiseResolve(Module); Module["onRuntimeInitialized"]?.(); postRun(); } if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(() => { setTimeout(() => Module["setStatus"](""), 1); doRun(); }, 1);
        }
        else {
            doRun();
        } }
        if (Module["preInit"]) {
            if (typeof Module["preInit"] == "function")
                Module["preInit"] = [Module["preInit"]];
            while (Module["preInit"].length > 0) {
                Module["preInit"].pop()();
            }
        }
        run();
        moduleRtn = readyPromise;
        return moduleRtn;
    });
})();
/* harmony default export */ const hnsw_main = (createHNSW);

;// ./src/keyManager.ts
class KeyManager {
    constructor() {
    }
    async bulkGet(iids, dbInstance) {
        const dbResults = await dbInstance.bulkGetKeys(iids);
        const keys = new Array(iids.length);
        for (let i = 0; i < dbResults.length; i++) {
            keys[i] = dbResults[i].key;
        }
        return keys;
    }
    async set(iid, key, dbInstance) {
        await dbInstance.setKey(iid, key);
    }
}

;// ./src/jscache.ts
class BaseCache {
    jsCache = new Map();
    strategy;
    maxJsMemory;
    embedSize;
    itemsThreshold;
    priorityItemList = [];
    priorityItemSet = new Set();
    constructor(_maxJsMemory) {
        this.maxJsMemory = _maxJsMemory;
        this.embedSize = 0;
        this.itemsThreshold = 0;
        this.strategy = "BaseCache";
    }
    has(key) {
        return this.jsCache.has(key);
    }
    size() {
        return this.jsCache.size;
    }
    clearPriorityItems() {
        this.priorityItemList = [];
        this.priorityItemSet = new Set();
    }
    addPriorityItem(key) {
        if (!this.priorityItemSet.has(key)) {
            this.priorityItemList.push(key);
            this.priorityItemSet.add(key);
        }
    }
    adjustPriorityItems() {
        if (this.strategy !== "PriorityFIFO") {
            return;
        }
        if (this.itemsThreshold !== this.priorityItemSet.size) {
            this.priorityItemSet = new Set(this.priorityItemList.slice(0, this.itemsThreshold));
        }
    }
    adjustItemsThreshold() {
        this.adjustPriorityItems();
        this.deleteSome();
    }
    getRandomKey() {
        return Array.from(this.jsCache.keys())[Math.floor(Math.random() * this.jsCache.size)];
    }
    printConfig() {
        console.log("JS::BaseCache:");
        console.log(`JS::maxJsMemory: ${this.maxJsMemory}`);
        console.log(`JS::embedSize: ${this.embedSize}`);
        console.log(`JS::itemsThreshold: ${this.itemsThreshold}`);
    }
    toJSON() {
        return {
            maxJsMemory: this.maxJsMemory,
            embedSize: this.embedSize,
            itemsThreshold: this.itemsThreshold,
            strategy: this.strategy,
            size: this.size(),
        };
    }
    setJsMemorySize(_maxJsMemory) {
        this.maxJsMemory = _maxJsMemory;
        if (this.embedSize > 0) {
            this.itemsThreshold = Math.floor(this.maxJsMemory / (4 * this.embedSize));
            this.adjustItemsThreshold();
        }
    }
    getJsMemorySize() {
        return this.maxJsMemory;
    }
    setItemsThreshold(_itemsThreshold) {
        this.itemsThreshold = _itemsThreshold;
        this.adjustItemsThreshold();
    }
    setEmbedSize(_embedSize) {
        this.embedSize = _embedSize;
        this.itemsThreshold = Math.floor(this.maxJsMemory / (4 * this.embedSize));
        this.adjustItemsThreshold();
    }
    get(key) {
        return this.jsCache.get(key);
    }
}
class StringCache {
    name;
    keys;
    constructor(_name = "Cache") {
        this.name = _name;
        this.keys = new Map();
    }
    get(iid) {
        if (this.keys.has(iid)) {
            return this.keys.get(iid);
        }
        else {
            console.error(`${this.name}: Keys for iid ${iid} not found.`);
            return "";
        }
    }
    set(iid, key) {
        this.keys.set(iid, key);
    }
}

;// ./src/jscache/fifo.ts

class FIFOCache extends BaseCache {
    fifoList = [];
    constructor(_maxJsMemory) {
        super(_maxJsMemory);
        this.strategy = "FIFO";
    }
    deleteSome() {
        while (this.jsCache.size > this.itemsThreshold) {
            const oldestKey = this.fifoList.shift();
            if (oldestKey !== undefined) {
                this.jsCache.delete(oldestKey);
            }
        }
    }
    set(key, value) {
        if (this.embedSize === 0) {
            this.setEmbedSize(value.length);
        }
        if (this.has(key)) {
            this.jsCache.set(key, value);
        }
        else {
            this.jsCache.set(key, value);
            this.fifoList.push(key);
            this.deleteSome();
        }
    }
    delete(key) {
        this.jsCache.delete(key);
        this.fifoList = this.fifoList.filter((k) => k !== key);
    }
    clear() {
        this.jsCache.clear();
        this.fifoList = [];
    }
    printConfig() {
        super.printConfig();
        console.log(`JS::strategy: ${this.strategy}`);
        console.log(`JS::fifoList.length: ${this.fifoList.length}`);
    }
}

;// ./src/jscache/lru.ts

class LRUNode {
    key;
    prev;
    next;
    constructor(key) {
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}
class LRUCache extends BaseCache {
    lruList = new Map();
    lruHead = null;
    lruTail = null;
    constructor(_maxJsMemory) {
        super(_maxJsMemory);
        this.strategy = "LRU";
    }
    removeNode(node) {
        if (node.prev !== null) {
            node.prev.next = node.next;
        }
        else {
            this.lruHead = node.next;
        }
        if (node.next !== null) {
            node.next.prev = node.prev;
        }
        else {
            this.lruTail = node.prev;
        }
    }
    addToHead(node) {
        node.next = this.lruHead;
        node.prev = null;
        if (this.lruHead !== null) {
            this.lruHead.prev = node;
        }
        this.lruHead = node;
        if (this.lruTail === null) {
            this.lruTail = node;
        }
    }
    deleteSome() {
        while (this.itemsThreshold > 0 &&
            this.lruTail !== null &&
            this.jsCache.size > this.itemsThreshold) {
            const keyToEvict = this.lruTail.key;
            this.removeNode(this.lruTail);
            this.jsCache.delete(keyToEvict);
            this.lruList.delete(keyToEvict);
        }
    }
    set(key, value) {
        if (this.embedSize === 0) {
            this.setEmbedSize(value.length);
        }
        if (this.jsCache.has(key)) {
            const node = this.lruList.get(key);
            this.removeNode(node);
            this.jsCache.set(key, value);
            this.addToHead(node);
        }
        else {
            const newNode = new LRUNode(key);
            this.lruList.set(key, newNode);
            this.addToHead(newNode);
            this.jsCache.set(key, value);
            this.deleteSome();
        }
    }
    get(key) {
        if (this.jsCache.has(key)) {
            const node = this.lruList.get(key);
            this.removeNode(node);
            this.addToHead(node);
            return this.jsCache.get(key);
        }
        return undefined;
    }
    delete(key) {
        if (this.jsCache.has(key)) {
            const node = this.lruList.get(key);
            this.removeNode(node);
            this.jsCache.delete(key);
            this.lruList.delete(key);
        }
    }
    clear() {
        this.jsCache.clear();
        this.lruList.clear();
        this.lruHead = null;
        this.lruTail = null;
    }
    printConfig() {
        super.printConfig();
        console.log(`JS::strategy: ${this.strategy}`);
        console.log(`JS::lruList.size: ${this.lruList.size}`);
    }
}

;// ./src/jscache/priorityFifo.ts

class PriorityFIFOCache extends BaseCache {
    fifoList = [];
    priorityFIFOSet = new Set();
    constructor(_maxJsMemory) {
        super(_maxJsMemory);
        this.strategy = "PriorityFIFO";
    }
    deleteSome() {
        while (this.jsCache.size > this.itemsThreshold &&
            this.fifoList.length > 0) {
            const oldestKey = this.fifoList.shift();
            if (oldestKey !== undefined) {
                if (!this.priorityItemSet.has(oldestKey)) {
                    this.jsCache.delete(oldestKey);
                }
                else {
                    this.priorityFIFOSet.add(oldestKey);
                }
            }
        }
        if (this.jsCache.size > this.itemsThreshold) {
            const keysArray = Array.from(this.priorityFIFOSet);
            for (const key of keysArray) {
                if (!this.priorityItemSet.has(key)) {
                    this.priorityFIFOSet.delete(key);
                    if (this.jsCache.size > this.itemsThreshold) {
                        this.jsCache.delete(key);
                    }
                    else {
                        this.fifoList.push(key);
                    }
                }
            }
        }
    }
    set(key, value) {
        if (this.embedSize === 0) {
            this.setEmbedSize(value.length);
        }
        if (this.has(key)) {
            this.jsCache.set(key, value);
            return;
        }
        if (this.priorityItemSet.has(key)) {
            this.jsCache.set(key, value);
            if (this.priorityFIFOSet.has(key)) {
                throw new Error(`PriorityFIFOCache::set: key ${key} is in priorityFIFOSet`);
            }
            this.priorityFIFOSet.add(key);
            this.deleteSome();
        }
        else {
            if (this.priorityFIFOSet.size >= this.itemsThreshold) {
                return;
            }
            this.jsCache.set(key, value);
            this.fifoList.push(key);
            this.deleteSome();
        }
    }
    delete(key) {
        this.jsCache.delete(key);
        this.fifoList = this.fifoList.filter((k) => k !== key);
        this.priorityFIFOSet.delete(key);
    }
    clear() {
        this.jsCache.clear();
        this.fifoList = [];
        this.priorityFIFOSet.clear();
    }
    printConfig() {
        super.printConfig();
        console.log(`JS::strategy: ${this.strategy}`);
        console.log(`JS::fifoList.length: ${this.fifoList.length}`);
        console.log(`JS::priorityFIFOSet.size: ${this.priorityFIFOSet.size}`);
    }
}

;// ./src/macro.ts
const DEBUG = false;

;// ./src/utils.ts
const TIMER = true;
const CACHECOUNTER = true;
class FastTimer {
    name = "";
    startTime = 0;
    sumTime = 0;
    count = 0;
    runFlag = false;
    constructor(_name = "") {
        this.name = _name;
    }
    start() {
        this.startTime = performance.now();
        this.runFlag = true;
    }
    end() {
        if (this.runFlag && this.startTime !== 0) {
            this.sumTime += performance.now() - this.startTime;
            this.count += 1;
            this.startTime = 0;
            this.runFlag = false;
        }
        else {
            throw new Error(`Timer ${this.name} is not running`);
        }
    }
    getAverage() {
        return this.sumTime / this.count;
    }
    clear() {
        this.startTime = 0;
        this.sumTime = 0;
        this.count = 0;
    }
}
class Timers {
    timerMaps = new Map();
    mode = "";
    get(name) {
        if (this.mode) {
            name = `${this.mode}::${name}`;
        }
        if (!this.timerMaps.has(name)) {
            this.timerMaps.set(name, new Timer(name));
        }
        return this.timerMaps.get(name);
    }
    clear() {
        this.timerMaps.clear();
    }
    setMode(mode) {
        this.mode = mode;
    }
    print() {
        const PRECISION = 4;
        console.log("JS::Timers::print");
        for (let [name, timer] of this.timerMaps) {
            console.log(`JS::Timer: ${name}: ${timer.getSum().toFixed(PRECISION)} ms / ${timer.getLength()} times = ${timer.getAverage().toFixed(PRECISION)} ms`);
        }
    }
    toJSON() {
        let jsonRes = {};
        for (let [name, timer] of this.timerMaps) {
            jsonRes[name] = timer.toJSON();
        }
        return jsonRes;
    }
}
class Timer {
    name = "";
    startTime = 0;
    timeList = [];
    runFlag = false;
    constructor(_name = "") {
        this.name = _name;
    }
    start() {
        this.startTime = performance.now();
        this.runFlag = true;
    }
    end() {
        if (this.runFlag && this.startTime !== 0) {
            this.timeList.push(performance.now() - this.startTime);
            this.startTime = 0;
            this.runFlag = false;
        }
        else {
            throw new Error(`Timer ${this.name} is not running`);
        }
    }
    getSum() {
        return this.timeList.reduce((sum, value) => sum + value, 0);
    }
    getAverage() {
        return this.getSum() / this.timeList.length;
    }
    getLength() {
        return this.timeList.length;
    }
    toJSON() {
        return this.timeList;
    }
}
class CacheCounters {
    counterMaps = new Map();
    mode = "";
    get(name) {
        if (this.mode) {
            name = `${this.mode}::${name}`;
        }
        if (!this.counterMaps.has(name)) {
            this.counterMaps.set(name, new CacheCounter(name));
        }
        return this.counterMaps.get(name);
    }
    clear() {
        this.counterMaps.clear();
    }
    setMode(mode) {
        this.mode = mode;
    }
    print() {
        console.log("JS::CacheCounters::print");
        for (let [name, counter] of this.counterMaps) {
            console.log(`JS::CacheCounter: ${name}: `);
            counter.print();
        }
    }
    toJSON() {
        let jsonRes = {};
        for (let [name, counter] of this.counterMaps) {
            jsonRes[name] = counter.toJSON();
        }
        return jsonRes;
    }
}
class CacheCounter {
    name = "";
    hitCounter = new Map();
    missCounter = new Map();
    constructor(_name = "") {
        this.name = _name;
        this.hitCounter.clear();
        this.missCounter.clear();
    }
    hit(name) {
        if (!this.hitCounter.has(name)) {
            this.hitCounter.set(name, 1);
        }
        else {
            this.hitCounter.set(name, this.hitCounter.get(name) + 1);
        }
    }
    miss(name) {
        if (!this.missCounter.has(name)) {
            this.missCounter.set(name, 1);
        }
        else {
            this.missCounter.set(name, this.missCounter.get(name) + 1);
        }
    }
    static getSum(counter) {
        return Array.from(counter.values()).reduce((sum, value) => sum + value, 0);
    }
    static getAverage(counter) {
        return this.getSum(counter) / counter.size;
    }
    static getLength(counter) {
        return counter.size;
    }
    getHit() {
        return CacheCounter.getSum(this.hitCounter);
    }
    print() {
        console.log(`Hit: ${CacheCounter.getSum(this.hitCounter)} times / ${CacheCounter.getLength(this.hitCounter)} items = ${CacheCounter.getAverage(this.hitCounter)} times`);
        console.log(`Miss: ${CacheCounter.getSum(this.missCounter)} times / ${CacheCounter.getLength(this.missCounter)} items = ${CacheCounter.getAverage(this.missCounter)} times`);
    }
    toJSON() {
        return {
            hit: Array.from(this.hitCounter.values()),
            miss: Array.from(this.missCounter.values()),
        };
    }
}

;// ./src/valueManager.ts





class ValueManager {
    useDB = true;
    jsCache;
    maxJsMemory = 1001 * 768 * 4;
    cacheCounters = new CacheCounters();
    timers = new Timers();
    constructor(jsCacheName = "FIFO", _maxJsMemory = 1001 * 768 * 4) {
        this.maxJsMemory = _maxJsMemory;
        if (jsCacheName === "FIFO") {
            this.jsCache = new FIFOCache(_maxJsMemory);
        }
        else if (jsCacheName === "LRU") {
            this.jsCache = new LRUCache(_maxJsMemory);
        }
        else if (jsCacheName === "PriorityFIFO") {
            this.jsCache = new PriorityFIFOCache(_maxJsMemory);
        }
        else {
            console.error(`JS::ValueManager::setCacheStrategy: ${jsCacheName} is not supported.`);
        }
    }
    setCacheStrategy(jsCacheName) {
        console.log(`JS::ValueManager::setCacheStrategy: ${jsCacheName}`);
        if (jsCacheName === this.jsCache.strategy) {
            console.log(`JS::ValueManager::setCacheStrategy: ${jsCacheName} has not changed.`);
            return;
        }
        this.maxJsMemory = this.jsCache.getJsMemorySize();
        if (jsCacheName === "FIFO") {
            this.jsCache = new FIFOCache(this.maxJsMemory);
        }
        else if (jsCacheName === "LRU") {
            this.jsCache = new LRUCache(this.maxJsMemory);
        }
        else if (jsCacheName === "PriorityFIFO") {
            this.jsCache = new PriorityFIFOCache(this.maxJsMemory);
        }
        else {
            console.error(`JS::ValueManager::setCacheStrategy: ${jsCacheName} is not supported.`);
        }
    }
    setJsMemorySize(maxJsMemory) {
        this.maxJsMemory = maxJsMemory;
        this.jsCache.setJsMemorySize(maxJsMemory);
    }
    print() {
        console.log("JS::ValueManager:");
        if (CACHECOUNTER) {
            this.cacheCounters.print();
        }
        this.jsCache.printConfig();
        if (TIMER) {
            this.timers.print();
        }
    }
    getJsonExps() {
        let jsonRes = {};
        if (CACHECOUNTER) {
            jsonRes["cacheCounters"] = this.cacheCounters.toJSON();
        }
        jsonRes["jsCache"] = this.jsCache.toJSON();
        jsonRes["timers"] = this.timers.toJSON();
        return jsonRes;
    }
    clearMonitor() {
        this.cacheCounters.clear();
        this.timers.clear();
    }
    setMonitorMode(mode) {
        this.cacheCounters.setMode(mode);
        this.timers.setMode(mode);
    }
    get_nodb(iid) {
        let value = undefined;
        if (this.jsCache.has(iid)) {
            if (TIMER) {
                this.timers.get("mem").start();
            }
            value = this.jsCache.get(iid);
            if (TIMER) {
                this.timers.get("mem").end();
            }
            if (DEBUG)
                console.log(`ValueManager::get_nodb: Data for iid ${iid} loaded from JSCache. value=${value}`);
            return value;
        }
        else {
            if (DEBUG)
                console.log(`ValueManager::get_nodb: Data for iid ${iid} not found in JSCache.`);
            return undefined;
        }
    }
    async get(iid, dbInstance) {
        let value = undefined;
        if (this.jsCache.has(iid)) {
            if (TIMER) {
                this.timers.get("mem").start();
            }
            value = this.jsCache.get(iid);
            if (TIMER) {
                this.timers.get("mem").end();
            }
            if (CACHECOUNTER)
                this.cacheCounters.get("ValueManager").hit(iid);
            if (DEBUG)
                console.log(`ValueManager::get: Data for iid ${iid} loaded from JSCache. value=${value}`);
            return value;
        }
        if (CACHECOUNTER)
            this.cacheCounters.get("ValueManager").miss(iid);
        if (TIMER) {
            this.timers.get("db").start();
        }
        value = await dbInstance.getValue(iid);
        if (TIMER) {
            this.timers.get("db").end();
        }
        this.set(iid, value);
        if (DEBUG)
            console.log(`ValueManager::get: Data for iid ${iid} loaded from indexedDB. value=${value}`);
        return value;
    }
    set(iid, value) {
        this.jsCache.set(iid, value);
    }
}

;// ./src/dataManager.ts


class DataManager {
    keyManager;
    curID;
    valueManager;
    constructor() {
        this.keyManager = new KeyManager();
        this.curID = 0;
        this.valueManager = new ValueManager("FIFO");
    }
    allocateID() {
        return this.curID++;
    }
    print() {
        this.valueManager.print();
    }
    getJsonExps() {
        return this.valueManager.getJsonExps();
    }
    clearMonitor() {
        this.valueManager.clearMonitor();
    }
    setMonitorMode(mode) {
        this.valueManager.setMonitorMode(mode);
    }
}

// EXTERNAL MODULE: ./node_modules/dexie/dist/dexie.min.js
var dexie_min = __webpack_require__(126);
;// ./node_modules/dexie/import-wrapper-prod.mjs
// Making the module version consumable via require - to prohibit
// multiple occurrancies of the same module in the same app
// (dual package hazard, https://nodejs.org/api/packages.html#dual-package-hazard)

const DexieSymbol = Symbol.for("Dexie");
const Dexie = globalThis[DexieSymbol] || (globalThis[DexieSymbol] = dexie_min);
if (dexie_min.semVer !== Dexie.semVer) {
    throw new Error(`Two different versions of Dexie loaded in the same app: ${dexie_min.semVer} and ${Dexie.semVer}`);
}
const {
    liveQuery, mergeRanges, rangesOverlap, RangeSet, cmp, Entity,
    PropModification, replacePrefix, add, remove } = Dexie;

/* harmony default export */ const import_wrapper_prod = (Dexie);

;// ./src/indexeddb.ts

class IndexedDBManager {
    kt;
    vt;
    indexTree;
    constructor() { }
    async initDB(_clear = true) {
        let wrag_dexie = new import_wrapper_prod("wrag");
        const dbExists = await import_wrapper_prod.exists("wrag");
        if (!dbExists) {
            console.log("WebWorker::initDB: IndexedDB does not exist. Need to create it.");
            wrag_dexie.version(1).stores({
                keys: "iid, key",
                values: "iid, value",
                indexTree: "iid, index",
            });
        }
        if (!wrag_dexie.isOpen()) {
            await wrag_dexie.open();
        }
        const tables = wrag_dexie.tables.map((table) => table.name);
        if (!tables.includes("keys") ||
            !tables.includes("values") ||
            !tables.includes("indexTree")) {
            console.log("WebWorker::initDB: IndexedDB does not have all tables. Need to create them.");
            wrag_dexie.version(1).stores({
                keys: "iid, key",
                values: "iid, value",
                indexTree: "iid, index",
            });
        }
        if (!wrag_dexie.isOpen()) {
            await wrag_dexie.open();
        }
        console.log("WebWorker::initDB: IndexedDB is already created.");
        this.kt = wrag_dexie.table("keys");
        this.vt = wrag_dexie.table("values");
        this.indexTree = wrag_dexie.table("indexTree");
        if (_clear) {
            await this.clear();
        }
    }
    async setIndexTree(index) {
        await this.indexTree.put({ iid: 0, index });
    }
    async getIndexTree() {
        const item = await this.indexTree.get(0);
        return item ? item.index : "";
    }
    async getRandomKey() {
        try {
            const keys = await this.vt.toCollection().primaryKeys();
            if (keys.length === 0) {
                return -1;
            }
            const randomIndex = Math.floor(Math.random() * keys.length);
            return keys[randomIndex];
        }
        catch (error) {
            console.error("Error fetching random key:", error);
            return -1;
        }
    }
    async clear() {
        await this.kt.clear();
        await this.vt.clear();
        await this.indexTree.clear();
    }
    async setValue(iid, value) {
        await this.vt.put({ iid, value });
    }
    async getValue(iid) {
        const item = await this.vt.get(iid);
        return item ? item.value : new Float32Array(0);
    }
    async bulkGetValues(iids) {
        const items = await this.vt.bulkGet(iids);
        return items;
    }
    async setKey(iid, key) {
        await this.kt.put({ iid, key });
    }
    async getKey(iid) {
        const item = await this.kt.get(iid);
        return item ? item.key : "";
    }
    async bulkSetKeys(iids, keys) {
        const items = iids.map((iid, index) => ({ iid, key: keys[index] }));
        await this.kt.bulkPut(items);
    }
    async getAllKeys() {
        const items = await this.kt.toArray();
        return items;
    }
    async bulkGetKeys(iids) {
        const items = await this.kt.bulkGet(iids);
        return items;
    }
    async print() {
        console.log("IndexedDBManager:");
    }
}

;// ./src/wrag.ts





class WRAG {
    wasmModule = null;
    hnswInstance = null;
    dbInstance = new IndexedDBManager();
    dataManager = new DataManager();
    timers = new Timers();
    optimizeCacheRecords = [];
    constructor() { }
    async setParams(settings) {
        console.log("WRAG::setParams: Start setting parameters");
        if (settings.m !== undefined &&
            settings.efConstruction !== undefined &&
            settings.lazyLoading !== undefined) {
            this.hnswInstance.setParams(settings.m, settings.efConstruction, settings.lazyLoading);
        }
        if (settings.wasmMemory !== undefined) {
            this.hnswInstance.setWasmMemory(settings.wasmMemory);
        }
        if (settings.jsMemory !== undefined) {
            this.dataManager.valueManager.setJsMemorySize(settings.jsMemory);
        }
        if (settings.cacheStrategy !== undefined) {
            this.dataManager.valueManager.setCacheStrategy(settings.cacheStrategy);
        }
    }
    async clearDB() {
        await this.dbInstance.clear();
    }
    clearMonitor() {
        this.hnswInstance.clearMonitor();
        this.dataManager.clearMonitor();
    }
    setMonitorMode(mode) {
        this.hnswInstance.setMonitorMode(mode);
        this.dataManager.setMonitorMode(mode);
    }
    async init(_clearDB = true) {
        this.wasmModule = await hnsw_main();
        this.hnswInstance = new this.wasmModule.HNSW();
        await this.dbInstance.initDB(_clearDB);
        let savedIndexTree = await this.dbInstance.getIndexTree();
        if (savedIndexTree !== "") {
            console.log("WRAG::init: Loading index tree from IndexedDB");
            for (let line of savedIndexTree.split("\n")) {
                this.loadJsonlIndex(line);
            }
            let valueKey = await this.dbInstance.getRandomKey();
            let value = await this.dbInstance.getValue(valueKey);
            this.dataManager.valueManager.set(valueKey, value);
            this.hnswInstance.insertSkipIndex(valueKey, value, -1);
        }
    }
    async exit() {
        let indexTree = this.hnswInstance.exportJsonlIndex();
        await this.dbInstance.setIndexTree(indexTree);
    }
    async insert(key, vector, layer) {
        this.timers.get("insert").start();
        const resultPromise = new Promise((resolve, reject) => {
            this.hnswInstance.setFinalPromise(resolve);
        });
        let curID = this.dataManager.allocateID();
        await this.dataManager.keyManager.set(curID, key, this.dbInstance);
        this.dataManager.valueManager.set(curID, vector);
        if (this.dataManager.valueManager.useDB) {
            const curVector = Float32Array.from(vector);
            await this.dbInstance.setValue(curID, curVector);
        }
        this.hnswInstance.insert(curID, vector, layer ?? -1);
        let iid = await resultPromise;
        this.timers.get("insert").end();
        if (DEBUG)
            console.log(`WRAG::insert: Inserted item ${curID} into HNSW with iid ${iid}`);
    }
    async query(queryEmb, k, queryEf) {
        this.timers.get("performSearch").start();
        let resultPromise = new Promise((resolve, reject) => {
            this.hnswInstance.setFinalPromise(resolve);
        });
        let queryEmbTrans = new this.wasmModule.VectorFloat();
        let embLen = this.dataManager.valueManager.jsCache.embedSize;
        if (queryEmb.length !== embLen) {
            embLen = Math.min(queryEmb.length, embLen);
            console.warn(`warning! WRAG::query: query size=${queryEmb.length}, embed size=${embLen}`);
        }
        for (let i = 0; i < embLen; i++) {
            queryEmbTrans.push_back(queryEmb[i]);
        }
        this.hnswInstance.query(queryEmbTrans, k, queryEf);
        await resultPromise;
        let results = this.hnswInstance.getQueryResults();
        let resultIids = [];
        for (let i = 0; i < results.size(); i++) {
            resultIids.push(results.get(i).iid);
        }
        let resultsArray = await this.dataManager.keyManager.bulkGet(resultIids, this.dbInstance);
        this.timers.get("performSearch").end();
        if (this.optimizeCacheRecords.length > 0) {
            let cacheRecord = this.hnswInstance.getCacheCounter();
            let cacheRecordArray = cacheRecord.split(",");
            const jsCacheHit = this.dataManager.valueManager.cacheCounters
                .get("ValueManager")
                .getHit();
            const num_db = parseInt(cacheRecordArray[1]) - jsCacheHit;
            const last_recordID = this.optimizeCacheRecords.length - 1;
            if (num_db > this.optimizeCacheRecords[last_recordID][1]) {
                if (this.optimizeCacheRecords.length > 0) {
                    this.dataManager.valueManager.jsCache.setItemsThreshold(this.optimizeCacheRecords[last_recordID][0].js);
                    this.hnswInstance.setItemsThreshold(this.optimizeCacheRecords[last_recordID][0].wasm);
                    console.log(`WRAG::query: Cache size RE-optimized to (wasm=${this.optimizeCacheRecords[last_recordID][0].wasm}, 
                        js=${this.optimizeCacheRecords[last_recordID][0].js})`);
                }
                this.optimizeCacheRecords.pop();
            }
        }
        return resultsArray;
    }
    key2id(key) {
        if (key.match(/^\d+$/)) {
            return parseInt(key);
        }
        let id = key.match(/^(\d+)@@/);
        return parseInt(id[1]);
    }
    loadJsonlIndex(indexLine) {
        if (!indexLine.trim()) {
            return;
        }
        let lineJson = JSON.parse(indexLine.trim());
        if (lineJson.graphlayer !== undefined) {
            this.hnswInstance.loadJsonlIndex(JSON.stringify(lineJson));
        }
        else if (lineJson.key !== undefined) {
            let keyId = this.key2id(String(lineJson.key));
            this.hnswInstance.loadJsonlIndex(JSON.stringify({ key: keyId }));
        }
        else if (lineJson.nkey !== undefined) {
            const nKey = this.key2id(String(lineJson.nkey));
            const distance = lineJson.distance;
            this.hnswInstance.loadJsonlIndex(JSON.stringify({ nkey: nKey, distance: distance }));
        }
        else {
            lineJson.entryPointKey = this.key2id(lineJson.entryPointKey.toString());
            this.hnswInstance.loadJsonlIndex(JSON.stringify(lineJson));
        }
    }
    exportJsonlIndex() {
        return this.hnswInstance.exportJsonlIndex();
    }
    loadIndex(indexTree) {
        let parsedIndexTree = JSON.parse(indexTree);
        let entryPoint = parsedIndexTree["entryPointKey"];
        let epId = this.key2id(entryPoint);
        parsedIndexTree["entryPointKey"] = epId;
        let newGraphLayers = [];
        for (let i = 0; i < parsedIndexTree["graphLayers"].length; i++) {
            let parsedLayer = parsedIndexTree["graphLayers"][i];
            let newLayer = {};
            for (let key in parsedLayer) {
                let newNeighbors = {};
                let qId = this.key2id(key);
                for (let nKey in parsedLayer[key]) {
                    let nId = this.key2id(nKey);
                    let distance = parsedLayer[key][nKey];
                    newNeighbors[nId] = distance;
                }
                newLayer[qId] = newNeighbors;
            }
            newGraphLayers.push(newLayer);
        }
        parsedIndexTree["graphLayers"] = newGraphLayers;
        if (this.dataManager.valueManager.jsCache.strategy === "PriorityFIFO") {
            this.dataManager.valueManager.jsCache.clearPriorityItems();
            this.dataManager.valueManager.jsCache.addPriorityItem(epId);
            for (let i = newGraphLayers.length - 1; i >= 1; i--) {
                let parsedLayer = newGraphLayers[i];
                for (let qKey in parsedLayer) {
                    let qId = parseInt(qKey);
                    this.dataManager.valueManager.jsCache.addPriorityItem(qId);
                }
            }
            this.dataManager.valueManager.jsCache.adjustPriorityItems();
        }
        this.hnswInstance.loadIndex(JSON.stringify(parsedIndexTree));
    }
    async insertSkipIndex(key, vector, layer) {
        let curID = this.dataManager.allocateID();
        await this.dataManager.keyManager.set(curID, key, this.dbInstance);
        this.dataManager.valueManager.set(curID, vector);
        if (this.dataManager.valueManager.useDB) {
            const curVector = Float32Array.from(vector);
            await this.dbInstance.setValue(curID, curVector);
        }
        this.hnswInstance.insertSkipIndex(curID, vector, layer ?? -1);
        if (DEBUG)
            console.log(`WRAG::insertSkipIndex: Inserted item ${curID} into HNSW`);
    }
    async checkOptimizeCacheSize(jsSizem, wasmSizem, tarP = 0.8, tarTime = 200) {
        if (wasmSizem < 1) {
            return { js: 0, wasm: 0 };
        }
        this.dataManager.valueManager.jsCache.setItemsThreshold(jsSizem);
        this.hnswInstance.setItemsThreshold(wasmSizem);
        console.log(`WRAG::optimizeCacheSize: Start optimizing cache size \
            with ${jsSizem} JS items and ${wasmSizem} Wasm items.`);
        this.clearMonitor();
        const t_query = await this.queryTest();
        let cacheRecord = this.hnswInstance.getCacheCounter();
        let cacheRecordArray = cacheRecord.split(",");
        const jsCacheHit = this.dataManager.valueManager.cacheCounters
            .get("ValueManager")
            .getHit();
        const num_db = parseInt(cacheRecordArray[1]) - jsCacheHit;
        const num_query = parseInt(cacheRecordArray[0]) + num_db + jsCacheHit;
        console.log(`WRAG::optimizeCacheSize: num_db=${num_db}, num_query=${num_query}, t_query=${t_query}`);
        let timeMonitor = new FastTimer("timeMonitor");
        timeMonitor.clear();
        let repeat = 10;
        for (let i = 0; i < repeat; i++) {
            let rk = await this.dbInstance.getRandomKey();
            if (rk === -1) {
                console.log("WRAG::optimizeCacheSize: No data in DB.");
                return { js: 0, wasm: 0 };
            }
            timeMonitor.start();
            await this.dbInstance.getValue(rk);
            timeMonitor.end();
        }
        const t_db = Math.max(timeMonitor.getAverage(), 1.0);
        console.log(`WRAG::optimizeCacheSize: t_db=${t_db}`);
        const theta_k = tarP;
        const theta = Math.max((theta_k * t_query) / t_db, tarTime / t_db);
        console.log(`WRAG::optimizeCacheSize: theta=${theta}`);
        if (t_query > (tarTime / theta_k) * 1.5) {
            return { js: 0, wasm: 0 };
        }
        if (num_db > theta) {
            return { js: 0, wasm: 0 };
        }
        else {
            return {
                js: jsSizem,
                wasm: wasmSizem,
                num_query: num_query,
                num_db: num_db,
                theta: theta,
            };
        }
    }
    async calNewCacheSize(num_query, num_db, jsSizem, wasmSizem, theta) {
        const k = (num_query - num_db) / (1 - (jsSizem + wasmSizem));
        const new_x = Math.ceil((theta - num_query) / k + 1);
        const newJsSize = Math.max(new_x - wasmSizem, 0);
        const newWasmSize = Math.min(wasmSizem, new_x);
        console.log(`WRAG::optimizeCacheSize: k=${k}, new_x=${new_x}, newJsSize=${newJsSize}, newWasmSize=${newWasmSize}`);
        if (new_x >= jsSizem + wasmSizem || new_x <= 0) {
            return { js: 0, wasm: 0 };
        }
        return { js: newJsSize, wasm: newWasmSize };
    }
    async optimizeCacheSize(tarP = 0.8, tarTime = 200) {
        this.timers.get("optimizeCacheSize").start();
        let bestJsSize = this.dataManager.valueManager.jsCache.size();
        let bestWasmSize = this.hnswInstance.getCacheSize();
        let curJsSize = this.dataManager.valueManager.jsCache.size();
        let curWasmSize = this.hnswInstance.getCacheSize();
        while (curJsSize + curWasmSize > 0) {
            let curConfig = await this.checkOptimizeCacheSize(curJsSize, curWasmSize, tarP, tarTime);
            if (curConfig.wasm <= 0) {
                break;
            }
            else {
                this.optimizeCacheRecords.push([
                    { js: curJsSize, wasm: curWasmSize },
                    curConfig.theta,
                ]);
            }
            bestJsSize = curConfig.js;
            bestWasmSize = curConfig.wasm;
            let curSize = await this.calNewCacheSize(curConfig.num_query, curConfig.num_db, curConfig.js, curConfig.wasm, curConfig.theta);
            if (curSize.js + curSize.wasm <= 0 ||
                curSize.js + curSize.wasm > bestJsSize + bestWasmSize) {
                break;
            }
            curJsSize = curSize.js;
            curWasmSize = curSize.wasm;
        }
        this.clearMonitor();
        this.dataManager.valueManager.jsCache.setItemsThreshold(curJsSize);
        this.hnswInstance.setItemsThreshold(curWasmSize);
        this.timers.get("optimizeCacheSize").end();
        return { js: curJsSize, wasm: curWasmSize };
    }
    async queryTest() {
        console.log("WRAG::queryTest: Start query test");
        let resultPromise = new Promise((resolve, reject) => {
            this.hnswInstance.setFinalPromise(resolve);
        });
        let queryEmbTrans = new this.wasmModule.VectorFloat();
        for (let i = 0; i < this.dataManager.valueManager.jsCache.embedSize; i++) {
            queryEmbTrans.push_back(Math.random());
        }
        const k = 10;
        let startTime = performance.now();
        this.hnswInstance.query(queryEmbTrans, k, -1);
        await resultPromise;
        return performance.now() - startTime;
    }
    print() {
        console.log("WRAG::optimizeCacheRecords:");
        for (let i = 0; i < this.optimizeCacheRecords.length; i++) {
            console.log(`WRAG::CacheSize (Round${i}): js=${this.optimizeCacheRecords[i][0].js}, \
                wasm=${this.optimizeCacheRecords[i][0].wasm}, theta=${this.optimizeCacheRecords[i][1]}`);
        }
        this.hnswInstance.print();
    }
    getJsonExps() {
        return {
            JSoptimizeCacheRecords: this.optimizeCacheRecords,
            JStimers: this.timers.toJSON(),
            WASMhnsw: JSON.parse(this.hnswInstance.getJsonStrExps()),
            JSdataManager: this.dataManager.getJsonExps(),
        };
    }
    async bulkGetFromDB(iids, idsPtr, valuesPtr, embSize, flagPtr) {
        if (DEBUG)
            console.log(`WRAG::bulkGetFromDB: start to load iids=${iids}, idsPtr=${idsPtr}, valuesPtr=${valuesPtr}, embSize=${embSize}`);
        const dataLength = iids.length;
        for (let i = 0; i < dataLength; i++) {
            this.wasmModule.HEAP32[idsPtr / 4 + i] = 0;
        }
        const totalSize = dataLength * embSize;
        for (let i = 0; i < totalSize; i++) {
            this.wasmModule.HEAPF32[valuesPtr / 4 + i] = 0;
        }
        return new Promise(async (resolve, reject) => {
            try {
                const iidResults = new Int32Array(this.wasmModule.HEAP32.buffer, idsPtr, dataLength);
                const valueResults = new Float32Array(this.wasmModule.HEAPF32.buffer, valuesPtr, totalSize);
                const loadResults = await this.dbInstance.bulkGetValues(iids);
                if (loadResults.length < dataLength) {
                    if (DEBUG)
                        console.log(`WRAG::bulkGetFromDB: Data for some iids not found.`);
                    this.wasmModule.HEAP32[flagPtr / 4] = 2;
                    reject(0);
                }
                for (let i = 0; i < dataLength; i++) {
                    const value = loadResults[i].value;
                    iidResults[i] = loadResults[i].iid;
                    if (value === undefined || value.length === 0) {
                        if (DEBUG)
                            console.log(`WRAG::bulkGetFromDB: Data for iid ${iidResults[i]} not found.`);
                        this.wasmModule.HEAP32[flagPtr / 4] = 2;
                        reject(0);
                    }
                    else {
                        if (DEBUG)
                            console.log(`WRAG::bulkGetFromDB: Data for iid ${iidResults[i]} found.`);
                        valueResults.set(value, i * embSize);
                    }
                }
                this.wasmModule.HEAP32[flagPtr / 4] = 1;
                resolve(1);
            }
            catch (error) {
                if (DEBUG)
                    console.error(`WRAG::bulkGetFromDB: Error loading data: ${error}`);
                this.wasmModule.HEAP32[flagPtr / 4] = 2;
                reject(0);
            }
        });
    }
    loadJ2W_nodb(iid, ptr, size) {
        let value = this.dataManager.valueManager.get_nodb(iid);
        if (value !== undefined) {
            const floatArray = new Float32Array(this.wasmModule.HEAPF32.buffer, ptr, size);
            floatArray.set(value);
            if (DEBUG)
                console.log(`WRAG::loadJ2W_nodb: Data for iid ${iid} loaded.`);
            return 1;
        }
        else {
            if (DEBUG)
                console.log(`WRAG::loadJ2W_nodb: Data for iid ${iid} not found.`);
            return 0;
        }
    }
    async loadJ2W(iid, ptr, size, flagPtr) {
        if (DEBUG)
            console.log(`WRAG::loadJ2W: start to load iid=${iid}, ptr=${ptr}, size=${size}`);
        for (let i = 0; i < size; i++) {
            this.wasmModule.HEAPF32[ptr / 4 + i] = 0;
        }
        return new Promise(async (resolve, reject) => {
            this.dataManager.valueManager.get(iid, this.dbInstance).then((value) => {
                if (value === undefined || value.length === 0) {
                    if (DEBUG)
                        console.log(`WRAG::loadJ2W: Data for iid ${iid} not found.`);
                    this.wasmModule.HEAP32[flagPtr / 4] = 2;
                    reject(0);
                }
                else {
                    const floatArray = new Float32Array(this.wasmModule.HEAPF32.buffer, ptr, size);
                    floatArray.set(value);
                    this.wasmModule.HEAP32[flagPtr / 4] = 1;
                    if (DEBUG)
                        console.log(`WRAG::loadJ2W: Data for iid ${iid} loaded.`);
                    resolve(1);
                }
            });
        });
    }
    saveW2J(iidsPtr, iidsSize, valuesPtr, valuesSize, embedSize) {
        const iids = new Int32Array(this.wasmModule.HEAP32.buffer, iidsPtr, iidsSize);
        const values = new Float32Array(this.wasmModule.HEAPF32.buffer, valuesPtr, valuesSize);
        for (let i = 0, emb_i = 0; i < iids.length; i++, emb_i += embedSize) {
            const iid = iids[i];
            const value = values.slice(emb_i, emb_i + embedSize);
            this.dataManager.valueManager.set(iid, value);
            if (DEBUG)
                console.log(`WRAG::saveW2J: Data for iid ${iid} saved.`);
        }
    }
}

;// ./src/settings.ts
const expSettings = {
    impl: "wrag_query_performance",
    cacheOptTest: false,
    tarP: 0.8,
    tarTime: 200,
    distanceFunction: "euclidean",
    cacheStrategy: "FIFO",
    lazyLoading: true,
    useIndexedDB: true,
    prefetchSize: 490000,
    efConstruction: 1000,
    queryEf: 1000,
    m: 16,
    dataDim: 768,
    keyDim: 0,
    wasmMemory: 500000 * 4 * 768,
    jsMemory: 0 * 4 * 768,
    repeat: 101,
};

;// ./src/webanns_core.ts



let wragInstance = new WRAG();
async function initWrag() {
    await wragInstance.init();
    await wragInstance.setParams(expSettings);
    console.log("WRAG init");
}
async function importDataWithCache(file, indexFile) {
    await loadJsonlData(file, indexFile);
}
async function importData(file) {
    const stream = file.stream();
    const reader = stream.getReader();
    let decoder = new TextDecoder();
    let buffer = "";
    let done = false;
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        buffer += decoder.decode(value, { stream: !done });
        const lines = buffer.split("\n");
        buffer = lines.pop();
        for (const line of lines) {
            const jsonData = JSON.parse(line.trim());
            await wragInstance.insert(jsonData.key, jsonData.vector, jsonData.layer);
        }
    }
}
function exportJsonlIndex() {
    return wragInstance.exportJsonlIndex();
}
async function loadJsonlIndex(indexFile) {
    console.log("Loading jsonl indexed...");
    const stream = indexFile.stream();
    const reader = stream.getReader();
    let decoder = new TextDecoder();
    let buffer = "";
    let done = false;
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        buffer += decoder.decode(value, { stream: !done });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
            if (line.trim()) {
                try {
                    wragInstance.loadJsonlIndex(line.trim());
                }
                catch (error) {
                    console.error("Error parsing JSON line:", error, line);
                }
            }
        }
    }
    if (buffer.trim()) {
        try {
            for (const line of buffer.split("\n")) {
                wragInstance.loadJsonlIndex(line.trim());
            }
        }
        catch (error) {
            console.error("Error parsing JSON line:", error, buffer);
        }
    }
}
async function loadJsonlData(file, indexFile) {
    console.log("Loading index...");
    await loadJsonlIndex(indexFile);
    console.log("Loading data...");
    const stream = file.stream();
    const reader = stream.getReader();
    let decoder = new TextDecoder();
    let buffer = "";
    let done = false;
    while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        let decodedValue;
        try {
            decodedValue = decoder.decode(value, { stream: !done });
        }
        catch (error) {
            decoder = new TextDecoder();
            decodedValue = decoder.decode(value, { stream: !done });
        }
        buffer += decodedValue;
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
            if (line.trim()) {
                const jsonData = JSON.parse(line.trim());
                await wragInstance.insertSkipIndex(jsonData.key, jsonData.vector, jsonData.layer);
            }
        }
    }
    if (buffer.trim()) {
        try {
            for (const line of buffer.split("\n")) {
                if (line.trim()) {
                    const jsonData = JSON.parse(line.trim());
                    await wragInstance.insertSkipIndex(jsonData.key, jsonData.vector, jsonData.layer);
                }
            }
        }
        catch (error) {
            debugger;
            console.error("Error parsing JSONL data:", error, buffer);
        }
    }
}
async function performSearch(show_results) {
    let queryArray = [];
    for (let i = 0; i < expSettings.dataDim; i++) {
        queryArray[i] = Math.random();
    }
    const k = 10;
    const resultsArray = await wragInstance.query(queryArray, k, expSettings.queryEf);
    if (show_results) {
        console.log("Results: ", resultsArray);
    }
}
async function evalQuery(_repeat) {
    wragInstance.clearMonitor();
    if (_repeat) {
        expSettings.repeat = _repeat;
    }
    console.log(`Performing ${expSettings.repeat} searches...`);
    for (let i = 0; i < expSettings.repeat; i++) {
        wragInstance.setMonitorMode(`QUERY${i}`);
        if (_repeat === 1) {
            await performSearch(true);
        }
        else {
            await performSearch();
        }
    }
    wragInstance.print();
}
async function fastQuery(queryArray, topK) {
    const resultsArray = await wragInstance.query(queryArray, topK, expSettings.queryEf);
    return resultsArray;
}

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});