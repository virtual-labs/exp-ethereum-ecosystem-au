(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = t(l);
    fetch(l.href, o);
  }
})();
function ic(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qs = { exports: {} },
  ll = {},
  Ks = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zt = Symbol.for("react.element"),
  sc = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  hc = Symbol.for("react.suspense"),
  mc = Symbol.for("react.memo"),
  vc = Symbol.for("react.lazy"),
  Ai = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ai && e[Ai]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ys = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gs = Object.assign,
  Xs = {};
function st(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Xs),
    (this.updater = t || Ys);
}
st.prototype.isReactComponent = {};
st.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
st.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zs() {}
Zs.prototype = st.prototype;
function Vo(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Xs),
    (this.updater = t || Ys);
}
var $o = (Vo.prototype = new Zs());
$o.constructor = Vo;
Gs($o, st.prototype);
$o.isPureReactComponent = !0;
var Oi = Array.isArray,
  Js = Object.prototype.hasOwnProperty,
  Wo = { current: null },
  qs = { key: !0, ref: !0, __self: !0, __source: !0 };
function bs(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (i = n.ref),
    n.key !== void 0 && (o = "" + n.key),
    n))
      Js.call(n, r) && !qs.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var a = Array(u), d = 0; d < u; d++) a[d] = arguments[d + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Zt,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Wo.current,
  };
}
function gc(e, n) {
  return {
    $$typeof: Zt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function xc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Fi = /\/+/g;
function kl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? xc("" + e.key)
    : n.toString(36);
}
function kr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zt:
          case sc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + kl(i, 0) : r),
      Oi(l)
        ? ((t = ""),
          e != null && (t = e.replace(Fi, "$&/") + "/"),
          kr(l, n, t, "", function (d) {
            return d;
          }))
        : l != null &&
          (Qo(l) &&
            (l = gc(
              l,
              t +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fi, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Oi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + kl(o, u);
      i += kr(o, n, t, a, l);
    }
  else if (((a = yc(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + kl(o, u++)), (i += kr(o, n, t, a, l));
  else if (o === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function or(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    kr(e, r, "", "", function (o) {
      return n.call(t, o, l++);
    }),
    r
  );
}
function wc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  jr = { transition: null },
  Sc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: jr,
    ReactCurrentOwner: Wo,
  };
I.Children = {
  map: or,
  forEach: function (e, n, t) {
    or(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      or(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      or(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Qo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = st;
I.Fragment = uc;
I.Profiler = cc;
I.PureComponent = Vo;
I.StrictMode = ac;
I.Suspense = hc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
I.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((o = n.ref), (i = Wo.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in n)
      Js.call(n, a) &&
        !qs.hasOwnProperty(a) &&
        (r[a] = n[a] === void 0 && u !== void 0 ? u[a] : n[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = t;
  else if (1 < a) {
    u = Array(a);
    for (var d = 0; d < a; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dc, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = bs;
I.createFactory = function (e) {
  var n = bs.bind(null, e);
  return (n.type = e), n;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
I.isValidElement = Qo;
I.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: wc };
};
I.memo = function (e, n) {
  return { $$typeof: mc, type: e, compare: n === void 0 ? null : n };
};
I.startTransition = function (e) {
  var n = jr.transition;
  jr.transition = {};
  try {
    e();
  } finally {
    jr.transition = n;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, n) {
  return ae.current.useCallback(e, n);
};
I.useContext = function (e) {
  return ae.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
I.useEffect = function (e, n) {
  return ae.current.useEffect(e, n);
};
I.useId = function () {
  return ae.current.useId();
};
I.useImperativeHandle = function (e, n, t) {
  return ae.current.useImperativeHandle(e, n, t);
};
I.useInsertionEffect = function (e, n) {
  return ae.current.useInsertionEffect(e, n);
};
I.useLayoutEffect = function (e, n) {
  return ae.current.useLayoutEffect(e, n);
};
I.useMemo = function (e, n) {
  return ae.current.useMemo(e, n);
};
I.useReducer = function (e, n, t) {
  return ae.current.useReducer(e, n, t);
};
I.useRef = function (e) {
  return ae.current.useRef(e);
};
I.useState = function (e) {
  return ae.current.useState(e);
};
I.useSyncExternalStore = function (e, n, t) {
  return ae.current.useSyncExternalStore(e, n, t);
};
I.useTransition = function () {
  return ae.current.useTransition();
};
I.version = "18.2.0";
Ks.exports = I;
var k = Ks.exports;
const kc = ic(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jc = k,
  Cc = Symbol.for("react.element"),
  Nc = Symbol.for("react.fragment"),
  Ec = Object.prototype.hasOwnProperty,
  Pc = jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function eu(e, n, t) {
  var r,
    l = {},
    o = null,
    i = null;
  t !== void 0 && (o = "" + t),
    n.key !== void 0 && (o = "" + n.key),
    n.ref !== void 0 && (i = n.ref);
  for (r in n) Ec.call(n, r) && !_c.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: Cc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Pc.current,
  };
}
ll.Fragment = Nc;
ll.jsx = eu;
ll.jsxs = eu;
Qs.exports = ll;
var s = Qs.exports,
  Gl = {},
  nu = { exports: {} },
  we = {},
  tu = { exports: {} },
  ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, R) {
    var M = E.length;
    E.push(R);
    e: for (; 0 < M; ) {
      var H = (M - 1) >>> 1,
        K = E[H];
      if (0 < l(K, R)) (E[H] = R), (E[M] = K), (M = H);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var R = E[0],
      M = E.pop();
    if (M !== R) {
      E[0] = M;
      e: for (var H = 0, K = E.length, rr = K >>> 1; H < rr; ) {
        var xn = 2 * (H + 1) - 1,
          Sl = E[xn],
          wn = xn + 1,
          lr = E[wn];
        if (0 > l(Sl, M))
          wn < K && 0 > l(lr, Sl)
            ? ((E[H] = lr), (E[wn] = M), (H = wn))
            : ((E[H] = Sl), (E[xn] = M), (H = xn));
        else if (wn < K && 0 > l(lr, M)) (E[H] = lr), (E[wn] = M), (H = wn);
        else break e;
      }
    }
    return R;
  }
  function l(E, R) {
    var M = E.sortIndex - R.sortIndex;
    return M !== 0 ? M : E.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    d = [],
    v = 1,
    m = null,
    h = 3,
    x = !1,
    w = !1,
    S = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var R = t(d); R !== null; ) {
      if (R.callback === null) r(d);
      else if (R.startTime <= E)
        r(d), (R.sortIndex = R.expirationTime), n(a, R);
      else break;
      R = t(d);
    }
  }
  function y(E) {
    if (((S = !1), p(E), !w))
      if (t(a) !== null) (w = !0), ct(j);
      else {
        var R = t(d);
        R !== null && dt(y, R.startTime - E);
      }
  }
  function j(E, R) {
    (w = !1), S && ((S = !1), f(N), (N = -1)), (x = !0);
    var M = h;
    try {
      for (
        p(R), m = t(a);
        m !== null && (!(m.expirationTime > R) || (E && !te()));

      ) {
        var H = m.callback;
        if (typeof H == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var K = H(m.expirationTime <= R);
          (R = e.unstable_now()),
            typeof K == "function" ? (m.callback = K) : m === t(a) && r(a),
            p(R);
        } else r(a);
        m = t(a);
      }
      if (m !== null) var rr = !0;
      else {
        var xn = t(d);
        xn !== null && dt(y, xn.startTime - R), (rr = !1);
      }
      return rr;
    } finally {
      (m = null), (h = M), (x = !1);
    }
  }
  var _ = !1,
    C = null,
    N = -1,
    L = 5,
    z = -1;
  function te() {
    return !(e.unstable_now() - z < L);
  }
  function Ze() {
    if (C !== null) {
      var E = e.unstable_now();
      z = E;
      var R = !0;
      try {
        R = C(!0, E);
      } finally {
        R ? gn() : ((_ = !1), (C = null));
      }
    } else _ = !1;
  }
  var gn;
  if (typeof c == "function")
    gn = function () {
      c(Ze);
    };
  else if (typeof MessageChannel < "u") {
    var tr = new MessageChannel(),
      wl = tr.port2;
    (tr.port1.onmessage = Ze),
      (gn = function () {
        wl.postMessage(null);
      });
  } else
    gn = function () {
      T(Ze, 0);
    };
  function ct(E) {
    (C = E), _ || ((_ = !0), gn());
  }
  function dt(E, R) {
    N = T(function () {
      E(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), ct(j));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(a);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = h;
      }
      var M = h;
      h = R;
      try {
        return E();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, R) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var M = h;
      h = E;
      try {
        return R();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (E, R, M) {
      var H = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? H + M : H))
          : (M = H),
        E)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = M + K),
        (E = {
          id: v++,
          callback: R,
          priorityLevel: E,
          startTime: M,
          expirationTime: K,
          sortIndex: -1,
        }),
        M > H
          ? ((E.sortIndex = M),
            n(d, E),
            t(a) === null &&
              E === t(d) &&
              (S ? (f(N), (N = -1)) : (S = !0), dt(y, M - H)))
          : ((E.sortIndex = K), n(a, E), w || x || ((w = !0), ct(j))),
        E
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (E) {
      var R = h;
      return function () {
        var M = h;
        h = R;
        try {
          return E.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(ru);
tu.exports = ru;
var Tc = tu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lu = k,
  xe = Tc;
function g(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ou = new Set(),
  Lt = {};
function Ln(e, n) {
  et(e, n), et(e + "Capture", n);
}
function et(e, n) {
  for (Lt[e] = n, e = 0; e < n.length; e++) ou.add(n[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xl = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ui = {},
  Hi = {};
function Rc(e) {
  return Xl.call(Hi, e)
    ? !0
    : Xl.call(Ui, e)
    ? !1
    : zc.test(e)
    ? (Hi[e] = !0)
    : ((Ui[e] = !0), !1);
}
function Mc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lc(e, n, t, r) {
  if (n === null || typeof n > "u" || Mc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ce(e, n, t, r, l, o, i) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ne[n] = new ce(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ko = /[\-:]([a-z])/g;
function Yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Ko, Yo);
    ne[n] = new ce(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Ko, Yo);
    ne[n] = new ce(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Ko, Yo);
  ne[n] = new ce(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, n, t, r) {
  var l = ne.hasOwnProperty(n) ? ne[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Lc(n, t, l, r) && (t = null),
    r || l === null
      ? Rc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for("react.element"),
  An = Symbol.for("react.portal"),
  On = Symbol.for("react.fragment"),
  Xo = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  iu = Symbol.for("react.provider"),
  su = Symbol.for("react.context"),
  Zo = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Jo = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  uu = Symbol.for("react.offscreen"),
  Bi = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bi && e[Bi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  jl;
function wt(e) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      jl = (n && n[1]) || "";
    }
  return (
    `
` +
    jl +
    e
  );
}
var Cl = !1;
function Nl(e, n) {
  if (!e || Cl) return "";
  Cl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function Ic(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case An:
      return "Portal";
    case Zl:
      return "Profiler";
    case Xo:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case su:
        return (e.displayName || "Context") + ".Consumer";
      case iu:
        return (e._context.displayName || "Context") + ".Provider";
      case Zo:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jo:
        return (
          (n = e.displayName || null), n !== null ? n : bl(e.type) || "Memo"
        );
      case qe:
        (n = e._payload), (e = e._init);
        try {
          return bl(e(n));
        } catch {}
    }
  return null;
}
function Dc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(n);
    case 8:
      return n === Xo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function au(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Ac(e) {
  var n = au(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      o = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function sr(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function cu(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = au(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Ir(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, n) {
  var t = n.checked;
  return W({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Vi(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = pn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function du(e, n) {
  (n = n.checked), n != null && Go(e, "checked", n, !1);
}
function no(e, n) {
  du(e, n);
  var t = pn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? to(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && to(e, n.type, pn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function $i(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function to(e, n, t) {
  (n !== "number" || Ir(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Gn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + pn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ro(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return W({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wi(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(g(92));
      if (St(t)) {
        if (1 < t.length) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: pn(t) };
}
function fu(e, n) {
  var t = pn(n.value),
    r = pn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Qi(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function pu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? pu(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ur,
  hu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        ur = ur || document.createElement("div"),
          ur.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function It(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ct = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Oc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ct).forEach(function (e) {
  Oc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ct[n] = Ct[e]);
  });
});
function mu(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (Ct.hasOwnProperty(e) && Ct[e])
    ? ("" + n).trim()
    : n + "px";
}
function vu(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = mu(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Fc = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oo(e, n) {
  if (n) {
    if (Fc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function io(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var so = null;
function qo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uo = null,
  Xn = null,
  Zn = null;
function Ki(e) {
  if ((e = bt(e))) {
    if (typeof uo != "function") throw Error(g(280));
    var n = e.stateNode;
    n && ((n = al(n)), uo(e.stateNode, e.type, n));
  }
}
function yu(e) {
  Xn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Xn = e);
}
function gu() {
  if (Xn) {
    var e = Xn,
      n = Zn;
    if (((Zn = Xn = null), Ki(e), n)) for (e = 0; e < n.length; e++) Ki(n[e]);
  }
}
function xu(e, n) {
  return e(n);
}
function wu() {}
var El = !1;
function Su(e, n, t) {
  if (El) return e(n, t);
  El = !0;
  try {
    return xu(e, n, t);
  } finally {
    (El = !1), (Xn !== null || Zn !== null) && (wu(), gu());
  }
}
function Dt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = al(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(g(231, n, typeof t));
  return t;
}
var ao = !1;
if (Qe)
  try {
    var pt = {};
    Object.defineProperty(pt, "passive", {
      get: function () {
        ao = !0;
      },
    }),
      window.addEventListener("test", pt, pt),
      window.removeEventListener("test", pt, pt);
  } catch {
    ao = !1;
  }
function Uc(e, n, t, r, l, o, i, u, a) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (v) {
    this.onError(v);
  }
}
var Nt = !1,
  Dr = null,
  Ar = !1,
  co = null,
  Hc = {
    onError: function (e) {
      (Nt = !0), (Dr = e);
    },
  };
function Bc(e, n, t, r, l, o, i, u, a) {
  (Nt = !1), (Dr = null), Uc.apply(Hc, arguments);
}
function Vc(e, n, t, r, l, o, i, u, a) {
  if ((Bc.apply(this, arguments), Nt)) {
    if (Nt) {
      var d = Dr;
      (Nt = !1), (Dr = null);
    } else throw Error(g(198));
    Ar || ((Ar = !0), (co = d));
  }
}
function In(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function ku(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Yi(e) {
  if (In(e) !== e) throw Error(g(188));
}
function $c(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = In(e)), n === null)) throw Error(g(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t) return Yi(l), e;
        if (o === r) return Yi(l), n;
        o = o.sibling;
      }
      throw Error(g(188));
    }
    if (t.return !== r.return) (t = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === t) {
          (i = !0), (t = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (t = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === t) {
            (i = !0), (t = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function ju(e) {
  return (e = $c(e)), e !== null ? Cu(e) : null;
}
function Cu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Cu(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Nu = xe.unstable_scheduleCallback,
  Gi = xe.unstable_cancelCallback,
  Wc = xe.unstable_shouldYield,
  Qc = xe.unstable_requestPaint,
  Y = xe.unstable_now,
  Kc = xe.unstable_getCurrentPriorityLevel,
  bo = xe.unstable_ImmediatePriority,
  Eu = xe.unstable_UserBlockingPriority,
  Or = xe.unstable_NormalPriority,
  Yc = xe.unstable_LowPriority,
  Pu = xe.unstable_IdlePriority,
  ol = null,
  Fe = null;
function Gc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Jc,
  Xc = Math.log,
  Zc = Math.LN2;
function Jc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xc(e) / Zc) | 0)) | 0;
}
var ar = 64,
  cr = 4194304;
function kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = kt(u)) : ((o &= i), o !== 0 && (r = kt(o)));
  } else (i = t & ~l), i !== 0 ? (r = kt(i)) : o !== 0 && (r = kt(o));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (o = n & -n), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Me(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function qc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function bc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Me(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & t) || u & r) && (l[i] = qc(u, n))
      : a <= n && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function fo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _u() {
  var e = ar;
  return (ar <<= 1), !(ar & 4194240) && (ar = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Jt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Me(n)),
    (e[n] = t);
}
function ed(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Me(t),
      o = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~o);
  }
}
function ei(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Me(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var A = 0;
function Tu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zu,
  ni,
  Ru,
  Mu,
  Lu,
  po = !1,
  dr = [],
  ln = null,
  on = null,
  sn = null,
  At = new Map(),
  Ot = new Map(),
  en = [],
  nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xi(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      ln = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      At.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ot.delete(n.pointerId);
  }
}
function ht(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      n !== null && ((n = bt(n)), n !== null && ni(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function td(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (ln = ht(ln, e, n, t, r, l)), !0;
    case "dragenter":
      return (on = ht(on, e, n, t, r, l)), !0;
    case "mouseover":
      return (sn = ht(sn, e, n, t, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return At.set(o, ht(At.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Ot.set(o, ht(Ot.get(o) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Iu(e) {
  var n = jn(e.target);
  if (n !== null) {
    var t = In(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = ku(t)), n !== null)) {
          (e.blockedOn = n),
            Lu(e.priority, function () {
              Ru(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = ho(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (so = r), t.target.dispatchEvent(r), (so = null);
    } else return (n = bt(t)), n !== null && ni(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Zi(e, n, t) {
  Cr(e) && t.delete(n);
}
function rd() {
  (po = !1),
    ln !== null && Cr(ln) && (ln = null),
    on !== null && Cr(on) && (on = null),
    sn !== null && Cr(sn) && (sn = null),
    At.forEach(Zi),
    Ot.forEach(Zi);
}
function mt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    po ||
      ((po = !0),
      xe.unstable_scheduleCallback(xe.unstable_NormalPriority, rd)));
}
function Ft(e) {
  function n(l) {
    return mt(l, e);
  }
  if (0 < dr.length) {
    mt(dr[0], e);
    for (var t = 1; t < dr.length; t++) {
      var r = dr[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ln !== null && mt(ln, e),
      on !== null && mt(on, e),
      sn !== null && mt(sn, e),
      At.forEach(n),
      Ot.forEach(n),
      t = 0;
    t < en.length;
    t++
  )
    (r = en[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < en.length && ((t = en[0]), t.blockedOn === null); )
    Iu(t), t.blockedOn === null && en.shift();
}
var Jn = Xe.ReactCurrentBatchConfig,
  Ur = !0;
function ld(e, n, t, r) {
  var l = A,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (A = 1), ti(e, n, t, r);
  } finally {
    (A = l), (Jn.transition = o);
  }
}
function od(e, n, t, r) {
  var l = A,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (A = 4), ti(e, n, t, r);
  } finally {
    (A = l), (Jn.transition = o);
  }
}
function ti(e, n, t, r) {
  if (Ur) {
    var l = ho(e, n, t, r);
    if (l === null) Ol(e, n, r, Hr, t), Xi(e, r);
    else if (td(l, e, n, t, r)) r.stopPropagation();
    else if ((Xi(e, r), n & 4 && -1 < nd.indexOf(e))) {
      for (; l !== null; ) {
        var o = bt(l);
        if (
          (o !== null && zu(o),
          (o = ho(e, n, t, r)),
          o === null && Ol(e, n, r, Hr, t),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ol(e, n, r, null, t);
  }
}
var Hr = null;
function ho(e, n, t, r) {
  if (((Hr = null), (e = qo(r)), (e = jn(e)), e !== null))
    if (((n = In(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = ku(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Hr = e), null;
}
function Du(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case bo:
          return 1;
        case Eu:
          return 4;
        case Or:
        case Yc:
          return 16;
        case Pu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  ri = null,
  Nr = null;
function Au() {
  if (Nr) return Nr;
  var e,
    n = ri,
    t = n.length,
    r,
    l = "value" in tn ? tn.value : tn.textContent,
    o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var i = t - e;
  for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
  return (Nr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function Ji() {
  return !1;
}
function Se(e) {
  function n(t, r, l, o, i) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fr
        : Ji),
      (this.isPropagationStopped = Ji),
      this
    );
  }
  return (
    W(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    n
  );
}
var ut = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  li = Se(ut),
  qt = W({}, ut, { view: 0, detail: 0 }),
  id = Se(qt),
  _l,
  Tl,
  vt,
  il = W({}, qt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vt &&
            (vt && e.type === "mousemove"
              ? ((_l = e.screenX - vt.screenX), (Tl = e.screenY - vt.screenY))
              : (Tl = _l = 0),
            (vt = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  qi = Se(il),
  sd = W({}, il, { dataTransfer: 0 }),
  ud = Se(sd),
  ad = W({}, qt, { relatedTarget: 0 }),
  zl = Se(ad),
  cd = W({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dd = Se(cd),
  fd = W({}, ut, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pd = Se(fd),
  hd = W({}, ut, { data: 0 }),
  bi = Se(hd),
  md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gd(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = yd[e]) ? !!n[e] : !1;
}
function oi() {
  return gd;
}
var xd = W({}, qt, {
    key: function (e) {
      if (e.key) {
        var n = md[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oi,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wd = Se(xd),
  Sd = W({}, il, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  es = Se(Sd),
  kd = W({}, qt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi,
  }),
  jd = Se(kd),
  Cd = W({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Nd = Se(Cd),
  Ed = W({}, il, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Pd = Se(Ed),
  _d = [9, 13, 27, 32],
  ii = Qe && "CompositionEvent" in window,
  Et = null;
Qe && "documentMode" in document && (Et = document.documentMode);
var Td = Qe && "TextEvent" in window && !Et,
  Ou = Qe && (!ii || (Et && 8 < Et && 11 >= Et)),
  ns = String.fromCharCode(32),
  ts = !1;
function Fu(e, n) {
  switch (e) {
    case "keyup":
      return _d.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Uu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function zd(e, n) {
  switch (e) {
    case "compositionend":
      return Uu(n);
    case "keypress":
      return n.which !== 32 ? null : ((ts = !0), ns);
    case "textInput":
      return (e = n.data), e === ns && ts ? null : e;
    default:
      return null;
  }
}
function Rd(e, n) {
  if (Fn)
    return e === "compositionend" || (!ii && Fu(e, n))
      ? ((e = Au()), (Nr = ri = tn = null), (Fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Ou && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Md = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rs(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Md[e.type] : n === "textarea";
}
function Hu(e, n, t, r) {
  yu(r),
    (n = Br(n, "onChange")),
    0 < n.length &&
      ((t = new li("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Pt = null,
  Ut = null;
function Ld(e) {
  Ju(e, 0);
}
function sl(e) {
  var n = Bn(e);
  if (cu(n)) return e;
}
function Id(e, n) {
  if (e === "change") return n;
}
var Bu = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"),
        (Ml = typeof ls.oninput == "function");
    }
    Rl = Ml;
  } else Rl = !1;
  Bu = Rl && (!document.documentMode || 9 < document.documentMode);
}
function os() {
  Pt && (Pt.detachEvent("onpropertychange", Vu), (Ut = Pt = null));
}
function Vu(e) {
  if (e.propertyName === "value" && sl(Ut)) {
    var n = [];
    Hu(n, Ut, e, qo(e)), Su(Ld, n);
  }
}
function Dd(e, n, t) {
  e === "focusin"
    ? (os(), (Pt = n), (Ut = t), Pt.attachEvent("onpropertychange", Vu))
    : e === "focusout" && os();
}
function Ad(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return sl(Ut);
}
function Od(e, n) {
  if (e === "click") return sl(n);
}
function Fd(e, n) {
  if (e === "input" || e === "change") return sl(n);
}
function Ud(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Ie = typeof Object.is == "function" ? Object.is : Ud;
function Ht(e, n) {
  if (Ie(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Xl.call(n, l) || !Ie(e[l], n[l])) return !1;
  }
  return !0;
}
function is(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ss(e, n) {
  var t = is(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = is(t);
  }
}
function $u(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? $u(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Wu() {
  for (var e = window, n = Ir(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Ir(e.document);
  }
  return n;
}
function si(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Hd(e) {
  var n = Wu(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    $u(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && si(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ss(t, o));
        var i = ss(t, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(n), e.extend(i.node, i.offset))
            : (n.setEnd(i.node, i.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bd = Qe && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  mo = null,
  _t = null,
  vo = !1;
function us(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  vo ||
    Un == null ||
    Un !== Ir(r) ||
    ((r = Un),
    "selectionStart" in r && si(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_t && Ht(_t, r)) ||
      ((_t = r),
      (r = Br(mo, "onSelect")),
      0 < r.length &&
        ((n = new li("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = Un))));
}
function pr(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Hn = {
    animationend: pr("Animation", "AnimationEnd"),
    animationiteration: pr("Animation", "AnimationIteration"),
    animationstart: pr("Animation", "AnimationStart"),
    transitionend: pr("Transition", "TransitionEnd"),
  },
  Ll = {},
  Qu = {};
Qe &&
  ((Qu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  "TransitionEvent" in window || delete Hn.transitionend.transition);
function ul(e) {
  if (Ll[e]) return Ll[e];
  if (!Hn[e]) return e;
  var n = Hn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Qu) return (Ll[e] = n[t]);
  return e;
}
var Ku = ul("animationend"),
  Yu = ul("animationiteration"),
  Gu = ul("animationstart"),
  Xu = ul("transitionend"),
  Zu = new Map(),
  as =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, n) {
  Zu.set(e, n), Ln(n, [e]);
}
for (var Il = 0; Il < as.length; Il++) {
  var Dl = as[Il],
    Vd = Dl.toLowerCase(),
    $d = Dl[0].toUpperCase() + Dl.slice(1);
  mn(Vd, "on" + $d);
}
mn(Ku, "onAnimationEnd");
mn(Yu, "onAnimationIteration");
mn(Gu, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Xu, "onTransitionEnd");
et("onMouseEnter", ["mouseout", "mouseover"]);
et("onMouseLeave", ["mouseout", "mouseover"]);
et("onPointerEnter", ["pointerout", "pointerover"]);
et("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));
function cs(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Vc(r, n, void 0, e), (e.currentTarget = null);
}
function Ju(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          cs(l, u, d), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          cs(l, u, d), (o = a);
        }
    }
  }
  if (Ar) throw ((e = co), (Ar = !1), (co = null), e);
}
function F(e, n) {
  var t = n[So];
  t === void 0 && (t = n[So] = new Set());
  var r = e + "__bubble";
  t.has(r) || (qu(n, e, 2, !1), t.add(r));
}
function Al(e, n, t) {
  var r = 0;
  n && (r |= 4), qu(t, e, r, n);
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function Bt(e) {
  if (!e[hr]) {
    (e[hr] = !0),
      ou.forEach(function (t) {
        t !== "selectionchange" && (Wd.has(t) || Al(t, !1, e), Al(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[hr] || ((n[hr] = !0), Al("selectionchange", !1, n));
  }
}
function qu(e, n, t, r) {
  switch (Du(n)) {
    case 1:
      var l = ld;
      break;
    case 4:
      l = od;
      break;
    default:
      l = ti;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !ao ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Ol(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = jn(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Su(function () {
    var d = o,
      v = qo(t),
      m = [];
    e: {
      var h = Zu.get(e);
      if (h !== void 0) {
        var x = li,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(t) === 0) break e;
          case "keydown":
          case "keyup":
            x = wd;
            break;
          case "focusin":
            (w = "focus"), (x = zl);
            break;
          case "focusout":
            (w = "blur"), (x = zl);
            break;
          case "beforeblur":
          case "afterblur":
            x = zl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = qi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ud;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jd;
            break;
          case Ku:
          case Yu:
          case Gu:
            x = dd;
            break;
          case Xu:
            x = Nd;
            break;
          case "scroll":
            x = id;
            break;
          case "wheel":
            x = Pd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = es;
        }
        var S = (n & 4) !== 0,
          T = !S && e === "scroll",
          f = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              f !== null && ((y = Dt(c, f)), y != null && S.push(Vt(c, y, p)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((h = new x(h, w, null, t, v)), m.push({ event: h, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            t !== so &&
            (w = t.relatedTarget || t.fromElement) &&
            (jn(w) || w[Ke]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            v.window === v
              ? v
              : (h = v.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((w = t.relatedTarget || t.toElement),
              (x = d),
              (w = w ? jn(w) : null),
              w !== null &&
                ((T = In(w)), w !== T || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((S = qi),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = es),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (T = x == null ? h : Bn(x)),
            (p = w == null ? h : Bn(w)),
            (h = new S(y, c + "leave", x, t, v)),
            (h.target = T),
            (h.relatedTarget = p),
            (y = null),
            jn(v) === d &&
              ((S = new S(f, c + "enter", w, t, v)),
              (S.target = p),
              (S.relatedTarget = T),
              (y = S)),
            (T = y),
            x && w)
          )
            n: {
              for (S = x, f = w, c = 0, p = S; p; p = Dn(p)) c++;
              for (p = 0, y = f; y; y = Dn(y)) p++;
              for (; 0 < c - p; ) (S = Dn(S)), c--;
              for (; 0 < p - c; ) (f = Dn(f)), p--;
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break n;
                (S = Dn(S)), (f = Dn(f));
              }
              S = null;
            }
          else S = null;
          x !== null && ds(m, h, x, S, !1),
            w !== null && T !== null && ds(m, T, w, S, !0);
        }
      }
      e: {
        if (
          ((h = d ? Bn(d) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var j = Id;
        else if (rs(h))
          if (Bu) j = Fd;
          else {
            j = Ad;
            var _ = Dd;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = Od);
        if (j && (j = j(e, d))) {
          Hu(m, j, t, v);
          break e;
        }
        _ && _(e, h, d),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            to(h, "number", h.value);
      }
      switch (((_ = d ? Bn(d) : window), e)) {
        case "focusin":
          (rs(_) || _.contentEditable === "true") &&
            ((Un = _), (mo = d), (_t = null));
          break;
        case "focusout":
          _t = mo = Un = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vo = !1), us(m, t, v);
          break;
        case "selectionchange":
          if (Bd) break;
        case "keydown":
        case "keyup":
          us(m, t, v);
      }
      var C;
      if (ii)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Fn
          ? Fu(e, t) && (N = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Ou &&
          t.locale !== "ko" &&
          (Fn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Fn && (C = Au())
            : ((tn = v),
              (ri = "value" in tn ? tn.value : tn.textContent),
              (Fn = !0))),
        (_ = Br(d, N)),
        0 < _.length &&
          ((N = new bi(N, e, null, t, v)),
          m.push({ event: N, listeners: _ }),
          C ? (N.data = C) : ((C = Uu(t)), C !== null && (N.data = C)))),
        (C = Td ? zd(e, t) : Rd(e, t)) &&
          ((d = Br(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new bi("onBeforeInput", "beforeinput", null, t, v)),
            m.push({ event: v, listeners: d }),
            (v.data = C)));
    }
    Ju(m, n);
  });
}
function Vt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Br(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Dt(e, t)),
      o != null && r.unshift(Vt(e, o, l)),
      (o = Dt(e, n)),
      o != null && r.push(Vt(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ds(e, n, t, r, l) {
  for (var o = n._reactName, i = []; t !== null && t !== r; ) {
    var u = t,
      a = u.alternate,
      d = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((a = Dt(t, o)), a != null && i.unshift(Vt(t, a, u)))
        : l || ((a = Dt(t, o)), a != null && i.push(Vt(t, a, u)))),
      (t = t.return);
  }
  i.length !== 0 && e.push({ event: n, listeners: i });
}
var Qd = /\r\n?/g,
  Kd = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qd,
      `
`
    )
    .replace(Kd, "");
}
function mr(e, n, t) {
  if (((n = fs(n)), fs(e) !== n && t)) throw Error(g(425));
}
function Vr() {}
var yo = null,
  go = null;
function xo(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var wo = typeof setTimeout == "function" ? setTimeout : void 0,
  Yd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ps = typeof Promise == "function" ? Promise : void 0,
  Gd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ps < "u"
      ? function (e) {
          return ps.resolve(null).then(e).catch(Xd);
        }
      : wo;
function Xd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ft(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ft(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function hs(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var at = Math.random().toString(36).slice(2),
  Oe = "__reactFiber$" + at,
  $t = "__reactProps$" + at,
  Ke = "__reactContainer$" + at,
  So = "__reactEvents$" + at,
  Zd = "__reactListeners$" + at,
  Jd = "__reactHandles$" + at;
function jn(e) {
  var n = e[Oe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Ke] || t[Oe])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = hs(e); e !== null; ) {
          if ((t = e[Oe])) return t;
          e = hs(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function bt(e) {
  return (
    (e = e[Oe] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function al(e) {
  return e[$t] || null;
}
var ko = [],
  Vn = -1;
function vn(e) {
  return { current: e };
}
function U(e) {
  0 > Vn || ((e.current = ko[Vn]), (ko[Vn] = null), Vn--);
}
function O(e, n) {
  Vn++, (ko[Vn] = e.current), (e.current = n);
}
var hn = {},
  ie = vn(hn),
  pe = vn(!1),
  _n = hn;
function nt(e, n) {
  var t = e.type.contextTypes;
  if (!t) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in t) l[o] = n[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  U(pe), U(ie);
}
function ms(e, n, t) {
  if (ie.current !== hn) throw Error(g(168));
  O(ie, n), O(pe, t);
}
function bu(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(g(108, Dc(e) || "Unknown", l));
  return W({}, t, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (_n = ie.current),
    O(ie, e),
    O(pe, pe.current),
    !0
  );
}
function vs(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t
    ? ((e = bu(e, n, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(ie),
      O(ie, e))
    : U(pe),
    O(pe, t);
}
var Be = null,
  cl = !1,
  Ul = !1;
function ea(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function qd(e) {
  (cl = !0), ea(e);
}
function yn() {
  if (!Ul && Be !== null) {
    Ul = !0;
    var e = 0,
      n = A;
    try {
      var t = Be;
      for (A = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (cl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Nu(bo, yn), l);
    } finally {
      (A = n), (Ul = !1);
    }
  }
  return null;
}
var $n = [],
  Wn = 0,
  Qr = null,
  Kr = 0,
  ke = [],
  je = 0,
  Tn = null,
  Ve = 1,
  $e = "";
function Sn(e, n) {
  ($n[Wn++] = Kr), ($n[Wn++] = Qr), (Qr = e), (Kr = n);
}
function na(e, n, t) {
  (ke[je++] = Ve), (ke[je++] = $e), (ke[je++] = Tn), (Tn = e);
  var r = Ve;
  e = $e;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var o = 32 - Me(n) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ve = (1 << (32 - Me(n) + l)) | (t << l) | r),
      ($e = o + e);
  } else (Ve = (1 << o) | (t << l) | r), ($e = e);
}
function ui(e) {
  e.return !== null && (Sn(e, 1), na(e, 1, 0));
}
function ai(e) {
  for (; e === Qr; )
    (Qr = $n[--Wn]), ($n[Wn] = null), (Kr = $n[--Wn]), ($n[Wn] = null);
  for (; e === Tn; )
    (Tn = ke[--je]),
      (ke[je] = null),
      ($e = ke[--je]),
      (ke[je] = null),
      (Ve = ke[--je]),
      (ke[je] = null);
}
var ge = null,
  ye = null,
  B = !1,
  Re = null;
function ta(e, n) {
  var t = Ce(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function ys(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ge = e), (ye = un(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ge = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Tn !== null ? { id: Ve, overflow: $e } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = Ce(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ge = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function jo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
  if (B) {
    var n = ye;
    if (n) {
      var t = n;
      if (!ys(e, n)) {
        if (jo(e)) throw Error(g(418));
        n = un(t.nextSibling);
        var r = ge;
        n && ys(e, n)
          ? ta(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ge = e));
      }
    } else {
      if (jo(e)) throw Error(g(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (ge = e);
    }
  }
}
function gs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function vr(e) {
  if (e !== ge) return !1;
  if (!B) return gs(e), (B = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !xo(e.type, e.memoizedProps))),
    n && (n = ye))
  ) {
    if (jo(e)) throw (ra(), Error(g(418)));
    for (; n; ) ta(e, n), (n = un(n.nextSibling));
  }
  if ((gs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              ye = un(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = ge ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = ye; e; ) e = un(e.nextSibling);
}
function tt() {
  (ye = ge = null), (B = !1);
}
function ci(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var bd = Xe.ReactCurrentBatchConfig;
function Te(e, n) {
  if (e && e.defaultProps) {
    (n = W({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Yr = vn(null),
  Gr = null,
  Qn = null,
  di = null;
function fi() {
  di = Qn = Gr = null;
}
function pi(e) {
  var n = Yr.current;
  U(Yr), (e._currentValue = n);
}
function No(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function qn(e, n) {
  (Gr = e),
    (di = Qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (fe = !0), (e.firstContext = null));
}
function Ee(e) {
  var n = e._currentValue;
  if (di !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Qn === null)) {
      if (Gr === null) throw Error(g(308));
      (Qn = e), (Gr.dependencies = { lanes: 0, firstContext: e });
    } else Qn = Qn.next = e;
  return n;
}
var Cn = null;
function hi(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function la(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), hi(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ye(e, r)
  );
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var be = !1;
function mi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oa(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ye(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), hi(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ye(e, t)
  );
}
function Pr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ei(e, t);
  }
}
function xs(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
      } while (t !== null);
      o === null ? (l = o = n) : (o = o.next = n);
    } else l = o = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Xr(e, n, t, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      d = a.next;
    (a.next = null), i === null ? (o = d) : (i.next = d), (i = a);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== i &&
        (u === null ? (v.firstBaseUpdate = d) : (u.next = d),
        (v.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (v = d = a = null), (u = o);
    do {
      var h = u.lane,
        x = u.eventTime;
      if ((r & h) === h) {
        v !== null &&
          (v = v.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((h = n), (x = t), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(x, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (h = typeof w == "function" ? w.call(x, m, h) : w),
                h == null)
              )
                break e;
              m = W({}, m, h);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((d = v = x), (a = m)) : (v = v.next = x),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (v === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (i |= l.lane), (l = l.next);
      while (l !== n);
    } else o === null && (l.shared.lanes = 0);
    (Rn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ws(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(g(191, l));
        l.call(r);
      }
    }
}
var ia = new lu.Component().refs;
function Eo(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : W({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = dn(e),
      o = We(r, l);
    (o.payload = n),
      t != null && (o.callback = t),
      (n = an(e, o, l)),
      n !== null && (Le(n, e, l, r), Pr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = ue(),
      l = dn(e),
      o = We(r, l);
    (o.tag = 1),
      (o.payload = n),
      t != null && (o.callback = t),
      (n = an(e, o, l)),
      n !== null && (Le(n, e, l, r), Pr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = ue(),
      r = dn(e),
      l = We(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = an(e, l, r)),
      n !== null && (Le(n, e, r, t), Pr(n, e, r));
  },
};
function Ss(e, n, t, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ht(t, r) || !Ht(l, o)
      : !0
  );
}
function sa(e, n, t) {
  var r = !1,
    l = hn,
    o = n.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ee(o))
      : ((l = he(n) ? _n : ie.current),
        (r = n.contextTypes),
        (o = (r = r != null) ? nt(e, l) : hn)),
    (n = new n(t, o)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = dl),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    n
  );
}
function ks(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && dl.enqueueReplaceState(n, n.state, null);
}
function Po(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = ia), mi(e);
  var o = n.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ee(o))
    : ((o = he(n) ? _n : ie.current), (l.context = nt(e, o))),
    (l.state = e.memoizedState),
    (o = n.getDerivedStateFromProps),
    typeof o == "function" && (Eo(e, n, o, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && dl.enqueueReplaceState(l, l.state, null),
      Xr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        o = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === o
        ? n.ref
        : ((n = function (i) {
            var u = l.refs;
            u === ia && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (n._stringRef = o),
          n);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function yr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      g(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function js(e) {
  var n = e._init;
  return n(e._payload);
}
function ua(e) {
  function n(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function t(f, c) {
    if (!e) return null;
    for (; c !== null; ) n(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = fn(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = Kl(p, f.mode, y)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function a(f, c, p, y) {
    var j = p.type;
    return j === On
      ? v(f, c, p.props.children, y, p.key)
      : c !== null &&
        (c.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === qe &&
            js(j) === c.type))
      ? ((y = l(c, p.props)), (y.ref = yt(f, c, p)), (y.return = f), y)
      : ((y = Lr(p.type, p.key, p.props, null, f.mode, y)),
        (y.ref = yt(f, c, p)),
        (y.return = f),
        y);
  }
  function d(f, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Yl(p, f.mode, y)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, y, j) {
    return c === null || c.tag !== 7
      ? ((c = Pn(p, f.mode, y, j)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Kl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ir:
          return (
            (p = Lr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = yt(f, null, c)),
            (p.return = f),
            p
          );
        case An:
          return (c = Yl(c, f.mode, p)), (c.return = f), c;
        case qe:
          var y = c._init;
          return m(f, y(c._payload), p);
      }
      if (St(c) || ft(c))
        return (c = Pn(c, f.mode, p, null)), (c.return = f), c;
      yr(f, c);
    }
    return null;
  }
  function h(f, c, p, y) {
    var j = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return j !== null ? null : u(f, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ir:
          return p.key === j ? a(f, c, p, y) : null;
        case An:
          return p.key === j ? d(f, c, p, y) : null;
        case qe:
          return (j = p._init), h(f, c, j(p._payload), y);
      }
      if (St(p) || ft(p)) return j !== null ? null : v(f, c, p, y, null);
      yr(f, p);
    }
    return null;
  }
  function x(f, c, p, y, j) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(p) || null), u(c, f, "" + y, j);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ir:
          return (f = f.get(y.key === null ? p : y.key) || null), a(c, f, y, j);
        case An:
          return (f = f.get(y.key === null ? p : y.key) || null), d(c, f, y, j);
        case qe:
          var _ = y._init;
          return x(f, c, p, _(y._payload), j);
      }
      if (St(y) || ft(y)) return (f = f.get(p) || null), v(c, f, y, j, null);
      yr(c, y);
    }
    return null;
  }
  function w(f, c, p, y) {
    for (
      var j = null, _ = null, C = c, N = (c = 0), L = null;
      C !== null && N < p.length;
      N++
    ) {
      C.index > N ? ((L = C), (C = null)) : (L = C.sibling);
      var z = h(f, C, p[N], y);
      if (z === null) {
        C === null && (C = L);
        break;
      }
      e && C && z.alternate === null && n(f, C),
        (c = o(z, c, N)),
        _ === null ? (j = z) : (_.sibling = z),
        (_ = z),
        (C = L);
    }
    if (N === p.length) return t(f, C), B && Sn(f, N), j;
    if (C === null) {
      for (; N < p.length; N++)
        (C = m(f, p[N], y)),
          C !== null &&
            ((c = o(C, c, N)), _ === null ? (j = C) : (_.sibling = C), (_ = C));
      return B && Sn(f, N), j;
    }
    for (C = r(f, C); N < p.length; N++)
      (L = x(C, f, N, p[N], y)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? N : L.key),
          (c = o(L, c, N)),
          _ === null ? (j = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        C.forEach(function (te) {
          return n(f, te);
        }),
      B && Sn(f, N),
      j
    );
  }
  function S(f, c, p, y) {
    var j = ft(p);
    if (typeof j != "function") throw Error(g(150));
    if (((p = j.call(p)), p == null)) throw Error(g(151));
    for (
      var _ = (j = null), C = c, N = (c = 0), L = null, z = p.next();
      C !== null && !z.done;
      N++, z = p.next()
    ) {
      C.index > N ? ((L = C), (C = null)) : (L = C.sibling);
      var te = h(f, C, z.value, y);
      if (te === null) {
        C === null && (C = L);
        break;
      }
      e && C && te.alternate === null && n(f, C),
        (c = o(te, c, N)),
        _ === null ? (j = te) : (_.sibling = te),
        (_ = te),
        (C = L);
    }
    if (z.done) return t(f, C), B && Sn(f, N), j;
    if (C === null) {
      for (; !z.done; N++, z = p.next())
        (z = m(f, z.value, y)),
          z !== null &&
            ((c = o(z, c, N)), _ === null ? (j = z) : (_.sibling = z), (_ = z));
      return B && Sn(f, N), j;
    }
    for (C = r(f, C); !z.done; N++, z = p.next())
      (z = x(C, f, N, z.value, y)),
        z !== null &&
          (e && z.alternate !== null && C.delete(z.key === null ? N : z.key),
          (c = o(z, c, N)),
          _ === null ? (j = z) : (_.sibling = z),
          (_ = z));
    return (
      e &&
        C.forEach(function (Ze) {
          return n(f, Ze);
        }),
      B && Sn(f, N),
      j
    );
  }
  function T(f, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === On &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ir:
          e: {
            for (var j = p.key, _ = c; _ !== null; ) {
              if (_.key === j) {
                if (((j = p.type), j === On)) {
                  if (_.tag === 7) {
                    t(f, _.sibling),
                      (c = l(_, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  _.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === qe &&
                    js(j) === _.type)
                ) {
                  t(f, _.sibling),
                    (c = l(_, p.props)),
                    (c.ref = yt(f, _, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                t(f, _);
                break;
              } else n(f, _);
              _ = _.sibling;
            }
            p.type === On
              ? ((c = Pn(p.props.children, f.mode, y, p.key)),
                (c.return = f),
                (f = c))
              : ((y = Lr(p.type, p.key, p.props, null, f.mode, y)),
                (y.ref = yt(f, c, p)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case An:
          e: {
            for (_ = p.key; c !== null; ) {
              if (c.key === _)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  t(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  t(f, c);
                  break;
                }
              else n(f, c);
              c = c.sibling;
            }
            (c = Yl(p, f.mode, y)), (c.return = f), (f = c);
          }
          return i(f);
        case qe:
          return (_ = p._init), T(f, c, _(p._payload), y);
      }
      if (St(p)) return w(f, c, p, y);
      if (ft(p)) return S(f, c, p, y);
      yr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (t(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (t(f, c), (c = Kl(p, f.mode, y)), (c.return = f), (f = c)),
        i(f))
      : t(f, c);
  }
  return T;
}
var rt = ua(!0),
  aa = ua(!1),
  er = {},
  Ue = vn(er),
  Wt = vn(er),
  Qt = vn(er);
function Nn(e) {
  if (e === er) throw Error(g(174));
  return e;
}
function vi(e, n) {
  switch ((O(Qt, n), O(Wt, e), O(Ue, er), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : lo(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = lo(n, e));
  }
  U(Ue), O(Ue, n);
}
function lt() {
  U(Ue), U(Wt), U(Qt);
}
function ca(e) {
  Nn(Qt.current);
  var n = Nn(Ue.current),
    t = lo(n, e.type);
  n !== t && (O(Wt, e), O(Ue, t));
}
function yi(e) {
  Wt.current === e && (U(Ue), U(Wt));
}
var V = vn(0);
function Zr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Hl = [];
function gi() {
  for (var e = 0; e < Hl.length; e++)
    Hl[e]._workInProgressVersionPrimary = null;
  Hl.length = 0;
}
var _r = Xe.ReactCurrentDispatcher,
  Bl = Xe.ReactCurrentBatchConfig,
  zn = 0,
  $ = null,
  X = null,
  J = null,
  Jr = !1,
  Tt = !1,
  Kt = 0,
  ef = 0;
function re() {
  throw Error(g(321));
}
function xi(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Ie(e[t], n[t])) return !1;
  return !0;
}
function wi(e, n, t, r, l, o) {
  if (
    ((zn = o),
    ($ = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? lf : of),
    (e = t(r, l)),
    Tt)
  ) {
    o = 0;
    do {
      if (((Tt = !1), (Kt = 0), 25 <= o)) throw Error(g(301));
      (o += 1),
        (J = X = null),
        (n.updateQueue = null),
        (_r.current = sf),
        (e = t(r, l));
    } while (Tt);
  }
  if (
    ((_r.current = qr),
    (n = X !== null && X.next !== null),
    (zn = 0),
    (J = X = $ = null),
    (Jr = !1),
    n)
  )
    throw Error(g(300));
  return e;
}
function Si() {
  var e = Kt !== 0;
  return (Kt = 0), e;
}
function Ae() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? ($.memoizedState = J = e) : (J = J.next = e), J;
}
function Pe() {
  if (X === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var n = J === null ? $.memoizedState : J.next;
  if (n !== null) (J = n), (X = e);
  else {
    if (e === null) throw Error(g(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? ($.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Vl(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (t.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      d = o;
    do {
      var v = d.lane;
      if ((zn & v) === v)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (i = r)) : (a = a.next = m),
          ($.lanes |= v),
          (Rn |= v);
      }
      d = d.next;
    } while (d !== null && d !== o);
    a === null ? (i = r) : (a.next = u),
      Ie(r, n.memoizedState) || (fe = !0),
      (n.memoizedState = r),
      (n.baseState = i),
      (n.baseQueue = a),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), ($.lanes |= o), (Rn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function $l(e) {
  var n = Pe(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ie(o, n.memoizedState) || (fe = !0),
      (n.memoizedState = o),
      n.baseQueue === null && (n.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, r];
}
function da() {}
function fa(e, n) {
  var t = $,
    r = Pe(),
    l = n(),
    o = !Ie(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    ki(ma.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Gt(9, ha.bind(null, t, r, l, n), void 0, null),
      q === null)
    )
      throw Error(g(349));
    zn & 30 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = $.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        ($.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ha(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), va(n) && ya(e);
}
function ma(e, n, t) {
  return t(function () {
    va(n) && ya(e);
  });
}
function va(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Ie(e, t);
  } catch {
    return !0;
  }
}
function ya(e) {
  var n = Ye(e, 1);
  n !== null && Le(n, e, 1, -1);
}
function Cs(e) {
  var n = Ae();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = rf.bind(null, $, e)),
    [n.memoizedState, e]
  );
}
function Gt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = $.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        ($.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ga() {
  return Pe().memoizedState;
}
function Tr(e, n, t, r) {
  var l = Ae();
  ($.flags |= e),
    (l.memoizedState = Gt(1 | n, t, void 0, r === void 0 ? null : r));
}
function fl(e, n, t, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && xi(r, i.deps))) {
      l.memoizedState = Gt(n, t, o, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Gt(1 | n, t, o, r));
}
function Ns(e, n) {
  return Tr(8390656, 8, e, n);
}
function ki(e, n) {
  return fl(2048, 8, e, n);
}
function xa(e, n) {
  return fl(4, 2, e, n);
}
function wa(e, n) {
  return fl(4, 4, e, n);
}
function Sa(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function ka(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), fl(4, 4, Sa.bind(null, n, e), t)
  );
}
function ji() {}
function ja(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xi(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ca(e, n) {
  var t = Pe();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xi(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Na(e, n, t) {
  return zn & 21
    ? (Ie(t, n) || ((t = _u()), ($.lanes |= t), (Rn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = t));
}
function nf(e, n) {
  var t = A;
  (A = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), n();
  } finally {
    (A = t), (Bl.transition = r);
  }
}
function Ea() {
  return Pe().memoizedState;
}
function tf(e, n, t) {
  var r = dn(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pa(e))
  )
    _a(n, t);
  else if (((t = la(e, n, t, r)), t !== null)) {
    var l = ue();
    Le(t, e, r, l), Ta(t, n, r);
  }
}
function rf(e, n, t) {
  var r = dn(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Pa(e)) _a(n, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = n.lastRenderedReducer), o !== null)
    )
      try {
        var i = n.lastRenderedState,
          u = o(i, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ie(u, i))) {
          var a = n.interleaved;
          a === null
            ? ((l.next = l), hi(n))
            : ((l.next = a.next), (a.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = la(e, n, l, r)),
      t !== null && ((l = ue()), Le(t, e, r, l), Ta(t, n, r));
  }
}
function Pa(e) {
  var n = e.alternate;
  return e === $ || (n !== null && n === $);
}
function _a(e, n) {
  Tt = Jr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function Ta(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), ei(e, t);
  }
}
var qr = {
    readContext: Ee,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  lf = {
    readContext: Ee,
    useCallback: function (e, n) {
      return (Ae().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ee,
    useEffect: Ns,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        Tr(4194308, 4, Sa.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return Tr(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Tr(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Ae();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = Ae();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = tf.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Ae();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Cs,
    useDebugValue: ji,
    useDeferredValue: function (e) {
      return (Ae().memoizedState = e);
    },
    useTransition: function () {
      var e = Cs(!1),
        n = e[0];
      return (e = nf.bind(null, e[1])), (Ae().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = $,
        l = Ae();
      if (B) {
        if (t === void 0) throw Error(g(407));
        t = t();
      } else {
        if (((t = n()), q === null)) throw Error(g(349));
        zn & 30 || pa(r, n, t);
      }
      l.memoizedState = t;
      var o = { value: t, getSnapshot: n };
      return (
        (l.queue = o),
        Ns(ma.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gt(9, ha.bind(null, r, o, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = Ae(),
        n = q.identifierPrefix;
      if (B) {
        var t = $e,
          r = Ve;
        (t = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Kt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = ef++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: Ee,
    useCallback: ja,
    useContext: Ee,
    useEffect: ki,
    useImperativeHandle: ka,
    useInsertionEffect: xa,
    useLayoutEffect: wa,
    useMemo: Ca,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Yt);
    },
    useDebugValue: ji,
    useDeferredValue: function (e) {
      var n = Pe();
      return Na(n, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: da,
    useSyncExternalStore: fa,
    useId: Ea,
    unstable_isNewReconciler: !1,
  },
  sf = {
    readContext: Ee,
    useCallback: ja,
    useContext: Ee,
    useEffect: ki,
    useImperativeHandle: ka,
    useInsertionEffect: xa,
    useLayoutEffect: wa,
    useMemo: Ca,
    useReducer: $l,
    useRef: ga,
    useState: function () {
      return $l(Yt);
    },
    useDebugValue: ji,
    useDeferredValue: function (e) {
      var n = Pe();
      return X === null ? (n.memoizedState = e) : Na(n, X.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Yt)[0],
        n = Pe().memoizedState;
      return [e, n];
    },
    useMutableSource: da,
    useSyncExternalStore: fa,
    useId: Ea,
    unstable_isNewReconciler: !1,
  };
function ot(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Ic(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Wl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function _o(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var uf = typeof WeakMap == "function" ? WeakMap : Map;
function za(e, n, t) {
  (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      el || ((el = !0), (Fo = r)), _o(e, n);
    }),
    t
  );
}
function Ra(e, n, t) {
  (t = We(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        _o(e, n);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        _o(e, n),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var i = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    t
  );
}
function Es(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uf();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = kf.bind(null, e, n, t)), n.then(e, e));
}
function Ps(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _s(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = We(-1, 1)), (n.tag = 2), an(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var af = Xe.ReactCurrentOwner,
  fe = !1;
function se(e, n, t, r) {
  n.child = e === null ? aa(n, null, t, r) : rt(n, e.child, t, r);
}
function Ts(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return (
    qn(n, l),
    (r = wi(e, n, t, r, o, l)),
    (t = Si()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : (B && t && ui(n), (n.flags |= 1), se(e, n, r, l), n.child)
  );
}
function zs(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Ri(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), Ma(e, n, o, r, l))
      : ((e = Lr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ht), t(i, r) && e.ref === n.ref)
    )
      return Ge(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = fn(o, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ma(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ht(o, r) && e.ref === n.ref)
      if (((fe = !1), (n.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (n.lanes = e.lanes), Ge(e, n, l);
  }
  return To(e, n, t, r, l);
}
function La(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(Yn, ve),
        (ve |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          O(Yn, ve),
          (ve |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : t),
        O(Yn, ve),
        (ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t),
      O(Yn, ve),
      (ve |= r);
  return se(e, n, l, t), n.child;
}
function Ia(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function To(e, n, t, r, l) {
  var o = he(t) ? _n : ie.current;
  return (
    (o = nt(n, o)),
    qn(n, l),
    (t = wi(e, n, t, r, o, l)),
    (r = Si()),
    e !== null && !fe
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, n, l))
      : (B && r && ui(n), (n.flags |= 1), se(e, n, t, l), n.child)
  );
}
function Rs(e, n, t, r, l) {
  if (he(t)) {
    var o = !0;
    Wr(n);
  } else o = !1;
  if ((qn(n, l), n.stateNode === null))
    zr(e, n), sa(n, t, r), Po(n, t, r, l), (r = !0);
  else if (e === null) {
    var i = n.stateNode,
      u = n.memoizedProps;
    i.props = u;
    var a = i.context,
      d = t.contextType;
    typeof d == "object" && d !== null
      ? (d = Ee(d))
      : ((d = he(t) ? _n : ie.current), (d = nt(n, d)));
    var v = t.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== d) && ks(n, i, r, d)),
      (be = !1);
    var h = n.memoizedState;
    (i.state = h),
      Xr(n, r, i, l),
      (a = n.memoizedState),
      u !== r || h !== a || pe.current || be
        ? (typeof v == "function" && (Eo(n, t, v, r), (a = n.memoizedState)),
          (u = be || Ss(n, t, u, r, h, a, d))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (i = n.stateNode),
      oa(e, n),
      (u = n.memoizedProps),
      (d = n.type === n.elementType ? u : Te(n.type, u)),
      (i.props = d),
      (m = n.pendingProps),
      (h = i.context),
      (a = t.contextType),
      typeof a == "object" && a !== null
        ? (a = Ee(a))
        : ((a = he(t) ? _n : ie.current), (a = nt(n, a)));
    var x = t.getDerivedStateFromProps;
    (v =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || h !== a) && ks(n, i, r, a)),
      (be = !1),
      (h = n.memoizedState),
      (i.state = h),
      Xr(n, r, i, l);
    var w = n.memoizedState;
    u !== m || h !== w || pe.current || be
      ? (typeof x == "function" && (Eo(n, t, x, r), (w = n.memoizedState)),
        (d = be || Ss(n, t, d, r, h, w, a) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return zo(e, n, t, r, o, l);
}
function zo(e, n, t, r, l, o) {
  Ia(e, n);
  var i = (n.flags & 128) !== 0;
  if (!r && !i) return l && vs(n, t, !1), Ge(e, n, o);
  (r = n.stateNode), (af.current = n);
  var u =
    i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && i
      ? ((n.child = rt(n, e.child, null, o)), (n.child = rt(n, null, u, o)))
      : se(e, n, u, o),
    (n.memoizedState = r.state),
    l && vs(n, t, !0),
    n.child
  );
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext
    ? ms(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && ms(e, n.context, !1),
    vi(e, n.containerInfo);
}
function Ms(e, n, t, r, l) {
  return tt(), ci(l), (n.flags |= 256), se(e, n, t, r), n.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Aa(e, n, t) {
  var r = n.pendingProps,
    l = V.current,
    o = !1,
    i = (n.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    O(V, l & 1),
    e === null)
  )
    return (
      Co(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = n.mode),
              (o = n.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ml(i, r, 0, null)),
              (e = Pn(e, r, t, null)),
              (o.return = n),
              (e.return = n),
              (o.sibling = e),
              (n.child = o),
              (n.child.memoizedState = Mo(t)),
              (n.memoizedState = Ro),
              e)
            : Ci(n, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return cf(e, n, i, r, u, l, t);
  if (o) {
    (o = r.fallback), (i = n.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (n.deletions = null))
        : ((r = fn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = fn(u, o)) : ((o = Pn(o, i, t, null)), (o.flags |= 2)),
      (o.return = n),
      (r.return = n),
      (r.sibling = o),
      (n.child = r),
      (r = o),
      (o = n.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Mo(t)
          : {
              baseLanes: i.baseLanes | t,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~t),
      (n.memoizedState = Ro),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = fn(o, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function Ci(e, n) {
  return (
    (n = ml({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function gr(e, n, t, r) {
  return (
    r !== null && ci(r),
    rt(n, e.child, null, t),
    (e = Ci(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function cf(e, n, t, r, l, o, i) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Wl(Error(g(422)))), gr(e, n, i, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((o = r.fallback),
        (l = n.mode),
        (r = ml({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Pn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = n),
        (o.return = n),
        (r.sibling = o),
        (n.child = r),
        n.mode & 1 && rt(n, e.child, null, i),
        (n.child.memoizedState = Mo(i)),
        (n.memoizedState = Ro),
        o);
  if (!(n.mode & 1)) return gr(e, n, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(g(419))), (r = Wl(o, r, void 0)), gr(e, n, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Le(r, e, l, -1));
    }
    return zi(), (r = Wl(Error(g(421)))), gr(e, n, i, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = jf.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = o.treeContext),
      (ye = un(l.nextSibling)),
      (ge = n),
      (B = !0),
      (Re = null),
      e !== null &&
        ((ke[je++] = Ve),
        (ke[je++] = $e),
        (ke[je++] = Tn),
        (Ve = e.id),
        ($e = e.overflow),
        (Tn = n)),
      (n = Ci(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ls(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), No(e.return, n, t);
}
function Ql(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l));
}
function Oa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((se(e, n, r.children, t), (r = V.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ls(e, t, n);
        else if (e.tag === 19) Ls(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O(V, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Zr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Ql(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Ql(n, !0, t, null, o);
        break;
      case "together":
        Ql(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ge(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Rn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(g(153));
  if (n.child !== null) {
    for (
      e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = fn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function df(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), tt();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      he(n.type) && Wr(n);
      break;
    case 4:
      vi(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      O(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(V, V.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Aa(e, n, t)
          : (O(V, V.current & 1),
            (e = Ge(e, n, t)),
            e !== null ? e.sibling : null);
      O(V, V.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Oa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        O(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), La(e, n, t);
  }
  return Ge(e, n, t);
}
var Fa, Lo, Ua, Ha;
Fa = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Lo = function () {};
Ua = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Nn(Ue.current);
    var o = null;
    switch (t) {
      case "input":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      case "select":
        (l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = ro(e, l)), (r = ro(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vr);
    }
    oo(t, r);
    var i;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Lt.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var a = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && a !== u && (a != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (t || (t = {}), (t[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (t || (t = {}), (t[i] = a[i]));
          } else t || (o || (o = []), o.push(d, t)), (t = a);
        else
          d === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(d, a))
            : d === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(d, "" + a)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Lt.hasOwnProperty(d)
                ? (a != null && d === "onScroll" && F("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(d, a));
    }
    t && (o = o || []).push("style", t);
    var d = o;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Ha = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function gt(e, n) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function ff(e, n, t) {
  var r = n.pendingProps;
  switch ((ai(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(n), null;
    case 1:
      return he(n.type) && $r(), le(n), null;
    case 3:
      return (
        (r = n.stateNode),
        lt(),
        U(pe),
        U(ie),
        gi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Re !== null && (Bo(Re), (Re = null)))),
        Lo(e, n),
        le(n),
        null
      );
    case 5:
      yi(n);
      var l = Nn(Qt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        Ua(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return le(n), null;
        }
        if (((e = Nn(Ue.current)), vr(n))) {
          (r = n.stateNode), (t = n.type);
          var o = n.memoizedProps;
          switch (((r[Oe] = n), (r[$t] = o), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jt.length; l++) F(jt[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F("error", r), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              Vi(r, o), F("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                F("invalid", r);
              break;
            case "textarea":
              Wi(r, o), F("invalid", r);
          }
          oo(t, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      mr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Lt.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  F("scroll", r);
            }
          switch (t) {
            case "input":
              sr(r), $i(r, o, !0);
              break;
            case "textarea":
              sr(r), Qi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = pu(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(t, { is: r.is }))
                : ((e = i.createElement(t)),
                  t === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, t)),
            (e[Oe] = n),
            (e[$t] = r),
            Fa(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((i = io(t, r)), t)) {
              case "dialog":
                F("cancel", e), F("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jt.length; l++) F(jt[l], e);
                l = r;
                break;
              case "source":
                F("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                F("error", e), F("load", e), (l = r);
                break;
              case "details":
                F("toggle", e), (l = r);
                break;
              case "input":
                Vi(e, r), (l = eo(e, r)), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  F("invalid", e);
                break;
              case "textarea":
                Wi(e, r), (l = ro(e, r)), F("invalid", e);
                break;
              default:
                l = r;
            }
            oo(t, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? vu(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && hu(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (t !== "textarea" || a !== "") && It(e, a)
                    : typeof a == "number" && It(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Lt.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && F("scroll", e)
                      : a != null && Go(e, o, a, i));
              }
            switch (t) {
              case "input":
                sr(e), $i(e, r, !1);
                break;
              case "textarea":
                sr(e), Qi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return le(n), null;
    case 6:
      if (e && n.stateNode != null) Ha(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        if (((t = Nn(Qt.current)), Nn(Ue.current), vr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Oe] = n),
            (o = r.nodeValue !== t) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                mr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Oe] = n),
            (n.stateNode = r);
      }
      return le(n), null;
    case 13:
      if (
        (U(V),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && ye !== null && n.mode & 1 && !(n.flags & 128))
          ra(), tt(), (n.flags |= 98560), (o = !1);
        else if (((o = vr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(g(318));
            if (
              ((o = n.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(g(317));
            o[Oe] = n;
          } else
            tt(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          le(n), (o = !1);
        } else Re !== null && (Bo(Re), (Re = null)), (o = !0);
        if (!o) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || V.current & 1 ? Z === 0 && (Z = 3) : zi())),
          n.updateQueue !== null && (n.flags |= 4),
          le(n),
          null);
    case 4:
      return (
        lt(), Lo(e, n), e === null && Bt(n.stateNode.containerInfo), le(n), null
      );
    case 10:
      return pi(n.type._context), le(n), null;
    case 17:
      return he(n.type) && $r(), le(n), null;
    case 19:
      if ((U(V), (o = n.memoizedState), o === null)) return le(n), null;
      if (((r = (n.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gt(o, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((i = Zr(e)), i !== null)) {
                for (
                  n.flags |= 128,
                    gt(o, !1),
                    r = i.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (o = t),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return O(V, (V.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Y() > it &&
            ((n.flags |= 128), (r = !0), gt(o, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zr(i)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              gt(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !B)
            )
              return le(n), null;
          } else
            2 * Y() - o.renderingStartTime > it &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), gt(o, !1), (n.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = n.child), (n.child = i))
          : ((t = o.last),
            t !== null ? (t.sibling = i) : (n.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((n = o.tail),
          (o.rendering = n),
          (o.tail = n.sibling),
          (o.renderingStartTime = Y()),
          (n.sibling = null),
          (t = V.current),
          O(V, r ? (t & 1) | 2 : t & 1),
          n)
        : (le(n), null);
    case 22:
    case 23:
      return (
        Ti(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? ve & 1073741824 && (le(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : le(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, n.tag));
}
function pf(e, n) {
  switch ((ai(n), n.tag)) {
    case 1:
      return (
        he(n.type) && $r(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        lt(),
        U(pe),
        U(ie),
        gi(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return yi(n), null;
    case 13:
      if ((U(V), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(g(340));
        tt();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return U(V), null;
    case 4:
      return lt(), null;
    case 10:
      return pi(n.type._context), null;
    case 22:
    case 23:
      return Ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1,
  oe = !1,
  hf = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Kn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        Q(e, n, r);
      }
    else t.current = null;
}
function Io(e, n, t) {
  try {
    t();
  } catch (r) {
    Q(e, n, r);
  }
}
var Is = !1;
function mf(e, n) {
  if (((yo = Ur), (e = Wu()), si(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            d = 0,
            v = 0,
            m = e,
            h = null;
          n: for (;;) {
            for (
              var x;
              m !== t || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (h = m), (m = x);
            for (;;) {
              if (m === e) break n;
              if (
                (h === t && ++d === l && (u = i),
                h === o && ++v === r && (a = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = x;
          }
          t = u === -1 || a === -1 ? null : { start: u, end: a };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (go = { focusedElem: e, selectionRange: t }, Ur = !1, P = n; P !== null; )
    if (((n = P), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (P = e);
    else
      for (; P !== null; ) {
        n = P;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    T = w.memoizedState,
                    f = n.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? S : Te(n.type, S),
                      T
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          Q(n, n.return, y);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (P = e);
          break;
        }
        P = n.return;
      }
  return (w = Is), (Is = !1), w;
}
function zt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Io(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pl(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Do(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ba(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ba(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Oe], delete n[$t], delete n[So], delete n[Zd], delete n[Jd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Va(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ao(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ao(e, n, t), e = e.sibling; e !== null; ) Ao(e, n, t), (e = e.sibling);
}
function Oo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oo(e, n, t), e = e.sibling; e !== null; ) Oo(e, n, t), (e = e.sibling);
}
var b = null,
  ze = !1;
function Je(e, n, t) {
  for (t = t.child; t !== null; ) $a(e, n, t), (t = t.sibling);
}
function $a(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(ol, t);
    } catch {}
  switch (t.tag) {
    case 5:
      oe || Kn(t, n);
    case 6:
      var r = b,
        l = ze;
      (b = null),
        Je(e, n, t),
        (b = r),
        (ze = l),
        b !== null &&
          (ze
            ? ((e = b),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : b.removeChild(t.stateNode));
      break;
    case 18:
      b !== null &&
        (ze
          ? ((e = b),
            (t = t.stateNode),
            e.nodeType === 8
              ? Fl(e.parentNode, t)
              : e.nodeType === 1 && Fl(e, t),
            Ft(e))
          : Fl(b, t.stateNode));
      break;
    case 4:
      (r = b),
        (l = ze),
        (b = t.stateNode.containerInfo),
        (ze = !0),
        Je(e, n, t),
        (b = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !oe &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Io(t, n, i),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, n, t);
      break;
    case 1:
      if (
        !oe &&
        (Kn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Q(t, n, u);
        }
      Je(e, n, t);
      break;
    case 21:
      Je(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((oe = (r = oe) || t.memoizedState !== null), Je(e, n, t), (oe = r))
        : Je(e, n, t);
      break;
    default:
      Je(e, n, t);
  }
}
function As(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new hf()),
      n.forEach(function (r) {
        var l = Cf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function _e(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e,
          i = n,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (ze = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(g(160));
        $a(o, i, l), (b = null), (ze = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (d) {
        Q(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_e(n, e), De(e), r & 4)) {
        try {
          zt(3, e, e.return), pl(3, e);
        } catch (S) {
          Q(e, e.return, S);
        }
        try {
          zt(5, e, e.return);
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 1:
      _e(n, e), De(e), r & 512 && t !== null && Kn(t, t.return);
      break;
    case 5:
      if (
        (_e(n, e),
        De(e),
        r & 512 && t !== null && Kn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          It(l, "");
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && du(l, o),
              io(u, i);
            var d = io(u, o);
            for (i = 0; i < a.length; i += 2) {
              var v = a[i],
                m = a[i + 1];
              v === "style"
                ? vu(l, m)
                : v === "dangerouslySetInnerHTML"
                ? hu(l, m)
                : v === "children"
                ? It(l, m)
                : Go(l, v, m, d);
            }
            switch (u) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                fu(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Gn(l, !!o.multiple, x, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gn(l, !!o.multiple, o.defaultValue, !0)
                      : Gn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[$t] = o;
          } catch (S) {
            Q(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((_e(n, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          Q(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (_e(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Ft(n.containerInfo);
        } catch (S) {
          Q(e, e.return, S);
        }
      break;
    case 4:
      _e(n, e), De(e);
      break;
    case 13:
      _e(n, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Pi = Y())),
        r & 4 && As(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((oe = (d = oe) || v), _e(n, e), (oe = d)) : _e(n, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (P = e, v = e.child; v !== null; ) {
            for (m = P = v; P !== null; ) {
              switch (((h = P), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zt(4, h, h.return);
                  break;
                case 1:
                  Kn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (t = h.return);
                    try {
                      (n = r),
                        (w.props = n.memoizedProps),
                        (w.state = n.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      Q(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Kn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Fs(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (P = x)) : Fs(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  d
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (a = m.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = mu("display", i)));
              } catch (S) {
                Q(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (S) {
                Q(e, e.return, S);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      _e(n, e), De(e), r & 4 && As(e);
      break;
    case 21:
      break;
    default:
      _e(n, e), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Va(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (It(l, ""), (r.flags &= -33));
          var o = Ds(e);
          Oo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ds(e);
          Ao(e, u, i);
          break;
        default:
          throw Error(g(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function vf(e, n, t) {
  (P = e), Qa(e);
}
function Qa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || xr;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || oe;
        u = xr;
        var d = oe;
        if (((xr = i), (oe = a) && !d))
          for (P = l; P !== null; )
            (i = P),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Us(l)
                : a !== null
                ? ((a.return = i), (P = a))
                : Us(l);
        for (; o !== null; ) (P = o), Qa(o), (o = o.sibling);
        (P = l), (xr = u), (oe = d);
      }
      Os(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : Os(e);
  }
}
function Os(e) {
  for (; P !== null; ) {
    var n = P;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              oe || pl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !oe)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Te(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = n.updateQueue;
              o !== null && ws(n, o, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                ws(n, i, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var a = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && t.focus();
                    break;
                  case "img":
                    a.src && (t.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Ft(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        oe || (n.flags & 512 && Do(n));
      } catch (h) {
        Q(n, n.return, h);
      }
    }
    if (n === e) {
      P = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (P = t);
      break;
    }
    P = n.return;
  }
}
function Fs(e) {
  for (; P !== null; ) {
    var n = P;
    if (n === e) {
      P = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (P = t);
      break;
    }
    P = n.return;
  }
}
function Us(e) {
  for (; P !== null; ) {
    var n = P;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            pl(4, n);
          } catch (a) {
            Q(n, t, a);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(n, l, a);
            }
          }
          var o = n.return;
          try {
            Do(n);
          } catch (a) {
            Q(n, o, a);
          }
          break;
        case 5:
          var i = n.return;
          try {
            Do(n);
          } catch (a) {
            Q(n, i, a);
          }
      }
    } catch (a) {
      Q(n, n.return, a);
    }
    if (n === e) {
      P = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (P = u);
      break;
    }
    P = n.return;
  }
}
var yf = Math.ceil,
  br = Xe.ReactCurrentDispatcher,
  Ni = Xe.ReactCurrentOwner,
  Ne = Xe.ReactCurrentBatchConfig,
  D = 0,
  q = null,
  G = null,
  ee = 0,
  ve = 0,
  Yn = vn(0),
  Z = 0,
  Xt = null,
  Rn = 0,
  hl = 0,
  Ei = 0,
  Rt = null,
  de = null,
  Pi = 0,
  it = 1 / 0,
  He = null,
  el = !1,
  Fo = null,
  cn = null,
  wr = !1,
  rn = null,
  nl = 0,
  Mt = 0,
  Uo = null,
  Rr = -1,
  Mr = 0;
function ue() {
  return D & 6 ? Y() : Rr !== -1 ? Rr : (Rr = Y());
}
function dn(e) {
  return e.mode & 1
    ? D & 2 && ee !== 0
      ? ee & -ee
      : bd.transition !== null
      ? (Mr === 0 && (Mr = _u()), Mr)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Du(e.type))),
        e)
    : 1;
}
function Le(e, n, t, r) {
  if (50 < Mt) throw ((Mt = 0), (Uo = null), Error(g(185)));
  Jt(e, t, r),
    (!(D & 2) || e !== q) &&
      (e === q && (!(D & 2) && (hl |= t), Z === 4 && nn(e, ee)),
      me(e, r),
      t === 1 && D === 0 && !(n.mode & 1) && ((it = Y() + 500), cl && yn()));
}
function me(e, n) {
  var t = e.callbackNode;
  bc(e, n);
  var r = Fr(e, e === q ? ee : 0);
  if (r === 0)
    t !== null && Gi(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Gi(t), n === 1))
      e.tag === 0 ? qd(Hs.bind(null, e)) : ea(Hs.bind(null, e)),
        Gd(function () {
          !(D & 6) && yn();
        }),
        (t = null);
    else {
      switch (Tu(r)) {
        case 1:
          t = bo;
          break;
        case 4:
          t = Eu;
          break;
        case 16:
          t = Or;
          break;
        case 536870912:
          t = Pu;
          break;
        default:
          t = Or;
      }
      t = ba(t, Ka.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Ka(e, n) {
  if (((Rr = -1), (Mr = 0), D & 6)) throw Error(g(327));
  var t = e.callbackNode;
  if (bn() && e.callbackNode !== t) return null;
  var r = Fr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = tl(e, r);
  else {
    n = r;
    var l = D;
    D |= 2;
    var o = Ga();
    (q !== e || ee !== n) && ((He = null), (it = Y() + 500), En(e, n));
    do
      try {
        wf();
        break;
      } catch (u) {
        Ya(e, u);
      }
    while (1);
    fi(),
      (br.current = o),
      (D = l),
      G !== null ? (n = 0) : ((q = null), (ee = 0), (n = Z));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = fo(e)), l !== 0 && ((r = l), (n = Ho(e, l)))), n === 1)
    )
      throw ((t = Xt), En(e, 0), nn(e, r), me(e, Y()), t);
    if (n === 6) nn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !gf(l) &&
          ((n = tl(e, r)),
          n === 2 && ((o = fo(e)), o !== 0 && ((r = o), (n = Ho(e, o)))),
          n === 1))
      )
        throw ((t = Xt), En(e, 0), nn(e, r), me(e, Y()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          kn(e, de, He);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((n = Pi + 500 - Y()), 10 < n))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = wo(kn.bind(null, e, de, He), n);
            break;
          }
          kn(e, de, He);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            (o = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wo(kn.bind(null, e, de, He), r);
            break;
          }
          kn(e, de, He);
          break;
        case 5:
          kn(e, de, He);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Y()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function Ho(e, n) {
  var t = Rt;
  return (
    e.current.memoizedState.isDehydrated && (En(e, n).flags |= 256),
    (e = tl(e, n)),
    e !== 2 && ((n = de), (de = t), n !== null && Bo(n)),
    e
  );
}
function Bo(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function gf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function nn(e, n) {
  for (
    n &= ~Ei,
      n &= ~hl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Me(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Hs(e) {
  if (D & 6) throw Error(g(327));
  bn();
  var n = Fr(e, 0);
  if (!(n & 1)) return me(e, Y()), null;
  var t = tl(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = fo(e);
    r !== 0 && ((n = r), (t = Ho(e, r)));
  }
  if (t === 1) throw ((t = Xt), En(e, 0), nn(e, n), me(e, Y()), t);
  if (t === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    kn(e, de, He),
    me(e, Y()),
    null
  );
}
function _i(e, n) {
  var t = D;
  D |= 1;
  try {
    return e(n);
  } finally {
    (D = t), D === 0 && ((it = Y() + 500), cl && yn());
  }
}
function Mn(e) {
  rn !== null && rn.tag === 0 && !(D & 6) && bn();
  var n = D;
  D |= 1;
  var t = Ne.transition,
    r = A;
  try {
    if (((Ne.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Ne.transition = t), (D = n), !(D & 6) && yn();
  }
}
function Ti() {
  (ve = Yn.current), U(Yn);
}
function En(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Yd(t)), G !== null))
    for (t = G.return; t !== null; ) {
      var r = t;
      switch ((ai(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          lt(), U(pe), U(ie), gi();
          break;
        case 5:
          yi(r);
          break;
        case 4:
          lt();
          break;
        case 13:
          U(V);
          break;
        case 19:
          U(V);
          break;
        case 10:
          pi(r.type._context);
          break;
        case 22:
        case 23:
          Ti();
      }
      t = t.return;
    }
  if (
    ((q = e),
    (G = e = fn(e.current, null)),
    (ee = ve = n),
    (Z = 0),
    (Xt = null),
    (Ei = hl = Rn = 0),
    (de = Rt = null),
    Cn !== null)
  ) {
    for (n = 0; n < Cn.length; n++)
      if (((t = Cn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          o = t.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        t.pending = r;
      }
    Cn = null;
  }
  return e;
}
function Ya(e, n) {
  do {
    var t = G;
    try {
      if ((fi(), (_r.current = qr), Jr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Jr = !1;
      }
      if (
        ((zn = 0),
        (J = X = $ = null),
        (Tt = !1),
        (Kt = 0),
        (Ni.current = null),
        t === null || t.return === null)
      ) {
        (Z = 1), (Xt = n), (G = null);
        break;
      }
      e: {
        var o = e,
          i = t.return,
          u = t,
          a = n;
        if (
          ((n = ee),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var d = a,
            v = u,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h
              ? ((v.updateQueue = h.updateQueue),
                (v.memoizedState = h.memoizedState),
                (v.lanes = h.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var x = Ps(i);
          if (x !== null) {
            (x.flags &= -257),
              _s(x, i, u, o, n),
              x.mode & 1 && Es(o, d, n),
              (n = x),
              (a = d);
            var w = n.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(a), (n.updateQueue = S);
            } else w.add(a);
            break e;
          } else {
            if (!(n & 1)) {
              Es(o, d, n), zi();
              break e;
            }
            a = Error(g(426));
          }
        } else if (B && u.mode & 1) {
          var T = Ps(i);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              _s(T, i, u, o, n),
              ci(ot(a, u));
            break e;
          }
        }
        (o = a = ot(a, u)),
          Z !== 4 && (Z = 2),
          Rt === null ? (Rt = [o]) : Rt.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (n &= -n), (o.lanes |= n);
              var f = za(o, a, n);
              xs(o, f);
              break e;
            case 1:
              u = a;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (cn === null || !cn.has(p))))
              ) {
                (o.flags |= 65536), (n &= -n), (o.lanes |= n);
                var y = Ra(o, u, n);
                xs(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Za(t);
    } catch (j) {
      (n = j), G === t && t !== null && (G = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Ga() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function zi() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    q === null || (!(Rn & 268435455) && !(hl & 268435455)) || nn(q, ee);
}
function tl(e, n) {
  var t = D;
  D |= 2;
  var r = Ga();
  (q !== e || ee !== n) && ((He = null), En(e, n));
  do
    try {
      xf();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (1);
  if ((fi(), (D = t), (br.current = r), G !== null)) throw Error(g(261));
  return (q = null), (ee = 0), Z;
}
function xf() {
  for (; G !== null; ) Xa(G);
}
function wf() {
  for (; G !== null && !Wc(); ) Xa(G);
}
function Xa(e) {
  var n = qa(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    n === null ? Za(e) : (G = n),
    (Ni.current = null);
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = pf(t, n)), t !== null)) {
        (t.flags &= 32767), (G = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (G = null);
        return;
      }
    } else if (((t = ff(t, n, ve)), t !== null)) {
      G = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      G = n;
      return;
    }
    G = n = e;
  } while (n !== null);
  Z === 0 && (Z = 5);
}
function kn(e, n, t) {
  var r = A,
    l = Ne.transition;
  try {
    (Ne.transition = null), (A = 1), Sf(e, n, t, r);
  } finally {
    (Ne.transition = l), (A = r);
  }
  return null;
}
function Sf(e, n, t, r) {
  do bn();
  while (rn !== null);
  if (D & 6) throw Error(g(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(g(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (ed(e, o),
    e === q && ((G = q = null), (ee = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      wr ||
      ((wr = !0),
      ba(Or, function () {
        return bn(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var i = A;
    A = 1;
    var u = D;
    (D |= 4),
      (Ni.current = null),
      mf(e, t),
      Wa(t, e),
      Hd(go),
      (Ur = !!yo),
      (go = yo = null),
      (e.current = t),
      vf(t),
      Qc(),
      (D = u),
      (A = i),
      (Ne.transition = o);
  } else e.current = t;
  if (
    (wr && ((wr = !1), (rn = e), (nl = l)),
    (o = e.pendingLanes),
    o === 0 && (cn = null),
    Gc(t.stateNode),
    me(e, Y()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (el) throw ((el = !1), (e = Fo), (Fo = null), e);
  return (
    nl & 1 && e.tag !== 0 && bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Uo ? Mt++ : ((Mt = 0), (Uo = e))) : (Mt = 0),
    yn(),
    null
  );
}
function bn() {
  if (rn !== null) {
    var e = Tu(nl),
      n = Ne.transition,
      t = A;
    try {
      if (((Ne.transition = null), (A = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (nl = 0), D & 6)) throw Error(g(331));
        var l = D;
        for (D |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var d = u[a];
                for (P = d; P !== null; ) {
                  var v = P;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zt(8, v, o);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (P = m);
                  else
                    for (; P !== null; ) {
                      v = P;
                      var h = v.sibling,
                        x = v.return;
                      if ((Ba(v), v === d)) {
                        P = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (P = h);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var T = S.sibling;
                    (S.sibling = null), (S = T);
                  } while (S !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zt(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (P = f);
                break e;
              }
              P = o.return;
            }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          i = P;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (P = p);
          else
            e: for (i = c; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pl(9, u);
                  }
                } catch (j) {
                  Q(u, u.return, j);
                }
              if (u === i) {
                P = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (P = y);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((D = l), yn(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(ol, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = t), (Ne.transition = n);
    }
  }
  return !1;
}
function Bs(e, n, t) {
  (n = ot(t, n)),
    (n = za(e, n, 1)),
    (e = an(e, n, 1)),
    (n = ue()),
    e !== null && (Jt(e, 1, n), me(e, n));
}
function Q(e, n, t) {
  if (e.tag === 3) Bs(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Bs(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = ot(t, e)),
            (e = Ra(n, e, 1)),
            (n = an(n, e, 1)),
            (e = ue()),
            n !== null && (Jt(n, 1, e), me(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function kf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = ue()),
    (e.pingedLanes |= e.suspendedLanes & t),
    q === e &&
      (ee & t) === t &&
      (Z === 4 || (Z === 3 && (ee & 130023424) === ee && 500 > Y() - Pi)
        ? En(e, 0)
        : (Ei |= t)),
    me(e, n);
}
function Ja(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = cr), (cr <<= 1), !(cr & 130023424) && (cr = 4194304))
      : (n = 1));
  var t = ue();
  (e = Ye(e, n)), e !== null && (Jt(e, n, t), me(e, t));
}
function jf(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ja(e, t);
}
function Cf(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (fe = !1), df(e, n, t);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), B && n.flags & 1048576 && na(n, Kr, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      zr(e, n), (e = n.pendingProps);
      var l = nt(n, ie.current);
      qn(n, t), (l = wi(null, n, r, e, l, t));
      var o = Si();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            he(r) ? ((o = !0), Wr(n)) : (o = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            mi(n),
            (l.updater = dl),
            (n.stateNode = l),
            (l._reactInternals = n),
            Po(n, r, e, t),
            (n = zo(null, n, r, !0, o, t)))
          : ((n.tag = 0), B && o && ui(n), se(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (zr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Ef(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            n = To(null, n, r, e, t);
            break e;
          case 1:
            n = Rs(null, n, r, e, t);
            break e;
          case 11:
            n = Ts(null, n, r, e, t);
            break e;
          case 14:
            n = zs(null, n, r, Te(r.type, e), t);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        To(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Rs(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Da(n), e === null)) throw Error(g(387));
        (r = n.pendingProps),
          (o = n.memoizedState),
          (l = o.element),
          oa(e, n),
          Xr(n, r, null, t);
        var i = n.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (n.updateQueue.baseState = o),
            (n.memoizedState = o),
            n.flags & 256)
          ) {
            (l = ot(Error(g(423)), n)), (n = Ms(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = ot(Error(g(424)), n)), (n = Ms(e, n, r, t, l));
            break e;
          } else
            for (
              ye = un(n.stateNode.containerInfo.firstChild),
                ge = n,
                B = !0,
                Re = null,
                t = aa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((tt(), r === l)) {
            n = Ge(e, n, t);
            break e;
          }
          se(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ca(n),
        e === null && Co(n),
        (r = n.type),
        (l = n.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        xo(r, l) ? (i = null) : o !== null && xo(r, o) && (n.flags |= 32),
        Ia(e, n),
        se(e, n, i, t),
        n.child
      );
    case 6:
      return e === null && Co(n), null;
    case 13:
      return Aa(e, n, t);
    case 4:
      return (
        vi(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = rt(n, null, r, t)) : se(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        Ts(e, n, r, l, t)
      );
    case 7:
      return se(e, n, n.pendingProps, t), n.child;
    case 8:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return se(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (o = n.memoizedProps),
          (i = l.value),
          O(Yr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ie(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              n = Ge(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = We(-1, t & -t)), (a.tag = 2);
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (a.next = a)
                          : ((a.next = v.next), (v.next = a)),
                          (d.pending = a);
                      }
                    }
                    (o.lanes |= t),
                      (a = o.alternate),
                      a !== null && (a.lanes |= t),
                      No(o.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(g(341));
                (i.lanes |= t),
                  (u = i.alternate),
                  u !== null && (u.lanes |= t),
                  No(i, t, n),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === n) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        se(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        qn(n, t),
        (l = Ee(l)),
        (r = r(l)),
        (n.flags |= 1),
        se(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Te(r, n.pendingProps)),
        (l = Te(r.type, l)),
        zs(e, n, r, l, t)
      );
    case 15:
      return Ma(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Te(r, l)),
        zr(e, n),
        (n.tag = 1),
        he(r) ? ((e = !0), Wr(n)) : (e = !1),
        qn(n, t),
        sa(n, r, l),
        Po(n, r, l, t),
        zo(null, n, r, !0, e, t)
      );
    case 19:
      return Oa(e, n, t);
    case 22:
      return La(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function ba(e, n) {
  return Nu(e, n);
}
function Nf(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, n, t, r) {
  return new Nf(e, n, t, r);
}
function Ri(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ef(e) {
  if (typeof e == "function") return Ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zo)) return 11;
    if (e === Jo) return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Ce(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Lr(e, n, t, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ri(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case On:
        return Pn(t.children, l, o, n);
      case Xo:
        (i = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = Ce(12, t, n, l | 2)), (e.elementType = Zl), (e.lanes = o), e
        );
      case Jl:
        return (e = Ce(13, t, n, l)), (e.elementType = Jl), (e.lanes = o), e;
      case ql:
        return (e = Ce(19, t, n, l)), (e.elementType = ql), (e.lanes = o), e;
      case uu:
        return ml(t, l, o, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case iu:
              i = 10;
              break e;
            case su:
              i = 9;
              break e;
            case Zo:
              i = 11;
              break e;
            case Jo:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = Ce(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n
  );
}
function Pn(e, n, t, r) {
  return (e = Ce(7, e, r, n)), (e.lanes = t), e;
}
function ml(e, n, t, r) {
  return (
    (e = Ce(22, e, r, n)),
    (e.elementType = uu),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, n, t) {
  return (e = Ce(6, e, null, n)), (e.lanes = t), e;
}
function Yl(e, n, t) {
  return (
    (n = Ce(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Pf(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Mi(e, n, t, r, l, o, i, u, a) {
  return (
    (e = new Pf(e, n, t, u, a)),
    n === 1 ? ((n = 1), o === !0 && (n |= 8)) : (n = 0),
    (o = Ce(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mi(o),
    e
  );
}
function _f(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: An,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ec(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(g(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (he(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (he(t)) return bu(e, t, n);
  }
  return n;
}
function nc(e, n, t, r, l, o, i, u, a) {
  return (
    (e = Mi(t, r, !0, e, l, o, i, u, a)),
    (e.context = ec(null)),
    (t = e.current),
    (r = ue()),
    (l = dn(t)),
    (o = We(r, l)),
    (o.callback = n ?? null),
    an(t, o, l),
    (e.current.lanes = l),
    Jt(e, l, r),
    me(e, r),
    e
  );
}
function vl(e, n, t, r) {
  var l = n.current,
    o = ue(),
    i = dn(l);
  return (
    (t = ec(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = We(o, i)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = an(l, n, i)),
    e !== null && (Le(e, l, i, o), Pr(e, l, i)),
    i
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vs(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Li(e, n) {
  Vs(e, n), (e = e.alternate) && Vs(e, n);
}
function Tf() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ii(e) {
  this._internalRoot = e;
}
yl.prototype.render = Ii.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(g(409));
  vl(e, n, null, null);
};
yl.prototype.unmount = Ii.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    Mn(function () {
      vl(null, e, null, null);
    }),
      (n[Ke] = null);
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Mu();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < en.length && n !== 0 && n < en[t].priority; t++);
    en.splice(t, 0, e), t === 0 && Iu(e);
  }
};
function Di(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $s() {}
function zf(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var d = rl(i);
        o.call(d);
      };
    }
    var i = nc(n, r, e, 0, null, !1, !1, "", $s);
    return (
      (e._reactRootContainer = i),
      (e[Ke] = i.current),
      Bt(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = rl(a);
      u.call(d);
    };
  }
  var a = Mi(e, 0, !1, null, null, !1, !1, "", $s);
  return (
    (e._reactRootContainer = a),
    (e[Ke] = a.current),
    Bt(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      vl(n, a, t, r);
    }),
    a
  );
}
function xl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = rl(i);
        u.call(a);
      };
    }
    vl(n, i, e, l);
  } else i = zf(t, n, e, l, r);
  return rl(i);
}
zu = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 &&
          (ei(n, t | 1), me(n, Y()), !(D & 6) && ((it = Y() + 500), yn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Le(r, e, 1, l);
        }
      }),
        Li(e, 1);
  }
};
ni = function (e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = ue();
      Le(n, e, 134217728, t);
    }
    Li(e, 134217728);
  }
};
Ru = function (e) {
  if (e.tag === 13) {
    var n = dn(e),
      t = Ye(e, n);
    if (t !== null) {
      var r = ue();
      Le(t, e, n, r);
    }
    Li(e, n);
  }
};
Mu = function () {
  return A;
};
Lu = function (e, n) {
  var t = A;
  try {
    return (A = e), n();
  } finally {
    A = t;
  }
};
uo = function (e, n, t) {
  switch (n) {
    case "input":
      if ((no(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = al(r);
            if (!l) throw Error(g(90));
            cu(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      fu(e, t);
      break;
    case "select":
      (n = t.value), n != null && Gn(e, !!t.multiple, n, !1);
  }
};
xu = _i;
wu = Mn;
var Rf = { usingClientEntryPoint: !1, Events: [bt, Bn, al, yu, gu, _i] },
  xt = {
    findFiberByHostInstance: jn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Mf = {
    bundleType: xt.bundleType,
    version: xt.version,
    rendererPackageName: xt.rendererPackageName,
    rendererConfig: xt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ju(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xt.findFiberByHostInstance || Tf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Sr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Sr.isDisabled && Sr.supportsFiber)
    try {
      (ol = Sr.inject(Mf)), (Fe = Sr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf;
we.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Di(n)) throw Error(g(200));
  return _f(e, n, null, t);
};
we.createRoot = function (e, n) {
  if (!Di(e)) throw Error(g(299));
  var t = !1,
    r = "",
    l = tc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Mi(e, 1, !1, null, null, t, !1, r, l)),
    (e[Ke] = n.current),
    Bt(e.nodeType === 8 ? e.parentNode : e),
    new Ii(n)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return (e = ju(n)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return Mn(e);
};
we.hydrate = function (e, n, t) {
  if (!gl(n)) throw Error(g(200));
  return xl(null, e, n, !0, t);
};
we.hydrateRoot = function (e, n, t) {
  if (!Di(e)) throw Error(g(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    o = "",
    i = tc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (n = nc(n, null, e, 1, t ?? null, l, !1, o, i)),
    (e[Ke] = n.current),
    Bt(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new yl(n);
};
we.render = function (e, n, t) {
  if (!gl(n)) throw Error(g(200));
  return xl(null, e, n, !1, t);
};
we.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Mn(function () {
        xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = _i;
we.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!gl(t)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return xl(e, n, t, !1, r);
};
we.version = "18.2.0-next-9e3b772b8-20220608";
function rc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
    } catch (e) {
      console.error(e);
    }
}
rc(), (nu.exports = we);
var Lf = nu.exports,
  Ws = Lf;
(Gl.createRoot = Ws.createRoot), (Gl.hydrateRoot = Ws.hydrateRoot);
const If = ({ showMetaMaskIntro: e, hideQuestionAnswerCard: n }) => {
    const [t, r] = k.useState(0),
      l = [
        {
          question: "What is Ethereum?",
          answer:
            "Ethereum is a decentralized blockchain platform that enables the creation and execution of smart contracts and decentralized applications (DApps). It uses its cryptocurrency called Ether (ETH) for transactions and operates as a global, open-source, and secure computing network.",
        },
        {
          question:
            "How do you store and manage Ethereum and other cryptocurrencies?",
          answer:
            "To store and manage Ethereum and other cryptocurrencies, you can use digital wallets, which come in various forms. Software wallets are apps or programs installed on your device, such as MetaMask or Trust Wallet, Hardware wallets are physical devices like Ledger Nano S or Trezor, offering high security as they store your keys offline.",
        },
        {
          question: "What is the role of a wallet in the Ethereum ecosystem?",
          answer:
            "A wallet in the Ethereum ecosystem serves as a key tool for managing Ethereum-based assets by securely storing private keys. It allows users to send, receive, and monitor Ether and tokens, interfaces with the Ethereum blockchain for smart contract interactions and transaction history, making it a central hub for managing Ethereum holdings.",
        },
        {
          question: "How do you install and set up MetaMask?",
          answer: s.jsxs("div", {
            children: [
              '1)Click on the "Create" button to initiate wallet creation.',
              s.jsx("br", {}),
              '2)Create a strong password for your wallet and click "login ."',
              s.jsx("br", {}),
              "3)MetaMask will generate a 12 or 24-word seed phrase. Write this down and keep it in a safe place. ",
              s.jsx("br", {}),
              "4)You'll be prompted to confirm your seed phrase by selecting the words in the correct order. This step is for verifying your backup.",
              s.jsx("br", {}),
              "5)Your MetaMask wallet is now set up and ready to use.",
              s.jsx("br", {}),
              "6)By default, MetaMask is set to the Ethereum mainnet. You can connect to other networks like (e.g., Ropsten)  by clicking on the network selection button in the top-right corner.",
            ],
          }),
        },
      ],
      o = () => {
        t > 0 && r(t - 1);
      },
      i = () => {
        t < l.length - 1 && r(t + 1);
      },
      u = l[t].question;
    return s.jsxs("div", {
      className: "card qcards",
      children: [
        s.jsxs("div", {
          className: "card-body",
          children: [
            s.jsx("h5", { className: "card-title" }),
            s.jsx("p", { className: "card-text", children: u }),
          ],
        }),
        s.jsx("ul", {
          className: "list-group list-group-flush",
          children: s.jsxs("li", {
            className: "list-group-item",
            children: [s.jsx("strong", {}), " ", l[t].answer],
          }),
        }),
        s.jsxs("div", {
          className: "card-body",
          children: [
            u === "How do you install and set up MetaMask?" &&
              s.jsx("button", {
                className: "btn btn-primary",
                onClick: e,
                children: "Create",
              }),
            s.jsx("button", {
              className: "btn btn-primary ml-2",
              onClick: o,
              children: "Previous",
            }),
            s.jsx("button", {
              className: "btn btn-primary ml-2",
              onClick: i,
              children: "Next",
            }),
          ],
        }),
      ],
    });
  },
  Df = ({ showPasswordComponent: e }) =>
    s.jsxs("div", {
      className: "card introcard",
      children: [
        s.jsxs("div", {
          className: "card-body",
          children: [
            s.jsx("h5", {
              className: "card-title",
              children: "New to MetaMask?",
            }),
            s.jsx("i", {
              className: "fa-solid fa-plus fa-xl",
              style: {
                fontSize: "10rem",
                marginLeft: "80px",
                marginTop: "80px",
              },
            }),
            s.jsx("br", {}),
            s.jsx("p", {
              className: "setup",
              children: "yep,let's get set up!",
            }),
            s.jsx("p", {
              children: "This will create a new wallet and seed pharse",
            }),
            s.jsx("button", {
              className: "btn  btnintro btn-primary",
              onClick: e,
              children: "Create",
            }),
          ],
        }),
        s.jsx("div", { className: "card-body" }),
      ],
    }),
  lc = ({ onNext: e }) => {
    const n = () => {
        const u = [
          "blockchain",
          "crypto",
          "learning",
          "wallet",
          "digital",
          "pow",
          "halla",
          "block",
          "miners",
          "password",
          "bitcoin",
          "pos",
        ];
        for (let a = u.length - 1; a > 0; a--) {
          const d = Math.floor(Math.random() * (a + 1));
          [u[a], u[d]] = [u[d], u[a]];
        }
        return u.join(" ");
      },
      [t, r] = k.useState(n),
      [l, o] = k.useState(!1),
      i = () => {
        o(!0), e(t);
      };
    return s.jsxs("div", {
      className: "card recovery",
      children: [
        s.jsx("div", {
          className: "card-body",
          children: s.jsxs(s.Fragment, {
            children: [
              s.jsx("h5", {
                className: "card-title",
                children: "Secret Recovery Phrase",
              }),
              s.jsx("b", {
                children: s.jsx("p", { className: "pharse", children: t }),
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className: "card-body",
          children: s.jsx("button", {
            className: "btn btnrecovery btn-primary",
            onClick: i,
            children: "Next",
          }),
        }),
      ],
    });
  },
  Af = ({ showLogin: e }) => {
    const [n, t] = k.useState(""),
      [r, l] = k.useState(""),
      [o, i] = k.useState(!1),
      [u, a] = k.useState(""),
      d = () => {
        if (n === "") {
          a("Password cannot be empty");
          return;
        }
        if (r === "") {
          a("Confirm Password cannot be empty");
          return;
        }
        if (n !== r) {
          a("Passwords do not match");
          return;
        }
        a(""), i(!0), e();
      };
    return s.jsxs("div", {
      className: "card login",
      children: [
        s.jsxs("div", {
          className: "card-body",
          children: [
            s.jsx("h5", {
              className: "card-title",
              children: "Enter Password",
            }),
            u && s.jsx("p", { className: "error-message", children: u }),
            s.jsxs("div", {
              className: "form-group",
              children: [
                s.jsx("label", { children: "Password:" }),
                s.jsx("input", {
                  type: "password",
                  className: "form-control",
                  value: n,
                  onChange: (v) => t(v.target.value),
                  required: !0,
                }),
              ],
            }),
            s.jsxs("div", {
              className: "form-group",
              children: [
                s.jsx("label", { children: "Confirm Password:" }),
                s.jsx("input", {
                  type: "password",
                  className: "form-control",
                  value: r,
                  onChange: (v) => l(v.target.value),
                  required: !0,
                }),
              ],
            }),
            s.jsx("button", {
              className: "btn btn-primary",
              onClick: d,
              children: "Login",
            }),
          ],
        }),
        o && s.jsx(lc, {}),
      ],
    });
  },
  Of = ({ onShowDashboardTwo: e }) => {
    const n = [
      {
        question: "How do transactions happen in MetaMask?",
        answer: s.jsxs("div", {
          children: [
            "Metamask facilitates transactions in various ways:",
            s.jsx("br", {}),
            s.jsx("br", {}),
            "Send: A send transaction involves transferring cryptocurrency from your MetaMask wallet to another wallet address.",
            s.jsx("br", {}),
            s.jsx("br", {}),
            "Receive: A receive transaction involves receiving cryptocurrency from another wallet or entity.",
            s.jsx("br", {}),
            s.jsx("br", {}),
            "Buy: A buy transaction involves acquiring cryptocurrency by exchanging fiat currency or another asset.",
            s.jsx("br", {}),
            s.jsx("br", {}),
            "Sell: A sell transaction involves exchanging cryptocurrency for another asset, such as fiat currency or another cryptocurrency.",
            s.jsx("br", {}),
            s.jsx("br", {}),
          ],
        }),
      },
    ];
    return s.jsx("div", {
      className: "card sendcard",
      children: s.jsxs("div", {
        className: "card-body",
        children: [
          s.jsx("p", { className: "card-text", children: n[0].question }),
          s.jsx("p", { className: "card-text", children: n[0].answer }),
          s.jsx("button", {
            className: "btn btnsends btn-primary",
            onClick: e,
            children: "Try Yourself",
          }),
        ],
      }),
    });
  };
function oc({ publicKey: e, privateKey: n, onClose: t }) {
  return s.jsx("div", {
    className: "container mt-5",
    children: s.jsxs("div", {
      id: "accordion",
      children: [
        s.jsxs("div", {
          className: "card",
          children: [
            s.jsx("div", {
              className: "card-header",
              id: "publicKeyHeading",
              children: s.jsx("h2", {
                className: "mb-0",
                children: s.jsx("button", {
                  className: "btn btn-link",
                  "data-toggle": "collapse",
                  "data-target": "#publicKeyCollapse",
                  "aria-expanded": "true",
                  "aria-controls": "publicKeyCollapse",
                  children: "Public Key",
                }),
              }),
            }),
            s.jsx("div", {
              id: "publicKeyCollapse",
              className: "collapse show",
              "aria-labelledby": "publicKeyHeading",
              "data-parent": "#accordion",
              children: s.jsx("div", { className: "card-body", children: e }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "card",
          children: [
            s.jsx("div", {
              className: "card-header",
              id: "privateKeyHeading",
              children: s.jsx("h2", {
                className: "mb-0",
                children: s.jsx("button", {
                  className: "btn btn-link",
                  "data-toggle": "collapse",
                  "data-target": "#privateKeyCollapse",
                  "aria-expanded": "false",
                  "aria-controls": "privateKeyCollapse",
                  children: "Private Key",
                }),
              }),
            }),
            s.jsx("div", {
              id: "privateKeyCollapse",
              className: "collapse",
              "aria-labelledby": "privateKeyHeading",
              "data-parent": "#accordion",
              children: s.jsx("div", { className: "card-body", children: n }),
            }),
            s.jsx("button", {
              className: "btn btn-danger",
              onClick: t,
              children: "Close",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ff({ ethAmount: e, selectedCurrency: n, recipientAddress: t }) {
  const [r, l] = k.useState(!1),
    [o, i] = k.useState(null),
    u = 0.01,
    a = 1e5,
    d = e * a + u,
    v = () => {
      i({ type: "Buy", amount: e, recipientAddress: t }), l(!0);
    },
    m = { display: "flex", justifyContent: "space-between" },
    h = { marginRight: "20px" };
  return s.jsx("div", {
    children: r
      ? s.jsx(nr, { ethAmount: e, recipientAddress: t, transactionData: o })
      : s.jsx("div", {
          className: "card buycard",
          children: s.jsxs("div", {
            className: "card-body",
            children: [
              s.jsx("h5", {
                className: "card-title reviews",
                children: "Review Purchase Details",
              }),
              s.jsxs("div", {
                children: [
                  s.jsxs("p", {
                    style: m,
                    children: [
                      "Amount:  ",
                      s.jsxs("span", {
                        style: h,
                        children: [" ", s.jsxs("b", { children: [e, " ETH"] })],
                      }),
                    ],
                  }),
                  s.jsxs("p", {
                    style: m,
                    children: [
                      "Gas Fee:",
                      s.jsx("span", {
                        style: h,
                        children: s.jsxs("b", { children: [u, " ETH"] }),
                      }),
                      " ",
                    ],
                  }),
                  s.jsxs("p", {
                    style: m,
                    children: [
                      "recipient Address:",
                      s.jsx("span", {
                        style: h,
                        children: s.jsx("b", { children: t }),
                      }),
                    ],
                  }),
                  s.jsxs("p", {
                    style: m,
                    children: [
                      "Price per ETH: ",
                      s.jsx("span", {
                        style: h,
                        children: s.jsxs("b", {
                          children: [a, " ", n, " per ETH"],
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("p", {
                    style: m,
                    children: [
                      "Total Amount Needed:",
                      s.jsx("span", {
                        style: h,
                        children: s.jsxs("b", { children: [d, " ", n] }),
                      }),
                      " ",
                    ],
                  }),
                ],
              }),
              s.jsx("button", {
                className: "btn btnreview btn-primary",
                onClick: v,
                children: "Confirm Purchase",
              }),
            ],
          }),
        }),
  });
}
function Uf({ onAmountSelection: e }) {
  const [n, t] = k.useState(""),
    [r, l] = k.useState("USD"),
    [o, i] = k.useState(!1),
    [u, a] = k.useState(""),
    [d, v] = k.useState(""),
    m = (T) => {
      t(T);
    },
    h = (T) => {
      l(T);
    },
    x = () => n * 1.23,
    w = () => {
      if (u === "") {
        v("Please select a recipient address.");
        return;
      }
      if (n === "" || n <= 0) {
        v(
          "Please enter a valid ETH amount. The amount must be greater than 0."
        );
        return;
      }
      if ((i(!0), n > 0)) {
        const T = x();
        e(n, r, T);
      }
    },
    S = ["USD", "EUR", "GBP", "JPY"];
  return s.jsx("div", {
    children: o
      ? s.jsx(Ff, { ethAmount: n, recipientAddress: u })
      : s.jsx("div", {
          className: "card buycard",
          children: s.jsxs("div", {
            className: "card-body",
            children: [
              d && s.jsx("p", { className: "error-message", children: d }),
              s.jsxs("div", {
                className: "form-group",
                children: [
                  s.jsx("label", { children: "Select Recipient Address:" }),
                  s.jsxs("select", {
                    className: "form-control mb-3",
                    value: u,
                    onChange: (T) => a(T.target.value),
                    required: !0,
                    children: [
                      s.jsx("option", {
                        value: "",
                        children: "Select a recipient address",
                      }),
                      s.jsx("option", {
                        value: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                        children: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                      }),
                      s.jsx("option", {
                        value: "0x742d35Cc6634C0532925a3b844Bc454e4438f44f",
                        children: "0x742d35Cc6634C0532925a3b844Bc454e4438f44f",
                      }),
                      s.jsx("option", {
                        value: "0x742d35Cc6634C05....",
                        children: "0x742d35Cc6634C0532925a3b844Bc454e4438f450",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "form-group",
                children: [
                  s.jsx("label", { children: "Enter ETH Amount:" }),
                  s.jsx("input", {
                    type: "number",
                    step: "0.01",
                    className: "form-control",
                    value: n,
                    onChange: (T) => m(T.target.value),
                    required: !0,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "form-group",
                children: [
                  s.jsx("label", { children: "Select Currency:" }),
                  s.jsx("select", {
                    className: "form-control",
                    value: r,
                    onChange: (T) => h(T.target.value),
                    children: S.map((T) =>
                      s.jsx("option", { value: T, children: T }, T)
                    ),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "form-group",
                children: [
                  s.jsx("label", { children: "Equivalent Amount:" }),
                  s.jsx("input", {
                    type: "text",
                    className: "form-control",
                    value: x(),
                    readOnly: !0,
                  }),
                ],
              }),
              s.jsx("button", {
                className: "btn btn-primary",
                onClick: w,
                children: "Next",
              }),
            ],
          }),
        }),
  });
}
function Hf() {
  const [e, n] = k.useState(!1),
    [t, r] = k.useState(""),
    l = /^[0-9]{12}$/,
    o = () => {
      const i = document.getElementById("fullName").value,
        u = document.getElementById("aadhaarId").value;
      if (i === "") {
        r("Full Name cannot be empty");
        return;
      }
      if (!l.test(u)) {
        r("Invalid Aadhaar ID format. Please enter a 12-digit number.");
        return;
      }
      r(""), n(!0);
    };
  return s.jsx("div", {
    children: e
      ? s.jsx(Uf, {})
      : s.jsx("div", {
          className: "card buycard",
          children: s.jsxs("div", {
            className: "card-body",
            children: [
              t && s.jsx("p", { className: "error-message", children: t }),
              s.jsxs("div", {
                className: "form-group",
                children: [
                  s.jsx("label", { children: "Full Name:" }),
                  s.jsx("input", {
                    type: "text",
                    id: "fullName",
                    className: "form-control",
                    required: !0,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "form-group",
                children: [
                  s.jsx("label", { children: "Aadhaar ID:" }),
                  s.jsx("input", {
                    type: "text",
                    id: "aadhaarId",
                    className: "form-control",
                    required: !0,
                    pattern: "[0-9]{12}",
                    title: "Please enter a 12-digit Aadhaar ID",
                  }),
                ],
              }),
              s.jsx("button", {
                className: "btn btn-primary",
                onClick: o,
                children: "Verify",
              }),
            ],
          }),
        }),
  });
}
function Bf({ onBuy: e }) {
  const [n, t] = k.useState("");
  k.useState("");
  const [r, l] = k.useState(!1),
    [o, i] = k.useState(!1),
    u = () => {
      n && l(!0);
    },
    a = ["Bank Transfer", "Credit/Debit Card", "Cryptocurrency"],
    d = () => {
      i(!o);
    },
    v = () => {
      i(!1);
    };
  return s.jsxs("div", {
    children: [
      r
        ? s.jsx(Hf, {})
        : s.jsx("div", {
            className: "card buycard",
            children: s.jsxs("div", {
              className: "card-body",
              children: [
                s.jsx("i", {
                  className: "fa-solid   fa-circle-info",
                  onClick: d,
                }),
                s.jsxs("div", {
                  className: "form-group",
                  children: [
                    s.jsx("label", { children: "Payment Method:" }),
                    s.jsxs("select", {
                      className: "form-control",
                      value: n,
                      onChange: (m) => t(m.target.value),
                      children: [
                        s.jsx("option", {
                          value: "",
                          children: "Select Payment Method",
                        }),
                        a.map((m) =>
                          s.jsx("option", { value: m, children: m }, m)
                        ),
                      ],
                    }),
                  ],
                }),
                s.jsx("button", {
                  className: "btn btn-primary",
                  onClick: u,
                  children: "Next",
                }),
              ],
            }),
          }),
      o &&
        s.jsx("div", {
          className: "information-container",
          children: s.jsxs("div", {
            className: "information-content",
            children: [
              s.jsx("p", {
                children: "Metamask facilitates transactions in various ways:",
              }),
              s.jsx("p", {
                children:
                  "Send: Users can send cryptocurrencies from their MetaMask wallet to another wallet address.",
              }),
              s.jsx("p", {
                children:
                  "Receive: MetaMask provides wallet addresses to receive cryptocurrency from others.",
              }),
              s.jsx("p", {
                children:
                  "Buy: Users can buy cryptocurrencies within MetaMask through supported decentralized exchanges or services..",
              }),
              s.jsx("p", {
                children:
                  "Sell: Users can sell cryptocurrencies from their wallet using compatible decentralized exchanges or services.",
              }),
              s.jsx("button", {
                className: "btn close-btn",
                onClick: v,
                children: "Close",
              }),
            ],
          }),
        }),
    ],
  });
}
const Vf = () => {
  const [e, n] = k.useState(1),
    [t, r] = k.useState(""),
    [l, o] = k.useState(""),
    [i, u] = k.useState(""),
    [a, d] = k.useState(""),
    [v, m] = k.useState(0),
    [h, x] = k.useState(!1),
    [w, S] = k.useState(null),
    [T, f] = k.useState(!1);
  k.useEffect(() => {
    const L = (Math.random() * 10).toFixed(2);
    m(L);
  }, []);
  const c = () => {
      e < 5 ? n(e + 1) : e === 5 && n(1);
    },
    p = () => {
      e === 1 && (t ? c() : alert("Please select an account."));
    },
    y = () => {
      S({ type: "Send", amount: i, recipientAddress: l }), x(!0);
    },
    j = () => {
      f(!T);
    },
    _ = () => {
      f(!1);
    },
    C = { display: "flex", justifyContent: "space-between" },
    N = { marginRight: "20px" };
  return s.jsx("div", {
    className: "container mt-5",
    children: h
      ? s.jsx(nr, { ethAmount: i, transactionData: w })
      : s.jsx("div", {
          className: "card buycard",
          children: s.jsxs("div", {
            className: "card-body",
            children: [
              e === 1 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("i", {
                      className: "fa-solid   fa-circle-info",
                      onClick: j,
                    }),
                    s.jsx("h4", { children: " Select Your Account" }),
                    s.jsxs("div", {
                      className: "form-check accountcheck",
                      children: [
                        s.jsx("input", {
                          className: "form-check-input",
                          type: "radio",
                          name: "accountOptions",
                          value: "Account 1",
                          checked: t === "Account 1",
                          onChange: () => r("Account 1"),
                        }),
                        s.jsx("label", {
                          className: "form-check-label",
                          children: "Account 1",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "form-check  accountcheck",
                      children: [
                        s.jsx("input", {
                          className: "form-check-input",
                          type: "radio",
                          name: "accountOptions",
                          value: "Account 2",
                          checked: t === "Account 2",
                          onChange: () => r("Account 2"),
                        }),
                        s.jsx("label", {
                          className: "form-check-label",
                          children: "Account 2",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      className: "btn btnsend btn-primary",
                      onClick: p,
                      children: "Next",
                    }),
                  ],
                }),
              e >= 2 &&
                e <= 4 &&
                s.jsxs("div", {
                  children: [
                    s.jsxs("div", {
                      className: "form-group",
                      children: [
                        s.jsx("label", {
                          children: "Select Recipient Address:",
                        }),
                        s.jsxs("select", {
                          className: "form-control mb-3",
                          value: l,
                          onChange: (L) => o(L.target.value),
                          children: [
                            s.jsx("option", {
                              value: "",
                              children: "Select a recipient address",
                            }),
                            s.jsx("option", {
                              value: "0x742d35Cc6634C0532925a3..",
                              children:
                                "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                            }),
                            s.jsx("option", {
                              value: "0x742d35Cc6634C05329..",
                              children:
                                "0x742d35Cc6634C0532925a3b844Bc454e4438f44f",
                            }),
                            s.jsx("option", {
                              value: "0x742d35Cc6634C05....",
                              children:
                                "0x742d35Cc6634C0532925a3b844Bc454e4438f450",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx("p", { children: " Specify Amount:" }),
                    s.jsx("input", {
                      type: "text",
                      className: "form-control mb-3",
                      placeholder: "Amount to Send",
                      value: i,
                      onChange: (L) => u(L.target.value),
                    }),
                    s.jsx("p", { children: " Estimate Gas Fees:" }),
                    s.jsx("input", {
                      type: "text",
                      className: "form-control mb-3",
                      placeholder: "Gas Fees",
                      value: v,
                      onChange: (L) => d(L.target.value),
                    }),
                    s.jsx("button", {
                      className: "btn btnsend btn-primary",
                      onClick: c,
                      children: "Next",
                    }),
                  ],
                }),
              e === 5 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("h6", {
                      className: "reviewsend",
                      children: " Review Transaction Details",
                    }),
                    s.jsxs("p", {
                      style: C,
                      children: [
                        "Amount to Send:",
                        s.jsxs("b", {
                          children: [
                            " ",
                            s.jsxs("span", {
                              style: N,
                              children: [" ", i, " ETH"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: C,
                      children: [
                        "Gas Price(estimated): ",
                        s.jsx("b", {
                          children: s.jsxs("span", {
                            style: N,
                            children: [" ", v, " ETH"],
                          }),
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: C,
                      children: [
                        "Total: ",
                        s.jsxs("span", {
                          style: N,
                          children: [
                            " ",
                            s.jsxs("b", {
                              children: [parseFloat(i) + parseFloat(v), " ETH"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      className: "btn  btnconfirm btn-primary",
                      onClick: y,
                      children: "Confirm",
                    }),
                  ],
                }),
              T &&
                s.jsx("div", {
                  className: "information-container",
                  children: s.jsxs("div", {
                    className: "information-content",
                    children: [
                      s.jsx("p", { children: "How to sell ETH in MetaMask?" }),
                      s.jsx("p", {
                        children:
                          "Select your account from which you wish to sell ETH..",
                      }),
                      s.jsx("p", {
                        children: "Input the recipient's public address.",
                      }),
                      s.jsx("p", {
                        children:
                          "Enter the amount of ETH to sell and you will be presented with the estimated gas fees of your transaction",
                      }),
                      s.jsx("p", {
                        children: "Review and  Confirm the transaction.",
                      }),
                      s.jsx("p", {
                        children:
                          "You will then be redirected to the homepage, where you can see a list of your recent transactions below transaction history",
                      }),
                      s.jsx("button", {
                        className: "btn close-btn",
                        onClick: _,
                        children: "Close",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
  });
};
function $f() {
  const [e, n] = k.useState(1),
    [t, r] = k.useState(""),
    [l, o] = k.useState(""),
    [i, u] = k.useState("Wyre"),
    [a, d] = k.useState(!1),
    [v, m] = k.useState(null),
    [h, x] = k.useState(!1),
    [w, S] = k.useState({ fullName: "", dateOfBirth: "", address: "" }),
    [T, f] = k.useState({ bankName: "", accountNumber: "", routingNumber: "" });
  k.useState(!1);
  const c = () => {
      e < 7 && n(e + 1);
    },
    p = (z) => {
      if (z === "Wyre") return 144887.38;
      if (z === "moonpay") return 262797.68;
    },
    y = (z, te) => (z * te).toFixed(2),
    j = () => {
      m({ type: "Sold", amount: l, recipientAddress: T.bankName }), d(!0);
    },
    _ = () => {
      x(!h);
    },
    C = () => {
      x(!1);
    },
    N = { display: "flex", justifyContent: "space-between" },
    L = { marginRight: "20px" };
  return s.jsx("div", {
    children: a
      ? s.jsx(nr, { ethAmount: l, transactionData: v })
      : s.jsx("div", {
          className: "card sellcards",
          children: s.jsxs("div", {
            className: "card-body",
            children: [
              e === 1 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("i", {
                      className: "fa-solid   fa-circle-info",
                      onClick: _,
                    }),
                    s.jsx("p", { children: " Select your region" }),
                    s.jsxs("select", {
                      className: "form-control fsell",
                      value: t,
                      onChange: (z) => r(z.target.value),
                      children: [
                        s.jsx("option", {
                          value: "",
                          children: "Select Region",
                        }),
                        s.jsx("option", {
                          value: "USA",
                          children: "United States",
                        }),
                        s.jsx("option", {
                          value: "Canada",
                          children: "Canada",
                        }),
                        s.jsx("option", {
                          value: "UK",
                          children: "United Kingdom",
                        }),
                        s.jsx("option", {
                          value: "Australia",
                          children: "Australia",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      className: "btn sellbtns btn-primary",
                      onClick: c,
                      children: "Next",
                    }),
                  ],
                }),
              e === 2 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      children: " Input the amount of ETH you want to sell",
                    }),
                    s.jsx("input", {
                      type: "number",
                      className: "form-control",
                      placeholder: "ETH Amount",
                      value: l,
                      onChange: (z) => o(z.target.value),
                    }),
                    s.jsx("p", {
                      children:
                        "Choose your preferred provider and quote (exchange rate):",
                    }),
                    s.jsxs("select", {
                      className: "form-control",
                      value: i,
                      onChange: (z) => u(z.target.value),
                      children: [
                        s.jsx("option", {
                          value: "Wyre",
                          children: "Wyre (1 ETH = $1,887.38)",
                        }),
                        s.jsx("option", {
                          value: "moonpay",
                          children: "Moonpay (1 ETH = $2,797.68)",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      className: "btn  sellbtns btn-primary",
                      onClick: c,
                      children: "Next",
                    }),
                  ],
                }),
              e === 3 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("p", { children: "Personal Information:" }),
                    s.jsx("input", {
                      type: "text",
                      className: "form-control",
                      placeholder: "Full Name",
                      value: w.fullName,
                      onChange: (z) => S({ ...w, fullName: z.target.value }),
                    }),
                    s.jsx("input", {
                      type: "date",
                      className: "form-control",
                      placeholder: "Date of Birth",
                      value: w.dateOfBirth,
                      onChange: (z) => S({ ...w, dateOfBirth: z.target.value }),
                    }),
                    s.jsx("button", {
                      className: "btn sellbtns btn-primary",
                      onClick: c,
                      children: "Next",
                    }),
                  ],
                }),
              e === 4 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("p", { children: " Connect your bank account" }),
                    s.jsxs("div", {
                      className: "form-group",
                      children: [
                        s.jsx("label", {
                          htmlFor: "bankName",
                          children: "Bank account:",
                        }),
                        s.jsxs("select", {
                          className: "form-control",
                          id: "bankName",
                          value: T.bankName,
                          onChange: (z) =>
                            f({ ...T, bankName: z.target.value }),
                          children: [
                            s.jsx("option", {
                              value: "",
                              children: "Select Bank account",
                            }),
                            s.jsx("option", {
                              value: "0x742d35Cc6634C0532925a3..",
                              children: "Account-1",
                            }),
                            s.jsx("option", {
                              value: "0x742d35Cc6634C05....",
                              children: "Account-2",
                            }),
                            s.jsx("option", {
                              value: "0x742d35Cc6634C05329.",
                              children: "Account-3",
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      className: "btn acctbtn btn-primary",
                      onClick: c,
                      children: "Connect Bank Account",
                    }),
                  ],
                }),
              e === 5 &&
                s.jsxs("div", {
                  children: [
                    s.jsx("h5", {
                      className: "verify",
                      children: " Verify Amount and Order",
                    }),
                    s.jsx("b", {
                      children: s.jsxs("p", {
                        className: "selleth",
                        children: [" ", l, "ETH"],
                      }),
                    }),
                    s.jsxs("p", {
                      className: "sellorder",
                      children: [
                        "Order ID: ",
                        s.jsx("b", {
                          children: Math.floor(Math.random() * 1e5),
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      className: "btn sellbtnss  btn-primary",
                      onClick: c,
                      children: "Sell ETH",
                    }),
                  ],
                }),
              e === 6 &&
                s.jsxs("div", {
                  className: "selldetails",
                  children: [
                    s.jsx("h4", {
                      className: "detailss",
                      children: "Transaction Details",
                    }),
                    s.jsxs("p", {
                      style: N,
                      children: [
                        "Order ID:",
                        " ",
                        s.jsx("span", {
                          style: L,
                          children: s.jsx("b", {
                            children: Math.floor(Math.random() * 1e5),
                          }),
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: N,
                      children: [
                        "Destination Account:",
                        s.jsx("span", {
                          style: L,
                          children: s.jsx("b", { children: T.bankName }),
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: N,
                      children: [
                        "Preferred Provider:",
                        s.jsx("span", {
                          style: L,
                          children: s.jsx("b", { children: i }),
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: N,
                      children: [
                        "Exchange Rate (Quote):",
                        s.jsx("span", {
                          style: L,
                          children: s.jsxs("b", {
                            children: [" 1 ETH = $", p(i)],
                          }),
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: N,
                      children: [
                        "Total ETH: ",
                        s.jsx("span", {
                          style: L,
                          children: s.jsxs("b", { children: [l, " ETH"] }),
                        }),
                      ],
                    }),
                    s.jsxs("p", {
                      style: N,
                      children: [
                        "Amount received total(USD):",
                        s.jsx("span", {
                          style: L,
                          children: s.jsxs("b", {
                            children: [y(l, p(i)), "USD"],
                          }),
                        }),
                      ],
                    }),
                    s.jsx("br", {}),
                    s.jsx("b", {
                      children: s.jsx("p", {
                        children:
                          "Order Confirmed! Please note that it may take a few days to see the funds in your bank account.",
                      }),
                    }),
                    s.jsx("button", {
                      className: "btn finishbtn btn-primary",
                      onClick: j,
                      children: "Finish",
                    }),
                  ],
                }),
              h &&
                s.jsx("div", {
                  className: "information-container",
                  children: s.jsxs("div", {
                    className: "information-content",
                    children: [
                      s.jsx("p", { children: "How to sell ETH in MetaMask?" }),
                      s.jsx("p", {
                        children:
                          "Select your bank's country from the dropdown menu.",
                      }),
                      s.jsx("p", {
                        children:
                          "Enter the amount of ETH you want to sell and choose your preferred offer.",
                      }),
                      s.jsx("p", {
                        children:
                          "complete the verification  process  and connect your bank account.",
                      }),
                      s.jsx("p", { children: 'Click "Sell ETH."' }),
                      s.jsx("p", {
                        children:
                          "transaction details along with confirmation is produced",
                      }),
                      s.jsx("button", {
                        className: "btn close-btn",
                        onClick: C,
                        children: "Close",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
  });
}
function Wf() {
  const [e, n] = k.useState(""),
    [t, r] = k.useState(""),
    [l, o] = k.useState(!1),
    i = ["0x742d35Cc6634C0532925a3..", "0x742d35Cc6634C05329."],
    u = () => {
      o(!0);
    },
    a = () => {
      navigator.clipboard.writeText(e),
        alert("Ethereum address copied to clipboard!");
    };
  return s.jsx("div", {
    className: "container recive",
    children: l
      ? s.jsx(nr, { ethAmount: t })
      : s.jsx("div", {
          className: "card  buycard",
          children: s.jsx("div", {
            className: "card-body",
            children: s.jsxs("div", {
              children: [
                s.jsx("p", { children: " Choose your Ethereum address" }),
                s.jsxs("select", {
                  className: "form-control",
                  value: e,
                  onChange: (d) => n(d.target.value),
                  children: [
                    s.jsx("option", {
                      value: "",
                      children: "Select an Ethereum address",
                    }),
                    i.map((d, v) =>
                      s.jsx("option", { value: d, children: d }, v)
                    ),
                  ],
                }),
                s.jsx("p", {
                  children: " Share your Ethereum address with the sender",
                }),
                s.jsxs("p", { children: ["Your Ethereum address: ", e] }),
                s.jsx("button", {
                  className: "btn btn-primary",
                  onClick: a,
                  children: "Copy Address",
                }),
                s.jsx("p", { children: " Verify the transaction" }),
                s.jsx("button", {
                  className: "btn btn-primary",
                  onClick: u,
                  children: "home page",
                }),
              ],
            }),
          }),
        }),
  });
}
const nr = ({ transactionData: e }) => {
    const [n, t] = k.useState("Mainnet"),
      [r, l] = k.useState(10),
      [o, i] = k.useState(te(40)),
      [u, a] = k.useState(te(64)),
      [d, v] = k.useState(!1),
      [m, h] = k.useState(!1),
      [x, w] = k.useState(!1),
      [S, T] = k.useState(!1),
      [f, c] = k.useState(!1),
      [p, y] = k.useState(!1),
      [j, _] = k.useState([
        { type: "Send", amount: 2.5, recipientAddress: "0x1234515248..." },
        { type: "Sold", amount: 3, recipientAddress: "0x742d35Cc6634C05...." },
      ]),
      C = { display: "flex", justifyContent: "space-between" },
      N = { marginRight: "20px" },
      L = ["Mainnet", "Ropsten", "Kovan", "Rinkeby"],
      z = (R) => {
        t(R.target.value);
      };
    function te(R) {
      const M = "0123456789ABCDEF";
      let H = "0x";
      for (let K = 0; K < R - 2; K++)
        H += M[Math.floor(Math.random() * M.length)];
      return H;
    }
    const Ze = () => {
        v(!d);
      },
      gn = () => {
        h(!0);
      },
      tr = () => {
        w(!0);
      },
      wl = () => {
        T(!0);
      },
      ct = () => {
        c(!0);
      };
    k.useEffect(() => {
      (() => {
        e &&
          (_([...j, e]),
          e.type === "Send"
            ? l((M) => M - e.amount)
            : e.type === "Sold"
            ? l((M) => M - e.amount)
            : e.type === "Buy" &&
              l((M) => parseFloat(M) + parseFloat(e.amount)));
      })();
    }, [e]);
    const dt = () => {
        y(!p);
      },
      E = () => {
        y(!1);
      };
    return s.jsxs("div", {
      children: [
        S
          ? s.jsx($f, {})
          : x
          ? s.jsx(Vf, {})
          : m
          ? s.jsx(Bf, { onBuy: () => h(!1) })
          : f
          ? s.jsx(Wf, {})
          : s.jsxs("div", {
              className: "card dashboardtwo",
              children: [
                s.jsxs("div", {
                  className: "network-dropdown",
                  children: [
                    s.jsx("label", { htmlFor: "networkSelect" }),
                    s.jsx("select", {
                      id: "networkSelect",
                      className: "form-select",
                      value: n,
                      onChange: z,
                      children: L.map((R) =>
                        s.jsx("option", { value: R, children: R }, R)
                      ),
                    }),
                    s.jsx("div", {
                      className: "account-details",
                      children: s.jsx("button", {
                        className: "btn btndetail btn-light",
                        onClick: Ze,
                        children: s.jsx("i", {
                          className: "fas fa-ellipsis-h",
                        }),
                      }),
                    }),
                    d &&
                      s.jsx(oc, { publicKey: o, privateKey: u, onClose: Ze }),
                  ],
                }),
                s.jsx("div", {
                  className: "card-body bodys",
                  children: s.jsx("h5", {
                    className: "card-title accountcard",
                    children: "Account-1",
                  }),
                }),
                s.jsxs("div", {
                  className: "card-body",
                  children: [
                    s.jsxs("p", { className: "key", children: [" ", o] }),
                    s.jsx("p", {
                      className: "coin",
                      children: s.jsxs("b", { children: [r, " ETH"] }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "card-body btnsicons",
                  children: [
                    s.jsx("button", {
                      className: "btn btns btn-primary",
                      onClick: gn,
                      children: "Buy",
                    }),
                    s.jsx("button", {
                      className: "btn btns btn-primary",
                      onClick: tr,
                      children: "Send",
                    }),
                    s.jsx("button", {
                      className: "btn btns btn-primary",
                      onClick: wl,
                      children: "Sell",
                    }),
                    s.jsx("button", {
                      className: "btn btns btn-primary",
                      onClick: ct,
                      children: "Receive",
                    }),
                    s.jsx("i", {
                      class: "fa-solid   fa-circle-info",
                      onClick: dt,
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "activity-log",
                  children: [
                    s.jsx("h4", {
                      className: "history",
                      children: "Transaction History",
                    }),
                    j.map((R, M) =>
                      s.jsxs(
                        "div",
                        {
                          className: "transaction-entry",
                          children: [
                            s.jsx("hr", {}),
                            s.jsxs("p", {
                              style: C,
                              children: [
                                s.jsx("b", { children: R.type }),
                                " ",
                                s.jsxs("span", {
                                  style: N,
                                  children: [" ", R.amount, " ETH"],
                                }),
                              ],
                            }),
                            s.jsxs("p", {
                              style: C,
                              children: ["To: ", R.recipientAddress],
                            }),
                          ],
                        },
                        M
                      )
                    ),
                  ],
                }),
              ],
            }),
        p &&
          s.jsx("div", {
            className: "information-container",
            children: s.jsxs("div", {
              className: "information-content",
              children: [
                s.jsx("p", {
                  children:
                    "Metamask facilitates transactions in various ways:",
                }),
                s.jsx("p", {
                  children:
                    "Send:A send transaction involves transferring cryptocurrency from your MetaMask wallet to another wallet address.",
                }),
                s.jsx("p", {
                  children:
                    "Receive: MetaMask provides wallet addresses to receive cryptocurrency from others.",
                }),
                s.jsx("p", {
                  children:
                    "Buy: A buy transaction involves acquiring cryptocurrency by exchanging fiat currency or another asset.",
                }),
                s.jsx("p", {
                  children:
                    "Sell: A sell transaction involves exchanging cryptocurrency for another asset, such as fiat currency or another cryptocurrency.",
                }),
                s.jsx("button", {
                  className: "btn close-btn",
                  onClick: E,
                  children: "Close",
                }),
              ],
            }),
          }),
      ],
    });
  },
  Qf = ({ recoveryPhrase: e, missingIndices: n, onDashboard: t }) => {
    const r = e.split(" "),
      [l, o] = k.useState(Array(r.length).fill("")),
      i = (u, a) => {
        if (n.includes(u)) {
          const d = a.target.value,
            v = [...l];
          (v[u] = d), o(v);
        }
      };
    return s.jsxs("div", {
      className: "card reorder",
      children: [
        s.jsxs("div", {
          className: "card-body",
          children: [
            s.jsx("h5", {
              className: "card-title",
              children: "Reorder Recovery Phrase",
            }),
            r.map((u, a) =>
              s.jsx(
                "input",
                {
                  className: "reorders",
                  type: "text",
                  value: n.includes(a) ? l[a] : u,
                  onChange: (d) => i(a, d),
                  readOnly: !n.includes(a),
                },
                a
              )
            ),
          ],
        }),
        s.jsx("div", {
          className: "card-body",
          children: s.jsx("button", {
            className: "btn btnreorder btn-primary",
            onClick: () => t(l.join(" ")),
            children: "Confirm",
          }),
        }),
      ],
    });
  },
  Kf = ({ account: e, onShowSendCard: n }) => {
    const [t, r] = k.useState("Mainnet"),
      [l, o] = k.useState(10),
      [i, u] = k.useState(w(40)),
      [a, d] = k.useState(w(64)),
      [v, m] = k.useState(!1),
      h = [
        "Mainnet",
        "Ropsten testNetwork",
        "Kovan testNetwork",
        "Rinkeby testNetwork",
      ];
    k.useEffect(() => {
      const f = setInterval(() => {
        const c = Math.floor(Math.random() * 100) / 100;
        o(c);
      }, 1e5);
      return () => {
        clearInterval(f);
      };
    }, []);
    const x = (f) => {
      r(f.target.value);
    };
    function w(f) {
      const c = "0123456789ABCDEF";
      let p = "0x";
      for (let y = 0; y < f - 2; y++)
        p += c[Math.floor(Math.random() * c.length)];
      return p;
    }
    const S = () => {
        m(!v);
      },
      T = () => {
        m(!1);
      };
    return s.jsx(s.Fragment, {
      children: s.jsxs("div", {
        children: [
          s.jsx("button", {
            className: "btn resumebtn btn-primary",
            onClick: n,
            children: "Resume Learning",
          }),
          s.jsxs("div", {
            className: "card dashcard",
            children: [
              s.jsxs("div", {
                className: "network-dropdown",
                children: [
                  s.jsx("label", { htmlFor: "networkSelect" }),
                  s.jsx("select", {
                    id: "networkSelect",
                    className: "form-select",
                    value: t,
                    onChange: x,
                    children: h.map((f) =>
                      s.jsx(
                        "option",
                        {
                          value: f,
                          disabled: f !== "Ropsten testNetwork",
                          children: f,
                        },
                        f
                      )
                    ),
                  }),
                  s.jsx("div", {
                    className: "account-details",
                    children: s.jsx("button", {
                      className: "btn btndetail btn-light",
                      onClick: S,
                      children: s.jsx("i", { className: "fas fa-ellipsis-h" }),
                    }),
                  }),
                  v && s.jsx(oc, { publicKey: i, privateKey: a, onClose: T }),
                ],
              }),
              s.jsx("div", {
                className: "card-body bodys",
                children: s.jsxs("h5", {
                  className: "card-title accountcard",
                  children: ["Account-1 ", e],
                }),
              }),
              s.jsxs("div", {
                className: "card-body ",
                children: [
                  s.jsxs("p", { className: "key", children: [" ", i] }),
                  s.jsx("p", {
                    className: "coin",
                    children: s.jsxs("b", { children: [l, "ETH"] }),
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "card-body",
                children: [
                  s.jsx("button", {
                    className: "btn btns btn-primary",
                    children: "Buy",
                  }),
                  s.jsx("button", {
                    className: "btn btns btn-primary",
                    children: "Sell",
                  }),
                  s.jsx("button", {
                    className: "btn btns btn-primary",
                    children: "Send ",
                  }),
                  s.jsx("button", {
                    className: "btn btns btn-primary",
                    children: "Receive",
                  }),
                ],
              }),
              s.jsx("hr", {}),
              s.jsx("h4", {
                className: "history",
                children: "Transaction History",
              }),
              s.jsx("p", {
                className: "NOO",
                children: " You have no transactions",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Yf = () => {
    const [e, n] = k.useState(!0),
      [t, r] = k.useState(!1),
      [l, o] = k.useState(!1),
      [i, u] = k.useState(!1),
      [a, d] = k.useState(!1),
      [v, m] = k.useState(!1),
      [h, x] = k.useState(""),
      [w, S] = k.useState(!1),
      [T, f] = k.useState(!1),
      c = () => {
        n(!1), r(!0), o(!1);
      },
      p = () => {
        r(!1), o(!0), u(!1);
      },
      y = () => {
        o(!1), u(!0);
      },
      j = (L) => {
        L && x(L), u(!1), d(!0);
      },
      _ = () => {
        d(!1), m(!0);
      },
      C = () => {
        m(!1), S(!0);
      },
      N = () => {
        S(!1), f(!0);
      };
    return s.jsx("div", {
      className: "container",
      children: s.jsx("div", {
        className: "row",
        children: s.jsxs("div", {
          className: "col-md-6",
          children: [
            e
              ? s.jsx(If, { showMetaMaskIntro: c, hideQuestionAnswerCard: c })
              : null,
            t && s.jsx(Df, { showPasswordComponent: p }),
            l && s.jsx(Af, { showLogin: y }),
            i && s.jsx(lc, { onNext: j }),
            a &&
              s.jsx(Qf, {
                recoveryPhrase: h,
                missingIndices: [2, 5, 9],
                onDashboard: _,
              }),
            v
              ? s.jsx(Kf, { onShowSendCard: C })
              : w
              ? s.jsx(Of, { onShowDashboardTwo: N })
              : null,
            T ? s.jsx(nr, {}) : null,
          ],
        }),
      }),
    });
  },
  Gf = ({ videoSource: e, onButtonClick: n }) =>
    s.jsxs(s.Fragment, {
      children: [
        s.jsxs("div", {
          className: "video-player-container",
          children: [
            s.jsx("h1", {
              className: "videohead",
              children: "Bitcoin Vs Ether",
            }),
            s.jsx("video", {
              className: "video-player",
              controls: !0,
              children: s.jsx("source", { src: e, type: "video/mp4" }),
            }),
          ],
        }),
        s.jsx("div", {
          children: s.jsx("button", {
            className: "render-button",
            onClick: n,
            children: "Go to Simulation",
          }),
        }),
      ],
    });
function Xf() {
  const e = "images/bitcoinvsethers.mp4",
    [n, t] = k.useState(!0),
    r = () => {
      t(!n);
    };
  return s.jsx(s.Fragment, {
    children: s.jsx("div", {
      children: n
        ? s.jsx(s.Fragment, {
            children: s.jsx(Gf, { videoSource: e, onButtonClick: r }),
          })
        : s.jsx(Yf, {}),
    }),
  });
}
Gl.createRoot(document.getElementById("root")).render(
  s.jsx(kc.StrictMode, { children: s.jsx(Xf, {}) })
);
