function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function o(t) {
    return "string" == typeof t;
  }

  function p(t) {
    return "function" == typeof t;
  }

  function q(t) {
    return "number" == typeof t;
  }

  function r(t) {
    return void 0 === t;
  }

  function s(t) {
    return "object" == _typeof(t);
  }

  function t(t) {
    return !1 !== t;
  }

  function u() {
    return "undefined" != typeof window;
  }

  function v(t) {
    return p(t) || o(t);
  }

  function M(t) {
    return (h = mt(t, ot)) && oe;
  }

  function N(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function O(t, e) {
    return !e && console.warn(t);
  }

  function P(t, e) {
    return t && (ot[t] = e) && h && (h[t] = e) || ot;
  }

  function Q() {
    return 0;
  }

  function $(t) {
    var e,
        r,
        i = t[0];

    if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = ct.length; r-- && !ct[r].targetTest(i);) {
        ;
      }

      e = ct[r];
    }

    for (r = t.length; r--;) {
      t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1);
    }

    return t;
  }

  function _(t) {
    return t._gsap || $(xt(t))[0]._gsap;
  }

  function aa(t, e, i) {
    return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i;
  }

  function ba(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function ca(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function da(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }

  function ea(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {
      ;
    }

    return i < r;
  }

  function fa() {
    var t,
        e,
        r = ht.length,
        i = ht.slice(0);

    for (lt = {}, t = ht.length = 0; t < r; t++) {
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
  }

  function ga(t, e, r, i) {
    ht.length && fa(), t.render(e, r, i), ht.length && fa();
  }

  function ha(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t;
  }

  function ia(t) {
    return t;
  }

  function ja(t, e) {
    for (var r in e) {
      r in t || (t[r] = e[r]);
    }

    return t;
  }

  function ma(t, e) {
    for (var r in e) {
      "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? ma(t[r] || (t[r] = {}), e[r]) : e[r]);
    }

    return t;
  }

  function na(t, e) {
    var r,
        i = {};

    for (r in t) {
      r in e || (i[r] = t[r]);
    }

    return i;
  }

  function oa(e) {
    var r = e.parent || I,
        i = e.keyframes ? function _setKeyframeDefaults(i) {
      return function (t, e) {
        for (var r in e) {
          r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
        }
      };
    }(W(e.keyframes)) : ja;
    if (t(e.inherit)) for (; r;) {
      i(e, r.vars.defaults), r = r.parent || r._dp;
    }
    return e;
  }

  function ra(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function sa(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function ta(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) {
      r._dirty = 1, r = r.parent;
    }
    return t;
  }

  function wa(t) {
    return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function ya(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function za(t) {
    return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || X) || 0));
  }

  function Aa(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), za(t), r._dirty || ta(r, t)), t;
  }

  function Ba(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = ya(t.rawTime(), e), (!e._dur || Tt(0, e.totalDuration(), r) - e._tTime > X) && e.render(r, !0)), ta(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) {
        0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      }
      t._zTime = -X;
    }
  }

  function Ca(t, e, r, i) {
    return e.parent && sa(e), e._start = da((q(r) ? r : r || t !== I ? bt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var a,
          s = t[i];
      if (n) for (a = e[n]; s && s[n] > a;) {
        s = s._prev;
      }
      s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ba(t, e), t;
  }

  function Da(t, e) {
    return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }

  function Ea(t, e, r, i) {
    return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== St.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }

  function Ja(t, e, r, i) {
    var n = t._repeat,
        a = da(e) || 0,
        s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Aa(t, t._tTime = t._tDur * s) : t.parent && za(t), r || ta(t.parent, t), t;
  }

  function Ka(t) {
    return t instanceof Nt ? ta(t) : Ja(t, t._dur);
  }

  function Na(e, r, i) {
    var n,
        a,
        s = q(r[1]),
        o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        u = r[o];

    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) {
        n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;
      }

      u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }

    return new Jt(r[0], u, r[1 + o]);
  }

  function Oa(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Qa(t, e) {
    return o(t) && (e = st.exec(t)) ? t.substr(e.index + e[0].length) : "";
  }

  function Ta(t, e) {
    return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i;
  }

  function Xa(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function Ya(t) {
    if (p(t)) return t;

    var c = s(t) ? t : {
      each: t
    },
        _ = Rt(c.ease),
        m = c.from || 0,
        g = parseFloat(c.base) || 0,
        v = {},
        e = 0 < m && m < 1,
        y = isNaN(m) || e,
        b = c.axis,
        T = m,
        w = m;

    return o(m) ? T = w = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && y && (T = m[0], w = m[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || c).length,
          p = v[d];

      if (!p) {
        if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, j])[1])) {
          for (h = -j; h < (h = r[f++].getBoundingClientRect().left) && f < d;) {
            ;
          }

          f--;
        }

        for (p = v[d] = [], i = y ? Math.min(f, d) * T - .5 : m % f, n = f === j ? 0 : y ? d * w / f - .5 : m / f | 0, l = j, u = h = 0; u < d; u++) {
          a = u % f - i, s = n - (u / f | 0), p[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
        }

        "random" === m && Xa(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p.b = d < 0 ? g - d : g, p.u = Qa(c.amount || c.each) || 0, _ = _ && d < 0 ? Bt(_) : _;
      }

      return d = (p[t] - p.min) / p.max || 0, da(p.b + (_ ? _(d) : d) * p.v) + p.u;
    };
  }

  function Za(r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (t) {
      var e = Math.round(parseFloat(t) / r) * r * i;
      return (e - e % 1) / i + (q(t) ? 0 : Qa(t));
    };
  }

  function $a(u, t) {
    var h,
        l,
        e = W(u);
    return !e && s(u) && (h = e = u.radius || j, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = Za(u.increment)), Oa(t, e ? p(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = j, s = 0, o = u.length; o--;) {
        (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
      }

      return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Qa(t);
    } : Za(u));
  }

  function _a(t, e, r, i) {
    return Oa(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }

  function db(e, r, t) {
    return Oa(t, function (t) {
      return e[~~r(t)];
    });
  }

  function gb(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
      i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + _a(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    }

    return s + t.substr(a, t.length - a);
  }

  function jb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = j;

    for (i in s) {
      (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    }

    return a;
  }

  function lb(t) {
    return sa(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Mt(t, "onInterrupt"), t;
  }

  function qb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0;
  }

  function rb(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p = t ? q(t) ? [t >> 16, t >> 8 & kt, t & kt] : 0 : Ct.black;

    if (!p) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ct[t]) p = Ct[t];else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & kt, p & kt, parseInt(t.substr(7), 16) / 255];
        p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & kt, t & kt];
      } else if ("hsl" === t.substr(0, 3)) {
        if (p = d = t.match(tt), e) {
          if (~t.indexOf("=")) return p = t.match(et), r && p.length < 4 && (p[3] = 1), p;
        } else s = +p[0] % 360 / 360, o = p[1] / 100, i = 2 * (u = p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < p.length && (p[3] *= 1), p[0] = qb(s + 1 / 3, i, n), p[1] = qb(s, i, n), p[2] = qb(s - 1 / 3, i, n);
      } else p = t.match(tt) || Ct.transparent;
      p = p.map(Number);
    }

    return e && !d && (i = p[0] / kt, n = p[1] / kt, a = p[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p;
  }

  function sb(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(Pt).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function tb(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(Pt),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = rb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = sb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Pt, "1").split(rt)).length - 1; l < s; l++) {
      o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    }
    if (!n) for (s = (n = t.split(Pt)).length - 1; l < s; l++) {
      o += n[l] + u[l];
    }
    return o + n[s];
  }

  function wb(t) {
    var e,
        r = t.join(" ");
    if (Pt.lastIndex = 0, Pt.test(r)) return e = At.test(r), t[1] = tb(t[1], e), t[0] = tb(t[0], e, sb(t[1])), !0;
  }

  function Fb(t) {
    var e = (t + "").split("("),
        r = zt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
        r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i, s = r.substr(e + 1).trim();
      }

      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(ha)) : zt._CE && Ft.test(t) ? zt._CE("", t) : r;
  }

  function Hb(t, e) {
    for (var r, i = t._first; i;) {
      i instanceof Nt ? Hb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Hb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
  }

  function Jb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return ba(t, function (t) {
      for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) {
        zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e];
      }
    }), a;
  }

  function Kb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Lb(r, t, e) {
    function Sl(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * K((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / U * (Math.asin(1 / i) || 0),
        s = "out" === r ? Sl : "in" === r ? function (t) {
      return 1 - Sl(1 - t);
    } : Kb(Sl);
    return n = U / n, s.config = function (t, e) {
      return Lb(r, t, e);
    }, s;
  }

  function Mb(e, r) {
    function $l(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? $l : "in" === e ? function (t) {
      return 1 - $l(1 - t);
    } : Kb($l);
    return t.config = function (t) {
      return Mb(e, t);
    }, t;
  }

  var R,
      I,
      i,
      n,
      a,
      h,
      l,
      f,
      d,
      c,
      m,
      g,
      y,
      b,
      T,
      w,
      x,
      k,
      C,
      A,
      S,
      D,
      z,
      F,
      E,
      B,
      Y = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      L = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      j = 1e8,
      X = 1 / j,
      U = 2 * Math.PI,
      V = U / 4,
      J = 0,
      G = Math.sqrt,
      Z = Math.cos,
      K = Math.sin,
      H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
      W = Array.isArray,
      tt = /(?:-?\.?\d|\.)+/gi,
      et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      nt = /[+-]=-?[.\d]+/,
      at = /[^,'"\[\]\s]+/gi,
      st = /[\d.+\-=]+(?:e[-+]\d*)*/i,
      ot = {},
      ut = {},
      ht = [],
      lt = {},
      ft = {},
      dt = {},
      pt = 30,
      ct = [],
      _t = "",
      mt = function _merge(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  },
      gt = function _animationCycle(t, e) {
    var r = Math.floor(t /= e);
    return t && r === t ? r - 1 : r;
  },
      vt = function _isFromOrFromStart(t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
      yt = {
    _start: 0,
    endTime: Q,
    totalDuration: Q
  },
      bt = function _parsePosition(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        u = t._recent || yt,
        h = t.duration() >= j ? u.endTime(!1) : t._dur;
    return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (W(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e;
  },
      Tt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      wt = [].slice,
      xt = function toArray(t, e, r) {
    return !o(t) || r || !n && Dt() ? W(t) ? function _flatten(t, e, r) {
      return void 0 === r && (r = []), t.forEach(function (t) {
        return o(t) && !e || Ta(t, 1) ? r.push.apply(r, xt(t)) : r.push(t);
      }) || r;
    }(t, r) : Ta(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0);
  },
      Ot = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Oa(n, function (t) {
      return r + ((t - e) / a * s || 0);
    });
  },
      Mt = function _callback(t, e, r) {
    var i,
        n,
        a = t.vars,
        s = a[e];
    if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && fa(), i ? s.apply(n, i) : s.call(n);
  },
      kt = 255,
      Ct = {
    aqua: [0, kt, kt],
    lime: [0, kt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, kt],
    navy: [0, 0, 128],
    white: [kt, kt, kt],
    olive: [128, 128, 0],
    yellow: [kt, kt, 0],
    orange: [kt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [kt, 0, 0],
    pink: [kt, 192, 203],
    cyan: [0, kt, kt],
    transparent: [kt, kt, kt, 0]
  },
      Pt = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";

    for (t in Ct) {
      e += "|" + t + "\\b";
    }

    return new RegExp(e + ")", "gi");
  }(),
      At = /hsl[a]?\(/,
      St = (x = Date.now, k = 500, C = 33, A = x(), S = A, z = D = 1e3 / 240, b = {
    time: 0,
    frame: 0,
    tick: function tick() {
      Ok(!0);
    },
    deltaRatio: function deltaRatio(t) {
      return T / (1e3 / (t || 60));
    },
    wake: function wake() {
      l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = oe, (i.gsapVersions || (i.gsapVersions = [])).push(oe.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && b.sleep(), g = y || function (t) {
        return setTimeout(t, z - 1e3 * b.time + 1 | 0);
      }, c = 1, Ok(2));
    },
    sleep: function sleep() {
      (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      k = t || 1e8, C = Math.min(e, k, 0);
    },
    fps: function fps(t) {
      D = 1e3 / (t || 240), z = 1e3 * b.time + D;
    },
    add: function add(t) {
      F.indexOf(t) < 0 && F.push(t), Dt();
    },
    remove: function remove(t, e) {
      ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= w && w--;
    },
    _listeners: F = []
  }),
      Dt = function _wake() {
    return !c && St.wake();
  },
      zt = {},
      Ft = /^[\d.\-M][\d.\-,\s]/,
      Et = /["']/g,
      Bt = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      Rt = function _parseEase(t, e) {
    return t && (p(t) ? t : zt[t] || Fb(t)) || e;
  };

  function Ok(t) {
    var e,
        r,
        i,
        n,
        a = x() - S,
        s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (S += a) - A) - z) || s) && (n = ++b.frame, T = i - 1e3 * b.time, b.time = i /= 1e3, z += e + (D <= e ? 4 : D - e), r = 1), s || (m = g(Ok)), r) for (w = 0; w < F.length; w++) {
      F[w](i, T, n, t);
    }
  }

  function pm(t) {
    return t < B ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Jb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Jb("Elastic", Lb("in"), Lb("out"), Lb()), E = 7.5625, B = 1 / 2.75, Jb("Bounce", function (t) {
    return 1 - pm(1 - t);
  }, pm), Jb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Jb("Circ", function (t) {
    return -(G(1 - t * t) - 1);
  }), Jb("Sine", function (t) {
    return 1 === t ? 1 : 1 - Z(t * V);
  }), Jb("Back", Mb("in"), Mb("out"), Mb()), zt.SteppedEase = zt.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * Tt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return _t += t + "," + t + "Params,";
  });

  var It,
      Lt = function GSCache(t, e) {
    this.id = J++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Kt;
  },
      qt = ((It = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, It.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, It.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Ja(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, It.totalTime = function totalTime(t, e) {
    if (Dt(), !arguments.length) return this._tTime;
    var r = this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (Aa(this, t), !r._dp || r.parent || Ba(r, this); r && r.parent;) {
        r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
      }

      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ca(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === X || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ga(this, t, e)), this;
  }, It.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + wa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
  }, It.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, It.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + wa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, It.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
  }, It.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -X ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? ya(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -X ? 0 : this._rts, function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) {
        e._dirty = 1, e.totalDuration(), e = e.parent;
      }
    }(this.totalTime(Tt(-this._delay, this._tDur, e), !0)), za(this), this;
  }, It.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Dt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== X && (this._tTime -= X)))), this) : this._ps;
  }, It.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || Ca(e, this, t - this._delay), this;
    }

    return this._start;
  }, It.endTime = function endTime(e) {
    return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, It.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ya(e.rawTime(t), this) : this._tTime : this._tTime;
  }, It.globalTime = function globalTime(t) {
    for (var e = this, r = arguments.length ? t : e.rawTime(); e;) {
      r = e._start + r / (e._ts || 1), e = e._dp;
    }

    return r;
  }, It.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ka(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, It.repeatDelay = function repeatDelay(t) {
    if (arguments.length) {
      var e = this._time;
      return this._rDelay = t, Ka(this), e ? this.time(e) : this;
    }

    return this._rDelay;
  }, It.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, It.seek = function seek(e, r) {
    return this.totalTime(bt(this, e), t(r));
  }, It.restart = function restart(e, r) {
    return this.play().totalTime(e ? -this._delay : 0, t(r));
  }, It.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, It.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, It.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, It.resume = function resume() {
    return this.paused(!1);
  }, It.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -X : 0)), this) : this._rts < 0;
  }, It.invalidate = function invalidate() {
    return this._initted = this._act = 0, this._zTime = -X, this;
  }, It.isActive = function isActive() {
    var t,
        e = this.parent || this._dp,
        r = this._start;
    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - X));
  }, It.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, It.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function Gn() {
        var t = i.then;
        i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = p(t) ? t : ia;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Gn() : i._prom = Gn;
    });
  }, It.kill = function kill() {
    lb(this);
  }, Animation);

  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ja(this, +t.duration, 1, 1), this.data = t.data, c || St.wake();
  }

  ja(qt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -X,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Nt = function (n) {
    function Timeline(e, r) {
      var i;
      return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Ca(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Da(_assertThisInitialized(i), e.scrollTrigger), i;
    }

    _inheritsLoose(Timeline, n);

    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Na(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Na(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Na(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, oa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Jt(t, e, bt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Ca(this, Jt.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Jt(t, r, bt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
      return i.runBackwards = 1, oa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o);
    }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
      return n.startAt = i, oa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u);
    }, e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = t <= 0 ? 0 : da(t),
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (p = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);

          if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !_ && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, c = 1), s !== d && !this._lock) {
            var b = p && 1 & d,
                T = b === (p && 1 & s);
            if (s < d && (b = !b), _ = b ? 0 : g, this._lock = 1, this.render(_ || (c ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Mt(this, "onRepeat"), this.vars.repeatRefresh && !c && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, T && (this._lock = 2, _ = b ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !c && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Hb(this, c);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, da(_), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Mt(this, "onStart"), this._tTime !== v)) return this;
        if (_ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -X);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -X : X);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -X)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, za(this), this.render(t, e, r);
        this._onUpdate && !e && Mt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || sa(this, 1), e || t < 0 && !_ || !v && !_ && m || (Mt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }

      return this;
    }, e.add = function add(t, e) {
      var r = this;

      if (q(e) || (e = bt(this, e, t)), !(t instanceof qt)) {
        if (W(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), this;
        if (o(t)) return this.addLabel(t, e);
        if (!p(t)) return this;
        t = Jt.delayedCall(0, t);
      }

      return this !== t ? Ca(this, t, e) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -j);

      for (var n = [], a = this._first; a;) {
        a._start >= i && (a instanceof Jt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      }

      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
        if (e[r].vars.id === t) return e[r];
      }
    }, e.remove = function remove(t) {
      return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (ra(this, t), t === this._recent && (this._recent = this._last), ta(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(St.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = bt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = Jt.delayedCall(0, e || Q, r);
      return i.data = "isPause", this._hasPause = 1, Ca(this, i, bt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;

      for (t = bt(this, t); e;) {
        e._start === t && "isPause" === e.data && sa(e), e = e._next;
      }
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) {
        Qt !== i[n] && i[n].kill(t, e);
      }

      return this;
    }, e.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) {
        a instanceof Jt ? ea(a._targets, n) && (s ? (!Qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
      }

      return i;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
          i = this,
          n = bt(i, t),
          a = e.startAt,
          s = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = Jt.to(i, ja({
        ease: e.ease || "none",
        lazy: !1,
        immediateRender: !1,
        time: n,
        overwrite: "auto",
        duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || X,
        onStart: function onStart() {
          if (i.pause(), !r) {
            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
            h._dur !== t && Ja(h, t, 0, 1).render(h._time, !0, !0), r = 1;
          }

          s && s.apply(h, o || []);
        }
      }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ja({
        startAt: {
          time: bt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), jb(this, bt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), jb(this, bt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + X);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) {
        n._start >= r && (n._start += t, n._end += t), n = n._next;
      }

      if (e) for (i in a) {
        a[i] >= r && (a[i] += t);
      }
      return ta(this);
    }, e.invalidate = function invalidate() {
      var t = this._first;

      for (this._lock = 0; t;) {
        t.invalidate(), t = t._next;
      }

      return n.prototype.invalidate.call(this);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) {
        e = r._next, this.remove(r), r = e;
      }

      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ta(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = j;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));

      if (a._dirty) {
        for (i = a.parent; s;) {
          e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ca(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        }

        Ja(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }

      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (I._ts && (ga(I, ya(t, I)), f = St.frame), St.frame >= pt) {
        pt += Y.autoSleep || 120;
        var e = I._first;

        if ((!e || !e._ts) && Y.autoSleep && St._listeners.length < 2) {
          for (; e && !e._ts;) {
            e = e._next;
          }

          e || St.sleep();
        }
      }
    }, Timeline;
  }(qt);

  ja(Nt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Tb(t, e, r, i, n, a) {
    var u, h, l, f;
    if (ft[t] && !1 !== (u = new ft[t]()).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
      if (p(t) && (t = Xt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || W(t) || H(t)) return o(t) ? Xt(t, n, e, r, i) : t;
      var a,
          u = {};

      for (a in t) {
        u[a] = Xt(t[a], n, e, r, i);
      }

      return u;
    }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new ae(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d)) for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) {
      l[u._props[f]] = h;
    }
    return u;
  }

  function Xb(t, r, e, i) {
    var n,
        a,
        s = r.ease || i || "power1.inOut";
    if (W(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) {
      a = e[n] || (e[n] = []), "ease" === n || a.push({
        t: parseFloat(t),
        v: r[n],
        e: s
      });
    }
  }

  var Qt,
      Yt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
    p(i) && (i = i(n || 0, t, a));
    var l,
        f = t[e],
        d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
        c = p(f) ? h ? Zt : $t : Gt;
    if (o(i) && (~i.indexOf("random(") && (i = gb(i)), "=" === i.charAt(1) && (!(l = parseFloat(d) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Qa(d) || 0)) && 0 !== l || (i = l))), d !== i) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _ = new ae(this._pt, t, e, 0, 1, te, null, n),
          m = 0,
          g = 0;

      for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = gb(i)), a && (a(c = [r, i], t, e), r = c[0], i = c[1]), u = r.match(it) || []; o = it.exec(i);) {
        l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
          _next: _._pt,
          p: f || 1 === g ? f : ",",
          s: d,
          c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
      }

      return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || p) && (_.e = 0), this._pt = _;
    }.call(this, t, e, d, i, c, u || Y.stringFilter, h)) : (l = new ae(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? Wt : Ht, 0, c), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l);
  },
      jt = function _initTween(e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        b = g.immediateRender,
        T = g.lazy,
        w = g.onUpdate,
        x = g.onUpdateParams,
        O = g.callbackScope,
        M = g.runBackwards,
        k = g.yoyoEase,
        C = g.keyframes,
        P = g.autoRevert,
        A = e._dur,
        S = e._startAt,
        D = e._targets,
        z = e.parent,
        F = z && "nested" === z.data ? z.parent._targets : D,
        E = "auto" === e._overwrite && !R,
        B = e.timeline;

    if (!B || C && v || (v = "none"), e._ease = Rt(v, L.ease), e._yEase = k ? Bt(Rt(!0 === k ? v : k, L.ease)) : 0, k && e._yoyo && !e._repeat && (k = e._yEase, e._yEase = e._ease, e._ease = k), e._from = !B && !!g.runBackwards, !B || C && !g.stagger) {
      if (c = (l = D[0] ? _(D[0]).harness : 0) && g[l.prop], i = na(g, ut), S && sa(S.render(-1, !0)), y) {
        if (sa(e._startAt = Jt.set(D, ja({
          data: "isStart",
          overwrite: !1,
          parent: z,
          immediateRender: !0,
          lazy: t(T),
          startAt: null,
          delay: 0,
          onUpdate: w,
          onUpdateParams: x,
          callbackScope: O,
          stagger: 0
        }, y))), r < 0 && !b && !P && e._startAt.render(-1, !0), b) {
          if (0 < r && !P && (e._startAt = 0), A && r <= 0) return void (r && (e._zTime = r));
        } else !1 === P && (e._startAt = 0);
      } else if (M && A) if (S) P || (e._startAt = 0);else if (r && (b = !1), a = ja({
        overwrite: !1,
        data: "isFromStart",
        lazy: b && t(T),
        immediateRender: b,
        stagger: 0,
        parent: z
      }, i), c && (a[l.prop] = c), sa(e._startAt = Jt.set(D, a)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, b) {
        if (!r) return;
      } else _initTween(e._startAt, X);

      for (e._pt = 0, T = A && t(T) || T && !A, n = 0; n < D.length; n++) {
        if (h = (o = D[n])._gsap || $(D)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && fa(), p = F === D ? n : F.indexOf(o), l && !1 !== (f = new l()).init(o, c || i, e, p, F) && (e._pt = s = new ae(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          d[t] = s;
        }), f.priority && (u = 1)), !l || c) for (a in i) {
          ft[a] && (f = Tb(a, i, e, p, o, F)) ? f.priority && (u = 1) : d[a] = s = Yt.call(e, o, a, "get", i[a], p, F, 0, g.stringFilter);
        }
        e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (Qt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Qt = 0), e._pt && T && (lt[h.id] = 1);
      }

      u && ne(e), e._onInit && e._onInit(e);
    }

    e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, C && r <= 0 && B.render(j, !0, !0);
  },
      Xt = function _parseFuncOrString(t, e, r, i, n) {
    return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? gb(t) : t;
  },
      Ut = _t + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Vt = {};

  ba(Ut + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Vt[t] = 1;
  });

  var Jt = function (F) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var o,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _ = (a = F.call(this, n ? r : oa(r)) || this).vars,
          m = _.duration,
          g = _.delay,
          y = _.immediateRender,
          b = _.stagger,
          T = _.overwrite,
          w = _.keyframes,
          x = _.defaults,
          M = _.scrollTrigger,
          k = _.yoyoEase,
          C = r.parent || I,
          P = (W(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);

      if (a._targets = P.length ? $(P) : O("GSAP target " + e + " not found. https://greensock.com", !Y.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, w || b || v(m) || v(g)) {
        if (r = a.vars, (o = a.timeline = new Nt({
          data: "nested",
          defaults: x || {}
        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, b || v(m) || v(g)) {
          if (l = P.length, p = b && Ya(b), s(b)) for (f in b) {
            ~Ut.indexOf(f) && ((c = c || {})[f] = b[f]);
          }

          for (u = 0; u < l; u++) {
            (h = na(r, Vt)).stagger = 0, k && (h.yoyoEase = k), c && mt(h, c), d = P[u], h.duration = +Xt(m, _assertThisInitialized(a), u, d, P), h.delay = (+Xt(g, _assertThisInitialized(a), u, d, P) || 0) - a._delay, !b && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, p ? p(u, d, P) : 0), o._ease = zt.none;
          }

          o.duration() ? m = g = 0 : a.timeline = 0;
        } else if (w) {
          oa(ja(o.vars.defaults, {
            ease: "none"
          })), o._ease = Rt(w.ease || r.ease || "none");
          var A,
              S,
              D,
              z = 0;
          if (W(w)) w.forEach(function (t) {
            return o.to(P, t, ">");
          });else {
            for (f in h = {}, w) {
              "ease" === f || "easeEach" === f || Xb(f, w[f], h, w.easeEach);
            }

            for (f in h) {
              for (A = h[f].sort(function (t, e) {
                return t.t - e.t;
              }), u = z = 0; u < A.length; u++) {
                (D = {
                  ease: (S = A[u]).e,
                  duration: (S.t - (u ? A[u - 1].t : 0)) / 100 * m
                })[f] = S.v, o.to(P, D, z), z += D.duration;
              }
            }

            o.duration() < m && o.to({}, {
              duration: m - o.duration()
            });
          }
        }

        m || a.duration(m = o.duration());
      } else a.timeline = 0;

      return !0 !== T || R || (Qt = _assertThisInitialized(a), I.killTweensOf(P), Qt = 0), Ca(C, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(C._time) && t(y) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== C.data) && (a._tTime = -X, a.render(Math.max(0, -g))), M && Da(_assertThisInitialized(a), M), a;
    }

    _inheritsLoose(Tween, F);

    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          p = this._tDur,
          c = this._dur,
          _ = p - X < t && 0 <= t ? p : t < X ? 0 : t;

      if (c) {
        if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (i = _, l = this.timeline, this._repeat) {
            if (s = c + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
            if (i = da(_ % s), _ === p ? (a = this._repeat, i = c) : ((a = ~~(_ / s)) && a === _ / s && (i = c, a--), c < i && (i = c)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = c - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
            a !== o && (l && this._yEase && Hb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Ea(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
            if (c !== this._dur) return this.render(t, e, r);
          }

          if (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / c), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Mt(this, "onStart"), this._tTime !== _)) return this;

          for (n = this._pt; n;) {
            n.r(h, n.d), n = n._next;
          }

          l && l.render(t < 0 ? t : !i && u ? -X : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Mt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Mt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && c || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || sa(this, 1), e || t < 0 && !d || !_ && !d || (Mt(this, _ === p ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < p && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a,
            s,
            o = t.ratio,
            u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
          var e = t.parent;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
        }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
            h = t._rDelay,
            l = 0;

        if (h && t._repeat && (l = Tt(0, t._tDur, e), a = gt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== gt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === X || !e && t._zTime) {
          if (!t._initted && Ea(t, e, i, r)) return;

          for (s = t._zTime, t._zTime = e || (r ? X : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) {
            n.r(u, n.d), n = n._next;
          }

          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Mt(t, "onUpdate"), l && t._repeat && !r && t.parent && Mt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && sa(t, 1), r || (Mt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);

      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), F.prototype.invalidate.call(this);
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? lb(this) : this;

      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Qt && !0 !== Qt.vars.overwrite)._first || lb(this), this.parent && r !== this.timeline.totalDuration() && Ja(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }

      var i,
          n,
          a,
          s,
          u,
          h,
          l,
          f = this._targets,
          d = t ? xt(t) : f,
          p = this._ptLookup,
          c = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {
          ;
        }

        return r < 0;
      }(f, d)) return "all" === e && (this._pt = 0), lb(this);

      for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? _(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = mt({}, e), o) {
          if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {
            r[a[n]] = r[i];
          }
        }

        return r;
      }(f, e)), l = f.length; l--;) {
        if (~d.indexOf(f[l])) for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s) {
          (h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ra(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
        }
      }

      return this._initted && !this._pt && c && lb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Na(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Na(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return I.killTweensOf(t, e, r);
    }, Tween;
  }(qt);

  ja(Jt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Jt[r] = function () {
      var t = new Nt(),
          e = wt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function dc(t, e, r) {
    return t.setAttribute(e, r);
  }

  function lc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Gt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      $t = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      Zt = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      Kt = function _getSetter(t, e) {
    return p(t[e]) ? $t : r(t[e]) && t.setAttribute ? dc : Gt;
  },
      Ht = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
      Wt = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      te = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) {
        i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
      }

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      ee = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) {
      r.r(t, r.d), r = r._next;
    }
  },
      re = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) {
      n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }
  },
      ie = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) {
      r = i._next, i.p === t && !i.op || i.op === t ? ra(this, i, "_pt") : i.dep || (e = 1), i = r;
    }

    return !e;
  },
      ne = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) {
        r = r._next;
      }

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      ae = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = lc, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Ht, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  ba(_t + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ut[t] = 1;
  }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Nt, I = new Nt({
    sortChildren: !1,
    defaults: L,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), Y.stringFilter = wb;
  var se = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
        e[r] = arguments[r];
      }

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t["default"] || t).name,
              r = p(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: Q,
            render: ee,
            add: Yt,
            kill: ie,
            modifier: re,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: Kt,
            aliases: {},
            register: 0
          };

          if (Dt(), t !== i) {
            if (ft[e]) return;
            ja(i, ja(na(t, n), a)), mt(i.prototype, mt(n, na(t, a))), ft[i.prop = e] = i, t.targetTest && (ct.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          P(e, i), t.register && t.register(oe, i, ae);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Nt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      o(i) && (i = xt(i)[0]);

      var n = _(i || {}).get,
          a = e ? ia : ha;

      return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function (t, e, r) {
        return a((ft[t] && ft[t].get || n)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = xt(r)).length) {
        var n = r.map(function (t) {
          return oe.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) {
            n[e](t);
          }
        };
      }

      r = r[0] || {};

      var s = ft[e],
          o = _(r),
          u = o.harness && (o.harness.aliases || {})[e] || e,
          h = s ? function (t) {
        var e = new s();
        d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && ee(1, d);
      } : o.set(r, u);

      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Rt(t.ease, L.ease)), ma(L, t || {});
    },
    config: function config(t) {
      return ma(Y, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
          n = t.effect,
          e = t.plugins,
          a = t.defaults,
          r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.");
      }), dt[i] = function (t, e, r) {
        return n(xt(t), ja(e || {}, a), r);
      }, r && (Nt.prototype[i] = function (t, e, r) {
        return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      zt[t] = Rt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Rt(t, e) : zt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(e, r) {
      void 0 === e && (e = {});
      var i,
          n,
          a = new Nt(e);

      for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) {
        n = i._next, !r && !i._dur && i instanceof Jt && i.vars.onComplete === i._targets[0] || Ca(a, i, i._start - i._delay), i = n;
      }

      return Ca(I, a, 0), a;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return W(e) ? db(e, wrap(0, e.length), t) : Oa(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return W(e) ? db(e, wrapYoyo(0, e.length - 1), t) : Oa(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: Ya,
      random: _a,
      snap: $a,
      normalize: function normalize(t, e, r) {
        return Ot(t, e, 0, 1, r);
      },
      getUnit: Qa,
      clamp: function clamp(e, r, t) {
        return Oa(t, function (t) {
          return Tt(e, r, t);
        });
      },
      splitColor: rb,
      toArray: xt,
      selector: function selector(r) {
        return r = xt(r)[0] || O("Invalid scope") || {}, function (t) {
          var e = r.current || r.nativeElement || r;
          return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r);
        };
      },
      mapRange: Ot,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
          e[r] = arguments[r];
        }

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Qa(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };

        if (!n) {
          var a,
              s,
              u,
              h,
              l,
              f = o(e),
              d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (W(e) && !W(r)) {
            for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) {
              u.push(interpolate(e[s - 1], e[s]));
            }

            h--, n = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = mt(W(e) ? [] : {}, e));

          if (!u) {
            for (a in r) {
              Yt.call(d, e, a, "get", r[a]);
            }

            n = function func(t) {
              return ee(t, d) || (f ? e.p : e);
            };
          }
        }

        return Oa(t, n);
      },
      shuffle: Xa
    },
    install: M,
    effects: dt,
    ticker: St,
    updateRoot: Nt.updateRoot,
    plugins: ft,
    globalTimeline: I,
    core: {
      PropTween: ae,
      globals: P,
      Tween: Jt,
      Timeline: Nt,
      Animation: qt,
      getCache: _,
      _removeLinkedListItem: ra,
      suppressOverwrites: function suppressOverwrites(t) {
        return R = t;
      }
    }
  };
  ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return se[t] = Jt[t];
  }), St.add(Nt.updateRoot), d = se.to({}, {
    duration: 0
  });

  function pc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {
      r = r._next;
    }

    return r;
  }

  function rc(t, n) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;

          if (o(i) && (e = {}, ba(i, function (t) {
            return e[t] = 1;
          }), i = e), n) {
            for (r in e = {}, i) {
              e[r] = n(i[r]);
            }

            i = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) {
              for (i = a.length; i--;) {
                (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = pc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
              }
            }
          }(t, i);
        };
      }
    };
  }

  var oe = se.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;

      for (a in e) {
        (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
      }
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) {
        this.add(t, r, t[r] || 0, e[r]);
      }
    }
  }, rc("roundProps", Za), rc("modifiers"), rc("snap", $a)) || se;
  Jt.version = Nt.version = oe.version = "3.9.1", l = 1, u() && Dt();

  function ad(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function bd(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function cd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function dd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function ed(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function fd(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function gd(t, e, r) {
    return t.style[e] = r;
  }

  function hd(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function id(t, e, r) {
    return t._gsap[e] = r;
  }

  function jd(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function kd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function ld(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function pd(t, e) {
    var r = he.createElementNS ? he.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : he.createElement(t);
    return r.style ? r : he.createElement(t);
  }

  function qd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && qd(t, Xe(e) || e, 1) || "";
  }

  function td() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (ue = window, he = ue.document, le = he.documentElement, de = pd("div") || {
      style: {}
    }, pd("div"), Qe = Xe(Qe), Ye = Qe + "Origin", de.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ce = !!Xe("perspective"), fe = 1);
  }

  function ud(t) {
    var e,
        r = pd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (le.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ud;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), le.removeChild(r), this.style.cssText = a, e;
  }

  function vd(t, e) {
    for (var r = e.length; r--;) {
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
  }

  function wd(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = ud.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === ud || (r = ud.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +vd(e, ["x", "cx", "x1"]) || 0,
      y: +vd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function xd(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !wd(t));
  }

  function yd(t, e) {
    if (e) {
      var r = t.style;
      e in Fe && e !== Ye && (e = Qe), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function zd(t, e, r, i, n, a) {
    var s = new ae(t._pt, e, r, 0, 1, a ? fd : ed);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function Bd(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = de.style,
        f = Le.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        c = "px" === i,
        m = "%" === i;
    return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || c || (u = Bd(t, e, r, "px")), o = t.getCTM && xd(t), !m && "%" !== h || !Fe[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== he && a.appendChild || (a = he.body), (s = a._gsap) && m && s.width && f && s.time === St.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = qd(t, "position")), a === t && (l.position = "static"), a.appendChild(de), n = de[p], a.removeChild(de), l.position = "absolute", f && m && ((s = _(a)).time = St.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n)));
  }

  function Cd(t, e, r, i) {
    var n;
    return fe || td(), e in Ne && "transform" !== e && ~(e = Ne[e]).indexOf(",") && (e = e.split(",")[0]), Fe[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ke(qd(t, Ye)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Je[e] && Je[e](t, e, r) || qd(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Bd(t, e, n, r) + r : n;
  }

  function Dd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Xe(e, t, 1),
          a = n && qd(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = qd(t, "borderTopColor"));
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        _,
        m,
        g,
        v = new ae(this._pt, t.style, e, 0, 1, te),
        y = 0,
        b = 0;

    if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = qd(t, e) || i, t.style[e] = r), wb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) {
        d = o[0], c = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== c.substr(-5) && "hsla(" !== c.substr(-5) || (l = 1), d !== (f = u[b++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), _ = d.substr((p + "").length), y = rt.lastIndex - _.length, _ || (_ = _ || Y.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = Bd(t, e, f, _) || 0), v._pt = {
          _next: v._pt,
          p: c || 1 === b ? c : ",",
          s: h,
          c: g ? g * p : p - h,
          m: l && l < 4 || "zIndex" === e ? Math.round : 0
        });
      }

      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? fd : ed;

    return nt.test(i) && (v.e = 0), this._pt = v;
  }

  function Fd(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Ve[r] || r, e[1] = Ve[i] || i, e.join(" ");
  }

  function Gd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {
        r = o[n], Fe[r] && (i = 1, r = "transformOrigin" === r ? Ye : Qe), yd(a, r);
      }
      i && (yd(a, Qe), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1));
    }
  }

  function Kd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function Ld(t) {
    var e = qd(t, Qe);
    return Kd(e) ? Ge : e.substr(7).match(et).map(ca);
  }

  function Md(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || _(t),
        o = t.style,
        u = Ld(t);

    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ge : u : (u !== Ge || t.offsetParent || t === le || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, le.appendChild(t)), u = Ld(t), n ? o.display = n : yd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : le.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function Nd(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || Md(t, !0),
        f = h.xOrigin || 0,
        d = h.yOrigin || 0,
        p = h.xOffset || 0,
        c = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        b = l[5],
        T = e.split(" "),
        w = parseFloat(T[0]) || 0,
        x = parseFloat(T[1]) || 0;
    r ? l !== Ge && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * b - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * b - v * y) / o, x = u) : (w = (s = wd(t)).x + (~T[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, b = x - d, h.xOffset = p + (y * _ + b * g) - y, h.yOffset = c + (y * m + b * v) - b) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ye] = "0px 0px", a && (zd(a, h, "xOrigin", f, w), zd(a, h, "yOrigin", d, x), zd(a, h, "xOffset", p, h.xOffset), zd(a, h, "yOffset", c, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function Qd(t, e, r) {
    var i = Qa(e);
    return ca(parseFloat(e) + parseFloat(Bd(t, "x", r + "px", i))) + i;
  }

  function Xd(t, e, r, i, n, a) {
    var s,
        u,
        h = 360,
        l = o(n),
        f = parseFloat(n) * (l && ~n.indexOf("rad") ? Ee : 1),
        d = a ? f * a : f - i,
        p = i + d + "deg";
    return l && ("short" === (s = n.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === s && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === s && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ae(t._pt, e, r, i, d, bd), u.e = p, u.u = "deg", t._props.push(r), u;
  }

  function Yd(t, e) {
    for (var r in e) {
      t[r] = e[r];
    }

    return t;
  }

  function Zd(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = Yd({}, r._gsap),
        f = r.style;

    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Qe] = e, i = Ze(r, 1), yd(r, Qe), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Qe], f[Qe] = e, i = Ze(r, 1), f[Qe] = a), Fe) {
      (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Qa(a) !== (h = Qa(s)) ? Bd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ae(t._pt, i, n, o, u - o, ad), t._pt.u = h || 0, t._props.push(n));
    }

    Yd(i, l);
  }

  var ue,
      he,
      le,
      fe,
      de,
      pe,
      ce,
      _e = zt.Power0,
      me = zt.Power1,
      ge = zt.Power2,
      ve = zt.Power3,
      ye = zt.Power4,
      be = zt.Linear,
      Te = zt.Quad,
      we = zt.Cubic,
      xe = zt.Quart,
      Oe = zt.Quint,
      Me = zt.Strong,
      ke = zt.Elastic,
      Ce = zt.Back,
      Pe = zt.SteppedEase,
      Ae = zt.Bounce,
      Se = zt.Sine,
      De = zt.Expo,
      ze = zt.Circ,
      Fe = {},
      Ee = 180 / Math.PI,
      Be = Math.PI / 180,
      Re = Math.atan2,
      Ie = /([A-Z])/g,
      Le = /(?:left|right|width|margin|padding|x)/i,
      qe = /[\s,\(]\S/,
      Ne = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      Qe = "transform",
      Ye = Qe + "Origin",
      je = "O,Moz,ms,Ms,Webkit".split(","),
      Xe = function _checkPropPrefix(t, e, r) {
    var i = (e || de).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(je[n] + t in i);) {
      ;
    }

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t;
  },
      Ue = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      Ve = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      Je = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new ae(t._pt, e, r, 0, 0, Gd);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      Ge = [1, 0, 0, 1, 0, 0],
      $e = {},
      Ze = function _parseTransform(t, e) {
    var r = t._gsap || new Lt(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        _,
        m,
        g,
        v,
        y,
        b,
        T,
        w,
        x,
        O,
        M,
        k,
        C,
        P,
        A,
        S,
        D,
        z,
        F,
        E,
        B = t.style,
        R = r.scaleX < 0,
        I = "deg",
        L = qd(t, Ye) || "0";

    return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !xd(t)), m = Md(t, r.svg), r.svg && (k = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Nd(t, k || L, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), c = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ge && (b = m[0], T = m[1], w = m[2], x = m[3], i = O = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(b * b + T * T), o = Math.sqrt(x * x + w * w), u = b || T ? Re(T, b) * Ee : 0, (f = w || x ? Re(w, x) * Ee + u : 0) && (o *= Math.abs(Math.cos(f * Be))), r.svg && (i -= c - (c * b + _ * w), n -= _ - (c * T + _ * x))) : (E = m[6], z = m[7], A = m[8], S = m[9], D = m[10], F = m[11], i = m[12], n = m[13], a = m[14], h = (g = Re(E, D)) * Ee, g && (k = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), C = M * v + S * y, P = E * v + D * y, A = O * -y + A * v, S = M * -y + S * v, D = E * -y + D * v, F = z * -y + F * v, O = k, M = C, E = P), l = (g = Re(-w, D)) * Ee, g && (v = Math.cos(-g), F = x * (y = Math.sin(-g)) + F * v, b = k = b * v - A * y, T = C = T * v - S * y, w = P = w * v - D * y), u = (g = Re(T, b)) * Ee, g && (k = b * (v = Math.cos(g)) + T * (y = Math.sin(g)), C = O * v + M * y, T = T * v - b * y, M = M * v - O * y, b = k, O = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(b * b + T * T + w * w)), o = ca(Math.sqrt(M * M + E * E)), g = Re(O, M), f = 2e-4 < Math.abs(g) ? g * Ee : 0, p = F ? 1 / (F < 0 ? -F : F) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Kd(qd(t, Qe)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (R ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = i - ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (B[Ye] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = Y.force3D, r.renderTransform = r.svg ? ir : ce ? rr : He, r.uncache = 0, r;
  },
      Ke = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      He = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, rr(t, e);
  },
      We = "0deg",
      tr = "0px",
      er = ") ",
      rr = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        p = r.scaleX,
        c = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        b = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== We || h !== We)) {
      var T,
          w = parseFloat(h) * Be,
          x = Math.sin(w),
          O = Math.cos(w);
      w = parseFloat(l) * Be, T = Math.cos(w), a = Qd(g, a, x * T * -v), s = Qd(g, s, -Math.sin(w) * -v), o = Qd(g, o, O * T * -v + v);
    }

    _ !== tr && (y += "perspective(" + _ + er), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !b && a === tr && s === tr && o === tr || (y += o !== tr || b ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + er), u !== We && (y += "rotate(" + u + er), h !== We && (y += "rotateY(" + h + er), l !== We && (y += "rotateX(" + l + er), f === We && d === We || (y += "skew(" + f + ", " + d + er), 1 === p && 1 === c || (y += "scale(" + p + ", " + c + er), g.style[Qe] = y || "translate(0, 0)";
  },
      ir = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        p = o.skewX,
        c = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        b = o.xOffset,
        T = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        O = parseFloat(f);
    d = parseFloat(d), p = parseFloat(p), (c = parseFloat(c)) && (p += c = parseFloat(c), d += c), d || p ? (d *= Be, p *= Be, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - p) * -m, a = Math.cos(d - p) * m, p && (c *= Be, s = Math.tan(p - c), n *= s = Math.sqrt(1 + s * s), a *= s, c && (s = Math.tan(c), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || O && !~(f + "").indexOf("px")) && (x = Bd(g, "x", l, "px"), O = Bd(g, "y", f, "px")), (v || y || b || T) && (x = ca(x + v - (v * r + y * n) + b), O = ca(O + y - (v * i + y * a) + T)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), O = ca(O + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + O + ")", g.setAttribute("transform", s), w && (g.style[Qe] = s);
  };

  ba("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    Je[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return Cd(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var nr,
      ar,
      sr,
      or = {
    name: "css",
    register: td,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, r, i, n) {
      var a,
          s,
          u,
          h,
          l,
          f,
          d,
          p,
          c,
          _,
          m,
          g,
          v,
          y,
          b,
          T = this._props,
          w = t.style,
          x = r.vars.startAt;

      for (d in fe || td(), e) {
        if ("autoRound" !== d && (s = e[d], !ft[d] || !Tb(d, e, r, i, t, n))) if (l = _typeof(s), f = Je[d], "function" === l && (l = _typeof(s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = gb(s)), f) f(this, t, d, s, r) && (b = 1);else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Pt.lastIndex = 0, Pt.test(a) || (p = Qa(a), c = Qa(s)), c ? p !== c && (a = Bd(t, d, a, c) + c) : p && (s += p), this.add(w, "setProperty", a, s, i, n, 0, 0, d), T.push(d);else if ("undefined" !== l) {
          if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], o(a) && ~a.indexOf("random(") && (a = gb(a)), Qa(a + "") || (a += Y.units[d] || Qa(Cd(t, d)) || ""), "=" === (a + "").charAt(1) && (a = Cd(t, d))) : a = Cd(t, d), h = parseFloat(a), (_ = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), u = parseFloat(s), d in Ne && ("autoAlpha" === d && (1 === h && "hidden" === Cd(t, "visibility") && u && (h = 0), zd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = Ne[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fe) {
            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || Ze(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ae(this._pt, w, Qe, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new ae(this._pt, v, "scaleY", v.scaleY, (_ ? _ * u : u - v.scaleY) || 0), T.push("scaleY", d), d += "X";else {
              if ("transformOrigin" === d) {
                s = Fd(s), v.svg ? Nd(t, s, 0, y, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && zd(this, v, "zOrigin", v.zOrigin, c), zd(this, w, d, Ke(a), Ke(s)));
                continue;
              }

              if ("svgOrigin" === d) {
                Nd(t, s, 1, y, 0, this);
                continue;
              }

              if (d in $e) {
                Xd(this, v, d, h, s, _);
                continue;
              }

              if ("smoothOrigin" === d) {
                zd(this, v, "smooth", v.smooth, s);
                continue;
              }

              if ("force3D" === d) {
                v[d] = s;
                continue;
              }

              if ("transform" === d) {
                Zd(this, s, t);
                continue;
              }
            }
          } else d in w || (d = Xe(d) || d);
          if (m || (u || 0 === u) && (h || 0 === h) && !qe.test(s) && d in w) u = u || 0, (p = (a + "").substr((h + "").length)) !== (c = Qa(s) || (d in Y.units ? Y.units[d] : p)) && (h = Bd(t, d, a, c)), this._pt = new ae(this._pt, m ? v : w, d, h, _ ? _ * u : u - h, m || "px" !== c && "zIndex" !== d || !1 === e.autoRound ? ad : dd), this._pt.u = c || 0, p !== c && "%" !== c && (this._pt.b = a, this._pt.r = cd);else if (d in w) Dd.call(this, t, d, a, s);else {
            if (!(d in t)) {
              N(d, s);
              continue;
            }

            this.add(t, d, a || t[d], s, i, n);
          }
          T.push(d);
        }
      }

      b && ne(this);
    },
    get: Cd,
    aliases: Ne,
    getSetter: function getSetter(t, e, i) {
      var n = Ne[e];
      return n && n.indexOf(",") < 0 && (e = n), e in Fe && e !== Ye && (t._gsap.x || Cd(t, "x")) ? i && pe === i ? "scale" === e ? jd : id : (pe = i || {}) && ("scale" === e ? kd : ld) : t.style && !r(t.style[e]) ? gd : ~e.indexOf("-") ? hd : Kt(t, e);
    },
    core: {
      _removeProperty: yd,
      _getMatrix: Md
    }
  };
  oe.utils.checkPrefix = Xe, sr = ba((nr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (ar = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Fe[t] = 1;
  }), ba(ar, function (t) {
    Y.units[t] = "deg", $e[t] = 1;
  }), Ne[sr[13]] = nr + "," + ar, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Ne[e[1]] = sr[e[0]];
  }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    Y.units[t] = "px";
  }), oe.registerPlugin(or);
  var ur = oe.registerPlugin(or) || oe,
      hr = ur.core.Tween;
  e.Back = Ce, e.Bounce = Ae, e.CSSPlugin = or, e.Circ = ze, e.Cubic = we, e.Elastic = ke, e.Expo = De, e.Linear = be, e.Power0 = _e, e.Power1 = me, e.Power2 = ge, e.Power3 = ve, e.Power4 = ye, e.Quad = Te, e.Quart = xe, e.Quint = Oe, e.Sine = Se, e.SteppedEase = Pe, e.Strong = Me, e.TimelineLite = Nt, e.TimelineMax = Nt, e.TweenLite = Jt, e.TweenMax = hr, e["default"] = ur, e.gsap = ur;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function k() {
    return "undefined" != typeof window;
  }

  function l() {
    return u || k() && (u = window.gsap) && u.registerPlugin && u;
  }

  function m(e) {
    return "string" == typeof e;
  }

  function n(e) {
    return "function" == typeof e;
  }

  function o(e, t) {
    var o = "x" === t ? "Width" : "Height",
        n = "scroll" + o,
        r = "client" + o;
    return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o];
  }

  function p(e, t) {
    var o = "scroll" + ("x" === t ? "Left" : "Top");
    return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c), function () {
      return e[o];
    };
  }

  function r(e, t) {
    if (!(e = f(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
    var o = e.getBoundingClientRect(),
        n = !t || t === T || t === c,
        r = n ? {
      top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
      left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
    } : t.getBoundingClientRect(),
        l = {
      x: o.left - r.left,
      y: o.top - r.top
    };
    return !n && t && (l.x += p(t, "x")(), l.y += p(t, "y")()), l;
  }

  function s(e, t, n, l, i) {
    return isNaN(e) || "object" == _typeof(e) ? m(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - i : "max" === e ? o(t, n) - i : Math.min(o(t, n), r(e, t)[n] - i) : parseFloat(e) - i;
  }

  function t() {
    u = l(), k() && u && document.body && (T = window, c = document.body, i = document.documentElement, f = u.utils.toArray, u.config({
      autoKillThreshold: 7
    }), v = u.config(), a = 1);
  }

  var u,
      a,
      T,
      i,
      c,
      f,
      v,
      y = {
    version: "3.9.1",
    name: "scrollTo",
    rawVars: 1,
    register: function register(e) {
      u = e, t();
    },
    init: function init(e, o, r, l, i) {
      a || t();
      var c = this,
          f = u.getProperty(e, "scrollSnapType");
      c.isWin = e === T, c.target = e, c.tween = r, o = function _clean(e, t, o, r) {
        if (n(e) && (e = e(t, o, r)), "object" != _typeof(e)) return m(e) && "max" !== e && "=" !== e.charAt(1) ? {
          x: e,
          y: e
        } : {
          y: e
        };
        if (e.nodeType) return {
          y: e,
          x: e
        };
        var l,
            i = {};

        for (l in e) {
          i[l] = "onAutoKill" !== l && n(e[l]) ? e[l](t, o, r) : e[l];
        }

        return i;
      }(o, l, e, i), c.vars = o, c.autoKill = !!o.autoKill, c.getX = p(e, "x"), c.getY = p(e, "y"), c.x = c.xPrev = c.getX(), c.y = c.yPrev = c.getY(), f && "none" !== f && (c.snap = 1, c.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != o.x ? (c.add(c, "x", c.x, s(o.x, e, "x", c.x, o.offsetX || 0), l, i), c._props.push("scrollTo_x")) : c.skipX = 1, null != o.y ? (c.add(c, "y", c.y, s(o.y, e, "y", c.y, o.offsetY || 0), l, i), c._props.push("scrollTo_y")) : c.skipY = 1;
    },
    render: function render(e, t) {
      for (var n, r, l, i, s, p = t._pt, c = t.target, f = t.tween, u = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, x = t.snap, g = t.snapInline; p;) {
        p.r(e, p.d), p = p._next;
      }

      n = d || !t.skipX ? t.getX() : a, l = (r = d || !t.skipY ? t.getY() : y) - y, i = n - a, s = v.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), u && (!t.skipX && (s < i || i < -s) && n < o(c, "x") && (t.skipX = 1), !t.skipY && (s < l || l < -s) && r < o(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (f.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(f, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !x || 1 !== e && 0 !== e || (r = c.scrollTop, n = c.scrollLeft, g ? c.style.scrollSnapType = g : c.style.removeProperty("scroll-snap-type"), c.scrollTop = r + 1, c.scrollLeft = n + 1, c.scrollTop = r, c.scrollLeft = n), t.xPrev = t.x, t.yPrev = t.y;
    },
    kill: function kill(e) {
      var t = "scrollTo" === e;
      !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1);
    }
  };
  y.max = o, y.getOffset = r, y.buildGetter = p, l() && u.registerPlugin(y), e.ScrollToPlugin = y, e["default"] = y;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e["default"];
  }
});
!function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.ScrollMagic = t();
}(this, function () {
  "use strict";

  function _() {}

  _.version = "2.0.8", "undefined" != typeof window && window.addEventListener("mousewheel", void 0);
  var P = "data-scrollmagic-pin-spacer";

  _.Controller = function (e) {
    function t() {
      var e, t, n;
      v && u && (e = R.type.Array(u) ? u : f.slice(0), u = !1, t = d, 0 != (n = (d = l.scrollPos()) - t) && (h = 0 < n ? "FORWARD" : i), h === i && e.reverse(), e.forEach(function (e, t) {
        e.update(!0);
      }));
    }

    function r() {
      n = R.rAF(t);
    }

    var n,
        o,
        i = "REVERSE",
        s = "PAUSED",
        a = z.defaults,
        l = this,
        c = R.extend({}, a, e),
        f = [],
        u = !1,
        d = 0,
        h = s,
        p = !0,
        g = 0,
        v = !0,
        m = function m() {
      0 < c.refreshInterval && (o = window.setTimeout(E, c.refreshInterval));
    },
        w = function w() {
      return c.vertical ? R.get.scrollTop(c.container) : R.get.scrollLeft(c.container);
    },
        y = function y() {
      return c.vertical ? R.get.height(c.container) : R.get.width(c.container);
    },
        S = this._setScrollPos = function (e) {
      c.vertical ? p ? window.scrollTo(R.get.scrollLeft(), e) : c.container.scrollTop = e : p ? window.scrollTo(e, R.get.scrollTop()) : c.container.scrollLeft = e;
    },
        b = function b(e) {
      "resize" == e.type && (g = y(), h = s), !0 !== u && (u = !0, r());
    },
        E = function E() {
      if (!p && g != y()) {
        var t;

        try {
          t = new Event("resize", {
            bubbles: !1,
            cancelable: !1
          });
        } catch (e) {
          (t = document.createEvent("Event")).initEvent("resize", !1, !1);
        }

        c.container.dispatchEvent(t);
      }

      f.forEach(function (e, t) {
        e.refresh();
      }), m();
    };

    this._options = c;

    function x(e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return t.sort(function (e, t) {
        return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
      }), t;
    }

    return this.addScene = function (e) {
      if (R.type.Array(e)) e.forEach(function (e, t) {
        l.addScene(e);
      });else if (e instanceof _.Scene) if (e.controller() !== l) e.addTo(l);else if (!~f.indexOf(e)) for (var t in f.push(e), f = x(f), e.on("shift.controller_sort", function () {
        f = x(f);
      }), c.globalSceneOptions) {
        e[t] && e[t].call(e, c.globalSceneOptions[t]);
      }
      return l;
    }, this.removeScene = function (e) {
      var t;
      return R.type.Array(e) ? e.forEach(function (e, t) {
        l.removeScene(e);
      }) : -1 < (t = f.indexOf(e)) && (e.off("shift.controller_sort"), f.splice(t, 1), e.remove()), l;
    }, this.updateScene = function (e, n) {
      return R.type.Array(e) ? e.forEach(function (e, t) {
        l.updateScene(e, n);
      }) : n ? e.update(!0) : !0 !== u && e instanceof _.Scene && (~(u = u || []).indexOf(e) || u.push(e), u = x(u), r()), l;
    }, this.update = function (e) {
      return b({
        type: "resize"
      }), e && t(), l;
    }, this.scrollTo = function (e, t) {
      if (R.type.Number(e)) S.call(c.container, e, t);else if (e instanceof _.Scene) e.controller() === l && l.scrollTo(e.scrollOffset(), t);else if (R.type.Function(e)) S = e;else {
        var n = R.get.elements(e)[0];

        if (n) {
          for (; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }

          var r = c.vertical ? "top" : "left",
              o = R.get.offset(c.container),
              i = R.get.offset(n);
          p || (o[r] -= l.scrollPos()), l.scrollTo(i[r] - o[r], t);
        }
      }
      return l;
    }, this.scrollPos = function (e) {
      return arguments.length ? (R.type.Function(e) && (w = e), l) : w.call(l);
    }, this.info = function (e) {
      var t = {
        size: g,
        vertical: c.vertical,
        scrollPos: d,
        scrollDirection: h,
        container: c.container,
        isDocument: p
      };
      return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
    }, this.loglevel = function (e) {
      return l;
    }, this.enabled = function (e) {
      return arguments.length ? (v != e && (v = !!e, l.updateScene(f, !0)), l) : v;
    }, this.destroy = function (e) {
      window.clearTimeout(o);

      for (var t = f.length; t--;) {
        f[t].destroy(e);
      }

      return c.container.removeEventListener("resize", b), c.container.removeEventListener("scroll", b), R.cAF(n), null;
    }, function () {
      for (var e in c) {
        a.hasOwnProperty(e) || delete c[e];
      }

      if (c.container = R.get.elements(c.container)[0], !c.container) throw "ScrollMagic.Controller init failed.";
      (p = c.container === window || c.container === document.body || !document.body.contains(c.container)) && (c.container = window), g = y(), c.container.addEventListener("resize", b), c.container.addEventListener("scroll", b);
      var t = parseInt(c.refreshInterval, 10);
      c.refreshInterval = R.type.Number(t) ? t : a.refreshInterval, m();
    }(), l;
  };

  var z = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  _.Controller.addOption = function (e, t) {
    z.defaults[e] = t;
  }, _.Controller.extend = function (e) {
    var t = this;
    _.Controller = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Controller, t), _.Controller.prototype = t.prototype, _.Controller.prototype.constructor = _.Controller;
  }, _.Scene = function (e) {
    var n,
        l,
        c = "BEFORE",
        f = "DURING",
        u = "AFTER",
        r = D.defaults,
        d = this,
        h = R.extend({}, r, e),
        p = c,
        g = 0,
        a = {
      start: 0,
      end: 0
    },
        v = 0,
        o = !0,
        s = {};
    this.on = function (e, o) {
      return R.type.Function(o) && (e = e.trim().split(" ")).forEach(function (e) {
        var t = e.split("."),
            n = t[0],
            r = t[1];
        "*" != n && (s[n] || (s[n] = []), s[n].push({
          namespace: r || "",
          callback: o
        }));
      }), d;
    }, this.off = function (e, i) {
      return e && (e = e.trim().split(" ")).forEach(function (e, t) {
        var n = e.split("."),
            r = n[0],
            o = n[1] || "";
        ("*" === r ? Object.keys(s) : [r]).forEach(function (e) {
          for (var t = s[e] || [], n = t.length; n--;) {
            var r = t[n];
            !r || o !== r.namespace && "*" !== o || i && i != r.callback || t.splice(n, 1);
          }

          t.length || delete s[e];
        });
      }), d;
    }, this.trigger = function (e, n) {
      var t, r, o, i;
      return e && (t = e.trim().split("."), r = t[0], o = t[1], (i = s[r]) && i.forEach(function (e, t) {
        o && o !== e.namespace || e.callback.call(d, new _.Event(r, e.namespace, d, n));
      })), d;
    }, d.on("change.internal", function (e) {
      "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? y() : "reverse" === e.what && d.update());
    }).on("shift.internal", function (e) {
      t(), d.update();
    }), this.addTo = function (e) {
      return e instanceof _.Controller && l != e && (l && l.removeScene(d), l = e, E(), i(!0), y(!0), t(), l.info("container").addEventListener("resize", S), e.addScene(d), d.trigger("add", {
        controller: l
      }), d.update()), d;
    }, this.enabled = function (e) {
      return arguments.length ? (o != e && (o = !!e, d.update(!0)), d) : o;
    }, this.remove = function () {
      var e;
      return l && (l.info("container").removeEventListener("resize", S), e = l, l = void 0, e.removeScene(d), d.trigger("remove")), d;
    }, this.destroy = function (e) {
      return d.trigger("destroy", {
        reset: e
      }), d.remove(), d.off("*.*"), null;
    }, this.update = function (e) {
      var t, n;
      return l && (e ? l.enabled() && o ? (t = l.info("scrollPos"), n = 0 < h.duration ? (t - a.start) / (a.end - a.start) : t >= a.start ? 1 : 0, d.trigger("update", {
        startPos: a.start,
        endPos: a.end,
        scrollPos: t
      }), d.progress(n)) : m && p === f && T(!0) : l.updateScene(d, !1)), d;
    }, this.refresh = function () {
      return i(), y(), d;
    }, this.progress = function (e) {
      if (arguments.length) {
        var t,
            n,
            r,
            o = !1,
            i = p,
            s = l ? l.info("scrollDirection") : "PAUSED",
            a = h.reverse || g <= e;
        return 0 === h.duration ? (o = g != e, p = 0 === (g = e < 1 && a ? 0 : 1) ? c : f) : e < 0 && p !== c && a ? (p = c, o = !(g = 0)) : 0 <= e && e < 1 && a ? (g = e, p = f, o = !0) : 1 <= e && p !== u ? (g = 1, p = u, o = !0) : p !== f || a || T(), o && (t = {
          progress: g,
          state: p,
          scrollDirection: s
        }, r = function r(e) {
          d.trigger(e, t);
        }, (n = p != i) && i !== f && (r("enter"), r(i === c ? "start" : "end")), r("progress"), n && p !== f && (r(p === c ? "start" : "end"), r("leave"))), d;
      }

      return g;
    };

    var m,
        w,
        t = function t() {
      a = {
        start: v + h.offset
      }, l && h.triggerElement && (a.start -= l.info("size") * h.triggerHook), a.end = a.start + h.duration;
    },
        i = function i(e) {
      var t;
      !n || x(t = "duration", n.call(d)) && !e && (d.trigger("change", {
        what: t,
        newval: h[t]
      }), d.trigger("shift", {
        reason: t
      }));
    },
        y = function y(e) {
      var t = 0,
          n = h.triggerElement;

      if (l && (n || 0 < v)) {
        if (n) if (n.parentNode) {
          for (var r = l.info(), o = R.get.offset(r.container), i = r.vertical ? "top" : "left"; n.parentNode.hasAttribute(P);) {
            n = n.parentNode;
          }

          var s = R.get.offset(n);
          r.isDocument || (o[i] -= l.scrollPos()), t = s[i] - o[i];
        } else d.triggerElement(void 0);
        var a = t != v;
        v = t, a && !e && d.trigger("shift", {
          reason: "triggerElementPosition"
        });
      }
    },
        S = function S(e) {
      0 < h.triggerHook && d.trigger("shift", {
        reason: "containerResize"
      });
    },
        b = R.extend(D.validate, {
      duration: function duration(t) {
        var e;

        if (R.type.String(t) && t.match(/^(\.|\d)*\d+%$/) && (e = parseFloat(t) / 100, t = function t() {
          return l ? l.info("size") * e : 0;
        }), R.type.Function(t)) {
          n = t;

          try {
            t = parseFloat(n.call(d));
          } catch (e) {
            t = -1;
          }
        }

        if (t = parseFloat(t), !R.type.Number(t) || t < 0) throw n = n && void 0, 0;
        return t;
      }
    }),
        E = function E(e) {
      (e = arguments.length ? [e] : Object.keys(b)).forEach(function (t, e) {
        var n;
        if (b[t]) try {
          n = b[t](h[t]);
        } catch (e) {
          n = r[t];
        } finally {
          h[t] = n;
        }
      });
    },
        x = function x(e, t) {
      var n = !1,
          r = h[e];
      return h[e] != t && (h[e] = t, E(e), n = r != h[e]), n;
    },
        z = function z(t) {
      d[t] || (d[t] = function (e) {
        return arguments.length ? ("duration" === t && (n = void 0), x(t, e) && (d.trigger("change", {
          what: t,
          newval: h[t]
        }), ~D.shifts.indexOf(t) && d.trigger("shift", {
          reason: t
        })), d) : h[t];
      });
    };

    this.controller = function () {
      return l;
    }, this.state = function () {
      return p;
    }, this.scrollOffset = function () {
      return a.start;
    }, this.triggerPosition = function () {
      var e = h.offset;
      return l && (h.triggerElement ? e += v : e += l.info("size") * d.triggerHook()), e;
    }, d.on("shift.internal", function (e) {
      var t = "duration" === e.reason;
      (p === u && t || p === f && 0 === h.duration) && T(), t && A();
    }).on("progress.internal", function (e) {
      T();
    }).on("add.internal", function (e) {
      A();
    }).on("destroy.internal", function (e) {
      d.removePin(e.reset);
    });

    function C() {
      l && m && p === f && !l.info("isDocument") && T();
    }

    function F() {
      l && m && p === f && ((w.relSize.width || w.relSize.autoFullWidth) && R.get.width(window) != R.get.width(w.spacer.parentNode) || w.relSize.height && R.get.height(window) != R.get.height(w.spacer.parentNode)) && A();
    }

    function L(e) {
      l && m && p === f && !l.info("isDocument") && (e.preventDefault(), l._setScrollPos(l.info("scrollPos") - ((e.wheelDelta || e[l.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
    }

    var T = function T(e) {
      var t, n, r, o, i, s;
      m && l && (t = l.info(), n = w.spacer.firstChild, e || p !== f ? (r = {
        position: w.inFlow ? "relative" : "absolute",
        top: 0,
        left: 0
      }, o = R.css(n, "position") != r.position, w.pushFollowers ? 0 < h.duration && (p === u && 0 === parseFloat(R.css(w.spacer, "padding-top")) || p === c && 0 === parseFloat(R.css(w.spacer, "padding-bottom"))) && (o = !0) : r[t.vertical ? "top" : "left"] = h.duration * g, R.css(n, r), o && A()) : ("fixed" != R.css(n, "position") && (R.css(n, {
        position: "fixed"
      }), A()), i = R.get.offset(w.spacer, !0), s = h.reverse || 0 === h.duration ? t.scrollPos - a.start : Math.round(g * h.duration * 10) / 10, i[t.vertical ? "top" : "left"] += s, R.css(w.spacer.firstChild, {
        top: i.top,
        left: i.left
      })));
    },
        A = function A() {
      var e, t, n, r, o;
      m && l && w.inFlow && (e = p === f, t = l.info("vertical"), n = w.spacer.firstChild, r = R.isMarginCollapseType(R.css(w.spacer, "display")), o = {}, w.relSize.width || w.relSize.autoFullWidth ? e ? R.css(m, {
        width: R.get.width(w.spacer)
      }) : R.css(m, {
        width: "100%"
      }) : (o["min-width"] = R.get.width(t ? m : n, !0, !0), o.width = e ? o["min-width"] : "auto"), w.relSize.height ? e ? R.css(m, {
        height: R.get.height(w.spacer) - (w.pushFollowers ? h.duration : 0)
      }) : R.css(m, {
        height: "100%"
      }) : (o["min-height"] = R.get.height(t ? n : m, !0, !r), o.height = e ? o["min-height"] : "auto"), w.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = h.duration * g, o["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - g)), R.css(w.spacer, o));
    };

    this.setPin = function (e, t) {
      if (t = R.extend({}, {
        pushFollowers: !0,
        spacerClass: "scrollmagic-pin-spacer"
      }, t), !(e = R.get.elements(e)[0])) return d;
      if ("fixed" === R.css(e, "position")) return d;

      if (m) {
        if (m === e) return d;
        d.removePin();
      }

      var n = (m = e).parentNode.style.display,
          r = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      m.parentNode.style.display = "none";
      var o = "absolute" != R.css(m, "position"),
          i = R.css(m, r.concat(["display"])),
          s = R.css(m, ["width", "height"]);
      m.parentNode.style.display = n, !o && t.pushFollowers && (t.pushFollowers = !1);
      var a,
          l = m.parentNode.insertBefore(document.createElement("div"), m),
          c = R.extend(i, {
        position: o ? "relative" : "absolute",
        boxSizing: "content-box",
        mozBoxSizing: "content-box",
        webkitBoxSizing: "content-box"
      });
      return o || R.extend(c, R.css(m, ["width", "height"])), R.css(l, c), l.setAttribute(P, ""), R.addClass(l, t.spacerClass), w = {
        spacer: l,
        relSize: {
          width: "%" === s.width.slice(-1),
          height: "%" === s.height.slice(-1),
          autoFullWidth: "auto" === s.width && o && R.isMarginCollapseType(i.display)
        },
        pushFollowers: t.pushFollowers,
        inFlow: o
      }, m.___origStyle || (m.___origStyle = {}, a = m.style, r.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function (e) {
        m.___origStyle[e] = a[e] || "";
      })), w.relSize.width && R.css(l, {
        width: s.width
      }), w.relSize.height && R.css(l, {
        height: s.height
      }), l.appendChild(m), R.css(m, {
        position: o ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      }), (w.relSize.width || w.relSize.autoFullWidth) && R.css(m, {
        boxSizing: "border-box",
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box"
      }), window.addEventListener("scroll", C), window.addEventListener("resize", C), window.addEventListener("resize", F), m.addEventListener("mousewheel", L), m.addEventListener("DOMMouseScroll", L), T(), d;
    }, this.removePin = function (e) {
      var t, n, r;
      return m && (p === f && T(!0), !e && l || ((t = w.spacer.firstChild).hasAttribute(P) && (n = w.spacer.style, r = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function (e) {
        r[e] = n[e] || "";
      }), R.css(t, r)), w.spacer.parentNode.insertBefore(t, w.spacer), w.spacer.parentNode.removeChild(w.spacer), m.parentNode.hasAttribute(P) || (R.css(m, m.___origStyle), delete m.___origStyle)), window.removeEventListener("scroll", C), window.removeEventListener("resize", C), window.removeEventListener("resize", F), m.removeEventListener("mousewheel", L), m.removeEventListener("DOMMouseScroll", L), m = void 0), d;
    };
    var N,
        O = [];
    return d.on("destroy.internal", function (e) {
      d.removeClassToggle(e.reset);
    }), this.setClassToggle = function (e, t) {
      var n = R.get.elements(e);
      return 0 !== n.length && R.type.String(t) && (0 < O.length && d.removeClassToggle(), N = t, O = n, d.on("enter.internal_class leave.internal_class", function (e) {
        var n = "enter" === e.type ? R.addClass : R.removeClass;
        O.forEach(function (e, t) {
          n(e, N);
        });
      })), d;
    }, this.removeClassToggle = function (e) {
      return e && O.forEach(function (e, t) {
        R.removeClass(e, N);
      }), d.off("start.internal_class end.internal_class"), N = void 0, O = [], d;
    }, function () {
      for (var e in h) {
        r.hasOwnProperty(e) || delete h[e];
      }

      for (var t in r) {
        z(t);
      }

      E();
    }(), d;
  };
  var D = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: .5,
      reverse: !0,
      loglevel: 2
    },
    validate: {
      offset: function offset(e) {
        if (e = parseFloat(e), !R.type.Number(e)) throw 0;
        return e;
      },
      triggerElement: function triggerElement(e) {
        if (e = e || void 0) {
          var t = R.get.elements(e)[0];
          if (!t || !t.parentNode) throw 0;
          e = t;
        }

        return e;
      },
      triggerHook: function triggerHook(e) {
        var t = {
          onCenter: .5,
          onEnter: 1,
          onLeave: 0
        };
        if (R.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function reverse(e) {
        return !!e;
      }
    },
    shifts: ["duration", "offset", "triggerHook"]
  };
  _.Scene.addOption = function (e, t, n, r) {
    e in D.defaults || (D.defaults[e] = t, D.validate[e] = n, r && D.shifts.push(e));
  }, _.Scene.extend = function (e) {
    var t = this;
    _.Scene = function () {
      return t.apply(this, arguments), this.$super = R.extend({}, this), e.apply(this, arguments) || this;
    }, R.extend(_.Scene, t), _.Scene.prototype = t.prototype, _.Scene.prototype.constructor = _.Scene;
  }, _.Event = function (e, t, n, r) {
    for (var o in r = r || {}) {
      this[o] = r[o];
    }

    return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this;
  };

  var R = _._util = function (s) {
    function a(e) {
      return parseFloat(e) || 0;
    }

    function l(e) {
      return e.currentStyle ? e.currentStyle : s.getComputedStyle(e);
    }

    function r(e, t, n, r) {
      if ((t = t === document ? s : t) === s) r = !1;else if (!u.DomElement(t)) return 0;
      e = e[0].toUpperCase() + e.substr(1).toLowerCase();
      var o,
          i = (n ? t["offset" + e] || t["outer" + e] : t["client" + e] || t["inner" + e]) || 0;
      return n && r && (o = l(t), i += "Height" === e ? a(o.marginTop) + a(o.marginBottom) : a(o.marginLeft) + a(o.marginRight)), i;
    }

    function c(e) {
      return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
        return e[1].toUpperCase();
      });
    }

    var e = {};
    e.extend = function (e) {
      for (e = e || {}, f = 1; f < arguments.length; f++) {
        if (arguments[f]) for (var t in arguments[f]) {
          arguments[f].hasOwnProperty(t) && (e[t] = arguments[f][t]);
        }
      }

      return e;
    }, e.isMarginCollapseType = function (e) {
      return !!~["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e);
    };

    for (var o = 0, t = ["ms", "moz", "webkit", "o"], n = s.requestAnimationFrame, i = s.cancelAnimationFrame, f = 0; !n && f < 4; ++f) {
      n = s[t[f] + "RequestAnimationFrame"], i = s[t[f] + "CancelAnimationFrame"] || s[t[f] + "CancelRequestAnimationFrame"];
    }

    n = n || function (e) {
      var t = new Date().getTime(),
          n = Math.max(0, 16 - (t - o)),
          r = s.setTimeout(function () {
        e(t + n);
      }, n);
      return o = t + n, r;
    }, i = i || function (e) {
      s.clearTimeout(e);
    }, e.rAF = n.bind(s), e.cAF = i.bind(s);

    var u = e.type = function (e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };

    u.String = function (e) {
      return "string" === u(e);
    }, u.Function = function (e) {
      return "function" === u(e);
    }, u.Array = function (e) {
      return Array.isArray(e);
    }, u.Number = function (e) {
      return !u.Array(e) && 0 <= e - parseFloat(e) + 1;
    }, u.DomElement = function (e) {
      return "object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) || "function" == typeof HTMLElement ? e instanceof HTMLElement || e instanceof SVGElement : e && "object" == _typeof(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    };
    var d = e.get = {};
    return d.elements = function (e) {
      var t = [];
      if (u.String(e)) try {
        e = document.querySelectorAll(e);
      } catch (e) {
        return t;
      }
      if ("nodelist" === u(e) || u.Array(e) || e instanceof NodeList) for (var n = 0, r = t.length = e.length; n < r; n++) {
        var o = e[n];
        t[n] = u.DomElement(o) ? o : d.elements(o);
      } else !u.DomElement(e) && e !== document && e !== s || (t = [e]);
      return t;
    }, d.scrollTop = function (e) {
      return e && "number" == typeof e.scrollTop ? e.scrollTop : s.pageYOffset || 0;
    }, d.scrollLeft = function (e) {
      return e && "number" == typeof e.scrollLeft ? e.scrollLeft : s.pageXOffset || 0;
    }, d.width = function (e, t, n) {
      return r("width", e, t, n);
    }, d.height = function (e, t, n) {
      return r("height", e, t, n);
    }, d.offset = function (e, t) {
      var n,
          r = {
        top: 0,
        left: 0
      };
      return e && e.getBoundingClientRect && (n = e.getBoundingClientRect(), r.top = n.top, r.left = n.left, t || (r.top += d.scrollTop(), r.left += d.scrollLeft())), r;
    }, e.addClass = function (e, t) {
      t && (e.classList ? e.classList.add(t) : e.className += " " + t);
    }, e.removeClass = function (e, t) {
      t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }, e.css = function (e, t) {
      if (u.String(t)) return l(e)[c(t)];

      if (u.Array(t)) {
        var n = {},
            r = l(e);
        return t.forEach(function (e, t) {
          n[e] = r[c(e)];
        }), n;
      }

      for (var o in t) {
        var i = t[o];
        i == parseFloat(i) && (i += "px"), e.style[c(o)] = i;
      }
    }, e;
  }(window || {});

  return _;
});
!function (e, n) {
  var r;
  "function" == typeof define && define.amd ? define(["ScrollMagic", "gsap", "TweenMax", "TimelineMax"], n) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? (r = require("gsap/dist/gsap") || require("gsap"), n(require("scrollmagic"), r, TweenMax || r, TimelineMax || r)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.gsap, e.gsap || e.TweenMax || e.TweenLite, e.gsap || e.TimelineMax || e.TimelineLite);
}(this, function (e, n, p, u) {
  "use strict";

  var g = n && 3 <= parseFloat(n.version);
  e.Scene.addOption("tweenChanges", !1, function (e) {
    return !!e;
  }), e.Scene.extend(function () {
    var o,
        i = this;
    i.on("progress.plugin_gsap", function () {
      s();
    }), i.on("destroy.plugin_gsap", function (e) {
      i.removeTween(e.reset);
    });

    var s = function s() {
      var e, n;
      o && (e = i.progress(), n = i.state(), o.repeat && -1 === o.repeat() ? "DURING" === n && o.paused() ? o.play() : "DURING" === n || o.paused() || o.pause() : e != o.progress() && (0 === i.duration() ? 0 < e ? o.play() : o.reverse() : i.tweenChanges() && o.tweenTo ? o.tweenTo(e * o.duration()) : o.progress(e).pause()));
    };

    i.setTween = function (e, n, r) {
      var t, a;
      1 < arguments.length && (a = "number" == typeof arguments[1], g ? (a || (r = n), r.hasOwnProperty("duration") || (r.duration = a ? n : 1)) : arguments.length < 3 && (r = n, n = 1), e = g ? p.to(e, r) : p.to(e, n, r));

      try {
        (t = u && !g ? new u({
          smoothChildTiming: !0
        }).add(e) : e).pause();
      } catch (e) {
        return i;
      }

      return o && i.removeTween(), o = t, e.repeat && -1 === e.repeat() && (o.repeat(-1), o.yoyo(e.yoyo())), s(), i;
    }, i.removeTween = function (e) {
      return o && (e && o.progress(0).pause(), o.kill(), o = void 0), i;
    };
  });
});

var Val = function Val(value) {
  return value = parseInt(value);
};

var RemCalc = function RemCalc(value) {
  typeof value == 'string' ? value = Val(value.replace('px', '')) : value = Val(value);
  return rem = value / Val(Unit);
};

var MsCalc = function MsCalc(time) {
  return ms = time * 1000;
};

var GetCookie = function GetCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);

  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);

    if (end == -1) {
      end = dc.length;
    }
  }

  return decodeURI(dc.substring(begin + prefix.length, end));
};

var IsLoggedUser = function IsLoggedUser() {
  return GetCookie("PETERWITT") && GetCookie("PETERWITT") != "";
};

var IsClient = function IsClient() {
  return GetCookie("ext") && GetCookie("ext") != "";
};

var GetUrlVars = function GetUrlVars() {
  var vars = [],
      hash;
  var splitCode = window.location.href.indexOf("&amp;") > 0 ? "&amp;" : "&";
  var hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split(splitCode);

  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
};

var GetUrlVar = function GetUrlVar(name) {
  return GetUrlVars()[name];
};

var ScrollTo = function ScrollTo(anchor) {
  var outset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offset;

  if (document.querySelector('.shwc-header-fixed-height')) {
    offset = HeaderHeightCollapsed + outset;
  } else {
    offset = outset;
  }

  gsap.to(window, {
    duration: PaceTime,
    scrollTo: {
      y: anchor,
      offsetY: offset,
      autoKill: false
    },
    ease: Sine.easeInOut
  });
};

var HashScrollTo = function HashScrollTo(hash) {
  if (hash != '') {
    ScrollTo(hash);
  }
};

if (window.location.hash && window.location.hash != '') {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 30);
}

window.addEventListener('load', function (event) {
  if (window.location.hash) {
    var hash = window.location.hash;
    HashScrollTo(hash);
  }
});

var ScrollToNextSection = function ScrollToNextSection(element) {
  var nextSection = element.closest('section').nextElementSibling;
  var dropDownBar = document.querySelector('.dropdown-bar');
  var offset;

  if (dropDownBar) {
    offset = HeaderHeightCollapsed + DropdownBarHeight;
  } else {
    offset = HeaderHeightCollapsed;
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: nextSection,
      offsetY: offset,
      autoKill: false
    },
    ease: Sine.easeInOut
  });
};

var DomContains = function DomContains(element) {
  if (typeof element == 'string' || element instanceof String) {
    element = document.querySelectorAll(element);
  }

  if (typeof element !== 'undefined' && element !== null) {
    if (typeof element.length === 'undefined') {
      element = [element];
    }

    if (element.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

var DisableBodyScroll = function DisableBodyScroll(except) {
  bodyScrollLock.disableBodyScroll(except);
};

var EnableBodyScroll = function EnableBodyScroll(except) {
  bodyScrollLock.enableBodyScroll(except);
};

var UpdateScrollbar = function UpdateScrollbar(el) {
  new SimpleBar(el);
};

function webPSupport() {
  return _webPSupport.apply(this, arguments);
}

function _webPSupport() {
  _webPSupport = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var webpData, blob;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (self.createImageBitmap) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", false);

          case 2:
            webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
            _context.next = 5;
            return fetch(webpData).then(function (r) {
              return r.blob();
            });

          case 5:
            blob = _context.sent;
            return _context.abrupt("return", createImageBitmap(blob).then(function () {
              return true;
            }, function () {
              return false;
            }));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _webPSupport.apply(this, arguments);
}

var HexToRgb = function HexToRgb(hex) {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
};

var checkFolderPage = function checkFolderPage(folder) {
  var path = window.location.pathname;
  var result = path.includes(folder);
  return result;
};

var GetHTML = function GetHTML(url, callback) {
  if (!window.XMLHttpRequest) return;
  var xhr = new XMLHttpRequest();

  xhr.onload = function () {
    if (callback && typeof callback === 'function') {
      callback(this.responseXML);
    }
  };

  xhr.open('GET', url);
  xhr.responseType = 'document';
  xhr.send();
};

var dynamicValues = function dynamicValues() {
  if (typeof GetUrlVar('var') !== 'undefined') {
    var path = window.location.pathname;
    var fullUrl = path.replace('.html', '').toLowerCase();
    var pageName = path.split("/").pop();
    pageName = pageName.replace('.html', '');
    var jsonValue = GetUrlVar('var');
    var xmlhttp = new XMLHttpRequest();
    var url = "/content/dam/skyit/ext/mcs/".concat(fullUrl, "/").concat(pageName, ".json");

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var jsonArr = JSON.parse(this.responseText);
        var pageDynamicTitle = document.querySelector('title');
        var campaignInput = document.querySelector('#ctlive_campaign_name');
        var touchpointInput = document.querySelector('#ctlive_touchpoint');

        if (pageDynamicTitle) {
          pageDynamicTitle.innerHTML = jsonArr[jsonValue].title;
        }

        if (campaignInput) {
          campaignInput.value = jsonArr[jsonValue].campaign;
        }

        if (touchpointInput) {
          touchpointInput.value = jsonArr[jsonValue].touchpoint;
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
};

if (typeof GetUrlVar('var') !== 'undefined' && !checkFolderPage('callmenow-new')) {
  console.log('dynamic');
  dynamicValues();
}

var reitekTrigger = function reitekTrigger() {
  var elementPageName = document.getElementById('ctlive_page_name');
  var ctaopenReitek = document.querySelectorAll('.j-open-reitek');
  ctaopenReitek.forEach(function (cta) {
    cta.addEventListener('click', function (e) {
      e.preventDefault();

      if (elementPageName.getAttribute('page')) {
        elementPageName.value = elementPageName.getAttribute('page');
      } else {
        elementPageName.value = 'skybb_nocheck';
      }

      var event = new Event('change');
      elementPageName.dispatchEvent(event);
    });
  });
};

if (document.querySelector('.j-open-reitek')) {
  reitekTrigger();
}

var reitekTriggerDynamic = function reitekTriggerDynamic(context) {
  var elementPageName = document.getElementById('ctlive_page_name');
  var elementCampaignName = document.getElementById('ctlive_campaign_name');
  var elementTouchpoint = document.getElementById('ctlive_touchpoint');
  var elementTracking = document.getElementById('ctlive_tracking');
  var ctaopenReitek = document.querySelectorAll('.j-open-reitek-' + context);
  ctaopenReitek.forEach(function (cta) {
    cta.addEventListener('click', function (e) {
      console.log('context', context);
      e.preventDefault();

      if (elementCampaignName.getAttribute('value-' + context)) {
        elementCampaignName.value = elementCampaignName.getAttribute('value-' + context);
        console.log("campaign name", elementCampaignName.getAttribute('value-' + context));
      }

      if (elementTracking.getAttribute('value-' + context)) {
        elementTracking.value = elementTracking.getAttribute('value-' + context);
        console.log("tracking name", elementTracking.getAttribute('value-' + context));
      }

      if (elementTouchpoint.getAttribute('value-' + context)) {
        elementTouchpoint.value = elementTouchpoint.getAttribute('value-' + context);
        console.log("touchpoint", elementTouchpoint.getAttribute('value-' + context));
      }

      if (elementPageName.getAttribute('page')) {
        elementPageName.value = elementPageName.getAttribute('page');
      } else {
        elementPageName.value = 'skybb_nocheck';
      }

      var event = new Event('change');
      console.log(event, 'event');
      elementPageName.dispatchEvent(event);
    });
  });
};

if (document.querySelector('.j-open-reitek-parco')) {
  reitekTriggerDynamic('parco');
}

if (document.querySelector('.j-open-reitek-prospect')) {
  reitekTriggerDynamic('prospect');
}

var Unit = '16px';
var Gap = Val(Unit);
var DoubleGap = Gap * 2;
var HalfGap = Gap / 2;
var Vw = Val(window.innerWidth);
var Vh = Val(window.innerHeight);
var PictureInstances = [];
var BackgroundInstances = [];
var BackgroundVideoSizeCtrl = [];
var IsSmartphone = false;
var IsTabletPortrait = false;
var IsTabletLandscape = false;
var IsDesktop = false;
var IsLargeDesktop = false;
var IsPanoramic;
var Xs = Val('320px');
var Sm = Val('456px');
var Md = Val('769px');
var Lg = Val('1025px');
var Xl = Val('1281px');
var Body = document.body;
var Main = document.querySelector('main');
var WindowLocation = window.location.href;
var BodyMinWidth = Xs;
var RowMaxWidth = Xl;
var SectionMaxWidth = Val('1920px');
var ScreenXsMax = Sm - Val('1px');
var ScreenSm = Sm;
var ScreenSmMax = Md - Val('1px');
var ScreenMd = Md;
var ScreenMdMax = Lg - Val('1px');
var ScreenLg = Lg;
var ScreenLgMax = Xl - Val('1px');
var ScreenXl = Xl;
var FastTime = .2;
var PaceTime = .4;
var SlowTime = 1.2;
var LazyloadInstance = [];
var HeaderHeight = Val('80px');
var HeaderHeightCollapsed = Val('64px');
var DropdownBarHeight = Val('50px');
var webPIsSupported = true;
var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

if (isSafari) {
  webPIsSupported = false;
}

var audioControllerTrigger = function audioControllerTrigger() {
  var audioControllers = document.querySelectorAll('.audio-controller');
  audioControllers.forEach(function (audioController) {
    var audioBackground = audioController.parentNode.parentNode.querySelector('.background');
    var audioBackgroundVideo = audioBackground.querySelector('video');
    audioController.addEventListener('click', function (e) {
      if (audioBackgroundVideo.muted) {
        audioBackground.classList.remove('muted');
        audioBackground.classList.add('unmuted');
        audioBackgroundVideo.muted = false;
        audioBackgroundVideo.volume = 1;
        audioController.classList.add('enabled');
      } else {
        audioBackground.classList.add('muted');
        audioBackground.classList.remove('unmuted');
        audioBackgroundVideo.muted = true;
        audioBackgroundVideo.volume = 0;
        audioController.classList.remove('enabled');
      }
    });
  });
};

var backgroundVideoSize = function backgroundVideoSize(backgroundVideo, background) {
  var backgroundVideoWidth = backgroundVideo.videoWidth;
  var backgroundVideoHeight = backgroundVideo.videoHeight;
  var backgroundVideoRatio = backgroundVideoWidth / backgroundVideoHeight;
  var backgroundRatio = background.offsetWidth / background.offsetHeight;

  if (backgroundRatio > backgroundVideoRatio) {
    background.classList.remove('video-bg-vertical');
    background.classList.add('video-bg-horizontal');
  } else if (backgroundRatio <= backgroundVideoRatio) {
    background.classList.remove('video-bg-horizontal');
    background.classList.add('video-bg-vertical');
  }
};

var backgroundVideoLoad = function backgroundVideoLoad(background, currentSrc, index) {
  var currentSrcSize = currentSrc.substr(-2);

  if (currentSrcSize !== BackgroundVideoSizeCtrl[index]) {
    BackgroundVideoSizeCtrl[index] = currentSrcSize;
    var backgroundVideo = background.querySelector('video');

    if (background.querySelector('video[poster]') != null) {
      background.querySelector('video[poster]').removeAttribute('src');
    }

    var getActivePoster = backgroundVideo.getAttribute('data-poster-' + currentSrcSize);

    if (background.querySelector('source[src]') != null) {
      background.querySelector('source[src]').removeAttribute('src');
    }

    var activeSrc = background.querySelector('source[data-src-' + currentSrcSize + ']');
    activeSrc.setAttribute('src', activeSrc.getAttribute('data-src-' + currentSrcSize));
    background.setAttribute('style', 'background-image:url(' + getActivePoster + ')');
    backgroundVideo.load();

    backgroundVideo.onloadedmetadata = function (e) {
      e.target.muted = true;
      backgroundVideoSize(backgroundVideo, background);
    };

    backgroundVideo.onloadeddata = function () {
      if (!backgroundVideo.hasAttribute('paused')) {
        backgroundVideo.play();
      }
    };

    lazyloadUpdate();
  }
};

var backgroundInit = function backgroundInit() {
  var backgrounds = document.querySelectorAll('.background');

  if (DomContains(backgrounds)) {
    backgrounds.forEach(function (background) {
      var backgroundPicture = background.querySelector('picture');
      var backgroundImg = backgroundPicture.querySelector('img');
      var backgroundImgSrc = backgroundImg.getAttribute('data-src');

      if (background.classList.contains('video')) {
        var audioController;

        if (background.hasAttribute('audio-controller')) {
          background.classList.add('mute-unmute');
          audioController = document.createElement('div');
          audioController.classList.add('audio-controller');
          audioController.innerHTML = "\n\t\t\t\t\t\t<div class=\"disabled-audio\">\n                            <svg class=\"sprite\" viewBox=\"0 0 512 512\">\n                                <use xlink:href=\"/content/dam/skyit/ext/common/images/sprite.svg#audio_off\" href=\"/content/dam/skyit/ext/common/images/sprite.svg#audio_off\"></use>\n                            </svg>\n\t\t\t\t\t\t\t<p>Audio Off</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"enabled-audio\">\n                            <svg class=\"sprite\" viewBox=\"0 0 512 512\">\n                                <use xlink:href=\"/content/dam/skyit/ext/common/images/sprite.svg#audio_off\" href=\"/content/dam/skyit/ext/common/images/sprite.svg#audio_off\"></use>\n                            </svg>\n\t\t\t\t\t\t\t<p>Audio On</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
          background.append(audioController);
        }
      } else {
        var backgroundImgCurrentSrc = backgroundImg.currentSrc;
        background.setAttribute('style', 'background-image:url(' + backgroundImgCurrentSrc + ')');
        var newCurrentSrc;
        window.addEventListener('resize', function () {
          backgroundImgCurrentSrc = backgroundImg.currentSrc;

          if (backgroundImgCurrentSrc != '' && newCurrentSrc != backgroundImgCurrentSrc) {
            background.setAttribute('style', 'background-image:url(' + backgroundImgCurrentSrc + ')');
            newCurrentSrc = backgroundImgCurrentSrc;
          }
        });
      }
    });
  }
};

backgroundInit();
var spriteUrl = '/content/dam/skyit/ext/common/images/sprite.svg';

var initTextLinks = function initTextLinks(textLinks) {
  textLinks.forEach(function (textLink) {
    var textLinkSvg = "\n\t\t\t<svg class=\"sprite\" viewBox=\"0 0 512 512\">\n\t\t\t\t<use xlink:href=\"".concat(spriteUrl, "#dx\" href=\"").concat(spriteUrl, "#dx\"></use>\n\t\t\t</svg>\n\t\t");
    var svgElement = document.createElement('div');
    svgElement.innerHTML = textLinkSvg;
    textLink.append(svgElement.querySelector('svg'));
    svgElement.remove();
  });
};

var textLinks = document.querySelectorAll('.text-link');

if (DomContains(textLinks)) {
  initTextLinks(textLinks);
}

var anchors = document.querySelectorAll('.anchor');

if (DomContains(anchors)) {
  anchors.forEach(function (anchor) {
    var anchorTarget = anchor.getAttribute('href');
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      ScrollTo(anchorTarget);
    });
  });
}

var trackingEnable = function trackingEnable() {
  var _iterator = _createForOfIteratorHelper(TrackingList),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var trackingItem = _step.value;
      var trackingElements = document.querySelectorAll(trackingItem);

      if (DomContains(trackingElements)) {
        (function () {
          var trackingAction = trackingItem.replace(/\[|\]/g, '');
          trackingElements.forEach(function (trackingElement) {
            var trackingParameter = trackingElement.getAttribute(trackingAction);

            if (trackingAction == 'trackingfaqcorporate' && trackingParameter == '') {
              trackingParameter = trackingElement.querySelector('.question').innerHTML.toLowerCase().trim();
            } else if (trackingAction == 'trackingctacorporate') {
              var clickableElement = trackingElement.closest('.clickable');

              if (clickableElement) {
                clickableElement.setAttribute('onClick', 'trackingctacorporate("' + trackingParameter + '")');
              } else {
                trackingElement.setAttribute('onClick', 'trackingctacorporate("' + trackingParameter + '")');
              }

              trackingElement.removeAttribute('trackingctacorporate');
            } else if (trackingAction == 'trackingpvcorporate') {
              trackingElement.removeAttribute(trackingAction);
              trackingElement.setAttribute('onclick', 'trackingpvcorporate("' + trackingParameter + '")');
            }

            trackingElement.addEventListener('click', function (e) {
              var trackingTarget = e.target;

              if (trackingAction == 'trackingctacorporate') {} else if (trackingAction == 'trackingfaqcorporate') {
                trackingTarget = e.target.closest('[trackingfaqcorporate]');
              }
            });
            trackingElement.classList.add('trackingEnabled');
          });
        })();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var arrayLocation = WindowLocation.replace(location.hash, '').replace('#', '').split('?')[0].split('/').filter(function (e) {
  return e;
}).slice(1);
var DigitalDataLayers;
var PageNameLocation;

var digitalDataEmit = function digitalDataEmit() {
  var alteredLocation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!alteredLocation) {
    if (typeof digitalData !== 'undefined') {
      digitalData.page.pageInfo.pageName = PageNameLocation;
      console.log(digitalData.page.pageInfo.pageName);

      for (var categoryName in DigitalDataLayers) {
        digitalData.page.category[categoryName] = DigitalDataLayers[categoryName];
      }
    } else {}
  } else {
    var alteredDigitalDataLayers = {};
    var alteredDataLayers = alteredLocation.split(':');
    alteredDataLayers.forEach(function (alteredDataLayer, index) {
      if (index == 0 && alteredDataLayer.includes('sky')) {
        alteredDigitalDataLayers['primaryCategory'] = 'corporate';
      } else if (index > 0) {
        alteredDigitalDataLayers['subCategory' + index] = alteredDataLayer;
      }
    });

    if (typeof digitalData !== 'undefined') {
      digitalData.page.pageInfo.pageName = alteredLocation;

      for (var _categoryName in alteredDigitalDataLayers) {
        digitalData.page.category[_categoryName] = alteredDigitalDataLayers[_categoryName];
      }
    } else {}
  }
};

if (arrayLocation.length > 1) {
  DigitalDataLayers = {};
  arrayLocation.forEach(function (digitalDataLayer, index) {
    if (index == 0 && digitalDataLayer.includes('sky.it')) {
      DigitalDataLayers['primaryCategory'] = 'corporate';
    } else if (index > 0) {
      DigitalDataLayers['subCategory' + index] = digitalDataLayer;
    }
  });

  if (arrayLocation[0].includes('sky.it')) {
    arrayLocation[0] = 'sky';
  }

  PageNameLocation = arrayLocation.join(':');
}

var TrackingEval = function TrackingEval(trackingAction, trackingFunction) {
  if (location.hostname !== "localhost") {
    var optionalWindow = trackingFunction.includes("window.") ? "window." : "";
    var trackingValue = trackingFunction.split(optionalWindow + trackingAction + '("')[0].replace('")', '');
    digitalDataEmit(trackingValue);
    eval(trackingFunction);
  }
};

var backgroundVideoSizeIndex = 0;

var initOneLazyLoad = function initOneLazyLoad(pictureContainer) {
  var singleLazy = new LazyLoad({
    container: pictureContainer,
    threshold: Gap,
    load_delay: .4
  });
  LazyloadInstance.push(singleLazy);
};

var lazyloadInit = function lazyloadInit() {
  var lazyElements = document.querySelectorAll('.lazy:not(.loaded)');

  if (DomContains(lazyElements)) {
    var lazySection = new LazyLoad({
      elements_selector: '.lazy',
      callback_enter: initOneLazyLoad,
      callback_loaded: function callback_loaded(element) {
        console.log('loaded');
        var backgrounds = document.querySelectorAll('.background');

        if (DomContains(backgrounds)) {
          backgrounds.forEach(function (background) {
            var backgroundPicture = background.querySelector('picture');
            var backgroundImg = backgroundPicture.querySelector('img');
            var backgroundImgSrc = backgroundImg.currentSrc;

            if (backgroundImgSrc != '') {
              background.style.backgroundImage = 'url(' + backgroundImgSrc + ')';
            }
          });
        }
      },
      unobserve_entered: true
    });
  }

  var lazyImages = document.querySelectorAll('.lazy-img:not(.loaded)');

  if (DomContains(lazyImages)) {
    var lazyImage = new LazyLoad({
      elements_selector: '.lazy-img',
      threshold: Gap
    });
  }
};

var lazyloadUpdate = function lazyloadUpdate() {
  lazyloadInit();
};

lazyloadInit();

var loaderBuild = function loaderBuild() {
  var aspect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var loader = document.createElement('div');
  loader.id = 'loader';
  loader.classList.add('loader');

  if (aspect) {
    loader.classList.add(aspect);
  }

  loader.innerHTML = "\n\t\t<div class=\"loader-logo\"></div>\n\t\t<svg class=\"loader-icon\" viewBox=\"0 0 50 50\">\n\t\t\t<defs>\n\t\t\t\t<linearGradient id=\"spectrum\" x1=\"0%\" x2=\"0%\" y1=\"0%\" y2=\"100%\">\n\t\t\t\t\t<stop offset=\"0%\" stop-color=\"#ef7246\"></stop>\n\t\t\t\t\t<stop offset=\"25%\" stop-color=\"#d32b20\"></stop>\n\t\t\t\t\t<stop offset=\"50%\" stop-color=\"#d2217b\"></stop>\n\t\t\t\t\t<stop offset=\"75%\" stop-color=\"#624b93\"></stop>\n\t\t\t\t\t<stop offset=\"100%\" stop-color=\"#3f5da2\"></stop>\n\t\t\t\t</linearGradient>\n\t\t\t</defs>\n\t\t\t<circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\"></circle>\n\t\t</svg>\n\t";
  return loader;
};

var loaderShow = function loaderShow() {
  var aspect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var loader = loaderBuild(aspect);
  Body.prepend(loader);
  DisableBodyScroll(Body);
};

var loaderHide = function loaderHide() {
  var loader = document.querySelector('#loader.loader');

  if (DomContains(loader)) {
    loader.classList.add('loader-hide');
    setTimeout(function () {
      loader.remove();
      EnableBodyScroll(Body);
    }, 400);
  }
};

var loaderInit = function loaderInit() {
  loaderShow();
};

var userType = function userType(type) {
  var user;
  var body = document.querySelector('body');

  if (location.hostname === "localhost") {
    if (typeof GetUrlVar('view') == 'undefined') {
      if (typeof type == 'undefined') {
        user = getUserType();
      } else {
        user = type;
      }
    } else {
      user = GetUrlVar('view');
      getUserType();
    }
  } else {
    if (typeof GetUrlVar('view') == 'undefined') {
      if (IsLoggedUser()) {
        user = 'loggedandknownclient';
      } else if (IsClient()) {
        user = 'knownclient';
      } else {
        user = 'guest';
      }
    } else {
      user = GetUrlVar('view');
    }
  }

  if (user == 'guest' || user == 'prospect' || user == 'loggedbutnotclient') {
    body.classList.add('IsProspect');

    if (body.classList.contains('IsParco')) {
      body.classList.remove('IsParco');
    }

    if (body.classList.contains('IsKnown')) {
      body.classList.remove('IsKnown');
    }
  } else if (user == 'loggedandknownclient') {
    body.classList.add('IsParco');

    if (body.classList.contains('IsProspect')) {
      body.classList.remove('IsProspect');
    }

    if (body.classList.contains('IsKnown')) {
      body.classList.remove('IsKnown');
    }
  } else if (user == 'knownclient') {
    body.classList.add('IsKnown');

    if (body.classList.contains('IsProspect')) {
      body.classList.remove('IsProspect');
    }

    if (body.classList.contains('IsParco')) {
      body.classList.remove('IsParco');
    }
  }
};

var viewportInit = function viewportInit() {
  Vw = Val(window.innerWidth);
  Vh = Val(window.innerHeight);

  if (Vw > 0 && Vw < ScreenSm && !IsSmartphone) {
    IsSmartphone = true;
    IsTabletPortrait = false;
    IsTabletLandscape = false;
    IsDesktop = false;
    IsLargeDesktop = false;
    Body.classList.add('IsSmartphone');
    Body.classList.remove('IsTabletPortrait', 'IsTabletLandscape', 'IsDesktop', 'IsLargeDesktop');
  } else if (Vw >= ScreenSm && Vw < ScreenMd && !IsTabletPortrait) {
    IsSmartphone = false;
    IsTabletPortrait = true;
    IsTabletLandscape = false;
    IsDesktop = false;
    IsLargeDesktop = false;
    Body.classList.add('IsTabletPortrait');
    Body.classList.remove('IsSmartphone', 'IsTabletLandscape', 'IsDesktop', 'IsLargeDesktop');
  } else if (Vw >= ScreenMd && Vw < ScreenLg && !IsTabletLandscape) {
    IsSmartphone = false;
    IsTabletPortrait = false;
    IsTabletLandscape = true;
    IsDesktop = false;
    IsLargeDesktop = false;
    Body.classList.add('IsTabletLandscape');
    Body.classList.remove('IsSmartphone', 'IsTabletPortrait', 'IsDesktop', 'IsLargeDesktop');
  } else if (Vw >= ScreenLg && Vw < ScreenXl && !IsDesktop) {
    IsSmartphone = false;
    IsTabletPortrait = false;
    IsTabletLandscape = false;
    IsDesktop = true;
    IsLargeDesktop = false;
    Body.classList.add('IsDesktop');
    Body.classList.remove('IsSmartphone', 'IsTabletPortrait', 'IsTabletLandscape', 'IsLargeDesktop');
  } else if (Vw >= ScreenXl && !IsLargeDesktop) {
    IsSmartphone = false;
    IsTabletPortrait = false;
    IsTabletLandscape = false;
    IsDesktop = false;
    IsLargeDesktop = true;
    Body.classList.add('IsLargeDesktop');
    Body.classList.remove('IsSmartphone', 'IsTabletPortrait', 'IsTabletLandscape', 'IsDesktop');
  }

  if ((IsSmartphone || IsTabletPortrait || IsTabletLandscape || Vh >= Md) && (IsPanoramic || typeof IsPanoramic == 'undefined')) {
    IsPanoramic = false;
    Body.classList.remove('IsPanoramic');
  } else if ((IsDesktop || IsLargeDesktop) && Vh < Md && (!IsPanoramic || typeof IsPanoramic == 'undefined')) {
    IsPanoramic = true;
    Body.classList.add('IsPanoramic');
  }
};

viewportInit();

var viewportResize = function viewportResize() {
  viewportInit();
};

window.addEventListener('resize', function (event) {
  viewportResize();
});
window.addEventListener('DOMContentLoaded', function (event) {
  var header = document.querySelector('.header');
  var headerContent = header.querySelector('.header-content');
  var headerContentLinks = headerContent.querySelectorAll('.header-anchor');

  if (header.classList.contains('abbonarsi')) {
    headerContentLinks.forEach(function (headerContentLink) {
      headerContentLink.addEventListener('click', function () {
        if (headerContent.querySelector('.selected')) {
          headerContent.querySelector('.selected').classList.remove('selected');
        }

        headerContentLink.classList.add('selected');
      });
    });
  }

  if (header.classList.contains('withSticky')) {
    console.log('sticky');
    scrollTicket();
  }
});

var scrollTicket = function scrollTicket() {
  ticketController = new ScrollMagic.Controller();
  var footer = document.querySelector('.footer');
  footer.classList.add("marginSticky");
  bodyHeight = document.querySelector('body').clientHeight;
  sceneTicket = new ScrollMagic.Scene({
    triggerElement: ".j-triggerSticky",
    triggerHook: .5,
    duration: bodyHeight
  }).removePin(true).setClassToggle(".j-stickyHeader", "active").addTo(ticketController);
  sceneTicket.refresh();
};

var startCounter = function startCounter(countdown, endDateCountdown) {
  var counterInterval = setInterval(function () {
    var todayDate = new Date().getTime();
    var giorni = document.querySelector('.countdown-text#giorni .number');
    var ore = document.querySelector('.countdown-text#ore .number');
    var minuti = document.querySelector('.countdown-text#minuti .number');
    var secondi = document.querySelector('.countdown-text#secondi .number');
    var distance = endDateCountdown - todayDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    giorni.textContent = days;
    ore.textContent = hours;
    minuti.textContent = minutes;
    secondi.textContent = seconds;

    if (distance < 0) {
      clearInterval(counterInterval);
      countdown.style.display = 'none';
    }
  }, 1000);
};

window.addEventListener('DOMContentLoaded', function (event) {
  if (document.querySelector('.flash-countdown')) {
    var countdown = document.querySelector('.flash-countdown');
    var endDate = countdown.getAttribute('end-date');
    var startDate = countdown.getAttribute('start-date');
    var endDateCountdown = new Date(endDate).getTime();
    var startDateCountdown = new Date(startDate).getTime();
    var todayDate = new Date().getTime();

    if (todayDate < startDateCountdown || todayDate > endDateCountdown) {
      countdown.style.display = 'none';
      countdown.closest('.flashsale-box').classList.add('borderHide');
    } else {
      startCounter(countdown, endDateCountdown);
    }
  }
});
window.addEventListener('DOMContentLoaded', function (event) {
  var contenutiOfferte = document.querySelectorAll('.contenuti-offerta');

  if (DomContains(contenutiOfferte)) {
    contenutiOfferte.forEach(function (contenutiOfferta) {
      var offertaSlider = contenutiOfferta.querySelector('.swiper-container');
      var swiper = new Swiper(offertaSlider, {
        speed: 400,
        spaceBetween: 25,
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          769: {
            slidesPerView: 3
          }
        }
      });
    });
  }
});
window.addEventListener('DOMContentLoaded', function (event) {
  var sectionFunctions = document.querySelector('.section-functions');

  if (sectionFunctions) {
    var functionsSlider = sectionFunctions.querySelector('.swiper-container');
    var functionsSliderSlides = functionsSlider.querySelectorAll('.swiper-slide');
    var functionsSliderSlidesLenght = functionsSliderSlides.length;
    var visibleSlides;

    if (functionsSliderSlidesLenght > 4) {
      visibleSlides = 4;
    } else if (functionsSliderSlidesLenght <= 1) {
      visibleSlides = 2;
    } else {
      visibleSlides = functionsSliderSlidesLenght;
    }

    var swiper = new Swiper(functionsSlider, {
      speed: 400,
      spaceBetween: 25,
      slidesPerView: visibleSlides,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
        },
        769: {
          slidesPerView: visibleSlides
        }
      }
    });
  }
});
var prefix = new Array("004191", "010", "011", "0121", "0122", "0123", "0124", "0125", "0131", "0141", "0142", "0143", "0144", "015", "0161", "0163", "0165", "0166", "0171", "0172", "0173", "0174", "0175", "0182", "0183", "0184", "0185", "0187", "019", "02", "030", "031", "0321", "0322", "0323", "0324", "0331", "0341", "0342", "0343", "0344", "0345", "0346", "035", "0362", "0363", "0364", "0365", "0371", "0372", "0373", "0374", "0375", "0376", "0377", "0381", "0382", "0383", "0384", "0385", "0386", "039", "040", "041", "0421", "0422", "0423", "0424", "0425", "0426", "0427", "0428", "0429", "0431", "0432", "0433", "0434", "0435", "0436", "0437", "0438", "0439", "0442", "0444", "0445", "045", "0461", "0462", "0463", "0464", "0465", "0471", "0472", "0473", "0474", "0481", "049", "050", "051", "0521", "0522", "0523", "0524", "0525", "0532", "0533", "0534", "0535", "0536", "0541", "0542", "0543", "0544", "0545", "0546", "0547", "055", "0564", "0565", "0566", "0571", "0572", "0573", "0574", "0575", "0577", "0578", "05283", "0584", "0585", "0586", "0587", "0588", "059", "06", "070", "071", "0721", "0722", "0731", "0732", "0733", "0734", "0735", "0736", "0737", "0742", "0743", "0744", "0746", "075", "0761", "0763", "0765", "0766", "0771", "0773", "0774", "0775", "0776", "0781", "0782", "0783", "0784", "0785", "0789", "079", "080", "081", "0823", "0824", "0825", "0827", "0828", "0831", "0832", "0833", "0835", "0836", "085", "0861", "0862", "0863", "0864", "0865", "0871", "0872", "0873", "0874", "0875", "0881", "0882", "0883", "0884", "0885", "089", "090", "091", "0921", "0922", "0923", "0924", "0925", "0931", "0932", "0933", "0934", "0935", "0941", "0942", "095", "0961", "0962", "0963", "0964", "0965", "0966", "0967", "0968", "0971", "0972", "0973", "0974", "0975", "0976", "0981", "0982", "0983", "0984", "0985", "099");

var noChar = function noChar(numTelefono) {
  var middlewareForm = document.querySelector('.j-cmn-form');
  var telErrorMessage = middlewareForm.querySelector('.telephone-error');
  var i;

  for (i = 0; i < numTelefono.length; i++) {
    var c = numTelefono.charAt(i);

    if (c < "0" || c > "9") {
      telErrorMessage.innerHTML = 'Il numero di telefono deve contenere solo cifre!';
      return false;
    }
  }

  return true;
};

var checkMobile = function checkMobile(numTelefono) {
  var check = new RegExp("^3\\d{8,9}$");
  return check.test(numTelefono);
};

var checkFisso = function checkFisso(numTelefono) {
  var i;
  var result = false;

  for (i = 0; i < prefix.length; i++) {
    var check = new RegExp("^" + prefix[i] + "\\d{4,10}$");

    if (check.test(numTelefono)) {
      result = true;
    }
  }

  return result;
};

var checkTelefono = function checkTelefono(numTelefono) {
  var middlewareForm = document.querySelector('.j-cmn-form');
  var telErrorMessage = middlewareForm.querySelector('.telephone-error');

  if (!noChar(numTelefono)) {
    return false;
  }

  if (numTelefono.indexOf("3") == 0) {
    if (!checkMobile(numTelefono)) {
      telErrorMessage.innerHTML = 'Numero di telefono non valido!';
      return false;
    }
  } else if (numTelefono.indexOf("0") == 0) {
    if (!checkFisso(numTelefono)) {
      telErrorMessage.innerHTML = 'Prefisso nazionale non valido!';
      return false;
    }
  } else {
    telErrorMessage.innerHTML = 'Campo obbligatorio';
    return false;
  }

  return true;
};

String.prototype.padLeft = function (length, character) {
  return new Array(length - this.length + 1).join(character || ' ') + this;
};

Date.prototype.toFormattedString = function () {
  return [String(this.getDate()).padLeft(2, '0'), String(this.getMonth() + 1).padLeft(2, '0'), String(this.getFullYear())].join("") + "" + [String(this.getHours()).padLeft(2, '0'), String(this.getMinutes()).padLeft(2, '0'), String(this.getSeconds()).padLeft(2, '0')].join("");
};

(function () {
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  Math.uuid = function (len, radix) {
    var chars = CHARS,
        uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };

  Math.uuidFast = function () {
    var chars = CHARS,
        uuid = new Array(36),
        rnd = 0,
        r;

    for (var i = 0; i < 36; i++) {
      if (i == 8 || i == 13 || i == 18 || i == 23) {
        uuid[i] = '-';
      } else if (i == 14) {
        uuid[i] = '4';
      } else {
        if (rnd <= 0x02) rnd = 0x2000000 + Math.random() * 0x1000000 | 0;
        r = rnd & 0xf;
        rnd = rnd >> 4;
        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
      }
    }

    return uuid.join('');
  };

  Math.uuidCompact = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };
})();

function createLeadId(pageParam) {
  var timeStamp = new Date();
  return pageParam + timeStamp.toFormattedString() + Math.uuid(20);
}

var lead_id = "";
var dest_url = "";
var thankyou_url = "";
var redirect_KO_ce = "";

var setTypNotyp = function setTypNotyp() {
  if (location.host == "www.sky.it" || location.host == "cms.sky.it") {
    dest_url = typeof variables.destProd == 'undefined' ? "https://abbonamento.sky.it/newaol/cmn/send?" : variables.destProd;
    thankyou_url = typeof variables.typPageProd == 'undefined' ? location.origin + "/callmenow-new/res/" + variables.typPartial + "-typ.html" : variables.typPageProd;
    redirect_KO_ce = typeof variables.notypPageProd == 'undefined' ? location.origin + "/callmenow-new/res/" + variables.notypPartial + "-notyp.html" : variables.notypPageProd;
  } else if (location.host == "collcms.www.sky.it" || location.host == "collaem.sky.it") {
    console.log("callmenow collaudo");
    dest_url = typeof variables.destProd == 'undefined' ? "https://collprj.abbonamento.sky.it/aol/cmn/send?" : variables.destProd;
    thankyou_url = typeof variables.typPageProd == 'undefined' ? location.origin + "/callmenow-new/res/" + variables.typPartial + "-typ.html" : variables.typPageProd;
    redirect_KO_ce = typeof variables.notypPageProd == 'undefined' ? location.origin + "/callmenow-new/res/" + variables.notypPartial + "-notyp.html" : variables.notypPageProd;
  } else if (location.host.indexOf('localhost') >= 0) {
    console.log('locale');
    dest_url = typeof variables.destProd == 'undefined' ? "https://collprj.abbonamento.sky.it/aol/cmn/send?" : variables.destProd;
    thankyou_url = typeof variables.typPageProd == 'undefined' ? "http://localhost:1000/callmenow-new/res/thank-you.html?url=" + document.URL : variables.typPageProd;
    redirect_KO_ce = typeof variables.notypPageProd == 'undefined' ? "http://localhost:1000/callmenow-new/res/thank-you.html?url=" + document.URL : variables.notypPageProd;
  } else {
    console.log("Invalid environment");
  }
};

var formValidator = function formValidator() {
  var middlewareForm = document.querySelector('.j-cmn-form');
  var nameInput = middlewareForm.querySelector('#nome');
  var lastNameInput = middlewareForm.querySelector('#cognome');
  var telNumberInput = middlewareForm.querySelector('#telefono');
  var infoPrivacyInput = middlewareForm.querySelector('#consenso');
  var name = nameInput ? nameInput.value : null;
  var lastName = lastNameInput ? lastNameInput.value : null;
  var telNumber = telNumberInput ? telNumberInput.value : null;
  var infoPrivacy = infoPrivacyInput ? infoPrivacyInput.checked : false;
  var nameInputWrapper = nameInput.closest('.field');
  var lastNameInputWrapper = lastNameInput.closest('.field');
  var telNumberInputWrapper = telNumberInput.closest('.field');
  var infoPrivacyInputWrapper = infoPrivacyInput.closest('.field');
  var validName = false;
  var validLastName = false;
  var validTelNumber = false;
  var validInfoPrivacy = false;

  if (name == "") {
    nameInputWrapper.classList.add('error');
  } else {
    if (nameInputWrapper.classList.contains('error')) {
      nameInputWrapper.classList.remove('error');
    }

    validName = true;
  }

  if (lastName == "") {
    lastNameInputWrapper.classList.add('error');
  } else {
    if (lastNameInputWrapper.classList.contains('error')) {
      lastNameInputWrapper.classList.remove('error');
    }

    validLastName = true;
  }

  if (!checkTelefono(telNumber)) {
    telNumberInputWrapper.classList.add('error');
  } else {
    if (telNumberInputWrapper.classList.contains('error')) {
      telNumberInputWrapper.classList.remove('error');
    }

    validTelNumber = true;
  }

  if (!infoPrivacy) {
    infoPrivacyInputWrapper.classList.add('error');
  } else {
    if (infoPrivacyInputWrapper.classList.contains('error')) {
      infoPrivacyInputWrapper.classList.remove('error');
    }

    validInfoPrivacy = true;
  }

  if (validName && validLastName && validTelNumber && validInfoPrivacy) {
    sendMyData(name, lastName, telNumber, infoPrivacy);
  }
};

var sendMyData = function sendMyData(name, lastName, telNumber, infoPrivacy) {
  var leadId = createLeadId(variables.leadId);
  dest_url += "nome=" + name + "&cognome=" + lastName + "&telefono=" + telNumber + "&leadId=" + leadId + "&codPromo=" + variables.codPromo + "&redirect=" + thankyou_url + "&redirect_KO_ce=" + redirect_KO_ce + (typeof variables.note == "undefined" ? "" : "&note=" + variables.note) + "&consenso_mar=" + infoPrivacy;
  setTimeout(function () {
    document.location.href = dest_url;
  }, 2000);
};

window.addEventListener('DOMContentLoaded', function (event) {
  var middlewareForm = document.querySelector('.j-cmn-form');

  if (DomContains(middlewareForm)) {
    setTypNotyp();
    var submitForm = middlewareForm.querySelector('#cta');
    submitForm.addEventListener('click', function () {
      formValidator();
    });
  }
});

var changeStatusCmn = function changeStatusCmn(status) {
  var middlewareForm = document.querySelector('.middleware-form');

  if (status == 'open') {
    middlewareForm.classList.add('opened-cmn');
  } else {
    middlewareForm.classList.remove('opened-cmn');
  }
};

var openCMN = function openCMN() {
  var middlewareForm = document.querySelector('.middleware-form');
  var maskCmn = middlewareForm.querySelector('.mask');
  var openAnimationTimeline = gsap.timeline();
  var animationDuration = 1;
  middlewareForm.style.display = 'block';
  openAnimationTimeline.call(changeStatusCmn, ['open'], animationDuration / 2);
  openAnimationTimeline.fromTo(maskCmn, {
    opacity: 0
  }, {
    opacity: 0.5,
    duration: animationDuration
  });
};

var closeCMN = function closeCMN() {
  var middlewareForm = document.querySelector('.middleware-form');
  var maskCmn = middlewareForm.querySelector('.mask');
  var closeAnimationTimeline = gsap.timeline();
  var animationDuration = 1;
  closeAnimationTimeline.call(changeStatusCmn, ['close'], 0);
  closeAnimationTimeline.fromTo(maskCmn, {
    opacity: 0.5
  }, {
    opacity: 0,
    duration: animationDuration
  });
  setTimeout(function () {
    middlewareForm.style.display = 'none';
  }, animationDuration * 1000);
};

window.addEventListener('DOMContentLoaded', function (event) {
  var middlewareForm = document.querySelector('.middleware-form');

  if (DomContains(middlewareForm)) {
    var openCmnCta = document.querySelectorAll('.open-cmn');
    openCmnCta.forEach(function (openCmn) {
      openCmn.addEventListener('click', function () {
        openCMN();
      });
    });
    var closeCmnCta = middlewareForm.querySelectorAll('.close-cmn');
    closeCmnCta.forEach(function (closeCmn) {
      closeCmn.addEventListener('click', function () {
        closeCMN();
      });
    });
    var ctaSubmit = middlewareForm.querySelector('#cta');
    ctaSubmit.addEventListener('click', function () {
      var telephoneNumber = middlewareForm.querySelector('#telefono').value;
      sessionStorage.setItem('telephone', telephoneNumber);
    });
  }
});

var changeStatusModalAbbonarsi = function changeStatusModalAbbonarsi(status) {
  var modalAbbonarsi = document.querySelector('.modal-abbonarsi');

  if (status == 'open') {
    modalAbbonarsi.classList.add('opened-modal-abbonarsi');
  } else {
    modalAbbonarsi.classList.remove('opened-modal-abbonarsi');
  }
};

var openModalAbbonarsi = function openModalAbbonarsi(ctaOpenModal) {
  var modalAbbonarsi = document.querySelector('.modal-abbonarsi');
  var ctaCloseModal = document.querySelector('.close-modal-abbonarsi');
  var openAnimationTimeline = gsap.timeline();
  modalAbbonarsi.style.display = 'block';

  if (Vw < ScreenMd) {
    ctaOpenModal.style.display = 'none';
    ctaCloseModal.style.display = 'block';
  } else {
    ctaOpenModal.style.display = 'block';
    ctaCloseModal.style.display = 'none';
  }

  var animationDuration = 1;
  openAnimationTimeline.call(changeStatusModalAbbonarsi, ['open'], animationDuration / 2);
};

var closeModalAbbonarsi = function closeModalAbbonarsi(ctaCloseModal) {
  var ctaOpenModal = document.querySelector('.open-modal-abbonarsi');
  var modalAbbonarsi = document.querySelector('.modal-abbonarsi');
  var closeAnimationTimeline = gsap.timeline();

  if (Vw < ScreenMd) {
    ctaCloseModal.style.display = 'none';
    ctaOpenModal.style.display = 'block';
  } else {
    ctaOpenModal.style.display = 'block';
    ctaCloseModal.style.display = 'flex';
  }

  var animationDuration = 1;
  closeAnimationTimeline.call(changeStatusModalAbbonarsi, ['close'], 0);
  setTimeout(function () {
    modalAbbonarsi.style.display = 'none';
  }, animationDuration * 1000);
};

var openModalAbbonarsiSticky = function openModalAbbonarsiSticky() {
  if (Vw < ScreenMd) {
    var modalAbbonarsi = document.querySelector('.modal-abbonarsi');
    var ctaOpenModal = document.querySelector('.open-modal-abbonarsi');
    var ctaCloseModal = document.querySelector('.close-modal-abbonarsi');
    var openAnimationTimeline = gsap.timeline();
    modalAbbonarsi.style.display = 'block';
    ctaOpenModal.style.display = 'none';
    ctaCloseModal.style.display = 'block';
    var animationDuration = 1;
    openAnimationTimeline.call(changeStatusModalAbbonarsi, ['open'], animationDuration / 2);
  }
};

window.addEventListener('DOMContentLoaded', function (event) {
  var modalAbbonarsi = document.querySelector('.modal-abbonarsi');

  if (DomContains(modalAbbonarsi)) {
    var ctasOpenModalAbbonarsi = document.querySelectorAll('.open-modal-abbonarsi');
    ctasOpenModalAbbonarsi.forEach(function (ctaOpenModal) {
      ctaOpenModal.addEventListener('click', function () {
        openModalAbbonarsi(ctaOpenModal);
      });
    });
    var ctasCloseModalAbbonarsi = document.querySelectorAll('.close-modal-abbonarsi');
    ctasCloseModalAbbonarsi.forEach(function (ctaCloseModal) {
      ctaCloseModal.addEventListener('click', function () {
        closeModalAbbonarsi(ctaCloseModal);
      });
    });
    var ctasOpenModalAbbonarsiSticky = document.querySelector('.j-open-modal-abbonarsi-sticky');

    if (DomContains(ctasOpenModalAbbonarsiSticky) && Vw < ScreenMd) {
      ctasOpenModalAbbonarsiSticky.addEventListener('click', function () {
        openModalAbbonarsiSticky();
      });
    }
  }
});
//# sourceMappingURL=provasky.js.map