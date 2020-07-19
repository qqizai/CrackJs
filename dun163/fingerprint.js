



var l, u, f = n(4), c = f.INVOKE_HOOK, j = f.EVENT_RESET, d = f.SWITCH_TYPE, h = f.SET_TYPE, p = f.SWITCH_LOAD_STATUS, y = f.UPDATE_VERIFY_STATUS, v = f.REFRESH, g = f.UPDATE_COUNTS_OF_VERIFYERROR, b = f.SET_TOKEN, m = f.EVENT_RESET_CLASSIC, _ = n(12), w = _.FETCH_CAPTCHA, T = _.FETCH_INTELLISENSE_CAPTCHA, S = _.VERIFY_CAPTCHA, E = _.VERIFY_INTELLISENSE_CAPTCHA, R = _.RESET_STATE, k = n(3), C = k.CAPTCHA_TYPE, O = k.DEVICE, I = n(2), $ = n(1), X = n(16), x = n(8), A = x.eypt, P = n(36), N = n(7), M = N.createNetCollect, D = n(5), L = D.UNPASS_ERROR, V = D.REQUEST_API_ERROR, B = D.BUSINESS_ERROR, Y = I.isMobile ? O.TOUCH : I.supportTouch ? O.MOUSE_TOUCH : O.MOUSE, F = {
    state: {
        version: "2.14.0",
        fingerprint: "",
        config: null,
        langPkg: null,
        captchaType: null,
        type: "",
        load: null,
        verifyStatus: "",
        token: "",
        previousToken: "",
        countsOfVerifyError: 0
    },
    mutations: (l = {},
        i(l, c, function() {}),
        i(l, j, function() {}),
        i(l, m, function() {}),
        i(l, d, function(e, t) {
            e.captchaType = t.captchaType
        }),
        i(l, h, function(e, t) {
            e.type = t.captchaType
        }),
        i(l, p, function(e, t) {
            e.load = t
        }),
        i(l, y, function(e, t) {
            e.verifyStatus = t.verifyStatus
        }),
        i(l, v, function(e) {
            e.load = null,
                e.verifyStatus = ""
        }),
        i(l, g, function(e, t) {
            e.countsOfVerifyError = t.counts
        }),
        i(l, b, function(e, t) {
            t && (e.previousToken = t),
                e.token = t
        }),
        l),
    actions: (u = {},
        i(u, R, function(e) {
            var t = e.commit;
            t(d, {
                captchaType: null
            }),
                t(p, null),
                t(y, {
                    verifyStatus: ""
                }),
                t(b, ""),
                t(g, {
                    counts: 0
                })
        }),
        i(u, w, function(e, t) {
            var n = e.commit
                , i = e.state
                , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                , l = i.fingerprint
                , u = i.version
                , f = i.$fetch
                , j = i.captchaCollector
                , y = i.config
                , v = y.apiServer
                , g = y.captchaId
                , m = y.protocol
                , _ = y.captchaType
                , w = y.ipv6
                , T = y.runEnv
                , S = y.group
                , E = y.scene
                , R = Object.assign({
                id: g,
                fp: l,
                https: "https" === m,
                type: _,
                version: u,
                dpr: window.devicePixelRatio || 1,
                dev: Y,
                cb: s(),
                ipv6: w,
                runEnv: T,
                group: S,
                scene: E
            }, t)
                , k = r({
                apiServer: v,
                protocol: m
            }, "/get");
            n(p, {
                status: "loading"
            }),
                f(k, R, function(e, t) {
                    if (e = o(e, t, k)) {
                        var r = new D(e.code,e.message,{
                            url: k,
                            api: "get"
                        });
                        return a(r),
                            n(p, {
                                status: "fail",
                                data: r
                            }),
                            void n(c, {
                                name: "onError",
                                args: [r]
                            })
                    }
                    a(null, t);
                    var s = t.data;
                    s.type !== C.INTELLISENSE && s.type !== i.captchaType && n(d, {
                        captchaType: s.type,
                        prevCaptchaType: i.captchaType
                    }),
                        n(h, {
                            captchaType: s.type
                        }),
                        n(b, s.token),
                        n(p, {
                            status: "loading",
                            data: s
                        })
                }, {
                    onProcess: M(j)
                })
        }),
        i(u, T, function(e, t) {
            var n = e.commit
                , i = e.state
                , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                , l = i.fingerprint
                , u = i.version
                , f = i.$fetch
                , j = i.captchaCollector
                , d = i.config
                , p = d.apiServer
                , y = d.captchaId
                , v = d.protocol
                , g = d.captchaType
                , m = d.ipv6
                , _ = d.runEnv
                , w = d.group
                , T = d.scene
                , S = r({
                apiServer: p,
                protocol: v
            }, "/get");
            f(S, {
                id: y,
                fp: l,
                https: "https" === v,
                type: g,
                width: t.width,
                version: u,
                dpr: window.devicePixelRatio || 1,
                dev: Y,
                cb: s(),
                ipv6: m,
                runEnv: _,
                group: w,
                scene: T
            }, function(e, t) {
                if (e = o(e, t, S)) {
                    var i = new D(e.code,e.message,{
                        url: S,
                        api: "get"
                    });
                    return n(c, {
                        name: "onError",
                        args: [i]
                    }),
                        void a(i)
                }
                n(h, {
                    captchaType: C.INTELLISENSE
                }),
                    n(b, t.data.token),
                    a(null, t)
            }, {
                onProcess: M(j)
            })
        }),
        i(u, E, function(e, t, n) {
            var i = e.commit
                , l = e.state
                , u = l.version
                , f = l.type
                , j = l.$fetch
                , d = l.captchaCollector
                , h = l.config
                , p = h.apiServer
                , y = h.captchaId
                , v = h.protocol
                , g = h.extraData
                , b = h.runEnv
                , m = Object.assign({
                id: y,
                version: u,
                cb: s(),
                extraData: a(g),
                runEnv: b
            }, t)
                , _ = r({
                apiServer: p,
                protocol: v
            }, "/check");
            j(_, m, function(e, t) {
                if (e = o(e, t, _),
                    e ? e = new D(e.code,e.message,{
                        url: _,
                        token: m.token,
                        type: f
                    }) : $.getIn(t, "data.result") || (e = new D(L,"Failed to verify captcha.",{
                        url: _,
                        type: f,
                        token: m.token
                    })),
                    e)
                    i(c, {
                        name: "onVerify",
                        args: [e]
                    });
                else {
                    var r = l.fingerprint
                        , a = P(A(t.data.validate + "::" + r));
                    i(c, {
                        name: "onVerify",
                        args: [null, {
                            validate: a
                        }]
                    })
                }
                n && n(e, t)
            }, {
                onProcess: M(d, {
                    token: m.token
                })
            })
        }),
        i(u, S, function(e, t) {
            var n = e.commit
                , i = e.state
                , l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                , u = i.fingerprint
                , f = i.captchaType
                , j = i.version
                , d = i.verifyStatus
                , h = i.countsOfVerifyError
                , p = i.$fetch
                , v = i.type
                , b = i.captchaCollector
                , m = i.config
                , _ = m.apiServer
                , w = m.captchaId
                , T = m.protocol
                , S = m.extraData
                , E = m.runEnv
                , R = t.token
                , k = t.data
                , O = t.width
                , I = t.acToken
                , $ = r({
                apiServer: _,
                protocol: T
            }, "/check");
            n(y, {
                verifyStatus: "verifying"
            });
            var X = function(e, t) {
                var i = t && t.data;
                if (e = o(e, t, $),
                    !(["success", "error"].indexOf(d) > -1)) {
                    if (e || !i.result && f !== C.SMS) {
                        var r = e ? e.message : "Failed to verify captcha."
                            , a = e ? e.code : L;
                        return e = new D(a,r,{
                            url: $,
                            token: R,
                            type: v,
                            counts: h + 1
                        }),
                            n(y, {
                                verifyStatus: "error",
                                error: e
                            }),
                            n(g, {
                                counts: h + 1
                            }),
                            n(c, {
                                name: "onVerify",
                                args: [e]
                            }),
                            void l(e)
                    }
                    if (i.result) {
                        var s = P(A(i.validate + "::" + u));
                        n(y, {
                            verifyStatus: "success",
                            validate: i.validate
                        }),
                            n(c, {
                                name: "onVerify",
                                args: [null, {
                                    validate: s
                                }]
                            }),
                            l(null, t)
                    }
                }
            };
            p($, {
                id: w,
                token: R,
                acToken: I,
                data: k,
                width: O,
                type: f,
                version: j,
                cb: s(),
                extraData: a(S),
                runEnv: E
            }, X, {
                onProcess: M(b, {
                    token: R
                })
            })
        }),
        u)
};






