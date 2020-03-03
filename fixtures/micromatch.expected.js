!function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = t();
  } else {
    if ("function" == typeof define && define.amd) {
      define([], t);
    } else {
      if ("object" == typeof exports) {
        exports.lib = t();
      } else {
        e.lib = t();
      }
    }
  }
}(global, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) {
        return t[r].exports;
      }

      var o = t[r] = {
        i: r,
        l: false,
        exports: {}
      };
      e[r].call(o.exports, o, o.exports, n);
      o.l = true;
      return o.exports;
    }

    n.m = e;
    n.c = t;

    n.d = function (e, t, r) {
      if (!n.o(e, t)) {
        Object.defineProperty(e, t, {
          enumerable: true,
          get: r
        });
      }
    };

    n.r = function (e) {
      if ("undefined" != typeof Symbol && Symbol.toStringTag) {
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        });
      }

      Object.defineProperty(e, "__esModule", {
        value: true
      });
    };

    n.t = function (e, t) {
      if (1 & t) {
        e = n(e);
      }

      if (8 & t) {
        return e;
      }

      if (4 & t && "object" == typeof e && e && e.__esModule) {
        return e;
      }

      var r = Object.create(null);
      n.r(r);
      Object.defineProperty(r, "default", {
        enumerable: true,
        value: e
      });

      if (2 & t && "string" != typeof e) {
        for (var o in e) {
          n.d(r, o, function (t) {
            return e[t];
          }.bind(null, o));
        }
      }

      return r;
    };

    n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      n.d(t, "a", t);
      return t;
    };

    n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };

    n.p = "";
    return n(n.s = "./node_modules/micromatch/index.js");
  }({
    "./node_modules/arr-diff/index.js":
    /*!****************************************!*\
      !*** ./node_modules/arr-diff/index.js ***!
      \****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * arr-diff <https://github.com/jonschlinkert/arr-diff>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      function r(e, t) {
        if (!Array.isArray(t)) {
          return e.slice();
        }

        for (var n = t.length, r = e.length, o = -1, i = []; ++o < r;) {
          for (var s = e[o], a = false, u = 0; u < n; u++) {
            if (s === t[u]) {
              a = true;
              break;
            }
          }

          if (false === a) {
            i.push(s);
          }
        }

        return i;
      }

      e.exports = function (e) {
        for (var t = arguments.length, n = 0; ++n < t;) {
          e = r(e, arguments[n]);
        }

        return e;
      };
    },
    "./node_modules/arr-flatten/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/arr-flatten/index.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      e.exports = function (e) {
        return function e(t, n) {
          for (var r, o = 0, i = t.length; o < i; o++) {
            r = t[o];

            if (Array.isArray(r)) {
              e(r, n);
            } else {
              n.push(r);
            }
          }

          return n;
        }(e, []);
      };
    },
    "./node_modules/arr-union/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/arr-union/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      e.exports = function (e) {
        if (!Array.isArray(e)) {
          throw new TypeError("arr-union expects the first argument to be an array.");
        }

        for (var t = arguments.length, n = 0; ++n < t;) {
          var r = arguments[n];

          if (r) {
            if (!Array.isArray(r)) {
              r = [r];
            }

            for (var o = 0; o < r.length; o++) {
              var i = r[o];

              if (!(e.indexOf(i) >= 0)) {
                e.push(i);
              }
            }
          }
        }

        return e;
      };
    },
    "./node_modules/array-unique/index.js":
    /*!********************************************!*\
      !*** ./node_modules/array-unique/index.js ***!
      \********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * array-unique <https://github.com/jonschlinkert/array-unique>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      e.exports = function (e) {
        if (!Array.isArray(e)) {
          throw new TypeError("array-unique expects an array.");
        }

        for (var t = e.length, n = -1; n++ < t;) {
          for (var r = n + 1; r < e.length; ++r) {
            if (e[n] === e[r]) {
              e.splice(r--, 1);
            }
          }
        }

        return e;
      };

      e.exports.immutable = function (t) {
        if (!Array.isArray(t)) {
          throw new TypeError("array-unique expects an array.");
        }

        for (var n = t.length, r = new Array(n), o = 0; o < n; o++) {
          r[o] = t[o];
        }

        return e.exports(r);
      };
    },
    "./node_modules/assign-symbols/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/assign-symbols/index.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      e.exports = function (e, t) {
        if (null == e) {
          throw new TypeError("expected first argument to be an object.");
        }

        if (undefined === t || "undefined" == typeof Symbol) {
          return e;
        }

        if ("function" != typeof Object.getOwnPropertySymbols) {
          return e;
        }

        for (var n = Object.prototype.propertyIsEnumerable, r = Object(e), o = arguments.length, i = 0; ++i < o;) {
          for (var s = Object(arguments[i]), a = Object.getOwnPropertySymbols(s), u = 0; u < a.length; u++) {
            var c = a[u];

            if (n.call(s, c)) {
              r[c] = s[c];
            }
          }
        }

        return r;
      };
    },
    "./node_modules/atob/node-atob.js":
    /*!****************************************!*\
      !*** ./node_modules/atob/node-atob.js ***!
      \****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      function r(e) {
        return Buffer.from(e, "base64").toString("binary");
      }

      e.exports = r.atob = r;
    },
    "./node_modules/base/index.js":
    /*!************************************!*\
      !*** ./node_modules/base/index.js ***!
      \************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! util */
      "util");
      var o = n(
      /*! define-property */
      "./node_modules/base/node_modules/define-property/index.js");
      var i = n(
      /*! cache-base */
      "./node_modules/cache-base/index.js");
      var s = n(
      /*! component-emitter */
      "./node_modules/component-emitter/index.js");
      var a = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var u = n(
      /*! mixin-deep */
      "./node_modules/mixin-deep/index.js");
      var c = n(
      /*! pascalcase */
      "./node_modules/pascalcase/index.js");
      var p = n(
      /*! class-utils */
      "./node_modules/class-utils/index.js");

      function l(e) {
        var t = e ? i.namespace(e) : i;
        var n = [];

        function l(e, n) {
          if (!(this instanceof l)) {
            return new l(e, n);
          }

          t.call(this, e);
          this.is("base");
          this.initBase(e, n);
        }

        r.inherits(l, t);
        s(l);

        l.prototype.initBase = function (t, r) {
          this.options = u({}, this.options, r);
          this.cache = this.cache || {};
          this.define("registered", {});

          if (e) {
            this[e] = {};
          }

          this.define("_callbacks", this._callbacks);

          if (a(t)) {
            this.visit("set", t);
          }

          l.run(this, "use", n);
        };

        l.prototype.is = function (e) {
          if ("string" != typeof e) {
            throw new TypeError("expected name to be a string");
          }

          this.define("is" + c(e), true);
          this.define("_name", e);
          this.define("_appname", e);
          return this;
        };

        l.prototype.isRegistered = function (e, t) {
          this.registered[e] = true;

          if (false !== t) {
            this.registered[e] = true;
            this.emit("plugin", e);
          }

          return !!this.registered.hasOwnProperty(e) || false;
        };

        l.prototype.use = function (e) {
          e.call(this, this);
          return this;
        };

        l.prototype.define = function (e, t) {
          o(this, e, t);
          return a(e) ? this.visit("define", e) : this;
        };

        l.prototype.mixin = function (e, t) {
          l.prototype[e] = t;
          return this;
        };

        l.prototype.mixins = l.prototype.mixins || [];
        Object.defineProperty(l.prototype, "base", {
          configurable: true,
          get: function () {
            return this.parent ? this.parent.base : this;
          }
        });
        o(l, "use", function (e) {
          n.push(e);
          return l;
        });
        o(l, "run", function (e, t, n) {
          for (var r = n.length, o = 0; r--;) {
            e[t](n[o++]);
          }

          return l;
        });
        o(l, "extend", p.extend(l, function (e, t) {
          e.prototype.mixins = e.prototype.mixins || [];
          o(e, "mixin", function (t) {
            var n = t(e.prototype, e);

            if ("function" == typeof n) {
              e.prototype.mixins.push(n);
            }

            return e;
          });
          o(e, "mixins", function (t) {
            l.run(t, "mixin", e.prototype.mixins);
            return e;
          });

          e.prototype.mixin = function (t, n) {
            e.prototype[t] = n;
            return this;
          };

          return l;
        }));
        o(l, "mixin", function (e) {
          var t = e(l.prototype, l);

          if ("function" == typeof t) {
            l.prototype.mixins.push(t);
          }

          return l;
        });
        o(l, "mixins", function (e) {
          l.run(e, "mixin", l.prototype.mixins);
          return l;
        });
        o(l, "inherit", p.inherit);
        o(l, "bubble", p.bubble);
        return l;
      }

      e.exports = l();
      e.exports.namespace = l;
    },
    "./node_modules/base/node_modules/define-property/index.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/base/node_modules/define-property/index.js ***!
      \*****************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/base/node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/base/node_modules/is-accessor-descriptor/index.js":
    /*!************************************************************************!*\
      !*** ./node_modules/base/node_modules/is-accessor-descriptor/index.js ***!
      \************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = {
        get: "function",
        set: "function",
        configurable: "boolean",
        enumerable: "boolean"
      };

      function i(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }

      e.exports = function (e, t) {
        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if ("object" !== r(e)) {
          return false;
        }

        if (i(e, "value") || i(e, "writable")) {
          return false;
        }

        if (!i(e, "get") || "function" != typeof e.get) {
          return false;
        }

        if (i(e, "set") && "function" != typeof e[n] && undefined !== e[n]) {
          return false;
        }

        for (var n in e) {
          if (o.hasOwnProperty(n) && r(e[n]) !== o[n] && undefined !== e[n]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/base/node_modules/is-data-descriptor/index.js":
    /*!********************************************************************!*\
      !*** ./node_modules/base/node_modules/is-data-descriptor/index.js ***!
      \********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");

      e.exports = function (e, t) {
        var n = {
          configurable: "boolean",
          enumerable: "boolean",
          writable: "boolean"
        };

        if ("object" !== r(e)) {
          return false;
        }

        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if (!("value" in e || "writable" in e)) {
          return false;
        }

        for (var o in e) {
          if ("value" !== o && n.hasOwnProperty(o) && r(e[o]) !== n[o] && undefined !== e[o]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/base/node_modules/is-descriptor/index.js":
    /*!***************************************************************!*\
      !*** ./node_modules/base/node_modules/is-descriptor/index.js ***!
      \***************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = n(
      /*! is-accessor-descriptor */
      "./node_modules/base/node_modules/is-accessor-descriptor/index.js");
      var i = n(
      /*! is-data-descriptor */
      "./node_modules/base/node_modules/is-data-descriptor/index.js");

      e.exports = function (e, t) {
        return "object" === r(e) && ("get" in e ? o(e, t) : i(e, t));
      };
    },
    "./node_modules/braces/index.js":
    /*!**************************************!*\
      !*** ./node_modules/braces/index.js ***!
      \**************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");
      var o = n(
      /*! array-unique */
      "./node_modules/array-unique/index.js");
      var i = n(
      /*! extend-shallow */
      "./node_modules/braces/node_modules/extend-shallow/index.js");
      var s = n(
      /*! ./lib/compilers */
      "./node_modules/braces/lib/compilers.js");
      var a = n(
      /*! ./lib/parsers */
      "./node_modules/braces/lib/parsers.js");
      var u = n(
      /*! ./lib/braces */
      "./node_modules/braces/lib/braces.js");
      var c = n(
      /*! ./lib/utils */
      "./node_modules/braces/lib/utils.js");
      var p = {};

      function l(e, t) {
        var n = c.createKey(String(e), t);
        var r = [];
        var i = t && false === t.cache;

        if (!i && p.hasOwnProperty(n)) {
          return p[n];
        }

        if (Array.isArray(e)) {
          for (var s = 0; s < e.length; s++) {
            r.push.apply(r, l.create(e[s], t));
          }
        } else {
          r = l.create(e, t);
        }

        if (t && true === t.nodupes) {
          r = o(r);
        }

        if (!i) {
          p[n] = r;
        }

        return r;
      }

      function d(e, t, n, r) {
        var o = c.createKey(e + ":" + t, n);

        if (n && false === n.cache) {
          l.clearCache();
          return r(t, n);
        }

        if (p.hasOwnProperty(o)) {
          return p[o];
        }

        var i = r(t, n);
        p[o] = i;
        return i;
      }

      l.expand = function (e, t) {
        return l.create(e, i({}, t, {
          expand: true
        }));
      };

      l.optimize = function (e, t) {
        return l.create(e, t);
      };

      l.create = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        var n = t && t.maxLength || 65536;

        if (e.length >= n) {
          throw new Error("expected pattern to be less than " + n + " characters");
        }

        return d("create", e, t, function () {
          if ("" === e || e.length < 3) {
            return [e];
          }

          if (c.isEmptySets(e)) {
            return [];
          }

          if (c.isQuotedString(e)) {
            return [e.slice(1, -1)];
          }

          var n = new u(t);
          var r = t && true === t.expand ? n.expand(e, t) : n.optimize(e, t);
          var i = r.output;

          if (t && true === t.noempty) {
            i = i.filter(Boolean);
          }

          if (t && true === t.nodupes) {
            i = o(i);
          }

          Object.defineProperty(i, "result", {
            enumerable: false,
            value: r
          });
          return i;
        });
      };

      l.makeRe = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        var n = t && t.maxLength || 65536;

        if (e.length >= n) {
          throw new Error("expected pattern to be less than " + n + " characters");
        }

        return d("makeRe", e, t, function () {
          var n = l(e, t);
          var o = i({
            strictErrors: false
          }, t);
          return r(n, o);
        });
      };

      l.parse = function (e, t) {
        return new u(t).parse(e, t);
      };

      l.compile = function (e, t) {
        return new u(t).compile(e, t);
      };

      l.clearCache = function () {
        p = l.cache = {};
      };

      l.Braces = u;
      l.compilers = s;
      l.parsers = a;
      l.cache = p;
      e.exports = l;
    },
    "./node_modules/braces/lib/braces.js":
    /*!*******************************************!*\
      !*** ./node_modules/braces/lib/braces.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! extend-shallow */
      "./node_modules/braces/node_modules/extend-shallow/index.js");
      var o = n(
      /*! snapdragon */
      "./node_modules/snapdragon/index.js");
      var i = n(
      /*! ./compilers */
      "./node_modules/braces/lib/compilers.js");
      var s = n(
      /*! ./parsers */
      "./node_modules/braces/lib/parsers.js");
      var a = n(
      /*! ./utils */
      "./node_modules/braces/lib/utils.js");

      function u(e) {
        this.options = r({}, e);
      }

      u.prototype.init = function (e) {
        if (!this.isInitialized) {
          this.isInitialized = true;
          var t = a.createOptions({}, this.options, e);
          this.snapdragon = this.options.snapdragon || new o(t);
          this.compiler = this.snapdragon.compiler;
          this.parser = this.snapdragon.parser;
          i(this.snapdragon, t);
          s(this.snapdragon, t);
          a.define(this.snapdragon, "parse", function (e, t) {
            var n = o.prototype.parse.apply(this, arguments);
            this.parser.ast.input = e;

            for (var r = this.parser.stack; r.length;) {
              i({
                type: "brace.close",
                val: ""
              }, r.pop());
            }

            function i(e, t) {
              a.define(e, "parent", t);
              t.nodes.push(e);
            }

            a.define(n, "parser", this.parser);
            return n;
          });
        }
      };

      u.prototype.parse = function (e, t) {
        this.init(t);
        return e && "object" == typeof e && e.nodes ? e : this.snapdragon.parse(e, t);
      };

      u.prototype.compile = function (e, t) {
        if ("string" == typeof e) {
          e = this.parse(e, t);
        } else {
          this.init(t);
        }

        return this.snapdragon.compile(e, t);
      };

      u.prototype.expand = function (e) {
        var t = this.parse(e, {
          expand: true
        });
        return this.compile(t, {
          expand: true
        });
      };

      u.prototype.optimize = function (e) {
        var t = this.parse(e, {
          optimize: true
        });
        return this.compile(t, {
          optimize: true
        });
      };

      e.exports = u;
    },
    "./node_modules/braces/lib/compilers.js":
    /*!**********************************************!*\
      !*** ./node_modules/braces/lib/compilers.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! ./utils */
      "./node_modules/braces/lib/utils.js");

      function o(e, t, n) {
        return r.flatten(r.repeat(r.arrayify(e), t));
      }

      function i(e) {
        return true === e.escaped;
      }

      function s(e, t) {
        return undefined !== e && e.type === t;
      }

      e.exports = function (e, t) {
        e.compiler.set("bos", function () {
          this.ast.queue = i(this.ast) ? [this.ast.val] : [];

          if (!this.output) {
            this.ast.queue = i(this.ast) ? [this.ast.val] : [];
            this.ast.count = 1;
          }
        }).set("bracket", function (e) {
          var t = e.close;
          var n = e.escaped ? "\\[" : "[";
          var o = e.negated;
          var i = e.inner;

          if ("]-" === (i = i.replace(/\\(?=[\\\w]|$)/g, "\\\\"))) {
            i = "\\]\\-";
          }

          if (o && -1 === i.indexOf(".")) {
            i += ".";
          }

          if (o && -1 === i.indexOf("/")) {
            i += "/";
          }

          var s = n + o + i + t;
          var a = e.parent.queue;
          var u = r.arrayify(a.pop());
          a.push(r.join(u, s));
          a.push.apply(a, []);
        }).set("brace", function (e) {
          e.queue = i(e) ? [e.val] : [];
          e.count = 1;
          return this.mapVisit(e.nodes);
        }).set("brace.open", function (e) {
          e.parent.open = e.val;
        }).set("text", function (e) {
          var n = e.parent.queue;
          var a = e.escaped;
          var u = [e.val];

          if (false === e.optimize) {
            t = r.extend({}, t, {
              optimize: false
            });
          }

          if (e.multiplier > 1) {
            e.parent.count *= e.multiplier;
          }

          if (true === t.quantifiers && r.isQuantifier(e.val)) {
            a = true;
          } else {
            if (e.val.length > 1) {
              if (s(e.parent, "brace") && !i(e)) {
                var c = r.expand(e.val, t);
                u = c.segs;

                if (c.isOptimized) {
                  e.parent.isOptimized = true;
                }

                if (!u.length) {
                  var p = c.val || e.val;

                  if (false !== t.unescape) {
                    p = (p = p.replace(/\\([,.])/g, "$1")).replace(/["'`]/g, "");
                  }

                  u = [p];
                  a = true;
                }
              }
            } else {
              e.parent.queue.push([""]);

              if ("," === e.val) {
                if (t.expand) {
                  u = [""];
                } else {
                  u = ["|"];
                }
              } else {
                a = true;
              }
            }
          }

          if (a && s(e.parent, "brace") && (e.parent.nodes.length <= 4 && 1 === e.parent.count || e.parent.length <= 3)) {
            e.parent.escaped = true;
          }

          if (function (e) {
            return Array.isArray(e.queue) && e.queue.length;
          }(e.parent)) {
            var l = r.arrayify(n.pop());
            l = o(l, e.parent.count);

            if (e.parent.count > 1 && t.expand) {
              l = o(l, e.parent.count);
              e.parent.count = 1;
            }

            n.push(r.join(r.flatten(l), u.shift()));
            n.push.apply(n, u);
          } else {
            e.parent.queue = u;
          }
        }).set("brace.close", function (e) {
          var n = e.parent.queue;
          var a = e.parent.parent;
          var u = a.queue.pop();
          var c = e.parent.open;
          var p = e.val;
          c = "(";

          if (c && p && function (e, t) {
            return !!e.parent.isOptimized || s(e.parent, "brace") && !i(e.parent) && true !== t.expand;
          }(e, t)) {
            c = "(";
            p = ")";
          }

          var l = r.last(n);
          l = o(n.pop(), e.parent.count);
          e.parent.count = 1;

          if (e.parent.count > 1 && t.expand) {
            l = o(n.pop(), e.parent.count);
            e.parent.count = 1;
            n.push(l);
          }

          c = "";

          if (p && "string" == typeof l && 1 === l.length) {
            c = "";
            p = "";
          }

          n.push(r.join(c, n.pop() || ""));

          if (!(!function (e, t) {
            return i(e.parent) || false !== t.optimize;
          }(e, t) && !function (e, t) {
            if (1 === e.parent.queue.length) {
              return true;
            }

            var n = e.parent.nodes;
            return 3 === n.length && s(n[0], "brace.open") && !s(n[1], "text") && s(n[2], "brace.close");
          }(e) || e.parent.hasEmpty)) {
            n.push(r.join(c, n.pop() || ""));
            n = r.flatten(r.join(n, p));
          }

          if (undefined === u) {
            a.queue = [n];
          } else {
            a.queue.push(r.flatten(r.join(u, n)));
          }
        }).set("eos", function (e) {
          if (false !== t.optimize) {
            this.output = r.last(r.flatten(this.ast.queue));
          } else {
            if (Array.isArray(r.last(this.ast.queue))) {
              this.output = r.flatten(this.ast.queue.pop());
            } else {
              this.output = r.flatten(this.ast.queue);
            }
          }

          if (e.parent.count > 1 && t.expand) {
            this.output = o(this.output, e.parent.count);
          }

          this.output = r.arrayify(this.output);

          if (!this.input) {
            if (false !== t.optimize) {
              this.output = r.last(r.flatten(this.ast.queue));
            } else {
              if (Array.isArray(r.last(this.ast.queue))) {
                this.output = r.flatten(this.ast.queue.pop());
              } else {
                this.output = r.flatten(this.ast.queue);
              }
            }

            if (e.parent.count > 1 && t.expand) {
              this.output = o(this.output, e.parent.count);
            }

            this.output = r.arrayify(this.output);
            this.ast.queue = [];
          }
        });
      };
    },
    "./node_modules/braces/lib/parsers.js":
    /*!********************************************!*\
      !*** ./node_modules/braces/lib/parsers.js ***!
      \********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! snapdragon-node */
      "./node_modules/snapdragon-node/index.js");
      var o = n(
      /*! ./utils */
      "./node_modules/braces/lib/utils.js");

      function i(e, t, n, r) {
        t.orig = t.val;
        var i = this.prev();
        var s = o.last(i.nodes);
        var a = false;

        if (t.val.length > 1) {
          var u = t.val.charAt(0);
          var c = t.val.slice(-1);
          a = '"' === u && '"' === c || "'" === u && "'" === c || "`" === u && "`" === c;
        }

        t.val = t.val.slice(1, t.val.length - 1);

        if (a && false !== r.unescape) {
          t.val = t.val.slice(1, t.val.length - 1);
          t.escaped = true;
        }

        if (t.match) {
          var p = t.match[1];

          if (!(p && -1 !== p.indexOf("}"))) {
            p = t.match[0];
          }

          var l = p.replace(/\{/g, ",").replace(/\}/g, "");
          t.multiplier *= l.length;
          t.val = "";
        }

        if ("text" === s.type && 1 === s.multiplier && 1 === t.multiplier && t.val) {
          s.val += t.val;
        } else {
          i.push(t);
        }
      }

      e.exports = function (e, t) {
        e.parser.set("bos", function () {
          if (!this.parsed) {
            this.ast = this.nodes[0] = new r(this.ast);
          }
        }).set("escape", function () {
          var e = this.position();
          var n = this.match(/^(?:\\(.)|\$\{)/);

          if (n) {
            var s = this.prev();
            var a = o.last(s.nodes);
            var u = e(new r({
              type: "text",
              multiplier: 1,
              val: n[0]
            }));

            if ("\\\\" === u.val) {
              return u;
            }

            if ("${" === u.val) {
              for (var c, p = this.input, l = -1; c = p[++l];) {
                this.consume(1);
                u.val += c;

                if ("\\" !== c) {
                  if ("}" === c) {
                    break;
                  }
                } else {
                  u.val += p[++l];
                }
              }
            }

            if (false !== this.options.unescape) {
              u.val = u.val.replace(/\\([{}])/g, "$1");
            }

            a.val = u.val;
            this.consume(1)
            return '"' === a.val && '"' === this.input.charAt(0) ? undefined : i.call(this, e, u, s, t);
          }
        }).set("bracket", function () {
          var e = this.isInside("brace");
          var t = this.position();
          var n = this.match(/^(?:\[([!^]?)([^\]]{2,}|\]-)(\]|[^*+?]+)|\[)/);

          if (n) {
            var o = this.prev();
            var i = n[0];
            var s = n[1] ? "^" : "";
            var a = n[2] || "";
            var u = n[3] || "";
            o.text = o.text || "";

            if (e && "brace" === o.type) {
              o.text = o.text || "";
              o.text += i;
            }

            var c = this.input.slice(0, 2);

            if ("" === a && "\\]" === c) {
              a += c;
              this.consume(2);

              for (var p, l = this.input, d = -1; p = l[++d];) {
                this.consume(1);

                if ("]" === p) {
                  u = p;
                  break;
                }

                a += p;
              }
            }

            return t(new r({
              type: "bracket",
              val: i,
              escaped: "]" !== u,
              negated: s,
              inner: a,
              close: u
            }));
          }
        }).set("multiplier", function () {
          var e = this.isInside("brace");
          var n = this.position();
          var o = this.match(/^\{((?:,|\{,+\})+)\}/);

          if (o) {
            this.multiplier = true;
            var s = this.prev();
            var a = o[0];
            s.text = s.text || "";

            if (e && "brace" === s.type) {
              s.text = s.text || "";
              s.text += a;
            }

            var u = n(new r({
              type: "text",
              multiplier: 1,
              match: o,
              val: a
            }));
            return i.call(this, n, u, s, t);
          }
        }).set("brace.open", function () {
          var e = this.position();
          var t = this.match(/^\{(?!(?:[^\\}]?|,+)\})/);

          if (t) {
            var n;
            var i = this.prev();
            var s = o.last(i.nodes);

            if (s && s.val && ("!" === (n = s.val.slice(-1)) || "@" === n || "*" === n || "?" === n || "+" === n)) {
              s.optimize = false;
            }

            var a = e(new r({
              type: "brace.open",
              val: t[0]
            }));
            var u = e(new r({
              type: "brace",
              nodes: []
            }));
            u.push(a);
            i.push(u);
            this.push("brace", u);
          }
        }).set("brace.close", function () {
          var e = this.position();
          var t = this.match(/^\}/);

          if (t && t[0]) {
            var n = this.pop("brace");
            var i = e(new r({
              type: "brace.close",
              val: t[0]
            }));

            if (!this.isType(n, "brace")) {
              if (this.options.strict) {
                throw new Error('missing opening "{"');
              }

              i.type = "text";
              i.multiplier = 0;
              i.escaped = true;
              return i;
            }

            var s = this.prev();
            var a = o.last(s.nodes);

            if (a.text) {
              if (")" === o.last(a.nodes).val && /[!@*?+]\(/.test(a.text)) {
                var u = a.nodes[0];
                var c = a.nodes[1];

                if ("brace.open" === u.type && c && "text" === c.type) {
                  c.optimize = false;
                }
              }
            }

            if (n.nodes.length > 2) {
              var p = n.nodes[1];
              n.nodes.splice(1, 1);

              if ("text" === p.type && "," === p.val) {
                n.nodes.splice(1, 1);
                n.nodes.push(p);
              }
            }

            n.push(i);
          }
        }).set("boundary", function () {
          var e = this.position();
          var t = this.match(/^[$^](?!\{)/);

          if (t) {
            return e(new r({
              type: "text",
              val: t[0]
            }));
          }
        }).set("nobrace", function () {
          var e = this.isInside("brace");
          var t = this.position();
          var n = this.match(/^\{[^,]?\}/);

          if (n) {
            var o = this.prev();
            var i = n[0];
            o.text = o.text || "";

            if (e && "brace" === o.type) {
              o.text = o.text || "";
              o.text += i;
            }

            return t(new r({
              type: "text",
              multiplier: 0,
              val: i
            }));
          }
        }).set("text", function () {
          var e = this.isInside("brace");
          var n = this.position();
          var o = this.match(/^((?!\\)[^${}[\]])+/);

          if (o) {
            var s = this.prev();
            var a = o[0];
            s.text = s.text || "";

            if (e && "brace" === s.type) {
              s.text = s.text || "";
              s.text += a;
            }

            var u = n(new r({
              type: "text",
              multiplier: 1,
              val: a
            }));
            return i.call(this, n, u, s, t);
          }
        });
      };
    },
    "./node_modules/braces/lib/utils.js":
    /*!******************************************!*\
      !*** ./node_modules/braces/lib/utils.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! split-string */
      "./node_modules/split-string/index.js");
      var o = e.exports;
      o.extend = n(
      /*! extend-shallow */
      "./node_modules/braces/node_modules/extend-shallow/index.js");
      o.flatten = n(
      /*! arr-flatten */
      "./node_modules/arr-flatten/index.js");
      o.isObject = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      o.fillRange = n(
      /*! fill-range */
      "./node_modules/fill-range/index.js");
      o.repeat = n(
      /*! repeat-element */
      "./node_modules/repeat-element/index.js");
      o.unique = n(
      /*! array-unique */
      "./node_modules/array-unique/index.js");

      o.define = function (e, t, n) {
        Object.defineProperty(e, t, {
          writable: true,
          configurable: true,
          enumerable: false,
          value: n
        });
      };

      o.isEmptySets = function (e) {
        return /^(?:\{,\})+$/.test(e);
      };

      o.isQuotedString = function (e) {
        var t = e.charAt(0);
        return ("'" === t || '"' === t || "`" === t) && e.slice(-1) === t;
      };

      o.createKey = function (e, t) {
        var n = e;

        if (undefined === t) {
          return n;
        }

        for (var r = Object.keys(t), o = 0; o < r.length; o++) {
          var i = r[o];
          n += ";" + i + "=" + String(t[i]);
        }

        return n;
      };

      o.createOptions = function (e) {
        var t = o.extend.apply(null, arguments);

        if ("boolean" == typeof t.expand) {
          t.optimize = !t.expand;
        }

        if ("boolean" == typeof t.optimize) {
          t.expand = !t.optimize;
        }

        if (true === t.optimize) {
          t.makeRe = true;
        }

        return t;
      };

      o.join = function (e, t, n) {
        n = n || {};
        e = o.arrayify(e);
        t = o.arrayify(t);

        if (!e.length) {
          return t;
        }

        if (!t.length) {
          return e;
        }

        for (var r = e.length, i = -1, s = []; ++i < r;) {
          var a = e[i];

          if (Array.isArray(a)) {
            for (var u = 0; u < a.length; u++) {
              a[u] = o.join(a[u], t, n);
            }

            s.push(a);
          } else {
            for (var c = 0; c < t.length; c++) {
              var p = t[c];

              if (Array.isArray(p)) {
                s.push(o.join(a, p, n));
              } else {
                s.push(a + p);
              }
            }
          }
        }

        return s;
      };

      o.split = function (e, t) {
        var n = o.extend({
          sep: ","
        }, t);

        if ("boolean" != typeof n.keepQuotes) {
          n.keepQuotes = true;
        }

        if (false === n.unescape) {
          n.keepEscaping = true;
        }

        return r(e, n, o.escapeBrackets(n));
      };

      o.expand = function (e, t) {
        var n = o.extend({
          rangeLimit: 1e4
        }, t);
        var r = o.split(e, n);
        var i = {
          segs: r
        };

        if (o.isQuotedString(e)) {
          return i;
        }

        if (true === n.rangeLimit) {
          n.rangeLimit = 1e4;
        }

        if (r.length > 1) {
          if (false === n.optimize) {
            i.val = r[0];
            return i;
          }

          i.segs = o.stringifyArray(i.segs);
        } else {
          if (1 === r.length) {
            var s = e.split("..");

            if (1 === s.length) {
              i.val = i.segs[i.segs.length - 1] || i.val || e;
              i.segs = [];
              return i;
            }

            if (2 === s.length && s[0] === s[1]) {
              i.escaped = true;
              i.val = s[0];
              i.segs = [];
              return i;
            }

            if (s.length > 1) {
              n.optimize = true;

              if (false !== n.optimize) {
                n.optimize = true;
                delete n.expand;
              }

              if (true !== n.optimize) {
                var a = Math.min(s[0], s[1]);
                var u = Math.max(s[0], s[1]);
                var c = s[2] || 1;

                if (false !== n.rangeLimit && (u - a) / c >= n.rangeLimit) {
                  throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
                }
              }

              s.push(n);
              i.segs = o.fillRange.apply(null, s);

              if (true === n.optimize) {
                i.segs = o.stringifyArray(i.segs);
              }

              if ("" === i.segs) {
                i.val = e;
              } else {
                i.val = i.segs[0];
              }

              i.escaped = true;
              i.val = e;
              return i.segs.length ? i : i;
            }
          } else {
            i.val = e;
          }
        }

        return i;
      };

      o.escapeBrackets = function (e) {
        return function (t) {
          if (t.escaped && "b" === t.val) {
            t.val = "\\b";
          } else {
            if ("(" === t.val || "[" === t.val) {
              for (var n = o.extend({}, e), r = [], i = [], s = [], a = t.val, u = t.str, c = t.idx - 1; ++c < u.length;) {
                var p = u[c];

                if ("\\" !== p) {
                  i.push(p);

                  if ("(" === p) {
                    i.push(p);
                    s.push(p);
                  }

                  r.push(p);

                  if ("[" === p) {
                    r.push(p);
                    s.push(p);
                  }

                  i.pop();
                  s.pop();

                  if (")" === p && !s.length) {
                    a += p;
                    break;
                  }

                  r.pop();
                  s.pop();

                  if ("]" === p && !s.length) {
                    a += p;
                    break;
                  }

                  a += p;
                } else {
                  a += (false === n.keepEscaping ? "" : p) + u[++c];
                }
              }

              t.split = false;
              t.val = a.slice(1);
              t.idx = c;
            }
          }
        };
      };

      o.isQuantifier = function (e) {
        return /^(?:[0-9]?,[0-9]|[0-9],)$/.test(e);
      };

      o.stringifyArray = function (e) {
        return [o.arrayify(e).join("|")];
      };

      o.arrayify = function (e) {
        return undefined === e ? [] : "string" == typeof e ? [e] : e;
      };

      o.isString = function (e) {
        return null != e && "string" == typeof e;
      };

      o.last = function (e, t) {
        return e[e.length - (t || 1)];
      };

      o.escapeRegex = function (e) {
        return e.replace(/\\?([!^*?()[\]{}+?/])/g, "\\$1");
      };
    },
    "./node_modules/braces/node_modules/extend-shallow/index.js":
    /*!******************************************************************!*\
      !*** ./node_modules/braces/node_modules/extend-shallow/index.js ***!
      \******************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function o(e, t) {
        for (var n in t) {
          if (i(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = function (e) {
        if (!r(e)) {
          e = {};
        }

        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];

          if (r(i)) {
            o(e, i);
          }
        }

        return e;
      };
    },
    "./node_modules/cache-base/index.js":
    /*!******************************************!*\
      !*** ./node_modules/cache-base/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var o = n(
      /*! component-emitter */
      "./node_modules/component-emitter/index.js");
      var i = n(
      /*! collection-visit */
      "./node_modules/collection-visit/index.js");
      var s = n(
      /*! to-object-path */
      "./node_modules/to-object-path/index.js");
      var a = n(
      /*! union-value */
      "./node_modules/union-value/index.js");
      var u = n(
      /*! unset-value */
      "./node_modules/unset-value/index.js");
      var c = n(
      /*! get-value */
      "./node_modules/get-value/index.js");
      n(
      /*! has-value */
      "./node_modules/has-value/index.js");
      var p = n(
      /*! set-value */
      "./node_modules/set-value/index.js");

      function l(e) {
        function t(t) {
          if (e) {
            this[e] = {};
          }

          if (t) {
            this.set(t);
          }
        }

        o(t.prototype);

        t.prototype.set = function (t, n) {
          if (Array.isArray(t) && 2 === arguments.length) {
            t = s(t);
          }

          p(e ? this[e] : this, t, n);

          if (r(t) || Array.isArray(t)) {
            this.visit("set", t);
          } else {
            p(e ? this[e] : this, t, n);
            this.emit("set", t, n);
          }

          return this;
        };

        t.prototype.union = function (t, n) {
          if (Array.isArray(t) && 2 === arguments.length) {
            t = s(t);
          }

          var r = e ? this[e] : this;
          a(r, t, d(n));
          this.emit("union", n);
          return this;
        };

        t.prototype.get = function (t) {
          t = s(arguments);
          var n = e ? this[e] : this;
          var r = c(n, t);
          this.emit("get", t, r);
          return r;
        };

        t.prototype.has = function (t) {
          t = s(arguments);
          var n = e ? this[e] : this;
          var r = c(n, t);
          var o = undefined !== r;
          this.emit("has", t, o);
          return o;
        };

        t.prototype.del = function (t) {
          u(e ? this[e] : this, t);

          if (Array.isArray(t)) {
            this.visit("del", t);
          } else {
            u(e ? this[e] : this, t);
            this.emit("del", t);
          }

          return this;
        };

        t.prototype.clear = function () {
          if (e) {
            this[e] = {};
          }
        };

        t.prototype.visit = function (e, t) {
          i(this, e, t);
          return this;
        };

        return t;
      }

      function d(e) {
        return e ? Array.isArray(e) ? e : [e] : [];
      }

      e.exports = l();
      e.exports.namespace = l;
    },
    "./node_modules/class-utils/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/class-utils/index.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      n(
      /*! util */
      "util");
      var r = n(
      /*! arr-union */
      "./node_modules/arr-union/index.js");
      var o = n(
      /*! define-property */
      "./node_modules/class-utils/node_modules/define-property/index.js");
      var i = n(
      /*! static-extend */
      "./node_modules/static-extend/index.js");
      var s = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var a = e.exports;

      a.isObject = function (e) {
        return s(e) || "function" == typeof e;
      };

      a.has = function (e, t) {
        var n = (t = a.arrayify(t)).length;

        if (a.isObject(e)) {
          for (var r in e) {
            if (t.indexOf(r) > -1) {
              return true;
            }
          }

          var o = a.nativeKeys(e);
          return a.has(o, t);
        }

        if (Array.isArray(e)) {
          for (var i = e; n--;) {
            if (i.indexOf(t[n]) > -1) {
              return true;
            }
          }

          return false;
        }

        throw new TypeError("expected an array or object.");
      };

      a.hasAll = function (e, t) {
        for (var n = (t = a.arrayify(t)).length; n--;) {
          if (!a.has(e, t[n])) {
            return false;
          }
        }

        return true;
      };

      a.arrayify = function (e) {
        return e ? Array.isArray(e) ? e : [e] : [];
      };

      a.noop = function () {};

      a.identity = function (e) {
        return e;
      };

      a.hasConstructor = function (e) {
        return a.isObject(e) && undefined !== e.constructor;
      };

      a.nativeKeys = function (e) {
        if (!a.hasConstructor(e)) {
          return [];
        }

        var t = Object.getOwnPropertyNames(e);

        if ("caller" in e) {
          t.push("caller");
        }

        return t;
      };

      a.getDescriptor = function (e, t) {
        if (!a.isObject(e)) {
          throw new TypeError("expected an object.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected key to be a string.");
        }

        return Object.getOwnPropertyDescriptor(e, t);
      };

      a.copyDescriptor = function (e, t, n) {
        if (!a.isObject(e)) {
          throw new TypeError("expected receiving object to be an object.");
        }

        if (!a.isObject(t)) {
          throw new TypeError("expected providing object to be an object.");
        }

        if ("string" != typeof n) {
          throw new TypeError("expected name to be a string.");
        }

        var r = a.getDescriptor(t, n);

        if (r) {
          Object.defineProperty(e, n, r);
        }
      };

      a.copy = function (e, t, n) {
        if (!a.isObject(e)) {
          throw new TypeError("expected receiving object to be an object.");
        }

        if (!a.isObject(t)) {
          throw new TypeError("expected providing object to be an object.");
        }

        var r;
        var i = Object.getOwnPropertyNames(t);
        var s = Object.keys(t);
        var u = i.length;

        for (n = a.arrayify(n); u--;) {
          r = i[u];

          if (a.has(s, r)) {
            o(e, r, t[r]);
          } else {
            if (!(r in e || a.has(n, r))) {
              a.copyDescriptor(e, t, r);
            }
          }
        }
      };

      a.inherit = function (e, t, n) {
        if (!a.isObject(e)) {
          throw new TypeError("expected receiving object to be an object.");
        }

        if (!a.isObject(t)) {
          throw new TypeError("expected providing object to be an object.");
        }

        var r = [];

        for (var o in t) {
          r.push(o);
          e[o] = t[o];
        }

        r = r.concat(a.arrayify(n));
        var i = t.prototype || t;
        var s = e.prototype || e;
        a.copy(s, i, r);
      };

      a.extend = function () {
        return i.apply(null, arguments);
      };

      a.bubble = function (e, t) {
        t = t || [];

        e.bubble = function (n, o) {
          if (Array.isArray(o)) {
            t = r([], t, o);
          }

          for (var i = t.length, s = -1; ++s < i;) {
            var u = t[s];
            e.on(u, n.emit.bind(n, u));
          }

          a.bubble(n, t);
        };
      };
    },
    "./node_modules/class-utils/node_modules/define-property/index.js":
    /*!************************************************************************!*\
      !*** ./node_modules/class-utils/node_modules/define-property/index.js ***!
      \************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/collection-visit/index.js":
    /*!************************************************!*\
      !*** ./node_modules/collection-visit/index.js ***!
      \************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * collection-visit <https://github.com/jonschlinkert/collection-visit>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! object-visit */
      "./node_modules/object-visit/index.js");
      var o = n(
      /*! map-visit */
      "./node_modules/map-visit/index.js");

      e.exports = function (e, t, n) {
        var i;

        if ("string" == typeof n && t in e) {
          var s = [].slice.call(arguments, 2);
          i = e[t].apply(e, s);
        } else {
          i = Array.isArray(n) ? o.apply(null, arguments) : r.apply(null, arguments);
        }

        return undefined !== i ? i : e;
      };
    },
    "./node_modules/component-emitter/index.js":
    /*!*************************************************!*\
      !*** ./node_modules/component-emitter/index.js ***!
      \*************************************************/

    /*! no static exports found */
    function (e, t, n) {
      function r(e) {
        if (e) {
          return function (e) {
            for (var t in r.prototype) {
              e[t] = r.prototype[t];
            }

            return e;
          }(e);
        }
      }

      e.exports = r;

      r.prototype.on = r.prototype.addEventListener = function (e, t) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t);
        return this;
      };

      r.prototype.once = function (e, t) {
        function n() {
          this.off(e, n);
          t.apply(this, arguments);
        }

        n.fn = t;
        this.on(e, n);
        return this;
      };

      r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
        this._callbacks = this._callbacks || {};

        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }

        var n;
        var r = this._callbacks["$" + e];

        if (!r) {
          return this;
        }

        if (1 == arguments.length) {
          delete this._callbacks["$" + e];
          return this;
        }

        for (var o = 0; o < r.length; o++) {
          if ((n = r[o]) === t || n.fn === t) {
            r.splice(o, 1);
            break;
          }
        }

        if (0 === r.length) {
          delete this._callbacks["$" + e];
        }

        return this;
      };

      r.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};

        for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) {
          t[r - 1] = arguments[r];
        }

        if (n) {
          r = 0;

          for (var o = (n = n.slice(0)).length; r < o; ++r) {
            n[r].apply(this, t);
          }
        }

        return this;
      };

      r.prototype.listeners = function (e) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + e] || [];
      };

      r.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
      };
    },
    "./node_modules/copy-descriptor/index.js":
    /*!***********************************************!*\
      !*** ./node_modules/copy-descriptor/index.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * copy-descriptor <https://github.com/jonschlinkert/copy-descriptor>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      function r(e) {
        return "[object Object]" === {}.toString.call(e);
      }

      e.exports = function (e, t, n, o) {
        o = n;
        n = t;

        if (!(r(t) || "function" == typeof t)) {
          o = n;
          n = t;
          t = e;
        }

        if (!r(e) && "function" != typeof e) {
          throw new TypeError("expected the first argument to be an object");
        }

        if (!r(t) && "function" != typeof t) {
          throw new TypeError("expected provider to be an object");
        }

        if ("string" != typeof o) {
          o = n;
        }

        if ("string" != typeof n) {
          throw new TypeError("expected key to be a string");
        }

        if (!(n in t)) {
          throw new Error('property "' + n + '" does not exist');
        }

        var i = Object.getOwnPropertyDescriptor(t, n);

        if (i) {
          Object.defineProperty(e, o, i);
        }
      };
    },
    "./node_modules/debug/src/browser.js":
    /*!*******************************************!*\
      !*** ./node_modules/debug/src/browser.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      function r() {
        var e;

        try {
          e = t.storage.debug;
        } catch (e) {}

        if (!e && "undefined" != typeof process && "env" in process) {
          e = process.env.DEBUG;
        }

        return e;
      }

      (t = e.exports = n(
      /*! ./debug */
      "./node_modules/debug/src/debug.js")).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      };

      t.formatArgs = function (e) {
        var n = this.useColors;
        e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff);

        if (!n) {
          return;
        }

        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var o = 0;
        var i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          o++;

          if ("%%" !== e) {
            o++;

            if ("%c" === e) {
              i = o;
            }
          }
        });
        e.splice(i, 0, r);
      };

      t.save = function (e) {
        try {
          if (null == e) {
            t.storage.removeItem("debug");
          } else {
            t.storage.debug = e;
          }
        } catch (e) {}
      };

      t.load = r;

      t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) {
          return true;
        }

        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      };

      t.storage = "undefined" != typeof chrome && undefined !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (e) {}
      }();
      t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];

      t.formatters.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };

      t.enable(r());
    },
    "./node_modules/debug/src/debug.js":
    /*!*****************************************!*\
      !*** ./node_modules/debug/src/debug.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r;

      function o(e) {
        function n() {
          if (n.enabled) {
            var e = n;
            var o = +new Date();
            var i = o - (r || o);
            e.diff = i;
            e.prev = r;
            e.curr = o;
            r = o;

            for (var s = new Array(arguments.length), a = 0; a < s.length; a++) {
              s[a] = arguments[a];
            }

            s[0] = t.coerce(s[0]);

            if ("string" != typeof s[0]) {
              s.unshift("%O");
            }

            var u = 0;
            s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
              if ("%%" === n) {
                return n;
              }

              u++;
              var o = t.formatters[r];

              if ("function" == typeof o) {
                var i = s[u];
                n = o.call(e, i);
                s.splice(u, 1);
                u--;
              }

              return n;
            });
            t.formatArgs.call(e, s);
            var c = n.log || t.log || console.log.bind(console);
            c.apply(e, s);
          }
        }

        n.namespace = e;
        n.enabled = t.enabled(e);
        n.useColors = t.useColors();

        n.color = function (e) {
          var n;
          var r = 0;

          for (n in e) {
            r = (r << 5) - r + e.charCodeAt(n);
            r |= 0;
          }

          return t.colors[Math.abs(r) % t.colors.length];
        }(e);

        if ("function" == typeof t.init) {
          t.init(n);
        }

        return n;
      }

      (t = e.exports = o.debug = o.default = o).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      };

      t.disable = function () {
        t.enable("");
      };

      t.enable = function (e) {
        t.save(e);
        t.names = [];
        t.skips = [];

        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) {
          if (n[o]) {
            if ("-" === (e = n[o].replace(/\*/g, ".*?"))[0]) {
              t.skips.push(new RegExp("^" + e.substr(1) + "$"));
            } else {
              t.names.push(new RegExp("^" + e + "$"));
            }
          }
        }
      };

      t.enabled = function (e) {
        var n;
        var r;
        n = 0;

        for (r = t.skips.length; n < r; n++) {
          if (t.skips[n].test(e)) {
            return false;
          }
        }

        n = 0;

        for (r = t.names.length; n < r; n++) {
          if (t.names[n].test(e)) {
            return true;
          }
        }

        return false;
      };

      t.humanize = n(
      /*! ms */
      "./node_modules/ms/index.js");
      t.names = [];
      t.skips = [];
      t.formatters = {};
    },
    "./node_modules/debug/src/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/debug/src/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      if ("undefined" != typeof process && "renderer" === process.type) {
        e.exports = n(
        /*! ./browser.js */
        "./node_modules/debug/src/browser.js");
      } else {
        e.exports = n(
        /*! ./node.js */
        "./node_modules/debug/src/node.js");
      }
    },
    "./node_modules/debug/src/node.js":
    /*!****************************************!*\
      !*** ./node_modules/debug/src/node.js ***!
      \****************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! tty */
      "tty");
      var o = n(
      /*! util */
      "util");

      (t = e.exports = n(
      /*! ./debug */
      "./node_modules/debug/src/debug.js")).init = function (e) {
        e.inspectOpts = {};

        for (var n = Object.keys(t.inspectOpts), r = 0; r < n.length; r++) {
          e.inspectOpts[n[r]] = t.inspectOpts[n[r]];
        }
      };

      t.log = function () {
        return s.write(o.format.apply(o, arguments) + "\n");
      };

      t.formatArgs = function (e) {
        var n = this.namespace;

        if (this.useColors) {
          var r = this.color;
          var o = "  [3" + r + ";1m" + n + " [0m";
          e[0] = o + e[0].split("\n").join("\n" + o);
          e.push("[3" + r + "m+" + t.humanize(this.diff) + "[0m");
        } else {
          e[0] = new Date().toUTCString() + " " + n + " " + e[0];
        }
      };

      t.save = function (e) {
        if (null == e) {
          delete process.env.DEBUG;
        } else {
          process.env.DEBUG = e;
        }
      };

      t.load = a;

      t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : r.isatty(i);
      };

      t.colors = [6, 2, 3, 4, 5, 1];
      t.inspectOpts = Object.keys(process.env).filter(function (e) {
        return /^debug_/i.test(e);
      }).reduce(function (e, t) {
        var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, function (e, t) {
          return t.toUpperCase();
        });
        var r = process.env[t];
        r = !!/^(yes|on|true|enabled)$/i.test(r) || !/^(no|off|false|disabled)$/i.test(r) && ("null" === r ? null : Number(r));
        e[n] = r;
        return e;
      }, {});
      var i = parseInt(process.env.DEBUG_FD, 10) || 2;

      if (1 !== i && 2 !== i) {
        o.deprecate(function () {}, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
      }

      var s = 1 === i ? process.stdout : 2 === i ? process.stderr : function (e) {
        var t;

        switch (process.binding("tty_wrap").guessHandleType(e)) {
          case "TTY":
            (t = new r.WriteStream(e))._type = "tty";

            if (t._handle && t._handle.unref) {
              t._handle.unref();
            }

            break;

          case "FILE":
            var o = n(
            /*! fs */
            "fs");
            (t = new o.SyncWriteStream(e, {
              autoClose: false
            }))._type = "fs";
            break;

          case "PIPE":
          case "TCP":
            var i = n(
            /*! net */
            "net");
            (t = new i.Socket({
              fd: e,
              readable: false,
              writable: true
            })).readable = false;
            t.read = null;
            t._type = "pipe";

            if (t._handle && t._handle.unref) {
              t._handle.unref();
            }

            break;

          default:
            throw new Error("Implement me. Unknown stream file type!");
        }

        t.fd = e;
        t._isStdio = true;
        return t;
      }(i);

      function a() {
        return process.env.DEBUG;
      }

      t.formatters.o = function (e) {
        this.inspectOpts.colors = this.useColors;
        return o.inspect(e, this.inspectOpts).split("\n").map(function (e) {
          return e.trim();
        }).join(" ");
      };

      t.formatters.O = function (e) {
        this.inspectOpts.colors = this.useColors;
        return o.inspect(e, this.inspectOpts);
      };

      t.enable(a());
    },
    "./node_modules/decode-uri-component/index.js":
    /*!****************************************************!*\
      !*** ./node_modules/decode-uri-component/index.js ***!
      \****************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = new RegExp("%[a-f0-9]{2}", "gi");
      var o = new RegExp("(%[a-f0-9]{2})+", "gi");

      function i(e, t) {
        try {
          return decodeURIComponent(e.join(""));
        } catch (e) {}

        if (1 === e.length) {
          return e;
        }

        t = t || 1;
        var n = e.slice(0, t);
        var r = e.slice(t);
        return Array.prototype.concat.call([], i(n), i(r));
      }

      function s(e) {
        try {
          return decodeURIComponent(e);
        } catch (o) {
          for (var t = e.match(r), n = 1; n < t.length; n++) {
            t = (e = i(t, n).join("")).match(r);
          }

          return e;
        }
      }

      e.exports = function (e) {
        if ("string" != typeof e) {
          throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        }

        try {
          e = e.replace(/\+/g, " ");
          return decodeURIComponent(e);
        } catch (t) {
          return function (e) {
            for (var t = {
              "%FE%FF": "��",
              "%FF%FE": "��"
            }, n = o.exec(e); n;) {
              try {
                t[n[0]] = decodeURIComponent(n[0]);
              } catch (e) {
                var r = s(n[0]);

                if (r !== n[0]) {
                  t[n[0]] = r;
                }
              }

              n = o.exec(e);
            }

            t["%C2"] = "�";

            for (var i = Object.keys(t), a = 0; a < i.length; a++) {
              var u = i[a];
              e = e.replace(new RegExp(u, "g"), t[u]);
            }

            return e;
          }(e);
        }
      };
    },
    "./node_modules/define-property/index.js":
    /*!***********************************************!*\
      !*** ./node_modules/define-property/index.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015-2018, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var o = n(
      /*! is-descriptor */
      "./node_modules/define-property/node_modules/is-descriptor/index.js");
      var i = "undefined" != typeof Reflect && Reflect.defineProperty ? Reflect.defineProperty : Object.defineProperty;

      e.exports = function (e, t, n) {
        if (!r(e) && "function" != typeof e && !Array.isArray(e)) {
          throw new TypeError("expected an object, function, or array");
        }

        if ("string" != typeof t) {
          throw new TypeError('expected "key" to be a string');
        }

        i(e, t, n);
        i(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
        return o(n) ? e : e;
      };
    },
    "./node_modules/define-property/node_modules/is-accessor-descriptor/index.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/define-property/node_modules/is-accessor-descriptor/index.js ***!
      \***********************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = {
        get: "function",
        set: "function",
        configurable: "boolean",
        enumerable: "boolean"
      };

      function i(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }

      e.exports = function (e, t) {
        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if ("object" !== r(e)) {
          return false;
        }

        if (i(e, "value") || i(e, "writable")) {
          return false;
        }

        if (!i(e, "get") || "function" != typeof e.get) {
          return false;
        }

        if (i(e, "set") && "function" != typeof e[n] && undefined !== e[n]) {
          return false;
        }

        for (var n in e) {
          if (o.hasOwnProperty(n) && r(e[n]) !== o[n] && undefined !== e[n]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/define-property/node_modules/is-data-descriptor/index.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/define-property/node_modules/is-data-descriptor/index.js ***!
      \*******************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");

      e.exports = function (e, t) {
        var n = {
          configurable: "boolean",
          enumerable: "boolean",
          writable: "boolean"
        };

        if ("object" !== r(e)) {
          return false;
        }

        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if (!("value" in e || "writable" in e)) {
          return false;
        }

        for (var o in e) {
          if ("value" !== o && n.hasOwnProperty(o) && r(e[o]) !== n[o] && undefined !== e[o]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/define-property/node_modules/is-descriptor/index.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/define-property/node_modules/is-descriptor/index.js ***!
      \**************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = n(
      /*! is-accessor-descriptor */
      "./node_modules/define-property/node_modules/is-accessor-descriptor/index.js");
      var i = n(
      /*! is-data-descriptor */
      "./node_modules/define-property/node_modules/is-data-descriptor/index.js");

      e.exports = function (e, t) {
        return "object" === r(e) && ("get" in e ? o(e, t) : i(e, t));
      };
    },
    "./node_modules/expand-brackets/index.js":
    /*!***********************************************!*\
      !*** ./node_modules/expand-brackets/index.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      (function (t) {
        var r = n(
        /*! ./lib/compilers */
        "./node_modules/expand-brackets/lib/compilers.js");
        var o = n(
        /*! ./lib/parsers */
        "./node_modules/expand-brackets/lib/parsers.js");
        var i = n(
        /*! debug */
        "./node_modules/debug/src/index.js")("expand-brackets");
        var s = n(
        /*! extend-shallow */
        "./node_modules/expand-brackets/node_modules/extend-shallow/index.js");
        var a = n(
        /*! snapdragon */
        "./node_modules/snapdragon/index.js");
        var u = n(
        /*! to-regex */
        "./node_modules/to-regex/index.js");

        function c(e, n) {
          i("initializing from <%s>", t);
          return c.create(e, n).output;
        }

        c.match = function (e, t, n) {
          e = [].concat(e);

          for (var r = s({}, n), o = c.matcher(t, r), i = e.length, a = -1, u = []; ++a < i;) {
            var p = e[a];

            if (o(p)) {
              u.push(p);
            }
          }

          if (0 === u.length) {
            if (true === r.failglob) {
              throw new Error('no matches found for "' + t + '"');
            }

            if (true === r.nonull || true === r.nullglob) {
              return [t.split("\\").join("")];
            }
          }

          return u;
        };

        c.isMatch = function (e, t, n) {
          return c.matcher(t, n)(e);
        };

        c.matcher = function (e, t) {
          var n = c.makeRe(e, t);
          return function (e) {
            return n.test(e);
          };
        };

        c.makeRe = function (e, t) {
          var n = c.create(e, t);
          var r = s({
            strictErrors: false
          }, t);
          return u(n.output, r);
        };

        c.create = function (e, t) {
          var n = t && t.snapdragon || new a(t);
          r(n);
          o(n);
          var i = n.parse(e, t);
          i.input = e;
          var s = n.compile(i, t);
          s.input = e;
          return s;
        };

        c.compilers = r;
        c.parsers = o;
        e.exports = c;
      }).call(this, "/index.js");
    },
    "./node_modules/expand-brackets/lib/compilers.js":
    /*!*******************************************************!*\
      !*** ./node_modules/expand-brackets/lib/compilers.js ***!
      \*******************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! posix-character-classes */
      "./node_modules/posix-character-classes/index.js");

      e.exports = function (e) {
        e.compiler.set("escape", function (e) {
          return this.emit("\\" + e.val.replace(/^\\/, ""), e);
        }).set("text", function (e) {
          return this.emit(e.val.replace(/([{}])/g, "\\$1"), e);
        }).set("posix", function (e) {
          if ("[::]" === e.val) {
            return this.emit("\\[::\\]", e);
          }

          var t = r[e.inner];

          if (undefined === t) {
            t = "[" + e.inner + "]";
          }

          return this.emit(t, e);
        }).set("bracket", function (e) {
          return this.mapVisit(e.nodes);
        }).set("bracket.open", function (e) {
          return this.emit(e.val, e);
        }).set("bracket.inner", function (e) {
          var t = e.val;

          if ("[" === t || "]" === t) {
            return this.emit("\\" + e.val, e);
          }

          if ("^]" === t) {
            return this.emit("^\\]", e);
          }

          if ("^" === t) {
            return this.emit("^", e);
          }

          if (/-/.test(t) && !/(\d-\d|\w-\w)/.test(t)) {
            t = t.split("-").join("\\-");
          }

          var n = "^" === t.charAt(0);

          if (n && -1 === t.indexOf("/")) {
            t += "/";
          }

          if (n && -1 === t.indexOf(".")) {
            t += ".";
          }

          t = t.replace(/\\([1-9])/g, "$1");
          return this.emit(t, e);
        }).set("bracket.close", function (e) {
          var t = e.val.replace(/^\\/, "");
          return true === e.parent.escaped ? this.emit("\\" + t, e) : this.emit(t, e);
        });
      };
    },
    "./node_modules/expand-brackets/lib/parsers.js":
    /*!*****************************************************!*\
      !*** ./node_modules/expand-brackets/lib/parsers.js ***!
      \*****************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! ./utils */
      "./node_modules/expand-brackets/lib/utils.js");
      var o = n(
      /*! define-property */
      "./node_modules/expand-brackets/node_modules/define-property/index.js");
      var i = r.createRegex("(\\[(?=.*\\])|\\])+");

      e.exports = function (e) {
        e.state = e.state || {};
        e.parser.sets.bracket = e.parser.sets.bracket || [];
        e.parser.capture("escape", function () {
          if (!this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(/^\\(.)/);

            if (t) {
              return e({
                type: "escape",
                val: t[0]
              });
            }
          }
        }).capture("text", function () {
          if (!this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(i);

            if (t && t[0]) {
              return e({
                type: "text",
                val: t[0]
              });
            }
          }
        }).capture("posix", function () {
          var t = this.position();
          var n = this.match(/^\[:(.*?):\](?=.*\])/);

          if (n) {
            var r = this.isInside("bracket");

            if (r) {
              e.posix++;
            }

            return t({
              type: "posix",
              insideBracket: r,
              inner: n[1],
              val: n[0]
            });
          }
        }).capture("bracket", function () {}).capture("bracket.open", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(/^\[(?=.*\])/);

          if (n) {
            var i = this.prev();
            var s = r.last(i.nodes);

            if ("\\" === e.slice(-1) && !this.isInside("bracket")) {
              s.val = s.val.slice(0, s.val.length - 1);
              return t({
                type: "escape",
                val: n[0]
              });
            }

            var a = t({
              type: "bracket.open",
              val: n[0]
            });

            if ("bracket.open" === s.type || this.isInside("bracket")) {
              a.val = "\\" + a.val;
              a.type = "bracket.inner";
              a.escaped = true;
              return a;
            }

            var u = t({
              type: "bracket",
              nodes: [a]
            });
            o(u, "parent", i);
            o(a, "parent", u);
            this.push("bracket", u);
            i.nodes.push(u);
          }
        }).capture("bracket.inner", function () {
          if (this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(i);

            if (t && t[0]) {
              var n = this.input.charAt(0);
              var r = t[0];
              var o = e({
                type: "bracket.inner",
                val: r
              });

              if ("\\\\" === r) {
                return o;
              }

              var s = r.charAt(0);
              var a = r.slice(-1);

              if ("!" === s) {
                r = "^" + r.slice(1);
              }

              r += this.input[0];

              if ("\\" === a || "^" === r && "]" === n) {
                r += this.input[0];
                this.consume(1);
              }

              o.val = r;
              return o;
            }
          }
        }).capture("bracket.close", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(/^\]/);

          if (n) {
            var i = this.prev();
            var s = r.last(i.nodes);

            if ("\\" === e.slice(-1) && !this.isInside("bracket")) {
              s.val = s.val.slice(0, s.val.length - 1);
              return t({
                type: "escape",
                val: n[0]
              });
            }

            var a = t({
              type: "bracket.close",
              rest: this.input,
              val: n[0]
            });

            if ("bracket.open" === s.type) {
              a.type = "bracket.inner";
              a.escaped = true;
              return a;
            }

            var u = this.pop("bracket");

            if (!this.isType(u, "bracket")) {
              if (this.options.strict) {
                throw new Error('missing opening "["');
              }

              a.type = "bracket.inner";
              a.escaped = true;
              return a;
            }

            u.nodes.push(a);
            o(a, "parent", u);
          }
        });
      };

      e.exports.TEXT_REGEX = "(\\[(?=.*\\])|\\])+";
    },
    "./node_modules/expand-brackets/lib/utils.js":
    /*!***************************************************!*\
      !*** ./node_modules/expand-brackets/lib/utils.js ***!
      \***************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r;
      var o = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");
      var i = n(
      /*! regex-not */
      "./node_modules/regex-not/index.js");

      t.last = function (e) {
        return e[e.length - 1];
      };

      t.createRegex = function (e, t) {
        if (r) {
          return r;
        }

        var n;
        var s = {
          contains: true,
          strictClose: false
        };
        var a = i.create(e, s);
        n = o("string" == typeof t ? "^(?:" + t + "|" + a + ")" : a, s);
        return r = n;
      };
    },
    "./node_modules/expand-brackets/node_modules/define-property/index.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/expand-brackets/node_modules/define-property/index.js ***!
      \****************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/expand-brackets/node_modules/extend-shallow/index.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/expand-brackets/node_modules/extend-shallow/index.js ***!
      \***************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function o(e, t) {
        for (var n in t) {
          if (i(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = function (e) {
        if (!r(e)) {
          e = {};
        }

        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];

          if (r(i)) {
            o(e, i);
          }
        }

        return e;
      };
    },
    "./node_modules/extend-shallow/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/extend-shallow/index.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/extend-shallow/node_modules/is-extendable/index.js");
      var o = n(
      /*! assign-symbols */
      "./node_modules/assign-symbols/index.js");

      function i(e, t) {
        for (var n in t) {
          if (c(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function s(e) {
        return e && "string" == typeof e;
      }

      function a(e) {
        var t = {};

        for (var n in e) {
          t[n] = e[n];
        }

        return t;
      }

      function u(e) {
        return e && "object" == typeof e || r(e);
      }

      function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = Object.assign || function (e) {
        if (null == e) {
          throw new TypeError("Cannot convert undefined or null to object");
        }

        if (!u(e)) {
          e = {};
        }

        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          if (s(n)) {
            n = a(n);
          }

          i(e, n);

          if (u(n)) {
            i(e, n);
            o(e, n);
          }
        }

        return e;
      };
    },
    "./node_modules/extend-shallow/node_modules/is-extendable/index.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/extend-shallow/node_modules/is-extendable/index.js ***!
      \*************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! is-plain-object */
      "./node_modules/is-plain-object/index.js");

      e.exports = function (e) {
        return r(e) || "function" == typeof e || Array.isArray(e);
      };
    },
    "./node_modules/extglob/index.js":
    /*!***************************************!*\
      !*** ./node_modules/extglob/index.js ***!
      \***************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! extend-shallow */
      "./node_modules/extglob/node_modules/extend-shallow/index.js");
      var o = n(
      /*! array-unique */
      "./node_modules/array-unique/index.js");
      var i = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");
      var s = n(
      /*! ./lib/compilers */
      "./node_modules/extglob/lib/compilers.js");
      var a = n(
      /*! ./lib/parsers */
      "./node_modules/extglob/lib/parsers.js");
      var u = n(
      /*! ./lib/extglob */
      "./node_modules/extglob/lib/extglob.js");
      var c = n(
      /*! ./lib/utils */
      "./node_modules/extglob/lib/utils.js");

      function p(e, t) {
        return p.create(e, t).output;
      }

      p.match = function (e, t, n) {
        if ("string" != typeof t) {
          throw new TypeError("expected pattern to be a string");
        }

        e = c.arrayify(e);

        for (var r = p.matcher(t, n), i = e.length, s = -1, a = []; ++s < i;) {
          var u = e[s];

          if (r(u)) {
            a.push(u);
          }
        }

        if (undefined === n) {
          return o(a);
        }

        if (0 === a.length) {
          if (true === n.failglob) {
            throw new Error('no matches found for "' + t + '"');
          }

          if (true === n.nonull || true === n.nullglob) {
            return [t.split("\\").join("")];
          }
        }

        return false !== n.nodupes ? o(a) : a;
      };

      p.isMatch = function (e, t, n) {
        if ("string" != typeof t) {
          throw new TypeError("expected pattern to be a string");
        }

        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        return t === e || ("" === t || " " === t || "." === t ? t === e : c.memoize("isMatch", t, n, p.matcher)(e));
      };

      p.contains = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        if ("" === t || " " === t || "." === t) {
          return t === e;
        }

        var o = r({}, n, {
          contains: true
        });
        o.strictClose = false;
        o.strictOpen = false;
        return p.isMatch(e, t, o);
      };

      p.matcher = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected pattern to be a string");
        }

        return c.memoize("matcher", e, t, function () {
          var n = p.makeRe(e, t);
          return function (e) {
            return n.test(e);
          };
        });
      };

      p.create = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected pattern to be a string");
        }

        return c.memoize("create", e, t, function () {
          var n = new u(t);
          var r = n.parse(e, t);
          return n.compile(r, t);
        });
      };

      p.capture = function (e, t, n) {
        var o = p.makeRe(e, r({
          capture: true
        }, n));
        return c.memoize("capture", e, n, function () {
          return function (e) {
            var t = o.exec(e);
            return t ? t.slice(1) : null;
          };
        })(t);
      };

      p.makeRe = function (e, t) {
        if (e instanceof RegExp) {
          return e;
        }

        if ("string" != typeof e) {
          throw new TypeError("expected pattern to be a string");
        }

        if (e.length > 65536) {
          throw new Error("expected pattern to be less than 65536 characters");
        }

        var n = c.memoize("makeRe", e, t, function () {
          var n = r({
            strictErrors: false
          }, t);

          if (true === n.strictErrors) {
            n.strict = true;
          }

          var o = p.create(e, n);
          return i(o.output, n);
        });

        if (n.source.length > 65536) {
          throw new SyntaxError("potentially malicious regex detected");
        }

        return n;
      };

      p.cache = c.cache;

      p.clearCache = function () {
        p.cache.__data__ = {};
      };

      p.Extglob = u;
      p.compilers = s;
      p.parsers = a;
      e.exports = p;
    },
    "./node_modules/extglob/lib/compilers.js":
    /*!***********************************************!*\
      !*** ./node_modules/extglob/lib/compilers.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! expand-brackets */
      "./node_modules/expand-brackets/index.js");

      e.exports = function (e) {
        function t() {
          return "function" == typeof e.options.star ? e.options.star.apply(this, arguments) : "string" == typeof e.options.star ? e.options.star : ".*?";
        }

        e.use(r.compilers);
        e.compiler.set("escape", function (e) {
          return this.emit(e.val, e);
        }).set("dot", function (e) {
          return this.emit("\\" + e.val, e);
        }).set("qmark", function (e) {
          var t = "[^\\\\/.]";
          var n = this.prev();

          if ("(" === e.parsed.slice(-1)) {
            var r = e.rest.charAt(0);
            return "!" !== r && "=" !== r && ":" !== r ? this.emit(t, e) : this.emit(e.val, e);
          }

          if (!("text" === n.type && n.val)) {
            if (e.val.length > 1) {
              t += "{" + e.val.length + "}";
            }
          }

          return this.emit(t, e);
        }).set("plus", function (e) {
          var t = e.parsed.slice(-1);

          if ("]" === t || ")" === t) {
            return this.emit(e.val, e);
          }

          var n = this.output.slice(-1);
          return !this.output || /[?*+]/.test(n) && "bracket" !== e.parent.type ? this.emit("\\+", e) : /\w/.test(n) && !e.inside ? this.emit("+\\+?", e) : this.emit("+", e);
        }).set("star", function (e) {
          var n = this.prev();
          var r = "text" !== n.type && "escape" !== n.type ? "(?!\\.)" : "";
          return this.emit(r + t.call(this, e), e);
        }).set("paren", function (e) {
          return this.mapVisit(e.nodes);
        }).set("paren.open", function (e) {
          var t = this.options.capture ? "(" : "";

          switch (e.parent.prefix) {
            case "!":
            case "^":
              return this.emit(t + "(?:(?!(?:", e);

            case "*":
            case "+":
            case "?":
            case "@":
              return this.emit(t + "(?:", e);

            default:
              var n = e.val;
              true === this.options.bash ? n = "\\" + n : this.options.capture || "(" !== n || "?" === e.parent.rest[0] || (n += "?:");
              return this.emit(n, e);
          }
        }).set("paren.close", function (e) {
          var n = this.options.capture ? ")" : "";

          switch (e.prefix) {
            case "!":
            case "^":
              var r = /^(\)|$)/.test(e.rest) ? "$" : "",
                  o = t.call(this, e);

              if (e.parent.hasSlash && !this.options.star && false !== this.options.slash) {
                o = ".*?";
              }

              return this.emit(r + "))" + o + ")" + n, e);

            case "*":
            case "+":
            case "?":
              return this.emit(")" + e.prefix + n, e);

            case "@":
              return this.emit(")" + n, e);

            default:
              var i = (true === this.options.bash ? "\\" : "") + ")";
              return this.emit(i, e);
          }
        }).set("text", function (e) {
          var t = e.val.replace(/[\[\]]/g, "\\$&");
          return this.emit(t, e);
        });
      };
    },
    "./node_modules/extglob/lib/extglob.js":
    /*!*********************************************!*\
      !*** ./node_modules/extglob/lib/extglob.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! snapdragon */
      "./node_modules/snapdragon/index.js");
      var o = n(
      /*! define-property */
      "./node_modules/extglob/node_modules/define-property/index.js");
      var i = n(
      /*! extend-shallow */
      "./node_modules/extglob/node_modules/extend-shallow/index.js");
      var s = n(
      /*! ./compilers */
      "./node_modules/extglob/lib/compilers.js");
      var a = n(
      /*! ./parsers */
      "./node_modules/extglob/lib/parsers.js");

      e.exports = function (e) {
        this.options = i({
          source: "extglob"
        }, e);
        this.snapdragon = this.options.snapdragon || new r(this.options);
        this.snapdragon.patterns = this.snapdragon.patterns || {};
        this.compiler = this.snapdragon.compiler;
        this.parser = this.snapdragon.parser;
        s(this.snapdragon);
        a(this.snapdragon);
        o(this.snapdragon, "parse", function (e, t) {
          var n = r.prototype.parse.apply(this, arguments);
          n.input = e;
          var i = this.parser.stack.pop();

          if (i && true !== this.options.strict) {
            var s = i.nodes[0];
            s.val = "\\" + s.val;
            var a = s.parent.nodes[1];

            if ("star" === a.type) {
              a.loose = true;
            }
          }

          o(n, "parser", this.parser);
          return n;
        });
        o(this, "parse", function (e, t) {
          return this.snapdragon.parse.apply(this.snapdragon, arguments);
        });
        o(this, "compile", function (e, t) {
          return this.snapdragon.compile.apply(this.snapdragon, arguments);
        });
      };
    },
    "./node_modules/extglob/lib/parsers.js":
    /*!*********************************************!*\
      !*** ./node_modules/extglob/lib/parsers.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! expand-brackets */
      "./node_modules/expand-brackets/index.js");
      var o = n(
      /*! define-property */
      "./node_modules/extglob/node_modules/define-property/index.js");
      var i = "([!@*?+]?\\(|\\)|[*?.+\\\\]|\\[:?(?=.*\\])|:?\\])+";
      var s = n(
      /*! ./utils */
      "./node_modules/extglob/lib/utils.js").createRegex(i);
      e.exports.TEXT_REGEX = i;

      e.exports = function (e) {
        e.state = e.state || {};
        e.use(r.parsers);
        e.parser.sets.paren = e.parser.sets.paren || [];
        e.parser.capture("paren.open", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(/^([!@*?+])?\(/);

          if (n) {
            var r = this.prev();
            var i = n[1];
            var s = t({
              type: "paren.open",
              parsed: e,
              val: n[0]
            });
            var a = t({
              type: "paren",
              prefix: i,
              nodes: [s]
            });
            r.prefix = "@";

            if ("!" === i && "paren" === r.type && "!" === r.prefix) {
              r.prefix = "@";
              a.prefix = "@";
            }

            o(a, "rest", this.input);
            o(a, "parsed", e);
            o(a, "parent", r);
            o(s, "parent", a);
            this.push("paren", a);
            r.nodes.push(a);
          }
        }).capture("paren.close", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(/^\)/);

          if (n) {
            var r = this.pop("paren");
            var i = t({
              type: "paren.close",
              rest: this.input,
              parsed: e,
              val: n[0]
            });

            if (!this.isType(r, "paren")) {
              if (this.options.strict) {
                throw new Error('missing opening paren: "("');
              }

              i.escaped = true;
              return i;
            }

            i.prefix = r.prefix;
            r.nodes.push(i);
            o(i, "parent", r);
          }
        }).capture("escape", function () {
          var e = this.position();
          var t = this.match(/^\\(.)/);

          if (t) {
            return e({
              type: "escape",
              val: t[0],
              ch: t[1]
            });
          }
        }).capture("qmark", function () {
          var t = this.parsed;
          var n = this.position();
          var r = this.match(/^\?+(?!\()/);

          if (r) {
            e.state.metachar = true;
            return n({
              type: "qmark",
              rest: this.input,
              parsed: t,
              val: r[0]
            });
          }
        }).capture("star", /^\*(?!\()/).capture("plus", /^\+(?!\()/).capture("dot", /^\./).capture("text", s);
      };
    },
    "./node_modules/extglob/lib/utils.js":
    /*!*******************************************!*\
      !*** ./node_modules/extglob/lib/utils.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! regex-not */
      "./node_modules/regex-not/index.js");
      var o = n(
      /*! fragment-cache */
      "./node_modules/fragment-cache/index.js");
      var i = e.exports;
      var s = i.cache = new o();

      i.arrayify = function (e) {
        return Array.isArray(e) ? e : [e];
      };

      i.memoize = function (e, t, n, r) {
        var o = i.createKey(e + t, n);

        if (s.has(e, o)) {
          return s.get(e, o);
        }

        var a = r(t, n);

        if (!(n && false === n.cache)) {
          s.set(e, o, a);
        }

        return a;
      };

      i.createKey = function (e, t) {
        var n = e;

        if (undefined === t) {
          return n;
        }

        for (var r in t) {
          n += ";" + r + "=" + String(t[r]);
        }

        return n;
      };

      i.createRegex = function (e) {
        return r(e, {
          contains: true,
          strictClose: false
        });
      };
    },
    "./node_modules/extglob/node_modules/define-property/index.js":
    /*!********************************************************************!*\
      !*** ./node_modules/extglob/node_modules/define-property/index.js ***!
      \********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/extglob/node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/extglob/node_modules/extend-shallow/index.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/extglob/node_modules/extend-shallow/index.js ***!
      \*******************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function o(e, t) {
        for (var n in t) {
          if (i(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = function (e) {
        if (!r(e)) {
          e = {};
        }

        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];

          if (r(i)) {
            o(e, i);
          }
        }

        return e;
      };
    },
    "./node_modules/extglob/node_modules/is-accessor-descriptor/index.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/extglob/node_modules/is-accessor-descriptor/index.js ***!
      \***************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = {
        get: "function",
        set: "function",
        configurable: "boolean",
        enumerable: "boolean"
      };

      function i(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }

      e.exports = function (e, t) {
        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if ("object" !== r(e)) {
          return false;
        }

        if (i(e, "value") || i(e, "writable")) {
          return false;
        }

        if (!i(e, "get") || "function" != typeof e.get) {
          return false;
        }

        if (i(e, "set") && "function" != typeof e[n] && undefined !== e[n]) {
          return false;
        }

        for (var n in e) {
          if (o.hasOwnProperty(n) && r(e[n]) !== o[n] && undefined !== e[n]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/extglob/node_modules/is-data-descriptor/index.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/extglob/node_modules/is-data-descriptor/index.js ***!
      \***********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");

      e.exports = function (e, t) {
        var n = {
          configurable: "boolean",
          enumerable: "boolean",
          writable: "boolean"
        };

        if ("object" !== r(e)) {
          return false;
        }

        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if (!("value" in e || "writable" in e)) {
          return false;
        }

        for (var o in e) {
          if ("value" !== o && n.hasOwnProperty(o) && r(e[o]) !== n[o] && undefined !== e[o]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/extglob/node_modules/is-descriptor/index.js":
    /*!******************************************************************!*\
      !*** ./node_modules/extglob/node_modules/is-descriptor/index.js ***!
      \******************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = n(
      /*! is-accessor-descriptor */
      "./node_modules/extglob/node_modules/is-accessor-descriptor/index.js");
      var i = n(
      /*! is-data-descriptor */
      "./node_modules/extglob/node_modules/is-data-descriptor/index.js");

      e.exports = function (e, t) {
        return "object" === r(e) && ("get" in e ? o(e, t) : i(e, t));
      };
    },
    "./node_modules/fill-range/index.js":
    /*!******************************************!*\
      !*** ./node_modules/fill-range/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * fill-range <https://github.com/jonschlinkert/fill-range>
       *
       * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! util */
      "util");
      var o = n(
      /*! is-number */
      "./node_modules/is-number/index.js");
      var i = n(
      /*! extend-shallow */
      "./node_modules/fill-range/node_modules/extend-shallow/index.js");
      var s = n(
      /*! repeat-string */
      "./node_modules/repeat-string/index.js");
      var a = n(
      /*! to-regex-range */
      "./node_modules/to-regex-range/index.js");

      function u(e, t) {
        if (t.isPadded) {
          var n = String(e);
          var r = n.length;
          var o = "";
          o = "-";

          if ("-" === n.charAt(0)) {
            o = "-";
            n = n.slice(1);
          }

          var i = t.maxLength - r;
          e = o + s("0", i) + n;
        }

        return t.stringify ? String(e) : e;
      }

      function c(e) {
        return Number(e) || 0;
      }

      function p(e) {
        return /^-?0\d/.test(e);
      }

      function l(e) {
        return "string" == typeof e && 1 === e.length && /^\w+$/.test(e);
      }

      function d(e) {
        return o(e) && !/\./.test(e);
      }

      e.exports = function (e, t, n, s) {
        if (undefined === e) {
          return [];
        }

        if (undefined === t || e === t) {
          var f = "string" == typeof e;
          return o(e) && !c(e) ? [f ? "0" : 0] : [e];
        }

        s = n;

        if ("number" != typeof n && "string" != typeof n) {
          s = n;
          n = undefined;
        }

        if ("function" == typeof s) {
          s = {
            transform: s
          };
        }

        var h;
        var m;
        var y = i({
          step: n
        }, s);

        if (y.step && !d(y.step)) {
          if (true === y.strictRanges) {
            throw new TypeError("expected options.step to be a number");
          }

          return [];
        }

        y.isNumber = d(e) && d(t);
        m = t;

        if (!y.isNumber && (!d(h = e) && !l(h) || !d(m) && !l(m))) {
          if (true === y.strictRanges) {
            throw new RangeError("invalid range arguments: " + r.inspect([e, t]));
          }

          return [];
        }

        y.isPadded = p(e) || p(t);
        y.toString = y.stringify || "string" == typeof y.step || "string" == typeof e || "string" == typeof t || !y.isNumber;

        if (y.isPadded) {
          y.maxLength = Math.max(String(e).length, String(t).length);
        }

        if ("boolean" == typeof y.optimize) {
          y.toRegex = y.optimize;
        }

        if ("boolean" == typeof y.makeRe) {
          y.toRegex = y.makeRe;
        }

        return function (e, t, n) {
          var r = n.isNumber ? c(e) : e.charCodeAt(0);
          var o = n.isNumber ? c(t) : t.charCodeAt(0);
          var i = Math.abs(c(n.step)) || 1;

          if (n.toRegex && 1 === i) {
            return function (e, t, n, r, o) {
              if (o.isPadded) {
                return a(n, r, o);
              }

              if (o.isNumber) {
                return a(Math.min(e, t), Math.max(e, t), o);
              }

              n = String.fromCharCode(Math.min(e, t));
              r = String.fromCharCode(Math.max(e, t));
              return "[" + n + "-" + r + "]";
            }(r, o, e, t, n);
          }

          var s = {
            greater: [],
            lesser: []
          };
          var p = r < o;
          var l = new Array(Math.round((p ? o - r : r - o) / i));
          var d = 0;

          for (; p ? r <= o : r >= o;) {
            var f = n.isNumber ? r : String.fromCharCode(r);

            if (n.toRegex && (f >= 0 || !n.isNumber)) {
              s.greater.push(f);
            } else {
              s.lesser.push(Math.abs(f));
            }

            if (n.isPadded) {
              f = u(f, n);
            }

            if (n.toString) {
              f = String(f);
            }

            if ("function" == typeof n.transform) {
              l[d++] = n.transform(f, r, o, i, d, l, n);
            } else {
              l[d++] = f;
            }

            if (p) {
              r += i;
            } else {
              r -= i;
            }
          }

          if (true === n.toRegex) {
            return function (e, t, n) {
              var r = "";
              var o = "";

              if (t.greater.length) {
                r = t.greater.join("|");
              }

              if (t.lesser.length) {
                o = "-(" + t.lesser.join("|") + ")";
              }

              var i = r && o ? r + "|" + o : r || o;

              if (n.capture) {
                return "(" + i + ")";
              }

              return i;
            }(0, s, n);
          }

          return l;
        }(e, t, y);
      };
    },
    "./node_modules/fill-range/node_modules/extend-shallow/index.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/fill-range/node_modules/extend-shallow/index.js ***!
      \**********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function o(e, t) {
        for (var n in t) {
          if (i(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = function (e) {
        if (!r(e)) {
          e = {};
        }

        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];

          if (r(i)) {
            o(e, i);
          }
        }

        return e;
      };
    },
    "./node_modules/for-in/index.js":
    /*!**************************************!*\
      !*** ./node_modules/for-in/index.js ***!
      \**************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * for-in <https://github.com/jonschlinkert/for-in>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      e.exports = function (e, t, n) {
        for (var r in e) {
          if (false === t.call(n, e[r], r, e)) {
            break;
          }
        }
      };
    },
    "./node_modules/fragment-cache/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/fragment-cache/index.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * fragment-cache <https://github.com/jonschlinkert/fragment-cache>
       *
       * Copyright (c) 2016-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! map-cache */
      "./node_modules/map-cache/index.js");

      function o(e) {
        this.caches = e || {};
      }

      o.prototype = {
        cache: function (e) {
          return this.caches[e] || (this.caches[e] = new r());
        },
        set: function (e, t, n) {
          var r = this.cache(e);
          r.set(t, n);
          return r;
        },
        has: function (e, t) {
          return undefined !== this.get(e, t);
        },
        get: function (e, t) {
          var n = this.cache(e);
          return "string" == typeof t ? n.get(t) : n;
        }
      };
      e.exports = o;
    },
    "./node_modules/get-value/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/get-value/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t) {
      function n(e) {
        return e ? Array.isArray(e) ? e.join(".") : e : "";
      }
      /*!
       * get-value <https://github.com/jonschlinkert/get-value>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */


      e.exports = function (e, t, r, o, i) {
        if (null === (s = e) || "object" != typeof s && "function" != typeof s || !t) {
          return e;
        }

        var s;
        t = n(t);

        if (r) {
          t += "." + n(r);
        }

        if (o) {
          t += "." + n(o);
        }

        if (i) {
          t += "." + n(i);
        }

        if (t in e) {
          return e[t];
        }

        for (var a = t.split("."), u = a.length, c = -1; e && ++c < u;) {
          for (var p = a[c]; "\\" === p[p.length - 1];) {
            p = p.slice(0, -1) + "." + a[++c];
          }

          e = e[p];
        }

        return e;
      };
    },
    "./node_modules/has-value/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/has-value/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * has-value <https://github.com/jonschlinkert/has-value>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var o = n(
      /*! has-values */
      "./node_modules/has-values/index.js");
      var i = n(
      /*! get-value */
      "./node_modules/get-value/index.js");

      e.exports = function (e, t) {
        return o(r(e) && t ? i(e, t) : e);
      };
    },
    "./node_modules/has-values/index.js":
    /*!******************************************!*\
      !*** ./node_modules/has-values/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * has-values <https://github.com/jonschlinkert/has-values>
       *
       * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/has-values/node_modules/kind-of/index.js");
      var o = n(
      /*! is-number */
      "./node_modules/is-number/index.js");

      e.exports = function e(t) {
        if (o(t)) {
          return true;
        }

        switch (r(t)) {
          case "null":
          case "boolean":
          case "function":
            return true;

          case "string":
          case "arguments":
            return 0 !== t.length;

          case "error":
            return "" !== t.message;

          case "array":
            var n = t.length;

            if (0 === n) {
              return false;
            }

            for (var i = 0; i < n; i++) {
              if (e(t[i])) {
                return true;
              }
            }

            return false;

          case "file":
          case "map":
          case "set":
            return 0 !== t.size;

          case "object":
            var s = Object.keys(t);

            if (0 === s.length) {
              return false;
            }

            for (i = 0; i < s.length; i++) {
              if (e(t[s[i]])) {
                return true;
              }
            }

            return false;

          default:
            return false;
        }
      };
    },
    "./node_modules/has-values/node_modules/kind-of/index.js":
    /*!***************************************************************!*\
      !*** ./node_modules/has-values/node_modules/kind-of/index.js ***!
      \***************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : "[object Promise]" === t ? "promise" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/is-accessor-descriptor/index.js":
    /*!******************************************************!*\
      !*** ./node_modules/is-accessor-descriptor/index.js ***!
      \******************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js");
      var o = {
        get: "function",
        set: "function",
        configurable: "boolean",
        enumerable: "boolean"
      };

      function i(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }

      e.exports = function (e, t) {
        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if ("object" !== r(e)) {
          return false;
        }

        if (i(e, "value") || i(e, "writable")) {
          return false;
        }

        if (!i(e, "get") || "function" != typeof e.get) {
          return false;
        }

        if (i(e, "set") && "function" != typeof e[n] && undefined !== e[n]) {
          return false;
        }

        for (var n in e) {
          if (o.hasOwnProperty(n) && r(e[n]) !== o[n] && undefined !== e[n]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/is-accessor-descriptor/node_modules/kind-of/index.js ***!
      \***************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/is-buffer/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/is-buffer/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t) {
      function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      }
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */


      e.exports = function (e) {
        return null != e && (n(e) || function (e) {
          return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }(e) || !!e._isBuffer);
      };
    },
    "./node_modules/is-data-descriptor/index.js":
    /*!**************************************************!*\
      !*** ./node_modules/is-data-descriptor/index.js ***!
      \**************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/is-data-descriptor/node_modules/kind-of/index.js");
      var o = {
        configurable: "boolean",
        enumerable: "boolean",
        writable: "boolean"
      };

      e.exports = function (e, t) {
        if ("object" !== r(e)) {
          return false;
        }

        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if (!("value" in e || "writable" in e)) {
          return false;
        }

        for (var n in e) {
          if ("value" !== n && o.hasOwnProperty(n) && r(e[n]) !== o[n] && undefined !== e[n]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/is-data-descriptor/node_modules/kind-of/index.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/is-data-descriptor/node_modules/kind-of/index.js ***!
      \***********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/is-descriptor/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/is-descriptor/index.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/is-descriptor/node_modules/kind-of/index.js");
      var o = n(
      /*! is-accessor-descriptor */
      "./node_modules/is-accessor-descriptor/index.js");
      var i = n(
      /*! is-data-descriptor */
      "./node_modules/is-data-descriptor/index.js");

      e.exports = function (e, t) {
        return "object" === r(e) && ("get" in e ? o(e, t) : i(e, t));
      };
    },
    "./node_modules/is-descriptor/node_modules/kind-of/index.js":
    /*!******************************************************************!*\
      !*** ./node_modules/is-descriptor/node_modules/kind-of/index.js ***!
      \******************************************************************/

    /*! no static exports found */
    function (e, t) {
      var n = Object.prototype.toString;

      e.exports = function (e) {
        var t = typeof e;
        return "undefined" === t ? "undefined" : null === e ? "null" : true === e || false === e || e instanceof Boolean ? "boolean" : "string" === t || e instanceof String ? "string" : "number" === t || e instanceof Number ? "number" : "function" === t || e instanceof Function ? undefined !== e.constructor.name && "Generator" === e.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : undefined !== Array.isArray && Array.isArray(e) ? "array" : e instanceof RegExp ? "regexp" : e instanceof Date ? "date" : "[object RegExp]" === (t = n.call(e)) ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : "[object Promise]" === t ? "promise" : function (e) {
          return e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Map Iterator]" === t ? "mapiterator" : "[object Set Iterator]" === t ? "setiterator" : "[object String Iterator]" === t ? "stringiterator" : "[object Array Iterator]" === t ? "arrayiterator" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/is-extendable/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/is-extendable/index.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      e.exports = function (e) {
        return null != e && ("object" == typeof e || "function" == typeof e);
      };
    },
    "./node_modules/is-number/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/is-number/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-number <https://github.com/jonschlinkert/is-number>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/is-number/node_modules/kind-of/index.js");

      e.exports = function (e) {
        var t = r(e);

        if ("string" === t) {
          if (!e.trim()) {
            return false;
          }
        } else {
          if ("number" !== t) {
            return false;
          }
        }

        return e - e + 1 >= 0;
      };
    },
    "./node_modules/is-number/node_modules/kind-of/index.js":
    /*!**************************************************************!*\
      !*** ./node_modules/is-number/node_modules/kind-of/index.js ***!
      \**************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/is-plain-object/index.js":
    /*!***********************************************!*\
      !*** ./node_modules/is-plain-object/index.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");

      function o(e) {
        return true === r(e) && "[object Object]" === Object.prototype.toString.call(e);
      }

      e.exports = function (e) {
        var t;
        var n;
        return false !== o(e) && "function" == typeof (t = e.constructor) && false !== o(n = t.prototype) && false !== n.hasOwnProperty("isPrototypeOf");
      };
    },
    "./node_modules/is-windows/index.js":
    /*!******************************************!*\
      !*** ./node_modules/is-windows/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r;
      var o;
      var i;
      var s;
      /*!
       * is-windows <https://github.com/jonschlinkert/is-windows>
       *
       * Copyright © 2015-2018, Jon Schlinkert.
       * Released under the MIT License.
       */

      s = function () {
        "use strict";

        return function () {
          return process && ("win32" === process.platform || /^(msys|cygwin)$/.test(process.env.OSTYPE));
        };
      };

      o = [];

      if (t && "object" == typeof t && undefined !== e) {
        e.exports = s();
      } else {
        o = [];

        if (!(undefined === (i = "function" == typeof (r = s) ? r.apply(t, o) : r))) {
          e.exports = i;
        }
      }
    },
    "./node_modules/isarray/index.js":
    /*!***************************************!*\
      !*** ./node_modules/isarray/index.js ***!
      \***************************************/

    /*! no static exports found */
    function (e, t) {
      var n = {}.toString;

      e.exports = Array.isArray || function (e) {
        return "[object Array]" == n.call(e);
      };
    },
    "./node_modules/isobject/index.js":
    /*!****************************************!*\
      !*** ./node_modules/isobject/index.js ***!
      \****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      e.exports = function (e) {
        return null != e && "object" == typeof e && false === Array.isArray(e);
      };
    },
    "./node_modules/kind-of/index.js":
    /*!***************************************!*\
      !*** ./node_modules/kind-of/index.js ***!
      \***************************************/

    /*! no static exports found */
    function (e, t) {
      var n = Object.prototype.toString;

      function r(e) {
        return e.constructor ? e.constructor.name : null;
      }

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        var t = typeof e;

        if ("boolean" === t) {
          return "boolean";
        }

        if ("string" === t) {
          return "string";
        }

        if ("number" === t) {
          return "number";
        }

        if ("symbol" === t) {
          return "symbol";
        }

        if ("function" === t) {
          return "GeneratorFunction" === r(e) ? "generatorfunction" : "function";
        }

        if (function (e) {
          return Array.isArray ? Array.isArray(e) : e instanceof Array;
        }(e)) {
          return "array";
        }

        if (function (e) {
          if (e.constructor && "function" == typeof e.constructor.isBuffer) {
            return e.constructor.isBuffer(e);
          }

          return false;
        }(e)) {
          return "buffer";
        }

        if (function (e) {
          try {
            if ("number" == typeof e.length && "function" == typeof e.callee) {
              return true;
            }
          } catch (e) {
            if (-1 !== e.message.indexOf("callee")) {
              return true;
            }
          }

          return false;
        }(e)) {
          return "arguments";
        }

        if (function (e) {
          return e instanceof Date || "function" == typeof e.toDateString && "function" == typeof e.getDate && "function" == typeof e.setDate;
        }(e)) {
          return "date";
        }

        if (function (e) {
          return e instanceof Error || "string" == typeof e.message && e.constructor && "number" == typeof e.constructor.stackTraceLimit;
        }(e)) {
          return "error";
        }

        if (function (e) {
          return e instanceof RegExp || "string" == typeof e.flags && "boolean" == typeof e.ignoreCase && "boolean" == typeof e.multiline && "boolean" == typeof e.global;
        }(e)) {
          return "regexp";
        }

        switch (r(e)) {
          case "Symbol":
            return "symbol";

          case "Promise":
            return "promise";

          case "WeakMap":
            return "weakmap";

          case "WeakSet":
            return "weakset";

          case "Map":
            return "map";

          case "Set":
            return "set";

          case "Int8Array":
            return "int8array";

          case "Uint8Array":
            return "uint8array";

          case "Uint8ClampedArray":
            return "uint8clampedarray";

          case "Int16Array":
            return "int16array";

          case "Uint16Array":
            return "uint16array";

          case "Int32Array":
            return "int32array";

          case "Uint32Array":
            return "uint32array";

          case "Float32Array":
            return "float32array";

          case "Float64Array":
            return "float64array";
        }

        if (function (e) {
          return "function" == typeof e.throw && "function" == typeof e.return && "function" == typeof e.next;
        }(e)) {
          return "generator";
        }

        switch (t = n.call(e)) {
          case "[object Object]":
            return "object";

          case "[object Map Iterator]":
            return "mapiterator";

          case "[object Set Iterator]":
            return "setiterator";

          case "[object String Iterator]":
            return "stringiterator";

          case "[object Array Iterator]":
            return "arrayiterator";
        }

        return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
      };
    },
    "./node_modules/map-cache/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/map-cache/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * map-cache <https://github.com/jonschlinkert/map-cache>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = Object.prototype.hasOwnProperty;

      function o(e) {
        this.__data__ = e || {};
      }

      e.exports = o;

      o.prototype.set = function (e, t) {
        if ("__proto__" !== e) {
          this.__data__[e] = t;
        }

        return this;
      };

      o.prototype.get = function (e) {
        return "__proto__" === e ? undefined : this.__data__[e];
      };

      o.prototype.has = function (e) {
        return "__proto__" !== e && r.call(this.__data__, e);
      };

      o.prototype.del = function (e) {
        return this.has(e) && delete this.__data__[e];
      };
    },
    "./node_modules/map-visit/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/map-visit/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! util */
      "util");
      var o = n(
      /*! object-visit */
      "./node_modules/object-visit/index.js");

      function i(e) {
        return e && ("function" == typeof e || !Array.isArray(e) && "object" == typeof e);
      }

      e.exports = function (e, t, n) {
        if (i(n)) {
          return o.apply(null, arguments);
        }

        if (!Array.isArray(n)) {
          throw new TypeError("expected an array: " + r.inspect(n));
        }

        for (var s = [].slice.call(arguments, 3), a = 0; a < n.length; a++) {
          var u = n[a];

          if (i(u)) {
            o.apply(null, [e, t, u].concat(s));
          } else {
            e[t].apply(e, [u].concat(s));
          }
        }
      };
    },
    "./node_modules/micromatch/index.js":
    /*!******************************************!*\
      !*** ./node_modules/micromatch/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! util */
      "util");
      var o = n(
      /*! braces */
      "./node_modules/braces/index.js");
      var i = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");
      var s = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");
      var a = n(
      /*! ./lib/compilers */
      "./node_modules/micromatch/lib/compilers.js");
      var u = n(
      /*! ./lib/parsers */
      "./node_modules/micromatch/lib/parsers.js");
      var c = n(
      /*! ./lib/cache */
      "./node_modules/micromatch/lib/cache.js");
      var p = n(
      /*! ./lib/utils */
      "./node_modules/micromatch/lib/utils.js");

      function l(e, t, n) {
        t = p.arrayify(t);
        e = p.arrayify(e);
        var r = t.length;

        if (0 === e.length || 0 === r) {
          return [];
        }

        if (1 === r) {
          return l.match(e, t[0], n);
        }

        for (var o = [], i = [], s = -1; ++s < r;) {
          var a = t[s];

          if ("string" == typeof a && 33 === a.charCodeAt(0)) {
            o.push.apply(o, l.match(e, a.slice(1), n));
          } else {
            i.push.apply(i, l.match(e, a, n));
          }
        }

        var u = p.diff(i, o);
        return n && false === n.nodupes ? u : p.unique(u);
      }

      function d(e) {
        return "" === String(e) || "./" === String(e);
      }

      function f(e, t, n, r) {
        var o = p.createKey(e + "=" + t, n);

        if (n && false === n.cache) {
          return r(t, n);
        }

        if (c.has(e, o)) {
          return c.get(e, o);
        }

        var i = r(t, n);
        c.set(e, o, i);
        return i;
      }

      l.match = function (e, t, n) {
        if (Array.isArray(t)) {
          throw new TypeError("expected pattern to be a string");
        }

        for (var r = p.unixify(n), o = f("match", t, n, l.matcher), i = [], s = (e = p.arrayify(e)).length, a = -1; ++a < s;) {
          var u = e[a];

          if (u === t || o(u)) {
            i.push(p.value(u, r, n));
          }
        }

        if (undefined === n) {
          return p.unique(i);
        }

        if (0 === i.length) {
          if (true === n.failglob) {
            throw new Error('no matches found for "' + t + '"');
          }

          if (true === n.nonull || true === n.nullglob) {
            return [n.unescape ? p.unescape(t) : t];
          }
        }

        if (n.ignore) {
          i = l.not(i, n.ignore, n);
        }

        return false !== n.nodupes ? p.unique(i) : i;
      };

      l.isMatch = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        return !d(e) && !d(t) && (!!p.equalsPattern(n)(e) || f("isMatch", t, n, l.matcher)(e));
      };

      l.some = function (e, t, n) {
        if ("string" == typeof e) {
          e = [e];
        }

        for (var r = 0; r < e.length; r++) {
          if (1 === l(e[r], t, n).length) {
            return true;
          }
        }

        return false;
      };

      l.every = function (e, t, n) {
        if ("string" == typeof e) {
          e = [e];
        }

        for (var r = 0; r < e.length; r++) {
          if (1 !== l(e[r], t, n).length) {
            return false;
          }
        }

        return true;
      };

      l.any = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        if (d(e) || d(t)) {
          return false;
        }

        if ("string" == typeof t) {
          t = [t];
        }

        for (var o = 0; o < t.length; o++) {
          if (l.isMatch(e, t[o], n)) {
            return true;
          }
        }

        return false;
      };

      l.all = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        if ("string" == typeof t) {
          t = [t];
        }

        for (var o = 0; o < t.length; o++) {
          if (!l.isMatch(e, t[o], n)) {
            return false;
          }
        }

        return true;
      };

      l.not = function (e, t, n) {
        var r = s({}, n);
        var o = r.ignore;
        delete r.ignore;
        var i = p.unixify(r);
        e = p.arrayify(e).map(i);
        var a = p.diff(e, l(e, t, r));

        if (o) {
          a = p.diff(a, l(e, o));
        }

        return false !== r.nodupes ? p.unique(a) : a;
      };

      l.contains = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        if ("string" == typeof t) {
          if (d(e) || d(t)) {
            return false;
          }

          if (p.equalsPattern(t, n)(e)) {
            return true;
          }

          if (p.containsPattern(t, n)(e)) {
            return true;
          }
        }

        var o = s({}, n, {
          contains: true
        });
        return l.any(e, t, o);
      };

      l.matchBase = function (e, t) {
        return !(e && -1 !== e.indexOf("/") || !t) && (true === t.basename || true === t.matchBase);
      };

      l.matchKeys = function (e, t, n) {
        if (!p.isObject(e)) {
          throw new TypeError("expected the first argument to be an object");
        }

        var r = l(Object.keys(e), t, n);
        return p.pick(e, r);
      };

      l.matcher = function e(t, n) {
        if (Array.isArray(t)) {
          return function (e, t, n) {
            var r;
            return f("compose", String(e), t, function () {
              return function (o) {
                if (!r) {
                  r = [];

                  for (var i = 0; i < e.length; i++) {
                    r.push(n(e[i], t));
                  }
                }

                for (var s = r.length; s--;) {
                  if (true === r[s](o)) {
                    return true;
                  }
                }

                return false;
              };
            });
          }(t, n, e);
        }

        if (t instanceof RegExp) {
          return o(t);
        }

        if (!p.isString(t)) {
          throw new TypeError("expected pattern to be an array, string or regex");
        }

        if (!p.hasSpecialChars(t)) {
          if (n && true === n.nocase) {
            t = t.toLowerCase();
          }

          return p.matchPath(t, n);
        }

        var r = l.makeRe(t, n);

        if (l.matchBase(t, n)) {
          return p.matchBasename(r, n);
        }

        function o(e) {
          var t = p.equalsPattern(n);
          var r = p.unixify(n);
          return function (n) {
            return !!t(n) || !!e.test(r(n));
          };
        }

        var i = o(r);
        Object.defineProperty(i, "result", {
          configurable: true,
          enumerable: false,
          value: r.result
        });
        return i;
      };

      l.capture = function (e, t, n) {
        var r = l.makeRe(e, s({
          capture: true
        }, n));
        var o = p.unixify(n);
        return f("capture", e, n, function () {
          return function (e) {
            var t = r.exec(o(e));
            return t ? t.slice(1) : null;
          };
        })(t);
      };

      l.makeRe = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected pattern to be a string");
        }

        if (e.length > 65536) {
          throw new Error("expected pattern to be less than 65536 characters");
        }

        return f("makeRe", e, t, function () {
          var n = l.create(e, t);
          var r = [];
          var o = n.map(function (e) {
            e.ast.state = e.state;
            r.push(e.ast);
            return e.output;
          });
          var s = i(o.join("|"), t);
          Object.defineProperty(s, "result", {
            configurable: true,
            enumerable: false,
            value: r
          });
          return s;
        });
      };

      l.braces = function (e, t) {
        if ("string" != typeof e && !Array.isArray(e)) {
          throw new TypeError("expected pattern to be an array or string");
        }

        return f("braces", e, t, function () {
          return t && true === t.nobrace || !/\{.*\}/.test(e) ? p.arrayify(e) : o(e, t);
        });
      };

      l.braceExpand = function (e, t) {
        var n = s({}, t, {
          expand: true
        });
        return l.braces(e, n);
      };

      l.create = function (e, t) {
        return f("create", e, t, function () {
          for (var n, r, o = (e = l.braces(e, t)).length, i = -1, s = []; ++i < o;) {
            n = e[i];
            r = t;
            s.push(l.compile(l.parse(n, r), r));
          }

          return s;
        });
      };

      l.parse = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        return f("parse", e, t, function () {
          var n = p.instantiate(null, t);
          u(n, t);
          var r = n.parse(e, t);
          p.define(r, "snapdragon", n);
          r.input = e;
          return r;
        });
      };

      l.compile = function (e, t) {
        if ("string" == typeof e) {
          e = l.parse(e, t);
        }

        return f("compile", e.input, t, function () {
          var n = p.instantiate(e, t);
          a(n, t);
          return n.compile(e, t);
        });
      };

      l.clearCache = function () {
        l.cache.caches = {};
      };

      l.compilers = a;
      l.parsers = u;
      l.caches = c.caches;
      e.exports = l;
    },
    "./node_modules/micromatch/lib/cache.js":
    /*!**********************************************!*\
      !*** ./node_modules/micromatch/lib/cache.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      e.exports = new (n(
      /*! fragment-cache */
      "./node_modules/fragment-cache/index.js"))();
    },
    "./node_modules/micromatch/lib/compilers.js":
    /*!**************************************************!*\
      !*** ./node_modules/micromatch/lib/compilers.js ***!
      \**************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! nanomatch */
      "./node_modules/nanomatch/index.js");
      var o = n(
      /*! extglob */
      "./node_modules/extglob/index.js");

      function i(e) {
        function t(e, n) {
          return e.nodes ? function (e, n) {
            var r = e.length;
            var o = -1;

            for (; ++o < r;) {
              t(e[o], n);
            }
          }(e.nodes, n) : n(e);
        }

        e.set("paren", function (e) {
          var n = "";
          t(e, function (e) {
            if (e.val) {
              n += (/^\W/.test(e.val) ? "\\" : "") + e.val;
            }
          });
          return this.emit(n, e);
        });
      }

      e.exports = function (e) {
        var t = e.compiler.compilers;
        var n = e.options;
        e.use(r.compilers);
        var s = t.escape;
        var a = t.qmark;
        var u = t.slash;
        var c = t.star;
        var p = t.text;
        var l = t.plus;
        var d = t.dot;

        if (false === n.extglob || true === n.noext) {
          e.compiler.use(i);
        } else {
          e.use(o.compilers);
        }

        e.use(function () {
          this.options.star = this.options.star || function () {
            return "[^\\\\/]*?";
          };
        });
        e.compiler.set("dot", d).set("escape", s).set("plus", l).set("slash", u).set("qmark", a).set("star", c).set("text", p);
      };
    },
    "./node_modules/micromatch/lib/parsers.js":
    /*!************************************************!*\
      !*** ./node_modules/micromatch/lib/parsers.js ***!
      \************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r;
      var o = n(
      /*! extglob */
      "./node_modules/extglob/index.js");
      var i = n(
      /*! nanomatch */
      "./node_modules/nanomatch/index.js");
      var s = n(
      /*! regex-not */
      "./node_modules/regex-not/index.js");
      var a = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");

      var u = function (e) {
        t = "([!@*?+]?\\(|\\)|\\[:?(?=.*?:?\\])|:?\\]|[*+?!^$.\\\\/])+";
        n = s.create(t, {
          contains: true,
          strictClose: false
        });
        return r || (r = a("(?:[\\^]|\\\\|" + n + ")", {
          strictClose: false
        }));
        var t;
        var n;
      };

      e.exports = function (e) {
        var t = e.parser.parsers;
        e.use(i.parsers);
        var n = t.escape;
        var r = t.slash;
        var s = t.qmark;
        var a = t.plus;
        var c = t.star;
        var p = t.dot;
        e.use(o.parsers);
        e.parser.use(function () {
          this.notRegex = /^\!+(?!\()/;
        }).capture("escape", n).capture("slash", r).capture("qmark", s).capture("star", c).capture("plus", a).capture("dot", p).capture("text", function () {
          if (!this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(u(this.options));

            if (t && t[0]) {
              return e({
                type: "text",
                val: t[0].replace(/([[\]^$])/g, "\\$1")
              });
            }
          }
        });
      };
    },
    "./node_modules/micromatch/lib/utils.js":
    /*!**********************************************!*\
      !*** ./node_modules/micromatch/lib/utils.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = e.exports;
      var o = n(
      /*! path */
      "path");
      var i = n(
      /*! snapdragon */
      "./node_modules/snapdragon/index.js");
      r.define = n(
      /*! define-property */
      "./node_modules/define-property/index.js");
      r.diff = n(
      /*! arr-diff */
      "./node_modules/arr-diff/index.js");
      r.extend = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");
      r.pick = n(
      /*! object.pick */
      "./node_modules/object.pick/index.js");
      r.typeOf = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      r.unique = n(
      /*! array-unique */
      "./node_modules/array-unique/index.js");

      r.isWindows = function () {
        return "\\" === o.sep || "win32" === process.platform;
      };

      r.instantiate = function (e, t) {
        var n;
        n = "object" === r.typeOf(e) && e.snapdragon ? e.snapdragon : "object" === r.typeOf(t) && t.snapdragon ? t.snapdragon : new i(t);
        r.define(n, "parse", function (e, t) {
          var n = i.prototype.parse.apply(this, arguments);
          n.input = e;
          var o = this.parser.stack.pop();

          if (o && true !== this.options.strictErrors) {
            var s = o.nodes[0];
            var a = o.nodes[1];

            if ("bracket" === o.type) {
              if ("[" === a.val.charAt(0)) {
                a.val = "\\" + a.val;
              }
            } else {
              s.val = "\\" + s.val;
              var u = s.parent.nodes[1];

              if ("star" === u.type) {
                u.loose = true;
              }
            }
          }

          r.define(n, "parser", this.parser);
          return n;
        });
        return n;
      };

      r.createKey = function (e, t) {
        if ("object" !== r.typeOf(t)) {
          return e;
        }

        for (var n = e, o = Object.keys(t), i = 0; i < o.length; i++) {
          var s = o[i];
          n += ";" + s + "=" + String(t[s]);
        }

        return n;
      };

      r.arrayify = function (e) {
        return "string" == typeof e ? [e] : e ? Array.isArray(e) ? e : [e] : [];
      };

      r.isString = function (e) {
        return "string" == typeof e;
      };

      r.isObject = function (e) {
        return "object" === r.typeOf(e);
      };

      r.hasSpecialChars = function (e) {
        return /(?:(?:(^|\/)[!.])|[*?+()|\[\]{}]|[+@]\()/.test(e);
      };

      r.escapeRegex = function (e) {
        return e.replace(/[-[\]{}()^$|*+?.\\\/\s]/g, "\\$&");
      };

      r.toPosixPath = function (e) {
        return e.replace(/\\+/g, "/");
      };

      r.unescape = function (e) {
        return r.toPosixPath(e.replace(/\\(?=[*+?!.])/g, ""));
      };

      r.stripPrefix = function (e) {
        if ("." !== e.charAt(0)) {
          return e;
        }

        var t = e.charAt(1);
        return r.isSlash(t) ? e.slice(2) : e;
      };

      r.isSlash = function (e) {
        return "/" === e || "\\/" === e || "\\" === e || "\\\\" === e;
      };

      r.matchPath = function (e, t) {
        return t && t.contains ? r.containsPattern(e, t) : r.equalsPattern(e, t);
      };

      r._equals = function (e, t, n) {
        return n === e || n === t;
      };

      r._contains = function (e, t, n) {
        return -1 !== e.indexOf(n) || -1 !== t.indexOf(n);
      };

      r.equalsPattern = function (e, t) {
        var n = r.unixify(t);
        t = t || {};
        return function (o) {
          var i = r._equals(o, n(o), e);

          if (true === i || true !== t.nocase) {
            return i;
          }

          var s = o.toLowerCase();
          return r._equals(s, n(s), e);
        };
      };

      r.containsPattern = function (e, t) {
        var n = r.unixify(t);
        t = t || {};
        return function (o) {
          var i = r._contains(o, n(o), e);

          if (true === i || true !== t.nocase) {
            return i;
          }

          var s = o.toLowerCase();
          return r._contains(s, n(s), e);
        };
      };

      r.matchBasename = function (e) {
        return function (t) {
          return e.test(o.basename(t));
        };
      };

      r.value = function (e, t, n) {
        return n && false === n.unixify ? e : t(e);
      };

      r.unixify = function (e) {
        e = e || {};
        return function (t) {
          if (r.isWindows() || true === e.unixify) {
            t = r.toPosixPath(t);
          }

          if (false !== e.stripPrefix) {
            t = r.stripPrefix(t);
          }

          if (true === e.unescape) {
            t = r.unescape(t);
          }

          return t;
        };
      };
    },
    "./node_modules/mixin-deep/index.js":
    /*!******************************************!*\
      !*** ./node_modules/mixin-deep/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/mixin-deep/node_modules/is-extendable/index.js");
      var o = n(
      /*! for-in */
      "./node_modules/for-in/index.js");

      function i(e, t) {
        for (var n = arguments.length, r = 0; ++r < n;) {
          var i = arguments[r];

          if (a(i)) {
            o(i, s, e);
          }
        }

        return e;
      }

      function s(e, t) {
        if (function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        }(t)) {
          var n = this[t];

          if (a(e) && a(n)) {
            i(n, e);
          } else {
            this[t] = e;
          }
        }
      }

      function a(e) {
        return r(e) && !Array.isArray(e);
      }

      e.exports = i;
    },
    "./node_modules/mixin-deep/node_modules/is-extendable/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/mixin-deep/node_modules/is-extendable/index.js ***!
      \*********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! is-plain-object */
      "./node_modules/is-plain-object/index.js");

      e.exports = function (e) {
        return r(e) || "function" == typeof e || Array.isArray(e);
      };
    },
    "./node_modules/ms/index.js":
    /*!**********************************!*\
      !*** ./node_modules/ms/index.js ***!
      \**********************************/

    /*! no static exports found */
    function (e, t) {
      var n = 1e3;
      var r = 6e4;
      var o = 36e5;
      var i = 24 * o;

      function s(e, t, n) {
        if (!(e < t)) {
          return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
        }
      }

      e.exports = function (e, t) {
        t = t || {};
        var a;
        var u = typeof e;

        if ("string" === u && e.length > 0) {
          return function (e) {
            if ((e = String(e)).length > 100) {
              return;
            }

            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);

            if (!t) {
              return;
            }

            var s = parseFloat(t[1]);

            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return 315576e5 * s;

              case "days":
              case "day":
              case "d":
                return s * i;

              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return s * o;

              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return s * r;

              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return s * n;

              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return s;

              default:
                return;
            }
          }(e);
        }

        if ("number" === u && false === isNaN(e)) {
          return t.long ? s(a = e, i, "day") || s(a, o, "hour") || s(a, r, "minute") || s(a, n, "second") || a + " ms" : function (e) {
            if (e >= i) {
              return Math.round(e / i) + "d";
            }

            if (e >= o) {
              return Math.round(e / o) + "h";
            }

            if (e >= r) {
              return Math.round(e / r) + "m";
            }

            if (e >= n) {
              return Math.round(e / n) + "s";
            }

            return e + "ms";
          }(e);
        }

        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
    },
    "./node_modules/nanomatch/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/nanomatch/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! util */
      "util");
      var o = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");
      var i = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");
      var s = n(
      /*! ./lib/compilers */
      "./node_modules/nanomatch/lib/compilers.js");
      var a = n(
      /*! ./lib/parsers */
      "./node_modules/nanomatch/lib/parsers.js");
      var u = n(
      /*! ./lib/cache */
      "./node_modules/nanomatch/lib/cache.js");
      var c = n(
      /*! ./lib/utils */
      "./node_modules/nanomatch/lib/utils.js");

      function p(e, t, n) {
        t = c.arrayify(t);
        e = c.arrayify(e);
        var r = t.length;

        if (0 === e.length || 0 === r) {
          return [];
        }

        if (1 === r) {
          return p.match(e, t[0], n);
        }

        for (var o = false, i = [], s = [], a = -1; ++a < r;) {
          var u = t[a];
          i.push.apply(i, p.match(e, u.slice(1), n));

          if ("string" == typeof u && 33 === u.charCodeAt(0)) {
            i.push.apply(i, p.match(e, u.slice(1), n));
            o = true;
          } else {
            s.push.apply(s, p.match(e, u, n));
          }
        }

        if (o && 0 === s.length) {
          if (n && false === n.unixify) {
            s = e.slice();
          } else {
            for (var l = c.unixify(n), d = 0; d < e.length; d++) {
              s.push(l(e[d]));
            }
          }
        }

        var f = c.diff(s, i);
        return n && false === n.nodupes ? f : c.unique(f);
      }

      function l(e, t, n, r) {
        var o = c.createKey(e + "=" + t, n);

        if (n && false === n.cache) {
          return r(t, n);
        }

        if (u.has(e, o)) {
          return u.get(e, o);
        }

        var i = r(t, n);
        u.set(e, o, i);
        return i;
      }

      p.match = function (e, t, n) {
        if (Array.isArray(t)) {
          throw new TypeError("expected pattern to be a string");
        }

        for (var r = c.unixify(n), o = l("match", t, n, p.matcher), i = [], s = (e = c.arrayify(e)).length, a = -1; ++a < s;) {
          var u = e[a];

          if (u === t || o(u)) {
            i.push(c.value(u, r, n));
          }
        }

        if (undefined === n) {
          return c.unique(i);
        }

        if (0 === i.length) {
          if (true === n.failglob) {
            throw new Error('no matches found for "' + t + '"');
          }

          if (true === n.nonull || true === n.nullglob) {
            return [n.unescape ? c.unescape(t) : t];
          }
        }

        if (n.ignore) {
          i = p.not(i, n.ignore, n);
        }

        return false !== n.nodupes ? c.unique(i) : i;
      };

      p.isMatch = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        return !c.isEmptyString(e) && !c.isEmptyString(t) && (!!c.equalsPattern(n)(e) || l("isMatch", t, n, p.matcher)(e));
      };

      p.some = function (e, t, n) {
        if ("string" == typeof e) {
          e = [e];
        }

        for (var r = 0; r < e.length; r++) {
          if (1 === p(e[r], t, n).length) {
            return true;
          }
        }

        return false;
      };

      p.every = function (e, t, n) {
        if ("string" == typeof e) {
          e = [e];
        }

        for (var r = 0; r < e.length; r++) {
          if (1 !== p(e[r], t, n).length) {
            return false;
          }
        }

        return true;
      };

      p.any = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        if (c.isEmptyString(e) || c.isEmptyString(t)) {
          return false;
        }

        if ("string" == typeof t) {
          t = [t];
        }

        for (var o = 0; o < t.length; o++) {
          if (p.isMatch(e, t[o], n)) {
            return true;
          }
        }

        return false;
      };

      p.all = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        if ("string" == typeof t) {
          t = [t];
        }

        for (var o = 0; o < t.length; o++) {
          if (!p.isMatch(e, t[o], n)) {
            return false;
          }
        }

        return true;
      };

      p.not = function (e, t, n) {
        var r = i({}, n);
        var o = r.ignore;
        delete r.ignore;
        e = c.arrayify(e);
        var s = c.diff(e, p(e, t, r));

        if (o) {
          s = c.diff(s, p(e, o));
        }

        return false !== r.nodupes ? c.unique(s) : s;
      };

      p.contains = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError('expected a string: "' + r.inspect(e) + '"');
        }

        if ("string" == typeof t) {
          if (c.isEmptyString(e) || c.isEmptyString(t)) {
            return false;
          }

          if (c.equalsPattern(t, n)(e)) {
            return true;
          }

          if (c.containsPattern(t, n)(e)) {
            return true;
          }
        }

        var o = i({}, n, {
          contains: true
        });
        return p.any(e, t, o);
      };

      p.matchBase = function (e, t) {
        return !(e && -1 !== e.indexOf("/") || !t) && (true === t.basename || true === t.matchBase);
      };

      p.matchKeys = function (e, t, n) {
        if (!c.isObject(e)) {
          throw new TypeError("expected the first argument to be an object");
        }

        var r = p(Object.keys(e), t, n);
        return c.pick(e, r);
      };

      p.matcher = function e(t, n) {
        if (c.isEmptyString(t)) {
          return function () {
            return false;
          };
        }

        if (Array.isArray(t)) {
          return function (e, t, n) {
            var r;
            return l("compose", String(e), t, function () {
              return function (o) {
                if (!r) {
                  r = [];

                  for (var i = 0; i < e.length; i++) {
                    r.push(n(e[i], t));
                  }
                }

                for (var s = r.length; s--;) {
                  if (true === r[s](o)) {
                    return true;
                  }
                }

                return false;
              };
            });
          }(t, n, e);
        }

        if (t instanceof RegExp) {
          return o(t);
        }

        if (!c.isString(t)) {
          throw new TypeError("expected pattern to be an array, string or regex");
        }

        if (!c.hasSpecialChars(t)) {
          if (n && true === n.nocase) {
            t = t.toLowerCase();
          }

          return c.matchPath(t, n);
        }

        var r = p.makeRe(t, n);

        if (p.matchBase(t, n)) {
          return c.matchBasename(r, n);
        }

        function o(e) {
          var t = c.equalsPattern(n);
          var r = c.unixify(n);
          return function (n) {
            return !!t(n) || !!e.test(r(n));
          };
        }

        var i = o(r);
        c.define(i, "result", r.result);
        return i;
      };

      p.capture = function (e, t, n) {
        var r = p.makeRe(e, i({
          capture: true
        }, n));
        var o = c.unixify(n);
        return l("capture", e, n, function () {
          return function (e) {
            var t = r.exec(o(e));
            return t ? t.slice(1) : null;
          };
        })(t);
      };

      p.makeRe = function (e, t) {
        if (e instanceof RegExp) {
          return e;
        }

        if ("string" != typeof e) {
          throw new TypeError("expected pattern to be a string");
        }

        if (e.length > 65536) {
          throw new Error("expected pattern to be less than 65536 characters");
        }

        return l("makeRe", e, t, function () {
          var n = c.extend({
            wrap: false
          }, t);
          var r = p.create(e, n);
          var i = o(r.output, n);
          c.define(i, "result", r);
          return i;
        });
      };

      p.create = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        return l("create", e, t, function () {
          return p.compile(p.parse(e, t), t);
        });
      };

      p.parse = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        return l("parse", e, t, function () {
          var n = c.instantiate(null, t);
          a(n, t);
          var r = n.parse(e, t);
          c.define(r, "snapdragon", n);
          r.input = e;
          return r;
        });
      };

      p.compile = function (e, t) {
        if ("string" == typeof e) {
          e = p.parse(e, t);
        }

        return l("compile", e.input, t, function () {
          var n = c.instantiate(e, t);
          s(n, t);
          return n.compile(e, t);
        });
      };

      p.clearCache = function () {
        p.cache.__data__ = {};
      };

      p.compilers = s;
      p.parsers = a;
      p.cache = u;
      e.exports = p;
    },
    "./node_modules/nanomatch/lib/cache.js":
    /*!*********************************************!*\
      !*** ./node_modules/nanomatch/lib/cache.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      e.exports = new (n(
      /*! fragment-cache */
      "./node_modules/fragment-cache/index.js"))();
    },
    "./node_modules/nanomatch/lib/compilers.js":
    /*!*************************************************!*\
      !*** ./node_modules/nanomatch/lib/compilers.js ***!
      \*************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      e.exports = function (e, t) {
        function n() {
          return t && "string" == typeof t.slash ? t.slash : t && "function" == typeof t.slash ? t.slash.call(e) : "\\\\/";
        }

        function r() {
          return t && "string" == typeof t.star ? t.star : t && "function" == typeof t.star ? t.star.call(e) : "[^" + n() + "]*?";
        }

        var o = e.ast = e.parser.ast;
        o.state = e.parser.state;
        e.compiler.state = o.state;
        e.compiler.set("not", function (e) {
          var t = this.prev();
          return true === this.options.nonegate || "bos" !== t.type ? this.emit("\\" + e.val, e) : this.emit(e.val, e);
        }).set("escape", function (e) {
          return this.options.unescape && /^[-\w_.]/.test(e.val) ? this.emit(e.val, e) : this.emit("\\" + e.val, e);
        }).set("quoted", function (e) {
          return this.emit(e.val, e);
        }).set("dollar", function (e) {
          return "bracket" === e.parent.type ? this.emit(e.val, e) : this.emit("\\" + e.val, e);
        }).set("dot", function (e) {
          if (true === e.dotfiles) {
            this.dotfiles = true;
          }

          return this.emit("\\" + e.val, e);
        }).set("backslash", function (e) {
          return this.emit(e.val, e);
        }).set("slash", function (e, t, r) {
          for (var o = "[" + n() + "]", i = e.parent, s = this.prev(); "paren" === i.type && !i.hasSlash;) {
            i.hasSlash = true;
            i = i.parent;
          }

          if (s.addQmark) {
            o += "?";
          }

          this.output = "(?:" + this.output;
          return "\\b" === e.rest.slice(0, 2) ? this.emit(o, e) : "**" === e.parsed || "./**" === e.parsed ? this.emit(o + ")?", e) : "!**" === e.parsed && true !== this.options.nonegate ? this.emit(o + "?\\b", e) : this.emit(o, e);
        }).set("bracket", function (e) {
          var t = e.close;
          var n = e.escaped ? "\\[" : "[";
          var r = e.negated;
          var o = e.inner;
          var i = e.val;
          o = o.replace(/\\?(\W)/g, "\\$1");

          if (true === e.escaped) {
            o = o.replace(/\\?(\W)/g, "\\$1");
            r = "";
          }

          if ("]-" === o) {
            o = "\\]\\-";
          }

          if (r && -1 === o.indexOf(".")) {
            o += ".";
          }

          if (r && -1 === o.indexOf("/")) {
            o += "/";
          }

          i = n + r + o + t;
          return this.emit(i, e);
        }).set("square", function (e) {
          var t = (/^\W/.test(e.val) ? "\\" : "") + e.val;
          return this.emit(t, e);
        }).set("qmark", function (e) {
          var t = this.prev();
          var n = "[^.\\\\/]";

          if (this.options.dot || "bos" !== t.type && "slash" !== t.type) {
            n = "[^\\\\/]";
          }

          if ("(" === e.parsed.slice(-1)) {
            var r = e.rest.charAt(0);

            if ("!" === r || "=" === r || ":" === r) {
              return this.emit(e.val, e);
            }
          }

          if (e.val.length > 1) {
            n += "{" + e.val.length + "}";
          }

          return this.emit(n, e);
        }).set("plus", function (e) {
          var t = e.parsed.slice(-1);

          if ("]" === t || ")" === t) {
            return this.emit(e.val, e);
          }

          if (!this.output || /[?*+]/.test(n) && "bracket" !== e.parent.type) {
            return this.emit("\\+", e);
          }

          var n = this.output.slice(-1);
          return /\w/.test(n) && !e.inside ? this.emit("+\\+?", e) : this.emit("+", e);
        }).set("globstar", function (e, t, o) {
          if (!this.output) {
            this.state.leadingGlobstar = true;
          }

          var i = this.prev();
          var s = this.prev(2);
          var a = this.next();
          var u = this.next(2);
          var c = i.type;
          var p = e.val;
          this.output += "?";

          if ("slash" === i.type && "slash" === a.type && "text" === s.type) {
            this.output += "?";

            if ("text" !== u.type) {
              this.output += "\\b";
            }
          }

          var l = e.parsed;

          if ("!" === l.charAt(0)) {
            l = l.slice(1);
          }

          var d = e.isInside.paren || e.isInside.brace;
          p = l && "slash" !== c && "bos" !== c && !d ? r() : true !== this.options.dot ? "(?:(?!(?:[" + n() + "]|^)\\.).)*?" : "(?:(?!(?:[" + n() + "]|^)(?:\\.{1,2})($|[" + n() + "]))(?!\\.{2}).)*?";

          if (!("slash" !== c && "bos" !== c || true === this.options.dot)) {
            p = "(?!\\.)" + p;
          }

          if ("slash" === i.type && "slash" === a.type && "text" !== s.type) {
            if (!("text" !== u.type && "star" !== u.type)) {
              e.addQmark = true;
            }
          }

          if (this.options.capture) {
            p = "(" + p + ")";
          }

          return this.emit(p, e);
        }).set("star", function (e, t, o) {
          var i = t[o - 2] || {};
          var s = this.prev();
          var a = this.next();
          var u = s.type;

          function c(e) {
            return "bos" === e.type || "slash" === e.type;
          }

          if ("" === this.output && true !== this.options.contains) {
            this.output = "(?![" + n() + "])";
          }

          if ("bracket" === u && false === this.options.bash) {
            var p = a && "bracket" === a.type ? r() : "*?";

            if (!s.nodes || "posix" !== s.nodes[1].type) {
              return this.emit(p, e);
            }
          }

          var l = this.dotfiles || "text" === u || "escape" === u ? "" : this.options.dot ? "(?!(?:^|[" + n() + "])\\.{1,2}(?:$|[" + n() + "]))" : "(?!\\.)";

          if (c(s) || c(i) && "not" === u) {
            l += "(?!\\.)" !== l ? "(?!(\\.{2}|\\.[" + n() + "]))(?=.)" : "(?=.)";
          } else {
            if ("(?!\\.)" === l) {
              l = "";
            }
          }

          if ("not" === s.type && "bos" === i.type && true === this.options.dot) {
            this.output = "(?!\\.)" + this.output;
          }

          var d = l + r();

          if (this.options.capture) {
            d = "(" + d + ")";
          }

          return this.emit(d, e);
        }).set("text", function (e) {
          return this.emit(e.val, e);
        }).set("eos", function (e) {
          var t = this.prev();
          var r = e.val;
          this.output = "(?:\\.[" + n() + "](?=.))?" + this.output;

          if (this.state.metachar && "qmark" !== t.type && "slash" !== t.type) {
            r += this.options.contains ? "[" + n() + "]?" : "(?:[" + n() + "]|$)";
          }

          return this.emit(r, e);
        });

        if (t && "function" == typeof t.compilers) {
          t.compilers(e.compiler);
        }
      };
    },
    "./node_modules/nanomatch/lib/parsers.js":
    /*!***********************************************!*\
      !*** ./node_modules/nanomatch/lib/parsers.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r;
      var o = n(
      /*! regex-not */
      "./node_modules/regex-not/index.js");
      var i = n(
      /*! to-regex */
      "./node_modules/to-regex/index.js");

      var s = function (e) {
        if (r) {
          return r;
        }

        var t = {
          contains: true,
          strictClose: false
        };
        var n = o.create(e, t);
        var s = i("^(?:[*]\\((?=.)|" + n + ")", t);
        return r = s;
      }("[\\[!*+?$^\"'.\\\\/]+");

      e.exports = function (e, t) {
        var n = e.parser;
        var r = n.options;
        n.state = {
          slashes: 0,
          paths: []
        };
        n.ast.state = n.state;
        n.capture("prefix", function () {
          this.state.strictOpen = !!this.options.strictOpen;

          if (!this.parsed) {
            if (this.match(/^\.[\\/]/)) {
              this.state.addPrefix = true;
            }
          }
        }).capture("escape", function () {
          if (!this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(/^(?:\\(.)|([$^]))/);

            if (t) {
              return e({
                type: "escape",
                val: t[2] || t[1]
              });
            }
          }
        }).capture("quoted", function () {
          var e = this.position();
          var t = this.match(/^["']/);

          if (t) {
            var n = t[0];

            if (-1 === this.input.indexOf(n)) {
              return e({
                type: "escape",
                val: n
              });
            }

            var r = function (e, t) {
              var n = e.charAt(0);
              var r = {
                len: 1,
                val: "",
                esc: ""
              };
              var o = 0;

              function i() {
                r.esc += "\\" + n;

                if ("\\" !== n) {
                  r.esc += "\\" + n;
                  r.val += n;
                }

                n = e.charAt(++o);
                r.len++;
                i();

                if ("\\" === n) {
                  i();
                  i();
                }
              }

              for (; n && n !== t;) {
                i();
              }

              return r;
            }(this.input, n);

            this.consume(r.len);
            return e({
              type: "quoted",
              val: r.esc
            });
          }
        }).capture("not", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(this.notRegex || /^!+/);

          if (n) {
            var r = n[0];
            var o = r.length % 2 == 1;

            if (!("" !== e || o)) {
              r = "";
            }

            this.bos.val = "(?!^(?:";
            this.append = ")$).*";

            if ("" === e && o && true !== this.options.nonegate) {
              this.bos.val = "(?!^(?:";
              this.append = ")$).*";
              r = "";
            }

            return t({
              type: "not",
              val: r
            });
          }
        }).capture("dot", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(/^\.+/);

          if (n) {
            var r = n[0];
            this.state.dot = "." === r && ("" === e || "/" === e.slice(-1));
            return t({
              type: "dot",
              dotfiles: this.state.dot,
              val: r
            });
          }
        }).capture("plus", /^\+(?!\()/).capture("qmark", function () {
          var e = this.parsed;
          var t = this.position();
          var n = this.match(/^\?+(?!\()/);

          if (n) {
            this.state.metachar = true;
            this.state.qmark = true;
            return t({
              type: "qmark",
              parsed: e,
              val: n[0]
            });
          }
        }).capture("globstar", function () {
          var e = this.parsed;
          var t = this.position();

          if (this.match(/^\*{2}(?![*(])(?=[,)/]|$)/)) {
            var n = true !== r.noglobstar ? "globstar" : "star";
            var o = t({
              type: n,
              parsed: e
            });

            for (this.state.metachar = true; "/**/" === this.input.slice(0, 4);) {
              this.input = this.input.slice(3);
            }

            o.isInside = {
              brace: this.isInside("brace"),
              paren: this.isInside("paren")
            };
            this.state.globstar = true;
            this.state.star = true;

            if ("globstar" === n) {
              this.state.globstar = true;
              o.val = "**";
            } else {
              this.state.star = true;
              o.val = "*";
            }

            return o;
          }
        }).capture("star", function () {
          var e = this.position();
          var t = this.match(/^(?:\*(?![*(])|[*]{3,}(?!\()|[*]{2}(?![(/]|$)|\*(?=\*\())/);

          if (t) {
            this.state.metachar = true;
            this.state.star = true;
            return e({
              type: "star",
              val: t[0]
            });
          }
        }).capture("slash", function () {
          var e = this.position();
          var t = this.match(/^\//);

          if (t) {
            this.state.slashes++;
            return e({
              type: "slash",
              val: t[0]
            });
          }
        }).capture("backslash", function () {
          var e = this.position();
          var t = this.match(/^\\(?![*+?(){}[\]'"])/);

          if (t) {
            var n = t[0];

            if (this.isInside("bracket")) {
              n = "\\";
            } else {
              if (n.length > 1) {
                n = "\\\\";
              }
            }

            return e({
              type: "backslash",
              val: n
            });
          }
        }).capture("square", function () {
          if (!this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(/^\[([^!^\\])\]/);

            if (t) {
              return e({
                type: "square",
                val: t[1]
              });
            }
          }
        }).capture("bracket", function () {
          var e = this.position();
          var t = this.match(/^(?:\[([!^]?)([^\]]+|\]-)(\]|[^*+?]+)|\[)/);

          if (t) {
            var n = t[0];
            var r = t[1] ? "^" : "";
            var o = (t[2] || "").replace(/\\\\+/, "\\\\");
            var i = t[3] || "";

            if (t[2] && o.length < t[2].length) {
              n = n.replace(/\\\\+/, "\\\\");
            }

            var s = this.input.slice(0, 2);

            if ("" === o && "\\]" === s) {
              o += s;
              this.consume(2);

              for (var a, u = this.input, c = -1; a = u[++c];) {
                this.consume(1);

                if ("]" === a) {
                  i = a;
                  break;
                }

                o += a;
              }
            }

            return e({
              type: "bracket",
              val: n,
              escaped: "]" !== i,
              negated: r,
              inner: o,
              close: i
            });
          }
        }).capture("text", function () {
          if (!this.isInside("bracket")) {
            var e = this.position();
            var t = this.match(s);

            if (t && t[0]) {
              return e({
                type: "text",
                val: t[0]
              });
            }
          }
        });

        if (t && "function" == typeof t.parsers) {
          t.parsers(e.parser);
        }
      };

      e.exports.not = "[\\[!*+?$^\"'.\\\\/]+";
    },
    "./node_modules/nanomatch/lib/utils.js":
    /*!*********************************************!*\
      !*** ./node_modules/nanomatch/lib/utils.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = e.exports;
      var o = n(
      /*! path */
      "path");
      var i = n(
      /*! is-windows */
      "./node_modules/is-windows/index.js")();
      var s = n(
      /*! snapdragon */
      "./node_modules/snapdragon/index.js");
      r.define = n(
      /*! define-property */
      "./node_modules/define-property/index.js");
      r.diff = n(
      /*! arr-diff */
      "./node_modules/arr-diff/index.js");
      r.extend = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");
      r.pick = n(
      /*! object.pick */
      "./node_modules/object.pick/index.js");
      r.typeOf = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      r.unique = n(
      /*! array-unique */
      "./node_modules/array-unique/index.js");

      r.isEmptyString = function (e) {
        return "" === String(e) || "./" === String(e);
      };

      r.isWindows = function () {
        return "\\" === o.sep || true === i;
      };

      r.last = function (e, t) {
        return e[e.length - (t || 1)];
      };

      r.instantiate = function (e, t) {
        var n;
        n = "object" === r.typeOf(e) && e.snapdragon ? e.snapdragon : "object" === r.typeOf(t) && t.snapdragon ? t.snapdragon : new s(t);
        r.define(n, "parse", function (e, t) {
          var n = s.prototype.parse.call(this, e, t);
          n.input = e;
          var o = this.parser.stack.pop();

          if (o && true !== this.options.strictErrors) {
            var i = o.nodes[0];
            var a = o.nodes[1];

            if ("bracket" === o.type) {
              if ("[" === a.val.charAt(0)) {
                a.val = "\\" + a.val;
              }
            } else {
              i.val = "\\" + i.val;
              var u = i.parent.nodes[1];

              if ("star" === u.type) {
                u.loose = true;
              }
            }
          }

          r.define(n, "parser", this.parser);
          return n;
        });
        return n;
      };

      r.createKey = function (e, t) {
        if (undefined === t) {
          return e;
        }

        var n = e;

        for (var r in t) {
          if (t.hasOwnProperty(r)) {
            n += ";" + r + "=" + String(t[r]);
          }
        }

        return n;
      };

      r.arrayify = function (e) {
        return "string" == typeof e ? [e] : e ? Array.isArray(e) ? e : [e] : [];
      };

      r.isString = function (e) {
        return "string" == typeof e;
      };

      r.isRegex = function (e) {
        return "regexp" === r.typeOf(e);
      };

      r.isObject = function (e) {
        return "object" === r.typeOf(e);
      };

      r.escapeRegex = function (e) {
        return e.replace(/[-[\]{}()^$|*+?.\\/\s]/g, "\\$&");
      };

      r.combineDupes = function (e, t) {
        var n = (t = (t = r.arrayify(t).join("|").split("|")).map(function (e) {
          return e.replace(/\\?([+*\\/])/g, "\\$1");
        })).join("|");
        var o = new RegExp("(" + n + ")(?=\\1)", "g");
        return e.replace(o, "");
      };

      r.hasSpecialChars = function (e) {
        return /(?:(?:(^|\/)[!.])|[*?+()|[\]{}]|[+@]\()/.test(e);
      };

      r.toPosixPath = function (e) {
        return e.replace(/\\+/g, "/");
      };

      r.unescape = function (e) {
        return r.toPosixPath(e.replace(/\\(?=[*+?!.])/g, ""));
      };

      r.stripDrive = function (e) {
        return r.isWindows() ? e.replace(/^[a-z]:[\\/]+?/i, "/") : e;
      };

      r.stripPrefix = function (e) {
        return "." !== e.charAt(0) || "/" !== e.charAt(1) && "\\" !== e.charAt(1) ? e : e.slice(2);
      };

      r.isSimpleChar = function (e) {
        return "" === e.trim() || "." === e;
      };

      r.isSlash = function (e) {
        return "/" === e || "\\/" === e || "\\" === e || "\\\\" === e;
      };

      r.matchPath = function (e, t) {
        return t && t.contains ? r.containsPattern(e, t) : r.equalsPattern(e, t);
      };

      r._equals = function (e, t, n) {
        return n === e || n === t;
      };

      r._contains = function (e, t, n) {
        return -1 !== e.indexOf(n) || -1 !== t.indexOf(n);
      };

      r.equalsPattern = function (e, t) {
        var n = r.unixify(t);
        t = t || {};
        return function (o) {
          var i = r._equals(o, n(o), e);

          if (true === i || true !== t.nocase) {
            return i;
          }

          var s = o.toLowerCase();
          return r._equals(s, n(s), e);
        };
      };

      r.containsPattern = function (e, t) {
        var n = r.unixify(t);
        t = t || {};
        return function (o) {
          var i = r._contains(o, n(o), e);

          if (true === i || true !== t.nocase) {
            return i;
          }

          var s = o.toLowerCase();
          return r._contains(s, n(s), e);
        };
      };

      r.matchBasename = function (e) {
        return function (t) {
          return e.test(t) || e.test(o.basename(t));
        };
      };

      r.identity = function (e) {
        return e;
      };

      r.value = function (e, t, n) {
        return n && false === n.unixify ? e : n && "function" == typeof n.unixify ? n.unixify(e) : t(e);
      };

      r.unixify = function (e) {
        var t = e || {};
        return function (e) {
          if (false !== t.stripPrefix) {
            e = r.stripPrefix(e);
          }

          if (true === t.unescape) {
            e = r.unescape(e);
          }

          if (true === t.unixify || r.isWindows()) {
            e = r.toPosixPath(e);
          }

          return e;
        };
      };
    },
    "./node_modules/object-copy/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/object-copy/index.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! kind-of */
      "./node_modules/object-copy/node_modules/kind-of/index.js");
      var o = n(
      /*! copy-descriptor */
      "./node_modules/copy-descriptor/index.js");
      var i = n(
      /*! define-property */
      "./node_modules/object-copy/node_modules/define-property/index.js");

      function s(e) {
        return "object" === r(e) || "function" == typeof e;
      }

      function a(e, t) {
        var n = (t = u(t)).length;

        if (s(e)) {
          for (var r in e) {
            if (t.indexOf(r) > -1) {
              return true;
            }
          }

          return a(c(e), t);
        }

        if (Array.isArray(e)) {
          for (var o = e; n--;) {
            if (o.indexOf(t[n]) > -1) {
              return true;
            }
          }

          return false;
        }

        throw new TypeError("expected an array or object.");
      }

      function u(e) {
        return e ? Array.isArray(e) ? e : [e] : [];
      }

      function c(e) {
        return function (e) {
          return s(e) && undefined !== e.constructor;
        }(e) ? Object.getOwnPropertyNames(e) : [];
      }

      e.exports = function (e, t, n) {
        if (!s(e)) {
          throw new TypeError("expected receiving object to be an object.");
        }

        if (!s(t)) {
          throw new TypeError("expected providing object to be an object.");
        }

        var r = c(t);
        var p = Object.keys(t);
        var l = r.length;

        for (n = u(n); l--;) {
          var d = r[l];

          if (a(p, d)) {
            i(e, d, t[d]);
          } else {
            if (!(d in e || a(n, d))) {
              o(e, t, d);
            }
          }
        }
      };

      e.exports.has = a;
    },
    "./node_modules/object-copy/node_modules/define-property/index.js":
    /*!************************************************************************!*\
      !*** ./node_modules/object-copy/node_modules/define-property/index.js ***!
      \************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/object-copy/node_modules/kind-of/index.js":
    /*!****************************************************************!*\
      !*** ./node_modules/object-copy/node_modules/kind-of/index.js ***!
      \****************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/object-visit/index.js":
    /*!********************************************!*\
      !*** ./node_modules/object-visit/index.js ***!
      \********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * object-visit <https://github.com/jonschlinkert/object-visit>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");

      e.exports = function (e, t, n, o) {
        if (!r(e) && "function" != typeof e) {
          throw new Error("object-visit expects `thisArg` to be an object.");
        }

        if ("string" != typeof t) {
          throw new Error("object-visit expects `method` name to be a string");
        }

        if ("function" != typeof e[t]) {
          return e;
        }

        var i = [].slice.call(arguments, 3);

        for (var s in n = n || {}) {
          var a = [s, n[s]].concat(i);
          e[t].apply(e, a);
        }

        return e;
      };
    },
    "./node_modules/object.pick/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/object.pick/index.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * object.pick <https://github.com/jonschlinkert/object.pick>
       *
       * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
       * Licensed under the MIT License
       */

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");

      e.exports = function (e, t) {
        if (!r(e) && "function" != typeof e) {
          return {};
        }

        var n = {};

        if ("string" == typeof t) {
          if (t in e) {
            n[t] = e[t];
          }

          return n;
        }

        for (var o = t.length, i = -1; ++i < o;) {
          var s = t[i];

          if (s in e) {
            n[s] = e[s];
          }
        }

        return n;
      };
    },
    "./node_modules/pascalcase/index.js":
    /*!******************************************!*\
      !*** ./node_modules/pascalcase/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t) {
      e.exports =
      /*!
       * pascalcase <https://github.com/jonschlinkert/pascalcase>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */
      function (e) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string.");
        }

        return 1 === (e = e.replace(/([A-Z])/g, " $1")).length ? e.toUpperCase() : (e = (e = e.replace(/^[\W_]+|[\W_]+$/g, "").toLowerCase()).charAt(0).toUpperCase() + e.slice(1)).replace(/[\W_]+(\w|$)/g, function (e, t) {
          return t.toUpperCase();
        });
      };
    },
    "./node_modules/posix-character-classes/index.js":
    /*!*******************************************************!*\
      !*** ./node_modules/posix-character-classes/index.js ***!
      \*******************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      e.exports = {
        alnum: "a-zA-Z0-9",
        alpha: "a-zA-Z",
        ascii: "\\x00-\\x7F",
        blank: " \\t",
        cntrl: "\\x00-\\x1F\\x7F",
        digit: "0-9",
        graph: "\\x21-\\x7E",
        lower: "a-z",
        print: "\\x20-\\x7E ",
        punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
        space: " \\t\\r\\n\\v\\f",
        upper: "A-Z",
        word: "A-Za-z0-9_",
        xdigit: "A-Fa-f0-9"
      };
    },
    "./node_modules/regex-not/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/regex-not/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");
      var o = n(
      /*! safe-regex */
      "./node_modules/safe-regex/index.js");

      function i(e, t) {
        return new RegExp(i.create(e, t));
      }

      i.create = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        var n = r({}, t);

        if (true === n.contains) {
          n.strictNegate = false;
        }

        var i = false !== n.strictOpen ? "^" : "";
        var s = false !== n.strictClose ? "$" : "";
        var a = n.endChar ? n.endChar : "+";
        var u = i + (false === n.strictNegate ? "(?:(?!(?:" + e + ")).)" + a : "(?:(?!^(?:" + e + ")$).)" + a) + s;

        if (true === n.safe && false === o(u)) {
          throw new Error("potentially unsafe regular expression: " + u);
        }

        return u;
      };

      e.exports = i;
    },
    "./node_modules/repeat-element/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/repeat-element/index.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * repeat-element <https://github.com/jonschlinkert/repeat-element>
       *
       * Copyright (c) 2015-present, Jon Schlinkert.
       * Licensed under the MIT license.
       */

      e.exports = function (e, t) {
        for (var n = new Array(t), r = 0; r < t; r++) {
          n[r] = e;
        }

        return n;
      };
    },
    "./node_modules/repeat-string/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/repeat-string/index.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * repeat-string <https://github.com/jonschlinkert/repeat-string>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r;
      var o = "";

      e.exports = function (e, t) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        if (1 === t) {
          return e;
        }

        if (2 === t) {
          return e + e;
        }

        var n = e.length * t;

        if (r !== e || undefined === r) {
          r = e;
          o = "";
        } else {
          if (o.length >= n) {
            return o.substr(0, n);
          }
        }

        for (; n > o.length && t > 1;) {
          if (1 & t) {
            o += e;
          }

          t >>= 1;
          e += e;
        }

        return o = (o += e).substr(0, n);
      };
    },
    "./node_modules/ret/lib/index.js":
    /*!***************************************!*\
      !*** ./node_modules/ret/lib/index.js ***!
      \***************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./util */
      "./node_modules/ret/lib/util.js");
      var o = n(
      /*! ./types */
      "./node_modules/ret/lib/types.js");
      var i = n(
      /*! ./sets */
      "./node_modules/ret/lib/sets.js");
      var s = n(
      /*! ./positions */
      "./node_modules/ret/lib/positions.js");

      e.exports = function (e) {
        var t;
        var n;
        var a = 0;
        var u = {
          type: o.ROOT,
          stack: []
        };
        var c = u;
        var p = u.stack;
        var l = [];

        var d = function (t) {
          r.error(e, "Nothing to repeat at column " + (t - 1));
        };

        var f = r.strToChars(e);

        for (t = f.length; a < t;) {
          switch (n = f[a++]) {
            case "\\":
              switch (n = f[a++]) {
                case "b":
                  p.push(s.wordBoundary());
                  break;

                case "B":
                  p.push(s.nonWordBoundary());
                  break;

                case "w":
                  p.push(i.words());
                  break;

                case "W":
                  p.push(i.notWords());
                  break;

                case "d":
                  p.push(i.ints());
                  break;

                case "D":
                  p.push(i.notInts());
                  break;

                case "s":
                  p.push(i.whitespace());
                  break;

                case "S":
                  p.push(i.notWhitespace());
                  break;

                default:
                  /\d/.test(n) ? p.push({
                    type: o.REFERENCE,
                    value: parseInt(n, 10)
                  }) : p.push({
                    type: o.CHAR,
                    value: n.charCodeAt(0)
                  });
              }

              break;

            case "^":
              p.push(s.begin());
              break;

            case "$":
              p.push(s.end());
              break;

            case "[":
              var h;
              h = true;
              "^" === f[a] ? a++ : h = false;
              var m = r.tokenizeClass(f.slice(a), e);
              a += m[1];
              p.push({
                type: o.SET,
                set: m[0],
                not: h
              });
              break;

            case ".":
              p.push(i.anyChar());
              break;

            case "(":
              var y = {
                type: o.GROUP,
                stack: [],
                remember: true
              };
              n = f[a + 1];
              a += 2;
              "=" === n ? y.followedBy = true : "!" === n ? y.notFollowedBy = true : ":" !== n && r.error(e, "Invalid group, character '" + n + "' after '?' at column " + (a - 1));

              if ("?" === (n = f[a])) {
                n = f[a + 1];
                a += 2;

                if ("=" === n) {
                  y.followedBy = true;
                } else {
                  if ("!" === n) {
                    y.notFollowedBy = true;
                  } else {
                    if (":" !== n) {
                      r.error(e, "Invalid group, character '" + n + "' after '?' at column " + (a - 1));
                    }
                  }
                }

                y.remember = false;
              }

              p.push(y);
              l.push(c);
              c = y;
              p = y.stack;
              break;

            case ")":
              if (0 === l.length) {
                r.error(e, "Unmatched ) at column " + (a - 1));
              }

              p = (c = l.pop()).options ? c.options[c.options.length - 1] : c.stack;
              break;

            case "|":
              c.options = [c.stack];

              if (!c.options) {
                c.options = [c.stack];
                delete c.stack;
              }

              var g = [];
              c.options.push(g);
              p = g;
              break;

            case "{":
              var v,
                  b,
                  x = /^(\d+)(,(\d+)?)?\}/.exec(f.slice(a));

              if (0 === p.length) {
                d(a);
              }

              v = parseInt(x[1], 10);
              b = x[2] ? x[3] ? parseInt(x[3], 10) : 1 / 0 : v;
              a += x[0].length;
              null !== x ? p.push({
                type: o.REPETITION,
                min: v,
                max: b,
                value: p.pop()
              }) : p.push({
                type: o.CHAR,
                value: 123
              });
              break;

            case "?":
              if (0 === p.length) {
                d(a);
              }

              p.push({
                type: o.REPETITION,
                min: 0,
                max: 1,
                value: p.pop()
              });
              break;

            case "+":
              if (0 === p.length) {
                d(a);
              }

              p.push({
                type: o.REPETITION,
                min: 1,
                max: 1 / 0,
                value: p.pop()
              });
              break;

            case "*":
              if (0 === p.length) {
                d(a);
              }

              p.push({
                type: o.REPETITION,
                min: 0,
                max: 1 / 0,
                value: p.pop()
              });
              break;

            default:
              p.push({
                type: o.CHAR,
                value: n.charCodeAt(0)
              });
          }
        }

        if (0 !== l.length) {
          r.error(e, "Unterminated group");
        }

        return u;
      };

      e.exports.types = o;
    },
    "./node_modules/ret/lib/positions.js":
    /*!*******************************************!*\
      !*** ./node_modules/ret/lib/positions.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./types */
      "./node_modules/ret/lib/types.js");

      t.wordBoundary = function () {
        return {
          type: r.POSITION,
          value: "b"
        };
      };

      t.nonWordBoundary = function () {
        return {
          type: r.POSITION,
          value: "B"
        };
      };

      t.begin = function () {
        return {
          type: r.POSITION,
          value: "^"
        };
      };

      t.end = function () {
        return {
          type: r.POSITION,
          value: "$"
        };
      };
    },
    "./node_modules/ret/lib/sets.js":
    /*!**************************************!*\
      !*** ./node_modules/ret/lib/sets.js ***!
      \**************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./types */
      "./node_modules/ret/lib/types.js");

      var o = function () {
        return [{
          type: r.RANGE,
          from: 48,
          to: 57
        }];
      };

      var i = function () {
        return [{
          type: r.CHAR,
          value: 95
        }, {
          type: r.RANGE,
          from: 97,
          to: 122
        }, {
          type: r.RANGE,
          from: 65,
          to: 90
        }].concat(o());
      };

      var s = function () {
        return [{
          type: r.CHAR,
          value: 9
        }, {
          type: r.CHAR,
          value: 10
        }, {
          type: r.CHAR,
          value: 11
        }, {
          type: r.CHAR,
          value: 12
        }, {
          type: r.CHAR,
          value: 13
        }, {
          type: r.CHAR,
          value: 32
        }, {
          type: r.CHAR,
          value: 160
        }, {
          type: r.CHAR,
          value: 5760
        }, {
          type: r.CHAR,
          value: 6158
        }, {
          type: r.CHAR,
          value: 8192
        }, {
          type: r.CHAR,
          value: 8193
        }, {
          type: r.CHAR,
          value: 8194
        }, {
          type: r.CHAR,
          value: 8195
        }, {
          type: r.CHAR,
          value: 8196
        }, {
          type: r.CHAR,
          value: 8197
        }, {
          type: r.CHAR,
          value: 8198
        }, {
          type: r.CHAR,
          value: 8199
        }, {
          type: r.CHAR,
          value: 8200
        }, {
          type: r.CHAR,
          value: 8201
        }, {
          type: r.CHAR,
          value: 8202
        }, {
          type: r.CHAR,
          value: 8232
        }, {
          type: r.CHAR,
          value: 8233
        }, {
          type: r.CHAR,
          value: 8239
        }, {
          type: r.CHAR,
          value: 8287
        }, {
          type: r.CHAR,
          value: 12288
        }, {
          type: r.CHAR,
          value: 65279
        }];
      };

      t.words = function () {
        return {
          type: r.SET,
          set: i(),
          not: false
        };
      };

      t.notWords = function () {
        return {
          type: r.SET,
          set: i(),
          not: true
        };
      };

      t.ints = function () {
        return {
          type: r.SET,
          set: o(),
          not: false
        };
      };

      t.notInts = function () {
        return {
          type: r.SET,
          set: o(),
          not: true
        };
      };

      t.whitespace = function () {
        return {
          type: r.SET,
          set: s(),
          not: false
        };
      };

      t.notWhitespace = function () {
        return {
          type: r.SET,
          set: s(),
          not: true
        };
      };

      t.anyChar = function () {
        return {
          type: r.SET,
          set: [{
            type: r.CHAR,
            value: 10
          }, {
            type: r.CHAR,
            value: 13
          }, {
            type: r.CHAR,
            value: 8232
          }, {
            type: r.CHAR,
            value: 8233
          }],
          not: true
        };
      };
    },
    "./node_modules/ret/lib/types.js":
    /*!***************************************!*\
      !*** ./node_modules/ret/lib/types.js ***!
      \***************************************/

    /*! no static exports found */
    function (e, t) {
      e.exports = {
        ROOT: 0,
        GROUP: 1,
        POSITION: 2,
        SET: 3,
        RANGE: 4,
        REPETITION: 5,
        REFERENCE: 6,
        CHAR: 7
      };
    },
    "./node_modules/ret/lib/util.js":
    /*!**************************************!*\
      !*** ./node_modules/ret/lib/util.js ***!
      \**************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./types */
      "./node_modules/ret/lib/types.js");
      var o = n(
      /*! ./sets */
      "./node_modules/ret/lib/sets.js");
      var i = {
        0: 0,
        t: 9,
        n: 10,
        v: 11,
        f: 12,
        r: 13
      };

      t.strToChars = function (e) {
        return e = e.replace(/(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g, function (e, t, n, r, o, s, a, u) {
          if (n) {
            return e;
          }

          var c = t ? 8 : r ? parseInt(r, 16) : o ? parseInt(o, 16) : s ? parseInt(s, 8) : a ? "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?".indexOf(a) : i[u];
          var p = String.fromCharCode(c);

          if (/[\[\]{}\^$.|?*+()]/.test(p)) {
            p = "\\" + p;
          }

          return p;
        });
      };

      t.tokenizeClass = function (e, n) {
        for (var i, s, a = [], u = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g; null != (i = u.exec(e));) {
          if (i[1]) {
            a.push(o.words());
          } else {
            if (i[2]) {
              a.push(o.ints());
            } else {
              if (i[3]) {
                a.push(o.whitespace());
              } else {
                if (i[4]) {
                  a.push(o.notWords());
                } else {
                  if (i[5]) {
                    a.push(o.notInts());
                  } else {
                    if (i[6]) {
                      a.push(o.notWhitespace());
                    } else {
                      if (i[7]) {
                        a.push({
                          type: r.RANGE,
                          from: (i[8] || i[9]).charCodeAt(0),
                          to: i[10].charCodeAt(0)
                        });
                      } else {
                        if (!(s = i[12])) {
                          return [a, u.lastIndex];
                        }

                        a.push({
                          type: r.CHAR,
                          value: s.charCodeAt(0)
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }

        t.error(n, "Unterminated character class");
      };

      t.error = function (e, t) {
        throw new SyntaxError("Invalid regular expression: /" + e + "/: " + t);
      };
    },
    "./node_modules/safe-regex/index.js":
    /*!******************************************!*\
      !*** ./node_modules/safe-regex/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ret */
      "./node_modules/ret/lib/index.js");
      var o = r.types;

      e.exports = function (e, t) {
        if (!t) {
          t = {};
        }

        var n;
        var i = undefined === t.limit ? 25 : t.limit;
        n = e;

        if ("[object RegExp]" === {}.toString.call(n)) {
          e = e.source;
        } else {
          if ("string" != typeof e) {
            e = String(e);
          }
        }

        try {
          e = r(e);
        } catch (e) {
          return false;
        }

        var s = 0;
        return function e(t, n) {
          if (t.type === o.REPETITION) {
            n++;
            s++;

            if (n > 1) {
              return false;
            }

            if (s > i) {
              return false;
            }
          }

          if (t.options) {
            for (var r = 0, a = t.options.length; r < a; r++) {
              if (!e({
                stack: t.options[r]
              }, n)) {
                return false;
              }
            }
          }

          var u = t.stack || t.value && t.value.stack;

          if (!u) {
            return true;
          }

          for (r = 0; r < u.length; r++) {
            if (!e(u[r], n)) {
              return false;
            }
          }

          return true;
        }(e, 0);
      };
    },
    "./node_modules/set-value/index.js":
    /*!*****************************************!*\
      !*** ./node_modules/set-value/index.js ***!
      \*****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * set-value <https://github.com/jonschlinkert/set-value>
       *
       * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! split-string */
      "./node_modules/split-string/index.js");
      var o = n(
      /*! extend-shallow */
      "./node_modules/set-value/node_modules/extend-shallow/index.js");
      var i = n(
      /*! is-plain-object */
      "./node_modules/is-plain-object/index.js");
      var s = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function a(e) {
        return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
      }

      e.exports = function (e, t, n) {
        if (!s(e)) {
          return e;
        }

        if (Array.isArray(t)) {
          t = [].concat.apply([], t).join(".");
        }

        if ("string" != typeof t) {
          return e;
        }

        for (var u = r(t, {
          sep: ".",
          brackets: true
        }).filter(a), c = u.length, p = -1, l = e; ++p < c;) {
          var d = u[p];

          if (!s(l[d])) {
            l[d] = {};
          }

          if (p === c - 1) {
            if (i(l[d]) && i(n)) {
              l[d] = o({}, l[d], n);
            } else {
              l[d] = n;
            }
          } else {
            if (!s(l[d])) {
              l[d] = {};
            }

            l = l[d];
          }
        }

        return e;
      };
    },
    "./node_modules/set-value/node_modules/extend-shallow/index.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/set-value/node_modules/extend-shallow/index.js ***!
      \*********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function o(e, t) {
        for (var n in t) {
          if (i(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = function (e) {
        if (!r(e)) {
          e = {};
        }

        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];

          if (r(i)) {
            o(e, i);
          }
        }

        return e;
      };
    },
    "./node_modules/snapdragon-node/index.js":
    /*!***********************************************!*\
      !*** ./node_modules/snapdragon-node/index.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r;
      var o = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var i = n(
      /*! define-property */
      "./node_modules/snapdragon-node/node_modules/define-property/index.js");
      var s = n(
      /*! snapdragon-util */
      "./node_modules/snapdragon-util/index.js");

      function a(e, t, n) {
        n = t;

        if ("string" != typeof t) {
          n = t;
          t = null;
        }

        i(this, "parent", n);
        i(this, "isNode", true);
        i(this, "expect", null);

        if ("string" != typeof t && o(e)) {
          if (!r) {
            r = Object.getOwnPropertyNames(a.prototype);
          }

          for (var s = Object.keys(e), u = 0; u < s.length; u++) {
            var c = s[u];

            if (-1 === r.indexOf(c)) {
              this[c] = e[c];
            }
          }
        } else {
          this.type = t;
          this.val = e;
        }
      }

      function u(e, t) {
        if (!e) {
          throw new Error(t);
        }
      }

      a.isNode = function (e) {
        return s.isNode(e);
      };

      a.prototype.define = function (e, t) {
        i(this, e, t);
        return this;
      };

      a.prototype.isEmpty = function (e) {
        return s.isEmpty(this, e);
      };

      a.prototype.push = function (e) {
        u(a.isNode(e), "expected node to be an instance of Node");
        i(e, "parent", this);
        this.nodes = this.nodes || [];
        return this.nodes.push(e);
      };

      a.prototype.unshift = function (e) {
        u(a.isNode(e), "expected node to be an instance of Node");
        i(e, "parent", this);
        this.nodes = this.nodes || [];
        return this.nodes.unshift(e);
      };

      a.prototype.pop = function () {
        return this.nodes && this.nodes.pop();
      };

      a.prototype.shift = function () {
        return this.nodes && this.nodes.shift();
      };

      a.prototype.remove = function (e) {
        u(a.isNode(e), "expected node to be an instance of Node");
        this.nodes = this.nodes || [];
        var t = e.index;
        e.index = -1;
        return -1 !== t ? this.nodes.splice(t, 1) : null;
      };

      a.prototype.find = function (e) {
        return s.findNode(this.nodes, e);
      };

      a.prototype.isType = function (e) {
        return s.isType(this, e);
      };

      a.prototype.hasType = function (e) {
        return s.hasType(this, e);
      };

      Object.defineProperty(a.prototype, "siblings", {
        set: function () {
          throw new Error("node.siblings is a getter and cannot be defined");
        },
        get: function () {
          return this.parent ? this.parent.nodes : null;
        }
      });
      Object.defineProperty(a.prototype, "index", {
        set: function (e) {
          i(this, "idx", e);
        },
        get: function () {
          if ((-1 !== this.idx ? this.siblings[this.idx] : null) !== this) {
            this.idx = this.siblings.indexOf(this);
          }

          return Array.isArray(this.siblings) ? this.idx : -1;
        }
      });
      Object.defineProperty(a.prototype, "prev", {
        set: function () {
          throw new Error("node.prev is a getter and cannot be defined");
        },
        get: function () {
          return Array.isArray(this.siblings) ? this.siblings[this.index - 1] || this.parent.prev : null;
        }
      });
      Object.defineProperty(a.prototype, "next", {
        set: function () {
          throw new Error("node.next is a getter and cannot be defined");
        },
        get: function () {
          return Array.isArray(this.siblings) ? this.siblings[this.index + 1] || this.parent.next : null;
        }
      });
      Object.defineProperty(a.prototype, "first", {
        get: function () {
          return this.nodes ? this.nodes[0] : null;
        }
      });
      Object.defineProperty(a.prototype, "last", {
        get: function () {
          return this.nodes ? s.last(this.nodes) : null;
        }
      });
      Object.defineProperty(a.prototype, "scope", {
        get: function () {
          return true !== this.isScope && this.parent ? this.parent.scope : this;
        }
      });
      e.exports = a;
    },
    "./node_modules/snapdragon-node/node_modules/define-property/index.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/snapdragon-node/node_modules/define-property/index.js ***!
      \****************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/snapdragon-node/node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/snapdragon-node/node_modules/is-accessor-descriptor/index.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/snapdragon-node/node_modules/is-accessor-descriptor/index.js ***!
      \***********************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-accessor-descriptor <https://github.com/jonschlinkert/is-accessor-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = {
        get: "function",
        set: "function",
        configurable: "boolean",
        enumerable: "boolean"
      };

      function i(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }

      e.exports = function (e, t) {
        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if ("object" !== r(e)) {
          return false;
        }

        if (i(e, "value") || i(e, "writable")) {
          return false;
        }

        if (!i(e, "get") || "function" != typeof e.get) {
          return false;
        }

        if (i(e, "set") && "function" != typeof e[n] && undefined !== e[n]) {
          return false;
        }

        for (var n in e) {
          if (o.hasOwnProperty(n) && r(e[n]) !== o[n] && undefined !== e[n]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/snapdragon-node/node_modules/is-data-descriptor/index.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/snapdragon-node/node_modules/is-data-descriptor/index.js ***!
      \*******************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-data-descriptor <https://github.com/jonschlinkert/is-data-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");

      e.exports = function (e, t) {
        var n = {
          configurable: "boolean",
          enumerable: "boolean",
          writable: "boolean"
        };

        if ("object" !== r(e)) {
          return false;
        }

        if ("string" == typeof t) {
          return undefined !== Object.getOwnPropertyDescriptor(e, t);
        }

        if (!("value" in e || "writable" in e)) {
          return false;
        }

        for (var o in e) {
          if ("value" !== o && n.hasOwnProperty(o) && r(e[o]) !== n[o] && undefined !== e[o]) {
            return false;
          }
        }

        return true;
      };
    },
    "./node_modules/snapdragon-node/node_modules/is-descriptor/index.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/snapdragon-node/node_modules/is-descriptor/index.js ***!
      \**************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * is-descriptor <https://github.com/jonschlinkert/is-descriptor>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/kind-of/index.js");
      var o = n(
      /*! is-accessor-descriptor */
      "./node_modules/snapdragon-node/node_modules/is-accessor-descriptor/index.js");
      var i = n(
      /*! is-data-descriptor */
      "./node_modules/snapdragon-node/node_modules/is-data-descriptor/index.js");

      e.exports = function (e, t) {
        return "object" === r(e) && ("get" in e ? o(e, t) : i(e, t));
      };
    },
    "./node_modules/snapdragon-util/index.js":
    /*!***********************************************!*\
      !*** ./node_modules/snapdragon-util/index.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! kind-of */
      "./node_modules/snapdragon-util/node_modules/kind-of/index.js");
      var o = e.exports;

      function i(e) {
        return "object" === r(e);
      }

      function s(e) {
        return "function" == typeof e;
      }

      function a(e, t, n) {
        return "function" != typeof e.append ? e.emit(t, n) : e.append(t, n);
      }

      function u(e, t) {
        if (!e) {
          throw new Error(t);
        }
      }

      o.isNode = function (e) {
        return "object" === r(e) && true === e.isNode;
      };

      o.noop = function (e) {
        a(this, "", e);
      };

      o.identity = function (e) {
        a(this, e.val, e);
      };

      o.append = function (e) {
        return function (t) {
          a(this, e, t);
        };
      };

      o.toNoop = function (e, t) {
        delete e.nodes;
        e.type = "text";

        if (t) {
          e.nodes = t;
        } else {
          delete e.nodes;
          e.type = "text";
          e.val = "";
        }
      };

      o.visit = function (e, t) {
        u(o.isNode(e), "expected node to be an instance of Node");
        u(s(t), "expected a visitor function");
        t(e);
        return e.nodes ? o.mapVisit(e, t) : e;
      };

      o.mapVisit = function (e, t) {
        var n;
        u(o.isNode(e), "expected node to be an instance of Node");
        n = e.nodes;
        u(Array.isArray(n), "expected node.nodes to be an array");
        u(s(t), "expected a visitor function");

        for (var r = 0; r < e.nodes.length; r++) {
          o.visit(e.nodes[r], t);
        }

        return e;
      };

      o.addOpen = function (e, t, n, r) {
        u(o.isNode(e), "expected node to be an instance of Node");
        u(s(t), "expected Node to be a constructor function");
        r = n;

        if ("function" == typeof n) {
          r = n;
          n = "";
        }

        if ("function" != typeof r || r(e)) {
          var i = new t({
            type: e.type + ".open",
            val: n
          });
          var a = e.unshift || e.unshiftNode;

          if ("function" == typeof a) {
            a.call(e, i);
          } else {
            o.unshiftNode(e, i);
          }

          return i;
        }
      };

      o.addClose = function (e, t, n, r) {
        u(o.isNode(e), "expected node to be an instance of Node");
        u(s(t), "expected Node to be a constructor function");
        r = n;

        if ("function" == typeof n) {
          r = n;
          n = "";
        }

        if ("function" != typeof r || r(e)) {
          var i = new t({
            type: e.type + ".close",
            val: n
          });
          var a = e.push || e.pushNode;

          if ("function" == typeof a) {
            a.call(e, i);
          } else {
            o.pushNode(e, i);
          }

          return i;
        }
      };

      o.wrapNodes = function (e, t, n) {
        u(o.isNode(e), "expected node to be an instance of Node");
        u(s(t), "expected Node to be a constructor function");
        o.addOpen(e, t, n);
        o.addClose(e, t, n);
        return e;
      };

      o.pushNode = function (e, t) {
        u(o.isNode(e), "expected parent node to be an instance of Node");
        u(o.isNode(t), "expected node to be an instance of Node");
        t.define("parent", e);
        e.nodes = e.nodes || [];
        e.nodes.push(t);
        return t;
      };

      o.unshiftNode = function (e, t) {
        u(o.isNode(e), "expected parent node to be an instance of Node");
        u(o.isNode(t), "expected node to be an instance of Node");
        t.define("parent", e);
        e.nodes = e.nodes || [];
        e.nodes.unshift(t);
      };

      o.popNode = function (e) {
        u(o.isNode(e), "expected node to be an instance of Node");
        return "function" == typeof e.pop ? e.pop() : e.nodes && e.nodes.pop();
      };

      o.shiftNode = function (e) {
        u(o.isNode(e), "expected node to be an instance of Node");
        return "function" == typeof e.shift ? e.shift() : e.nodes && e.nodes.shift();
      };

      o.removeNode = function (e, t) {
        u(o.isNode(e), "expected parent.node to be an instance of Node");
        u(o.isNode(t), "expected node to be an instance of Node");

        if (!e.nodes) {
          return null;
        }

        if ("function" == typeof e.remove) {
          return e.remove(t);
        }

        var n = e.nodes.indexOf(t);
        return -1 !== n ? e.nodes.splice(n, 1) : undefined;
      };

      o.isType = function (e, t) {
        u(o.isNode(e), "expected node to be an instance of Node");

        switch (r(t)) {
          case "array":
            for (var n = t.slice(), i = 0; i < n.length; i++) {
              if (o.isType(e, n[i])) {
                return true;
              }
            }

            return false;

          case "string":
            return e.type === t;

          case "regexp":
            return t.test(e.type);

          default:
            throw new TypeError('expected "type" to be an array, string or regexp');
        }
      };

      o.hasType = function (e, t) {
        u(o.isNode(e), "expected node to be an instance of Node");

        if (!Array.isArray(e.nodes)) {
          return false;
        }

        for (var n = 0; n < e.nodes.length; n++) {
          if (o.isType(e.nodes[n], t)) {
            return true;
          }
        }

        return false;
      };

      o.firstOfType = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];

          if (o.isType(r, t)) {
            return r;
          }
        }
      };

      o.findNode = function (e, t) {
        return Array.isArray(e) ? "number" == typeof t ? e[t] : o.firstOfType(e, t) : null;
      };

      o.isOpen = function (e) {
        u(o.isNode(e), "expected node to be an instance of Node");
        return ".open" === e.type.slice(-5);
      };

      o.isClose = function (e) {
        u(o.isNode(e), "expected node to be an instance of Node");
        return ".close" === e.type.slice(-6);
      };

      o.hasOpen = function (e) {
        u(o.isNode(e), "expected node to be an instance of Node");
        var t = e.first || e.nodes ? e.nodes[0] : null;
        return !!o.isNode(t) && t.type === e.type + ".open";
      };

      o.hasClose = function (e) {
        u(o.isNode(e), "expected node to be an instance of Node");
        var t = e.last || e.nodes ? e.nodes[e.nodes.length - 1] : null;
        return !!o.isNode(t) && t.type === e.type + ".close";
      };

      o.hasOpenAndClose = function (e) {
        return o.hasOpen(e) && o.hasClose(e);
      };

      o.addType = function (e, t) {
        u(o.isNode(t), "expected node to be an instance of Node");
        u(i(e), "expected state to be an object");
        var n = t.parent ? t.parent.type : t.type.replace(/\.open$/, "");

        if (!e.hasOwnProperty("inside")) {
          e.inside = {};
        }

        if (!e.inside.hasOwnProperty(n)) {
          e.inside[n] = [];
        }

        var r = e.inside[n];
        r.push(t);
        return r;
      };

      o.removeType = function (e, t) {
        u(o.isNode(t), "expected node to be an instance of Node");
        u(i(e), "expected state to be an object");
        var n = t.parent ? t.parent.type : t.type.replace(/\.close$/, "");

        if (e.inside.hasOwnProperty(n)) {
          return e.inside[n].pop();
        }
      };

      o.isEmpty = function (e, t) {
        u(o.isNode(e), "expected node to be an instance of Node");

        if (!Array.isArray(e.nodes)) {
          return "text" !== e.type || ("function" == typeof t ? t(e, e.parent) : !o.trim(e.val));
        }

        for (var n = 0; n < e.nodes.length; n++) {
          var r = e.nodes[n];

          if (!o.isOpen(r) && !o.isClose(r) && !o.isEmpty(r, t)) {
            return false;
          }
        }

        return true;
      };

      o.isInsideType = function (e, t) {
        u(i(e), "expected state to be an object");
        u("string" == typeof t, "expected type to be a string");
        return !!e.hasOwnProperty("inside") && !!e.inside.hasOwnProperty(t) && e.inside[t].length > 0;
      };

      o.isInside = function (e, t, n) {
        u(o.isNode(t), "expected node to be an instance of Node");
        u(i(e), "expected state to be an object");

        if (Array.isArray(n)) {
          for (var s = 0; s < n.length; s++) {
            if (o.isInside(e, t, n[s])) {
              return true;
            }
          }

          return false;
        }

        var a = t.parent;

        if ("string" == typeof n) {
          return a && a.type === n || o.isInsideType(e, n);
        }

        if ("regexp" === r(n)) {
          if (a && a.type && n.test(a.type)) {
            return true;
          }

          for (var c = Object.keys(e.inside), p = c.length, l = -1; ++l < p;) {
            var d = c[l];
            var f = e.inside[d];

            if (Array.isArray(f) && 0 !== f.length && n.test(d)) {
              return true;
            }
          }
        }

        return false;
      };

      o.last = function (e, t) {
        return e[e.length - (t || 1)];
      };

      o.arrayify = function (e) {
        return "string" == typeof e && "" !== e ? [e] : Array.isArray(e) ? e : [];
      };

      o.stringify = function (e) {
        return o.arrayify(e).join(",");
      };

      o.trim = function (e) {
        return "string" == typeof e ? e.trim() : "";
      };
    },
    "./node_modules/snapdragon-util/node_modules/kind-of/index.js":
    /*!********************************************************************!*\
      !*** ./node_modules/snapdragon-util/node_modules/kind-of/index.js ***!
      \********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/snapdragon/index.js":
    /*!******************************************!*\
      !*** ./node_modules/snapdragon/index.js ***!
      \******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! base */
      "./node_modules/base/index.js");
      var o = n(
      /*! define-property */
      "./node_modules/snapdragon/node_modules/define-property/index.js");
      var i = n(
      /*! ./lib/compiler */
      "./node_modules/snapdragon/lib/compiler.js");
      var s = n(
      /*! ./lib/parser */
      "./node_modules/snapdragon/lib/parser.js");
      var a = n(
      /*! ./lib/utils */
      "./node_modules/snapdragon/lib/utils.js");

      function u(e) {
        r.call(this, null, e);
        this.options = a.extend({
          source: "string"
        }, this.options);
        this.compiler = new i(this.options);
        this.parser = new s(this.options);
        Object.defineProperty(this, "compilers", {
          get: function () {
            return this.compiler.compilers;
          }
        });
        Object.defineProperty(this, "parsers", {
          get: function () {
            return this.parser.parsers;
          }
        });
        Object.defineProperty(this, "regex", {
          get: function () {
            return this.parser.regex;
          }
        });
      }

      r.extend(u);

      u.prototype.capture = function () {
        return this.parser.capture.apply(this.parser, arguments);
      };

      u.prototype.use = function (e) {
        e.call(this, this);
        return this;
      };

      u.prototype.parse = function (e, t) {
        this.options = a.extend({}, this.options, t);
        var n = this.parser.parse(e, this.options);
        o(n, "parser", this.parser);
        return n;
      };

      u.prototype.compile = function (e, t) {
        this.options = a.extend({}, this.options, t);
        var n = this.compiler.compile(e, this.options);
        o(n, "compiler", this.compiler);
        return n;
      };

      e.exports = u;
      e.exports.Compiler = i;
      e.exports.Parser = s;
    },
    "./node_modules/snapdragon/lib/compiler.js":
    /*!*************************************************!*\
      !*** ./node_modules/snapdragon/lib/compiler.js ***!
      \*************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      (function (t) {
        var r = n(
        /*! use */
        "./node_modules/use/index.js");
        var o = n(
        /*! define-property */
        "./node_modules/snapdragon/node_modules/define-property/index.js");
        var i = n(
        /*! debug */
        "./node_modules/debug/src/index.js")("snapdragon:compiler");
        var s = n(
        /*! ./utils */
        "./node_modules/snapdragon/lib/utils.js");

        function a(e, n) {
          i("initializing", t);
          this.options = s.extend({
            source: "string"
          }, e);
          this.state = n || {};
          this.compilers = {};
          this.output = "";
          this.set("eos", function (e) {
            return this.emit(e.val, e);
          });
          this.set("noop", function (e) {
            return this.emit(e.val, e);
          });
          this.set("bos", function (e) {
            return this.emit(e.val, e);
          });
          r(this);
        }

        a.prototype = {
          error: function (e, t) {
            var n = t.position || {
              start: {
                column: 0
              }
            };
            var r = this.options.source + " column:" + n.start.column + ": " + e;
            var o = new Error(r);
            o.reason = e;
            o.column = n.start.column;
            o.source = this.pattern;

            if (!this.options.silent) {
              throw o;
            }

            this.errors.push(o);
          },
          define: function (e, t) {
            o(this, e, t);
            return this;
          },
          emit: function (e, t) {
            this.output += e;
            return e;
          },
          set: function (e, t) {
            this.compilers[e] = t;
            return this;
          },
          get: function (e) {
            return this.compilers[e];
          },
          prev: function (e) {
            return this.ast.nodes[this.idx - (e || 1)] || {
              type: "bos",
              val: ""
            };
          },
          next: function (e) {
            return this.ast.nodes[this.idx + (e || 1)] || {
              type: "eos",
              val: ""
            };
          },
          visit: function (e, t, n) {
            var r = this.compilers[e.type];
            this.idx = n;

            if ("function" != typeof r) {
              throw this.error('compiler "' + e.type + '" is not registered', e);
            }

            return r.call(this, e, t, n);
          },
          mapVisit: function (e) {
            if (!Array.isArray(e)) {
              throw new TypeError("expected an array");
            }

            for (var t = e.length, n = -1; ++n < t;) {
              this.visit(e[n], e, n);
            }

            return this;
          },
          compile: function (e, t) {
            var r = s.extend({}, this.options, t);
            this.ast = e;
            this.parsingErrors = this.ast.errors;
            this.output = "";
            n(
            /*! ./source-maps */
            "./node_modules/snapdragon/lib/source-maps.js")(this);
            this.mapVisit(this.ast.nodes);
            this.applySourceMaps();
            this.map = "generator" === r.sourcemap ? this.map : this.map.toJSON();
            this.mapVisit(this.ast.nodes);
            return r.sourcemap ? this : this;
          }
        };
        e.exports = a;
      }).call(this, "/index.js");
    },
    "./node_modules/snapdragon/lib/parser.js":
    /*!***********************************************!*\
      !*** ./node_modules/snapdragon/lib/parser.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      (function (t) {
        var r = n(
        /*! use */
        "./node_modules/use/index.js");
        var o = n(
        /*! util */
        "util");
        var i = n(
        /*! map-cache */
        "./node_modules/map-cache/index.js");
        var s = n(
        /*! define-property */
        "./node_modules/snapdragon/node_modules/define-property/index.js");
        var a = n(
        /*! debug */
        "./node_modules/debug/src/index.js")("snapdragon:parser");
        var u = n(
        /*! ./position */
        "./node_modules/snapdragon/lib/position.js");
        var c = n(
        /*! ./utils */
        "./node_modules/snapdragon/lib/utils.js");

        function p(e) {
          a("initializing", t);
          this.options = c.extend({
            source: "string"
          }, e);
          this.init(this.options);
          r(this);
        }

        function l(e, t) {
          s(e, "visited", true);
          return e.visited ? e : e.nodes ? function (e, t) {
            var n = e.length;
            var r = -1;

            for (; ++r < n;) {
              l(e[r], t);
            }
          }(e.nodes, t) : t(e);
        }

        function d(e) {
          return function (e) {
            return e.nodes && e.nodes[0].type === e.type + ".open";
          }(e) && function (e) {
            return e.nodes && c.last(e.nodes).type === e.type + ".close";
          }(e);
        }

        p.prototype = {
          constructor: p,
          init: function (e) {
            this.orig = "";
            this.input = "";
            this.parsed = "";
            this.column = 1;
            this.line = 1;
            this.regex = new i();
            this.errors = this.errors || [];
            this.parsers = this.parsers || {};
            this.types = this.types || [];
            this.sets = this.sets || {};
            this.fns = this.fns || [];
            this.currentType = "root";
            var t = this.position();
            this.bos = t({
              type: "bos",
              val: ""
            });
            this.ast = {
              type: "root",
              errors: this.errors,
              nodes: [this.bos]
            };
            s(this.bos, "parent", this.ast);
            this.nodes = [this.ast];
            this.count = 0;
            this.setCount = 0;
            this.stack = [];
          },
          error: function (e, t) {
            var n = t.position || {
              start: {
                column: 0,
                line: 0
              }
            };
            var r = n.start.line;
            var o = n.start.column;
            var i = this.options.source;
            var s = new Error(i + " <line:" + r + " column:" + o + ">: " + e);
            s.source = i;
            s.reason = e;
            s.pos = n;

            if (!this.options.silent) {
              throw s;
            }

            this.errors.push(s);
          },
          define: function (e, t) {
            s(this, e, t);
            return this;
          },
          position: function () {
            var e = {
              line: this.line,
              column: this.column
            };
            var t = this;
            return function (n) {
              s(n, "position", new u(e, t));
              return n;
            };
          },
          set: function (e, t) {
            if (-1 === this.types.indexOf(e)) {
              this.types.push(e);
            }

            this.parsers[e] = t.bind(this);
            return this;
          },
          get: function (e) {
            return this.parsers[e];
          },
          push: function (e, t) {
            this.sets[e] = this.sets[e] || [];
            this.count++;
            this.stack.push(t);
            return this.sets[e].push(t);
          },
          pop: function (e) {
            this.sets[e] = this.sets[e] || [];
            this.count--;
            this.stack.pop();
            return this.sets[e].pop();
          },
          isInside: function (e) {
            this.sets[e] = this.sets[e] || [];
            return this.sets[e].length > 0;
          },
          isType: function (e, t) {
            return e && e.type === t;
          },
          prev: function (e) {
            return this.stack.length > 0 ? c.last(this.stack, e) : c.last(this.nodes, e);
          },
          consume: function (e) {
            this.input = this.input.substr(e);
          },
          updatePosition: function (e, t) {
            var n = e.match(/\n/g);

            if (n) {
              this.line += n.length;
            }

            var r = e.lastIndexOf("\n");
            this.column = ~r ? t - r : this.column + t;
            this.parsed += e;
            this.consume(t);
          },
          match: function (e) {
            var t = e.exec(this.input);

            if (t) {
              this.updatePosition(t[0], t[0].length);
              return t;
            }
          },
          capture: function (e, t) {
            this.regex.set(e, t);
            this.set(e, function () {
              var n = this.parsed;
              var r = this.position();
              var o = this.match(t);

              if (o && o[0]) {
                var i = this.prev();
                var a = r({
                  type: e,
                  val: o[0],
                  parsed: n,
                  rest: this.input
                });

                if (o[1]) {
                  a.inner = o[1];
                }

                s(a, "inside", this.stack.length > 0);
                s(a, "parent", i);
                i.nodes.push(a);
              }
            }.bind(this));
            return "function" == typeof t ? this.set.apply(this, arguments) : this;
          },
          capturePair: function (e, t, n, r) {
            this.sets[e] = this.sets[e] || [];
            this.set(e + ".open", function () {
              var n = this.parsed;
              var o = this.position();
              var i = this.match(t);

              if (i && i[0]) {
                var a = i[0];
                this.setCount++;
                this.specialChars = true;
                var u = o({
                  type: e + ".open",
                  val: a,
                  rest: this.input
                });

                if (undefined !== i[1]) {
                  u.inner = i[1];
                }

                var c = this.prev();
                var p = o({
                  type: e,
                  nodes: [u]
                });
                s(p, "rest", this.input);
                s(p, "parsed", n);
                s(p, "prefix", i[1]);
                s(p, "parent", c);
                s(u, "parent", p);

                if ("function" == typeof r) {
                  r.call(this, u, p);
                }

                this.push(e, p);
                c.nodes.push(p);
              }
            });
            this.set(e + ".close", function () {
              var t = this.position();
              var r = this.match(n);

              if (r && r[0]) {
                var o = this.pop(e);
                var i = t({
                  type: e + ".close",
                  rest: this.input,
                  suffix: r[1],
                  val: r[0]
                });

                if (!this.isType(o, e)) {
                  if (this.options.strict) {
                    throw new Error('missing opening "' + e + '"');
                  }

                  this.setCount--;
                  i.escaped = true;
                  return i;
                }

                o.escaped = true;

                if ("\\" === i.suffix) {
                  o.escaped = true;
                  i.escaped = true;
                }

                o.nodes.push(i);
                s(i, "parent", o);
              }
            });
            return this;
          },
          eos: function () {
            var e = this.position();

            if (!this.input) {
              for (var t = this.prev(); "root" !== t.type && !t.visited;) {
                if (true === this.options.strict) {
                  throw new SyntaxError("invalid syntax:" + o.inspect(t, null, 2));
                }

                t.parent.escaped = true;

                if (!d(t)) {
                  t.parent.escaped = true;
                  t.escaped = true;
                }

                l(t, function (e) {
                  e.parent.escaped = true;

                  if (!d(e.parent)) {
                    e.parent.escaped = true;
                    e.escaped = true;
                  }
                });
                t = t.parent;
              }

              var n = e({
                type: "eos",
                val: this.append || ""
              });
              s(n, "parent", this.ast);
              return n;
            }
          },
          next: function () {
            for (var e, t = this.parsed, n = this.types.length, r = -1; ++r < n;) {
              if (e = this.parsers[this.types[r]].call(this)) {
                s(e, "rest", this.input);
                s(e, "parsed", t);
                this.last = e;
                return e;
              }
            }
          },
          parse: function (e) {
            if ("string" != typeof e) {
              throw new TypeError("expected a string");
            }

            this.init(this.options);
            this.orig = e;
            this.input = e;
            var t = this;

            function n() {
              e = t.input;
              var n = t.next();

              if (n) {
                var r = t.prev();
                s(n, "parent", r);

                if (r) {
                  s(n, "parent", r);

                  if (r.nodes) {
                    r.nodes.push(n);
                  }
                }

                if (t.sets.hasOwnProperty(r.type)) {
                  t.currentType = r.type;
                }
              }

              if (t.input && e === t.input) {
                throw new Error('no parsers registered for: "' + t.input.slice(0, 5) + '"');
              }
            }

            for (; this.input;) {
              n();
            }

            if (this.stack.length && this.options.strict) {
              var r = this.stack.pop();
              throw this.error("missing opening " + r.type + ': "' + this.orig + '"');
            }

            var o = this.eos();

            if ("eos" !== this.prev().type) {
              this.ast.nodes.push(o);
            }

            return this.ast;
          }
        };
        e.exports = p;
      }).call(this, "/index.js");
    },
    "./node_modules/snapdragon/lib/position.js":
    /*!*************************************************!*\
      !*** ./node_modules/snapdragon/lib/position.js ***!
      \*************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! define-property */
      "./node_modules/snapdragon/node_modules/define-property/index.js");

      e.exports = function (e, t) {
        this.start = e;
        this.end = {
          line: t.line,
          column: t.column
        };
        r(this, "content", t.orig);
        r(this, "source", t.options.source);
      };
    },
    "./node_modules/snapdragon/lib/source-maps.js":
    /*!****************************************************!*\
      !*** ./node_modules/snapdragon/lib/source-maps.js ***!
      \****************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! fs */
      "fs");
      var o = n(
      /*! path */
      "path");
      var i = n(
      /*! define-property */
      "./node_modules/snapdragon/node_modules/define-property/index.js");
      var s = n(
      /*! ./utils */
      "./node_modules/snapdragon/lib/utils.js");

      e.exports = function (e) {
        i(e, "_comment", e.comment);
        e.map = new s.SourceMap.SourceMapGenerator();
        e.position = {
          line: 1,
          column: 1
        };
        e.content = {};
        e.files = {};

        for (var n in t) {
          i(e, n, t[n]);
        }
      };

      t.updatePosition = function (e) {
        var t = e.match(/\n/g);

        if (t) {
          this.position.line += t.length;
        }

        var n = e.lastIndexOf("\n");
        this.position.column = ~n ? e.length - n : this.position.column + e.length;
      };

      t.emit = function (e, t) {
        var n = t.position || {};
        var r = n.source;

        if (n.filepath) {
          r = s.unixify(n.filepath);
        }

        this.map.addMapping({
          source: r,
          generated: {
            line: this.position.line,
            column: Math.max(this.position.column - 1, 0)
          },
          original: {
            line: n.start.line,
            column: n.start.column - 1
          }
        });

        if (n.content) {
          this.addContent(r, n);
        }

        if (n.filepath) {
          this.addFile(r, n);
        }

        this.updatePosition(e);

        if (r) {
          if (n.filepath) {
            r = s.unixify(n.filepath);
          }

          this.map.addMapping({
            source: r,
            generated: {
              line: this.position.line,
              column: Math.max(this.position.column - 1, 0)
            },
            original: {
              line: n.start.line,
              column: n.start.column - 1
            }
          });

          if (n.content) {
            this.addContent(r, n);
          }

          if (n.filepath) {
            this.addFile(r, n);
          }

          this.updatePosition(e);
          this.output += e;
        }

        return e;
      };

      t.addFile = function (e, t) {
        if ("string" == typeof t.content) {
          if (!Object.prototype.hasOwnProperty.call(this.files, e)) {
            this.files[e] = t.content;
          }
        }
      };

      t.addContent = function (e, t) {
        if ("string" == typeof t.content) {
          if (!Object.prototype.hasOwnProperty.call(this.content, e)) {
            this.map.setSourceContent(e, t.content);
          }
        }
      };

      t.applySourceMaps = function () {
        Object.keys(this.files).forEach(function (e) {
          var t = this.files[e];
          this.map.setSourceContent(e, t);

          if (true === this.options.inputSourcemaps) {
            var n = s.sourceMapResolve.resolveSync(t, e, r.readFileSync);

            if (n) {
              var i = new s.SourceMap.SourceMapConsumer(n.map);
              var a = n.sourcesRelativeTo;
              this.map.applySourceMap(i, e, s.unixify(o.dirname(a)));
            }
          }
        }, this);
      };

      t.comment = function (e) {
        return /^# sourceMappingURL=/.test(e.comment) ? this.emit("", e.position) : this._comment(e);
      };
    },
    "./node_modules/snapdragon/lib/utils.js":
    /*!**********************************************!*\
      !*** ./node_modules/snapdragon/lib/utils.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      t.extend = n(
      /*! extend-shallow */
      "./node_modules/snapdragon/node_modules/extend-shallow/index.js");
      t.SourceMap = n(
      /*! source-map */
      "./node_modules/source-map/source-map.js");
      t.sourceMapResolve = n(
      /*! source-map-resolve */
      "./node_modules/source-map-resolve/lib/source-map-resolve-node.js");

      t.unixify = function (e) {
        return e.split(/\\+/).join("/");
      };

      t.isString = function (e) {
        return e && "string" == typeof e;
      };

      t.arrayify = function (e) {
        return "string" == typeof e ? [e] : e ? Array.isArray(e) ? e : [e] : [];
      };

      t.last = function (e, t) {
        return e[e.length - (t || 1)];
      };
    },
    "./node_modules/snapdragon/node_modules/define-property/index.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/snapdragon/node_modules/define-property/index.js ***!
      \***********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/snapdragon/node_modules/extend-shallow/index.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/snapdragon/node_modules/extend-shallow/index.js ***!
      \**********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");

      function o(e, t) {
        for (var n in t) {
          if (i(t, n)) {
            e[n] = t[n];
          }
        }
      }

      function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      e.exports = function (e) {
        if (!r(e)) {
          e = {};
        }

        for (var t = arguments.length, n = 1; n < t; n++) {
          var i = arguments[n];

          if (r(i)) {
            o(e, i);
          }
        }

        return e;
      };
    },
    "./node_modules/source-map-resolve/lib/decode-uri-component.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/source-map-resolve/lib/decode-uri-component.js ***!
      \*********************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! decode-uri-component */
      "./node_modules/decode-uri-component/index.js");

      e.exports = function (e) {
        return r(e.replace(/\+/g, "%2B"));
      };
    },
    "./node_modules/source-map-resolve/lib/resolve-url.js":
    /*!************************************************************!*\
      !*** ./node_modules/source-map-resolve/lib/resolve-url.js ***!
      \************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! url */
      "url");

      e.exports = function () {
        return Array.prototype.reduce.call(arguments, function (e, t) {
          return r.resolve(e, t);
        });
      };
    },
    "./node_modules/source-map-resolve/lib/source-map-resolve-node.js":
    /*!************************************************************************!*\
      !*** ./node_modules/source-map-resolve/lib/source-map-resolve-node.js ***!
      \************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! source-map-url */
      "./node_modules/source-map-url/source-map-url.js");
      var o = n(
      /*! ./resolve-url */
      "./node_modules/source-map-resolve/lib/resolve-url.js");
      var i = n(
      /*! ./decode-uri-component */
      "./node_modules/source-map-resolve/lib/decode-uri-component.js");
      var s = n(
      /*! urix */
      "./node_modules/urix/index.js");
      var a = n(
      /*! atob */
      "./node_modules/atob/node-atob.js");

      function u(e, t, n) {
        setImmediate(function () {
          e(t, n);
        });
      }

      function c(e, t) {
        try {
          return JSON.parse(e.replace(/^\)\]\}'/, ""));
        } catch (e) {
          e.sourceMapData = t;
          throw e;
        }
      }

      function p(e, t, n) {
        var r = i(t);

        try {
          return String(e(r));
        } catch (e) {
          e.sourceMapData = n;
          throw e;
        }
      }

      function l(e, t, n, r) {
        var o;

        try {
          o = m(e, t);
        } catch (e) {
          return u(r, e);
        }

        if (!o || o.map) {
          return u(r, null, o);
        }

        n(i(o.url), function (e, t) {
          if (e) {
            e.sourceMapData = o;
            return r(e);
          }

          o.map = String(t);

          try {
            o.map = c(o.map, o);
          } catch (e) {
            return r(e);
          }

          r(null, o);
        });
      }

      function d(e, t, n) {
        var r = m(e, t);
        r.map = p(n, r.url, r);

        if (!(!r || r.map)) {
          r.map = p(n, r.url, r);
          r.map = c(r.map, r);
        }

        return r;
      }

      var f = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/;
      var h = /^(?:application|text)\/json$/;

      function m(e, t) {
        t = s(t);
        var n = r.getFrom(e);

        if (!n) {
          return null;
        }

        var i = n.match(f);

        if (i) {
          var u = i[1];
          var p = i[2] || "";
          var l = i[3] || "";
          var d = {
            sourceMappingURL: n,
            url: null,
            sourcesRelativeTo: t,
            map: l
          };

          if (!h.test(u)) {
            var m = new Error("Unuseful data uri mime type: " + (u || "text/plain"));
            m.sourceMapData = d;
            throw m;
          }

          d.map = c(";base64" === p ? a(l) : decodeURIComponent(l), d);
          return d;
        }

        var y = o(t, n);
        return {
          sourceMappingURL: n,
          url: y,
          sourcesRelativeTo: y,
          map: null
        };
      }

      function y(e, t, n, r, o) {
        o = r;

        if ("function" == typeof r) {
          o = r;
          r = {};
        }

        var s = e.sources ? e.sources.length : 0;
        var a = {
          sourcesResolved: [],
          sourcesContent: []
        };

        if (0 !== s) {
          var c = function () {
            if (0 === --s) {
              o(null, a);
            }
          };

          b(e, t, r, function (e, t, r) {
            a.sourcesResolved[r] = e;

            if ("string" == typeof t) {
              a.sourcesContent[r] = t;
              u(c, null);
            } else {
              var o = i(e);
              n(o, function (e, t) {
                a.sourcesContent[r] = e || String(t);
                c();
              });
            }
          });
        } else {
          u(o, null, a);
        }
      }

      function g(e, t, n, r) {
        var o = {
          sourcesResolved: [],
          sourcesContent: []
        };
        b(e, t, r, function (e, t, r) {
          o.sourcesResolved[r] = e;

          if (null !== n) {
            if ("string" == typeof t) {
              o.sourcesContent[r] = t;
            } else {
              var s = i(e);

              try {
                o.sourcesContent[r] = String(n(s));
              } catch (e) {
                o.sourcesContent[r] = e;
              }
            }
          }
        });
        return e.sources && 0 !== e.sources.length ? o : o;
      }

      var v = /\/?$/;

      function b(e, t, n, r) {
        var i;
        n = n || {};
        t = s(t);

        for (var a = 0, u = e.sources.length; a < u; a++) {
          i = null;

          if ("string" == typeof n.sourceRoot) {
            i = n.sourceRoot;
          } else {
            if ("string" == typeof e.sourceRoot && false !== n.sourceRoot) {
              i = e.sourceRoot;
            }
          }

          r(null === i || "" === i ? o(t, e.sources[a]) : o(t, i.replace(v, "/"), e.sources[a]), (e.sourcesContent || [])[a], a);
        }
      }

      e.exports = {
        resolveSourceMap: l,
        resolveSourceMapSync: d,
        resolveSources: y,
        resolveSourcesSync: g,
        resolve: function (e, t, n, r, o) {
          o = r;

          if ("function" == typeof r) {
            o = r;
            r = {};
          }

          if (null === e) {
            var s = {
              sourceMappingURL: null,
              url: t,
              sourcesRelativeTo: t,
              map: null
            };
            var a = i(t);
            n(a, function (e, t) {
              if (e) {
                e.sourceMapData = s;
                return o(e);
              }

              s.map = String(t);

              try {
                s.map = c(s.map, s);
              } catch (e) {
                return o(e);
              }

              u(s);
            });
          } else {
            l(e, t, n, function (e, t) {
              u(t)
              return e ? o(e) : t ? undefined : o(null, null);
            });
          }

          function u(e) {
            y(e.map, e.sourcesRelativeTo, n, r, function (t, n) {
              if (t) {
                return o(t);
              }

              e.sourcesResolved = n.sourcesResolved;
              e.sourcesContent = n.sourcesContent;
              o(null, e);
            });
          }
        },
        resolveSync: function (e, t, n, r) {
          var o;

          if (null === e) {
            (o = {
              sourceMappingURL: null,
              url: t,
              sourcesRelativeTo: t,
              map: null
            }).map = p(n, t, o);
            o.map = c(o.map, o);
          } else {
            if (!(o = d(e, t, n))) {
              return null;
            }
          }

          var i = g(o.map, o.sourcesRelativeTo, n, r);
          o.sourcesResolved = i.sourcesResolved;
          o.sourcesContent = i.sourcesContent;
          return o;
        },
        parseMapToJSON: c
      };
    },
    "./node_modules/source-map-url/source-map-url.js":
    /*!*******************************************************!*\
      !*** ./node_modules/source-map-url/source-map-url.js ***!
      \*******************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r;
      var o;

      if (!(undefined === (o = "function" == typeof (r = function () {
        var e = /[#@] sourceMappingURL=([^\s'"]*)/;
        var t = RegExp("(?:/\\*(?:\\s*\r?\n(?://)?)?(?:" + e.source + ")\\s*\\*/|//(?:" + e.source + "))\\s*");
        return {
          regex: t,
          _innerRegex: e,
          getFrom: function (e) {
            var n = e.match(t);
            return n ? n[1] || n[2] || "" : null;
          },
          existsIn: function (e) {
            return t.test(e);
          },
          removeFrom: function (e) {
            return e.replace(t, "");
          },
          insertBefore: function (e, n) {
            var r = e.match(t);
            return r ? e.slice(0, r.index) + n + e.slice(r.index) : e + n;
          }
        };
      }) ? r.call(t, n, t, e) : r))) {
        e.exports = o;
      }
    },
    "./node_modules/source-map/lib/array-set.js":
    /*!**************************************************!*\
      !*** ./node_modules/source-map/lib/array-set.js ***!
      \**************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./util */
      "./node_modules/source-map/lib/util.js");
      var o = Object.prototype.hasOwnProperty;
      var i = "undefined" != typeof Map;

      function s() {
        this._array = [];
        this._set = i ? new Map() : Object.create(null);
      }

      s.fromArray = function (e, t) {
        for (var n = new s(), r = 0, o = e.length; r < o; r++) {
          n.add(e[r], t);
        }

        return n;
      };

      s.prototype.size = function () {
        return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
      };

      s.prototype.add = function (e, t) {
        var n = i ? e : r.toSetString(e);
        var s = i ? this.has(e) : o.call(this._set, n);
        var a = this._array.length;

        if (!(s && !t)) {
          this._array.push(e);
        }

        if (!s) {
          if (i) {
            this._set.set(e, a);
          } else {
            this._set[n] = a;
          }
        }
      };

      s.prototype.has = function (e) {
        if (i) {
          return this._set.has(e);
        }

        var t = r.toSetString(e);
        return o.call(this._set, t);
      };

      s.prototype.indexOf = function (e) {
        if (i) {
          var t = this._set.get(e);

          if (t >= 0) {
            return t;
          }
        } else {
          var n = r.toSetString(e);

          if (o.call(this._set, n)) {
            return this._set[n];
          }
        }

        throw new Error('"' + e + '" is not in the set.');
      };

      s.prototype.at = function (e) {
        if (e >= 0 && e < this._array.length) {
          return this._array[e];
        }

        throw new Error("No element indexed by " + e);
      };

      s.prototype.toArray = function () {
        return this._array.slice();
      };

      t.ArraySet = s;
    },
    "./node_modules/source-map/lib/base64-vlq.js":
    /*!***************************************************!*\
      !*** ./node_modules/source-map/lib/base64-vlq.js ***!
      \***************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./base64 */
      "./node_modules/source-map/lib/base64.js");

      t.encode = function (e) {
        var t;
        var n = "";

        var o = function (e) {
          return e < 0 ? 1 + (-e << 1) : 0 + (e << 1);
        }(e);

        do {
          t = 31 & o;

          if ((o >>>= 5) > 0) {
            t |= 32;
          }

          n += r.encode(t);
        } while (o > 0);

        return n;
      };

      t.decode = function (e, t, n) {
        var o;
        var i;
        var s;
        var a;
        var u = e.length;
        var c = 0;
        var p = 0;

        do {
          if (t >= u) {
            throw new Error("Expected more digits in base 64 VLQ value.");
          }

          if (-1 === (i = r.decode(e.charCodeAt(t++)))) {
            throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
          }

          o = !!(32 & i);
          c += (i &= 31) << p;
          p += 5;
        } while (o);

        a = (s = c) >> 1;
        n.value = 1 == (1 & s) ? -a : a;
        n.rest = t;
      };
    },
    "./node_modules/source-map/lib/base64.js":
    /*!***********************************************!*\
      !*** ./node_modules/source-map/lib/base64.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t) {
      var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");

      t.encode = function (e) {
        if (0 <= e && e < n.length) {
          return n[e];
        }

        throw new TypeError("Must be between 0 and 63: " + e);
      };

      t.decode = function (e) {
        return 65 <= e && e <= 90 ? e - 65 : 97 <= e && e <= 122 ? e - 97 + 26 : 48 <= e && e <= 57 ? e - 48 + 52 : 43 == e ? 62 : 47 == e ? 63 : -1;
      };
    },
    "./node_modules/source-map/lib/binary-search.js":
    /*!******************************************************!*\
      !*** ./node_modules/source-map/lib/binary-search.js ***!
      \******************************************************/

    /*! no static exports found */
    function (e, t) {
      t.GREATEST_LOWER_BOUND = 1;
      t.LEAST_UPPER_BOUND = 2;

      t.search = function (e, n, r, o) {
        if (0 === n.length) {
          return -1;
        }

        var i = function e(n, r, o, i, s, a) {
          var u = Math.floor((r - n) / 2) + n;
          var c = s(o, i[u], true);
          return 0 === c ? u : c > 0 ? r - u > 1 ? e(u, r, o, i, s, a) : a == t.LEAST_UPPER_BOUND ? r < i.length ? r : -1 : u : u - n > 1 ? e(n, u, o, i, s, a) : a == t.LEAST_UPPER_BOUND ? u : n < 0 ? -1 : n;
        }(-1, n.length, e, n, r, o || t.GREATEST_LOWER_BOUND);

        if (i < 0) {
          return -1;
        }

        for (; i - 1 >= 0 && 0 === r(n[i], n[i - 1], true);) {
          --i;
        }

        return i;
      };
    },
    "./node_modules/source-map/lib/mapping-list.js":
    /*!*****************************************************!*\
      !*** ./node_modules/source-map/lib/mapping-list.js ***!
      \*****************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./util */
      "./node_modules/source-map/lib/util.js");

      function o() {
        this._array = [];
        this._sorted = true;
        this._last = {
          generatedLine: -1,
          generatedColumn: 0
        };
      }

      o.prototype.unsortedForEach = function (e, t) {
        this._array.forEach(e, t);
      };

      o.prototype.add = function (e) {
        var t;
        var n;
        var o;
        var i;
        var s;
        var a;
        t = this._last;
        n = e;
        o = t.generatedLine;
        i = n.generatedLine;
        s = t.generatedColumn;
        a = n.generatedColumn;
        this._last = e;
        this._sorted = false;

        if (i > o || i == o && a >= s || r.compareByGeneratedPositionsInflated(t, n) <= 0) {
          this._last = e;

          this._array.push(e);
        } else {
          this._sorted = false;

          this._array.push(e);
        }
      };

      o.prototype.toArray = function () {
        this._array.sort(r.compareByGeneratedPositionsInflated);

        if (!this._sorted) {
          this._array.sort(r.compareByGeneratedPositionsInflated);

          this._sorted = true;
        }

        return this._array;
      };

      t.MappingList = o;
    },
    "./node_modules/source-map/lib/quick-sort.js":
    /*!***************************************************!*\
      !*** ./node_modules/source-map/lib/quick-sort.js ***!
      \***************************************************/

    /*! no static exports found */
    function (e, t) {
      function n(e, t, n) {
        var r = e[t];
        e[t] = e[n];
        e[n] = r;
      }

      function r(e, t, o, i) {
        if (o < i) {
          var s = o - 1;
          p = o;
          l = i;
          n(e, Math.round(p + Math.random() * (l - p)), i);

          for (var a = e[i], u = o; u < i; u++) {
            if (t(e[u], a) <= 0) {
              n(e, s += 1, u);
            }
          }

          n(e, s + 1, u);
          var c = s + 1;
          r(e, t, o, c - 1);
          r(e, t, c + 1, i);
        }

        var p;
        var l;
      }

      t.quickSort = function (e, t) {
        r(e, t, 0, e.length - 1);
      };
    },
    "./node_modules/source-map/lib/source-map-consumer.js":
    /*!************************************************************!*\
      !*** ./node_modules/source-map/lib/source-map-consumer.js ***!
      \************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./util */
      "./node_modules/source-map/lib/util.js");
      var o = n(
      /*! ./binary-search */
      "./node_modules/source-map/lib/binary-search.js");
      var i = n(
      /*! ./array-set */
      "./node_modules/source-map/lib/array-set.js").ArraySet;
      var s = n(
      /*! ./base64-vlq */
      "./node_modules/source-map/lib/base64-vlq.js");
      var a = n(
      /*! ./quick-sort */
      "./node_modules/source-map/lib/quick-sort.js").quickSort;

      function u(e) {
        var t = e;

        if ("string" == typeof e) {
          t = JSON.parse(e.replace(/^\)\]\}'/, ""));
        }

        return null != t.sections ? new l(t) : new c(t);
      }

      function c(e) {
        var t = e;

        if ("string" == typeof e) {
          t = JSON.parse(e.replace(/^\)\]\}'/, ""));
        }

        var n = r.getArg(t, "version");
        var o = r.getArg(t, "sources");
        var s = r.getArg(t, "names", []);
        var a = r.getArg(t, "sourceRoot", null);
        var u = r.getArg(t, "sourcesContent", null);
        var c = r.getArg(t, "mappings");
        var p = r.getArg(t, "file", null);

        if (n != this._version) {
          throw new Error("Unsupported version: " + n);
        }

        o = o.map(String).map(r.normalize).map(function (e) {
          return a && r.isAbsolute(a) && r.isAbsolute(e) ? r.relative(a, e) : e;
        });
        this._names = i.fromArray(s.map(String), true);
        this._sources = i.fromArray(o, true);
        this.sourceRoot = a;
        this.sourcesContent = u;
        this._mappings = c;
        this.file = p;
      }

      function p() {
        this.generatedLine = 0;
        this.generatedColumn = 0;
        this.source = null;
        this.originalLine = null;
        this.originalColumn = null;
        this.name = null;
      }

      function l(e) {
        var t = e;

        if ("string" == typeof e) {
          t = JSON.parse(e.replace(/^\)\]\}'/, ""));
        }

        var n = r.getArg(t, "version");
        var o = r.getArg(t, "sections");

        if (n != this._version) {
          throw new Error("Unsupported version: " + n);
        }

        this._sources = new i();
        this._names = new i();
        var s = {
          line: -1,
          column: 0
        };
        this._sections = o.map(function (e) {
          if (e.url) {
            throw new Error("Support for url field in sections not implemented.");
          }

          var t = r.getArg(e, "offset");
          var n = r.getArg(t, "line");
          var o = r.getArg(t, "column");

          if (n < s.line || n === s.line && o < s.column) {
            throw new Error("Section offsets must be ordered and non-overlapping.");
          }

          s = t;
          return {
            generatedOffset: {
              generatedLine: n + 1,
              generatedColumn: o + 1
            },
            consumer: new u(r.getArg(e, "map"))
          };
        });
      }

      u.fromSourceMap = function (e) {
        return c.fromSourceMap(e);
      };

      u.prototype._version = 3;
      u.prototype.__generatedMappings = null;
      Object.defineProperty(u.prototype, "_generatedMappings", {
        get: function () {
          if (!this.__generatedMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }

          return this.__generatedMappings;
        }
      });
      u.prototype.__originalMappings = null;
      Object.defineProperty(u.prototype, "_originalMappings", {
        get: function () {
          if (!this.__originalMappings) {
            this._parseMappings(this._mappings, this.sourceRoot);
          }

          return this.__originalMappings;
        }
      });

      u.prototype._charIsMappingSeparator = function (e, t) {
        var n = e.charAt(t);
        return ";" === n || "," === n;
      };

      u.prototype._parseMappings = function (e, t) {
        throw new Error("Subclasses must implement _parseMappings");
      };

      u.GENERATED_ORDER = 1;
      u.ORIGINAL_ORDER = 2;
      u.GREATEST_LOWER_BOUND = 1;
      u.LEAST_UPPER_BOUND = 2;

      u.prototype.eachMapping = function (e, t, n) {
        var o;
        var i = t || null;

        switch (n || u.GENERATED_ORDER) {
          case u.GENERATED_ORDER:
            o = this._generatedMappings;
            break;

          case u.ORIGINAL_ORDER:
            o = this._originalMappings;
            break;

          default:
            throw new Error("Unknown order of iteration.");
        }

        var s = this.sourceRoot;
        o.map(function (e) {
          var t = null === e.source ? null : this._sources.at(e.source);

          if (null != t && null != s) {
            t = r.join(s, t);
          }

          return {
            source: t,
            generatedLine: e.generatedLine,
            generatedColumn: e.generatedColumn,
            originalLine: e.originalLine,
            originalColumn: e.originalColumn,
            name: null === e.name ? null : this._names.at(e.name)
          };
        }, this).forEach(e, i);
      };

      u.prototype.allGeneratedPositionsFor = function (e) {
        var t = r.getArg(e, "line");
        var n = {
          source: r.getArg(e, "source"),
          originalLine: t,
          originalColumn: r.getArg(e, "column", 0)
        };

        if (null != this.sourceRoot) {
          n.source = r.relative(this.sourceRoot, n.source);
        }

        if (!this._sources.has(n.source)) {
          return [];
        }

        n.source = this._sources.indexOf(n.source);
        var i = [];

        var s = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, o.LEAST_UPPER_BOUND);

        if (s >= 0) {
          var a = this._originalMappings[s];

          if (undefined === e.column) {
            for (var u = a.originalLine; a && a.originalLine === u;) {
              i.push({
                line: r.getArg(a, "generatedLine", null),
                column: r.getArg(a, "generatedColumn", null),
                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
              });
              a = this._originalMappings[++s];
            }
          } else {
            for (var c = a.originalColumn; a && a.originalLine === t && a.originalColumn == c;) {
              i.push({
                line: r.getArg(a, "generatedLine", null),
                column: r.getArg(a, "generatedColumn", null),
                lastColumn: r.getArg(a, "lastGeneratedColumn", null)
              });
              a = this._originalMappings[++s];
            }
          }
        }

        return i;
      };

      t.SourceMapConsumer = u;
      c.prototype = Object.create(u.prototype);
      c.prototype.consumer = u;

      c.fromSourceMap = function (e) {
        var t = Object.create(c.prototype);
        var n = t._names = i.fromArray(e._names.toArray(), true);
        var o = t._sources = i.fromArray(e._sources.toArray(), true);
        t.sourceRoot = e._sourceRoot;
        t.sourcesContent = e._generateSourcesContent(t._sources.toArray(), t.sourceRoot);
        t.file = e._file;

        for (var s = e._mappings.toArray().slice(), u = t.__generatedMappings = [], l = t.__originalMappings = [], d = 0, f = s.length; d < f; d++) {
          var h = s[d];
          var m = new p();
          m.generatedLine = h.generatedLine;
          m.generatedColumn = h.generatedColumn;
          m.source = o.indexOf(h.source);
          m.originalLine = h.originalLine;
          m.originalColumn = h.originalColumn;

          if (h.name) {
            m.name = n.indexOf(h.name);
          }

          if (h.source) {
            m.source = o.indexOf(h.source);
            m.originalLine = h.originalLine;
            m.originalColumn = h.originalColumn;

            if (h.name) {
              m.name = n.indexOf(h.name);
            }

            l.push(m);
          }

          u.push(m);
        }

        a(t.__originalMappings, r.compareByOriginalPositions);
        return t;
      };

      c.prototype._version = 3;
      Object.defineProperty(c.prototype, "sources", {
        get: function () {
          return this._sources.toArray().map(function (e) {
            return null != this.sourceRoot ? r.join(this.sourceRoot, e) : e;
          }, this);
        }
      });

      c.prototype._parseMappings = function (e, t) {
        for (var n, o, i, u, c, l = 1, d = 0, f = 0, h = 0, m = 0, y = 0, g = e.length, v = 0, b = {}, x = {}, j = [], _ = []; v < g;) {
          if (";" === e.charAt(v)) {
            l++;
            v++;
            d = 0;
          } else {
            if ("," === e.charAt(v)) {
              v++;
            } else {
              (n = new p()).generatedLine = l;

              for (u = v; u < g && !this._charIsMappingSeparator(e, u); u++) {
                ;
              }

              if (i = b[o = e.slice(v, u)]) {
                v += o.length;
              } else {
                for (i = []; v < u;) {
                  s.decode(e, v, x);
                  c = x.value;
                  v = x.rest;
                  i.push(c);
                }

                if (2 === i.length) {
                  throw new Error("Found a source, but no line and column");
                }

                if (3 === i.length) {
                  throw new Error("Found a source and line, but no column");
                }

                b[o] = i;
              }

              n.generatedColumn = d + i[0];
              d = n.generatedColumn;
              n.source = m + i[1];
              m += i[1];
              n.originalLine = f + i[2];
              f = n.originalLine;
              n.originalLine += 1;
              n.originalColumn = h + i[3];
              h = n.originalColumn;
              n.name = y + i[4];

              if (i.length > 1) {
                n.source = m + i[1];
                m += i[1];
                n.originalLine = f + i[2];
                f = n.originalLine;
                n.originalLine += 1;
                n.originalColumn = h + i[3];
                h = n.originalColumn;

                if (i.length > 4) {
                  y += i[4];
                }
              }

              _.push(n);

              if ("number" == typeof n.originalLine) {
                j.push(n);
              }
            }
          }
        }

        a(_, r.compareByGeneratedPositionsDeflated);
        this.__generatedMappings = _;
        a(j, r.compareByOriginalPositions);
        this.__originalMappings = j;
      };

      c.prototype._findMapping = function (e, t, n, r, i, s) {
        if (e[n] <= 0) {
          throw new TypeError("Line must be greater than or equal to 1, got " + e[n]);
        }

        if (e[r] < 0) {
          throw new TypeError("Column must be greater than or equal to 0, got " + e[r]);
        }

        return o.search(e, t, i, s);
      };

      c.prototype.computeColumnSpans = function () {
        for (var e = 0; e < this._generatedMappings.length; ++e) {
          var t = this._generatedMappings[e];

          if (e + 1 < this._generatedMappings.length) {
            var n = this._generatedMappings[e + 1];

            if (t.generatedLine === n.generatedLine) {
              t.lastGeneratedColumn = n.generatedColumn - 1;
              continue;
            }
          }

          t.lastGeneratedColumn = 1 / 0;
        }
      };

      c.prototype.originalPositionFor = function (e) {
        var t = {
          generatedLine: r.getArg(e, "line"),
          generatedColumn: r.getArg(e, "column")
        };

        var n = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", r.compareByGeneratedPositionsDeflated, r.getArg(e, "bias", u.GREATEST_LOWER_BOUND));

        if (n >= 0) {
          var o = this._generatedMappings[n];

          if (o.generatedLine === t.generatedLine) {
            var i = r.getArg(o, "source", null);
            i = this._sources.at(i);

            if (null !== i) {
              i = this._sources.at(i);

              if (null != this.sourceRoot) {
                i = r.join(this.sourceRoot, i);
              }
            }

            var s = r.getArg(o, "name", null);

            if (null !== s) {
              s = this._names.at(s);
            }

            return {
              source: i,
              line: r.getArg(o, "originalLine", null),
              column: r.getArg(o, "originalColumn", null),
              name: s
            };
          }
        }

        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };

      c.prototype.hasContentsOfAllSources = function () {
        return !!this.sourcesContent && this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (e) {
          return null == e;
        });
      };

      c.prototype.sourceContentFor = function (e, t) {
        if (!this.sourcesContent) {
          return null;
        }

        if (null != this.sourceRoot) {
          e = r.relative(this.sourceRoot, e);
        }

        if (this._sources.has(e)) {
          return this.sourcesContent[this._sources.indexOf(e)];
        }

        var n;

        if (null != this.sourceRoot && (n = r.urlParse(this.sourceRoot))) {
          var o = e.replace(/^file:\/\//, "");

          if ("file" == n.scheme && this._sources.has(o)) {
            return this.sourcesContent[this._sources.indexOf(o)];
          }

          if ((!n.path || "/" == n.path) && this._sources.has("/" + e)) {
            return this.sourcesContent[this._sources.indexOf("/" + e)];
          }
        }

        if (t) {
          return null;
        }

        throw new Error('"' + e + '" is not in the SourceMap.');
      };

      c.prototype.generatedPositionFor = function (e) {
        var t = r.getArg(e, "source");

        if (null != this.sourceRoot) {
          t = r.relative(this.sourceRoot, t);
        }

        if (!this._sources.has(t)) {
          return {
            line: null,
            column: null,
            lastColumn: null
          };
        }

        var n = {
          source: t = this._sources.indexOf(t),
          originalLine: r.getArg(e, "line"),
          originalColumn: r.getArg(e, "column")
        };

        var o = this._findMapping(n, this._originalMappings, "originalLine", "originalColumn", r.compareByOriginalPositions, r.getArg(e, "bias", u.GREATEST_LOWER_BOUND));

        if (o >= 0) {
          var i = this._originalMappings[o];

          if (i.source === n.source) {
            return {
              line: r.getArg(i, "generatedLine", null),
              column: r.getArg(i, "generatedColumn", null),
              lastColumn: r.getArg(i, "lastGeneratedColumn", null)
            };
          }
        }

        return {
          line: null,
          column: null,
          lastColumn: null
        };
      };

      t.BasicSourceMapConsumer = c;
      l.prototype = Object.create(u.prototype);
      l.prototype.constructor = u;
      l.prototype._version = 3;
      Object.defineProperty(l.prototype, "sources", {
        get: function () {
          for (var e = [], t = 0; t < this._sections.length; t++) {
            for (var n = 0; n < this._sections[t].consumer.sources.length; n++) {
              e.push(this._sections[t].consumer.sources[n]);
            }
          }

          return e;
        }
      });

      l.prototype.originalPositionFor = function (e) {
        var t = {
          generatedLine: r.getArg(e, "line"),
          generatedColumn: r.getArg(e, "column")
        };
        var n = o.search(t, this._sections, function (e, t) {
          var n = e.generatedLine - t.generatedOffset.generatedLine;
          return n || e.generatedColumn - t.generatedOffset.generatedColumn;
        });
        var i = this._sections[n];
        return i ? i.consumer.originalPositionFor({
          line: t.generatedLine - (i.generatedOffset.generatedLine - 1),
          column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0),
          bias: e.bias
        }) : {
          source: null,
          line: null,
          column: null,
          name: null
        };
      };

      l.prototype.hasContentsOfAllSources = function () {
        return this._sections.every(function (e) {
          return e.consumer.hasContentsOfAllSources();
        });
      };

      l.prototype.sourceContentFor = function (e, t) {
        for (var n = 0; n < this._sections.length; n++) {
          var r = this._sections[n].consumer.sourceContentFor(e, true);

          if (r) {
            return r;
          }
        }

        if (t) {
          return null;
        }

        throw new Error('"' + e + '" is not in the SourceMap.');
      };

      l.prototype.generatedPositionFor = function (e) {
        for (var t = 0; t < this._sections.length; t++) {
          var n = this._sections[t];

          if (-1 !== n.consumer.sources.indexOf(r.getArg(e, "source"))) {
            var o = n.consumer.generatedPositionFor(e);

            if (o) {
              return {
                line: o.line + (n.generatedOffset.generatedLine - 1),
                column: o.column + (n.generatedOffset.generatedLine === o.line ? n.generatedOffset.generatedColumn - 1 : 0)
              };
            }
          }
        }

        return {
          line: null,
          column: null
        };
      };

      l.prototype._parseMappings = function (e, t) {
        this.__generatedMappings = [];
        this.__originalMappings = [];

        for (var n = 0; n < this._sections.length; n++) {
          for (var o = this._sections[n], i = o.consumer._generatedMappings, s = 0; s < i.length; s++) {
            var u = i[s];

            var c = o.consumer._sources.at(u.source);

            if (null !== o.consumer.sourceRoot) {
              c = r.join(o.consumer.sourceRoot, c);
            }

            this._sources.add(c);

            c = this._sources.indexOf(c);

            var p = o.consumer._names.at(u.name);

            this._names.add(p);

            p = this._names.indexOf(p);
            var l = {
              source: c,
              generatedLine: u.generatedLine + (o.generatedOffset.generatedLine - 1),
              generatedColumn: u.generatedColumn + (o.generatedOffset.generatedLine === u.generatedLine ? o.generatedOffset.generatedColumn - 1 : 0),
              originalLine: u.originalLine,
              originalColumn: u.originalColumn,
              name: p
            };

            this.__generatedMappings.push(l);

            if ("number" == typeof l.originalLine) {
              this.__originalMappings.push(l);
            }
          }
        }

        a(this.__generatedMappings, r.compareByGeneratedPositionsDeflated);
        a(this.__originalMappings, r.compareByOriginalPositions);
      };

      t.IndexedSourceMapConsumer = l;
    },
    "./node_modules/source-map/lib/source-map-generator.js":
    /*!*************************************************************!*\
      !*** ./node_modules/source-map/lib/source-map-generator.js ***!
      \*************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./base64-vlq */
      "./node_modules/source-map/lib/base64-vlq.js");
      var o = n(
      /*! ./util */
      "./node_modules/source-map/lib/util.js");
      var i = n(
      /*! ./array-set */
      "./node_modules/source-map/lib/array-set.js").ArraySet;
      var s = n(
      /*! ./mapping-list */
      "./node_modules/source-map/lib/mapping-list.js").MappingList;

      function a(e) {
        if (!e) {
          e = {};
        }

        this._file = o.getArg(e, "file", null);
        this._sourceRoot = o.getArg(e, "sourceRoot", null);
        this._skipValidation = o.getArg(e, "skipValidation", false);
        this._sources = new i();
        this._names = new i();
        this._mappings = new s();
        this._sourcesContents = null;
      }

      a.prototype._version = 3;

      a.fromSourceMap = function (e) {
        var t = e.sourceRoot;
        var n = new a({
          file: e.file,
          sourceRoot: t
        });
        e.eachMapping(function (e) {
          var r = {
            generated: {
              line: e.generatedLine,
              column: e.generatedColumn
            }
          };
          r.source = e.source;

          if (null != t) {
            r.source = o.relative(t, r.source);
          }

          r.original = {
            line: e.originalLine,
            column: e.originalColumn
          };

          if (null != e.source) {
            r.source = e.source;

            if (null != t) {
              r.source = o.relative(t, r.source);
            }

            r.original = {
              line: e.originalLine,
              column: e.originalColumn
            };

            if (null != e.name) {
              r.name = e.name;
            }
          }

          n.addMapping(r);
        });
        e.sources.forEach(function (t) {
          var r = e.sourceContentFor(t);

          if (null != r) {
            n.setSourceContent(t, r);
          }
        });
        return n;
      };

      a.prototype.addMapping = function (e) {
        var t = o.getArg(e, "generated");
        var n = o.getArg(e, "original", null);
        var r = o.getArg(e, "source", null);
        var i = o.getArg(e, "name", null);

        if (!this._skipValidation) {
          this._validateMapping(t, n, r, i);
        }

        r = String(r);

        if (null != r) {
          r = String(r);

          if (!this._sources.has(r)) {
            this._sources.add(r);
          }
        }

        i = String(i);

        if (null != i) {
          i = String(i);

          if (!this._names.has(i)) {
            this._names.add(i);
          }
        }

        this._mappings.add({
          generatedLine: t.line,
          generatedColumn: t.column,
          originalLine: null != n && n.line,
          originalColumn: null != n && n.column,
          source: r,
          name: i
        });
      };

      a.prototype.setSourceContent = function (e, t) {
        var n = e;

        if (null != this._sourceRoot) {
          n = o.relative(this._sourceRoot, n);
        }

        if (!this._sourcesContents) {
          this._sourcesContents = Object.create(null);
        }

        delete this._sourcesContents[o.toSetString(n)];

        if (null != t) {
          if (!this._sourcesContents) {
            this._sourcesContents = Object.create(null);
          }

          this._sourcesContents[o.toSetString(n)] = t;
        } else {
          if (this._sourcesContents) {
            if (0 === Object.keys(this._sourcesContents).length) {
              this._sourcesContents = null;
            }
          }
        }
      };

      a.prototype.applySourceMap = function (e, t, n) {
        var r = t;

        if (null == t) {
          if (null == e.file) {
            throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
          }

          r = e.file;
        }

        var s = this._sourceRoot;

        if (null != s) {
          r = o.relative(s, r);
        }

        var a = new i();
        var u = new i();

        this._mappings.unsortedForEach(function (t) {
          if (t.source === r && null != t.originalLine) {
            var i = e.originalPositionFor({
              line: t.originalLine,
              column: t.originalColumn
            });
            t.source = i.source;

            if (null != n) {
              t.source = o.join(n, t.source);
            }

            if (null != s) {
              t.source = o.relative(s, t.source);
            }

            t.originalLine = i.line;
            t.originalColumn = i.column;

            if (null != i.source) {
              t.source = i.source;

              if (null != n) {
                t.source = o.join(n, t.source);
              }

              if (null != s) {
                t.source = o.relative(s, t.source);
              }

              t.originalLine = i.line;
              t.originalColumn = i.column;

              if (null != i.name) {
                t.name = i.name;
              }
            }
          }

          var c = t.source;

          if (!(null == c || a.has(c))) {
            a.add(c);
          }

          var p = t.name;

          if (!(null == p || u.has(p))) {
            u.add(p);
          }
        }, this);

        this._sources = a;
        this._names = u;
        e.sources.forEach(function (t) {
          var r = e.sourceContentFor(t);

          if (null != n) {
            t = o.join(n, t);
          }

          if (null != s) {
            t = o.relative(s, t);
          }

          if (null != r) {
            if (null != n) {
              t = o.join(n, t);
            }

            if (null != s) {
              t = o.relative(s, t);
            }

            this.setSourceContent(t, r);
          }
        }, this);
      };

      a.prototype._validateMapping = function (e, t, n, r) {
        if (t && "number" != typeof t.line && "number" != typeof t.column) {
          throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
        }

        if ((!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0) || t || n || r) && !(e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && n)) {
          throw new Error("Invalid mapping: " + JSON.stringify({
            generated: e,
            source: n,
            original: t,
            name: r
          }));
        }
      };

      a.prototype._serializeMappings = function () {
        for (var e, t, n, i, s = 0, a = 1, u = 0, c = 0, p = 0, l = 0, d = "", f = this._mappings.toArray(), h = 0, m = f.length; h < m; h++) {
          e = "";

          if ((t = f[h]).generatedLine !== a) {
            for (s = 0; t.generatedLine !== a;) {
              e += ";";
              a++;
            }
          } else {
            if (h > 0) {
              if (!o.compareByGeneratedPositionsInflated(t, f[h - 1])) {
                continue;
              }

              e += ",";
            }
          }

          e += r.encode(t.generatedColumn - s);
          s = t.generatedColumn;
          i = this._sources.indexOf(t.source);
          e += r.encode(i - l);
          l = i;
          e += r.encode(t.originalLine - 1 - c);
          c = t.originalLine - 1;
          e += r.encode(t.originalColumn - u);
          u = t.originalColumn;
          n = this._names.indexOf(t.name);
          e += r.encode(n - p);

          if (null != t.source) {
            i = this._sources.indexOf(t.source);
            e += r.encode(i - l);
            l = i;
            e += r.encode(t.originalLine - 1 - c);
            c = t.originalLine - 1;
            e += r.encode(t.originalColumn - u);
            u = t.originalColumn;

            if (null != t.name) {
              p = n;
            }
          }

          d += e;
        }

        return d;
      };

      a.prototype._generateSourcesContent = function (e, t) {
        return e.map(function (e) {
          if (!this._sourcesContents) {
            return null;
          }

          if (null != t) {
            e = o.relative(t, e);
          }

          var n = o.toSetString(e);
          return Object.prototype.hasOwnProperty.call(this._sourcesContents, n) ? this._sourcesContents[n] : null;
        }, this);
      };

      a.prototype.toJSON = function () {
        var e = {
          version: this._version,
          sources: this._sources.toArray(),
          names: this._names.toArray(),
          mappings: this._serializeMappings()
        };

        if (null != this._file) {
          e.file = this._file;
        }

        if (null != this._sourceRoot) {
          e.sourceRoot = this._sourceRoot;
        }

        if (this._sourcesContents) {
          e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot);
        }

        return e;
      };

      a.prototype.toString = function () {
        return JSON.stringify(this.toJSON());
      };

      t.SourceMapGenerator = a;
    },
    "./node_modules/source-map/lib/source-node.js":
    /*!****************************************************!*\
      !*** ./node_modules/source-map/lib/source-node.js ***!
      \****************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! ./source-map-generator */
      "./node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
      var o = n(
      /*! ./util */
      "./node_modules/source-map/lib/util.js");
      var i = /(\r?\n)/;
      var s = "$$$isSourceNode$$$";

      function a(e, t, n, r, o) {
        this.children = [];
        this.sourceContents = {};
        this.line = null == e ? null : e;
        this.column = null == t ? null : t;
        this.source = null == n ? null : n;
        this.name = null == o ? null : o;
        this[s] = true;

        if (null != r) {
          this.add(r);
        }
      }

      a.fromStringWithSourceMap = function (e, t, n) {
        var r = new a();
        var s = e.split(i);
        var u = 0;

        var c = function () {
          return e() + (e() || "");

          function e() {
            return u < s.length ? s[u++] : undefined;
          }
        };

        var p = 1;
        var l = 0;
        var d = null;
        t.eachMapping(function (e) {
          if (null !== d) {
            if (!(p < e.generatedLine)) {
              var t = (n = s[u]).substr(0, e.generatedColumn - l);
              s[u] = n.substr(e.generatedColumn - l);
              l = e.generatedColumn;
              f(d, t);
              d = e
              return undefined;
            }

            f(d, c());
            p++;
            l = 0;
          }

          for (; p < e.generatedLine;) {
            r.add(c());
            p++;
          }

          if (l < e.generatedColumn) {
            var n = s[u];
            r.add(n.substr(0, e.generatedColumn));
            s[u] = n.substr(e.generatedColumn);
            l = e.generatedColumn;
          }

          d = e;
        }, this);

        if (d) {
          f(d, c());
        }

        if (u < s.length) {
          if (d) {
            f(d, c());
          }

          r.add(s.splice(u).join(""));
        }

        t.sources.forEach(function (e) {
          var i = t.sourceContentFor(e);

          if (null != n) {
            e = o.join(n, e);
          }

          if (null != i) {
            if (null != n) {
              e = o.join(n, e);
            }

            r.setSourceContent(e, i);
          }
        });
        return r;

        function f(e, t) {
          if (null === e || undefined === e.source) {
            r.add(t);
          } else {
            var i = n ? o.join(n, e.source) : e.source;
            r.add(new a(e.originalLine, e.originalColumn, i, t, e.name));
          }
        }
      };

      a.prototype.add = function (e) {
        if (Array.isArray(e)) {
          e.forEach(function (e) {
            this.add(e);
          }, this);
        } else {
          if (!e[s] && "string" != typeof e) {
            throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
          }

          if (e) {
            this.children.push(e);
          }
        }

        return this;
      };

      a.prototype.prepend = function (e) {
        if (Array.isArray(e)) {
          for (var t = e.length - 1; t >= 0; t--) {
            this.prepend(e[t]);
          }
        } else {
          if (!e[s] && "string" != typeof e) {
            throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
          }

          this.children.unshift(e);
        }

        return this;
      };

      a.prototype.walk = function (e) {
        for (var t, n = 0, r = this.children.length; n < r; n++) {
          if ((t = this.children[n])[s]) {
            t.walk(e);
          } else {
            if ("" !== t) {
              e(t, {
                source: this.source,
                line: this.line,
                column: this.column,
                name: this.name
              });
            }
          }
        }
      };

      a.prototype.join = function (e) {
        var t;
        var n;
        var r = this.children.length;

        if (r > 0) {
          t = [];

          for (n = 0; n < r - 1; n++) {
            t.push(this.children[n]);
            t.push(e);
          }

          t.push(this.children[n]);
          this.children = t;
        }

        return this;
      };

      a.prototype.replaceRight = function (e, t) {
        var n = this.children[this.children.length - 1];

        if (n[s]) {
          n.replaceRight(e, t);
        } else {
          if ("string" == typeof n) {
            this.children[this.children.length - 1] = n.replace(e, t);
          } else {
            this.children.push("".replace(e, t));
          }
        }

        return this;
      };

      a.prototype.setSourceContent = function (e, t) {
        this.sourceContents[o.toSetString(e)] = t;
      };

      a.prototype.walkSourceContents = function (e) {
        for (var t = 0, n = this.children.length; t < n; t++) {
          if (this.children[t][s]) {
            this.children[t].walkSourceContents(e);
          }
        }

        var r = Object.keys(this.sourceContents);
        t = 0;

        for (n = r.length; t < n; t++) {
          e(o.fromSetString(r[t]), this.sourceContents[r[t]]);
        }
      };

      a.prototype.toString = function () {
        var e = "";
        this.walk(function (t) {
          e += t;
        });
        return e;
      };

      a.prototype.toStringWithSourceMap = function (e) {
        var t = {
          code: "",
          line: 1,
          column: 0
        };
        var n = new r(e);
        var o = false;
        var i = null;
        var s = null;
        var a = null;
        var u = null;
        this.walk(function (e, r) {
          t.code += e;

          if (!(i === r.source && s === r.line && a === r.column && u === r.name)) {
            n.addMapping({
              source: r.source,
              original: {
                line: r.line,
                column: r.column
              },
              generated: {
                line: t.line,
                column: t.column
              },
              name: r.name
            });
          }

          i = r.source;
          s = r.line;
          a = r.column;
          u = r.name;
          n.addMapping({
            generated: {
              line: t.line,
              column: t.column
            }
          });
          i = null;

          if (null !== r.source && null !== r.line && null !== r.column) {
            if (!(i === r.source && s === r.line && a === r.column && u === r.name)) {
              n.addMapping({
                source: r.source,
                original: {
                  line: r.line,
                  column: r.column
                },
                generated: {
                  line: t.line,
                  column: t.column
                },
                name: r.name
              });
            }

            i = r.source;
            s = r.line;
            a = r.column;
            u = r.name;
            o = true;
          } else {
            if (o) {
              o = false;
            }
          }

          for (var c = 0, p = e.length; c < p; c++) {
            t.line++;
            t.column = 0;
            i = null;

            if (10 === e.charCodeAt(c)) {
              t.line++;
              t.column = 0;

              if (c + 1 === p) {
                o = false;
              } else {
                if (o) {
                  n.addMapping({
                    source: r.source,
                    original: {
                      line: r.line,
                      column: r.column
                    },
                    generated: {
                      line: t.line,
                      column: t.column
                    },
                    name: r.name
                  });
                }
              }
            } else {
              t.column++;
            }
          }
        });
        this.walkSourceContents(function (e, t) {
          n.setSourceContent(e, t);
        });
        return {
          code: t.code,
          map: n
        };
      };

      t.SourceNode = a;
    },
    "./node_modules/source-map/lib/util.js":
    /*!*********************************************!*\
      !*** ./node_modules/source-map/lib/util.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t) {
      t.getArg = function (e, t, n) {
        if (t in e) {
          return e[t];
        }

        if (3 === arguments.length) {
          return n;
        }

        throw new Error('"' + t + '" is a required argument.');
      };

      var n = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
      var r = /^data:.+\,.+$/;

      function o(e) {
        var t = e.match(n);
        return t ? {
          scheme: t[1],
          auth: t[2],
          host: t[3],
          port: t[4],
          path: t[5]
        } : null;
      }

      function i(e) {
        var t = "";

        if (e.scheme) {
          t += e.scheme + ":";
        }

        t += "//";

        if (e.auth) {
          t += e.auth + "@";
        }

        if (e.host) {
          t += e.host;
        }

        if (e.port) {
          t += ":" + e.port;
        }

        if (e.path) {
          t += e.path;
        }

        return t;
      }

      function s(e) {
        var n = e;
        var r = o(e);

        if (r) {
          if (!r.path) {
            return e;
          }

          n = r.path;
        }

        for (var s, a = t.isAbsolute(n), u = n.split(/\/+/), c = 0, p = u.length - 1; p >= 0; p--) {
          u.splice(p + 1, c);
          u.splice(p, 2);

          if ("." === (s = u[p])) {
            u.splice(p, 1);
          } else {
            if (".." === s) {
              c++;
            } else {
              if (c > 0) {
                if ("" === s) {
                  c = 0;
                } else {
                  c--;
                }
              }
            }
          }
        }

        if ("" === (n = u.join("/"))) {
          n = a ? "/" : ".";
        }

        r.path = n;
        return r ? i(r) : n;
      }

      t.urlParse = o;
      t.urlGenerate = i;
      t.normalize = s;

      t.join = function (e, t) {
        if ("" === e) {
          e = ".";
        }

        if ("" === t) {
          t = ".";
        }

        var n = o(t);
        var a = o(e);

        if (a) {
          e = a.path || "/";
        }

        if (n && !n.scheme) {
          if (a) {
            n.scheme = a.scheme;
          }

          return i(n);
        }

        if (n || t.match(r)) {
          return t;
        }

        if (a && !a.host && !a.path) {
          a.host = t;
          return i(a);
        }

        var u = "/" === t.charAt(0) ? t : s(e.replace(/\/+$/, "") + "/" + t);
        a.path = u;
        return a ? i(a) : u;
      };

      t.isAbsolute = function (e) {
        return "/" === e.charAt(0) || !!e.match(n);
      };

      t.relative = function (e, t) {
        if ("" === e) {
          e = ".";
        }

        e = e.replace(/\/$/, "");

        for (var n = 0; 0 !== t.indexOf(e + "/");) {
          var r = e.lastIndexOf("/");

          if (r < 0) {
            return t;
          }

          if ((e = e.slice(0, r)).match(/^([^\/]+:\/)?\/*$/)) {
            return t;
          }

          ++n;
        }

        return Array(n + 1).join("../") + t.substr(e.length + 1);
      };

      var a = !("__proto__" in Object.create(null));

      function u(e) {
        return e;
      }

      function c(e) {
        if (!e) {
          return false;
        }

        var t = e.length;

        if (t < 9) {
          return false;
        }

        if (95 !== e.charCodeAt(t - 1) || 95 !== e.charCodeAt(t - 2) || 111 !== e.charCodeAt(t - 3) || 116 !== e.charCodeAt(t - 4) || 111 !== e.charCodeAt(t - 5) || 114 !== e.charCodeAt(t - 6) || 112 !== e.charCodeAt(t - 7) || 95 !== e.charCodeAt(t - 8) || 95 !== e.charCodeAt(t - 9)) {
          return false;
        }

        for (var n = t - 10; n >= 0; n--) {
          if (36 !== e.charCodeAt(n)) {
            return false;
          }
        }

        return true;
      }

      function p(e, t) {
        return e === t ? 0 : e > t ? 1 : -1;
      }

      t.toSetString = a ? u : function (e) {
        return c(e) ? "$" + e : e;
      };
      t.fromSetString = a ? u : function (e) {
        return c(e) ? e.slice(1) : e;
      };

      t.compareByOriginalPositions = function (e, t, n) {
        var r = e.source - t.source;
        return 0 !== r || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) || n || 0 !== (r = e.generatedColumn - t.generatedColumn) || 0 !== (r = e.generatedLine - t.generatedLine) ? r : e.name - t.name;
      };

      t.compareByGeneratedPositionsDeflated = function (e, t, n) {
        var r = e.generatedLine - t.generatedLine;
        return 0 !== r || 0 !== (r = e.generatedColumn - t.generatedColumn) || n || 0 !== (r = e.source - t.source) || 0 !== (r = e.originalLine - t.originalLine) || 0 !== (r = e.originalColumn - t.originalColumn) ? r : e.name - t.name;
      };

      t.compareByGeneratedPositionsInflated = function (e, t) {
        var n = e.generatedLine - t.generatedLine;
        return 0 !== n || 0 !== (n = e.generatedColumn - t.generatedColumn) || 0 !== (n = p(e.source, t.source)) || 0 !== (n = e.originalLine - t.originalLine) || 0 !== (n = e.originalColumn - t.originalColumn) ? n : p(e.name, t.name);
      };
    },
    "./node_modules/source-map/source-map.js":
    /*!***********************************************!*\
      !*** ./node_modules/source-map/source-map.js ***!
      \***********************************************/

    /*! no static exports found */
    function (e, t, n) {
      t.SourceMapGenerator = n(
      /*! ./lib/source-map-generator */
      "./node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
      t.SourceMapConsumer = n(
      /*! ./lib/source-map-consumer */
      "./node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
      t.SourceNode = n(
      /*! ./lib/source-node */
      "./node_modules/source-map/lib/source-node.js").SourceNode;
    },
    "./node_modules/split-string/index.js":
    /*!********************************************!*\
      !*** ./node_modules/split-string/index.js ***!
      \********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * split-string <https://github.com/jonschlinkert/split-string>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");

      function o(e, t, n, r) {
        var i = e.indexOf(t, n);
        return "\\" === e.charAt(i - 1) ? o(e, t, i + 1) : i;
      }

      function i(e, t) {
        return true === t.keepDoubleQuotes && '"' === e || true === t.keepSingleQuotes && "'" === e || t.keepQuotes;
      }

      function s(e, t, n) {
        return "function" == typeof e.keepEscaping ? e.keepEscaping(t, n) : true === e.keepEscaping || "\\" === t[n + 1];
      }

      e.exports = function (e, t, n) {
        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        n = t;

        if ("function" == typeof t) {
          n = t;
          t = null;
        }

        if ("string" == typeof t) {
          t = {
            sep: t
          };
        }

        var a;
        var u = r({
          sep: "."
        }, t);
        var c = u.quotes || ['"', "'", "`"];

        if (true === u.brackets) {
          a = {
            "<": ">",
            "(": ")",
            "[": "]",
            "{": "}"
          };
        } else {
          if (u.brackets) {
            a = u.brackets;
          }
        }

        var p;
        var l = [];
        var d = [];
        var f = [""];
        var h = u.sep;
        var m = e.length;
        var y = -1;

        function g() {
          if (a && d.length) {
            return a[d[d.length - 1]];
          }
        }

        for (; ++y < m;) {
          var v = e[y];
          var b = e[y + 1];
          var x = {
            val: v,
            idx: y,
            arr: f,
            str: e
          };
          l.push(x);

          if ("\\" !== v) {
            if (a && a[v]) {
              d.push(v);
              var j = g();

              var _ = y + 1;

              if (-1 !== e.indexOf(j, _ + 1)) {
                for (; d.length && _ < m;) {
                  var w = e[++_];

                  if ("\\" !== w) {
                    if (-1 === c.indexOf(w)) {
                      j = g();

                      if (d.length && -1 === e.indexOf(j, _ + 1)) {
                        break;
                      }

                      if (a[w]) {
                        d.push(w);
                      } else {
                        if (j === w) {
                          d.pop();
                        }
                      }
                    } else {
                      _ = o(e, w, _ + 1);
                    }
                  } else {
                    w++;
                  }
                }
              }

              if (-1 === (p = _)) {
                f[f.length - 1] += v;
                continue;
              }

              v = e.slice(y, p + 1);
              x.val = v;
              x.idx = y = p;
            }

            if (-1 !== c.indexOf(v)) {
              if (-1 === (p = o(e, v, y + 1))) {
                f[f.length - 1] += v;
                continue;
              }

              v = true === i(v, u) ? e.slice(y, p + 1) : e.slice(y + 1, p);
              x.val = v;
              x.idx = y = p;
            }

            n(x, l);
            v = x.val;

            if ("function" == typeof n) {
              n(x, l);
              v = x.val;
              y = x.idx;
            }

            if (x.val !== h || false === x.split) {
              f[f.length - 1] += x.val;
            } else {
              f.push("");
            }
          } else {
            x.val = true === s(u, e, y) ? v + b : b;
            x.escaped = true;

            if ("function" == typeof n) {
              n(x);
            }

            f[f.length - 1] += x.val;
            y++;
          }
        }

        return f;
      };
    },
    "./node_modules/static-extend/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/static-extend/index.js ***!
      \*********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * static-extend <https://github.com/jonschlinkert/static-extend>
       *
       * Copyright (c) 2016, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! object-copy */
      "./node_modules/object-copy/index.js");
      var o = n(
      /*! define-property */
      "./node_modules/static-extend/node_modules/define-property/index.js");
      var i = n(
      /*! util */
      "util");

      e.exports = function e(t, n) {
        if ("function" != typeof t) {
          throw new TypeError("expected Parent to be a function.");
        }

        return function (s, a) {
          if ("function" != typeof s) {
            throw new TypeError("expected Ctor to be a function.");
          }

          i.inherits(s, t);
          r(s, t);

          if ("object" == typeof a) {
            var u = Object.create(a);

            for (var c in u) {
              s.prototype[c] = u[c];
            }
          }

          o(s.prototype, "_parent_", {
            configurable: true,
            set: function () {},
            get: function () {
              return t.prototype;
            }
          });

          if ("function" == typeof n) {
            n(s, t);
          }

          s.extend = e(s, n);
        };
      };
    },
    "./node_modules/static-extend/node_modules/define-property/index.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/static-extend/node_modules/define-property/index.js ***!
      \**************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * define-property <https://github.com/jonschlinkert/define-property>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! is-descriptor */
      "./node_modules/is-descriptor/index.js");

      e.exports = function (e, t, n) {
        if ("object" != typeof e && "function" != typeof e) {
          throw new TypeError("expected an object or function.");
        }

        if ("string" != typeof t) {
          throw new TypeError("expected `prop` to be a string.");
        }

        return r(n) && ("set" in n || "get" in n) ? Object.defineProperty(e, t, n) : Object.defineProperty(e, t, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: n
        });
      };
    },
    "./node_modules/to-object-path/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/to-object-path/index.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * to-object-path <https://github.com/jonschlinkert/to-object-path>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! kind-of */
      "./node_modules/to-object-path/node_modules/kind-of/index.js");

      function o(e) {
        for (var t = e.length, n = -1, i = []; ++n < t;) {
          var s = e[n];

          if ("arguments" === r(s) || Array.isArray(s)) {
            i.push.apply(i, o(s));
          } else {
            if ("string" == typeof s) {
              i.push(s);
            }
          }
        }

        return i;
      }

      e.exports = function (e) {
        if ("arguments" !== r(e)) {
          e = arguments;
        }

        return o(e).join(".");
      };
    },
    "./node_modules/to-object-path/node_modules/kind-of/index.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/to-object-path/node_modules/kind-of/index.js ***!
      \*******************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! is-buffer */
      "./node_modules/is-buffer/index.js");
      var o = Object.prototype.toString;

      e.exports = function (e) {
        if (undefined === e) {
          return "undefined";
        }

        if (null === e) {
          return "null";
        }

        if (true === e || false === e || e instanceof Boolean) {
          return "boolean";
        }

        if ("string" == typeof e || e instanceof String) {
          return "string";
        }

        if ("number" == typeof e || e instanceof Number) {
          return "number";
        }

        if ("function" == typeof e || e instanceof Function) {
          return "function";
        }

        if (undefined !== Array.isArray && Array.isArray(e)) {
          return "array";
        }

        if (e instanceof RegExp) {
          return "regexp";
        }

        if (e instanceof Date) {
          return "date";
        }

        var t = o.call(e);
        return "[object RegExp]" === t ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : r(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object";
      };
    },
    "./node_modules/to-regex-range/index.js":
    /*!**********************************************!*\
      !*** ./node_modules/to-regex-range/index.js ***!
      \**********************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * to-regex-range <https://github.com/jonschlinkert/to-regex-range>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! repeat-string */
      "./node_modules/repeat-string/index.js");
      var o = n(
      /*! is-number */
      "./node_modules/is-number/index.js");
      var i = {};

      function s(e, t, n) {
        if (e === t) {
          return {
            pattern: String(e),
            digits: []
          };
        }

        for (var r, o, i = function (e, t) {
          var n = [];

          for (var r in e) {
            n.push([e[r], t[r]]);
          }

          return n;
        }(String(e), String(t)), s = i.length, a = -1, u = "", c = 0; ++a < s;) {
          var p = i[a];
          var l = p[0];
          var d = p[1];

          if (l === d) {
            u += l;
          } else {
            if ("0" !== l || "9" !== d) {
              u += "[" + (r = l) + ((o = d) - r == 1 ? "" : "-") + o + "]";
            } else {
              c += 1;
            }
          }
        }

        if (c) {
          u += n.shorthand ? "\\d" : "[0-9]";
        }

        return {
          pattern: u,
          digits: [c]
        };
      }

      function a(e, t, n, r) {
        for (var o, i = function (e, t) {
          e = Number(e);

          for (var n = 1, r = [t = Number(t)], o = +d(e, n); e <= o && o <= t;) {
            r = p(r, o);
            o = +d(e, n += 1);
          }

          var i = 1;

          for (o = f(t + 1, i) - 1; e < o && o <= t;) {
            r = p(r, o);
            o = f(t + 1, i += 1) - 1;
          }

          r.sort(c);
          return r;
        }(e, t), a = i.length, u = -1, l = [], m = e; ++u < a;) {
          var g = i[u];
          var v = s(m, g, r);
          var b = "";

          if (n.isPadded) {
            b = y(g, n);
          }

          v.string = b + v.pattern + h(v.digits);
          l.push(v);
          m = g + 1;

          if (o.digits.length > 1) {
            o.digits.pop();
          }

          o.digits.push(v.digits[0]);
          o.string = o.pattern + h(o.digits);

          if (n.isPadded || !o || o.pattern !== v.pattern) {
            if (n.isPadded) {
              b = y(g, n);
            }

            v.string = b + v.pattern + h(v.digits);
            l.push(v);
            m = g + 1;
            o = v;
          } else {
            if (o.digits.length > 1) {
              o.digits.pop();
            }

            o.digits.push(v.digits[0]);
            o.string = o.pattern + h(o.digits);
            m = g + 1;
          }
        }

        return l;
      }

      function u(e, t, n, r, o) {
        for (var i = [], s = 0; s < e.length; s++) {
          var a = e[s].string;

          if (false !== o.relaxZeros && "-" === n && "0" === a.charAt(0)) {
            a = "{" === a.charAt(1) ? "0*" + a.replace(/^0\{\d+\}/, "") : "0*" + a.slice(1);
          }

          if (!(r || l(t, "string", a))) {
            i.push(n + a);
          }

          if (r && l(t, "string", a)) {
            i.push(n + a);
          }
        }

        return i;
      }

      function c(e, t) {
        return e > t ? 1 : t > e ? -1 : 0;
      }

      function p(e, t) {
        if (-1 === e.indexOf(t)) {
          e.push(t);
        }

        return e;
      }

      function l(e, t, n) {
        for (var r = 0; r < e.length; r++) {
          if (e[r][t] === n) {
            return true;
          }
        }

        return false;
      }

      function d(e, t) {
        return String(e).slice(0, -t) + r("9", t);
      }

      function f(e, t) {
        return e - e % Math.pow(10, t);
      }

      function h(e) {
        var t = e[0];
        var n = e[1] ? "," + e[1] : "";
        return n || t && 1 !== t ? "{" + t + n + "}" : "";
      }

      function m(e) {
        return /^-?(0+)\d/.exec(e);
      }

      function y(e, t) {
        if (t.isPadded) {
          var n = Math.abs(t.maxLen - String(e).length);

          switch (n) {
            case 0:
              return "";

            case 1:
              return "0";

            default:
              return "0{" + n + "}";
          }
        }

        return e;
      }

      e.exports = function (e, t, n) {
        if (false === o(e)) {
          throw new RangeError("toRegexRange: first argument is invalid.");
        }

        if (undefined === t || e === t) {
          return String(e);
        }

        if (false === o(t)) {
          throw new RangeError("toRegexRange: second argument is invalid.");
        }

        n = n || {};
        var r = e + ":" + t + "=" + String(n.relaxZeros) + String(n.shorthand) + String(n.capture);

        if (i.hasOwnProperty(r)) {
          return i[r].result;
        }

        var s = Math.min(e, t);
        var c = Math.max(e, t);

        if (1 === Math.abs(s - c)) {
          var p = e + "|" + t;
          return n.capture ? "(" + p + ")" : p;
        }

        var l = m(e) || m(t);
        var d = [];
        var f = [];
        var h = {
          min: e,
          max: t,
          a: s,
          b: c
        };
        h.isPadded = l;

        if (l) {
          h.isPadded = l;
          h.maxLen = String(h.max).length;
        }

        f = a(c < 0 ? Math.abs(c) : 1, Math.abs(s), h, n);

        if (s < 0) {
          f = a(c < 0 ? Math.abs(c) : 1, Math.abs(s), h, n);
          s = h.a = 0;
        }

        if (c >= 0) {
          d = a(s, c, h, n);
        }

        h.negatives = f;
        h.positives = d;

        h.result = function (e, t, n) {
          var r = u(e, t, "-", false, n) || [];
          var o = u(t, e, "", false, n) || [];
          var i = u(e, t, "-?", true, n) || [];
          return r.concat(i).concat(o).join("|");
        }(f, d, n);

        if (n.capture && d.length + f.length > 1) {
          h.result = "(" + h.result + ")";
        }

        i[r] = h;
        return h.result;
      };
    },
    "./node_modules/to-regex/index.js":
    /*!****************************************!*\
      !*** ./node_modules/to-regex/index.js ***!
      \****************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! safe-regex */
      "./node_modules/safe-regex/index.js");
      var o = n(
      /*! define-property */
      "./node_modules/define-property/index.js");
      var i = n(
      /*! extend-shallow */
      "./node_modules/extend-shallow/index.js");
      var s = n(
      /*! regex-not */
      "./node_modules/regex-not/index.js");
      var a = {};

      function u(e, t) {
        if (e instanceof RegExp) {
          return e;
        }

        if ("string" != typeof e) {
          throw new TypeError("expected a string");
        }

        if (e.length > 65536) {
          throw new Error("expected pattern to be less than 65536 characters");
        }

        var n = e;

        n = function (e, t) {
          if (!t) {
            return e;
          }

          var n = e;

          for (var r in t) {
            if (t.hasOwnProperty(r)) {
              n += ";" + r + "=" + String(t[r]);
            }
          }

          return n;
        }(e, t);

        if ((!t || t && false !== t.cache) && a.hasOwnProperty(n)) {
          return a[n];
        }

        var u = i({}, t);

        if (true === u.contains) {
          if (true === u.negate) {
            u.strictNegate = false;
          } else {
            u.strict = false;
          }
        }

        u.strictOpen = false;

        if (false === u.strict) {
          u.strictOpen = false;
          u.strictClose = false;
        }

        var c;
        var p = false !== u.strictOpen ? "^" : "";
        var l = false !== u.strictClose ? "$" : "";
        var d = u.flags || "";

        if (!(true !== u.nocase || /i/.test(d))) {
          d += "i";
        }

        try {
          if (u.negate || "boolean" == typeof u.strictNegate) {
            e = s.create(e, u);
          }

          c = new RegExp(p + "(?:" + e + ")" + l, d);

          if (true === u.safe && false === r(c)) {
            throw new Error("potentially unsafe regular expression: " + c.source);
          }
        } catch (r) {
          if (true === u.strictErrors || true === u.safe) {
            r.key = n;
            r.pattern = e;
            r.originalOptions = t;
            r.createdOptions = u;
            throw r;
          }

          try {
            c = new RegExp("^" + e.replace(/(\W)/g, "\\$1") + "$");
          } catch (e) {
            c = /.^/;
          }
        }

        if (false !== u.cache) {
          (function (e, t, n, r) {
            o(e, "cached", true);
            o(e, "pattern", n);
            o(e, "options", r);
            o(e, "key", t);
            a[t] = e;
          })(c, n, e, u);
        }

        return c;
      }

      e.exports = function (e, t) {
        return Array.isArray(e) ? u(e.join("|"), t) : u(e, t);
      };

      e.exports.makeRe = u;
    },
    "./node_modules/union-value/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/union-value/index.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";

      var r = n(
      /*! is-extendable */
      "./node_modules/is-extendable/index.js");
      var o = n(
      /*! arr-union */
      "./node_modules/arr-union/index.js");
      var i = n(
      /*! get-value */
      "./node_modules/get-value/index.js");
      var s = n(
      /*! set-value */
      "./node_modules/set-value/index.js");

      function a(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e];
      }

      e.exports = function (e, t, n) {
        if (!r(e)) {
          throw new TypeError("union-value expects the first argument to be an object.");
        }

        if ("string" != typeof t) {
          throw new TypeError("union-value expects `prop` to be a string.");
        }

        var u = a(i(e, t));
        s(e, t, o(u, a(n)));
        return e;
      };
    },
    "./node_modules/unset-value/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/unset-value/index.js ***!
      \*******************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * unset-value <https://github.com/jonschlinkert/unset-value>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      var r = n(
      /*! isobject */
      "./node_modules/isobject/index.js");
      var o = n(
      /*! has-value */
      "./node_modules/unset-value/node_modules/has-value/index.js");

      e.exports = function (e, t) {
        if (!r(e)) {
          throw new TypeError("expected an object.");
        }

        if (e.hasOwnProperty(t)) {
          delete e[t];
          return true;
        }

        if (o(e, t)) {
          for (var n = t.split("."), i = n.pop(); n.length && "\\" === n[n.length - 1].slice(-1);) {
            i = n.pop().slice(0, -1) + "." + i;
          }

          for (; n.length;) {
            e = e[t = n.shift()];
          }

          return delete e[i];
        }

        return true;
      };
    },
    "./node_modules/unset-value/node_modules/has-value/index.js":
    /*!******************************************************************!*\
      !*** ./node_modules/unset-value/node_modules/has-value/index.js ***!
      \******************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * has-value <https://github.com/jonschlinkert/has-value>
       *
       * Copyright (c) 2014-2016, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! isobject */
      "./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js");
      var o = n(
      /*! has-values */
      "./node_modules/unset-value/node_modules/has-values/index.js");
      var i = n(
      /*! get-value */
      "./node_modules/get-value/index.js");

      e.exports = function (e, t, n) {
        return r(e) ? o(i(e, t), n) : o(e, t);
      };
    },
    "./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js":
    /*!****************************************************************************************!*\
      !*** ./node_modules/unset-value/node_modules/has-value/node_modules/isobject/index.js ***!
      \****************************************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      var r = n(
      /*! isarray */
      "./node_modules/isarray/index.js");

      e.exports = function (e) {
        return null != e && "object" == typeof e && false === r(e);
      };
    },
    "./node_modules/unset-value/node_modules/has-values/index.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/unset-value/node_modules/has-values/index.js ***!
      \*******************************************************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * has-values <https://github.com/jonschlinkert/has-values>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      e.exports = function (e, t) {
        if (null == e) {
          return false;
        }

        if ("boolean" == typeof e) {
          return true;
        }

        if ("number" == typeof e) {
          return 0 !== e || true !== t;
        }

        if (undefined !== e.length) {
          return 0 !== e.length;
        }

        for (var n in e) {
          if (e.hasOwnProperty(n)) {
            return true;
          }
        }

        return false;
      };
    },
    "./node_modules/urix/index.js":
    /*!************************************!*\
      !*** ./node_modules/urix/index.js ***!
      \************************************/

    /*! no static exports found */
    function (e, t, n) {
      var r = n(
      /*! path */
      "path");

      e.exports = function (e) {
        return "\\" === r.sep ? e.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : e;
      };
    },
    "./node_modules/use/index.js":
    /*!***********************************!*\
      !*** ./node_modules/use/index.js ***!
      \***********************************/

    /*! no static exports found */
    function (e, t, n) {
      "use strict";
      /*!
       * use <https://github.com/jonschlinkert/use>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      function r(e) {
        return e && "object" == typeof e && !Array.isArray(e);
      }

      function o(e, t, n) {
        Object.defineProperty(e, t, {
          configurable: true,
          writable: true,
          value: n
        });
      }

      e.exports = function e(t, n) {
        if (!r(t) && "function" != typeof t) {
          throw new TypeError("expected an object or function");
        }

        var i = r(n) ? n : {};
        var s = "string" == typeof i.prop ? i.prop : "fns";

        function a(e, n, r) {
          var o = 1;
          n = u(e, n);
          r = n;

          if ("string" == typeof e || Array.isArray(e)) {
            n = u(e, n);
            o++;
          } else {
            r = n;
            n = e;
          }

          if ("function" != typeof n) {
            throw new TypeError("expected a function");
          }

          var a = this || t;
          var c = a[s];
          var p = [].slice.call(arguments, o);
          p.unshift(a);

          if ("function" == typeof i.hook) {
            i.hook.apply(a, p);
          }

          var l = n.apply(a, p);

          if ("function" == typeof l && -1 === c.indexOf(l)) {
            c.push(l);
          }

          return a;
        }

        function u(e, t) {
          return function n() {
            return this.type === e ? t.apply(this, arguments) : n;
          };
        }

        if (!Array.isArray(t[s])) {
          o(t, s, []);
        }

        o(t, "use", a);
        o(t, "run", function (n) {
          if (r(n)) {
            o(n, s, n[s] || []);

            if (!(n.use && n.run)) {
              o(n, s, n[s] || []);
              o(n, "use", a);
            }

            if (!(n[s] && -1 !== n[s].indexOf(e))) {
              n.use(e);
            }

            for (var i = (this || t)[s], u = i.length, c = -1; ++c < u;) {
              n.use(i[c]);
            }

            return n;
          }
        });
        return t;
      };
    },
    fs:
    /*!*********************!*\
      !*** external "fs" ***!
      \*********************/

    /*! no static exports found */
    function (e, t) {
      e.exports = require("fs");
    },
    net:
    /*!**********************!*\
      !*** external "net" ***!
      \**********************/

    /*! no static exports found */
    function (e, t) {
      e.exports = require("net");
    },
    path:
    /*!***********************!*\
      !*** external "path" ***!
      \***********************/

    /*! no static exports found */
    function (e, t) {
      e.exports = require("path");
    },
    tty:
    /*!**********************!*\
      !*** external "tty" ***!
      \**********************/

    /*! no static exports found */
    function (e, t) {
      e.exports = require("tty");
    },
    url:
    /*!**********************!*\
      !*** external "url" ***!
      \**********************/

    /*! no static exports found */
    function (e, t) {
      e.exports = require("url");
    },
    util:
    /*!***********************!*\
      !*** external "util" ***!
      \***********************/

    /*! no static exports found */
    function (e, t) {
      e.exports = require("util");
    }
  });
});
