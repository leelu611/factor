;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    21: function (e, t, r) {
      "use strict"
      r.r(t)
      var s = r(113),
        n = r.n(s),
        o = function (e, t) {
          return (
            (t = t || {}),
            new Promise(function (r, s) {
              var n = new XMLHttpRequest(),
                o = [],
                a = [],
                i = {},
                u = function () {
                  return {
                    ok: 2 == ((n.status / 100) | 0),
                    statusText: n.statusText,
                    status: n.status,
                    url: n.responseURL,
                    text: function () {
                      return Promise.resolve(n.responseText)
                    },
                    json: function () {
                      return Promise.resolve(JSON.parse(n.responseText))
                    },
                    blob: function () {
                      return Promise.resolve(new Blob([n.response]))
                    },
                    clone: u,
                    headers: {
                      keys: function () {
                        return o
                      },
                      entries: function () {
                        return a
                      },
                      get: function (e) {
                        return i[e.toLowerCase()]
                      },
                      has: function (e) {
                        return e.toLowerCase() in i
                      },
                    },
                  }
                }
              for (var c in (n.open(t.method || "get", e, !0),
              (n.onload = function () {
                n
                  .getAllResponseHeaders()
                  .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, t, r) {
                    o.push((t = t.toLowerCase())),
                      a.push([t, r]),
                      (i[t] = i[t] ? i[t] + "," + r : r)
                  }),
                  r(u())
              }),
              (n.onerror = s),
              (n.withCredentials = "include" == t.credentials),
              t.headers))
                n.setRequestHeader(c, t.headers[c])
              n.send(t.body || null)
            })
          )
        },
        a = r(108),
        i = r(109),
        u = r(110),
        c = r(111),
        l = r(112)
      function d(e, t, r, s, n, o, a) {
        try {
          var i = e[o](a),
            u = i.value
        } catch (c) {
          return void r(c)
        }
        i.done ? t(u) : Promise.resolve(u).then(s, n)
      }
      function h(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (s, n) {
            var o = e.apply(t, r)
            function a(e) {
              d(o, s, n, a, i, "next", e)
            }
            function i(e) {
              d(o, s, n, a, i, "throw", e)
            }
            a(void 0)
          })
        }
      }
      var p = function (e) {
          return new Promise(function (t) {
            return setTimeout(t, e)
          })
        },
        v = {
          components: {
            factorLogo: function () {
              return r.e(1).then(r.bind(null, 254))
            },
          },
          mixins: [a.a, i.a, u.a, c.a],
          data: function () {
            return {
              error: !1,
              stack: !1,
              allDone: !1,
              hasErrors: !1,
              isFinished: !1,
              maxReloadCount: 5,
              preventReload: !1,
              manualReload: !1,
              baseURL: window.$BASE_URL,
              progress: 0,
              message: "",
              build: "",
            }
          },
          computed: {
            progressText: function () {
              var e = this.progress ? "".concat(Math.round(this.progress), "%") : ""
              return "".concat(this.cap(this.message), " ").concat(e)
            },
            building: function () {
              return "bundle" == this.build ? "Building App" : "Setting Up Environment"
            },
          },
          beforeMount: function () {
            this.canReload() || (this.preventReload = !0)
          },
          mounted: function () {
            !this.preventReload &&
              this.baseURL &&
              (this.onData(window.$STATE),
              this.sseConnect("".concat(this.baseURL, "_loading/sse")),
              this.setTimeout())
          },
          methods: {
            cap: function (e) {
              return e
                ? e.replace(/\b\w/g, function (e) {
                    return e.toUpperCase()
                  })
                : ""
            },
            onSseData: function (e) {
              this._reloading || (this.setTimeout(), this.onData(e))
            },
            fetchData: function () {
              var e = this
              return h(
                n.a.mark(function t() {
                  var r
                  return n.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e._reloading) {
                              t.next = 2
                              break
                            }
                            return t.abrupt("return")
                          case 2:
                            return (
                              e.clearTimeout(),
                              (t.prev = 3),
                              (t.next = 6),
                              o("".concat(e.baseURL, "_loading/json")).then(function (e) {
                                return e.json()
                              })
                            )
                          case 6:
                            ;(r = t.sent), e.onData(r), (t.next = 13)
                            break
                          case 10:
                            ;(t.prev = 10), (t.t0 = t.catch(3)), e.logError(t.t0)
                          case 13:
                            e.setTimeout()
                          case 14:
                          case "end":
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[3, 10]]
                  )
                })
              )()
            },
            clearTimeout: (function (e) {
              function t() {
                return e.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return e.toString()
                }),
                t
              )
            })(function () {
              this._fetchTimeout && clearTimeout(this._fetchTimeout)
            }),
            setTimeout: (function (e) {
              function t() {
                return e.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return e.toString()
                }),
                t
              )
            })(function () {
              var e = this
              this._reloading ||
                (this.clearTimeout(),
                (this._fetchTimeout = setTimeout(function () {
                  return e.fetchData()
                }, 1e3)))
            }),
            onData: function (e) {
              if (e && !this._reloading) {
                if (
                  (e.settings && (window.$STATE.settings = e.settings),
                  e.redirect && !this.$route.path.includes(e.redirect))
                )
                  return (
                    this.$router.replace({ path: e.redirect }),
                    delete window.$STATE.redirect,
                    void Object(l.a)({ redirected: !0 })
                  )
                var t = e.error,
                  r = e.progress,
                  s = e.message,
                  n = e.hasErrors,
                  o = e.allDone,
                  a = e.build
                if (t) {
                  var i = t.description,
                    u = t.stack
                  return (
                    (this.errorDescription = i),
                    (this.errorStack = u),
                    void (this.hasErrors = !0)
                  )
                }
                n || !o || this.allDone || this.reload(),
                  (this.allDone = o),
                  (this.hasErrors = n),
                  (this.progress = r),
                  (this.message = s),
                  (this.build = a)
              }
            },
            canReload: function () {
              this.reloadCount = parseInt(this.retrieveItem("reloadCount")) || 0
              var e = parseInt(this.retrieveItem("lastReloadTime")) || 0
              this.loadingTime = new Date().getTime()
              var t = this.reloadCount < this.maxReloadCount,
                r = e && this.loadingTime > 1e3 + e
              return (
                !(!t || r) ||
                (this.removeItem("reloadCount"),
                this.removeItem("lastReloadTime"),
                (this.reloadCount = 0),
                t)
              )
            },
            updateReloadItems: function () {
              this.storeItem("reloadCount", 1 + this.reloadCount),
                this.storeItem("lastReloadTime", this.loadingTime)
            },
            reload: function () {
              var e = this
              return h(
                n.a.mark(function t() {
                  return n.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e._reloading) {
                            t.next = 2
                            break
                          }
                          return t.abrupt("return")
                        case 2:
                          return (
                            (e._reloading = !0),
                            e.clearTimeout(),
                            e.sseClose(),
                            e.clearConsole(),
                            (t.next = 8),
                            p(500)
                          )
                        case 8:
                          e.updateReloadItems(), window.location.reload(!0)
                        case 10:
                        case "end":
                          return t.stop()
                      }
                  }, t)
                })
              )()
            },
          },
        },
        f = (r(240), r(10)),
        m = Object(f.a)(
          v,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r(
              "div",
              {
                staticClass: "loading-screen",
                class: { hide: e.allDone && !e.preventReload },
              },
              [
                r(
                  "div",
                  { staticClass: "factor-logo-area" },
                  [r("transition", { attrs: { appear: "" } }, [r("factor-logo")], 1)],
                  1
                ),
                e._v(" "),
                r(
                  "div",
                  { staticClass: "loading-area" },
                  [
                    e.hasErrors && !e.errorDescription
                      ? r("div", { staticClass: "error-item" }, [
                          r("h3", { staticClass: "hasErrors" }, [
                            e._v("An error occured, please look at Factor terminal."),
                          ]),
                        ])
                      : e.hasErrors && e.errorDescription
                      ? r("div", { staticClass: "error-item" }, [
                          r("h3", { staticClass: "hasErrors" }, [
                            e._v(
                              "An error occured, please see below or look at Factor terminal for more info."
                            ),
                          ]),
                          e._v(" "),
                          r("div", { staticClass: "errorStack" }, [
                            r("p", { staticClass: "hasErrors" }, [
                              e._v(e._s(e.errorDescription)),
                            ]),
                            e._v(" "),
                            e.errorStack
                              ? r("p", { staticClass: "pre" }, [e._v(e._s(e.errorStack))])
                              : e._e(),
                          ]),
                          e._v(" "),
                          e._m(0),
                        ])
                      : e.preventReload
                      ? r("div", { staticClass: "reload-prevented error-item" }, [
                          r("h3", { staticClass: "hasErrors" }, [
                            e._v(
                              "Failed to show Factor app after " +
                                e._s(e.maxReloadCount) +
                                " reloads"
                            ),
                          ]),
                          e._v(" "),
                          r("p", [
                            e._v(
                              "Your Factor app could not be shown even though the webpack build appears to have finished."
                            ),
                          ]),
                          e._v(" "),
                          r("p", [
                            e._v(
                              "Try to reload the page manually, if this problem persists try to restart your Factor dev server."
                            ),
                          ]),
                        ])
                      : [
                          r("transition", { attrs: { appear: "" } }, [
                            r(
                              "div",
                              { staticClass: "row progress-bar-wrap", class: e.build },
                              [
                                r("div", { staticClass: "progress-title" }, [
                                  e._v(e._s(e.building)),
                                ]),
                                e._v(" "),
                                r("div", { staticClass: "progress-bar-container" }, [
                                  r("div", {
                                    staticClass: "progress-bar",
                                    style: { width: e.progress + "%" },
                                  }),
                                ]),
                                e._v(" "),
                                r("div", { staticClass: "progress-message" }, [
                                  e._v(e._s(e.progressText)),
                                ]),
                              ]
                            ),
                          ]),
                        ],
                  ],
                  2
                ),
              ]
            )
          },
          [
            function () {
              var e = this.$createElement,
                t = this._self._c || e
              return t("p", [
                t("span", { staticClass: "hasErrors" }, [this._v("Note:")]),
                this._v(
                  " A manual restart of the Factor dev server may be required\n      "
                ),
              ])
            },
          ],
          !1,
          null,
          null,
          null
        )
      t.default = m.exports
    },
    240: function (e, t, r) {
      "use strict"
      var s = r(64)
      r.n(s).a
    },
    64: function (e, t, r) {},
  },
])
