;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    121: function (t, e, a) {
      t.exports = a.p + "assets/images/app/img/factor-flying-icons.3924e452.svg"
    },
    122: function (t, e, a) {
      t.exports = a.p + "assets/images/app/img/mongodb.585a087c.svg"
    },
    123: function (t, e, a) {
      t.exports = a.p + "assets/images/app/img/popper.cc1e127a.svg"
    },
    124: function (t, e, a) {
      t.exports = a(125)
    },
    125: function (t, e, a) {
      var s = a(126),
        n = a(127),
        i = /^[0-9a-f]{32}$/
      function r(t, e) {
        if (t)
          return "boolean" === typeof t.protocol
            ? t.protocol
            : "http" !== t.protocol && ("https" === t.protocol || void 0)
      }
      function o(t) {
        return (t = "string" === typeof t ? t.trim().toLowerCase() : "unspecified").match(
          i
        )
          ? t
          : s(t)
      }
      function c(t) {
        var e = n.stringify(
          (function (t) {
            var e = {},
              a = { protocol: 1, format: 1 }
            for (var s in t) a[s] || (e[s] = t[s])
            return e
          })(t)
        )
        return (e && "?" + e) || ""
      }
      t.exports = {
        url: function (t, e, a) {
          var s = "//www.gravatar.com/avatar/"
          e && e.cdn
            ? ((s = e.cdn + "/avatar/"), delete e.cdn)
            : (e && e.protocol && (a = r(e)),
              "undefined" !== typeof a &&
                (s = a
                  ? "https://s.gravatar.com/avatar/"
                  : "http://www.gravatar.com/avatar/"))
          var n = c(e)
          return s + o(t) + n
        },
        profile_url: function (t, e, a) {
          var s = void 0 != e && void 0 != e.format ? String(e.format) : "json"
          if (e && e.cdn) (n = e.cdn + "/"), delete e.cdn
          else {
            e && e.protocol && (a = r(e))
            var n = a ? "https://secure.gravatar.com/" : "http://www.gravatar.com/"
          }
          var i = c(e)
          return n + o(t) + "." + s + i
        },
      }
    },
    126: function (t, e, a) {
      var s
      !(function (n) {
        "use strict"
        function i(t, e) {
          var a = (65535 & t) + (65535 & e)
          return (((t >> 16) + (e >> 16) + (a >> 16)) << 16) | (65535 & a)
        }
        function r(t, e, a, s, n, r) {
          return i(((o = i(i(e, t), i(s, r))) << (c = n)) | (o >>> (32 - c)), a)
          var o, c
        }
        function o(t, e, a, s, n, i, o) {
          return r((e & a) | (~e & s), t, e, n, i, o)
        }
        function c(t, e, a, s, n, i, o) {
          return r((e & s) | (a & ~s), t, e, n, i, o)
        }
        function p(t, e, a, s, n, i, o) {
          return r(e ^ a ^ s, t, e, n, i, o)
        }
        function l(t, e, a, s, n, i, o) {
          return r(a ^ (e | ~s), t, e, n, i, o)
        }
        function u(t, e) {
          var a, s, n, r, u
          ;(t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e)
          var d = 1732584193,
            m = -271733879,
            f = -1732584194,
            v = 271733878
          for (a = 0; a < t.length; a += 16)
            (s = d),
              (n = m),
              (r = f),
              (u = v),
              (d = o(d, m, f, v, t[a], 7, -680876936)),
              (v = o(v, d, m, f, t[a + 1], 12, -389564586)),
              (f = o(f, v, d, m, t[a + 2], 17, 606105819)),
              (m = o(m, f, v, d, t[a + 3], 22, -1044525330)),
              (d = o(d, m, f, v, t[a + 4], 7, -176418897)),
              (v = o(v, d, m, f, t[a + 5], 12, 1200080426)),
              (f = o(f, v, d, m, t[a + 6], 17, -1473231341)),
              (m = o(m, f, v, d, t[a + 7], 22, -45705983)),
              (d = o(d, m, f, v, t[a + 8], 7, 1770035416)),
              (v = o(v, d, m, f, t[a + 9], 12, -1958414417)),
              (f = o(f, v, d, m, t[a + 10], 17, -42063)),
              (m = o(m, f, v, d, t[a + 11], 22, -1990404162)),
              (d = o(d, m, f, v, t[a + 12], 7, 1804603682)),
              (v = o(v, d, m, f, t[a + 13], 12, -40341101)),
              (f = o(f, v, d, m, t[a + 14], 17, -1502002290)),
              (d = c(
                d,
                (m = o(m, f, v, d, t[a + 15], 22, 1236535329)),
                f,
                v,
                t[a + 1],
                5,
                -165796510
              )),
              (v = c(v, d, m, f, t[a + 6], 9, -1069501632)),
              (f = c(f, v, d, m, t[a + 11], 14, 643717713)),
              (m = c(m, f, v, d, t[a], 20, -373897302)),
              (d = c(d, m, f, v, t[a + 5], 5, -701558691)),
              (v = c(v, d, m, f, t[a + 10], 9, 38016083)),
              (f = c(f, v, d, m, t[a + 15], 14, -660478335)),
              (m = c(m, f, v, d, t[a + 4], 20, -405537848)),
              (d = c(d, m, f, v, t[a + 9], 5, 568446438)),
              (v = c(v, d, m, f, t[a + 14], 9, -1019803690)),
              (f = c(f, v, d, m, t[a + 3], 14, -187363961)),
              (m = c(m, f, v, d, t[a + 8], 20, 1163531501)),
              (d = c(d, m, f, v, t[a + 13], 5, -1444681467)),
              (v = c(v, d, m, f, t[a + 2], 9, -51403784)),
              (f = c(f, v, d, m, t[a + 7], 14, 1735328473)),
              (d = p(
                d,
                (m = c(m, f, v, d, t[a + 12], 20, -1926607734)),
                f,
                v,
                t[a + 5],
                4,
                -378558
              )),
              (v = p(v, d, m, f, t[a + 8], 11, -2022574463)),
              (f = p(f, v, d, m, t[a + 11], 16, 1839030562)),
              (m = p(m, f, v, d, t[a + 14], 23, -35309556)),
              (d = p(d, m, f, v, t[a + 1], 4, -1530992060)),
              (v = p(v, d, m, f, t[a + 4], 11, 1272893353)),
              (f = p(f, v, d, m, t[a + 7], 16, -155497632)),
              (m = p(m, f, v, d, t[a + 10], 23, -1094730640)),
              (d = p(d, m, f, v, t[a + 13], 4, 681279174)),
              (v = p(v, d, m, f, t[a], 11, -358537222)),
              (f = p(f, v, d, m, t[a + 3], 16, -722521979)),
              (m = p(m, f, v, d, t[a + 6], 23, 76029189)),
              (d = p(d, m, f, v, t[a + 9], 4, -640364487)),
              (v = p(v, d, m, f, t[a + 12], 11, -421815835)),
              (f = p(f, v, d, m, t[a + 15], 16, 530742520)),
              (d = l(
                d,
                (m = p(m, f, v, d, t[a + 2], 23, -995338651)),
                f,
                v,
                t[a],
                6,
                -198630844
              )),
              (v = l(v, d, m, f, t[a + 7], 10, 1126891415)),
              (f = l(f, v, d, m, t[a + 14], 15, -1416354905)),
              (m = l(m, f, v, d, t[a + 5], 21, -57434055)),
              (d = l(d, m, f, v, t[a + 12], 6, 1700485571)),
              (v = l(v, d, m, f, t[a + 3], 10, -1894986606)),
              (f = l(f, v, d, m, t[a + 10], 15, -1051523)),
              (m = l(m, f, v, d, t[a + 1], 21, -2054922799)),
              (d = l(d, m, f, v, t[a + 8], 6, 1873313359)),
              (v = l(v, d, m, f, t[a + 15], 10, -30611744)),
              (f = l(f, v, d, m, t[a + 6], 15, -1560198380)),
              (m = l(m, f, v, d, t[a + 13], 21, 1309151649)),
              (d = l(d, m, f, v, t[a + 4], 6, -145523070)),
              (v = l(v, d, m, f, t[a + 11], 10, -1120210379)),
              (f = l(f, v, d, m, t[a + 2], 15, 718787259)),
              (m = l(m, f, v, d, t[a + 9], 21, -343485551)),
              (d = i(d, s)),
              (m = i(m, n)),
              (f = i(f, r)),
              (v = i(v, u))
          return [d, m, f, v]
        }
        function d(t) {
          var e,
            a = "",
            s = 32 * t.length
          for (e = 0; e < s; e += 8)
            a += String.fromCharCode((t[e >> 5] >>> e % 32) & 255)
          return a
        }
        function m(t) {
          var e,
            a = []
          for (a[(t.length >> 2) - 1] = void 0, e = 0; e < a.length; e += 1) a[e] = 0
          var s = 8 * t.length
          for (e = 0; e < s; e += 8) a[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32
          return a
        }
        function f(t) {
          var e,
            a,
            s = ""
          for (a = 0; a < t.length; a += 1)
            (e = t.charCodeAt(a)),
              (s +=
                "0123456789abcdef".charAt((e >>> 4) & 15) +
                "0123456789abcdef".charAt(15 & e))
          return s
        }
        function v(t) {
          return unescape(encodeURIComponent(t))
        }
        function h(t) {
          return (function (t) {
            return d(u(m(t), 8 * t.length))
          })(v(t))
        }
        function g(t, e) {
          return (function (t, e) {
            var a,
              s,
              n = m(t),
              i = [],
              r = []
            for (
              i[15] = r[15] = void 0, n.length > 16 && (n = u(n, 8 * t.length)), a = 0;
              a < 16;
              a += 1
            )
              (i[a] = 909522486 ^ n[a]), (r[a] = 1549556828 ^ n[a])
            return (s = u(i.concat(m(e)), 512 + 8 * e.length)), d(u(r.concat(s), 640))
          })(v(t), v(e))
        }
        function _(t, e, a) {
          return e ? (a ? g(e, t) : f(g(e, t))) : a ? h(t) : f(h(t))
        }
        void 0 ===
          (s = function () {
            return _
          }.call(e, a, e, t)) || (t.exports = s)
      })()
    },
    127: function (t, e, a) {
      "use strict"
      ;(e.decode = e.parse = a(128)), (e.encode = e.stringify = a(129))
    },
    128: function (t, e, a) {
      "use strict"
      function s(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }
      t.exports = function (t, e, a, i) {
        ;(e = e || "&"), (a = a || "=")
        var r = {}
        if ("string" !== typeof t || 0 === t.length) return r
        var o = /\+/g
        t = t.split(e)
        var c = 1e3
        i && "number" === typeof i.maxKeys && (c = i.maxKeys)
        var p = t.length
        c > 0 && p > c && (p = c)
        for (var l = 0; l < p; ++l) {
          var u,
            d,
            m,
            f,
            v = t[l].replace(o, "%20"),
            h = v.indexOf(a)
          h >= 0 ? ((u = v.substr(0, h)), (d = v.substr(h + 1))) : ((u = v), (d = "")),
            (m = decodeURIComponent(u)),
            (f = decodeURIComponent(d)),
            s(r, m) ? (n(r[m]) ? r[m].push(f) : (r[m] = [r[m], f])) : (r[m] = f)
        }
        return r
      }
      var n =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        }
    },
    129: function (t, e, a) {
      "use strict"
      var s = function (t) {
        switch (typeof t) {
          case "string":
            return t
          case "boolean":
            return t ? "true" : "false"
          case "number":
            return isFinite(t) ? t : ""
          default:
            return ""
        }
      }
      t.exports = function (t, e, a, o) {
        return (
          (e = e || "&"),
          (a = a || "="),
          null === t && (t = void 0),
          "object" === typeof t
            ? i(r(t), function (r) {
                var o = encodeURIComponent(s(r)) + a
                return n(t[r])
                  ? i(t[r], function (t) {
                      return o + encodeURIComponent(s(t))
                    }).join(e)
                  : o + encodeURIComponent(s(t[r]))
              }).join(e)
            : o
            ? encodeURIComponent(s(o)) + a + encodeURIComponent(s(t))
            : ""
        )
      }
      var n =
        Array.isArray ||
        function (t) {
          return "[object Array]" === Object.prototype.toString.call(t)
        }
      function i(t, e) {
        if (t.map) return t.map(e)
        for (var a = [], s = 0; s < t.length; s++) a.push(e(t[s], s))
        return a
      }
      var r =
        Object.keys ||
        function (t) {
          var e = []
          for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && e.push(a)
          return e
        }
    },
    148: function (t, e, a) {
      t.exports = a.p + "assets/images/app/img/screenshot-zeno.e4acbb0f.jpg"
    },
    149: function (t, e, a) {
      t.exports = a.p + "assets/images/app/img/screenshot-ultra.110e8f78.jpg"
    },
    150: function (t, e, a) {
      t.exports = a.p + "assets/images/app/img/screenshot-alpha.8c62eff7.jpg"
    },
    151: function (t, e, a) {
      "use strict"
      var s = a(46)
      a.n(s).a
    },
    22: function (t, e, a) {
      "use strict"
      a.r(e)
      var s = a(0),
        n = a(124),
        i = a.n(n),
        r = a(67),
        o = a(68),
        c = a(69),
        p = a(70),
        l = a(71),
        u = s.a.extend({
          components: {
            factorLogo: function () {
              return a.e(1).then(a.bind(null, 254))
            },
            formInput: function () {
              return a.e(5).then(a.bind(null, 255))
            },
          },
          mixins: [r.a, o.a, c.a, p.a],
          data: function () {
            var t = this
            return {
              skip: {},
              baseURL: window.$BASE_URL,
              form: {},
              themes: [
                { name: "Zeno", screenshot: a(148), value: "@factor/theme-zeno" },
                { name: "Ultra", screenshot: a(149), value: "@factor/theme-ultra" },
                { name: "Alpha", screenshot: a(150), value: "@factor/theme-alpha" },
              ],
              inputs: {
                app: [
                  {
                    type: "text",
                    label: "App Name",
                    placeholder: "Example App",
                    _id: "appName",
                    setting: "app.name",
                  },
                  {
                    type: "url",
                    label: "URL in Production",
                    placeholder: "https://www.example.com",
                    description: "Needed for transactional email",
                    _id: "appUrl",
                    setting: "app.url",
                  },
                  {
                    type: "email",
                    label: "App Email Address",
                    placeholder: "team@example.com",
                    description: "Needed for transactional email",
                    _id: "appEmail",
                    setting: "app.email",
                  },
                ],
                account: [
                  {
                    type: "text",
                    label: "Full Name",
                    placeholder: "",
                    _id: "displayName",
                  },
                  {
                    type: "email",
                    label: "Email",
                    placeholder: "email@example.com",
                    _id: "email",
                  },
                  {
                    type: "password",
                    label: "Password",
                    placeholder: "",
                    _id: "password",
                  },
                ],
                theme: [{ type: "text", label: "Theme Package", _id: "theme" }],
                db: [
                  {
                    type: "url",
                    label: "Db Connection",
                    _id: "db",
                    placeholder:
                      "mongodb+srv://demo:demo@cluster0-yxsfy.mongodb.net/demo?retryWrites=true&w=majority",
                  },
                ],
              },
              steps: [
                {
                  _id: "welcome",
                  complete: function () {
                    return t.step >= 1
                  },
                },
                {
                  _id: "app",
                  complete: function () {
                    return !!(t.form.appName && t.form.appUrl && t.form.appEmail)
                  },
                },
                {
                  _id: "account",
                  complete: function () {
                    return !!(t.form.displayName && t.form.password && t.form.email)
                  },
                },
                {
                  _id: "theme",
                  complete: function () {
                    return t.step > t.getStepIndex("theme")
                  },
                },
                {
                  _id: "done",
                  complete: function () {
                    return !!t.isStep("done")
                  },
                },
              ],
              completed: {},
            }
          },
          computed: {
            step: function () {
              var t
              return null !== (t = this.$route.query.step) && void 0 !== t ? t : 1
            },
            userAvatar: function () {
              return i.a.url(this.form.email, { s: "200", d: "retro" }) || ""
            },
            appAvatar: function () {
              return i.a.url(this.form.appEmail, { s: "200", d: "identicon" }) || ""
            },
            settings: function () {
              return window.$STATE.settings || {}
            },
          },
          mounted: function () {
            var t = this
            Object.values(this.inputs).forEach(function (e) {
              e.forEach(function (e) {
                if (e.setting) {
                  var a = t.getValue(e.setting)
                  a && t.$set(t.form, e._id, a)
                }
              })
            })
          },
          methods: {
            getValue: function (t) {
              if (t) return dotSetting({ key: t, settings: this.settings })
            },
            nextStep: function () {
              this.$router.push({
                path: "/setup",
                query: { step: Number(this.step) + 1 },
              })
            },
            getStep: function (t) {
              return this.steps.find(function (e) {
                return t == e._id
              })
            },
            getStepIndex: function (t) {
              return (
                this.steps.findIndex(function (e) {
                  return t == e._id
                }) + 1
              )
            },
            isStep: function (t) {
              return this.getStepIndex(t) == this.step
            },
            setTheme: function (t) {
              this.$set(this.form, "theme", t)
            },
            sendData: function () {
              Object(l.a)({ installed: !0, form: this.form }),
                this.$router.push({ path: "/" })
            },
            isComplete: function (t) {
              var e = this.steps.find(function (e) {
                return e._id == t
              })
              return !!(e && e.complete && e.complete())
            },
          },
        }),
        d = (a(151), a(10)),
        m = Object(d.a)(
          u,
          function () {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e
            return s("div", { staticClass: "setup" }, [
              s(
                "div",
                { staticClass: "pages" },
                t._l(t.steps, function (e, a) {
                  return s(
                    "router-link",
                    {
                      key: a,
                      staticClass: "pg",
                      class: [
                        t.step == a + 1 ? "active" : "",
                        t.isComplete(e._id) ? "complete" : "",
                      ],
                      attrs: { to: "/setup?step=" + (a + 1) },
                    },
                    [
                      t.isComplete(e._id)
                        ? s("span", { staticClass: "check" }, [
                            s(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                },
                              },
                              [
                                s("path", {
                                  attrs: {
                                    d:
                                      "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z",
                                  },
                                }),
                              ]
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      s("span", { staticClass: "num" }, [t._v(t._s(e._id))]),
                    ]
                  )
                }),
                1
              ),
              t._v(" "),
              s("div", { staticClass: "setup-content" }, [
                s("div", { staticClass: "setup-page-items" }, [
                  t.isStep("welcome")
                    ? s(
                        "div",
                        { key: "welcome", staticClass: "page-item" },
                        [
                          s("transition", { attrs: { appear: "" } }, [
                            s("div", { staticClass: "page-item-pad" }, [
                              s("div", { staticClass: "header" }, [
                                s("div", { staticClass: "title" }, [
                                  t._v("Welcome to Factor"),
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "sub-title" }, [
                                  t._v("Good work so far. Let's get you setup."),
                                ]),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "hero-wrap" }, [
                                s("div", { staticClass: "hero" }, [
                                  s("img", {
                                    attrs: { src: a(121), alt: "Factor Screenshot" },
                                  }),
                                ]),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "actions" }, [
                                s(
                                  "div",
                                  {
                                    staticClass: "btn primary next-step",
                                    on: {
                                      click: function (e) {
                                        return t.nextStep()
                                      },
                                    },
                                  },
                                  [t._v("Start \u2192")]
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : t.isStep("app")
                    ? s(
                        "div",
                        { key: "account", staticClass: "page-item account" },
                        [
                          s("transition", { attrs: { appear: "" } }, [
                            s(
                              "div",
                              { staticClass: "page-item-pad" },
                              [
                                s("transition", { attrs: { appear: "" } }, [
                                  t.form.appEmail
                                    ? s("div", { staticClass: "user-image" }, [
                                        s(
                                          "a",
                                          {
                                            staticClass: "user-image-wrap",
                                            attrs: {
                                              target: "_blank",
                                              href: "https://gravatar.com",
                                            },
                                          },
                                          [
                                            s("img", {
                                              attrs: {
                                                src: t.appAvatar,
                                                title: "gravatar",
                                                alt: "gravatar",
                                              },
                                            }),
                                          ]
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "header" }, [
                                  s("div", { staticClass: "title" }, [t._v("Your App")]),
                                  t._v(" "),
                                  s("div", { staticClass: "sub-title" }, [
                                    t._v("You can change this later."),
                                  ]),
                                ]),
                                t._v(" "),
                                s(
                                  "form",
                                  { staticClass: "setup-form" },
                                  t._l(t.inputs.app, function (e, a) {
                                    return s("form-input", {
                                      key: a,
                                      attrs: { input: e },
                                      model: {
                                        value: t.form[e._id],
                                        callback: function (a) {
                                          t.$set(t.form, e._id, a)
                                        },
                                        expression: "form[input._id]",
                                      },
                                    })
                                  }),
                                  1
                                ),
                                t._v(" "),
                                s("div", { staticClass: "actions" }, [
                                  s(
                                    "div",
                                    {
                                      staticClass: "btn next-step",
                                      class: t.isComplete("app") ? "primary" : "default",
                                      on: {
                                        click: function (e) {
                                          return t.nextStep()
                                        },
                                      },
                                    },
                                    [t._v("Next Step \u2192")]
                                  ),
                                  t._v(" "),
                                  s("div", { staticClass: "skipper" }, [
                                    t._v("\n                or\n                "),
                                    s(
                                      "span",
                                      {
                                        staticClass: "skip-step",
                                        on: {
                                          click: function (e) {
                                            ;(t.skip.app = !0), t.nextStep()
                                          },
                                        },
                                      },
                                      [t._v("skip this step")]
                                    ),
                                  ]),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      )
                    : t.isStep("account")
                    ? s(
                        "div",
                        { key: "account", staticClass: "page-item account" },
                        [
                          s("transition", { attrs: { appear: "" } }, [
                            s(
                              "div",
                              { staticClass: "page-item-pad" },
                              [
                                s("transition", { attrs: { appear: "" } }, [
                                  t.form.email
                                    ? s("div", { staticClass: "user-image" }, [
                                        s(
                                          "a",
                                          {
                                            staticClass: "user-image-wrap",
                                            attrs: {
                                              target: "_blank",
                                              href: "https://gravatar.com",
                                            },
                                          },
                                          [
                                            s("img", {
                                              attrs: {
                                                src: t.userAvatar,
                                                title: "gravatar",
                                                alt: "gravatar",
                                              },
                                            }),
                                          ]
                                        ),
                                      ])
                                    : t._e(),
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "header" }, [
                                  s("div", { staticClass: "title" }, [
                                    t._v("Your Account"),
                                  ]),
                                  t._v(" "),
                                  s("div", { staticClass: "sub-title" }, [
                                    t._v("Create an Admin User"),
                                  ]),
                                ]),
                                t._v(" "),
                                s(
                                  "form",
                                  { staticClass: "setup-form" },
                                  t._l(t.inputs.account, function (e, a) {
                                    return s("form-input", {
                                      key: a,
                                      attrs: { input: e },
                                      model: {
                                        value: t.form[e._id],
                                        callback: function (a) {
                                          t.$set(t.form, e._id, a)
                                        },
                                        expression: "form[input._id]",
                                      },
                                    })
                                  }),
                                  1
                                ),
                                t._v(" "),
                                s("div", { staticClass: "actions" }, [
                                  s(
                                    "div",
                                    {
                                      staticClass: "btn next-step",
                                      class: t.isComplete("account")
                                        ? "primary"
                                        : "default",
                                      on: {
                                        click: function (e) {
                                          return t.nextStep()
                                        },
                                      },
                                    },
                                    [t._v("Next Step \u2192")]
                                  ),
                                  t._v(" "),
                                  s("div", { staticClass: "skipper" }, [
                                    t._v("\n                or\n                "),
                                    s(
                                      "span",
                                      {
                                        staticClass: "skip-step",
                                        on: {
                                          click: function (e) {
                                            ;(t.skip.account = !0), t.nextStep()
                                          },
                                        },
                                      },
                                      [t._v("skip this step")]
                                    ),
                                  ]),
                                ]),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      )
                    : t.isStep("theme")
                    ? s(
                        "div",
                        { key: "theme", staticClass: "gallery-item page-item" },
                        [
                          s("transition", { attrs: { appear: "" } }, [
                            s("div", { staticClass: "gallery-item-pad page-item-pad" }, [
                              s("div", { staticClass: "header" }, [
                                s("div", { staticClass: "title" }, [
                                  t._v("Select Default Theme"),
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "sub-title" }, [
                                  t._v("You can change this later."),
                                ]),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "gallery-item-action" }, [
                                s(
                                  "form",
                                  { staticClass: "setup-form" },
                                  [
                                    t._l(t.inputs.theme, function (e, a) {
                                      return s("form-input", {
                                        key: a,
                                        attrs: { input: e },
                                        model: {
                                          value: t.form[e._id],
                                          callback: function (a) {
                                            t.$set(t.form, e._id, a)
                                          },
                                          expression: "form[input._id]",
                                        },
                                      })
                                    }),
                                    t._v(" "),
                                    s("div", { staticClass: "actions" }, [
                                      s(
                                        "div",
                                        {
                                          staticClass: "btn primary primary next-step",
                                          on: {
                                            click: function (e) {
                                              return t.nextStep()
                                            },
                                          },
                                        },
                                        [t._v("Next Step \u2192")]
                                      ),
                                      t._v(" "),
                                      s("div", { staticClass: "skipper" }, [
                                        t._v(
                                          "\n                    or\n                    "
                                        ),
                                        s(
                                          "span",
                                          {
                                            staticClass: "skip-step",
                                            on: {
                                              click: function (e) {
                                                ;(t.form.theme = ""),
                                                  (t.skip.theme = !0),
                                                  t.nextStep()
                                              },
                                            },
                                          },
                                          [t._v("don't add a theme")]
                                        ),
                                      ]),
                                    ]),
                                  ],
                                  2
                                ),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "theme-gallery-wrap" }, [
                                s(
                                  "div",
                                  { staticClass: "theme-gallery" },
                                  t._l(t.themes, function (e, a) {
                                    return s(
                                      "div",
                                      {
                                        key: a,
                                        staticClass: "theme",
                                        class: t.form.theme == e.value ? "selected" : "",
                                        on: {
                                          click: function (a) {
                                            return t.setTheme(e.value)
                                          },
                                        },
                                      },
                                      [
                                        s("img", {
                                          attrs: {
                                            src: e.screenshot,
                                            alt: "Screenshot " + e.name,
                                          },
                                        }),
                                      ]
                                    )
                                  }),
                                  0
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : t.isStep("db")
                    ? s(
                        "div",
                        { key: "db", staticClass: "page-item db" },
                        [
                          s("transition", { attrs: { appear: "" } }, [
                            s("div", { staticClass: "page-item-pad" }, [
                              s("div", { staticClass: "setup-image" }, [
                                s("img", { attrs: { src: a(122), alt: "Mongo" } }),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "header" }, [
                                s("div", { staticClass: "title" }, [
                                  t._v("Database Connection"),
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "sub-title" }, [
                                  t._v(
                                    "\n                A MongoDB URL.\n                "
                                  ),
                                  s("br"),
                                  t._v("Handles all dynamic data.\n                "),
                                  s("br"),
                                  t._v(" "),
                                  s(
                                    "a",
                                    {
                                      staticClass: "addendum",
                                      attrs: {
                                        href:
                                          "https://docs.mongodb.com/manual/reference/connection-string/",
                                        target: "_blank",
                                      },
                                    },
                                    [t._v("MongoDB Docs")]
                                  ),
                                  t._v(" "),
                                  s(
                                    "a",
                                    {
                                      staticClass: "addendum",
                                      attrs: {
                                        href: "https://youtu.be/KKyag6t98g8?t=90",
                                        target: "_blank",
                                      },
                                    },
                                    [t._v("Video Tutorial")]
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              s(
                                "form",
                                { staticClass: "setup-form" },
                                t._l(t.inputs.db, function (e, a) {
                                  return s("form-input", {
                                    key: a,
                                    attrs: { input: e },
                                    model: {
                                      value: t.form[e._id],
                                      callback: function (a) {
                                        t.$set(t.form, e._id, a)
                                      },
                                      expression: "form[input._id]",
                                    },
                                  })
                                }),
                                1
                              ),
                              t._v(" "),
                              s("div", { staticClass: "actions" }, [
                                s(
                                  "div",
                                  {
                                    staticClass: "btn next-step",
                                    class: t.isComplete("db") ? "primary" : "default",
                                    on: {
                                      click: function (e) {
                                        return t.nextStep()
                                      },
                                    },
                                  },
                                  [t._v("Next Step \u2192")]
                                ),
                                t._v(" "),
                                s("div", { staticClass: "skipper" }, [
                                  t._v("\n                or\n                "),
                                  s(
                                    "span",
                                    {
                                      staticClass: "skip-step",
                                      on: {
                                        click: function (e) {
                                          ;(t.skip.app = !0), t.nextStep()
                                        },
                                      },
                                    },
                                    [t._v("skip and use the demo db")]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : t.isStep("done")
                    ? s(
                        "div",
                        { key: "done", staticClass: "page-item" },
                        [
                          s("transition", { attrs: { appear: "" } }, [
                            s("div", { staticClass: "page-item-pad" }, [
                              s("div", { staticClass: "setup-image" }, [
                                s("img", { attrs: { src: a(123), alt: "Complete" } }),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "header" }, [
                                s("div", { staticClass: "title" }, [
                                  t._v("Your Setup is Complete"),
                                ]),
                                t._v(" "),
                                s("div", { staticClass: "sub-title" }, [
                                  t._v(
                                    "You can now customize your app and modify other settings on your dashboard."
                                  ),
                                ]),
                              ]),
                              t._v(" "),
                              s("div", { staticClass: "actions add-space" }, [
                                s(
                                  "div",
                                  {
                                    staticClass: "btn primary",
                                    on: {
                                      click: function (e) {
                                        return t.sendData()
                                      },
                                    },
                                  },
                                  [t._v("Save Config & Build App \u2192")]
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      )
                    : t._e(),
                ]),
              ]),
              t._v(" "),
              s(
                "div",
                { staticClass: "footer" },
                [s("transition", { attrs: { appear: "" } }, [s("factor-logo")], 1)],
                1
              ),
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = m.exports
    },
    46: function (t, e, a) {},
  },
])
