(function (host) {
var Kernel = (function () {
  var defs = {};
  var instances = {};
  var pending = {};
  function define(name, deps, factory) {
    if (defs[name]) throw new Error("Kernel: duplicate module " + name);
    defs[name] = { deps: deps, factory: factory };
  }
  function resolve(name) {
    if (Object.prototype.hasOwnProperty.call(instances, name)) return instances[name];
    if (pending[name]) throw new Error("Kernel: cyclic dependency at " + name);
    var def = defs[name];
    if (!def) throw new Error("Kernel: unknown module " + name);
    pending[name] = true;
    var args = def.deps.map(function (dep) { return resolve(dep); });
    instances[name] = def.factory.apply(null, args);
    delete pending[name];
    return instances[name];
  }
  return { define: define, resolve: resolve };
})();

Kernel.define("bus", [], function () {
  var table = {};
  function on(name, handler) {
    (table[name] = table[name] || []).push(handler);
    return function off() {
      table[name] = (table[name] || []).filter(function (h) { return h !== handler; });
    };
  }
  function emit(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    (table[name] || []).slice().forEach(function (handler) {
      try { handler.apply(null, args); } catch (err) { console.error("[mod] handler failed for " + name, err); }
    });
  }
  return { on: on, emit: emit };
});

Kernel.define("dom", [], function () {
  function Deferred() {
    var state = 0;
    var values = [];
    var doneList = [];
    var failList = [];
    var d = {};
    d.done = function (fn) {
      if (typeof fn === "function") {
        if (state === 1) fn.apply(null, values);
        else if (state === 0) doneList.push(fn);
      }
      return d;
    };
    d.fail = function (fn) {
      if (typeof fn === "function") {
        if (state === 2) fn.apply(null, values);
        else if (state === 0) failList.push(fn);
      }
      return d;
    };
    d.always = function (fn) { d.done(fn); d.fail(fn); return d; };
    d.then = function (ok, bad) {
      var next = Deferred();
      d.done(function () {
        var r = typeof ok === "function" ? ok.apply(null, arguments) : arguments[0];
        next.resolve(r);
      });
      d.fail(function () {
        if (typeof bad === "function") next.resolve(bad.apply(null, arguments));
        else next.reject.apply(null, arguments);
      });
      return next;
    };
    d.resolve = function () {
      if (state !== 0) return d;
      state = 1;
      values = Array.prototype.slice.call(arguments);
      doneList.splice(0).forEach(function (fn) { fn.apply(null, values); });
      return d;
    };
    d.reject = function () {
      if (state !== 0) return d;
      state = 2;
      values = Array.prototype.slice.call(arguments);
      failList.splice(0).forEach(function (fn) { fn.apply(null, values); });
      return d;
    };
    return d;
  }

  function Sel(items) {
    for (var i = 0; i < items.length; i++) this[i] = items[i];
    this.length = items.length;
  }

  function asList(target, context) {
    if (target === null || target === undefined) return [];
    if (target instanceof Sel) return Array.prototype.slice.call(target);
    if (target === window || target === document) return [target];
    if (target.nodeType) return [target];
    if (typeof target === "string") {
      var idOnly = /^#[A-Za-z][\w-]*$/.exec(target);
      if (idOnly && !context) {
        var found = document.getElementById(target.slice(1));
        return found ? [found] : [];
      }
      var root = context && context.nodeType ? context : document;
      try {
        return Array.prototype.slice.call(root.querySelectorAll(target));
      } catch (err) {
        return [];
      }
    }
    if (typeof target.length === "number") return Array.prototype.slice.call(target);
    return [target];
  }

  function $(selector, context) {
    if (typeof selector === "function") {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", selector);
      else setTimeout(selector, 0);
      return undefined;
    }
    var ctx = context instanceof Sel ? context[0] : context;
    return new Sel(asList(selector, ctx));
  }

  var fn = Sel.prototype;

  fn.get = function (index) {
    var list = Array.prototype.slice.call(this);
    if (index === undefined) return list;
    return list[index < 0 ? list.length + index : index];
  };

  fn.eq = function (index) {
    var item = this.get(index);
    return new Sel(item ? [item] : []);
  };

  fn.first = function () { return this.eq(0); };
  fn.last = function () { return this.eq(-1); };

  fn.each = function (callback) {
    for (var i = 0; i < this.length; i++) {
      if (callback.call(this[i], i, this[i]) === false) break;
    }
    return this;
  };

  fn.map = function (callback) {
    var out = [];
    for (var i = 0; i < this.length; i++) {
      var value = callback.call(this[i], i, this[i]);
      if (value !== null && value !== undefined) out.push(value);
    }
    return out;
  };

  fn.find = function (selector) {
    var out = [];
    this.each(function () { out = out.concat(asList(selector, this)); });
    return new Sel(out);
  };

  fn.children = function (selector) {
    var out = [];
    this.each(function () {
      if (this.children) out = out.concat(Array.prototype.slice.call(this.children));
    });
    if (selector) out = out.filter(function (el) { return el.matches && el.matches(selector); });
    return new Sel(out);
  };

  fn.parent = function () {
    return new Sel(this.map(function () { return this.parentNode; }));
  };

  fn.on = function (type, handler) {
    return this.each(function () { this.addEventListener(type, handler); });
  };

  fn.off = function (type, handler) {
    return this.each(function () { this.removeEventListener(type, handler); });
  };

  fn.click = function (handler) {
    if (handler) return this.on("click", handler);
    return this.each(function () { if (typeof this.click === "function") this.click(); });
  };

  ["keydown", "keyup", "keypress", "resize", "load", "scroll", "touchstart", "touchend", "touchmove", "mousedown", "mouseup", "mousemove"].forEach(function (name) {
    fn[name] = function (handler) {
      return handler ? this.on(name, handler) : this;
    };
  });

  fn.text = function (value) {
    if (value === undefined) return this.length ? this[0].textContent : undefined;
    return this.each(function () { this.textContent = value; });
  };

  fn.html = function (value) {
    if (value === undefined) return this.length ? this[0].innerHTML : undefined;
    return this.each(function () { this.innerHTML = value; });
  };

  fn.val = function (value) {
    if (value === undefined) return this.length ? this[0].value : undefined;
    return this.each(function () { this.value = value; });
  };

  fn.attr = function (name, value) {
    if (value === undefined) return this.length ? this[0].getAttribute(name) : undefined;
    return this.each(function () { this.setAttribute(name, value); });
  };

  fn.removeAttr = function (name) {
    return this.each(function () { this.removeAttribute(name); });
  };

  fn.prop = function (name, value) {
    if (value === undefined) return this.length ? this[0][name] : undefined;
    return this.each(function () { this[name] = value; });
  };

  fn.data = function (key, value) {
    var attr = "data-" + String(key).replace(/[A-Z]/g, function (c) { return "-" + c.toLowerCase(); });
    if (value === undefined) return this.length ? this[0].getAttribute(attr) : undefined;
    return this.each(function () { this.setAttribute(attr, value); });
  };

  function classNames(name) {
    return String(name).split(/\s+/).filter(Boolean);
  }

  fn.addClass = function (name) {
    var names = classNames(name);
    return this.each(function () { if (names.length) this.classList.add.apply(this.classList, names); });
  };

  fn.removeClass = function (name) {
    var names = classNames(name);
    return this.each(function () { if (names.length) this.classList.remove.apply(this.classList, names); });
  };

  fn.toggleClass = function (name) {
    var names = classNames(name);
    return this.each(function () { names.forEach(function (n) { this.classList.toggle(n); }, this); });
  };

  fn.hasClass = function (name) {
    return this.length ? this[0].classList.contains(name) : false;
  };

  fn.css = function (name, value) {
    if (typeof name === "object" && name !== null) {
      for (var key in name) {
        if (Object.prototype.hasOwnProperty.call(name, key)) this.css(key, name[key]);
      }
      return this;
    }
    if (value === undefined) return this.length ? getComputedStyle(this[0])[name] : undefined;
    return this.each(function () {
      if (name.indexOf("-") !== -1) this.style.setProperty(name, value);
      else this.style[name] = value;
    });
  };

  function dimension(el, axis, outer) {
    if (el === window) return axis === "width" ? window.innerWidth : window.innerHeight;
    if (el === document) {
      return axis === "width" ? document.documentElement.scrollWidth : document.documentElement.scrollHeight;
    }
    if (outer) return axis === "width" ? el.offsetWidth : el.offsetHeight;
    var cs = getComputedStyle(el);
    if (axis === "width") return el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    return el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
  }

  fn.width = function () { return this.length ? dimension(this[0], "width", false) : undefined; };
  fn.height = function () { return this.length ? dimension(this[0], "height", false) : undefined; };
  fn.outerWidth = function () { return this.length ? dimension(this[0], "width", true) : undefined; };
  fn.outerHeight = function () { return this.length ? dimension(this[0], "height", true) : undefined; };

  fn.show = function () {
    return this.each(function () {
      if (this.style.display === "none") this.style.display = "";
      if (getComputedStyle(this).display === "none") this.style.display = "block";
    });
  };

  fn.hide = function () {
    return this.each(function () { this.style.display = "none"; });
  };

  fn.toggle = function (state) {
    if (typeof state === "boolean") return state ? this.show() : this.hide();
    return this.each(function () {
      if (getComputedStyle(this).display === "none") fn.show.call(new Sel([this]));
      else fn.hide.call(new Sel([this]));
    });
  };

  function parseHtml(markup) {
    var holder = document.createElement("div");
    holder.innerHTML = markup;
    return Array.prototype.slice.call(holder.childNodes);
  }

  fn.append = function (content) {
    var nodes;
    if (content instanceof Sel) nodes = Array.prototype.slice.call(content);
    else if (typeof content === "string") nodes = parseHtml(content);
    else nodes = [content];
    return this.each(function (index) {
      var target = this;
      nodes.forEach(function (node) {
        target.appendChild(index === 0 ? node : node.cloneNode(true));
      });
    });
  };

  fn.empty = function () {
    return this.each(function () { this.innerHTML = ""; });
  };

  fn.remove = function () {
    return this.each(function () {
      if (this.parentNode) this.parentNode.removeChild(this);
    });
  };

  function toMs(speed) {
    if (typeof speed === "number") return speed;
    if (speed === "slow") return 600;
    if (speed === "fast") return 200;
    return 400;
  }

  function cancelTween(el) {
    if (el.__modFrame) {
      cancelAnimationFrame(el.__modFrame);
      el.__modFrame = null;
    }
  }

  function tween(el, from, to, ms, done) {
    cancelTween(el);
    el.style.opacity = String(from);
    var started = null;
    function frame(now) {
      if (started === null) started = now;
      var t = ms <= 0 ? 1 : Math.min(1, (now - started) / ms);
      el.style.opacity = String(from + (to - from) * t);
      if (t < 1) {
        el.__modFrame = requestAnimationFrame(frame);
      } else {
        el.__modFrame = null;
        if (done) done.call(el);
      }
    }
    el.__modFrame = requestAnimationFrame(frame);
  }

  fn.fadeIn = function (speed, done) {
    var ms = toMs(speed);
    return this.each(function () {
      var el = this;
      if (el.style.display === "none") el.style.display = "";
      if (getComputedStyle(el).display === "none") el.style.display = "block";
      tween(el, 0, 1, ms, done);
    });
  };

  fn.fadeOut = function (speed, done) {
    var ms = toMs(speed);
    return this.each(function () {
      var el = this;
      var current = parseFloat(getComputedStyle(el).opacity);
      tween(el, isNaN(current) ? 1 : current, 0, ms, function () {
        el.style.display = "none";
        el.style.opacity = "";
        if (done) done.call(el);
      });
    });
  };

  fn.stop = function () {
    return this.each(function () { cancelTween(this); });
  };

  function serialize(data) {
    if (!data || typeof data !== "object") return data || "";
    return Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join("&");
  }

  function ajax(options) {
    var d = Deferred();
    var xf = options.xhrFields || {};
    var method = String(options.type || options.method || "GET").toUpperCase();
    var url = options.url;
    var body = null;
    var payload = serialize(options.data);
    if (payload) {
      if (method === "GET") url += (url.indexOf("?") === -1 ? "?" : "&") + payload;
      else body = payload;
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (xf.responseType) xhr.responseType = xf.responseType;
    if (typeof xf.onprogress === "function") xhr.addEventListener("progress", xf.onprogress);
    if (body !== null) xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
      var ok = (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
      if (!ok) {
        d.reject(xhr, "error", xhr.statusText);
        return;
      }
      var data = xhr.response;
      if (!xf.responseType) {
        data = xhr.responseText;
        var type = xhr.getResponseHeader("Content-Type") || "";
        if (type.indexOf("json") !== -1) {
          try { data = JSON.parse(data); } catch (err) { data = xhr.responseText; }
        }
      }
      d.resolve(data, "success", xhr);
    };
    xhr.onerror = function () { d.reject(xhr, "error", "network"); };
    d.done(options.success).fail(options.error);
    xhr.send(body);
    return d;
  }

  $.ajax = ajax;
  $.get = function (url, data, done) {
    if (typeof data === "function") {
      done = data;
      data = null;
    }
    var d = ajax({ type: "GET", url: url, data: data });
    if (done) d.done(done);
    return d;
  };
  $.Deferred = Deferred;
  $.fn = fn;

  return $;
});

Kernel.define("vendor", [], function () {
  var head = document.head || document.documentElement;

  if (typeof host.FastClick === "undefined") {
    host.FastClick = {
      attach: function () {
        if (document.getElementById("mod-touch-style")) return;
        var style = document.createElement("style");
        style.id = "mod-touch-style";
        style.textContent = "html, body, * { touch-action: manipulation; }";
        (document.head || document.documentElement).appendChild(style);
      }
    };
  }

  if (typeof host.PIXI === "undefined") {
    var pixi = document.createElement("script");
    pixi.id = "mod-pixi";
    pixi.src = "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.3.12/pixi.min.js";
    pixi.async = false;
    head.appendChild(pixi);
  }

  if (typeof host.moment === "undefined") {
    var currentLocale = "en";
    var moment = function (parts) {
      var date = Array.isArray(parts) ? new Date(parts[0], parts[1], parts[2]) : new Date(parts || Date.now());
      return {
        format: function (pattern) {
          if (pattern === "LL") {
            try {
              return new Intl.DateTimeFormat(currentLocale, { year: "numeric", month: "long", day: "numeric" }).format(date);
            } catch (err) {
              return date.toDateString();
            }
          }
          return date.toISOString();
        }
      };
    };
    moment.locale = function (name) {
      if (name) currentLocale = String(name);
      return currentLocale;
    };
    host.moment = moment;
  }

  if (typeof host.ga === "undefined") {
    var analyticsQueue = [];
    host.ga = function () {
      analyticsQueue.push(Array.prototype.slice.call(arguments));
    };
    host.ga.queue = analyticsQueue;
  }

  return host;
});

Kernel.define("game", ["dom", "vendor", "bus"], function ($, vendor, bus) {
{
    "use strict";
    function _typeof(t) {
        "@babel/helpers - typeof";
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    var GoogleAuth;
    !function() {
        var t = {}
          , a = {}
          , e = {}
          , i = {};
        window.addEventListener("load", function() {
            if (document.getElementById("game-wrap").style.display = "block",
            !function() {
                return function(t, a, i) {
                    function c(t, a) {
                        return _typeof(t) === a
                    }
                    function n() {
                        return "function" != _typeof(a.createElement) ? a.createElement(arguments[0]) : b ? a.createElementNS.call(a, "http://www.w3.org/2000/svg", arguments[0]) : a.createElement.apply(a, arguments)
                    }
                    var f = []
                      , o = []
                      , h = {
                        _version: "3.3.1",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(t, a) {
                            var e = this;
                            setTimeout(function() {
                                a(e[t])
                            }, 0)
                        },
                        addTest: function(t, a, e) {
                            o.push({
                                name: t,
                                fn: a,
                                options: e
                            })
                        },
                        addAsyncTest: function(t) {
                            o.push({
                                name: null,
                                fn: t
                            })
                        }
                    }
                      , d = function() {};
                    d.prototype = h,
                    d = new d;
                    var s = !1;
                    try {
                        s = "WebSocket" in t && 2 === t.WebSocket.CLOSING
                    } catch (t) {}
                    d.addTest("websockets", s);
                    var r = a.documentElement
                      , b = "svg" === r.nodeName.toLowerCase();
                    d.addTest("canvas", function() {
                        var t = n("canvas");
                        return !(!t.getContext || !t.getContext("2d"))
                    }),
                    d.addTest("canvastext", function() {
                        return !1 !== d.canvas && "function" == _typeof(n("canvas").getContext("2d").fillText)
                    }),
                    function() {
                        var t, a, i, n, h, s, r;
                        for (var b in o)
                            if (o.hasOwnProperty(b)) {
                                if (t = [],
                                a = o[b],
                                a.name && (t.push(a.name.toLowerCase()),
                                a.options && a.options.aliases && a.options.aliases.length))
                                    for (i = 0; i < a.options.aliases.length; i++)
                                        t.push(a.options.aliases[i].toLowerCase());
                                for (n = c(a.fn, "function") ? a.fn() : a.fn,
                                h = 0; h < t.length; h++)
                                    s = t[h],
                                    r = s.split("."),
                                    1 === r.length ? d[r[0]] = n : (!d[r[0]] || d[r[0]] instanceof Boolean || (d[r[0]] = new Boolean(d[r[0]])),
                                    d[r[0]][r[1]] = n),
                                    f.push((n ? "" : "no-") + r.join("-"))
                            }
                    }(),
                    function(t) {
                        var a = r.className
                          , i = d._config.classPrefix || "";
                        if (b && (a = a.baseVal),
                        d._config.enableJSClass) {
                            var c = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                            a = a.replace(c, "$1" + i + "js$2")
                        }
                        d._config.enableClasses && (a += " " + i + t.join(" " + i),
                        b ? r.className.baseVal = a : r.className = a)
                    }(f),
                    delete h.addTest,
                    delete h.addAsyncTest;
                    for (var u = 0; u < d._q.length; u++)
                        d._q[u]();
                    t.Modernizr = d
                }(window, document),
                Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
            }())
                return void (document.getElementById("error-view").style.display = "block");
            i.b = {
                c: function(t, a, e) {
                    t.stop(),
                    t.fadeIn(a, e)
                },
                d: function(t, a, e) {
                    t.stop(),
                    t.fadeOut(a, e)
                }
            },
            i.e = function() {
                var t = new Function("return PIXI;")()
                  , a = t["BLEND_MODES"]
                  , i = t["WRAP_MODES"];
                return {
                    f: t["Container"],
                    g: t["BaseTexture"],
                    h: t["Texture"],
                    i: t["Renderer"],
                    j: t["Graphics"],
                    k: t["Shader"],
                    l: t["Rectangle"],
                    m: t["Sprite"],
                    n: t["Text"],
                    o: t["Geometry"],
                    p: t["Mesh"],
                    q: {
                        r: a["ADD"],
                        s: a["SCREEN"],
                        t: a["MULTIPLY"]
                    },
                    u: {
                        v: i["REPEAT"]
                    },
                    w: {
                        z: function(t) {
                            null != t.parent && t.parent.removeChild(t)
                        }
                    }
                }
            }(),
            a.A = {
                B: window["runtimeHash"],
                C: "https://gateway.wormate.io",
                D: "https://resources.wormate.io",
                F: "/images/linelogo-hw2023.png",
                G: "/images/guest-avatar-hw2023.png",
                H: "/images/confetti-hw2023.png",
                I: "/images/bg-event-pattern-hw2023.png"
            },
            a.A.J = function() {
                var t = window["I18N_LANG"];
                return t || (t = "en"),
                t
            }(),
            a.A.K = function() {
                var t;
                switch (a.A.J) {
                case "uk":
                    t = "uk_UA";
                    break;
                case "de":
                    t = "de_DE";
                    break;
                case "fr":
                    t = "fr_FR";
                    break;
                case "es":
                    t = "es_ES";
                    break;
                default:
                    t = "en_US"
                }
                return t
            }(),
            moment.locale(a.A.K),
            a.L = null,
            a.M = 2 * Math.PI,
            a.N = Math.PI,
            function() {
                var t = window["I18N_MESSAGES"];
                e.O = function(a) {
                    return t[a]
                }
            }(),
            e.P = function(t) {
                return t[a.A.J] ? t[a.A.J] : t["en"] ? t["en"] : t["x"]
            }
            ,
            e.Q = function(t) {
                return encodeURI(t)
            }
            ,
            e.R = function(t, a) {
                return setInterval(t, a)
            }
            ,
            e.S = function(t, a) {
                return setTimeout(t, a)
            }
            ,
            e.T = function(t) {
                clearTimeout(t)
            }
            ,
            e.U = function(t) {
                var a = (Math.floor(t) % 60).toString()
                  , i = (Math.floor(t / 60) % 60).toString()
                  , c = (Math.floor(t / 3600) % 24).toString()
                  , n = Math.floor(t / 86400).toString()
                  , f = e.O("util.time.days")
                  , o = e.O("util.time.hours")
                  , h = e.O("util.time.min")
                  , d = e.O("util.time.sec");
                return n > 0 ? n + " " + f + " " + c + " " + o + " " + i + " " + h + " " + a + " " + d : c > 0 ? c + " " + o + " " + i + " " + h + " " + a + " " + d : i > 0 ? i + " " + h + " " + a + " " + d : a + " " + d
            }
            ,
            e.V = function(t) {
                return t.includes("href") ? t.replaceAll("href", "target=\"_black\" href") : t
            }
            ,
            e.W = function(t, a, i) {
                var c = document.createElement("script")
                  , n = !0;
                "undefined" !== _typeof(a) && null !== a && ("undefined" !== _typeof(a.id) && (c.id = a.id),
                "undefined" !== _typeof(a.async) && a.async && (c.async = "async"),
                "undefined" !== _typeof(a.defer) && a.defer && (c.defer = "defer"),
                "undefined" !== _typeof(a.crossorigin) && (c.crossorigin = a.crossorigin)),
                c.type = "text/javascript",
                c.src = t,
                i && (c.onload = c.onreadystatechange = function() {
                    n = !1;
                    try {
                        i()
                    } catch (t) {}
                    c.onload = c.onreadystatechange = null
                }
                ),
                (document.head || document.getElementsByTagName("head")[0]).appendChild(c)
            }
            ,
            e.X = function(t, a) {
                var e = a;
                return e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                e.parent = t,
                e
            }
            ,
            e.Y = function(t) {
                return t %= a.M,
                t < 0 ? t + a.M : t
            }
            ,
            e.Z = function(t, a, i) {
                return e.$(i, t, a)
            }
            ,
            e.$ = function(t, a, e) {
                return t > e ? e : t < a ? a : Number.isFinite(t) ? t : .5 * (a + e)
            }
            ,
            e._ = function(t, a, e, i) {
                return a > t ? Math.min(a, t + e * i) : Math.max(a, t - e * i)
            }
            ,
            e.aa = function(t, a, e, i, c) {
                return a + (t - a) * Math.pow(1 - i, e / c)
            }
            ,
            e.ba = function(t, a, e) {
                return t - (t - a) * e
            }
            ,
            e.ca = function(t, a, e, i) {
                var c = e
                  , n = a
                  , f = a + i;
                if (null == t)
                    throw new TypeError;
                var o = t.length >>> 0
                  , h = c >> 0
                  , d = h < 0 ? Math.max(o + h, 0) : Math.min(h, o)
                  , s = n >> 0
                  , r = s < 0 ? Math.max(o + s, 0) : Math.min(s, o)
                  , b = void 0 === f ? o : f >> 0
                  , u = b < 0 ? Math.max(o + b, 0) : Math.min(b, o)
                  , p = Math.min(u - r, o - d)
                  , l = 1;
                for (r < d && d < r + p && (l = -1,
                r += p - 1,
                d += p - 1); p > 0; )
                    r in t ? t[d] = t[r] : delete t[d],
                    r += l,
                    d += l,
                    p--;
                return t
            }
            ,
            e.da = function(t, a) {
                return t + (a - t) * Math.random()
            }
            ,
            e.ea = function(t) {
                return t[parseInt(Math.random() * t.length)]
            }
            ,
            e.fa = function() {
                return Math.random().toString(36).substring(2, 15)
            }
            ,
            e.ga = function(t, a, e) {
                var i = (1 - Math.abs(2 * e - 1)) * a
                  , c = i * (1 - Math.abs(t / 60 % 2 - 1))
                  , n = e - i / 2;
                return 0 <= t && t < 60 ? [n + i, n + c, n] : 60 <= t && t < 120 ? [n + c, n + i, n] : 120 <= t && t < 180 ? [n, n + i, n + c] : 180 <= t && t < 240 ? [n, n + c, n + i] : 240 <= t && t < 300 ? [n + c, n, n + i] : [n + i, n, n + c]
            }
            ,
            e.ha = function(t, a, e) {
                $.get(t).fail(a).done(e)
            }
            ,
            e.ia = function(t, a, i, c) {
                $.ajax({
                    type: "GET",
                    url: t,
                    xhrFields: {
                        responseType: "arraybuffer",
                        onprogress: function(t) {
                            t.lengthComputable && c(t.loaded / t.total * 100)
                        }
                    }
                }).fail(a).done(i)
            }
            ,
            e.ja = function() {
                return Date.now()
            }
            ,
            e.ka = function(t, a) {
                for (var e in t)
                    t.hasOwnProperty(e) && a(e, t[e])
            }
            ,
            e.la = function(t) {
                for (var a = t.length - 1; a > 0; a--) {
                    var e = Math.floor(Math.random() * (a + 1))
                      , i = t[a];
                    t[a] = t[e],
                    t[e] = i
                }
                return t
            }
            ,
            t.ma = new Function("return ArrayBuffer;")(),
            t.na = new Function("return DataView;")(),
            t.oa = function() {
                function t(t) {
                    this.pa = t,
                    this.qa = 0
                }
                var a = "getInt8";
                t.prototype.ra = function() {
                    var t = this.pa[a](this.qa);
                    return this.qa += 1,
                    t
                }
                ;
                var i = "getInt16";
                t.prototype.sa = function() {
                    var t = this.pa[i](this.qa);
                    return this.qa += 2,
                    t
                }
                ;
                var c = "getInt32";
                t.prototype.ta = function() {
                    var t = this.pa[c](this.qa);
                    return this.qa += 4,
                    t
                }
                ;
                var n = "getFloat32";
                return t.prototype.ua = function() {
                    var t = this.pa[n](this.qa);
                    return this.qa += 4,
                    t
                }
                ,
                t
            }(),
            t.va = function() {
                function t(t) {
                    this.pa = t,
                    this.qa = 0
                }
                var a = "setInt8";
                t.prototype.wa = function(t) {
                    this.pa[a](this.qa, t),
                    this.qa += 1
                }
                ;
                var i = "setInt16";
                return t.prototype.xa = function(t) {
                    this.pa[i](this.qa, t),
                    this.qa += 2
                }
                ,
                t
            }(),
            e.ya = function() {
                function t() {
                    $("#adbl-1").text(e.O("index.game.antiadblocker.msg1")),
                    $("#adbl-2").text(e.O("index.game.antiadblocker.msg2")),
                    $("#adbl-3").text(e.O("index.game.antiadblocker.msg3")),
                    $("#adbl-4").text(e.O("index.game.antiadblocker.msg4").replace("{0}", 10)),
                    $("#adbl-continue span").text(e.O("index.game.antiadblocker.continue")),
                    i.b.d($("#adbl-continue"), 1),
                    i.b.c(s, 500);
                    for (var t = 10, c = 0; c < 10; c++)
                        e.S(function() {
                            if (t--,
                            $("#adbl-4").text(e.O("index.game.antiadblocker.msg4").replace("{0}", t)),
                            0 === t) {
                                try {
                                    ga("send", "event", "antiadblocker", a.A.B + "_complete")
                                } catch (t) {}
                                i.b.c($("#adbl-continue"), 200)
                            }
                        }, 1e3 * (c + 1))
                }
                var c = !1
                  , n = function() {}
                  , f = {}
                  , o = "1eaom01c3pxu9wd3"
                  , h = $("#" + o)
                  , d = "JDHnkHtYwyXyVgG9"
                  , s = $("#" + d);
                return $("#adbl-continue").click(function() {
                    s.fadeOut(500),
                    n(!1)
                }),
                f.za = function(t) {
                    if (n = t,
                    !c)
                        try {
                            aiptag.cmd.player.push(function() {
                                var t = {};
                                t["AD_WIDTH"] = 960,
                                t["AD_HEIGHT"] = 540,
                                t["AD_FULLSCREEN"] = !0,
                                t["AD_CENTERPLAYER"] = !1,
                                t["LOADING_TEXT"] = "loading advertisement",
                                t["PREROLL_ELEM"] = function() {
                                    return document.getElementById(o)
                                }
                                ,
                                t["AIP_COMPLETE"] = function(t) {
                                    n(!0),
                                    i.b.d(h, 1),
                                    i.b.d(s, 1);
                                    try {
                                        ga("send", "event", "preroll", a.A.B + "_complete")
                                    } catch (t) {}
                                }
                                ,
                                t["AIP_REMOVE"] = function() {}
                                ,
                                aiptag.adplayer = new aipPlayer(t)
                            }),
                            c = !0
                        } catch (t) {}
                }
                ,
                f.Aa = function() {
                    if (_typeof(aiptag.adplayer) !== "undefined") {
                        try {
                            ga("send", "event", "preroll", a.A.B + "_request")
                        } catch (t) {}
                        i.b.c(h, 1),
                        aiptag.cmd.player.push(function() {
                            aiptag.adplayer.startPreRoll()
                        })
                    } else {
                        try {
                            ga("send", "event", "antiadblocker", a.A.B + "_start")
                        } catch (t) {}
                        t()
                    }
                }
                ,
                f
            }
            ,
            e.Ba = function(t, i) {
                var c = $("#" + t)
                  , n = i
                  , f = {}
                  , o = !1;
                return f.za = function() {
                    if (!o) {
                        c.empty(),
                        c.append("<div id='" + n + "'></div>");
                        try {
                            try {
                                ga("send", "event", "banner", a.A.B + "_display")
                            } catch (t) {}
                            aiptag.cmd.display.push(function() {
                                aipDisplayTag.display(n)
                            }),
                            o = !0
                        } catch (t) {}
                    }
                }
                ,
                f.Ca = function() {
                    try {
                        try {
                            ga("send", "event", "banner", a.A.B + "_refresh")
                        } catch (t) {}
                        aiptag.cmd.display.push(function() {
                            aipDisplayTag.display(n)
                        })
                    } catch (t) {}
                }
                ,
                f
            }
            ,
            t.Da = function() {
                function t(t, a, e, i, c, n, f, o, h, d) {
                    this.Ea = t,
                    this.Fa = a,
                    this.Ga = null,
                    this.Ha = !1,
                    this.Ia = e,
                    this.Ja = i,
                    this.Ka = c,
                    this.La = n,
                    this.Ma = f || (h || c) / 2,
                    this.Na = o || (d || n) / 2,
                    this.Oa = h || c,
                    this.Pa = d || n,
                    this.Qa = .5 - (this.Ma - .5 * this.Oa) / this.Ka,
                    this.Ra = .5 - (this.Na - .5 * this.Pa) / this.La,
                    this.Sa = this.Ka / this.Oa,
                    this.Ta = this.La / this.Pa
                }
                return t.Ua = function() {
                    return new t("",null,0,0,0,0,0,0,0,0)
                }
                ,
                t.Va = function(a, i, c) {
                    return new t(a,i,c["x"],c["y"],c["w"],c["h"],c["px"],c["py"],c["pw"],c["ph"])
                }
                ,
                t.prototype.Wa = function() {
                    return this.Ha ? this.Ga : (null != this.Fa && (this.Ga = new i.e.h(this.Fa,new i.e.l(this.Ia,this.Ja,this.Ka,this.La))),
                    this.Ha = !0,
                    this.Ga)
                }
                ,
                t.prototype.Xa = function() {
                    null != this.Ga && this.Ga.destroy()
                }
                ,
                t
            }(),
            t.Ya = function() {
                function a(t, a, e, i, c, n, f, o, h, d, s, r, b, u, p, l, g, v) {
                    this.Za = t,
                    this.$a = a,
                    this._a = e,
                    this.ab = i,
                    this.bb = c,
                    this.cb = n,
                    this.db = f,
                    this.eb = o,
                    this.fb = h,
                    this.gb = d,
                    this.hb = s,
                    this.ib = r,
                    this.jb = b,
                    this.kb = u,
                    this.lb = p,
                    this.mb = l,
                    this.nb = g,
                    this.ob = v
                }
                return a.prototype.Xa = function() {
                    for (var t = 0; t < this.Za.length; t++)
                        this.Za[t].dispose(),
                        this.Za[t].destroy();
                    this.Za = [];
                    for (var a = 0; a < this.$a.length; a++)
                        this.$a[a].Xa();
                    this.$a = []
                }
                ,
                a.Ua = function() {
                    var i = new a.pb(t.rb.qb,t.rb.qb)
                      , c = new a.sb("#ffffff",[t.rb.qb],[t.rb.qb]);
                    return new a([],[],{},i,{},new a.tb(t.rb.qb),{},c,{},new a.ub("",c,i),{},new a.vb([t.rb.qb]),{},new a.vb([t.rb.qb]),{},new a.vb([t.rb.qb]),{},new a.vb([t.rb.qb]))
                }
                ,
                a.wb = function(i, c, n, f) {
                    var o = new a.pb(t.rb.qb,t.rb.qb)
                      , h = new a.sb("#ffffff",[i],[c]);
                    return new a([],[],{},o,{},new a.tb(t.rb.qb),{},h,{},new a.ub("",h,o),{},new a.vb([n]),{},new a.vb([f]),{},new a.vb([t.rb.qb]),{},new a.vb([t.rb.qb]))
                }
                ,
                a.xb = function(t, i, c, n) {
                    var f = {};
                    e.ka(t["colorDict"], function(t, a) {
                        f[t] = "#" + a
                    });
                    for (var o = {}, h = 0; h < t["skinArrayDict"].length; h++) {
                        var d = t["skinArrayDict"][h];
                        o[d["id"]] = new a.sb(f[d["prime"]],d["base"].map(function(t) {
                            return i[t]
                        }),d["glow"].map(function(t) {
                            return i[t]
                        }))
                    }
                    var s, r = t["skinUnknown"];
                    s = new a.sb(f[r["prime"]],r["base"].map(function(t) {
                        return i[t]
                    }),r["glow"].map(function(t) {
                        return i[t]
                    }));
                    var b = {};
                    e.ka(t["eyesDict"], function(t, c) {
                        var n = parseInt(t);
                        b[n] = new a.vb(c["base"].map(function(t) {
                            return i[t["region"]]
                        }))
                    });
                    var u = new a.vb(t["eyesUnknown"]["base"].map(function(t) {
                        return i[t["region"]]
                    }))
                      , p = {};
                    e.ka(t["mouthDict"], function(t, c) {
                        var n = parseInt(t);
                        p[n] = new a.vb(c["base"].map(function(t) {
                            return i[t["region"]]
                        }))
                    });
                    var l = new a.vb(t["mouthUnknown"]["base"].map(function(t) {
                        return i[t["region"]]
                    }))
                      , g = {};
                    e.ka(t["hatDict"], function(t, c) {
                        var n = parseInt(t);
                        g[n] = new a.vb(c["base"].map(function(t) {
                            return i[t["region"]]
                        }))
                    });
                    var v = new a.vb(t["hatUnknown"]["base"].map(function(t) {
                        return i[t["region"]]
                    }))
                      , y = {};
                    e.ka(t["glassesDict"], function(t, c) {
                        var n = parseInt(t);
                        y[n] = new a.vb(c["base"].map(function(t) {
                            return i[t["region"]]
                        }))
                    });
                    var j = new a.vb(t["glassesUnknown"]["base"].map(function(t) {
                        return i[t["region"]]
                    }))
                      , m = {};
                    e.ka(t["portionDict"], function(t, c) {
                        t = parseInt(t),
                        m[t] = new a.pb(i[c["base"]],i[c["glow"]])
                    });
                    var w, k = t["portionUnknown"];
                    w = new a.pb(i[k["base"]],i[k["glow"]]);
                    var L = {};
                    e.ka(t["abilityDict"], function(t, c) {
                        t = parseInt(t),
                        L[t] = new a.tb(i[c["base"]])
                    });
                    var C, M = t["abilityUnknown"];
                    C = new a.tb(i[M["base"]]);
                    var S = {};
                    e.ka(t["teamDict"], function(t, c) {
                        t = parseInt(t),
                        S[t] = new a.ub(c["title"],new a.sb(f[c["skin"]["prime"]],null,c["skin"]["glow"].map(function(t) {
                            return i[t]
                        })),new a.pb(null,i[c["portion"]["glow"]]))
                    });
                    var $ = new a.ub({},s,w);
                    return new a(c,n,m,w,L,C,o,s,S,$,b,u,p,l,g,v,y,j)
                }
                ,
                a.prototype.yb = function(a) {
                    for (var i = e.la(Object.keys(this.db)).slice(0, a), c = e.la(Object.keys(this.hb)).slice(0, a), n = e.la(Object.keys(this.jb)).slice(0, a), f = e.la(Object.keys(this.lb)).slice(0, a), o = e.la(Object.keys(this.nb)).slice(0, a), h = [], d = 0; d < a; d++) {
                        var s = i.length > 0 ? i[d % i.length] : 0
                          , r = c.length > 0 ? c[d % c.length] : 0
                          , b = n.length > 0 ? n[d % n.length] : 0
                          , u = f.length > 0 ? f[d % f.length] : 0
                          , p = o.length > 0 ? o[d % o.length] : 0;
                        h.push(new t.zb(s,r,b,u,p))
                    }
                    return h
                }
                ,
                a.prototype.Ab = function(t) {
                    return this.db.hasOwnProperty(t) ? this.db[t] : this.eb
                }
                ,
                a.prototype.Bb = function(t) {
                    return this.fb.hasOwnProperty(t) ? this.fb[t] : this.gb
                }
                ,
                a.prototype.Cb = function(t) {
                    return this.hb.hasOwnProperty(t) ? this.hb[t] : this.ib
                }
                ,
                a.prototype.Db = function(t) {
                    return this.jb.hasOwnProperty(t) ? this.jb[t] : this.kb
                }
                ,
                a.prototype.Eb = function(t) {
                    return this.nb.hasOwnProperty(t) ? this.nb[t] : this.ob
                }
                ,
                a.prototype.Fb = function(t) {
                    return this.lb.hasOwnProperty(t) ? this.lb[t] : this.mb
                }
                ,
                a.prototype.Gb = function(t) {
                    return this._a.hasOwnProperty(t) ? this._a[t] : this.ab
                }
                ,
                a.prototype.Hb = function(t) {
                    return this.bb.hasOwnProperty(t) ? this.bb[t] : this.cb
                }
                ,
                a.ub = function() {
                    function t(t, a, e) {
                        this.Ib = t,
                        this.Jb = a,
                        this.Kb = e
                    }
                    return t
                }(),
                a.sb = function() {
                    function t(t, a, e) {
                        this.Lb = t,
                        this.Mb = a,
                        this.Nb = e
                    }
                    return t
                }(),
                a.vb = function() {
                    function t(t) {
                        this.Mb = t
                    }
                    return t
                }(),
                a.pb = function() {
                    function t(t, a) {
                        this.Mb = t,
                        this.Nb = a
                    }
                    return t
                }(),
                a.tb = function() {
                    function t(t) {
                        this.Mb = t
                    }
                    return t
                }(),
                a
            }(),
            t.rb = function() {
                function a() {
                    var a = i.e.g.from("/images/wear-ability.png");
                    this.Ob = new t.Da("magnet_ability",a,158,86,67,124,148,63.5,128,128),
                    this.Pb = new t.Da("velocity_ability",a,158,4,87,74,203,63.5,128,128),
                    this.Qb = new t.Da("flex_ability",a,4,4,146,146,63.5,63.5,128,128);
                    var c = i.e.g.from("/images/def-look.png")
                      , n = new t.Da("def_eyes",c,0,0,42,80,75,64,128,128)
                      , f = new t.Da("def_mouth",c,46,0,20,48,109,63,128,128)
                      , o = new t.Da("def_skin_glow",c,70,0,32,32,0,0,0,0)
                      , h = new t.Da("def_skin_base",c,46,52,64,64,0,0,0,0)
                      , d = t.Ya.wb(h, o, n, f);
                    this.Rb = new t.Sb({},d),
                    this.Tb = -1e4,
                    this.Ub = -1e4,
                    this.Vb = function() {
                        var t = window.document.createElement("canvas");
                        return t.width = 80,
                        t.height = 80,
                        {
                            Wb: t,
                            Xb: t.getContext("2d"),
                            Ga: new i.e.h(i.e.g.from(t))
                        }
                    }(),
                    this.Yb = null,
                    this.Zb = []
                }
                return a.qb = t.Da.Ua(),
                a.prototype.za = function() {}
                ,
                a.prototype.$b = function(a, i, c) {
                    var n = this
                      , f = this.Rb._b();
                    if (f > 0 && e.ja() - this.Tb < 12e5)
                        return void (null != a && a());
                    if (null != this.Yb && !this.Yb.ac()) {
                        if (e.ja() - this.Tb < 3e5)
                            return void (null != a && a());
                        this.Yb.bc(),
                        this.Yb = null
                    }
                    var o = new t.cc(f);
                    o.dc(function(t, a) {
                        o === n.Yb && null != c && c(t, a)
                    }),
                    o.ec(function(t) {
                        o === n.Yb && null != i && i(t)
                    }),
                    o.fc(function() {
                        o === n.Yb && null != i && i(new Error)
                    }),
                    o.gc(function() {
                        o === n.Yb && null != a && a()
                    }),
                    o.hc(function(t) {
                        if (o === n.Yb)
                            return n.Ub = e.ja(),
                            n.Yb = null,
                            n.ic(),
                            n.Rb.jc().Xa(),
                            n.Rb = t,
                            null != a && a(),
                            void n.kc();
                        try {
                            t.jc().Xa()
                        } catch (t) {}
                    }),
                    o.lc(),
                    this.Tb = e.ja(),
                    this.Yb = o
                }
                ,
                a.prototype.ic = function() {}
                ,
                a.prototype.mc = function() {
                    return this.Rb._b() > 0
                }
                ,
                a.prototype.nc = function() {
                    return this.Rb.oc()
                }
                ,
                a.prototype.pc = function() {
                    return this.Vb
                }
                ,
                a.prototype.qc = function(t) {
                    this.Zb.push(t)
                }
                ,
                a.prototype.kc = function() {
                    for (var t = 0; t < this.Zb.length; t++)
                        this.Zb[t]()
                }
                ,
                a.prototype.jc = function() {
                    return this.Rb.jc()
                }
                ,
                a
            }(),
            t.rc = function() {
                function t(t) {
                    this.sc = t
                }
                return t.prototype.tc = function(t) {
                    return this.sc[t]
                }
                ,
                t.uc = function() {
                    function a() {
                        this.vc = []
                    }
                    return a.prototype.wc = function(a, e) {
                        for (var i = 0; i < this.vc.length; i++)
                            if (this.vc[i].xc === a)
                                throw new Error;
                        return this.vc.push(new t.yc(a,e)),
                        this
                    }
                    ,
                    a.prototype.zc = function() {
                        for (var a = 0, e = 0; e < this.vc.length; e++)
                            a += this.vc[e].Ac;
                        for (var i = {}, c = 0, n = 0; n < this.vc.length; n++) {
                            var f = this.vc[n];
                            f.Ac = f.Ac / a,
                            f.Bc = c,
                            f.Cc = c + f.Ac,
                            c = f.Cc,
                            i[f.xc] = f
                        }
                        return new t(i)
                    }
                    ,
                    a
                }(),
                t.yc = function() {
                    function t(t, a) {
                        this.xc = t,
                        this.Ac = a,
                        this.Bc = 0,
                        this.Cc = 0
                    }
                    return t.prototype.Dc = function(t) {
                        return this.Bc + (this.Cc - this.Bc) * t
                    }
                    ,
                    t
                }(),
                t
            }(),
            t.Ec = function() {
                function c() {
                    this.Fc = new i.e.f,
                    this.Fc.sortableChildren = !0,
                    this.Gc = new L,
                    this.Gc.zIndex = n * (2 * (f + 1) + 1 + 3),
                    this.Hc = 0,
                    this.Ic = new Array(f),
                    this.Ic[0] = this.Jc(0, new t.Kc, new t.Kc);
                    for (var a = 1; a < f; a++)
                        this.Ic[a] = this.Jc(a, new t.Kc, new t.Kc);
                    this.Lc = 0,
                    this.Mc = 0,
                    this.Nc = 0
                }
                var n = .001
                  , f = 797
                  , o = .1 * Math.PI
                  , h = -.06640625
                  , d = .84375
                  , s = .2578125
                  , r = -.03515625
                  , b = -.0625
                  , u = .5625
                  , p = 3 * h + d
                  , l = s - 3 * h
                  , g = h + r
                  , v = .375
                  , y = .75
                  , j = b + b
                  , m = 3 * r + s
                  , w = d - 3 * r
                  , k = r + h;
                c.Oc = f,
                c.prototype.Jc = function(t, a, e) {
                    var i = new C(a,e);
                    return a.Pc.zIndex = n * (2 * (f - t) + 1 + 3),
                    e.Pc.zIndex = n * (2 * (f - t) - 2 + 3),
                    i
                }
                ,
                c.prototype.Qc = function(a, e, i, c, n, f, o, h) {
                    var d = i.Mb
                      , s = a === t.Sc.Rc ? e.Jb.Nb : i.Nb;
                    if (d.length > 0 && s.length > 0)
                        for (var r = 0; r < this.Ic.length; r++)
                            this.Ic[r].Uc.Tc(d[r % d.length]),
                            this.Ic[r].Vc.Tc(s[r % s.length]),
                            this.Ic[r].Uc.Wc(h),
                            this.Ic[r].Vc.Wc(h);
                    this.Gc.Qc(c, n, f, o)
                }
                ;
                var L = function() {
                    var c = e.X(i.e.f, function() {
                        i.e.f.call(this),
                        this.sortableChildren = !0,
                        this.Xc = [],
                        this.Yc = [],
                        this.Zc = [],
                        this.$c = [],
                        this._c = new i.e.f,
                        this.ad = [];
                        for (var e = 0; e < 4; e++) {
                            var c = new t.Kc;
                            c.Tc(a.L.bd.Ob),
                            this._c.addChild(c.Pc),
                            this.ad.push(c)
                        }
                        this._c.zIndex = .0011,
                        this.addChild(this._c),
                        this.cd(),
                        this.dd = new t.Kc,
                        this.dd.Tc(a.L.bd.Pb),
                        this.dd.Pc.zIndex = .001,
                        this.addChild(this.dd.Pc),
                        this.ed()
                    });
                    return c.prototype.Qc = function(t, a, e, i) {
                        this.fd(.002, this.Xc, t.Mb),
                        this.fd(.003, this.Yc, a.Mb),
                        this.fd(.004, this.$c, i.Mb),
                        this.fd(.005, this.Zc, e.Mb)
                    }
                    ,
                    c.prototype.fd = function(a, e, i) {
                        for (; i.length > e.length; ) {
                            var c = new t.Kc;
                            e.push(c),
                            this.addChild(c.gd())
                        }
                        for (; i.length < e.length; ) {
                            e.pop().z()
                        }
                        for (var n = a, f = 0; f < i.length; f++) {
                            n += 1e-4;
                            var o = e[f];
                            o.Tc(i[f]),
                            o.Pc.zIndex = n
                        }
                    }
                    ,
                    c.prototype.hd = function(t, a, e, i) {
                        this.visible = !0,
                        this.position.set(t, a),
                        this.rotation = i;
                        for (var c = 0; c < this.Xc.length; c++)
                            this.Xc[c].jd(e);
                        for (var n = 0; n < this.Yc.length; n++)
                            this.Yc[n].jd(e);
                        for (var f = 0; f < this.Zc.length; f++)
                            this.Zc[f].jd(e);
                        for (var o = 0; o < this.$c.length; o++)
                            this.$c[o].jd(e)
                    }
                    ,
                    c.prototype.kd = function() {
                        this.visible = !1
                    }
                    ,
                    c.prototype.ld = function(t, a, e, i) {
                        this._c.visible = !0;
                        for (var c = e / 1e3, n = 1 / this.ad.length, f = 0; f < this.ad.length; f++) {
                            var o = 1 - (c + n * f) % 1;
                            this.ad[f].Pc.alpha = 1 - o,
                            this.ad[f].jd(a * (.5 + 4.5 * o))
                        }
                    }
                    ,
                    c.prototype.cd = function() {
                        this._c.visible = !1
                    }
                    ,
                    c.prototype.md = function(t, a, i, c) {
                        this.dd.Pc.visible = !0,
                        this.dd.Pc.alpha = e._(this.dd.Pc.alpha, t.nd ? .9 : .2, c, .0025),
                        this.dd.jd(a)
                    }
                    ,
                    c.prototype.ed = function() {
                        this.dd.Pc.visible = !1
                    }
                    ,
                    c
                }();
                c.prototype.od = function(t) {
                    return this.Mc + this.Nc * Math.sin(t * o - this.Lc)
                }
                ,
                c.prototype.pd = function(a, e, c, n) {
                    var f = 2 * a.qd
                      , o = a.rd
                      , L = a.sd
                      , M = 4 * L - 3
                      , S = M;
                    this.Lc = e / 400 * Math.PI,
                    this.Mc = 1.5 * f,
                    this.Nc = .15 * f * a.td;
                    var $, q, F, x, z, I, A, J;
                    if (q = o[0],
                    I = o[1],
                    n(q, I)) {
                        F = o[2],
                        A = o[3],
                        x = o[4],
                        J = o[5];
                        var P = Math.atan2(J + 2 * I - 3 * A, x + 2 * q - 3 * F);
                        this.Gc.hd(q, I, f, P),
                        this.Ic[0].hd(q, I, f, this.od(0), P),
                        this.Ic[1].hd(p * q + l * F + g * x, p * I + l * A + g * J, f, this.od(1), C.ud(this.Ic[0], this.Ic[2])),
                        this.Ic[2].hd(v * q + y * F + j * x, v * I + y * A + j * J, f, this.od(2), C.ud(this.Ic[1], this.Ic[3])),
                        this.Ic[3].hd(m * q + w * F + k * x, m * I + w * A + k * J, f, this.od(3), C.ud(this.Ic[2], this.Ic[4]))
                    } else
                        this.Gc.kd(),
                        this.Ic[0].kd(),
                        this.Ic[1].kd(),
                        this.Ic[2].kd(),
                        this.Ic[3].kd();
                    for (var E = 4, Y = 2, X = 2 * L - 4; Y < X; Y += 2)
                        q = o[Y],
                        I = o[Y + 1],
                        n(q, I) ? ($ = o[Y - 2],
                        z = o[Y - 1],
                        F = o[Y + 2],
                        A = o[Y + 3],
                        x = o[Y + 4],
                        J = o[Y + 5],
                        this.Ic[E].hd(q, I, f, this.od(E), C.ud(this.Ic[E - 1], this.Ic[E + 1])),
                        E++,
                        this.Ic[E].hd(h * $ + d * q + s * F + r * x, h * z + d * I + s * A + r * J, f, this.od(E), C.ud(this.Ic[E - 1], this.Ic[E + 1])),
                        E++,
                        this.Ic[E].hd(b * $ + u * q + u * F + b * x, b * z + u * I + u * A + b * J, f, this.od(E), C.ud(this.Ic[E - 1], this.Ic[E + 1])),
                        E++,
                        this.Ic[E].hd(r * $ + s * q + d * F + h * x, r * z + s * I + d * A + h * J, f, this.od(E), C.ud(this.Ic[E - 1], this.Ic[E + 1])),
                        E++) : (this.Ic[E].kd(),
                        E++,
                        this.Ic[E].kd(),
                        E++,
                        this.Ic[E].kd(),
                        E++,
                        this.Ic[E].kd(),
                        E++);
                    for (q = o[2 * L - 4],
                    I = o[2 * L - 3],
                    n(q, I) ? ($ = o[2 * L - 6],
                    z = o[2 * L - 5],
                    F = o[2 * L - 2],
                    A = o[2 * L - 1],
                    this.Ic[M - 5].hd(q, I, f, this.od(M - 5), C.ud(this.Ic[M - 6], this.Ic[M - 4])),
                    this.Ic[M - 4].hd(k * $ + w * q + m * F, k * z + w * I + m * A, f, this.od(M - 4), C.ud(this.Ic[M - 5], this.Ic[M - 3])),
                    this.Ic[M - 3].hd(j * $ + y * q + v * F, j * z + y * I + v * A, f, this.od(M - 3), C.ud(this.Ic[M - 4], this.Ic[M - 2])),
                    this.Ic[M - 2].hd(g * $ + l * q + p * F, g * z + l * I + p * A, f, this.od(M - 2), C.ud(this.Ic[M - 3], this.Ic[M - 1])),
                    this.Ic[M - 1].hd(F, A, f, this.od(M - 1), C.ud(this.Ic[M - 2], this.Ic[M - 1]))) : (this.Ic[M - 5].kd(),
                    this.Ic[M - 4].kd(),
                    this.Ic[M - 3].kd(),
                    this.Ic[M - 2].kd(),
                    this.Ic[M - 1].kd()),
                    0 === this.Hc && S > 0 && this.Fc.addChild(this.Gc),
                    this.Hc > 0 && 0 === S && i.e.w.z(this.Gc); this.Hc < S; )
                        this.Fc.addChild(this.Ic[this.Hc].Uc.gd()),
                        this.Fc.addChild(this.Ic[this.Hc].Vc.gd()),
                        this.Hc += 1;
                    for (; this.Hc > S; )
                        this.Hc -= 1,
                        this.Ic[this.Hc].Vc.z(),
                        this.Ic[this.Hc].Uc.z();
                    var O = a.vd[t.xd.wd];
                    this.Ic[0].yd() && null != O && O.zd ? this.Gc.ld(a, f, e, c) : this.Gc.cd();
                    var B = a.vd[t.xd.Ad];
                    this.Ic[0].yd() && null != B && B.zd ? this.Gc.md(a, f, e, c) : this.Gc.ed()
                }
                ;
                var C = function() {
                    function t(t, a) {
                        this.Uc = t,
                        this.Uc.Bd(!1),
                        this.Vc = a,
                        this.Vc.Bd(!1)
                    }
                    return t.prototype.hd = function(t, a, e, i, c) {
                        this.Uc.Bd(!0),
                        this.Uc.Cd(t, a),
                        this.Uc.jd(e),
                        this.Uc.Dd(c),
                        this.Vc.Bd(!0),
                        this.Vc.Cd(t, a),
                        this.Vc.jd(i),
                        this.Vc.Dd(c)
                    }
                    ,
                    t.prototype.kd = function() {
                        this.Uc.Bd(!1),
                        this.Vc.Bd(!1)
                    }
                    ,
                    t.prototype.yd = function() {
                        return this.Uc.yd()
                    }
                    ,
                    t.ud = function(t, a) {
                        return Math.atan2(t.Uc.Pc.position.y - a.Uc.Pc.position.y, t.Uc.Pc.position.x - a.Uc.Pc.position.x)
                    }
                    ,
                    t
                }();
                return c
            }(),
            t.xd = function() {
                function t(t) {
                    this.Ed = t,
                    this.zd = !1,
                    this.Fd = 1
                }
                return t.Ad = 0,
                t.Gd = 1,
                t.wd = 2,
                t.Hd = 6,
                t.Id = 3,
                t.Jd = 4,
                t.Kd = 5,
                t
            }(),
            t.Sb = function() {
                function a(t, a) {
                    this.Ld = t,
                    this.Md = a
                }
                return a.Nd = new a({},t.Ya.Ua()),
                a.prototype._b = function() {
                    return this.Ld["revision"]
                }
                ,
                a.prototype.oc = function() {
                    return this.Ld
                }
                ,
                a.prototype.jc = function() {
                    return this.Md
                }
                ,
                a
            }(),
            t.cc = function() {
                function c(t) {
                    this.Od = function() {
                        ++c.Pd;
                        return function(t, a) {}
                    }(),
                    this.Qd = t,
                    this.Rd = null,
                    this.Sd = null,
                    this.Td = null,
                    this.Ud = null,
                    this.Vd = null,
                    this.Wd = !1,
                    this.Xd = !1,
                    this.Yd = !1
                }
                return c.Zd = {
                    $d: "0x0",
                    _d: "0x1",
                    ae: "0x2",
                    be: "0x3",
                    ce: "0x4"
                },
                c.Pd = 1e5,
                c.de = (new t.rc.uc).wc(c.Zd.$d, 1).wc(c.Zd._d, 10).wc(c.Zd.ae, 50).wc(c.Zd.be, 15).wc(c.Zd.ce, 5).zc(),
                c.prototype.hc = function(t) {
                    this.Rd = t
                }
                ,
                c.prototype.gc = function(t) {
                    this.Sd = t
                }
                ,
                c.prototype.ec = function(t) {
                    this.Td = t
                }
                ,
                c.prototype.fc = function(t) {
                    this.Ud = t
                }
                ,
                c.prototype.dc = function(t) {
                    this.Vd = t
                }
                ,
                c.prototype.ac = function() {
                    return this.Yd
                }
                ,
                c.prototype.bc = function() {
                    this.Wd = !0
                }
                ,
                c.prototype.lc = function() {
                    if (!this.Xd) {
                        if (this.Xd = !0,
                        this.Wd)
                            return void this.ee();
                        this.fe()
                    }
                }
                ,
                c.prototype.fe = function() {
                    function t(t) {
                        var a = c.Zd.$d;
                        i.ge(a, c.de.tc(a).Dc(t))
                    }
                    var i = this;
                    if (this.Wd)
                        return void this.ee();
                    $.ajax({
                        type: "GET",
                        url: a.A.D + "/dynamic/assets/revision.json",
                        xhrFields: {
                            onprogress: function(a) {
                                a.lengthComputable && t(a.loaded / a.total)
                            }
                        }
                    }).fail(function() {
                        i.he(new Error)
                    }).done(function(t) {
                        if (t <= i.Qd)
                            return void i.ie();
                        i.je()
                    })
                }
                ,
                c.prototype.je = function() {
                    function t(t) {
                        var a = c.Zd._d;
                        i.ge(a, c.de.tc(a).Dc(t))
                    }
                    var i = this;
                    if (this.Wd)
                        return void this.ee();
                    $.ajax({
                        type: "GET",
                        url: a.A.D + "/dynamic/assets/registry.json",
                        xhrFields: {
                            onprogress: function(a) {
                                a.lengthComputable && t(a.loaded / a.total)
                            }
                        }
                    }).fail(function() {
                        i.he(new Error)
                    }).done(function(t) {
                        if (t["revision"] <= i.Qd)
                            return void i.ie();
                        i.ke(t)
                    })
                }
                ,
                c.prototype.ke = function(t) {
                    function i(t) {
                        var a = c.Zd.ae;
                        n.ge(a, c.de.tc(a).Dc(t))
                    }
                    var n = this;
                    if (this.Wd)
                        return void this.ee();
                    var f = []
                      , o = []
                      , h = 0;
                    for (var d in t["textureDict"])
                        if (t["textureDict"].hasOwnProperty(d)) {
                            var s = t["textureDict"][d]
                              , r = a.A.D + s["relativePath"]
                              , b = s["fileSize"]
                              , u = s["sha256"]
                              , p = new c.le(d,r,b,u);
                            f.push(p);
                            o.push(p),
                            h += b
                        }
                    var l, g = 0, v = function(t) {
                        for (var a = 0; a < o.length; a++)
                            try {
                                window.URL.revokeObjectURL(o[a].me)
                            } catch (t) {}
                        n.he(t)
                    }, y = function(t) {
                        var a = Math.floor(l.ne * t);
                        i((g + a) / h)
                    }, j = function(t) {
                        var a = new Blob([t]);
                        l.me = window.URL.createObjectURL(a),
                        g += l.ne,
                        m()
                    }, m = function() {
                        if (w < o.length)
                            return l = o[w++],
                            void n.oe(l, v, j, y);
                        e.S(function() {
                            return n.pe(t, f)
                        }, 0)
                    }, w = 0;
                    m()
                }
                ,
                c.prototype.oe = function(t, a, i, c) {
                    $.ajax({
                        type: "GET",
                        url: t.qe,
                        xhrFields: {
                            responseType: "arraybuffer",
                            onprogress: function(t) {
                                t.lengthComputable && c(t.loaded / t.total)
                            }
                        }
                    }).fail(function() {
                        a(new Error)
                    }).done(function(t) {
                        i(t)
                    })
                }
                ,
                c.prototype.pe = function(a, n) {
                    function f(t) {
                        var a = c.Zd.be;
                        o.ge(a, c.de.tc(a).Dc(t))
                    }
                    var o = this;
                    if (this.Wd)
                        return void this.ee();
                    var h, d, s = {}, r = function() {
                        for (var t = 0; t < n.length; t++)
                            try {
                                window.URL.revokeObjectURL(n[t].me)
                            } catch (t) {}
                        o.he(new Error)
                    }, b = function() {
                        f(p / n.length),
                        s[h.re] = new t.se(h.me,d),
                        u()
                    }, u = function() {
                        if (p < n.length)
                            return h = n[p++],
                            d = i.e.g.from(h.me),
                            d.on("error", r),
                            void d.on("loaded", b);
                        e.S(function() {
                            return o.te(a, s)
                        }, 0)
                    }, p = 0;
                    u()
                }
                ,
                c.prototype.te = function(a, i) {
                    function n(t) {
                        var a = c.Zd.ce;
                        f.ge(a, c.de.tc(a).Dc(t))
                    }
                    var f = this
                      , o = {}
                      , h = 0
                      , d = Object.values(a["regionDict"]).length;
                    e.ka(a["regionDict"], function(a, c) {
                        var f = t.Da.Va(c["texture"] + ":" + a, i[c["texture"]].Ga, c);
                        o[a] = f,
                        ++h % 10 == 0 && n(h / d)
                    });
                    var s = Object.values(i).map(function(t) {
                        return t.Ga
                    })
                      , r = Object.values(o)
                      , b = new t.Sb(a,t.Ya.xb(a, o, s, r));
                    e.S(function() {
                        return f.ue(b)
                    }, 0)
                }
                ,
                c.le = function() {
                    function t(t, a, i, c) {
                        this.re = t,
                        this.qe = a,
                        this.ne = i,
                        this.ve = c,
                        this.me = ""
                    }
                    return t
                }(),
                c.prototype.ue = function(t) {
                    if (this.Yd)
                        return void t.jc().Xa();
                    this.Yd = !0;
                    var a = this;
                    e.S(function() {
                        return a.Rd(t)
                    }, 0)
                }
                ,
                c.prototype.ie = function() {
                    if (!this.Yd) {
                        this.Yd = !0;
                        var t = this;
                        e.S(function() {
                            return t.Sd()
                        }, 0)
                    }
                }
                ,
                c.prototype.he = function(t) {
                    if (!this.Yd) {
                        this.Yd = !0;
                        var a = this;
                        e.S(function() {
                            return a.Td(t)
                        }, 0)
                    }
                }
                ,
                c.prototype.ee = function() {
                    if (!this.Yd) {
                        this.Yd = !0;
                        var t = this;
                        e.S(function() {
                            return t.Ud()
                        }, 0)
                    }
                }
                ,
                c.prototype.ge = function(t, a) {
                    if (!this.Yd && !this.Wd) {
                        var i = this;
                        e.S(function() {
                            return i.Vd(t, a)
                        }, 0)
                    }
                }
                ,
                c
            }(),
            t.we = function() {
                return {}
            }(),
            t.xe = function() {
                function e() {
                    this.ye = t.xe.Ae.ze,
                    this.Be = !1,
                    this.Ce = !1,
                    this.De = null,
                    this.Ee = null
                }
                return e.prototype.za = function() {}
                ,
                e.prototype.Fe = function(t) {
                    this.Ce = t
                }
                ,
                e.prototype.Ge = function(t) {
                    this.ye = t,
                    this.He()
                }
                ,
                e.prototype.Ie = function(t) {
                    this.Be = t,
                    this.He()
                }
                ,
                e.prototype.He = function() {}
                ,
                e.prototype.Je = function(t, e) {
                    if (!a.L.bd.mc())
                        return null;
                    var i = t[e];
                    return null == i || 0 === i.length ? null : i[Math.floor(Math.random() * i.length)].cloneNode()
                }
                ,
                e.prototype.Ke = function(t, a, e) {
                    if (this.Ce && !(e <= 0)) {
                        var i = this.Je(t, a);
                        null != i && (i.volume = Math.min(1, e),
                        i.play())
                    }
                }
                ,
                e.prototype.Le = function(t, a) {
                    this.ye.Me && this.Ke(app.Oe.Ne, t, a)
                }
                ,
                e.prototype.Pe = function(t, a) {
                    this.ye.Qe && this.Ke(app.Oe.Re, t, a)
                }
                ,
                e.prototype.Se = function() {}
                ,
                e.prototype.Te = function() {}
                ,
                e.prototype.Ue = function() {}
                ,
                e.prototype.Ve = function() {}
                ,
                e.prototype.We = function() {}
                ,
                e.prototype.Xe = function() {}
                ,
                e.prototype.Ye = function(t, a, e) {}
                ,
                e.prototype.Ze = function(t) {}
                ,
                e.prototype.$e = function(t) {}
                ,
                e.prototype._e = function(t) {}
                ,
                e.prototype.af = function(t) {}
                ,
                e.prototype.bf = function(t) {}
                ,
                e.prototype.cf = function(t) {}
                ,
                e.prototype.df = function(t) {}
                ,
                e.prototype.ef = function(t) {}
                ,
                e.prototype.ff = function(t) {}
                ,
                e.prototype.gf = function(t) {}
                ,
                e.prototype.hf = function(t) {}
                ,
                e.prototype.if = function(t) {}
                ,
                e.prototype.jf = function(t) {}
                ,
                e.prototype.kf = function(t) {}
                ,
                e.prototype.lf = function(t, a) {}
                ,
                e.prototype.mf = function(t) {}
                ,
                e.prototype.nf = function(t, a, e) {}
                ,
                e.Ae = {
                    ze: {
                        pf: !1,
                        qf: !1,
                        Qe: !0,
                        Me: !1
                    },
                    rf: {
                        pf: !1,
                        qf: !0,
                        Qe: !0,
                        Me: !1
                    },
                    sf: {
                        pf: !0,
                        qf: !1,
                        Qe: !1,
                        Me: !0
                    },
                    tf: {
                        pf: !1,
                        qf: !1,
                        Qe: !0,
                        Me: !1
                    },
                    uf: {
                        pf: !1,
                        qf: !1,
                        Qe: !1,
                        Me: !1
                    }
                },
                e
            }(),
            t.vf = function() {
                function c(e) {
                    this.wf = e,
                    this.Wb = e.get()[0],
                    this.xf = 1,
                    this.yf = 1,
                    this.zf = new t.Af(f,o,t.Cf.Bf),
                    this.Df = new i.e.i({
                        view: this.Wb,
                        backgroundColor: n,
                        antialias: !0
                    }),
                    this.Ef = new i.e.f,
                    this.Ef.sortableChildren = !0,
                    this.Ff = new i.e.f,
                    this.Ff.zIndex = 0,
                    this.Ef.addChild(this.Ff),
                    this.Gf = new t.Hf(a.L.Oe.If),
                    this.Gf.Jf.zIndex = 1,
                    this.Ef.addChild(this.Gf.Jf);
                    var c = this.zf.Kf();
                    c.zIndex = 2,
                    this.Ef.addChild(c),
                    this.Lf = new i.e.f,
                    this.Lf.zIndex = 3,
                    this.Ef.addChild(this.Lf),
                    this.Mf = [],
                    this.Nf = [],
                    this.Of = [],
                    this.za()
                }
                var n = 0
                  , f = 5
                  , o = 40
                  , h = [{
                    Pf: 1,
                    Qf: .5,
                    Rf: .5
                }, {
                    Pf: 1,
                    Qf: .75,
                    Rf: .5
                }, {
                    Pf: 1,
                    Qf: 1,
                    Rf: .5
                }, {
                    Pf: .75,
                    Qf: 1,
                    Rf: .5
                }, {
                    Pf: .5,
                    Qf: 1,
                    Rf: .5
                }, {
                    Pf: .5,
                    Qf: 1,
                    Rf: .75
                }, {
                    Pf: .5,
                    Qf: 1,
                    Rf: 1
                }, {
                    Pf: .5,
                    Qf: .75,
                    Rf: 1
                }, {
                    Pf: .5,
                    Qf: .5,
                    Rf: 1
                }, {
                    Pf: .75,
                    Qf: .5,
                    Rf: 1
                }, {
                    Pf: 1,
                    Qf: .5,
                    Rf: 1
                }, {
                    Pf: 1,
                    Qf: .5,
                    Rf: .75
                }];
                c.prototype.za = function() {
                    this.Df.backgroundColor = n,
                    this.Mf = new Array(h.length);
                    for (var t = 0; t < this.Mf.length; t++)
                        this.Mf[t] = new i.e.m,
                        this.Mf[t].texture = a.L.Oe.Sf,
                        this.Mf[t].anchor.set(.5),
                        this.Ff.addChild(this.Mf[t]);
                    this.Nf = new Array(a.L.Oe.Tf.length);
                    for (var c = 0; c < this.Nf.length; c++)
                        this.Nf[c] = new i.e.m,
                        this.Nf[c].texture = a.L.Oe.Tf[c],
                        this.Nf[c].anchor.set(.5),
                        this.Lf.addChild(this.Nf[c]);
                    this.Of = new Array(this.Nf.length);
                    for (var f = 0; f < this.Of.length; f++) {
                        var o = e.ga(f / this.Of.length * 360, .75, .5)
                          , d = e.da(-10, 10);
                        this.Of[f] = {
                            Uf: e.da(0, a.M),
                            Vf: .66 * e.da(.09, .16),
                            Wf: e.da(0, 1),
                            Xf: e.da(0, 1),
                            Yf: d,
                            Pf: o[0],
                            Qf: o[1],
                            Rf: o[2]
                        }
                    }
                    this.Zf(),
                    this.$f()
                }
                ,
                c.zd = !1,
                c._f = function(t) {
                    c.zd = t
                }
                ,
                c.prototype.ag = function(t) {
                    this.zf._f(t)
                }
                ,
                c.prototype.$f = function() {
                    var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    this.xf = this.wf.width(),
                    this.yf = this.wf.height(),
                    this.Df.resize(this.xf, this.yf),
                    this.Df.resolution = t,
                    this.Wb.width = t * this.xf,
                    this.Wb.height = t * this.yf;
                    for (var a = .6 * Math.max(this.xf, this.yf), e = 0; e < this.Mf.length; e++)
                        this.Mf[e].width = a,
                        this.Mf[e].height = a;
                    this.Gf.bg(this.xf, this.yf),
                    this.zf.$f()
                }
                ,
                c.prototype.cg = function(t, i) {
                    if (c.zd) {
                        for (var n = t / 1e3, f = this.wf.width(), o = this.wf.height(), d = 0; d < this.Mf.length; d++) {
                            var s = h[d % h.length]
                              , r = this.Mf[d]
                              , b = d / this.Mf.length * a.N
                              , u = .5 * n * .12
                              , p = Math.cos(3 * (u + b)) * Math.cos(b) - Math.sin(5 * (u + b)) * Math.sin(b)
                              , l = Math.cos(3 * (u + b)) * Math.sin(b) + Math.sin(5 * (u + b)) * Math.cos(b)
                              , g = .2 + .2 * Math.cos(b + .075 * n)
                              , v = 16711680 & 255 * s.Pf << 16 | 65280 & 255 * s.Qf << 8 | 255 & 255 * s.Rf;
                            r.tint = v,
                            r.alpha = g,
                            r.position.set(f * (.2 + .5 * (p + 1) * .6), o * (.1 + .5 * (l + 1) * .8))
                        }
                        for (var y = .05 * Math.max(f, o), j = 0; j < this.Nf.length; j++) {
                            var m = this.Of[j]
                              , w = this.Nf[j]
                              , k = a.M * j / this.Nf.length;
                            m.Wf = .2 + .6 * (Math.cos(.01 * n + k) + .2 * Math.cos(.02 * n * 17 + k) + 1) / 2,
                            m.Xf = .1 + .8 * (Math.sin(.01 * n + k) + .2 * Math.sin(.02 * n * 21 + k) + 1) / 2;
                            var L = m.Wf
                              , C = m.Xf
                              , M = e.$(Math.pow(Math.cos(1.5 * (k + .048 * n)), 6), 0, .9)
                              , S = 1.2 * (.4 + .5 * (1 + Math.sin(k + .12 * n)) * 1.2)
                              , $ = k + .1 * n
                              , q = 16711680 & 255 * m.Pf << 16 | 65280 & 255 * m.Qf << 8 | 255 & 255 * m.Rf;
                            w.alpha = M,
                            w.tint = q,
                            w.position.set(f * L, o * C),
                            w.rotation = $;
                            var F = w.texture.width / w.texture.height;
                            w.width = S * y,
                            w.height = S * y * F
                        }
                        this.dg(),
                        this.Df.render(this.Ef, null, !0)
                    }
                }
                ,
                c.prototype.eg = function() {
                    if (a.L.bd.mc())
                        for (var t = a.L.bd.jc().yb(f), i = 0; i < f; i++)
                            this.zf.fg(i, t[i]);
                    else
                        for (var c = e.da(0, 1), n = 0; n < f; n++) {
                            var o = (c + n / f) % 1
                              , h = e.ga(Math.floor(360 * o), .85, .5)
                              , d = 255 & 255 * h[0] | 65280 & 255 * h[1] << 8 | 16711680 & 255 * h[2] << 16
                              , s = "000000" + d.toString(16);
                            s = "#" + s.substring(s.length - 6, s.length),
                            this.zf.gg(n, s)
                        }
                }
                ,
                c.prototype.Zf = function() {
                    for (var t = Math.min(this.xf, this.yf), i = e.ja(), c = 0; c < f; c++) {
                        var n = c / f * a.M
                          , o = d(i, .12, n);
                        o.Ia = 4 * o.Ia,
                        o.Ja = 4 * o.Ja,
                        this.zf.hg(c, .5 * (this.xf + o.Ia * t), .5 * (this.yf + o.Ja * t))
                    }
                }
                ,
                c.prototype.dg = function() {
                    for (var t = Math.min(this.xf, this.yf), i = e.ja(), c = 0; c < f; c++) {
                        var n = c / f * a.M
                          , o = d(i, .12, n);
                        this.zf.ig(c, .5 * (this.xf + o.Ia * t), .5 * (this.yf + o.Ja * t))
                    }
                    this.zf.jg()
                }
                ;
                var d = function(t, a, e) {
                    var i = t / 1e3;
                    return {
                        Ia: .8 * (Math.cos(a * i + e) + .4 * Math.cos(-32 * a * i + e) + .7 * Math.cos(7 * a * i + e)),
                        Ja: .8 * (Math.sin(a * i + e) + .4 * Math.sin(-32 * a * i + e) + .7 * Math.sin(7 * a * i + e))
                    }
                };
                return c
            }(),
            t.kg = function() {
                function t() {}
                return t.lg = "consent_state_2",
                t.mg = "showPlayerNames",
                t.ng = "musicEnabled",
                t.og = "sfxEnabled",
                t.pg = "account_type",
                t.qg = "gameMode",
                t.rg = "nickname",
                t.sg = "skin",
                t.tg = "prerollCount",
                t.ug = "shared",
                t.vg = function(t, a, i) {
                    var c = new Date;
                    c.setTime(c.getTime() + 864e5 * i);
                    var n = "expires=" + c.toUTCString();
                    document.cookie = t + "=" + a + "; " + n
                }
                ,
                t.wg = function(t) {
                    for (var a = t + "=", i = document.cookie.split(";"), c = 0; c < i.length; c++) {
                        for (var n = i[c]; n.charAt(0) == " "; )
                            n = n.substring(1);
                        if (0 == n.indexOf(a))
                            return n.substring(a.length, n.length)
                    }
                    return ""
                }
                ,
                t
            }(),
            a.xg = function() {
                function t(t, a, e) {
                    for (var i = !1, c = e.length, n = 0, f = c - 1; n < c; f = n++)
                        e[n][1] > a != e[f][1] > a && t < (e[f][0] - e[n][0]) * (a - e[n][1]) / (e[f][1] - e[n][1]) + e[n][0] && (i = !i);
                    return i
                }
                var a = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
                return {
                    yg: function(e, i) {
                        return t(i, e, a)
                    }
                }
            }(),
            t.zg = function() {
                function t(t) {
                    var a;
                    a = t > 0 ? "+" + Math.floor(t) : t < 0 ? "-" + Math.floor(t) : "0";
                    var i, c = Math.min(1.5, .5 + t / 600);
                    if (t < 1)
                        i = "0xFFFFFF";
                    else if (t < 30) {
                        var f = (t - 1) / 29;
                        i = n(1 * (1 - f) + .96 * f, 1 * (1 - f) + .82 * f, 1 * (1 - f) + 0 * f)
                    } else if (t < 300) {
                        var h = (t - 30) / 270;
                        i = n(.96 * (1 - h) + .93 * h, .82 * (1 - h) + .34 * h, 0 * (1 - h) + .25 * h)
                    } else if (t < 700) {
                        var d = (t - 300) / 400;
                        i = n(.93 * (1 - d) + .98 * d, .34 * (1 - d) + 0 * d, .25 * (1 - d) + .98 * d)
                    } else
                        i = n(.98, 0, .98);
                    var s = Math.random()
                      , r = 1 + .5 * Math.random();
                    return new o(a,i,!0,.5,c,s,r)
                }
                function c(t, a) {
                    var e, i;
                    return a ? (e = 1.3,
                    i = n(.93, .34, .25)) : (e = 1.1,
                    i = n(.96, .82, 0)),
                    new o(t,i,!0,.5,e,.5,.7)
                }
                function n(t, a, e) {
                    return ((255 * t & 255) << 16) + ((255 * a & 255) << 8) + (255 * e & 255)
                }
                var f = e.X(i.e.f, function() {
                    i.e.f.call(this),
                    this.Ag = [],
                    this.Bg = 0
                });
                f.prototype.Cg = function(a) {
                    if (this.Bg += a,
                    this.Bg >= 1) {
                        var e = Math.floor(this.Bg);
                        this.Bg -= e;
                        var i = t(e);
                        this.addChild(i),
                        this.Ag.push(i)
                    }
                }
                ,
                f.prototype.Dg = function(t) {
                    if (t) {
                        var a = c(e.O("index.game.floating.headshot"), !0);
                        this.addChild(a),
                        this.Ag.push(a)
                    } else {
                        var i = c(e.O("index.game.floating.wellDone"), !1);
                        this.addChild(i),
                        this.Ag.push(i)
                    }
                }
                ,
                f.prototype.jg = function(t, e) {
                    for (var c = a.L.Fg.sf.Eg, n = c.Df.width / c.Df.resolution, f = c.Df.height / c.Df.resolution, o = 0; o < this.Ag.length; ) {
                        var h = this.Ag[o];
                        h.Gg = h.Gg + e / 2e3 * h.Hg,
                        h.Ig = h.Ig + e / 2e3 * h.Jg,
                        h.alpha = .5 * Math.sin(Math.PI * h.Ig),
                        h.scale.set(h.Gg),
                        h.position.x = n * (.25 + .5 * h.Kg),
                        h.position.y = h.Lg ? f * (1 - .5 * (1 + h.Ig)) : f * (1 - .5 * (0 + h.Ig)),
                        h.Ig > 1 && (i.e.w.z(h),
                        this.Ag.splice(o, 1),
                        o--),
                        o++
                    }
                }
                ;
                var o = function() {
                    return e.X(i.e.n, function(t, a, c, n, f, o, h) {
                        i.e.n.call(this, t, {
                            fill: a,
                            fontFamily: "PTSans",
                            fontSize: 36
                        }),
                        this.anchor.set(.5),
                        this.Lg = c,
                        this.Gg = n,
                        this.Hg = f,
                        this.Kg = o,
                        this.Ig = 0,
                        this.Jg = h
                    })
                }();
                return f
            }(),
            t.se = function() {
                function t(t, a) {
                    this.me = t,
                    this.Ga = a
                }
                return t
            }(),
            t.Sc = {
                Mg: 0,
                Rc: 16
            },
            t.Ng = function() {
                function a() {
                    this.Og = t.Sc.Mg,
                    this.Pg = 0,
                    this.Qg = 500,
                    this.Rg = 4e3,
                    this.Sg = 7e3
                }
                return a.Tg = 0,
                a.prototype.Ug = function() {
                    return 1.02 * this.Qg
                }
                ,
                a
            }(),
            t.Vg = function() {
                function c(a) {
                    this.wf = a,
                    this.Wb = a.get()[0],
                    this.Df = new i.e.i({
                        view: this.Wb,
                        backgroundColor: n,
                        antialias: !0
                    }),
                    this.Ef = new i.e.f,
                    this.Ef.sortableChildren = !0,
                    this.Wg = Math.floor(360 * Math.random()),
                    this.Xg = 0,
                    this.Yg = 0,
                    this.Zg = 15,
                    this.$g = .5,
                    this._g = 0,
                    this.ah = new t.bh,
                    this.ch = new i.e.j,
                    this.dh = new i.e.f,
                    this.eh = new i.e.f,
                    this.eh.sortableChildren = !0,
                    this.fh = new i.e.f,
                    this.gh = new i.e.f,
                    this.gh.sortableChildren = !0,
                    this.hh = new i.e.f,
                    this.ih = new f,
                    this.jh = new o,
                    this.kh = new h,
                    this.lh = new t.zg,
                    this.mh = new i.e.m,
                    this.nh = {
                        x: 0,
                        y: 0
                    },
                    this.za()
                }
                var n = 0;
                c.prototype.za = function() {
                    this.Df.backgroundColor = n,
                    this.ah.Jf.zIndex = 10,
                    this.Ef.addChild(this.ah.Jf),
                    this.ch.zIndex = 20,
                    this.Ef.addChild(this.ch),
                    this.dh.zIndex = 5e3,
                    this.Ef.addChild(this.dh),
                    this.eh.zIndex = 5100,
                    this.Ef.addChild(this.eh),
                    this.fh.zIndex = 1e4,
                    this.Ef.addChild(this.fh),
                    this.mh.texture = a.L.Oe.oh,
                    this.mh.anchor.set(.5),
                    this.mh.zIndex = 1,
                    this.gh.addChild(this.mh),
                    this.hh.alpha = .6,
                    this.hh.zIndex = 2,
                    this.gh.addChild(this.hh),
                    this.lh.zIndex = 3,
                    this.gh.addChild(this.lh),
                    this.ih.alpha = .8,
                    this.ih.zIndex = 4,
                    this.gh.addChild(this.ih),
                    this.jh.zIndex = 5,
                    this.gh.addChild(this.jh),
                    this.kh.zIndex = 6,
                    this.gh.addChild(this.kh),
                    this.$f()
                }
                ,
                c.prototype.$f = function() {
                    var t = window.devicePixelRatio ? window.devicePixelRatio : 1
                      , a = this.wf.width()
                      , e = this.wf.height();
                    this.Df.resize(a, e),
                    this.Df.resolution = t,
                    this.Wb.width = t * a,
                    this.Wb.height = t * e,
                    this.$g = Math.min(Math.min(a, e), .625 * Math.max(a, e)),
                    this.mh.position.x = a / 2,
                    this.mh.position.y = e / 2,
                    this.mh.width = a,
                    this.mh.height = e,
                    this.ih.position.x = 60,
                    this.ih.position.y = 60,
                    this.jh.position.x = 110,
                    this.jh.position.y = 10,
                    this.kh.position.x = a - 225,
                    this.kh.position.y = 1
                }
                ,
                c.prototype.jg = function(e, i) {
                    this.Zg = 15,
                    this.dh.removeChildren(),
                    this.eh.removeChildren(),
                    this.fh.removeChildren(),
                    this.hh.removeChildren(),
                    this.ah.ph(e.Og === t.Sc.Mg ? a.L.Oe.qh : a.L.Oe.rh);
                    var c = this.ch;
                    c.clear(),
                    c.lineStyle(.2, 16711680, .3),
                    c.drawCircle(0, 0, e.Qg),
                    c.endFill(),
                    this.kh.sh = i,
                    this.hh.visible = i
                }
                ,
                c.prototype.cg = function(i, c) {
                    if (!(this.Df.width <= 5)) {
                        var n = a.L.uh.th
                          , f = this.Df.width / this.Df.resolution
                          , o = this.Df.height / this.Df.resolution;
                        this.Zg = e._(this.Zg, a.L.uh.vh, c, .002);
                        var h = this.$g / this.Zg
                          , d = a.L.uh.th.vd[t.xd.Hd]
                          , s = null != d && d.zd;
                        this._g = e.$(this._g + c / 1e3 * (.1 * (s ? 1 : 0) - this._g), 0, 1),
                        this.mh.alpha = this._g,
                        this.Wg = this.Wg + .01 * c,
                        this.Wg > 360 && (this.Wg = this.Wg % 360),
                        this.Xg = Math.sin(i / 1200 * 2 * Math.PI);
                        var r = n.wh();
                        this.nh.x = e.aa(this.nh.x, r.Ia, c, .5, 33.333),
                        this.nh.y = e.aa(this.nh.y, r.Ja, c, .5, 33.333);
                        var b = f / h / 2
                          , u = o / h / 2;
                        a.L.uh.xh(this.nh.x - 1.3 * b, this.nh.x + 1.3 * b, this.nh.y - 1.3 * u, this.nh.y + 1.3 * u),
                        this.ah.jg(this.nh.x, this.nh.y, 2 * b, 2 * u);
                        var p = a.L.uh.yh.Qg;
                        this.Ef.scale.x = h,
                        this.Ef.scale.y = h,
                        this.Ef.position.x = f / 2 - this.nh.x * h,
                        this.Ef.position.y = o / 2 - this.nh.y * h;
                        var l = Math.hypot(r.Ia, r.Ja);
                        if (l > p - 10) {
                            this.Yg = e.$(1 + (l - p) / 10, 0, 1);
                            var g = Math.cos(this.Wg * a.M / 360) * (1 - this.Yg) + 1 * this.Yg
                              , v = Math.sin(this.Wg * a.M / 360) * (1 - this.Yg)
                              , y = (Math.atan2(v, g) + a.M) % a.M * 360 / a.M
                              , j = this.Yg * (.5 + .5 * this.Xg)
                              , m = e.ga(Math.floor(y), 1, .75 - .25 * this.Yg);
                            this.ah.Wc(m[0], m[1], m[2], .1 + .2 * j)
                        } else {
                            this.Yg = 0;
                            var w = e.ga(Math.floor(this.Wg), 1, .75);
                            this.ah.Wc(w[0], w[1], w[2], .1)
                        }
                        for (var k = 0; k < this.hh.children.length; k++) {
                            var L = this.hh.children[k];
                            L.position.x = f / 2 - (this.nh.x - L.zh.x) * h,
                            L.position.y = o / 2 - (this.nh.y - L.zh.y) * h
                        }
                        this.ih.Ah.position.x = r.Ia / p * this.ih.Bh,
                        this.ih.Ah.position.y = r.Ja / p * this.ih.Bh,
                        this.jh.Ch(i),
                        this.lh.jg(i, c),
                        this.Df.render(this.Ef, null, !0),
                        this.Df.render(this.gh, null, !1)
                    }
                }
                ,
                c.prototype.Dh = function(t, a) {
                    a.Eh.Uc.gd().zIndex = (t + 2147483648) / 4294967296 * 5e3,
                    this.dh.addChild(a.Eh.Vc.gd()),
                    this.eh.addChild(a.Eh.Uc.gd())
                }
                ,
                c.prototype.Fh = function(t, e, i) {
                    e.Fc.zIndex = a.L.uh.yh.Pg ? 0 : 10 + (t + 32768) / 65536 * 5e3,
                    this.fh.addChild(e.Fc),
                    t !== a.L.uh.yh.Pg && this.hh.addChild(i)
                }
                ;
                var f = function() {
                    return e.X(i.e.f, function() {
                        i.e.f.call(this),
                        this.Bh = 40,
                        this.Gh = new i.e.m,
                        this.Gh.anchor.set(.5),
                        this.Ah = new i.e.j;
                        var t = new i.e.j;
                        t.beginFill("black", .4),
                        t.drawCircle(0, 0, this.Bh),
                        t.endFill(),
                        t.lineStyle(2, 16225317),
                        t.drawCircle(0, 0, this.Bh),
                        t.moveTo(0, -this.Bh),
                        t.lineTo(0, +this.Bh),
                        t.moveTo(-this.Bh, 0),
                        t.lineTo(+this.Bh, 0),
                        t.endFill(),
                        this.Gh.alpha = .5,
                        this.Ah.zIndex = 2,
                        this.Ah.alpha = .9,
                        this.Ah.beginFill(16225317),
                        this.Ah.drawCircle(0, 0, .06 * this.Bh),
                        this.Ah.endFill(),
                        this.Ah.lineStyle(1, "black"),
                        this.Ah.drawCircle(0, 0, .06 * this.Bh),
                        this.Ah.endFill(),
                        this.addChild(t),
                        this.addChild(this.Gh),
                        this.addChild(this.Ah)
                    })
                }()
                  , o = function() {
                    var t = e.X(i.e.f, function() {
                        i.e.f.call(this),
                        this.Hh = {}
                    });
                    t.prototype.Ch = function(t) {
                        var e = .5 + .5 * Math.cos(a.M * (t / 1e3 / 1.6));
                        for (var i in this.Hh) {
                            var c = this.Hh[i]
                              , n = c.Ih;
                            c.alpha = 1 - n + n * e
                        }
                    }
                    ,
                    t.prototype.jg = function(t) {
                        for (var e in this.Hh)
                            null != t[e] && t[e].zd || (i.e.w.z(this.Hh[e]),
                            delete this.Hh[e]);
                        var n = 0;
                        for (var f in t) {
                            var o = t[f];
                            if (o.zd) {
                                var h = this.Hh[f];
                                if (!h) {
                                    var d = a.L.bd.jc().Hb(o.Ed).Mb;
                                    h = new c,
                                    h.texture = d.Wa(),
                                    h.width = 40,
                                    h.height = 40,
                                    this.Hh[f] = h,
                                    this.addChild(h)
                                }
                                h.Ih = o.Fd,
                                h.position.x = n,
                                n += 40
                            }
                        }
                    }
                    ;
                    var c = function() {
                        return e.X(i.e.m, function() {
                            i.e.m.call(this),
                            this.Ih = 0
                        })
                    }();
                    return t
                }()
                  , h = function() {
                    var c = e.X(i.e.f, function() {
                        i.e.f.call(this),
                        this.sh = !0,
                        this.Jh = 12,
                        this.Kh = 9,
                        this.Ag = [];
                        for (var t = 0; t < 14; t++)
                            this.Lh()
                    });
                    c.prototype.jg = function(c) {
                        var n = a.L.uh.yh.Og === t.Sc.Rc
                          , f = 0
                          , o = 0;
                        o >= this.Ag.length && this.Lh(),
                        this.Ag[o].Mh(1, "white"),
                        this.Ag[o].Nh("", e.O("index.game.leader.top10"), "(".concat(a.L.uh.Oh, " online)")),
                        this.Ag[o].position.y = f,
                        f += this.Jh,
                        o += 1,
                        c.Ph.length > 0 && (f += this.Kh);
                        for (var h = 0; h < c.Ph.length; h++) {
                            var d = c.Ph[h]
                              , s = a.L.bd.jc().Bb(d.Qh)
                              , r = ""
                              , b = a.L.bd.nc()["textDict"][s.Ib];
                            null != b && (r = e.P(b)),
                            o >= this.Ag.length && this.Lh(),
                            this.Ag[o].Mh(.8, s.Jb.Lb),
                            this.Ag[o].Nh("".concat(h + 1), r, "".concat(Math.floor(d.Rh))),
                            this.Ag[o].position.y = f,
                            f += this.Jh,
                            o += 1
                        }
                        c.Sh.length > 0 && (f += this.Kh);
                        for (var u = 0; u < c.Sh.length; u++) {
                            var p = c.Sh[u]
                              , l = a.L.uh.yh.Pg === p.Th
                              , g = void 0
                              , v = void 0;
                            if (l)
                                g = "white",
                                v = a.L.uh.th.Uh.Ea;
                            else {
                                var y = a.L.uh.Vh[p.Th];
                                null != y ? (g = n ? a.L.bd.jc().Bb(y.Uh.Wh).Jb.Lb : a.L.bd.jc().Ab(y.Uh.Xh).Lb,
                                v = this.sh ? y.Uh.Ea : "---") : (g = "gray",
                                v = "?")
                            }
                            l && (f += this.Kh),
                            o >= this.Ag.length && this.Lh(),
                            this.Ag[o].Mh(l ? 1 : .8, g),
                            this.Ag[o].Nh("".concat(u + 1), v, "".concat(Math.floor(p.Rh))),
                            this.Ag[o].position.y = f,
                            f += this.Jh,
                            o += 1,
                            l && (f += this.Kh)
                        }
                        for (a.L.uh.Yh > c.Sh.length && (f += this.Kh,
                        o >= this.Ag.length && this.Lh(),
                        this.Ag[o].Mh(1, "white"),
                        this.Ag[o].Nh("".concat(a.L.uh.Yh), a.L.uh.th.Uh.Ea, "".concat(Math.floor(a.L.uh.th.Rh))),
                        this.Ag[o].position.y = f,
                        f += this.Jh,
                        o += 1,
                        f += this.Kh); this.Ag.length > o; )
                            i.e.w.z(this.Ag.pop())
                    }
                    ,
                    c.prototype.Lh = function() {
                        var t = new n;
                        t.position.y = 0,
                        this.Ag.length > 0 && (t.position.y = this.Ag[this.Ag.length - 1].position.y + this.Jh),
                        this.Ag.push(t),
                        this.addChild(t)
                    }
                    ;
                    var n = function() {
                        var t = e.X(i.e.f, function() {
                            i.e.f.call(this),
                            this.Zh = new i.e.n("",{
                                fontFamily: "PTSans",
                                fontSize: 12,
                                fill: "white"
                            }),
                            this.Zh.anchor.x = 1,
                            this.Zh.position.x = 30,
                            this.addChild(this.Zh),
                            this.$h = new i.e.n("",{
                                fontFamily: "PTSans",
                                fontSize: 12,
                                fill: "white"
                            }),
                            this.$h.anchor.x = 0,
                            this.$h.position.x = 35,
                            this.addChild(this.$h),
                            this._h = new i.e.n("",{
                                fontFamily: "PTSans",
                                fontSize: 12,
                                fill: "white"
                            }),
                            this._h.anchor.x = 1,
                            this._h.position.x = 220,
                            this.addChild(this._h)
                        });
                        return t.prototype.Nh = function(t, a, i) {
                            this.Zh.text = t,
                            this._h.text = i;
                            var c = a;
                            for (this.$h.text = c; this.$h.width > 100; )
                                c = c.substring(0, c.length - 1),
                                this.$h.text = c + ".."
                        }
                        ,
                        t.prototype.Mh = function(t, a) {
                            this.Zh.alpha = t,
                            this.Zh.style.fill = a,
                            this.$h.alpha = t,
                            this.$h.style.fill = a,
                            this._h.alpha = t,
                            this._h.style.fill = a
                        }
                        ,
                        t
                    }();
                    return c
                }();
                return c
            }(),
            t.ai = function() {
                function i(t) {
                    this.uh = t,
                    this.bi = [],
                    this.ci = 0
                }
                i.prototype.di = function(a) {
                    this.bi.push(new t.oa(new t.na(a)))
                }
                ,
                i.prototype.ei = function() {
                    this.bi = [],
                    this.ci = 0
                }
                ,
                i.prototype.fi = function() {
                    for (var t = 0; t < 10; t++) {
                        if (0 === this.bi.length)
                            return;
                        var a = this.bi.shift();
                        try {
                            this.gi(a)
                        } catch (t) {
                            throw t
                        }
                    }
                }
                ,
                i.prototype.gi = function(t) {
                    switch (255 & t.ra(0)) {
                    case 0:
                        return void this.hi(t);
                    case 1:
                        return void this.ii(t);
                    case 2:
                        return void this.ji(t);
                    case 3:
                        return void this.ki(t);
                    case 4:
                        return void this.li(t);
                    case 5:
                        return void this.mi(t)
                    }
                }
                ,
                i.prototype.hi = function(t) {
                    this.uh.yh.Og = t.ra();
                    var e = t.sa();
                    this.uh.yh.Pg = e,
                    this.uh.th.Uh.re = e,
                    this.uh.yh.Qg = t.ua(),
                    this.uh.yh.Rg = t.ua(),
                    this.uh.yh.Sg = t.ua(),
                    a.L.Fg.sf.Eg.jg(this.uh.yh, a.L.Fg.oi.ni())
                }
                ,
                i.prototype.ii = function(t) {
                    var a, e = this.ci++, i = t.sa();
                    a = this.pi(t);
                    for (var c = 0; c < a; c++)
                        this.qi(t);
                    a = this.pi(t);
                    for (var n = 0; n < a; n++)
                        this.ri(t);
                    a = this.pi(t);
                    for (var f = 0; f < a; f++)
                        this.si(t);
                    a = this.pi(t);
                    for (var o = 0; o < a; o++)
                        this.ti(t);
                    a = this.pi(t);
                    for (var h = 0; h < a; h++)
                        this.vi(t);
                    a = this.pi(t);
                    for (var d = 0; d < a; d++)
                        this.wi(t);
                    a = this.pi(t);
                    for (var s = 0; s < a; s++)
                        this.xi(t);
                    a = this.pi(t);
                    for (var r = 0; r < a; r++)
                        this.yi(t);
                    e > 0 && this.zi(t),
                    this.uh.Ai(e, i)
                }
                ,
                i.prototype.ti = function(i) {
                    var c = new t.Ci.Bi;
                    c.re = i.sa(),
                    c.Wh = this.uh.yh.Og === t.Sc.Rc ? i.ra() : t.Ng.Tg,
                    c.Xh = i.sa(),
                    c.Di = i.sa(),
                    c.Ei = i.sa(),
                    c.Fi = i.sa(),
                    c.Gi = i.sa();
                    for (var n = i.ra(), f = "", o = 0; o < n; o++)
                        f += String.fromCharCode(i.sa());
                    if (c.Ea = f,
                    this.uh.yh.Pg === c.re)
                        this.uh.th.Hi(c);
                    else {
                        var h = this.uh.Vh[c.re];
                        null != h && h.Ii();
                        var d = new t.Ci(this.uh.yh);
                        d.Ji(a.L.Fg.sf.Eg),
                        this.uh.Vh[c.re] = d,
                        d.Hi(c)
                    }
                }
                ,
                i.prototype.vi = function(t) {
                    var i = t.sa()
                      , c = t.ra()
                      , n = !!(1 & c)
                      , f = !!(2 & c)
                      , o = 0;
                    n && (o = t.sa());
                    var h = this.Ki(i);
                    if (_typeof(h) !== "undefined" && (h.Li = !1,
                    h.Mi)) {
                        var d = this.Ki(i);
                        if (n && _typeof(d) !== "undefined" && d.Mi)
                            if (o === this.uh.yh.Pg) {
                                var s = this.uh.th.wh()
                                  , r = h.Ni(s.Ia, s.Ja);
                                Math.max(0, 1 - r.Oi / (.5 * this.uh.vh));
                                r.Oi < .5 * this.uh.vh && a.L.Fg.sf.Eg.lh.Dg(f)
                            } else if (i === this.uh.yh.Pg)
                                ;
                            else {
                                var b = this.uh.th.wh()
                                  , u = h.Ni(b.Ia, b.Ja);
                                Math.max(0, 1 - u.Oi / (.5 * this.uh.vh))
                            }
                        else if (i === this.uh.yh.Pg)
                            ;
                        else {
                            var p = this.uh.th.wh()
                              , l = h.Ni(p.Ia, p.Ja);
                            Math.max(0, 1 - l.Oi / (.5 * this.uh.vh))
                        }
                    }
                }
                ,
                i.prototype.yi = function(e) {
                    var i = e.sa()
                      , c = i === this.uh.yh.Pg ? null : this.uh.Vh[i]
                      , n = e.ra()
                      , f = !!(1 & n);
                    if (!!(2 & n)) {
                        var o = e.ua();
                        c && c.Pi(o)
                    }
                    var h = this.Qi(e.ra(), e.ra(), e.ra())
                      , d = this.Qi(e.ra(), e.ra(), e.ra());
                    if (c) {
                        c.Ri(h, d, f);
                        var s = this.uh.th.wh()
                          , r = c.wh()
                          , b = Math.max(0, 1 - Math.hypot(s.Ia - r.Ia, s.Ja - r.Ja) / (.5 * this.uh.vh));
                        a.L.Si.nf(b, i, f)
                    }
                    var u = this.pi(e);
                    if (c)
                        for (var p in c.vd) {
                            var l = c.vd[p];
                            l && (l.zd = !1)
                        }
                    for (var g = 0; g < u; g++) {
                        var v = e.ra()
                          , y = e.ra();
                        if (c) {
                            var j = c.vd[v];
                            j || (j = c.vd[v] = new t.xd(v)),
                            j.zd = !0,
                            j.Fd = Math.min(1, Math.max(0, y / 100))
                        }
                    }
                }
                ,
                i.prototype.zi = function(e) {
                    var i = this.uh.th
                      , c = e.ra()
                      , n = !!(1 & c)
                      , f = !!(2 & c)
                      , o = !!(4 & c);
                    if (f) {
                        var h = i.Rh;
                        i.Pi(e.ua()),
                        h = i.Rh - h,
                        h > 0 && a.L.Fg.sf.Eg.lh.Cg(h)
                    }
                    o && (this.uh.Ti = e.ua());
                    var d = this.Qi(e.ra(), e.ra(), e.ra())
                      , s = this.Qi(e.ra(), e.ra(), e.ra());
                    i.Ri(d, s, n),
                    a.L.Si.nf(.5, this.uh.yh.Pg, n);
                    var r = this.pi(e);
                    for (var b in i.vd) {
                        var u = i.vd[b];
                        u && (u.zd = !1)
                    }
                    for (var p = 0; p < r; p++) {
                        var l = e.ra()
                          , g = e.ra()
                          , v = i.vd[l];
                        v || (v = new t.xd(l),
                        i.vd[l] = v),
                        v.zd = !0,
                        v.Fd = Math.min(1, Math.max(0, g / 100))
                    }
                    a.L.Fg.sf.Eg.jh.jg(i.vd)
                }
                ,
                i.prototype.wi = function(t) {
                    var e = this
                      , i = t.sa()
                      , c = this.Ki(i)
                      , n = t.ua()
                      , f = this.pi(t);
                    if (c) {
                        c.Pi(n),
                        c.Ui(function() {
                            return e.Qi(t.ra(), t.ra(), t.ra())
                        }, f),
                        c.Bd(!0);
                        var o = this.uh.th.wh()
                          , h = c.wh()
                          , d = Math.max(0, 1 - Math.hypot(o.Ia - h.Ia, o.Ja - h.Ja) / (.5 * this.uh.vh));
                        a.L.Si.lf(d, i)
                    } else
                        for (var s = 0; s < 6 * f; s++)
                            t.ra()
                }
                ,
                i.prototype.xi = function(t) {
                    var e = t.sa()
                      , i = this.uh.Vh[e];
                    i && i.Li && i.Bd(!1),
                    a.L.Si.mf(e)
                }
                ,
                i.prototype.qi = function(e) {
                    var i = new t.Vi.Bi;
                    i.re = e.ta(),
                    i.Wh = this.uh.yh.Og === t.Sc.Rc ? e.ra() : t.Ng.Tg,
                    i.Wi = this.Qi(e.ra(), e.ra(), e.ra()),
                    i.Xh = e.ra();
                    var c = this.uh.Xi[i.re];
                    null != c && c.Ii();
                    var n = new t.Vi(i,a.L.Fg.sf.Eg);
                    n.Yi(this.Zi(i.re), this.$i(i.re), !0),
                    this.uh.Xi[i.re] = n
                }
                ,
                i.prototype.ri = function(t) {
                    var a = t.ta()
                      , e = this.uh.Xi[a];
                    e && (e._i = 0,
                    e.aj = 1.5 * e.aj,
                    e.bj = !0)
                }
                ,
                i.prototype.si = function(t) {
                    var a = t.ta()
                      , e = t.sa()
                      , i = this.uh.Xi[a];
                    if (i) {
                        i._i = 0,
                        i.aj = .1 * i.aj,
                        i.bj = !0;
                        var c = this.Ki(e);
                        if (c && c.Mi) {
                            var n = (this.uh.yh.Pg,
                            c.wh());
                            i.Yi(n.Ia, n.Ja, !1)
                        }
                    }
                }
                ;
                var c = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
                return i.prototype.ji = function(t) {
                    for (var e = a.L.bd.pc().Xb, i = e.getImageData(0, 0, 80, 80), n = c[0], f = 80 - n, o = 0, h = 0; h < 628; h++)
                        for (var d = t.ra(), s = 0; s < 8; s++) {
                            var r = 0 != (d >> s & 1)
                              , b = 4 * (n + 80 * o);
                            r ? (i.data[b] = 255,
                            i.data[b + 1] = 255,
                            i.data[b + 2] = 255,
                            i.data[b + 3] = 255) : i.data[b + 3] = 0,
                            ++n >= f && ++o < 80 && (n = c[o],
                            f = 80 - n)
                        }
                    e.putImageData(i, 0, 0);
                    var u = a.L.Fg.sf.Eg.ih.Gh;
                    u.texture = a.L.bd.pc().Ga,
                    u.texture.update()
                }
                ,
                i.prototype.li = function(t) {
                    t.ta()
                }
                ,
                i.prototype.mi = function(t) {
                    this.uh.cj()
                }
                ,
                i.prototype.ki = function(e) {
                    this.uh.Oh = e.sa(),
                    this.uh.Yh = e.sa();
                    var i = new t.dj;
                    i.Sh = [];
                    for (var c = e.ra(), n = 0; n < c; n++) {
                        var f = e.sa()
                          , o = e.ua();
                        i.Sh.push(t.dj.ej(f, o))
                    }
                    if (i.Ph = [],
                    this.uh.yh.Og === t.Sc.Rc)
                        for (var h = e.ra(), d = 0; d < h; d++) {
                            var s = e.ra()
                              , r = e.ua();
                            i.Ph.push(t.dj.fj(s, r))
                        }
                    a.L.Fg.sf.Eg.kh.jg(i)
                }
                ,
                i.prototype.Ki = function(t) {
                    return t === this.uh.yh.Pg ? this.uh.th : this.uh.Vh[t]
                }
                ,
                i.prototype.Qi = function(t, a, e) {
                    return 1e4 * ((16777215 & (255 & e | a << 8 & 65280 | t << 16 & 16711680)) / 8388608 - 1)
                }
                ,
                i.prototype.Zi = function(t) {
                    return ((65535 & t) / 32768 - 1) * this.uh.yh.Ug()
                }
                ,
                i.prototype.$i = function(t) {
                    return ((t >> 16 & 65535) / 32768 - 1) * this.uh.yh.Ug()
                }
                ,
                i.prototype.pi = function(t) {
                    var a = t.ra();
                    if (0 == (128 & a))
                        return a;
                    var e = t.ra();
                    if (0 == (128 & e))
                        return e | a << 7 & 16256;
                    var i = t.ra();
                    if (0 == (128 & i))
                        return i | e << 7 & 16256 | a << 14 & 2080768;
                    var c = t.ra();
                    return 0 == (128 & c) ? c | i << 7 & 16256 | e << 14 & 2080768 | a << 21 & 266338304 : void 0
                }
                ,
                i
            }(),
            t.gj = function() {
                function a(t) {
                    this.hj = t
                }
                return a.ij = function() {
                    return new t.gj(null)
                }
                ,
                a.jj = function(a) {
                    return new t.gj(a)
                }
                ,
                a.prototype.tc = function() {
                    return this.hj
                }
                ,
                a.prototype.kj = function() {
                    return null != this.hj
                }
                ,
                a.prototype.lj = function(t) {
                    null != this.hj && t(this.hj)
                }
                ,
                a
            }(),
            t.Vi = function() {
                function i(e, i) {
                    this.Uh = e,
                    this.mj = e.Xh >= 80,
                    this.nj = 0,
                    this.oj = 0,
                    this.pj = 0,
                    this.qj = 0,
                    this.aj = this.mj ? 1 : e.Wi,
                    this._i = 1,
                    this.bj = !1,
                    this.rj = 0,
                    this.sj = 0,
                    this.tj = 1,
                    this.uj = 2 * Math.PI * Math.random(),
                    this.vj = new t.wj,
                    this.vj.Qc(a.L.uh.yh.Og, this.Uh.Wh === t.Ng.Tg ? null : a.L.bd.jc().Bb(this.Uh.Wh), a.L.bd.jc().Gb(this.Uh.Xh)),
                    i.Dh(e.re, this.vj)
                }
                return i.prototype.Ii = function() {
                    this.vj.Eh.Vc.z(),
                    this.vj.Eh.Uc.z()
                }
                ,
                i.prototype.Yi = function(t, a, e) {
                    this.nj = t,
                    this.oj = a,
                    e && (this.pj = t,
                    this.qj = a)
                }
                ,
                i.prototype.xj = function(t, a) {
                    var i = Math.min(.5, 1 * this.aj)
                      , c = Math.min(2.5, 1.5 * this.aj);
                    this.rj = e._(this.rj, i, a, .0025),
                    this.sj = e._(this.sj, c, a, .0025),
                    this.tj = e._(this.tj, this._i, a, .0025)
                }
                ,
                i.prototype.yj = function(t, a, i) {
                    this.pj = e._(this.pj, this.nj, a, .0025),
                    this.qj = e._(this.qj, this.oj, a, .0025),
                    this.vj.jg(this, t, a, i)
                }
                ,
                i.Bi = function() {
                    function a() {
                        this.re = 0,
                        this.Wh = t.Ng.Tg,
                        this.Wi = 0,
                        this.Xh = 0
                    }
                    return a
                }(),
                i
            }(),
            t.wj = function() {
                function a() {
                    this.Eh = new n(new t.Kc,new t.Kc),
                    this.Eh.Vc.Pc.blendMode = i.e.q.r,
                    this.Eh.Vc.Pc.zIndex = c,
                    this.Eh.Uc.Pc.zIndex = e
                }
                var e = 500
                  , c = 100;
                a.prototype.Qc = function(a, e, i) {
                    var c = i.Mb;
                    null != c && this.Eh.Uc.Tc(c);
                    var n = a === t.Sc.Rc && null != e ? e.Kb.Nb : i.Nb;
                    null != n && this.Eh.Vc.Tc(n)
                }
                ,
                a.prototype.jg = function(t, a, e, i) {
                    if (!i(t.pj, t.qj))
                        return void this.Eh.kd();
                    var c = t.sj * (1 + .3 * Math.cos(t.uj + a / 200));
                    t.mj ? this.Eh.hd(t.pj, t.qj, 2 * t.rj, 1 * t.tj, 1.2 * c, .8 * t.tj) : this.Eh.hd(t.pj, t.qj, 2 * t.rj, 1 * t.tj, 2 * c, .3 * t.tj)
                }
                ;
                var n = function() {
                    function t(t, a) {
                        this.Uc = t,
                        this.Vc = a
                    }
                    return t.prototype.hd = function(t, a, e, i, c, n) {
                        this.Uc.Bd(!0),
                        this.Uc.Cd(t, a),
                        this.Uc.jd(e),
                        this.Uc.zj(i),
                        this.Vc.Bd(!0),
                        this.Vc.Cd(t, a),
                        this.Vc.jd(c),
                        this.Vc.zj(n)
                    }
                    ,
                    t.prototype.kd = function() {
                        this.Uc.Bd(!1),
                        this.Vc.Bd(!1)
                    }
                    ,
                    t
                }();
                return a
            }(),
            t.Aj = function() {
                function i() {
                    this.Bj = 0,
                    this.Cj = 0,
                    this.Dj = 0,
                    this.Ej = 0,
                    this.Fj = 0,
                    this.Gj = []
                }
                function c(t, a) {
                    for (var i = 0; i < t.length; i++)
                        if (parseInt(t[i]["id"]) === a)
                            return i;
                    return -1
                }
                return i.prototype.za = function() {}
                ,
                i.prototype.Hj = function(a) {
                    switch (a) {
                    case t.Jj.Ij:
                        return this.Bj;
                    case t.Jj.Kj:
                        return this.Cj;
                    case t.Jj.Lj:
                        return this.Dj;
                    case t.Jj.Mj:
                        return this.Ej;
                    case t.Jj.Nj:
                        return this.Fj
                    }
                    return 0
                }
                ,
                i.prototype.Oj = function() {
                    return new t.zb(this.Bj,this.Cj,this.Dj,this.Ej,this.Fj)
                }
                ,
                i.prototype.Pj = function(t) {
                    this.Gj.push(t),
                    this.Qj()
                }
                ,
                i.prototype.Rj = function() {
                    if (!a.L.bd.mc())
                        return e.ea([32, 33, 34, 35]);
                    for (var i = [], c = a.L.bd.nc()["skinArrayDict"], n = 0; n < c.length; n++) {
                        var f = c[n];
                        this.Sj(f["id"], t.Jj.Ij) && i.push(f)
                    }
                    return 0 === i.length ? 0 : i[parseInt(i.length * Math.random())]["id"]
                }
                ,
                i.prototype.Tj = function() {
                    if (a.L.bd.mc()) {
                        var i = a.L.bd.nc()["skinArrayDict"]
                          , n = c(i, this.Bj);
                        if (!(n < 0)) {
                            for (var f = n + 1; f < i.length; f++)
                                if (this.Sj(i[f]["id"], t.Jj.Ij))
                                    return this.Bj = i[f]["id"],
                                    void this.Qj();
                            for (var o = 0; o < n; o++)
                                if (this.Sj(i[o]["id"], t.Jj.Ij))
                                    return this.Bj = i[o]["id"],
                                    void this.Qj()
                        }
                    }
                }
                ,
                i.prototype.Uj = function() {
                    if (a.L.bd.mc) {
                        var i = a.L.bd.nc()["skinArrayDict"]
                          , n = c(i, this.Bj);
                        if (!(n < 0)) {
                            for (var f = n - 1; f >= 0; f--)
                                if (this.Sj(i[f]["id"], t.Jj.Ij))
                                    return this.Bj = i[f]["id"],
                                    void this.Qj();
                            for (var o = i.length - 1; o > n; o--)
                                if (this.Sj(i[o]["id"], t.Jj.Ij))
                                    return this.Bj = i[o]["id"],
                                    void this.Qj()
                        }
                    }
                }
                ,
                i.prototype.Vj = function(e, i) {
                    if (!a.L.bd.mc() || this.Sj(e, i))
                        switch (i) {
                        case t.Jj.Ij:
                            return void (this.Bj !== e && (this.Bj = e,
                            this.Qj()));
                        case t.Jj.Kj:
                            return void (this.Cj !== e && (this.Cj = e,
                            this.Qj()));
                        case t.Jj.Lj:
                            return void (this.Dj !== e && (this.Dj = e,
                            this.Qj()));
                        case t.Jj.Mj:
                            return void (this.Ej !== e && (this.Ej = e,
                            this.Qj()));
                        case t.Jj.Nj:
                            return void (this.Fj !== e && (this.Fj = e,
                            this.Qj()))
                        }
                }
                ,
                i.prototype.Sj = function(t, e) {
                    var i = this.Wj(t, e);
                    return null != i && (a.L.Yj.Xj() ? 0 === i.Zj() && !i.$j() || a.L.Yj._j(t, e) : i.ak())
                }
                ,
                i.prototype.Wj = function(i, n) {
                    if (!a.L.bd.mc())
                        return null;
                    var f = a.L.bd.nc();
                    if (n === t.Jj.Ij) {
                        var o = c(f["skinArrayDict"], i);
                        return o < 0 ? null : t.ck.bk(f["skinArrayDict"][o])
                    }
                    var h = null;
                    switch (n) {
                    case t.Jj.Kj:
                        h = f["eyesDict"][i];
                        break;
                    case t.Jj.Lj:
                        h = f["mouthDict"][i];
                        break;
                    case t.Jj.Mj:
                        h = f["hatDict"][i];
                        break;
                    case t.Jj.Nj:
                        h = f["glassesDict"][i]
                    }
                    return null != h ? t.ck.dk(h) : null
                }
                ,
                i.prototype.Qj = function() {
                    for (var t = 0; t < this.Gj.length; t++)
                        this.Gj[t]()
                }
                ,
                i
            }(),
            t.Jj = function() {
                function t() {}
                return t.Ij = "SKIN",
                t.Kj = "EYES",
                t.Lj = "MOUTH",
                t.Nj = "GLASSES",
                t.Mj = "HAT",
                t
            }(),
            t.ek = function() {
                function t() {
                    this.Sf = new i.e.h(i.e.g.from("/images/bg-obstacle.png"));
                    var t = i.e.g.from(a.A.H)
                      , c = new i.e.h(t,new i.e.l(0,0,256,256));
                    this.Tf = new Array(12);
                    for (var n = 0; n < this.Tf.length; n++)
                        this.Tf[n] = c;
                    this.qh = new i.e.h(function() {
                        var t = i.e.g.from("/images/bg-pattern-pow2-ARENA.png");
                        return t.wrapMode = i.e.u.v,
                        t
                    }()),
                    this.rh = new i.e.h(function() {
                        var t = i.e.g.from("/images/bg-pattern-pow2-TEAM2.png");
                        return t.wrapMode = i.e.u.v,
                        t
                    }()),
                    this.oh = new i.e.h(i.e.g.from("/images/lens.png")),
                    this.If = new i.e.h(function() {
                        var t = i.e.g.from(a.A.I);
                        return t.wrapMode = i.e.u.v,
                        t
                    }()),
                    this.Vb = function() {
                        var t = window.document.createElement("canvas");
                        return t.width = 80,
                        t.height = 80,
                        {
                            Wb: t,
                            Xb: t.getContext("2d"),
                            Ga: new i.e.h(i.e.g.from(t))
                        }
                    }(),
                    this.Re = {},
                    this.Ne = {},
                    this.fk = [],
                    this.gk = null
                }
                return t.prototype.za = function(t) {
                    function a() {
                        0 == --e && t()
                    }
                    var e = 4;
                    this.Re = {},
                    a(),
                    this.Ne = {},
                    a(),
                    this.fk = [],
                    a(),
                    this.gk = null,
                    a()
                }
                ,
                t
            }(),
            t.hk = function() {
                function a() {
                    this.ik = null,
                    this.sf = new t.jk,
                    this.rf = new t.kk,
                    this.lk = new t.mk,
                    this.nk = new t.ok,
                    this.pk = new t.qk,
                    this.rk = new t.sk,
                    this.tk = new t.uk,
                    this.vk = new t.wk,
                    this.oi = new t.xk,
                    this.yk = new t.zk,
                    this.Ak = new t.Bk,
                    this.Ck = new t.Dk,
                    this.Ek = new t.Fk,
                    this.Gk = new t.Hk,
                    this.ze = new t.Ik,
                    this.Jk = new t.Kk,
                    this.Lk = new t.Mk,
                    this.Nk = new t.Ok,
                    this.Pk = []
                }
                function i(t, a) {
                    if (0 !== a) {
                        var i = t[a];
                        e.ca(t, 0, 1, a),
                        t[0] = i
                    }
                }
                function c(t, a) {
                    if (a !== t.length + 1) {
                        var i = t[a];
                        e.ca(t, a + 1, a, t.length - a - 1),
                        t[t.length - 1] = i
                    }
                }
                function n(t, a) {
                    for (var e = 0; e < t.length; e++)
                        if (t[e] === a)
                            return e;
                    return -1
                }
                return a.prototype.za = function() {
                    this.ik = new t.vf(t.Cf.Bf),
                    this.Pk = [this.sf, this.rf, this.lk, this.nk, this.pk, this.rk, this.tk, this.vk, this.oi, this.yk, this.Ak, this.Ck, this.Ek, this.Gk, this.ze, this.Jk, this.Lk, this.Nk];
                    for (var a = 0; a < this.Pk.length; a++)
                        this.Pk[a].za()
                }
                ,
                a.prototype.Ch = function(t, a) {
                    for (var e = this.Pk.length - 1; e >= 0; e--)
                        this.Pk[e].cg(t, a);
                    this.Pk[0] !== this.sf && this.Pk[0] !== this.Nk && null != this.ik && this.ik.cg(t, a)
                }
                ,
                a.prototype.$f = function() {
                    for (var t = this.Pk.length - 1; t >= 0; t--)
                        this.Pk[t].$f();
                    null != this.ik && this.ik.$f()
                }
                ,
                a.prototype.Qk = function(t) {
                    var a = n(this.Pk, t);
                    if (!(a < 0)) {
                        this.Pk[0].Rk(),
                        i(this.Pk, a),
                        this.Sk()
                    }
                }
                ,
                a.prototype.Tk = function() {
                    this.Pk[0].Rk();
                    do {
                        c(this.Pk, 0)
                    } while (this.Pk[0].Ed !== t.Vk.Uk);
                    this.Sk()
                }
                ,
                a.prototype.Sk = function() {
                    var t = this.Pk[0];
                    t.Wk(),
                    t.Xk(),
                    this.Yk()
                }
                ,
                a.prototype.Zk = function() {
                    return 0 !== this.Pk.length && (this.Pk[0].Ed === t.Vk.Uk && this.Gk.$k())
                }
                ,
                a.prototype._k = function() {
                    return 0 === this.Pk.length ? null : this.Pk[0]
                }
                ,
                a.prototype.Yk = function() {
                    this.Zk() && this.Qk(this.Gk)
                }
                ,
                a
            }(),
            t.dj = function() {
                function t() {
                    this.Sh = [],
                    this.Ph = []
                }
                return t.ej = function(t, a) {
                    return {
                        Th: t,
                        Rh: a
                    }
                }
                ,
                t.fj = function(t, a) {
                    return {
                        Qh: t,
                        Rh: a
                    }
                }
                ,
                t
            }(),
            t.al = function() {
                function i() {
                    this.bl = [],
                    this.cl = [],
                    this.dl = !1,
                    this.el = c,
                    this.fl = {}
                }
                var c = "guest"
                  , n = "guest"
                  , f = "fb"
                  , o = "gg";
                return i.gl = new (function() {
                    function t() {}
                    return t.hl = function() {
                        function t(t) {
                            this.il = t
                        }
                        return t
                    }(),
                    t.prototype.jl = function() {
                        return "undefined" != ("undefined" == typeof FB ? "undefined" : _typeof(FB))
                    }
                    ,
                    t.prototype.kl = function(t, a, i) {
                        var c = "https://graph.facebook.com/me" + "?access_token=" + t;
                        $.get(c).fail(function() {
                            a()
                        }).done(function() {
                            i()
                        })
                    }
                    ,
                    t.prototype.ll = function(a, i) {
                        if (!this.jl())
                            return void a();
                        this.ml(function() {
                            FB.login(function(c) {
                                if (c.status !== "connected")
                                    return void a();
                                var n = c.authResponse.accessToken;
                                i(new t.hl(n))
                            })
                        }, function(t) {
                            i(t)
                        })
                    }
                    ,
                    t.prototype.ml = function(a, i) {
                        var c = this;
                        if (!this.jl())
                            return void a();
                        FB.getLoginStatus(function(n) {
                            if (n.status !== "connected")
                                return void a();
                            var f = n.authResponse.accessToken;
                            c.kl(f, function() {
                                a()
                            }, function() {
                                i(new t.hl(f))
                            })
                        })
                    }
                    ,
                    t.prototype.nl = function() {
                        this.jl() && FB.logout()
                    }
                    ,
                    t
                }()),
                i.ol = new (function() {
                    function t() {}
                    return t.pl = function() {
                        function t(t, a) {
                            this.il = t,
                            this.ql = a
                        }
                        return t
                    }(),
                    t.prototype.jl = function() {
                        return "undefined" != _typeof(GoogleAuth)
                    }
                    ,
                    t.prototype.ll = function(a, i) {
                        if ("undefined" == _typeof(GoogleAuth))
                            return void a();
                        GoogleAuth.then(function() {
                            if (GoogleAuth.isSignedIn.get()) {
                                var c = GoogleAuth.currentUser.get()
                                  , n = c.getAuthResponse().id_token
                                  , f = (new Date).getTime() + 1e3 * c.getAuthResponse().expires_in;
                                if ((new Date).getTime() < f)
                                    return void i(new t.pl(n,f))
                            }
                            GoogleAuth.signIn().then(function(c) {
                                if ("undefined" !== _typeof(c.error))
                                    return void a();
                                if (!c.isSignedIn())
                                    return void a();
                                var n = c.getAuthResponse().id_token
                                  , f = (new Date).getTime() + 1e3 * c.getAuthResponse().expires_in;
                                i(new t.pl(n,f))
                            })
                        })
                    }
                    ,
                    t.prototype.ml = function(a, i) {
                        if ("undefined" == _typeof(GoogleAuth))
                            return void a();
                        GoogleAuth.then(function() {
                            if (GoogleAuth.isSignedIn.get()) {
                                var e = GoogleAuth.currentUser.get()
                                  , c = e.getAuthResponse().id_token
                                  , n = (new Date).getTime() + 1e3 * e.getAuthResponse().expires_in;
                                if ((new Date).getTime() < n)
                                    return void i(new t.pl(c,n))
                            }
                            a()
                        })
                    }
                    ,
                    t.prototype.nl = function() {
                        "undefined" != _typeof(GoogleAuth) && GoogleAuth.signOut()
                    }
                    ,
                    t
                }()),
                i.prototype.za = function() {
                    this.rl()
                }
                ,
                i.prototype.sl = function() {
                    return this.dl ? this.fl["userId"] : ""
                }
                ,
                i.prototype.tl = function() {
                    return this.dl ? this.fl["username"] : ""
                }
                ,
                i.prototype.ul = function() {
                    return this.dl ? this.fl["nickname"] : ""
                }
                ,
                i.prototype.vl = function() {
                    return this.dl ? this.fl["avatarUrl"] : a.A.G
                }
                ,
                i.prototype.wl = function() {
                    return this.dl && this.fl["isBuyer"]
                }
                ,
                i.prototype.xl = function() {
                    return this.dl && this.fl["isConsentGiven"]
                }
                ,
                i.prototype.yl = function() {
                    return this.dl ? this.fl["coins"] : 0
                }
                ,
                i.prototype.zl = function() {
                    return this.dl ? this.fl["level"] : 1
                }
                ,
                i.prototype.Al = function() {
                    return this.dl ? this.fl["expOnLevel"] : 0
                }
                ,
                i.prototype.Bl = function() {
                    return this.dl ? this.fl["expToNext"] : 50
                }
                ,
                i.prototype.Cl = function() {
                    return this.dl ? this.fl["skinId"] : 0
                }
                ,
                i.prototype.Dl = function() {
                    return this.dl ? this.fl["eyesId"] : 0
                }
                ,
                i.prototype.El = function() {
                    return this.dl ? this.fl["mouthId"] : 0
                }
                ,
                i.prototype.Fl = function() {
                    return this.dl ? this.fl["glassesId"] : 0
                }
                ,
                i.prototype.Gl = function() {
                    return this.dl ? this.fl["hatId"] : 0
                }
                ,
                i.prototype.Hl = function() {
                    return this.dl ? this.fl["highScore"] : 0
                }
                ,
                i.prototype.Il = function() {
                    return this.dl ? this.fl["bestSurvivalTimeSec"] : 0
                }
                ,
                i.prototype.Jl = function() {
                    return this.dl ? this.fl["kills"] : 0
                }
                ,
                i.prototype.Kl = function() {
                    return this.dl ? this.fl["headShots"] : 0
                }
                ,
                i.prototype.Ll = function() {
                    return this.dl ? this.fl["sessionsPlayed"] : 0
                }
                ,
                i.prototype.Ml = function() {
                    return this.dl ? this.fl["totalPlayTimeSec"] : 0
                }
                ,
                i.prototype.Nl = function() {
                    return this.dl ? this.fl["regDate"] : {}
                }
                ,
                i.prototype.Ol = function(t) {
                    this.bl.push(t),
                    t()
                }
                ,
                i.prototype.Pl = function(t) {
                    this.cl.push(t),
                    t()
                }
                ,
                i.prototype._j = function(t, a) {
                    var i = this.fl["propertyList"];
                    if (null == i)
                        return !1;
                    for (var c = t.toString(), n = 0; n < i.length; n++) {
                        var f = i[n];
                        if (f["id"] === c && f["type"] === a)
                            return !0
                    }
                    return !1
                }
                ,
                i.prototype.Xj = function() {
                    return this.dl
                }
                ,
                i.prototype.Ql = function() {
                    return this.el
                }
                ,
                i.prototype.Rl = function(i) {
                    var c = this
                      , n = this.sl()
                      , f = this.yl()
                      , o = this.zl();
                    this.Sl(function() {
                        null != i && i()
                    }, function(h) {
                        c.fl = h["user_data"],
                        c.Tl();
                        var d = c.sl()
                          , s = c.yl()
                          , r = c.zl();
                        if (n === d) {
                            r > 1 && r !== o && a.L.Fg.Gk.Ul(new t.Vl(r));
                            var b = s - f;
                            b >= 20 && a.L.Fg.Gk.Ul(new t.Wl(b))
                        }
                        null != i && i()
                    })
                }
                ,
                i.prototype.Sl = function(t, i) {
                    var c = a.A.C + "/pub/wuid/" + this.el + "/getUserData";
                    e.ha(c, t, function(a) {
                        1200 !== a["code"] ? t() : i(a)
                    })
                }
                ,
                i.prototype.Xl = function(t, i, c, n) {
                    var f = a.A.C + "/pub/wuid/" + this.el + "/buyProperty" + "?id=" + t + "&type=" + i;
                    e.ha(f, function() {
                        c()
                    }, function(t) {
                        1200 !== t["code"] ? c() : n()
                    })
                }
                ,
                i.prototype.Yl = function(t, i) {
                    var c = a.A.C + "/pub/wuid/" + this.el + "/deleteAccount";
                    e.ha(c, t, function(a) {
                        1200 !== a["code"] ? t() : i()
                    })
                }
                ,
                i.prototype.Zl = function(t) {
                    var a = this;
                    this.dl && this.$l(),
                    i.gl.ll(function() {
                        t()
                    }, function(e) {
                        a._l(f, e.il, t)
                    })
                }
                ,
                i.prototype.am = function(t) {
                    var a = this;
                    this.dl && this.$l(),
                    i.ol.ll(function() {
                        t()
                    }, function(e) {
                        a._l(o, e.il, t)
                    })
                }
                ,
                i.prototype._l = function(t, i, c) {
                    var n = this
                      , f = t + "_" + i
                      , o = a.A.C + "/pub/wuid/" + f + "/login";
                    e.ha(o, function() {
                        n.bm()
                    }, function(a) {
                        1200 !== a["code"] ? n.bm() : (n.cm(t, i, a["user_data"]),
                        null != c && c())
                    })
                }
                ,
                i.prototype.$l = function() {
                    try {
                        this.dm(),
                        this.em()
                    } catch (t) {}
                    this.fm()
                }
                ,
                i.prototype.gm = function() {
                    this.dl && this.Yl(function() {}, function() {})
                }
                ,
                i.prototype.bm = function() {
                    a.L.Fg.Qk(a.L.Fg.Jk)
                }
                ,
                i.prototype.cm = function(a, i, c) {
                    var f = this.dl ? this.fl["userId"] : n;
                    this.dl = !0,
                    this.el = a + "_" + i,
                    this.fl = c,
                    t.kg.vg(t.kg.pg, a, 60),
                    f !== this.fl["userId"] ? this.hm() : this.Tl()
                }
                ,
                i.prototype.fm = function() {
                    var a = this.dl ? this.fl["userId"] : n;
                    this.dl = !1,
                    this.el = c,
                    this.fl = {},
                    t.kg.vg(t.kg.pg, "", 60),
                    a !== this.fl["userId"] ? this.hm() : this.Tl()
                }
                ,
                i.prototype.rl = function() {
                    var a = t.kg.wg(t.kg.pg)
                      , c = this;
                    if (f === a) {
                        var n = 1;
                        !function t() {
                            if (!i.gl.jl() && n++ < 5)
                                return void e.S(t, 1e3);
                            i.gl.ml(function() {}, function(t) {
                                c._l(f, t.il)
                            })
                        }()
                    } else if (o === a) {
                        var h = 1;
                        !function t() {
                            if (!i.ol.jl() && h++ < 5)
                                return void e.S(t, 1e3);
                            i.ol.ml(function() {}, function(t) {
                                c._l(o, t.il)
                            })
                        }()
                    }
                }
                ,
                i.prototype.hm = function() {
                    for (var t = 0; t < this.bl.length; t++)
                        this.bl[t]();
                    this.Tl()
                }
                ,
                i.prototype.Tl = function() {
                    for (var t = 0; t < this.cl.length; t++)
                        this.cl[t]()
                }
                ,
                i.prototype.dm = function() {
                    i.gl.nl()
                }
                ,
                i.prototype.em = function() {
                    i.ol.nl()
                }
                ,
                i
            }(),
            t.Af = function() {
                function a(a, e, c) {
                    this.wf = c,
                    this.zd = !1,
                    this.Fc = new i.e.f,
                    this.Fc.visible = !1,
                    this.im = new Array(a);
                    for (var n = 0; n < this.im.length; n++) {
                        var f = new t.jm(new Float32Array(3 * e));
                        f.km(e),
                        this.im[n] = f,
                        this.Fc.addChild(f.Kf())
                    }
                    this.xf = 1,
                    this.yf = 1,
                    this.$f()
                }
                return a.prototype.Kf = function() {
                    return this.Fc
                }
                ,
                a.prototype._f = function(t) {
                    this.zd = t,
                    this.Fc.visible = t
                }
                ,
                a.prototype.$f = function() {
                    this.xf = this.wf.width(),
                    this.yf = this.wf.height();
                    for (var t = this.yf / 30, a = 0; a < this.im.length; a++)
                        this.im[a].lm(t)
                }
                ,
                a.prototype.jg = function() {
                    if (this.zd)
                        for (var t = 0; t < this.im.length; t++)
                            this.im[t].jg(this.Df)
                }
                ,
                a.prototype.mm = function() {
                    return this.xf
                }
                ,
                a.prototype.nm = function() {
                    return this.yf
                }
                ,
                a.prototype.fg = function(t, a) {
                    this.im[t].om(a)
                }
                ,
                a.prototype.gg = function(t, a) {
                    this.im[t].pm(a)
                }
                ,
                a.prototype.hg = function(t, a, e) {
                    for (var i = this.im[t], c = i.qm(), n = i.rm, f = 0; f < c; f++)
                        n[3 * f] = a,
                        n[3 * f + 1] = e,
                        n[3 * f + 2] = 0
                }
                ,
                a.prototype.ig = function(t, a, e) {
                    var i, c, n = this.im[t], f = n.qm(), o = n.rm, h = n.sm(), d = o[0], s = o[1], r = a - d, b = e - s, u = Math.hypot(r, b);
                    if (u > 0) {
                        o[0] = a,
                        o[1] = e,
                        o[2] = Math.atan2(b, r);
                        for (var p = .25 * h / (.25 * h + u), l = 1 - 2 * p, g = 1, v = f; g < v; g++)
                            i = o[3 * g],
                            o[3 * g] = o[3 * g - 3] * l + (i + d) * p,
                            d = i,
                            c = o[3 * g + 1],
                            o[3 * g + 1] = o[3 * g - 2] * l + (c + s) * p,
                            s = c,
                            o[3 * g + 2] = Math.atan2(o[3 * g - 2] - o[3 * g + 1], o[3 * g - 3] - o[3 * g])
                    }
                }
                ,
                a
            }(),
            t.tm = function() {
                function c(e) {
                    var c = this;
                    this.wf = e,
                    this.Wb = e.get()[0],
                    this.Df = new i.e.i({
                        view: this.Wb,
                        transparent: !0
                    }),
                    this.zd = !1,
                    this.um = new t.jm(new Float32Array(3 * n)),
                    this.xf = 1,
                    this.yf = 1,
                    this.vm = f.wm,
                    this.xm = f.wm,
                    this.ym = f.wm,
                    this.zm = f.wm,
                    this.Am = f.wm,
                    this.$f(),
                    a.L.bd.qc(function() {
                        c.um.Bm()
                    })
                }
                var n = Math.min(100, t.Ec.Oc)
                  , f = {
                    wm: "0lt0",
                    Cm: "0lt1",
                    Dm: "0lt2"
                };
                return c.prototype._f = function(t) {
                    this.zd = t
                }
                ,
                c.prototype.$f = function() {
                    var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                    this.xf = this.wf.width(),
                    this.yf = this.wf.height(),
                    this.Df.resize(this.xf, this.yf),
                    this.Df.resolution = t,
                    this.Wb.width = t * this.xf,
                    this.Wb.height = t * this.yf;
                    var a = this.yf / 4;
                    this.um.lm(a);
                    var i = e.$(2 * Math.floor(this.xf / a) - 5, 1, n);
                    this.um.km(i)
                }
                ,
                c.prototype.cg = function() {
                    if (this.zd) {
                        var t = e.ja()
                          , a = t / 200
                          , i = Math.sin(a);
                        this.um.Em(this.Fm(this.vm, i), this.Gm(this.vm, i)),
                        this.um.Hm(this.Im(this.xm, i), this.Im(this.ym, i), this.Im(this.zm, i), this.Im(this.Am, i));
                        for (var c = this.um.sm(), n = this.um.qm(), f = this.um.rm, o = this.xf - .5 * (this.xf - .5 * c * (n - 1)), h = .5 * this.yf, d = 0, s = 0, r = -1; r < n; r++) {
                            var b = r
                              , u = Math.cos(1 * b / 12 * Math.PI - a) * (1 - Math.pow(16, -1 * b / 12));
                            r >= 0 && (f[3 * r] = o + -.5 * c * b,
                            f[3 * r + 1] = h + .5 * c * u,
                            f[3 * r + 2] = Math.atan2(s - u, b - d)),
                            d = b,
                            s = u
                        }
                        this.um.jg(),
                        this.um.Jm(this.Df)
                    }
                }
                ,
                c.prototype.om = function(t) {
                    this.um.om(t)
                }
                ,
                c.prototype.Km = function(t) {
                    this.vm = t ? f.Dm : f.Cm,
                    this.xm = f.wm,
                    this.ym = f.wm,
                    this.zm = f.wm,
                    this.Am = f.wm
                }
                ,
                c.prototype.Lm = function(t) {
                    this.vm = f.wm,
                    this.xm = t ? f.Dm : f.Cm,
                    this.ym = f.wm,
                    this.zm = f.wm,
                    this.Am = f.wm
                }
                ,
                c.prototype.Mm = function(t) {
                    this.vm = f.wm,
                    this.xm = f.wm,
                    this.ym = t ? f.Dm : f.Cm,
                    this.zm = f.wm,
                    this.Am = f.wm
                }
                ,
                c.prototype.Nm = function(t) {
                    this.vm = f.wm,
                    this.xm = f.wm,
                    this.ym = f.wm,
                    this.zm = t ? f.Dm : f.Cm,
                    this.Am = f.wm
                }
                ,
                c.prototype.Om = function(t) {
                    this.vm = f.wm,
                    this.xm = f.wm,
                    this.ym = f.wm,
                    this.zm = f.wm,
                    this.Am = t ? f.Dm : f.Cm
                }
                ,
                c.prototype.Fm = function(t, a) {
                    switch (t) {
                    case f.Cm:
                        return .9 + .1 * a;
                    case f.Dm:
                        return .4 + .3 * a
                    }
                    return 1
                }
                ,
                c.prototype.Gm = function(t, a) {
                    switch (t) {
                    case f.Cm:
                        return .6 + .5 * a;
                    case f.Dm:
                        return .3 + .3 * a
                    }
                    return 1
                }
                ,
                c.prototype.Im = function(t, a) {
                    switch (t) {
                    case f.Cm:
                        return .9 + .1 * a;
                    case f.Dm:
                        return .6 + .4 * a
                    }
                    return 1
                }
                ,
                c
            }(),
            t.ck = function() {
                function t(t, a, e, i, c) {
                    this.Pm = t,
                    this.Qm = a,
                    this.Rm = e,
                    this.Sm = i,
                    this.Tm = c
                }
                return t.bk = function(a) {
                    return new t(a["price"],a["guest"],a["nonbuyable"],a["nonbuyableCause"],a["description"])
                }
                ,
                t.dk = function(a) {
                    return new t(a["price"],a["guest"],a["nonbuyable"],a["nonbuyableCause"],a["description"])
                }
                ,
                t.prototype.Zj = function() {
                    return this.Pm
                }
                ,
                t.prototype.ak = function() {
                    return this.Qm
                }
                ,
                t.prototype.$j = function() {
                    return this.Rm
                }
                ,
                t.prototype.Um = function() {
                    return this.Sm
                }
                ,
                t.prototype.Vm = function() {
                    return this.Tm
                }
                ,
                t
            }(),
            t.Hf = function() {
                function t(t) {
                    this.Wm = {},
                    this.Wm[o] = t;
                    var a = i.e.k.from(r, b, this.Wm);
                    this.Jf = new i.e.p(s,a),
                    this.Jf.blendMode = i.e.q.t
                }
                var a = "a1_" + e.fa()
                  , c = "a2_" + e.fa()
                  , n = "translationMatrix"
                  , f = "projectionMatrix"
                  , o = "u3_" + e.fa()
                  , h = "u4_" + e.fa()
                  , d = "v1_" + e.fa()
                  , s = (new i.e.o).addAttribute(a, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2)
                  , r = "precision mediump float;attribute vec2 ".concat(a, ";attribute vec2 ").concat(c, ";uniform mat3 ").concat(n, ";uniform mat3 ").concat(f, ";uniform vec4 ").concat(h, ";varying vec2 ").concat(d, ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((").concat(f, "*").concat(n, "*vec3(").concat(a, ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=").concat(h, ";vec2 uv=").concat(c, ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;").concat(d, "=uv;}")
                  , b = "precision highp float;varying vec2 ".concat(d, ";uniform sampler2D ").concat(o, ";void main(){gl_FragColor=texture2D(").concat(o, ",").concat(d, ");}");
                return t.prototype.bg = function(t, a) {
                    this.Jf.scale.x = t,
                    this.Jf.scale.y = a,
                    this.Wm[h] = [t, a, 1 / t + 1, 1 / a + 1]
                }
                ,
                t
            }(),
            t.bh = function() {
                function t() {
                    this.Wm = {},
                    this.Wm[o] = [1, .5, .25, .5],
                    this.Wm[h] = i.e.h.WHITE,
                    this.Wm[d] = [0, 0],
                    this.Wm[s] = [0, 0];
                    var t = i.e.k.from(u, p, this.Wm);
                    this.Jf = new i.e.p(b,t)
                }
                var a = "a1_" + e.fa()
                  , c = "a2_" + e.fa()
                  , n = "translationMatrix"
                  , f = "projectionMatrix"
                  , o = "u3_" + e.fa()
                  , h = "u4_" + e.fa()
                  , d = "u5_" + e.fa()
                  , s = "u6_" + e.fa()
                  , r = "v1_" + e.fa()
                  , b = (new i.e.o).addAttribute(a, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2).addAttribute(c, [-.5, -.5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5], 2)
                  , u = "precision mediump float;attribute vec2 ".concat(a, ";attribute vec2 ").concat(c, ";uniform mat3 ").concat(n, ";uniform mat3 ").concat(f, ";varying vec2 ").concat(r, ";void main(){").concat(r, "=").concat(c, ";gl_Position=vec4((").concat(f, "*").concat(n, "*vec3(").concat(a, ",1.0)).xy,0.0,1.0);}")
                  , p = "precision highp float;varying vec2 ".concat(r, ";uniform vec4 ").concat(o, ";uniform sampler2D ").concat(h, ";uniform vec2 ").concat(d, ";uniform vec2 ").concat(s, ";void main(){gl_FragColor=texture2D(").concat(h, ",").concat(r, "*").concat(d, "+").concat(s, ")*0.3+").concat(o, ".a*vec4(").concat(o, ".rgb,0.0);}");
                return t.prototype.Wc = function(t, a, e, i) {
                    var c = this.Wm[o];
                    c[0] = t,
                    c[1] = a,
                    c[2] = e,
                    c[3] = i
                }
                ,
                t.prototype.ph = function(t) {
                    this.Wm[h] = t
                }
                ,
                t.prototype.jg = function(t, a, e, i) {
                    this.Jf.position.x = t,
                    this.Jf.position.y = a,
                    this.Jf.scale.x = e,
                    this.Jf.scale.y = i;
                    var c = this.Wm[d];
                    c[0] = .2520615384615385 * e,
                    c[1] = .4357063736263738 * i;
                    var n = this.Wm[s];
                    n[0] = .2520615384615385 * t,
                    n[1] = .4357063736263738 * a
                }
                ,
                t
            }(),
            t.Kc = function() {
                function t() {
                    this.Pc = new i.e.m,
                    this.Xm = 0,
                    this.Ym = 0
                }
                return t.prototype.Tc = function(t) {
                    this.Pc.texture = t.Wa(),
                    this.Pc.anchor.set(t.Qa, t.Ra),
                    this.Xm = t.Sa,
                    this.Ym = t.Ta
                }
                ,
                t.prototype.Wc = function(t) {
                    this.Pc.tint = parseInt(t.substring(1), 16)
                }
                ,
                t.prototype.jd = function(t) {
                    this.Pc.width = t * this.Xm,
                    this.Pc.height = t * this.Ym
                }
                ,
                t.prototype.Dd = function(t) {
                    this.Pc.rotation = t
                }
                ,
                t.prototype.Cd = function(t, a) {
                    this.Pc.position.set(t, a)
                }
                ,
                t.prototype.Bd = function(t) {
                    this.Pc.visible = t
                }
                ,
                t.prototype.yd = function() {
                    return this.Pc.visible
                }
                ,
                t.prototype.zj = function(t) {
                    this.Pc.alpha = t
                }
                ,
                t.prototype.gd = function() {
                    return this.Pc
                }
                ,
                t.prototype.z = function() {
                    i.e.w.z(this.Pc)
                }
                ,
                t
            }(),
            t.Ci = function() {
                function c(a) {
                    this.yh = a,
                    this.Uh = new t.Ci.Bi,
                    this.Mi = !1,
                    this.Li = !0,
                    this.nd = !1,
                    this.qd = 0,
                    this.Zm = 0,
                    this.tj = 1,
                    this.td = 0,
                    this.Rh = 0,
                    this.vd = {},
                    this.sd = 0,
                    this.$m = new Float32Array(2 * n),
                    this._m = new Float32Array(2 * n),
                    this.rd = new Float32Array(2 * n),
                    this.an = null,
                    this.bn = null,
                    this.cn = null,
                    this.dn()
                }
                var n = 200;
                return c.prototype.Ii = function() {
                    null != this.bn && i.e.w.z(this.bn.Fc),
                    null != this.cn && i.e.w.z(this.cn)
                }
                ,
                c.prototype.dn = function() {
                    this.Pi(.25),
                    this.Uh.Ea = "",
                    this.Li = !0,
                    this.vd = {},
                    this.Bd(!1)
                }
                ,
                c.prototype.Hi = function(t) {
                    this.Uh = t,
                    this.en(this.Mi)
                }
                ,
                c.prototype.Bd = function(t) {
                    var a = this.Mi;
                    this.Mi = t,
                    this.en(a)
                }
                ,
                c.prototype.Pi = function(t) {
                    this.Rh = 50 * t;
                    var a = t;
                    t > this.yh.Rg && (a = Math.atan((t - this.yh.Rg) / this.yh.Sg) * this.yh.Sg + this.yh.Rg);
                    var e = Math.sqrt(4 * Math.pow(5 * a, .707106781186548) + 25)
                      , i = Math.min(n, Math.max(3, 5 * (e - 5) + 1))
                      , c = this.sd;
                    if (this.qd = .025 * (5 + .9 * e),
                    this.sd = Math.floor(i),
                    this.Zm = i - this.sd,
                    c > 0 && c < this.sd)
                        for (var f = this.$m[2 * c - 2], o = this.$m[2 * c - 1], h = this._m[2 * c - 2], d = this._m[2 * c - 1], s = this.rd[2 * c - 2], r = this.rd[2 * c - 1], b = c; b < this.sd; b++)
                            this.$m[2 * b] = f,
                            this.$m[2 * b + 1] = o,
                            this._m[2 * b] = h,
                            this._m[2 * b + 1] = d,
                            this.rd[2 * b] = s,
                            this.rd[2 * b + 1] = r
                }
                ,
                c.prototype.Ui = function(t, a) {
                    this.sd = a;
                    for (var e = 0; e < this.sd; e++)
                        this.$m[2 * e] = this._m[2 * e] = this.rd[2 * e] = t(),
                        this.$m[2 * e + 1] = this._m[2 * e + 1] = this.rd[2 * e + 1] = t()
                }
                ,
                c.prototype.Ri = function(t, a, e) {
                    this.nd = e;
                    for (var i = 0; i < this.sd; i++)
                        this.$m[2 * i] = this._m[2 * i],
                        this.$m[2 * i + 1] = this._m[2 * i + 1];
                    var c = t - this._m[0]
                      , n = a - this._m[1];
                    this.gn(c, n, this.sd, this._m)
                }
                ,
                c.prototype.gn = function(t, a, e, i) {
                    var c = Math.hypot(t, a);
                    if (!(c <= 0)) {
                        var n, f = i[0];
                        i[0] += t;
                        var o, h = i[1];
                        i[1] += a;
                        for (var d = this.qd / (this.qd + c), s = 1 - 2 * d, r = 1, b = e - 1; r < b; r++)
                            n = i[2 * r],
                            i[2 * r] = i[2 * r - 2] * s + (n + f) * d,
                            f = n,
                            o = i[2 * r + 1],
                            i[2 * r + 1] = i[2 * r - 1] * s + (o + h) * d,
                            h = o;
                        d = this.Zm * this.qd / (this.Zm * this.qd + c),
                        s = 1 - 2 * d,
                        i[2 * e - 2] = i[2 * e - 4] * s + (i[2 * e - 2] + f) * d,
                        i[2 * e - 1] = i[2 * e - 3] * s + (i[2 * e - 1] + h) * d
                    }
                }
                ,
                c.prototype.wh = function() {
                    return {
                        Ia: this.rd[0],
                        Ja: this.rd[1]
                    }
                }
                ,
                c.prototype.Ni = function(t, a) {
                    for (var e = 1e6, i = t, c = a, n = 0; n < this.sd; n++) {
                        var f = this.rd[2 * n]
                          , o = this.rd[2 * n + 1]
                          , h = Math.hypot(t - f, a - o);
                        h < e && (e = h,
                        i = f,
                        c = o)
                    }
                    return {
                        Ia: i,
                        Ja: c,
                        Oi: e
                    }
                }
                ,
                c.prototype.Ji = function(t) {
                    this.an = t
                }
                ,
                c.prototype.xj = function(t, a) {
                    this.tj = e._(this.tj, this.Li ? this.nd ? .9 + .1 * Math.cos(t / 400 * Math.PI) : 1 : 0, a, 1 / 800),
                    this.td = e._(this.td, this.Li ? this.nd ? 1 : 0 : 1, a, .0025),
                    null != this.bn && (this.bn.Fc.alpha = this.tj),
                    null != this.cn && (this.cn.alpha = this.tj)
                }
                ,
                c.prototype.yj = function(t, a, i, c) {
                    if (this.Mi && this.Li)
                        for (var n = Math.pow(.11112, a / 95), f = 0; f < this.sd; f++) {
                            var o = e.ba(this.$m[2 * f], this._m[2 * f], i)
                              , h = e.ba(this.$m[2 * f + 1], this._m[2 * f + 1], i);
                            this.rd[2 * f] = e.ba(o, this.rd[2 * f], n),
                            this.rd[2 * f + 1] = e.ba(h, this.rd[2 * f + 1], n)
                        }
                    null != this.bn && this.Mi && this.bn.pd(this, t, a, c),
                    null != this.cn && (this.cn.zh.x = this.rd[0],
                    this.cn.zh.y = this.rd[1] - 3 * this.qd)
                }
                ,
                c.prototype.en = function(t) {
                    this.Mi ? t || this.hn() : (null != this.bn && i.e.w.z(this.bn.Fc),
                    null != this.cn && i.e.w.z(this.cn))
                }
                ,
                c.prototype.hn = function() {
                    null == this.bn ? this.bn = new t.Ec : i.e.w.z(this.bn.Fc),
                    this.bn.Qc(a.L.uh.yh.Og, a.L.bd.jc().Bb(this.Uh.Wh), a.L.bd.jc().Ab(this.Uh.Xh), a.L.bd.jc().Cb(this.Uh.Di), a.L.bd.jc().Db(this.Uh.Ei), a.L.bd.jc().Eb(this.Uh.Fi), a.L.bd.jc().Fb(this.Uh.Gi), "#ffffff"),
                    null == this.cn ? (this.cn = new t.in(""),
                    this.cn.style.fontFamily = "PTSans",
                    this.cn.anchor.set(.5)) : i.e.w.z(this.cn),
                    this.cn.style.fontSize = 14,
                    this.cn.style.fill = a.L.bd.jc().Ab(this.Uh.Xh).Lb,
                    this.cn.text = this.Uh.Ea,
                    this.an.Fh(this.Uh.re, this.bn, this.cn)
                }
                ,
                c.Bi = function() {
                    function a() {
                        this.re = 0,
                        this.Wh = t.Ng.Tg,
                        this.Xh = 0,
                        this.Di = 0,
                        this.Ei = 0,
                        this.Fi = 0,
                        this.Gi = 0,
                        this.Ea = ""
                    }
                    return a
                }(),
                c
            }(),
            t.in = function() {
                return e.X(i.e.n, function(t, a, e) {
                    i.e.n.call(this, t, a, e),
                    this.zh = {
                        x: 0,
                        y: 0
                    }
                })
            }(),
            t.zb = function() {
                function t(t, a, e, i, c) {
                    this.Bj = t,
                    this.Cj = a,
                    this.Dj = e,
                    this.Ej = i,
                    this.Fj = c
                }
                return t.prototype.jn = function(a) {
                    return new t(a,this.Cj,this.Dj,this.Ej,this.Fj)
                }
                ,
                t.prototype.kn = function(a) {
                    return new t(this.Bj,a,this.Dj,this.Ej,this.Fj)
                }
                ,
                t.prototype.ln = function(a) {
                    return new t(this.Bj,this.Cj,a,this.Ej,this.Fj)
                }
                ,
                t.prototype.mn = function(a) {
                    return new t(this.Bj,this.Cj,this.Dj,a,this.Fj)
                }
                ,
                t.prototype.nn = function(a) {
                    return new t(this.Bj,this.Cj,this.Dj,this.Ej,a)
                }
                ,
                t
            }(),
            t.jm = function() {
                function i(a) {
                    this.pn = new t.Ec,
                    this.pn.Fc.addChild(this.pn.Gc),
                    this.qn = null,
                    this.rn = null,
                    this.rm = a,
                    this.Hc = 0,
                    this.Wi = 1,
                    this.sn = 1,
                    this.tn = 1,
                    this.un = 1,
                    this.vn = 1,
                    this.wn = 1,
                    this.xn = 1,
                    this.pm("#ffffff")
                }
                var c = new t.zb(0,0,0,0,0);
                return i.prototype.Kf = function() {
                    return this.pn.Fc
                }
                ,
                i.prototype.km = function(t) {
                    if (this.Hc = t,
                    this.pn.Hc !== t) {
                        for (var a = t; a < this.pn.Ic.length; a++)
                            this.pn.Ic[a].kd();
                        for (; this.pn.Hc > t; ) {
                            this.pn.Hc -= 1;
                            var e = this.pn.Ic[this.pn.Hc];
                            e.Vc.z(),
                            e.Uc.z()
                        }
                        for (; this.pn.Hc < t; ) {
                            var i = this.pn.Ic[this.pn.Hc];
                            this.pn.Hc += 1,
                            this.pn.Fc.addChild(i.Uc.gd()),
                            this.pn.Fc.addChild(i.Vc.gd()),
                            i.Uc.zj(this.sn),
                            i.Vc.zj(this.tn)
                        }
                        for (var c = 0; c < this.pn.Gc.Xc.length; c++)
                            this.pn.Gc.Xc[c].zj(this.un);
                        for (var n = 0; n < this.pn.Gc.Yc.length; n++)
                            this.pn.Gc.Yc[n].zj(this.vn);
                        for (var f = 0; f < this.pn.Gc.$c.length; f++)
                            this.pn.Gc.$c[f].zj(this.wn);
                        for (var o = 0; o < this.pn.Gc.Zc.length; o++)
                            this.pn.Gc.Zc[o].zj(this.xn)
                    }
                }
                ,
                i.prototype.qm = function() {
                    return this.Hc
                }
                ,
                i.prototype.om = function(t) {
                    this.qn = t,
                    this.rn = "#ffffff",
                    this.Bm()
                }
                ,
                i.prototype.pm = function(t) {
                    this.qn = c,
                    this.rn = t,
                    this.Bm()
                }
                ,
                i.prototype.Bm = function() {
                    this.pn.Qc(t.Sc.Mg, null, a.L.bd.jc().Ab(this.qn.Bj), a.L.bd.jc().Cb(this.qn.Cj), a.L.bd.jc().Db(this.qn.Dj), a.L.bd.jc().Eb(this.qn.Fj), a.L.bd.jc().Fb(this.qn.Ej), this.rn)
                }
                ,
                i.prototype.lm = function(t) {
                    this.Wi = t
                }
                ,
                i.prototype.sm = function() {
                    return this.Wi
                }
                ,
                i.prototype.Em = function(t, a) {
                    this.sn = t,
                    this.tn = a;
                    for (var e = 0; e < this.Hc; e++) {
                        var i = this.pn.Ic[e];
                        i.Uc.zj(this.sn),
                        i.Vc.zj(this.tn)
                    }
                }
                ,
                i.prototype.Hm = function(t, a, e, i) {
                    this.un = t,
                    this.vn = a,
                    this.wn = e,
                    this.xn = i;
                    for (var c = 0; c < this.pn.Gc.Xc.length; c++)
                        this.pn.Gc.Xc[c].zj(this.un);
                    for (var n = 0; n < this.pn.Gc.Yc.length; n++)
                        this.pn.Gc.Yc[n].zj(this.vn);
                    for (var f = 0; f < this.pn.Gc.$c.length; f++)
                        this.pn.Gc.$c[f].zj(this.wn);
                    for (var o = 0; o < this.pn.Gc.Zc.length; o++)
                        this.pn.Gc.Zc[o].zj(this.xn)
                }
                ,
                i.prototype.jg = function() {
                    var t = 2 * this.Wi
                      , a = 2 * this.Wi * 1.5;
                    if (this.Hc > 0) {
                        var e = this.rm[0]
                          , i = this.rm[1]
                          , c = this.rm[2];
                        this.pn.Ic[0].hd(e, i, t, a, c),
                        this.pn.Gc.hd(e, i, t, c)
                    }
                    for (var n = 1; n < this.Hc; n++) {
                        var f = this.rm[3 * n]
                          , o = this.rm[3 * n + 1]
                          , h = this.rm[3 * n + 2];
                        this.pn.Ic[n].hd(f, o, t, a, h)
                    }
                }
                ,
                i.prototype.Jm = function(t) {
                    t.render(this.pn.Fc)
                }
                ,
                i
            }(),
            t.Cf = function() {
                function t(t) {
                    this.Ed = t
                }
                return t.Bf = $("#background-canvas"),
                t.yn = $("#stretch-box"),
                t.zn = $("#social-buttons"),
                t.An = $("#markup-wrap"),
                t.Bn = $("#game-view"),
                t.Cn = $("#results-view"),
                t.Dn = $("#main-menu-view"),
                t.En = $("#popup-view"),
                t.Fn = $("#toaster-view"),
                t.Gn = $("#loading-view"),
                t.Hn = $("#restricted-view"),
                t.In = $("#error-gateway-connection-view"),
                t.Jn = $("#error-game-connection-view"),
                t.prototype.za = function() {}
                ,
                t.prototype.Wk = function() {}
                ,
                t.prototype.Xk = function() {}
                ,
                t.prototype.Rk = function() {}
                ,
                t.prototype.$f = function() {}
                ,
                t.prototype.cg = function(t, a) {}
                ,
                t
            }(),
            t.jk = function() {
                function c(t, a, i, c, n, f) {
                    var o = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\">" + "<rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg>" + "<span>" + t + "</span></div>"
                      , h = $(o);
                    return h.click(function() {
                        "undefined" !== ("undefined" == typeof FB ? "undefined" : _typeof(FB)) && "undefined" != _typeof(FB.ui) && FB.ui({
                            method: "feed",
                            display: "popup",
                            link: a,
                            name: i,
                            caption: c,
                            description: n,
                            picture: f
                        }, function() {})
                    }),
                    h
                }
                var n = $("#final-caption")
                  , f = $("#final-continue")
                  , o = $("#congrats-bg")
                  , h = $("#unl6wj4czdl84o9b")
                  , d = $("#final-share-fb")
                  , s = $("#final-message")
                  , r = $("#final-score")
                  , b = $("#final-place")
                  , u = $("#final-board")
                  , p = $("#game-canvas")
                  , l = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn);
                    var i = this
                      , c = p.get()[0];
                    d.toggle(a.Mn.Ln),
                    n.text(e.O("index.game.result.title")),
                    f.text(e.O("index.game.result.continue")),
                    f.click(function() {
                        a.L.Si.Se(),
                        a.Mn.Nn.Ca(),
                        a.L.Si.Ge(t.xe.Ae.rf),
                        a.L.Fg.Qk(a.L.Fg.rf)
                    }),
                    $("html").keydown(function(t) {
                        32 === t.keyCode && (i.On = !0)
                    }).keyup(function(t) {
                        32 === t.keyCode && (i.On = !1)
                    }),
                    c.addEventListener("touchmove", function(t) {
                        (t = t || window.event) && (t = t.touches[0],
                        "undefined" != _typeof(t.clientX) ? i.Pn = Math.atan2(t.clientY - .5 * c.offsetHeight, t.clientX - .5 * c.offsetWidth) : i.Pn = Math.atan2(t.pageY - .5 * c.offsetHeight, t.pageX - .5 * c.offsetWidth))
                    }, !0),
                    c.addEventListener("touchstart", function(t) {
                        (t = t || window.event) && (i.On = t.touches.length >= 2),
                        t.preventDefault()
                    }, !0),
                    c.addEventListener("touchend", function(t) {
                        (t = t || window.event) && (i.On = t.touches.length >= 2)
                    }, !0),
                    c.addEventListener("mousemove", function(t) {
                        (t = t || window.event && "undefined" != _typeof(t.clientX)) && (i.Pn = Math.atan2(t.clientY - .5 * c.offsetHeight, t.clientX - .5 * c.offsetWidth))
                    }, !0),
                    c.addEventListener("mousedown", function(t) {
                        i.On = !0
                    }, !0),
                    c.addEventListener("mouseup", function(t) {
                        i.On = !1
                    }, !0),
                    this.Eg = new t.Vg(p),
                    this.Qn = g.Rn,
                    this.Pn = 0,
                    this.On = !1
                });
                l.prototype.za = function() {}
                ,
                l.prototype.Wk = function() {
                    t.vf._f(!1),
                    i.b.d(t.Cf.Bf, 50),
                    i.b.d(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.d(t.Cf.An, 50),
                    i.b.c(t.Cf.Bn, 500),
                    this.Qn === g.Rn ? i.b.d(t.Cf.Cn, 1) : i.b.c(t.Cf.Cn, 500),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.d(t.Cf.In, 50),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                l.prototype.Rn = function() {
                    return this.Qn = g.Rn,
                    this
                }
                ,
                l.prototype.Sn = function() {
                    return i.b.d(o, 1),
                    e.S(function() {
                        i.b.c(o, 500)
                    }, 3e3),
                    i.b.d(h, 1),
                    e.S(function() {
                        i.b.c(h, 500)
                    }, 500),
                    this.Qn = g.Sn,
                    this
                }
                ,
                l.prototype.Xk = function() {
                    this.On = !1,
                    this.Eg.$f(),
                    this.Qn === g.Sn && a.L.Si.We()
                }
                ,
                l.prototype.$f = function() {
                    this.Eg.$f()
                }
                ,
                l.prototype.cg = function(t, a) {
                    this.Eg.cg(t, a)
                }
                ,
                l.prototype.Tn = function(t, i, n) {
                    var f, o, h;
                    if (i >= 1 && i <= 10 ? (f = e.O("index.game.result.place.i" + i),
                    o = e.O("index.game.result.placeInBoard"),
                    h = e.O("index.game.social.shareResult.messGood").replace("{0}", n).replace("{1}", t).replace("{2}", f)) : (f = "",
                    o = e.O("index.game.result.tryHit"),
                    h = e.O("index.game.social.shareResult.messNorm").replace("{0}", n).replace("{1}", t)),
                    s.html(e.O("index.game.result.your")),
                    r.html(t),
                    b.html(f),
                    u.html(o),
                    a.Mn.Ln) {
                        var p = e.O("index.game.result.share");
                        e.O("index.game.social.shareResult.caption");
                        d.empty().append(c(p, "https://wormate.io", "wormate.io", h, h, "https://wormate.io/images/og-share-img-new.jpg"))
                    }
                }
                ,
                l.prototype.Un = function() {
                    return this.Pn
                }
                ,
                l.prototype.Vn = function() {
                    return this.On
                }
                ;
                var g = {
                    Rn: 0,
                    Sn: 1
                };
                return l
            }(),
            t.Ik = function() {
                var c = $("#loading-progress-cont")
                  , n = $("#loading-progress-bar")
                  , f = $("#loading-progress-text")
                  , o = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn),
                    this.Wn = -1,
                    this.Xn = ""
                });
                return o.prototype.za = function() {}
                ,
                o.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 500),
                    i.b.c(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.d(t.Cf.An, 50),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.c(t.Cf.Gn, 500),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.d(t.Cf.In, 50),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                o.prototype.Xk = function() {
                    a.L.Si.Ge(t.xe.Ae.ze),
                    a.L.Fg.ik.eg(),
                    a.L.Fg.ik.ag(!0)
                }
                ,
                o.prototype.Rk = function() {
                    a.L.Fg.ik.ag(!1)
                }
                ,
                o.prototype.Yn = function() {
                    this.Zn("", 0),
                    i.b.c(c, 100)
                }
                ,
                o.prototype.$n = function() {
                    i.b.d(c, 100)
                }
                ,
                o.prototype.Zn = function(t, a) {
                    this.Xn !== t && (this.Xn = t);
                    var i = e.$(Math.floor(100 * a), 0, 100);
                    this.Wn !== i && (n.css("width", i + "%"),
                    f.html(i + " %"))
                }
                ,
                o
            }(),
            t.kk = function() {
                var c = $("#mm-line-top")
                  , n = ($("#mm-line-center"),
                $("#mm-line-bottom"),
                $("#mm-bottom-buttons"))
                  , f = $("#mm-menu-cont")
                  , o = $("#mm-loading")
                  , h = $("#mm-loading-progress-bar")
                  , d = $("#mm-loading-progress-text")
                  , s = ($("#mm-event-text"),
                $("#mm-skin-canv"))
                  , r = $("#mm-skin-prev")
                  , b = $("#mm-skin-next")
                  , u = $("#mm-skin-over")
                  , p = $("#mm-skin-over-button-list")
                  , l = $("#mm-params-nickname")
                  , g = $("#mm-params-game-mode")
                  , v = $("#mm-action-play")
                  , y = $("#mm-action-guest")
                  , j = $("#mm-action-login")
                  , m = $("#mm-player-info")
                  , w = $("#mm-store")
                  , k = $("#mm-leaders")
                  , L = $("#mm-settings")
                  , C = $("#mm-coins-box")
                  , M = $("#mm-player-avatar")
                  , S = $("#mm-player-username")
                  , q = $("#mm-coins-val")
                  , F = $("#mm-player-exp-bar")
                  , x = $("#mm-player-exp-val")
                  , z = $("#mm-player-level")
                  , I = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Uk),
                    this.Wn = -1,
                    this.Xn = "",
                    this._n = new t.tm(s),
                    g.click(function() {
                        a.L.Si.Se()
                    }),
                    s.click(function() {
                        a.L.Yj.Xj() && (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.yk))
                    }),
                    r.click(function() {
                        a.L.Si.Se(),
                        a.L.ao.Uj()
                    }),
                    b.click(function() {
                        a.L.Si.Se(),
                        a.L.ao.Tj()
                    }),
                    l.keypress(function(t) {
                        13 === t.keyCode && a.L.bo()
                    }),
                    v.click(function() {
                        a.L.Si.Se(),
                        a.L.bo()
                    }),
                    y.click(function() {
                        a.L.Si.Se(),
                        a.L.bo()
                    }),
                    j.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.vk)
                    }),
                    L.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.oi)
                    }),
                    m.click(function() {
                        a.L.Yj.Xj() && (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.tk))
                    }),
                    k.click(function() {
                        a.L.Yj.Xj() && (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.rk))
                    }),
                    w.click(function() {
                        a.L.Yj.Xj() && (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.Ak))
                    }),
                    C.click(function() {
                        a.L.Yj.Xj() && (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.pk))
                    }),
                    this.co(),
                    this.do();
                    var i = t.kg.wg(t.kg.qg);
                    i !== "ARENA" && i !== "TEAM2" && (i = "ARENA"),
                    g.val(i)
                });
                return I.prototype.za = function() {
                    var i = this;
                    a.L.Yj.Pl(function() {
                        a.L.Yj.Xj() ? (a.L.ao.Vj(a.L.Yj.Cl(), t.Jj.Ij),
                        a.L.ao.Vj(a.L.Yj.Dl(), t.Jj.Kj),
                        a.L.ao.Vj(a.L.Yj.El(), t.Jj.Lj),
                        a.L.ao.Vj(a.L.Yj.Fl(), t.Jj.Nj),
                        a.L.ao.Vj(a.L.Yj.Gl(), t.Jj.Mj)) : (a.L.ao.Vj(a.L.eo(), t.Jj.Ij),
                        a.L.ao.Vj(0, t.Jj.Kj),
                        a.L.ao.Vj(0, t.Jj.Lj),
                        a.L.ao.Vj(0, t.Jj.Nj),
                        a.L.ao.Vj(0, t.Jj.Mj))
                    }),
                    a.L.Yj.Pl(function() {
                        v.toggle(a.L.Yj.Xj()),
                        j.toggle(!a.L.Yj.Xj()),
                        y.toggle(!a.L.Yj.Xj()),
                        k.toggle(a.L.Yj.Xj()),
                        w.toggle(a.L.Yj.Xj()),
                        C.toggle(a.L.Yj.Xj()),
                        m.toggle(!0),
                        L.toggle(!0),
                        a.L.Yj.Xj() ? (u.hide(),
                        S.html(a.L.Yj.tl()),
                        M.attr("src", a.L.Yj.vl()),
                        q.html(a.L.Yj.yl()),
                        F.width(100 * a.L.Yj.Al() / a.L.Yj.Bl() + "%"),
                        x.html(a.L.Yj.Al() + " / " + a.L.Yj.Bl()),
                        z.html(a.L.Yj.zl()),
                        l.val(a.L.Yj.ul())) : (u.toggle(a.Mn.Ln && !a.L.fo()),
                        S.html(S.data("guest")),
                        M.attr("src", a.A.G),
                        q.html("10"),
                        F.width("0"),
                        x.html(""),
                        z.html(1),
                        l.val(t.kg.wg(t.kg.rg)))
                    }),
                    a.L.ao.Pj(function() {
                        i._n.om(a.L.ao.Oj())
                    })
                }
                ,
                I.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 500),
                    i.b.c(t.Cf.yn, 1),
                    i.b.c(t.Cf.zn, 500),
                    i.b.c(t.Cf.An, 500),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.c(t.Cf.Dn, 500),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.d(t.Cf.In, 50),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                I.prototype.go = function() {
                    i.b.c(c, 500),
                    i.b.c(n, 500),
                    i.b.c(f, 500),
                    i.b.d(o, 100)
                }
                ,
                I.prototype.ho = function() {
                    i.b.d(c, 100),
                    i.b.d(n, 100),
                    i.b.d(f, 100),
                    i.b.c(o, 500)
                }
                ,
                I.prototype.Zn = function(t, a) {
                    this.Xn !== t && (this.Xn = t);
                    var i = e.$(Math.floor(100 * a), 0, 100);
                    this.Wn !== i && (h.css("width", i + "%"),
                    d.html(i + " %"))
                }
                ,
                I.prototype.Xk = function() {
                    a.L.Si.Te(),
                    this._n._f(!0)
                }
                ,
                I.prototype.Rk = function() {
                    this._n._f(!1)
                }
                ,
                I.prototype.$f = function() {
                    this._n.$f()
                }
                ,
                I.prototype.cg = function(t, a) {
                    this._n.cg()
                }
                ,
                I.prototype.ul = function() {
                    return l.val()
                }
                ,
                I.prototype.io = function() {
                    return g.val()
                }
                ,
                I.prototype.co = function() {
                    var t = $("#mm-advice-cont").children()
                      , a = 0;
                    e.R(function() {
                        t.eq(a).fadeOut(500, function() {
                            ++a >= t.length && (a = 0),
                            t.eq(a).fadeIn(500).css("display", "inline-block")
                        })
                    }, 3e3)
                }
                ,
                I.prototype.do = function() {
                    function t() {
                        a.L.jo(!0),
                        e.S(function() {
                            u.hide()
                        }, 3e3)
                    }
                    if (a.Mn.Ln && !a.L.fo()) {
                        u.show();
                        var i = e.O("index.game.main.menu.unlockSkins.share")
                          , c = encodeURIComponent(e.O("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio")
                          , n = encodeURIComponent(e.O("index.game.main.menu.unlockSkins.comeAndPlay"));
                        p.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + c + "\">" + "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"/>" + "<span>" + i + "</span></a>").click(t)),
                        p.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + n + "\">" + "<img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/>" + "<span>" + i + "</span></a>").click(t))
                    }
                }
                ,
                I
            }(),
            t.Ok = function() {
                var a = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn)
                });
                return a.prototype.za = function() {}
                ,
                a.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.d(t.Cf.Bf, 50),
                    i.b.d(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.d(t.Cf.An, 50),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.d(t.Cf.In, 50),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                a
            }(),
            t.Fk = function() {
                var a = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn)
                });
                return a.prototype.za = function() {}
                ,
                a.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 500),
                    i.b.c(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.d(t.Cf.An, 50),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.c(t.Cf.Hn, 500),
                    i.b.d(t.Cf.In, 50),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                a.prototype.Xk = function() {}
                ,
                a
            }(),
            t.Hk = function() {
                var c = $("#toaster-stack")
                  , n = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn),
                    this.ko = [],
                    this.lo = null
                });
                return n.prototype.za = function() {}
                ,
                n.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 500),
                    i.b.c(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.c(t.Cf.An, 500),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.c(t.Cf.Fn, 500),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.d(t.Cf.In, 50),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                n.prototype.Xk = function() {
                    this.mo()
                }
                ,
                n.prototype.$k = function() {
                    return null != this.lo || this.ko.length > 0
                }
                ,
                n.prototype.no = function(t) {
                    this.ko.unshift(t),
                    e.S(function() {
                        a.L.Fg.Yk()
                    }, 0)
                }
                ,
                n.prototype.Ul = function(t) {
                    this.ko.push(t),
                    e.S(function() {
                        a.L.Fg.Yk()
                    }, 0)
                }
                ,
                n.prototype.mo = function() {
                    var t = this;
                    if (null == this.lo) {
                        if (0 === this.ko.length)
                            return void a.L.Fg.Tk();
                        var n = this.ko.shift();
                        this.lo = n;
                        var f = n.Kf();
                        i.b.c(f, 300),
                        c.append(f),
                        n.oo = function() {
                            f.fadeOut(300),
                            e.S(function() {
                                f.remove()
                            }, 300),
                            t.lo === n && (t.lo = null),
                            t.mo()
                        }
                        ,
                        n.Xk()
                    }
                }
                ,
                n
            }(),
            t.Vk = {
                Kn: 0,
                Uk: 1
            },
            t.po = function() {
                var n = $("#popup-menu-label")
                  , f = $("#popup-menu-coins-box")
                  , o = $("#popup-menu-coins-val");
                $("#popup-menu-back").click(function() {
                    a.L.Si.Se(),
                    a.L.Fg.Tk()
                }),
                f.click(function() {
                    a.L.Yj.Xj() && (a.L.Si.Se(),
                    a.L.Fg.Qk(a.L.Fg.pk))
                });
                var h = e.X(t.Cf, function(a, e) {
                    t.Cf.call(this, t.Vk.Uk),
                    this.Ea = a,
                    this.qo = e,
                    this.ro = []
                });
                return h.prototype.za = function() {
                    h.parent.prototype.za.call(this),
                    h.so || (h.so = !0,
                    a.L.Yj.Pl(function() {
                        a.L.Yj.Xj() ? o.html(a.L.Yj.yl()) : o.html("0")
                    })),
                    i.b.d(t.po.to, 100)
                }
                ,
                h.uo = $("#coins-view"),
                h.vo = $("#leaders-view"),
                h.wo = $("#profile-view"),
                h.xo = $("#login-view"),
                h.yo = $("#settings-view"),
                h.zo = $("#skins-view"),
                h.Ao = $("#store-view"),
                h.Bo = $("#wear-view"),
                h.Co = $("#withdraw-consent-view"),
                h.Do = $("#delete-account-view"),
                h.to = $("#please-wait-view"),
                h.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 1),
                    i.b.c(t.Cf.yn, 500),
                    i.b.c(t.Cf.zn, 200),
                    i.b.c(t.Cf.An, 200),
                    i.b.d(t.Cf.Bn, 200),
                    i.b.d(t.Cf.Cn, 200),
                    i.b.d(t.Cf.Dn, 200),
                    i.b.c(t.Cf.En, 200),
                    i.b.d(t.Cf.Fn, 200),
                    i.b.d(t.Cf.Gn, 200),
                    i.b.d(t.Cf.Hn, 200),
                    i.b.d(t.Cf.In, 200),
                    i.b.d(t.Cf.Jn, 200),
                    n.html(this.Ea),
                    f.toggle(this.qo),
                    this.Eo()
                }
                ,
                h.prototype.Eo = function() {}
                ,
                h.prototype.Fo = function(a) {
                    var n = this
                      , f = 2147483647 & e.da(0, 2147483647);
                    return this.ro.push(f),
                    i.b.c(t.po.to, 100),
                    e.S(function() {
                        n.Go(f)
                    }, a),
                    new c(this,f)
                }
                ,
                h.prototype.Go = function(a) {
                    var e = this.ro.indexOf(a);
                    e < 0 || (this.ro.splice(e, 1),
                    0 === this.ro.length && i.b.d(t.po.to, 100))
                }
                ,
                h
            }();
            var c = function() {
                function t(t, a) {
                    this.Ho = t,
                    this.Io = a
                }
                return t.prototype.Jo = function() {
                    this.Ho.Go(this.Io)
                }
                ,
                t
            }();
            t.qk = function() {
                var c = $("#store-buy-coins_125000")
                  , n = $("#store-buy-coins_50000")
                  , f = $("#store-buy-coins_16000")
                  , o = $("#store-buy-coins_7000")
                  , h = $("#store-buy-coins_3250")
                  , d = $("#store-buy-coins_1250")
                  , s = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.coins.tab"), !1);
                    var i = this;
                    c.click(function() {
                        a.L.Si.Se(),
                        i.Ko("coins_125000")
                    }),
                    n.click(function() {
                        a.L.Si.Se(),
                        i.Ko("coins_50000")
                    }),
                    f.click(function() {
                        a.L.Si.Se(),
                        i.Ko("coins_16000")
                    }),
                    o.click(function() {
                        a.L.Si.Se(),
                        i.Ko("coins_7000")
                    }),
                    h.click(function() {
                        a.L.Si.Se(),
                        i.Ko("coins_3250")
                    }),
                    d.click(function() {
                        a.L.Si.Se(),
                        i.Ko("coins_1250")
                    })
                });
                return s.prototype.za = function() {
                    s.parent.prototype.za.call(this)
                }
                ,
                s.prototype.Eo = function() {
                    i.b.c(t.po.uo, 200),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                s.prototype.Xk = function() {
                    a.L.Si.Te()
                }
                ,
                s.prototype.Ko = function(t) {}
                ,
                s
            }(),
            t.sk = function() {
                var c = $("#highscore-table")
                  , n = $("#leaders-button-level")
                  , f = $("#leaders-button-highscore")
                  , o = $("#leaders-button-kills")
                  , h = "byLevel"
                  , d = "byHighScore"
                  , s = "byKillsAndHeadShots"
                  , r = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.leaders.tab"), !0);
                    var i = this;
                    this.Lo = {},
                    this.Mo = {
                        No: {
                            Oo: n,
                            Po: h
                        },
                        Qo: {
                            Oo: f,
                            Po: d
                        },
                        Ro: {
                            Oo: o,
                            Po: s
                        }
                    },
                    n.click(function() {
                        a.L.Si.Se(),
                        i.So(i.Mo.No)
                    }),
                    f.click(function() {
                        a.L.Si.Se(),
                        i.So(i.Mo.Qo)
                    }),
                    o.click(function() {
                        a.L.Si.Se(),
                        i.So(i.Mo.Ro)
                    })
                });
                return r.prototype.za = function() {
                    r.parent.prototype.za.call(this)
                }
                ,
                r.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.c(t.po.vo, 200),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                r.prototype.Xk = function() {
                    var t = this;
                    a.L.Si.Te();
                    var i = this.Fo(5e3)
                      , c = a.A.C + "/pub/leaders";
                    e.ha(c, function() {
                        var a = {};
                        a[h] = [],
                        a[d] = [],
                        a[s] = [],
                        t.Lo = a,
                        t.So(null != t.To ? t.To : t.Mo.No),
                        i.Jo()
                    }, function(a) {
                        t.Lo = a,
                        t.So(null != t.To ? t.To : t.Mo.No),
                        i.Jo()
                    })
                }
                ,
                r.prototype.So = function(t) {
                    this.To = t;
                    for (var a in this.Mo)
                        if (this.Mo.hasOwnProperty(a)) {
                            var i = this.Mo[a];
                            i.Oo.removeClass("pressed")
                        }
                    this.To.Oo.addClass("pressed");
                    for (var n = this.Lo[this.To.Po], f = "", o = 0; o < n.length; o++) {
                        var h = n[o];
                        f += "<div class=\"table-row\"><span>".concat(o + 1, "</span><span><img src=\"").concat(h["avatarUrl"], "\"/></span><span>").concat(h["username"], "</span><span>").concat(h["level"], "</span><span>").concat(h["highScore"], "</span><span>").concat(h["headShots"], " / ").concat(h["kills"], "</span></div>")
                    }
                    c.empty(),
                    c.append(f)
                }
                ,
                r
            }(),
            t.wk = function() {
                var c = $("#popup-login-gg")
                  , n = $("#popup-login-fb")
                  , f = e.X(t.po, function() {
                    var i = this;
                    t.po.call(this, e.O("index.game.popup.menu.login.tab"), !1),
                    c.click(function() {
                        a.L.Si.Se();
                        var t = i.Fo(1e4);
                        e.S(function() {
                            a.L.Yj.am(function() {
                                a.L.Yj.Xj() && a.L.Si.We(),
                                t.Jo()
                            })
                        }, 500)
                    }),
                    n.click(function() {
                        a.L.Si.Se();
                        var t = i.Fo(1e4);
                        e.S(function() {
                            a.L.Yj.Zl(function() {
                                a.L.Yj.Xj() && a.L.Si.We(),
                                t.Jo()
                            })
                        }, 500)
                    })
                });
                return f.prototype.za = function() {
                    f.parent.prototype.za.call(this)
                }
                ,
                f.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.c(t.po.xo, 200),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                f.prototype.Xk = function() {
                    a.L.Si.Te()
                }
                ,
                f
            }(),
            t.uk = function() {
                var c = $("#profile-avatar")
                  , n = $("#profile-username")
                  , f = $("#profile-experience-bar")
                  , o = $("#profile-experience-val")
                  , h = $("#profile-level")
                  , d = $("#profile-stat-highScore")
                  , s = $("#profile-stat-bestSurvivalTime")
                  , r = $("#profile-stat-kills")
                  , b = $("#profile-stat-headshots")
                  , u = $("#profile-stat-gamesPlayed")
                  , p = $("#profile-stat-totalTimeSpent")
                  , l = $("#profile-stat-registrationDate")
                  , g = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.profile.tab"), !0)
                });
                return g.prototype.za = function() {
                    g.parent.prototype.za.call(this)
                }
                ,
                g.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.c(t.po.wo, 200),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                g.prototype.Xk = function() {
                    a.L.Si.Te();
                    var t = a.L.Yj.Nl()
                      , i = moment([t.year, t.month - 1, t.day]).format("LL");
                    n.html(a.L.Yj.tl()),
                    c.attr("src", a.L.Yj.vl()),
                    f.width(100 * a.L.Yj.Al() / a.L.Yj.Bl() + "%"),
                    o.html(a.L.Yj.Al() + " / " + a.L.Yj.Bl()),
                    h.html(a.L.Yj.zl()),
                    d.html(a.L.Yj.Hl()),
                    s.html(e.U(a.L.Yj.Il())),
                    r.html(a.L.Yj.Jl()),
                    b.html(a.L.Yj.Kl()),
                    u.html(a.L.Yj.Ll()),
                    p.html(e.U(a.L.Yj.Ml())),
                    l.html(i)
                }
                ,
                g
            }(),
            t.xk = function() {
                var c = $("#settings-music-enabled-switch")
                  , n = $("#settings-sfx-enabled-switch")
                  , f = $("#settings-show-names-switch")
                  , o = $("#popup-logout")
                  , h = $("#popup-logout-container")
                  , d = $("#popup-delete-account")
                  , s = $("#popup-delete-account-container")
                  , r = $("#popup-withdraw-consent")
                  , b = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.settings.tab"), !1);
                    var i = this;
                    c.click(function() {
                        var i = !!c.prop("checked");
                        t.kg.vg(t.kg.ng, i, 30),
                        a.L.Si.Ie(i),
                        a.L.Si.Se()
                    }),
                    n.click(function() {
                        var i = !!n.prop("checked");
                        t.kg.vg(t.kg.og, i, 30),
                        a.L.Si.Fe(i),
                        a.L.Si.Se()
                    }),
                    f.click(function() {
                        a.L.Si.Se()
                    }),
                    o.click(function() {
                        a.L.Si.Se(),
                        i.Fo(500),
                        a.L.Yj.$l()
                    }),
                    d.click(function() {
                        a.L.Yj.Xj() ? (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.nk)) : a.L.Si.Xe()
                    }),
                    r.click(function() {
                        a.L.Uo() ? (a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.lk)) : a.L.Si.Xe()
                    })
                });
                return b.prototype.za = function() {
                    b.parent.prototype.za.call(this);
                    var i;
                    switch (t.kg.wg(t.kg.ng)) {
                    case "false":
                        i = !1;
                        break;
                    default:
                        i = !0
                    }
                    c.prop("checked", i),
                    a.L.Si.Ie(i);
                    var o;
                    switch (t.kg.wg(t.kg.og)) {
                    case "false":
                        o = !1;
                        break;
                    default:
                        o = !0
                    }
                    n.prop("checked", o),
                    a.L.Si.Fe(o);
                    var d;
                    switch (t.kg.wg(t.kg.mg)) {
                    case "false":
                        d = !1;
                        break;
                    default:
                        d = !0
                    }
                    f.prop("checked", d),
                    a.L.Yj.Ol(function() {
                        h.toggle(a.L.Yj.Xj()),
                        s.toggle(a.L.Yj.Xj())
                    })
                }
                ,
                b.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.c(t.po.yo, 200),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                b.prototype.Xk = function() {
                    a.L.Si.Te(),
                    a.L.Uo() ? r.show() : r.hide()
                }
                ,
                b.prototype.ni = function() {
                    return f.prop("checked")
                }
                ,
                b
            }(),
            t.zk = function() {
                var c = $("#store-view-canv")
                  , n = $("#skin-description-text")
                  , f = $("#skin-group-description-text")
                  , o = $("#store-locked-bar")
                  , h = $("#store-locked-bar-text")
                  , d = $("#store-buy-button")
                  , s = $("#store-item-price")
                  , r = $("#store-groups")
                  , b = $("#store-view-prev")
                  , u = $("#store-view-next")
                  , p = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.skins.tab"), !0);
                    var i = this;
                    this.Vo = null,
                    this.Wo = [],
                    this.Xo = {},
                    this.Yo = new t.tm(c),
                    d.click(function() {
                        a.L.Si.Se(),
                        i.Zo()
                    }),
                    b.click(function() {
                        a.L.Si.Se(),
                        i.Vo.$o()
                    }),
                    u.click(function() {
                        a.L.Si.Se(),
                        i.Vo._o()
                    })
                });
                p.prototype.za = function() {
                    p.parent.prototype.za.call(this);
                    var t = this;
                    a.L.bd.qc(function() {
                        var i = a.L.bd.nc();
                        t.Wo = [];
                        for (var c = 0; c < i["skinGroupArrayDict"].length; c++)
                            t.Wo.push(new l(t,i["skinGroupArrayDict"][c]));
                        t.Xo = {};
                        for (var n = 0; n < i["skinArrayDict"].length; n++) {
                            var f = i["skinArrayDict"][n];
                            t.Xo[f["id"]] = f
                        }
                        t.ap()
                    }),
                    this.bp(!1),
                    a.L.ao.Pj(function() {
                        t.bp(!1)
                    })
                }
                ,
                p.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.c(t.po.zo, 200),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                p.prototype.Xk = function() {
                    a.L.Si.Ge(t.xe.Ae.rf),
                    a.L.Si.Te(),
                    this.ap(),
                    this.Yo._f(!0)
                }
                ,
                p.prototype.Rk = function() {
                    this.Yo._f(!1)
                }
                ,
                p.prototype.$f = function() {
                    this.Yo.$f()
                }
                ,
                p.prototype.cg = function(t, a) {
                    this.Yo.cg()
                }
                ,
                p.prototype.ap = function() {
                    var i = this
                      , c = this;
                    r.empty();
                    for (var n = 0; n < this.Wo.length; n++)
                        !function(t) {
                            var n = i.Wo[t]
                              , f = document.createElement("li");
                            r.append(f);
                            var o = $(f);
                            o.html(n.cp()),
                            o.click(function() {
                                a.L.Si.Se(),
                                c.dp(n)
                            }),
                            n.ep = o
                        }(n);
                    if (this.Wo.length > 0) {
                        for (var f = a.L.ao.Hj(t.Jj.Ij), o = 0; o < this.Wo.length; o++)
                            for (var h = this.Wo[o], d = h.fp.list, s = 0; s < d.length; s++)
                                if (d[s] === f)
                                    return h.gp = s,
                                    void this.dp(h);
                        this.dp(this.Wo[0])
                    }
                }
                ,
                p.prototype.dp = function(t) {
                    if (this.Vo !== t) {
                        if (this.Vo = t,
                        r.children().removeClass("pressed"),
                        this.Vo.ep && this.Vo.ep.addClass("pressed"),
                        f.html(""),
                        null != t.fp) {
                            var i = a.L.bd.nc()["textDict"][t.fp["description"]];
                            null != i && f.html(e.V(e.P(i)))
                        }
                        this.bp(!0)
                    }
                }
                ,
                p.prototype.hp = function() {
                    return null == this.Vo ? t.gj.ij() : this.Vo.ip()
                }
                ,
                p.prototype.Zo = function() {
                    var t = this
                      , a = this.hp();
                    if (a.kj()) {
                        var e = a.tc();
                        t.jp(e)
                    }
                }
                ,
                p.prototype.jp = function(e) {
                    var i = a.L.ao.Wj(e, t.Jj.Ij);
                    if (null != i) {
                        var c = i.Zj();
                        if (!(a.L.Yj.yl() < c)) {
                            var n = a.L.ao.Hj(t.Jj.Ij)
                              , f = a.L.ao.Hj(t.Jj.Kj)
                              , o = a.L.ao.Hj(t.Jj.Lj)
                              , h = a.L.ao.Hj(t.Jj.Nj)
                              , d = a.L.ao.Hj(t.Jj.Mj)
                              , s = this.Fo(5e3);
                            a.L.Yj.Xl(e, t.Jj.Ij, function() {
                                s.Jo(),
                                a.L.Fg.Qk(a.L.Fg.Jk)
                            }, function() {
                                a.L.Yj.Rl(function() {
                                    a.L.ao.Vj(n, t.Jj.Ij),
                                    a.L.ao.Vj(f, t.Jj.Kj),
                                    a.L.ao.Vj(o, t.Jj.Lj),
                                    a.L.ao.Vj(h, t.Jj.Nj),
                                    a.L.ao.Vj(d, t.Jj.Mj),
                                    a.L.ao.Vj(e, t.Jj.Ij),
                                    s.Jo()
                                })
                            })
                        }
                    }
                }
                ,
                p.prototype.bp = function(i) {
                    var c = a.L.ao.Oj()
                      , f = this.hp();
                    if (f.kj()) {
                        var r = f.tc()
                          , b = a.L.ao.Wj(r, t.Jj.Ij)
                          , u = !1;
                        if (a.L.ao.Sj(r, t.Jj.Ij))
                            o.hide(),
                            d.hide();
                        else if (null == b || b.$j()) {
                            if (u = !0,
                            o.show(),
                            d.hide(),
                            h.text(e.O("index.game.popup.menu.store.locked")),
                            null != b && b.$j()) {
                                var p = a.L.bd.nc()["textDict"][b.Um()];
                                null != p && h.text(e.P(p))
                            }
                        } else
                            o.hide(),
                            d.show(),
                            s.html(b.Zj());
                        if (n.html(""),
                        null != b && null != b.Vm()) {
                            var l = a.L.bd.nc()["textDict"][b.Vm()];
                            null != l && n.html(e.V(e.P(l)))
                        }
                        this.Yo.om(c.jn(r)),
                        this.Yo.Km(u),
                        i && a.L.ao.Vj(r, t.Jj.Ij)
                    }
                }
                ;
                var l = function() {
                    function a(t, a) {
                        this.kp = t,
                        this.gp = 0,
                        this.fp = a
                    }
                    return a.prototype.$o = function() {
                        --this.gp < 0 && (this.gp = this.fp.list.length - 1),
                        this.kp.bp(!0)
                    }
                    ,
                    a.prototype._o = function() {
                        ++this.gp >= this.fp.list.length && (this.gp = 0),
                        this.kp.bp(!0)
                    }
                    ,
                    a.prototype.cp = function() {
                        return e.P(this.fp.name)
                    }
                    ,
                    a.prototype.ip = function() {
                        return this.gp >= this.fp.list.length ? t.gj.ij() : t.gj.jj(this.fp.list[this.gp])
                    }
                    ,
                    a
                }();
                return p
            }(),
            t.Bk = function() {
                var c = $("#store-go-coins-button")
                  , n = $("#store-go-skins-button")
                  , f = $("#store-go-wear-button")
                  , o = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.store.tab"), !0),
                    c.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.pk)
                    }),
                    n.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.yk)
                    }),
                    f.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.Ck)
                    })
                });
                return o.prototype.za = function() {
                    o.parent.prototype.za.call(this)
                }
                ,
                o.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.c(t.po.Ao, 200),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                o.prototype.Xk = function() {
                    a.L.Si.Te()
                }
                ,
                o
            }(),
            t.Dk = function() {
                var c = $("#wear-view-canv")
                  , n = $("#wear-description-text")
                  , f = $("#wear-locked-bar")
                  , o = $("#wear-locked-bar-text")
                  , h = $("#wear-buy-button")
                  , d = $("#wear-item-price")
                  , s = $("#wear-eyes-button")
                  , r = $("#wear-mouths-button")
                  , b = $("#wear-glasses-button")
                  , u = $("#wear-hats-button")
                  , p = $("#wear-tint-chooser")
                  , l = $("#wear-view-prev")
                  , g = $("#wear-view-next")
                  , v = e.X(t.po, function() {
                    var i = this;
                    t.po.call(this, e.O("index.game.popup.menu.wear.tab"), !0);
                    var n = this;
                    this.lp = [],
                    this.Kj = new y(this,t.Jj.Kj,s),
                    this.Lj = new y(this,t.Jj.Lj,r),
                    this.Nj = new y(this,t.Jj.Nj,b),
                    this.Mj = new y(this,t.Jj.Mj,u),
                    this.mp = null,
                    this.np = null,
                    this.op = null,
                    this.pp = null,
                    this.qp = null,
                    this.rp = null,
                    this.Yo = new t.tm(c),
                    h.click(function() {
                        a.L.Si.Se(),
                        n.sp()
                    }),
                    l.click(function() {
                        a.L.Si.Se(),
                        n.mp.tp()
                    }),
                    g.click(function() {
                        a.L.Si.Se(),
                        n.mp.up()
                    }),
                    s.click(function() {
                        a.L.Si.Se(),
                        n.vp(i.Kj)
                    }),
                    r.click(function() {
                        a.L.Si.Se(),
                        n.vp(i.Lj)
                    }),
                    b.click(function() {
                        a.L.Si.Se(),
                        n.vp(i.Nj)
                    }),
                    u.click(function() {
                        a.L.Si.Se(),
                        n.vp(i.Mj)
                    }),
                    this.lp.push(this.Kj),
                    this.lp.push(this.Lj),
                    this.lp.push(this.Nj),
                    this.lp.push(this.Mj)
                });
                v.prototype.za = function() {
                    v.parent.prototype.za.call(this);
                    var t = this;
                    a.L.bd.qc(function() {
                        var i = a.L.bd.nc();
                        t.np = i["eyesDict"],
                        t.op = i["mouthDict"],
                        t.pp = i["glassesDict"],
                        t.qp = i["hatDict"],
                        t.rp = i["colorDict"],
                        t.Kj.wp(i["eyesVariantArray"]),
                        t.Kj.xp(t.np),
                        t.Lj.wp(i["mouthVariantArray"]),
                        t.Lj.xp(t.op),
                        t.Nj.wp(i["glassesVariantArray"]),
                        t.Nj.xp(t.pp),
                        t.Mj.wp(i["hatVariantArray"]),
                        t.Mj.xp(t.qp)
                    }),
                    this.bp(!1),
                    a.L.ao.Pj(function() {
                        t.bp(!1)
                    })
                }
                ,
                v.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.c(t.po.Bo, 200),
                    i.b.d(t.po.Co, 50),
                    i.b.d(t.po.Do, 50)
                }
                ,
                v.prototype.Xk = function() {
                    a.L.Si.Ge(t.xe.Ae.rf),
                    a.L.Si.Te(),
                    this.vp(null != this.mp ? this.mp : this.Kj),
                    this.Yo._f(!0)
                }
                ,
                v.prototype.Rk = function() {
                    this.Yo._f(!1)
                }
                ,
                v.prototype.$f = function() {
                    this.Yo.$f()
                }
                ,
                v.prototype.cg = function(t, a) {
                    this.Yo.cg()
                }
                ,
                v.prototype.vp = function(t) {
                    this.mp = t;
                    for (var a = 0; a < this.lp.length; a++)
                        this.lp[a].Oo.removeClass("pressed");
                    this.mp.Oo.addClass("pressed"),
                    this.mp.Wk()
                }
                ,
                v.prototype.yp = function() {
                    return null == this.mp ? t.gj.ij() : t.gj.jj({
                        re: this.mp.ip(),
                        Ed: this.mp.Ed
                    })
                }
                ,
                v.prototype.sp = function() {
                    var t = this
                      , a = this.yp();
                    if (a.kj()) {
                        var e = a.tc();
                        t.zp(e.re, e.Ed)
                    }
                }
                ,
                v.prototype.zp = function(e, i) {
                    var c = a.L.ao.Wj(e, i);
                    if (null != c) {
                        var n = c.Zj();
                        if (!(a.L.Yj.yl() < n)) {
                            var f = a.L.ao.Hj(t.Jj.Ij)
                              , o = a.L.ao.Hj(t.Jj.Kj)
                              , h = a.L.ao.Hj(t.Jj.Lj)
                              , d = a.L.ao.Hj(t.Jj.Nj)
                              , s = a.L.ao.Hj(t.Jj.Mj)
                              , r = this.Fo(5e3);
                            a.L.Yj.Xl(e, i, function() {
                                r.Jo(),
                                a.L.Fg.Qk(a.L.Fg.Jk)
                            }, function() {
                                a.L.Yj.Rl(function() {
                                    a.L.ao.Vj(f, t.Jj.Ij),
                                    a.L.ao.Vj(o, t.Jj.Kj),
                                    a.L.ao.Vj(h, t.Jj.Lj),
                                    a.L.ao.Vj(d, t.Jj.Nj),
                                    a.L.ao.Vj(s, t.Jj.Mj),
                                    a.L.ao.Vj(e, i),
                                    r.Jo()
                                })
                            })
                        }
                    }
                }
                ,
                v.prototype.bp = function(i) {
                    var c = a.L.ao.Oj()
                      , s = this.yp();
                    if (s.kj()) {
                        var r = s.tc()
                          , b = a.L.ao.Wj(r.re, r.Ed)
                          , u = !1;
                        if (a.L.ao.Sj(r.re, r.Ed))
                            f.hide(),
                            h.hide();
                        else if (null == b || b.$j()) {
                            if (u = !0,
                            f.show(),
                            h.hide(),
                            o.text(e.O("index.game.popup.menu.store.locked")),
                            null != b && b.$j()) {
                                var p = a.L.bd.nc()["textDict"][b.Um()];
                                null != p && o.text(e.P(p))
                            }
                        } else
                            f.hide(),
                            h.show(),
                            d.html(b.Zj());
                        if (n.html(""),
                        null != b && null != b.Vm()) {
                            var l = a.L.bd.nc()["textDict"][b.Vm()];
                            null != l && n.html(e.V(e.P(l)))
                        }
                        var g = this.Yo;
                        switch (r.Ed) {
                        case t.Jj.Kj:
                            g.om(c.kn(r.re)),
                            g.Lm(u);
                            break;
                        case t.Jj.Lj:
                            g.om(c.ln(r.re)),
                            g.Mm(u);
                            break;
                        case t.Jj.Nj:
                            g.om(c.nn(r.re)),
                            g.Om(u);
                            break;
                        case t.Jj.Mj:
                            g.om(c.mn(r.re)),
                            g.Nm(u)
                        }
                        i && a.L.ao.Vj(r.re, r.Ed)
                    }
                }
                ;
                var y = function() {
                    function t(t, a, e) {
                        this.kp = t,
                        this.Ed = a,
                        this.Oo = e,
                        this.sc = {},
                        this.Ap = [[]],
                        this.Bp = -10,
                        this.Cp = -10
                    }
                    return t.prototype.wp = function(t) {
                        this.Ap = t
                    }
                    ,
                    t.prototype.xp = function(t) {
                        this.sc = t
                    }
                    ,
                    t.prototype.Wk = function() {
                        for (var t = a.L.ao.Hj(this.Ed), e = 0; e < this.Ap.length; e++)
                            for (var i = 0; i < this.Ap[e].length; i++)
                                if (this.Ap[e][i] === t)
                                    return this.Dp(e),
                                    void this.Ep(i);
                        this.Dp(0),
                        this.Ep(0)
                    }
                    ,
                    t.prototype.tp = function() {
                        var t = this.Bp - 1;
                        t < 0 && (t = this.Ap.length - 1),
                        this.Dp(t),
                        this.Ep(this.Cp % this.Ap[t].length)
                    }
                    ,
                    t.prototype.up = function() {
                        var t = this.Bp + 1;
                        t >= this.Ap.length && (t = 0),
                        this.Dp(t),
                        this.Ep(this.Cp % this.Ap[t].length)
                    }
                    ,
                    t.prototype.Dp = function(t) {
                        var i = this;
                        if (!(t < 0 || t >= this.Ap.length)) {
                            this.Bp = t,
                            p.empty();
                            var c = this.Ap[this.Bp];
                            if (c.length > 1)
                                for (var n = 0; n < c.length; n++)
                                    !function(t) {
                                        var n = c[t]
                                          , f = i.sc[n]
                                          , o = "#" + i.kp.rp[f["prime"]]
                                          , h = $("<div style=\"border-color:" + o + "\"></div>");
                                        h.click(function() {
                                            a.L.Si.Se(),
                                            i.Ep(t)
                                        }),
                                        p.append(h)
                                    }(n)
                        }
                    }
                    ,
                    t.prototype.Ep = function(t) {
                        if (!(t < 0 || t >= this.Ap[this.Bp].length)) {
                            this.Cp = t,
                            p.children().css("background-color", "transparent");
                            var a = p.children(":nth-child(" + (1 + t) + ")");
                            a.css("background-color", a.css("border-color")),
                            this.kp.bp(!0)
                        }
                    }
                    ,
                    t.prototype.ip = function() {
                        return this.Ap[this.Bp][this.Cp]
                    }
                    ,
                    t
                }();
                return v
            }(),
            t.mk = function() {
                var c = $("#withdraw-consent-yes")
                  , n = $("#withdraw-consent-no")
                  , f = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.consent.tab"), !1),
                    c.click(function() {
                        a.L.Si.Se(),
                        a.L.Uo() ? (a.L.Fg.Qk(a.L.Fg.rf),
                        a.L.Fp(!1, !0),
                        a.L.Fg.Gk.no(new t.Gp)) : a.L.Fg.Tk()
                    }),
                    n.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Tk()
                    })
                });
                return f.prototype.za = function() {
                    f.parent.prototype.za.call(this)
                }
                ,
                f.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.c(t.po.Co, 200),
                    i.b.d(t.po.Do, 50)
                }
                ,
                f.prototype.Xk = function() {
                    a.L.Si.Te()
                }
                ,
                f
            }(),
            t.ok = function() {
                var c = $("#delete-account-timer")
                  , n = $("#delete-account-yes")
                  , f = $("#delete-account-no")
                  , o = e.X(t.po, function() {
                    t.po.call(this, e.O("index.game.popup.menu.delete.tab"), !1),
                    n.click(function() {
                        a.L.Si.Se(),
                        a.L.Yj.Xj() ? (a.L.Yj.gm(),
                        a.L.Yj.$l()) : a.L.Fg.Tk()
                    }),
                    f.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Tk()
                    }),
                    this.Hp = []
                });
                return o.prototype.za = function() {
                    o.parent.prototype.za.call(this)
                }
                ,
                o.prototype.Eo = function() {
                    i.b.d(t.po.uo, 50),
                    i.b.d(t.po.vo, 50),
                    i.b.d(t.po.wo, 50),
                    i.b.d(t.po.xo, 50),
                    i.b.d(t.po.yo, 50),
                    i.b.d(t.po.zo, 50),
                    i.b.d(t.po.Ao, 50),
                    i.b.d(t.po.Bo, 50),
                    i.b.d(t.po.Co, 50),
                    i.b.c(t.po.Do, 200)
                }
                ,
                o.prototype.Xk = function() {
                    a.L.Si.Xe(),
                    i.b.d(n, 1),
                    i.b.c(c, 1),
                    c.text(".. 10 .."),
                    this.Ip(),
                    this.Jp(function() {
                        c.text(".. 9 ..")
                    }, 1e3),
                    this.Jp(function() {
                        c.text(".. 8 ..")
                    }, 2e3),
                    this.Jp(function() {
                        c.text(".. 7 ..")
                    }, 3e3),
                    this.Jp(function() {
                        c.text(".. 6 ..")
                    }, 4e3),
                    this.Jp(function() {
                        c.text(".. 5 ..")
                    }, 5e3),
                    this.Jp(function() {
                        c.text(".. 4 ..")
                    }, 6e3),
                    this.Jp(function() {
                        c.text(".. 3 ..")
                    }, 7e3),
                    this.Jp(function() {
                        c.text(".. 2 ..")
                    }, 8e3),
                    this.Jp(function() {
                        c.text(".. 1 ..")
                    }, 9e3),
                    this.Jp(function() {
                        i.b.c(n, 300),
                        i.b.d(c, 1)
                    }, 1e4)
                }
                ,
                o.prototype.Jp = function(t, a) {
                    var i = e.S(t, a);
                    this.Hp.push(i)
                }
                ,
                o.prototype.Ip = function() {
                    for (var t = 0; t < this.Hp.length; t++)
                        e.T(this.Hp[t]);
                    this.Hp = []
                }
                ,
                o
            }(),
            t.Kp = function() {
                function t() {
                    this.oo = function() {}
                }
                return t.prototype.Kf = function() {}
                ,
                t.prototype.Xk = function() {}
                ,
                t
            }(),
            t.Wl = function() {
                var i = e.X(t.Kp, function(i) {
                    t.Kp.call(this);
                    var c = e.ja() + "_" + Math.floor(1e3 + 8999 * Math.random());
                    this.Lp = $("\n            <div id=\"".concat(c, "\" class=\"toaster toaster-coins\">\n                <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />\n                <div class=\"toaster-coins-val\">").concat(i, "</div>\n                <div class=\"toaster-coins-close\">").concat(e.O("index.game.toaster.continue"), "</div>\n            </div>"));
                    var n = this;
                    this.Lp.find(".toaster-coins-close").click(function() {
                        a.L.Si.Se(),
                        n.oo()
                    })
                });
                return i.prototype.Kf = function() {
                    return this.Lp
                }
                ,
                i.prototype.Xk = function() {
                    a.L.Si.Ve()
                }
                ,
                i
            }(),
            t.Vl = function() {
                var i = e.X(t.Kp, function(i) {
                    t.Kp.call(this);
                    var c = e.ja() + "_" + Math.floor(1e3 + 8999 * Math.random());
                    this.Lp = $("\n            <div id=\"".concat(c, "\" class=\"toaster toaster-levelup\">\n                <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />\n                <div class=\"toaster-levelup-val\">").concat(i, "</div>\n                <div class=\"toaster-levelup-text\">").concat(e.O("index.game.toaster.levelup"), "</div>\n                <div class=\"toaster-levelup-close\">").concat(e.O("index.game.toaster.continue"), "</div>\n            </div>"));
                    var n = this;
                    this.Lp.find(".toaster-levelup-close").click(function() {
                        a.L.Si.Se(),
                        n.oo()
                    })
                });
                return i.prototype.Kf = function() {
                    return this.Lp
                }
                ,
                i.prototype.Xk = function() {
                    a.L.Si.Ue()
                }
                ,
                i
            }(),
            t.Gp = function() {
                var i = e.X(t.Kp, function() {
                    t.Kp.call(this);
                    var i = this
                      , c = e.ja() + "_" + Math.floor(1e3 + 8999 * Math.random());
                    this.Lp = $("" + "<div id=\"" + c + "\" class=\"toaster toaster-consent-accepted\">" + "    <img class=\"toaster-consent-accepted-logo\" src=\"" + a.A.F + "\" alt=\"Wormate.io logo\"/>" + "" + "    <div class=\"toaster-consent-accepted-container\">" + "        <span class=\"toaster-consent-accepted-text\">" + e.O("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>" + "        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + e.O("index.game.toaster.consent.link") + "</a>" + "    </div>" + "" + "    <div class=\"toaster-consent-close\">" + e.O("index.game.toaster.consent.iAccept") + "</div>" + "</div>"),
                    this.Mp = this.Lp.find(".toaster-consent-close"),
                    this.Mp.hide(),
                    this.Mp.click(function() {
                        a.L.Si.Se(),
                        a.L.Uo() && a.L.Fp(!0, !0),
                        i.oo()
                    })
                });
                return i.prototype.Kf = function() {
                    return this.Lp
                }
                ,
                i.prototype.Xk = function() {
                    var t = this;
                    a.L.Uo() && !a.L.xl() ? (a.L.Si.Xe(),
                    e.S(function() {
                        t.Mp.fadeIn(300)
                    }, 2e3)) : e.S(function() {
                        t.oo()
                    }, 0)
                }
                ,
                i
            }(),
            t.Kk = function() {
                var c = $("#error-gateway-connection-retry")
                  , n = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn),
                    c.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.ze.$n(),
                        a.L.Fg.Qk(a.L.Fg.ze),
                        e.S(function() {
                            var t = a.A.C + "/pub/healthCheck/ping";
                            e.ha(t, function() {
                                a.L.Fg.Qk(a.L.Fg.Jk)
                            }, function(t) {
                                a.L.Fg.ze.Yn(),
                                a.L.bd.$b(function() {
                                    a.L.Fg.Qk(a.L.Fg.rf)
                                }, function(t) {
                                    a.L.Fg.Qk(a.L.Fg.Jk)
                                }, function(t, e) {
                                    var i = t;
                                    a.L.Fg.ze.Zn(i, e)
                                })
                            })
                        }, 2e3)
                    })
                });
                return n.prototype.za = function() {}
                ,
                n.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 500),
                    i.b.c(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.d(t.Cf.An, 50),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.c(t.Cf.In, 500),
                    i.b.d(t.Cf.Jn, 50)
                }
                ,
                n.prototype.Xk = function() {
                    a.L.Si.Ge(t.xe.Ae.rf),
                    a.L.Si.Xe()
                }
                ,
                n
            }(),
            t.Mk = function() {
                var c = $("#error-game-connection-retry")
                  , n = e.X(t.Cf, function() {
                    t.Cf.call(this, t.Vk.Kn),
                    c.click(function() {
                        a.L.Si.Se(),
                        a.L.Fg.Qk(a.L.Fg.rf)
                    })
                });
                return n.prototype.za = function() {}
                ,
                n.prototype.Wk = function() {
                    t.vf._f(!0),
                    i.b.c(t.Cf.Bf, 500),
                    i.b.c(t.Cf.yn, 1),
                    i.b.d(t.Cf.zn, 50),
                    i.b.d(t.Cf.An, 50),
                    i.b.d(t.Cf.Bn, 50),
                    i.b.d(t.Cf.Cn, 50),
                    i.b.d(t.Cf.Dn, 50),
                    i.b.d(t.Cf.En, 50),
                    i.b.d(t.Cf.Fn, 50),
                    i.b.d(t.Cf.Gn, 50),
                    i.b.d(t.Cf.Hn, 50),
                    i.b.d(t.Cf.In, 50),
                    i.b.c(t.Cf.Jn, 500)
                }
                ,
                n.prototype.Xk = function() {
                    a.L.Si.Ge(t.xe.Ae.rf),
                    a.L.Si.Xe()
                }
                ,
                n
            }(),
            e.Np = function() {
                function i(a) {
                    var e = a + 37 * Math.floor(65535 * Math.random());
                    t.kg.vg(t.kg.tg, e, 30)
                }
                function c() {
                    return parseInt(t.kg.wg(t.kg.tg)) % 37
                }
                return function() {
                    var n = c();
                    n >= 0 && n < a.Mn.Op || (n = Math.max(0, a.Mn.Op - 2));
                    var f = {};
                    f.Pp = !1,
                    f.Qp = e.ja(),
                    f.Rp = 0,
                    f.Sp = 0,
                    f.Tp = null,
                    f.Up = a.A.K,
                    f.Vp = a.A.J,
                    f.uh = null,
                    f.bd = null,
                    f.Oe = null,
                    f.Si = null,
                    f.Fg = null,
                    f.ao = null,
                    f.Yj = null;
                    try {
                        var o = navigator;
                        if (o) {
                            var h = o["geolocation"];
                            h && h.getCurrentPosition(function(t) {
                                var a = t["coords"];
                                "undefined" != _typeof(a) && "undefined" != _typeof(a["latitude"]) && "undefined" != _typeof(a["longitude"]) && (f.Tp = t)
                            }, function(t) {})
                        }
                    } catch (t) {}
                    return f.za = function() {
                        f.uh = new t.Wp,
                        f.uh.Xp = new t.ai(f.uh),
                        f.bd = new t.rb,
                        f.Oe = new t.ek,
                        f.Si = new t.xe,
                        f.Fg = new t.hk,
                        f.ao = new t.Aj,
                        f.Yj = new t.al;
                        try {
                            ga("send", "event", "app", a.A.B + "_init")
                        } catch (t) {}
                        f.uh.Yp = function() {
                            f.Fg.Qk(f.Fg.Lk)
                        }
                        ,
                        f.uh.Zp = function() {
                            var i = f.Fg.rf.io();
                            try {
                                ga("send", "event", "game", a.A.B + "_start", i)
                            } catch (t) {}
                            f.Si.Ge(t.xe.Ae.sf),
                            f.Fg.Qk(f.Fg.sf.Rn())
                        }
                        ,
                        f.uh.$p = function() {
                            try {
                                ga("send", "event", "game", a.A.B + "_end")
                            } catch (t) {}
                            $("body").height() >= 430 && a.Mn._p.Ca(),
                            f.bd.$b(null, null, null),
                            function() {
                                var t = Math.floor(f.uh.th.Rh)
                                  , a = f.uh.Yh;
                                f.Yj.Xj() ? f.Yj.Rl(function() {
                                    f.aq(t, a)
                                }) : f.aq(t, a)
                            }()
                        }
                        ,
                        f.uh.bq = function(t) {
                            t(f.Fg.sf.Un(), f.Fg.sf.Vn())
                        }
                        ,
                        f.Yj.Ol(function() {
                            var a = f.Fg._k();
                            if (null != a && a.Ed === t.Vk.Uk && (f.Si.Ge(t.xe.Ae.rf),
                            f.Fg.Qk(f.Fg.rf)),
                            f.Yj.Xj()) {
                                var i = f.Yj.sl();
                                try {
                                    ga("set", "userId", i)
                                } catch (t) {}
                                try {
                                    zE("messenger", "loginUser", function(t) {
                                        t(i)
                                    })
                                } catch (t) {}
                            } else
                                try {
                                    zE("webWidget", "logout")
                                } catch (t) {}
                            f.Uo() && f.Yj.Xj() && !f.Yj.xl() ? (f.Fp(!1, !1),
                            f.Fg.Gk.no(new t.Gp)) : f.cq(!0)
                        }),
                        f.uh.za(),
                        f.Fg.za(),
                        f.ao.za(),
                        f.bd.za(),
                        f.Fg.rf.ho(),
                        f.Fg.Qk(f.Fg.rf),
                        f.Oe.za(function() {
                            f.Si.za(),
                            f.Yj.za(),
                            f.bd.$b(function() {
                                f.Fg.rf.go(),
                                f.Fg.Qk(f.Fg.rf)
                            }, function(t) {
                                f.Fg.rf.go(),
                                f.Fg.Qk(f.Fg.Jk)
                            }, function(t, a) {
                                var e = t;
                                f.Fg.ze.Zn(e, a),
                                f.Fg.rf.Zn(e, a)
                            }),
                            f.Uo() && !f.xl() ? f.Fg.Gk.no(new t.Gp) : f.cq(!0)
                        })
                    }
                    ,
                    f.dq = function(t) {
                        if (f.Yj.Xj()) {
                            var i = f.Yj.Ql()
                              , c = a.A.C + "/pub/wuid/" + i + "/consent/change" + "?value=" + e.Q(t);
                            e.ha(c, function() {}, function(t) {})
                        }
                    }
                    ,
                    f.bo = function() {
                        n++,
                        !a.Mn.fq && n >= a.Mn.Op ? (f.Fg.Qk(f.Fg.Nk),
                        f.Si.Ge(t.xe.Ae.uf),
                        a.Mn.gq.Aa()) : (i(n),
                        f.hq())
                    }
                    ,
                    f.hq = function() {
                        if (f.uh.iq()) {
                            f.Fg.ze.$n(),
                            f.Fg.Qk(f.Fg.ze);
                            var a = f.Fg.rf.io();
                            t.kg.vg(t.kg.qg, a, 30);
                            var i = f.Fg.oi.ni();
                            t.kg.vg(t.kg.mg, i, 30);
                            var c = 0;
                            if (null != f.Tp) {
                                var n = f.Tp["coords"]["latitude"]
                                  , o = f.Tp["coords"]["longitude"];
                                c = 1 | Math.max(0, Math.min(32767, (n + 90) / 180 * 32768)) << 1 | Math.max(0, Math.min(65535, (o + 180) / 360 * 65536)) << 16
                            }
                            if (f.Yj.Xj())
                                f.jq(a, c);
                            else {
                                var h = f.Fg.rf.ul();
                                t.kg.vg(t.kg.rg, h, 30);
                                var d = f.ao.Hj(t.Jj.Ij);
                                t.kg.vg(t.kg.sg, d, 30),
                                f.kq(a, c)
                            }
                        }
                    }
                    ,
                    f.jq = function(i, c) {
                        var n = f.Yj.Ql()
                          , o = f.Fg.rf.ul()
                          , h = f.ao.Hj(t.Jj.Ij)
                          , d = f.ao.Hj(t.Jj.Kj)
                          , s = f.ao.Hj(t.Jj.Lj)
                          , r = f.ao.Hj(t.Jj.Nj)
                          , b = f.ao.Hj(t.Jj.Mj)
                          , u = a.A.C + "/pub/wuid/" + n + "/start" + "?gameMode=" + e.Q(i) + "&gh=" + c + "&nickname=" + e.Q(o) + "&skinId=" + e.Q(h) + "&eyesId=" + e.Q(d) + "&mouthId=" + e.Q(s) + "&glassesId=" + e.Q(r) + "&hatId=" + e.Q(b);
                        e.ha(u, function() {
                            f.Fg.Qk(f.Fg.Jk)
                        }, function(t) {
                            if (1460 === t["code"]) {
                                f.Fg.Qk(f.Fg.Ek);
                                try {
                                    ga("send", "event", "restricted", a.A.B + "_tick")
                                } catch (t) {}
                            } else if (1200 !== t["code"])
                                f.Fg.Qk(f.Fg.Jk);
                            else {
                                var i = t["server_url"];
                                f.uh.lq(i, n)
                            }
                        })
                    }
                    ,
                    f.kq = function(i, c) {
                        var n = f.Fg.rf.ul()
                          , o = f.ao.Hj(t.Jj.Ij)
                          , h = a.A.C + "/pub/wuid/" + "guest" + "/start" + "?gameMode=" + e.Q(i) + "&gh=" + c + "&nickname=" + e.Q(n) + "&skinId=" + e.Q(o);
                        e.ha(h, function() {
                            f.Fg.Qk(f.Fg.Jk)
                        }, function(t) {
                            if (1460 === t["code"]) {
                                f.Fg.Qk(f.Fg.Ek);
                                try {
                                    ga("send", "event", "restricted", a.A.B + "_tick")
                                } catch (t) {}
                            } else if (1200 !== t["code"])
                                f.Fg.Qk(f.Fg.Jk);
                            else {
                                var i = t["server_url"];
                                f.uh.mq(i, n, o)
                            }
                        })
                    }
                    ,
                    f.aq = function(a, e) {
                        var i = f.Fg.rf.ul();
                        f.Fg.sf.Tn(a, e, i),
                        f.Si.Ge(t.xe.Ae.tf),
                        f.Fg.Qk(f.Fg.sf.Sn())
                    }
                    ,
                    f.eo = function() {
                        if (!f.fo())
                            return f.ao.Rj();
                        var a = parseInt(t.kg.wg(t.kg.sg));
                        return null != a && f.ao.Sj(a, t.Jj.Ij) ? a : f.ao.Rj()
                    }
                    ,
                    f.jo = function(a) {
                        t.kg.vg(t.kg.ug, a ? "true" : "false", 1800)
                    }
                    ,
                    f.fo = function() {
                        return t.kg.wg(t.kg.ug) === "true"
                    }
                    ,
                    f.cq = function(t) {
                        if (t !== f.Pp) {
                            f.Pp = t;
                            var c = c || {};
                            c["consented"] = t,
                            c["gdprConsent"] = t,
                            a.Mn.Nn.za(),
                            a.Mn._p.za(),
                            a.Mn.gq.za(function(t) {
                                t && i(n = 0),
                                f.hq()
                            })
                        }
                    }
                    ,
                    f.Fp = function(a, i) {
                        t.kg.vg(t.kg.lg, a ? "true" : "false"),
                        i && f.dq(a),
                        f.cq(a)
                    }
                    ,
                    f.xl = function() {
                        switch (t.kg.wg(t.kg.lg)) {
                        case "true":
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    f.Uo = function() {
                        try {
                            return !!window["isIPInEEA"] || !(null == f.Tp || !a.xg.yg(f.Tp["coords"]["latitude"], f.Tp["coords"]["longitude"]))
                        } catch (t) {
                            return !0
                        }
                    }
                    ,
                    f.cg = function() {
                        f.Rp = e.ja(),
                        f.Sp = f.Rp - f.Qp,
                        f.uh.Ch(f.Rp, f.Sp),
                        f.Fg.Ch(f.Rp, f.Sp),
                        f.Qp = f.Rp
                    }
                    ,
                    f.$f = function() {
                        f.Fg.$f()
                    }
                    ,
                    f
                }()
            }
            ,
            t.Wp = function() {
                "use strict";
                var i = {
                    nq: 0,
                    oq: 1,
                    pq: 2,
                    qq: 3
                }
                  , c = {};
                return c.rq = 30,
                c.sq = new Float32Array(100),
                c.tq = 0,
                c.uq = 0,
                c.vq = 0,
                c.wq = 0,
                c.xq = 0,
                c.yq = 0,
                c.Qn = i.nq,
                c.zq = null,
                c.Aq = 300,
                c.Zp = function() {}
                ,
                c.$p = function() {}
                ,
                c.bq = function() {}
                ,
                c.Yp = function() {}
                ,
                c.yh = new t.Ng,
                c.Xp = null,
                c.th = null,
                c.Xi = {},
                c.Vh = {},
                c.Ti = 12.5,
                c.vh = 40,
                c.Bq = 1,
                c.Cq = -1,
                c.Dq = 1,
                c.Eq = 1,
                c.Fq = -1,
                c.Gq = -1,
                c.Hq = 1,
                c.Iq = 1,
                c.Jq = -1,
                c.Yh = 500,
                c.Oh = 500,
                c.yh.Qg = 500,
                c.th = new t.Ci(c.yh),
                c.za = function() {
                    c.th.Ji(a.L.Fg.sf.Eg),
                    e.R(function() {
                        c.bq(function(t, a) {
                            c.Kq(t, a)
                        })
                    }, 100)
                }
                ,
                c.xh = function(t, a, e, i) {
                    c.Cq = t,
                    c.Dq = a,
                    c.Eq = e,
                    c.Fq = i,
                    c.Lq()
                }
                ,
                c.Mq = function(t) {
                    c.Bq = t,
                    c.Lq()
                }
                ,
                c.Lq = function() {
                    c.Gq = c.Cq - c.Bq,
                    c.Hq = c.Dq + c.Bq,
                    c.Iq = c.Eq - c.Bq,
                    c.Jq = c.Fq + c.Bq
                }
                ,
                c.Ch = function(t, a) {
                    c.vq += a,
                    c.uq -= .2 * c.tq * a,
                    c.Xp.fi(),
                    null == c.zq || c.Qn !== i.pq && c.Qn !== i.qq || (c.Nq(t, a),
                    c.vh = 4 + c.Ti * c.th.qd);
                    for (var e = 1e3 / Math.max(1, a), n = 0, f = 0; f < c.sq.length - 1; f++)
                        n += c.sq[f],
                        c.sq[f] = c.sq[f + 1];
                    c.sq[c.sq.length - 1] = e,
                    c.rq = (n + e) / c.sq.length
                }
                ,
                c.Oq = function(t, a) {
                    return t > c.Gq && t < c.Hq && a > c.Iq && a < c.Jq
                }
                ,
                c.Nq = function(t, a) {
                    var e = c.vq + c.uq
                      , i = (e - c.wq) / (c.xq - c.wq);
                    c.th.xj(t, a),
                    c.th.yj(t, a, i, c.Oq);
                    var n = 0;
                    for (var f in c.Vh) {
                        var o = c.Vh[f];
                        o.xj(t, a),
                        o.yj(t, a, i, c.Oq),
                        o.Mi && o.qd > n && (n = o.qd),
                        o.Li || !(o.tj < .005) && o.Mi || (o.Ii(),
                        delete c.Vh[o.Uh.re])
                    }
                    c.Mq(3 * n);
                    for (var h in c.Xi) {
                        var d = c.Xi[h];
                        d.xj(t, a),
                        d.yj(t, a, c.Oq),
                        d.bj && (d.tj < .005 || !c.Oq(d.nj, d.oj)) && (d.Ii(),
                        delete c.Xi[d.Uh.re])
                    }
                }
                ,
                c.Ai = function(t, e) {
                    c.Qn === i.oq && (c.Qn = i.pq,
                    c.Zp());
                    var n = a.L.Rp;
                    c.yq = t,
                    0 === t ? (c.wq = n - 95,
                    c.xq = n,
                    c.vq = c.wq,
                    c.uq = 0) : (c.wq = c.xq,
                    c.xq = c.xq + e);
                    var f = c.vq + c.uq;
                    c.tq = (f - c.wq) / (c.xq - c.wq)
                }
                ,
                c.cj = function() {
                    if (c.Qn === i.oq || c.Qn === i.pq) {
                        c.Qn = i.qq;
                        var t = c.zq;
                        e.S(function() {
                            c.Qn === i.qq && (c.Qn = i.nq),
                            null != t && t === c.zq && (c.zq.close(),
                            c.zq = null)
                        }, 5e3),
                        c.$p()
                    }
                }
                ,
                c.iq = function() {
                    return c.Qn !== i.pq && (c.Qn = i.oq,
                    c.Xp.ei(),
                    c.Xi = {},
                    c.Vh = {},
                    c.th.dn(),
                    null != c.zq && (c.zq.close(),
                    c.zq = null),
                    !0)
                }
                ,
                c.Pq = function() {
                    c.zq = null,
                    c.Xp.ei(),
                    c.Qn !== i.qq && c.Yp(),
                    c.Qn = i.nq
                }
                ,
                c.lq = function(a, e) {
                    c.Qq(a, function() {
                        var a = Math.min(2048, e.length)
                          , i = new t.ma(6 + 2 * a)
                          , n = new t.va(new t.na(i));
                        n.wa(129),
                        n.xa(2800),
                        n.wa(1),
                        n.xa(a);
                        for (var f = 0; f < a; f++)
                            n.xa(e.charCodeAt(f));
                        c.Rq(i)
                    })
                }
                ,
                c.mq = function(a, e, i) {
                    c.Qq(a, function() {
                        var a = Math.min(32, e.length)
                          , n = new t.ma(7 + 2 * a)
                          , f = new t.va(new t.na(n));
                        f.wa(129),
                        f.xa(2800),
                        f.wa(0),
                        f.xa(i),
                        f.wa(a);
                        for (var o = 0; o < a; o++)
                            f.xa(e.charCodeAt(o));
                        c.Rq(n)
                    })
                }
                ,
                c.Rq = function(t) {
                    try {
                        null != c.zq && c.zq.readyState === WebSocket.OPEN && c.zq.send(t)
                    } catch (t) {
                        c.Pq()
                    }
                }
                ,
                c.Kq = function(i, n) {
                    var f = n ? 128 : 0
                      , o = e.Y(i) / a.M * 128 & 127
                      , h = 255 & (f | o);
                    if (c.Aq !== h) {
                        var d = new t.ma(1);
                        new t.va(new t.na(d)).wa(h),
                        c.Rq(d),
                        c.Aq = h
                    }
                }
                ,
                c.Qq = function(t, a) {
                    var i = c.zq = new WebSocket(t);
                    i.binaryType = "arraybuffer",
                    i.onopen = function() {
                        c.zq === i && a()
                    }
                    ,
                    i.onclose = function() {
                        c.zq === i && c.Pq()
                    }
                    ,
                    i.onerror = function(t) {
                        c.zq === i && c.Pq()
                    }
                    ,
                    i.onmessage = function(t) {
                        c.zq === i && c.Xp.di(t.data)
                    }
                }
                ,
                c
            }
            ,
            a.Mn = function(t) {
                var a = {};
                a["main"] = {
                    Nn: e.Ba("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
                    _p: e.Ba("ltmolilci1iurq1i", "wormate-io_970x250"),
                    gq: e.ya(),
                    Op: 4,
                    fq: !1,
                    Ln: !0
                },
                a["miniclip"] = {
                    Nn: e.Ba("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
                    _p: e.Ba("ltmolilci1iurq1i", "wormate-io_970x250"),
                    gq: e.ya(),
                    Op: 4,
                    fq: !1,
                    Ln: !1
                };
                var i = a[t];
                return i || (i = a["main"]),
                i
            }(window["ENV"]),
            $(function() {
                FastClick.attach(document.body)
            }),
            addEventListener("contextmenu", function(t) {
                return t.preventDefault(),
                t.stopPropagation(),
                !1
            }),
            window.fbAsyncInit = function() {
                FB.init({
                    appId: "861926850619051",
                    cookie: !0,
                    xfbml: !0,
                    status: !0,
                    version: "v14.0"
                })
            }
            ,
            e.W("//connect.facebook.net/" + a.A.K + "/sdk.js", {
                id: "facebook-jssdk",
                async: !0,
                defer: !0,
                crossorigin: "anonymous"
            }),
            e.W("//apis.google.com/js/api:client.js", null, function() {
                gapi.load("auth2", function() {
                    GoogleAuth = gapi.auth2.init({
                        client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
                    })
                })
            }),
            e.W("//platform.twitter.com/widgets.js", {
                id: "twitter-wjs"
            }),
            e.W("//apis.google.com/js/platform.js"),
            function() {
                a.L = e.Np(),
                a.L.za()
            }(),
            function() {
                function t() {
                    requestAnimationFrame(t),
                    a.L.cg()
                }
                t()
            }(),
            function() {
                function t() {
                    var t = i.width()
                      , o = i.height()
                      , h = c.outerWidth()
                      , d = c.outerHeight()
                      , s = n.outerHeight()
                      , r = f.outerHeight()
                      , b = Math.min(1, Math.min((o - r - s) / d, t / h))
                      , u = "translate(-50%, -50%) scale(".concat(b, ")");
                    c.css("-webkit-transform", u),
                    c.css("-moz-transform", u),
                    c.css("-ms-transform", u),
                    c.css("-o-transform", u),
                    c.css("transform", u),
                    a.L.$f(),
                    window.scrollTo(0, 1)
                }
                var i = $("body")
                  , c = $("#stretch-box")
                  , n = $("#markup-header")
                  , f = $("#markup-footer");
                t(),
                $(window).resize(t)
            }()
        })
    }();
}
  return {};
});

Kernel.define("app", ["bus", "game"], function (bus) {
  bus.emit("app:ready");
  return { ready: true };
});

try {
  Kernel.resolve("app");
} catch (err) {
  console.error("[mod] boot failed", err);
}

})(window);
