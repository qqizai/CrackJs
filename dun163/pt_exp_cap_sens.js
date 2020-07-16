I$("0c20216832841dcb5dce14b16e7fd49c", function(e, t, a) {
    var i = {
        sense: "74b1d03fcaf944b4aa3a862b2a1893e1",
        jigsaw: "5a0e2d04ffa44caba3f740e6a8b0fa84",
        point: "347e9080f7a84e3e8cb79311f9e4cd3f",
        sense_custom: "74b1d03fcaf944b4aa3a862b2a1893e1",
        jigsaw_custom: "7569f916663148a996587e52ed1ed713",
        point_custom: "c89f87d921d84f2fa3684da27c74aaf8"
    };
    var n = 0;
    var s = {};
    var r = function() {
        var e = a.query(".j-captcha-sense");
        if (e)
            l();
        else
            d()
    };
    var o = function(e) {
        var t = a.query(".tcapt-tabs__tab", !0);
        var i = a.query(".tcapt-type__item", !0);
        for (var r = 0; r < t.length; r++)
            !function(r, o) {
                a.addEvent(r, "click", function(c) {
                    if (n !== o) {
                        a.delClass(t[n], "active");
                        a.addClass(r, "active");
                        a.delClass(i[n], "active");
                        a.addClass(i[o], "active");
                        n = o;
                        var l = c.target || c.srcElement;
                        s = {
                            type: l.getAttribute("captcha-type"),
                            mode: l.getAttribute("captcha-mode")
                        };
                        e(s, o)
                    }
                })
            }(t[r], r);
        var o = t[n];
        s = {
            type: o.getAttribute("captcha-type"),
            mode: o.getAttribute("captcha-mode")
        };
        e(s, n)
    };
    var c = function(e, t) {
        var n = a.query(".j-custom", !0);
        for (var r = 0; r < n.length; r++)
            !function(n, r) {
                a.addEvent(n, "click", function() {
                    var a = "true" === n.getAttribute("data-custom");
                    n.setAttribute("data-custom", !a);
                    var o = {};
                    if (!a) {
                        o = {
                            customStyles: {
                                imagePanel: {
                                    borderRadius: "8px"
                                },
                                controlBar: {
                                    borderRadius: "22px"
                                },
                                icon: {
                                    intellisenseLogo: "/public/res/web/custom_logo.png",
                                    slider: "/public/res/web/custom_logo.png"
                                }
                            },
                            customTexts: {
                                intellisense: {
                                    normal: "我是自定义提示文案哦～"
                                },
                                slideTip: "我是自定义提示文案哦～",
                                clickButton: "我是自定义提示文案哦～"
                            }
                        };
                        if (t)
                            o.captchaId = i[s.type + "_custom"];
                        else
                            o.captchaId = "a6ab911423aa49b39abd800c30e1f671";
                        n.innerHTML = "返回默认样式"
                    } else
                        n.innerHTML = "点击查看自定义样式";
                    e(r, o)
                })
            }(n[r], r)
    };
    var l = function() {
        function e(e, a, n, s) {
            s = s || {};
            if (e) {
                s = Object.assign({
                    width: "286px",
                    mode: "bind",
                    captchaId: i[n],
                    onVerify: t,
                    element: m[a],
                    appendTo: h[a]
                }, s);
                l && l.destroy();
                l = null;
                initNECaptcha(s, function(e) {
                    l = e
                });
                r()
            } else {
                s = Object.assign({
                    width: "320px",
                    captchaId: i[n],
                    element: v[a]
                }, s);
                d && d.destroy();
                d = null;
                initNECaptcha(s, function(e) {
                    d = e
                })
            }
        }
        function t(e, t) {
            if (!e)
                r(".tcapt-bind--result")
        }
        function r(e) {
            var t = h[n];
            var i = t.querySelectorAll(".tcapt-bind");
            var s = e ? t.querySelector(e) : i[0];
            for (var r = 0, o = i.length; r < o; r++)
                a.delClass(i[r], "tcapt-bind--active");
            a.addClass(s, "tcapt-bind--active")
        }
        var l = null;
        var d = null;
        var u = function(t, a) {
            var i = t.type;
            e(!1, a, i);
            e(!0, a, i)
        };
        var p = a.query(".j-bind", !0);
        var f = a.query(".j-back", !0);
        var m = a.query(".j-capt", !0);
        var h = a.query(".tcapt_wrap--bind", !0);
        var v = a.query(".j-captcha-sense", !0);
        for (var g = 0; g < p.length; g++)
            a.addEvent(p[g], "click", function() {
                l && l.verify()
            });
        for (var _ = 0; _ < f.length; _++)
            a.addEvent(f[_], "click", function() {
                l.refresh();
                r()
            });
        o(u);
        c(function(t, a) {
            if (t % 2)
                e(!0, n, s.type, a);
            else
                e(!1, n, s.type, a)
        }, !0)
    };
    var d = function() {
        function e(e, i, s) {
            var r = n[e].getAttribute("data-type");
            s = s || {};
            t && t.destroy();
            t = null;
            s = Object.assign({
                element: n[e],
                captchaId: "07e2387ab53a4d6f930b8d9a9be71bdf",
                mode: i,
                captchaType: r.toUpperCase(),
                width: "320px"
            }, s);
            if ("popup" === i)
                s.appendTo = a.query(".tcapt_wrap--pop");
            initNECaptcha(s, function(e) {
                t = e
            })
        }
        var t = null;
        var i = function(t, a) {
            var i = t.mode;
            e(a, i)
        };
        var n = a.query(".j-captcha", !0);
        var r = a.query(".j-pop");
        o(i);
        c(function(t, a) {
            e(t, s.mode, a)
        });
        a.addEvent(r, "click", function() {
            t.popUp()
        })
    };
    var u = function() {
        var e = a.query("#J-compare-button");
        var t = a.query("#J-compare-close");
        var i = a.query("#J-compare-dialog");
        a.addEvent(e, "click", function() {
            i && (i.style.display = "")
        });
        a.addEvent(t, "click", function() {
            i && (i.style.display = "none")
        })
    };
    var p = function() {
        e.init();
        e.initInputPlaceholder();
        new t({
            footer: ".layout-quick"
        });
        r();
        u()
    };
    p()
}, "91150511a7e91fcd90f2c37b08e5730b", "3cc4f6065fcbcec6d9f198809f81e4d0", "52a31311e138d34e969e723dd7fac76b");

//本文件中开头的 jigsaw 字段是用于请求相关的参数：如：
// 一次请求，获取 长token1，注册一个回调函数1；
// 二次请求也是获取 长token2，也注册一个回调函数2；
// 三次请求，获取 短token1，猜测和回调函数1 是有相关的绑定，同时需要留意的是：1.获取了设备指纹；2.参数cb如何生成的
// 四次请求，获取 短token2，猜测和回调函数2 是有相关的绑定，同时需要留意的是：1.获取了设备指纹；2.参数cb如何生成的

