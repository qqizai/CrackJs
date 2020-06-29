//这里是加密函数，是将指定参数进行加密之后，进行post请求，然后再对返回来的参数进行解密，网站：烯牛数据首页
var h = ["/api/search/universal", "/api/search/universal_comps", "/api/search/universal_event", "/api/search/universal_investor", "/api/search/universal_fir", "/api/search/universal_news", "/api/search/universal_report", "/api/search/universal_investor", "/api/search2/univesal"]
var t = "/api/search2/company/lib"
var query_str = '{"payload":{"date":[],"round":[],"location":[],"tag":[],"yellow":[],"yellow_tag":[],"domestic":"true","funding_date":[],"input":"","order":"desc","sort":76004,"page":0,"size":20}}'
var query_str = {"payload":{"date":[],"round":[],"location":[],"tag":[],"yellow":[],"yellow_tag":[],"domestic":"true","funding_date":[],"input":"","order":"desc","sort":76004,"page":0,"size":20}}
var md5=require('md5-node');
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _p = "W5D80NFZHAYB8EUI2T649RT2MNRMVE2O";

function a(t) {
    if (n[t])
        return n[t].exports;
    var r = n[t] = {
        i: t,
        l: !1,
        exports: {}
    }
        , o = !0;
    try {
        e[t].call(r.exports, r, r.exports, a),
            o = !1
    } finally {
        o && delete n[t]
    }
    return r.l = !0,
        r.exports
}

function _u_e(e) {
    if (null == e)
        return null;
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
            t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
            t += String.fromCharCode(r >> 6 & 63 | 128),
            t += String.fromCharCode(63 & r | 128))
    }
    return t
}

function e1(e) {
    if (null == e)
        return null;
    for (var t, n, r, o, i, a, s, u = "", c = 0; c < e.length; )
        o = (t = e.charCodeAt(c++)) >> 2,
            i = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4,
            a = (15 & n) << 2 | (r = e.charCodeAt(c++)) >> 6,
            s = 63 & r,
            isNaN(n) ? a = s = 64 : isNaN(r) && (s = 64),
            u = u + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(a) + _keyStr.charAt(s);
    return u
}

function e2(e) {
    if (null == (e = _u_e(e)))
        return null;
    for (var t = "", n = 0; n < e.length; n++) {
        var r = _p.charCodeAt(n % _p.length);
        t += String.fromCharCode(e.charCodeAt(n) ^ r)
    }
    return t
}

function sig(e) {
    return md5(e + _p).toUpperCase()
}

function m(e) {
    return function(e, t) {
        // var t = "/api/search2/company/lib"
        h.includes(t) && (d.error = !0);
        t = t.startsWith("/") ? "".concat(e).concat(t) : "".concat(e, "/").concat(t);
        return t
    }(function() {
        // 这里直接去掉这个判断Windows的对象，本来是用来避免爬虫工程师进行本地调试的，所这里直接返回另外一个即可
        // if (window.location.host.startsWith("localhost") || window.location.host.startsWith("127."))
        //     return p;
        return ""
    }(), e)
}

function xiniu(t, n, o) {
    t = m(t);
    var i = !1;
    (t.indexOf("/api2/service/x_service/system_") >= 0 || t.indexOf("/api/company") >= 0 || t.indexOf("/api/search/deal") >= 0) && (i = !0,
        r = null);
    var c = JSON.stringify(n), l = JSON.parse(c);  // c是将n字符串/JavaScript对象转换为字符串， l 是将 字符串解析为JavaScript json对象
    if (!i) {
        var r = 1;
        null == r && (r = 1);
        var f = Object(e1)(Object(e2)(JSON.stringify(l.payload))), p = Object(sig)(f);  // s.c对应e1    s.d对应e2   s.e对应sig，这里注意一下：object(sig)(f)表示将f传递到sig里面去
            l.payload = f,
            l.sig = p,
            l.v = Number(r)
        console.log(l.payload)
        console.log(l.sig)
    }
}

console.log(xiniu(t, query_str))
// "{"payload":{"date":[],"round":[],"location":[],"tag":[],"yellow":[],"yellow_tag":[],"domestic":"true","funding_date":[],"input":"","order":"desc","sort":76004,"page":0,"size":20}}"


