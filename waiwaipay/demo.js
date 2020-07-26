


function(e, t, n) {
    "use strict";
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
        , o = s(n(423))
        , i = s(n(59))
        , a = s(n(432))
        , u = n(48)
        , l = n(14);
    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function c() {
        return {
            "x-app-version": "",
            "x-device-id": window.waitpay_device_id,
            "x-device-system": l.PLATFORM_IS_IOS ? "iOS_qq_web" : "Android_qq_web",
            "x-device-version": "",
            "x-device-brand": "",
            "x-device-model": "",
            "x-position": u.store.getState().position.latitude + "," + u.store.getState().position.longitude,
            "x-location": "" + escape(u.store.getState().position.city),
            "x-connection": "wifi",
            "x-channel": i.default.CHANNEL_ID
        }
    }
    function f(e) {
        if (!i.default.PRODUCTION || "{" === e[0])
            return JSON.parse(e);
        var t = void 0;
        return t = (t = a.default.decode(e).slice(10)).split("").map(function(e) {
            return e.charCodeAt(0)
        }),
            t = new Uint8Array(t),
            t = o.default.inflate(t),
            t = function(e) {
                var t = void 0
                    , n = void 0
                    , r = void 0
                    , o = void 0
                    , i = void 0
                    , a = void 0;
                t = "",
                    r = e.length,
                    n = 0;
                for (; n < r; )
                    switch ((o = e[n++]) >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            t += String.fromCharCode(o);
                            break;
                        case 12:
                        case 13:
                            i = e[n++],
                                t += String.fromCharCode((31 & o) << 6 | 63 & i);
                            break;
                        case 14:
                            i = e[n++],
                                a = e[n++],
                                t += String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | (63 & a) << 0)
                    }
                return t
            }(t = new Uint16Array(t)),
            t = decodeURIComponent(t),
            JSON.parse(t)
    }
    e.exports = {
        headers: c,
        decodeData: f,
        timeoutPromise: function(e, t) {
            return t
        },
        HTTP_TIMEOUT: 1e4,
        fetchData: function(e, t) {
            t = r({
                headers: r({}, c())
            }, t);
            var n = 0
                , o = null;
            return new Promise(function(r, a) {
                    !function a(u) {
                        return fetch("" + i.default.API_HOST + e, t).then(function(e) {
                            return e.text().then(function(e) {
                                return f(e)
                            }).then(function(e) {
                                o && clearTimeout(o),
                                    r(e)
                            })
                        }).catch(function(e) {
                            n < 3 ? (n++,
                                a()) : o = setTimeout(function() {
                                return a()
                            }, 1e3)
                        })
                    }()
                }
            )
        }
    }
}












