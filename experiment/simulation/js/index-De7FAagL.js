var Z1 = Object.defineProperty;
var J1 = (n, r, i) =>
  r in n
    ? Z1(n, r, { enumerable: !0, configurable: !0, writable: !0, value: i })
    : (n[r] = i);
var Zi = (n, r, i) => J1(n, typeof r != "symbol" ? r + "" : r, i);
function ex(n, r) {
  for (var i = 0; i < r.length; i++) {
    const l = r[i];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const c in l)
        if (c !== "default" && !(c in n)) {
          const f = Object.getOwnPropertyDescriptor(l, c);
          f &&
            Object.defineProperty(
              n,
              c,
              f.get ? f : { enumerable: !0, get: () => l[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) l(c);
  new MutationObserver((c) => {
    for (const f of c)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function l(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = i(c);
    fetch(c.href, f);
  }
})();
function Mv(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Kf = { exports: {} },
  Ji = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jg;
function tx() {
  if (Jg) return Ji;
  Jg = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function i(l, c, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      c.key !== void 0 && (d = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var h in c) h !== "key" && (f[h] = c[h]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: n, type: l, key: d, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return (Ji.Fragment = r), (Ji.jsx = i), (Ji.jsxs = i), Ji;
}
var ey;
function nx() {
  return ey || ((ey = 1), (Kf.exports = tx())), Kf.exports;
}
var p = nx(),
  Qf = { exports: {} },
  je = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ty;
function ax() {
  if (ty) return je;
  ty = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function w(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (x && j[x]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    C = {};
  function z(j, K, Q) {
    (this.props = j),
      (this.context = K),
      (this.refs = C),
      (this.updater = Q || A);
  }
  (z.prototype.isReactComponent = {}),
    (z.prototype.setState = function (j, K) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, j, K, "setState");
    }),
    (z.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function D() {}
  D.prototype = z.prototype;
  function k(j, K, Q) {
    (this.props = j),
      (this.context = K),
      (this.refs = C),
      (this.updater = Q || A);
  }
  var O = (k.prototype = new D());
  (O.constructor = k), R(O, z.prototype), (O.isPureReactComponent = !0);
  var M = Array.isArray,
    E = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function L(j, K, Q, Z, ne, fe) {
    return (
      (Q = fe.ref),
      { $$typeof: n, type: j, key: K, ref: Q !== void 0 ? Q : null, props: fe }
    );
  }
  function W(j, K) {
    return L(j.type, K, void 0, void 0, void 0, j.props);
  }
  function q(j) {
    return typeof j == "object" && j !== null && j.$$typeof === n;
  }
  function v(j) {
    var K = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (Q) {
        return K[Q];
      })
    );
  }
  var F = /\/+/g;
  function V(j, K) {
    return typeof j == "object" && j !== null && j.key != null
      ? v("" + j.key)
      : K.toString(36);
  }
  function I() {}
  function oe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (
          (typeof j.status == "string"
            ? j.then(I, I)
            : ((j.status = "pending"),
              j.then(
                function (K) {
                  j.status === "pending" &&
                    ((j.status = "fulfilled"), (j.value = K));
                },
                function (K) {
                  j.status === "pending" &&
                    ((j.status = "rejected"), (j.reason = K));
                }
              )),
          j.status)
        ) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function P(j, K, Q, Z, ne) {
    var fe = typeof j;
    (fe === "undefined" || fe === "boolean") && (j = null);
    var de = !1;
    if (j === null) de = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case n:
            case r:
              de = !0;
              break;
            case b:
              return (de = j._init), P(de(j._payload), K, Q, Z, ne);
          }
      }
    if (de)
      return (
        (ne = ne(j)),
        (de = Z === "" ? "." + V(j, 0) : Z),
        M(ne)
          ? ((Q = ""),
            de != null && (Q = de.replace(F, "$&/") + "/"),
            P(ne, K, Q, "", function (ye) {
              return ye;
            }))
          : ne != null &&
            (q(ne) &&
              (ne = W(
                ne,
                Q +
                  (ne.key == null || (j && j.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(F, "$&/") + "/") +
                  de
              )),
            K.push(ne)),
        1
      );
    de = 0;
    var ge = Z === "" ? "." : Z + ":";
    if (M(j))
      for (var pe = 0; pe < j.length; pe++)
        (Z = j[pe]), (fe = ge + V(Z, pe)), (de += P(Z, K, Q, fe, ne));
    else if (((pe = w(j)), typeof pe == "function"))
      for (j = pe.call(j), pe = 0; !(Z = j.next()).done; )
        (Z = Z.value), (fe = ge + V(Z, pe++)), (de += P(Z, K, Q, fe, ne));
    else if (fe === "object") {
      if (typeof j.then == "function") return P(oe(j), K, Q, Z, ne);
      throw (
        ((K = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (K === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : K) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return de;
  }
  function N(j, K, Q) {
    if (j == null) return j;
    var Z = [],
      ne = 0;
    return (
      P(j, Z, "", "", function (fe) {
        return K.call(Q, fe, ne++);
      }),
      Z
    );
  }
  function J(j) {
    if (j._status === -1) {
      var K = j._result;
      (K = K()),
        K.then(
          function (Q) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = Q));
          },
          function (Q) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = Q));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = K));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var se =
    typeof reportError == "function"
      ? reportError
      : function (j) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var K = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof j == "object" &&
                j !== null &&
                typeof j.message == "string"
                  ? String(j.message)
                  : String(j),
              error: j,
            });
            if (!window.dispatchEvent(K)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", j);
            return;
          }
          console.error(j);
        };
  function ae() {}
  return (
    (je.Children = {
      map: N,
      forEach: function (j, K, Q) {
        N(
          j,
          function () {
            K.apply(this, arguments);
          },
          Q
        );
      },
      count: function (j) {
        var K = 0;
        return (
          N(j, function () {
            K++;
          }),
          K
        );
      },
      toArray: function (j) {
        return (
          N(j, function (K) {
            return K;
          }) || []
        );
      },
      only: function (j) {
        if (!q(j))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return j;
      },
    }),
    (je.Component = z),
    (je.Fragment = i),
    (je.Profiler = c),
    (je.PureComponent = k),
    (je.StrictMode = l),
    (je.Suspense = m),
    (je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
    (je.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (je.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (je.cloneElement = function (j, K, Q) {
      if (j == null)
        throw Error(
          "The argument must be a React element, but you passed " + j + "."
        );
      var Z = R({}, j.props),
        ne = j.key,
        fe = void 0;
      if (K != null)
        for (de in (K.ref !== void 0 && (fe = void 0),
        K.key !== void 0 && (ne = "" + K.key),
        K))
          !$.call(K, de) ||
            de === "key" ||
            de === "__self" ||
            de === "__source" ||
            (de === "ref" && K.ref === void 0) ||
            (Z[de] = K[de]);
      var de = arguments.length - 2;
      if (de === 1) Z.children = Q;
      else if (1 < de) {
        for (var ge = Array(de), pe = 0; pe < de; pe++)
          ge[pe] = arguments[pe + 2];
        Z.children = ge;
      }
      return L(j.type, ne, void 0, void 0, fe, Z);
    }),
    (je.createContext = function (j) {
      return (
        (j = {
          $$typeof: d,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (j.Provider = j),
        (j.Consumer = { $$typeof: f, _context: j }),
        j
      );
    }),
    (je.createElement = function (j, K, Q) {
      var Z,
        ne = {},
        fe = null;
      if (K != null)
        for (Z in (K.key !== void 0 && (fe = "" + K.key), K))
          $.call(K, Z) &&
            Z !== "key" &&
            Z !== "__self" &&
            Z !== "__source" &&
            (ne[Z] = K[Z]);
      var de = arguments.length - 2;
      if (de === 1) ne.children = Q;
      else if (1 < de) {
        for (var ge = Array(de), pe = 0; pe < de; pe++)
          ge[pe] = arguments[pe + 2];
        ne.children = ge;
      }
      if (j && j.defaultProps)
        for (Z in ((de = j.defaultProps), de))
          ne[Z] === void 0 && (ne[Z] = de[Z]);
      return L(j, fe, void 0, void 0, null, ne);
    }),
    (je.createRef = function () {
      return { current: null };
    }),
    (je.forwardRef = function (j) {
      return { $$typeof: h, render: j };
    }),
    (je.isValidElement = q),
    (je.lazy = function (j) {
      return { $$typeof: b, _payload: { _status: -1, _result: j }, _init: J };
    }),
    (je.memo = function (j, K) {
      return { $$typeof: g, type: j, compare: K === void 0 ? null : K };
    }),
    (je.startTransition = function (j) {
      var K = E.T,
        Q = {};
      E.T = Q;
      try {
        var Z = j(),
          ne = E.S;
        ne !== null && ne(Q, Z),
          typeof Z == "object" &&
            Z !== null &&
            typeof Z.then == "function" &&
            Z.then(ae, se);
      } catch (fe) {
        se(fe);
      } finally {
        E.T = K;
      }
    }),
    (je.unstable_useCacheRefresh = function () {
      return E.H.useCacheRefresh();
    }),
    (je.use = function (j) {
      return E.H.use(j);
    }),
    (je.useActionState = function (j, K, Q) {
      return E.H.useActionState(j, K, Q);
    }),
    (je.useCallback = function (j, K) {
      return E.H.useCallback(j, K);
    }),
    (je.useContext = function (j) {
      return E.H.useContext(j);
    }),
    (je.useDebugValue = function () {}),
    (je.useDeferredValue = function (j, K) {
      return E.H.useDeferredValue(j, K);
    }),
    (je.useEffect = function (j, K) {
      return E.H.useEffect(j, K);
    }),
    (je.useId = function () {
      return E.H.useId();
    }),
    (je.useImperativeHandle = function (j, K, Q) {
      return E.H.useImperativeHandle(j, K, Q);
    }),
    (je.useInsertionEffect = function (j, K) {
      return E.H.useInsertionEffect(j, K);
    }),
    (je.useLayoutEffect = function (j, K) {
      return E.H.useLayoutEffect(j, K);
    }),
    (je.useMemo = function (j, K) {
      return E.H.useMemo(j, K);
    }),
    (je.useOptimistic = function (j, K) {
      return E.H.useOptimistic(j, K);
    }),
    (je.useReducer = function (j, K, Q) {
      return E.H.useReducer(j, K, Q);
    }),
    (je.useRef = function (j) {
      return E.H.useRef(j);
    }),
    (je.useState = function (j) {
      return E.H.useState(j);
    }),
    (je.useSyncExternalStore = function (j, K, Q) {
      return E.H.useSyncExternalStore(j, K, Q);
    }),
    (je.useTransition = function () {
      return E.H.useTransition();
    }),
    (je.version = "19.0.0"),
    je
  );
}
var ny;
function _d() {
  return ny || ((ny = 1), (Qf.exports = ax())), Qf.exports;
}
var T = _d();
const pa = Mv(T),
  vd = ex({ __proto__: null, default: pa }, [T]);
var Zf = { exports: {} },
  el = {},
  Jf = { exports: {} },
  ed = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ay;
function rx() {
  return (
    ay ||
      ((ay = 1),
      (function (n) {
        function r(N, J) {
          var se = N.length;
          N.push(J);
          e: for (; 0 < se; ) {
            var ae = (se - 1) >>> 1,
              j = N[ae];
            if (0 < c(j, J)) (N[ae] = J), (N[se] = j), (se = ae);
            else break e;
          }
        }
        function i(N) {
          return N.length === 0 ? null : N[0];
        }
        function l(N) {
          if (N.length === 0) return null;
          var J = N[0],
            se = N.pop();
          if (se !== J) {
            N[0] = se;
            e: for (var ae = 0, j = N.length, K = j >>> 1; ae < K; ) {
              var Q = 2 * (ae + 1) - 1,
                Z = N[Q],
                ne = Q + 1,
                fe = N[ne];
              if (0 > c(Z, se))
                ne < j && 0 > c(fe, Z)
                  ? ((N[ae] = fe), (N[ne] = se), (ae = ne))
                  : ((N[ae] = Z), (N[Q] = se), (ae = Q));
              else if (ne < j && 0 > c(fe, se))
                (N[ae] = fe), (N[ne] = se), (ae = ne);
              else break e;
            }
          }
          return J;
        }
        function c(N, J) {
          var se = N.sortIndex - J.sortIndex;
          return se !== 0 ? se : N.id - J.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            h = d.now();
          n.unstable_now = function () {
            return d.now() - h;
          };
        }
        var m = [],
          g = [],
          b = 1,
          x = null,
          w = 3,
          A = !1,
          R = !1,
          C = !1,
          z = typeof setTimeout == "function" ? setTimeout : null,
          D = typeof clearTimeout == "function" ? clearTimeout : null,
          k = typeof setImmediate < "u" ? setImmediate : null;
        function O(N) {
          for (var J = i(g); J !== null; ) {
            if (J.callback === null) l(g);
            else if (J.startTime <= N)
              l(g), (J.sortIndex = J.expirationTime), r(m, J);
            else break;
            J = i(g);
          }
        }
        function M(N) {
          if (((C = !1), O(N), !R))
            if (i(m) !== null) (R = !0), oe();
            else {
              var J = i(g);
              J !== null && P(M, J.startTime - N);
            }
        }
        var E = !1,
          $ = -1,
          L = 5,
          W = -1;
        function q() {
          return !(n.unstable_now() - W < L);
        }
        function v() {
          if (E) {
            var N = n.unstable_now();
            W = N;
            var J = !0;
            try {
              e: {
                (R = !1), C && ((C = !1), D($), ($ = -1)), (A = !0);
                var se = w;
                try {
                  t: {
                    for (
                      O(N), x = i(m);
                      x !== null && !(x.expirationTime > N && q());

                    ) {
                      var ae = x.callback;
                      if (typeof ae == "function") {
                        (x.callback = null), (w = x.priorityLevel);
                        var j = ae(x.expirationTime <= N);
                        if (((N = n.unstable_now()), typeof j == "function")) {
                          (x.callback = j), O(N), (J = !0);
                          break t;
                        }
                        x === i(m) && l(m), O(N);
                      } else l(m);
                      x = i(m);
                    }
                    if (x !== null) J = !0;
                    else {
                      var K = i(g);
                      K !== null && P(M, K.startTime - N), (J = !1);
                    }
                  }
                  break e;
                } finally {
                  (x = null), (w = se), (A = !1);
                }
                J = void 0;
              }
            } finally {
              J ? F() : (E = !1);
            }
          }
        }
        var F;
        if (typeof k == "function")
          F = function () {
            k(v);
          };
        else if (typeof MessageChannel < "u") {
          var V = new MessageChannel(),
            I = V.port2;
          (V.port1.onmessage = v),
            (F = function () {
              I.postMessage(null);
            });
        } else
          F = function () {
            z(v, 0);
          };
        function oe() {
          E || ((E = !0), F());
        }
        function P(N, J) {
          $ = z(function () {
            N(n.unstable_now());
          }, J);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (N) {
            N.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            R || A || ((R = !0), oe());
          }),
          (n.unstable_forceFrameRate = function (N) {
            0 > N || 125 < N
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (L = 0 < N ? Math.floor(1e3 / N) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (n.unstable_next = function (N) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = w;
            }
            var se = w;
            w = J;
            try {
              return N();
            } finally {
              w = se;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (N, J) {
            switch (N) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                N = 3;
            }
            var se = w;
            w = N;
            try {
              return J();
            } finally {
              w = se;
            }
          }),
          (n.unstable_scheduleCallback = function (N, J, se) {
            var ae = n.unstable_now();
            switch (
              (typeof se == "object" && se !== null
                ? ((se = se.delay),
                  (se = typeof se == "number" && 0 < se ? ae + se : ae))
                : (se = ae),
              N)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = se + j),
              (N = {
                id: b++,
                callback: J,
                priorityLevel: N,
                startTime: se,
                expirationTime: j,
                sortIndex: -1,
              }),
              se > ae
                ? ((N.sortIndex = se),
                  r(g, N),
                  i(m) === null &&
                    N === i(g) &&
                    (C ? (D($), ($ = -1)) : (C = !0), P(M, se - ae)))
                : ((N.sortIndex = j), r(m, N), R || A || ((R = !0), oe())),
              N
            );
          }),
          (n.unstable_shouldYield = q),
          (n.unstable_wrapCallback = function (N) {
            var J = w;
            return function () {
              var se = w;
              w = J;
              try {
                return N.apply(this, arguments);
              } finally {
                w = se;
              }
            };
          });
      })(ed)),
    ed
  );
}
var ry;
function ox() {
  return ry || ((ry = 1), (Jf.exports = rx())), Jf.exports;
}
var td = { exports: {} },
  Jt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oy;
function ix() {
  if (oy) return Jt;
  oy = 1;
  var n = _d();
  function r(m) {
    var g = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function i() {}
  var l = {
      d: {
        f: i,
        r: function () {
          throw Error(r(522));
        },
        D: i,
        C: i,
        L: i,
        m: i,
        X: i,
        S: i,
        M: i,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(m, g, b) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: m,
      containerInfo: g,
      implementation: b,
    };
  }
  var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, g) {
    if (m === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (Jt.createPortal = function (m, g) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(r(299));
      return f(m, g, null, b);
    }),
    (Jt.flushSync = function (m) {
      var g = d.T,
        b = l.p;
      try {
        if (((d.T = null), (l.p = 2), m)) return m();
      } finally {
        (d.T = g), (l.p = b), l.d.f();
      }
    }),
    (Jt.preconnect = function (m, g) {
      typeof m == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        l.d.C(m, g));
    }),
    (Jt.prefetchDNS = function (m) {
      typeof m == "string" && l.d.D(m);
    }),
    (Jt.preinit = function (m, g) {
      if (typeof m == "string" && g && typeof g.as == "string") {
        var b = g.as,
          x = h(b, g.crossOrigin),
          w = typeof g.integrity == "string" ? g.integrity : void 0,
          A = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        b === "style"
          ? l.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: x,
              integrity: w,
              fetchPriority: A,
            })
          : b === "script" &&
            l.d.X(m, {
              crossOrigin: x,
              integrity: w,
              fetchPriority: A,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Jt.preinitModule = function (m, g) {
      if (typeof m == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var b = h(g.as, g.crossOrigin);
            l.d.M(m, {
              crossOrigin: b,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && l.d.M(m);
    }),
    (Jt.preload = function (m, g) {
      if (
        typeof m == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var b = g.as,
          x = h(b, g.crossOrigin);
        l.d.L(m, b, {
          crossOrigin: x,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Jt.preloadModule = function (m, g) {
      if (typeof m == "string")
        if (g) {
          var b = h(g.as, g.crossOrigin);
          l.d.m(m, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else l.d.m(m);
    }),
    (Jt.requestFormReset = function (m) {
      l.d.r(m);
    }),
    (Jt.unstable_batchedUpdates = function (m, g) {
      return m(g);
    }),
    (Jt.useFormState = function (m, g, b) {
      return d.H.useFormState(m, g, b);
    }),
    (Jt.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Jt.version = "19.0.0"),
    Jt
  );
}
var iy;
function Ov() {
  if (iy) return td.exports;
  iy = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (td.exports = ix()), td.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ly;
function lx() {
  if (ly) return el;
  ly = 1;
  var n = ox(),
    r = _d(),
    i = Ov();
  function l(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var f = Symbol.for("react.element"),
    d = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    g = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    x = Symbol.for("react.provider"),
    w = Symbol.for("react.consumer"),
    A = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    z = Symbol.for("react.suspense_list"),
    D = Symbol.for("react.memo"),
    k = Symbol.for("react.lazy"),
    O = Symbol.for("react.offscreen"),
    M = Symbol.for("react.memo_cache_sentinel"),
    E = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (E && e[E]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var L = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === L ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case m:
        return "Fragment";
      case h:
        return "Portal";
      case b:
        return "Profiler";
      case g:
        return "StrictMode";
      case C:
        return "Suspense";
      case z:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case R:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case D:
          return (
            (t = e.displayName || null), t !== null ? t : W(e.type) || "Memo"
          );
        case k:
          (t = e._payload), (e = e._init);
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    v = Object.assign,
    F,
    V;
  function I(e) {
    if (F === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (F = (t && t[1]) || ""),
          (V =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      F +
      e +
      V
    );
  }
  var oe = !1;
  function P(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ue = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ue.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ue, []);
                } catch (te) {
                  var Y = te;
                }
                Reflect.construct(e, [], ue);
              } else {
                try {
                  ue.call();
                } catch (te) {
                  Y = te;
                }
                e.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (te) {
                Y = te;
              }
              (ue = e()) &&
                typeof ue.catch == "function" &&
                ue.catch(function () {});
            }
          } catch (te) {
            if (te && Y && typeof te.stack == "string")
              return [te.stack, Y.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = o.DetermineComponentFrameRoot(),
        y = u[0],
        S = u[1];
      if (y && S) {
        var B = y.split(`
`),
          _ = S.split(`
`);
        for (
          s = o = 0;
          o < B.length && !B[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; s < _.length && !_[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (o === B.length || s === _.length)
          for (
            o = B.length - 1, s = _.length - 1;
            1 <= o && 0 <= s && B[o] !== _[s];

          )
            s--;
        for (; 1 <= o && 0 <= s; o--, s--)
          if (B[o] !== _[s]) {
            if (o !== 1 || s !== 1)
              do
                if ((o--, s--, 0 > s || B[o] !== _[s])) {
                  var re =
                    `
` + B[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      re.includes("<anonymous>") &&
                      (re = re.replace("<anonymous>", e.displayName)),
                    re
                  );
                }
              while (1 <= o && 0 <= s);
            break;
          }
      }
    } finally {
      (oe = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? I(a) : "";
  }
  function N(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 15:
        return (e = P(e.type, !1)), e;
      case 11:
        return (e = P(e.type.render, !1)), e;
      case 1:
        return (e = P(e.type, !0)), e;
      default:
        return "";
    }
  }
  function J(e) {
    try {
      var t = "";
      do (t += N(e)), (e = e.return);
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function se(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function ae(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function j(e) {
    if (se(e) !== e) throw Error(l(188));
  }
  function K(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = se(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var a = e, o = t; ; ) {
      var s = a.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (((o = s.return), o !== null)) {
          a = o;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === a) return j(s), e;
          if (u === o) return j(s), t;
          u = u.sibling;
        }
        throw Error(l(188));
      }
      if (a.return !== o.return) (a = s), (o = u);
      else {
        for (var y = !1, S = s.child; S; ) {
          if (S === a) {
            (y = !0), (a = s), (o = u);
            break;
          }
          if (S === o) {
            (y = !0), (o = s), (a = u);
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = u.child; S; ) {
            if (S === a) {
              (y = !0), (a = u), (o = s);
              break;
            }
            if (S === o) {
              (y = !0), (o = u), (a = s);
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (a.alternate !== o) throw Error(l(190));
    }
    if (a.tag !== 3) throw Error(l(188));
    return a.stateNode.current === a ? e : t;
  }
  function Q(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = Q(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var Z = Array.isArray,
    ne = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    fe = { pending: !1, data: null, method: null, action: null },
    de = [],
    ge = -1;
  function pe(e) {
    return { current: e };
  }
  function ye(e) {
    0 > ge || ((e.current = de[ge]), (de[ge] = null), ge--);
  }
  function X(e, t) {
    ge++, (de[ge] = e.current), (e.current = t);
  }
  var he = pe(null),
    me = pe(null),
    ze = pe(null),
    Ee = pe(null);
  function Ue(e, t) {
    switch ((X(ze, t), X(me, e), X(he, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? Mg(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = Mg(e)), (t = Og(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    ye(he), X(he, t);
  }
  function it() {
    ye(he), ye(me), ye(ze);
  }
  function dt(e) {
    e.memoizedState !== null && X(Ee, e);
    var t = he.current,
      a = Og(t, e.type);
    t !== a && (X(me, e), X(he, a));
  }
  function tt(e) {
    me.current === e && (ye(he), ye(me)),
      Ee.current === e && (ye(Ee), (Wi._currentValue = fe));
  }
  var Bt = Object.prototype.hasOwnProperty,
    nt = n.unstable_scheduleCallback,
    Qe = n.unstable_cancelCallback,
    xe = n.unstable_shouldYield,
    ln = n.unstable_requestPaint,
    Ze = n.unstable_now,
    vn = n.unstable_getCurrentPriorityLevel,
    bn = n.unstable_ImmediatePriority,
    an = n.unstable_UserBlockingPriority,
    Kt = n.unstable_NormalPriority,
    sn = n.unstable_LowPriority,
    cn = n.unstable_IdlePriority,
    Ne = n.log,
    un = n.unstable_setDisableYieldValue,
    Nt = null,
    lt = null;
  function we(e) {
    if (lt && typeof lt.onCommitFiberRoot == "function")
      try {
        lt.onCommitFiberRoot(Nt, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Fe(e) {
    if (
      (typeof Ne == "function" && un(e),
      lt && typeof lt.setStrictMode == "function")
    )
      try {
        lt.setStrictMode(Nt, e);
      } catch {}
  }
  var We = Math.clz32 ? Math.clz32 : qc,
    xn = Math.log,
    Yr = Math.LN2;
  function qc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((xn(e) / Yr) | 0)) | 0;
  }
  var Wr = 128,
    Vr = 4194304;
  function ba(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Xr(e, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var o = 0,
      s = e.suspendedLanes,
      u = e.pingedLanes,
      y = e.warmLanes;
    e = e.finishedLanes !== 0;
    var S = a & 134217727;
    return (
      S !== 0
        ? ((a = S & ~s),
          a !== 0
            ? (o = ba(a))
            : ((u &= S),
              u !== 0
                ? (o = ba(u))
                : e || ((y = S & ~y), y !== 0 && (o = ba(y)))))
        : ((S = a & ~s),
          S !== 0
            ? (o = ba(S))
            : u !== 0
            ? (o = ba(u))
            : e || ((y = a & ~y), y !== 0 && (o = ba(y)))),
      o === 0
        ? 0
        : t !== 0 &&
          t !== o &&
          (t & s) === 0 &&
          ((s = o & -o),
          (y = t & -t),
          s >= y || (s === 32 && (y & 4194176) !== 0))
        ? t
        : o
    );
  }
  function hr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Gc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Be() {
    var e = Wr;
    return (Wr <<= 1), (Wr & 4194176) === 0 && (Wr = 128), e;
  }
  function fn() {
    var e = Vr;
    return (Vr <<= 1), (Vr & 62914560) === 0 && (Vr = 4194304), e;
  }
  function Kr(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ri(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function H0(e, t, a, o, s, u) {
    var y = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var S = e.entanglements,
      B = e.expirationTimes,
      _ = e.hiddenUpdates;
    for (a = y & ~a; 0 < a; ) {
      var re = 31 - We(a),
        ue = 1 << re;
      (S[re] = 0), (B[re] = -1);
      var Y = _[re];
      if (Y !== null)
        for (_[re] = null, re = 0; re < Y.length; re++) {
          var te = Y[re];
          te !== null && (te.lane &= -536870913);
        }
      a &= ~ue;
    }
    o !== 0 && Cp(e, o, 0),
      u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(y & ~t));
  }
  function Cp(e, t, a) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var o = 31 - We(t);
    (e.entangledLanes |= t),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (a & 4194218));
  }
  function Tp(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var o = 31 - We(a),
        s = 1 << o;
      (s & t) | (e[o] & t) && (e[o] |= t), (a &= ~s);
    }
  }
  function Ep(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Rp() {
    var e = ne.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Wg(e.type));
  }
  function P0(e, t) {
    var a = ne.p;
    try {
      return (ne.p = e), t();
    } finally {
      ne.p = a;
    }
  }
  var Pa = Math.random().toString(36).slice(2),
    Qt = "__reactFiber$" + Pa,
    dn = "__reactProps$" + Pa,
    Qr = "__reactContainer$" + Pa,
    Ic = "__reactEvents$" + Pa,
    q0 = "__reactListeners$" + Pa,
    G0 = "__reactHandles$" + Pa,
    wp = "__reactResources$" + Pa,
    oi = "__reactMarker$" + Pa;
  function Yc(e) {
    delete e[Qt], delete e[dn], delete e[Ic], delete e[q0], delete e[G0];
  }
  function mr(e) {
    var t = e[Qt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[Qr] || a[Qt])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = zg(e); e !== null; ) {
            if ((a = e[Qt])) return a;
            e = zg(e);
          }
        return t;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function Zr(e) {
    if ((e = e[Qt] || e[Qr])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ii(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Jr(e) {
    var t = e[wp];
    return (
      t ||
        (t = e[wp] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _t(e) {
    e[oi] = !0;
  }
  var Ap = new Set(),
    Mp = {};
  function gr(e, t) {
    eo(e, t), eo(e + "Capture", t);
  }
  function eo(e, t) {
    for (Mp[e] = t, e = 0; e < t.length; e++) Ap.add(t[e]);
  }
  var xa = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    I0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Op = {},
    Bp = {};
  function Y0(e) {
    return Bt.call(Bp, e)
      ? !0
      : Bt.call(Op, e)
      ? !1
      : I0.test(e)
      ? (Bp[e] = !0)
      : ((Op[e] = !0), !1);
  }
  function Hl(e, t, a) {
    if (Y0(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Pl(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Sa(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
    }
  }
  function Bn(e) {
    switch (typeof e) {
      case "bigint":
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
  function jp(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function W0(e) {
    var t = jp(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        u = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (y) {
            (o = "" + y), u.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (y) {
            o = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ql(e) {
    e._valueTracker || (e._valueTracker = W0(e));
  }
  function zp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      o = "";
    return (
      e && (o = jp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Gl(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var V0 = /[\n"\\]/g;
  function jn(e) {
    return e.replace(V0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Wc(e, t, a, o, s, u, y, S) {
    (e.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.type = y)
        : e.removeAttribute("type"),
      t != null
        ? y === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Bn(t))
          : e.value !== "" + Bn(t) && (e.value = "" + Bn(t))
        : (y !== "submit" && y !== "reset") || e.removeAttribute("value"),
      t != null
        ? Vc(e, y, Bn(t))
        : a != null
        ? Vc(e, y, Bn(a))
        : o != null && e.removeAttribute("value"),
      s == null && u != null && (e.defaultChecked = !!u),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      S != null &&
      typeof S != "function" &&
      typeof S != "symbol" &&
      typeof S != "boolean"
        ? (e.name = "" + Bn(S))
        : e.removeAttribute("name");
  }
  function Dp(e, t, a, o, s, u, y, S) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) return;
      (a = a != null ? "" + Bn(a) : ""),
        (t = t != null ? "" + Bn(t) : a),
        S || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (o = o ?? s),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = S ? e.checked : !!o),
      (e.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (e.name = y);
  }
  function Vc(e, t, a) {
    (t === "number" && Gl(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function to(e, t, a, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < a.length; s++) t["$" + a[s]] = !0;
      for (a = 0; a < e.length; a++)
        (s = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== s && (e[a].selected = s),
          s && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Bn(a), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === a) {
          (e[s].selected = !0), o && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function kp(e, t, a) {
    if (
      t != null &&
      ((t = "" + Bn(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Bn(a) : "";
  }
  function Np(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(l(92));
        if (Z(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), (t = a);
    }
    (a = Bn(t)),
      (e.defaultValue = a),
      (o = e.textContent),
      o === a && o !== "" && o !== null && (e.value = o);
  }
  function no(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var X0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Fp(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? o
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : o
      ? e.setProperty(t, a)
      : typeof a != "number" || a === 0 || X0.has(t)
      ? t === "float"
        ? (e.cssFloat = a)
        : (e[t] = ("" + a).trim())
      : (e[t] = a + "px");
  }
  function $p(e, t, a) {
    if (t != null && typeof t != "object") throw Error(l(62));
    if (((e = e.style), a != null)) {
      for (var o in a)
        !a.hasOwnProperty(o) ||
          (t != null && t.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
            ? (e.cssFloat = "")
            : (e[o] = ""));
      for (var s in t)
        (o = t[s]), t.hasOwnProperty(s) && a[s] !== o && Fp(e, s, o);
    } else for (var u in t) t.hasOwnProperty(u) && Fp(e, u, t[u]);
  }
  function Xc(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var K0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Q0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Il(e) {
    return Q0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Kc = null;
  function Qc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ao = null,
    ro = null;
  function Up(e) {
    var t = Zr(e);
    if (t && (e = t.stateNode)) {
      var a = e[dn] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Wc(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + jn("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var s = o[dn] || null;
                if (!s) throw Error(l(90));
                Wc(
                  o,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (o = a[t]), o.form === e.form && zp(o);
          }
          break e;
        case "textarea":
          kp(e, a.value, a.defaultValue);
          break e;
        case "select":
          (t = a.value), t != null && to(e, !!a.multiple, t, !1);
      }
    }
  }
  var Zc = !1;
  function _p(e, t, a) {
    if (Zc) return e(t, a);
    Zc = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (
        ((Zc = !1),
        (ao !== null || ro !== null) &&
          (Ms(), ao && ((t = ao), (e = ro), (ro = ao = null), Up(t), e)))
      )
        for (t = 0; t < e.length; t++) Up(e[t]);
    }
  }
  function li(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[dn] || null;
    if (o === null) return null;
    a = o[t];
    e: switch (t) {
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
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(l(231, t, typeof a));
    return a;
  }
  var Jc = !1;
  if (xa)
    try {
      var si = {};
      Object.defineProperty(si, "passive", {
        get: function () {
          Jc = !0;
        },
      }),
        window.addEventListener("test", si, si),
        window.removeEventListener("test", si, si);
    } catch {
      Jc = !1;
    }
  var qa = null,
    eu = null,
    Yl = null;
  function Lp() {
    if (Yl) return Yl;
    var e,
      t = eu,
      a = t.length,
      o,
      s = "value" in qa ? qa.value : qa.textContent,
      u = s.length;
    for (e = 0; e < a && t[e] === s[e]; e++);
    var y = a - e;
    for (o = 1; o <= y && t[a - o] === s[u - o]; o++);
    return (Yl = s.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Wl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Vl() {
    return !0;
  }
  function Hp() {
    return !1;
  }
  function pn(e) {
    function t(a, o, s, u, y) {
      (this._reactName = a),
        (this._targetInst = s),
        (this.type = o),
        (this.nativeEvent = u),
        (this.target = y),
        (this.currentTarget = null);
      for (var S in e)
        e.hasOwnProperty(S) && ((a = e[S]), (this[S] = a ? a(u) : u[S]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Vl
          : Hp),
        (this.isPropagationStopped = Hp),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Vl));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Vl));
        },
        persist: function () {},
        isPersistent: Vl,
      }),
      t
    );
  }
  var yr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Xl = pn(yr),
    ci = v({}, yr, { view: 0, detail: 0 }),
    Z0 = pn(ci),
    tu,
    nu,
    ui,
    Kl = v({}, ci, {
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
      getModifierState: ru,
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
          : (e !== ui &&
              (ui && e.type === "mousemove"
                ? ((tu = e.screenX - ui.screenX), (nu = e.screenY - ui.screenY))
                : (nu = tu = 0),
              (ui = e)),
            tu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nu;
      },
    }),
    Pp = pn(Kl),
    J0 = v({}, Kl, { dataTransfer: 0 }),
    eb = pn(J0),
    tb = v({}, ci, { relatedTarget: 0 }),
    au = pn(tb),
    nb = v({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ab = pn(nb),
    rb = v({}, yr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ob = pn(rb),
    ib = v({}, yr, { data: 0 }),
    qp = pn(ib),
    lb = {
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
    sb = {
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
    cb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ub(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = cb[e])
      ? !!t[e]
      : !1;
  }
  function ru() {
    return ub;
  }
  var fb = v({}, ci, {
      key: function (e) {
        if (e.key) {
          var t = lb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Wl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? sb[e.keyCode] || "Unidentified"
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
      getModifierState: ru,
      charCode: function (e) {
        return e.type === "keypress" ? Wl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Wl(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    db = pn(fb),
    pb = v({}, Kl, {
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
    Gp = pn(pb),
    hb = v({}, ci, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ru,
    }),
    mb = pn(hb),
    gb = v({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yb = pn(gb),
    vb = v({}, Kl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    bb = pn(vb),
    xb = v({}, yr, { newState: 0, oldState: 0 }),
    Sb = pn(xb),
    Cb = [9, 13, 27, 32],
    ou = xa && "CompositionEvent" in window,
    fi = null;
  xa && "documentMode" in document && (fi = document.documentMode);
  var Tb = xa && "TextEvent" in window && !fi,
    Ip = xa && (!ou || (fi && 8 < fi && 11 >= fi)),
    Yp = " ",
    Wp = !1;
  function Vp(e, t) {
    switch (e) {
      case "keyup":
        return Cb.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var oo = !1;
  function Eb(e, t) {
    switch (e) {
      case "compositionend":
        return Xp(t);
      case "keypress":
        return t.which !== 32 ? null : ((Wp = !0), Yp);
      case "textInput":
        return (e = t.data), e === Yp && Wp ? null : e;
      default:
        return null;
    }
  }
  function Rb(e, t) {
    if (oo)
      return e === "compositionend" || (!ou && Vp(e, t))
        ? ((e = Lp()), (Yl = eu = qa = null), (oo = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ip && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var wb = {
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
  function Kp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!wb[e.type] : t === "textarea";
  }
  function Qp(e, t, a, o) {
    ao ? (ro ? ro.push(o) : (ro = [o])) : (ao = o),
      (t = Ds(t, "onChange")),
      0 < t.length &&
        ((a = new Xl("onChange", "change", null, a, o)),
        e.push({ event: a, listeners: t }));
  }
  var di = null,
    pi = null;
  function Ab(e) {
    Tg(e, 0);
  }
  function Ql(e) {
    var t = ii(e);
    if (zp(t)) return e;
  }
  function Zp(e, t) {
    if (e === "change") return t;
  }
  var Jp = !1;
  if (xa) {
    var iu;
    if (xa) {
      var lu = "oninput" in document;
      if (!lu) {
        var eh = document.createElement("div");
        eh.setAttribute("oninput", "return;"),
          (lu = typeof eh.oninput == "function");
      }
      iu = lu;
    } else iu = !1;
    Jp = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function th() {
    di && (di.detachEvent("onpropertychange", nh), (pi = di = null));
  }
  function nh(e) {
    if (e.propertyName === "value" && Ql(pi)) {
      var t = [];
      Qp(t, pi, e, Qc(e)), _p(Ab, t);
    }
  }
  function Mb(e, t, a) {
    e === "focusin"
      ? (th(), (di = t), (pi = a), di.attachEvent("onpropertychange", nh))
      : e === "focusout" && th();
  }
  function Ob(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ql(pi);
  }
  function Bb(e, t) {
    if (e === "click") return Ql(t);
  }
  function jb(e, t) {
    if (e === "input" || e === "change") return Ql(t);
  }
  function zb(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Sn = typeof Object.is == "function" ? Object.is : zb;
  function hi(e, t) {
    if (Sn(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var s = a[o];
      if (!Bt.call(t, s) || !Sn(e[s], t[s])) return !1;
    }
    return !0;
  }
  function ah(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rh(e, t) {
    var a = ah(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (((o = e + a.textContent.length), e <= t && o >= t))
          return { node: a, offset: t - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ah(a);
    }
  }
  function oh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? oh(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function ih(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Gl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Gl(e.document);
    }
    return t;
  }
  function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Db(e, t) {
    var a = ih(t);
    t = e.focusedElem;
    var o = e.selectionRange;
    if (
      a !== t &&
      t &&
      t.ownerDocument &&
      oh(t.ownerDocument.documentElement, t)
    ) {
      if (o !== null && su(t)) {
        if (
          ((e = o.start),
          (a = o.end),
          a === void 0 && (a = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(a, t.value.length));
        else if (
          ((a = ((e = t.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var s = t.textContent.length,
            u = Math.min(o.start, s);
          (o = o.end === void 0 ? u : Math.min(o.end, s)),
            !a.extend && u > o && ((s = o), (o = u), (u = s)),
            (s = rh(t, u));
          var y = rh(t, o);
          s &&
            y &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== s.node ||
              a.anchorOffset !== s.offset ||
              a.focusNode !== y.node ||
              a.focusOffset !== y.offset) &&
            ((e = e.createRange()),
            e.setStart(s.node, s.offset),
            a.removeAllRanges(),
            u > o
              ? (a.addRange(e), a.extend(y.node, y.offset))
              : (e.setEnd(y.node, y.offset), a.addRange(e)));
        }
      }
      for (e = [], a = t; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (a = e[t]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var kb = xa && "documentMode" in document && 11 >= document.documentMode,
    io = null,
    cu = null,
    mi = null,
    uu = !1;
  function lh(e, t, a) {
    var o =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    uu ||
      io == null ||
      io !== Gl(o) ||
      ((o = io),
      "selectionStart" in o && su(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (mi && hi(mi, o)) ||
        ((mi = o),
        (o = Ds(cu, "onSelect")),
        0 < o.length &&
          ((t = new Xl("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: o }),
          (t.target = io))));
  }
  function vr(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var lo = {
      animationend: vr("Animation", "AnimationEnd"),
      animationiteration: vr("Animation", "AnimationIteration"),
      animationstart: vr("Animation", "AnimationStart"),
      transitionrun: vr("Transition", "TransitionRun"),
      transitionstart: vr("Transition", "TransitionStart"),
      transitioncancel: vr("Transition", "TransitionCancel"),
      transitionend: vr("Transition", "TransitionEnd"),
    },
    fu = {},
    sh = {};
  xa &&
    ((sh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete lo.animationend.animation,
      delete lo.animationiteration.animation,
      delete lo.animationstart.animation),
    "TransitionEvent" in window || delete lo.transitionend.transition);
  function br(e) {
    if (fu[e]) return fu[e];
    if (!lo[e]) return e;
    var t = lo[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in sh) return (fu[e] = t[a]);
    return e;
  }
  var ch = br("animationend"),
    uh = br("animationiteration"),
    fh = br("animationstart"),
    Nb = br("transitionrun"),
    Fb = br("transitionstart"),
    $b = br("transitioncancel"),
    dh = br("transitionend"),
    ph = new Map(),
    hh =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Zn(e, t) {
    ph.set(e, t), gr(t, [e]);
  }
  var zn = [],
    so = 0,
    du = 0;
  function Zl() {
    for (var e = so, t = (du = so = 0); t < e; ) {
      var a = zn[t];
      zn[t++] = null;
      var o = zn[t];
      zn[t++] = null;
      var s = zn[t];
      zn[t++] = null;
      var u = zn[t];
      if (((zn[t++] = null), o !== null && s !== null)) {
        var y = o.pending;
        y === null ? (s.next = s) : ((s.next = y.next), (y.next = s)),
          (o.pending = s);
      }
      u !== 0 && mh(a, s, u);
    }
  }
  function Jl(e, t, a, o) {
    (zn[so++] = e),
      (zn[so++] = t),
      (zn[so++] = a),
      (zn[so++] = o),
      (du |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function pu(e, t, a, o) {
    return Jl(e, t, a, o), es(e);
  }
  function Ga(e, t) {
    return Jl(e, null, null, t), es(e);
  }
  function mh(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var s = !1, u = e.return; u !== null; )
      (u.childLanes |= a),
        (o = u.alternate),
        o !== null && (o.childLanes |= a),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = u),
        (u = u.return);
    s &&
      t !== null &&
      e.tag === 3 &&
      ((u = e.stateNode),
      (s = 31 - We(a)),
      (u = u.hiddenUpdates),
      (e = u[s]),
      e === null ? (u[s] = [t]) : e.push(t),
      (t.lane = a | 536870912));
  }
  function es(e) {
    if (50 < Li) throw ((Li = 0), (xf = null), Error(l(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var co = {},
    gh = new WeakMap();
  function Dn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = gh.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: J(t) }), gh.set(e, t), t);
    }
    return { value: e, source: t, stack: J(t) };
  }
  var uo = [],
    fo = 0,
    ts = null,
    ns = 0,
    kn = [],
    Nn = 0,
    xr = null,
    Ca = 1,
    Ta = "";
  function Sr(e, t) {
    (uo[fo++] = ns), (uo[fo++] = ts), (ts = e), (ns = t);
  }
  function yh(e, t, a) {
    (kn[Nn++] = Ca), (kn[Nn++] = Ta), (kn[Nn++] = xr), (xr = e);
    var o = Ca;
    e = Ta;
    var s = 32 - We(o) - 1;
    (o &= ~(1 << s)), (a += 1);
    var u = 32 - We(t) + s;
    if (30 < u) {
      var y = s - (s % 5);
      (u = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (s -= y),
        (Ca = (1 << (32 - We(t) + s)) | (a << s) | o),
        (Ta = u + e);
    } else (Ca = (1 << u) | (a << s) | o), (Ta = e);
  }
  function hu(e) {
    e.return !== null && (Sr(e, 1), yh(e, 1, 0));
  }
  function mu(e) {
    for (; e === ts; )
      (ts = uo[--fo]), (uo[fo] = null), (ns = uo[--fo]), (uo[fo] = null);
    for (; e === xr; )
      (xr = kn[--Nn]),
        (kn[Nn] = null),
        (Ta = kn[--Nn]),
        (kn[Nn] = null),
        (Ca = kn[--Nn]),
        (kn[Nn] = null);
  }
  var rn = null,
    qt = null,
    Ve = !1,
    Jn = null,
    na = !1,
    gu = Error(l(519));
  function Cr(e) {
    var t = Error(l(418, ""));
    throw (vi(Dn(t, e)), gu);
  }
  function vh(e) {
    var t = e.stateNode,
      a = e.type,
      o = e.memoizedProps;
    switch (((t[Qt] = e), (t[dn] = o), a)) {
      case "dialog":
        He("cancel", t), He("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        He("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Pi.length; a++) He(Pi[a], t);
        break;
      case "source":
        He("error", t);
        break;
      case "img":
      case "image":
      case "link":
        He("error", t), He("load", t);
        break;
      case "details":
        He("toggle", t);
        break;
      case "input":
        He("invalid", t),
          Dp(
            t,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0
          ),
          ql(t);
        break;
      case "select":
        He("invalid", t);
        break;
      case "textarea":
        He("invalid", t), Np(t, o.value, o.defaultValue, o.children), ql(t);
    }
    (a = o.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      o.suppressHydrationWarning === !0 ||
      Ag(t.textContent, a)
        ? (o.popover != null && (He("beforetoggle", t), He("toggle", t)),
          o.onScroll != null && He("scroll", t),
          o.onScrollEnd != null && He("scrollend", t),
          o.onClick != null && (t.onclick = ks),
          (t = !0))
        : (t = !1),
      t || Cr(e);
  }
  function bh(e) {
    for (rn = e.return; rn; )
      switch (rn.tag) {
        case 3:
        case 27:
          na = !0;
          return;
        case 5:
        case 13:
          na = !1;
          return;
        default:
          rn = rn.return;
      }
  }
  function gi(e) {
    if (e !== rn) return !1;
    if (!Ve) return bh(e), (Ve = !0), !1;
    var t = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || $f(e.type, e.memoizedProps))),
        (a = !a)),
      a && (t = !0),
      t && qt && Cr(e),
      bh(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (t === 0) {
                qt = ta(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          e = e.nextSibling;
        }
        qt = null;
      }
    } else qt = rn ? ta(e.stateNode.nextSibling) : null;
    return !0;
  }
  function yi() {
    (qt = rn = null), (Ve = !1);
  }
  function vi(e) {
    Jn === null ? (Jn = [e]) : Jn.push(e);
  }
  var bi = Error(l(460)),
    xh = Error(l(474)),
    yu = { then: function () {} };
  function Sh(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function as() {}
  function Ch(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(as, as), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === bi ? Error(l(483)) : e);
      default:
        if (typeof t.status == "string") t.then(as, as);
        else {
          if (((e = gt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(l(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (t.status === "pending") {
                  var s = t;
                  (s.status = "fulfilled"), (s.value = o);
                }
              },
              function (o) {
                if (t.status === "pending") {
                  var s = t;
                  (s.status = "rejected"), (s.reason = o);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === bi ? Error(l(483)) : e);
        }
        throw ((xi = t), bi);
    }
  }
  var xi = null;
  function Th() {
    if (xi === null) throw Error(l(459));
    var e = xi;
    return (xi = null), e;
  }
  var po = null,
    Si = 0;
  function rs(e) {
    var t = Si;
    return (Si += 1), po === null && (po = []), Ch(po, e, t);
  }
  function Ci(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function os(e, t) {
    throw t.$$typeof === f
      ? Error(l(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          l(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Eh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Rh(e) {
    function t(H, U) {
      if (e) {
        var G = H.deletions;
        G === null ? ((H.deletions = [U]), (H.flags |= 16)) : G.push(U);
      }
    }
    function a(H, U) {
      if (!e) return null;
      for (; U !== null; ) t(H, U), (U = U.sibling);
      return null;
    }
    function o(H) {
      for (var U = new Map(); H !== null; )
        H.key !== null ? U.set(H.key, H) : U.set(H.index, H), (H = H.sibling);
      return U;
    }
    function s(H, U) {
      return (H = nr(H, U)), (H.index = 0), (H.sibling = null), H;
    }
    function u(H, U, G) {
      return (
        (H.index = G),
        e
          ? ((G = H.alternate),
            G !== null
              ? ((G = G.index), G < U ? ((H.flags |= 33554434), U) : G)
              : ((H.flags |= 33554434), U))
          : ((H.flags |= 1048576), U)
      );
    }
    function y(H) {
      return e && H.alternate === null && (H.flags |= 33554434), H;
    }
    function S(H, U, G, le) {
      return U === null || U.tag !== 6
        ? ((U = df(G, H.mode, le)), (U.return = H), U)
        : ((U = s(U, G)), (U.return = H), U);
    }
    function B(H, U, G, le) {
      var ve = G.type;
      return ve === m
        ? re(H, U, G.props.children, le, G.key)
        : U !== null &&
          (U.elementType === ve ||
            (typeof ve == "object" &&
              ve !== null &&
              ve.$$typeof === k &&
              Eh(ve) === U.type))
        ? ((U = s(U, G.props)), Ci(U, G), (U.return = H), U)
        : ((U = Ts(G.type, G.key, G.props, null, H.mode, le)),
          Ci(U, G),
          (U.return = H),
          U);
    }
    function _(H, U, G, le) {
      return U === null ||
        U.tag !== 4 ||
        U.stateNode.containerInfo !== G.containerInfo ||
        U.stateNode.implementation !== G.implementation
        ? ((U = pf(G, H.mode, le)), (U.return = H), U)
        : ((U = s(U, G.children || [])), (U.return = H), U);
    }
    function re(H, U, G, le, ve) {
      return U === null || U.tag !== 7
        ? ((U = zr(G, H.mode, le, ve)), (U.return = H), U)
        : ((U = s(U, G)), (U.return = H), U);
    }
    function ue(H, U, G) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (U = df("" + U, H.mode, G)), (U.return = H), U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case d:
            return (
              (G = Ts(U.type, U.key, U.props, null, H.mode, G)),
              Ci(G, U),
              (G.return = H),
              G
            );
          case h:
            return (U = pf(U, H.mode, G)), (U.return = H), U;
          case k:
            var le = U._init;
            return (U = le(U._payload)), ue(H, U, G);
        }
        if (Z(U) || $(U))
          return (U = zr(U, H.mode, G, null)), (U.return = H), U;
        if (typeof U.then == "function") return ue(H, rs(U), G);
        if (U.$$typeof === A) return ue(H, xs(H, U), G);
        os(H, U);
      }
      return null;
    }
    function Y(H, U, G, le) {
      var ve = U !== null ? U.key : null;
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return ve !== null ? null : S(H, U, "" + G, le);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case d:
            return G.key === ve ? B(H, U, G, le) : null;
          case h:
            return G.key === ve ? _(H, U, G, le) : null;
          case k:
            return (ve = G._init), (G = ve(G._payload)), Y(H, U, G, le);
        }
        if (Z(G) || $(G)) return ve !== null ? null : re(H, U, G, le, null);
        if (typeof G.then == "function") return Y(H, U, rs(G), le);
        if (G.$$typeof === A) return Y(H, U, xs(H, G), le);
        os(H, G);
      }
      return null;
    }
    function te(H, U, G, le, ve) {
      if (
        (typeof le == "string" && le !== "") ||
        typeof le == "number" ||
        typeof le == "bigint"
      )
        return (H = H.get(G) || null), S(U, H, "" + le, ve);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case d:
            return (
              (H = H.get(le.key === null ? G : le.key) || null), B(U, H, le, ve)
            );
          case h:
            return (
              (H = H.get(le.key === null ? G : le.key) || null), _(U, H, le, ve)
            );
          case k:
            var $e = le._init;
            return (le = $e(le._payload)), te(H, U, G, le, ve);
        }
        if (Z(le) || $(le))
          return (H = H.get(G) || null), re(U, H, le, ve, null);
        if (typeof le.then == "function") return te(H, U, G, rs(le), ve);
        if (le.$$typeof === A) return te(H, U, G, xs(U, le), ve);
        os(U, le);
      }
      return null;
    }
    function Se(H, U, G, le) {
      for (
        var ve = null, $e = null, Ce = U, Me = (U = 0), Pt = null;
        Ce !== null && Me < G.length;
        Me++
      ) {
        Ce.index > Me ? ((Pt = Ce), (Ce = null)) : (Pt = Ce.sibling);
        var Xe = Y(H, Ce, G[Me], le);
        if (Xe === null) {
          Ce === null && (Ce = Pt);
          break;
        }
        e && Ce && Xe.alternate === null && t(H, Ce),
          (U = u(Xe, U, Me)),
          $e === null ? (ve = Xe) : ($e.sibling = Xe),
          ($e = Xe),
          (Ce = Pt);
      }
      if (Me === G.length) return a(H, Ce), Ve && Sr(H, Me), ve;
      if (Ce === null) {
        for (; Me < G.length; Me++)
          (Ce = ue(H, G[Me], le)),
            Ce !== null &&
              ((U = u(Ce, U, Me)),
              $e === null ? (ve = Ce) : ($e.sibling = Ce),
              ($e = Ce));
        return Ve && Sr(H, Me), ve;
      }
      for (Ce = o(Ce); Me < G.length; Me++)
        (Pt = te(Ce, H, Me, G[Me], le)),
          Pt !== null &&
            (e &&
              Pt.alternate !== null &&
              Ce.delete(Pt.key === null ? Me : Pt.key),
            (U = u(Pt, U, Me)),
            $e === null ? (ve = Pt) : ($e.sibling = Pt),
            ($e = Pt));
      return (
        e &&
          Ce.forEach(function (cr) {
            return t(H, cr);
          }),
        Ve && Sr(H, Me),
        ve
      );
    }
    function Oe(H, U, G, le) {
      if (G == null) throw Error(l(151));
      for (
        var ve = null,
          $e = null,
          Ce = U,
          Me = (U = 0),
          Pt = null,
          Xe = G.next();
        Ce !== null && !Xe.done;
        Me++, Xe = G.next()
      ) {
        Ce.index > Me ? ((Pt = Ce), (Ce = null)) : (Pt = Ce.sibling);
        var cr = Y(H, Ce, Xe.value, le);
        if (cr === null) {
          Ce === null && (Ce = Pt);
          break;
        }
        e && Ce && cr.alternate === null && t(H, Ce),
          (U = u(cr, U, Me)),
          $e === null ? (ve = cr) : ($e.sibling = cr),
          ($e = cr),
          (Ce = Pt);
      }
      if (Xe.done) return a(H, Ce), Ve && Sr(H, Me), ve;
      if (Ce === null) {
        for (; !Xe.done; Me++, Xe = G.next())
          (Xe = ue(H, Xe.value, le)),
            Xe !== null &&
              ((U = u(Xe, U, Me)),
              $e === null ? (ve = Xe) : ($e.sibling = Xe),
              ($e = Xe));
        return Ve && Sr(H, Me), ve;
      }
      for (Ce = o(Ce); !Xe.done; Me++, Xe = G.next())
        (Xe = te(Ce, H, Me, Xe.value, le)),
          Xe !== null &&
            (e &&
              Xe.alternate !== null &&
              Ce.delete(Xe.key === null ? Me : Xe.key),
            (U = u(Xe, U, Me)),
            $e === null ? (ve = Xe) : ($e.sibling = Xe),
            ($e = Xe));
      return (
        e &&
          Ce.forEach(function (Q1) {
            return t(H, Q1);
          }),
        Ve && Sr(H, Me),
        ve
      );
    }
    function Tt(H, U, G, le) {
      if (
        (typeof G == "object" &&
          G !== null &&
          G.type === m &&
          G.key === null &&
          (G = G.props.children),
        typeof G == "object" && G !== null)
      ) {
        switch (G.$$typeof) {
          case d:
            e: {
              for (var ve = G.key; U !== null; ) {
                if (U.key === ve) {
                  if (((ve = G.type), ve === m)) {
                    if (U.tag === 7) {
                      a(H, U.sibling),
                        (le = s(U, G.props.children)),
                        (le.return = H),
                        (H = le);
                      break e;
                    }
                  } else if (
                    U.elementType === ve ||
                    (typeof ve == "object" &&
                      ve !== null &&
                      ve.$$typeof === k &&
                      Eh(ve) === U.type)
                  ) {
                    a(H, U.sibling),
                      (le = s(U, G.props)),
                      Ci(le, G),
                      (le.return = H),
                      (H = le);
                    break e;
                  }
                  a(H, U);
                  break;
                } else t(H, U);
                U = U.sibling;
              }
              G.type === m
                ? ((le = zr(G.props.children, H.mode, le, G.key)),
                  (le.return = H),
                  (H = le))
                : ((le = Ts(G.type, G.key, G.props, null, H.mode, le)),
                  Ci(le, G),
                  (le.return = H),
                  (H = le));
            }
            return y(H);
          case h:
            e: {
              for (ve = G.key; U !== null; ) {
                if (U.key === ve)
                  if (
                    U.tag === 4 &&
                    U.stateNode.containerInfo === G.containerInfo &&
                    U.stateNode.implementation === G.implementation
                  ) {
                    a(H, U.sibling),
                      (le = s(U, G.children || [])),
                      (le.return = H),
                      (H = le);
                    break e;
                  } else {
                    a(H, U);
                    break;
                  }
                else t(H, U);
                U = U.sibling;
              }
              (le = pf(G, H.mode, le)), (le.return = H), (H = le);
            }
            return y(H);
          case k:
            return (ve = G._init), (G = ve(G._payload)), Tt(H, U, G, le);
        }
        if (Z(G)) return Se(H, U, G, le);
        if ($(G)) {
          if (((ve = $(G)), typeof ve != "function")) throw Error(l(150));
          return (G = ve.call(G)), Oe(H, U, G, le);
        }
        if (typeof G.then == "function") return Tt(H, U, rs(G), le);
        if (G.$$typeof === A) return Tt(H, U, xs(H, G), le);
        os(H, G);
      }
      return (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
        ? ((G = "" + G),
          U !== null && U.tag === 6
            ? (a(H, U.sibling), (le = s(U, G)), (le.return = H), (H = le))
            : (a(H, U), (le = df(G, H.mode, le)), (le.return = H), (H = le)),
          y(H))
        : a(H, U);
    }
    return function (H, U, G, le) {
      try {
        Si = 0;
        var ve = Tt(H, U, G, le);
        return (po = null), ve;
      } catch (Ce) {
        if (Ce === bi) throw Ce;
        var $e = _n(29, Ce, null, H.mode);
        return ($e.lanes = le), ($e.return = H), $e;
      } finally {
      }
    };
  }
  var Tr = Rh(!0),
    wh = Rh(!1),
    ho = pe(null),
    is = pe(0);
  function Ah(e, t) {
    (e = ka), X(is, e), X(ho, t), (ka = e | t.baseLanes);
  }
  function vu() {
    X(is, ka), X(ho, ho.current);
  }
  function bu() {
    (ka = is.current), ye(ho), ye(is);
  }
  var Fn = pe(null),
    aa = null;
  function Ia(e) {
    var t = e.alternate;
    X(Ft, Ft.current & 1),
      X(Fn, e),
      aa === null &&
        (t === null || ho.current !== null || t.memoizedState !== null) &&
        (aa = e);
  }
  function Mh(e) {
    if (e.tag === 22) {
      if ((X(Ft, Ft.current), X(Fn, e), aa === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (aa = e);
      }
    } else Ya();
  }
  function Ya() {
    X(Ft, Ft.current), X(Fn, Fn.current);
  }
  function Ea(e) {
    ye(Fn), aa === e && (aa = null), ye(Ft);
  }
  var Ft = pe(0);
  function ls(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ub =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    _b = n.unstable_scheduleCallback,
    Lb = n.unstable_NormalPriority,
    $t = {
      $$typeof: A,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function xu() {
    return { controller: new Ub(), data: new Map(), refCount: 0 };
  }
  function Ti(e) {
    e.refCount--,
      e.refCount === 0 &&
        _b(Lb, function () {
          e.controller.abort();
        });
  }
  var Ei = null,
    Su = 0,
    mo = 0,
    go = null;
  function Hb(e, t) {
    if (Ei === null) {
      var a = (Ei = []);
      (Su = 0),
        (mo = Mf()),
        (go = {
          status: "pending",
          value: void 0,
          then: function (o) {
            a.push(o);
          },
        });
    }
    return Su++, t.then(Oh, Oh), t;
  }
  function Oh() {
    if (--Su === 0 && Ei !== null) {
      go !== null && (go.status = "fulfilled");
      var e = Ei;
      (Ei = null), (mo = 0), (go = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Pb(e, t) {
    var a = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          a.push(s);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = t);
          for (var s = 0; s < a.length; s++) (0, a[s])(t);
        },
        function (s) {
          for (o.status = "rejected", o.reason = s, s = 0; s < a.length; s++)
            (0, a[s])(void 0);
        }
      ),
      o
    );
  }
  var Bh = q.S;
  q.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Hb(e, t),
      Bh !== null && Bh(e, t);
  };
  var Er = pe(null);
  function Cu() {
    var e = Er.current;
    return e !== null ? e : gt.pooledCache;
  }
  function ss(e, t) {
    t === null ? X(Er, Er.current) : X(Er, t.pool);
  }
  function jh() {
    var e = Cu();
    return e === null ? null : { parent: $t._currentValue, pool: e };
  }
  var Wa = 0,
    De = null,
    st = null,
    jt = null,
    cs = !1,
    yo = !1,
    Rr = !1,
    us = 0,
    Ri = 0,
    vo = null,
    qb = 0;
  function Mt() {
    throw Error(l(321));
  }
  function Tu(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Sn(e[a], t[a])) return !1;
    return !0;
  }
  function Eu(e, t, a, o, s, u) {
    return (
      (Wa = u),
      (De = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? wr : Va),
      (Rr = !1),
      (u = a(o, s)),
      (Rr = !1),
      yo && (u = Dh(t, a, o, s)),
      zh(e),
      u
    );
  }
  function zh(e) {
    q.H = ra;
    var t = st !== null && st.next !== null;
    if (((Wa = 0), (jt = st = De = null), (cs = !1), (Ri = 0), (vo = null), t))
      throw Error(l(300));
    e === null ||
      Lt ||
      ((e = e.dependencies), e !== null && bs(e) && (Lt = !0));
  }
  function Dh(e, t, a, o) {
    De = e;
    var s = 0;
    do {
      if ((yo && (vo = null), (Ri = 0), (yo = !1), 25 <= s))
        throw Error(l(301));
      if (((s += 1), (jt = st = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        (u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0);
      }
      (q.H = Ar), (u = t(a, o));
    } while (yo);
    return u;
  }
  function Gb() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? wi(t) : t),
      (e = e.useState()[0]),
      (st !== null ? st.memoizedState : null) !== e && (De.flags |= 1024),
      t
    );
  }
  function Ru() {
    var e = us !== 0;
    return (us = 0), e;
  }
  function wu(e, t, a) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
  }
  function Au(e) {
    if (cs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      cs = !1;
    }
    (Wa = 0), (jt = st = De = null), (yo = !1), (Ri = us = 0), (vo = null);
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return jt === null ? (De.memoizedState = jt = e) : (jt = jt.next = e), jt;
  }
  function zt() {
    if (st === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = st.next;
    var t = jt === null ? De.memoizedState : jt.next;
    if (t !== null) (jt = t), (st = e);
    else {
      if (e === null)
        throw De.alternate === null ? Error(l(467)) : Error(l(310));
      (st = e),
        (e = {
          memoizedState: st.memoizedState,
          baseState: st.baseState,
          baseQueue: st.baseQueue,
          queue: st.queue,
          next: null,
        }),
        jt === null ? (De.memoizedState = jt = e) : (jt = jt.next = e);
    }
    return jt;
  }
  var fs;
  fs = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function wi(e) {
    var t = Ri;
    return (
      (Ri += 1),
      vo === null && (vo = []),
      (e = Ch(vo, e, t)),
      (t = De),
      (jt === null ? t.memoizedState : jt.next) === null &&
        ((t = t.alternate),
        (q.H = t === null || t.memoizedState === null ? wr : Va)),
      e
    );
  }
  function ds(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wi(e);
      if (e.$$typeof === A) return Zt(e);
    }
    throw Error(l(438, String(e)));
  }
  function Mu(e) {
    var t = null,
      a = De.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var o = De.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (t = {
              data: o.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = fs()), (De.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), o = 0; o < e; o++) a[o] = M;
    return t.index++, a;
  }
  function Ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ps(e) {
    var t = zt();
    return Ou(t, st, e);
  }
  function Ou(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = a;
    var s = e.baseQueue,
      u = o.pending;
    if (u !== null) {
      if (s !== null) {
        var y = s.next;
        (s.next = u.next), (u.next = y);
      }
      (t.baseQueue = s = u), (o.pending = null);
    }
    if (((u = e.baseState), s === null)) e.memoizedState = u;
    else {
      t = s.next;
      var S = (y = null),
        B = null,
        _ = t,
        re = !1;
      do {
        var ue = _.lane & -536870913;
        if (ue !== _.lane ? (Ie & ue) === ue : (Wa & ue) === ue) {
          var Y = _.revertLane;
          if (Y === 0)
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              ue === mo && (re = !0);
          else if ((Wa & Y) === Y) {
            (_ = _.next), Y === mo && (re = !0);
            continue;
          } else
            (ue = {
              lane: 0,
              revertLane: _.revertLane,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              B === null ? ((S = B = ue), (y = u)) : (B = B.next = ue),
              (De.lanes |= Y),
              (ar |= Y);
          (ue = _.action),
            Rr && a(u, ue),
            (u = _.hasEagerState ? _.eagerState : a(u, ue));
        } else
          (Y = {
            lane: ue,
            revertLane: _.revertLane,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            B === null ? ((S = B = Y), (y = u)) : (B = B.next = Y),
            (De.lanes |= ue),
            (ar |= ue);
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (
        (B === null ? (y = u) : (B.next = S),
        !Sn(u, e.memoizedState) && ((Lt = !0), re && ((a = go), a !== null)))
      )
        throw a;
      (e.memoizedState = u),
        (e.baseState = y),
        (e.baseQueue = B),
        (o.lastRenderedState = u);
    }
    return s === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Bu(e) {
    var t = zt(),
      a = t.queue;
    if (a === null) throw Error(l(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch,
      s = a.pending,
      u = t.memoizedState;
    if (s !== null) {
      a.pending = null;
      var y = (s = s.next);
      do (u = e(u, y.action)), (y = y.next);
      while (y !== s);
      Sn(u, t.memoizedState) || (Lt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (a.lastRenderedState = u);
    }
    return [u, o];
  }
  function kh(e, t, a) {
    var o = De,
      s = zt(),
      u = Ve;
    if (u) {
      if (a === void 0) throw Error(l(407));
      a = a();
    } else a = t();
    var y = !Sn((st || s).memoizedState, a);
    if (
      (y && ((s.memoizedState = a), (Lt = !0)),
      (s = s.queue),
      Du($h.bind(null, o, s, e), [e]),
      s.getSnapshot !== t || y || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        bo(9, Fh.bind(null, o, s, a, t), { destroy: void 0 }, null),
        gt === null)
      )
        throw Error(l(349));
      u || (Wa & 60) !== 0 || Nh(o, t, a);
    }
    return a;
  }
  function Nh(e, t, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = De.updateQueue),
      t === null
        ? ((t = fs()), (De.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
  }
  function Fh(e, t, a, o) {
    (t.value = a), (t.getSnapshot = o), Uh(t) && _h(e);
  }
  function $h(e, t, a) {
    return a(function () {
      Uh(t) && _h(e);
    });
  }
  function Uh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Sn(e, a);
    } catch {
      return !0;
    }
  }
  function _h(e) {
    var t = Ga(e, 2);
    t !== null && on(t, e, 2);
  }
  function ju(e) {
    var t = hn();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Rr)) {
        Fe(!0);
        try {
          a();
        } finally {
          Fe(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Lh(e, t, a, o) {
    return (e.baseState = a), Ou(e, st, typeof o == "function" ? o : Ra);
  }
  function Ib(e, t, a, o, s) {
    if (gs(e)) throw Error(l(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          u.listeners.push(y);
        },
      };
      q.T !== null ? a(!0) : (u.isTransition = !1),
        o(u),
        (a = t.pending),
        a === null
          ? ((u.next = t.pending = u), Hh(t, u))
          : ((u.next = a.next), (t.pending = a.next = u));
    }
  }
  function Hh(e, t) {
    var a = t.action,
      o = t.payload,
      s = e.state;
    if (t.isTransition) {
      var u = q.T,
        y = {};
      q.T = y;
      try {
        var S = a(s, o),
          B = q.S;
        B !== null && B(y, S), Ph(e, t, S);
      } catch (_) {
        zu(e, t, _);
      } finally {
        q.T = u;
      }
    } else
      try {
        (u = a(s, o)), Ph(e, t, u);
      } catch (_) {
        zu(e, t, _);
      }
  }
  function Ph(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (o) {
            qh(e, t, o);
          },
          function (o) {
            return zu(e, t, o);
          }
        )
      : qh(e, t, a);
  }
  function qh(e, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Gh(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Hh(e, a)));
  }
  function zu(e, t, a) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (t.status = "rejected"), (t.reason = a), Gh(t), (t = t.next);
      while (t !== o);
    }
    e.action = null;
  }
  function Gh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ih(e, t) {
    return t;
  }
  function Yh(e, t) {
    if (Ve) {
      var a = gt.formState;
      if (a !== null) {
        e: {
          var o = De;
          if (Ve) {
            if (qt) {
              t: {
                for (var s = qt, u = na; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (((s = ta(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                (u = s.data), (s = u === "F!" || u === "F" ? s : null);
              }
              if (s) {
                (qt = ta(s.nextSibling)), (o = s.data === "F!");
                break e;
              }
            }
            Cr(o);
          }
          o = !1;
        }
        o && (t = a[0]);
      }
    }
    return (
      (a = hn()),
      (a.memoizedState = a.baseState = t),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ih,
        lastRenderedState: t,
      }),
      (a.queue = o),
      (a = um.bind(null, De, o)),
      (o.dispatch = a),
      (o = ju(!1)),
      (u = Uu.bind(null, De, !1, o.queue)),
      (o = hn()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (o.queue = s),
      (a = Ib.bind(null, De, s, u, a)),
      (s.dispatch = a),
      (o.memoizedState = e),
      [t, a, !1]
    );
  }
  function Wh(e) {
    var t = zt();
    return Vh(t, st, e);
  }
  function Vh(e, t, a) {
    (t = Ou(e, t, Ih)[0]),
      (e = ps(Ra)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? wi(t)
          : t);
    var o = zt(),
      s = o.queue,
      u = s.dispatch;
    return (
      a !== o.memoizedState &&
        ((De.flags |= 2048),
        bo(9, Yb.bind(null, s, a), { destroy: void 0 }, null)),
      [t, u, e]
    );
  }
  function Yb(e, t) {
    e.action = t;
  }
  function Xh(e) {
    var t = zt(),
      a = st;
    if (a !== null) return Vh(t, a, e);
    zt(), (t = t.memoizedState), (a = zt());
    var o = a.queue.dispatch;
    return (a.memoizedState = e), [t, o, !1];
  }
  function bo(e, t, a, o) {
    return (
      (e = { tag: e, create: t, inst: a, deps: o, next: null }),
      (t = De.updateQueue),
      t === null && ((t = fs()), (De.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((o = a.next), (a.next = e), (e.next = o), (t.lastEffect = e)),
      e
    );
  }
  function Kh() {
    return zt().memoizedState;
  }
  function hs(e, t, a, o) {
    var s = hn();
    (De.flags |= e),
      (s.memoizedState = bo(
        1 | t,
        a,
        { destroy: void 0 },
        o === void 0 ? null : o
      ));
  }
  function ms(e, t, a, o) {
    var s = zt();
    o = o === void 0 ? null : o;
    var u = s.memoizedState.inst;
    st !== null && o !== null && Tu(o, st.memoizedState.deps)
      ? (s.memoizedState = bo(t, a, u, o))
      : ((De.flags |= e), (s.memoizedState = bo(1 | t, a, u, o)));
  }
  function Qh(e, t) {
    hs(8390656, 8, e, t);
  }
  function Du(e, t) {
    ms(2048, 8, e, t);
  }
  function Zh(e, t) {
    return ms(4, 2, e, t);
  }
  function Jh(e, t) {
    return ms(4, 4, e, t);
  }
  function em(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function tm(e, t, a) {
    (a = a != null ? a.concat([e]) : null), ms(4, 4, em.bind(null, t, e), a);
  }
  function ku() {}
  function nm(e, t) {
    var a = zt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && Tu(t, o[1]) ? o[0] : ((a.memoizedState = [e, t]), e);
  }
  function am(e, t) {
    var a = zt();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    if (t !== null && Tu(t, o[1])) return o[0];
    if (((o = e()), Rr)) {
      Fe(!0);
      try {
        e();
      } finally {
        Fe(!1);
      }
    }
    return (a.memoizedState = [o, t]), o;
  }
  function Nu(e, t, a) {
    return a === void 0 || (Wa & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = og()), (De.lanes |= e), (ar |= e), a);
  }
  function rm(e, t, a, o) {
    return Sn(a, t)
      ? a
      : ho.current !== null
      ? ((e = Nu(e, a, o)), Sn(e, t) || (Lt = !0), e)
      : (Wa & 42) === 0
      ? ((Lt = !0), (e.memoizedState = a))
      : ((e = og()), (De.lanes |= e), (ar |= e), t);
  }
  function om(e, t, a, o, s) {
    var u = ne.p;
    ne.p = u !== 0 && 8 > u ? u : 8;
    var y = q.T,
      S = {};
    (q.T = S), Uu(e, !1, t, a);
    try {
      var B = s(),
        _ = q.S;
      if (
        (_ !== null && _(S, B),
        B !== null && typeof B == "object" && typeof B.then == "function")
      ) {
        var re = Pb(B, o);
        Ai(e, t, re, Rn(e));
      } else Ai(e, t, o, Rn(e));
    } catch (ue) {
      Ai(e, t, { then: function () {}, status: "rejected", reason: ue }, Rn());
    } finally {
      (ne.p = u), (q.T = y);
    }
  }
  function Wb() {}
  function Fu(e, t, a, o) {
    if (e.tag !== 5) throw Error(l(476));
    var s = im(e).queue;
    om(
      e,
      s,
      t,
      fe,
      a === null
        ? Wb
        : function () {
            return lm(e), a(o);
          }
    );
  }
  function im(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: fe,
      baseState: fe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: fe,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ra,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function lm(e) {
    var t = im(e).next.queue;
    Ai(e, t, {}, Rn());
  }
  function $u() {
    return Zt(Wi);
  }
  function sm() {
    return zt().memoizedState;
  }
  function cm() {
    return zt().memoizedState;
  }
  function Vb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Rn();
          e = Qa(a);
          var o = Za(t, e, a);
          o !== null && (on(o, t, a), Bi(o, t, a)),
            (t = { cache: xu() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Xb(e, t, a) {
    var o = Rn();
    (a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      gs(e)
        ? fm(t, a)
        : ((a = pu(e, t, a, o)), a !== null && (on(a, e, o), dm(a, t, o)));
  }
  function um(e, t, a) {
    var o = Rn();
    Ai(e, t, a, o);
  }
  function Ai(e, t, a, o) {
    var s = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (gs(e)) fm(t, s);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var y = t.lastRenderedState,
            S = u(y, a);
          if (((s.hasEagerState = !0), (s.eagerState = S), Sn(S, y)))
            return Jl(e, t, s, 0), gt === null && Zl(), !1;
        } catch {
        } finally {
        }
      if (((a = pu(e, t, s, o)), a !== null))
        return on(a, e, o), dm(a, t, o), !0;
    }
    return !1;
  }
  function Uu(e, t, a, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Mf(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gs(e))
    ) {
      if (t) throw Error(l(479));
    } else (t = pu(e, a, o, 2)), t !== null && on(t, e, 2);
  }
  function gs(e) {
    var t = e.alternate;
    return e === De || (t !== null && t === De);
  }
  function fm(e, t) {
    yo = cs = !0;
    var a = e.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t);
  }
  function dm(e, t, a) {
    if ((a & 4194176) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (a |= o), (t.lanes = a), Tp(e, a);
    }
  }
  var ra = {
    readContext: Zt,
    use: ds,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
  };
  (ra.useCacheRefresh = Mt),
    (ra.useMemoCache = Mt),
    (ra.useHostTransitionStatus = Mt),
    (ra.useFormState = Mt),
    (ra.useActionState = Mt),
    (ra.useOptimistic = Mt);
  var wr = {
    readContext: Zt,
    use: ds,
    useCallback: function (e, t) {
      return (hn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Zt,
    useEffect: Qh,
    useImperativeHandle: function (e, t, a) {
      (a = a != null ? a.concat([e]) : null),
        hs(4194308, 4, em.bind(null, t, e), a);
    },
    useLayoutEffect: function (e, t) {
      return hs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      hs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var a = hn();
      t = t === void 0 ? null : t;
      var o = e();
      if (Rr) {
        Fe(!0);
        try {
          e();
        } finally {
          Fe(!1);
        }
      }
      return (a.memoizedState = [o, t]), o;
    },
    useReducer: function (e, t, a) {
      var o = hn();
      if (a !== void 0) {
        var s = a(t);
        if (Rr) {
          Fe(!0);
          try {
            a(t);
          } finally {
            Fe(!1);
          }
        }
      } else s = t;
      return (
        (o.memoizedState = o.baseState = s),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: s,
        }),
        (o.queue = e),
        (e = e.dispatch = Xb.bind(null, De, e)),
        [o.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = hn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = ju(e);
      var t = e.queue,
        a = um.bind(null, De, t);
      return (t.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: ku,
    useDeferredValue: function (e, t) {
      var a = hn();
      return Nu(a, e, t);
    },
    useTransition: function () {
      var e = ju(!1);
      return (
        (e = om.bind(null, De, e.queue, !0, !1)),
        (hn().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, a) {
      var o = De,
        s = hn();
      if (Ve) {
        if (a === void 0) throw Error(l(407));
        a = a();
      } else {
        if (((a = t()), gt === null)) throw Error(l(349));
        (Ie & 60) !== 0 || Nh(o, t, a);
      }
      s.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return (
        (s.queue = u),
        Qh($h.bind(null, o, u, e), [e]),
        (o.flags |= 2048),
        bo(9, Fh.bind(null, o, u, a, t), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = hn(),
        t = gt.identifierPrefix;
      if (Ve) {
        var a = Ta,
          o = Ca;
        (a = (o & ~(1 << (32 - We(o) - 1))).toString(32) + a),
          (t = ":" + t + "R" + a),
          (a = us++),
          0 < a && (t += "H" + a.toString(32)),
          (t += ":");
      } else (a = qb++), (t = ":" + t + "r" + a.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (hn().memoizedState = Vb.bind(null, De));
    },
  };
  (wr.useMemoCache = Mu),
    (wr.useHostTransitionStatus = $u),
    (wr.useFormState = Yh),
    (wr.useActionState = Yh),
    (wr.useOptimistic = function (e) {
      var t = hn();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = a), (t = Uu.bind(null, De, !0, a)), (a.dispatch = t), [e, t]
      );
    });
  var Va = {
    readContext: Zt,
    use: ds,
    useCallback: nm,
    useContext: Zt,
    useEffect: Du,
    useImperativeHandle: tm,
    useInsertionEffect: Zh,
    useLayoutEffect: Jh,
    useMemo: am,
    useReducer: ps,
    useRef: Kh,
    useState: function () {
      return ps(Ra);
    },
    useDebugValue: ku,
    useDeferredValue: function (e, t) {
      var a = zt();
      return rm(a, st.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ps(Ra)[0],
        t = zt().memoizedState;
      return [typeof e == "boolean" ? e : wi(e), t];
    },
    useSyncExternalStore: kh,
    useId: sm,
  };
  (Va.useCacheRefresh = cm),
    (Va.useMemoCache = Mu),
    (Va.useHostTransitionStatus = $u),
    (Va.useFormState = Wh),
    (Va.useActionState = Wh),
    (Va.useOptimistic = function (e, t) {
      var a = zt();
      return Lh(a, st, e, t);
    });
  var Ar = {
    readContext: Zt,
    use: ds,
    useCallback: nm,
    useContext: Zt,
    useEffect: Du,
    useImperativeHandle: tm,
    useInsertionEffect: Zh,
    useLayoutEffect: Jh,
    useMemo: am,
    useReducer: Bu,
    useRef: Kh,
    useState: function () {
      return Bu(Ra);
    },
    useDebugValue: ku,
    useDeferredValue: function (e, t) {
      var a = zt();
      return st === null ? Nu(a, e, t) : rm(a, st.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Bu(Ra)[0],
        t = zt().memoizedState;
      return [typeof e == "boolean" ? e : wi(e), t];
    },
    useSyncExternalStore: kh,
    useId: sm,
  };
  (Ar.useCacheRefresh = cm),
    (Ar.useMemoCache = Mu),
    (Ar.useHostTransitionStatus = $u),
    (Ar.useFormState = Xh),
    (Ar.useActionState = Xh),
    (Ar.useOptimistic = function (e, t) {
      var a = zt();
      return st !== null
        ? Lh(a, st, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function _u(e, t, a, o) {
    (t = e.memoizedState),
      (a = a(o, t)),
      (a = a == null ? t : v({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Lu = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? se(e) === e : !1;
    },
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var o = Rn(),
        s = Qa(o);
      (s.payload = t),
        a != null && (s.callback = a),
        (t = Za(e, s, o)),
        t !== null && (on(t, e, o), Bi(t, e, o));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var o = Rn(),
        s = Qa(o);
      (s.tag = 1),
        (s.payload = t),
        a != null && (s.callback = a),
        (t = Za(e, s, o)),
        t !== null && (on(t, e, o), Bi(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Rn(),
        o = Qa(a);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = Za(e, o, a)),
        t !== null && (on(t, e, a), Bi(t, e, a));
    },
  };
  function pm(e, t, a, o, s, u, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, u, y)
        : t.prototype && t.prototype.isPureReactComponent
        ? !hi(a, o) || !hi(s, u)
        : !0
    );
  }
  function hm(e, t, a, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, o),
      t.state !== e && Lu.enqueueReplaceState(t, t.state, null);
  }
  function Mr(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t) o !== "ref" && (a[o] = t[o]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = v({}, a));
      for (var s in e) a[s] === void 0 && (a[s] = e[s]);
    }
    return a;
  }
  var ys =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function mm(e) {
    ys(e);
  }
  function gm(e) {
    console.error(e);
  }
  function ym(e) {
    ys(e);
  }
  function vs(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function vm(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Hu(e, t, a) {
    return (
      (a = Qa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        vs(e, t);
      }),
      a
    );
  }
  function bm(e) {
    return (e = Qa(e)), (e.tag = 3), e;
  }
  function xm(e, t, a, o) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = o.value;
      (e.payload = function () {
        return s(u);
      }),
        (e.callback = function () {
          vm(t, a, o);
        });
    }
    var y = a.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (e.callback = function () {
        vm(t, a, o),
          typeof s != "function" &&
            (rr === null ? (rr = new Set([this])) : rr.add(this));
        var S = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: S !== null ? S : "",
        });
      });
  }
  function Kb(e, t, a, o, s) {
    if (
      ((a.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Oi(t, a, s, !0),
        (a = Fn.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              aa === null ? Tf() : a.alternate === null && Ct === 0 && (Ct = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = s),
              o === yu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([o])) : t.add(o),
                  Rf(e, o, s)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              o === yu
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([o])) : a.add(o)),
                  Rf(e, o, s)),
              !1
            );
        }
        throw Error(l(435, a.tag));
      }
      return Rf(e, o, s), Tf(), !1;
    }
    if (Ve)
      return (
        (t = Fn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            o !== gu && ((e = Error(l(422), { cause: o })), vi(Dn(e, a))))
          : (o !== gu && ((t = Error(l(423), { cause: o })), vi(Dn(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (o = Dn(o, a)),
            (s = Hu(e.stateNode, o, s)),
            nf(e, s),
            Ct !== 4 && (Ct = 2)),
        !1
      );
    var u = Error(l(520), { cause: o });
    if (
      ((u = Dn(u, a)),
      Ui === null ? (Ui = [u]) : Ui.push(u),
      Ct !== 4 && (Ct = 2),
      t === null)
    )
      return !0;
    (o = Dn(o, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = s & -s),
            (a.lanes |= e),
            (e = Hu(a.stateNode, o, e)),
            nf(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (rr === null || !rr.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (s &= -s),
              (a.lanes |= s),
              (s = bm(s)),
              xm(s, e, a, o),
              nf(a, s),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Sm = Error(l(461)),
    Lt = !1;
  function Gt(e, t, a, o) {
    t.child = e === null ? wh(t, null, a, o) : Tr(t, e.child, a, o);
  }
  function Cm(e, t, a, o, s) {
    a = a.render;
    var u = t.ref;
    if ("ref" in o) {
      var y = {};
      for (var S in o) S !== "ref" && (y[S] = o[S]);
    } else y = o;
    return (
      Br(t),
      (o = Eu(e, t, a, y, u, s)),
      (S = Ru()),
      e !== null && !Lt
        ? (wu(e, t, s), wa(e, t, s))
        : (Ve && S && hu(t), (t.flags |= 1), Gt(e, t, o, s), t.child)
    );
  }
  function Tm(e, t, a, o, s) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" &&
        !ff(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = u), Em(e, t, u, o, s))
        : ((e = Ts(a.type, null, o, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !Ku(e, s))) {
      var y = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : hi), a(y, o) && e.ref === t.ref)
      )
        return wa(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = nr(u, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Em(e, t, a, o, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (hi(u, o) && e.ref === t.ref)
        if (((Lt = !1), (t.pendingProps = o = u), Ku(e, s)))
          (e.flags & 131072) !== 0 && (Lt = !0);
        else return (t.lanes = e.lanes), wa(e, t, s);
    }
    return Pu(e, t, a, o, s);
  }
  function Rm(e, t, a) {
    var o = t.pendingProps,
      s = o.children,
      u = (t.stateNode._pendingVisibility & 2) !== 0,
      y = e !== null ? e.memoizedState : null;
    if ((Mi(e, t), o.mode === "hidden" || u)) {
      if ((t.flags & 128) !== 0) {
        if (((o = y !== null ? y.baseLanes | a : a), e !== null)) {
          for (s = t.child = e.child, u = 0; s !== null; )
            (u = u | s.lanes | s.childLanes), (s = s.sibling);
          t.childLanes = u & ~o;
        } else (t.childLanes = 0), (t.child = null);
        return wm(e, t, o, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ss(t, y !== null ? y.cachePool : null),
          y !== null ? Ah(t, y) : vu(),
          Mh(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          wm(e, t, y !== null ? y.baseLanes | a : a, a)
        );
    } else
      y !== null
        ? (ss(t, y.cachePool), Ah(t, y), Ya(), (t.memoizedState = null))
        : (e !== null && ss(t, null), vu(), Ya());
    return Gt(e, t, s, a), t.child;
  }
  function wm(e, t, a, o) {
    var s = Cu();
    return (
      (s = s === null ? null : { parent: $t._currentValue, pool: s }),
      (t.memoizedState = { baseLanes: a, cachePool: s }),
      e !== null && ss(t, null),
      vu(),
      Mh(t),
      e !== null && Oi(e, t, o, !0),
      null
    );
  }
  function Mi(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(l(284));
      (e === null || e.ref !== a) && (t.flags |= 2097664);
    }
  }
  function Pu(e, t, a, o, s) {
    return (
      Br(t),
      (a = Eu(e, t, a, o, void 0, s)),
      (o = Ru()),
      e !== null && !Lt
        ? (wu(e, t, s), wa(e, t, s))
        : (Ve && o && hu(t), (t.flags |= 1), Gt(e, t, a, s), t.child)
    );
  }
  function Am(e, t, a, o, s, u) {
    return (
      Br(t),
      (t.updateQueue = null),
      (a = Dh(t, o, a, s)),
      zh(e),
      (o = Ru()),
      e !== null && !Lt
        ? (wu(e, t, u), wa(e, t, u))
        : (Ve && o && hu(t), (t.flags |= 1), Gt(e, t, a, u), t.child)
    );
  }
  function Mm(e, t, a, o, s) {
    if ((Br(t), t.stateNode === null)) {
      var u = co,
        y = a.contextType;
      typeof y == "object" && y !== null && (u = Zt(y)),
        (u = new a(o, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = Lu),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = o),
        (u.state = t.memoizedState),
        (u.refs = {}),
        ef(t),
        (y = a.contextType),
        (u.context = typeof y == "object" && y !== null ? Zt(y) : co),
        (u.state = t.memoizedState),
        (y = a.getDerivedStateFromProps),
        typeof y == "function" && (_u(t, a, y, o), (u.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((y = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          y !== u.state && Lu.enqueueReplaceState(u, u.state, null),
          zi(t, o, u, s),
          ji(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      u = t.stateNode;
      var S = t.memoizedProps,
        B = Mr(a, S);
      u.props = B;
      var _ = u.context,
        re = a.contextType;
      (y = co), typeof re == "object" && re !== null && (y = Zt(re));
      var ue = a.getDerivedStateFromProps;
      (re =
        typeof ue == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (S = t.pendingProps !== S),
        re ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((S || _ !== y) && hm(t, u, o, y)),
        (Ka = !1);
      var Y = t.memoizedState;
      (u.state = Y),
        zi(t, o, u, s),
        ji(),
        (_ = t.memoizedState),
        S || Y !== _ || Ka
          ? (typeof ue == "function" &&
              (_u(t, a, ue, o), (_ = t.memoizedState)),
            (B = Ka || pm(t, a, B, o, Y, _, y))
              ? (re ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = _)),
            (u.props = o),
            (u.state = _),
            (u.context = y),
            (o = B))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1));
    } else {
      (u = t.stateNode),
        tf(e, t),
        (y = t.memoizedProps),
        (re = Mr(a, y)),
        (u.props = re),
        (ue = t.pendingProps),
        (Y = u.context),
        (_ = a.contextType),
        (B = co),
        typeof _ == "object" && _ !== null && (B = Zt(_)),
        (S = a.getDerivedStateFromProps),
        (_ =
          typeof S == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((y !== ue || Y !== B) && hm(t, u, o, B)),
        (Ka = !1),
        (Y = t.memoizedState),
        (u.state = Y),
        zi(t, o, u, s),
        ji();
      var te = t.memoizedState;
      y !== ue ||
      Y !== te ||
      Ka ||
      (e !== null && e.dependencies !== null && bs(e.dependencies))
        ? (typeof S == "function" && (_u(t, a, S, o), (te = t.memoizedState)),
          (re =
            Ka ||
            pm(t, a, re, o, Y, te, B) ||
            (e !== null && e.dependencies !== null && bs(e.dependencies)))
            ? (_ ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(o, te, B),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(o, te, B)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (y === e.memoizedProps && Y === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && Y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = te)),
          (u.props = o),
          (u.state = te),
          (u.context = B),
          (o = re))
        : (typeof u.componentDidUpdate != "function" ||
            (y === e.memoizedProps && Y === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && Y === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return (
      (u = o),
      Mi(e, t),
      (o = (t.flags & 128) !== 0),
      u || o
        ? ((u = t.stateNode),
          (a =
            o && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && o
            ? ((t.child = Tr(t, e.child, null, s)),
              (t.child = Tr(t, null, a, s)))
            : Gt(e, t, a, s),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = wa(e, t, s)),
      e
    );
  }
  function Om(e, t, a, o) {
    return yi(), (t.flags |= 256), Gt(e, t, a, o), t.child;
  }
  var qu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Gu(e) {
    return { baseLanes: e, cachePool: jh() };
  }
  function Iu(e, t, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= Ln), e;
  }
  function Bm(e, t, a) {
    var o = t.pendingProps,
      s = !1,
      u = (t.flags & 128) !== 0,
      y;
    if (
      ((y = u) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (Ft.current & 2) !== 0),
      y && ((s = !0), (t.flags &= -129)),
      (y = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ve) {
        if ((s ? Ia(t) : Ya(), Ve)) {
          var S = qt,
            B;
          if ((B = S)) {
            e: {
              for (B = S, S = na; B.nodeType !== 8; ) {
                if (!S) {
                  S = null;
                  break e;
                }
                if (((B = ta(B.nextSibling)), B === null)) {
                  S = null;
                  break e;
                }
              }
              S = B;
            }
            S !== null
              ? ((t.memoizedState = {
                  dehydrated: S,
                  treeContext: xr !== null ? { id: Ca, overflow: Ta } : null,
                  retryLane: 536870912,
                }),
                (B = _n(18, null, null, 0)),
                (B.stateNode = S),
                (B.return = t),
                (t.child = B),
                (rn = t),
                (qt = null),
                (B = !0))
              : (B = !1);
          }
          B || Cr(t);
        }
        if (
          ((S = t.memoizedState),
          S !== null && ((S = S.dehydrated), S !== null))
        )
          return S.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        Ea(t);
      }
      return (
        (S = o.children),
        (o = o.fallback),
        s
          ? (Ya(),
            (s = t.mode),
            (S = Wu({ mode: "hidden", children: S }, s)),
            (o = zr(o, s, a, null)),
            (S.return = t),
            (o.return = t),
            (S.sibling = o),
            (t.child = S),
            (s = t.child),
            (s.memoizedState = Gu(a)),
            (s.childLanes = Iu(e, y, a)),
            (t.memoizedState = qu),
            o)
          : (Ia(t), Yu(t, S))
      );
    }
    if (
      ((B = e.memoizedState), B !== null && ((S = B.dehydrated), S !== null))
    ) {
      if (u)
        t.flags & 256
          ? (Ia(t), (t.flags &= -257), (t = Vu(e, t, a)))
          : t.memoizedState !== null
          ? (Ya(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Ya(),
            (s = o.fallback),
            (S = t.mode),
            (o = Wu({ mode: "visible", children: o.children }, S)),
            (s = zr(s, S, a, null)),
            (s.flags |= 2),
            (o.return = t),
            (s.return = t),
            (o.sibling = s),
            (t.child = o),
            Tr(t, e.child, null, a),
            (o = t.child),
            (o.memoizedState = Gu(a)),
            (o.childLanes = Iu(e, y, a)),
            (t.memoizedState = qu),
            (t = s));
      else if ((Ia(t), S.data === "$!")) {
        if (((y = S.nextSibling && S.nextSibling.dataset), y)) var _ = y.dgst;
        (y = _),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = y),
          vi({ value: o, source: null, stack: null }),
          (t = Vu(e, t, a));
      } else if (
        (Lt || Oi(e, t, a, !1), (y = (a & e.childLanes) !== 0), Lt || y)
      ) {
        if (((y = gt), y !== null)) {
          if (((o = a & -a), (o & 42) !== 0)) o = 1;
          else
            switch (o) {
              case 2:
                o = 1;
                break;
              case 8:
                o = 4;
                break;
              case 32:
                o = 16;
                break;
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
                o = 64;
                break;
              case 268435456:
                o = 134217728;
                break;
              default:
                o = 0;
            }
          if (
            ((o = (o & (y.suspendedLanes | a)) !== 0 ? 0 : o),
            o !== 0 && o !== B.retryLane)
          )
            throw ((B.retryLane = o), Ga(e, o), on(y, e, o), Sm);
        }
        S.data === "$?" || Tf(), (t = Vu(e, t, a));
      } else
        S.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = f1.bind(null, e)),
            (S._reactRetry = t),
            (t = null))
          : ((e = B.treeContext),
            (qt = ta(S.nextSibling)),
            (rn = t),
            (Ve = !0),
            (Jn = null),
            (na = !1),
            e !== null &&
              ((kn[Nn++] = Ca),
              (kn[Nn++] = Ta),
              (kn[Nn++] = xr),
              (Ca = e.id),
              (Ta = e.overflow),
              (xr = t)),
            (t = Yu(t, o.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (Ya(),
        (s = o.fallback),
        (S = t.mode),
        (B = e.child),
        (_ = B.sibling),
        (o = nr(B, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = B.subtreeFlags & 31457280),
        _ !== null ? (s = nr(_, s)) : ((s = zr(s, S, a, null)), (s.flags |= 2)),
        (s.return = t),
        (o.return = t),
        (o.sibling = s),
        (t.child = o),
        (o = s),
        (s = t.child),
        (S = e.child.memoizedState),
        S === null
          ? (S = Gu(a))
          : ((B = S.cachePool),
            B !== null
              ? ((_ = $t._currentValue),
                (B = B.parent !== _ ? { parent: _, pool: _ } : B))
              : (B = jh()),
            (S = { baseLanes: S.baseLanes | a, cachePool: B })),
        (s.memoizedState = S),
        (s.childLanes = Iu(e, y, a)),
        (t.memoizedState = qu),
        o)
      : (Ia(t),
        (a = e.child),
        (e = a.sibling),
        (a = nr(a, { mode: "visible", children: o.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((y = t.deletions),
          y === null ? ((t.deletions = [e]), (t.flags |= 16)) : y.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Yu(e, t) {
    return (
      (t = Wu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Wu(e, t) {
    return ng(e, t, 0, null);
  }
  function Vu(e, t, a) {
    return (
      Tr(t, e.child, null, a),
      (e = Yu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jm(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), Zu(e.return, t, a);
  }
  function Xu(e, t, a, o, s) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: a,
          tailMode: s,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = o),
        (u.tail = a),
        (u.tailMode = s));
  }
  function zm(e, t, a) {
    var o = t.pendingProps,
      s = o.revealOrder,
      u = o.tail;
    if ((Gt(e, t, o.children, a), (o = Ft.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && jm(e, a, t);
          else if (e.tag === 19) jm(e, a, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    switch ((X(Ft, o), s)) {
      case "forwards":
        for (a = t.child, s = null; a !== null; )
          (e = a.alternate),
            e !== null && ls(e) === null && (s = a),
            (a = a.sibling);
        (a = s),
          a === null
            ? ((s = t.child), (t.child = null))
            : ((s = a.sibling), (a.sibling = null)),
          Xu(t, !1, s, a, u);
        break;
      case "backwards":
        for (a = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && ls(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = a), (a = s), (s = e);
        }
        Xu(t, !0, a, null, u);
        break;
      case "together":
        Xu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wa(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ar |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Oi(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, a = nr(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = nr(e, e.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function Ku(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && bs(e)));
  }
  function Qb(e, t, a) {
    switch (t.tag) {
      case 3:
        Ue(t, t.stateNode.containerInfo),
          Xa(t, $t, e.memoizedState.cache),
          yi();
        break;
      case 27:
      case 5:
        dt(t);
        break;
      case 4:
        Ue(t, t.stateNode.containerInfo);
        break;
      case 10:
        Xa(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Ia(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? Bm(e, t, a)
            : (Ia(t), (e = wa(e, t, a)), e !== null ? e.sibling : null);
        Ia(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((o = (a & t.childLanes) !== 0),
          o || (Oi(e, t, a, !1), (o = (a & t.childLanes) !== 0)),
          s)
        ) {
          if (o) return zm(e, t, a);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          X(Ft, Ft.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Rm(e, t, a);
      case 24:
        Xa(t, $t, e.memoizedState.cache);
    }
    return wa(e, t, a);
  }
  function Dm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Lt = !0;
      else {
        if (!Ku(e, a) && (t.flags & 128) === 0) return (Lt = !1), Qb(e, t, a);
        Lt = (e.flags & 131072) !== 0;
      }
    else (Lt = !1), Ve && (t.flags & 1048576) !== 0 && yh(t, ns, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType,
            s = o._init;
          if (((o = s(o._payload)), (t.type = o), typeof o == "function"))
            ff(o)
              ? ((e = Mr(o, e)), (t.tag = 1), (t = Mm(null, t, o, e, a)))
              : ((t.tag = 0), (t = Pu(null, t, o, e, a)));
          else {
            if (o != null) {
              if (((s = o.$$typeof), s === R)) {
                (t.tag = 11), (t = Cm(null, t, o, e, a));
                break e;
              } else if (s === D) {
                (t.tag = 14), (t = Tm(null, t, o, e, a));
                break e;
              }
            }
            throw ((t = W(o) || o), Error(l(306, t, "")));
          }
        }
        return t;
      case 0:
        return Pu(e, t, t.type, t.pendingProps, a);
      case 1:
        return (o = t.type), (s = Mr(o, t.pendingProps)), Mm(e, t, o, s, a);
      case 3:
        e: {
          if ((Ue(t, t.stateNode.containerInfo), e === null))
            throw Error(l(387));
          var u = t.pendingProps;
          (s = t.memoizedState), (o = s.element), tf(e, t), zi(t, u, null, a);
          var y = t.memoizedState;
          if (
            ((u = y.cache),
            Xa(t, $t, u),
            u !== s.cache && Ju(t, [$t], a, !0),
            ji(),
            (u = y.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: u, isDehydrated: !1, cache: y.cache }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              t = Om(e, t, u, a);
              break e;
            } else if (u !== o) {
              (o = Dn(Error(l(424)), t)), vi(o), (t = Om(e, t, u, a));
              break e;
            } else
              for (
                qt = ta(t.stateNode.containerInfo.firstChild),
                  rn = t,
                  Ve = !0,
                  Jn = null,
                  na = !0,
                  a = wh(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((yi(), u === o)) {
              t = wa(e, t, a);
              break e;
            }
            Gt(e, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Mi(e, t),
          e === null
            ? (a = Fg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Ve ||
                ((a = t.type),
                (e = t.pendingProps),
                (o = Ns(ze.current).createElement(a)),
                (o[Qt] = t),
                (o[dn] = e),
                It(o, a, e),
                _t(o),
                (t.stateNode = o))
            : (t.memoizedState = Fg(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          dt(t),
          e === null &&
            Ve &&
            ((o = t.stateNode = Dg(t.type, t.pendingProps, ze.current)),
            (rn = t),
            (na = !0),
            (qt = ta(o.firstChild))),
          (o = t.pendingProps.children),
          e !== null || Ve ? Gt(e, t, o, a) : (t.child = Tr(t, null, o, a)),
          Mi(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ve &&
            ((s = o = qt) &&
              ((o = A1(o, t.type, t.pendingProps, na)),
              o !== null
                ? ((t.stateNode = o),
                  (rn = t),
                  (qt = ta(o.firstChild)),
                  (na = !1),
                  (s = !0))
                : (s = !1)),
            s || Cr(t)),
          dt(t),
          (s = t.type),
          (u = t.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (o = u.children),
          $f(s, u) ? (o = null) : y !== null && $f(s, y) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = Eu(e, t, Gb, null, null, a)), (Wi._currentValue = s)),
          Mi(e, t),
          Gt(e, t, o, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ve &&
            ((e = a = qt) &&
              ((a = M1(a, t.pendingProps, na)),
              a !== null
                ? ((t.stateNode = a), (rn = t), (qt = null), (e = !0))
                : (e = !1)),
            e || Cr(t)),
          null
        );
      case 13:
        return Bm(e, t, a);
      case 4:
        return (
          Ue(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Tr(t, null, o, a)) : Gt(e, t, o, a),
          t.child
        );
      case 11:
        return Cm(e, t, t.type, t.pendingProps, a);
      case 7:
        return Gt(e, t, t.pendingProps, a), t.child;
      case 8:
        return Gt(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return Gt(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (o = t.pendingProps),
          Xa(t, t.type, o.value),
          Gt(e, t, o.children, a),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (o = t.pendingProps.children),
          Br(t),
          (s = Zt(s)),
          (o = o(s)),
          (t.flags |= 1),
          Gt(e, t, o, a),
          t.child
        );
      case 14:
        return Tm(e, t, t.type, t.pendingProps, a);
      case 15:
        return Em(e, t, t.type, t.pendingProps, a);
      case 19:
        return zm(e, t, a);
      case 22:
        return Rm(e, t, a);
      case 24:
        return (
          Br(t),
          (o = Zt($t)),
          e === null
            ? ((s = Cu()),
              s === null &&
                ((s = gt),
                (u = xu()),
                (s.pooledCache = u),
                u.refCount++,
                u !== null && (s.pooledCacheLanes |= a),
                (s = u)),
              (t.memoizedState = { parent: o, cache: s }),
              ef(t),
              Xa(t, $t, s))
            : ((e.lanes & a) !== 0 && (tf(e, t), zi(t, null, null, a), ji()),
              (s = e.memoizedState),
              (u = t.memoizedState),
              s.parent !== o
                ? ((s = { parent: o, cache: o }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  Xa(t, $t, o))
                : ((o = u.cache),
                  Xa(t, $t, o),
                  o !== s.cache && Ju(t, [$t], a, !0))),
          Gt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(l(156, t.tag));
  }
  var Qu = pe(null),
    Or = null,
    Aa = null;
  function Xa(e, t, a) {
    X(Qu, t._currentValue), (t._currentValue = a);
  }
  function Ma(e) {
    (e._currentValue = Qu.current), ye(Qu);
  }
  function Zu(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Ju(e, t, a, o) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var y = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var S = u;
          u = s;
          for (var B = 0; B < t.length; B++)
            if (S.context === t[B]) {
              (u.lanes |= a),
                (S = u.alternate),
                S !== null && (S.lanes |= a),
                Zu(u.return, a, e),
                o || (y = null);
              break e;
            }
          u = S.next;
        }
      } else if (s.tag === 18) {
        if (((y = s.return), y === null)) throw Error(l(341));
        (y.lanes |= a),
          (u = y.alternate),
          u !== null && (u.lanes |= a),
          Zu(y, a, e),
          (y = null);
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((s = y.sibling), s !== null)) {
            (s.return = y.return), (y = s);
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Oi(e, t, a, o) {
    e = null;
    for (var s = t, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var S = s.type;
          Sn(s.pendingProps.value, y.value) ||
            (e !== null ? e.push(S) : (e = [S]));
        }
      } else if (s === Ee.current) {
        if (((y = s.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(Wi) : (e = [Wi]));
      }
      s = s.return;
    }
    e !== null && Ju(t, e, a, o), (t.flags |= 262144);
  }
  function bs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Sn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Br(e) {
    (Or = e),
      (Aa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Zt(e) {
    return km(Or, e);
  }
  function xs(e, t) {
    return Or === null && Br(e), km(e, t);
  }
  function km(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Aa === null)) {
      if (e === null) throw Error(l(308));
      (Aa = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Aa = Aa.next = t;
    return a;
  }
  var Ka = !1;
  function ef(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function tf(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Qa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Za(e, t, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (xt & 2) !== 0)) {
      var s = o.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (o.pending = t),
        (t = es(e)),
        mh(e, null, a),
        t
      );
    }
    return Jl(e, o, t, a), es(e);
  }
  function Bi(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194176) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (a |= o), (t.lanes = a), Tp(e, a);
    }
  }
  function nf(e, t) {
    var a = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), a === o)) {
      var s = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var y = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          u === null ? (s = u = y) : (u = u.next = y), (a = a.next);
        } while (a !== null);
        u === null ? (s = u = t) : (u = u.next = t);
      } else s = u = t;
      (a = {
        baseState: o.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t);
  }
  var af = !1;
  function ji() {
    if (af) {
      var e = go;
      if (e !== null) throw e;
    }
  }
  function zi(e, t, a, o) {
    af = !1;
    var s = e.updateQueue;
    Ka = !1;
    var u = s.firstBaseUpdate,
      y = s.lastBaseUpdate,
      S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var B = S,
        _ = B.next;
      (B.next = null), y === null ? (u = _) : (y.next = _), (y = B);
      var re = e.alternate;
      re !== null &&
        ((re = re.updateQueue),
        (S = re.lastBaseUpdate),
        S !== y &&
          (S === null ? (re.firstBaseUpdate = _) : (S.next = _),
          (re.lastBaseUpdate = B)));
    }
    if (u !== null) {
      var ue = s.baseState;
      (y = 0), (re = _ = B = null), (S = u);
      do {
        var Y = S.lane & -536870913,
          te = Y !== S.lane;
        if (te ? (Ie & Y) === Y : (o & Y) === Y) {
          Y !== 0 && Y === mo && (af = !0),
            re !== null &&
              (re = re.next =
                {
                  lane: 0,
                  tag: S.tag,
                  payload: S.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Se = e,
              Oe = S;
            Y = t;
            var Tt = a;
            switch (Oe.tag) {
              case 1:
                if (((Se = Oe.payload), typeof Se == "function")) {
                  ue = Se.call(Tt, ue, Y);
                  break e;
                }
                ue = Se;
                break e;
              case 3:
                Se.flags = (Se.flags & -65537) | 128;
              case 0:
                if (
                  ((Se = Oe.payload),
                  (Y = typeof Se == "function" ? Se.call(Tt, ue, Y) : Se),
                  Y == null)
                )
                  break e;
                ue = v({}, ue, Y);
                break e;
              case 2:
                Ka = !0;
            }
          }
          (Y = S.callback),
            Y !== null &&
              ((e.flags |= 64),
              te && (e.flags |= 8192),
              (te = s.callbacks),
              te === null ? (s.callbacks = [Y]) : te.push(Y));
        } else
          (te = {
            lane: Y,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            re === null ? ((_ = re = te), (B = ue)) : (re = re.next = te),
            (y |= Y);
        if (((S = S.next), S === null)) {
          if (((S = s.shared.pending), S === null)) break;
          (te = S),
            (S = te.next),
            (te.next = null),
            (s.lastBaseUpdate = te),
            (s.shared.pending = null);
        }
      } while (!0);
      re === null && (B = ue),
        (s.baseState = B),
        (s.firstBaseUpdate = _),
        (s.lastBaseUpdate = re),
        u === null && (s.shared.lanes = 0),
        (ar |= y),
        (e.lanes = y),
        (e.memoizedState = ue);
    }
  }
  function Nm(e, t) {
    if (typeof e != "function") throw Error(l(191, e));
    e.call(t);
  }
  function Fm(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Nm(a[e], t);
  }
  function Di(e, t) {
    try {
      var a = t.updateQueue,
        o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var s = o.next;
        a = s;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var u = a.create,
              y = a.inst;
            (o = u()), (y.destroy = o);
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (S) {
      pt(t, t.return, S);
    }
  }
  function Ja(e, t, a) {
    try {
      var o = t.updateQueue,
        s = o !== null ? o.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        o = u;
        do {
          if ((o.tag & e) === e) {
            var y = o.inst,
              S = y.destroy;
            if (S !== void 0) {
              (y.destroy = void 0), (s = t);
              var B = a;
              try {
                S();
              } catch (_) {
                pt(s, B, _);
              }
            }
          }
          o = o.next;
        } while (o !== u);
      }
    } catch (_) {
      pt(t, t.return, _);
    }
  }
  function $m(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Fm(t, a);
      } catch (o) {
        pt(e, e.return, o);
      }
    }
  }
  function Um(e, t, a) {
    (a.props = Mr(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (o) {
      pt(e, t, o);
    }
  }
  function jr(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        var o = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = o;
            break;
          default:
            s = o;
        }
        typeof a == "function" ? (e.refCleanup = a(s)) : (a.current = s);
      }
    } catch (u) {
      pt(e, t, u);
    }
  }
  function Cn(e, t) {
    var a = e.ref,
      o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (s) {
          pt(e, t, s);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          pt(e, t, s);
        }
      else a.current = null;
  }
  function _m(e) {
    var t = e.type,
      a = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (s) {
      pt(e, e.return, s);
    }
  }
  function Lm(e, t, a) {
    try {
      var o = e.stateNode;
      C1(o, e.type, a, t), (o[dn] = t);
    } catch (s) {
      pt(e, e.return, s);
    }
  }
  function Hm(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function rf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function of(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, t)
            : a.insertBefore(e, t)
          : (a.nodeType === 8
              ? ((t = a.parentNode), t.insertBefore(e, a))
              : ((t = a), t.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = ks));
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (of(e, t, a), e = e.sibling; e !== null; )
        of(e, t, a), (e = e.sibling);
  }
  function Ss(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (o !== 4 && o !== 27 && ((e = e.child), e !== null))
      for (Ss(e, t, a), e = e.sibling; e !== null; )
        Ss(e, t, a), (e = e.sibling);
  }
  var Oa = !1,
    St = !1,
    lf = !1,
    Pm = typeof WeakSet == "function" ? WeakSet : Set,
    Ht = null,
    qm = !1;
  function Zb(e, t) {
    if (((e = e.containerInfo), (Nf = Hs), (e = ih(e)), su(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var s = o.anchorOffset,
              u = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break e;
            }
            var y = 0,
              S = -1,
              B = -1,
              _ = 0,
              re = 0,
              ue = e,
              Y = null;
            t: for (;;) {
              for (
                var te;
                ue !== a || (s !== 0 && ue.nodeType !== 3) || (S = y + s),
                  ue !== u || (o !== 0 && ue.nodeType !== 3) || (B = y + o),
                  ue.nodeType === 3 && (y += ue.nodeValue.length),
                  (te = ue.firstChild) !== null;

              )
                (Y = ue), (ue = te);
              for (;;) {
                if (ue === e) break t;
                if (
                  (Y === a && ++_ === s && (S = y),
                  Y === u && ++re === o && (B = y),
                  (te = ue.nextSibling) !== null)
                )
                  break;
                (ue = Y), (Y = ue.parentNode);
              }
              ue = te;
            }
            a = S === -1 || B === -1 ? null : { start: S, end: B };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Ff = { focusedElem: e, selectionRange: a }, Hs = !1, Ht = t;
      Ht !== null;

    )
      if (
        ((t = Ht), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Ht = e);
      else
        for (; Ht !== null; ) {
          switch (((t = Ht), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                (e = void 0),
                  (a = t),
                  (s = u.memoizedProps),
                  (u = u.memoizedState),
                  (o = a.stateNode);
                try {
                  var Se = Mr(a.type, s, a.elementType === a.type);
                  (e = o.getSnapshotBeforeUpdate(Se, u)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (Oe) {
                  pt(a, a.return, Oe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Lf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ht = e);
            break;
          }
          Ht = t.return;
        }
    return (Se = qm), (qm = !1), Se;
  }
  function Gm(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ja(e, a), o & 4 && Di(5, a);
        break;
      case 1:
        if ((ja(e, a), o & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (S) {
              pt(a, a.return, S);
            }
          else {
            var s = Mr(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (S) {
              pt(a, a.return, S);
            }
          }
        o & 64 && $m(a), o & 512 && jr(a, a.return);
        break;
      case 3:
        if ((ja(e, a), o & 64 && ((o = a.updateQueue), o !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Fm(o, e);
          } catch (S) {
            pt(a, a.return, S);
          }
        }
        break;
      case 26:
        ja(e, a), o & 512 && jr(a, a.return);
        break;
      case 27:
      case 5:
        ja(e, a), t === null && o & 4 && _m(a), o & 512 && jr(a, a.return);
        break;
      case 12:
        ja(e, a);
        break;
      case 13:
        ja(e, a), o & 4 && Wm(e, a);
        break;
      case 22:
        if (((s = a.memoizedState !== null || Oa), !s)) {
          t = (t !== null && t.memoizedState !== null) || St;
          var u = Oa,
            y = St;
          (Oa = s),
            (St = t) && !y ? er(e, a, (a.subtreeFlags & 8772) !== 0) : ja(e, a),
            (Oa = u),
            (St = y);
        }
        o & 512 &&
          (a.memoizedProps.mode === "manual"
            ? jr(a, a.return)
            : Cn(a, a.return));
        break;
      default:
        ja(e, a);
    }
  }
  function Im(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Im(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Yc(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Dt = null,
    Tn = !1;
  function Ba(e, t, a) {
    for (a = a.child; a !== null; ) Ym(e, t, a), (a = a.sibling);
  }
  function Ym(e, t, a) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Nt, a);
      } catch {}
    switch (a.tag) {
      case 26:
        St || Cn(a, t),
          Ba(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        St || Cn(a, t);
        var o = Dt,
          s = Tn;
        for (
          Dt = a.stateNode, Ba(e, t, a), a = a.stateNode, t = a.attributes;
          t.length;

        )
          a.removeAttributeNode(t[0]);
        Yc(a), (Dt = o), (Tn = s);
        break;
      case 5:
        St || Cn(a, t);
      case 6:
        s = Dt;
        var u = Tn;
        if (((Dt = null), Ba(e, t, a), (Dt = s), (Tn = u), Dt !== null))
          if (Tn)
            try {
              (e = Dt),
                (o = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(o)
                  : e.removeChild(o);
            } catch (y) {
              pt(a, t, y);
            }
          else
            try {
              Dt.removeChild(a.stateNode);
            } catch (y) {
              pt(a, t, y);
            }
        break;
      case 18:
        Dt !== null &&
          (Tn
            ? ((t = Dt),
              (a = a.stateNode),
              t.nodeType === 8
                ? _f(t.parentNode, a)
                : t.nodeType === 1 && _f(t, a),
              Qi(t))
            : _f(Dt, a.stateNode));
        break;
      case 4:
        (o = Dt),
          (s = Tn),
          (Dt = a.stateNode.containerInfo),
          (Tn = !0),
          Ba(e, t, a),
          (Dt = o),
          (Tn = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        St || Ja(2, a, t), St || Ja(4, a, t), Ba(e, t, a);
        break;
      case 1:
        St ||
          (Cn(a, t),
          (o = a.stateNode),
          typeof o.componentWillUnmount == "function" && Um(a, t, o)),
          Ba(e, t, a);
        break;
      case 21:
        Ba(e, t, a);
        break;
      case 22:
        St || Cn(a, t),
          (St = (o = St) || a.memoizedState !== null),
          Ba(e, t, a),
          (St = o);
        break;
      default:
        Ba(e, t, a);
    }
  }
  function Wm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Qi(e);
      } catch (a) {
        pt(t, t.return, a);
      }
  }
  function Jb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Pm()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Pm()),
          t
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function sf(e, t) {
    var a = Jb(e);
    t.forEach(function (o) {
      var s = d1.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(s, s));
    });
  }
  function $n(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var s = a[o],
          u = e,
          y = t,
          S = y;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
            case 5:
              (Dt = S.stateNode), (Tn = !1);
              break e;
            case 3:
              (Dt = S.stateNode.containerInfo), (Tn = !0);
              break e;
            case 4:
              (Dt = S.stateNode.containerInfo), (Tn = !0);
              break e;
          }
          S = S.return;
        }
        if (Dt === null) throw Error(l(160));
        Ym(u, y, s),
          (Dt = null),
          (Tn = !1),
          (u = s.alternate),
          u !== null && (u.return = null),
          (s.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Vm(t, e), (t = t.sibling);
  }
  var ea = null;
  function Vm(e, t) {
    var a = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $n(t, e),
          Un(e),
          o & 4 && (Ja(3, e, e.return), Di(3, e), Ja(5, e, e.return));
        break;
      case 1:
        $n(t, e),
          Un(e),
          o & 512 && (St || a === null || Cn(a, a.return)),
          o & 64 &&
            Oa &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? o : a.concat(o)))));
        break;
      case 26:
        var s = ea;
        if (
          ($n(t, e),
          Un(e),
          o & 512 && (St || a === null || Cn(a, a.return)),
          o & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((o = e.memoizedState), a === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (a = e.memoizedProps),
                    (s = s.ownerDocument || s);
                  t: switch (o) {
                    case "title":
                      (u = s.getElementsByTagName("title")[0]),
                        (!u ||
                          u[oi] ||
                          u[Qt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = s.createElement(o)),
                          s.head.insertBefore(
                            u,
                            s.querySelector("head > title")
                          )),
                        It(u, o, a),
                        (u[Qt] = e),
                        _t(u),
                        (o = u);
                      break e;
                    case "link":
                      var y = _g("link", "href", s).get(o + (a.href || ""));
                      if (y) {
                        for (var S = 0; S < y.length; S++)
                          if (
                            ((u = y[S]),
                            u.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      (u = s.createElement(o)),
                        It(u, o, a),
                        s.head.appendChild(u);
                      break;
                    case "meta":
                      if (
                        (y = _g("meta", "content", s).get(
                          o + (a.content || "")
                        ))
                      ) {
                        for (S = 0; S < y.length; S++)
                          if (
                            ((u = y[S]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            y.splice(S, 1);
                            break t;
                          }
                      }
                      (u = s.createElement(o)),
                        It(u, o, a),
                        s.head.appendChild(u);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (u[Qt] = e), _t(u), (o = u);
                }
                e.stateNode = o;
              } else Lg(s, e.type, e.stateNode);
            else e.stateNode = Ug(s, o, e.memoizedProps);
          else
            u !== o
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                o === null
                  ? Lg(s, e.type, e.stateNode)
                  : Ug(s, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                Lm(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (o & 4 && e.alternate === null) {
          (s = e.stateNode), (u = e.memoizedProps);
          try {
            for (var B = s.firstChild; B; ) {
              var _ = B.nextSibling,
                re = B.nodeName;
              B[oi] ||
                re === "HEAD" ||
                re === "BODY" ||
                re === "SCRIPT" ||
                re === "STYLE" ||
                (re === "LINK" && B.rel.toLowerCase() === "stylesheet") ||
                s.removeChild(B),
                (B = _);
            }
            for (var ue = e.type, Y = s.attributes; Y.length; )
              s.removeAttributeNode(Y[0]);
            It(s, ue, u), (s[Qt] = e), (s[dn] = u);
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
      case 5:
        if (
          ($n(t, e),
          Un(e),
          o & 512 && (St || a === null || Cn(a, a.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            no(s, "");
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), Lm(e, s, a !== null ? a.memoizedProps : s)),
          o & 1024 && (lf = !0);
        break;
      case 6:
        if (($n(t, e), Un(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (o = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = o;
          } catch (Se) {
            pt(e, e.return, Se);
          }
        }
        break;
      case 3:
        if (
          ((Us = null),
          (s = ea),
          (ea = Fs(t.containerInfo)),
          $n(t, e),
          (ea = s),
          Un(e),
          o & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Qi(t.containerInfo);
          } catch (Se) {
            pt(e, e.return, Se);
          }
        lf && ((lf = !1), Xm(e));
        break;
      case 4:
        (o = ea),
          (ea = Fs(e.stateNode.containerInfo)),
          $n(t, e),
          Un(e),
          (ea = o);
        break;
      case 12:
        $n(t, e), Un(e);
        break;
      case 13:
        $n(t, e),
          Un(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (yf = Ze()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), sf(e, o)));
        break;
      case 22:
        if (
          (o & 512 && (St || a === null || Cn(a, a.return)),
          (B = e.memoizedState !== null),
          (_ = a !== null && a.memoizedState !== null),
          (re = Oa),
          (ue = St),
          (Oa = re || B),
          (St = ue || _),
          $n(t, e),
          (St = ue),
          (Oa = re),
          Un(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          o & 8192 &&
            ((t._visibility = B ? t._visibility & -2 : t._visibility | 1),
            B && ((t = Oa || St), a === null || _ || t || xo(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (a === null) {
                _ = a = t;
                try {
                  if (((s = _.stateNode), B))
                    (u = s.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none");
                  else {
                    (y = _.stateNode), (S = _.memoizedProps.style);
                    var te =
                      S != null && S.hasOwnProperty("display")
                        ? S.display
                        : null;
                    y.style.display =
                      te == null || typeof te == "boolean"
                        ? ""
                        : ("" + te).trim();
                  }
                } catch (Se) {
                  pt(_, _.return, Se);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                _ = t;
                try {
                  _.stateNode.nodeValue = B ? "" : _.memoizedProps;
                } catch (Se) {
                  pt(_, _.return, Se);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((a = o.retryQueue),
            a !== null && ((o.retryQueue = null), sf(e, a))));
        break;
      case 19:
        $n(t, e),
          Un(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), sf(e, o)));
        break;
      case 21:
        break;
      default:
        $n(t, e), Un(e);
    }
  }
  function Un(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var a = e.return; a !== null; ) {
              if (Hm(a)) {
                var o = a;
                break e;
              }
              a = a.return;
            }
            throw Error(l(160));
          }
          switch (o.tag) {
            case 27:
              var s = o.stateNode,
                u = rf(e);
              Ss(e, u, s);
              break;
            case 5:
              var y = o.stateNode;
              o.flags & 32 && (no(y, ""), (o.flags &= -33));
              var S = rf(e);
              Ss(e, S, y);
              break;
            case 3:
            case 4:
              var B = o.stateNode.containerInfo,
                _ = rf(e);
              of(e, _, B);
              break;
            default:
              throw Error(l(161));
          }
        }
      } catch (re) {
        pt(e, e.return, re);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Xm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Xm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function ja(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Gm(e, t.alternate, t), (t = t.sibling);
  }
  function xo(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ja(4, t, t.return), xo(t);
          break;
        case 1:
          Cn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Um(t, t.return, a),
            xo(t);
          break;
        case 26:
        case 27:
        case 5:
          Cn(t, t.return), xo(t);
          break;
        case 22:
          Cn(t, t.return), t.memoizedState === null && xo(t);
          break;
        default:
          xo(t);
      }
      e = e.sibling;
    }
  }
  function er(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate,
        s = e,
        u = t,
        y = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          er(s, u, a), Di(4, u);
          break;
        case 1:
          if (
            (er(s, u, a),
            (o = u),
            (s = o.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (_) {
              pt(o, o.return, _);
            }
          if (((o = u), (s = o.updateQueue), s !== null)) {
            var S = o.stateNode;
            try {
              var B = s.shared.hiddenCallbacks;
              if (B !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < B.length; s++)
                  Nm(B[s], S);
            } catch (_) {
              pt(o, o.return, _);
            }
          }
          a && y & 64 && $m(u), jr(u, u.return);
          break;
        case 26:
        case 27:
        case 5:
          er(s, u, a), a && o === null && y & 4 && _m(u), jr(u, u.return);
          break;
        case 12:
          er(s, u, a);
          break;
        case 13:
          er(s, u, a), a && y & 4 && Wm(s, u);
          break;
        case 22:
          u.memoizedState === null && er(s, u, a), jr(u, u.return);
          break;
        default:
          er(s, u, a);
      }
      t = t.sibling;
    }
  }
  function cf(e, t) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Ti(a));
  }
  function uf(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ti(e));
  }
  function tr(e, t, a, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Km(e, t, a, o), (t = t.sibling);
  }
  function Km(e, t, a, o) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tr(e, t, a, o), s & 2048 && Di(9, t);
        break;
      case 3:
        tr(e, t, a, o),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ti(e)));
        break;
      case 12:
        if (s & 2048) {
          tr(e, t, a, o), (e = t.stateNode);
          try {
            var u = t.memoizedProps,
              y = u.id,
              S = u.onPostCommit;
            typeof S == "function" &&
              S(
                y,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (B) {
            pt(t, t.return, B);
          }
        } else tr(e, t, a, o);
        break;
      case 23:
        break;
      case 22:
        (u = t.stateNode),
          t.memoizedState !== null
            ? u._visibility & 4
              ? tr(e, t, a, o)
              : ki(e, t)
            : u._visibility & 4
            ? tr(e, t, a, o)
            : ((u._visibility |= 4),
              So(e, t, a, o, (t.subtreeFlags & 10256) !== 0)),
          s & 2048 && cf(t.alternate, t);
        break;
      case 24:
        tr(e, t, a, o), s & 2048 && uf(t.alternate, t);
        break;
      default:
        tr(e, t, a, o);
    }
  }
  function So(e, t, a, o, s) {
    for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var u = e,
        y = t,
        S = a,
        B = o,
        _ = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          So(u, y, S, B, s), Di(8, y);
          break;
        case 23:
          break;
        case 22:
          var re = y.stateNode;
          y.memoizedState !== null
            ? re._visibility & 4
              ? So(u, y, S, B, s)
              : ki(u, y)
            : ((re._visibility |= 4), So(u, y, S, B, s)),
            s && _ & 2048 && cf(y.alternate, y);
          break;
        case 24:
          So(u, y, S, B, s), s && _ & 2048 && uf(y.alternate, y);
          break;
        default:
          So(u, y, S, B, s);
      }
      t = t.sibling;
    }
  }
  function ki(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = o.flags;
        switch (o.tag) {
          case 22:
            ki(a, o), s & 2048 && cf(o.alternate, o);
            break;
          case 24:
            ki(a, o), s & 2048 && uf(o.alternate, o);
            break;
          default:
            ki(a, o);
        }
        t = t.sibling;
      }
  }
  var Ni = 8192;
  function Co(e) {
    if (e.subtreeFlags & Ni)
      for (e = e.child; e !== null; ) Qm(e), (e = e.sibling);
  }
  function Qm(e) {
    switch (e.tag) {
      case 26:
        Co(e),
          e.flags & Ni &&
            e.memoizedState !== null &&
            H1(ea, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Co(e);
        break;
      case 3:
      case 4:
        var t = ea;
        (ea = Fs(e.stateNode.containerInfo)), Co(e), (ea = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ni), (Ni = 16777216), Co(e), (Ni = t))
            : Co(e));
        break;
      default:
        Co(e);
    }
  }
  function Zm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function Fi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          (Ht = o), eg(o, e);
        }
      Zm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Jm(e), (e = e.sibling);
  }
  function Jm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fi(e), e.flags & 2048 && Ja(9, e, e.return);
        break;
      case 3:
        Fi(e);
        break;
      case 12:
        Fi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), Cs(e))
          : Fi(e);
        break;
      default:
        Fi(e);
    }
  }
  function Cs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          (Ht = o), eg(o, e);
        }
      Zm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          Ja(8, t, t.return), Cs(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), Cs(t));
          break;
        default:
          Cs(t);
      }
      e = e.sibling;
    }
  }
  function eg(e, t) {
    for (; Ht !== null; ) {
      var a = Ht;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ja(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ti(a.memoizedState.cache);
      }
      if (((o = a.child), o !== null)) (o.return = a), (Ht = o);
      else
        e: for (a = e; Ht !== null; ) {
          o = Ht;
          var s = o.sibling,
            u = o.return;
          if ((Im(o), o === a)) {
            Ht = null;
            break e;
          }
          if (s !== null) {
            (s.return = u), (Ht = s);
            break e;
          }
          Ht = u;
        }
    }
  }
  function e1(e, t, a, o) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function _n(e, t, a, o) {
    return new e1(e, t, a, o);
  }
  function ff(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function nr(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = _n(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function tg(e, t) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ts(e, t, a, o, s, u) {
    var y = 0;
    if (((o = e), typeof e == "function")) ff(e) && (y = 1);
    else if (typeof e == "string")
      y = _1(e, a, he.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case m:
          return zr(a.children, s, u, t);
        case g:
          (y = 8), (s |= 24);
          break;
        case b:
          return (
            (e = _n(12, a, t, s | 2)), (e.elementType = b), (e.lanes = u), e
          );
        case C:
          return (e = _n(13, a, t, s)), (e.elementType = C), (e.lanes = u), e;
        case z:
          return (e = _n(19, a, t, s)), (e.elementType = z), (e.lanes = u), e;
        case O:
          return ng(a, s, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case x:
              case A:
                y = 10;
                break e;
              case w:
                y = 9;
                break e;
              case R:
                y = 11;
                break e;
              case D:
                y = 14;
                break e;
              case k:
                (y = 16), (o = null);
                break e;
            }
          (y = 29),
            (a = Error(l(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (t = _n(y, a, t, s)), (t.elementType = e), (t.type = o), (t.lanes = u), t
    );
  }
  function zr(e, t, a, o) {
    return (e = _n(7, e, o, t)), (e.lanes = a), e;
  }
  function ng(e, t, a, o) {
    (e = _n(22, e, o, t)), (e.elementType = O), (e.lanes = a);
    var s = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var u = s._current;
        if (u === null) throw Error(l(456));
        if ((s._pendingVisibility & 2) === 0) {
          var y = Ga(u, 2);
          y !== null && ((s._pendingVisibility |= 2), on(y, u, 2));
        }
      },
      attach: function () {
        var u = s._current;
        if (u === null) throw Error(l(456));
        if ((s._pendingVisibility & 2) !== 0) {
          var y = Ga(u, 2);
          y !== null && ((s._pendingVisibility &= -3), on(y, u, 2));
        }
      },
    };
    return (e.stateNode = s), e;
  }
  function df(e, t, a) {
    return (e = _n(6, e, null, t)), (e.lanes = a), e;
  }
  function pf(e, t, a) {
    return (
      (t = _n(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function za(e) {
    e.flags |= 4;
  }
  function ag(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Hg(t))) {
      if (
        ((t = Fn.current),
        t !== null &&
          ((Ie & 4194176) === Ie
            ? aa !== null
            : ((Ie & 62914560) !== Ie && (Ie & 536870912) === 0) || t !== aa))
      )
        throw ((xi = yu), xh);
      e.flags |= 8192;
    }
  }
  function Es(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? fn() : 536870912), (e.lanes |= t), (Eo |= t));
  }
  function $i(e, t) {
    if (!Ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), (a = a.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function bt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      o = 0;
    if (t)
      for (var s = e.child; s !== null; )
        (a |= s.lanes | s.childLanes),
          (o |= s.subtreeFlags & 31457280),
          (o |= s.flags & 31457280),
          (s.return = e),
          (s = s.sibling);
    else
      for (s = e.child; s !== null; )
        (a |= s.lanes | s.childLanes),
          (o |= s.subtreeFlags),
          (o |= s.flags),
          (s.return = e),
          (s = s.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = a), t;
  }
  function t1(e, t, a) {
    var o = t.pendingProps;
    switch ((mu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return bt(t), null;
      case 1:
        return bt(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          t.memoizedState.cache !== o && (t.flags |= 2048),
          Ma($t),
          it(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (gi(t)
              ? za(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Jn !== null && (Sf(Jn), (Jn = null)))),
          bt(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (za(t),
              a !== null ? (bt(t), ag(t, a)) : (bt(t), (t.flags &= -16777217)))
            : a
            ? a !== e.memoizedState
              ? (za(t), bt(t), ag(t, a))
              : (bt(t), (t.flags &= -16777217))
            : (e.memoizedProps !== o && za(t), bt(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        tt(t), (a = ze.current);
        var s = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== o && za(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return bt(t), null;
          }
          (e = he.current),
            gi(t) ? vh(t) : ((e = Dg(s, o, a)), (t.stateNode = e), za(t));
        }
        return bt(t), null;
      case 5:
        if ((tt(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== o && za(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(l(166));
            return bt(t), null;
          }
          if (((e = he.current), gi(t))) vh(t);
          else {
            switch (((s = Ns(ze.current)), e)) {
              case 1:
                e = s.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = s.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (e = s.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof o.is == "string"
                        ? s.createElement("select", { is: o.is })
                        : s.createElement("select")),
                      o.multiple
                        ? (e.multiple = !0)
                        : o.size && (e.size = o.size);
                    break;
                  default:
                    e =
                      typeof o.is == "string"
                        ? s.createElement(a, { is: o.is })
                        : s.createElement(a);
                }
            }
            (e[Qt] = t), (e[dn] = o);
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t) break e;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            t.stateNode = e;
            e: switch ((It(e, a, o), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && za(t);
          }
        }
        return bt(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && za(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(l(166));
          if (((e = ze.current), gi(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (o = null),
              (s = rn),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  o = s.memoizedProps;
              }
            (e[Qt] = t),
              (e = !!(
                e.nodeValue === a ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Ag(e.nodeValue, a)
              )),
              e || Cr(t);
          } else (e = Ns(e).createTextNode(o)), (e[Qt] = t), (t.stateNode = e);
        }
        return bt(t), null;
      case 13:
        if (
          ((o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = gi(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(l(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(l(317));
              s[Qt] = t;
            } else
              yi(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            bt(t), (s = !1);
          } else Jn !== null && (Sf(Jn), (Jn = null)), (s = !0);
          if (!s) return t.flags & 256 ? (Ea(t), t) : (Ea(t), null);
        }
        if ((Ea(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = o !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (o = t.child),
            (s = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (s = o.alternate.memoizedState.cachePool.pool);
          var u = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (u = o.memoizedState.cachePool.pool),
            u !== s && (o.flags |= 2048);
        }
        return (
          a !== e && a && (t.child.flags |= 8192),
          Es(t, t.updateQueue),
          bt(t),
          null
        );
      case 4:
        return it(), e === null && zf(t.stateNode.containerInfo), bt(t), null;
      case 10:
        return Ma(t.type), bt(t), null;
      case 19:
        if ((ye(Ft), (s = t.memoizedState), s === null)) return bt(t), null;
        if (((o = (t.flags & 128) !== 0), (u = s.rendering), u === null))
          if (o) $i(s, !1);
          else {
            if (Ct !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = ls(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      $i(s, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Es(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    tg(a, e), (a = a.sibling);
                  return X(Ft, (Ft.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Ze() > Rs &&
              ((t.flags |= 128), (o = !0), $i(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = ls(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Es(t, e),
                $i(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !u.alternate &&
                  !Ve)
              )
                return bt(t), null;
            } else
              2 * Ze() - s.renderingStartTime > Rs &&
                a !== 536870912 &&
                ((t.flags |= 128), (o = !0), $i(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = s.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (s.last = u));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Ze()),
            (t.sibling = null),
            (e = Ft.current),
            X(Ft, o ? (e & 1) | 2 : e & 1),
            t)
          : (bt(t), null);
      case 22:
      case 23:
        return (
          Ea(t),
          bu(),
          (o = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (t.flags |= 8192)
            : o && (t.flags |= 8192),
          o
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (bt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : bt(t),
          (a = t.updateQueue),
          a !== null && Es(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (o = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (o = t.memoizedState.cachePool.pool),
          o !== a && (t.flags |= 2048),
          e !== null && ye(Er),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ma($t),
          bt(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function n1(e, t) {
    switch ((mu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ma($t),
          it(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return tt(t), null;
      case 13:
        if (
          (Ea(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          yi();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ye(Ft), null;
      case 4:
        return it(), null;
      case 10:
        return Ma(t.type), null;
      case 22:
      case 23:
        return (
          Ea(t),
          bu(),
          e !== null && ye(Er),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return Ma($t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function rg(e, t) {
    switch ((mu(t), t.tag)) {
      case 3:
        Ma($t), it();
        break;
      case 26:
      case 27:
      case 5:
        tt(t);
        break;
      case 4:
        it();
        break;
      case 13:
        Ea(t);
        break;
      case 19:
        ye(Ft);
        break;
      case 10:
        Ma(t.type);
        break;
      case 22:
      case 23:
        Ea(t), bu(), e !== null && ye(Er);
        break;
      case 24:
        Ma($t);
    }
  }
  var a1 = {
      getCacheForType: function (e) {
        var t = Zt($t),
          a = t.data.get(e);
        return a === void 0 && ((a = e()), t.data.set(e, a)), a;
      },
    },
    r1 = typeof WeakMap == "function" ? WeakMap : Map,
    xt = 0,
    gt = null,
    _e = null,
    Ie = 0,
    yt = 0,
    En = null,
    Da = !1,
    To = !1,
    hf = !1,
    ka = 0,
    Ct = 0,
    ar = 0,
    Dr = 0,
    mf = 0,
    Ln = 0,
    Eo = 0,
    Ui = null,
    oa = null,
    gf = !1,
    yf = 0,
    Rs = 1 / 0,
    ws = null,
    rr = null,
    As = !1,
    kr = null,
    _i = 0,
    vf = 0,
    bf = null,
    Li = 0,
    xf = null;
  function Rn() {
    if ((xt & 2) !== 0 && Ie !== 0) return Ie & -Ie;
    if (q.T !== null) {
      var e = mo;
      return e !== 0 ? e : Mf();
    }
    return Rp();
  }
  function og() {
    Ln === 0 && (Ln = (Ie & 536870912) === 0 || Ve ? Be() : 536870912);
    var e = Fn.current;
    return e !== null && (e.flags |= 32), Ln;
  }
  function on(e, t, a) {
    ((e === gt && yt === 2) || e.cancelPendingCommit !== null) &&
      (Ro(e, 0), Na(e, Ie, Ln, !1)),
      ri(e, a),
      ((xt & 2) === 0 || e !== gt) &&
        (e === gt &&
          ((xt & 2) === 0 && (Dr |= a), Ct === 4 && Na(e, Ie, Ln, !1)),
        ia(e));
  }
  function ig(e, t, a) {
    if ((xt & 6) !== 0) throw Error(l(327));
    var o = (!a && (t & 60) === 0 && (t & e.expiredLanes) === 0) || hr(e, t),
      s = o ? l1(e, t) : Ef(e, t, !0),
      u = o;
    do {
      if (s === 0) {
        To && !o && Na(e, t, 0, !1);
        break;
      } else if (s === 6) Na(e, t, 0, !Da);
      else {
        if (((a = e.current.alternate), u && !o1(a))) {
          (s = Ef(e, t, !1)), (u = !1);
          continue;
        }
        if (s === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            t = y;
            e: {
              var S = e;
              s = Ui;
              var B = S.current.memoizedState.isDehydrated;
              if ((B && (Ro(S, y).flags |= 256), (y = Ef(S, y, !1)), y !== 2)) {
                if (hf && !B) {
                  (S.errorRecoveryDisabledLanes |= u), (Dr |= u), (s = 4);
                  break e;
                }
                (u = oa), (oa = s), u !== null && Sf(u);
              }
              s = y;
            }
            if (((u = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          Ro(e, 0), Na(e, t, 0, !0);
          break;
        }
        e: {
          switch (((o = e), s)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((t & 4194176) === t) {
                Na(o, t, Ln, !Da);
                break e;
              }
              break;
            case 2:
              oa = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if (
            ((o.finishedWork = a),
            (o.finishedLanes = t),
            (t & 62914560) === t && ((u = yf + 300 - Ze()), 10 < u))
          ) {
            if ((Na(o, t, Ln, !Da), Xr(o, 0) !== 0)) break e;
            o.timeoutHandle = Bg(
              lg.bind(null, o, a, oa, ws, gf, t, Ln, Dr, Eo, Da, 2, -0, 0),
              u
            );
            break e;
          }
          lg(o, a, oa, ws, gf, t, Ln, Dr, Eo, Da, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    ia(e);
  }
  function Sf(e) {
    oa === null ? (oa = e) : oa.push.apply(oa, e);
  }
  function lg(e, t, a, o, s, u, y, S, B, _, re, ue, Y) {
    var te = t.subtreeFlags;
    if (
      (te & 8192 || (te & 16785408) === 16785408) &&
      ((Yi = { stylesheets: null, count: 0, unsuspend: L1 }),
      Qm(t),
      (t = P1()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(hg.bind(null, e, a, o, s, y, S, B, 1, ue, Y))),
        Na(e, u, y, !_);
      return;
    }
    hg(e, a, o, s, y, S, B, re, ue, Y);
  }
  function o1(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var o = 0; o < a.length; o++) {
          var s = a[o],
            u = s.getSnapshot;
          s = s.value;
          try {
            if (!Sn(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Na(e, t, a, o) {
    (t &= ~mf),
      (t &= ~Dr),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      o && (e.warmLanes |= t),
      (o = e.expirationTimes);
    for (var s = t; 0 < s; ) {
      var u = 31 - We(s),
        y = 1 << u;
      (o[u] = -1), (s &= ~y);
    }
    a !== 0 && Cp(e, a, t);
  }
  function Ms() {
    return (xt & 6) === 0 ? (Hi(0), !1) : !0;
  }
  function Cf() {
    if (_e !== null) {
      if (yt === 0) var e = _e.return;
      else (e = _e), (Aa = Or = null), Au(e), (po = null), (Si = 0), (e = _e);
      for (; e !== null; ) rg(e.alternate, e), (e = e.return);
      _e = null;
    }
  }
  function Ro(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), E1(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      Cf(),
      (gt = e),
      (_e = a = nr(e.current, null)),
      (Ie = t),
      (yt = 0),
      (En = null),
      (Da = !1),
      (To = hr(e, t)),
      (hf = !1),
      (Eo = Ln = mf = Dr = ar = Ct = 0),
      (oa = Ui = null),
      (gf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var s = 31 - We(o),
          u = 1 << s;
        (t |= e[s]), (o &= ~u);
      }
    return (ka = t), Zl(), a;
  }
  function sg(e, t) {
    (De = null),
      (q.H = ra),
      t === bi
        ? ((t = Th()), (yt = 3))
        : t === xh
        ? ((t = Th()), (yt = 4))
        : (yt =
            t === Sm
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (En = t),
      _e === null && ((Ct = 1), vs(e, Dn(t, e.current)));
  }
  function cg() {
    var e = q.H;
    return (q.H = ra), e === null ? ra : e;
  }
  function ug() {
    var e = q.A;
    return (q.A = a1), e;
  }
  function Tf() {
    (Ct = 4),
      Da || ((Ie & 4194176) !== Ie && Fn.current !== null) || (To = !0),
      ((ar & 134217727) === 0 && (Dr & 134217727) === 0) ||
        gt === null ||
        Na(gt, Ie, Ln, !1);
  }
  function Ef(e, t, a) {
    var o = xt;
    xt |= 2;
    var s = cg(),
      u = ug();
    (gt !== e || Ie !== t) && ((ws = null), Ro(e, t)), (t = !1);
    var y = Ct;
    e: do
      try {
        if (yt !== 0 && _e !== null) {
          var S = _e,
            B = En;
          switch (yt) {
            case 8:
              Cf(), (y = 6);
              break e;
            case 3:
            case 2:
            case 6:
              Fn.current === null && (t = !0);
              var _ = yt;
              if (((yt = 0), (En = null), wo(e, S, B, _), a && To)) {
                y = 0;
                break e;
              }
              break;
            default:
              (_ = yt), (yt = 0), (En = null), wo(e, S, B, _);
          }
        }
        i1(), (y = Ct);
        break;
      } catch (re) {
        sg(e, re);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Aa = Or = null),
      (xt = o),
      (q.H = s),
      (q.A = u),
      _e === null && ((gt = null), (Ie = 0), Zl()),
      y
    );
  }
  function i1() {
    for (; _e !== null; ) fg(_e);
  }
  function l1(e, t) {
    var a = xt;
    xt |= 2;
    var o = cg(),
      s = ug();
    gt !== e || Ie !== t
      ? ((ws = null), (Rs = Ze() + 500), Ro(e, t))
      : (To = hr(e, t));
    e: do
      try {
        if (yt !== 0 && _e !== null) {
          t = _e;
          var u = En;
          t: switch (yt) {
            case 1:
              (yt = 0), (En = null), wo(e, t, u, 1);
              break;
            case 2:
              if (Sh(u)) {
                (yt = 0), (En = null), dg(t);
                break;
              }
              (t = function () {
                yt === 2 && gt === e && (yt = 7), ia(e);
              }),
                u.then(t, t);
              break e;
            case 3:
              yt = 7;
              break e;
            case 4:
              yt = 5;
              break e;
            case 7:
              Sh(u)
                ? ((yt = 0), (En = null), dg(t))
                : ((yt = 0), (En = null), wo(e, t, u, 7));
              break;
            case 5:
              var y = null;
              switch (_e.tag) {
                case 26:
                  y = _e.memoizedState;
                case 5:
                case 27:
                  var S = _e;
                  if (!y || Hg(y)) {
                    (yt = 0), (En = null);
                    var B = S.sibling;
                    if (B !== null) _e = B;
                    else {
                      var _ = S.return;
                      _ !== null ? ((_e = _), Os(_)) : (_e = null);
                    }
                    break t;
                  }
              }
              (yt = 0), (En = null), wo(e, t, u, 5);
              break;
            case 6:
              (yt = 0), (En = null), wo(e, t, u, 6);
              break;
            case 8:
              Cf(), (Ct = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        s1();
        break;
      } catch (re) {
        sg(e, re);
      }
    while (!0);
    return (
      (Aa = Or = null),
      (q.H = o),
      (q.A = s),
      (xt = a),
      _e !== null ? 0 : ((gt = null), (Ie = 0), Zl(), Ct)
    );
  }
  function s1() {
    for (; _e !== null && !xe(); ) fg(_e);
  }
  function fg(e) {
    var t = Dm(e.alternate, e, ka);
    (e.memoizedProps = e.pendingProps), t === null ? Os(e) : (_e = t);
  }
  function dg(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Am(a, t, t.pendingProps, t.type, void 0, Ie);
        break;
      case 11:
        t = Am(a, t, t.pendingProps, t.type.render, t.ref, Ie);
        break;
      case 5:
        Au(t);
      default:
        rg(a, t), (t = _e = tg(t, ka)), (t = Dm(a, t, ka));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Os(e) : (_e = t);
  }
  function wo(e, t, a, o) {
    (Aa = Or = null), Au(t), (po = null), (Si = 0);
    var s = t.return;
    try {
      if (Kb(e, s, t, a, Ie)) {
        (Ct = 1), vs(e, Dn(a, e.current)), (_e = null);
        return;
      }
    } catch (u) {
      if (s !== null) throw ((_e = s), u);
      (Ct = 1), vs(e, Dn(a, e.current)), (_e = null);
      return;
    }
    t.flags & 32768
      ? (Ve || o === 1
          ? (e = !0)
          : To || (Ie & 536870912) !== 0
          ? (e = !1)
          : ((Da = e = !0),
            (o === 2 || o === 3 || o === 6) &&
              ((o = Fn.current),
              o !== null && o.tag === 13 && (o.flags |= 16384))),
        pg(t, e))
      : Os(t);
  }
  function Os(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pg(t, Da);
        return;
      }
      e = t.return;
      var a = t1(t.alternate, t, ka);
      if (a !== null) {
        _e = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Ct === 0 && (Ct = 5);
  }
  function pg(e, t) {
    do {
      var a = n1(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (_e = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        _e = e;
        return;
      }
      _e = e = a;
    } while (e !== null);
    (Ct = 6), (_e = null);
  }
  function hg(e, t, a, o, s, u, y, S, B, _) {
    var re = q.T,
      ue = ne.p;
    try {
      (ne.p = 2), (q.T = null), c1(e, t, a, o, ue, s, u, y, S, B, _);
    } finally {
      (q.T = re), (ne.p = ue);
    }
  }
  function c1(e, t, a, o, s, u, y, S) {
    do Ao();
    while (kr !== null);
    if ((xt & 6) !== 0) throw Error(l(327));
    var B = e.finishedWork;
    if (((o = e.finishedLanes), B === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), B === e.current))
      throw Error(l(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var _ = B.lanes | B.childLanes;
    if (
      ((_ |= du),
      H0(e, o, _, u, y, S),
      e === gt && ((_e = gt = null), (Ie = 0)),
      ((B.subtreeFlags & 10256) === 0 && (B.flags & 10256) === 0) ||
        As ||
        ((As = !0),
        (vf = _),
        (bf = a),
        p1(Kt, function () {
          return Ao(), null;
        })),
      (a = (B.flags & 15990) !== 0),
      (B.subtreeFlags & 15990) !== 0 || a
        ? ((a = q.T),
          (q.T = null),
          (u = ne.p),
          (ne.p = 2),
          (y = xt),
          (xt |= 4),
          Zb(e, B),
          Vm(B, e),
          Db(Ff, e.containerInfo),
          (Hs = !!Nf),
          (Ff = Nf = null),
          (e.current = B),
          Gm(e, B.alternate, B),
          ln(),
          (xt = y),
          (ne.p = u),
          (q.T = a))
        : (e.current = B),
      As ? ((As = !1), (kr = e), (_i = o)) : mg(e, _),
      (_ = e.pendingLanes),
      _ === 0 && (rr = null),
      we(B.stateNode),
      ia(e),
      t !== null)
    )
      for (s = e.onRecoverableError, B = 0; B < t.length; B++)
        (_ = t[B]), s(_.value, { componentStack: _.stack });
    return (
      (_i & 3) !== 0 && Ao(),
      (_ = e.pendingLanes),
      (o & 4194218) !== 0 && (_ & 42) !== 0
        ? e === xf
          ? Li++
          : ((Li = 0), (xf = e))
        : (Li = 0),
      Hi(0),
      null
    );
  }
  function mg(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ti(t)));
  }
  function Ao() {
    if (kr !== null) {
      var e = kr,
        t = vf;
      vf = 0;
      var a = Ep(_i),
        o = q.T,
        s = ne.p;
      try {
        if (((ne.p = 32 > a ? 32 : a), (q.T = null), kr === null)) var u = !1;
        else {
          (a = bf), (bf = null);
          var y = kr,
            S = _i;
          if (((kr = null), (_i = 0), (xt & 6) !== 0)) throw Error(l(331));
          var B = xt;
          if (
            ((xt |= 4),
            Jm(y.current),
            Km(y, y.current, S, a),
            (xt = B),
            Hi(0, !1),
            lt && typeof lt.onPostCommitFiberRoot == "function")
          )
            try {
              lt.onPostCommitFiberRoot(Nt, y);
            } catch {}
          u = !0;
        }
        return u;
      } finally {
        (ne.p = s), (q.T = o), mg(e, t);
      }
    }
    return !1;
  }
  function gg(e, t, a) {
    (t = Dn(a, t)),
      (t = Hu(e.stateNode, t, 2)),
      (e = Za(e, t, 2)),
      e !== null && (ri(e, 2), ia(e));
  }
  function pt(e, t, a) {
    if (e.tag === 3) gg(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          gg(t, e, a);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (rr === null || !rr.has(o)))
          ) {
            (e = Dn(a, e)),
              (a = bm(2)),
              (o = Za(t, a, 2)),
              o !== null && (xm(a, o, t, e), ri(o, 2), ia(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rf(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new r1();
      var s = new Set();
      o.set(t, s);
    } else (s = o.get(t)), s === void 0 && ((s = new Set()), o.set(t, s));
    s.has(a) ||
      ((hf = !0), s.add(a), (e = u1.bind(null, e, t, a)), t.then(e, e));
  }
  function u1(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      gt === e &&
        (Ie & a) === a &&
        (Ct === 4 || (Ct === 3 && (Ie & 62914560) === Ie && 300 > Ze() - yf)
          ? (xt & 2) === 0 && Ro(e, 0)
          : (mf |= a),
        Eo === Ie && (Eo = 0)),
      ia(e);
  }
  function yg(e, t) {
    t === 0 && (t = fn()), (e = Ga(e, t)), e !== null && (ri(e, t), ia(e));
  }
  function f1(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), yg(e, a);
  }
  function d1(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          s = e.memoizedState;
        s !== null && (a = s.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(t), yg(e, a);
  }
  function p1(e, t) {
    return nt(e, t);
  }
  var Bs = null,
    Mo = null,
    wf = !1,
    js = !1,
    Af = !1,
    Nr = 0;
  function ia(e) {
    e !== Mo &&
      e.next === null &&
      (Mo === null ? (Bs = Mo = e) : (Mo = Mo.next = e)),
      (js = !0),
      wf || ((wf = !0), m1(h1));
  }
  function Hi(e, t) {
    if (!Af && js) {
      Af = !0;
      do
        for (var a = !1, o = Bs; o !== null; ) {
          if (e !== 0) {
            var s = o.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var y = o.suspendedLanes,
                S = o.pingedLanes;
              (u = (1 << (31 - We(42 | e) + 1)) - 1),
                (u &= s & ~(y & ~S)),
                (u = u & 201326677 ? (u & 201326677) | 1 : u ? u | 2 : 0);
            }
            u !== 0 && ((a = !0), xg(o, u));
          } else
            (u = Ie),
              (u = Xr(o, o === gt ? u : 0)),
              (u & 3) === 0 || hr(o, u) || ((a = !0), xg(o, u));
          o = o.next;
        }
      while (a);
      Af = !1;
    }
  }
  function h1() {
    js = wf = !1;
    var e = 0;
    Nr !== 0 && (T1() && (e = Nr), (Nr = 0));
    for (var t = Ze(), a = null, o = Bs; o !== null; ) {
      var s = o.next,
        u = vg(o, t);
      u === 0
        ? ((o.next = null),
          a === null ? (Bs = s) : (a.next = s),
          s === null && (Mo = a))
        : ((a = o), (e !== 0 || (u & 3) !== 0) && (js = !0)),
        (o = s);
    }
    Hi(e);
  }
  function vg(e, t) {
    for (
      var a = e.suspendedLanes,
        o = e.pingedLanes,
        s = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;

    ) {
      var y = 31 - We(u),
        S = 1 << y,
        B = s[y];
      B === -1
        ? ((S & a) === 0 || (S & o) !== 0) && (s[y] = Gc(S, t))
        : B <= t && (e.expiredLanes |= S),
        (u &= ~S);
    }
    if (
      ((t = gt),
      (a = Ie),
      (a = Xr(e, e === t ? a : 0)),
      (o = e.callbackNode),
      a === 0 || (e === t && yt === 2) || e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Qe(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || hr(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((o !== null && Qe(o), Ep(a))) {
        case 2:
        case 8:
          a = an;
          break;
        case 32:
          a = Kt;
          break;
        case 268435456:
          a = cn;
          break;
        default:
          a = Kt;
      }
      return (
        (o = bg.bind(null, e)),
        (a = nt(a, o)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      o !== null && o !== null && Qe(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function bg(e, t) {
    var a = e.callbackNode;
    if (Ao() && e.callbackNode !== a) return null;
    var o = Ie;
    return (
      (o = Xr(e, e === gt ? o : 0)),
      o === 0
        ? null
        : (ig(e, o, t),
          vg(e, Ze()),
          e.callbackNode != null && e.callbackNode === a
            ? bg.bind(null, e)
            : null)
    );
  }
  function xg(e, t) {
    if (Ao()) return null;
    ig(e, t, !0);
  }
  function m1(e) {
    R1(function () {
      (xt & 6) !== 0 ? nt(bn, e) : e();
    });
  }
  function Mf() {
    return Nr === 0 && (Nr = Be()), Nr;
  }
  function Sg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Il("" + e);
  }
  function Cg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function g1(e, t, a, o, s) {
    if (t === "submit" && a && a.stateNode === s) {
      var u = Sg((s[dn] || null).action),
        y = o.submitter;
      y &&
        ((t = (t = y[dn] || null)
          ? Sg(t.formAction)
          : y.getAttribute("formAction")),
        t !== null && ((u = t), (y = null)));
      var S = new Xl("action", "action", null, o, s);
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Nr !== 0) {
                  var B = y ? Cg(s, y) : new FormData(s);
                  Fu(
                    a,
                    { pending: !0, data: B, method: s.method, action: u },
                    null,
                    B
                  );
                }
              } else
                typeof u == "function" &&
                  (S.preventDefault(),
                  (B = y ? Cg(s, y) : new FormData(s)),
                  Fu(
                    a,
                    { pending: !0, data: B, method: s.method, action: u },
                    u,
                    B
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Of = 0; Of < hh.length; Of++) {
    var Bf = hh[Of],
      y1 = Bf.toLowerCase(),
      v1 = Bf[0].toUpperCase() + Bf.slice(1);
    Zn(y1, "on" + v1);
  }
  Zn(ch, "onAnimationEnd"),
    Zn(uh, "onAnimationIteration"),
    Zn(fh, "onAnimationStart"),
    Zn("dblclick", "onDoubleClick"),
    Zn("focusin", "onFocus"),
    Zn("focusout", "onBlur"),
    Zn(Nb, "onTransitionRun"),
    Zn(Fb, "onTransitionStart"),
    Zn($b, "onTransitionCancel"),
    Zn(dh, "onTransitionEnd"),
    eo("onMouseEnter", ["mouseout", "mouseover"]),
    eo("onMouseLeave", ["mouseout", "mouseover"]),
    eo("onPointerEnter", ["pointerout", "pointerover"]),
    eo("onPointerLeave", ["pointerout", "pointerover"]),
    gr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    gr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    gr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    gr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    gr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    gr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Pi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    b1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Pi)
    );
  function Tg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a],
        s = o.event;
      o = o.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var y = o.length - 1; 0 <= y; y--) {
            var S = o[y],
              B = S.instance,
              _ = S.currentTarget;
            if (((S = S.listener), B !== u && s.isPropagationStopped()))
              break e;
            (u = S), (s.currentTarget = _);
            try {
              u(s);
            } catch (re) {
              ys(re);
            }
            (s.currentTarget = null), (u = B);
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((S = o[y]),
              (B = S.instance),
              (_ = S.currentTarget),
              (S = S.listener),
              B !== u && s.isPropagationStopped())
            )
              break e;
            (u = S), (s.currentTarget = _);
            try {
              u(s);
            } catch (re) {
              ys(re);
            }
            (s.currentTarget = null), (u = B);
          }
      }
    }
  }
  function He(e, t) {
    var a = t[Ic];
    a === void 0 && (a = t[Ic] = new Set());
    var o = e + "__bubble";
    a.has(o) || (Eg(t, e, 2, !1), a.add(o));
  }
  function jf(e, t, a) {
    var o = 0;
    t && (o |= 4), Eg(a, e, o, t);
  }
  var zs = "_reactListening" + Math.random().toString(36).slice(2);
  function zf(e) {
    if (!e[zs]) {
      (e[zs] = !0),
        Ap.forEach(function (a) {
          a !== "selectionchange" && (b1.has(a) || jf(a, !1, e), jf(a, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zs] || ((t[zs] = !0), jf("selectionchange", !1, t));
    }
  }
  function Eg(e, t, a, o) {
    switch (Wg(t)) {
      case 2:
        var s = I1;
        break;
      case 8:
        s = Y1;
        break;
      default:
        s = If;
    }
    (a = s.bind(null, t, a, e)),
      (s = void 0),
      !Jc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      o
        ? s !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: s })
          : e.addEventListener(t, a, !0)
        : s !== void 0
        ? e.addEventListener(t, a, { passive: s })
        : e.addEventListener(t, a, !1);
  }
  function Df(e, t, a, o, s) {
    var u = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var S = o.stateNode.containerInfo;
          if (S === s || (S.nodeType === 8 && S.parentNode === s)) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var B = y.tag;
              if (
                (B === 3 || B === 4) &&
                ((B = y.stateNode.containerInfo),
                B === s || (B.nodeType === 8 && B.parentNode === s))
              )
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (((y = mr(S)), y === null)) return;
            if (((B = y.tag), B === 5 || B === 6 || B === 26 || B === 27)) {
              o = u = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        o = o.return;
      }
    _p(function () {
      var _ = u,
        re = Qc(a),
        ue = [];
      e: {
        var Y = ph.get(e);
        if (Y !== void 0) {
          var te = Xl,
            Se = e;
          switch (e) {
            case "keypress":
              if (Wl(a) === 0) break e;
            case "keydown":
            case "keyup":
              te = db;
              break;
            case "focusin":
              (Se = "focus"), (te = au);
              break;
            case "focusout":
              (Se = "blur"), (te = au);
              break;
            case "beforeblur":
            case "afterblur":
              te = au;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = Pp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = eb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = mb;
              break;
            case ch:
            case uh:
            case fh:
              te = ab;
              break;
            case dh:
              te = yb;
              break;
            case "scroll":
            case "scrollend":
              te = Z0;
              break;
            case "wheel":
              te = bb;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = ob;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = Gp;
              break;
            case "toggle":
            case "beforetoggle":
              te = Sb;
          }
          var Oe = (t & 4) !== 0,
            Tt = !Oe && (e === "scroll" || e === "scrollend"),
            H = Oe ? (Y !== null ? Y + "Capture" : null) : Y;
          Oe = [];
          for (var U = _, G; U !== null; ) {
            var le = U;
            if (
              ((G = le.stateNode),
              (le = le.tag),
              (le !== 5 && le !== 26 && le !== 27) ||
                G === null ||
                H === null ||
                ((le = li(U, H)), le != null && Oe.push(qi(U, le, G))),
              Tt)
            )
              break;
            U = U.return;
          }
          0 < Oe.length &&
            ((Y = new te(Y, Se, null, a, re)),
            ue.push({ event: Y, listeners: Oe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Y = e === "mouseover" || e === "pointerover"),
            (te = e === "mouseout" || e === "pointerout"),
            Y &&
              a !== Kc &&
              (Se = a.relatedTarget || a.fromElement) &&
              (mr(Se) || Se[Qr]))
          )
            break e;
          if (
            (te || Y) &&
            ((Y =
              re.window === re
                ? re
                : (Y = re.ownerDocument)
                ? Y.defaultView || Y.parentWindow
                : window),
            te
              ? ((Se = a.relatedTarget || a.toElement),
                (te = _),
                (Se = Se ? mr(Se) : null),
                Se !== null &&
                  ((Tt = se(Se)),
                  (Oe = Se.tag),
                  Se !== Tt || (Oe !== 5 && Oe !== 27 && Oe !== 6)) &&
                  (Se = null))
              : ((te = null), (Se = _)),
            te !== Se)
          ) {
            if (
              ((Oe = Pp),
              (le = "onMouseLeave"),
              (H = "onMouseEnter"),
              (U = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Oe = Gp),
                (le = "onPointerLeave"),
                (H = "onPointerEnter"),
                (U = "pointer")),
              (Tt = te == null ? Y : ii(te)),
              (G = Se == null ? Y : ii(Se)),
              (Y = new Oe(le, U + "leave", te, a, re)),
              (Y.target = Tt),
              (Y.relatedTarget = G),
              (le = null),
              mr(re) === _ &&
                ((Oe = new Oe(H, U + "enter", Se, a, re)),
                (Oe.target = G),
                (Oe.relatedTarget = Tt),
                (le = Oe)),
              (Tt = le),
              te && Se)
            )
              t: {
                for (Oe = te, H = Se, U = 0, G = Oe; G; G = Oo(G)) U++;
                for (G = 0, le = H; le; le = Oo(le)) G++;
                for (; 0 < U - G; ) (Oe = Oo(Oe)), U--;
                for (; 0 < G - U; ) (H = Oo(H)), G--;
                for (; U--; ) {
                  if (Oe === H || (H !== null && Oe === H.alternate)) break t;
                  (Oe = Oo(Oe)), (H = Oo(H));
                }
                Oe = null;
              }
            else Oe = null;
            te !== null && Rg(ue, Y, te, Oe, !1),
              Se !== null && Tt !== null && Rg(ue, Tt, Se, Oe, !0);
          }
        }
        e: {
          if (
            ((Y = _ ? ii(_) : window),
            (te = Y.nodeName && Y.nodeName.toLowerCase()),
            te === "select" || (te === "input" && Y.type === "file"))
          )
            var ve = Zp;
          else if (Kp(Y))
            if (Jp) ve = jb;
            else {
              ve = Ob;
              var $e = Mb;
            }
          else
            (te = Y.nodeName),
              !te ||
              te.toLowerCase() !== "input" ||
              (Y.type !== "checkbox" && Y.type !== "radio")
                ? _ && Xc(_.elementType) && (ve = Zp)
                : (ve = Bb);
          if (ve && (ve = ve(e, _))) {
            Qp(ue, ve, a, re);
            break e;
          }
          $e && $e(e, Y, _),
            e === "focusout" &&
              _ &&
              Y.type === "number" &&
              _.memoizedProps.value != null &&
              Vc(Y, "number", Y.value);
        }
        switch ((($e = _ ? ii(_) : window), e)) {
          case "focusin":
            (Kp($e) || $e.contentEditable === "true") &&
              ((io = $e), (cu = _), (mi = null));
            break;
          case "focusout":
            mi = cu = io = null;
            break;
          case "mousedown":
            uu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (uu = !1), lh(ue, a, re);
            break;
          case "selectionchange":
            if (kb) break;
          case "keydown":
          case "keyup":
            lh(ue, a, re);
        }
        var Ce;
        if (ou)
          e: {
            switch (e) {
              case "compositionstart":
                var Me = "onCompositionStart";
                break e;
              case "compositionend":
                Me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Me = "onCompositionUpdate";
                break e;
            }
            Me = void 0;
          }
        else
          oo
            ? Vp(e, a) && (Me = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Me = "onCompositionStart");
        Me &&
          (Ip &&
            a.locale !== "ko" &&
            (oo || Me !== "onCompositionStart"
              ? Me === "onCompositionEnd" && oo && (Ce = Lp())
              : ((qa = re),
                (eu = "value" in qa ? qa.value : qa.textContent),
                (oo = !0))),
          ($e = Ds(_, Me)),
          0 < $e.length &&
            ((Me = new qp(Me, e, null, a, re)),
            ue.push({ event: Me, listeners: $e }),
            Ce
              ? (Me.data = Ce)
              : ((Ce = Xp(a)), Ce !== null && (Me.data = Ce)))),
          (Ce = Tb ? Eb(e, a) : Rb(e, a)) &&
            ((Me = Ds(_, "onBeforeInput")),
            0 < Me.length &&
              (($e = new qp("onBeforeInput", "beforeinput", null, a, re)),
              ue.push({ event: $e, listeners: Me }),
              ($e.data = Ce))),
          g1(ue, e, _, a, re);
      }
      Tg(ue, t);
    });
  }
  function qi(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Ds(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var s = e,
        u = s.stateNode;
      (s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          u === null ||
          ((s = li(e, a)),
          s != null && o.unshift(qi(e, s, u)),
          (s = li(e, t)),
          s != null && o.push(qi(e, s, u))),
        (e = e.return);
    }
    return o;
  }
  function Oo(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Rg(e, t, a, o, s) {
    for (var u = t._reactName, y = []; a !== null && a !== o; ) {
      var S = a,
        B = S.alternate,
        _ = S.stateNode;
      if (((S = S.tag), B !== null && B === o)) break;
      (S !== 5 && S !== 26 && S !== 27) ||
        _ === null ||
        ((B = _),
        s
          ? ((_ = li(a, u)), _ != null && y.unshift(qi(a, _, B)))
          : s || ((_ = li(a, u)), _ != null && y.push(qi(a, _, B)))),
        (a = a.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var x1 = /\r\n?/g,
    S1 = /\u0000|\uFFFD/g;
  function wg(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        x1,
        `
`
      )
      .replace(S1, "");
  }
  function Ag(e, t) {
    return (t = wg(t)), wg(e) === t;
  }
  function ks() {}
  function ct(e, t, a, o, s, u) {
    switch (a) {
      case "children":
        typeof o == "string"
          ? t === "body" || (t === "textarea" && o === "") || no(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            t !== "body" &&
            no(e, "" + o);
        break;
      case "className":
        Pl(e, "class", o);
        break;
      case "tabIndex":
        Pl(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pl(e, a, o);
        break;
      case "style":
        $p(e, o, u);
        break;
      case "data":
        if (t !== "object") {
          Pl(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (o = Il("" + o)), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (t !== "input" && ct(e, t, "name", s.name, s, null),
                ct(e, t, "formEncType", s.formEncType, s, null),
                ct(e, t, "formMethod", s.formMethod, s, null),
                ct(e, t, "formTarget", s.formTarget, s, null))
              : (ct(e, t, "encType", s.encType, s, null),
                ct(e, t, "method", s.method, s, null),
                ct(e, t, "target", s.target, s, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (o = Il("" + o)), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = ks);
        break;
      case "onScroll":
        o != null && He("scroll", e);
        break;
      case "onScrollEnd":
        o != null && He("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((a = o.__html), a != null)) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = Il("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(a, "" + o)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(a, "")
          : o !== !1 &&
            o != null &&
            typeof o != "function" &&
            typeof o != "symbol"
          ? e.setAttribute(a, o)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(a, o)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(a)
          : e.setAttribute(a, o);
        break;
      case "popover":
        He("beforetoggle", e), He("toggle", e), Hl(e, "popover", o);
        break;
      case "xlinkActuate":
        Sa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Sa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Sa(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Sa(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Sa(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Sa(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Sa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Sa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Sa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Hl(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = K0.get(a) || a), Hl(e, a, o));
    }
  }
  function kf(e, t, a, o, s, u) {
    switch (a) {
      case "style":
        $p(e, o, u);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((a = o.__html), a != null)) {
            if (s.children != null) throw Error(l(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? no(e, o)
          : (typeof o == "number" || typeof o == "bigint") && no(e, "" + o);
        break;
      case "onScroll":
        o != null && He("scroll", e);
        break;
      case "onScrollEnd":
        o != null && He("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = ks);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mp.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((s = a.endsWith("Capture")),
              (t = a.slice(2, s ? a.length - 7 : void 0)),
              (u = e[dn] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && e.removeEventListener(t, u, s),
              typeof o == "function")
            ) {
              typeof u != "function" &&
                u !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, o, s);
              break e;
            }
            a in e
              ? (e[a] = o)
              : o === !0
              ? e.setAttribute(a, "")
              : Hl(e, a, o);
          }
    }
  }
  function It(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        He("error", e), He("load", e);
        var o = !1,
          s = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var y = a[u];
            if (y != null)
              switch (u) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, t));
                default:
                  ct(e, t, u, y, a, null);
              }
          }
        s && ct(e, t, "srcSet", a.srcSet, a, null),
          o && ct(e, t, "src", a.src, a, null);
        return;
      case "input":
        He("invalid", e);
        var S = (u = y = s = null),
          B = null,
          _ = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var re = a[o];
            if (re != null)
              switch (o) {
                case "name":
                  s = re;
                  break;
                case "type":
                  y = re;
                  break;
                case "checked":
                  B = re;
                  break;
                case "defaultChecked":
                  _ = re;
                  break;
                case "value":
                  u = re;
                  break;
                case "defaultValue":
                  S = re;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (re != null) throw Error(l(137, t));
                  break;
                default:
                  ct(e, t, o, re, a, null);
              }
          }
        Dp(e, u, S, B, _, y, s, !1), ql(e);
        return;
      case "select":
        He("invalid", e), (o = y = u = null);
        for (s in a)
          if (a.hasOwnProperty(s) && ((S = a[s]), S != null))
            switch (s) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                y = S;
                break;
              case "multiple":
                o = S;
              default:
                ct(e, t, s, S, a, null);
            }
        (t = u),
          (a = y),
          (e.multiple = !!o),
          t != null ? to(e, !!o, t, !1) : a != null && to(e, !!o, a, !0);
        return;
      case "textarea":
        He("invalid", e), (u = s = o = null);
        for (y in a)
          if (a.hasOwnProperty(y) && ((S = a[y]), S != null))
            switch (y) {
              case "value":
                o = S;
                break;
              case "defaultValue":
                s = S;
                break;
              case "children":
                u = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(l(91));
                break;
              default:
                ct(e, t, y, S, a, null);
            }
        Np(e, o, s, u), ql(e);
        return;
      case "option":
        for (B in a)
          if (a.hasOwnProperty(B) && ((o = a[B]), o != null))
            switch (B) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ct(e, t, B, o, a, null);
            }
        return;
      case "dialog":
        He("cancel", e), He("close", e);
        break;
      case "iframe":
      case "object":
        He("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Pi.length; o++) He(Pi[o], e);
        break;
      case "image":
        He("error", e), He("load", e);
        break;
      case "details":
        He("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        He("error", e), He("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in a)
          if (a.hasOwnProperty(_) && ((o = a[_]), o != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, t));
              default:
                ct(e, t, _, o, a, null);
            }
        return;
      default:
        if (Xc(t)) {
          for (re in a)
            a.hasOwnProperty(re) &&
              ((o = a[re]), o !== void 0 && kf(e, t, re, o, a, void 0));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && ((o = a[S]), o != null && ct(e, t, S, o, a, null));
  }
  function C1(e, t, a, o) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          u = null,
          y = null,
          S = null,
          B = null,
          _ = null,
          re = null;
        for (te in a) {
          var ue = a[te];
          if (a.hasOwnProperty(te) && ue != null)
            switch (te) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                B = ue;
              default:
                o.hasOwnProperty(te) || ct(e, t, te, null, o, ue);
            }
        }
        for (var Y in o) {
          var te = o[Y];
          if (((ue = a[Y]), o.hasOwnProperty(Y) && (te != null || ue != null)))
            switch (Y) {
              case "type":
                u = te;
                break;
              case "name":
                s = te;
                break;
              case "checked":
                _ = te;
                break;
              case "defaultChecked":
                re = te;
                break;
              case "value":
                y = te;
                break;
              case "defaultValue":
                S = te;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (te != null) throw Error(l(137, t));
                break;
              default:
                te !== ue && ct(e, t, Y, te, o, ue);
            }
        }
        Wc(e, y, S, B, _, re, u, s);
        return;
      case "select":
        te = y = S = Y = null;
        for (u in a)
          if (((B = a[u]), a.hasOwnProperty(u) && B != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                te = B;
              default:
                o.hasOwnProperty(u) || ct(e, t, u, null, o, B);
            }
        for (s in o)
          if (
            ((u = o[s]),
            (B = a[s]),
            o.hasOwnProperty(s) && (u != null || B != null))
          )
            switch (s) {
              case "value":
                Y = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "multiple":
                y = u;
              default:
                u !== B && ct(e, t, s, u, o, B);
            }
        (t = S),
          (a = y),
          (o = te),
          Y != null
            ? to(e, !!a, Y, !1)
            : !!o != !!a &&
              (t != null ? to(e, !!a, t, !0) : to(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        te = Y = null;
        for (S in a)
          if (
            ((s = a[S]),
            a.hasOwnProperty(S) && s != null && !o.hasOwnProperty(S))
          )
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                ct(e, t, S, null, o, s);
            }
        for (y in o)
          if (
            ((s = o[y]),
            (u = a[y]),
            o.hasOwnProperty(y) && (s != null || u != null))
          )
            switch (y) {
              case "value":
                Y = s;
                break;
              case "defaultValue":
                te = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(l(91));
                break;
              default:
                s !== u && ct(e, t, y, s, o, u);
            }
        kp(e, Y, te);
        return;
      case "option":
        for (var Se in a)
          if (
            ((Y = a[Se]),
            a.hasOwnProperty(Se) && Y != null && !o.hasOwnProperty(Se))
          )
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ct(e, t, Se, null, o, Y);
            }
        for (B in o)
          if (
            ((Y = o[B]),
            (te = a[B]),
            o.hasOwnProperty(B) && Y !== te && (Y != null || te != null))
          )
            switch (B) {
              case "selected":
                e.selected =
                  Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                ct(e, t, B, Y, o, te);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Oe in a)
          (Y = a[Oe]),
            a.hasOwnProperty(Oe) &&
              Y != null &&
              !o.hasOwnProperty(Oe) &&
              ct(e, t, Oe, null, o, Y);
        for (_ in o)
          if (
            ((Y = o[_]),
            (te = a[_]),
            o.hasOwnProperty(_) && Y !== te && (Y != null || te != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(l(137, t));
                break;
              default:
                ct(e, t, _, Y, o, te);
            }
        return;
      default:
        if (Xc(t)) {
          for (var Tt in a)
            (Y = a[Tt]),
              a.hasOwnProperty(Tt) &&
                Y !== void 0 &&
                !o.hasOwnProperty(Tt) &&
                kf(e, t, Tt, void 0, o, Y);
          for (re in o)
            (Y = o[re]),
              (te = a[re]),
              !o.hasOwnProperty(re) ||
                Y === te ||
                (Y === void 0 && te === void 0) ||
                kf(e, t, re, Y, o, te);
          return;
        }
    }
    for (var H in a)
      (Y = a[H]),
        a.hasOwnProperty(H) &&
          Y != null &&
          !o.hasOwnProperty(H) &&
          ct(e, t, H, null, o, Y);
    for (ue in o)
      (Y = o[ue]),
        (te = a[ue]),
        !o.hasOwnProperty(ue) ||
          Y === te ||
          (Y == null && te == null) ||
          ct(e, t, ue, Y, o, te);
  }
  var Nf = null,
    Ff = null;
  function Ns(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Og(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function $f(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Uf = null;
  function T1() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Uf
        ? !1
        : ((Uf = e), !0)
      : ((Uf = null), !1);
  }
  var Bg = typeof setTimeout == "function" ? setTimeout : void 0,
    E1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    jg = typeof Promise == "function" ? Promise : void 0,
    R1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof jg < "u"
        ? function (e) {
            return jg.resolve(null).then(e).catch(w1);
          }
        : Bg;
  function w1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _f(e, t) {
    var a = t,
      o = 0;
    do {
      var s = a.nextSibling;
      if ((e.removeChild(a), s && s.nodeType === 8))
        if (((a = s.data), a === "/$")) {
          if (o === 0) {
            e.removeChild(s), Qi(t);
            return;
          }
          o--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || o++;
      a = s;
    } while (a);
    Qi(t);
  }
  function Lf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lf(a), Yc(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function A1(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var s = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[oi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== s.rel ||
                e.getAttribute("href") !== (s.href == null ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = ta(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function M1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = ta(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ta(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function zg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Dg(e, t, a) {
    switch (((t = Ns(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(l(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(l(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  var Hn = new Map(),
    kg = new Set();
  function Fs(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var Fa = ne.d;
  ne.d = { f: O1, r: B1, D: j1, C: z1, L: D1, m: k1, X: F1, S: N1, M: $1 };
  function O1() {
    var e = Fa.f(),
      t = Ms();
    return e || t;
  }
  function B1(e) {
    var t = Zr(e);
    t !== null && t.tag === 5 && t.type === "form" ? lm(t) : Fa.r(e);
  }
  var Bo = typeof document > "u" ? null : document;
  function Ng(e, t, a) {
    var o = Bo;
    if (o && typeof t == "string" && t) {
      var s = jn(t);
      (s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
        kg.has(s) ||
          (kg.add(s),
          (e = { rel: e, crossOrigin: a, href: t }),
          o.querySelector(s) === null &&
            ((t = o.createElement("link")),
            It(t, "link", e),
            _t(t),
            o.head.appendChild(t)));
    }
  }
  function j1(e) {
    Fa.D(e), Ng("dns-prefetch", e, null);
  }
  function z1(e, t) {
    Fa.C(e, t), Ng("preconnect", e, t);
  }
  function D1(e, t, a) {
    Fa.L(e, t, a);
    var o = Bo;
    if (o && e && t) {
      var s = 'link[rel="preload"][as="' + jn(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((s += '[imagesrcset="' + jn(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (s += '[imagesizes="' + jn(a.imageSizes) + '"]'))
        : (s += '[href="' + jn(e) + '"]');
      var u = s;
      switch (t) {
        case "style":
          u = jo(e);
          break;
        case "script":
          u = zo(e);
      }
      Hn.has(u) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        Hn.set(u, e),
        o.querySelector(s) !== null ||
          (t === "style" && o.querySelector(Gi(u))) ||
          (t === "script" && o.querySelector(Ii(u))) ||
          ((t = o.createElement("link")),
          It(t, "link", e),
          _t(t),
          o.head.appendChild(t)));
    }
  }
  function k1(e, t) {
    Fa.m(e, t);
    var a = Bo;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + jn(o) + '"][href="' + jn(e) + '"]',
        u = s;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = zo(e);
      }
      if (
        !Hn.has(u) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        Hn.set(u, e),
        a.querySelector(s) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ii(u))) return;
        }
        (o = a.createElement("link")),
          It(o, "link", e),
          _t(o),
          a.head.appendChild(o);
      }
    }
  }
  function N1(e, t, a) {
    Fa.S(e, t, a);
    var o = Bo;
    if (o && e) {
      var s = Jr(o).hoistableStyles,
        u = jo(e);
      t = t || "default";
      var y = s.get(u);
      if (!y) {
        var S = { loading: 0, preload: null };
        if ((y = o.querySelector(Gi(u)))) S.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Hn.get(u)) && Hf(e, a);
          var B = (y = o.createElement("link"));
          _t(B),
            It(B, "link", e),
            (B._p = new Promise(function (_, re) {
              (B.onload = _), (B.onerror = re);
            })),
            B.addEventListener("load", function () {
              S.loading |= 1;
            }),
            B.addEventListener("error", function () {
              S.loading |= 2;
            }),
            (S.loading |= 4),
            $s(y, t, o);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: S }),
          s.set(u, y);
      }
    }
  }
  function F1(e, t) {
    Fa.X(e, t);
    var a = Bo;
    if (a && e) {
      var o = Jr(a).hoistableScripts,
        s = zo(e),
        u = o.get(s);
      u ||
        ((u = a.querySelector(Ii(s))),
        u ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = Hn.get(s)) && Pf(e, t),
          (u = a.createElement("script")),
          _t(u),
          It(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        o.set(s, u));
    }
  }
  function $1(e, t) {
    Fa.M(e, t);
    var a = Bo;
    if (a && e) {
      var o = Jr(a).hoistableScripts,
        s = zo(e),
        u = o.get(s);
      u ||
        ((u = a.querySelector(Ii(s))),
        u ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = Hn.get(s)) && Pf(e, t),
          (u = a.createElement("script")),
          _t(u),
          It(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        o.set(s, u));
    }
  }
  function Fg(e, t, a, o) {
    var s = (s = ze.current) ? Fs(s) : null;
    if (!s) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = jo(a.href)),
            (a = Jr(s).hoistableStyles),
            (o = a.get(t)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = jo(a.href);
          var u = Jr(s).hoistableStyles,
            y = u.get(e);
          if (
            (y ||
              ((s = s.ownerDocument || s),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, y),
              (u = s.querySelector(Gi(e))) &&
                !u._p &&
                ((y.instance = u), (y.state.loading = 5)),
              Hn.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Hn.set(e, a),
                u || U1(s, e, a, y.state))),
            t && o === null)
          )
            throw Error(l(528, ""));
          return y;
        }
        if (t && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = zo(a)),
              (a = Jr(s).hoistableScripts),
              (o = a.get(t)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, e));
    }
  }
  function jo(e) {
    return 'href="' + jn(e) + '"';
  }
  function Gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $g(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function U1(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (o.loading = 1)
      : ((t = e.createElement("link")),
        (o.preload = t),
        t.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        It(t, "link", a),
        _t(t),
        e.head.appendChild(t));
  }
  function zo(e) {
    return '[src="' + jn(e) + '"]';
  }
  function Ii(e) {
    return "script[async]" + e;
  }
  function Ug(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + jn(a.href) + '"]');
          if (o) return (t.instance = o), _t(o), o;
          var s = v({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            _t(o),
            It(o, "style", s),
            $s(o, a.precedence, e),
            (t.instance = o)
          );
        case "stylesheet":
          s = jo(a.href);
          var u = e.querySelector(Gi(s));
          if (u) return (t.state.loading |= 4), (t.instance = u), _t(u), u;
          (o = $g(a)),
            (s = Hn.get(s)) && Hf(o, s),
            (u = (e.ownerDocument || e).createElement("link")),
            _t(u);
          var y = u;
          return (
            (y._p = new Promise(function (S, B) {
              (y.onload = S), (y.onerror = B);
            })),
            It(u, "link", o),
            (t.state.loading |= 4),
            $s(u, a.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = zo(a.src)),
            (s = e.querySelector(Ii(u)))
              ? ((t.instance = s), _t(s), s)
              : ((o = a),
                (s = Hn.get(u)) && ((o = v({}, a)), Pf(o, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                _t(s),
                It(s, "link", o),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((o = t.instance), (t.state.loading |= 4), $s(o, a.precedence, e));
    return t.instance;
  }
  function $s(e, t, a) {
    for (
      var o = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = o.length ? o[o.length - 1] : null,
        u = s,
        y = 0;
      y < o.length;
      y++
    ) {
      var S = o[y];
      if (S.dataset.precedence === t) u = S;
      else if (u !== s) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Hf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Pf(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var Us = null;
  function _g(e, t, a) {
    if (Us === null) {
      var o = new Map(),
        s = (Us = new Map());
      s.set(a, o);
    } else (s = Us), (o = s.get(a)), o || ((o = new Map()), s.set(a, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), a = a.getElementsByTagName(e), s = 0;
      s < a.length;
      s++
    ) {
      var u = a[s];
      if (
        !(
          u[oi] ||
          u[Qt] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = u.getAttribute(t) || "";
        y = e + y;
        var S = o.get(y);
        S ? S.push(u) : o.set(y, [u]);
      }
    }
    return o;
  }
  function Lg(e, t, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function _1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Hg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Yi = null;
  function L1() {}
  function H1(e, t, a) {
    if (Yi === null) throw Error(l(475));
    var o = Yi;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var s = jo(a.href),
          u = e.querySelector(Gi(s));
        if (u) {
          (e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = _s.bind(o)), e.then(o, o)),
            (t.state.loading |= 4),
            (t.instance = u),
            _t(u);
          return;
        }
        (u = e.ownerDocument || e),
          (a = $g(a)),
          (s = Hn.get(s)) && Hf(a, s),
          (u = u.createElement("link")),
          _t(u);
        var y = u;
        (y._p = new Promise(function (S, B) {
          (y.onload = S), (y.onerror = B);
        })),
          It(u, "link", a),
          (t.instance = u);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (o.count++,
          (t = _s.bind(o)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function P1() {
    if (Yi === null) throw Error(l(475));
    var e = Yi;
    return (
      e.stylesheets && e.count === 0 && qf(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && qf(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function _s() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Ls = null;
  function qf(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ls = new Map()),
        t.forEach(q1, e),
        (Ls = null),
        _s.call(e));
  }
  function q1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ls.get(e);
      if (a) var o = a.get(null);
      else {
        (a = new Map()), Ls.set(e, a);
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            u = 0;
          u < s.length;
          u++
        ) {
          var y = s[u];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (a.set(y.dataset.precedence, y), (o = y));
        }
        o && a.set(null, o);
      }
      (s = t.instance),
        (y = s.getAttribute("data-precedence")),
        (u = a.get(y) || o),
        u === o && a.set(null, s),
        a.set(y, s),
        this.count++,
        (o = _s.bind(this)),
        s.addEventListener("load", o),
        s.addEventListener("error", o),
        u
          ? u.parentNode.insertBefore(s, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Wi = {
    $$typeof: A,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0,
  };
  function G1(e, t, a, o, s, u, y, S) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Kr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kr(0)),
      (this.hiddenUpdates = Kr(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = s),
      (this.onCaughtError = u),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map());
  }
  function Pg(e, t, a, o, s, u, y, S, B, _, re, ue) {
    return (
      (e = new G1(e, t, a, y, S, B, _, ue)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = _n(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = xu()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: o, isDehydrated: a, cache: t }),
      ef(u),
      e
    );
  }
  function qg(e) {
    return e ? ((e = co), e) : co;
  }
  function Gg(e, t, a, o, s, u) {
    (s = qg(s)),
      o.context === null ? (o.context = s) : (o.pendingContext = s),
      (o = Qa(t)),
      (o.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (o.callback = u),
      (a = Za(e, o, t)),
      a !== null && (on(a, e, t), Bi(a, e, t));
  }
  function Ig(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Gf(e, t) {
    Ig(e, t), (e = e.alternate) && Ig(e, t);
  }
  function Yg(e) {
    if (e.tag === 13) {
      var t = Ga(e, 67108864);
      t !== null && on(t, e, 67108864), Gf(e, 67108864);
    }
  }
  var Hs = !0;
  function I1(e, t, a, o) {
    var s = q.T;
    q.T = null;
    var u = ne.p;
    try {
      (ne.p = 2), If(e, t, a, o);
    } finally {
      (ne.p = u), (q.T = s);
    }
  }
  function Y1(e, t, a, o) {
    var s = q.T;
    q.T = null;
    var u = ne.p;
    try {
      (ne.p = 8), If(e, t, a, o);
    } finally {
      (ne.p = u), (q.T = s);
    }
  }
  function If(e, t, a, o) {
    if (Hs) {
      var s = Yf(o);
      if (s === null) Df(e, t, o, Ps, a), Vg(e, o);
      else if (V1(s, e, t, a, o)) o.stopPropagation();
      else if ((Vg(e, o), t & 4 && -1 < W1.indexOf(e))) {
        for (; s !== null; ) {
          var u = Zr(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var y = ba(u.pendingLanes);
                  if (y !== 0) {
                    var S = u;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; y; ) {
                      var B = 1 << (31 - We(y));
                      (S.entanglements[1] |= B), (y &= ~B);
                    }
                    ia(u), (xt & 6) === 0 && ((Rs = Ze() + 500), Hi(0));
                  }
                }
                break;
              case 13:
                (S = Ga(u, 2)), S !== null && on(S, u, 2), Ms(), Gf(u, 2);
            }
          if (((u = Yf(o)), u === null && Df(e, t, o, Ps, a), u === s)) break;
          s = u;
        }
        s !== null && o.stopPropagation();
      } else Df(e, t, o, null, a);
    }
  }
  function Yf(e) {
    return (e = Qc(e)), Wf(e);
  }
  var Ps = null;
  function Wf(e) {
    if (((Ps = null), (e = mr(e)), e !== null)) {
      var t = se(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = ae(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (Ps = e), null;
  }
  function Wg(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vn()) {
          case bn:
            return 2;
          case an:
            return 8;
          case Kt:
          case sn:
            return 32;
          case cn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Vf = !1,
    or = null,
    ir = null,
    lr = null,
    Vi = new Map(),
    Xi = new Map(),
    sr = [],
    W1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Vg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        or = null;
        break;
      case "dragenter":
      case "dragleave":
        ir = null;
        break;
      case "mouseover":
      case "mouseout":
        lr = null;
        break;
      case "pointerover":
      case "pointerout":
        Vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xi.delete(t.pointerId);
    }
  }
  function Ki(e, t, a, o, s, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: o,
          nativeEvent: u,
          targetContainers: [s],
        }),
        t !== null && ((t = Zr(t)), t !== null && Yg(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function V1(e, t, a, o, s) {
    switch (t) {
      case "focusin":
        return (or = Ki(or, e, t, a, o, s)), !0;
      case "dragenter":
        return (ir = Ki(ir, e, t, a, o, s)), !0;
      case "mouseover":
        return (lr = Ki(lr, e, t, a, o, s)), !0;
      case "pointerover":
        var u = s.pointerId;
        return Vi.set(u, Ki(Vi.get(u) || null, e, t, a, o, s)), !0;
      case "gotpointercapture":
        return (
          (u = s.pointerId), Xi.set(u, Ki(Xi.get(u) || null, e, t, a, o, s)), !0
        );
    }
    return !1;
  }
  function Xg(e) {
    var t = mr(e.target);
    if (t !== null) {
      var a = se(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = ae(a)), t !== null)) {
            (e.blockedOn = t),
              P0(e.priority, function () {
                if (a.tag === 13) {
                  var o = Rn(),
                    s = Ga(a, o);
                  s !== null && on(s, a, o), Gf(a, o);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function qs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Yf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(a.type, a);
        (Kc = o), a.target.dispatchEvent(o), (Kc = null);
      } else return (t = Zr(a)), t !== null && Yg(t), (e.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Kg(e, t, a) {
    qs(e) && a.delete(t);
  }
  function X1() {
    (Vf = !1),
      or !== null && qs(or) && (or = null),
      ir !== null && qs(ir) && (ir = null),
      lr !== null && qs(lr) && (lr = null),
      Vi.forEach(Kg),
      Xi.forEach(Kg);
  }
  function Gs(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Vf ||
        ((Vf = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, X1)));
  }
  var Is = null;
  function Qg(e) {
    Is !== e &&
      ((Is = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Is === e && (Is = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            o = e[t + 1],
            s = e[t + 2];
          if (typeof o != "function") {
            if (Wf(o || a) === null) continue;
            break;
          }
          var u = Zr(a);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Fu(u, { pending: !0, data: s, method: a.method, action: o }, o, s));
        }
      }));
  }
  function Qi(e) {
    function t(B) {
      return Gs(B, e);
    }
    or !== null && Gs(or, e),
      ir !== null && Gs(ir, e),
      lr !== null && Gs(lr, e),
      Vi.forEach(t),
      Xi.forEach(t);
    for (var a = 0; a < sr.length; a++) {
      var o = sr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < sr.length && ((a = sr[0]), a.blockedOn === null); )
      Xg(a), a.blockedOn === null && sr.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (o = 0; o < a.length; o += 3) {
        var s = a[o],
          u = a[o + 1],
          y = s[dn] || null;
        if (typeof u == "function") y || Qg(a);
        else if (y) {
          var S = null;
          if (u && u.hasAttribute("formAction")) {
            if (((s = u), (y = u[dn] || null))) S = y.formAction;
            else if (Wf(s) !== null) continue;
          } else S = y.action;
          typeof S == "function" ? (a[o + 1] = S) : (a.splice(o, 3), (o -= 3)),
            Qg(a);
        }
      }
  }
  function Xf(e) {
    this._internalRoot = e;
  }
  (Ys.prototype.render = Xf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      var a = t.current,
        o = Rn();
      Gg(a, o, e, t, null, null);
    }),
    (Ys.prototype.unmount = Xf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && Ao(),
            Gg(e.current, 2, null, e, null, null),
            Ms(),
            (t[Qr] = null);
        }
      });
  function Ys(e) {
    this._internalRoot = e;
  }
  Ys.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Rp();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < sr.length && t !== 0 && t < sr[a].priority; a++);
      sr.splice(a, 0, e), a === 0 && Xg(e);
    }
  };
  var Zg = r.version;
  if (Zg !== "19.0.0") throw Error(l(527, Zg, "19.0.0"));
  ne.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(l(188))
        : ((e = Object.keys(e).join(",")), Error(l(268, e)));
    return (
      (e = K(t)),
      (e = e !== null ? Q(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var K1 = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    findFiberByHostInstance: mr,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ws = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ws.isDisabled && Ws.supportsFiber)
      try {
        (Nt = Ws.inject(K1)), (lt = Ws);
      } catch {}
  }
  return (
    (el.createRoot = function (e, t) {
      if (!c(e)) throw Error(l(299));
      var a = !1,
        o = "",
        s = mm,
        u = gm,
        y = ym,
        S = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (S = t.unstable_transitionCallbacks)),
        (t = Pg(e, 1, !1, null, null, a, o, s, u, y, S, null)),
        (e[Qr] = t.current),
        zf(e.nodeType === 8 ? e.parentNode : e),
        new Xf(t)
      );
    }),
    (el.hydrateRoot = function (e, t, a) {
      if (!c(e)) throw Error(l(299));
      var o = !1,
        s = "",
        u = mm,
        y = gm,
        S = ym,
        B = null,
        _ = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (o = !0),
          a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (y = a.onCaughtError),
          a.onRecoverableError !== void 0 && (S = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (B = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (_ = a.formState)),
        (t = Pg(e, 1, !0, t, a ?? null, o, s, u, y, S, B, _)),
        (t.context = qg(null)),
        (a = t.current),
        (o = Rn()),
        (s = Qa(o)),
        (s.callback = null),
        Za(a, s, o),
        (t.current.lanes = o),
        ri(t, o),
        ia(t),
        (e[Qr] = t.current),
        zf(e),
        new Ys(t)
      );
    }),
    (el.version = "19.0.0"),
    el
  );
}
var sy;
function sx() {
  if (sy) return Zf.exports;
  sy = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), (Zf.exports = lx()), Zf.exports;
}
var cx = sx();
const bl = { black: "#000", white: "#fff" },
  Do = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828",
  },
  ko = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  No = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0",
  },
  Fo = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b",
  },
  $o = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  tl = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100",
  },
  ux = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function _a(n, ...r) {
  const i = new URL(`https://mui.com/production-error/?code=${n}`);
  return (
    r.forEach((l) => i.searchParams.append("args[]", l)),
    `Minified MUI error #${n}; visit ${i} for the full message.`
  );
}
const Ld = "$$material";
function fc() {
  return (
    (fc = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            for (var l in i) ({}).hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    fc.apply(null, arguments)
  );
}
function fx(n) {
  if (n.sheet) return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n) return document.styleSheets[r];
}
function dx(n) {
  var r = document.createElement("style");
  return (
    r.setAttribute("data-emotion", n.key),
    n.nonce !== void 0 && r.setAttribute("nonce", n.nonce),
    r.appendChild(document.createTextNode("")),
    r.setAttribute("data-s", ""),
    r
  );
}
var px = (function () {
    function n(i) {
      var l = this;
      (this._insertTag = function (c) {
        var f;
        l.tags.length === 0
          ? l.insertionPoint
            ? (f = l.insertionPoint.nextSibling)
            : l.prepend
            ? (f = l.container.firstChild)
            : (f = l.before)
          : (f = l.tags[l.tags.length - 1].nextSibling),
          l.container.insertBefore(c, f),
          l.tags.push(c);
      }),
        (this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = i.nonce),
        (this.key = i.key),
        (this.container = i.container),
        (this.prepend = i.prepend),
        (this.insertionPoint = i.insertionPoint),
        (this.before = null);
    }
    var r = n.prototype;
    return (
      (r.hydrate = function (l) {
        l.forEach(this._insertTag);
      }),
      (r.insert = function (l) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(dx(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = fx(c);
          try {
            f.insertRule(l, f.cssRules.length);
          } catch {}
        } else c.appendChild(document.createTextNode(l));
        this.ctr++;
      }),
      (r.flush = function () {
        this.tags.forEach(function (l) {
          var c;
          return (c = l.parentNode) == null ? void 0 : c.removeChild(l);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      n
    );
  })(),
  en = "-ms-",
  dc = "-moz-",
  Je = "-webkit-",
  Bv = "comm",
  Hd = "rule",
  Pd = "decl",
  hx = "@import",
  jv = "@keyframes",
  mx = "@layer",
  gx = Math.abs,
  Cc = String.fromCharCode,
  yx = Object.assign;
function vx(n, r) {
  return Yt(n, 0) ^ 45
    ? (((((((r << 2) ^ Yt(n, 0)) << 2) ^ Yt(n, 1)) << 2) ^ Yt(n, 2)) << 2) ^
        Yt(n, 3)
    : 0;
}
function zv(n) {
  return n.trim();
}
function bx(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function et(n, r, i) {
  return n.replace(r, i);
}
function bd(n, r) {
  return n.indexOf(r);
}
function Yt(n, r) {
  return n.charCodeAt(r) | 0;
}
function xl(n, r, i) {
  return n.slice(r, i);
}
function ca(n) {
  return n.length;
}
function qd(n) {
  return n.length;
}
function Vs(n, r) {
  return r.push(n), n;
}
function xx(n, r) {
  return n.map(r).join("");
}
var Tc = 1,
  Io = 1,
  Dv = 0,
  yn = 0,
  kt = 0,
  Zo = "";
function Ec(n, r, i, l, c, f, d) {
  return {
    value: n,
    root: r,
    parent: i,
    type: l,
    props: c,
    children: f,
    line: Tc,
    column: Io,
    length: d,
    return: "",
  };
}
function nl(n, r) {
  return yx(Ec("", null, null, "", null, null, 0), n, { length: -n.length }, r);
}
function Sx() {
  return kt;
}
function Cx() {
  return (
    (kt = yn > 0 ? Yt(Zo, --yn) : 0), Io--, kt === 10 && ((Io = 1), Tc--), kt
  );
}
function An() {
  return (
    (kt = yn < Dv ? Yt(Zo, yn++) : 0), Io++, kt === 10 && ((Io = 1), Tc++), kt
  );
}
function ha() {
  return Yt(Zo, yn);
}
function ac() {
  return yn;
}
function Ol(n, r) {
  return xl(Zo, n, r);
}
function Sl(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kv(n) {
  return (Tc = Io = 1), (Dv = ca((Zo = n))), (yn = 0), [];
}
function Nv(n) {
  return (Zo = ""), n;
}
function rc(n) {
  return zv(Ol(yn - 1, xd(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function Tx(n) {
  for (; (kt = ha()) && kt < 33; ) An();
  return Sl(n) > 2 || Sl(kt) > 3 ? "" : " ";
}
function Ex(n, r) {
  for (
    ;
    --r &&
    An() &&
    !(kt < 48 || kt > 102 || (kt > 57 && kt < 65) || (kt > 70 && kt < 97));

  );
  return Ol(n, ac() + (r < 6 && ha() == 32 && An() == 32));
}
function xd(n) {
  for (; An(); )
    switch (kt) {
      case n:
        return yn;
      case 34:
      case 39:
        n !== 34 && n !== 39 && xd(kt);
        break;
      case 40:
        n === 41 && xd(n);
        break;
      case 92:
        An();
        break;
    }
  return yn;
}
function Rx(n, r) {
  for (; An() && n + kt !== 57; ) if (n + kt === 84 && ha() === 47) break;
  return "/*" + Ol(r, yn - 1) + "*" + Cc(n === 47 ? n : An());
}
function wx(n) {
  for (; !Sl(ha()); ) An();
  return Ol(n, yn);
}
function Ax(n) {
  return Nv(oc("", null, null, null, [""], (n = kv(n)), 0, [0], n));
}
function oc(n, r, i, l, c, f, d, h, m) {
  for (
    var g = 0,
      b = 0,
      x = d,
      w = 0,
      A = 0,
      R = 0,
      C = 1,
      z = 1,
      D = 1,
      k = 0,
      O = "",
      M = c,
      E = f,
      $ = l,
      L = O;
    z;

  )
    switch (((R = k), (k = An()))) {
      case 40:
        if (R != 108 && Yt(L, x - 1) == 58) {
          bd((L += et(rc(k), "&", "&\f")), "&\f") != -1 && (D = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        L += rc(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        L += Tx(R);
        break;
      case 92:
        L += Ex(ac() - 1, 7);
        continue;
      case 47:
        switch (ha()) {
          case 42:
          case 47:
            Vs(Mx(Rx(An(), ac()), r, i), m);
            break;
          default:
            L += "/";
        }
        break;
      case 123 * C:
        h[g++] = ca(L) * D;
      case 125 * C:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            z = 0;
          case 59 + b:
            D == -1 && (L = et(L, /\f/g, "")),
              A > 0 &&
                ca(L) - x &&
                Vs(
                  A > 32
                    ? uy(L + ";", l, i, x - 1)
                    : uy(et(L, " ", "") + ";", l, i, x - 2),
                  m
                );
            break;
          case 59:
            L += ";";
          default:
            if (
              (Vs(($ = cy(L, r, i, g, b, c, h, O, (M = []), (E = []), x)), f),
              k === 123)
            )
              if (b === 0) oc(L, r, $, $, M, f, x, h, E);
              else
                switch (w === 99 && Yt(L, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    oc(
                      n,
                      $,
                      $,
                      l && Vs(cy(n, $, $, 0, 0, c, h, O, c, (M = []), x), E),
                      c,
                      E,
                      x,
                      h,
                      l ? M : E
                    );
                    break;
                  default:
                    oc(L, $, $, $, [""], E, 0, h, E);
                }
        }
        (g = b = A = 0), (C = D = 1), (O = L = ""), (x = d);
        break;
      case 58:
        (x = 1 + ca(L)), (A = R);
      default:
        if (C < 1) {
          if (k == 123) --C;
          else if (k == 125 && C++ == 0 && Cx() == 125) continue;
        }
        switch (((L += Cc(k)), k * C)) {
          case 38:
            D = b > 0 ? 1 : ((L += "\f"), -1);
            break;
          case 44:
            (h[g++] = (ca(L) - 1) * D), (D = 1);
            break;
          case 64:
            ha() === 45 && (L += rc(An())),
              (w = ha()),
              (b = x = ca((O = L += wx(ac())))),
              k++;
            break;
          case 45:
            R === 45 && ca(L) == 2 && (C = 0);
        }
    }
  return f;
}
function cy(n, r, i, l, c, f, d, h, m, g, b) {
  for (
    var x = c - 1, w = c === 0 ? f : [""], A = qd(w), R = 0, C = 0, z = 0;
    R < l;
    ++R
  )
    for (var D = 0, k = xl(n, x + 1, (x = gx((C = d[R])))), O = n; D < A; ++D)
      (O = zv(C > 0 ? w[D] + " " + k : et(k, /&\f/g, w[D]))) && (m[z++] = O);
  return Ec(n, r, i, c === 0 ? Hd : h, m, g, b);
}
function Mx(n, r, i) {
  return Ec(n, r, i, Bv, Cc(Sx()), xl(n, 2, -2), 0);
}
function uy(n, r, i, l) {
  return Ec(n, r, i, Pd, xl(n, 0, l), xl(n, l + 1, -1), l);
}
function qo(n, r) {
  for (var i = "", l = qd(n), c = 0; c < l; c++) i += r(n[c], c, n, r) || "";
  return i;
}
function Ox(n, r, i, l) {
  switch (n.type) {
    case mx:
      if (n.children.length) break;
    case hx:
    case Pd:
      return (n.return = n.return || n.value);
    case Bv:
      return "";
    case jv:
      return (n.return = n.value + "{" + qo(n.children, l) + "}");
    case Hd:
      n.value = n.props.join(",");
  }
  return ca((i = qo(n.children, l)))
    ? (n.return = n.value + "{" + i + "}")
    : "";
}
function Bx(n) {
  var r = qd(n);
  return function (i, l, c, f) {
    for (var d = "", h = 0; h < r; h++) d += n[h](i, l, c, f) || "";
    return d;
  };
}
function jx(n) {
  return function (r) {
    r.root || ((r = r.return) && n(r));
  };
}
function Fv(n) {
  var r = Object.create(null);
  return function (i) {
    return r[i] === void 0 && (r[i] = n(i)), r[i];
  };
}
var zx = function (r, i, l) {
    for (
      var c = 0, f = 0;
      (c = f), (f = ha()), c === 38 && f === 12 && (i[l] = 1), !Sl(f);

    )
      An();
    return Ol(r, yn);
  },
  Dx = function (r, i) {
    var l = -1,
      c = 44;
    do
      switch (Sl(c)) {
        case 0:
          c === 38 && ha() === 12 && (i[l] = 1), (r[l] += zx(yn - 1, i, l));
          break;
        case 2:
          r[l] += rc(c);
          break;
        case 4:
          if (c === 44) {
            (r[++l] = ha() === 58 ? "&\f" : ""), (i[l] = r[l].length);
            break;
          }
        default:
          r[l] += Cc(c);
      }
    while ((c = An()));
    return r;
  },
  kx = function (r, i) {
    return Nv(Dx(kv(r), i));
  },
  fy = new WeakMap(),
  Nx = function (r) {
    if (!(r.type !== "rule" || !r.parent || r.length < 1)) {
      for (
        var i = r.value,
          l = r.parent,
          c = r.column === l.column && r.line === l.line;
        l.type !== "rule";

      )
        if (((l = l.parent), !l)) return;
      if (
        !(r.props.length === 1 && i.charCodeAt(0) !== 58 && !fy.get(l)) &&
        !c
      ) {
        fy.set(r, !0);
        for (
          var f = [], d = kx(i, f), h = l.props, m = 0, g = 0;
          m < d.length;
          m++
        )
          for (var b = 0; b < h.length; b++, g++)
            r.props[g] = f[m] ? d[m].replace(/&\f/g, h[b]) : h[b] + " " + d[m];
      }
    }
  },
  Fx = function (r) {
    if (r.type === "decl") {
      var i = r.value;
      i.charCodeAt(0) === 108 &&
        i.charCodeAt(2) === 98 &&
        ((r.return = ""), (r.value = ""));
    }
  };
function $v(n, r) {
  switch (vx(n, r)) {
    case 5103:
      return Je + "print-" + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Je + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Je + n + dc + n + en + n + n;
    case 6828:
    case 4268:
      return Je + n + en + n + n;
    case 6165:
      return Je + n + en + "flex-" + n + n;
    case 5187:
      return (
        Je + n + et(n, /(\w+).+(:[^]+)/, Je + "box-$1$2" + en + "flex-$1$2") + n
      );
    case 5443:
      return Je + n + en + "flex-item-" + et(n, /flex-|-self/, "") + n;
    case 4675:
      return (
        Je +
        n +
        en +
        "flex-line-pack" +
        et(n, /align-content|flex-|-self/, "") +
        n
      );
    case 5548:
      return Je + n + en + et(n, "shrink", "negative") + n;
    case 5292:
      return Je + n + en + et(n, "basis", "preferred-size") + n;
    case 6060:
      return (
        Je +
        "box-" +
        et(n, "-grow", "") +
        Je +
        n +
        en +
        et(n, "grow", "positive") +
        n
      );
    case 4554:
      return Je + et(n, /([^-])(transform)/g, "$1" + Je + "$2") + n;
    case 6187:
      return (
        et(
          et(et(n, /(zoom-|grab)/, Je + "$1"), /(image-set)/, Je + "$1"),
          n,
          ""
        ) + n
      );
    case 5495:
    case 3959:
      return et(n, /(image-set\([^]*)/, Je + "$1$`$1");
    case 4968:
      return (
        et(
          et(n, /(.+:)(flex-)?(.*)/, Je + "box-pack:$3" + en + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        Je +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return et(n, /(.+)-inline(.+)/, Je + "$1$2") + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ca(n) - 1 - r > 6)
        switch (Yt(n, r + 1)) {
          case 109:
            if (Yt(n, r + 4) !== 45) break;
          case 102:
            return (
              et(
                n,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  Je +
                  "$2-$3$1" +
                  dc +
                  (Yt(n, r + 3) == 108 ? "$3" : "$2-$3")
              ) + n
            );
          case 115:
            return ~bd(n, "stretch")
              ? $v(et(n, "stretch", "fill-available"), r) + n
              : n;
        }
      break;
    case 4949:
      if (Yt(n, r + 1) !== 115) break;
    case 6444:
      switch (Yt(n, ca(n) - 3 - (~bd(n, "!important") && 10))) {
        case 107:
          return et(n, ":", ":" + Je) + n;
        case 101:
          return (
            et(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                Je +
                (Yt(n, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                Je +
                "$2$3$1" +
                en +
                "$2box$3"
            ) + n
          );
      }
      break;
    case 5936:
      switch (Yt(n, r + 11)) {
        case 114:
          return Je + n + en + et(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        case 108:
          return Je + n + en + et(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        case 45:
          return Je + n + en + et(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return Je + n + en + n + n;
  }
  return n;
}
var $x = function (r, i, l, c) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case Pd:
          r.return = $v(r.value, r.length);
          break;
        case jv:
          return qo([nl(r, { value: et(r.value, "@", "@" + Je) })], c);
        case Hd:
          if (r.length)
            return xx(r.props, function (f) {
              switch (bx(f, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return qo(
                    [nl(r, { props: [et(f, /:(read-\w+)/, ":" + dc + "$1")] })],
                    c
                  );
                case "::placeholder":
                  return qo(
                    [
                      nl(r, {
                        props: [et(f, /:(plac\w+)/, ":" + Je + "input-$1")],
                      }),
                      nl(r, { props: [et(f, /:(plac\w+)/, ":" + dc + "$1")] }),
                      nl(r, { props: [et(f, /:(plac\w+)/, en + "input-$1")] }),
                    ],
                    c
                  );
              }
              return "";
            });
      }
  },
  Ux = [$x],
  _x = function (r) {
    var i = r.key;
    if (i === "css") {
      var l = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(l, function (C) {
        var z = C.getAttribute("data-emotion");
        z.indexOf(" ") !== -1 &&
          (document.head.appendChild(C), C.setAttribute("data-s", ""));
      });
    }
    var c = r.stylisPlugins || Ux,
      f = {},
      d,
      h = [];
    (d = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
        function (C) {
          for (
            var z = C.getAttribute("data-emotion").split(" "), D = 1;
            D < z.length;
            D++
          )
            f[z[D]] = !0;
          h.push(C);
        }
      );
    var m,
      g = [Nx, Fx];
    {
      var b,
        x = [
          Ox,
          jx(function (C) {
            b.insert(C);
          }),
        ],
        w = Bx(g.concat(c, x)),
        A = function (z) {
          return qo(Ax(z), w);
        };
      m = function (z, D, k, O) {
        (b = k),
          A(z ? z + "{" + D.styles + "}" : D.styles),
          O && (R.inserted[D.name] = !0);
      };
    }
    var R = {
      key: i,
      sheet: new px({
        key: i,
        container: d,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: f,
      registered: {},
      insert: m,
    };
    return R.sheet.hydrate(h), R;
  },
  nd = { exports: {} },
  at = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy;
function Lx() {
  if (dy) return at;
  dy = 1;
  var n = typeof Symbol == "function" && Symbol.for,
    r = n ? Symbol.for("react.element") : 60103,
    i = n ? Symbol.for("react.portal") : 60106,
    l = n ? Symbol.for("react.fragment") : 60107,
    c = n ? Symbol.for("react.strict_mode") : 60108,
    f = n ? Symbol.for("react.profiler") : 60114,
    d = n ? Symbol.for("react.provider") : 60109,
    h = n ? Symbol.for("react.context") : 60110,
    m = n ? Symbol.for("react.async_mode") : 60111,
    g = n ? Symbol.for("react.concurrent_mode") : 60111,
    b = n ? Symbol.for("react.forward_ref") : 60112,
    x = n ? Symbol.for("react.suspense") : 60113,
    w = n ? Symbol.for("react.suspense_list") : 60120,
    A = n ? Symbol.for("react.memo") : 60115,
    R = n ? Symbol.for("react.lazy") : 60116,
    C = n ? Symbol.for("react.block") : 60121,
    z = n ? Symbol.for("react.fundamental") : 60117,
    D = n ? Symbol.for("react.responder") : 60118,
    k = n ? Symbol.for("react.scope") : 60119;
  function O(E) {
    if (typeof E == "object" && E !== null) {
      var $ = E.$$typeof;
      switch ($) {
        case r:
          switch (((E = E.type), E)) {
            case m:
            case g:
            case l:
            case f:
            case c:
            case x:
              return E;
            default:
              switch (((E = E && E.$$typeof), E)) {
                case h:
                case b:
                case R:
                case A:
                case d:
                  return E;
                default:
                  return $;
              }
          }
        case i:
          return $;
      }
    }
  }
  function M(E) {
    return O(E) === g;
  }
  return (
    (at.AsyncMode = m),
    (at.ConcurrentMode = g),
    (at.ContextConsumer = h),
    (at.ContextProvider = d),
    (at.Element = r),
    (at.ForwardRef = b),
    (at.Fragment = l),
    (at.Lazy = R),
    (at.Memo = A),
    (at.Portal = i),
    (at.Profiler = f),
    (at.StrictMode = c),
    (at.Suspense = x),
    (at.isAsyncMode = function (E) {
      return M(E) || O(E) === m;
    }),
    (at.isConcurrentMode = M),
    (at.isContextConsumer = function (E) {
      return O(E) === h;
    }),
    (at.isContextProvider = function (E) {
      return O(E) === d;
    }),
    (at.isElement = function (E) {
      return typeof E == "object" && E !== null && E.$$typeof === r;
    }),
    (at.isForwardRef = function (E) {
      return O(E) === b;
    }),
    (at.isFragment = function (E) {
      return O(E) === l;
    }),
    (at.isLazy = function (E) {
      return O(E) === R;
    }),
    (at.isMemo = function (E) {
      return O(E) === A;
    }),
    (at.isPortal = function (E) {
      return O(E) === i;
    }),
    (at.isProfiler = function (E) {
      return O(E) === f;
    }),
    (at.isStrictMode = function (E) {
      return O(E) === c;
    }),
    (at.isSuspense = function (E) {
      return O(E) === x;
    }),
    (at.isValidElementType = function (E) {
      return (
        typeof E == "string" ||
        typeof E == "function" ||
        E === l ||
        E === g ||
        E === f ||
        E === c ||
        E === x ||
        E === w ||
        (typeof E == "object" &&
          E !== null &&
          (E.$$typeof === R ||
            E.$$typeof === A ||
            E.$$typeof === d ||
            E.$$typeof === h ||
            E.$$typeof === b ||
            E.$$typeof === z ||
            E.$$typeof === D ||
            E.$$typeof === k ||
            E.$$typeof === C))
      );
    }),
    (at.typeOf = O),
    at
  );
}
var py;
function Hx() {
  return py || ((py = 1), (nd.exports = Lx())), nd.exports;
}
var ad, hy;
function Px() {
  if (hy) return ad;
  hy = 1;
  var n = Hx(),
    r = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    i = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    l = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    c = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    f = {};
  (f[n.ForwardRef] = l), (f[n.Memo] = c);
  function d(R) {
    return n.isMemo(R) ? c : f[R.$$typeof] || r;
  }
  var h = Object.defineProperty,
    m = Object.getOwnPropertyNames,
    g = Object.getOwnPropertySymbols,
    b = Object.getOwnPropertyDescriptor,
    x = Object.getPrototypeOf,
    w = Object.prototype;
  function A(R, C, z) {
    if (typeof C != "string") {
      if (w) {
        var D = x(C);
        D && D !== w && A(R, D, z);
      }
      var k = m(C);
      g && (k = k.concat(g(C)));
      for (var O = d(R), M = d(C), E = 0; E < k.length; ++E) {
        var $ = k[E];
        if (!i[$] && !(z && z[$]) && !(M && M[$]) && !(O && O[$])) {
          var L = b(C, $);
          try {
            h(R, $, L);
          } catch {}
        }
      }
    }
    return R;
  }
  return (ad = A), ad;
}
Px();
var qx = !0;
function Uv(n, r, i) {
  var l = "";
  return (
    i.split(" ").forEach(function (c) {
      n[c] !== void 0 ? r.push(n[c] + ";") : c && (l += c + " ");
    }),
    l
  );
}
var Gd = function (r, i, l) {
    var c = r.key + "-" + i.name;
    (l === !1 || qx === !1) &&
      r.registered[c] === void 0 &&
      (r.registered[c] = i.styles);
  },
  Id = function (r, i, l) {
    Gd(r, i, l);
    var c = r.key + "-" + i.name;
    if (r.inserted[i.name] === void 0) {
      var f = i;
      do r.insert(i === f ? "." + c : "", f, r.sheet, !0), (f = f.next);
      while (f !== void 0);
    }
  };
function Gx(n) {
  for (var r = 0, i, l = 0, c = n.length; c >= 4; ++l, c -= 4)
    (i =
      (n.charCodeAt(l) & 255) |
      ((n.charCodeAt(++l) & 255) << 8) |
      ((n.charCodeAt(++l) & 255) << 16) |
      ((n.charCodeAt(++l) & 255) << 24)),
      (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
      (i ^= i >>> 24),
      (r =
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  switch (c) {
    case 3:
      r ^= (n.charCodeAt(l + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(l + 1) & 255) << 8;
    case 1:
      (r ^= n.charCodeAt(l) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var Ix = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Yx = /[A-Z]|^ms/g,
  Wx = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  _v = function (r) {
    return r.charCodeAt(1) === 45;
  },
  my = function (r) {
    return r != null && typeof r != "boolean";
  },
  rd = Fv(function (n) {
    return _v(n) ? n : n.replace(Yx, "-$&").toLowerCase();
  }),
  gy = function (r, i) {
    switch (r) {
      case "animation":
      case "animationName":
        if (typeof i == "string")
          return i.replace(Wx, function (l, c, f) {
            return (ua = { name: c, styles: f, next: ua }), c;
          });
    }
    return Ix[r] !== 1 && !_v(r) && typeof i == "number" && i !== 0
      ? i + "px"
      : i;
  };
function Cl(n, r, i) {
  if (i == null) return "";
  var l = i;
  if (l.__emotion_styles !== void 0) return l;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var c = i;
      if (c.anim === 1)
        return (ua = { name: c.name, styles: c.styles, next: ua }), c.name;
      var f = i;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            (ua = { name: d.name, styles: d.styles, next: ua }), (d = d.next);
        var h = f.styles + ";";
        return h;
      }
      return Vx(n, r, i);
    }
    case "function": {
      if (n !== void 0) {
        var m = ua,
          g = i(n);
        return (ua = m), Cl(n, r, g);
      }
      break;
    }
  }
  var b = i;
  if (r == null) return b;
  var x = r[b];
  return x !== void 0 ? x : b;
}
function Vx(n, r, i) {
  var l = "";
  if (Array.isArray(i))
    for (var c = 0; c < i.length; c++) l += Cl(n, r, i[c]) + ";";
  else
    for (var f in i) {
      var d = i[f];
      if (typeof d != "object") {
        var h = d;
        r != null && r[h] !== void 0
          ? (l += f + "{" + r[h] + "}")
          : my(h) && (l += rd(f) + ":" + gy(f, h) + ";");
      } else if (
        Array.isArray(d) &&
        typeof d[0] == "string" &&
        (r == null || r[d[0]] === void 0)
      )
        for (var m = 0; m < d.length; m++)
          my(d[m]) && (l += rd(f) + ":" + gy(f, d[m]) + ";");
      else {
        var g = Cl(n, r, d);
        switch (f) {
          case "animation":
          case "animationName": {
            l += rd(f) + ":" + g + ";";
            break;
          }
          default:
            l += f + "{" + g + "}";
        }
      }
    }
  return l;
}
var yy = /label:\s*([^\s;{]+)\s*(;|$)/g,
  ua;
function Bl(n, r, i) {
  if (
    n.length === 1 &&
    typeof n[0] == "object" &&
    n[0] !== null &&
    n[0].styles !== void 0
  )
    return n[0];
  var l = !0,
    c = "";
  ua = void 0;
  var f = n[0];
  if (f == null || f.raw === void 0) (l = !1), (c += Cl(i, r, f));
  else {
    var d = f;
    c += d[0];
  }
  for (var h = 1; h < n.length; h++)
    if (((c += Cl(i, r, n[h])), l)) {
      var m = f;
      c += m[h];
    }
  yy.lastIndex = 0;
  for (var g = "", b; (b = yy.exec(c)) !== null; ) g += "-" + b[1];
  var x = Gx(c) + g;
  return { name: x, styles: c, next: ua };
}
var Xx = function (r) {
    return r();
  },
  Lv = vd.useInsertionEffect ? vd.useInsertionEffect : !1,
  Hv = Lv || Xx,
  vy = Lv || T.useLayoutEffect,
  Pv = T.createContext(typeof HTMLElement < "u" ? _x({ key: "css" }) : null);
Pv.Provider;
var Yd = function (r) {
    return T.forwardRef(function (i, l) {
      var c = T.useContext(Pv);
      return r(i, c, l);
    });
  },
  Rc = T.createContext({}),
  Wd = {}.hasOwnProperty,
  Sd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  Kx = function (r, i) {
    var l = {};
    for (var c in i) Wd.call(i, c) && (l[c] = i[c]);
    return (l[Sd] = r), l;
  },
  Qx = function (r) {
    var i = r.cache,
      l = r.serialized,
      c = r.isStringTag;
    return (
      Gd(i, l, c),
      Hv(function () {
        return Id(i, l, c);
      }),
      null
    );
  },
  Zx = Yd(function (n, r, i) {
    var l = n.css;
    typeof l == "string" && r.registered[l] !== void 0 && (l = r.registered[l]);
    var c = n[Sd],
      f = [l],
      d = "";
    typeof n.className == "string"
      ? (d = Uv(r.registered, f, n.className))
      : n.className != null && (d = n.className + " ");
    var h = Bl(f, void 0, T.useContext(Rc));
    d += r.key + "-" + h.name;
    var m = {};
    for (var g in n) Wd.call(n, g) && g !== "css" && g !== Sd && (m[g] = n[g]);
    return (
      (m.className = d),
      i && (m.ref = i),
      T.createElement(
        T.Fragment,
        null,
        T.createElement(Qx, {
          cache: r,
          serialized: h,
          isStringTag: typeof c == "string",
        }),
        T.createElement(c, m)
      )
    );
  }),
  Jx = Zx,
  by = function (r, i) {
    var l = arguments;
    if (i == null || !Wd.call(i, "css"))
      return T.createElement.apply(void 0, l);
    var c = l.length,
      f = new Array(c);
    (f[0] = Jx), (f[1] = Kx(r, i));
    for (var d = 2; d < c; d++) f[d] = l[d];
    return T.createElement.apply(null, f);
  };
(function (n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(by || (by = {}));
var eS = Yd(function (n, r) {
  var i = n.styles,
    l = Bl([i], void 0, T.useContext(Rc)),
    c = T.useRef();
  return (
    vy(
      function () {
        var f = r.key + "-global",
          d = new r.sheet.constructor({
            key: f,
            nonce: r.sheet.nonce,
            container: r.sheet.container,
            speedy: r.sheet.isSpeedy,
          }),
          h = !1,
          m = document.querySelector(
            'style[data-emotion="' + f + " " + l.name + '"]'
          );
        return (
          r.sheet.tags.length && (d.before = r.sheet.tags[0]),
          m !== null &&
            ((h = !0), m.setAttribute("data-emotion", f), d.hydrate([m])),
          (c.current = [d, h]),
          function () {
            d.flush();
          }
        );
      },
      [r]
    ),
    vy(
      function () {
        var f = c.current,
          d = f[0],
          h = f[1];
        if (h) {
          f[1] = !1;
          return;
        }
        if ((l.next !== void 0 && Id(r, l.next, !0), d.tags.length)) {
          var m = d.tags[d.tags.length - 1].nextElementSibling;
          (d.before = m), d.flush();
        }
        r.insert("", l, d, !1);
      },
      [r, l.name]
    ),
    null
  );
});
function Vd() {
  for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  return Bl(r);
}
function jl() {
  var n = Vd.apply(void 0, arguments),
    r = "animation-" + n.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + n.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
}
var tS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  nS = Fv(function (n) {
    return (
      tS.test(n) ||
      (n.charCodeAt(0) === 111 &&
        n.charCodeAt(1) === 110 &&
        n.charCodeAt(2) < 91)
    );
  }),
  aS = nS,
  rS = function (r) {
    return r !== "theme";
  },
  xy = function (r) {
    return typeof r == "string" && r.charCodeAt(0) > 96 ? aS : rS;
  },
  Sy = function (r, i, l) {
    var c;
    if (i) {
      var f = i.shouldForwardProp;
      c =
        r.__emotion_forwardProp && f
          ? function (d) {
              return r.__emotion_forwardProp(d) && f(d);
            }
          : f;
    }
    return typeof c != "function" && l && (c = r.__emotion_forwardProp), c;
  },
  oS = function (r) {
    var i = r.cache,
      l = r.serialized,
      c = r.isStringTag;
    return (
      Gd(i, l, c),
      Hv(function () {
        return Id(i, l, c);
      }),
      null
    );
  },
  iS = function n(r, i) {
    var l = r.__emotion_real === r,
      c = (l && r.__emotion_base) || r,
      f,
      d;
    i !== void 0 && ((f = i.label), (d = i.target));
    var h = Sy(r, i, l),
      m = h || xy(c),
      g = !m("as");
    return function () {
      var b = arguments,
        x =
          l && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (f !== void 0 && x.push("label:" + f + ";"),
        b[0] == null || b[0].raw === void 0)
      )
        x.push.apply(x, b);
      else {
        var w = b[0];
        x.push(w[0]);
        for (var A = b.length, R = 1; R < A; R++) x.push(b[R], w[R]);
      }
      var C = Yd(function (z, D, k) {
        var O = (g && z.as) || c,
          M = "",
          E = [],
          $ = z;
        if (z.theme == null) {
          $ = {};
          for (var L in z) $[L] = z[L];
          $.theme = T.useContext(Rc);
        }
        typeof z.className == "string"
          ? (M = Uv(D.registered, E, z.className))
          : z.className != null && (M = z.className + " ");
        var W = Bl(x.concat(E), D.registered, $);
        (M += D.key + "-" + W.name), d !== void 0 && (M += " " + d);
        var q = g && h === void 0 ? xy(O) : m,
          v = {};
        for (var F in z) (g && F === "as") || (q(F) && (v[F] = z[F]));
        return (
          (v.className = M),
          k && (v.ref = k),
          T.createElement(
            T.Fragment,
            null,
            T.createElement(oS, {
              cache: D,
              serialized: W,
              isStringTag: typeof O == "string",
            }),
            T.createElement(O, v)
          )
        );
      });
      return (
        (C.displayName =
          f !== void 0
            ? f
            : "Styled(" +
              (typeof c == "string"
                ? c
                : c.displayName || c.name || "Component") +
              ")"),
        (C.defaultProps = r.defaultProps),
        (C.__emotion_real = C),
        (C.__emotion_base = c),
        (C.__emotion_styles = x),
        (C.__emotion_forwardProp = h),
        Object.defineProperty(C, "toString", {
          value: function () {
            return "." + d;
          },
        }),
        (C.withComponent = function (z, D) {
          var k = n(z, fc({}, i, D, { shouldForwardProp: Sy(C, D, !0) }));
          return k.apply(void 0, x);
        }),
        C
      );
    };
  },
  lS = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Cd = iS.bind(null);
lS.forEach(function (n) {
  Cd[n] = Cd(n);
});
function sS(n) {
  return n == null || Object.keys(n).length === 0;
}
function cS(n) {
  const { styles: r, defaultTheme: i = {} } = n,
    l = typeof r == "function" ? (c) => r(sS(c) ? i : c) : r;
  return p.jsx(eS, { styles: l });
}
/**
 * @mui/styled-engine v6.4.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function uS(n, r) {
  return Cd(n, r);
}
function fS(n, r) {
  Array.isArray(n.__emotion_styles) &&
    (n.__emotion_styles = r(n.__emotion_styles));
}
const Cy = [];
function Ty(n) {
  return (Cy[0] = n), Bl(Cy);
}
var od = { exports: {} },
  ut = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey;
function dS() {
  if (Ey) return ut;
  Ey = 1;
  var n = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.suspense_list"),
    b = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    w = Symbol.for("react.offscreen"),
    A = Symbol.for("react.client.reference");
  function R(C) {
    if (typeof C == "object" && C !== null) {
      var z = C.$$typeof;
      switch (z) {
        case n:
          switch (((C = C.type), C)) {
            case i:
            case c:
            case l:
            case m:
            case g:
              return C;
            default:
              switch (((C = C && C.$$typeof), C)) {
                case d:
                case h:
                case x:
                case b:
                  return C;
                case f:
                  return C;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  return (
    (ut.ContextConsumer = f),
    (ut.ContextProvider = d),
    (ut.Element = n),
    (ut.ForwardRef = h),
    (ut.Fragment = i),
    (ut.Lazy = x),
    (ut.Memo = b),
    (ut.Portal = r),
    (ut.Profiler = c),
    (ut.StrictMode = l),
    (ut.Suspense = m),
    (ut.SuspenseList = g),
    (ut.isContextConsumer = function (C) {
      return R(C) === f;
    }),
    (ut.isContextProvider = function (C) {
      return R(C) === d;
    }),
    (ut.isElement = function (C) {
      return typeof C == "object" && C !== null && C.$$typeof === n;
    }),
    (ut.isForwardRef = function (C) {
      return R(C) === h;
    }),
    (ut.isFragment = function (C) {
      return R(C) === i;
    }),
    (ut.isLazy = function (C) {
      return R(C) === x;
    }),
    (ut.isMemo = function (C) {
      return R(C) === b;
    }),
    (ut.isPortal = function (C) {
      return R(C) === r;
    }),
    (ut.isProfiler = function (C) {
      return R(C) === c;
    }),
    (ut.isStrictMode = function (C) {
      return R(C) === l;
    }),
    (ut.isSuspense = function (C) {
      return R(C) === m;
    }),
    (ut.isSuspenseList = function (C) {
      return R(C) === g;
    }),
    (ut.isValidElementType = function (C) {
      return (
        typeof C == "string" ||
        typeof C == "function" ||
        C === i ||
        C === c ||
        C === l ||
        C === m ||
        C === g ||
        C === w ||
        (typeof C == "object" &&
          C !== null &&
          (C.$$typeof === x ||
            C.$$typeof === b ||
            C.$$typeof === d ||
            C.$$typeof === f ||
            C.$$typeof === h ||
            C.$$typeof === A ||
            C.getModuleId !== void 0))
      );
    }),
    (ut.typeOf = R),
    ut
  );
}
var Ry;
function pS() {
  return Ry || ((Ry = 1), (od.exports = dS())), od.exports;
}
var qv = pS();
function da(n) {
  if (typeof n != "object" || n === null) return !1;
  const r = Object.getPrototypeOf(n);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function Gv(n) {
  if (T.isValidElement(n) || qv.isValidElementType(n) || !da(n)) return n;
  const r = {};
  return (
    Object.keys(n).forEach((i) => {
      r[i] = Gv(n[i]);
    }),
    r
  );
}
function nn(n, r, i = { clone: !0 }) {
  const l = i.clone ? { ...n } : n;
  return (
    da(n) &&
      da(r) &&
      Object.keys(r).forEach((c) => {
        T.isValidElement(r[c]) || qv.isValidElementType(r[c])
          ? (l[c] = r[c])
          : da(r[c]) && Object.prototype.hasOwnProperty.call(n, c) && da(n[c])
          ? (l[c] = nn(n[c], r[c], i))
          : i.clone
          ? (l[c] = da(r[c]) ? Gv(r[c]) : r[c])
          : (l[c] = r[c]);
      }),
    l
  );
}
const hS = (n) => {
  const r = Object.keys(n).map((i) => ({ key: i, val: n[i] })) || [];
  return (
    r.sort((i, l) => i.val - l.val),
    r.reduce((i, l) => ({ ...i, [l.key]: l.val }), {})
  );
};
function mS(n) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: i = "px",
      step: l = 5,
      ...c
    } = n,
    f = hS(r),
    d = Object.keys(f);
  function h(w) {
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${i})`;
  }
  function m(w) {
    return `@media (max-width:${
      (typeof r[w] == "number" ? r[w] : w) - l / 100
    }${i})`;
  }
  function g(w, A) {
    const R = d.indexOf(A);
    return `@media (min-width:${
      typeof r[w] == "number" ? r[w] : w
    }${i}) and (max-width:${
      (R !== -1 && typeof r[d[R]] == "number" ? r[d[R]] : A) - l / 100
    }${i})`;
  }
  function b(w) {
    return d.indexOf(w) + 1 < d.length ? g(w, d[d.indexOf(w) + 1]) : h(w);
  }
  function x(w) {
    const A = d.indexOf(w);
    return A === 0
      ? h(d[1])
      : A === d.length - 1
      ? m(d[A])
      : g(w, d[d.indexOf(w) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: h,
    down: m,
    between: g,
    only: b,
    not: x,
    unit: i,
    ...c,
  };
}
function gS(n, r) {
  if (!n.containerQueries) return r;
  const i = Object.keys(r)
    .filter((l) => l.startsWith("@container"))
    .sort((l, c) => {
      var d, h;
      const f = /min-width:\s*([0-9.]+)/;
      return (
        +(((d = l.match(f)) == null ? void 0 : d[1]) || 0) -
        +(((h = c.match(f)) == null ? void 0 : h[1]) || 0)
      );
    });
  return i.length
    ? i.reduce(
        (l, c) => {
          const f = r[c];
          return delete l[c], (l[c] = f), l;
        },
        { ...r }
      )
    : r;
}
function yS(n, r) {
  return (
    r === "@" ||
    (r.startsWith("@") &&
      (n.some((i) => r.startsWith(`@${i}`)) || !!r.match(/^@\d/)))
  );
}
function vS(n, r) {
  const i = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i) return null;
  const [, l, c] = i,
    f = Number.isNaN(+l) ? l || 0 : +l;
  return n.containerQueries(c).up(f);
}
function bS(n) {
  const r = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function i(f, d) {
    (f.up = (...h) => r(n.breakpoints.up(...h), d)),
      (f.down = (...h) => r(n.breakpoints.down(...h), d)),
      (f.between = (...h) => r(n.breakpoints.between(...h), d)),
      (f.only = (...h) => r(n.breakpoints.only(...h), d)),
      (f.not = (...h) => {
        const m = r(n.breakpoints.not(...h), d);
        return m.includes("not all and")
          ? m
              .replace("not all and ", "")
              .replace("min-width:", "width<")
              .replace("max-width:", "width>")
              .replace("and", "or")
          : m;
      });
  }
  const l = {},
    c = (f) => (i(l, f), l);
  return i(c), { ...n, containerQueries: c };
}
const xS = { borderRadius: 4 };
function hl(n, r) {
  return r ? nn(n, r, { clone: !1 }) : n;
}
const wc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  wy = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (n) => `@media (min-width:${wc[n]}px)`,
  },
  SS = {
    containerQueries: (n) => ({
      up: (r) => {
        let i = typeof r == "number" ? r : wc[r] || r;
        return (
          typeof i == "number" && (i = `${i}px`),
          n ? `@container ${n} (min-width:${i})` : `@container (min-width:${i})`
        );
      },
    }),
  };
function Yn(n, r, i) {
  const l = n.theme || {};
  if (Array.isArray(r)) {
    const f = l.breakpoints || wy;
    return r.reduce((d, h, m) => ((d[f.up(f.keys[m])] = i(r[m])), d), {});
  }
  if (typeof r == "object") {
    const f = l.breakpoints || wy;
    return Object.keys(r).reduce((d, h) => {
      if (yS(f.keys, h)) {
        const m = vS(l.containerQueries ? l : SS, h);
        m && (d[m] = i(r[h], h));
      } else if (Object.keys(f.values || wc).includes(h)) {
        const m = f.up(h);
        d[m] = i(r[h], h);
      } else {
        const m = h;
        d[m] = r[m];
      }
      return d;
    }, {});
  }
  return i(r);
}
function CS(n = {}) {
  var i;
  return (
    ((i = n.keys) == null
      ? void 0
      : i.reduce((l, c) => {
          const f = n.up(c);
          return (l[f] = {}), l;
        }, {})) || {}
  );
}
function TS(n, r) {
  return n.reduce((i, l) => {
    const c = i[l];
    return (!c || Object.keys(c).length === 0) && delete i[l], i;
  }, r);
}
function ES(n, r) {
  if (typeof n != "object") return {};
  const i = {},
    l = Object.keys(r);
  return (
    Array.isArray(n)
      ? l.forEach((c, f) => {
          f < n.length && (i[c] = !0);
        })
      : l.forEach((c) => {
          n[c] != null && (i[c] = !0);
        }),
    i
  );
}
function Ac({ values: n, breakpoints: r, base: i }) {
  const l = i || ES(n, r),
    c = Object.keys(l);
  if (c.length === 0) return n;
  let f;
  return c.reduce(
    (d, h, m) => (
      Array.isArray(n)
        ? ((d[h] = n[m] != null ? n[m] : n[f]), (f = m))
        : typeof n == "object"
        ? ((d[h] = n[h] != null ? n[h] : n[f]), (f = h))
        : (d[h] = n),
      d
    ),
    {}
  );
}
function Te(n) {
  if (typeof n != "string") throw new Error(_a(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Mc(n, r, i = !0) {
  if (!r || typeof r != "string") return null;
  if (n && n.vars && i) {
    const l = `vars.${r}`
      .split(".")
      .reduce((c, f) => (c && c[f] ? c[f] : null), n);
    if (l != null) return l;
  }
  return r.split(".").reduce((l, c) => (l && l[c] != null ? l[c] : null), n);
}
function pc(n, r, i, l = i) {
  let c;
  return (
    typeof n == "function"
      ? (c = n(i))
      : Array.isArray(n)
      ? (c = n[i] || l)
      : (c = Mc(n, i) || l),
    r && (c = r(c, l, n)),
    c
  );
}
function Ot(n) {
  const { prop: r, cssProperty: i = n.prop, themeKey: l, transform: c } = n,
    f = (d) => {
      if (d[r] == null) return null;
      const h = d[r],
        m = d.theme,
        g = Mc(m, l) || {};
      return Yn(d, h, (x) => {
        let w = pc(g, c, x);
        return (
          x === w &&
            typeof x == "string" &&
            (w = pc(g, c, `${r}${x === "default" ? "" : Te(x)}`, x)),
          i === !1 ? w : { [i]: w }
        );
      });
    };
  return (f.propTypes = {}), (f.filterProps = [r]), f;
}
function RS(n) {
  const r = {};
  return (i) => (r[i] === void 0 && (r[i] = n(i)), r[i]);
}
const wS = { m: "margin", p: "padding" },
  AS = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Ay = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  MS = RS((n) => {
    if (n.length > 2)
      if (Ay[n]) n = Ay[n];
      else return [n];
    const [r, i] = n.split(""),
      l = wS[r],
      c = AS[i] || "";
    return Array.isArray(c) ? c.map((f) => l + f) : [l + c];
  }),
  Xd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Kd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Xd, ...Kd];
function zl(n, r, i, l) {
  const c = Mc(n, r, !0) ?? i;
  return typeof c == "number" || typeof c == "string"
    ? (f) =>
        typeof f == "string"
          ? f
          : typeof c == "string"
          ? `calc(${f} * ${c})`
          : c * f
    : Array.isArray(c)
    ? (f) => {
        if (typeof f == "string") return f;
        const d = Math.abs(f),
          h = c[d];
        return f >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
      }
    : typeof c == "function"
    ? c
    : () => {};
}
function Qd(n) {
  return zl(n, "spacing", 8);
}
function Dl(n, r) {
  return typeof r == "string" || r == null ? r : n(r);
}
function OS(n, r) {
  return (i) => n.reduce((l, c) => ((l[c] = Dl(r, i)), l), {});
}
function BS(n, r, i, l) {
  if (!r.includes(i)) return null;
  const c = MS(i),
    f = OS(c, l),
    d = n[i];
  return Yn(n, d, f);
}
function Iv(n, r) {
  const i = Qd(n.theme);
  return Object.keys(n)
    .map((l) => BS(n, r, l, i))
    .reduce(hl, {});
}
function Et(n) {
  return Iv(n, Xd);
}
Et.propTypes = {};
Et.filterProps = Xd;
function Rt(n) {
  return Iv(n, Kd);
}
Rt.propTypes = {};
Rt.filterProps = Kd;
function Yv(n = 8, r = Qd({ spacing: n })) {
  if (n.mui) return n;
  const i = (...l) =>
    (l.length === 0 ? [1] : l)
      .map((f) => {
        const d = r(f);
        return typeof d == "number" ? `${d}px` : d;
      })
      .join(" ");
  return (i.mui = !0), i;
}
function Oc(...n) {
  const r = n.reduce(
      (l, c) => (
        c.filterProps.forEach((f) => {
          l[f] = c;
        }),
        l
      ),
      {}
    ),
    i = (l) => Object.keys(l).reduce((c, f) => (r[f] ? hl(c, r[f](l)) : c), {});
  return (
    (i.propTypes = {}),
    (i.filterProps = n.reduce((l, c) => l.concat(c.filterProps), [])),
    i
  );
}
function qn(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
function Xn(n, r) {
  return Ot({ prop: n, themeKey: "borders", transform: r });
}
const jS = Xn("border", qn),
  zS = Xn("borderTop", qn),
  DS = Xn("borderRight", qn),
  kS = Xn("borderBottom", qn),
  NS = Xn("borderLeft", qn),
  FS = Xn("borderColor"),
  $S = Xn("borderTopColor"),
  US = Xn("borderRightColor"),
  _S = Xn("borderBottomColor"),
  LS = Xn("borderLeftColor"),
  HS = Xn("outline", qn),
  PS = Xn("outlineColor"),
  Bc = (n) => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
      const r = zl(n.theme, "shape.borderRadius", 4),
        i = (l) => ({ borderRadius: Dl(r, l) });
      return Yn(n, n.borderRadius, i);
    }
    return null;
  };
Bc.propTypes = {};
Bc.filterProps = ["borderRadius"];
Oc(jS, zS, DS, kS, NS, FS, $S, US, _S, LS, Bc, HS, PS);
const jc = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const r = zl(n.theme, "spacing", 8),
      i = (l) => ({ gap: Dl(r, l) });
    return Yn(n, n.gap, i);
  }
  return null;
};
jc.propTypes = {};
jc.filterProps = ["gap"];
const zc = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const r = zl(n.theme, "spacing", 8),
      i = (l) => ({ columnGap: Dl(r, l) });
    return Yn(n, n.columnGap, i);
  }
  return null;
};
zc.propTypes = {};
zc.filterProps = ["columnGap"];
const Dc = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const r = zl(n.theme, "spacing", 8),
      i = (l) => ({ rowGap: Dl(r, l) });
    return Yn(n, n.rowGap, i);
  }
  return null;
};
Dc.propTypes = {};
Dc.filterProps = ["rowGap"];
const qS = Ot({ prop: "gridColumn" }),
  GS = Ot({ prop: "gridRow" }),
  IS = Ot({ prop: "gridAutoFlow" }),
  YS = Ot({ prop: "gridAutoColumns" }),
  WS = Ot({ prop: "gridAutoRows" }),
  VS = Ot({ prop: "gridTemplateColumns" }),
  XS = Ot({ prop: "gridTemplateRows" }),
  KS = Ot({ prop: "gridTemplateAreas" }),
  QS = Ot({ prop: "gridArea" });
Oc(jc, zc, Dc, qS, GS, IS, YS, WS, VS, XS, KS, QS);
function Go(n, r) {
  return r === "grey" ? r : n;
}
const ZS = Ot({ prop: "color", themeKey: "palette", transform: Go }),
  JS = Ot({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Go,
  }),
  e2 = Ot({ prop: "backgroundColor", themeKey: "palette", transform: Go });
Oc(ZS, JS, e2);
function wn(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const t2 = Ot({ prop: "width", transform: wn }),
  Zd = (n) => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
      const r = (i) => {
        var c, f, d, h, m;
        const l =
          ((d =
            (f = (c = n.theme) == null ? void 0 : c.breakpoints) == null
              ? void 0
              : f.values) == null
            ? void 0
            : d[i]) || wc[i];
        return l
          ? ((m = (h = n.theme) == null ? void 0 : h.breakpoints) == null
              ? void 0
              : m.unit) !== "px"
            ? { maxWidth: `${l}${n.theme.breakpoints.unit}` }
            : { maxWidth: l }
          : { maxWidth: wn(i) };
      };
      return Yn(n, n.maxWidth, r);
    }
    return null;
  };
Zd.filterProps = ["maxWidth"];
const n2 = Ot({ prop: "minWidth", transform: wn }),
  a2 = Ot({ prop: "height", transform: wn }),
  r2 = Ot({ prop: "maxHeight", transform: wn }),
  o2 = Ot({ prop: "minHeight", transform: wn });
Ot({ prop: "size", cssProperty: "width", transform: wn });
Ot({ prop: "size", cssProperty: "height", transform: wn });
const i2 = Ot({ prop: "boxSizing" });
Oc(t2, Zd, n2, a2, r2, o2, i2);
const kl = {
  border: { themeKey: "borders", transform: qn },
  borderTop: { themeKey: "borders", transform: qn },
  borderRight: { themeKey: "borders", transform: qn },
  borderBottom: { themeKey: "borders", transform: qn },
  borderLeft: { themeKey: "borders", transform: qn },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: qn },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: Bc },
  color: { themeKey: "palette", transform: Go },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Go,
  },
  backgroundColor: { themeKey: "palette", transform: Go },
  p: { style: Rt },
  pt: { style: Rt },
  pr: { style: Rt },
  pb: { style: Rt },
  pl: { style: Rt },
  px: { style: Rt },
  py: { style: Rt },
  padding: { style: Rt },
  paddingTop: { style: Rt },
  paddingRight: { style: Rt },
  paddingBottom: { style: Rt },
  paddingLeft: { style: Rt },
  paddingX: { style: Rt },
  paddingY: { style: Rt },
  paddingInline: { style: Rt },
  paddingInlineStart: { style: Rt },
  paddingInlineEnd: { style: Rt },
  paddingBlock: { style: Rt },
  paddingBlockStart: { style: Rt },
  paddingBlockEnd: { style: Rt },
  m: { style: Et },
  mt: { style: Et },
  mr: { style: Et },
  mb: { style: Et },
  ml: { style: Et },
  mx: { style: Et },
  my: { style: Et },
  margin: { style: Et },
  marginTop: { style: Et },
  marginRight: { style: Et },
  marginBottom: { style: Et },
  marginLeft: { style: Et },
  marginX: { style: Et },
  marginY: { style: Et },
  marginInline: { style: Et },
  marginInlineStart: { style: Et },
  marginInlineEnd: { style: Et },
  marginBlock: { style: Et },
  marginBlockStart: { style: Et },
  marginBlockEnd: { style: Et },
  displayPrint: {
    cssProperty: !1,
    transform: (n) => ({ "@media print": { display: n } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: jc },
  rowGap: { style: Dc },
  columnGap: { style: zc },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: wn },
  maxWidth: { style: Zd },
  minWidth: { transform: wn },
  height: { transform: wn },
  maxHeight: { transform: wn },
  minHeight: { transform: wn },
  boxSizing: {},
  font: { themeKey: "font" },
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function l2(...n) {
  const r = n.reduce((l, c) => l.concat(Object.keys(c)), []),
    i = new Set(r);
  return n.every((l) => i.size === Object.keys(l).length);
}
function s2(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function c2() {
  function n(i, l, c, f) {
    const d = { [i]: l, theme: c },
      h = f[i];
    if (!h) return { [i]: l };
    const { cssProperty: m = i, themeKey: g, transform: b, style: x } = h;
    if (l == null) return null;
    if (g === "typography" && l === "inherit") return { [i]: l };
    const w = Mc(c, g) || {};
    return x
      ? x(d)
      : Yn(d, l, (R) => {
          let C = pc(w, b, R);
          return (
            R === C &&
              typeof R == "string" &&
              (C = pc(w, b, `${i}${R === "default" ? "" : Te(R)}`, R)),
            m === !1 ? C : { [m]: C }
          );
        });
  }
  function r(i) {
    const { sx: l, theme: c = {} } = i || {};
    if (!l) return null;
    const f = c.unstable_sxConfig ?? kl;
    function d(h) {
      let m = h;
      if (typeof h == "function") m = h(c);
      else if (typeof h != "object") return h;
      if (!m) return null;
      const g = CS(c.breakpoints),
        b = Object.keys(g);
      let x = g;
      return (
        Object.keys(m).forEach((w) => {
          const A = s2(m[w], c);
          if (A != null)
            if (typeof A == "object")
              if (f[w]) x = hl(x, n(w, A, c, f));
              else {
                const R = Yn({ theme: c }, A, (C) => ({ [w]: C }));
                l2(R, A) ? (x[w] = r({ sx: A, theme: c })) : (x = hl(x, R));
              }
            else x = hl(x, n(w, A, c, f));
        }),
        gS(c, TS(b, x))
      );
    }
    return Array.isArray(l) ? l.map(d) : d(l);
  }
  return r;
}
const Yo = c2();
Yo.filterProps = ["sx"];
function u2(n, r) {
  var l;
  const i = this;
  if (i.vars) {
    if (
      !((l = i.colorSchemes) != null && l[n]) ||
      typeof i.getColorSchemeSelector != "function"
    )
      return {};
    let c = i.getColorSchemeSelector(n);
    return c === "&"
      ? r
      : ((c.includes("data-") || c.includes(".")) &&
          (c = `*:where(${c.replace(/\s*&$/, "")}) &`),
        { [c]: r });
  }
  return i.palette.mode === n ? r : {};
}
function Jd(n = {}, ...r) {
  const {
      breakpoints: i = {},
      palette: l = {},
      spacing: c,
      shape: f = {},
      ...d
    } = n,
    h = mS(i),
    m = Yv(c);
  let g = nn(
    {
      breakpoints: h,
      direction: "ltr",
      components: {},
      palette: { mode: "light", ...l },
      spacing: m,
      shape: { ...xS, ...f },
    },
    d
  );
  return (
    (g = bS(g)),
    (g.applyStyles = u2),
    (g = r.reduce((b, x) => nn(b, x), g)),
    (g.unstable_sxConfig = {
      ...kl,
      ...(d == null ? void 0 : d.unstable_sxConfig),
    }),
    (g.unstable_sx = function (x) {
      return Yo({ sx: x, theme: this });
    }),
    g
  );
}
function f2(n) {
  return Object.keys(n).length === 0;
}
function d2(n = null) {
  const r = T.useContext(Rc);
  return !r || f2(r) ? n : r;
}
const p2 = Jd();
function Wv(n = p2) {
  return d2(n);
}
function h2({ styles: n, themeId: r, defaultTheme: i = {} }) {
  const l = Wv(i),
    c = typeof n == "function" ? n((r && l[r]) || l) : n;
  return p.jsx(cS, { styles: c });
}
const m2 = (n) => {
  var l;
  const r = { systemProps: {}, otherProps: {} },
    i =
      ((l = n == null ? void 0 : n.theme) == null
        ? void 0
        : l.unstable_sxConfig) ?? kl;
  return (
    Object.keys(n).forEach((c) => {
      i[c] ? (r.systemProps[c] = n[c]) : (r.otherProps[c] = n[c]);
    }),
    r
  );
};
function Vv(n) {
  const { sx: r, ...i } = n,
    { systemProps: l, otherProps: c } = m2(i);
  let f;
  return (
    Array.isArray(r)
      ? (f = [l, ...r])
      : typeof r == "function"
      ? (f = (...d) => {
          const h = r(...d);
          return da(h) ? { ...l, ...h } : l;
        })
      : (f = { ...l, ...r }),
    { ...c, sx: f }
  );
}
const My = (n) => n,
  g2 = () => {
    let n = My;
    return {
      configure(r) {
        n = r;
      },
      generate(r) {
        return n(r);
      },
      reset() {
        n = My;
      },
    };
  },
  y2 = g2();
function Xv(n) {
  var r,
    i,
    l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var c = n.length;
      for (r = 0; r < c; r++)
        n[r] && (i = Xv(n[r])) && (l && (l += " "), (l += i));
    } else for (i in n) n[i] && (l && (l += " "), (l += i));
  return l;
}
function Ae() {
  for (var n, r, i = 0, l = "", c = arguments.length; i < c; i++)
    (n = arguments[i]) && (r = Xv(n)) && (l && (l += " "), (l += r));
  return l;
}
const v2 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function qe(n, r, i = "Mui") {
  const l = v2[r];
  return l ? `${i}-${l}` : `${y2.generate(n)}-${r}`;
}
function ke(n, r, i = "Mui") {
  const l = {};
  return (
    r.forEach((c) => {
      l[c] = qe(n, c, i);
    }),
    l
  );
}
function Kv(n) {
  const { variants: r, ...i } = n,
    l = { variants: r, style: Ty(i), isProcessed: !0 };
  return (
    l.style === i ||
      (r &&
        r.forEach((c) => {
          typeof c.style != "function" && (c.style = Ty(c.style));
        })),
    l
  );
}
const b2 = Jd();
function id(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as";
}
function x2(n) {
  return n ? (r, i) => i[n] : null;
}
function S2(n, r, i) {
  n.theme = E2(n.theme) ? i : n.theme[r] || n.theme;
}
function ic(n, r) {
  const i = typeof r == "function" ? r(n) : r;
  if (Array.isArray(i)) return i.flatMap((l) => ic(n, l));
  if (Array.isArray(i == null ? void 0 : i.variants)) {
    let l;
    if (i.isProcessed) l = i.style;
    else {
      const { variants: c, ...f } = i;
      l = f;
    }
    return Qv(n, i.variants, [l]);
  }
  return i != null && i.isProcessed ? i.style : i;
}
function Qv(n, r, i = []) {
  var c;
  let l;
  e: for (let f = 0; f < r.length; f += 1) {
    const d = r[f];
    if (typeof d.props == "function") {
      if (
        (l ?? (l = { ...n, ...n.ownerState, ownerState: n.ownerState }),
        !d.props(l))
      )
        continue;
    } else
      for (const h in d.props)
        if (
          n[h] !== d.props[h] &&
          ((c = n.ownerState) == null ? void 0 : c[h]) !== d.props[h]
        )
          continue e;
    typeof d.style == "function"
      ? (l ?? (l = { ...n, ...n.ownerState, ownerState: n.ownerState }),
        i.push(d.style(l)))
      : i.push(d.style);
  }
  return i;
}
function C2(n = {}) {
  const {
    themeId: r,
    defaultTheme: i = b2,
    rootShouldForwardProp: l = id,
    slotShouldForwardProp: c = id,
  } = n;
  function f(h) {
    S2(h, r, i);
  }
  return (h, m = {}) => {
    fS(h, (E) => E.filter(($) => $ !== Yo));
    const {
        name: g,
        slot: b,
        skipVariantsResolver: x,
        skipSx: w,
        overridesResolver: A = x2(w2(b)),
        ...R
      } = m,
      C = x !== void 0 ? x : (b && b !== "Root" && b !== "root") || !1,
      z = w || !1;
    let D = id;
    b === "Root" || b === "root"
      ? (D = l)
      : b
      ? (D = c)
      : R2(h) && (D = void 0);
    const k = uS(h, { shouldForwardProp: D, label: T2(), ...R }),
      O = (E) => {
        if (typeof E == "function" && E.__emotion_real !== E)
          return function (L) {
            return ic(L, E);
          };
        if (da(E)) {
          const $ = Kv(E);
          return $.variants
            ? function (W) {
                return ic(W, $);
              }
            : $.style;
        }
        return E;
      },
      M = (...E) => {
        const $ = [],
          L = E.map(O),
          W = [];
        if (
          ($.push(f),
          g &&
            A &&
            W.push(function (V) {
              var N, J;
              const oe =
                (J = (N = V.theme.components) == null ? void 0 : N[g]) == null
                  ? void 0
                  : J.styleOverrides;
              if (!oe) return null;
              const P = {};
              for (const se in oe) P[se] = ic(V, oe[se]);
              return A(V, P);
            }),
          g &&
            !C &&
            W.push(function (V) {
              var P, N;
              const I = V.theme,
                oe =
                  (N =
                    (P = I == null ? void 0 : I.components) == null
                      ? void 0
                      : P[g]) == null
                    ? void 0
                    : N.variants;
              return oe ? Qv(V, oe) : null;
            }),
          z || W.push(Yo),
          Array.isArray(L[0]))
        ) {
          const F = L.shift(),
            V = new Array($.length).fill(""),
            I = new Array(W.length).fill("");
          let oe;
          (oe = [...V, ...F, ...I]),
            (oe.raw = [...V, ...F.raw, ...I]),
            $.unshift(oe);
        }
        const q = [...$, ...L, ...W],
          v = k(...q);
        return h.muiName && (v.muiName = h.muiName), v;
      };
    return k.withConfig && (M.withConfig = k.withConfig), M;
  };
}
function T2(n, r) {
  return void 0;
}
function E2(n) {
  for (const r in n) return !1;
  return !0;
}
function R2(n) {
  return typeof n == "string" && n.charCodeAt(0) > 96;
}
function w2(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1);
}
function hc(n, r) {
  const i = { ...r };
  for (const l in n)
    if (Object.prototype.hasOwnProperty.call(n, l)) {
      const c = l;
      if (c === "components" || c === "slots") i[c] = { ...n[c], ...i[c] };
      else if (c === "componentsProps" || c === "slotProps") {
        const f = n[c],
          d = r[c];
        if (!d) i[c] = f || {};
        else if (!f) i[c] = d;
        else {
          i[c] = { ...d };
          for (const h in f)
            if (Object.prototype.hasOwnProperty.call(f, h)) {
              const m = h;
              i[c][m] = hc(f[m], d[m]);
            }
        }
      } else i[c] === void 0 && (i[c] = n[c]);
    }
  return i;
}
const ga = typeof window < "u" ? T.useLayoutEffect : T.useEffect;
function A2(n, r = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n, i));
}
function ep(n, r = 0, i = 1) {
  return A2(n, r, i);
}
function M2(n) {
  n = n.slice(1);
  const r = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let i = n.match(r);
  return (
    i && i[0].length === 1 && (i = i.map((l) => l + l)),
    i
      ? `rgb${i.length === 4 ? "a" : ""}(${i
          .map((l, c) =>
            c < 3
              ? parseInt(l, 16)
              : Math.round((parseInt(l, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function dr(n) {
  if (n.type) return n;
  if (n.charAt(0) === "#") return dr(M2(n));
  const r = n.indexOf("("),
    i = n.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(_a(9, n));
  let l = n.substring(r + 1, n.length - 1),
    c;
  if (i === "color") {
    if (
      ((l = l.split(" ")),
      (c = l.shift()),
      l.length === 4 && l[3].charAt(0) === "/" && (l[3] = l[3].slice(1)),
      !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
        c
      ))
    )
      throw new Error(_a(10, c));
  } else l = l.split(",");
  return (
    (l = l.map((f) => parseFloat(f))), { type: i, values: l, colorSpace: c }
  );
}
const O2 = (n) => {
    const r = dr(n);
    return r.values
      .slice(0, 3)
      .map((i, l) => (r.type.includes("hsl") && l !== 0 ? `${i}%` : i))
      .join(" ");
  },
  fl = (n, r) => {
    try {
      return O2(n);
    } catch {
      return n;
    }
  };
function kc(n) {
  const { type: r, colorSpace: i } = n;
  let { values: l } = n;
  return (
    r.includes("rgb")
      ? (l = l.map((c, f) => (f < 3 ? parseInt(c, 10) : c)))
      : r.includes("hsl") && ((l[1] = `${l[1]}%`), (l[2] = `${l[2]}%`)),
    r.includes("color") ? (l = `${i} ${l.join(" ")}`) : (l = `${l.join(", ")}`),
    `${r}(${l})`
  );
}
function Zv(n) {
  n = dr(n);
  const { values: r } = n,
    i = r[0],
    l = r[1] / 100,
    c = r[2] / 100,
    f = l * Math.min(c, 1 - c),
    d = (g, b = (g + i / 30) % 12) =>
      c - f * Math.max(Math.min(b - 3, 9 - b, 1), -1);
  let h = "rgb";
  const m = [
    Math.round(d(0) * 255),
    Math.round(d(8) * 255),
    Math.round(d(4) * 255),
  ];
  return (
    n.type === "hsla" && ((h += "a"), m.push(r[3])), kc({ type: h, values: m })
  );
}
function Td(n) {
  n = dr(n);
  let r = n.type === "hsl" || n.type === "hsla" ? dr(Zv(n)).values : n.values;
  return (
    (r = r.map(
      (i) => (
        n.type !== "color" && (i /= 255),
        i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function B2(n, r) {
  const i = Td(n),
    l = Td(r);
  return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
}
function tn(n, r) {
  return (
    (n = dr(n)),
    (r = ep(r)),
    (n.type === "rgb" || n.type === "hsl") && (n.type += "a"),
    n.type === "color" ? (n.values[3] = `/${r}`) : (n.values[3] = r),
    kc(n)
  );
}
function Xs(n, r, i) {
  try {
    return tn(n, r);
  } catch {
    return n;
  }
}
function Tl(n, r) {
  if (((n = dr(n)), (r = ep(r)), n.type.includes("hsl"))) n.values[2] *= 1 - r;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let i = 0; i < 3; i += 1) n.values[i] *= 1 - r;
  return kc(n);
}
function ht(n, r, i) {
  try {
    return Tl(n, r);
  } catch {
    return n;
  }
}
function El(n, r) {
  if (((n = dr(n)), (r = ep(r)), n.type.includes("hsl")))
    n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1) n.values[i] += (255 - n.values[i]) * r;
  else if (n.type.includes("color"))
    for (let i = 0; i < 3; i += 1) n.values[i] += (1 - n.values[i]) * r;
  return kc(n);
}
function mt(n, r, i) {
  try {
    return El(n, r);
  } catch {
    return n;
  }
}
function j2(n, r = 0.15) {
  return Td(n) > 0.5 ? Tl(n, r) : El(n, r);
}
function Ks(n, r, i) {
  try {
    return j2(n, r);
  } catch {
    return n;
  }
}
function Oy(...n) {
  return n.reduce(
    (r, i) =>
      i == null
        ? r
        : function (...c) {
            r.apply(this, c), i.apply(this, c);
          },
    () => {}
  );
}
function Jv(n, r = 166) {
  let i;
  function l(...c) {
    const f = () => {
      n.apply(this, c);
    };
    clearTimeout(i), (i = setTimeout(f, r));
  }
  return (
    (l.clear = () => {
      clearTimeout(i);
    }),
    l
  );
}
function lc(n, r) {
  var i, l, c;
  return (
    T.isValidElement(n) &&
    r.indexOf(
      n.type.muiName ??
        ((c =
          (l = (i = n.type) == null ? void 0 : i._payload) == null
            ? void 0
            : l.value) == null
          ? void 0
          : c.muiName)
    ) !== -1
  );
}
function Mn(n) {
  return (n && n.ownerDocument) || document;
}
function La(n) {
  return Mn(n).defaultView || window;
}
function Ed(n, r) {
  typeof n == "function" ? n(r) : n && (n.current = r);
}
let By = 0;
function z2(n) {
  const [r, i] = T.useState(n),
    l = n || r;
  return (
    T.useEffect(() => {
      r == null && ((By += 1), i(`mui-${By}`));
    }, [r]),
    l
  );
}
const D2 = { ...vd },
  jy = D2.useId;
function Jo(n) {
  if (jy !== void 0) {
    const r = jy();
    return n ?? r;
  }
  return z2(n);
}
function Rd({ controlled: n, default: r, name: i, state: l = "value" }) {
  const { current: c } = T.useRef(n !== void 0),
    [f, d] = T.useState(r),
    h = c ? n : f,
    m = T.useCallback((g) => {
      c || d(g);
    }, []);
  return [h, m];
}
function fr(n) {
  const r = T.useRef(n);
  return (
    ga(() => {
      r.current = n;
    }),
    T.useRef((...i) => (0, r.current)(...i)).current
  );
}
function Ut(...n) {
  return T.useMemo(
    () =>
      n.every((r) => r == null)
        ? null
        : (r) => {
            n.forEach((i) => {
              Ed(i, r);
            });
          },
    n
  );
}
const zy = {};
function e0(n, r) {
  const i = T.useRef(zy);
  return i.current === zy && (i.current = n(r)), i;
}
const k2 = [];
function N2(n) {
  T.useEffect(n, k2);
}
class Nc {
  constructor() {
    Zi(this, "currentId", null);
    Zi(this, "clear", () => {
      this.currentId !== null &&
        (clearTimeout(this.currentId), (this.currentId = null));
    });
    Zi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Nc();
  }
  start(r, i) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), i();
      }, r));
  }
}
function Ho() {
  const n = e0(Nc.create).current;
  return N2(n.disposeEffect), n;
}
function mc(n) {
  try {
    return n.matches(":focus-visible");
  } catch {}
  return !1;
}
function t0(n = window) {
  const r = n.document.documentElement.clientWidth;
  return n.innerWidth - r;
}
function Ge(n, r, i = void 0) {
  const l = {};
  for (const c in n) {
    const f = n[c];
    let d = "",
      h = !0;
    for (let m = 0; m < f.length; m += 1) {
      const g = f[m];
      g &&
        ((d += (h === !0 ? "" : " ") + r(g)),
        (h = !1),
        i && i[g] && (d += " " + i[g]));
    }
    l[c] = d;
  }
  return l;
}
function F2(n) {
  return typeof n == "string";
}
function n0(n, r, i) {
  return n === void 0 || F2(n)
    ? r
    : { ...r, ownerState: { ...r.ownerState, ...i } };
}
function a0(n, r = []) {
  if (n === void 0) return {};
  const i = {};
  return (
    Object.keys(n)
      .filter(
        (l) =>
          l.match(/^on[A-Z]/) && typeof n[l] == "function" && !r.includes(l)
      )
      .forEach((l) => {
        i[l] = n[l];
      }),
    i
  );
}
function Dy(n) {
  if (n === void 0) return {};
  const r = {};
  return (
    Object.keys(n)
      .filter((i) => !(i.match(/^on[A-Z]/) && typeof n[i] == "function"))
      .forEach((i) => {
        r[i] = n[i];
      }),
    r
  );
}
function r0(n) {
  const {
    getSlotProps: r,
    additionalProps: i,
    externalSlotProps: l,
    externalForwardedProps: c,
    className: f,
  } = n;
  if (!r) {
    const A = Ae(
        i == null ? void 0 : i.className,
        f,
        c == null ? void 0 : c.className,
        l == null ? void 0 : l.className
      ),
      R = {
        ...(i == null ? void 0 : i.style),
        ...(c == null ? void 0 : c.style),
        ...(l == null ? void 0 : l.style),
      },
      C = { ...i, ...c, ...l };
    return (
      A.length > 0 && (C.className = A),
      Object.keys(R).length > 0 && (C.style = R),
      { props: C, internalRef: void 0 }
    );
  }
  const d = a0({ ...c, ...l }),
    h = Dy(l),
    m = Dy(c),
    g = r(d),
    b = Ae(
      g == null ? void 0 : g.className,
      i == null ? void 0 : i.className,
      f,
      c == null ? void 0 : c.className,
      l == null ? void 0 : l.className
    ),
    x = {
      ...(g == null ? void 0 : g.style),
      ...(i == null ? void 0 : i.style),
      ...(c == null ? void 0 : c.style),
      ...(l == null ? void 0 : l.style),
    },
    w = { ...g, ...i, ...m, ...h };
  return (
    b.length > 0 && (w.className = b),
    Object.keys(x).length > 0 && (w.style = x),
    { props: w, internalRef: g.ref }
  );
}
function o0(n, r, i) {
  return typeof n == "function" ? n(r, i) : n;
}
function i0(n) {
  var x;
  const {
      elementType: r,
      externalSlotProps: i,
      ownerState: l,
      skipResolvingSlotProps: c = !1,
      ...f
    } = n,
    d = c ? {} : o0(i, l),
    { props: h, internalRef: m } = r0({ ...f, externalSlotProps: d }),
    g = Ut(
      m,
      d == null ? void 0 : d.ref,
      (x = n.additionalProps) == null ? void 0 : x.ref
    );
  return n0(r, { ...h, ref: g }, l);
}
function ei(n) {
  var r;
  return parseInt(T.version, 10) >= 19
    ? ((r = n == null ? void 0 : n.props) == null ? void 0 : r.ref) || null
    : (n == null ? void 0 : n.ref) || null;
}
const $2 = T.createContext(),
  tp = () => T.useContext($2) ?? !1,
  U2 = T.createContext(void 0);
function _2(n) {
  const { theme: r, name: i, props: l } = n;
  if (!r || !r.components || !r.components[i]) return l;
  const c = r.components[i];
  return c.defaultProps
    ? hc(c.defaultProps, l)
    : !c.styleOverrides && !c.variants
    ? hc(c, l)
    : l;
}
function L2({ props: n, name: r }) {
  const i = T.useContext(U2);
  return _2({ props: n, name: r, theme: { components: i } });
}
const ky = { theme: void 0 };
function H2(n) {
  let r, i;
  return function (c) {
    let f = r;
    return (
      (f === void 0 || c.theme !== i) &&
        ((ky.theme = c.theme), (f = Kv(n(ky))), (r = f), (i = c.theme)),
      f
    );
  };
}
function P2(n = "") {
  function r(...l) {
    if (!l.length) return "";
    const c = l[0];
    return typeof c == "string" &&
      !c.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${n ? `${n}-` : ""}${c}${r(...l.slice(1))})`
      : `, ${c}`;
  }
  return (l, ...c) => `var(--${n ? `${n}-` : ""}${l}${r(...c)})`;
}
const Ny = (n, r, i, l = []) => {
    let c = n;
    r.forEach((f, d) => {
      d === r.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = i)
          : c && typeof c == "object" && (c[f] = i)
        : c &&
          typeof c == "object" &&
          (c[f] || (c[f] = l.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  q2 = (n, r, i) => {
    function l(c, f = [], d = []) {
      Object.entries(c).forEach(([h, m]) => {
        (!i || (i && !i([...f, h]))) &&
          m != null &&
          (typeof m == "object" && Object.keys(m).length > 0
            ? l(m, [...f, h], Array.isArray(m) ? [...d, h] : d)
            : r([...f, h], m, d));
      });
    }
    l(n);
  },
  G2 = (n, r) =>
    typeof r == "number"
      ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((l) =>
          n.includes(l)
        ) || n[n.length - 1].toLowerCase().includes("opacity")
        ? r
        : `${r}px`
      : r;
function ld(n, r) {
  const { prefix: i, shouldSkipGeneratingVar: l } = r || {},
    c = {},
    f = {},
    d = {};
  return (
    q2(
      n,
      (h, m, g) => {
        if (
          (typeof m == "string" || typeof m == "number") &&
          (!l || !l(h, m))
        ) {
          const b = `--${i ? `${i}-` : ""}${h.join("-")}`,
            x = G2(h, m);
          Object.assign(c, { [b]: x }),
            Ny(f, h, `var(${b})`, g),
            Ny(d, h, `var(${b}, ${x})`, g);
        }
      },
      (h) => h[0] === "vars"
    ),
    { css: c, vars: f, varsWithDefaults: d }
  );
}
function I2(n, r = {}) {
  const {
      getSelector: i = z,
      disableCssColorScheme: l,
      colorSchemeSelector: c,
    } = r,
    {
      colorSchemes: f = {},
      components: d,
      defaultColorScheme: h = "light",
      ...m
    } = n,
    { vars: g, css: b, varsWithDefaults: x } = ld(m, r);
  let w = x;
  const A = {},
    { [h]: R, ...C } = f;
  if (
    (Object.entries(C || {}).forEach(([O, M]) => {
      const { vars: E, css: $, varsWithDefaults: L } = ld(M, r);
      (w = nn(w, L)), (A[O] = { css: $, vars: E });
    }),
    R)
  ) {
    const { css: O, vars: M, varsWithDefaults: E } = ld(R, r);
    (w = nn(w, E)), (A[h] = { css: O, vars: M });
  }
  function z(O, M) {
    var $, L;
    let E = c;
    if (
      (c === "class" && (E = ".%s"),
      c === "data" && (E = "[data-%s]"),
      c != null &&
        c.startsWith("data-") &&
        !c.includes("%s") &&
        (E = `[${c}="%s"]`),
      O)
    ) {
      if (E === "media")
        return n.defaultColorScheme === O
          ? ":root"
          : {
              [`@media (prefers-color-scheme: ${
                ((L = ($ = f[O]) == null ? void 0 : $.palette) == null
                  ? void 0
                  : L.mode) || O
              })`]: { ":root": M },
            };
      if (E)
        return n.defaultColorScheme === O
          ? `:root, ${E.replace("%s", String(O))}`
          : E.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: w,
    generateThemeVars: () => {
      let O = { ...g };
      return (
        Object.entries(A).forEach(([, { vars: M }]) => {
          O = nn(O, M);
        }),
        O
      );
    },
    generateStyleSheets: () => {
      var W, q;
      const O = [],
        M = n.defaultColorScheme || "light";
      function E(v, F) {
        Object.keys(F).length &&
          O.push(typeof v == "string" ? { [v]: { ...F } } : v);
      }
      E(i(void 0, { ...b }), b);
      const { [M]: $, ...L } = A;
      if ($) {
        const { css: v } = $,
          F =
            (q = (W = f[M]) == null ? void 0 : W.palette) == null
              ? void 0
              : q.mode,
          V = !l && F ? { colorScheme: F, ...v } : { ...v };
        E(i(M, { ...V }), V);
      }
      return (
        Object.entries(L).forEach(([v, { css: F }]) => {
          var oe, P;
          const V =
              (P = (oe = f[v]) == null ? void 0 : oe.palette) == null
                ? void 0
                : P.mode,
            I = !l && V ? { colorScheme: V, ...F } : { ...F };
          E(i(v, { ...I }), I);
        }),
        O
      );
    },
  };
}
function Y2(n) {
  return function (i) {
    return n === "media"
      ? `@media (prefers-color-scheme: ${i})`
      : n
      ? n.startsWith("data-") && !n.includes("%s")
        ? `[${n}="${i}"] &`
        : n === "class"
        ? `.${i} &`
        : n === "data"
        ? `[data-${i}] &`
        : `${n.replace("%s", i)} &`
      : "&";
  };
}
function l0() {
  return {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: bl.white, default: bl.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const W2 = l0();
function s0() {
  return {
    text: {
      primary: bl.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: bl.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Fy = s0();
function $y(n, r, i, l) {
  const c = l.light || l,
    f = l.dark || l * 1.5;
  n[r] ||
    (n.hasOwnProperty(i)
      ? (n[r] = n[i])
      : r === "light"
      ? (n.light = El(n.main, c))
      : r === "dark" && (n.dark = Tl(n.main, f)));
}
function V2(n = "light") {
  return n === "dark"
    ? { main: No[200], light: No[50], dark: No[400] }
    : { main: No[700], light: No[400], dark: No[800] };
}
function X2(n = "light") {
  return n === "dark"
    ? { main: ko[200], light: ko[50], dark: ko[400] }
    : { main: ko[500], light: ko[300], dark: ko[700] };
}
function K2(n = "light") {
  return n === "dark"
    ? { main: Do[500], light: Do[300], dark: Do[700] }
    : { main: Do[700], light: Do[400], dark: Do[800] };
}
function Q2(n = "light") {
  return n === "dark"
    ? { main: Fo[400], light: Fo[300], dark: Fo[700] }
    : { main: Fo[700], light: Fo[500], dark: Fo[900] };
}
function Z2(n = "light") {
  return n === "dark"
    ? { main: $o[400], light: $o[300], dark: $o[700] }
    : { main: $o[800], light: $o[500], dark: $o[900] };
}
function J2(n = "light") {
  return n === "dark"
    ? { main: tl[400], light: tl[300], dark: tl[700] }
    : { main: "#ed6c02", light: tl[500], dark: tl[900] };
}
function np(n) {
  const {
      mode: r = "light",
      contrastThreshold: i = 3,
      tonalOffset: l = 0.2,
      ...c
    } = n,
    f = n.primary || V2(r),
    d = n.secondary || X2(r),
    h = n.error || K2(r),
    m = n.info || Q2(r),
    g = n.success || Z2(r),
    b = n.warning || J2(r);
  function x(C) {
    return B2(C, Fy.text.primary) >= i ? Fy.text.primary : W2.text.primary;
  }
  const w = ({
    color: C,
    name: z,
    mainShade: D = 500,
    lightShade: k = 300,
    darkShade: O = 700,
  }) => {
    if (
      ((C = { ...C }),
      !C.main && C[D] && (C.main = C[D]),
      !C.hasOwnProperty("main"))
    )
      throw new Error(_a(11, z ? ` (${z})` : "", D));
    if (typeof C.main != "string")
      throw new Error(_a(12, z ? ` (${z})` : "", JSON.stringify(C.main)));
    return (
      $y(C, "light", k, l),
      $y(C, "dark", O, l),
      C.contrastText || (C.contrastText = x(C.main)),
      C
    );
  };
  let A;
  return (
    r === "light" ? (A = l0()) : r === "dark" && (A = s0()),
    nn(
      {
        common: { ...bl },
        mode: r,
        primary: w({ color: f, name: "primary" }),
        secondary: w({
          color: d,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: w({ color: h, name: "error" }),
        warning: w({ color: b, name: "warning" }),
        info: w({ color: m, name: "info" }),
        success: w({ color: g, name: "success" }),
        grey: ux,
        contrastThreshold: i,
        getContrastText: x,
        augmentColor: w,
        tonalOffset: l,
        ...A,
      },
      c
    )
  );
}
function eC(n) {
  const r = {};
  return (
    Object.entries(n).forEach((l) => {
      const [c, f] = l;
      typeof f == "object" &&
        (r[c] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${
          f.fontVariant ? `${f.fontVariant} ` : ""
        }${f.fontWeight ? `${f.fontWeight} ` : ""}${
          f.fontStretch ? `${f.fontStretch} ` : ""
        }${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${
          f.fontFamily || ""
        }`);
    }),
    r
  );
}
function tC(n, r) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
      [n.up("sm")]: { minHeight: 64 },
    },
    ...r,
  };
}
function nC(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Uy = { textTransform: "uppercase" },
  _y = '"Roboto", "Helvetica", "Arial", sans-serif';
function aC(n, r) {
  const {
      fontFamily: i = _y,
      fontSize: l = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: d = 500,
      fontWeightBold: h = 700,
      htmlFontSize: m = 16,
      allVariants: g,
      pxToRem: b,
      ...x
    } = typeof r == "function" ? r(n) : r,
    w = l / 14,
    A = b || ((z) => `${(z / m) * w}rem`),
    R = (z, D, k, O, M) => ({
      fontFamily: i,
      fontWeight: z,
      fontSize: A(D),
      lineHeight: k,
      ...(i === _y ? { letterSpacing: `${nC(O / D)}em` } : {}),
      ...M,
      ...g,
    }),
    C = {
      h1: R(c, 96, 1.167, -1.5),
      h2: R(c, 60, 1.2, -0.5),
      h3: R(f, 48, 1.167, 0),
      h4: R(f, 34, 1.235, 0.25),
      h5: R(f, 24, 1.334, 0),
      h6: R(d, 20, 1.6, 0.15),
      subtitle1: R(f, 16, 1.75, 0.15),
      subtitle2: R(d, 14, 1.57, 0.1),
      body1: R(f, 16, 1.5, 0.15),
      body2: R(f, 14, 1.43, 0.15),
      button: R(d, 14, 1.75, 0.4, Uy),
      caption: R(f, 12, 1.66, 0.4),
      overline: R(f, 12, 2.66, 1, Uy),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return nn(
    {
      htmlFontSize: m,
      pxToRem: A,
      fontFamily: i,
      fontSize: l,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: d,
      fontWeightBold: h,
      ...C,
    },
    x,
    { clone: !1 }
  );
}
const rC = 0.2,
  oC = 0.14,
  iC = 0.12;
function vt(...n) {
  return [
    `${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${rC})`,
    `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${oC})`,
    `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${iC})`,
  ].join(",");
}
const lC = [
    "none",
    vt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    vt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    vt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    vt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    vt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    vt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    vt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    vt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    vt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    vt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    vt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    vt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    vt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    vt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    vt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    vt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    vt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    vt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    vt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    vt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    vt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    vt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    vt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    vt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  sC = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  cC = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ly(n) {
  return `${Math.round(n)}ms`;
}
function uC(n) {
  if (!n) return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function fC(n) {
  const r = { ...sC, ...n.easing },
    i = { ...cC, ...n.duration };
  return {
    getAutoHeightDuration: uC,
    create: (c = ["all"], f = {}) => {
      const {
        duration: d = i.standard,
        easing: h = r.easeInOut,
        delay: m = 0,
        ...g
      } = f;
      return (Array.isArray(c) ? c : [c])
        .map(
          (b) =>
            `${b} ${typeof d == "string" ? d : Ly(d)} ${h} ${
              typeof m == "string" ? m : Ly(m)
            }`
        )
        .join(",");
    },
    ...n,
    easing: r,
    duration: i,
  };
}
const dC = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function pC(n) {
  return (
    da(n) ||
    typeof n > "u" ||
    typeof n == "string" ||
    typeof n == "boolean" ||
    typeof n == "number" ||
    Array.isArray(n)
  );
}
function c0(n = {}) {
  const r = { ...n };
  function i(l) {
    const c = Object.entries(l);
    for (let f = 0; f < c.length; f++) {
      const [d, h] = c[f];
      !pC(h) || d.startsWith("unstable_")
        ? delete l[d]
        : da(h) && ((l[d] = { ...h }), i(l[d]));
    }
  }
  return (
    i(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function wd(n = {}, ...r) {
  const {
    breakpoints: i,
    mixins: l = {},
    spacing: c,
    palette: f = {},
    transitions: d = {},
    typography: h = {},
    shape: m,
    ...g
  } = n;
  if (n.vars && n.generateThemeVars === void 0) throw new Error(_a(20));
  const b = np(f),
    x = Jd(n);
  let w = nn(x, {
    mixins: tC(x.breakpoints, l),
    palette: b,
    shadows: lC.slice(),
    typography: aC(b, h),
    transitions: fC(d),
    zIndex: { ...dC },
  });
  return (
    (w = nn(w, g)),
    (w = r.reduce((A, R) => nn(A, R), w)),
    (w.unstable_sxConfig = {
      ...kl,
      ...(g == null ? void 0 : g.unstable_sxConfig),
    }),
    (w.unstable_sx = function (R) {
      return Yo({ sx: R, theme: this });
    }),
    (w.toRuntimeSource = c0),
    w
  );
}
function Ad(n) {
  let r;
  return (
    n < 1 ? (r = 5.11916 * n ** 2) : (r = 4.5 * Math.log(n + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const hC = [...Array(25)].map((n, r) => {
  if (r === 0) return "none";
  const i = Ad(r);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function u0(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38,
  };
}
function f0(n) {
  return n === "dark" ? hC : [];
}
function mC(n) {
  const { palette: r = { mode: "light" }, opacity: i, overlays: l, ...c } = n,
    f = np(r);
  return {
    palette: f,
    opacity: { ...u0(f.mode), ...i },
    overlays: l || f0(f.mode),
    ...c,
  };
}
function gC(n) {
  var r;
  return (
    !!n[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!n[0].match(/sxConfig$/) ||
    (n[0] === "palette" &&
      !!((r = n[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const yC = (n) => [
    ...[...Array(25)].map((r, i) => `--${n ? `${n}-` : ""}overlays-${i}`),
    `--${n ? `${n}-` : ""}palette-AppBar-darkBg`,
    `--${n ? `${n}-` : ""}palette-AppBar-darkColor`,
  ],
  vC = (n) => (r, i) => {
    const l = n.rootSelector || ":root",
      c = n.colorSchemeSelector;
    let f = c;
    if (
      (c === "class" && (f = ".%s"),
      c === "data" && (f = "[data-%s]"),
      c != null &&
        c.startsWith("data-") &&
        !c.includes("%s") &&
        (f = `[${c}="%s"]`),
      n.defaultColorScheme === r)
    ) {
      if (r === "dark") {
        const d = {};
        return (
          yC(n.cssVarPrefix).forEach((h) => {
            (d[h] = i[h]), delete i[h];
          }),
          f === "media"
            ? { [l]: i, "@media (prefers-color-scheme: dark)": { [l]: d } }
            : f
            ? { [f.replace("%s", r)]: d, [`${l}, ${f.replace("%s", r)}`]: i }
            : { [l]: { ...i, ...d } }
        );
      }
      if (f && f !== "media") return `${l}, ${f.replace("%s", String(r))}`;
    } else if (r) {
      if (f === "media")
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [l]: i } };
      if (f) return f.replace("%s", String(r));
    }
    return l;
  };
function bC(n, r) {
  r.forEach((i) => {
    n[i] || (n[i] = {});
  });
}
function ee(n, r, i) {
  !n[r] && i && (n[r] = i);
}
function dl(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : Zv(n);
}
function $a(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = fl(dl(n[r])));
}
function xC(n) {
  return typeof n == "number"
    ? `${n}px`
    : typeof n == "string" || typeof n == "function" || Array.isArray(n)
    ? n
    : "8px";
}
const la = (n) => {
    try {
      return n();
    } catch {}
  },
  SC = (n = "mui") => P2(n);
function sd(n, r, i, l) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const c = l === "dark" ? "dark" : "light";
  if (!i) {
    n[l] = mC({
      ...r,
      palette: { mode: c, ...(r == null ? void 0 : r.palette) },
    });
    return;
  }
  const { palette: f, ...d } = wd({
    ...i,
    palette: { mode: c, ...(r == null ? void 0 : r.palette) },
  });
  return (
    (n[l] = {
      ...r,
      palette: f,
      opacity: { ...u0(c), ...(r == null ? void 0 : r.opacity) },
      overlays: (r == null ? void 0 : r.overlays) || f0(c),
    }),
    d
  );
}
function CC(n = {}, ...r) {
  const {
      colorSchemes: i = { light: !0 },
      defaultColorScheme: l,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = "mui",
      shouldSkipGeneratingVar: d = gC,
      colorSchemeSelector: h = i.light && i.dark ? "media" : void 0,
      rootSelector: m = ":root",
      ...g
    } = n,
    b = Object.keys(i)[0],
    x = l || (i.light && b !== "light" ? "light" : b),
    w = SC(f),
    { [x]: A, light: R, dark: C, ...z } = i,
    D = { ...z };
  let k = A;
  if (
    (((x === "dark" && !("dark" in i)) || (x === "light" && !("light" in i))) &&
      (k = !0),
    !k)
  )
    throw new Error(_a(21, x));
  const O = sd(D, k, g, x);
  R && !D.light && sd(D, R, void 0, "light"),
    C && !D.dark && sd(D, C, void 0, "dark");
  let M = {
    defaultColorScheme: x,
    ...O,
    cssVarPrefix: f,
    colorSchemeSelector: h,
    rootSelector: m,
    getCssVar: w,
    colorSchemes: D,
    font: { ...eC(O.typography), ...O.font },
    spacing: xC(g.spacing),
  };
  Object.keys(M.colorSchemes).forEach((q) => {
    const v = M.colorSchemes[q].palette,
      F = (V) => {
        const I = V.split("-"),
          oe = I[1],
          P = I[2];
        return w(V, v[oe][P]);
      };
    if (
      (v.mode === "light" &&
        (ee(v.common, "background", "#fff"),
        ee(v.common, "onBackground", "#000")),
      v.mode === "dark" &&
        (ee(v.common, "background", "#000"),
        ee(v.common, "onBackground", "#fff")),
      bC(v, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip",
      ]),
      v.mode === "light")
    ) {
      ee(v.Alert, "errorColor", ht(v.error.light, 0.6)),
        ee(v.Alert, "infoColor", ht(v.info.light, 0.6)),
        ee(v.Alert, "successColor", ht(v.success.light, 0.6)),
        ee(v.Alert, "warningColor", ht(v.warning.light, 0.6)),
        ee(v.Alert, "errorFilledBg", F("palette-error-main")),
        ee(v.Alert, "infoFilledBg", F("palette-info-main")),
        ee(v.Alert, "successFilledBg", F("palette-success-main")),
        ee(v.Alert, "warningFilledBg", F("palette-warning-main")),
        ee(
          v.Alert,
          "errorFilledColor",
          la(() => v.getContrastText(v.error.main))
        ),
        ee(
          v.Alert,
          "infoFilledColor",
          la(() => v.getContrastText(v.info.main))
        ),
        ee(
          v.Alert,
          "successFilledColor",
          la(() => v.getContrastText(v.success.main))
        ),
        ee(
          v.Alert,
          "warningFilledColor",
          la(() => v.getContrastText(v.warning.main))
        ),
        ee(v.Alert, "errorStandardBg", mt(v.error.light, 0.9)),
        ee(v.Alert, "infoStandardBg", mt(v.info.light, 0.9)),
        ee(v.Alert, "successStandardBg", mt(v.success.light, 0.9)),
        ee(v.Alert, "warningStandardBg", mt(v.warning.light, 0.9)),
        ee(v.Alert, "errorIconColor", F("palette-error-main")),
        ee(v.Alert, "infoIconColor", F("palette-info-main")),
        ee(v.Alert, "successIconColor", F("palette-success-main")),
        ee(v.Alert, "warningIconColor", F("palette-warning-main")),
        ee(v.AppBar, "defaultBg", F("palette-grey-100")),
        ee(v.Avatar, "defaultBg", F("palette-grey-400")),
        ee(v.Button, "inheritContainedBg", F("palette-grey-300")),
        ee(v.Button, "inheritContainedHoverBg", F("palette-grey-A100")),
        ee(v.Chip, "defaultBorder", F("palette-grey-400")),
        ee(v.Chip, "defaultAvatarColor", F("palette-grey-700")),
        ee(v.Chip, "defaultIconColor", F("palette-grey-700")),
        ee(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
        ee(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
        ee(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
        ee(v.LinearProgress, "primaryBg", mt(v.primary.main, 0.62)),
        ee(v.LinearProgress, "secondaryBg", mt(v.secondary.main, 0.62)),
        ee(v.LinearProgress, "errorBg", mt(v.error.main, 0.62)),
        ee(v.LinearProgress, "infoBg", mt(v.info.main, 0.62)),
        ee(v.LinearProgress, "successBg", mt(v.success.main, 0.62)),
        ee(v.LinearProgress, "warningBg", mt(v.warning.main, 0.62)),
        ee(
          v.Skeleton,
          "bg",
          `rgba(${F("palette-text-primaryChannel")} / 0.11)`
        ),
        ee(v.Slider, "primaryTrack", mt(v.primary.main, 0.62)),
        ee(v.Slider, "secondaryTrack", mt(v.secondary.main, 0.62)),
        ee(v.Slider, "errorTrack", mt(v.error.main, 0.62)),
        ee(v.Slider, "infoTrack", mt(v.info.main, 0.62)),
        ee(v.Slider, "successTrack", mt(v.success.main, 0.62)),
        ee(v.Slider, "warningTrack", mt(v.warning.main, 0.62));
      const V = Ks(v.background.default, 0.8);
      ee(v.SnackbarContent, "bg", V),
        ee(
          v.SnackbarContent,
          "color",
          la(() => v.getContrastText(V))
        ),
        ee(v.SpeedDialAction, "fabHoverBg", Ks(v.background.paper, 0.15)),
        ee(v.StepConnector, "border", F("palette-grey-400")),
        ee(v.StepContent, "border", F("palette-grey-400")),
        ee(v.Switch, "defaultColor", F("palette-common-white")),
        ee(v.Switch, "defaultDisabledColor", F("palette-grey-100")),
        ee(v.Switch, "primaryDisabledColor", mt(v.primary.main, 0.62)),
        ee(v.Switch, "secondaryDisabledColor", mt(v.secondary.main, 0.62)),
        ee(v.Switch, "errorDisabledColor", mt(v.error.main, 0.62)),
        ee(v.Switch, "infoDisabledColor", mt(v.info.main, 0.62)),
        ee(v.Switch, "successDisabledColor", mt(v.success.main, 0.62)),
        ee(v.Switch, "warningDisabledColor", mt(v.warning.main, 0.62)),
        ee(v.TableCell, "border", mt(Xs(v.divider, 1), 0.88)),
        ee(v.Tooltip, "bg", Xs(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      ee(v.Alert, "errorColor", mt(v.error.light, 0.6)),
        ee(v.Alert, "infoColor", mt(v.info.light, 0.6)),
        ee(v.Alert, "successColor", mt(v.success.light, 0.6)),
        ee(v.Alert, "warningColor", mt(v.warning.light, 0.6)),
        ee(v.Alert, "errorFilledBg", F("palette-error-dark")),
        ee(v.Alert, "infoFilledBg", F("palette-info-dark")),
        ee(v.Alert, "successFilledBg", F("palette-success-dark")),
        ee(v.Alert, "warningFilledBg", F("palette-warning-dark")),
        ee(
          v.Alert,
          "errorFilledColor",
          la(() => v.getContrastText(v.error.dark))
        ),
        ee(
          v.Alert,
          "infoFilledColor",
          la(() => v.getContrastText(v.info.dark))
        ),
        ee(
          v.Alert,
          "successFilledColor",
          la(() => v.getContrastText(v.success.dark))
        ),
        ee(
          v.Alert,
          "warningFilledColor",
          la(() => v.getContrastText(v.warning.dark))
        ),
        ee(v.Alert, "errorStandardBg", ht(v.error.light, 0.9)),
        ee(v.Alert, "infoStandardBg", ht(v.info.light, 0.9)),
        ee(v.Alert, "successStandardBg", ht(v.success.light, 0.9)),
        ee(v.Alert, "warningStandardBg", ht(v.warning.light, 0.9)),
        ee(v.Alert, "errorIconColor", F("palette-error-main")),
        ee(v.Alert, "infoIconColor", F("palette-info-main")),
        ee(v.Alert, "successIconColor", F("palette-success-main")),
        ee(v.Alert, "warningIconColor", F("palette-warning-main")),
        ee(v.AppBar, "defaultBg", F("palette-grey-900")),
        ee(v.AppBar, "darkBg", F("palette-background-paper")),
        ee(v.AppBar, "darkColor", F("palette-text-primary")),
        ee(v.Avatar, "defaultBg", F("palette-grey-600")),
        ee(v.Button, "inheritContainedBg", F("palette-grey-800")),
        ee(v.Button, "inheritContainedHoverBg", F("palette-grey-700")),
        ee(v.Chip, "defaultBorder", F("palette-grey-700")),
        ee(v.Chip, "defaultAvatarColor", F("palette-grey-300")),
        ee(v.Chip, "defaultIconColor", F("palette-grey-300")),
        ee(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
        ee(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
        ee(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
        ee(v.LinearProgress, "primaryBg", ht(v.primary.main, 0.5)),
        ee(v.LinearProgress, "secondaryBg", ht(v.secondary.main, 0.5)),
        ee(v.LinearProgress, "errorBg", ht(v.error.main, 0.5)),
        ee(v.LinearProgress, "infoBg", ht(v.info.main, 0.5)),
        ee(v.LinearProgress, "successBg", ht(v.success.main, 0.5)),
        ee(v.LinearProgress, "warningBg", ht(v.warning.main, 0.5)),
        ee(
          v.Skeleton,
          "bg",
          `rgba(${F("palette-text-primaryChannel")} / 0.13)`
        ),
        ee(v.Slider, "primaryTrack", ht(v.primary.main, 0.5)),
        ee(v.Slider, "secondaryTrack", ht(v.secondary.main, 0.5)),
        ee(v.Slider, "errorTrack", ht(v.error.main, 0.5)),
        ee(v.Slider, "infoTrack", ht(v.info.main, 0.5)),
        ee(v.Slider, "successTrack", ht(v.success.main, 0.5)),
        ee(v.Slider, "warningTrack", ht(v.warning.main, 0.5));
      const V = Ks(v.background.default, 0.98);
      ee(v.SnackbarContent, "bg", V),
        ee(
          v.SnackbarContent,
          "color",
          la(() => v.getContrastText(V))
        ),
        ee(v.SpeedDialAction, "fabHoverBg", Ks(v.background.paper, 0.15)),
        ee(v.StepConnector, "border", F("palette-grey-600")),
        ee(v.StepContent, "border", F("palette-grey-600")),
        ee(v.Switch, "defaultColor", F("palette-grey-300")),
        ee(v.Switch, "defaultDisabledColor", F("palette-grey-600")),
        ee(v.Switch, "primaryDisabledColor", ht(v.primary.main, 0.55)),
        ee(v.Switch, "secondaryDisabledColor", ht(v.secondary.main, 0.55)),
        ee(v.Switch, "errorDisabledColor", ht(v.error.main, 0.55)),
        ee(v.Switch, "infoDisabledColor", ht(v.info.main, 0.55)),
        ee(v.Switch, "successDisabledColor", ht(v.success.main, 0.55)),
        ee(v.Switch, "warningDisabledColor", ht(v.warning.main, 0.55)),
        ee(v.TableCell, "border", ht(Xs(v.divider, 1), 0.68)),
        ee(v.Tooltip, "bg", Xs(v.grey[700], 0.92));
    }
    $a(v.background, "default"),
      $a(v.background, "paper"),
      $a(v.common, "background"),
      $a(v.common, "onBackground"),
      $a(v, "divider"),
      Object.keys(v).forEach((V) => {
        const I = v[V];
        V !== "tonalOffset" &&
          I &&
          typeof I == "object" &&
          (I.main && ee(v[V], "mainChannel", fl(dl(I.main))),
          I.light && ee(v[V], "lightChannel", fl(dl(I.light))),
          I.dark && ee(v[V], "darkChannel", fl(dl(I.dark))),
          I.contrastText &&
            ee(v[V], "contrastTextChannel", fl(dl(I.contrastText))),
          V === "text" && ($a(v[V], "primary"), $a(v[V], "secondary")),
          V === "action" &&
            (I.active && $a(v[V], "active"),
            I.selected && $a(v[V], "selected")));
      });
  }),
    (M = r.reduce((q, v) => nn(q, v), M));
  const E = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: d,
      getSelector: vC(M),
    },
    { vars: $, generateThemeVars: L, generateStyleSheets: W } = I2(M, E);
  return (
    (M.vars = $),
    Object.entries(M.colorSchemes[M.defaultColorScheme]).forEach(([q, v]) => {
      M[q] = v;
    }),
    (M.generateThemeVars = L),
    (M.generateStyleSheets = W),
    (M.generateSpacing = function () {
      return Yv(g.spacing, Qd(this));
    }),
    (M.getColorSchemeSelector = Y2(h)),
    (M.spacing = M.generateSpacing()),
    (M.shouldSkipGeneratingVar = d),
    (M.unstable_sxConfig = {
      ...kl,
      ...(g == null ? void 0 : g.unstable_sxConfig),
    }),
    (M.unstable_sx = function (v) {
      return Yo({ sx: v, theme: this });
    }),
    (M.toRuntimeSource = c0),
    M
  );
}
function Hy(n, r, i) {
  n.colorSchemes &&
    i &&
    (n.colorSchemes[r] = {
      ...(i !== !0 && i),
      palette: np({ ...(i === !0 ? {} : i.palette), mode: r }),
    });
}
function TC(n = {}, ...r) {
  const {
      palette: i,
      cssVariables: l = !1,
      colorSchemes: c = i ? void 0 : { light: !0 },
      defaultColorScheme: f = i == null ? void 0 : i.mode,
      ...d
    } = n,
    h = f || "light",
    m = c == null ? void 0 : c[h],
    g = {
      ...c,
      ...(i
        ? { [h]: { ...(typeof m != "boolean" && m), palette: i } }
        : void 0),
    };
  if (l === !1) {
    if (!("colorSchemes" in n)) return wd(n, ...r);
    let b = i;
    "palette" in n ||
      (g[h] &&
        (g[h] !== !0
          ? (b = g[h].palette)
          : h === "dark" && (b = { mode: "dark" })));
    const x = wd({ ...n, palette: b }, ...r);
    return (
      (x.defaultColorScheme = h),
      (x.colorSchemes = g),
      x.palette.mode === "light" &&
        ((x.colorSchemes.light = {
          ...(g.light !== !0 && g.light),
          palette: x.palette,
        }),
        Hy(x, "dark", g.dark)),
      x.palette.mode === "dark" &&
        ((x.colorSchemes.dark = {
          ...(g.dark !== !0 && g.dark),
          palette: x.palette,
        }),
        Hy(x, "light", g.light)),
      x
    );
  }
  return (
    !i && !("light" in g) && h === "light" && (g.light = !0),
    CC(
      {
        ...d,
        colorSchemes: g,
        defaultColorScheme: h,
        ...(typeof l != "boolean" && l),
      },
      ...r
    )
  );
}
const ap = TC();
function ti() {
  const n = Wv(ap);
  return n[Ld] || n;
}
function d0(n) {
  return n !== "ownerState" && n !== "theme" && n !== "sx" && n !== "as";
}
const Kn = (n) => d0(n) && n !== "classes",
  ie = C2({ themeId: Ld, defaultTheme: ap, rootShouldForwardProp: Kn });
function EC(n) {
  return p.jsx(h2, { ...n, defaultTheme: ap, themeId: Ld });
}
function RC(n) {
  return function (i) {
    return p.jsx(EC, {
      styles: typeof n == "function" ? (l) => n({ theme: l, ...i }) : n,
    });
  };
}
function wC() {
  return Vv;
}
const rt = H2;
function Ye(n) {
  return L2(n);
}
function AC(n) {
  return qe("MuiSvgIcon", n);
}
ke("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const MC = (n) => {
    const { color: r, fontSize: i, classes: l } = n,
      c = {
        root: ["root", r !== "inherit" && `color${Te(r)}`, `fontSize${Te(i)}`],
      };
    return Ge(c, AC, l);
  },
  OC = ie("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        i.color !== "inherit" && r[`color${Te(i.color)}`],
        r[`fontSize${Te(i.fontSize)}`],
      ];
    },
  })(
    rt(({ theme: n }) => {
      var r, i, l, c, f, d, h, m, g, b, x, w, A, R;
      return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition:
          (c = (r = n.transitions) == null ? void 0 : r.create) == null
            ? void 0
            : c.call(r, "fill", {
                duration:
                  (l =
                    (i = (n.vars ?? n).transitions) == null
                      ? void 0
                      : i.duration) == null
                    ? void 0
                    : l.shorter,
              }),
        variants: [
          { props: (C) => !C.hasSvgAsChild, style: { fill: "currentColor" } },
          { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
          {
            props: { fontSize: "small" },
            style: {
              fontSize:
                ((d = (f = n.typography) == null ? void 0 : f.pxToRem) == null
                  ? void 0
                  : d.call(f, 20)) || "1.25rem",
            },
          },
          {
            props: { fontSize: "medium" },
            style: {
              fontSize:
                ((m = (h = n.typography) == null ? void 0 : h.pxToRem) == null
                  ? void 0
                  : m.call(h, 24)) || "1.5rem",
            },
          },
          {
            props: { fontSize: "large" },
            style: {
              fontSize:
                ((b = (g = n.typography) == null ? void 0 : g.pxToRem) == null
                  ? void 0
                  : b.call(g, 35)) || "2.1875rem",
            },
          },
          ...Object.entries((n.vars ?? n).palette)
            .filter(([, C]) => C && C.main)
            .map(([C]) => {
              var z, D;
              return {
                props: { color: C },
                style: {
                  color:
                    (D = (z = (n.vars ?? n).palette) == null ? void 0 : z[C]) ==
                    null
                      ? void 0
                      : D.main,
                },
              };
            }),
          {
            props: { color: "action" },
            style: {
              color:
                (w = (x = (n.vars ?? n).palette) == null ? void 0 : x.action) ==
                null
                  ? void 0
                  : w.active,
            },
          },
          {
            props: { color: "disabled" },
            style: {
              color:
                (R = (A = (n.vars ?? n).palette) == null ? void 0 : A.action) ==
                null
                  ? void 0
                  : R.disabled,
            },
          },
          { props: { color: "inherit" }, style: { color: void 0 } },
        ],
      };
    })
  ),
  Md = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiSvgIcon" }),
      {
        children: c,
        className: f,
        color: d = "inherit",
        component: h = "svg",
        fontSize: m = "medium",
        htmlColor: g,
        inheritViewBox: b = !1,
        titleAccess: x,
        viewBox: w = "0 0 24 24",
        ...A
      } = l,
      R = T.isValidElement(c) && c.type === "svg",
      C = {
        ...l,
        color: d,
        component: h,
        fontSize: m,
        instanceFontSize: r.fontSize,
        inheritViewBox: b,
        viewBox: w,
        hasSvgAsChild: R,
      },
      z = {};
    b || (z.viewBox = w);
    const D = MC(C);
    return p.jsxs(OC, {
      as: h,
      className: Ae(D.root, f),
      focusable: "false",
      color: g,
      "aria-hidden": x ? void 0 : !0,
      role: x ? "img" : void 0,
      ref: i,
      ...z,
      ...A,
      ...(R && c.props),
      ownerState: C,
      children: [
        R ? c.props.children : c,
        x ? p.jsx("title", { children: x }) : null,
      ],
    });
  });
Md.muiName = "SvgIcon";
function Qn(n, r) {
  function i(l, c) {
    return p.jsx(Md, { "data-testid": `${r}Icon`, ref: c, ...l, children: n });
  }
  return (i.muiName = Md.muiName), T.memo(T.forwardRef(i));
}
function BC(n, r) {
  if (!n) return r;
  if (typeof n == "function" || typeof r == "function")
    return (c) => {
      const f = typeof r == "function" ? r(c) : r,
        d = typeof n == "function" ? n({ ...c, ...f }) : n,
        h = Ae(
          c == null ? void 0 : c.className,
          f == null ? void 0 : f.className,
          d == null ? void 0 : d.className
        );
      return {
        ...f,
        ...d,
        ...(!!h && { className: h }),
        ...((f == null ? void 0 : f.style) &&
          (d == null ? void 0 : d.style) && {
            style: { ...f.style, ...d.style },
          }),
        ...((f == null ? void 0 : f.sx) &&
          (d == null ? void 0 : d.sx) && {
            sx: [
              ...(Array.isArray(f.sx) ? f.sx : [f.sx]),
              ...(Array.isArray(d.sx) ? d.sx : [d.sx]),
            ],
          }),
      };
    };
  const i = r,
    l = Ae(i == null ? void 0 : i.className, n == null ? void 0 : n.className);
  return {
    ...r,
    ...n,
    ...(!!l && { className: l }),
    ...((i == null ? void 0 : i.style) &&
      (n == null ? void 0 : n.style) && { style: { ...i.style, ...n.style } }),
    ...((i == null ? void 0 : i.sx) &&
      (n == null ? void 0 : n.sx) && {
        sx: [
          ...(Array.isArray(i.sx) ? i.sx : [i.sx]),
          ...(Array.isArray(n.sx) ? n.sx : [n.sx]),
        ],
      }),
  };
}
function p0(n, r) {
  if (n == null) return {};
  var i = {};
  for (var l in n)
    if ({}.hasOwnProperty.call(n, l)) {
      if (r.indexOf(l) !== -1) continue;
      i[l] = n[l];
    }
  return i;
}
function Od(n, r) {
  return (
    (Od = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, l) {
          return (i.__proto__ = l), i;
        }),
    Od(n, r)
  );
}
function h0(n, r) {
  (n.prototype = Object.create(r.prototype)),
    (n.prototype.constructor = n),
    Od(n, r);
}
var m0 = Ov();
const Qs = Mv(m0),
  Py = { disabled: !1 },
  gc = pa.createContext(null);
var jC = function (r) {
    return r.scrollTop;
  },
  pl = "unmounted",
  _r = "exited",
  Lr = "entering",
  Lo = "entered",
  Bd = "exiting",
  va = (function (n) {
    h0(r, n);
    function r(l, c) {
      var f;
      f = n.call(this, l, c) || this;
      var d = c,
        h = d && !d.isMounting ? l.enter : l.appear,
        m;
      return (
        (f.appearStatus = null),
        l.in
          ? h
            ? ((m = _r), (f.appearStatus = Lr))
            : (m = Lo)
          : l.unmountOnExit || l.mountOnEnter
          ? (m = pl)
          : (m = _r),
        (f.state = { status: m }),
        (f.nextCallback = null),
        f
      );
    }
    r.getDerivedStateFromProps = function (c, f) {
      var d = c.in;
      return d && f.status === pl ? { status: _r } : null;
    };
    var i = r.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (c) {
        var f = null;
        if (c !== this.props) {
          var d = this.state.status;
          this.props.in
            ? d !== Lr && d !== Lo && (f = Lr)
            : (d === Lr || d === Lo) && (f = Bd);
        }
        this.updateStatus(!1, f);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var c = this.props.timeout,
          f,
          d,
          h;
        return (
          (f = d = h = c),
          c != null &&
            typeof c != "number" &&
            ((f = c.exit),
            (d = c.enter),
            (h = c.appear !== void 0 ? c.appear : d)),
          { exit: f, enter: d, appear: h }
        );
      }),
      (i.updateStatus = function (c, f) {
        if ((c === void 0 && (c = !1), f !== null))
          if ((this.cancelNextCallback(), f === Lr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var d = this.props.nodeRef
                ? this.props.nodeRef.current
                : Qs.findDOMNode(this);
              d && jC(d);
            }
            this.performEnter(c);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === _r &&
            this.setState({ status: pl });
      }),
      (i.performEnter = function (c) {
        var f = this,
          d = this.props.enter,
          h = this.context ? this.context.isMounting : c,
          m = this.props.nodeRef ? [h] : [Qs.findDOMNode(this), h],
          g = m[0],
          b = m[1],
          x = this.getTimeouts(),
          w = h ? x.appear : x.enter;
        if ((!c && !d) || Py.disabled) {
          this.safeSetState({ status: Lo }, function () {
            f.props.onEntered(g);
          });
          return;
        }
        this.props.onEnter(g, b),
          this.safeSetState({ status: Lr }, function () {
            f.props.onEntering(g, b),
              f.onTransitionEnd(w, function () {
                f.safeSetState({ status: Lo }, function () {
                  f.props.onEntered(g, b);
                });
              });
          });
      }),
      (i.performExit = function () {
        var c = this,
          f = this.props.exit,
          d = this.getTimeouts(),
          h = this.props.nodeRef ? void 0 : Qs.findDOMNode(this);
        if (!f || Py.disabled) {
          this.safeSetState({ status: _r }, function () {
            c.props.onExited(h);
          });
          return;
        }
        this.props.onExit(h),
          this.safeSetState({ status: Bd }, function () {
            c.props.onExiting(h),
              c.onTransitionEnd(d.exit, function () {
                c.safeSetState({ status: _r }, function () {
                  c.props.onExited(h);
                });
              });
          });
      }),
      (i.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (c, f) {
        (f = this.setNextCallback(f)), this.setState(c, f);
      }),
      (i.setNextCallback = function (c) {
        var f = this,
          d = !0;
        return (
          (this.nextCallback = function (h) {
            d && ((d = !1), (f.nextCallback = null), c(h));
          }),
          (this.nextCallback.cancel = function () {
            d = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (c, f) {
        this.setNextCallback(f);
        var d = this.props.nodeRef
            ? this.props.nodeRef.current
            : Qs.findDOMNode(this),
          h = c == null && !this.props.addEndListener;
        if (!d || h) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var m = this.props.nodeRef
              ? [this.nextCallback]
              : [d, this.nextCallback],
            g = m[0],
            b = m[1];
          this.props.addEndListener(g, b);
        }
        c != null && setTimeout(this.nextCallback, c);
      }),
      (i.render = function () {
        var c = this.state.status;
        if (c === pl) return null;
        var f = this.props,
          d = f.children;
        f.in,
          f.mountOnEnter,
          f.unmountOnExit,
          f.appear,
          f.enter,
          f.exit,
          f.timeout,
          f.addEndListener,
          f.onEnter,
          f.onEntering,
          f.onEntered,
          f.onExit,
          f.onExiting,
          f.onExited,
          f.nodeRef;
        var h = p0(f, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return pa.createElement(
          gc.Provider,
          { value: null },
          typeof d == "function"
            ? d(c, h)
            : pa.cloneElement(pa.Children.only(d), h)
        );
      }),
      r
    );
  })(pa.Component);
va.contextType = gc;
va.propTypes = {};
function Uo() {}
va.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Uo,
  onEntering: Uo,
  onEntered: Uo,
  onExit: Uo,
  onExiting: Uo,
  onExited: Uo,
};
va.UNMOUNTED = pl;
va.EXITED = _r;
va.ENTERING = Lr;
va.ENTERED = Lo;
va.EXITING = Bd;
function zC(n) {
  if (n === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return n;
}
function rp(n, r) {
  var i = function (f) {
      return r && T.isValidElement(f) ? r(f) : f;
    },
    l = Object.create(null);
  return (
    n &&
      T.Children.map(n, function (c) {
        return c;
      }).forEach(function (c) {
        l[c.key] = i(c);
      }),
    l
  );
}
function DC(n, r) {
  (n = n || {}), (r = r || {});
  function i(b) {
    return b in r ? r[b] : n[b];
  }
  var l = Object.create(null),
    c = [];
  for (var f in n) f in r ? c.length && ((l[f] = c), (c = [])) : c.push(f);
  var d,
    h = {};
  for (var m in r) {
    if (l[m])
      for (d = 0; d < l[m].length; d++) {
        var g = l[m][d];
        h[l[m][d]] = i(g);
      }
    h[m] = i(m);
  }
  for (d = 0; d < c.length; d++) h[c[d]] = i(c[d]);
  return h;
}
function Hr(n, r, i) {
  return i[r] != null ? i[r] : n.props[r];
}
function kC(n, r) {
  return rp(n.children, function (i) {
    return T.cloneElement(i, {
      onExited: r.bind(null, i),
      in: !0,
      appear: Hr(i, "appear", n),
      enter: Hr(i, "enter", n),
      exit: Hr(i, "exit", n),
    });
  });
}
function NC(n, r, i) {
  var l = rp(n.children),
    c = DC(r, l);
  return (
    Object.keys(c).forEach(function (f) {
      var d = c[f];
      if (T.isValidElement(d)) {
        var h = f in r,
          m = f in l,
          g = r[f],
          b = T.isValidElement(g) && !g.props.in;
        m && (!h || b)
          ? (c[f] = T.cloneElement(d, {
              onExited: i.bind(null, d),
              in: !0,
              exit: Hr(d, "exit", n),
              enter: Hr(d, "enter", n),
            }))
          : !m && h && !b
          ? (c[f] = T.cloneElement(d, { in: !1 }))
          : m &&
            h &&
            T.isValidElement(g) &&
            (c[f] = T.cloneElement(d, {
              onExited: i.bind(null, d),
              in: g.props.in,
              exit: Hr(d, "exit", n),
              enter: Hr(d, "enter", n),
            }));
      }
    }),
    c
  );
}
var FC =
    Object.values ||
    function (n) {
      return Object.keys(n).map(function (r) {
        return n[r];
      });
    },
  $C = {
    component: "div",
    childFactory: function (r) {
      return r;
    },
  },
  op = (function (n) {
    h0(r, n);
    function r(l, c) {
      var f;
      f = n.call(this, l, c) || this;
      var d = f.handleExited.bind(zC(f));
      return (
        (f.state = {
          contextValue: { isMounting: !0 },
          handleExited: d,
          firstRender: !0,
        }),
        f
      );
    }
    var i = r.prototype;
    return (
      (i.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (i.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (r.getDerivedStateFromProps = function (c, f) {
        var d = f.children,
          h = f.handleExited,
          m = f.firstRender;
        return { children: m ? kC(c, h) : NC(c, d, h), firstRender: !1 };
      }),
      (i.handleExited = function (c, f) {
        var d = rp(this.props.children);
        c.key in d ||
          (c.props.onExited && c.props.onExited(f),
          this.mounted &&
            this.setState(function (h) {
              var m = fc({}, h.children);
              return delete m[c.key], { children: m };
            }));
      }),
      (i.render = function () {
        var c = this.props,
          f = c.component,
          d = c.childFactory,
          h = p0(c, ["component", "childFactory"]),
          m = this.state.contextValue,
          g = FC(this.state.children).map(d);
        return (
          delete h.appear,
          delete h.enter,
          delete h.exit,
          f === null
            ? pa.createElement(gc.Provider, { value: m }, g)
            : pa.createElement(
                gc.Provider,
                { value: m },
                pa.createElement(f, h, g)
              )
        );
      }),
      r
    );
  })(pa.Component);
op.propTypes = {};
op.defaultProps = $C;
const g0 = (n) => n.scrollTop;
function yc(n, r) {
  const { timeout: i, easing: l, style: c = {} } = n;
  return {
    duration:
      c.transitionDuration ?? (typeof i == "number" ? i : i[r.mode] || 0),
    easing:
      c.transitionTimingFunction ?? (typeof l == "object" ? l[r.mode] : l),
    delay: c.transitionDelay,
  };
}
function UC(n) {
  return qe("MuiPaper", n);
}
ke("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const _C = (n) => {
    const { square: r, elevation: i, variant: l, classes: c } = n,
      f = {
        root: [
          "root",
          l,
          !r && "rounded",
          l === "elevation" && `elevation${i}`,
        ],
      };
    return Ge(f, UC, c);
  },
  LC = ie("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        r[i.variant],
        !i.square && r.rounded,
        i.variant === "elevation" && r[`elevation${i.elevation}`],
      ];
    },
  })(
    rt(({ theme: n }) => ({
      backgroundColor: (n.vars || n).palette.background.paper,
      color: (n.vars || n).palette.text.primary,
      transition: n.transitions.create("box-shadow"),
      variants: [
        {
          props: ({ ownerState: r }) => !r.square,
          style: { borderRadius: n.shape.borderRadius },
        },
        {
          props: { variant: "outlined" },
          style: { border: `1px solid ${(n.vars || n).palette.divider}` },
        },
        {
          props: { variant: "elevation" },
          style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)",
          },
        },
      ],
    }))
  ),
  Fc = T.forwardRef(function (r, i) {
    var A;
    const l = Ye({ props: r, name: "MuiPaper" }),
      c = ti(),
      {
        className: f,
        component: d = "div",
        elevation: h = 1,
        square: m = !1,
        variant: g = "elevation",
        ...b
      } = l,
      x = { ...l, component: d, elevation: h, square: m, variant: g },
      w = _C(x);
    return p.jsx(LC, {
      as: d,
      ownerState: x,
      className: Ae(w.root, f),
      ref: i,
      ...b,
      style: {
        ...(g === "elevation" && {
          "--Paper-shadow": (c.vars || c).shadows[h],
          ...(c.vars && {
            "--Paper-overlay": (A = c.vars.overlays) == null ? void 0 : A[h],
          }),
          ...(!c.vars &&
            c.palette.mode === "dark" && {
              "--Paper-overlay": `linear-gradient(${tn("#fff", Ad(h))}, ${tn(
                "#fff",
                Ad(h)
              )})`,
            }),
        }),
        ...b.style,
      },
    });
  });
function ot(n, r) {
  const {
      className: i,
      elementType: l,
      ownerState: c,
      externalForwardedProps: f,
      internalForwardedProps: d,
      shouldForwardComponentProp: h = !1,
      ...m
    } = r,
    {
      component: g,
      slots: b = { [n]: void 0 },
      slotProps: x = { [n]: void 0 },
      ...w
    } = f,
    A = b[n] || l,
    R = o0(x[n], c),
    {
      props: { component: C, ...z },
      internalRef: D,
    } = r0({
      className: i,
      ...m,
      externalForwardedProps: n === "root" ? w : void 0,
      externalSlotProps: R,
    }),
    k = Ut(D, R == null ? void 0 : R.ref, r.ref),
    O = n === "root" ? C || g : C,
    M = n0(
      A,
      {
        ...(n === "root" && !g && !b[n] && d),
        ...(n !== "root" && !b[n] && d),
        ...z,
        ...(O && !h && { as: O }),
        ...(O && h && { component: O }),
        ref: k,
      },
      c
    );
  return [A, M];
}
class vc {
  constructor() {
    Zi(this, "mountEffect", () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    (this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null);
  }
  static create() {
    return new vc();
  }
  static use() {
    const r = e0(vc.create).current,
      [i, l] = T.useState(!1);
    return (
      (r.shouldMount = i),
      (r.setShouldMount = l),
      T.useEffect(r.mountEffect, [i]),
      r
    );
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = PC()),
        (this.shouldMount = !0),
        this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.start(...r);
    });
  }
  stop(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.stop(...r);
    });
  }
  pulsate(...r) {
    this.mount().then(() => {
      var i;
      return (i = this.ref.current) == null ? void 0 : i.pulsate(...r);
    });
  }
}
function HC() {
  return vc.use();
}
function PC() {
  let n, r;
  const i = new Promise((l, c) => {
    (n = l), (r = c);
  });
  return (i.resolve = n), (i.reject = r), i;
}
function qC(n) {
  const {
      className: r,
      classes: i,
      pulsate: l = !1,
      rippleX: c,
      rippleY: f,
      rippleSize: d,
      in: h,
      onExited: m,
      timeout: g,
    } = n,
    [b, x] = T.useState(!1),
    w = Ae(r, i.ripple, i.rippleVisible, l && i.ripplePulsate),
    A = { width: d, height: d, top: -(d / 2) + f, left: -(d / 2) + c },
    R = Ae(i.child, b && i.childLeaving, l && i.childPulsate);
  return (
    !h && !b && x(!0),
    T.useEffect(() => {
      if (!h && m != null) {
        const C = setTimeout(m, g);
        return () => {
          clearTimeout(C);
        };
      }
    }, [m, h, g]),
    p.jsx("span", {
      className: w,
      style: A,
      children: p.jsx("span", { className: R }),
    })
  );
}
const Pn = ke("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  jd = 550,
  GC = 80,
  IC = jl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  YC = jl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  WC = jl`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  VC = ie("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  XC = ie(qC, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Pn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${IC};
    animation-duration: ${jd}ms;
    animation-timing-function: ${({ theme: n }) =>
      n.transitions.easing.easeInOut};
  }

  &.${Pn.ripplePulsate} {
    animation-duration: ${({ theme: n }) => n.transitions.duration.shorter}ms;
  }

  & .${Pn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Pn.childLeaving} {
    opacity: 0;
    animation-name: ${YC};
    animation-duration: ${jd}ms;
    animation-timing-function: ${({ theme: n }) =>
      n.transitions.easing.easeInOut};
  }

  & .${Pn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${WC};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: n }) =>
      n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  KC = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiTouchRipple" }),
      { center: c = !1, classes: f = {}, className: d, ...h } = l,
      [m, g] = T.useState([]),
      b = T.useRef(0),
      x = T.useRef(null);
    T.useEffect(() => {
      x.current && (x.current(), (x.current = null));
    }, [m]);
    const w = T.useRef(!1),
      A = Ho(),
      R = T.useRef(null),
      C = T.useRef(null),
      z = T.useCallback(
        (M) => {
          const {
            pulsate: E,
            rippleX: $,
            rippleY: L,
            rippleSize: W,
            cb: q,
          } = M;
          g((v) => [
            ...v,
            p.jsx(
              XC,
              {
                classes: {
                  ripple: Ae(f.ripple, Pn.ripple),
                  rippleVisible: Ae(f.rippleVisible, Pn.rippleVisible),
                  ripplePulsate: Ae(f.ripplePulsate, Pn.ripplePulsate),
                  child: Ae(f.child, Pn.child),
                  childLeaving: Ae(f.childLeaving, Pn.childLeaving),
                  childPulsate: Ae(f.childPulsate, Pn.childPulsate),
                },
                timeout: jd,
                pulsate: E,
                rippleX: $,
                rippleY: L,
                rippleSize: W,
              },
              b.current
            ),
          ]),
            (b.current += 1),
            (x.current = q);
        },
        [f]
      ),
      D = T.useCallback(
        (M = {}, E = {}, $ = () => {}) => {
          const {
            pulsate: L = !1,
            center: W = c || E.pulsate,
            fakeElement: q = !1,
          } = E;
          if ((M == null ? void 0 : M.type) === "mousedown" && w.current) {
            w.current = !1;
            return;
          }
          (M == null ? void 0 : M.type) === "touchstart" && (w.current = !0);
          const v = q ? null : C.current,
            F = v
              ? v.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let V, I, oe;
          if (
            W ||
            M === void 0 ||
            (M.clientX === 0 && M.clientY === 0) ||
            (!M.clientX && !M.touches)
          )
            (V = Math.round(F.width / 2)), (I = Math.round(F.height / 2));
          else {
            const { clientX: P, clientY: N } =
              M.touches && M.touches.length > 0 ? M.touches[0] : M;
            (V = Math.round(P - F.left)), (I = Math.round(N - F.top));
          }
          if (W)
            (oe = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3)),
              oe % 2 === 0 && (oe += 1);
          else {
            const P =
                Math.max(Math.abs((v ? v.clientWidth : 0) - V), V) * 2 + 2,
              N = Math.max(Math.abs((v ? v.clientHeight : 0) - I), I) * 2 + 2;
            oe = Math.sqrt(P ** 2 + N ** 2);
          }
          M != null && M.touches
            ? R.current === null &&
              ((R.current = () => {
                z({
                  pulsate: L,
                  rippleX: V,
                  rippleY: I,
                  rippleSize: oe,
                  cb: $,
                });
              }),
              A.start(GC, () => {
                R.current && (R.current(), (R.current = null));
              }))
            : z({ pulsate: L, rippleX: V, rippleY: I, rippleSize: oe, cb: $ });
        },
        [c, z, A]
      ),
      k = T.useCallback(() => {
        D({}, { pulsate: !0 });
      }, [D]),
      O = T.useCallback(
        (M, E) => {
          if (
            (A.clear(),
            (M == null ? void 0 : M.type) === "touchend" && R.current)
          ) {
            R.current(),
              (R.current = null),
              A.start(0, () => {
                O(M, E);
              });
            return;
          }
          (R.current = null),
            g(($) => ($.length > 0 ? $.slice(1) : $)),
            (x.current = E);
        },
        [A]
      );
    return (
      T.useImperativeHandle(i, () => ({ pulsate: k, start: D, stop: O }), [
        k,
        D,
        O,
      ]),
      p.jsx(VC, {
        className: Ae(Pn.root, f.root, d),
        ref: C,
        ...h,
        children: p.jsx(op, { component: null, exit: !0, children: m }),
      })
    );
  });
function QC(n) {
  return qe("MuiButtonBase", n);
}
const ZC = ke("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  JC = (n) => {
    const {
        disabled: r,
        focusVisible: i,
        focusVisibleClassName: l,
        classes: c,
      } = n,
      d = Ge({ root: ["root", r && "disabled", i && "focusVisible"] }, QC, c);
    return i && l && (d.root += ` ${l}`), d;
  },
  eT = ie("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${ZC.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  ip = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiButtonBase" }),
      {
        action: c,
        centerRipple: f = !1,
        children: d,
        className: h,
        component: m = "button",
        disabled: g = !1,
        disableRipple: b = !1,
        disableTouchRipple: x = !1,
        focusRipple: w = !1,
        focusVisibleClassName: A,
        LinkComponent: R = "a",
        onBlur: C,
        onClick: z,
        onContextMenu: D,
        onDragLeave: k,
        onFocus: O,
        onFocusVisible: M,
        onKeyDown: E,
        onKeyUp: $,
        onMouseDown: L,
        onMouseLeave: W,
        onMouseUp: q,
        onTouchEnd: v,
        onTouchMove: F,
        onTouchStart: V,
        tabIndex: I = 0,
        TouchRippleProps: oe,
        touchRippleRef: P,
        type: N,
        ...J
      } = l,
      se = T.useRef(null),
      ae = HC(),
      j = Ut(ae.ref, P),
      [K, Q] = T.useState(!1);
    g && K && Q(!1),
      T.useImperativeHandle(
        c,
        () => ({
          focusVisible: () => {
            Q(!0), se.current.focus();
          },
        }),
        []
      );
    const Z = ae.shouldMount && !b && !g;
    T.useEffect(() => {
      K && w && !b && ae.pulsate();
    }, [b, w, K, ae]);
    const ne = Ua(ae, "start", L, x),
      fe = Ua(ae, "stop", D, x),
      de = Ua(ae, "stop", k, x),
      ge = Ua(ae, "stop", q, x),
      pe = Ua(
        ae,
        "stop",
        (xe) => {
          K && xe.preventDefault(), W && W(xe);
        },
        x
      ),
      ye = Ua(ae, "start", V, x),
      X = Ua(ae, "stop", v, x),
      he = Ua(ae, "stop", F, x),
      me = Ua(
        ae,
        "stop",
        (xe) => {
          mc(xe.target) || Q(!1), C && C(xe);
        },
        !1
      ),
      ze = fr((xe) => {
        se.current || (se.current = xe.currentTarget),
          mc(xe.target) && (Q(!0), M && M(xe)),
          O && O(xe);
      }),
      Ee = () => {
        const xe = se.current;
        return m && m !== "button" && !(xe.tagName === "A" && xe.href);
      },
      Ue = fr((xe) => {
        w &&
          !xe.repeat &&
          K &&
          xe.key === " " &&
          ae.stop(xe, () => {
            ae.start(xe);
          }),
          xe.target === xe.currentTarget &&
            Ee() &&
            xe.key === " " &&
            xe.preventDefault(),
          E && E(xe),
          xe.target === xe.currentTarget &&
            Ee() &&
            xe.key === "Enter" &&
            !g &&
            (xe.preventDefault(), z && z(xe));
      }),
      it = fr((xe) => {
        w &&
          xe.key === " " &&
          K &&
          !xe.defaultPrevented &&
          ae.stop(xe, () => {
            ae.pulsate(xe);
          }),
          $ && $(xe),
          z &&
            xe.target === xe.currentTarget &&
            Ee() &&
            xe.key === " " &&
            !xe.defaultPrevented &&
            z(xe);
      });
    let dt = m;
    dt === "button" && (J.href || J.to) && (dt = R);
    const tt = {};
    dt === "button"
      ? ((tt.type = N === void 0 ? "button" : N), (tt.disabled = g))
      : (!J.href && !J.to && (tt.role = "button"),
        g && (tt["aria-disabled"] = g));
    const Bt = Ut(i, se),
      nt = {
        ...l,
        centerRipple: f,
        component: m,
        disabled: g,
        disableRipple: b,
        disableTouchRipple: x,
        focusRipple: w,
        tabIndex: I,
        focusVisible: K,
      },
      Qe = JC(nt);
    return p.jsxs(eT, {
      as: dt,
      className: Ae(Qe.root, h),
      ownerState: nt,
      onBlur: me,
      onClick: z,
      onContextMenu: fe,
      onFocus: ze,
      onKeyDown: Ue,
      onKeyUp: it,
      onMouseDown: ne,
      onMouseLeave: pe,
      onMouseUp: ge,
      onDragLeave: de,
      onTouchEnd: X,
      onTouchMove: he,
      onTouchStart: ye,
      ref: Bt,
      tabIndex: g ? -1 : I,
      type: N,
      ...tt,
      ...J,
      children: [d, Z ? p.jsx(KC, { ref: j, center: f, ...oe }) : null],
    });
  });
function Ua(n, r, i, l = !1) {
  return fr((c) => (i && i(c), l || n[r](c), !0));
}
function tT(n) {
  return typeof n.main == "string";
}
function nT(n, r = []) {
  if (!tT(n)) return !1;
  for (const i of r)
    if (!n.hasOwnProperty(i) || typeof n[i] != "string") return !1;
  return !0;
}
function Gn(n = []) {
  return ([, r]) => r && nT(r, n);
}
function aT(n) {
  return qe("MuiAlert", n);
}
const qy = ke("MuiAlert", [
  "root",
  "action",
  "icon",
  "message",
  "filled",
  "colorSuccess",
  "colorInfo",
  "colorWarning",
  "colorError",
  "filledSuccess",
  "filledInfo",
  "filledWarning",
  "filledError",
  "outlined",
  "outlinedSuccess",
  "outlinedInfo",
  "outlinedWarning",
  "outlinedError",
  "standard",
  "standardSuccess",
  "standardInfo",
  "standardWarning",
  "standardError",
]);
function rT(n) {
  return qe("MuiCircularProgress", n);
}
ke("MuiCircularProgress", [
  "root",
  "determinate",
  "indeterminate",
  "colorPrimary",
  "colorSecondary",
  "svg",
  "circle",
  "circleDeterminate",
  "circleIndeterminate",
  "circleDisableShrink",
]);
const ur = 44,
  zd = jl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  Dd = jl`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  oT =
    typeof zd != "string"
      ? Vd`
        animation: ${zd} 1.4s linear infinite;
      `
      : null,
  iT =
    typeof Dd != "string"
      ? Vd`
        animation: ${Dd} 1.4s ease-in-out infinite;
      `
      : null,
  lT = (n) => {
    const { classes: r, variant: i, color: l, disableShrink: c } = n,
      f = {
        root: ["root", i, `color${Te(l)}`],
        svg: ["svg"],
        circle: ["circle", `circle${Te(i)}`, c && "circleDisableShrink"],
      };
    return Ge(f, rT, r);
  },
  sT = ie("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, r[i.variant], r[`color${Te(i.color)}`]];
    },
  })(
    rt(({ theme: n }) => ({
      display: "inline-block",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: n.transitions.create("transform") },
        },
        {
          props: { variant: "indeterminate" },
          style: oT || { animation: `${zd} 1.4s linear infinite` },
        },
        ...Object.entries(n.palette)
          .filter(Gn())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (n.vars || n).palette[r].main },
          })),
      ],
    }))
  ),
  cT = ie("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (n, r) => r.svg,
  })({ display: "block" }),
  uT = ie("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.circle,
        r[`circle${Te(i.variant)}`],
        i.disableShrink && r.circleDisableShrink,
      ];
    },
  })(
    rt(({ theme: n }) => ({
      stroke: "currentColor",
      variants: [
        {
          props: { variant: "determinate" },
          style: { transition: n.transitions.create("stroke-dashoffset") },
        },
        {
          props: { variant: "indeterminate" },
          style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: r }) =>
            r.variant === "indeterminate" && !r.disableShrink,
          style: iT || { animation: `${Dd} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  $c = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiCircularProgress" }),
      {
        className: c,
        color: f = "primary",
        disableShrink: d = !1,
        size: h = 40,
        style: m,
        thickness: g = 3.6,
        value: b = 0,
        variant: x = "indeterminate",
        ...w
      } = l,
      A = {
        ...l,
        color: f,
        disableShrink: d,
        size: h,
        thickness: g,
        value: b,
        variant: x,
      },
      R = lT(A),
      C = {},
      z = {},
      D = {};
    if (x === "determinate") {
      const k = 2 * Math.PI * ((ur - g) / 2);
      (C.strokeDasharray = k.toFixed(3)),
        (D["aria-valuenow"] = Math.round(b)),
        (C.strokeDashoffset = `${(((100 - b) / 100) * k).toFixed(3)}px`),
        (z.transform = "rotate(-90deg)");
    }
    return p.jsx(sT, {
      className: Ae(R.root, c),
      style: { width: h, height: h, ...z, ...m },
      ownerState: A,
      ref: i,
      role: "progressbar",
      ...D,
      ...w,
      children: p.jsx(cT, {
        className: R.svg,
        ownerState: A,
        viewBox: `${ur / 2} ${ur / 2} ${ur} ${ur}`,
        children: p.jsx(uT, {
          className: R.circle,
          style: C,
          ownerState: A,
          cx: ur,
          cy: ur,
          r: (ur - g) / 2,
          fill: "none",
          strokeWidth: g,
        }),
      }),
    });
  });
function fT(n) {
  return qe("MuiIconButton", n);
}
const Gy = ke("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "loading",
    "loadingIndicator",
    "loadingWrapper",
  ]),
  dT = (n) => {
    const {
        classes: r,
        disabled: i,
        color: l,
        edge: c,
        size: f,
        loading: d,
      } = n,
      h = {
        root: [
          "root",
          d && "loading",
          i && "disabled",
          l !== "default" && `color${Te(l)}`,
          c && `edge${Te(c)}`,
          `size${Te(f)}`,
        ],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      };
    return Ge(h, fT, r);
  },
  pT = ie(ip, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        i.loading && r.loading,
        i.color !== "default" && r[`color${Te(i.color)}`],
        i.edge && r[`edge${Te(i.edge)}`],
        r[`size${Te(i.size)}`],
      ];
    },
  })(
    rt(({ theme: n }) => ({
      textAlign: "center",
      flex: "0 0 auto",
      fontSize: n.typography.pxToRem(24),
      padding: 8,
      borderRadius: "50%",
      color: (n.vars || n).palette.action.active,
      transition: n.transitions.create("background-color", {
        duration: n.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (r) => !r.disableRipple,
          style: {
            "--IconButton-hoverBg": n.vars
              ? `rgba(${n.vars.palette.action.activeChannel} / ${n.vars.palette.action.hoverOpacity})`
              : tn(n.palette.action.active, n.palette.action.hoverOpacity),
            "&:hover": {
              backgroundColor: "var(--IconButton-hoverBg)",
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        { props: { edge: "start" }, style: { marginLeft: -12 } },
        { props: { edge: "start", size: "small" }, style: { marginLeft: -3 } },
        { props: { edge: "end" }, style: { marginRight: -12 } },
        { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
      ],
    })),
    rt(({ theme: n }) => ({
      variants: [
        { props: { color: "inherit" }, style: { color: "inherit" } },
        ...Object.entries(n.palette)
          .filter(Gn())
          .map(([r]) => ({
            props: { color: r },
            style: { color: (n.vars || n).palette[r].main },
          })),
        ...Object.entries(n.palette)
          .filter(Gn())
          .map(([r]) => ({
            props: { color: r },
            style: {
              "--IconButton-hoverBg": n.vars
                ? `rgba(${(n.vars || n).palette[r].mainChannel} / ${
                    n.vars.palette.action.hoverOpacity
                  })`
                : tn(
                    (n.vars || n).palette[r].main,
                    n.palette.action.hoverOpacity
                  ),
            },
          })),
        {
          props: { size: "small" },
          style: { padding: 5, fontSize: n.typography.pxToRem(18) },
        },
        {
          props: { size: "large" },
          style: { padding: 12, fontSize: n.typography.pxToRem(28) },
        },
      ],
      [`&.${Gy.disabled}`]: {
        backgroundColor: "transparent",
        color: (n.vars || n).palette.action.disabled,
      },
      [`&.${Gy.loading}`]: { color: "transparent" },
    }))
  ),
  hT = ie("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (n, r) => r.loadingIndicator,
  })(({ theme: n }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (n.vars || n).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: "flex" } }],
  })),
  At = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiIconButton" }),
      {
        edge: c = !1,
        children: f,
        className: d,
        color: h = "default",
        disabled: m = !1,
        disableFocusRipple: g = !1,
        size: b = "medium",
        id: x,
        loading: w = null,
        loadingIndicator: A,
        ...R
      } = l,
      C = Jo(x),
      z = A ?? p.jsx($c, { "aria-labelledby": C, color: "inherit", size: 16 }),
      D = {
        ...l,
        edge: c,
        color: h,
        disabled: m,
        disableFocusRipple: g,
        loading: w,
        loadingIndicator: z,
        size: b,
      },
      k = dT(D);
    return p.jsxs(pT, {
      id: w ? C : x,
      className: Ae(k.root, d),
      centerRipple: !0,
      focusRipple: !g,
      disabled: m || w,
      ref: i,
      ...R,
      ownerState: D,
      children: [
        typeof w == "boolean" &&
          p.jsx("span", {
            className: k.loadingWrapper,
            style: { display: "contents" },
            children: p.jsx(hT, {
              className: k.loadingIndicator,
              ownerState: D,
              children: w && z,
            }),
          }),
        f,
      ],
    });
  }),
  mT = Qn(
    p.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  gT = Qn(
    p.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  yT = Qn(
    p.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  vT = Qn(
    p.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  bT = Qn(
    p.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  xT = (n) => {
    const { variant: r, color: i, severity: l, classes: c } = n,
      f = {
        root: ["root", `color${Te(i || l)}`, `${r}${Te(i || l)}`, `${r}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return Ge(f, aT, c);
  },
  ST = ie(Fc, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        r[i.variant],
        r[`${i.variant}${Te(i.color || i.severity)}`],
      ];
    },
  })(
    rt(({ theme: n }) => {
      const r = n.palette.mode === "light" ? Tl : El,
        i = n.palette.mode === "light" ? El : Tl;
      return {
        ...n.typography.body2,
        backgroundColor: "transparent",
        display: "flex",
        padding: "6px 16px",
        variants: [
          ...Object.entries(n.palette)
            .filter(Gn(["light"]))
            .map(([l]) => ({
              props: { colorSeverity: l, variant: "standard" },
              style: {
                color: n.vars
                  ? n.vars.palette.Alert[`${l}Color`]
                  : r(n.palette[l].light, 0.6),
                backgroundColor: n.vars
                  ? n.vars.palette.Alert[`${l}StandardBg`]
                  : i(n.palette[l].light, 0.9),
                [`& .${qy.icon}`]: n.vars
                  ? { color: n.vars.palette.Alert[`${l}IconColor`] }
                  : { color: n.palette[l].main },
              },
            })),
          ...Object.entries(n.palette)
            .filter(Gn(["light"]))
            .map(([l]) => ({
              props: { colorSeverity: l, variant: "outlined" },
              style: {
                color: n.vars
                  ? n.vars.palette.Alert[`${l}Color`]
                  : r(n.palette[l].light, 0.6),
                border: `1px solid ${(n.vars || n).palette[l].light}`,
                [`& .${qy.icon}`]: n.vars
                  ? { color: n.vars.palette.Alert[`${l}IconColor`] }
                  : { color: n.palette[l].main },
              },
            })),
          ...Object.entries(n.palette)
            .filter(Gn(["dark"]))
            .map(([l]) => ({
              props: { colorSeverity: l, variant: "filled" },
              style: {
                fontWeight: n.typography.fontWeightMedium,
                ...(n.vars
                  ? {
                      color: n.vars.palette.Alert[`${l}FilledColor`],
                      backgroundColor: n.vars.palette.Alert[`${l}FilledBg`],
                    }
                  : {
                      backgroundColor:
                        n.palette.mode === "dark"
                          ? n.palette[l].dark
                          : n.palette[l].main,
                      color: n.palette.getContrastText(n.palette[l].main),
                    }),
              },
            })),
        ],
      };
    })
  ),
  CT = ie("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (n, r) => r.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  TT = ie("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (n, r) => r.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  ET = ie("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (n, r) => r.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Iy = {
    success: p.jsx(mT, { fontSize: "inherit" }),
    warning: p.jsx(gT, { fontSize: "inherit" }),
    error: p.jsx(yT, { fontSize: "inherit" }),
    info: p.jsx(vT, { fontSize: "inherit" }),
  },
  RT = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiAlert" }),
      {
        action: c,
        children: f,
        className: d,
        closeText: h = "Close",
        color: m,
        components: g = {},
        componentsProps: b = {},
        icon: x,
        iconMapping: w = Iy,
        onClose: A,
        role: R = "alert",
        severity: C = "success",
        slotProps: z = {},
        slots: D = {},
        variant: k = "standard",
        ...O
      } = l,
      M = { ...l, color: m, severity: C, variant: k, colorSeverity: m || C },
      E = xT(M),
      $ = {
        slots: { closeButton: g.CloseButton, closeIcon: g.CloseIcon, ...D },
        slotProps: { ...b, ...z },
      },
      [L, W] = ot("root", {
        ref: i,
        shouldForwardComponentProp: !0,
        className: Ae(E.root, d),
        elementType: ST,
        externalForwardedProps: { ...$, ...O },
        ownerState: M,
        additionalProps: { role: R, elevation: 0 },
      }),
      [q, v] = ot("icon", {
        className: E.icon,
        elementType: CT,
        externalForwardedProps: $,
        ownerState: M,
      }),
      [F, V] = ot("message", {
        className: E.message,
        elementType: TT,
        externalForwardedProps: $,
        ownerState: M,
      }),
      [I, oe] = ot("action", {
        className: E.action,
        elementType: ET,
        externalForwardedProps: $,
        ownerState: M,
      }),
      [P, N] = ot("closeButton", {
        elementType: At,
        externalForwardedProps: $,
        ownerState: M,
      }),
      [J, se] = ot("closeIcon", {
        elementType: bT,
        externalForwardedProps: $,
        ownerState: M,
      });
    return p.jsxs(L, {
      ...W,
      children: [
        x !== !1 ? p.jsx(q, { ...v, children: x || w[C] || Iy[C] }) : null,
        p.jsx(F, { ...V, children: f }),
        c != null ? p.jsx(I, { ...oe, children: c }) : null,
        c == null && A
          ? p.jsx(I, {
              ...oe,
              children: p.jsx(P, {
                size: "small",
                "aria-label": h,
                title: h,
                color: "inherit",
                onClick: A,
                ...N,
                children: p.jsx(J, { fontSize: "small", ...se }),
              }),
            })
          : null,
      ],
    });
  });
function wT(n) {
  return qe("MuiTypography", n);
}
ke("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const AT = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  MT = wC(),
  OT = (n) => {
    const {
        align: r,
        gutterBottom: i,
        noWrap: l,
        paragraph: c,
        variant: f,
        classes: d,
      } = n,
      h = {
        root: [
          "root",
          f,
          n.align !== "inherit" && `align${Te(r)}`,
          i && "gutterBottom",
          l && "noWrap",
          c && "paragraph",
        ],
      };
    return Ge(h, wT, d);
  },
  BT = ie("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        i.variant && r[i.variant],
        i.align !== "inherit" && r[`align${Te(i.align)}`],
        i.noWrap && r.noWrap,
        i.gutterBottom && r.gutterBottom,
        i.paragraph && r.paragraph,
      ];
    },
  })(
    rt(({ theme: n }) => {
      var r;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: "inherit" },
            style: {
              font: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          },
          ...Object.entries(n.typography)
            .filter(([i, l]) => i !== "inherit" && l && typeof l == "object")
            .map(([i, l]) => ({ props: { variant: i }, style: l })),
          ...Object.entries(n.palette)
            .filter(Gn())
            .map(([i]) => ({
              props: { color: i },
              style: { color: (n.vars || n).palette[i].main },
            })),
          ...Object.entries(((r = n.palette) == null ? void 0 : r.text) || {})
            .filter(([, i]) => typeof i == "string")
            .map(([i]) => ({
              props: { color: `text${Te(i)}` },
              style: { color: (n.vars || n).palette.text[i] },
            })),
          {
            props: ({ ownerState: i }) => i.align !== "inherit",
            style: { textAlign: "var(--Typography-textAlign)" },
          },
          {
            props: ({ ownerState: i }) => i.noWrap,
            style: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          },
          {
            props: ({ ownerState: i }) => i.gutterBottom,
            style: { marginBottom: "0.35em" },
          },
          {
            props: ({ ownerState: i }) => i.paragraph,
            style: { marginBottom: 16 },
          },
        ],
      };
    })
  ),
  Yy = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  ce = T.forwardRef(function (r, i) {
    const { color: l, ...c } = Ye({ props: r, name: "MuiTypography" }),
      f = !AT[l],
      d = MT({ ...c, ...(f && { color: l }) }),
      {
        align: h = "inherit",
        className: m,
        component: g,
        gutterBottom: b = !1,
        noWrap: x = !1,
        paragraph: w = !1,
        variant: A = "body1",
        variantMapping: R = Yy,
        ...C
      } = d,
      z = {
        ...d,
        align: h,
        color: l,
        className: m,
        component: g,
        gutterBottom: b,
        noWrap: x,
        paragraph: w,
        variant: A,
        variantMapping: R,
      },
      D = g || (w ? "p" : R[A] || Yy[A]) || "span",
      k = OT(z);
    return p.jsx(BT, {
      as: D,
      ref: i,
      className: Ae(k.root, m),
      ...C,
      ownerState: z,
      style: {
        ...(h !== "inherit" && { "--Typography-textAlign": h }),
        ...C.style,
      },
    });
  });
var mn = "top",
  Wn = "bottom",
  Vn = "right",
  gn = "left",
  lp = "auto",
  Nl = [mn, Wn, Vn, gn],
  Wo = "start",
  Rl = "end",
  jT = "clippingParents",
  y0 = "viewport",
  al = "popper",
  zT = "reference",
  Wy = Nl.reduce(function (n, r) {
    return n.concat([r + "-" + Wo, r + "-" + Rl]);
  }, []),
  v0 = [].concat(Nl, [lp]).reduce(function (n, r) {
    return n.concat([r, r + "-" + Wo, r + "-" + Rl]);
  }, []),
  DT = "beforeRead",
  kT = "read",
  NT = "afterRead",
  FT = "beforeMain",
  $T = "main",
  UT = "afterMain",
  _T = "beforeWrite",
  LT = "write",
  HT = "afterWrite",
  PT = [DT, kT, NT, FT, $T, UT, _T, LT, HT];
function ya(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function On(n) {
  if (n == null) return window;
  if (n.toString() !== "[object Window]") {
    var r = n.ownerDocument;
    return (r && r.defaultView) || window;
  }
  return n;
}
function Ir(n) {
  var r = On(n).Element;
  return n instanceof r || n instanceof Element;
}
function In(n) {
  var r = On(n).HTMLElement;
  return n instanceof r || n instanceof HTMLElement;
}
function sp(n) {
  if (typeof ShadowRoot > "u") return !1;
  var r = On(n).ShadowRoot;
  return n instanceof r || n instanceof ShadowRoot;
}
function qT(n) {
  var r = n.state;
  Object.keys(r.elements).forEach(function (i) {
    var l = r.styles[i] || {},
      c = r.attributes[i] || {},
      f = r.elements[i];
    !In(f) ||
      !ya(f) ||
      (Object.assign(f.style, l),
      Object.keys(c).forEach(function (d) {
        var h = c[d];
        h === !1 ? f.removeAttribute(d) : f.setAttribute(d, h === !0 ? "" : h);
      }));
  });
}
function GT(n) {
  var r = n.state,
    i = {
      popper: {
        position: r.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(r.elements.popper.style, i.popper),
    (r.styles = i),
    r.elements.arrow && Object.assign(r.elements.arrow.style, i.arrow),
    function () {
      Object.keys(r.elements).forEach(function (l) {
        var c = r.elements[l],
          f = r.attributes[l] || {},
          d = Object.keys(r.styles.hasOwnProperty(l) ? r.styles[l] : i[l]),
          h = d.reduce(function (m, g) {
            return (m[g] = ""), m;
          }, {});
        !In(c) ||
          !ya(c) ||
          (Object.assign(c.style, h),
          Object.keys(f).forEach(function (m) {
            c.removeAttribute(m);
          }));
      });
    }
  );
}
const IT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qT,
  effect: GT,
  requires: ["computeStyles"],
};
function ma(n) {
  return n.split("-")[0];
}
var Pr = Math.max,
  bc = Math.min,
  Vo = Math.round;
function kd() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands)
    ? n.brands
        .map(function (r) {
          return r.brand + "/" + r.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function b0() {
  return !/^((?!chrome|android).)*safari/i.test(kd());
}
function Xo(n, r, i) {
  r === void 0 && (r = !1), i === void 0 && (i = !1);
  var l = n.getBoundingClientRect(),
    c = 1,
    f = 1;
  r &&
    In(n) &&
    ((c = (n.offsetWidth > 0 && Vo(l.width) / n.offsetWidth) || 1),
    (f = (n.offsetHeight > 0 && Vo(l.height) / n.offsetHeight) || 1));
  var d = Ir(n) ? On(n) : window,
    h = d.visualViewport,
    m = !b0() && i,
    g = (l.left + (m && h ? h.offsetLeft : 0)) / c,
    b = (l.top + (m && h ? h.offsetTop : 0)) / f,
    x = l.width / c,
    w = l.height / f;
  return {
    width: x,
    height: w,
    top: b,
    right: g + x,
    bottom: b + w,
    left: g,
    x: g,
    y: b,
  };
}
function cp(n) {
  var r = Xo(n),
    i = n.offsetWidth,
    l = n.offsetHeight;
  return (
    Math.abs(r.width - i) <= 1 && (i = r.width),
    Math.abs(r.height - l) <= 1 && (l = r.height),
    { x: n.offsetLeft, y: n.offsetTop, width: i, height: l }
  );
}
function x0(n, r) {
  var i = r.getRootNode && r.getRootNode();
  if (n.contains(r)) return !0;
  if (i && sp(i)) {
    var l = r;
    do {
      if (l && n.isSameNode(l)) return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Ha(n) {
  return On(n).getComputedStyle(n);
}
function YT(n) {
  return ["table", "td", "th"].indexOf(ya(n)) >= 0;
}
function pr(n) {
  return ((Ir(n) ? n.ownerDocument : n.document) || window.document)
    .documentElement;
}
function Uc(n) {
  return ya(n) === "html"
    ? n
    : n.assignedSlot || n.parentNode || (sp(n) ? n.host : null) || pr(n);
}
function Vy(n) {
  return !In(n) || Ha(n).position === "fixed" ? null : n.offsetParent;
}
function WT(n) {
  var r = /firefox/i.test(kd()),
    i = /Trident/i.test(kd());
  if (i && In(n)) {
    var l = Ha(n);
    if (l.position === "fixed") return null;
  }
  var c = Uc(n);
  for (sp(c) && (c = c.host); In(c) && ["html", "body"].indexOf(ya(c)) < 0; ) {
    var f = Ha(c);
    if (
      f.transform !== "none" ||
      f.perspective !== "none" ||
      f.contain === "paint" ||
      ["transform", "perspective"].indexOf(f.willChange) !== -1 ||
      (r && f.willChange === "filter") ||
      (r && f.filter && f.filter !== "none")
    )
      return c;
    c = c.parentNode;
  }
  return null;
}
function Fl(n) {
  for (var r = On(n), i = Vy(n); i && YT(i) && Ha(i).position === "static"; )
    i = Vy(i);
  return i &&
    (ya(i) === "html" || (ya(i) === "body" && Ha(i).position === "static"))
    ? r
    : i || WT(n) || r;
}
function up(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function ml(n, r, i) {
  return Pr(n, bc(r, i));
}
function VT(n, r, i) {
  var l = ml(n, r, i);
  return l > i ? i : l;
}
function S0() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function C0(n) {
  return Object.assign({}, S0(), n);
}
function T0(n, r) {
  return r.reduce(function (i, l) {
    return (i[l] = n), i;
  }, {});
}
var XT = function (r, i) {
  return (
    (r =
      typeof r == "function"
        ? r(Object.assign({}, i.rects, { placement: i.placement }))
        : r),
    C0(typeof r != "number" ? r : T0(r, Nl))
  );
};
function KT(n) {
  var r,
    i = n.state,
    l = n.name,
    c = n.options,
    f = i.elements.arrow,
    d = i.modifiersData.popperOffsets,
    h = ma(i.placement),
    m = up(h),
    g = [gn, Vn].indexOf(h) >= 0,
    b = g ? "height" : "width";
  if (!(!f || !d)) {
    var x = XT(c.padding, i),
      w = cp(f),
      A = m === "y" ? mn : gn,
      R = m === "y" ? Wn : Vn,
      C =
        i.rects.reference[b] + i.rects.reference[m] - d[m] - i.rects.popper[b],
      z = d[m] - i.rects.reference[m],
      D = Fl(f),
      k = D ? (m === "y" ? D.clientHeight || 0 : D.clientWidth || 0) : 0,
      O = C / 2 - z / 2,
      M = x[A],
      E = k - w[b] - x[R],
      $ = k / 2 - w[b] / 2 + O,
      L = ml(M, $, E),
      W = m;
    i.modifiersData[l] = ((r = {}), (r[W] = L), (r.centerOffset = L - $), r);
  }
}
function QT(n) {
  var r = n.state,
    i = n.options,
    l = i.element,
    c = l === void 0 ? "[data-popper-arrow]" : l;
  c != null &&
    ((typeof c == "string" && ((c = r.elements.popper.querySelector(c)), !c)) ||
      (x0(r.elements.popper, c) && (r.elements.arrow = c)));
}
const ZT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: KT,
  effect: QT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Ko(n) {
  return n.split("-")[1];
}
var JT = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function eE(n, r) {
  var i = n.x,
    l = n.y,
    c = r.devicePixelRatio || 1;
  return { x: Vo(i * c) / c || 0, y: Vo(l * c) / c || 0 };
}
function Xy(n) {
  var r,
    i = n.popper,
    l = n.popperRect,
    c = n.placement,
    f = n.variation,
    d = n.offsets,
    h = n.position,
    m = n.gpuAcceleration,
    g = n.adaptive,
    b = n.roundOffsets,
    x = n.isFixed,
    w = d.x,
    A = w === void 0 ? 0 : w,
    R = d.y,
    C = R === void 0 ? 0 : R,
    z = typeof b == "function" ? b({ x: A, y: C }) : { x: A, y: C };
  (A = z.x), (C = z.y);
  var D = d.hasOwnProperty("x"),
    k = d.hasOwnProperty("y"),
    O = gn,
    M = mn,
    E = window;
  if (g) {
    var $ = Fl(i),
      L = "clientHeight",
      W = "clientWidth";
    if (
      ($ === On(i) &&
        (($ = pr(i)),
        Ha($).position !== "static" &&
          h === "absolute" &&
          ((L = "scrollHeight"), (W = "scrollWidth"))),
      ($ = $),
      c === mn || ((c === gn || c === Vn) && f === Rl))
    ) {
      M = Wn;
      var q = x && $ === E && E.visualViewport ? E.visualViewport.height : $[L];
      (C -= q - l.height), (C *= m ? 1 : -1);
    }
    if (c === gn || ((c === mn || c === Wn) && f === Rl)) {
      O = Vn;
      var v = x && $ === E && E.visualViewport ? E.visualViewport.width : $[W];
      (A -= v - l.width), (A *= m ? 1 : -1);
    }
  }
  var F = Object.assign({ position: h }, g && JT),
    V = b === !0 ? eE({ x: A, y: C }, On(i)) : { x: A, y: C };
  if (((A = V.x), (C = V.y), m)) {
    var I;
    return Object.assign(
      {},
      F,
      ((I = {}),
      (I[M] = k ? "0" : ""),
      (I[O] = D ? "0" : ""),
      (I.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + A + "px, " + C + "px)"
          : "translate3d(" + A + "px, " + C + "px, 0)"),
      I)
    );
  }
  return Object.assign(
    {},
    F,
    ((r = {}),
    (r[M] = k ? C + "px" : ""),
    (r[O] = D ? A + "px" : ""),
    (r.transform = ""),
    r)
  );
}
function tE(n) {
  var r = n.state,
    i = n.options,
    l = i.gpuAcceleration,
    c = l === void 0 ? !0 : l,
    f = i.adaptive,
    d = f === void 0 ? !0 : f,
    h = i.roundOffsets,
    m = h === void 0 ? !0 : h,
    g = {
      placement: ma(r.placement),
      variation: Ko(r.placement),
      popper: r.elements.popper,
      popperRect: r.rects.popper,
      gpuAcceleration: c,
      isFixed: r.options.strategy === "fixed",
    };
  r.modifiersData.popperOffsets != null &&
    (r.styles.popper = Object.assign(
      {},
      r.styles.popper,
      Xy(
        Object.assign({}, g, {
          offsets: r.modifiersData.popperOffsets,
          position: r.options.strategy,
          adaptive: d,
          roundOffsets: m,
        })
      )
    )),
    r.modifiersData.arrow != null &&
      (r.styles.arrow = Object.assign(
        {},
        r.styles.arrow,
        Xy(
          Object.assign({}, g, {
            offsets: r.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: m,
          })
        )
      )),
    (r.attributes.popper = Object.assign({}, r.attributes.popper, {
      "data-popper-placement": r.placement,
    }));
}
const nE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: tE,
  data: {},
};
var Zs = { passive: !0 };
function aE(n) {
  var r = n.state,
    i = n.instance,
    l = n.options,
    c = l.scroll,
    f = c === void 0 ? !0 : c,
    d = l.resize,
    h = d === void 0 ? !0 : d,
    m = On(r.elements.popper),
    g = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return (
    f &&
      g.forEach(function (b) {
        b.addEventListener("scroll", i.update, Zs);
      }),
    h && m.addEventListener("resize", i.update, Zs),
    function () {
      f &&
        g.forEach(function (b) {
          b.removeEventListener("scroll", i.update, Zs);
        }),
        h && m.removeEventListener("resize", i.update, Zs);
    }
  );
}
const rE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: aE,
  data: {},
};
var oE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function sc(n) {
  return n.replace(/left|right|bottom|top/g, function (r) {
    return oE[r];
  });
}
var iE = { start: "end", end: "start" };
function Ky(n) {
  return n.replace(/start|end/g, function (r) {
    return iE[r];
  });
}
function fp(n) {
  var r = On(n),
    i = r.pageXOffset,
    l = r.pageYOffset;
  return { scrollLeft: i, scrollTop: l };
}
function dp(n) {
  return Xo(pr(n)).left + fp(n).scrollLeft;
}
function lE(n, r) {
  var i = On(n),
    l = pr(n),
    c = i.visualViewport,
    f = l.clientWidth,
    d = l.clientHeight,
    h = 0,
    m = 0;
  if (c) {
    (f = c.width), (d = c.height);
    var g = b0();
    (g || (!g && r === "fixed")) && ((h = c.offsetLeft), (m = c.offsetTop));
  }
  return { width: f, height: d, x: h + dp(n), y: m };
}
function sE(n) {
  var r,
    i = pr(n),
    l = fp(n),
    c = (r = n.ownerDocument) == null ? void 0 : r.body,
    f = Pr(
      i.scrollWidth,
      i.clientWidth,
      c ? c.scrollWidth : 0,
      c ? c.clientWidth : 0
    ),
    d = Pr(
      i.scrollHeight,
      i.clientHeight,
      c ? c.scrollHeight : 0,
      c ? c.clientHeight : 0
    ),
    h = -l.scrollLeft + dp(n),
    m = -l.scrollTop;
  return (
    Ha(c || i).direction === "rtl" &&
      (h += Pr(i.clientWidth, c ? c.clientWidth : 0) - f),
    { width: f, height: d, x: h, y: m }
  );
}
function pp(n) {
  var r = Ha(n),
    i = r.overflow,
    l = r.overflowX,
    c = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + c + l);
}
function E0(n) {
  return ["html", "body", "#document"].indexOf(ya(n)) >= 0
    ? n.ownerDocument.body
    : In(n) && pp(n)
    ? n
    : E0(Uc(n));
}
function gl(n, r) {
  var i;
  r === void 0 && (r = []);
  var l = E0(n),
    c = l === ((i = n.ownerDocument) == null ? void 0 : i.body),
    f = On(l),
    d = c ? [f].concat(f.visualViewport || [], pp(l) ? l : []) : l,
    h = r.concat(d);
  return c ? h : h.concat(gl(Uc(d)));
}
function Nd(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height,
  });
}
function cE(n, r) {
  var i = Xo(n, !1, r === "fixed");
  return (
    (i.top = i.top + n.clientTop),
    (i.left = i.left + n.clientLeft),
    (i.bottom = i.top + n.clientHeight),
    (i.right = i.left + n.clientWidth),
    (i.width = n.clientWidth),
    (i.height = n.clientHeight),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function Qy(n, r, i) {
  return r === y0 ? Nd(lE(n, i)) : Ir(r) ? cE(r, i) : Nd(sE(pr(n)));
}
function uE(n) {
  var r = gl(Uc(n)),
    i = ["absolute", "fixed"].indexOf(Ha(n).position) >= 0,
    l = i && In(n) ? Fl(n) : n;
  return Ir(l)
    ? r.filter(function (c) {
        return Ir(c) && x0(c, l) && ya(c) !== "body";
      })
    : [];
}
function fE(n, r, i, l) {
  var c = r === "clippingParents" ? uE(n) : [].concat(r),
    f = [].concat(c, [i]),
    d = f[0],
    h = f.reduce(function (m, g) {
      var b = Qy(n, g, l);
      return (
        (m.top = Pr(b.top, m.top)),
        (m.right = bc(b.right, m.right)),
        (m.bottom = bc(b.bottom, m.bottom)),
        (m.left = Pr(b.left, m.left)),
        m
      );
    }, Qy(n, d, l));
  return (
    (h.width = h.right - h.left),
    (h.height = h.bottom - h.top),
    (h.x = h.left),
    (h.y = h.top),
    h
  );
}
function R0(n) {
  var r = n.reference,
    i = n.element,
    l = n.placement,
    c = l ? ma(l) : null,
    f = l ? Ko(l) : null,
    d = r.x + r.width / 2 - i.width / 2,
    h = r.y + r.height / 2 - i.height / 2,
    m;
  switch (c) {
    case mn:
      m = { x: d, y: r.y - i.height };
      break;
    case Wn:
      m = { x: d, y: r.y + r.height };
      break;
    case Vn:
      m = { x: r.x + r.width, y: h };
      break;
    case gn:
      m = { x: r.x - i.width, y: h };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  var g = c ? up(c) : null;
  if (g != null) {
    var b = g === "y" ? "height" : "width";
    switch (f) {
      case Wo:
        m[g] = m[g] - (r[b] / 2 - i[b] / 2);
        break;
      case Rl:
        m[g] = m[g] + (r[b] / 2 - i[b] / 2);
        break;
    }
  }
  return m;
}
function wl(n, r) {
  r === void 0 && (r = {});
  var i = r,
    l = i.placement,
    c = l === void 0 ? n.placement : l,
    f = i.strategy,
    d = f === void 0 ? n.strategy : f,
    h = i.boundary,
    m = h === void 0 ? jT : h,
    g = i.rootBoundary,
    b = g === void 0 ? y0 : g,
    x = i.elementContext,
    w = x === void 0 ? al : x,
    A = i.altBoundary,
    R = A === void 0 ? !1 : A,
    C = i.padding,
    z = C === void 0 ? 0 : C,
    D = C0(typeof z != "number" ? z : T0(z, Nl)),
    k = w === al ? zT : al,
    O = n.rects.popper,
    M = n.elements[R ? k : w],
    E = fE(Ir(M) ? M : M.contextElement || pr(n.elements.popper), m, b, d),
    $ = Xo(n.elements.reference),
    L = R0({ reference: $, element: O, placement: c }),
    W = Nd(Object.assign({}, O, L)),
    q = w === al ? W : $,
    v = {
      top: E.top - q.top + D.top,
      bottom: q.bottom - E.bottom + D.bottom,
      left: E.left - q.left + D.left,
      right: q.right - E.right + D.right,
    },
    F = n.modifiersData.offset;
  if (w === al && F) {
    var V = F[c];
    Object.keys(v).forEach(function (I) {
      var oe = [Vn, Wn].indexOf(I) >= 0 ? 1 : -1,
        P = [mn, Wn].indexOf(I) >= 0 ? "y" : "x";
      v[I] += V[P] * oe;
    });
  }
  return v;
}
function dE(n, r) {
  r === void 0 && (r = {});
  var i = r,
    l = i.placement,
    c = i.boundary,
    f = i.rootBoundary,
    d = i.padding,
    h = i.flipVariations,
    m = i.allowedAutoPlacements,
    g = m === void 0 ? v0 : m,
    b = Ko(l),
    x = b
      ? h
        ? Wy
        : Wy.filter(function (R) {
            return Ko(R) === b;
          })
      : Nl,
    w = x.filter(function (R) {
      return g.indexOf(R) >= 0;
    });
  w.length === 0 && (w = x);
  var A = w.reduce(function (R, C) {
    return (
      (R[C] = wl(n, { placement: C, boundary: c, rootBoundary: f, padding: d })[
        ma(C)
      ]),
      R
    );
  }, {});
  return Object.keys(A).sort(function (R, C) {
    return A[R] - A[C];
  });
}
function pE(n) {
  if (ma(n) === lp) return [];
  var r = sc(n);
  return [Ky(n), r, Ky(r)];
}
function hE(n) {
  var r = n.state,
    i = n.options,
    l = n.name;
  if (!r.modifiersData[l]._skip) {
    for (
      var c = i.mainAxis,
        f = c === void 0 ? !0 : c,
        d = i.altAxis,
        h = d === void 0 ? !0 : d,
        m = i.fallbackPlacements,
        g = i.padding,
        b = i.boundary,
        x = i.rootBoundary,
        w = i.altBoundary,
        A = i.flipVariations,
        R = A === void 0 ? !0 : A,
        C = i.allowedAutoPlacements,
        z = r.options.placement,
        D = ma(z),
        k = D === z,
        O = m || (k || !R ? [sc(z)] : pE(z)),
        M = [z].concat(O).reduce(function (ne, fe) {
          return ne.concat(
            ma(fe) === lp
              ? dE(r, {
                  placement: fe,
                  boundary: b,
                  rootBoundary: x,
                  padding: g,
                  flipVariations: R,
                  allowedAutoPlacements: C,
                })
              : fe
          );
        }, []),
        E = r.rects.reference,
        $ = r.rects.popper,
        L = new Map(),
        W = !0,
        q = M[0],
        v = 0;
      v < M.length;
      v++
    ) {
      var F = M[v],
        V = ma(F),
        I = Ko(F) === Wo,
        oe = [mn, Wn].indexOf(V) >= 0,
        P = oe ? "width" : "height",
        N = wl(r, {
          placement: F,
          boundary: b,
          rootBoundary: x,
          altBoundary: w,
          padding: g,
        }),
        J = oe ? (I ? Vn : gn) : I ? Wn : mn;
      E[P] > $[P] && (J = sc(J));
      var se = sc(J),
        ae = [];
      if (
        (f && ae.push(N[V] <= 0),
        h && ae.push(N[J] <= 0, N[se] <= 0),
        ae.every(function (ne) {
          return ne;
        }))
      ) {
        (q = F), (W = !1);
        break;
      }
      L.set(F, ae);
    }
    if (W)
      for (
        var j = R ? 3 : 1,
          K = function (fe) {
            var de = M.find(function (ge) {
              var pe = L.get(ge);
              if (pe)
                return pe.slice(0, fe).every(function (ye) {
                  return ye;
                });
            });
            if (de) return (q = de), "break";
          },
          Q = j;
        Q > 0;
        Q--
      ) {
        var Z = K(Q);
        if (Z === "break") break;
      }
    r.placement !== q &&
      ((r.modifiersData[l]._skip = !0), (r.placement = q), (r.reset = !0));
  }
}
const mE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: hE,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Zy(n, r, i) {
  return (
    i === void 0 && (i = { x: 0, y: 0 }),
    {
      top: n.top - r.height - i.y,
      right: n.right - r.width + i.x,
      bottom: n.bottom - r.height + i.y,
      left: n.left - r.width - i.x,
    }
  );
}
function Jy(n) {
  return [mn, Vn, Wn, gn].some(function (r) {
    return n[r] >= 0;
  });
}
function gE(n) {
  var r = n.state,
    i = n.name,
    l = r.rects.reference,
    c = r.rects.popper,
    f = r.modifiersData.preventOverflow,
    d = wl(r, { elementContext: "reference" }),
    h = wl(r, { altBoundary: !0 }),
    m = Zy(d, l),
    g = Zy(h, c, f),
    b = Jy(m),
    x = Jy(g);
  (r.modifiersData[i] = {
    referenceClippingOffsets: m,
    popperEscapeOffsets: g,
    isReferenceHidden: b,
    hasPopperEscaped: x,
  }),
    (r.attributes.popper = Object.assign({}, r.attributes.popper, {
      "data-popper-reference-hidden": b,
      "data-popper-escaped": x,
    }));
}
const yE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gE,
};
function vE(n, r, i) {
  var l = ma(n),
    c = [gn, mn].indexOf(l) >= 0 ? -1 : 1,
    f = typeof i == "function" ? i(Object.assign({}, r, { placement: n })) : i,
    d = f[0],
    h = f[1];
  return (
    (d = d || 0),
    (h = (h || 0) * c),
    [gn, Vn].indexOf(l) >= 0 ? { x: h, y: d } : { x: d, y: h }
  );
}
function bE(n) {
  var r = n.state,
    i = n.options,
    l = n.name,
    c = i.offset,
    f = c === void 0 ? [0, 0] : c,
    d = v0.reduce(function (b, x) {
      return (b[x] = vE(x, r.rects, f)), b;
    }, {}),
    h = d[r.placement],
    m = h.x,
    g = h.y;
  r.modifiersData.popperOffsets != null &&
    ((r.modifiersData.popperOffsets.x += m),
    (r.modifiersData.popperOffsets.y += g)),
    (r.modifiersData[l] = d);
}
const xE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: bE,
};
function SE(n) {
  var r = n.state,
    i = n.name;
  r.modifiersData[i] = R0({
    reference: r.rects.reference,
    element: r.rects.popper,
    placement: r.placement,
  });
}
const CE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: SE,
  data: {},
};
function TE(n) {
  return n === "x" ? "y" : "x";
}
function EE(n) {
  var r = n.state,
    i = n.options,
    l = n.name,
    c = i.mainAxis,
    f = c === void 0 ? !0 : c,
    d = i.altAxis,
    h = d === void 0 ? !1 : d,
    m = i.boundary,
    g = i.rootBoundary,
    b = i.altBoundary,
    x = i.padding,
    w = i.tether,
    A = w === void 0 ? !0 : w,
    R = i.tetherOffset,
    C = R === void 0 ? 0 : R,
    z = wl(r, { boundary: m, rootBoundary: g, padding: x, altBoundary: b }),
    D = ma(r.placement),
    k = Ko(r.placement),
    O = !k,
    M = up(D),
    E = TE(M),
    $ = r.modifiersData.popperOffsets,
    L = r.rects.reference,
    W = r.rects.popper,
    q =
      typeof C == "function"
        ? C(Object.assign({}, r.rects, { placement: r.placement }))
        : C,
    v =
      typeof q == "number"
        ? { mainAxis: q, altAxis: q }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, q),
    F = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null,
    V = { x: 0, y: 0 };
  if ($) {
    if (f) {
      var I,
        oe = M === "y" ? mn : gn,
        P = M === "y" ? Wn : Vn,
        N = M === "y" ? "height" : "width",
        J = $[M],
        se = J + z[oe],
        ae = J - z[P],
        j = A ? -W[N] / 2 : 0,
        K = k === Wo ? L[N] : W[N],
        Q = k === Wo ? -W[N] : -L[N],
        Z = r.elements.arrow,
        ne = A && Z ? cp(Z) : { width: 0, height: 0 },
        fe = r.modifiersData["arrow#persistent"]
          ? r.modifiersData["arrow#persistent"].padding
          : S0(),
        de = fe[oe],
        ge = fe[P],
        pe = ml(0, L[N], ne[N]),
        ye = O ? L[N] / 2 - j - pe - de - v.mainAxis : K - pe - de - v.mainAxis,
        X = O ? -L[N] / 2 + j + pe + ge + v.mainAxis : Q + pe + ge + v.mainAxis,
        he = r.elements.arrow && Fl(r.elements.arrow),
        me = he ? (M === "y" ? he.clientTop || 0 : he.clientLeft || 0) : 0,
        ze = (I = F == null ? void 0 : F[M]) != null ? I : 0,
        Ee = J + ye - ze - me,
        Ue = J + X - ze,
        it = ml(A ? bc(se, Ee) : se, J, A ? Pr(ae, Ue) : ae);
      ($[M] = it), (V[M] = it - J);
    }
    if (h) {
      var dt,
        tt = M === "x" ? mn : gn,
        Bt = M === "x" ? Wn : Vn,
        nt = $[E],
        Qe = E === "y" ? "height" : "width",
        xe = nt + z[tt],
        ln = nt - z[Bt],
        Ze = [mn, gn].indexOf(D) !== -1,
        vn = (dt = F == null ? void 0 : F[E]) != null ? dt : 0,
        bn = Ze ? xe : nt - L[Qe] - W[Qe] - vn + v.altAxis,
        an = Ze ? nt + L[Qe] + W[Qe] - vn - v.altAxis : ln,
        Kt = A && Ze ? VT(bn, nt, an) : ml(A ? bn : xe, nt, A ? an : ln);
      ($[E] = Kt), (V[E] = Kt - nt);
    }
    r.modifiersData[l] = V;
  }
}
const RE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: EE,
  requiresIfExists: ["offset"],
};
function wE(n) {
  return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
}
function AE(n) {
  return n === On(n) || !In(n) ? fp(n) : wE(n);
}
function ME(n) {
  var r = n.getBoundingClientRect(),
    i = Vo(r.width) / n.offsetWidth || 1,
    l = Vo(r.height) / n.offsetHeight || 1;
  return i !== 1 || l !== 1;
}
function OE(n, r, i) {
  i === void 0 && (i = !1);
  var l = In(r),
    c = In(r) && ME(r),
    f = pr(r),
    d = Xo(n, c, i),
    h = { scrollLeft: 0, scrollTop: 0 },
    m = { x: 0, y: 0 };
  return (
    (l || (!l && !i)) &&
      ((ya(r) !== "body" || pp(f)) && (h = AE(r)),
      In(r)
        ? ((m = Xo(r, !0)), (m.x += r.clientLeft), (m.y += r.clientTop))
        : f && (m.x = dp(f))),
    {
      x: d.left + h.scrollLeft - m.x,
      y: d.top + h.scrollTop - m.y,
      width: d.width,
      height: d.height,
    }
  );
}
function BE(n) {
  var r = new Map(),
    i = new Set(),
    l = [];
  n.forEach(function (f) {
    r.set(f.name, f);
  });
  function c(f) {
    i.add(f.name);
    var d = [].concat(f.requires || [], f.requiresIfExists || []);
    d.forEach(function (h) {
      if (!i.has(h)) {
        var m = r.get(h);
        m && c(m);
      }
    }),
      l.push(f);
  }
  return (
    n.forEach(function (f) {
      i.has(f.name) || c(f);
    }),
    l
  );
}
function jE(n) {
  var r = BE(n);
  return PT.reduce(function (i, l) {
    return i.concat(
      r.filter(function (c) {
        return c.phase === l;
      })
    );
  }, []);
}
function zE(n) {
  var r;
  return function () {
    return (
      r ||
        (r = new Promise(function (i) {
          Promise.resolve().then(function () {
            (r = void 0), i(n());
          });
        })),
      r
    );
  };
}
function DE(n) {
  var r = n.reduce(function (i, l) {
    var c = i[l.name];
    return (
      (i[l.name] = c
        ? Object.assign({}, c, l, {
            options: Object.assign({}, c.options, l.options),
            data: Object.assign({}, c.data, l.data),
          })
        : l),
      i
    );
  }, {});
  return Object.keys(r).map(function (i) {
    return r[i];
  });
}
var ev = { placement: "bottom", modifiers: [], strategy: "absolute" };
function tv() {
  for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
    r[i] = arguments[i];
  return !r.some(function (l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function kE(n) {
  n === void 0 && (n = {});
  var r = n,
    i = r.defaultModifiers,
    l = i === void 0 ? [] : i,
    c = r.defaultOptions,
    f = c === void 0 ? ev : c;
  return function (h, m, g) {
    g === void 0 && (g = f);
    var b = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ev, f),
        modifiersData: {},
        elements: { reference: h, popper: m },
        attributes: {},
        styles: {},
      },
      x = [],
      w = !1,
      A = {
        state: b,
        setOptions: function (D) {
          var k = typeof D == "function" ? D(b.options) : D;
          C(),
            (b.options = Object.assign({}, f, b.options, k)),
            (b.scrollParents = {
              reference: Ir(h)
                ? gl(h)
                : h.contextElement
                ? gl(h.contextElement)
                : [],
              popper: gl(m),
            });
          var O = jE(DE([].concat(l, b.options.modifiers)));
          return (
            (b.orderedModifiers = O.filter(function (M) {
              return M.enabled;
            })),
            R(),
            A.update()
          );
        },
        forceUpdate: function () {
          if (!w) {
            var D = b.elements,
              k = D.reference,
              O = D.popper;
            if (tv(k, O)) {
              (b.rects = {
                reference: OE(k, Fl(O), b.options.strategy === "fixed"),
                popper: cp(O),
              }),
                (b.reset = !1),
                (b.placement = b.options.placement),
                b.orderedModifiers.forEach(function (v) {
                  return (b.modifiersData[v.name] = Object.assign({}, v.data));
                });
              for (var M = 0; M < b.orderedModifiers.length; M++) {
                if (b.reset === !0) {
                  (b.reset = !1), (M = -1);
                  continue;
                }
                var E = b.orderedModifiers[M],
                  $ = E.fn,
                  L = E.options,
                  W = L === void 0 ? {} : L,
                  q = E.name;
                typeof $ == "function" &&
                  (b = $({ state: b, options: W, name: q, instance: A }) || b);
              }
            }
          }
        },
        update: zE(function () {
          return new Promise(function (z) {
            A.forceUpdate(), z(b);
          });
        }),
        destroy: function () {
          C(), (w = !0);
        },
      };
    if (!tv(h, m)) return A;
    A.setOptions(g).then(function (z) {
      !w && g.onFirstUpdate && g.onFirstUpdate(z);
    });
    function R() {
      b.orderedModifiers.forEach(function (z) {
        var D = z.name,
          k = z.options,
          O = k === void 0 ? {} : k,
          M = z.effect;
        if (typeof M == "function") {
          var E = M({ state: b, name: D, instance: A, options: O }),
            $ = function () {};
          x.push(E || $);
        }
      });
    }
    function C() {
      x.forEach(function (z) {
        return z();
      }),
        (x = []);
    }
    return A;
  };
}
var NE = [rE, CE, nE, IT, xE, mE, RE, ZT, yE],
  FE = kE({ defaultModifiers: NE });
function $E(n) {
  return typeof n == "function" ? n() : n;
}
const w0 = T.forwardRef(function (r, i) {
  const { children: l, container: c, disablePortal: f = !1 } = r,
    [d, h] = T.useState(null),
    m = Ut(T.isValidElement(l) ? ei(l) : null, i);
  if (
    (ga(() => {
      f || h($E(c) || document.body);
    }, [c, f]),
    ga(() => {
      if (d && !f)
        return (
          Ed(i, d),
          () => {
            Ed(i, null);
          }
        );
    }, [i, d, f]),
    f)
  ) {
    if (T.isValidElement(l)) {
      const g = { ref: m };
      return T.cloneElement(l, g);
    }
    return l;
  }
  return d && m0.createPortal(l, d);
});
function UE(n) {
  return qe("MuiPopper", n);
}
ke("MuiPopper", ["root"]);
function _E(n, r) {
  if (r === "ltr") return n;
  switch (n) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return n;
  }
}
function Fd(n) {
  return typeof n == "function" ? n() : n;
}
function LE(n) {
  return n.nodeType !== void 0;
}
const HE = (n) => {
    const { classes: r } = n;
    return Ge({ root: ["root"] }, UE, r);
  },
  PE = {},
  qE = T.forwardRef(function (r, i) {
    const {
        anchorEl: l,
        children: c,
        direction: f,
        disablePortal: d,
        modifiers: h,
        open: m,
        placement: g,
        popperOptions: b,
        popperRef: x,
        slotProps: w = {},
        slots: A = {},
        TransitionProps: R,
        ownerState: C,
        ...z
      } = r,
      D = T.useRef(null),
      k = Ut(D, i),
      O = T.useRef(null),
      M = Ut(O, x),
      E = T.useRef(M);
    ga(() => {
      E.current = M;
    }, [M]),
      T.useImperativeHandle(x, () => O.current, []);
    const $ = _E(g, f),
      [L, W] = T.useState($),
      [q, v] = T.useState(Fd(l));
    T.useEffect(() => {
      O.current && O.current.forceUpdate();
    }),
      T.useEffect(() => {
        l && v(Fd(l));
      }, [l]),
      ga(() => {
        if (!q || !m) return;
        const P = (se) => {
          W(se.placement);
        };
        let N = [
          { name: "preventOverflow", options: { altBoundary: d } },
          { name: "flip", options: { altBoundary: d } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: se }) => {
              P(se);
            },
          },
        ];
        h != null && (N = N.concat(h)),
          b && b.modifiers != null && (N = N.concat(b.modifiers));
        const J = FE(q, D.current, { placement: $, ...b, modifiers: N });
        return (
          E.current(J),
          () => {
            J.destroy(), E.current(null);
          }
        );
      }, [q, d, h, m, b, $]);
    const F = { placement: L };
    R !== null && (F.TransitionProps = R);
    const V = HE(r),
      I = A.root ?? "div",
      oe = i0({
        elementType: I,
        externalSlotProps: w.root,
        externalForwardedProps: z,
        additionalProps: { role: "tooltip", ref: k },
        ownerState: r,
        className: V.root,
      });
    return p.jsx(I, { ...oe, children: typeof c == "function" ? c(F) : c });
  }),
  GE = T.forwardRef(function (r, i) {
    const {
        anchorEl: l,
        children: c,
        container: f,
        direction: d = "ltr",
        disablePortal: h = !1,
        keepMounted: m = !1,
        modifiers: g,
        open: b,
        placement: x = "bottom",
        popperOptions: w = PE,
        popperRef: A,
        style: R,
        transition: C = !1,
        slotProps: z = {},
        slots: D = {},
        ...k
      } = r,
      [O, M] = T.useState(!0),
      E = () => {
        M(!1);
      },
      $ = () => {
        M(!0);
      };
    if (!m && !b && (!C || O)) return null;
    let L;
    if (f) L = f;
    else if (l) {
      const v = Fd(l);
      L = v && LE(v) ? Mn(v).body : Mn(null).body;
    }
    const W = !b && m && (!C || O) ? "none" : void 0,
      q = C ? { in: b, onEnter: E, onExited: $ } : void 0;
    return p.jsx(w0, {
      disablePortal: h,
      container: L,
      children: p.jsx(qE, {
        anchorEl: l,
        direction: d,
        disablePortal: h,
        modifiers: g,
        ref: i,
        open: C ? !O : b,
        placement: x,
        popperOptions: w,
        popperRef: A,
        slotProps: z,
        slots: D,
        ...k,
        style: { position: "fixed", top: 0, left: 0, display: W, ...R },
        TransitionProps: q,
        children: c,
      }),
    });
  }),
  IE = ie(GE, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({}),
  A0 = T.forwardRef(function (r, i) {
    const l = tp(),
      c = Ye({ props: r, name: "MuiPopper" }),
      {
        anchorEl: f,
        component: d,
        components: h,
        componentsProps: m,
        container: g,
        disablePortal: b,
        keepMounted: x,
        modifiers: w,
        open: A,
        placement: R,
        popperOptions: C,
        popperRef: z,
        transition: D,
        slots: k,
        slotProps: O,
        ...M
      } = c,
      E = (k == null ? void 0 : k.root) ?? (h == null ? void 0 : h.Root),
      $ = {
        anchorEl: f,
        container: g,
        disablePortal: b,
        keepMounted: x,
        modifiers: w,
        open: A,
        placement: R,
        popperOptions: C,
        popperRef: z,
        transition: D,
        ...M,
      };
    return p.jsx(IE, {
      as: d,
      direction: l ? "rtl" : "ltr",
      slots: { root: E },
      slotProps: O ?? m,
      ...$,
      ref: i,
    });
  });
function Js(n) {
  return parseInt(n, 10) || 0;
}
const YE = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function WE(n) {
  for (const r in n) return !1;
  return !0;
}
function VE(n) {
  return WE(n) || (n.outerHeightStyle === 0 && !n.overflowing);
}
const XE = T.forwardRef(function (r, i) {
  const {
      onChange: l,
      maxRows: c,
      minRows: f = 1,
      style: d,
      value: h,
      ...m
    } = r,
    { current: g } = T.useRef(h != null),
    b = T.useRef(null),
    x = Ut(i, b),
    w = T.useRef(null),
    A = T.useRef(null),
    R = T.useCallback(() => {
      const k = b.current,
        O = A.current;
      if (!k || !O) return;
      const E = La(k).getComputedStyle(k);
      if (E.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      (O.style.width = E.width),
        (O.value = k.value || r.placeholder || "x"),
        O.value.slice(-1) ===
          `
` && (O.value += " ");
      const $ = E.boxSizing,
        L = Js(E.paddingBottom) + Js(E.paddingTop),
        W = Js(E.borderBottomWidth) + Js(E.borderTopWidth),
        q = O.scrollHeight;
      O.value = "x";
      const v = O.scrollHeight;
      let F = q;
      f && (F = Math.max(Number(f) * v, F)),
        c && (F = Math.min(Number(c) * v, F)),
        (F = Math.max(F, v));
      const V = F + ($ === "border-box" ? L + W : 0),
        I = Math.abs(F - q) <= 1;
      return { outerHeightStyle: V, overflowing: I };
    }, [c, f, r.placeholder]),
    C = T.useCallback(() => {
      const k = b.current,
        O = R();
      if (!k || !O || VE(O)) return;
      const M = O.outerHeightStyle;
      w.current !== M && ((w.current = M), (k.style.height = `${M}px`)),
        (k.style.overflow = O.overflowing ? "hidden" : "");
    }, [R]),
    z = T.useRef(-1);
  ga(() => {
    const k = Jv(() => C()),
      O = b == null ? void 0 : b.current;
    if (!O) return;
    const M = La(O);
    M.addEventListener("resize", k);
    let E;
    return (
      typeof ResizeObserver < "u" &&
        ((E = new ResizeObserver(() => {
          E.unobserve(O),
            cancelAnimationFrame(z.current),
            C(),
            (z.current = requestAnimationFrame(() => {
              E.observe(O);
            }));
        })),
        E.observe(O)),
      () => {
        k.clear(),
          cancelAnimationFrame(z.current),
          M.removeEventListener("resize", k),
          E && E.disconnect();
      }
    );
  }, [R, C]),
    ga(() => {
      C();
    });
  const D = (k) => {
    g || C(), l && l(k);
  };
  return p.jsxs(T.Fragment, {
    children: [
      p.jsx("textarea", {
        value: h,
        onChange: D,
        ref: x,
        rows: f,
        style: d,
        ...m,
      }),
      p.jsx("textarea", {
        "aria-hidden": !0,
        className: r.className,
        readOnly: !0,
        ref: A,
        tabIndex: -1,
        style: { ...YE.shadow, ...d, paddingTop: 0, paddingBottom: 0 },
      }),
    ],
  });
});
function Al(n) {
  return typeof n == "string";
}
function ni({ props: n, states: r, muiFormControl: i }) {
  return r.reduce(
    (l, c) => ((l[c] = n[c]), i && typeof n[c] > "u" && (l[c] = i[c]), l),
    {}
  );
}
const hp = T.createContext(void 0);
function ai() {
  return T.useContext(hp);
}
function nv(n) {
  return n != null && !(Array.isArray(n) && n.length === 0);
}
function xc(n, r = !1) {
  return (
    n &&
    ((nv(n.value) && n.value !== "") ||
      (r && nv(n.defaultValue) && n.defaultValue !== ""))
  );
}
function KE(n) {
  return n.startAdornment;
}
function QE(n) {
  return qe("MuiInputBase", n);
}
const Qo = ke("MuiInputBase", [
  "root",
  "formControl",
  "focused",
  "disabled",
  "adornedStart",
  "adornedEnd",
  "error",
  "sizeSmall",
  "multiline",
  "colorSecondary",
  "fullWidth",
  "hiddenLabel",
  "readOnly",
  "input",
  "inputSizeSmall",
  "inputMultiline",
  "inputTypeSearch",
  "inputAdornedStart",
  "inputAdornedEnd",
  "inputHiddenLabel",
]);
var av;
const _c = (n, r) => {
    const { ownerState: i } = n;
    return [
      r.root,
      i.formControl && r.formControl,
      i.startAdornment && r.adornedStart,
      i.endAdornment && r.adornedEnd,
      i.error && r.error,
      i.size === "small" && r.sizeSmall,
      i.multiline && r.multiline,
      i.color && r[`color${Te(i.color)}`],
      i.fullWidth && r.fullWidth,
      i.hiddenLabel && r.hiddenLabel,
    ];
  },
  Lc = (n, r) => {
    const { ownerState: i } = n;
    return [
      r.input,
      i.size === "small" && r.inputSizeSmall,
      i.multiline && r.inputMultiline,
      i.type === "search" && r.inputTypeSearch,
      i.startAdornment && r.inputAdornedStart,
      i.endAdornment && r.inputAdornedEnd,
      i.hiddenLabel && r.inputHiddenLabel,
    ];
  },
  ZE = (n) => {
    const {
        classes: r,
        color: i,
        disabled: l,
        error: c,
        endAdornment: f,
        focused: d,
        formControl: h,
        fullWidth: m,
        hiddenLabel: g,
        multiline: b,
        readOnly: x,
        size: w,
        startAdornment: A,
        type: R,
      } = n,
      C = {
        root: [
          "root",
          `color${Te(i)}`,
          l && "disabled",
          c && "error",
          m && "fullWidth",
          d && "focused",
          h && "formControl",
          w && w !== "medium" && `size${Te(w)}`,
          b && "multiline",
          A && "adornedStart",
          f && "adornedEnd",
          g && "hiddenLabel",
          x && "readOnly",
        ],
        input: [
          "input",
          l && "disabled",
          R === "search" && "inputTypeSearch",
          b && "inputMultiline",
          w === "small" && "inputSizeSmall",
          g && "inputHiddenLabel",
          A && "inputAdornedStart",
          f && "inputAdornedEnd",
          x && "readOnly",
        ],
      };
    return Ge(C, QE, r);
  },
  Hc = ie("div", { name: "MuiInputBase", slot: "Root", overridesResolver: _c })(
    rt(({ theme: n }) => ({
      ...n.typography.body1,
      color: (n.vars || n).palette.text.primary,
      lineHeight: "1.4375em",
      boxSizing: "border-box",
      position: "relative",
      cursor: "text",
      display: "inline-flex",
      alignItems: "center",
      [`&.${Qo.disabled}`]: {
        color: (n.vars || n).palette.text.disabled,
        cursor: "default",
      },
      variants: [
        {
          props: ({ ownerState: r }) => r.multiline,
          style: { padding: "4px 0 5px" },
        },
        {
          props: ({ ownerState: r, size: i }) => r.multiline && i === "small",
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: r }) => r.fullWidth, style: { width: "100%" } },
      ],
    }))
  ),
  Pc = ie("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Lc,
  })(
    rt(({ theme: n }) => {
      const r = n.palette.mode === "light",
        i = {
          color: "currentColor",
          ...(n.vars
            ? { opacity: n.vars.opacity.inputPlaceholder }
            : { opacity: r ? 0.42 : 0.5 }),
          transition: n.transitions.create("opacity", {
            duration: n.transitions.duration.shorter,
          }),
        },
        l = { opacity: "0 !important" },
        c = n.vars
          ? { opacity: n.vars.opacity.inputPlaceholder }
          : { opacity: r ? 0.42 : 0.5 };
      return {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        "&::-webkit-input-placeholder": i,
        "&::-moz-placeholder": i,
        "&::-ms-input-placeholder": i,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${Qo.formControl} &`]: {
          "&::-webkit-input-placeholder": l,
          "&::-moz-placeholder": l,
          "&::-ms-input-placeholder": l,
          "&:focus::-webkit-input-placeholder": c,
          "&:focus::-moz-placeholder": c,
          "&:focus::-ms-input-placeholder": c,
        },
        [`&.${Qo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (n.vars || n).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: f }) => !f.disableInjectingGlobalStyles,
            style: {
              animationName: "mui-auto-fill-cancel",
              animationDuration: "10ms",
              "&:-webkit-autofill": {
                animationDuration: "5000s",
                animationName: "mui-auto-fill",
              },
            },
          },
          { props: { size: "small" }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: f }) => f.multiline,
            style: {
              height: "auto",
              resize: "none",
              padding: 0,
              paddingTop: 0,
            },
          },
          { props: { type: "search" }, style: { MozAppearance: "textfield" } },
        ],
      };
    })
  ),
  rv = RC({
    "@keyframes mui-auto-fill": { from: { display: "block" } },
    "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
  }),
  mp = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiInputBase" }),
      {
        "aria-describedby": c,
        autoComplete: f,
        autoFocus: d,
        className: h,
        color: m,
        components: g = {},
        componentsProps: b = {},
        defaultValue: x,
        disabled: w,
        disableInjectingGlobalStyles: A,
        endAdornment: R,
        error: C,
        fullWidth: z = !1,
        id: D,
        inputComponent: k = "input",
        inputProps: O = {},
        inputRef: M,
        margin: E,
        maxRows: $,
        minRows: L,
        multiline: W = !1,
        name: q,
        onBlur: v,
        onChange: F,
        onClick: V,
        onFocus: I,
        onKeyDown: oe,
        onKeyUp: P,
        placeholder: N,
        readOnly: J,
        renderSuffix: se,
        rows: ae,
        size: j,
        slotProps: K = {},
        slots: Q = {},
        startAdornment: Z,
        type: ne = "text",
        value: fe,
        ...de
      } = l,
      ge = O.value != null ? O.value : fe,
      { current: pe } = T.useRef(ge != null),
      ye = T.useRef(),
      X = T.useCallback((Ne) => {}, []),
      he = Ut(ye, M, O.ref, X),
      [me, ze] = T.useState(!1),
      Ee = ai(),
      Ue = ni({
        props: l,
        muiFormControl: Ee,
        states: [
          "color",
          "disabled",
          "error",
          "hiddenLabel",
          "size",
          "required",
          "filled",
        ],
      });
    (Ue.focused = Ee ? Ee.focused : me),
      T.useEffect(() => {
        !Ee && w && me && (ze(!1), v && v());
      }, [Ee, w, me, v]);
    const it = Ee && Ee.onFilled,
      dt = Ee && Ee.onEmpty,
      tt = T.useCallback(
        (Ne) => {
          xc(Ne) ? it && it() : dt && dt();
        },
        [it, dt]
      );
    ga(() => {
      pe && tt({ value: ge });
    }, [ge, tt, pe]);
    const Bt = (Ne) => {
        I && I(Ne),
          O.onFocus && O.onFocus(Ne),
          Ee && Ee.onFocus ? Ee.onFocus(Ne) : ze(!0);
      },
      nt = (Ne) => {
        v && v(Ne),
          O.onBlur && O.onBlur(Ne),
          Ee && Ee.onBlur ? Ee.onBlur(Ne) : ze(!1);
      },
      Qe = (Ne, ...un) => {
        if (!pe) {
          const Nt = Ne.target || ye.current;
          if (Nt == null) throw new Error(_a(1));
          tt({ value: Nt.value });
        }
        O.onChange && O.onChange(Ne, ...un), F && F(Ne, ...un);
      };
    T.useEffect(() => {
      tt(ye.current);
    }, []);
    const xe = (Ne) => {
      ye.current && Ne.currentTarget === Ne.target && ye.current.focus(),
        V && V(Ne);
    };
    let ln = k,
      Ze = O;
    W &&
      ln === "input" &&
      (ae
        ? (Ze = { type: void 0, minRows: ae, maxRows: ae, ...Ze })
        : (Ze = { type: void 0, maxRows: $, minRows: L, ...Ze }),
      (ln = XE));
    const vn = (Ne) => {
      tt(
        Ne.animationName === "mui-auto-fill-cancel"
          ? ye.current
          : { value: "x" }
      );
    };
    T.useEffect(() => {
      Ee && Ee.setAdornedStart(!!Z);
    }, [Ee, Z]);
    const bn = {
        ...l,
        color: Ue.color || "primary",
        disabled: Ue.disabled,
        endAdornment: R,
        error: Ue.error,
        focused: Ue.focused,
        formControl: Ee,
        fullWidth: z,
        hiddenLabel: Ue.hiddenLabel,
        multiline: W,
        size: Ue.size,
        startAdornment: Z,
        type: ne,
      },
      an = ZE(bn),
      Kt = Q.root || g.Root || Hc,
      sn = K.root || b.root || {},
      cn = Q.input || g.Input || Pc;
    return (
      (Ze = { ...Ze, ...(K.input ?? b.input) }),
      p.jsxs(T.Fragment, {
        children: [
          !A && typeof rv == "function" && (av || (av = p.jsx(rv, {}))),
          p.jsxs(Kt, {
            ...sn,
            ref: i,
            onClick: xe,
            ...de,
            ...(!Al(Kt) && { ownerState: { ...bn, ...sn.ownerState } }),
            className: Ae(
              an.root,
              sn.className,
              h,
              J && "MuiInputBase-readOnly"
            ),
            children: [
              Z,
              p.jsx(hp.Provider, {
                value: null,
                children: p.jsx(cn, {
                  "aria-invalid": Ue.error,
                  "aria-describedby": c,
                  autoComplete: f,
                  autoFocus: d,
                  defaultValue: x,
                  disabled: Ue.disabled,
                  id: D,
                  onAnimationStart: vn,
                  name: q,
                  placeholder: N,
                  readOnly: J,
                  required: Ue.required,
                  rows: ae,
                  value: ge,
                  onKeyDown: oe,
                  onKeyUp: P,
                  type: ne,
                  ...Ze,
                  ...(!Al(cn) && {
                    as: ln,
                    ownerState: { ...bn, ...Ze.ownerState },
                  }),
                  ref: he,
                  className: Ae(
                    an.input,
                    Ze.className,
                    J && "MuiInputBase-readOnly"
                  ),
                  onBlur: nt,
                  onChange: Qe,
                  onFocus: Bt,
                }),
              }),
              R,
              se ? se({ ...Ue, startAdornment: Z }) : null,
            ],
          }),
        ],
      })
    );
  });
function JE(n) {
  return qe("MuiInput", n);
}
const rl = { ...Qo, ...ke("MuiInput", ["root", "underline", "input"]) };
function eR(n) {
  return qe("MuiOutlinedInput", n);
}
const sa = {
  ...Qo,
  ...ke("MuiOutlinedInput", ["root", "notchedOutline", "input"]),
};
function tR(n) {
  return qe("MuiFilledInput", n);
}
const Fr = {
    ...Qo,
    ...ke("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel",
    ]),
  },
  nR = Qn(p.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  aR = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  $d = T.forwardRef(function (r, i) {
    const l = ti(),
      c = {
        enter: l.transitions.duration.enteringScreen,
        exit: l.transitions.duration.leavingScreen,
      },
      {
        addEndListener: f,
        appear: d = !0,
        children: h,
        easing: m,
        in: g,
        onEnter: b,
        onEntered: x,
        onEntering: w,
        onExit: A,
        onExited: R,
        onExiting: C,
        style: z,
        timeout: D = c,
        TransitionComponent: k = va,
        ...O
      } = r,
      M = T.useRef(null),
      E = Ut(M, ei(h), i),
      $ = (oe) => (P) => {
        if (oe) {
          const N = M.current;
          P === void 0 ? oe(N) : oe(N, P);
        }
      },
      L = $(w),
      W = $((oe, P) => {
        g0(oe);
        const N = yc({ style: z, timeout: D, easing: m }, { mode: "enter" });
        (oe.style.webkitTransition = l.transitions.create("opacity", N)),
          (oe.style.transition = l.transitions.create("opacity", N)),
          b && b(oe, P);
      }),
      q = $(x),
      v = $(C),
      F = $((oe) => {
        const P = yc({ style: z, timeout: D, easing: m }, { mode: "exit" });
        (oe.style.webkitTransition = l.transitions.create("opacity", P)),
          (oe.style.transition = l.transitions.create("opacity", P)),
          A && A(oe);
      }),
      V = $(R),
      I = (oe) => {
        f && f(M.current, oe);
      };
    return p.jsx(k, {
      appear: d,
      in: g,
      nodeRef: M,
      onEnter: W,
      onEntered: q,
      onEntering: L,
      onExit: F,
      onExited: V,
      onExiting: v,
      addEndListener: I,
      timeout: D,
      ...O,
      children: (oe, { ownerState: P, ...N }) =>
        T.cloneElement(h, {
          style: {
            opacity: 0,
            visibility: oe === "exited" && !g ? "hidden" : void 0,
            ...aR[oe],
            ...z,
            ...h.props.style,
          },
          ref: E,
          ...N,
        }),
    });
  });
function rR(n) {
  return qe("MuiBackdrop", n);
}
ke("MuiBackdrop", ["root", "invisible"]);
const oR = (n) => {
    const { classes: r, invisible: i } = n;
    return Ge({ root: ["root", i && "invisible"] }, rR, r);
  },
  iR = ie("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, i.invisible && r.invisible];
    },
  })({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
    variants: [
      { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
    ],
  }),
  M0 = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiBackdrop" }),
      {
        children: c,
        className: f,
        component: d = "div",
        invisible: h = !1,
        open: m,
        components: g = {},
        componentsProps: b = {},
        slotProps: x = {},
        slots: w = {},
        TransitionComponent: A,
        transitionDuration: R,
        ...C
      } = l,
      z = { ...l, component: d, invisible: h },
      D = oR(z),
      k = { transition: A, root: g.Root, ...w },
      O = { ...b, ...x },
      M = { slots: k, slotProps: O },
      [E, $] = ot("root", {
        elementType: iR,
        externalForwardedProps: M,
        className: Ae(D.root, f),
        ownerState: z,
      }),
      [L, W] = ot("transition", {
        elementType: $d,
        externalForwardedProps: M,
        ownerState: z,
      });
    return p.jsx(L, {
      in: m,
      timeout: R,
      ...C,
      ...W,
      children: p.jsx(E, {
        "aria-hidden": !0,
        ...$,
        classes: D,
        ref: i,
        children: c,
      }),
    });
  });
function lR(n) {
  return qe("MuiButton", n);
}
const $r = ke("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
    "loading",
    "loadingWrapper",
    "loadingIconPlaceholder",
    "loadingIndicator",
    "loadingPositionCenter",
    "loadingPositionStart",
    "loadingPositionEnd",
  ]),
  sR = T.createContext({}),
  cR = T.createContext(void 0),
  uR = (n) => {
    const {
        color: r,
        disableElevation: i,
        fullWidth: l,
        size: c,
        variant: f,
        loading: d,
        loadingPosition: h,
        classes: m,
      } = n,
      g = {
        root: [
          "root",
          d && "loading",
          f,
          `${f}${Te(r)}`,
          `size${Te(c)}`,
          `${f}Size${Te(c)}`,
          `color${Te(r)}`,
          i && "disableElevation",
          l && "fullWidth",
          d && `loadingPosition${Te(h)}`,
        ],
        startIcon: ["icon", "startIcon", `iconSize${Te(c)}`],
        endIcon: ["icon", "endIcon", `iconSize${Te(c)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"],
      },
      b = Ge(g, lR, m);
    return { ...m, ...b };
  },
  O0 = [
    {
      props: { size: "small" },
      style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
    },
    {
      props: { size: "medium" },
      style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
    },
    {
      props: { size: "large" },
      style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
    },
  ],
  fR = ie(ip, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        r[i.variant],
        r[`${i.variant}${Te(i.color)}`],
        r[`size${Te(i.size)}`],
        r[`${i.variant}Size${Te(i.size)}`],
        i.color === "inherit" && r.colorInherit,
        i.disableElevation && r.disableElevation,
        i.fullWidth && r.fullWidth,
        i.loading && r.loading,
      ];
    },
  })(
    rt(({ theme: n }) => {
      const r =
          n.palette.mode === "light"
            ? n.palette.grey[300]
            : n.palette.grey[800],
        i =
          n.palette.mode === "light"
            ? n.palette.grey.A100
            : n.palette.grey[700];
      return {
        ...n.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create(
          ["background-color", "box-shadow", "border-color", "color"],
          { duration: n.transitions.duration.short }
        ),
        "&:hover": { textDecoration: "none" },
        [`&.${$r.disabled}`]: { color: (n.vars || n).palette.action.disabled },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              color: "var(--variant-containedColor)",
              backgroundColor: "var(--variant-containedBg)",
              boxShadow: (n.vars || n).shadows[2],
              "&:hover": {
                boxShadow: (n.vars || n).shadows[4],
                "@media (hover: none)": { boxShadow: (n.vars || n).shadows[2] },
              },
              "&:active": { boxShadow: (n.vars || n).shadows[8] },
              [`&.${$r.focusVisible}`]: { boxShadow: (n.vars || n).shadows[6] },
              [`&.${$r.disabled}`]: {
                color: (n.vars || n).palette.action.disabled,
                boxShadow: (n.vars || n).shadows[0],
                backgroundColor: (n.vars || n).palette.action
                  .disabledBackground,
              },
            },
          },
          {
            props: { variant: "outlined" },
            style: {
              padding: "5px 15px",
              border: "1px solid currentColor",
              borderColor: "var(--variant-outlinedBorder, currentColor)",
              backgroundColor: "var(--variant-outlinedBg)",
              color: "var(--variant-outlinedColor)",
              [`&.${$r.disabled}`]: {
                border: `1px solid ${
                  (n.vars || n).palette.action.disabledBackground
                }`,
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              padding: "6px 8px",
              color: "var(--variant-textColor)",
              backgroundColor: "var(--variant-textBg)",
            },
          },
          ...Object.entries(n.palette)
            .filter(Gn())
            .map(([l]) => ({
              props: { color: l },
              style: {
                "--variant-textColor": (n.vars || n).palette[l].main,
                "--variant-outlinedColor": (n.vars || n).palette[l].main,
                "--variant-outlinedBorder": n.vars
                  ? `rgba(${n.vars.palette[l].mainChannel} / 0.5)`
                  : tn(n.palette[l].main, 0.5),
                "--variant-containedColor": (n.vars || n).palette[l]
                  .contrastText,
                "--variant-containedBg": (n.vars || n).palette[l].main,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": (n.vars || n).palette[l].dark,
                    "--variant-textBg": n.vars
                      ? `rgba(${n.vars.palette[l].mainChannel} / ${n.vars.palette.action.hoverOpacity})`
                      : tn(n.palette[l].main, n.palette.action.hoverOpacity),
                    "--variant-outlinedBorder": (n.vars || n).palette[l].main,
                    "--variant-outlinedBg": n.vars
                      ? `rgba(${n.vars.palette[l].mainChannel} / ${n.vars.palette.action.hoverOpacity})`
                      : tn(n.palette[l].main, n.palette.action.hoverOpacity),
                  },
                },
              },
            })),
          {
            props: { color: "inherit" },
            style: {
              color: "inherit",
              borderColor: "currentColor",
              "--variant-containedBg": n.vars
                ? n.vars.palette.Button.inheritContainedBg
                : r,
              "@media (hover: hover)": {
                "&:hover": {
                  "--variant-containedBg": n.vars
                    ? n.vars.palette.Button.inheritContainedHoverBg
                    : i,
                  "--variant-textBg": n.vars
                    ? `rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`
                    : tn(n.palette.text.primary, n.palette.action.hoverOpacity),
                  "--variant-outlinedBg": n.vars
                    ? `rgba(${n.vars.palette.text.primaryChannel} / ${n.vars.palette.action.hoverOpacity})`
                    : tn(n.palette.text.primary, n.palette.action.hoverOpacity),
                },
              },
            },
          },
          {
            props: { size: "small", variant: "text" },
            style: { padding: "4px 5px", fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "text" },
            style: { padding: "8px 11px", fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "outlined" },
            style: { padding: "3px 9px", fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "outlined" },
            style: { padding: "7px 21px", fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { size: "small", variant: "contained" },
            style: { padding: "4px 10px", fontSize: n.typography.pxToRem(13) },
          },
          {
            props: { size: "large", variant: "contained" },
            style: { padding: "8px 22px", fontSize: n.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: "none",
              "&:hover": { boxShadow: "none" },
              [`&.${$r.focusVisible}`]: { boxShadow: "none" },
              "&:active": { boxShadow: "none" },
              [`&.${$r.disabled}`]: { boxShadow: "none" },
            },
          },
          { props: { fullWidth: !0 }, style: { width: "100%" } },
          {
            props: { loadingPosition: "center" },
            style: {
              transition: n.transitions.create(
                ["background-color", "box-shadow", "border-color"],
                { duration: n.transitions.duration.short }
              ),
              [`&.${$r.loading}`]: { color: "transparent" },
            },
          },
        ],
      };
    })
  ),
  dR = ie("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.startIcon,
        i.loading && r.startIconLoadingStart,
        r[`iconSize${Te(i.size)}`],
      ];
    },
  })(({ theme: n }) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: "small" }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: "start", loading: !0 },
        style: {
          transition: n.transitions.create(["opacity"], {
            duration: n.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...O0,
    ],
  })),
  pR = ie("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.endIcon,
        i.loading && r.endIconLoadingEnd,
        r[`iconSize${Te(i.size)}`],
      ];
    },
  })(({ theme: n }) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: "small" }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: "end", loading: !0 },
        style: {
          transition: n.transitions.create(["opacity"], {
            duration: n.transitions.duration.short,
          }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
        style: { marginLeft: -8 },
      },
      ...O0,
    ],
  })),
  hR = ie("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (n, r) => r.loadingIndicator,
  })(({ theme: n }) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [
      { props: { loading: !0 }, style: { display: "flex" } },
      { props: { loadingPosition: "start" }, style: { left: 14 } },
      {
        props: { loadingPosition: "start", size: "small" },
        style: { left: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "start" },
        style: { left: 6 },
      },
      {
        props: { loadingPosition: "center" },
        style: {
          left: "50%",
          transform: "translate(-50%)",
          color: (n.vars || n).palette.action.disabled,
        },
      },
      { props: { loadingPosition: "end" }, style: { right: 14 } },
      {
        props: { loadingPosition: "end", size: "small" },
        style: { right: 10 },
      },
      {
        props: { variant: "text", loadingPosition: "end" },
        style: { right: 6 },
      },
      {
        props: { loadingPosition: "start", fullWidth: !0 },
        style: { position: "relative", left: -10 },
      },
      {
        props: { loadingPosition: "end", fullWidth: !0 },
        style: { position: "relative", right: -10 },
      },
    ],
  })),
  ov = ie("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (n, r) => r.loadingIconPlaceholder,
  })({ display: "inline-block", width: "1em", height: "1em" }),
  Le = T.forwardRef(function (r, i) {
    const l = T.useContext(sR),
      c = T.useContext(cR),
      f = hc(l, r),
      d = Ye({ props: f, name: "MuiButton" }),
      {
        children: h,
        color: m = "primary",
        component: g = "button",
        className: b,
        disabled: x = !1,
        disableElevation: w = !1,
        disableFocusRipple: A = !1,
        endIcon: R,
        focusVisibleClassName: C,
        fullWidth: z = !1,
        id: D,
        loading: k = null,
        loadingIndicator: O,
        loadingPosition: M = "center",
        size: E = "medium",
        startIcon: $,
        type: L,
        variant: W = "text",
        ...q
      } = d,
      v = Jo(D),
      F = O ?? p.jsx($c, { "aria-labelledby": v, color: "inherit", size: 16 }),
      V = {
        ...d,
        color: m,
        component: g,
        disabled: x,
        disableElevation: w,
        disableFocusRipple: A,
        fullWidth: z,
        loading: k,
        loadingIndicator: F,
        loadingPosition: M,
        size: E,
        type: L,
        variant: W,
      },
      I = uR(V),
      oe =
        ($ || (k && M === "start")) &&
        p.jsx(dR, {
          className: I.startIcon,
          ownerState: V,
          children:
            $ ||
            p.jsx(ov, { className: I.loadingIconPlaceholder, ownerState: V }),
        }),
      P =
        (R || (k && M === "end")) &&
        p.jsx(pR, {
          className: I.endIcon,
          ownerState: V,
          children:
            R ||
            p.jsx(ov, { className: I.loadingIconPlaceholder, ownerState: V }),
        }),
      N = c || "",
      J =
        typeof k == "boolean"
          ? p.jsx("span", {
              className: I.loadingWrapper,
              style: { display: "contents" },
              children:
                k &&
                p.jsx(hR, {
                  className: I.loadingIndicator,
                  ownerState: V,
                  children: F,
                }),
            })
          : null;
    return p.jsxs(fR, {
      ownerState: V,
      className: Ae(l.className, I.root, b, N),
      component: g,
      disabled: x || k,
      focusRipple: !A,
      focusVisibleClassName: Ae(I.focusVisible, C),
      ref: i,
      type: L,
      id: k ? v : D,
      ...q,
      classes: I,
      children: [oe, M !== "end" && J, h, M === "end" && J, P],
    });
  });
function mR(n) {
  const r = Mn(n);
  return r.body === n
    ? La(n).innerWidth > r.documentElement.clientWidth
    : n.scrollHeight > n.clientHeight;
}
function yl(n, r) {
  r ? n.setAttribute("aria-hidden", "true") : n.removeAttribute("aria-hidden");
}
function iv(n) {
  return parseInt(La(n).getComputedStyle(n).paddingRight, 10) || 0;
}
function gR(n) {
  const i = [
      "TEMPLATE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "MAP",
      "META",
      "NOSCRIPT",
      "PICTURE",
      "COL",
      "COLGROUP",
      "PARAM",
      "SLOT",
      "SOURCE",
      "TRACK",
    ].includes(n.tagName),
    l = n.tagName === "INPUT" && n.getAttribute("type") === "hidden";
  return i || l;
}
function lv(n, r, i, l, c) {
  const f = [r, i, ...l];
  [].forEach.call(n.children, (d) => {
    const h = !f.includes(d),
      m = !gR(d);
    h && m && yl(d, c);
  });
}
function cd(n, r) {
  let i = -1;
  return n.some((l, c) => (r(l) ? ((i = c), !0) : !1)), i;
}
function yR(n, r) {
  const i = [],
    l = n.container;
  if (!r.disableScrollLock) {
    if (mR(l)) {
      const d = t0(La(l));
      i.push({ value: l.style.paddingRight, property: "padding-right", el: l }),
        (l.style.paddingRight = `${iv(l) + d}px`);
      const h = Mn(l).querySelectorAll(".mui-fixed");
      [].forEach.call(h, (m) => {
        i.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m,
        }),
          (m.style.paddingRight = `${iv(m) + d}px`);
      });
    }
    let f;
    if (l.parentNode instanceof DocumentFragment) f = Mn(l).body;
    else {
      const d = l.parentElement,
        h = La(l);
      f =
        (d == null ? void 0 : d.nodeName) === "HTML" &&
        h.getComputedStyle(d).overflowY === "scroll"
          ? d
          : l;
    }
    i.push(
      { value: f.style.overflow, property: "overflow", el: f },
      { value: f.style.overflowX, property: "overflow-x", el: f },
      { value: f.style.overflowY, property: "overflow-y", el: f }
    ),
      (f.style.overflow = "hidden");
  }
  return () => {
    i.forEach(({ value: f, el: d, property: h }) => {
      f ? d.style.setProperty(h, f) : d.style.removeProperty(h);
    });
  };
}
function vR(n) {
  const r = [];
  return (
    [].forEach.call(n.children, (i) => {
      i.getAttribute("aria-hidden") === "true" && r.push(i);
    }),
    r
  );
}
class bR {
  constructor() {
    (this.modals = []), (this.containers = []);
  }
  add(r, i) {
    let l = this.modals.indexOf(r);
    if (l !== -1) return l;
    (l = this.modals.length),
      this.modals.push(r),
      r.modalRef && yl(r.modalRef, !1);
    const c = vR(i);
    lv(i, r.mount, r.modalRef, c, !0);
    const f = cd(this.containers, (d) => d.container === i);
    return f !== -1
      ? (this.containers[f].modals.push(r), l)
      : (this.containers.push({
          modals: [r],
          container: i,
          restore: null,
          hiddenSiblings: c,
        }),
        l);
  }
  mount(r, i) {
    const l = cd(this.containers, (f) => f.modals.includes(r)),
      c = this.containers[l];
    c.restore || (c.restore = yR(c, i));
  }
  remove(r, i = !0) {
    const l = this.modals.indexOf(r);
    if (l === -1) return l;
    const c = cd(this.containers, (d) => d.modals.includes(r)),
      f = this.containers[c];
    if (
      (f.modals.splice(f.modals.indexOf(r), 1),
      this.modals.splice(l, 1),
      f.modals.length === 0)
    )
      f.restore && f.restore(),
        r.modalRef && yl(r.modalRef, i),
        lv(f.container, r.mount, r.modalRef, f.hiddenSiblings, !1),
        this.containers.splice(c, 1);
    else {
      const d = f.modals[f.modals.length - 1];
      d.modalRef && yl(d.modalRef, !1);
    }
    return l;
  }
  isTopModal(r) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === r;
  }
}
const xR = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function SR(n) {
  const r = parseInt(n.getAttribute("tabindex") || "", 10);
  return Number.isNaN(r)
    ? n.contentEditable === "true" ||
      ((n.nodeName === "AUDIO" ||
        n.nodeName === "VIDEO" ||
        n.nodeName === "DETAILS") &&
        n.getAttribute("tabindex") === null)
      ? 0
      : n.tabIndex
    : r;
}
function CR(n) {
  if (n.tagName !== "INPUT" || n.type !== "radio" || !n.name) return !1;
  const r = (l) => n.ownerDocument.querySelector(`input[type="radio"]${l}`);
  let i = r(`[name="${n.name}"]:checked`);
  return i || (i = r(`[name="${n.name}"]`)), i !== n;
}
function TR(n) {
  return !(
    n.disabled ||
    (n.tagName === "INPUT" && n.type === "hidden") ||
    CR(n)
  );
}
function ER(n) {
  const r = [],
    i = [];
  return (
    Array.from(n.querySelectorAll(xR)).forEach((l, c) => {
      const f = SR(l);
      f === -1 ||
        !TR(l) ||
        (f === 0
          ? r.push(l)
          : i.push({ documentOrder: c, tabIndex: f, node: l }));
    }),
    i
      .sort((l, c) =>
        l.tabIndex === c.tabIndex
          ? l.documentOrder - c.documentOrder
          : l.tabIndex - c.tabIndex
      )
      .map((l) => l.node)
      .concat(r)
  );
}
function RR() {
  return !0;
}
function wR(n) {
  const {
      children: r,
      disableAutoFocus: i = !1,
      disableEnforceFocus: l = !1,
      disableRestoreFocus: c = !1,
      getTabbable: f = ER,
      isEnabled: d = RR,
      open: h,
    } = n,
    m = T.useRef(!1),
    g = T.useRef(null),
    b = T.useRef(null),
    x = T.useRef(null),
    w = T.useRef(null),
    A = T.useRef(!1),
    R = T.useRef(null),
    C = Ut(ei(r), R),
    z = T.useRef(null);
  T.useEffect(() => {
    !h || !R.current || (A.current = !i);
  }, [i, h]),
    T.useEffect(() => {
      if (!h || !R.current) return;
      const O = Mn(R.current);
      return (
        R.current.contains(O.activeElement) ||
          (R.current.hasAttribute("tabIndex") ||
            R.current.setAttribute("tabIndex", "-1"),
          A.current && R.current.focus()),
        () => {
          c ||
            (x.current &&
              x.current.focus &&
              ((m.current = !0), x.current.focus()),
            (x.current = null));
        }
      );
    }, [h]),
    T.useEffect(() => {
      if (!h || !R.current) return;
      const O = Mn(R.current),
        M = (L) => {
          (z.current = L),
            !(l || !d() || L.key !== "Tab") &&
              O.activeElement === R.current &&
              L.shiftKey &&
              ((m.current = !0), b.current && b.current.focus());
        },
        E = () => {
          var q, v;
          const L = R.current;
          if (L === null) return;
          if (!O.hasFocus() || !d() || m.current) {
            m.current = !1;
            return;
          }
          if (
            L.contains(O.activeElement) ||
            (l &&
              O.activeElement !== g.current &&
              O.activeElement !== b.current)
          )
            return;
          if (O.activeElement !== w.current) w.current = null;
          else if (w.current !== null) return;
          if (!A.current) return;
          let W = [];
          if (
            ((O.activeElement === g.current || O.activeElement === b.current) &&
              (W = f(R.current)),
            W.length > 0)
          ) {
            const F = !!(
                (q = z.current) != null &&
                q.shiftKey &&
                ((v = z.current) == null ? void 0 : v.key) === "Tab"
              ),
              V = W[0],
              I = W[W.length - 1];
            typeof V != "string" &&
              typeof I != "string" &&
              (F ? I.focus() : V.focus());
          } else L.focus();
        };
      O.addEventListener("focusin", E), O.addEventListener("keydown", M, !0);
      const $ = setInterval(() => {
        O.activeElement && O.activeElement.tagName === "BODY" && E();
      }, 50);
      return () => {
        clearInterval($),
          O.removeEventListener("focusin", E),
          O.removeEventListener("keydown", M, !0);
      };
    }, [i, l, c, d, h, f]);
  const D = (O) => {
      x.current === null && (x.current = O.relatedTarget),
        (A.current = !0),
        (w.current = O.target);
      const M = r.props.onFocus;
      M && M(O);
    },
    k = (O) => {
      x.current === null && (x.current = O.relatedTarget), (A.current = !0);
    };
  return p.jsxs(T.Fragment, {
    children: [
      p.jsx("div", {
        tabIndex: h ? 0 : -1,
        onFocus: k,
        ref: g,
        "data-testid": "sentinelStart",
      }),
      T.cloneElement(r, { ref: C, onFocus: D }),
      p.jsx("div", {
        tabIndex: h ? 0 : -1,
        onFocus: k,
        ref: b,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function AR(n) {
  return typeof n == "function" ? n() : n;
}
function MR(n) {
  return n ? n.props.hasOwnProperty("in") : !1;
}
const sv = () => {},
  ec = new bR();
function OR(n) {
  const {
      container: r,
      disableEscapeKeyDown: i = !1,
      disableScrollLock: l = !1,
      closeAfterTransition: c = !1,
      onTransitionEnter: f,
      onTransitionExited: d,
      children: h,
      onClose: m,
      open: g,
      rootRef: b,
    } = n,
    x = T.useRef({}),
    w = T.useRef(null),
    A = T.useRef(null),
    R = Ut(A, b),
    [C, z] = T.useState(!g),
    D = MR(h);
  let k = !0;
  (n["aria-hidden"] === "false" || n["aria-hidden"] === !1) && (k = !1);
  const O = () => Mn(w.current),
    M = () => (
      (x.current.modalRef = A.current), (x.current.mount = w.current), x.current
    ),
    E = () => {
      ec.mount(M(), { disableScrollLock: l }),
        A.current && (A.current.scrollTop = 0);
    },
    $ = fr(() => {
      const P = AR(r) || O().body;
      ec.add(M(), P), A.current && E();
    }),
    L = () => ec.isTopModal(M()),
    W = fr((P) => {
      (w.current = P), P && (g && L() ? E() : A.current && yl(A.current, k));
    }),
    q = T.useCallback(() => {
      ec.remove(M(), k);
    }, [k]);
  T.useEffect(
    () => () => {
      q();
    },
    [q]
  ),
    T.useEffect(() => {
      g ? $() : (!D || !c) && q();
    }, [g, q, D, c, $]);
  const v = (P) => (N) => {
      var J;
      (J = P.onKeyDown) == null || J.call(P, N),
        !(N.key !== "Escape" || N.which === 229 || !L()) &&
          (i || (N.stopPropagation(), m && m(N, "escapeKeyDown")));
    },
    F = (P) => (N) => {
      var J;
      (J = P.onClick) == null || J.call(P, N),
        N.target === N.currentTarget && m && m(N, "backdropClick");
    };
  return {
    getRootProps: (P = {}) => {
      const N = a0(n);
      delete N.onTransitionEnter, delete N.onTransitionExited;
      const J = { ...N, ...P };
      return { role: "presentation", ...J, onKeyDown: v(J), ref: R };
    },
    getBackdropProps: (P = {}) => {
      const N = P;
      return { "aria-hidden": !0, ...N, onClick: F(N), open: g };
    },
    getTransitionProps: () => {
      const P = () => {
          z(!1), f && f();
        },
        N = () => {
          z(!0), d && d(), c && q();
        };
      return {
        onEnter: Oy(P, (h == null ? void 0 : h.props.onEnter) ?? sv),
        onExited: Oy(N, (h == null ? void 0 : h.props.onExited) ?? sv),
      };
    },
    rootRef: R,
    portalRef: W,
    isTopModal: L,
    exited: C,
    hasTransition: D,
  };
}
function BR(n) {
  return qe("MuiModal", n);
}
ke("MuiModal", ["root", "hidden", "backdrop"]);
const jR = (n) => {
    const { open: r, exited: i, classes: l } = n;
    return Ge(
      { root: ["root", !r && i && "hidden"], backdrop: ["backdrop"] },
      BR,
      l
    );
  },
  zR = ie("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, !i.open && i.exited && r.hidden];
    },
  })(
    rt(({ theme: n }) => ({
      position: "fixed",
      zIndex: (n.vars || n).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        {
          props: ({ ownerState: r }) => !r.open && r.exited,
          style: { visibility: "hidden" },
        },
      ],
    }))
  ),
  DR = ie(M0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (n, r) => r.backdrop,
  })({ zIndex: -1 }),
  gp = T.forwardRef(function (r, i) {
    const l = Ye({ name: "MuiModal", props: r }),
      {
        BackdropComponent: c = DR,
        BackdropProps: f,
        classes: d,
        className: h,
        closeAfterTransition: m = !1,
        children: g,
        container: b,
        component: x,
        components: w = {},
        componentsProps: A = {},
        disableAutoFocus: R = !1,
        disableEnforceFocus: C = !1,
        disableEscapeKeyDown: z = !1,
        disablePortal: D = !1,
        disableRestoreFocus: k = !1,
        disableScrollLock: O = !1,
        hideBackdrop: M = !1,
        keepMounted: E = !1,
        onBackdropClick: $,
        onClose: L,
        onTransitionEnter: W,
        onTransitionExited: q,
        open: v,
        slotProps: F = {},
        slots: V = {},
        theme: I,
        ...oe
      } = l,
      P = {
        ...l,
        closeAfterTransition: m,
        disableAutoFocus: R,
        disableEnforceFocus: C,
        disableEscapeKeyDown: z,
        disablePortal: D,
        disableRestoreFocus: k,
        disableScrollLock: O,
        hideBackdrop: M,
        keepMounted: E,
      },
      {
        getRootProps: N,
        getBackdropProps: J,
        getTransitionProps: se,
        portalRef: ae,
        isTopModal: j,
        exited: K,
        hasTransition: Q,
      } = OR({ ...P, rootRef: i }),
      Z = { ...P, exited: K },
      ne = jR(Z),
      fe = {};
    if ((g.props.tabIndex === void 0 && (fe.tabIndex = "-1"), Q)) {
      const { onEnter: he, onExited: me } = se();
      (fe.onEnter = he), (fe.onExited = me);
    }
    const de = {
        slots: { root: w.Root, backdrop: w.Backdrop, ...V },
        slotProps: { ...A, ...F },
      },
      [ge, pe] = ot("root", {
        ref: i,
        elementType: zR,
        externalForwardedProps: { ...de, ...oe, component: x },
        getSlotProps: N,
        ownerState: Z,
        className: Ae(
          h,
          ne == null ? void 0 : ne.root,
          !Z.open && Z.exited && (ne == null ? void 0 : ne.hidden)
        ),
      }),
      [ye, X] = ot("backdrop", {
        ref: f == null ? void 0 : f.ref,
        elementType: c,
        externalForwardedProps: de,
        shouldForwardComponentProp: !0,
        additionalProps: f,
        getSlotProps: (he) =>
          J({
            ...he,
            onClick: (me) => {
              $ && $(me), he != null && he.onClick && he.onClick(me);
            },
          }),
        className: Ae(
          f == null ? void 0 : f.className,
          ne == null ? void 0 : ne.backdrop
        ),
        ownerState: Z,
      });
    return !E && !v && (!Q || K)
      ? null
      : p.jsx(w0, {
          ref: ae,
          container: b,
          disablePortal: D,
          children: p.jsxs(ge, {
            ...pe,
            children: [
              !M && c ? p.jsx(ye, { ...X }) : null,
              p.jsx(wR, {
                disableEnforceFocus: C,
                disableAutoFocus: R,
                disableRestoreFocus: k,
                isEnabled: j,
                open: v,
                children: T.cloneElement(g, fe),
              }),
            ],
          }),
        });
  });
function kR(n) {
  return qe("MuiDialog", n);
}
const ud = ke("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen",
  ]),
  B0 = T.createContext({}),
  NR = ie(M0, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (n, r) => r.backdrop,
  })({ zIndex: -1 }),
  FR = (n) => {
    const {
        classes: r,
        scroll: i,
        maxWidth: l,
        fullWidth: c,
        fullScreen: f,
      } = n,
      d = {
        root: ["root"],
        container: ["container", `scroll${Te(i)}`],
        paper: [
          "paper",
          `paperScroll${Te(i)}`,
          `paperWidth${Te(String(l))}`,
          c && "paperFullWidth",
          f && "paperFullScreen",
        ],
      };
    return Ge(d, kR, r);
  },
  $R = ie(gp, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({ "@media print": { position: "absolute !important" } }),
  UR = ie("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.container, r[`scroll${Te(i.scroll)}`]];
    },
  })({
    height: "100%",
    "@media print": { height: "auto" },
    outline: 0,
    variants: [
      {
        props: { scroll: "paper" },
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      {
        props: { scroll: "body" },
        style: {
          overflowY: "auto",
          overflowX: "hidden",
          textAlign: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0",
          },
        },
      },
    ],
  }),
  _R = ie(Fc, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.paper,
        r[`scrollPaper${Te(i.scroll)}`],
        r[`paperWidth${Te(String(i.maxWidth))}`],
        i.fullWidth && r.paperFullWidth,
        i.fullScreen && r.paperFullScreen,
      ];
    },
  })(
    rt(({ theme: n }) => ({
      margin: 32,
      position: "relative",
      overflowY: "auto",
      "@media print": { overflowY: "visible", boxShadow: "none" },
      variants: [
        {
          props: { scroll: "paper" },
          style: {
            display: "flex",
            flexDirection: "column",
            maxHeight: "calc(100% - 64px)",
          },
        },
        {
          props: { scroll: "body" },
          style: {
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "initial",
          },
        },
        {
          props: ({ ownerState: r }) => !r.maxWidth,
          style: { maxWidth: "calc(100% - 64px)" },
        },
        {
          props: { maxWidth: "xs" },
          style: {
            maxWidth:
              n.breakpoints.unit === "px"
                ? Math.max(n.breakpoints.values.xs, 444)
                : `max(${n.breakpoints.values.xs}${n.breakpoints.unit}, 444px)`,
            [`&.${ud.paperScrollBody}`]: {
              [n.breakpoints.down(
                Math.max(n.breakpoints.values.xs, 444) + 32 * 2
              )]: { maxWidth: "calc(100% - 64px)" },
            },
          },
        },
        ...Object.keys(n.breakpoints.values)
          .filter((r) => r !== "xs")
          .map((r) => ({
            props: { maxWidth: r },
            style: {
              maxWidth: `${n.breakpoints.values[r]}${n.breakpoints.unit}`,
              [`&.${ud.paperScrollBody}`]: {
                [n.breakpoints.down(n.breakpoints.values[r] + 32 * 2)]: {
                  maxWidth: "calc(100% - 64px)",
                },
              },
            },
          })),
        {
          props: ({ ownerState: r }) => r.fullWidth,
          style: { width: "calc(100% - 64px)" },
        },
        {
          props: ({ ownerState: r }) => r.fullScreen,
          style: {
            margin: 0,
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            maxHeight: "none",
            borderRadius: 0,
            [`&.${ud.paperScrollBody}`]: { margin: 0, maxWidth: "100%" },
          },
        },
      ],
    }))
  ),
  $l = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiDialog" }),
      c = ti(),
      f = {
        enter: c.transitions.duration.enteringScreen,
        exit: c.transitions.duration.leavingScreen,
      },
      {
        "aria-describedby": d,
        "aria-labelledby": h,
        "aria-modal": m = !0,
        BackdropComponent: g,
        BackdropProps: b,
        children: x,
        className: w,
        disableEscapeKeyDown: A = !1,
        fullScreen: R = !1,
        fullWidth: C = !1,
        maxWidth: z = "sm",
        onBackdropClick: D,
        onClick: k,
        onClose: O,
        open: M,
        PaperComponent: E = Fc,
        PaperProps: $ = {},
        scroll: L = "paper",
        slots: W = {},
        slotProps: q = {},
        TransitionComponent: v = $d,
        transitionDuration: F = f,
        TransitionProps: V,
        ...I
      } = l,
      oe = {
        ...l,
        disableEscapeKeyDown: A,
        fullScreen: R,
        fullWidth: C,
        maxWidth: z,
        scroll: L,
      },
      P = FR(oe),
      N = T.useRef(),
      J = (Ee) => {
        N.current = Ee.target === Ee.currentTarget;
      },
      se = (Ee) => {
        k && k(Ee),
          N.current &&
            ((N.current = null), D && D(Ee), O && O(Ee, "backdropClick"));
      },
      ae = Jo(h),
      j = T.useMemo(() => ({ titleId: ae }), [ae]),
      K = { transition: v, ...W },
      Q = { transition: V, paper: $, backdrop: b, ...q },
      Z = { slots: K, slotProps: Q },
      [ne, fe] = ot("root", {
        elementType: $R,
        shouldForwardComponentProp: !0,
        externalForwardedProps: Z,
        ownerState: oe,
        className: Ae(P.root, w),
        ref: i,
      }),
      [de, ge] = ot("backdrop", {
        elementType: NR,
        shouldForwardComponentProp: !0,
        externalForwardedProps: Z,
        ownerState: oe,
      }),
      [pe, ye] = ot("paper", {
        elementType: _R,
        shouldForwardComponentProp: !0,
        externalForwardedProps: Z,
        ownerState: oe,
        className: Ae(P.paper, $.className),
      }),
      [X, he] = ot("container", {
        elementType: UR,
        externalForwardedProps: Z,
        ownerState: oe,
        className: Ae(P.container),
      }),
      [me, ze] = ot("transition", {
        elementType: $d,
        externalForwardedProps: Z,
        ownerState: oe,
        additionalProps: {
          appear: !0,
          in: M,
          timeout: F,
          role: "presentation",
        },
      });
    return p.jsx(ne, {
      closeAfterTransition: !0,
      slots: { backdrop: de },
      slotProps: { backdrop: { transitionDuration: F, as: g, ...ge } },
      disableEscapeKeyDown: A,
      onClose: O,
      open: M,
      onClick: se,
      ...fe,
      ...I,
      children: p.jsx(me, {
        ...ze,
        children: p.jsx(X, {
          onMouseDown: J,
          ...he,
          children: p.jsx(pe, {
            as: E,
            elevation: 24,
            role: "dialog",
            "aria-describedby": d,
            "aria-labelledby": ae,
            "aria-modal": m,
            ...ye,
            children: p.jsx(B0.Provider, { value: j, children: x }),
          }),
        }),
      }),
    });
  });
function LR(n) {
  return qe("MuiDialogActions", n);
}
ke("MuiDialogActions", ["root", "spacing"]);
const HR = (n) => {
    const { classes: r, disableSpacing: i } = n;
    return Ge({ root: ["root", !i && "spacing"] }, LR, r);
  },
  PR = ie("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, !i.disableSpacing && r.spacing];
    },
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: n }) => !n.disableSpacing,
        style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } },
      },
    ],
  }),
  Ul = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiDialogActions" }),
      { className: c, disableSpacing: f = !1, ...d } = l,
      h = { ...l, disableSpacing: f },
      m = HR(h);
    return p.jsx(PR, { className: Ae(m.root, c), ownerState: h, ref: i, ...d });
  });
function qR(n) {
  return qe("MuiDialogContent", n);
}
ke("MuiDialogContent", ["root", "dividers"]);
function GR(n) {
  return qe("MuiDialogTitle", n);
}
const IR = ke("MuiDialogTitle", ["root"]),
  YR = (n) => {
    const { classes: r, dividers: i } = n;
    return Ge({ root: ["root", i && "dividers"] }, qR, r);
  },
  WR = ie("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, i.dividers && r.dividers];
    },
  })(
    rt(({ theme: n }) => ({
      flex: "1 1 auto",
      WebkitOverflowScrolling: "touch",
      overflowY: "auto",
      padding: "20px 24px",
      variants: [
        {
          props: ({ ownerState: r }) => r.dividers,
          style: {
            padding: "16px 24px",
            borderTop: `1px solid ${(n.vars || n).palette.divider}`,
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
          },
        },
        {
          props: ({ ownerState: r }) => !r.dividers,
          style: { [`.${IR.root} + &`]: { paddingTop: 0 } },
        },
      ],
    }))
  ),
  _l = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiDialogContent" }),
      { className: c, dividers: f = !1, ...d } = l,
      h = { ...l, dividers: f },
      m = YR(h);
    return p.jsx(WR, { className: Ae(m.root, c), ownerState: h, ref: i, ...d });
  }),
  VR = (n) => {
    const { classes: r } = n;
    return Ge({ root: ["root"] }, GR, r);
  },
  XR = ie(ce, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({ padding: "16px 24px", flex: "0 0 auto" }),
  Ll = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiDialogTitle" }),
      { className: c, id: f, ...d } = l,
      h = l,
      m = VR(h),
      { titleId: g = f } = T.useContext(B0);
    return p.jsx(XR, {
      component: "h2",
      className: Ae(m.root, c),
      ownerState: h,
      ref: i,
      variant: "h6",
      id: f ?? g,
      ...d,
    });
  }),
  cv = ke("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]),
  KR = (n) => {
    const {
        classes: r,
        disableUnderline: i,
        startAdornment: l,
        endAdornment: c,
        size: f,
        hiddenLabel: d,
        multiline: h,
      } = n,
      m = {
        root: [
          "root",
          !i && "underline",
          l && "adornedStart",
          c && "adornedEnd",
          f === "small" && `size${Te(f)}`,
          d && "hiddenLabel",
          h && "multiline",
        ],
        input: ["input"],
      },
      g = Ge(m, tR, r);
    return { ...r, ...g };
  },
  QR = ie(Hc, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [..._c(n, r), !i.disableUnderline && r.underline];
    },
  })(
    rt(({ theme: n }) => {
      const r = n.palette.mode === "light",
        i = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
        l = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
        c = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
        f = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
      return {
        position: "relative",
        backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : l,
        borderTopLeftRadius: (n.vars || n).shape.borderRadius,
        borderTopRightRadius: (n.vars || n).shape.borderRadius,
        transition: n.transitions.create("background-color", {
          duration: n.transitions.duration.shorter,
          easing: n.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.hoverBg : c,
          "@media (hover: none)": {
            backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : l,
          },
        },
        [`&.${Fr.focused}`]: {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.bg : l,
        },
        [`&.${Fr.disabled}`]: {
          backgroundColor: n.vars ? n.vars.palette.FilledInput.disabledBg : f,
        },
        variants: [
          {
            props: ({ ownerState: d }) => !d.disableUnderline,
            style: {
              "&::after": {
                left: 0,
                bottom: 0,
                content: '""',
                position: "absolute",
                right: 0,
                transform: "scaleX(0)",
                transition: n.transitions.create("transform", {
                  duration: n.transitions.duration.shorter,
                  easing: n.transitions.easing.easeOut,
                }),
                pointerEvents: "none",
              },
              [`&.${Fr.focused}:after`]: {
                transform: "scaleX(1) translateX(0)",
              },
              [`&.${Fr.error}`]: {
                "&::before, &::after": {
                  borderBottomColor: (n.vars || n).palette.error.main,
                },
              },
              "&::before": {
                borderBottom: `1px solid ${
                  n.vars
                    ? `rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`
                    : i
                }`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: "absolute",
                right: 0,
                transition: n.transitions.create("border-bottom-color", {
                  duration: n.transitions.duration.shorter,
                }),
                pointerEvents: "none",
              },
              [`&:hover:not(.${Fr.disabled}, .${Fr.error}):before`]: {
                borderBottom: `1px solid ${(n.vars || n).palette.text.primary}`,
              },
              [`&.${Fr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
          },
          ...Object.entries(n.palette)
            .filter(Gn())
            .map(([d]) => {
              var h;
              return {
                props: { disableUnderline: !1, color: d },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${
                      (h = (n.vars || n).palette[d]) == null ? void 0 : h.main
                    }`,
                  },
                },
              };
            }),
          {
            props: ({ ownerState: d }) => d.startAdornment,
            style: { paddingLeft: 12 },
          },
          {
            props: ({ ownerState: d }) => d.endAdornment,
            style: { paddingRight: 12 },
          },
          {
            props: ({ ownerState: d }) => d.multiline,
            style: { padding: "25px 12px 8px" },
          },
          {
            props: ({ ownerState: d, size: h }) => d.multiline && h === "small",
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: d }) => d.multiline && d.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: d }) =>
              d.multiline && d.hiddenLabel && d.size === "small",
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    })
  ),
  ZR = ie(Pc, { name: "MuiFilledInput", slot: "Input", overridesResolver: Lc })(
    rt(({ theme: n }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!n.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            n.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: n.palette.mode === "light" ? null : "#fff",
          caretColor: n.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      }),
      ...(n.vars && {
        "&:-webkit-autofill": {
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
        [n.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        {
          props: { size: "small" },
          style: { paddingTop: 21, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
        {
          props: ({ ownerState: r }) => r.hiddenLabel && r.size === "small",
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: r }) => r.multiline,
          style: {
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
      ],
    }))
  ),
  yp = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiFilledInput" }),
      {
        disableUnderline: c = !1,
        components: f = {},
        componentsProps: d,
        fullWidth: h = !1,
        hiddenLabel: m,
        inputComponent: g = "input",
        multiline: b = !1,
        slotProps: x,
        slots: w = {},
        type: A = "text",
        ...R
      } = l,
      C = {
        ...l,
        disableUnderline: c,
        fullWidth: h,
        inputComponent: g,
        multiline: b,
        type: A,
      },
      z = KR(l),
      D = { root: { ownerState: C }, input: { ownerState: C } },
      k = x ?? d ? nn(D, x ?? d) : D,
      O = w.root ?? f.Root ?? QR,
      M = w.input ?? f.Input ?? ZR;
    return p.jsx(mp, {
      slots: { root: O, input: M },
      slotProps: k,
      fullWidth: h,
      inputComponent: g,
      multiline: b,
      ref: i,
      type: A,
      ...R,
      classes: z,
    });
  });
yp.muiName = "Input";
function JR(n) {
  return qe("MuiFormControl", n);
}
ke("MuiFormControl", [
  "root",
  "marginNone",
  "marginNormal",
  "marginDense",
  "fullWidth",
  "disabled",
]);
const ew = (n) => {
    const { classes: r, margin: i, fullWidth: l } = n,
      c = {
        root: ["root", i !== "none" && `margin${Te(i)}`, l && "fullWidth"],
      };
    return Ge(c, JR, r);
  },
  tw = ie("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, r[`margin${Te(i.margin)}`], i.fullWidth && r.fullWidth];
    },
  })({
    display: "inline-flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: "top",
    variants: [
      {
        props: { margin: "normal" },
        style: { marginTop: 16, marginBottom: 8 },
      },
      { props: { margin: "dense" }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: "100%" } },
    ],
  }),
  fa = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiFormControl" }),
      {
        children: c,
        className: f,
        color: d = "primary",
        component: h = "div",
        disabled: m = !1,
        error: g = !1,
        focused: b,
        fullWidth: x = !1,
        hiddenLabel: w = !1,
        margin: A = "none",
        required: R = !1,
        size: C = "medium",
        variant: z = "outlined",
        ...D
      } = l,
      k = {
        ...l,
        color: d,
        component: h,
        disabled: m,
        error: g,
        fullWidth: x,
        hiddenLabel: w,
        margin: A,
        required: R,
        size: C,
        variant: z,
      },
      O = ew(k),
      [M, E] = T.useState(() => {
        let P = !1;
        return (
          c &&
            T.Children.forEach(c, (N) => {
              if (!lc(N, ["Input", "Select"])) return;
              const J = lc(N, ["Select"]) ? N.props.input : N;
              J && KE(J.props) && (P = !0);
            }),
          P
        );
      }),
      [$, L] = T.useState(() => {
        let P = !1;
        return (
          c &&
            T.Children.forEach(c, (N) => {
              lc(N, ["Input", "Select"]) &&
                (xc(N.props, !0) || xc(N.props.inputProps, !0)) &&
                (P = !0);
            }),
          P
        );
      }),
      [W, q] = T.useState(!1);
    m && W && q(!1);
    const v = b !== void 0 && !m ? b : W;
    let F;
    T.useRef(!1);
    const V = T.useCallback(() => {
        L(!0);
      }, []),
      I = T.useCallback(() => {
        L(!1);
      }, []),
      oe = T.useMemo(
        () => ({
          adornedStart: M,
          setAdornedStart: E,
          color: d,
          disabled: m,
          error: g,
          filled: $,
          focused: v,
          fullWidth: x,
          hiddenLabel: w,
          size: C,
          onBlur: () => {
            q(!1);
          },
          onFocus: () => {
            q(!0);
          },
          onEmpty: I,
          onFilled: V,
          registerEffect: F,
          required: R,
          variant: z,
        }),
        [M, d, m, g, $, v, x, w, F, I, V, R, C, z]
      );
    return p.jsx(hp.Provider, {
      value: oe,
      children: p.jsx(tw, {
        as: h,
        ownerState: k,
        className: Ae(O.root, f),
        ref: i,
        ...D,
        children: c,
      }),
    });
  });
function nw(n) {
  return qe("MuiFormHelperText", n);
}
const uv = ke("MuiFormHelperText", [
  "root",
  "error",
  "disabled",
  "sizeSmall",
  "sizeMedium",
  "contained",
  "focused",
  "filled",
  "required",
]);
var fv;
const aw = (n) => {
    const {
        classes: r,
        contained: i,
        size: l,
        disabled: c,
        error: f,
        filled: d,
        focused: h,
        required: m,
      } = n,
      g = {
        root: [
          "root",
          c && "disabled",
          f && "error",
          l && `size${Te(l)}`,
          i && "contained",
          h && "focused",
          d && "filled",
          m && "required",
        ],
      };
    return Ge(g, nw, r);
  },
  rw = ie("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        i.size && r[`size${Te(i.size)}`],
        i.contained && r.contained,
        i.filled && r.filled,
      ];
    },
  })(
    rt(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.caption,
      textAlign: "left",
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${uv.disabled}`]: { color: (n.vars || n).palette.text.disabled },
      [`&.${uv.error}`]: { color: (n.vars || n).palette.error.main },
      variants: [
        { props: { size: "small" }, style: { marginTop: 4 } },
        {
          props: ({ ownerState: r }) => r.contained,
          style: { marginLeft: 14, marginRight: 14 },
        },
      ],
    }))
  ),
  ow = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiFormHelperText" }),
      {
        children: c,
        className: f,
        component: d = "p",
        disabled: h,
        error: m,
        filled: g,
        focused: b,
        margin: x,
        required: w,
        variant: A,
        ...R
      } = l,
      C = ai(),
      z = ni({
        props: l,
        muiFormControl: C,
        states: [
          "variant",
          "size",
          "disabled",
          "error",
          "filled",
          "focused",
          "required",
        ],
      }),
      D = {
        ...l,
        component: d,
        contained: z.variant === "filled" || z.variant === "outlined",
        variant: z.variant,
        size: z.size,
        disabled: z.disabled,
        error: z.error,
        filled: z.filled,
        focused: z.focused,
        required: z.required,
      };
    delete D.ownerState;
    const k = aw(D);
    return p.jsx(rw, {
      as: d,
      className: Ae(k.root, f),
      ref: i,
      ...R,
      ownerState: D,
      children:
        c === " "
          ? fv ||
            (fv = p.jsx("span", {
              className: "notranslate",
              "aria-hidden": !0,
              children: "​",
            }))
          : c,
    });
  });
function iw(n) {
  return qe("MuiFormLabel", n);
}
const vl = ke("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  lw = (n) => {
    const {
        classes: r,
        color: i,
        focused: l,
        disabled: c,
        error: f,
        filled: d,
        required: h,
      } = n,
      m = {
        root: [
          "root",
          `color${Te(i)}`,
          c && "disabled",
          f && "error",
          d && "filled",
          l && "focused",
          h && "required",
        ],
        asterisk: ["asterisk", f && "error"],
      };
    return Ge(m, iw, r);
  },
  sw = ie("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        i.color === "secondary" && r.colorSecondary,
        i.filled && r.filled,
      ];
    },
  })(
    rt(({ theme: n }) => ({
      color: (n.vars || n).palette.text.secondary,
      ...n.typography.body1,
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      variants: [
        ...Object.entries(n.palette)
          .filter(Gn())
          .map(([r]) => ({
            props: { color: r },
            style: {
              [`&.${vl.focused}`]: { color: (n.vars || n).palette[r].main },
            },
          })),
        {
          props: {},
          style: {
            [`&.${vl.disabled}`]: {
              color: (n.vars || n).palette.text.disabled,
            },
            [`&.${vl.error}`]: { color: (n.vars || n).palette.error.main },
          },
        },
      ],
    }))
  ),
  cw = ie("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (n, r) => r.asterisk,
  })(
    rt(({ theme: n }) => ({
      [`&.${vl.error}`]: { color: (n.vars || n).palette.error.main },
    }))
  ),
  uw = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiFormLabel" }),
      {
        children: c,
        className: f,
        color: d,
        component: h = "label",
        disabled: m,
        error: g,
        filled: b,
        focused: x,
        required: w,
        ...A
      } = l,
      R = ai(),
      C = ni({
        props: l,
        muiFormControl: R,
        states: ["color", "required", "focused", "disabled", "error", "filled"],
      }),
      z = {
        ...l,
        color: C.color || "primary",
        component: h,
        disabled: C.disabled,
        error: C.error,
        filled: C.filled,
        focused: C.focused,
        required: C.required,
      },
      D = lw(z);
    return p.jsxs(sw, {
      as: h,
      ownerState: z,
      className: Ae(D.root, f),
      ref: i,
      ...A,
      children: [
        c,
        C.required &&
          p.jsxs(cw, {
            ownerState: z,
            "aria-hidden": !0,
            className: D.asterisk,
            children: [" ", "*"],
          }),
      ],
    });
  }),
  dv = T.createContext();
function fw(n) {
  return qe("MuiGrid", n);
}
const dw = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  pw = ["column-reverse", "column", "row-reverse", "row"],
  hw = ["nowrap", "wrap-reverse", "wrap"],
  ol = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Ml = ke("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...dw.map((n) => `spacing-xs-${n}`),
    ...pw.map((n) => `direction-xs-${n}`),
    ...hw.map((n) => `wrap-xs-${n}`),
    ...ol.map((n) => `grid-xs-${n}`),
    ...ol.map((n) => `grid-sm-${n}`),
    ...ol.map((n) => `grid-md-${n}`),
    ...ol.map((n) => `grid-lg-${n}`),
    ...ol.map((n) => `grid-xl-${n}`),
  ]);
function mw({ theme: n, ownerState: r }) {
  let i;
  return n.breakpoints.keys.reduce((l, c) => {
    let f = {};
    if ((r[c] && (i = r[c]), !i)) return l;
    if (i === !0) f = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (i === "auto")
      f = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      };
    else {
      const d = Ac({ values: r.columns, breakpoints: n.breakpoints.values }),
        h = typeof d == "object" ? d[c] : d;
      if (h == null) return l;
      const m = `${Math.round((i / h) * 1e8) / 1e6}%`;
      let g = {};
      if (r.container && r.item && r.columnSpacing !== 0) {
        const b = n.spacing(r.columnSpacing);
        if (b !== "0px") {
          const x = `calc(${m} + ${b})`;
          g = { flexBasis: x, maxWidth: x };
        }
      }
      f = { flexBasis: m, flexGrow: 0, maxWidth: m, ...g };
    }
    return (
      n.breakpoints.values[c] === 0
        ? Object.assign(l, f)
        : (l[n.breakpoints.up(c)] = f),
      l
    );
  }, {});
}
function gw({ theme: n, ownerState: r }) {
  const i = Ac({ values: r.direction, breakpoints: n.breakpoints.values });
  return Yn({ theme: n }, i, (l) => {
    const c = { flexDirection: l };
    return (
      l.startsWith("column") && (c[`& > .${Ml.item}`] = { maxWidth: "none" }), c
    );
  });
}
function j0({ breakpoints: n, values: r }) {
  let i = "";
  Object.keys(r).forEach((c) => {
    i === "" && r[c] !== 0 && (i = c);
  });
  const l = Object.keys(n).sort((c, f) => n[c] - n[f]);
  return l.slice(0, l.indexOf(i));
}
function yw({ theme: n, ownerState: r }) {
  const { container: i, rowSpacing: l } = r;
  let c = {};
  if (i && l !== 0) {
    const f = Ac({ values: l, breakpoints: n.breakpoints.values });
    let d;
    typeof f == "object" &&
      (d = j0({ breakpoints: n.breakpoints.values, values: f })),
      (c = Yn({ theme: n }, f, (h, m) => {
        const g = n.spacing(h);
        return g !== "0px"
          ? {
              marginTop: `calc(-1 * ${g})`,
              [`& > .${Ml.item}`]: { paddingTop: g },
            }
          : d != null && d.includes(m)
          ? {}
          : { marginTop: 0, [`& > .${Ml.item}`]: { paddingTop: 0 } };
      }));
  }
  return c;
}
function vw({ theme: n, ownerState: r }) {
  const { container: i, columnSpacing: l } = r;
  let c = {};
  if (i && l !== 0) {
    const f = Ac({ values: l, breakpoints: n.breakpoints.values });
    let d;
    typeof f == "object" &&
      (d = j0({ breakpoints: n.breakpoints.values, values: f })),
      (c = Yn({ theme: n }, f, (h, m) => {
        const g = n.spacing(h);
        if (g !== "0px") {
          const b = `calc(-1 * ${g})`;
          return {
            width: `calc(100% + ${g})`,
            marginLeft: b,
            [`& > .${Ml.item}`]: { paddingLeft: g },
          };
        }
        return d != null && d.includes(m)
          ? {}
          : {
              width: "100%",
              marginLeft: 0,
              [`& > .${Ml.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return c;
}
function bw(n, r, i = {}) {
  if (!n || n <= 0) return [];
  if (
    (typeof n == "string" && !Number.isNaN(Number(n))) ||
    typeof n == "number"
  )
    return [i[`spacing-xs-${String(n)}`]];
  const l = [];
  return (
    r.forEach((c) => {
      const f = n[c];
      Number(f) > 0 && l.push(i[`spacing-${c}-${String(f)}`]);
    }),
    l
  );
}
const xw = ie("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (n, r) => {
    const { ownerState: i } = n,
      {
        container: l,
        direction: c,
        item: f,
        spacing: d,
        wrap: h,
        zeroMinWidth: m,
        breakpoints: g,
      } = i;
    let b = [];
    l && (b = bw(d, g, r));
    const x = [];
    return (
      g.forEach((w) => {
        const A = i[w];
        A && x.push(r[`grid-${w}-${String(A)}`]);
      }),
      [
        r.root,
        l && r.container,
        f && r.item,
        m && r.zeroMinWidth,
        ...b,
        c !== "row" && r[`direction-xs-${String(c)}`],
        h !== "wrap" && r[`wrap-xs-${String(h)}`],
        ...x,
      ]
    );
  },
})(
  ({ ownerState: n }) => ({
    boxSizing: "border-box",
    ...(n.container && { display: "flex", flexWrap: "wrap", width: "100%" }),
    ...(n.item && { margin: 0 }),
    ...(n.zeroMinWidth && { minWidth: 0 }),
    ...(n.wrap !== "wrap" && { flexWrap: n.wrap }),
  }),
  gw,
  yw,
  vw,
  mw
);
function Sw(n, r) {
  if (!n || n <= 0) return [];
  if (
    (typeof n == "string" && !Number.isNaN(Number(n))) ||
    typeof n == "number"
  )
    return [`spacing-xs-${String(n)}`];
  const i = [];
  return (
    r.forEach((l) => {
      const c = n[l];
      if (Number(c) > 0) {
        const f = `spacing-${l}-${String(c)}`;
        i.push(f);
      }
    }),
    i
  );
}
const Cw = (n) => {
    const {
      classes: r,
      container: i,
      direction: l,
      item: c,
      spacing: f,
      wrap: d,
      zeroMinWidth: h,
      breakpoints: m,
    } = n;
    let g = [];
    i && (g = Sw(f, m));
    const b = [];
    m.forEach((w) => {
      const A = n[w];
      A && b.push(`grid-${w}-${String(A)}`);
    });
    const x = {
      root: [
        "root",
        i && "container",
        c && "item",
        h && "zeroMinWidth",
        ...g,
        l !== "row" && `direction-xs-${String(l)}`,
        d !== "wrap" && `wrap-xs-${String(d)}`,
        ...b,
      ],
    };
    return Ge(x, fw, r);
  },
  fd = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiGrid" }),
      { breakpoints: c } = ti(),
      f = Vv(l),
      {
        className: d,
        columns: h,
        columnSpacing: m,
        component: g = "div",
        container: b = !1,
        direction: x = "row",
        item: w = !1,
        rowSpacing: A,
        spacing: R = 0,
        wrap: C = "wrap",
        zeroMinWidth: z = !1,
        ...D
      } = f,
      k = A || R,
      O = m || R,
      M = T.useContext(dv),
      E = b ? h || 12 : M,
      $ = {},
      L = { ...D };
    c.keys.forEach((v) => {
      D[v] != null && (($[v] = D[v]), delete L[v]);
    });
    const W = {
        ...f,
        columns: E,
        container: b,
        direction: x,
        item: w,
        rowSpacing: k,
        columnSpacing: O,
        wrap: C,
        zeroMinWidth: z,
        spacing: R,
        ...$,
        breakpoints: c.keys,
      },
      q = Cw(W);
    return p.jsx(dv.Provider, {
      value: E,
      children: p.jsx(xw, {
        ownerState: W,
        className: Ae(q.root, d),
        as: g,
        ref: i,
        ...L,
      }),
    });
  });
function Ud(n) {
  return `scale(${n}, ${n ** 2})`;
}
const Tw = {
    entering: { opacity: 1, transform: Ud(1) },
    entered: { opacity: 1, transform: "none" },
  },
  dd =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Sc = T.forwardRef(function (r, i) {
    const {
        addEndListener: l,
        appear: c = !0,
        children: f,
        easing: d,
        in: h,
        onEnter: m,
        onEntered: g,
        onEntering: b,
        onExit: x,
        onExited: w,
        onExiting: A,
        style: R,
        timeout: C = "auto",
        TransitionComponent: z = va,
        ...D
      } = r,
      k = Ho(),
      O = T.useRef(),
      M = ti(),
      E = T.useRef(null),
      $ = Ut(E, ei(f), i),
      L = (P) => (N) => {
        if (P) {
          const J = E.current;
          N === void 0 ? P(J) : P(J, N);
        }
      },
      W = L(b),
      q = L((P, N) => {
        g0(P);
        const {
          duration: J,
          delay: se,
          easing: ae,
        } = yc({ style: R, timeout: C, easing: d }, { mode: "enter" });
        let j;
        C === "auto"
          ? ((j = M.transitions.getAutoHeightDuration(P.clientHeight)),
            (O.current = j))
          : (j = J),
          (P.style.transition = [
            M.transitions.create("opacity", { duration: j, delay: se }),
            M.transitions.create("transform", {
              duration: dd ? j : j * 0.666,
              delay: se,
              easing: ae,
            }),
          ].join(",")),
          m && m(P, N);
      }),
      v = L(g),
      F = L(A),
      V = L((P) => {
        const {
          duration: N,
          delay: J,
          easing: se,
        } = yc({ style: R, timeout: C, easing: d }, { mode: "exit" });
        let ae;
        C === "auto"
          ? ((ae = M.transitions.getAutoHeightDuration(P.clientHeight)),
            (O.current = ae))
          : (ae = N),
          (P.style.transition = [
            M.transitions.create("opacity", { duration: ae, delay: J }),
            M.transitions.create("transform", {
              duration: dd ? ae : ae * 0.666,
              delay: dd ? J : J || ae * 0.333,
              easing: se,
            }),
          ].join(",")),
          (P.style.opacity = 0),
          (P.style.transform = Ud(0.75)),
          x && x(P);
      }),
      I = L(w),
      oe = (P) => {
        C === "auto" && k.start(O.current || 0, P), l && l(E.current, P);
      };
    return p.jsx(z, {
      appear: c,
      in: h,
      nodeRef: E,
      onEnter: q,
      onEntered: v,
      onEntering: W,
      onExit: V,
      onExited: I,
      onExiting: F,
      addEndListener: oe,
      timeout: C === "auto" ? null : C,
      ...D,
      children: (P, { ownerState: N, ...J }) =>
        T.cloneElement(f, {
          style: {
            opacity: 0,
            transform: Ud(0.75),
            visibility: P === "exited" && !h ? "hidden" : void 0,
            ...Tw[P],
            ...R,
            ...f.props.style,
          },
          ref: $,
          ...J,
        }),
    });
  });
Sc && (Sc.muiSupportAuto = !0);
const Ew = (n) => {
    const { classes: r, disableUnderline: i } = n,
      c = Ge({ root: ["root", !i && "underline"], input: ["input"] }, JE, r);
    return { ...r, ...c };
  },
  Rw = ie(Hc, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [..._c(n, r), !i.disableUnderline && r.underline];
    },
  })(
    rt(({ theme: n }) => {
      let i =
        n.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.42)"
          : "rgba(255, 255, 255, 0.7)";
      return (
        n.vars &&
          (i = `rgba(${n.vars.palette.common.onBackgroundChannel} / ${n.vars.opacity.inputUnderline})`),
        {
          position: "relative",
          variants: [
            {
              props: ({ ownerState: l }) => l.formControl,
              style: { "label + &": { marginTop: 16 } },
            },
            {
              props: ({ ownerState: l }) => !l.disableUnderline,
              style: {
                "&::after": {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: n.transitions.create("transform", {
                    duration: n.transitions.duration.shorter,
                    easing: n.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                [`&.${rl.focused}:after`]: {
                  transform: "scaleX(1) translateX(0)",
                },
                [`&.${rl.error}`]: {
                  "&::before, &::after": {
                    borderBottomColor: (n.vars || n).palette.error.main,
                  },
                },
                "&::before": {
                  borderBottom: `1px solid ${i}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: n.transitions.create("border-bottom-color", {
                    duration: n.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                [`&:hover:not(.${rl.disabled}, .${rl.error}):before`]: {
                  borderBottom: `2px solid ${
                    (n.vars || n).palette.text.primary
                  }`,
                  "@media (hover: none)": { borderBottom: `1px solid ${i}` },
                },
                [`&.${rl.disabled}:before`]: { borderBottomStyle: "dotted" },
              },
            },
            ...Object.entries(n.palette)
              .filter(Gn())
              .map(([l]) => ({
                props: { color: l, disableUnderline: !1 },
                style: {
                  "&::after": {
                    borderBottom: `2px solid ${(n.vars || n).palette[l].main}`,
                  },
                },
              })),
          ],
        }
      );
    })
  ),
  ww = ie(Pc, { name: "MuiInput", slot: "Input", overridesResolver: Lc })({}),
  vp = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiInput" }),
      {
        disableUnderline: c = !1,
        components: f = {},
        componentsProps: d,
        fullWidth: h = !1,
        inputComponent: m = "input",
        multiline: g = !1,
        slotProps: b,
        slots: x = {},
        type: w = "text",
        ...A
      } = l,
      R = Ew(l),
      z = { root: { ownerState: { disableUnderline: c } } },
      D = b ?? d ? nn(b ?? d, z) : z,
      k = x.root ?? f.Root ?? Rw,
      O = x.input ?? f.Input ?? ww;
    return p.jsx(mp, {
      slots: { root: k, input: O },
      slotProps: D,
      fullWidth: h,
      inputComponent: m,
      multiline: g,
      ref: i,
      type: w,
      ...A,
      classes: R,
    });
  });
vp.muiName = "Input";
function Aw(n) {
  return qe("MuiInputLabel", n);
}
ke("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const Mw = (n) => {
    const {
        classes: r,
        formControl: i,
        size: l,
        shrink: c,
        disableAnimation: f,
        variant: d,
        required: h,
      } = n,
      m = {
        root: [
          "root",
          i && "formControl",
          !f && "animated",
          c && "shrink",
          l && l !== "normal" && `size${Te(l)}`,
          d,
        ],
        asterisk: [h && "asterisk"],
      },
      g = Ge(m, Aw, r);
    return { ...r, ...g };
  },
  Ow = ie(uw, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        { [`& .${vl.asterisk}`]: r.asterisk },
        r.root,
        i.formControl && r.formControl,
        i.size === "small" && r.sizeSmall,
        i.shrink && r.shrink,
        !i.disableAnimation && r.animated,
        i.focused && r.focused,
        r[i.variant],
      ];
    },
  })(
    rt(({ theme: n }) => ({
      display: "block",
      transformOrigin: "top left",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "100%",
      variants: [
        {
          props: ({ ownerState: r }) => r.formControl,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            transform: "translate(0, 20px) scale(1)",
          },
        },
        {
          props: { size: "small" },
          style: { transform: "translate(0, 17px) scale(1)" },
        },
        {
          props: ({ ownerState: r }) => r.shrink,
          style: {
            transform: "translate(0, -1.5px) scale(0.75)",
            transformOrigin: "top left",
            maxWidth: "133%",
          },
        },
        {
          props: ({ ownerState: r }) => !r.disableAnimation,
          style: {
            transition: n.transitions.create(
              ["color", "transform", "max-width"],
              {
                duration: n.transitions.duration.shorter,
                easing: n.transitions.easing.easeOut,
              }
            ),
          },
        },
        {
          props: { variant: "filled" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "filled", size: "small" },
          style: { transform: "translate(12px, 13px) scale(1)" },
        },
        {
          props: ({ variant: r, ownerState: i }) => r === "filled" && i.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            transform: "translate(12px, 7px) scale(0.75)",
            maxWidth: "calc(133% - 24px)",
          },
        },
        {
          props: ({ variant: r, ownerState: i, size: l }) =>
            r === "filled" && i.shrink && l === "small",
          style: { transform: "translate(12px, 4px) scale(0.75)" },
        },
        {
          props: { variant: "outlined" },
          style: {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: { transform: "translate(14px, 9px) scale(1)" },
        },
        {
          props: ({ variant: r, ownerState: i }) =>
            r === "outlined" && i.shrink,
          style: {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          },
        },
      ],
    }))
  ),
  cc = T.forwardRef(function (r, i) {
    const l = Ye({ name: "MuiInputLabel", props: r }),
      {
        disableAnimation: c = !1,
        margin: f,
        shrink: d,
        variant: h,
        className: m,
        ...g
      } = l,
      b = ai();
    let x = d;
    typeof x > "u" && b && (x = b.filled || b.focused || b.adornedStart);
    const w = ni({
        props: l,
        muiFormControl: b,
        states: ["size", "variant", "required", "focused"],
      }),
      A = {
        ...l,
        disableAnimation: c,
        formControl: b,
        shrink: x,
        size: w.size,
        variant: w.variant,
        required: w.required,
        focused: w.focused,
      },
      R = Mw(A);
    return p.jsx(Ow, {
      "data-shrink": x,
      ref: i,
      className: Ae(R.root, m),
      ...g,
      ownerState: A,
      classes: R,
    });
  }),
  qr = T.createContext({});
function Bw(n) {
  return qe("MuiList", n);
}
ke("MuiList", ["root", "padding", "dense", "subheader"]);
const jw = (n) => {
    const { classes: r, disablePadding: i, dense: l, subheader: c } = n;
    return Ge(
      { root: ["root", !i && "padding", l && "dense", c && "subheader"] },
      Bw,
      r
    );
  },
  zw = ie("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.root,
        !i.disablePadding && r.padding,
        i.dense && r.dense,
        i.subheader && r.subheader,
      ];
    },
  })({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative",
    variants: [
      {
        props: ({ ownerState: n }) => !n.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: n }) => n.subheader, style: { paddingTop: 0 } },
    ],
  }),
  z0 = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiList" }),
      {
        children: c,
        className: f,
        component: d = "ul",
        dense: h = !1,
        disablePadding: m = !1,
        subheader: g,
        ...b
      } = l,
      x = T.useMemo(() => ({ dense: h }), [h]),
      w = { ...l, component: d, dense: h, disablePadding: m },
      A = jw(w);
    return p.jsx(qr.Provider, {
      value: x,
      children: p.jsxs(zw, {
        as: d,
        className: Ae(A.root, f),
        ref: i,
        ownerState: w,
        ...b,
        children: [g, c],
      }),
    });
  });
function Dw(n) {
  return qe("MuiListItem", n);
}
ke("MuiListItem", [
  "root",
  "container",
  "dense",
  "alignItemsFlexStart",
  "divider",
  "gutters",
  "padding",
  "secondaryAction",
]);
const kw = ke("MuiListItemButton", [
  "root",
  "focusVisible",
  "dense",
  "alignItemsFlexStart",
  "disabled",
  "divider",
  "gutters",
  "selected",
]);
function Nw(n) {
  return qe("MuiListItemSecondaryAction", n);
}
ke("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Fw = (n) => {
    const { disableGutters: r, classes: i } = n;
    return Ge({ root: ["root", r && "disableGutters"] }, Nw, i);
  },
  $w = ie("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [r.root, i.disableGutters && r.disableGutters];
    },
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      { props: ({ ownerState: n }) => n.disableGutters, style: { right: 0 } },
    ],
  }),
  D0 = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiListItemSecondaryAction" }),
      { className: c, ...f } = l,
      d = T.useContext(qr),
      h = { ...l, disableGutters: d.disableGutters },
      m = Fw(h);
    return p.jsx($w, { className: Ae(m.root, c), ownerState: h, ref: i, ...f });
  });
D0.muiName = "ListItemSecondaryAction";
const Uw = (n, r) => {
    const { ownerState: i } = n;
    return [
      r.root,
      i.dense && r.dense,
      i.alignItems === "flex-start" && r.alignItemsFlexStart,
      i.divider && r.divider,
      !i.disableGutters && r.gutters,
      !i.disablePadding && r.padding,
      i.hasSecondaryAction && r.secondaryAction,
    ];
  },
  _w = (n) => {
    const {
      alignItems: r,
      classes: i,
      dense: l,
      disableGutters: c,
      disablePadding: f,
      divider: d,
      hasSecondaryAction: h,
    } = n;
    return Ge(
      {
        root: [
          "root",
          l && "dense",
          !c && "gutters",
          !f && "padding",
          d && "divider",
          r === "flex-start" && "alignItemsFlexStart",
          h && "secondaryAction",
        ],
        container: ["container"],
      },
      Dw,
      i
    );
  },
  Lw = ie("div", { name: "MuiListItem", slot: "Root", overridesResolver: Uw })(
    rt(({ theme: n }) => ({
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      variants: [
        {
          props: ({ ownerState: r }) => !r.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: ({ ownerState: r }) => !r.disablePadding && r.dense,
          style: { paddingTop: 4, paddingBottom: 4 },
        },
        {
          props: ({ ownerState: r }) => !r.disablePadding && !r.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: r }) =>
            !r.disablePadding && !!r.secondaryAction,
          style: { paddingRight: 48 },
        },
        {
          props: ({ ownerState: r }) => !!r.secondaryAction,
          style: { [`& > .${kw.root}`]: { paddingRight: 48 } },
        },
        {
          props: { alignItems: "flex-start" },
          style: { alignItems: "flex-start" },
        },
        {
          props: ({ ownerState: r }) => r.divider,
          style: {
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: r }) => r.button,
          style: {
            transition: n.transitions.create("background-color", {
              duration: n.transitions.duration.shortest,
            }),
            "&:hover": {
              textDecoration: "none",
              backgroundColor: (n.vars || n).palette.action.hover,
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.hasSecondaryAction,
          style: { paddingRight: 48 },
        },
      ],
    }))
  ),
  Hw = ie("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (n, r) => r.container,
  })({ position: "relative" }),
  Po = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiListItem" }),
      {
        alignItems: c = "center",
        children: f,
        className: d,
        component: h,
        components: m = {},
        componentsProps: g = {},
        ContainerComponent: b = "li",
        ContainerProps: { className: x, ...w } = {},
        dense: A = !1,
        disableGutters: R = !1,
        disablePadding: C = !1,
        divider: z = !1,
        secondaryAction: D,
        slotProps: k = {},
        slots: O = {},
        ...M
      } = l,
      E = T.useContext(qr),
      $ = T.useMemo(
        () => ({ dense: A || E.dense || !1, alignItems: c, disableGutters: R }),
        [c, E.dense, A, R]
      ),
      L = T.useRef(null),
      W = T.Children.toArray(f),
      q = W.length && lc(W[W.length - 1], ["ListItemSecondaryAction"]),
      v = {
        ...l,
        alignItems: c,
        dense: $.dense,
        disableGutters: R,
        disablePadding: C,
        divider: z,
        hasSecondaryAction: q,
      },
      F = _w(v),
      V = Ut(L, i),
      I = O.root || m.Root || Lw,
      oe = k.root || g.root || {},
      P = { className: Ae(F.root, oe.className, d), ...M };
    let N = h || "li";
    return q
      ? ((N = !P.component && !h ? "div" : N),
        b === "li" &&
          (N === "li"
            ? (N = "div")
            : P.component === "li" && (P.component = "div")),
        p.jsx(qr.Provider, {
          value: $,
          children: p.jsxs(Hw, {
            as: b,
            className: Ae(F.container, x),
            ref: V,
            ownerState: v,
            ...w,
            children: [
              p.jsx(I, {
                ...oe,
                ...(!Al(I) && {
                  as: N,
                  ownerState: { ...v, ...oe.ownerState },
                }),
                ...P,
                children: W,
              }),
              W.pop(),
            ],
          }),
        }))
      : p.jsx(qr.Provider, {
          value: $,
          children: p.jsxs(I, {
            ...oe,
            as: N,
            ref: V,
            ...(!Al(I) && { ownerState: { ...v, ...oe.ownerState } }),
            ...P,
            children: [W, D && p.jsx(D0, { children: D })],
          }),
        });
  }),
  pv = ke("MuiListItemIcon", ["root", "alignItemsFlexStart"]),
  hv = ke("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]);
function pd(n, r, i) {
  return n === r
    ? n.firstChild
    : r && r.nextElementSibling
    ? r.nextElementSibling
    : i
    ? null
    : n.firstChild;
}
function mv(n, r, i) {
  return n === r
    ? i
      ? n.firstChild
      : n.lastChild
    : r && r.previousElementSibling
    ? r.previousElementSibling
    : i
    ? null
    : n.lastChild;
}
function k0(n, r) {
  if (r === void 0) return !0;
  let i = n.innerText;
  return (
    i === void 0 && (i = n.textContent),
    (i = i.trim().toLowerCase()),
    i.length === 0
      ? !1
      : r.repeating
      ? i[0] === r.keys[0]
      : i.startsWith(r.keys.join(""))
  );
}
function il(n, r, i, l, c, f) {
  let d = !1,
    h = c(n, r, r ? i : !1);
  for (; h; ) {
    if (h === n.firstChild) {
      if (d) return !1;
      d = !0;
    }
    const m = l ? !1 : h.disabled || h.getAttribute("aria-disabled") === "true";
    if (!h.hasAttribute("tabindex") || !k0(h, f) || m) h = c(n, h, i);
    else return h.focus(), !0;
  }
  return !1;
}
const Pw = T.forwardRef(function (r, i) {
  const {
      actions: l,
      autoFocus: c = !1,
      autoFocusItem: f = !1,
      children: d,
      className: h,
      disabledItemsFocusable: m = !1,
      disableListWrap: g = !1,
      onKeyDown: b,
      variant: x = "selectedMenu",
      ...w
    } = r,
    A = T.useRef(null),
    R = T.useRef({
      keys: [],
      repeating: !0,
      previousKeyMatched: !0,
      lastTime: null,
    });
  ga(() => {
    c && A.current.focus();
  }, [c]),
    T.useImperativeHandle(
      l,
      () => ({
        adjustStyleForScrollbar: (O, { direction: M }) => {
          const E = !A.current.style.width;
          if (O.clientHeight < A.current.clientHeight && E) {
            const $ = `${t0(La(O))}px`;
            (A.current.style[M === "rtl" ? "paddingLeft" : "paddingRight"] = $),
              (A.current.style.width = `calc(100% + ${$})`);
          }
          return A.current;
        },
      }),
      []
    );
  const C = (O) => {
      const M = A.current,
        E = O.key;
      if (O.ctrlKey || O.metaKey || O.altKey) {
        b && b(O);
        return;
      }
      const L = Mn(M).activeElement;
      if (E === "ArrowDown") O.preventDefault(), il(M, L, g, m, pd);
      else if (E === "ArrowUp") O.preventDefault(), il(M, L, g, m, mv);
      else if (E === "Home") O.preventDefault(), il(M, null, g, m, pd);
      else if (E === "End") O.preventDefault(), il(M, null, g, m, mv);
      else if (E.length === 1) {
        const W = R.current,
          q = E.toLowerCase(),
          v = performance.now();
        W.keys.length > 0 &&
          (v - W.lastTime > 500
            ? ((W.keys = []), (W.repeating = !0), (W.previousKeyMatched = !0))
            : W.repeating && q !== W.keys[0] && (W.repeating = !1)),
          (W.lastTime = v),
          W.keys.push(q);
        const F = L && !W.repeating && k0(L, W);
        W.previousKeyMatched && (F || il(M, L, !1, m, pd, W))
          ? O.preventDefault()
          : (W.previousKeyMatched = !1);
      }
      b && b(O);
    },
    z = Ut(A, i);
  let D = -1;
  T.Children.forEach(d, (O, M) => {
    if (!T.isValidElement(O)) {
      D === M && ((D += 1), D >= d.length && (D = -1));
      return;
    }
    O.props.disabled ||
      (((x === "selectedMenu" && O.props.selected) || D === -1) && (D = M)),
      D === M &&
        (O.props.disabled ||
          O.props.muiSkipListHighlight ||
          O.type.muiSkipListHighlight) &&
        ((D += 1), D >= d.length && (D = -1));
  });
  const k = T.Children.map(d, (O, M) => {
    if (M === D) {
      const E = {};
      return (
        f && (E.autoFocus = !0),
        O.props.tabIndex === void 0 && x === "selectedMenu" && (E.tabIndex = 0),
        T.cloneElement(O, E)
      );
    }
    return O;
  });
  return p.jsx(z0, {
    role: "menu",
    ref: z,
    className: h,
    onKeyDown: C,
    tabIndex: c ? 0 : -1,
    ...w,
    children: k,
  });
});
function qw(n) {
  return qe("MuiPopover", n);
}
ke("MuiPopover", ["root", "paper"]);
function gv(n, r) {
  let i = 0;
  return (
    typeof r == "number"
      ? (i = r)
      : r === "center"
      ? (i = n.height / 2)
      : r === "bottom" && (i = n.height),
    i
  );
}
function yv(n, r) {
  let i = 0;
  return (
    typeof r == "number"
      ? (i = r)
      : r === "center"
      ? (i = n.width / 2)
      : r === "right" && (i = n.width),
    i
  );
}
function vv(n) {
  return [n.horizontal, n.vertical]
    .map((r) => (typeof r == "number" ? `${r}px` : r))
    .join(" ");
}
function hd(n) {
  return typeof n == "function" ? n() : n;
}
const Gw = (n) => {
    const { classes: r } = n;
    return Ge({ root: ["root"], paper: ["paper"] }, qw, r);
  },
  Iw = ie(gp, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({}),
  N0 = ie(Fc, {
    name: "MuiPopover",
    slot: "Paper",
    overridesResolver: (n, r) => r.paper,
  })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  Yw = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiPopover" }),
      {
        action: c,
        anchorEl: f,
        anchorOrigin: d = { vertical: "top", horizontal: "left" },
        anchorPosition: h,
        anchorReference: m = "anchorEl",
        children: g,
        className: b,
        container: x,
        elevation: w = 8,
        marginThreshold: A = 16,
        open: R,
        PaperProps: C = {},
        slots: z = {},
        slotProps: D = {},
        transformOrigin: k = { vertical: "top", horizontal: "left" },
        TransitionComponent: O,
        transitionDuration: M = "auto",
        TransitionProps: E = {},
        disableScrollLock: $ = !1,
        ...L
      } = l,
      W = T.useRef(),
      q = {
        ...l,
        anchorOrigin: d,
        anchorReference: m,
        elevation: w,
        marginThreshold: A,
        transformOrigin: k,
        TransitionComponent: O,
        transitionDuration: M,
        TransitionProps: E,
      },
      v = Gw(q),
      F = T.useCallback(() => {
        if (m === "anchorPosition") return h;
        const X = hd(f),
          me = (
            X && X.nodeType === 1 ? X : Mn(W.current).body
          ).getBoundingClientRect();
        return {
          top: me.top + gv(me, d.vertical),
          left: me.left + yv(me, d.horizontal),
        };
      }, [f, d.horizontal, d.vertical, h, m]),
      V = T.useCallback(
        (X) => ({
          vertical: gv(X, k.vertical),
          horizontal: yv(X, k.horizontal),
        }),
        [k.horizontal, k.vertical]
      ),
      I = T.useCallback(
        (X) => {
          const he = { width: X.offsetWidth, height: X.offsetHeight },
            me = V(he);
          if (m === "none")
            return { top: null, left: null, transformOrigin: vv(me) };
          const ze = F();
          let Ee = ze.top - me.vertical,
            Ue = ze.left - me.horizontal;
          const it = Ee + he.height,
            dt = Ue + he.width,
            tt = La(hd(f)),
            Bt = tt.innerHeight - A,
            nt = tt.innerWidth - A;
          if (A !== null && Ee < A) {
            const Qe = Ee - A;
            (Ee -= Qe), (me.vertical += Qe);
          } else if (A !== null && it > Bt) {
            const Qe = it - Bt;
            (Ee -= Qe), (me.vertical += Qe);
          }
          if (A !== null && Ue < A) {
            const Qe = Ue - A;
            (Ue -= Qe), (me.horizontal += Qe);
          } else if (dt > nt) {
            const Qe = dt - nt;
            (Ue -= Qe), (me.horizontal += Qe);
          }
          return {
            top: `${Math.round(Ee)}px`,
            left: `${Math.round(Ue)}px`,
            transformOrigin: vv(me),
          };
        },
        [f, m, F, V, A]
      ),
      [oe, P] = T.useState(R),
      N = T.useCallback(() => {
        const X = W.current;
        if (!X) return;
        const he = I(X);
        he.top !== null && X.style.setProperty("top", he.top),
          he.left !== null && (X.style.left = he.left),
          (X.style.transformOrigin = he.transformOrigin),
          P(!0);
      }, [I]);
    T.useEffect(
      () => (
        $ && window.addEventListener("scroll", N),
        () => window.removeEventListener("scroll", N)
      ),
      [f, $, N]
    );
    const J = () => {
        N();
      },
      se = () => {
        P(!1);
      };
    T.useEffect(() => {
      R && N();
    }),
      T.useImperativeHandle(
        c,
        () =>
          R
            ? {
                updatePosition: () => {
                  N();
                },
              }
            : null,
        [R, N]
      ),
      T.useEffect(() => {
        if (!R) return;
        const X = Jv(() => {
            N();
          }),
          he = La(f);
        return (
          he.addEventListener("resize", X),
          () => {
            X.clear(), he.removeEventListener("resize", X);
          }
        );
      }, [f, R, N]);
    let ae = M;
    const j = {
        slots: { transition: O, ...z },
        slotProps: { transition: E, paper: C, ...D },
      },
      [K, Q] = ot("transition", {
        elementType: Sc,
        externalForwardedProps: j,
        ownerState: q,
        getSlotProps: (X) => ({
          ...X,
          onEntering: (he, me) => {
            var ze;
            (ze = X.onEntering) == null || ze.call(X, he, me), J();
          },
          onExited: (he) => {
            var me;
            (me = X.onExited) == null || me.call(X, he), se();
          },
        }),
        additionalProps: { appear: !0, in: R },
      });
    M === "auto" && !K.muiSupportAuto && (ae = void 0);
    const Z = x || (f ? Mn(hd(f)).body : void 0),
      [ne, { slots: fe, slotProps: de, ...ge }] = ot("root", {
        ref: i,
        elementType: Iw,
        externalForwardedProps: { ...j, ...L },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: z.backdrop },
          slotProps: {
            backdrop: BC(
              typeof D.backdrop == "function" ? D.backdrop(q) : D.backdrop,
              { invisible: !0 }
            ),
          },
          container: Z,
          open: R,
        },
        ownerState: q,
        className: Ae(v.root, b),
      }),
      [pe, ye] = ot("paper", {
        ref: W,
        className: v.paper,
        elementType: N0,
        externalForwardedProps: j,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: w, style: oe ? void 0 : { opacity: 0 } },
        ownerState: q,
      });
    return p.jsx(ne, {
      ...ge,
      ...(!Al(ne) && { slots: fe, slotProps: de, disableScrollLock: $ }),
      children: p.jsx(K, {
        ...Q,
        timeout: ae,
        children: p.jsx(pe, { ...ye, children: g }),
      }),
    });
  });
function Ww(n) {
  return qe("MuiMenu", n);
}
ke("MuiMenu", ["root", "paper", "list"]);
const Vw = { vertical: "top", horizontal: "right" },
  Xw = { vertical: "top", horizontal: "left" },
  Kw = (n) => {
    const { classes: r } = n;
    return Ge({ root: ["root"], paper: ["paper"], list: ["list"] }, Ww, r);
  },
  Qw = ie(Yw, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({}),
  Zw = ie(N0, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (n, r) => r.paper,
  })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
  Jw = ie(Pw, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (n, r) => r.list,
  })({ outline: 0 }),
  F0 = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiMenu" }),
      {
        autoFocus: c = !0,
        children: f,
        className: d,
        disableAutoFocusItem: h = !1,
        MenuListProps: m = {},
        onClose: g,
        open: b,
        PaperProps: x = {},
        PopoverClasses: w,
        transitionDuration: A = "auto",
        TransitionProps: { onEntering: R, ...C } = {},
        variant: z = "selectedMenu",
        slots: D = {},
        slotProps: k = {},
        ...O
      } = l,
      M = tp(),
      E = {
        ...l,
        autoFocus: c,
        disableAutoFocusItem: h,
        MenuListProps: m,
        onEntering: R,
        PaperProps: x,
        transitionDuration: A,
        TransitionProps: C,
        variant: z,
      },
      $ = Kw(E),
      L = c && !h && b,
      W = T.useRef(null),
      q = (ae, j) => {
        W.current &&
          W.current.adjustStyleForScrollbar(ae, {
            direction: M ? "rtl" : "ltr",
          }),
          R && R(ae, j);
      },
      v = (ae) => {
        ae.key === "Tab" && (ae.preventDefault(), g && g(ae, "tabKeyDown"));
      };
    let F = -1;
    T.Children.map(f, (ae, j) => {
      T.isValidElement(ae) &&
        (ae.props.disabled ||
          (((z === "selectedMenu" && ae.props.selected) || F === -1) &&
            (F = j)));
    });
    const V = {
        slots: D,
        slotProps: { list: m, transition: C, paper: x, ...k },
      },
      I = i0({
        elementType: D.root,
        externalSlotProps: k.root,
        ownerState: E,
        className: [$.root, d],
      }),
      [oe, P] = ot("paper", {
        className: $.paper,
        elementType: Zw,
        externalForwardedProps: V,
        shouldForwardComponentProp: !0,
        ownerState: E,
      }),
      [N, J] = ot("list", {
        className: Ae($.list, m.className),
        elementType: Jw,
        shouldForwardComponentProp: !0,
        externalForwardedProps: V,
        getSlotProps: (ae) => ({
          ...ae,
          onKeyDown: (j) => {
            var K;
            v(j), (K = ae.onKeyDown) == null || K.call(ae, j);
          },
        }),
        ownerState: E,
      }),
      se =
        typeof V.slotProps.transition == "function"
          ? V.slotProps.transition(E)
          : V.slotProps.transition;
    return p.jsx(Qw, {
      onClose: g,
      anchorOrigin: { vertical: "bottom", horizontal: M ? "right" : "left" },
      transformOrigin: M ? Vw : Xw,
      slots: {
        root: D.root,
        paper: oe,
        backdrop: D.backdrop,
        ...(D.transition && { transition: D.transition }),
      },
      slotProps: {
        root: I,
        paper: P,
        backdrop: typeof k.backdrop == "function" ? k.backdrop(E) : k.backdrop,
        transition: {
          ...se,
          onEntering: (...ae) => {
            var j;
            q(...ae),
              (j = se == null ? void 0 : se.onEntering) == null ||
                j.call(se, ...ae);
          },
        },
      },
      open: b,
      ref: i,
      transitionDuration: A,
      ownerState: E,
      ...O,
      classes: w,
      children: p.jsx(N, {
        actions: W,
        autoFocus: c && (F === -1 || h),
        autoFocusItem: L,
        variant: z,
        ...J,
        children: f,
      }),
    });
  });
function eA(n) {
  return qe("MuiMenuItem", n);
}
const ll = ke("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected",
  ]),
  tA = (n, r) => {
    const { ownerState: i } = n;
    return [
      r.root,
      i.dense && r.dense,
      i.divider && r.divider,
      !i.disableGutters && r.gutters,
    ];
  },
  nA = (n) => {
    const {
        disabled: r,
        dense: i,
        divider: l,
        disableGutters: c,
        selected: f,
        classes: d,
      } = n,
      m = Ge(
        {
          root: [
            "root",
            i && "dense",
            r && "disabled",
            !c && "gutters",
            l && "divider",
            f && "selected",
          ],
        },
        eA,
        d
      );
    return { ...d, ...m };
  },
  aA = ie(ip, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: tA,
  })(
    rt(({ theme: n }) => ({
      ...n.typography.body1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      position: "relative",
      textDecoration: "none",
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: "border-box",
      whiteSpace: "nowrap",
      "&:hover": {
        textDecoration: "none",
        backgroundColor: (n.vars || n).palette.action.hover,
        "@media (hover: none)": { backgroundColor: "transparent" },
      },
      [`&.${ll.selected}`]: {
        backgroundColor: n.vars
          ? `rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`
          : tn(n.palette.primary.main, n.palette.action.selectedOpacity),
        [`&.${ll.focusVisible}`]: {
          backgroundColor: n.vars
            ? `rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`
            : tn(
                n.palette.primary.main,
                n.palette.action.selectedOpacity + n.palette.action.focusOpacity
              ),
        },
      },
      [`&.${ll.selected}:hover`]: {
        backgroundColor: n.vars
          ? `rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`
          : tn(
              n.palette.primary.main,
              n.palette.action.selectedOpacity + n.palette.action.hoverOpacity
            ),
        "@media (hover: none)": {
          backgroundColor: n.vars
            ? `rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`
            : tn(n.palette.primary.main, n.palette.action.selectedOpacity),
        },
      },
      [`&.${ll.focusVisible}`]: {
        backgroundColor: (n.vars || n).palette.action.focus,
      },
      [`&.${ll.disabled}`]: {
        opacity: (n.vars || n).palette.action.disabledOpacity,
      },
      [`& + .${cv.root}`]: {
        marginTop: n.spacing(1),
        marginBottom: n.spacing(1),
      },
      [`& + .${cv.inset}`]: { marginLeft: 52 },
      [`& .${hv.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${hv.inset}`]: { paddingLeft: 36 },
      [`& .${pv.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: r }) => r.divider,
          style: {
            borderBottom: `1px solid ${(n.vars || n).palette.divider}`,
            backgroundClip: "padding-box",
          },
        },
        {
          props: ({ ownerState: r }) => !r.dense,
          style: { [n.breakpoints.up("sm")]: { minHeight: "auto" } },
        },
        {
          props: ({ ownerState: r }) => r.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...n.typography.body2,
            [`& .${pv.root} svg`]: { fontSize: "1.25rem" },
          },
        },
      ],
    }))
  ),
  ft = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiMenuItem" }),
      {
        autoFocus: c = !1,
        component: f = "li",
        dense: d = !1,
        divider: h = !1,
        disableGutters: m = !1,
        focusVisibleClassName: g,
        role: b = "menuitem",
        tabIndex: x,
        className: w,
        ...A
      } = l,
      R = T.useContext(qr),
      C = T.useMemo(
        () => ({ dense: d || R.dense || !1, disableGutters: m }),
        [R.dense, d, m]
      ),
      z = T.useRef(null);
    ga(() => {
      c && z.current && z.current.focus();
    }, [c]);
    const D = { ...l, dense: C.dense, divider: h, disableGutters: m },
      k = nA(l),
      O = Ut(z, i);
    let M;
    return (
      l.disabled || (M = x !== void 0 ? x : -1),
      p.jsx(qr.Provider, {
        value: C,
        children: p.jsx(aA, {
          ref: O,
          role: b,
          tabIndex: M,
          component: f,
          focusVisibleClassName: Ae(k.focusVisible, g),
          className: Ae(k.root, w),
          ...A,
          ownerState: D,
          classes: k,
        }),
      })
    );
  });
function rA(n) {
  return qe("MuiNativeSelect", n);
}
const bp = ke("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  oA = (n) => {
    const {
        classes: r,
        variant: i,
        disabled: l,
        multiple: c,
        open: f,
        error: d,
      } = n,
      h = {
        select: ["select", i, l && "disabled", c && "multiple", d && "error"],
        icon: ["icon", `icon${Te(i)}`, f && "iconOpen", l && "disabled"],
      };
    return Ge(h, rA, r);
  },
  $0 = ie("select")(({ theme: n }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": { borderRadius: 0 },
    [`&.${bp.disabled}`]: { cursor: "default" },
    "&[multiple]": { height: "auto" },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (n.vars || n).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: r }) =>
          r.variant !== "filled" && r.variant !== "outlined",
        style: { "&&&": { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: "filled" }, style: { "&&&": { paddingRight: 32 } } },
      {
        props: { variant: "outlined" },
        style: {
          borderRadius: (n.vars || n).shape.borderRadius,
          "&:focus": { borderRadius: (n.vars || n).shape.borderRadius },
          "&&&": { paddingRight: 32 },
        },
      },
    ],
  })),
  iA = ie($0, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: Kn,
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.select,
        r[i.variant],
        i.error && r.error,
        { [`&.${bp.multiple}`]: r.multiple },
      ];
    },
  })({}),
  U0 = ie("svg")(({ theme: n }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (n.vars || n).palette.action.active,
    [`&.${bp.disabled}`]: { color: (n.vars || n).palette.action.disabled },
    variants: [
      {
        props: ({ ownerState: r }) => r.open,
        style: { transform: "rotate(180deg)" },
      },
      { props: { variant: "filled" }, style: { right: 7 } },
      { props: { variant: "outlined" }, style: { right: 7 } },
    ],
  })),
  lA = ie(U0, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.icon,
        i.variant && r[`icon${Te(i.variant)}`],
        i.open && r.iconOpen,
      ];
    },
  })({}),
  sA = T.forwardRef(function (r, i) {
    const {
        className: l,
        disabled: c,
        error: f,
        IconComponent: d,
        inputRef: h,
        variant: m = "standard",
        ...g
      } = r,
      b = { ...r, disabled: c, variant: m, error: f },
      x = oA(b);
    return p.jsxs(T.Fragment, {
      children: [
        p.jsx(iA, {
          ownerState: b,
          className: Ae(x.select, l),
          disabled: c,
          ref: h || i,
          ...g,
        }),
        r.multiple
          ? null
          : p.jsx(lA, { as: d, ownerState: b, className: x.icon }),
      ],
    });
  });
var bv;
const cA = ie("fieldset", { shouldForwardProp: Kn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  uA = ie("legend", { shouldForwardProp: Kn })(
    rt(({ theme: n }) => ({
      float: "unset",
      width: "auto",
      overflow: "hidden",
      variants: [
        {
          props: ({ ownerState: r }) => !r.withLabel,
          style: {
            padding: 0,
            lineHeight: "11px",
            transition: n.transitions.create("width", {
              duration: 150,
              easing: n.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel,
          style: {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: n.transitions.create("max-width", {
              duration: 50,
              easing: n.transitions.easing.easeOut,
            }),
            whiteSpace: "nowrap",
            "& > span": {
              paddingLeft: 5,
              paddingRight: 5,
              display: "inline-block",
              opacity: 0,
              visibility: "visible",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.withLabel && r.notched,
          style: {
            maxWidth: "100%",
            transition: n.transitions.create("max-width", {
              duration: 100,
              easing: n.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  );
function fA(n) {
  const {
      children: r,
      classes: i,
      className: l,
      label: c,
      notched: f,
      ...d
    } = n,
    h = c != null && c !== "",
    m = { ...n, notched: f, withLabel: h };
  return p.jsx(cA, {
    "aria-hidden": !0,
    className: l,
    ownerState: m,
    ...d,
    children: p.jsx(uA, {
      ownerState: m,
      children: h
        ? p.jsx("span", { children: c })
        : bv ||
          (bv = p.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​",
          })),
    }),
  });
}
const dA = (n) => {
    const { classes: r } = n,
      l = Ge(
        {
          root: ["root"],
          notchedOutline: ["notchedOutline"],
          input: ["input"],
        },
        eR,
        r
      );
    return { ...r, ...l };
  },
  pA = ie(Hc, {
    shouldForwardProp: (n) => Kn(n) || n === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: _c,
  })(
    rt(({ theme: n }) => {
      const r =
        n.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        position: "relative",
        borderRadius: (n.vars || n).shape.borderRadius,
        [`&:hover .${sa.notchedOutline}`]: {
          borderColor: (n.vars || n).palette.text.primary,
        },
        "@media (hover: none)": {
          [`&:hover .${sa.notchedOutline}`]: {
            borderColor: n.vars
              ? `rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`
              : r,
          },
        },
        [`&.${sa.focused} .${sa.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(n.palette)
            .filter(Gn())
            .map(([i]) => ({
              props: { color: i },
              style: {
                [`&.${sa.focused} .${sa.notchedOutline}`]: {
                  borderColor: (n.vars || n).palette[i].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${sa.error} .${sa.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.error.main,
              },
              [`&.${sa.disabled} .${sa.notchedOutline}`]: {
                borderColor: (n.vars || n).palette.action.disabled,
              },
            },
          },
          {
            props: ({ ownerState: i }) => i.startAdornment,
            style: { paddingLeft: 14 },
          },
          {
            props: ({ ownerState: i }) => i.endAdornment,
            style: { paddingRight: 14 },
          },
          {
            props: ({ ownerState: i }) => i.multiline,
            style: { padding: "16.5px 14px" },
          },
          {
            props: ({ ownerState: i, size: l }) => i.multiline && l === "small",
            style: { padding: "8.5px 14px" },
          },
        ],
      };
    })
  ),
  hA = ie(fA, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (n, r) => r.notchedOutline,
  })(
    rt(({ theme: n }) => {
      const r =
        n.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.23)"
          : "rgba(255, 255, 255, 0.23)";
      return {
        borderColor: n.vars
          ? `rgba(${n.vars.palette.common.onBackgroundChannel} / 0.23)`
          : r,
      };
    })
  ),
  mA = ie(Pc, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Lc,
  })(
    rt(({ theme: n }) => ({
      padding: "16.5px 14px",
      ...(!n.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow:
            n.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: n.palette.mode === "light" ? null : "#fff",
          caretColor: n.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      }),
      ...(n.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [n.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      }),
      variants: [
        { props: { size: "small" }, style: { padding: "8.5px 14px" } },
        { props: ({ ownerState: r }) => r.multiline, style: { padding: 0 } },
        {
          props: ({ ownerState: r }) => r.startAdornment,
          style: { paddingLeft: 0 },
        },
        {
          props: ({ ownerState: r }) => r.endAdornment,
          style: { paddingRight: 0 },
        },
      ],
    }))
  ),
  xp = T.forwardRef(function (r, i) {
    var l;
    const c = Ye({ props: r, name: "MuiOutlinedInput" }),
      {
        components: f = {},
        fullWidth: d = !1,
        inputComponent: h = "input",
        label: m,
        multiline: g = !1,
        notched: b,
        slots: x = {},
        type: w = "text",
        ...A
      } = c,
      R = dA(c),
      C = ai(),
      z = ni({
        props: c,
        muiFormControl: C,
        states: [
          "color",
          "disabled",
          "error",
          "focused",
          "hiddenLabel",
          "size",
          "required",
        ],
      }),
      D = {
        ...c,
        color: z.color || "primary",
        disabled: z.disabled,
        error: z.error,
        focused: z.focused,
        formControl: C,
        fullWidth: d,
        hiddenLabel: z.hiddenLabel,
        multiline: g,
        size: z.size,
        type: w,
      },
      k = x.root ?? f.Root ?? pA,
      O = x.input ?? f.Input ?? mA;
    return p.jsx(mp, {
      slots: { root: k, input: O },
      renderSuffix: (M) =>
        p.jsx(hA, {
          ownerState: D,
          className: R.notchedOutline,
          label:
            m != null && m !== "" && z.required
              ? l || (l = p.jsxs(T.Fragment, { children: [m, " ", "*"] }))
              : m,
          notched:
            typeof b < "u" ? b : !!(M.startAdornment || M.filled || M.focused),
        }),
      fullWidth: d,
      inputComponent: h,
      multiline: g,
      ref: i,
      type: w,
      ...A,
      classes: { ...R, notchedOutline: null },
    });
  });
xp.muiName = "Input";
function _0(n) {
  return qe("MuiSelect", n);
}
const sl = ke("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var xv;
const gA = ie($0, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        { [`&.${sl.select}`]: r.select },
        { [`&.${sl.select}`]: r[i.variant] },
        { [`&.${sl.error}`]: r.error },
        { [`&.${sl.multiple}`]: r.multiple },
      ];
    },
  })({
    [`&.${sl.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  yA = ie(U0, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.icon,
        i.variant && r[`icon${Te(i.variant)}`],
        i.open && r.iconOpen,
      ];
    },
  })({}),
  vA = ie("input", {
    shouldForwardProp: (n) => d0(n) && n !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (n, r) => r.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Sv(n, r) {
  return typeof r == "object" && r !== null ? n === r : String(n) === String(r);
}
function bA(n) {
  return n == null || (typeof n == "string" && !n.trim());
}
const xA = (n) => {
    const {
        classes: r,
        variant: i,
        disabled: l,
        multiple: c,
        open: f,
        error: d,
      } = n,
      h = {
        select: ["select", i, l && "disabled", c && "multiple", d && "error"],
        icon: ["icon", `icon${Te(i)}`, f && "iconOpen", l && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return Ge(h, _0, r);
  },
  SA = T.forwardRef(function (r, i) {
    var lt;
    const {
        "aria-describedby": l,
        "aria-label": c,
        autoFocus: f,
        autoWidth: d,
        children: h,
        className: m,
        defaultOpen: g,
        defaultValue: b,
        disabled: x,
        displayEmpty: w,
        error: A = !1,
        IconComponent: R,
        inputRef: C,
        labelId: z,
        MenuProps: D = {},
        multiple: k,
        name: O,
        onBlur: M,
        onChange: E,
        onClose: $,
        onFocus: L,
        onOpen: W,
        open: q,
        readOnly: v,
        renderValue: F,
        required: V,
        SelectDisplayProps: I = {},
        tabIndex: oe,
        type: P,
        value: N,
        variant: J = "standard",
        ...se
      } = r,
      [ae, j] = Rd({ controlled: N, default: b, name: "Select" }),
      [K, Q] = Rd({ controlled: q, default: g, name: "Select" }),
      Z = T.useRef(null),
      ne = T.useRef(null),
      [fe, de] = T.useState(null),
      { current: ge } = T.useRef(q != null),
      [pe, ye] = T.useState(),
      X = Ut(i, C),
      he = T.useCallback((we) => {
        (ne.current = we), we && de(we);
      }, []),
      me = fe == null ? void 0 : fe.parentNode;
    T.useImperativeHandle(
      X,
      () => ({
        focus: () => {
          ne.current.focus();
        },
        node: Z.current,
        value: ae,
      }),
      [ae]
    ),
      T.useEffect(() => {
        g &&
          K &&
          fe &&
          !ge &&
          (ye(d ? null : me.clientWidth), ne.current.focus());
      }, [fe, d]),
      T.useEffect(() => {
        f && ne.current.focus();
      }, [f]),
      T.useEffect(() => {
        if (!z) return;
        const we = Mn(ne.current).getElementById(z);
        if (we) {
          const Fe = () => {
            getSelection().isCollapsed && ne.current.focus();
          };
          return (
            we.addEventListener("click", Fe),
            () => {
              we.removeEventListener("click", Fe);
            }
          );
        }
      }, [z]);
    const ze = (we, Fe) => {
        we ? W && W(Fe) : $ && $(Fe),
          ge || (ye(d ? null : me.clientWidth), Q(we));
      },
      Ee = (we) => {
        we.button === 0 &&
          (we.preventDefault(), ne.current.focus(), ze(!0, we));
      },
      Ue = (we) => {
        ze(!1, we);
      },
      it = T.Children.toArray(h),
      dt = (we) => {
        const Fe = it.find((We) => We.props.value === we.target.value);
        Fe !== void 0 && (j(Fe.props.value), E && E(we, Fe));
      },
      tt = (we) => (Fe) => {
        let We;
        if (Fe.currentTarget.hasAttribute("tabindex")) {
          if (k) {
            We = Array.isArray(ae) ? ae.slice() : [];
            const xn = ae.indexOf(we.props.value);
            xn === -1 ? We.push(we.props.value) : We.splice(xn, 1);
          } else We = we.props.value;
          if (
            (we.props.onClick && we.props.onClick(Fe), ae !== We && (j(We), E))
          ) {
            const xn = Fe.nativeEvent || Fe,
              Yr = new xn.constructor(xn.type, xn);
            Object.defineProperty(Yr, "target", {
              writable: !0,
              value: { value: We, name: O },
            }),
              E(Yr, we);
          }
          k || ze(!1, Fe);
        }
      },
      Bt = (we) => {
        v ||
          ([" ", "ArrowUp", "ArrowDown", "Enter"].includes(we.key) &&
            (we.preventDefault(), ze(!0, we)));
      },
      nt = fe !== null && K,
      Qe = (we) => {
        !nt &&
          M &&
          (Object.defineProperty(we, "target", {
            writable: !0,
            value: { value: ae, name: O },
          }),
          M(we));
      };
    delete se["aria-invalid"];
    let xe, ln;
    const Ze = [];
    let vn = !1;
    (xc({ value: ae }) || w) && (F ? (xe = F(ae)) : (vn = !0));
    const bn = it.map((we) => {
      if (!T.isValidElement(we)) return null;
      let Fe;
      if (k) {
        if (!Array.isArray(ae)) throw new Error(_a(2));
        (Fe = ae.some((We) => Sv(We, we.props.value))),
          Fe && vn && Ze.push(we.props.children);
      } else
        (Fe = Sv(ae, we.props.value)), Fe && vn && (ln = we.props.children);
      return T.cloneElement(we, {
        "aria-selected": Fe ? "true" : "false",
        onClick: tt(we),
        onKeyUp: (We) => {
          We.key === " " && We.preventDefault(),
            we.props.onKeyUp && we.props.onKeyUp(We);
        },
        role: "option",
        selected: Fe,
        value: void 0,
        "data-value": we.props.value,
      });
    });
    vn &&
      (k
        ? Ze.length === 0
          ? (xe = null)
          : (xe = Ze.reduce(
              (we, Fe, We) => (
                we.push(Fe), We < Ze.length - 1 && we.push(", "), we
              ),
              []
            ))
        : (xe = ln));
    let an = pe;
    !d && ge && fe && (an = me.clientWidth);
    let Kt;
    typeof oe < "u" ? (Kt = oe) : (Kt = x ? null : 0);
    const sn = I.id || (O ? `mui-component-select-${O}` : void 0),
      cn = { ...r, variant: J, value: ae, open: nt, error: A },
      Ne = xA(cn),
      un = {
        ...D.PaperProps,
        ...((lt = D.slotProps) == null ? void 0 : lt.paper),
      },
      Nt = Jo();
    return p.jsxs(T.Fragment, {
      children: [
        p.jsx(gA, {
          as: "div",
          ref: he,
          tabIndex: Kt,
          role: "combobox",
          "aria-controls": nt ? Nt : void 0,
          "aria-disabled": x ? "true" : void 0,
          "aria-expanded": nt ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": c,
          "aria-labelledby": [z, sn].filter(Boolean).join(" ") || void 0,
          "aria-describedby": l,
          "aria-required": V ? "true" : void 0,
          "aria-invalid": A ? "true" : void 0,
          onKeyDown: Bt,
          onMouseDown: x || v ? null : Ee,
          onBlur: Qe,
          onFocus: L,
          ...I,
          ownerState: cn,
          className: Ae(I.className, Ne.select, m),
          id: sn,
          children: bA(xe)
            ? xv ||
              (xv = p.jsx("span", {
                className: "notranslate",
                "aria-hidden": !0,
                children: "​",
              }))
            : xe,
        }),
        p.jsx(vA, {
          "aria-invalid": A,
          value: Array.isArray(ae) ? ae.join(",") : ae,
          name: O,
          ref: Z,
          "aria-hidden": !0,
          onChange: dt,
          tabIndex: -1,
          disabled: x,
          className: Ne.nativeInput,
          autoFocus: f,
          required: V,
          ...se,
          ownerState: cn,
        }),
        p.jsx(yA, { as: R, className: Ne.icon, ownerState: cn }),
        p.jsx(F0, {
          id: `menu-${O || ""}`,
          anchorEl: me,
          open: nt,
          onClose: Ue,
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
          transformOrigin: { vertical: "top", horizontal: "center" },
          ...D,
          slotProps: {
            ...D.slotProps,
            list: {
              "aria-labelledby": z,
              role: "listbox",
              "aria-multiselectable": k ? "true" : void 0,
              disableListWrap: !0,
              id: Nt,
              ...D.MenuListProps,
            },
            paper: {
              ...un,
              style: { minWidth: an, ...(un != null ? un.style : null) },
            },
          },
          children: bn,
        }),
      ],
    });
  }),
  CA = (n) => {
    const { classes: r } = n,
      l = Ge({ root: ["root"] }, _0, r);
    return { ...r, ...l };
  },
  Sp = {
    name: "MuiSelect",
    overridesResolver: (n, r) => r.root,
    shouldForwardProp: (n) => Kn(n) && n !== "variant",
    slot: "Root",
  },
  TA = ie(vp, Sp)(""),
  EA = ie(xp, Sp)(""),
  RA = ie(yp, Sp)(""),
  Wt = T.forwardRef(function (r, i) {
    const l = Ye({ name: "MuiSelect", props: r }),
      {
        autoWidth: c = !1,
        children: f,
        classes: d = {},
        className: h,
        defaultOpen: m = !1,
        displayEmpty: g = !1,
        IconComponent: b = nR,
        id: x,
        input: w,
        inputProps: A,
        label: R,
        labelId: C,
        MenuProps: z,
        multiple: D = !1,
        native: k = !1,
        onClose: O,
        onOpen: M,
        open: E,
        renderValue: $,
        SelectDisplayProps: L,
        variant: W = "outlined",
        ...q
      } = l,
      v = k ? sA : SA,
      F = ai(),
      V = ni({ props: l, muiFormControl: F, states: ["variant", "error"] }),
      I = V.variant || W,
      oe = { ...l, variant: I, classes: d },
      P = CA(oe),
      { root: N, ...J } = P,
      se =
        w ||
        {
          standard: p.jsx(TA, { ownerState: oe }),
          outlined: p.jsx(EA, { label: R, ownerState: oe }),
          filled: p.jsx(RA, { ownerState: oe }),
        }[I],
      ae = Ut(i, ei(se));
    return p.jsx(T.Fragment, {
      children: T.cloneElement(se, {
        inputComponent: v,
        inputProps: {
          children: f,
          error: V.error,
          IconComponent: b,
          variant: I,
          type: void 0,
          multiple: D,
          ...(k
            ? { id: x }
            : {
                autoWidth: c,
                defaultOpen: m,
                displayEmpty: g,
                labelId: C,
                MenuProps: z,
                onClose: O,
                onOpen: M,
                open: E,
                renderValue: $,
                SelectDisplayProps: { id: x, ...L },
              }),
          ...A,
          classes: A ? nn(J, A.classes) : J,
          ...(w ? w.props.inputProps : {}),
        },
        ...(((D && k) || g) && I === "outlined" ? { notched: !0 } : {}),
        ref: ae,
        className: Ae(se.props.className, h, P.root),
        ...(!w && { variant: I }),
        ...q,
      }),
    });
  });
Wt.muiName = "Select";
function wA(n) {
  return qe("MuiTooltip", n);
}
const wt = ke("MuiTooltip", [
  "popper",
  "popperInteractive",
  "popperArrow",
  "popperClose",
  "tooltip",
  "tooltipArrow",
  "touch",
  "tooltipPlacementLeft",
  "tooltipPlacementRight",
  "tooltipPlacementTop",
  "tooltipPlacementBottom",
  "arrow",
]);
function AA(n) {
  return Math.round(n * 1e5) / 1e5;
}
const MA = (n) => {
    const {
        classes: r,
        disableInteractive: i,
        arrow: l,
        touch: c,
        placement: f,
      } = n,
      d = {
        popper: ["popper", !i && "popperInteractive", l && "popperArrow"],
        tooltip: [
          "tooltip",
          l && "tooltipArrow",
          c && "touch",
          `tooltipPlacement${Te(f.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return Ge(d, wA, r);
  },
  OA = ie(A0, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.popper,
        !i.disableInteractive && r.popperInteractive,
        i.arrow && r.popperArrow,
        !i.open && r.popperClose,
      ];
    },
  })(
    rt(({ theme: n }) => ({
      zIndex: (n.vars || n).zIndex.tooltip,
      pointerEvents: "none",
      variants: [
        {
          props: ({ ownerState: r }) => !r.disableInteractive,
          style: { pointerEvents: "auto" },
        },
        { props: ({ open: r }) => !r, style: { pointerEvents: "none" } },
        {
          props: ({ ownerState: r }) => r.arrow,
          style: {
            [`&[data-popper-placement*="bottom"] .${wt.arrow}`]: {
              top: 0,
              marginTop: "-0.71em",
              "&::before": { transformOrigin: "0 100%" },
            },
            [`&[data-popper-placement*="top"] .${wt.arrow}`]: {
              bottom: 0,
              marginBottom: "-0.71em",
              "&::before": { transformOrigin: "100% 0" },
            },
            [`&[data-popper-placement*="right"] .${wt.arrow}`]: {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "100% 100%" },
            },
            [`&[data-popper-placement*="left"] .${wt.arrow}`]: {
              height: "1em",
              width: "0.71em",
              "&::before": { transformOrigin: "0 0" },
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !r.isRtl,
          style: {
            [`&[data-popper-placement*="right"] .${wt.arrow}`]: {
              left: 0,
              marginLeft: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !!r.isRtl,
          style: {
            [`&[data-popper-placement*="right"] .${wt.arrow}`]: {
              right: 0,
              marginRight: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !r.isRtl,
          style: {
            [`&[data-popper-placement*="left"] .${wt.arrow}`]: {
              right: 0,
              marginRight: "-0.71em",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.arrow && !!r.isRtl,
          style: {
            [`&[data-popper-placement*="left"] .${wt.arrow}`]: {
              left: 0,
              marginLeft: "-0.71em",
            },
          },
        },
      ],
    }))
  ),
  BA = ie("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (n, r) => {
      const { ownerState: i } = n;
      return [
        r.tooltip,
        i.touch && r.touch,
        i.arrow && r.tooltipArrow,
        r[`tooltipPlacement${Te(i.placement.split("-")[0])}`],
      ];
    },
  })(
    rt(({ theme: n }) => ({
      backgroundColor: n.vars
        ? n.vars.palette.Tooltip.bg
        : tn(n.palette.grey[700], 0.92),
      borderRadius: (n.vars || n).shape.borderRadius,
      color: (n.vars || n).palette.common.white,
      fontFamily: n.typography.fontFamily,
      padding: "4px 8px",
      fontSize: n.typography.pxToRem(11),
      maxWidth: 300,
      margin: 2,
      wordWrap: "break-word",
      fontWeight: n.typography.fontWeightMedium,
      [`.${wt.popper}[data-popper-placement*="left"] &`]: {
        transformOrigin: "right center",
      },
      [`.${wt.popper}[data-popper-placement*="right"] &`]: {
        transformOrigin: "left center",
      },
      [`.${wt.popper}[data-popper-placement*="top"] &`]: {
        transformOrigin: "center bottom",
        marginBottom: "14px",
      },
      [`.${wt.popper}[data-popper-placement*="bottom"] &`]: {
        transformOrigin: "center top",
        marginTop: "14px",
      },
      variants: [
        {
          props: ({ ownerState: r }) => r.arrow,
          style: { position: "relative", margin: 0 },
        },
        {
          props: ({ ownerState: r }) => r.touch,
          style: {
            padding: "8px 16px",
            fontSize: n.typography.pxToRem(14),
            lineHeight: `${AA(16 / 14)}em`,
            fontWeight: n.typography.fontWeightRegular,
          },
        },
        {
          props: ({ ownerState: r }) => !r.isRtl,
          style: {
            [`.${wt.popper}[data-popper-placement*="left"] &`]: {
              marginRight: "14px",
            },
            [`.${wt.popper}[data-popper-placement*="right"] &`]: {
              marginLeft: "14px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => !r.isRtl && r.touch,
          style: {
            [`.${wt.popper}[data-popper-placement*="left"] &`]: {
              marginRight: "24px",
            },
            [`.${wt.popper}[data-popper-placement*="right"] &`]: {
              marginLeft: "24px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => !!r.isRtl,
          style: {
            [`.${wt.popper}[data-popper-placement*="left"] &`]: {
              marginLeft: "14px",
            },
            [`.${wt.popper}[data-popper-placement*="right"] &`]: {
              marginRight: "14px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => !!r.isRtl && r.touch,
          style: {
            [`.${wt.popper}[data-popper-placement*="left"] &`]: {
              marginLeft: "24px",
            },
            [`.${wt.popper}[data-popper-placement*="right"] &`]: {
              marginRight: "24px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.touch,
          style: {
            [`.${wt.popper}[data-popper-placement*="top"] &`]: {
              marginBottom: "24px",
            },
          },
        },
        {
          props: ({ ownerState: r }) => r.touch,
          style: {
            [`.${wt.popper}[data-popper-placement*="bottom"] &`]: {
              marginTop: "24px",
            },
          },
        },
      ],
    }))
  ),
  jA = ie("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (n, r) => r.arrow,
  })(
    rt(({ theme: n }) => ({
      overflow: "hidden",
      position: "absolute",
      width: "1em",
      height: "0.71em",
      boxSizing: "border-box",
      color: n.vars ? n.vars.palette.Tooltip.bg : tn(n.palette.grey[700], 0.9),
      "&::before": {
        content: '""',
        margin: "auto",
        display: "block",
        width: "100%",
        height: "100%",
        backgroundColor: "currentColor",
        transform: "rotate(45deg)",
      },
    }))
  );
let tc = !1;
const Cv = new Nc();
let cl = { x: 0, y: 0 };
function nc(n, r) {
  return (i, ...l) => {
    r && r(i, ...l), n(i, ...l);
  };
}
const Vt = T.forwardRef(function (r, i) {
  const l = Ye({ props: r, name: "MuiTooltip" }),
    {
      arrow: c = !1,
      children: f,
      classes: d,
      components: h = {},
      componentsProps: m = {},
      describeChild: g = !1,
      disableFocusListener: b = !1,
      disableHoverListener: x = !1,
      disableInteractive: w = !1,
      disableTouchListener: A = !1,
      enterDelay: R = 100,
      enterNextDelay: C = 0,
      enterTouchDelay: z = 700,
      followCursor: D = !1,
      id: k,
      leaveDelay: O = 0,
      leaveTouchDelay: M = 1500,
      onClose: E,
      onOpen: $,
      open: L,
      placement: W = "bottom",
      PopperComponent: q,
      PopperProps: v = {},
      slotProps: F = {},
      slots: V = {},
      title: I,
      TransitionComponent: oe,
      TransitionProps: P,
      ...N
    } = l,
    J = T.isValidElement(f) ? f : p.jsx("span", { children: f }),
    se = ti(),
    ae = tp(),
    [j, K] = T.useState(),
    [Q, Z] = T.useState(null),
    ne = T.useRef(!1),
    fe = w || D,
    de = Ho(),
    ge = Ho(),
    pe = Ho(),
    ye = Ho(),
    [X, he] = Rd({
      controlled: L,
      default: !1,
      name: "Tooltip",
      state: "open",
    });
  let me = X;
  const ze = Jo(k),
    Ee = T.useRef(),
    Ue = fr(() => {
      Ee.current !== void 0 &&
        ((document.body.style.WebkitUserSelect = Ee.current),
        (Ee.current = void 0)),
        ye.clear();
    });
  T.useEffect(() => Ue, [Ue]);
  const it = (Be) => {
      Cv.clear(), (tc = !0), he(!0), $ && !me && $(Be);
    },
    dt = fr((Be) => {
      Cv.start(800 + O, () => {
        tc = !1;
      }),
        he(!1),
        E && me && E(Be),
        de.start(se.transitions.duration.shortest, () => {
          ne.current = !1;
        });
    }),
    tt = (Be) => {
      (ne.current && Be.type !== "touchstart") ||
        (j && j.removeAttribute("title"),
        ge.clear(),
        pe.clear(),
        R || (tc && C)
          ? ge.start(tc ? C : R, () => {
              it(Be);
            })
          : it(Be));
    },
    Bt = (Be) => {
      ge.clear(),
        pe.start(O, () => {
          dt(Be);
        });
    },
    [, nt] = T.useState(!1),
    Qe = (Be) => {
      mc(Be.target) || (nt(!1), Bt(Be));
    },
    xe = (Be) => {
      j || K(Be.currentTarget), mc(Be.target) && (nt(!0), tt(Be));
    },
    ln = (Be) => {
      ne.current = !0;
      const fn = J.props;
      fn.onTouchStart && fn.onTouchStart(Be);
    },
    Ze = (Be) => {
      ln(Be),
        pe.clear(),
        de.clear(),
        Ue(),
        (Ee.current = document.body.style.WebkitUserSelect),
        (document.body.style.WebkitUserSelect = "none"),
        ye.start(z, () => {
          (document.body.style.WebkitUserSelect = Ee.current), tt(Be);
        });
    },
    vn = (Be) => {
      J.props.onTouchEnd && J.props.onTouchEnd(Be),
        Ue(),
        pe.start(M, () => {
          dt(Be);
        });
    };
  T.useEffect(() => {
    if (!me) return;
    function Be(fn) {
      fn.key === "Escape" && dt(fn);
    }
    return (
      document.addEventListener("keydown", Be),
      () => {
        document.removeEventListener("keydown", Be);
      }
    );
  }, [dt, me]);
  const bn = Ut(ei(J), K, i);
  !I && I !== 0 && (me = !1);
  const an = T.useRef(),
    Kt = (Be) => {
      const fn = J.props;
      fn.onMouseMove && fn.onMouseMove(Be),
        (cl = { x: Be.clientX, y: Be.clientY }),
        an.current && an.current.update();
    },
    sn = {},
    cn = typeof I == "string";
  g
    ? ((sn.title = !me && cn && !x ? I : null),
      (sn["aria-describedby"] = me ? ze : null))
    : ((sn["aria-label"] = cn ? I : null),
      (sn["aria-labelledby"] = me && !cn ? ze : null));
  const Ne = {
      ...sn,
      ...N,
      ...J.props,
      className: Ae(N.className, J.props.className),
      onTouchStart: ln,
      ref: bn,
      ...(D ? { onMouseMove: Kt } : {}),
    },
    un = {};
  A || ((Ne.onTouchStart = Ze), (Ne.onTouchEnd = vn)),
    x ||
      ((Ne.onMouseOver = nc(tt, Ne.onMouseOver)),
      (Ne.onMouseLeave = nc(Bt, Ne.onMouseLeave)),
      fe || ((un.onMouseOver = tt), (un.onMouseLeave = Bt))),
    b ||
      ((Ne.onFocus = nc(xe, Ne.onFocus)),
      (Ne.onBlur = nc(Qe, Ne.onBlur)),
      fe || ((un.onFocus = xe), (un.onBlur = Qe)));
  const Nt = {
      ...l,
      isRtl: ae,
      arrow: c,
      disableInteractive: fe,
      placement: W,
      PopperComponentProp: q,
      touch: ne.current,
    },
    lt = typeof F.popper == "function" ? F.popper(Nt) : F.popper,
    we = T.useMemo(() => {
      var fn, Kr;
      let Be = [
        { name: "arrow", enabled: !!Q, options: { element: Q, padding: 4 } },
      ];
      return (
        (fn = v.popperOptions) != null &&
          fn.modifiers &&
          (Be = Be.concat(v.popperOptions.modifiers)),
        (Kr = lt == null ? void 0 : lt.popperOptions) != null &&
          Kr.modifiers &&
          (Be = Be.concat(lt.popperOptions.modifiers)),
        {
          ...v.popperOptions,
          ...(lt == null ? void 0 : lt.popperOptions),
          modifiers: Be,
        }
      );
    }, [Q, v.popperOptions, lt == null ? void 0 : lt.popperOptions]),
    Fe = MA(Nt),
    We = typeof F.transition == "function" ? F.transition(Nt) : F.transition,
    xn = {
      slots: {
        popper: h.Popper,
        transition: h.Transition ?? oe,
        tooltip: h.Tooltip,
        arrow: h.Arrow,
        ...V,
      },
      slotProps: {
        arrow: F.arrow ?? m.arrow,
        popper: { ...v, ...(lt ?? m.popper) },
        tooltip: F.tooltip ?? m.tooltip,
        transition: { ...P, ...(We ?? m.transition) },
      },
    },
    [Yr, qc] = ot("popper", {
      elementType: OA,
      externalForwardedProps: xn,
      ownerState: Nt,
      className: Ae(Fe.popper, v == null ? void 0 : v.className),
    }),
    [Wr, Vr] = ot("transition", {
      elementType: Sc,
      externalForwardedProps: xn,
      ownerState: Nt,
    }),
    [ba, Xr] = ot("tooltip", {
      elementType: BA,
      className: Fe.tooltip,
      externalForwardedProps: xn,
      ownerState: Nt,
    }),
    [hr, Gc] = ot("arrow", {
      elementType: jA,
      className: Fe.arrow,
      externalForwardedProps: xn,
      ownerState: Nt,
      ref: Z,
    });
  return p.jsxs(T.Fragment, {
    children: [
      T.cloneElement(J, Ne),
      p.jsx(Yr, {
        as: q ?? A0,
        placement: W,
        anchorEl: D
          ? {
              getBoundingClientRect: () => ({
                top: cl.y,
                left: cl.x,
                right: cl.x,
                bottom: cl.y,
                width: 0,
                height: 0,
              }),
            }
          : j,
        popperRef: an,
        open: j ? me : !1,
        id: ze,
        transition: !0,
        ...un,
        ...qc,
        popperOptions: we,
        children: ({ TransitionProps: Be }) =>
          p.jsx(Wr, {
            timeout: se.transitions.duration.shorter,
            ...Be,
            ...Vr,
            children: p.jsxs(ba, {
              ...Xr,
              children: [I, c ? p.jsx(hr, { ...Gc }) : null],
            }),
          }),
      }),
    ],
  });
});
function zA(n) {
  return qe("MuiTextField", n);
}
ke("MuiTextField", ["root"]);
const DA = { standard: vp, filled: yp, outlined: xp },
  kA = (n) => {
    const { classes: r } = n;
    return Ge({ root: ["root"] }, zA, r);
  },
  NA = ie(fa, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (n, r) => r.root,
  })({}),
  Gr = T.forwardRef(function (r, i) {
    const l = Ye({ props: r, name: "MuiTextField" }),
      {
        autoComplete: c,
        autoFocus: f = !1,
        children: d,
        className: h,
        color: m = "primary",
        defaultValue: g,
        disabled: b = !1,
        error: x = !1,
        FormHelperTextProps: w,
        fullWidth: A = !1,
        helperText: R,
        id: C,
        InputLabelProps: z,
        inputProps: D,
        InputProps: k,
        inputRef: O,
        label: M,
        maxRows: E,
        minRows: $,
        multiline: L = !1,
        name: W,
        onBlur: q,
        onChange: v,
        onFocus: F,
        placeholder: V,
        required: I = !1,
        rows: oe,
        select: P = !1,
        SelectProps: N,
        slots: J = {},
        slotProps: se = {},
        type: ae,
        value: j,
        variant: K = "outlined",
        ...Q
      } = l,
      Z = {
        ...l,
        autoFocus: f,
        color: m,
        disabled: b,
        error: x,
        fullWidth: A,
        multiline: L,
        required: I,
        select: P,
        variant: K,
      },
      ne = kA(Z),
      fe = Jo(C),
      de = R && fe ? `${fe}-helper-text` : void 0,
      ge = M && fe ? `${fe}-label` : void 0,
      pe = DA[K],
      ye = {
        slots: J,
        slotProps: {
          input: k,
          inputLabel: z,
          htmlInput: D,
          formHelperText: w,
          select: N,
          ...se,
        },
      },
      X = {},
      he = ye.slotProps.inputLabel;
    K === "outlined" &&
      (he && typeof he.shrink < "u" && (X.notched = he.shrink), (X.label = M)),
      P &&
        ((!N || !N.native) && (X.id = void 0),
        (X["aria-describedby"] = void 0));
    const [me, ze] = ot("input", {
        elementType: pe,
        externalForwardedProps: ye,
        additionalProps: X,
        ownerState: Z,
      }),
      [Ee, Ue] = ot("inputLabel", {
        elementType: cc,
        externalForwardedProps: ye,
        ownerState: Z,
      }),
      [it, dt] = ot("htmlInput", {
        elementType: "input",
        externalForwardedProps: ye,
        ownerState: Z,
      }),
      [tt, Bt] = ot("formHelperText", {
        elementType: ow,
        externalForwardedProps: ye,
        ownerState: Z,
      }),
      [nt, Qe] = ot("select", {
        elementType: Wt,
        externalForwardedProps: ye,
        ownerState: Z,
      }),
      xe = p.jsx(me, {
        "aria-describedby": de,
        autoComplete: c,
        autoFocus: f,
        defaultValue: g,
        fullWidth: A,
        multiline: L,
        name: W,
        rows: oe,
        maxRows: E,
        minRows: $,
        type: ae,
        value: j,
        id: fe,
        inputRef: O,
        onBlur: q,
        onChange: v,
        onFocus: F,
        placeholder: V,
        inputProps: dt,
        slots: { input: J.htmlInput ? it : void 0 },
        ...ze,
      });
    return p.jsxs(NA, {
      className: Ae(ne.root, h),
      disabled: b,
      error: x,
      fullWidth: A,
      ref: i,
      required: I,
      color: m,
      variant: K,
      ownerState: Z,
      ...Q,
      children: [
        M != null &&
          M !== "" &&
          p.jsx(Ee, { htmlFor: fe, id: ge, ...Ue, children: M }),
        P
          ? p.jsx(nt, {
              "aria-describedby": de,
              id: fe,
              labelId: ge,
              value: j,
              input: xe,
              ...Qe,
              children: d,
            })
          : xe,
        R && p.jsx(tt, { id: de, ...Bt, children: R }),
      ],
    });
  });
function FA({ onLogin: n }) {
  const [r, i] = T.useState("start"),
    [l, c] = T.useState(""),
    [f, d] = T.useState(""),
    [h, m] = T.useState(""),
    [g, b] = T.useState(""),
    [x, w] = T.useState(""),
    [A, R] = T.useState([]),
    [C, z] = T.useState(["", "", ""]),
    [D, k] = T.useState(""),
    [O, M] = T.useState(""),
    E = (F) => {
      const I = /[A-Z]/.test(F),
        oe = /[a-z]/.test(F),
        P = /[0-9]/.test(F),
        N = /[!@#$%^&*]/.test(F);
      return F.length < 8
        ? "Password must be at least 8 characters long."
        : I
        ? oe
          ? P
            ? N
              ? ""
              : "Password must contain at least one special character."
            : "Password must contain at least one number."
          : "Password must contain at least one lowercase letter."
        : "Password must contain at least one uppercase letter.";
    },
    $ = () => {
      const V = [
          "apple",
          "banana",
          "cherry",
          "date",
          "elderberry",
          "fig",
          "grape",
          "honeydew",
          "kiwi",
          "lemon",
          "mango",
          "nectarine",
          "orange",
          "peach",
          "quince",
          "raspberry",
          "strawberry",
          "tangerine",
        ]
          .sort(() => Math.random() - 0.5)
          .slice(0, 12),
        I = V.join(" ");
      return w(I), V;
    };
  T.useEffect(() => {
    if (r === "phrase" && !x) {
      const F = $(),
        V = [];
      for (; V.length < 3; ) {
        const I = Math.floor(Math.random() * F.length);
        V.includes(I) || V.push(I);
      }
      V.sort((I, oe) => I - oe), R(V.map((I) => ({ word: F[I], index: I })));
    }
  }, [r, x]);
  const L = () => {
      const F = E(l);
      if ((b(F), F)) {
        m(F);
        return;
      }
      l && f
        ? l === f
          ? (m(""), i("secure"))
          : m("Passwords do not match")
        : m("Please enter both passwords");
    },
    W = () => {
      i("phrase");
    },
    q = () => {
      A.every((V, I) => C[I].trim().toLowerCase() === V.word.toLowerCase())
        ? (k(""), i("congratulations"))
        : k("The entered words do not match. Please check and try again.");
    },
    v = () => {
      i("loggedIn"), n();
    };
  return p.jsxs("div", {
    style: Ke.loginContainer,
    children: [
      r === "start" &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsx("div", { style: Ke.logo, children: "🦊" }),
            p.jsx(ce, {
              variant: "h2",
              style: Ke.title,
              children: "Welcome to MetaMask",
            }),
            p.jsx(ce, {
              variant: "subtitle1",
              style: Ke.subtitle,
              children: "Set up your wallet",
            }),
            p.jsx(Le, {
              variant: "contained",
              style: Ke.button,
              onClick: () => i("password"),
              children: "Create a New Wallet",
            }),
          ],
        }),
      r === "password" &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsx(ce, {
              variant: "h2",
              style: Ke.title,
              children: "Set a Password",
            }),
            p.jsx(ce, {
              variant: "subtitle1",
              style: Ke.subtitle,
              children: "Choose a strong password to secure your wallet.",
            }),
            p.jsx(Gr, {
              type: "password",
              placeholder: "Enter password",
              value: l,
              onChange: (F) => c(F.target.value),
              error: !!h,
              helperText: h,
              fullWidth: !0,
              margin: "normal",
              variant: "outlined",
              style: Ke.input,
            }),
            p.jsx(Gr, {
              type: "password",
              placeholder: "Confirm password",
              value: f,
              onChange: (F) => d(F.target.value),
              error: !!h,
              helperText: h,
              fullWidth: !0,
              margin: "normal",
              variant: "outlined",
              style: Ke.input,
            }),
            p.jsx(Le, {
              variant: "contained",
              style: Ke.button,
              onClick: L,
              children: "Create",
            }),
            p.jsx(Le, {
              variant: "text",
              style: Ke.toggleButton,
              onClick: () => i("start"),
              children: "Back",
            }),
          ],
        }),
      r === "secure" &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsx(ce, {
              variant: "h2",
              style: Ke.title,
              children: "Secure Your Wallet",
            }),
            p.jsx(ce, {
              variant: "subtitle1",
              style: Ke.subtitle,
              children:
                "Your wallet is protected by a 12-word secret recovery phrase. This phrase is the key to your wallet and funds—keep it safe and private. If you lose it, you won’t be able to recover your wallet.",
            }),
            p.jsx(Le, {
              variant: "contained",
              style: Ke.button,
              onClick: W,
              children: "Next",
            }),
            p.jsx(Le, {
              variant: "text",
              style: Ke.toggleButton,
              onClick: () => i("password"),
              children: "Back",
            }),
          ],
        }),
      r === "phrase" &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsx(ce, {
              variant: "h2",
              style: Ke.title,
              children: "Your Recovery Phrase",
            }),
            p.jsx(ce, {
              variant: "subtitle1",
              style: Ke.subtitle,
              children:
                "Write down these 12 words and keep them safe. Never share them with anyone.",
            }),
            x
              ? p.jsx("div", {
                  style: Ke.phraseContainer,
                  children: x
                    .split(" ")
                    .map((F, V) =>
                      p.jsx("span", { style: Ke.phraseWord, children: F }, V)
                    ),
                })
              : p.jsx(ce, {
                  variant: "body2",
                  style: Ke.loading,
                  children: "Generating recovery phrase...",
                }),
            p.jsx(ce, {
              variant: "h2",
              style: Ke.title,
              children: "Confirm Recovery Phrase",
            }),
            p.jsx(ce, {
              variant: "subtitle1",
              style: Ke.subtitle,
              children:
                "Enter the following words from your recovery phrase to confirm.",
            }),
            A.map((F, V) =>
              p.jsx(
                Gr,
                {
                  label: `Word #${F.index + 1}`,
                  value: C[V],
                  onChange: (I) => {
                    const oe = [...C];
                    (oe[V] = I.target.value), z(oe);
                  },
                  fullWidth: !0,
                  margin: "normal",
                  variant: "outlined",
                  style: Ke.input,
                },
                F.index
              )
            ),
            D &&
              p.jsx(RT, {
                severity: "error",
                style: Ke.errorAlert,
                children: D,
              }),
            p.jsx(Le, {
              variant: "contained",
              style: Ke.button,
              onClick: q,
              children: "Confirm",
            }),
            p.jsx(Le, {
              variant: "text",
              style: Ke.toggleButton,
              onClick: () => i("secure"),
              children: "Back",
            }),
          ],
        }),
      r === "congratulations" &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsx("div", { style: Ke.logoSmall, children: "🦊" }),
            p.jsx(ce, {
              variant: "h2",
              style: Ke.title,
              children: "Congratulations",
            }),
            p.jsx(ce, {
              variant: "subtitle1",
              style: Ke.subtitle,
              children:
                "You passed the test – keep your Secret Recovery Phrase safe, it’s your responsibility!",
            }),
            p.jsxs(z0, {
              style: Ke.tips,
              children: [
                p.jsx(Po, { children: "Save a backup in multiple places." }),
                p.jsx(Po, { children: "Never share the phrase with anyone." }),
                p.jsx(Po, {
                  children:
                    "Be careful of phishing; MetaMask will never spontaneously ask for your Secret Recovery Phrase.",
                }),
                p.jsxs(Po, {
                  children: [
                    "If you need to back up your Secret Recovery Phrase again, you can find it in Settings ",
                    ">",
                    " Security.",
                  ],
                }),
              ],
            }),
            p.jsx(Le, {
              variant: "contained",
              style: Ke.doneButton,
              onClick: v,
              children: "All Done",
            }),
          ],
        }),
      r === "loggedIn" &&
        p.jsx(ce, {
          variant: "h3",
          style: Ke.success,
          children: "Login successful! You’re now in the wallet.",
        }),
    ],
  });
}
const Ke = {
    loginContainer: {
      width: "350px",
      padding: "20px",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    logo: { fontSize: "40px", marginBottom: "20px" },
    logoSmall: { fontSize: "24px", marginBottom: "10px" },
    title: { color: "#F6851B", fontSize: "24px", marginBottom: "10px" },
    subtitle: { color: "#6B7280", fontSize: "14px", marginBottom: "20px" },
    input: { marginBottom: "15px" },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#F6851B",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      marginBottom: "10px",
    },
    toggleButton: {
      background: "none",
      border: "none",
      color: "#8AAEFB",
      cursor: "pointer",
      fontSize: "14px",
    },
    phraseContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px",
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#F3F4F6",
      borderRadius: "5px",
    },
    phraseWord: {
      padding: "5px",
      backgroundColor: "#FFFFFF",
      borderRadius: "3px",
      border: "1px solid #E5E7EB",
      fontSize: "14px",
      color: "#111827",
    },
    tips: {
      padding: 0,
      color: "#6B7280",
      fontSize: "14px",
      textAlign: "left",
      marginBottom: "20px",
    },
    loading: { color: "#6B7280", fontSize: "14px", marginBottom: "20px" },
    success: { color: "#111827", fontSize: "18px", marginTop: "20px" },
    doneButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#3772FF",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    },
    errorAlert: {
      marginBottom: "15px",
      backgroundColor: "#FFEBEE",
      color: "#D32F2F",
    },
  },
  uc = Qn(p.jsx("path", { d: "m7 10 5 5 5-5z" }), "ArrowDropDown"),
  $A = Qn(
    p.jsx("path", {
      d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2",
    }),
    "MoreVert"
  ),
  L0 = Qn(
    p.jsx("path", {
      d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z",
    }),
    "ContentCopy"
  ),
  UA = Qn(
    p.jsx("path", {
      d: "M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z",
    }),
    "School"
  ),
  _A = Qn(
    p.jsx("path", {
      d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  Xt = Qn(
    p.jsx("path", {
      d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8",
    }),
    "InfoOutlined"
  );
function LA({ onComplete: n, onBack: r }) {
  const [i, l] = T.useState("input"),
    [c, f] = T.useState(""),
    [d, h] = T.useState("MNT"),
    [m, g] = T.useState("vmbc.mea"),
    [b, x] = T.useState("INR"),
    [w, A] = T.useState("IN"),
    [R, C] = T.useState("0x92735...B3261"),
    [z, D] = T.useState("UPI"),
    [k, O] = T.useState(""),
    [M, E] = T.useState(null),
    [$, L] = T.useState(0),
    [W, q] = T.useState("pending"),
    [v, F] = T.useState(!1),
    [V, I] = T.useState({ title: "", description: "" }),
    oe = [
      { address: "0x92735...B3261", name: "Account 1" },
      { address: "0x33b61...82611", name: "Account 2" },
    ],
    P = [
      { countryCode: "IN", currency: "INR" },
      { countryCode: "US", currency: "USD" },
      { countryCode: "EU", currency: "EUR" },
      { countryCode: "GB", currency: "GBP" },
      { countryCode: "JP", currency: "JPY" },
      { countryCode: "AU", currency: "AUD" },
      { countryCode: "CA", currency: "CAD" },
      { countryCode: "CN", currency: "CNY" },
    ],
    N = [
      { symbol: "ETH", name: "Ethereum", icon: "E", rate: 224.5 },
      { symbol: "MNT", name: "Meta Network Token", icon: "M", rate: 0.2338 },
    ],
    J = ["vmbc.mea", "Ethereum Mainnet", "Goerli Testnet", "Sepolia Testnet"],
    se = ["UPI", "Credit Card", "Bank Transfer"],
    ae = [{ name: "Onramp.money", rate: 1 }],
    j = {
      account: {
        title: "What is a Wallet Address?",
        description:
          "A wallet address is a unique identifier for your crypto wallet. It works like a bank account number, allowing you to receive funds. In this simulation, you can choose between your available accounts.",
      },
      token: {
        title: "What is a Cryptocurrency Token?",
        description:
          "A token is a type of digital currency that lives on a blockchain. For example, ETH is the native token of the Ethereum blockchain, while MNT is a token for the Meta Network. Each token has a different value and use case.",
      },
      network: {
        title: "What is a Blockchain Network?",
        description:
          'A blockchain network is the digital ledger where all transactions are recorded. "Ethereum Mainnet" is a real, live blockchain, while "Testnets" like Goerli or Sepolia are used for practice without real money.',
      },
      provider: {
        title: "What is a Provider?",
        description:
          "A provider like Onramp.money is a service that facilitates the buying of cryptocurrency with traditional money (like INR or USD). They handle the conversion and transfer to your wallet. In this simulation, we use a mock provider to demonstrate this process.",
      },
    },
    K = (X) => {
      I(j[X]), F(!0);
    },
    Q = (X) => {
      A(X);
      const he = P.find((me) => me.countryCode === X);
      x(he.currency);
    },
    Z = (X) => {
      f(X);
      const he = parseFloat(X);
      !X || isNaN(he)
        ? O("Please enter a valid number")
        : he < 400
        ? O("Amount must be at least ₹400")
        : he > 4e6
        ? O("Amount cannot exceed ₹40,00,000")
        : O("");
    },
    ne = (X) => {
      const he = parseFloat(c);
      if (!c || isNaN(he) || he < 400 || he > 4e6) {
        O("Please enter a valid amount between ₹400 and ₹40,00,000");
        return;
      }
      const me = pe(he, d, X.rate);
      L(me), E(X), l("payment");
    },
    fe = () => {
      q("processing"),
        setTimeout(() => {
          q("success"), l("confirmation");
        }, 2e3);
    },
    de = () => {
      l("complete"), n(parseFloat($), d);
    },
    ge = () => {
      i === "payment" ? l("input") : i === "confirmation" ? l("payment") : r();
    },
    pe = (X, he, me) => {
      if (isNaN(X) || X <= 0) return 0;
      const ze = N.find((it) => it.symbol === he).rate;
      return (
        X /
        (b === "INR"
          ? 83
          : b === "EUR"
          ? 0.92
          : b === "GBP"
          ? 0.79
          : b === "JPY"
          ? 149
          : b === "AUD"
          ? 1.51
          : b === "CAD"
          ? 1.36
          : b === "CNY"
          ? 7.09
          : 1) /
        (me * ze)
      ).toFixed(6);
    },
    ye = () =>
      b === "INR"
        ? "₹"
        : b === "USD"
        ? "$"
        : b === "EUR"
        ? "€"
        : b === "GBP"
        ? "£"
        : b === "JPY"
        ? "¥"
        : b === "AUD" || b === "CAD"
        ? "$"
        : b === "CNY"
        ? "¥"
        : "₹";
  return p.jsxs("div", {
    style: Re.container,
    children: [
      p.jsx(ce, {
        variant: "h6",
        style: Re.headerText,
        children:
          i === "input"
            ? "Buy Crypto (Simulation)"
            : i.charAt(0).toUpperCase() + i.slice(1),
      }),
      i === "input" &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsxs(fd, {
              container: !0,
              spacing: 4,
              children: [
                p.jsxs(fd, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: [
                    p.jsxs("div", {
                      style: Re.formSection,
                      children: [
                        p.jsxs("div", {
                          style: Re.labelWithInfo,
                          children: [
                            p.jsx(ce, {
                              style: Re.label,
                              children: "1. Choose your wallet and currency",
                            }),
                            p.jsx(Vt, {
                              title:
                                "This is your wallet address, like a bank account number for crypto.",
                              children: p.jsx(At, {
                                size: "small",
                                onClick: () => K("account"),
                                children: p.jsx(Xt, {
                                  fontSize: "small",
                                  style: { color: "#B0B0B0" },
                                }),
                              }),
                            }),
                          ],
                        }),
                        p.jsx(fa, {
                          fullWidth: !0,
                          style: Re.selectContainer,
                          children: p.jsx(Wt, {
                            value: R,
                            onChange: (X) => C(X.target.value),
                            style: Re.select,
                            IconComponent: uc,
                            MenuProps: _o,
                            children: oe.map((X) =>
                              p.jsxs(
                                ft,
                                {
                                  value: X.address,
                                  children: [X.name, " (", X.address, ")"],
                                },
                                X.address
                              )
                            ),
                          }),
                        }),
                        p.jsxs("div", {
                          style: Re.locationCurrencyContainer,
                          children: [
                            p.jsx(fa, {
                              style: { ...Re.smallSelectContainer, flex: 1 },
                              children: p.jsx(Wt, {
                                value: w,
                                onChange: (X) => Q(X.target.value),
                                style: Re.smallSelect,
                                MenuProps: _o,
                                children: P.map((X) =>
                                  p.jsx(
                                    ft,
                                    {
                                      value: X.countryCode,
                                      children: X.countryCode,
                                    },
                                    X.countryCode
                                  )
                                ),
                              }),
                            }),
                            p.jsx(fa, {
                              style: { ...Re.smallSelectContainer, flex: 1 },
                              children: p.jsx(Wt, {
                                value: b,
                                onChange: (X) => x(X.target.value),
                                style: Re.smallSelect,
                                MenuProps: _o,
                                children: P.filter(
                                  (X) => X.countryCode === w
                                ).map((X) =>
                                  p.jsx(
                                    ft,
                                    { value: X.currency, children: X.currency },
                                    X.currency
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: Re.formSection,
                      children: [
                        p.jsx(ce, {
                          style: Re.label,
                          children: "2. Enter amount to buy",
                        }),
                        p.jsx(Gr, {
                          value: c,
                          onChange: (X) => Z(X.target.value),
                          fullWidth: !0,
                          placeholder: "0",
                          InputProps: {
                            startAdornment: p.jsx(ce, {
                              style: Re.currencySymbol,
                              children: ye(),
                            }),
                            style: Re.amountInput,
                          },
                          variant: "standard",
                        }),
                        k && p.jsx(ce, { style: Re.errorText, children: k }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: Re.formSection,
                      children: [
                        p.jsxs("div", {
                          style: Re.labelWithInfo,
                          children: [
                            p.jsx(ce, {
                              style: Re.label,
                              children: "3. Select token and network",
                            }),
                            p.jsx(Vt, {
                              title:
                                "A token is a digital asset. A network is the blockchain it runs on.",
                              children: p.jsx(At, {
                                size: "small",
                                onClick: () => K("token"),
                                children: p.jsx(Xt, {
                                  fontSize: "small",
                                  style: { color: "#B0B0B0" },
                                }),
                              }),
                            }),
                          ],
                        }),
                        p.jsx(fa, {
                          fullWidth: !0,
                          style: Re.selectContainer,
                          children: p.jsx(Wt, {
                            value: d,
                            onChange: (X) => h(X.target.value),
                            style: Re.select,
                            IconComponent: uc,
                            MenuProps: _o,
                            children: N.map((X) =>
                              p.jsx(
                                ft,
                                {
                                  value: X.symbol,
                                  children: p.jsxs("div", {
                                    style: Re.tokenItem,
                                    children: [
                                      p.jsx("span", {
                                        style: Re.tokenIcon,
                                        children: X.icon,
                                      }),
                                      X.symbol,
                                      " - ",
                                      X.name,
                                    ],
                                  }),
                                },
                                X.symbol
                              )
                            ),
                          }),
                        }),
                        p.jsx(fa, {
                          fullWidth: !0,
                          style: Re.selectContainer,
                          children: p.jsx(Wt, {
                            value: m,
                            onChange: (X) => g(X.target.value),
                            style: Re.select,
                            IconComponent: uc,
                            MenuProps: _o,
                            children: J.map((X) =>
                              p.jsx(ft, { value: X, children: X }, X)
                            ),
                          }),
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: Re.formSection,
                      children: [
                        p.jsx(ce, {
                          style: Re.label,
                          children: "4. Choose payment method",
                        }),
                        p.jsx(fa, {
                          fullWidth: !0,
                          style: Re.selectContainer,
                          children: p.jsx(Wt, {
                            value: z,
                            onChange: (X) => D(X.target.value),
                            style: Re.select,
                            MenuProps: _o,
                            children: se.map((X) =>
                              p.jsx(ft, { value: X, children: X }, X)
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                p.jsxs(fd, {
                  item: !0,
                  xs: 12,
                  md: 6,
                  children: [
                    p.jsxs("div", {
                      style: Re.labelWithInfo,
                      children: [
                        p.jsx(ce, {
                          style: Re.providerHeader,
                          children: "5. Compare rates from providers",
                        }),
                        p.jsx(Vt, {
                          title:
                            "Providers are services that help you buy crypto with regular money.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => K("provider"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    ae.map((X, he) => {
                      const me = parseFloat(c),
                        ze = pe(me, d, X.rate);
                      return p.jsxs(
                        "div",
                        {
                          style: Re.providerCard,
                          children: [
                            he === 0 &&
                              p.jsxs("div", {
                                style: Re.providerTags,
                                children: [
                                  p.jsx("span", {
                                    style: Re.tag,
                                    children: "Most Reliable",
                                  }),
                                  p.jsx("span", {
                                    style: Re.tagBestRate,
                                    children: "Best Rate",
                                  }),
                                ],
                              }),
                            p.jsx(ce, {
                              style: Re.providerName,
                              children: X.name,
                            }),
                            p.jsx(ce, {
                              style: Re.providerAmount,
                              children:
                                me > 0 && !isNaN(me)
                                  ? `${ze} ${d} ≈ ${ye()}${me.toFixed(2)} ${b}`
                                  : "Enter an amount to see the conversion",
                            }),
                            p.jsxs(Le, {
                              variant: "contained",
                              onClick: () => ne(X),
                              style: Re.confirmButton,
                              children: ["Continue with ", X.name],
                            }),
                          ],
                        },
                        he
                      );
                    }),
                  ],
                }),
              ],
            }),
            p.jsx(Le, {
              variant: "text",
              onClick: r,
              style: Re.backButton,
              children: "Back to Wallet",
            }),
          ],
        }),
      i === "payment" &&
        p.jsxs("div", {
          style: Re.paymentContainer,
          children: [
            p.jsxs(ce, {
              style: Re.paymentText,
              children: [
                "You are buying ",
                $,
                " ",
                d,
                " for ",
                ye(),
                c,
                " ",
                b,
                " via ",
                M.name,
                " using ",
                z,
                ".",
              ],
            }),
            W === "pending" &&
              p.jsx(Le, {
                variant: "contained",
                onClick: fe,
                style: Re.confirmButton,
                children: "Proceed to Payment",
              }),
            W === "processing" &&
              p.jsxs("div", {
                style: Re.loadingContainer,
                children: [
                  p.jsx($c, { style: Re.spinner }),
                  p.jsx(ce, {
                    style: Re.paymentText,
                    children: "Processing payment...",
                  }),
                ],
              }),
            W === "failed" &&
              p.jsx(ce, {
                style: Re.errorText,
                children: "Payment failed. Please try again.",
              }),
            p.jsx(Le, {
              variant: "text",
              onClick: ge,
              style: Re.backButton,
              children: "Back",
            }),
          ],
        }),
      i === "confirmation" &&
        p.jsxs("div", {
          style: Re.confirmationContainer,
          children: [
            p.jsxs(ce, {
              style: Re.paymentText,
              children: [
                "Confirm the transaction to deposit ",
                $,
                " ",
                d,
                " into ",
                R,
                " on the ",
                m,
                " network.",
              ],
            }),
            p.jsx(ce, {
              variant: "body2",
              style: { color: "#B0B0B0", marginBottom: 24 },
              children: "This final step sends the crypto to your wallet.",
            }),
            p.jsx(Le, {
              variant: "contained",
              onClick: de,
              style: Re.confirmButton,
              children: "Confirm Transaction",
            }),
            p.jsx(Le, {
              variant: "text",
              onClick: ge,
              style: Re.backButton,
              children: "Back",
            }),
          ],
        }),
      i === "complete" &&
        p.jsxs("div", {
          style: Re.completeContainer,
          children: [
            p.jsxs(ce, {
              style: Re.paymentText,
              children: [
                "Success! ",
                $,
                " ",
                d,
                " has been deposited into your wallet.",
              ],
            }),
            p.jsx(Le, {
              variant: "contained",
              onClick: r,
              style: Re.confirmButton,
              children: "Return to Wallet",
            }),
          ],
        }),
      p.jsxs($l, {
        open: v,
        onClose: () => F(!1),
        PaperProps: { style: { backgroundColor: "#2D2D2D", color: "#FFFFFF" } },
        children: [
          p.jsx(Ll, { children: V.title }),
          p.jsx(_l, { children: p.jsx(ce, { children: V.description }) }),
          p.jsx(Ul, {
            children: p.jsx(Le, {
              onClick: () => F(!1),
              style: { color: "#3772FF" },
              children: "Close",
            }),
          }),
        ],
      }),
    ],
  });
}
const _o = {
    PaperProps: {
      style: { backgroundColor: "#2D2D2D", color: "#FFFFFF", borderRadius: 8 },
    },
  },
  Re = {
    container: {
      backgroundColor: "#1A1A1A",
      borderRadius: 12,
      padding: 24,
      maxWidth: 900,
      margin: "0 auto",
      color: "#FFFFFF",
    },
    headerText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      marginBottom: 24,
      textAlign: "center",
    },
    formSection: { marginBottom: 24 },
    label: { color: "#B0B0B0", fontSize: 14, marginBottom: 8 },
    labelWithInfo: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8,
    },
    selectContainer: { backgroundColor: "#2D2D2D", borderRadius: 8 },
    select: { color: "#FFFFFF", height: 40, padding: "0 8px" },
    smallSelectContainer: { backgroundColor: "#2D2D2D", borderRadius: 8 },
    smallSelect: { color: "#B0B0B0", height: 40, padding: "0 8px" },
    locationCurrencyContainer: { display: "flex", gap: 8 },
    amountInput: {
      color: "#FFFFFF",
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#2D2D2D",
      borderRadius: 8,
      padding: "8px 0",
      marginBottom: 8,
    },
    currencySymbol: { color: "#FFFFFF", fontSize: 32, marginRight: 8 },
    errorText: {
      color: "#FF5555",
      fontSize: 12,
      textAlign: "center",
      margin: "8px 0",
    },
    tokenItem: { display: "flex", alignItems: "center", gap: 8 },
    tokenIcon: { fontSize: 20, color: "#FFFFFF" },
    providerHeader: { color: "#B0B0B0", fontSize: 14, textAlign: "center" },
    providerCard: {
      backgroundColor: "#2D2D2D",
      borderRadius: 8,
      padding: 16,
      textAlign: "center",
    },
    providerTags: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      marginBottom: 8,
    },
    tag: {
      backgroundColor: "#4A4A4A",
      color: "#B0B0B0",
      fontSize: 10,
      padding: "4px 8px",
      borderRadius: 4,
    },
    tagBestRate: {
      backgroundColor: "#4A4A4A",
      color: "#10B981",
      fontSize: 10,
      padding: "4px 8px",
      borderRadius: 4,
    },
    providerName: { color: "#FFFFFF", fontSize: 16, marginBottom: 8 },
    providerAmount: { color: "#B0B0B0", fontSize: 14, marginBottom: 16 },
    confirmButton: {
      backgroundColor: "#3772FF",
      color: "#FFFFFF",
      borderRadius: 20,
      padding: "8px 16px",
      textTransform: "none",
      width: "100%",
      marginTop: 16,
    },
    backButton: { color: "#d9dfebff", textTransform: "none", marginTop: 16 },
    paymentContainer: { textAlign: "center" },
    paymentText: { color: "#FFFFFF", marginBottom: 16 },
    loadingContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
    },
    spinner: { color: "#3772FF" },
    confirmationContainer: { textAlign: "center" },
    completeContainer: { textAlign: "center" },
  };
function HA({ onComplete: n, onBack: r, tokens: i }) {
  const [l, c] = T.useState("0.0218"),
    [f, d] = T.useState(i[0].symbol),
    [h, m] = T.useState(1),
    [g, b] = T.useState("IN"),
    [x, w] = T.useState("INR"),
    [A, R] = T.useState("Debit or Credit"),
    [C, z] = T.useState(!1),
    [D, k] = T.useState({ title: "", description: "" }),
    O = {
      wallet: {
        title: "What is a Wallet?",
        description:
          "This is the wallet you are selling from. It contains the cryptocurrency you own. Each wallet has a unique address.",
      },
      country: {
        title: "What is a Country/Currency?",
        description:
          "Select your country and the currency you wish to receive for your crypto. The conversion rate will be based on your selection.",
      },
      amount: {
        title: "What is the Sell Amount?",
        description:
          "This is the amount of cryptocurrency you want to sell. The equivalent value in your selected fiat currency will be calculated based on the current market rate.",
      },
      token: {
        title: "What is a Token?",
        description:
          "This is the type of cryptocurrency you are selling. Your wallet balance for the selected token is shown below.",
      },
      paymentMethod: {
        title: "What is a Payment Method?",
        description:
          "This is how you will receive your money after selling the crypto. Options vary by country.",
      },
      provider: {
        title: "What is a Provider?",
        description:
          "A provider, like Ramp Network, is a service that handles the transaction of selling your crypto for fiat money. They ensure the process is secure and reliable.",
      },
    },
    M = (P) => {
      k(O[P]), z(!0);
    },
    E = {
      INR: 190750,
      USD: 2300,
      GBP: 1750,
      JPY: 34e4,
      AUD: 3500,
      CAD: 3100,
      CNY: 16e3,
      EUR: 2100,
    },
    $ = {
      IN: "INR",
      US: "USD",
      UK: "GBP",
      JP: "JPY",
      AU: "AUD",
      CA: "CAD",
      CN: "CNY",
      EU: "EUR",
    },
    L = {
      IN: ["UPI", "Debit or Credit", "Bank Transfer"],
      US: ["Debit or Credit", "Bank Transfer"],
      UK: ["Debit or Credit", "Bank Transfer"],
      JP: ["Debit or Credit", "Bank Transfer"],
      AU: ["Debit or Credit", "Bank Transfer"],
      CA: ["Debit or Credit", "Bank Transfer"],
      CN: ["Debit or Credit", "Bank Transfer"],
      EU: ["Debit or Credit", "Bank Transfer"],
    },
    W = (P) => {
      const N = P.target.value;
      b(N), w($[N]), R(L[N][0]);
    },
    q = () => {
      l && !isNaN(l) && parseFloat(l) > 0
        ? parseFloat(i.find((N) => N.symbol === f).balance.split(" ")[0]) >=
          parseFloat(l)
          ? m(2)
          : alert("Insufficient balance")
        : alert("Please enter a valid amount");
    },
    v = () => {
      const P = parseFloat(l) || 0,
        N = E[x],
        J = P * N;
      return `≈ ${F()}${J.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })} ${x}`;
    },
    F = () =>
      x === "INR"
        ? "₹"
        : x === "USD"
        ? "$"
        : x === "GBP"
        ? "£"
        : x === "JPY"
        ? "¥"
        : x === "AUD" || x === "CAD"
        ? "$"
        : x === "CNY"
        ? "¥"
        : x === "EUR"
        ? "€"
        : "₹",
    V = () => {
      m(3),
        setTimeout(() => {
          m(4);
        }, 2e3);
    },
    I = () => {
      m(1);
    },
    oe = () => {
      n(parseFloat(l), f), m(1);
    };
  return p.jsxs(PA, {
    children: [
      p.jsx(qA, { children: p.jsx(GA, { children: "Sell" }) }),
      h === 1 &&
        p.jsxs(p.Fragment, {
          children: [
            p.jsxs(IA, {
              children: [
                p.jsxs("div", {
                  children: [
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        p.jsx(ce, {
                          variant: "subtitle2",
                          style: { color: "#B0B0B0" },
                          children: "Your Wallet",
                        }),
                        p.jsx(Vt, {
                          title: "This is the wallet you are selling from.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => M("wallet"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsx(YA, {
                      value: "0x927...3261",
                      readOnly: !0,
                      children: p.jsxs(ft, {
                        value: "0x927...3261",
                        children: [
                          p.jsx(Tv, { children: "🦊" }),
                          "0x927...3261",
                        ],
                      }),
                    }),
                  ],
                }),
                p.jsxs("div", {
                  children: [
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        p.jsx(ce, {
                          variant: "subtitle2",
                          style: { color: "#B0B0B0" },
                          children: "Country & Currency",
                        }),
                        p.jsx(Vt, {
                          title: "Select your country and currency.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => M("country"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsxs(WA, {
                      children: [
                        p.jsxs(VA, {
                          value: g,
                          onChange: W,
                          children: [
                            p.jsx(ft, { value: "IN", children: "India (IN)" }),
                            p.jsx(ft, { value: "US", children: "USA (US)" }),
                            p.jsx(ft, { value: "UK", children: "UK (UK)" }),
                            p.jsx(ft, { value: "JP", children: "Japan (JP)" }),
                            p.jsx(ft, {
                              value: "AU",
                              children: "Australia (AU)",
                            }),
                            p.jsx(ft, { value: "CA", children: "Canada (CA)" }),
                            p.jsx(ft, { value: "CN", children: "China (CN)" }),
                            p.jsx(ft, { value: "EU", children: "Europe (EU)" }),
                          ],
                        }),
                        p.jsx(XA, {
                          value: x,
                          onChange: (P) => w(P.target.value),
                          children: p.jsx(ft, { value: x, children: x }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs(KA, {
              children: [
                p.jsxs(QA, {
                  children: [
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        p.jsx(ce, {
                          variant: "subtitle2",
                          style: { color: "#B0B0B0" },
                          children: "Amount to Sell",
                        }),
                        p.jsx(Vt, {
                          title: "Enter the amount of crypto you want to sell.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => M("amount"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsxs(JA, {
                      children: [
                        p.jsx(e5, {
                          value: l,
                          onChange: (P) => c(P.target.value),
                          variant: "standard",
                          InputProps: {
                            disableUnderline: !0,
                            style: {
                              fontSize: "48px",
                              color: "#FFFFFF",
                              fontWeight: "bold",
                              textAlign: "center",
                            },
                          },
                        }),
                        p.jsx(ce, {
                          variant: "h6",
                          style: md.tokenSymbol,
                          children: f,
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        p.jsx(ce, {
                          variant: "subtitle2",
                          style: { color: "#B0B0B0" },
                          children: "Token to Sell",
                        }),
                        p.jsx(Vt, {
                          title: "Select the cryptocurrency you want to sell.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => M("token"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsxs(t5, {
                      children: [
                        p.jsx(n5, {
                          value: f,
                          onChange: (P) => d(P.target.value),
                          fullWidth: !0,
                          children: i.map((P) =>
                            p.jsxs(
                              ft,
                              {
                                value: P.symbol,
                                children: [
                                  p.jsx(Tv, { children: P.icon }),
                                  P.symbol,
                                  p.jsx(a5, {
                                    children:
                                      P.symbol === "MNT"
                                        ? "vmbc.mea"
                                        : "Ethereum Mainnet",
                                  }),
                                ],
                              },
                              P.symbol
                            )
                          ),
                        }),
                        p.jsxs(r5, {
                          children: [
                            p.jsx(o5, { children: "💰" }),
                            p.jsx(ce, {
                              variant: "body2",
                              style: md.balance,
                              children: i.find((P) => P.symbol === f).balance,
                            }),
                          ],
                        }),
                      ],
                    }),
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        p.jsx(ce, {
                          variant: "subtitle2",
                          style: { color: "#B0B0B0" },
                          children: "Payment Method",
                        }),
                        p.jsx(Vt, {
                          title: "Choose how you want to receive your money.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => M("paymentMethod"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsx(i5, {
                      children: p.jsxs(l5, {
                        children: [
                          p.jsx(s5, { children: "💳" }),
                          p.jsx(c5, {
                            value: A,
                            onChange: (P) => R(P.target.value),
                            children: L[g].map((P) =>
                              p.jsx(ft, { value: P, children: P }, P)
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                p.jsxs(ZA, {
                  children: [
                    p.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      },
                      children: [
                        p.jsx(ce, {
                          variant: "subtitle1",
                          style: md.optionTitle,
                          children: "How do you want to sell your crypto?",
                        }),
                        p.jsx(Vt, {
                          title:
                            "A provider is a service that handles the crypto-to-fiat conversion.",
                          children: p.jsx(At, {
                            size: "small",
                            onClick: () => M("provider"),
                            children: p.jsx(Xt, {
                              fontSize: "small",
                              style: { color: "#B0B0B0" },
                            }),
                          }),
                        }),
                      ],
                    }),
                    p.jsxs(u5, {
                      children: [
                        p.jsxs(f5, {
                          children: [
                            p.jsxs(d5, {
                              children: [
                                p.jsx(Ev, { children: "Most Reliable" }),
                                p.jsx(Ev, {
                                  style: {
                                    backgroundColor: "#2E7D32",
                                    marginLeft: "8px",
                                  },
                                  children: "Best Rate",
                                }),
                              ],
                            }),
                            p.jsx(p5, { children: "Ramp Network" }),
                            p.jsx(h5, { children: v() }),
                            p.jsxs(m5, { children: [l || "0.0218", " ", f] }),
                          ],
                        }),
                        p.jsx(g5, {
                          variant: "contained",
                          onClick: q,
                          children: "Continue with Ramp Network",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p.jsx(Rv, { variant: "outlined", onClick: r, children: "Back" }),
          ],
        }),
      h === 2 &&
        p.jsxs(y5, {
          children: [
            p.jsx(ce, {
              variant: "h6",
              style: { color: "#FFFFFF", marginBottom: "20px" },
              children: "Review Your Transaction",
            }),
            p.jsxs(wv, {
              children: [
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "Sell Amount:" }),
                    p.jsxs(ce, { children: [l, " ", f] }),
                  ],
                }),
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "You’ll Receive:" }),
                    p.jsx(ce, { children: v() }),
                  ],
                }),
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "Payment Method:" }),
                    p.jsx(ce, { children: A }),
                  ],
                }),
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "Provider:" }),
                    p.jsx(ce, { children: "Ramp Network" }),
                  ],
                }),
              ],
            }),
            p.jsxs(v5, {
              children: [
                p.jsx(Rv, {
                  variant: "outlined",
                  onClick: I,
                  children: "Back",
                }),
                p.jsx(b5, {
                  variant: "contained",
                  onClick: V,
                  children: "Confirm",
                }),
              ],
            }),
          ],
        }),
      h === 3 &&
        p.jsxs(x5, {
          children: [
            p.jsx($c, { style: { color: "#3772FF", marginBottom: "20px" } }),
            p.jsx(ce, {
              variant: "h6",
              style: { color: "#FFFFFF" },
              children: "Processing Your Sale",
            }),
            p.jsx(ce, {
              variant: "body2",
              style: { color: "#A0A0A0", marginTop: "10px" },
              children:
                "Please wait while we process your transaction with Ramp Network...",
            }),
          ],
        }),
      h === 4 &&
        p.jsxs(S5, {
          children: [
            p.jsx(ce, {
              variant: "h6",
              style: { color: "#FFFFFF", marginBottom: "20px" },
              children: "Transaction Complete!",
            }),
            p.jsxs(wv, {
              children: [
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "Sold:" }),
                    p.jsxs(ce, { children: [l, " ", f] }),
                  ],
                }),
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "Received:" }),
                    p.jsx(ce, { children: v() }),
                  ],
                }),
                p.jsxs(Ur, {
                  children: [
                    p.jsx(ce, { children: "Transaction ID:" }),
                    p.jsxs(ce, {
                      children: ["#", Math.random().toString(36).substr(2, 9)],
                    }),
                  ],
                }),
              ],
            }),
            p.jsx(C5, {
              variant: "contained",
              onClick: oe,
              children: "Finish",
            }),
          ],
        }),
      p.jsxs($l, {
        open: C,
        onClose: () => z(!1),
        PaperProps: { style: { backgroundColor: "#2D2D2D", color: "#FFFFFF" } },
        children: [
          p.jsx(Ll, { children: D.title }),
          p.jsx(_l, { children: p.jsx(ce, { children: D.description }) }),
          p.jsx(Ul, {
            children: p.jsx(Le, {
              onClick: () => z(!1),
              style: { color: "#3772FF" },
              children: "Close",
            }),
          }),
        ],
      }),
    ],
  });
}
const PA = ie("div")({
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    borderRadius: "10px",
  }),
  qA = ie("div")({ display: "flex", gap: "30px", marginBottom: "20px" }),
  GA = ie(ce)({
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
  }),
  IA = ie("div")({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "20px",
    gap: "10px",
  }),
  YA = ie(Wt)({
    backgroundColor: "#2D2D2D",
    color: "#FFFFFF",
    borderRadius: "8px",
    width: "220px",
    "& .MuiSelect-select": {
      padding: "8px 14px",
      display: "flex",
      alignItems: "center",
    },
  }),
  WA = ie("div")({ display: "flex", gap: "10px" }),
  VA = ie(Wt)({
    backgroundColor: "#2D2D2D",
    color: "#FFFFFF",
    borderRadius: "8px",
    width: "120px",
    "& .MuiSelect-select": { padding: "8px 14px" },
  }),
  XA = ie(Wt)({
    backgroundColor: "#2D2D2D",
    color: "#FFFFFF",
    borderRadius: "8px",
    width: "80px",
    "& .MuiSelect-select": { padding: "8px 14px" },
  }),
  KA = ie("div")({
    display: "flex",
    width: "100%",
    maxWidth: "900px",
    gap: "24px",
    marginBottom: "24px",
    alignItems: "stretch",
  }),
  QA = ie("div")({
    flex: 1,
    minWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "16px",
    backgroundColor: "#212121",
    borderRadius: "12px",
  }),
  ZA = ie("div")({
    flex: 1,
    minWidth: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    backgroundColor: "#212121",
    borderRadius: "12px",
  }),
  JA = ie("div")({ textAlign: "center", padding: "16px 0" }),
  e5 = ie(Gr)({
    "& input": {
      fontSize: "48px",
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
      padding: "0 16px",
    },
  }),
  t5 = ie("div")({
    backgroundColor: "#2D2D2D",
    padding: "12px 16px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    minHeight: "60px",
  }),
  n5 = ie(Wt)({
    backgroundColor: "transparent",
    color: "#FFFFFF",
    "& .MuiSelect-select": {
      padding: "8px 14px",
      display: "flex",
      alignItems: "center",
    },
  }),
  Tv = ie("span")({ marginRight: "5px", fontSize: "18px" }),
  a5 = ie("span")({ marginLeft: "8px", fontSize: "12px", color: "#A0A0A0" }),
  r5 = ie("div")({ display: "flex", alignItems: "center", gap: "8px" }),
  o5 = ie("span")({ fontSize: "16px" }),
  i5 = ie("div")({
    backgroundColor: "#2D2D2D",
    padding: "12px 16px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    minHeight: "60px",
  }),
  l5 = ie("div")({ display: "flex", alignItems: "center", gap: "8px" }),
  s5 = ie("span")({ fontSize: "16px" }),
  c5 = ie(Wt)({
    backgroundColor: "#2D2D2D",
    color: "#FFFFFF",
    borderRadius: "8px",
    "& .MuiSelect-select": { padding: "8px 14px" },
  });
ie("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
const u5 = ie("div")({
    backgroundColor: "#2D2D2D",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #3772FF",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "100%",
    boxSizing: "border-box",
  }),
  f5 = ie("div")({ display: "flex", flexDirection: "column" }),
  d5 = ie("div")({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  }),
  Ev = ie(ce)({
    backgroundColor: "#0288D1",
    color: "#FFFFFF",
    fontSize: "10px",
    padding: "2px 6px",
    borderRadius: "4px",
    display: "inline-block",
    minWidth: "70px",
    textAlign: "center",
  }),
  p5 = ie(ce)({ fontSize: "14px", fontWeight: "bold" }),
  h5 = ie(ce)({ color: "#FFFFFF", fontSize: "16px" }),
  m5 = ie(ce)({ color: "#A0A0A0", fontSize: "12px" }),
  g5 = ie(Le)({
    backgroundColor: "#3772FF",
    color: "#FFFFFF",
    textTransform: "none",
    padding: "10px",
    borderRadius: "8px",
    "&:hover": { backgroundColor: "#2D5BFF" },
  }),
  Rv = ie(Le)({
    color: "#A0A0A0",
    borderColor: "#A0A0A0",
    textTransform: "none",
    padding: "8px 16px",
    borderRadius: "8px",
  }),
  y5 = ie("div")({
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  }),
  wv = ie("div")({
    width: "100%",
    backgroundColor: "#2D2D2D",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "20px",
  }),
  Ur = ie("div")({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    color: "#FFFFFF",
  }),
  v5 = ie("div")({
    display: "flex",
    gap: "16px",
    width: "100%",
    justifyContent: "center",
  }),
  b5 = ie(Le)({
    backgroundColor: "#3772FF",
    color: "#FFFFFF",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    "&:hover": { backgroundColor: "#2D5BFF" },
  }),
  x5 = ie("div")({
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  }),
  S5 = ie("div")({
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  }),
  C5 = ie(Le)({
    backgroundColor: "#3772FF",
    color: "#FFFFFF",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    marginTop: "20px",
    "&:hover": { backgroundColor: "#2D5BFF" },
  }),
  md = {
    tokenSymbol: { color: "#A0A0A0", fontSize: "18px", marginTop: "8px" },
    balance: { color: "#FFFFFF", fontSize: "14px" },
    optionTitle: { color: "#FFFFFF", marginBottom: "16px", fontSize: "16px" },
  };
function T5({ onBack: n, walletAddress: r = "0x927...3261" }) {
  const [i, l] = T.useState(!1),
    [c, f] = T.useState(!1),
    [d, h] = T.useState({ title: "", description: "" }),
    m = {
      address: {
        title: "What is a Wallet Address?",
        description:
          "This is your public wallet address. You can share it with others to receive cryptocurrency. Think of it like your bank account number. It is safe to share this address.",
      },
      security: {
        title: "Security Warning",
        description:
          "Never share your private key or secret recovery phrase with anyone. Your private key is like your password, and anyone who has it can access your funds.",
      },
    },
    g = (x) => {
      h(m[x]), f(!0);
    },
    b = () => {
      navigator.clipboard.writeText(r), l(!0), setTimeout(() => l(!1), 2e3);
    };
  return p.jsxs(E5, {
    children: [
      p.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: "8px" },
        children: [
          p.jsx(ce, {
            variant: "h5",
            style: ul.title,
            children: "Receive Tokens",
          }),
          p.jsx(Vt, {
            title: "Learn about receiving tokens.",
            children: p.jsx(At, {
              size: "small",
              onClick: () => g("address"),
              children: p.jsx(Xt, {
                fontSize: "small",
                style: { color: "#B0B0B0" },
              }),
            }),
          }),
        ],
      }),
      p.jsx(ce, {
        variant: "body2",
        style: ul.info,
        children: "Share this wallet address to receive tokens:",
      }),
      p.jsxs(R5, {
        children: [
          p.jsxs(w5, {
            children: [
              p.jsx(ce, { variant: "body1", style: ul.address, children: r }),
              p.jsx(At, {
                onClick: b,
                style: ul.copyButton,
                children: p.jsx(L0, { fontSize: "small" }),
              }),
            ],
          }),
          i &&
            p.jsx(ce, {
              variant: "caption",
              style: ul.copiedText,
              children: "Copied!",
            }),
        ],
      }),
      p.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "20px",
        },
        children: [
          p.jsx(ce, {
            variant: "body2",
            style: { color: "#FFD700" },
            children: "Security Tip",
          }),
          p.jsx(Vt, {
            title: "Important security information.",
            children: p.jsx(At, {
              size: "small",
              onClick: () => g("security"),
              children: p.jsx(Xt, {
                fontSize: "small",
                style: { color: "#FFD700" },
              }),
            }),
          }),
        ],
      }),
      p.jsx(ce, {
        variant: "caption",
        style: { color: "#A0A0A0", textAlign: "center", marginTop: "8px" },
        children:
          "Never share your secret recovery phrase with anyone.",
      }),
      p.jsx(A5, {
        children: p.jsx(M5, {
          variant: "outlined",
          onClick: n,
          children: "Back",
        }),
      }),
      p.jsxs($l, {
        open: c,
        onClose: () => f(!1),
        PaperProps: { style: { backgroundColor: "#2D2D2D", color: "#FFFFFF" } },
        children: [
          p.jsx(Ll, { children: d.title }),
          p.jsx(_l, { children: p.jsx(ce, { children: d.description }) }),
          p.jsx(Ul, {
            children: p.jsx(Le, {
              onClick: () => f(!1),
              style: { color: "#3772FF" },
              children: "Close",
            }),
          }),
        ],
      }),
    ],
  });
}
const E5 = ie("div")({
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#1A1A1A",
    color: "#FFFFFF",
    borderRadius: "10px",
    margin: "0 auto",
  }),
  R5 = ie("div")({
    width: "100%",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  w5 = ie("div")({
    backgroundColor: "#2D2D2D",
    padding: "12px 16px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
  }),
  A5 = ie("div")({
    display: "flex",
    gap: "16px",
    width: "100%",
    justifyContent: "center",
    marginTop: "20px",
  }),
  M5 = ie(Le)({
    color: "#A0A0A0",
    borderColor: "#A0A0A0",
    textTransform: "none",
    padding: "10px 20px",
    borderRadius: "8px",
  }),
  ul = {
    title: { marginBottom: "16px", color: "#FFFFFF" },
    info: { marginBottom: "16px", color: "#A0A0A0", textAlign: "center" },
    address: { color: "#FFFFFF", wordBreak: "break-all" },
    copyButton: { color: "#3772FF" },
    copiedText: { color: "#2E7D32", marginTop: "4px" },
  };
function O5({ onComplete: n, onBack: r, tokens: i }) {
  const [l, c] = T.useState(1),
    [f, d] = T.useState(""),
    [h, m] = T.useState(""),
    [g, b] = T.useState(i[0].symbol),
    [x, w] = T.useState("0x92735...B3261"),
    [A, R] = T.useState("0.001"),
    [C, z] = T.useState(!1),
    [D, k] = T.useState({ title: "", description: "" }),
    O = {
      from: {
        title: 'What is the "From" Account?',
        description:
          "This is the wallet address you are sending cryptocurrency from. It is one of your own accounts, and its balance will decrease after the transaction.",
      },
      to: {
        title: 'What is the "To" Account?',
        description:
          "This is the wallet address of the recipient. Make sure you have the correct address, as transactions on the blockchain are irreversible.",
      },
      token: {
        title: "What is a Token?",
        description:
          "This is the type of cryptocurrency you are sending. You can only send tokens that you have in your wallet.",
      },
      amount: {
        title: "What is the Amount?",
        description:
          "This is the quantity of the selected token you want to send. You cannot send more than your current balance.",
      },
      gas: {
        title: "What is a Gas Fee?",
        description:
          "A gas fee is a payment you make to the network to process your transaction. It is like a transaction fee. The fee amount can vary depending on network congestion.",
      },
    },
    M = (v) => {
      k(O[v]), z(!0);
    },
    E = [
      {
        name: "Account 1",
        address: "0x92735...B3261",
        balance: parseFloat(i[0].balance.split(" ")[0]) || 0,
      },
      { name: "Account 2", address: "0x33b61...82611", balance: 0 },
    ],
    $ = () => {
      if (l === 1 && !f) {
        alert("Please select a recipient account");
        return;
      }
      if (l === 2 && (!h || isNaN(h) || parseFloat(h) <= 0)) {
        alert("Please enter a valid amount");
        return;
      }
      c(l + 1);
    },
    L = () => {
      l === 1 ? r() : c(l - 1);
    },
    W = () => {
      if (E.find((F) => F.address === x).balance < parseFloat(h)) {
        alert("Insufficient funds");
        return;
      }
      n(parseFloat(h), g, f, A);
    },
    q = () =>
      E.find((F) => F.address === x).balance < parseFloat(h) ||
      parseFloat(h) <= 0;
  return p.jsxs("div", {
    style: Pe.container,
    children: [
      p.jsx(ce, { variant: "h5", style: Pe.title, children: "Send" }),
      l === 1 &&
        p.jsxs("div", {
          style: Pe.content,
          children: [
            p.jsxs("div", {
              style: Pe.section,
              children: [
                p.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "8px" },
                  children: [
                    p.jsx(ce, {
                      variant: "body2",
                      style: Pe.sectionTitle,
                      children: "From",
                    }),
                    p.jsx(Vt, {
                      title: "The account you are sending from.",
                      children: p.jsx(At, {
                        size: "small",
                        onClick: () => M("from"),
                        children: p.jsx(Xt, {
                          fontSize: "small",
                          style: { color: "#B0B0B0" },
                        }),
                      }),
                    }),
                  ],
                }),
                p.jsxs(fa, {
                  fullWidth: !0,
                  style: Pe.input,
                  children: [
                    p.jsx(cc, {
                      sx: { color: "#B0B0B0" },
                      children: "Account",
                    }),
                    p.jsx(Wt, {
                      value: x,
                      onChange: (v) => w(v.target.value),
                      label: "Account",
                      sx: yd,
                      MenuProps: gd,
                      children: E.map((v) =>
                        p.jsxs(
                          ft,
                          {
                            value: v.address,
                            children: [v.name, " (", v.address, ")"],
                          },
                          v.address
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              style: Pe.section,
              children: [
                p.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "8px" },
                  children: [
                    p.jsx(ce, {
                      variant: "body2",
                      style: Pe.sectionTitle,
                      children: "To",
                    }),
                    p.jsx(Vt, {
                      title: "The account you are sending to.",
                      children: p.jsx(At, {
                        size: "small",
                        onClick: () => M("to"),
                        children: p.jsx(Xt, {
                          fontSize: "small",
                          style: { color: "#B0B0B0" },
                        }),
                      }),
                    }),
                  ],
                }),
                p.jsxs(fa, {
                  fullWidth: !0,
                  style: Pe.input,
                  children: [
                    p.jsx(cc, {
                      sx: { color: "#B0B0B0" },
                      children: "Recipient Account",
                    }),
                    p.jsx(Wt, {
                      value: f,
                      onChange: (v) => d(v.target.value),
                      label: "Recipient Account",
                      sx: yd,
                      MenuProps: gd,
                      children: E.filter((v) => v.address !== x).map((v) =>
                        p.jsxs(
                          ft,
                          {
                            value: v.address,
                            children: [v.name, " (", v.address, ")"],
                          },
                          v.address
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            p.jsx("div", {
              style: Pe.accountsSection,
              children: E.map((v) =>
                p.jsxs(
                  "div",
                  {
                    style: {
                      ...Pe.accountRow,
                      backgroundColor:
                        f === v.address ? "#3772FF" : "transparent",
                      cursor: "pointer",
                    },
                    onClick: () => d(v.address),
                    children: [
                      p.jsxs("div", {
                        style: Pe.accountInfo,
                        children: [
                          p.jsx("span", {
                            style: Pe.accountIcon,
                            children: "🦊",
                          }),
                          p.jsxs("div", {
                            children: [
                              p.jsx(ce, {
                                variant: "body2",
                                style: { color: "#FFFFFF" },
                                children: v.name,
                              }),
                              p.jsx(ce, {
                                variant: "caption",
                                style: { color: "#B0B0B0" },
                                children: v.address,
                              }),
                            ],
                          }),
                        ],
                      }),
                      p.jsx(ce, {
                        variant: "body2",
                        style: Pe.accountBalance,
                        children: "$0.00 USD, 0 MNT",
                      }),
                    ],
                  },
                  v.address
                )
              ),
            }),
            p.jsxs("div", {
              style: Pe.buttonContainer,
              children: [
                p.jsx(Le, {
                  variant: "contained",
                  onClick: L,
                  style: Pe.cancelButton,
                  children: "Cancel",
                }),
                p.jsx(Le, {
                  variant: "contained",
                  onClick: $,
                  style: Pe.continueButton,
                  children: "Continue",
                }),
              ],
            }),
          ],
        }),
      l === 2 &&
        p.jsxs("div", {
          style: Pe.content,
          children: [
            p.jsxs("div", {
              style: Pe.section,
              children: [
                p.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "8px" },
                  children: [
                    p.jsx(ce, {
                      variant: "body2",
                      style: Pe.sectionTitle,
                      children: "Token",
                    }),
                    p.jsx(Vt, {
                      title: "The type of cryptocurrency to send.",
                      children: p.jsx(At, {
                        size: "small",
                        onClick: () => M("token"),
                        children: p.jsx(Xt, {
                          fontSize: "small",
                          style: { color: "#B0B0B0" },
                        }),
                      }),
                    }),
                  ],
                }),
                p.jsxs(fa, {
                  fullWidth: !0,
                  style: Pe.input,
                  children: [
                    p.jsx(cc, { sx: { color: "#B0B0B0" }, children: "Token" }),
                    p.jsx(Wt, {
                      value: g,
                      onChange: (v) => b(v.target.value),
                      label: "Token",
                      sx: yd,
                      MenuProps: gd,
                      children: i.map((v) =>
                        p.jsx(
                          ft,
                          {
                            value: v.symbol,
                            children: p.jsxs("div", {
                              style: Pe.tokenItem,
                              children: [
                                p.jsx("span", {
                                  style: Pe.tokenIcon,
                                  children: v.icon,
                                }),
                                v.symbol,
                              ],
                            }),
                          },
                          v.symbol
                        )
                      ),
                    }),
                  ],
                }),
                p.jsxs("div", {
                  style: { display: "flex", alignItems: "center", gap: "8px" },
                  children: [
                    p.jsx(ce, {
                      variant: "body2",
                      style: Pe.sectionTitle,
                      children: "Amount",
                    }),
                    p.jsx(Vt, {
                      title: "The amount of crypto to send.",
                      children: p.jsx(At, {
                        size: "small",
                        onClick: () => M("amount"),
                        children: p.jsx(Xt, {
                          fontSize: "small",
                          style: { color: "#B0B0B0" },
                        }),
                      }),
                    }),
                  ],
                }),
                p.jsx(Gr, {
                  label: `Amount (${g})`,
                  value: h,
                  onChange: (v) => m(v.target.value),
                  fullWidth: !0,
                  error: q(),
                  helperText: q() ? "Balance: 0. Insufficient funds." : "",
                  sx: Av,
                }),
              ],
            }),
            p.jsxs("div", {
              style: Pe.buttonContainer,
              children: [
                p.jsx(Le, {
                  variant: "contained",
                  onClick: L,
                  style: Pe.cancelButton,
                  children: "Back",
                }),
                p.jsx(Le, {
                  variant: "contained",
                  onClick: $,
                  style: Pe.continueButton,
                  disabled: q(),
                  children: "Continue",
                }),
              ],
            }),
          ],
        }),
      l === 3 &&
        p.jsxs("div", {
          style: Pe.content,
          children: [
            p.jsx(ce, {
              variant: "h5",
              style: Pe.title,
              children: "Send - Confirm",
            }),
            p.jsxs(ce, {
              variant: "body1",
              style: Pe.info,
              children: ["Recipient: ", f],
            }),
            p.jsxs(ce, {
              variant: "body1",
              style: Pe.info,
              children: ["Amount: ", h, " ", g],
            }),
            p.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
              },
              children: [
                p.jsx(ce, {
                  variant: "body2",
                  style: Pe.sectionTitle,
                  children: "Estimated Gas Fee (ETH)",
                }),
                p.jsx(Vt, {
                  title:
                    "The fee for processing the transaction on the network.",
                  children: p.jsx(At, {
                    size: "small",
                    onClick: () => M("gas"),
                    children: p.jsx(Xt, {
                      fontSize: "small",
                      style: { color: "#B0B0B0" },
                    }),
                  }),
                }),
              ],
            }),
            p.jsx(Gr, {
              value: A,
              onChange: (v) => R(v.target.value),
              fullWidth: !0,
              sx: Av,
            }),
            p.jsxs("div", {
              style: Pe.buttonContainer,
              children: [
                p.jsx(Le, {
                  variant: "contained",
                  onClick: L,
                  style: Pe.cancelButton,
                  children: "Cancel",
                }),
                p.jsx(Le, {
                  variant: "contained",
                  onClick: W,
                  style: Pe.continueButton,
                  children: "Confirm",
                }),
              ],
            }),
          ],
        }),
      p.jsxs($l, {
        open: C,
        onClose: () => z(!1),
        PaperProps: { style: { backgroundColor: "#2D2D2D", color: "#FFFFFF" } },
        children: [
          p.jsx(Ll, { children: D.title }),
          p.jsx(_l, { children: p.jsx(ce, { children: D.description }) }),
          p.jsx(Ul, {
            children: p.jsx(Le, {
              onClick: () => z(!1),
              style: { color: "#3772FF" },
              children: "Close",
            }),
          }),
        ],
      }),
    ],
  });
}
const gd = {
    PaperProps: {
      style: { backgroundColor: "#2D2D2D", color: "#FFFFFF", borderRadius: 8 },
    },
  },
  yd = {
    color: "#FFFFFF",
    backgroundColor: "#2D2D2D",
    borderRadius: 8,
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#4A4A4A" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#6B7280" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3772FF",
    },
  },
  Av = {
    "& .MuiInputBase-root": {
      color: "#FFFFFF",
      backgroundColor: "#2D2D2D",
      borderRadius: 8,
    },
    "& .MuiInputLabel-root": { color: "#B0B0B0" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#4A4A4A" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#6B7280" },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3772FF",
    },
    "& .Mui-error .MuiOutlinedInput-notchedOutline": { borderColor: "#EF4444" },
    "& .MuiFormHelperText-root": { color: "#EF4444" },
  },
  Pe = {
    container: {
      backgroundColor: "#1A1A1A",
      borderRadius: 12,
      padding: 24,
      width: "100%",
      maxWidth: 400,
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      color: "#FFFFFF",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 24,
      textAlign: "center",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    section: { width: "100%", marginBottom: 24 },
    sectionTitle: { color: "#B0B0B0", marginBottom: 8 },
    input: { marginBottom: 16 },
    tokenItem: { display: "flex", alignItems: "center", gap: 8 },
    tokenIcon: { fontSize: 20, color: "#FFFFFF" },
    accountsSection: { width: "100%", marginBottom: 24 },
    accountRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      borderBottom: "1px solid #4A4A4A",
      borderRadius: 8,
    },
    accountInfo: { display: "flex", alignItems: "center", gap: 12 },
    accountIcon: { fontSize: 24, color: "#FFFFFF" },
    accountBalance: { color: "#B0B0B0", fontSize: 14 },
    buttonContainer: {
      display: "flex",
      gap: 16,
      width: "100%",
      justifyContent: "center",
      marginTop: 16,
    },
    cancelButton: {
      backgroundColor: "#2D2D2D",
      color: "#B0B0B0",
      borderRadius: 20,
      padding: "8px 16px",
      fontSize: 14,
      textTransform: "none",
      "&:hover": { backgroundColor: "#4A4A4A" },
    },
    continueButton: {
      backgroundColor: "#3772FF",
      color: "#FFFFFF",
      borderRadius: 20,
      padding: "8px 16px",
      fontSize: 14,
      textTransform: "none",
      "&:hover": { backgroundColor: "#2A5DE6" },
      "&.Mui-disabled": { backgroundColor: "#4A4A4A", color: "#6B7280" },
    },
    info: { marginBottom: 16, color: "#FFFFFF" },
  };
function B5() {
  const [n, r] = T.useState("main"),
    [i, l] = T.useState("tokens"),
    [c, f] = T.useState("vmbc.mea"),
    [d, h] = T.useState(null),
    [m, g] = T.useState(!1),
    [b, x] = T.useState(!1),
    [w, A] = T.useState({ title: "", description: "" }),
    [R, C] = T.useState([
      { symbol: "MNT", name: "", balance: "0 MNT", value: "$0.00", icon: "M" },
      {
        symbol: "ETH",
        name: "Ethereum",
        balance: "0 ETH",
        value: "$0.00",
        icon: "E",
      },
    ]),
    [z, D] = T.useState([]),
    [k, O] = T.useState(0),
    M = {
      network: {
        title: "What is a Network?",
        description:
          "A blockchain network is a system of connected computers that validates and records transactions in a shared digital ledger. Different networks (like Ethereum or vmbc.mea) have their own native tokens (like ETH or MNT) and applications. You can switch between networks to interact with different sets of assets and apps.",
      },
    },
    E = (Q) => {
      A(M[Q]), x(!0);
    },
    $ = {
      "vmbc.mea": "MNT",
      "Ethereum Mainnet": "ETH",
      "Goerli Testnet": "ETH",
      "Sepolia Testnet": "ETH",
    },
    L = { MNT: 0.2338, ETH: 224.5 },
    W = $[c],
    q = R.find((Q) => Q.symbol === W) || { balance: `0 ${W}` },
    v = parseFloat(q.balance.split(" ")[0]) || 0,
    F = v * L[W];
  T.useEffect(() => {
    console.log("Wallet.jsx - Updated tokens:", R),
      console.log(
        `Wallet.jsx - Displayed: ${v.toFixed(4)} ${W} ≈ $${F.toFixed(2)} USD`
      );
  }, [R, W, v, F]);
  const V = (Q) => h(Q.currentTarget),
    I = () => h(null),
    oe = () => {
      navigator.clipboard
        .writeText("0x92735...B3261")
        .then(() => {
          alert("Wallet address copied to clipboard!");
        })
        .catch((Q) => {
          console.error("Failed to copy address:", Q);
        });
    },
    P = () => {
      C([
        {
          symbol: "MNT",
          name: "",
          balance: "0 MNT",
          value: "$0.00",
          icon: "M",
        },
        {
          symbol: "ETH",
          name: "Ethereum",
          balance: "0 ETH",
          value: "$0.00",
          icon: "E",
        },
      ]),
        D([]),
        console.log("Wallet.jsx - Tokens reset to initial state");
    },
    N = () => g(!0),
    J = () => g(!1),
    se = T.useCallback(
      (Q, Z) => {
        const ne = Date.now();
        if (ne - k < 2e3) {
          console.log(`Wallet.jsx - Duplicate buy ignored: ${Q} ${Z}`);
          return;
        }
        if ((O(ne), typeof Q != "number" || Q <= 0 || !Z)) {
          console.error(
            "Wallet.jsx - Invalid buy amount or token symbol:",
            Q,
            Z
          );
          return;
        }
        console.log(`Wallet.jsx - Buying: ${Q} ${Z}`),
          C((fe) => {
            const de = [...fe],
              ge = de.findIndex((pe) => pe.symbol === Z);
            if (ge !== -1) {
              const pe = parseFloat(de[ge].balance.split(" ")[0]) || 0,
                ye = pe + Q;
              (de[ge] = {
                ...de[ge],
                balance: `${ye.toFixed(6)} ${Z}`,
                value: `$${(ye * L[Z]).toFixed(2)}`,
              }),
                console.log(
                  `Wallet.jsx - Updated ${Z} balance: ${pe} + ${Q} = ${ye}`
                );
            } else
              de.push({
                symbol: Z,
                name: Z === "MNT" ? "" : "Ethereum",
                balance: `${Q.toFixed(6)} ${Z}`,
                value: `$${(Q * L[Z]).toFixed(2)}`,
                icon: Z[0],
              });
            return de;
          }),
          D((fe) => [
            ...fe,
            {
              type: "Buy",
              amount: Q,
              token: Z,
              date: new Date().toLocaleString(),
            },
          ]),
          r("main");
      },
      [k, L]
    ),
    ae = (Q, Z) => {
      if (typeof Q != "number" || Q <= 0 || !Z) {
        console.error("Invalid sell amount or token symbol:", Q, Z);
        return;
      }
      C((ne) => {
        const fe = [...ne],
          de = fe.findIndex((ge) => ge.symbol === Z);
        if (de !== -1) {
          const ge = parseFloat(fe[de].balance.split(" ")[0]) || 0;
          if (ge >= Q) {
            const pe = ge - Q;
            (fe[de].balance = `${pe.toFixed(6)} ${Z}`),
              (fe[de].value = `$${(pe * L[Z]).toFixed(2)}`);
          }
        }
        return fe;
      }),
        D((ne) => [
          ...ne,
          {
            type: "Sell",
            amount: Q,
            token: Z,
            date: new Date().toLocaleString(),
          },
        ]),
        r("main");
    },
    j = (Q, Z) => {
      if (typeof Q != "number" || Q <= 0 || !Z) {
        console.error("Invalid receive amount or token symbol:", Q, Z);
        return;
      }
      C((ne) => {
        const fe = [...ne],
          de = fe.findIndex((ge) => ge.symbol === Z);
        if (de !== -1) {
          const pe = (parseFloat(fe[de].balance.split(" ")[0]) || 0) + Q;
          (fe[de].balance = `${pe.toFixed(6)} ${Z}`),
            (fe[de].value = `$${(pe * L[Z]).toFixed(2)}`);
        }
        return fe;
      }),
        D((ne) => [
          ...ne,
          {
            type: "Receive",
            amount: Q,
            token: Z,
            date: new Date().toLocaleString(),
          },
        ]),
        r("main");
    },
    K = (Q, Z, ne, fe) => {
      if (typeof Q != "number" || Q <= 0 || !Z) {
        console.error("Invalid send amount or token symbol:", Q, Z);
        return;
      }
      C((de) => {
        const ge = [...de],
          pe = ge.findIndex((ye) => ye.symbol === Z);
        if (pe !== -1) {
          const ye = parseFloat(ge[pe].balance.split(" ")[0]) || 0,
            X = Q + (Z === W && fe ? parseFloat(fe) : 0);
          if (ye >= X) {
            const he = ye - X;
            (ge[pe].balance = `${he.toFixed(6)} ${Z}`),
              (ge[pe].value = `$${(he * L[Z]).toFixed(2)}`);
          }
        }
        return ge;
      }),
        D((de) => [
          ...de,
          {
            type: "Send",
            amount: Q,
            token: Z,
            recipient: ne,
            gasFee: fe,
            date: new Date().toLocaleString(),
          },
        ]),
        r("main");
    };
  return p.jsxs("div", {
    style: be.walletContainer,
    children: [
      p.jsxs("div", {
        style: be.header,
        children: [
          p.jsxs("div", {
            style: { display: "flex", alignItems: "center" },
            children: [
              p.jsxs(Wt, {
                value: c,
                onChange: (Q) => f(Q.target.value),
                style: be.networkSelect,
                variant: "outlined",
                disableUnderline: !0,
                IconComponent: uc,
                MenuProps: {
                  PaperProps: { style: { maxHeight: 200, width: 220 } },
                },
                children: [
                  p.jsx(ft, { value: "vmbc.mea", children: "vmbc.mea" }),
                  p.jsx(ft, {
                    value: "Ethereum Mainnet",
                    children: "Ethereum Mainnet",
                  }),
                  p.jsx(ft, {
                    value: "Goerli Testnet",
                    children: "Goerli Testnet",
                  }),
                  p.jsx(ft, {
                    value: "Sepolia Testnet",
                    children: "Sepolia Testnet",
                  }),
                ],
              }),
              p.jsx(Vt, {
                title: "Select the blockchain network.",
                children: p.jsx(At, {
                  size: "small",
                  onClick: () => E("network"),
                  children: p.jsx(Xt, {
                    fontSize: "small",
                    style: { color: "#B0B0B0" },
                  }),
                }),
              }),
            ],
          }),
          p.jsxs("div", {
            style: be.accountInfo,
            children: [
              p.jsx(ce, {
                variant: "h6",
                style: be.accountButton,
                children: "Account 1",
              }),
              p.jsxs("div", {
                style: be.addressContainer,
                children: [
                  p.jsx(ce, {
                    variant: "caption",
                    style: be.accountAddress,
                    children: "0x92735...B3261",
                  }),
                  p.jsx(At, {
                    "aria-label": "copy address",
                    style: be.copyButton,
                    onClick: oe,
                    size: "small",
                    children: p.jsx(L0, {
                      style: { fontSize: "16px", color: "#6B7280" },
                    }),
                  }),
                ],
              }),
            ],
          }),
          p.jsxs("div", {
            style: be.rightHeader,
            children: [
              p.jsx(Le, {
                variant: "outlined",
                style: be.learnButton,
                onClick: N,
                startIcon: p.jsx(UA, {}),
                children: "Learn",
              }),
              p.jsx(At, {
                "aria-label": "options",
                style: be.optionsButton,
                onClick: V,
                children: p.jsx($A, { style: { color: "#F6851B" } }),
              }),
            ],
          }),
          p.jsxs(F0, {
            anchorEl: d,
            open: !!d,
            onClose: I,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "right" },
            PaperProps: {
              style: {
                width: "200px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              },
            },
            children: [
              p.jsx(ft, {
                onClick: I,
                style: be.menuItem,
                children: "Settings",
              }),
              p.jsx(ft, {
                onClick: I,
                style: be.menuItem,
                children: "Account Details",
              }),
              p.jsx(ft, {
                onClick: () => {
                  P(), I();
                },
                style: be.menuItem,
                children: "Reset Wallet",
              }),
            ],
          }),
        ],
      }),
      n === "main" &&
        p.jsxs("div", {
          style: be.mainContent,
          children: [
            p.jsx("div", {
              style: be.logoContainer,
              children: p.jsx("div", { style: be.logo, children: "🦊" }),
            }),
            p.jsxs("div", {
              style: be.balanceSection,
              children: [
                p.jsxs(ce, {
                  variant: "h3",
                  style: be.balance,
                  children: [v.toFixed(4), " ", W],
                }),
                p.jsxs(ce, {
                  variant: "caption",
                  style: be.portfolio,
                  children: ["≈ $", F.toFixed(2), " USD"],
                }),
                p.jsxs(ce, {
                  variant: "caption",
                  style: be.portfolio,
                  children: ["+0.00 ", W, " (+0.00%) Portfolio 📈"],
                }),
              ],
            }),
            p.jsxs("div", {
              style: be.actionButtons,
              children: [
                p.jsx(Le, {
                  variant: "contained",
                  style: be.actionButton,
                  onClick: () => r("buy"),
                  children: "Buy",
                }),
                p.jsx(Le, {
                  variant: "contained",
                  style: be.actionButton,
                  onClick: () => r("sell"),
                  children: "Sell",
                }),
                p.jsx(Le, {
                  variant: "contained",
                  style: { ...be.actionButton },
                  onClick: () => r("send"),
                  children: "Send",
                }),
                p.jsx(Le, {
                  variant: "contained",
                  style: be.actionButton,
                  onClick: () => r("receive"),
                  children: "Receive",
                }),
              ],
            }),
            p.jsxs("div", {
              style: be.tabs,
              children: [
                p.jsx("div", {
                  style: i === "tokens" ? be.activeTab : be.tab,
                  onClick: () => l("tokens"),
                  children: "Tokens",
                }),
                p.jsx("div", {
                  style: i === "activity" ? be.activeTab : be.tab,
                  onClick: () => l("activity"),
                  children: "Activity",
                }),
              ],
            }),
            i === "tokens" &&
              p.jsx("div", {
                style: be.tokenList,
                children: R.map((Q, Z) =>
                  p.jsxs(
                    Po,
                    {
                      style: be.tokenItem,
                      children: [
                        p.jsx("div", { style: be.tokenIcon, children: Q.icon }),
                        p.jsxs("div", {
                          style: be.tokenInfo,
                          children: [
                            p.jsx(ce, {
                              variant: "body1",
                              style: be.tokenSymbol,
                              children: Q.symbol,
                            }),
                            p.jsx(ce, {
                              variant: "caption",
                              style: be.tokenName,
                              children: Q.name,
                            }),
                          ],
                        }),
                        p.jsxs("div", {
                          style: be.tokenBalance,
                          children: [
                            p.jsx(ce, {
                              variant: "body1",
                              children: Q.balance,
                            }),
                            p.jsx(ce, {
                              variant: "caption",
                              style: be.tokenValue,
                              children: Q.value,
                            }),
                          ],
                        }),
                      ],
                    },
                    Z
                  )
                ),
              }),
            i === "activity" &&
              p.jsx("div", {
                style: be.activityList,
                children:
                  z.length === 0
                    ? p.jsx(ce, {
                        variant: "body2",
                        style: be.noData,
                        children: "No activity yet",
                      })
                    : z.map((Q, Z) =>
                        p.jsx(
                          Po,
                          {
                            style: be.activityItem,
                            children: p.jsxs(ce, {
                              variant: "body2",
                              children: [
                                Q.type,
                                ": ",
                                Q.amount,
                                " ",
                                Q.token,
                                Q.recipient ? ` to ${Q.recipient}` : "",
                                Q.gasFee ? ` (Gas: ${Q.gasFee} ETH)` : "",
                                " - ",
                                Q.date,
                              ],
                            }),
                          },
                          Z
                        )
                      ),
              }),
          ],
        }),
      n === "buy" && p.jsx(LA, { onComplete: se, onBack: () => r("main") }),
      n === "sell" &&
        p.jsx(HA, { onComplete: ae, onBack: () => r("main"), tokens: R }),
      n === "send" &&
        p.jsx(O5, { onComplete: K, onBack: () => r("main"), tokens: R }),
      n === "receive" && p.jsx(T5, { onComplete: j, onBack: () => r("main") }),
      p.jsx(gp, {
        open: m,
        onClose: J,
        "aria-labelledby": "learn-modal-title",
        style: be.modal,
        children: p.jsxs("div", {
          style: be.learnContainer,
          children: [
            p.jsxs("div", {
              style: be.learnHeader,
              children: [
                p.jsx(ce, {
                  id: "learn-modal-title",
                  variant: "h5",
                  style: be.learnTitle,
                  children: "Welcome to Your Crypto Wallet!",
                }),
                p.jsx(At, {
                  onClick: J,
                  style: be.closeButton,
                  children: p.jsx(_A, { style: { color: "#6B7280" } }),
                }),
              ],
            }),
            p.jsx(ce, {
              variant: "body2",
              style: be.learnSubtitle,
              children:
                "Learn the basics of managing cryptocurrency with these key actions:",
            }),
            p.jsxs("div", {
              style: be.processList,
              children: [
                p.jsxs("div", {
                  style: be.processItem,
                  children: [
                    p.jsx(ce, {
                      variant: "h6",
                      style: be.processTitle,
                      children: "Buy",
                    }),
                    p.jsx(ce, {
                      variant: "body2",
                      style: be.processDescription,
                      children:
                        "Purchase cryptocurrency (like MNT or ETH) using fiat money (e.g., USD, INR) through a provider. This adds tokens to your wallet.",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  style: be.processItem,
                  children: [
                    p.jsx(ce, {
                      variant: "h6",
                      style: be.processTitle,
                      children: "Sell",
                    }),
                    p.jsx(ce, {
                      variant: "body2",
                      style: be.processDescription,
                      children:
                        "Exchange your cryptocurrency for fiat money. This reduces your token balance and gives you cash.",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  style: be.processItem,
                  children: [
                    p.jsx(ce, {
                      variant: "h6",
                      style: be.processTitle,
                      children: "Send",
                    }),
                    p.jsx(ce, {
                      variant: "body2",
                      style: be.processDescription,
                      children:
                        "Transfer cryptocurrency from your wallet to another wallet address. Requires a small gas fee for the network.",
                    }),
                  ],
                }),
                p.jsxs("div", {
                  style: be.processItem,
                  children: [
                    p.jsx(ce, {
                      variant: "h6",
                      style: be.processTitle,
                      children: "Receive",
                    }),
                    p.jsx(ce, {
                      variant: "body2",
                      style: be.processDescription,
                      children:
                        "Accept cryptocurrency sent to your wallet address from another user or source. Share your address to receive funds.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      p.jsxs($l, {
        open: b,
        onClose: () => x(!1),
        PaperProps: { style: { backgroundColor: "#2D2D2D", color: "#FFFFFF" } },
        children: [
          p.jsx(Ll, { children: w.title }),
          p.jsx(_l, { children: p.jsx(ce, { children: w.description }) }),
          p.jsx(Ul, {
            children: p.jsx(Le, {
              onClick: () => x(!1),
              style: { color: "#3772FF" },
              children: "Close",
            }),
          }),
        ],
      }),
    ],
  });
}
const be = {
  walletContainer: {
    width: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 16px",
    backgroundColor: "#F9FAFB",
    borderBottom: "1px solid #E5E7EB",
  },
  networkSelect: {
    backgroundColor: "#F3F4F6",
    borderRadius: "20px",
    color: "#6B7280",
    fontSize: "12px",
    padding: "4px 8px",
    border: "none",
    minWidth: "100px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  accountInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
  },
  accountButton: { color: "#111827", fontSize: "18px", fontWeight: "bold" },
  addressContainer: { display: "flex", alignItems: "center", gap: "6px" },
  accountAddress: { color: "#6B7280", fontSize: "12px" },
  copyButton: { padding: "2px" },
  rightHeader: { display: "flex", alignItems: "center", gap: "4px" },
  optionsButton: { padding: "6px" },
  learnButton: {
    borderColor: "#F6851B",
    color: "#F6851B",
    borderRadius: "20px",
    textTransform: "none",
    fontSize: "14px",
    padding: "4px 12px",
  },
  menuItem: { fontSize: "14px", color: "#111827", padding: "8px 16px" },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },
  logo: { fontSize: "40px" },
  balanceSection: { textAlign: "center", marginBottom: "24px" },
  balance: { color: "#111827", fontSize: "32px", fontWeight: "bold" },
  portfolio: { color: "#6B7280", fontSize: "14px", marginTop: "4px" },
  actionButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  actionButton: {
    padding: "8px 16px",
    backgroundColor: "#E5E7EB",
    color: "#111827",
    borderRadius: "20px",
    fontSize: "14px",
    textTransform: "none",
    minWidth: "80px",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "16px",
    borderBottom: "1px solid #E5E7EB",
    width: "100%",
  },
  tab: {
    color: "#6B7280",
    fontSize: "16px",
    padding: "8px 0",
    cursor: "pointer",
    flex: "1",
    textAlign: "center",
  },
  activeTab: {
    color: "#F6851B",
    fontSize: "16px",
    padding: "8px 0",
    borderBottom: "2px solid #F6851B",
    cursor: "pointer",
    flex: "1",
    textAlign: "center",
  },
  tokenList: { marginBottom: "24px", width: "100%" },
  tokenItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #E5E7EB",
  },
  tokenIcon: {
    width: "32px",
    height: "32px",
    backgroundColor: "#E5E7EB",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    color: "#111827",
  },
  tokenInfo: { flex: 1, marginLeft: "12px" },
  tokenSymbol: { color: "#111827", fontSize: "16px" },
  tokenName: { color: "#6B7280", fontSize: "12px" },
  tokenBalance: { textAlign: "right" },
  tokenValue: { color: "#6B7280" },
  activityList: { width: "100%", marginBottom: "24px" },
  activityItem: { padding: "12px 0", borderBottom: "1px solid #E5E7EB" },
  noData: {
    color: "#6B7280",
    fontSize: "14px",
    textAlign: "center",
    margin: "20px 0",
  },
  modal: { display: "flex", alignItems: "center", justifyContent: "center" },
  learnContainer: {
    width: "600px",
    backgroundColor: "#F9FAFB",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  learnHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  learnTitle: { color: "#F6851B", fontSize: "24px", fontWeight: "bold" },
  closeButton: { padding: "4px" },
  learnSubtitle: {
    color: "#6B7280",
    fontSize: "14px",
    marginBottom: "20px",
    textAlign: "center",
  },
  processList: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
  },
  processItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    padding: "12px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  processTitle: {
    color: "#111827",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  processDescription: { color: "#6B7280", fontSize: "14px", lineHeight: "1.4" },
};
function j5() {
  const [n, r] = T.useState(!1);
  return p.jsx("div", {
    style: z5.appContainer,
    children: n
      ? p.jsx(B5, { onLogout: () => r(!1) })
      : p.jsx(FA, { onLogin: () => r(!0) }),
  });
}
const z5 = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#F9FAFB",
  },
};
function D5() {
  return p.jsx(j5, {});
}
cx.createRoot(document.getElementById("root")).render(
  p.jsx(T.StrictMode, { children: p.jsx(D5, {}) })
);
