#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/3/9 17:37
# @Author   : qizai
# @File     : get_read_count.py
# @Software : PyCharm
"""计算总的阅读数or平均数
desc: 下面的md5是被修改过的；base64编解码也是被改过的，所以不能使用原生的md5/base64库"""

import math
import time
import execjs
import base64
import hashlib
import requests


js_code = """
navigator = {
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = this, window.navigator = navigator;


! function () {
    "use strict";

    function t(t) {
        t ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] =
            f[14] = f[15] = 0, this.blocks = f) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            this.h0 = 1732584193, this.h1 = 4023233417, this.h2 = 2562383102, this.h3 = 271733878, this.h4 = 3285377520,
            this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
    }
    var h = window,
        // s = !h.JS_SHA1_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
        s = false;
    s && (h = global);
    // var i = !h.JS_SHA1_NO_COMMON_JS && "object" == typeof module && module.exports,
    var i = false,
        // e = "function" == typeof define && define.amd,
        e = false,
        r = "0123456789abcdef".split(""),
        o = [-2147483648, 8388608, 32768, 128],
        n = [24, 16, 8, 0],
        a = ["hex", "array", "digest", "arrayBuffer"],
        f = [],
        u = function (h) {
            return function (s) {
                return new t(!0).update(s)[h]()
            }
        },
        c = function () {
            var h = u("hex");
            s && (h = p(h)), h.create = function () {
                return new t
            }, h.update = function (t) {
                return h.create().update(t)
            };
            for (var i = 0; i < a.length; ++i) {
                var e = a[i];
                h[e] = u(e)
            }
            return h
        },
        p = function (t) {
        //     var h = eval("require('crypto')"),
            var h = eval("require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/crypto-js')"),
                s = eval("require('buffer').Buffer"),
                i = function (i) {
                    if ("string" == typeof i) return h.createHash("sha1").update(i, "utf8").digest("hex");
                    if (i.constructor === ArrayBuffer) i = new Uint8Array(i);
                    else if (void 0 === i.length) return t(i);
                    return h.createHash("sha1").update(new s(i)).digest("hex")
                };
            return i
        };
    t.prototype.update = function (t) {
        if (!this.finalized) {
            var s = "string" != typeof t;
            s && t.constructor === h.ArrayBuffer && (t = new Uint8Array(t));
            for (var i, e, r = 0, o = t.length || 0, a = this.blocks; r < o;) {
                if (this.hashed && (this.hashed = !1, a[0] = this.block, a[16] = a[1] = a[2] = a[3] = a[4] = a[5] =
                    a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0), s)
                    for (e = this.start; r < o && e < 64; ++r) a[e >> 2] |= t[r] << n[3 & e++];
                else
                    for (e = this.start; r < o && e < 64; ++r)(i = t.charCodeAt(r)) < 128 ? a[e >> 2] |= i << n[3 &
                    e++] : i < 2048 ? (a[e >> 2] |= (192 | i >> 6) << n[3 & e++], a[e >> 2] |= (128 | 63 &
                        i) << n[3 & e++]) : i < 55296 || i >= 57344 ? (a[e >> 2] |= (224 | i >> 12) << n[3 & e++],
                            a[e >> 2] |= (128 | i >> 6 & 63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]
                    ) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++r)), a[e >> 2] |= (240 | i >> 18) <<
                        n[3 & e++], a[e >> 2] |= (128 | i >> 12 & 63) << n[3 & e++], a[e >> 2] |= (128 | i >> 6 &
                        63) << n[3 & e++], a[e >> 2] |= (128 | 63 & i) << n[3 & e++]);
                this.lastByteIndex = e, this.bytes += e - this.start, e >= 64 ? (this.block = a[16], this.start = e -
                    64, this.hash(), this.hashed = !0) : this.start = e
            }
            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes %
                4294967296), this
        }
    }, t.prototype.finalize = function () {
        if (!this.finalized) {
            this.finalized = !0;
            var t = this.blocks,
                h = this.lastByteIndex;
            t[16] = this.block, t[h >> 2] |= o[3 & h], this.block = t[16], h >= 56 && (this.hashed || this.hash(),
                t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] =
                t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] =
                this.bytes << 3, this.hash()
        }
    }, t.prototype.hash = function () {
        var t, h, s = this.h0,
            i = this.h1,
            e = this.h2,
            r = this.h3,
            o = this.h4,
            n = this.blocks;
        for (t = 16; t < 80; ++t) h = n[t - 3] ^ n[t - 8] ^ n[t - 14] ^ n[t - 16], n[t] = h << 1 | h >>> 31;
        for (t = 0; t < 20; t += 5) s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i & e |
            ~i & r) + o + 1518500249 + n[t] << 0) << 5 | o >>> 27) + (s & (i = i << 30 |
            i >>> 2) | ~s & e) + r + 1518500249 + n[t + 1] << 0) << 5 | r >>> 27) + (o & (s = s <<
            30 | s >>> 2) | ~o & i) + e + 1518500249 + n[t + 2] << 0) << 5 | e >>> 27) + (r & (o = o <<
            30 | o >>> 2) | ~r & s) + i + 1518500249 + n[t + 3] << 0) << 5 | i >>> 27) + (e & (r = r << 30 | r >>>
            2) | ~e & o) + s + 1518500249 + n[t + 4] << 0, e = e << 30 | e >>> 2;
        for (; t < 40; t += 5) s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i ^ e ^ r) +
            o + 1859775393 + n[t] << 0) << 5 | o >>> 27) + (s ^ (i = i << 30 | i >>> 2) ^
            e) + r + 1859775393 + n[t + 1] << 0) << 5 | r >>> 27) + (o ^ (s = s << 30 | s >>>
            2) ^ i) + e + 1859775393 + n[t + 2] << 0) << 5 | e >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^
            s) + i + 1859775393 + n[t + 3] << 0) << 5 | i >>> 27) + (e ^ (r = r << 30 | r >>> 2) ^ o) + s +
            1859775393 + n[t + 4] << 0, e = e << 30 | e >>> 2;
        for (; t < 60; t += 5) s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i & e | i & r |
            e & r) + o - 1894007588 + n[t] << 0) << 5 | o >>> 27) + (s & (i = i << 30 |
            i >>> 2) | s & e | i & e) + r - 1894007588 + n[t + 1] << 0) << 5 | r >>> 27) + (o &
            (s = s << 30 | s >>> 2) | o & i | s & i) + e - 1894007588 + n[t + 2] << 0) << 5 | e >>>
            27) + (r & (o = o << 30 | o >>> 2) | r & s | o & s) + i - 1894007588 + n[t + 3] << 0) << 5 | i >>>
            27) + (e & (r = r << 30 | r >>> 2) | e & o | r & o) + s - 1894007588 + n[t + 4] << 0, e = e << 30 |
            e >>> 2;
        for (; t < 80; t += 5) s = (h = (i = (h = (e = (h = (r = (h = (o = (h = s << 5 | s >>> 27) + (i ^ e ^ r) +
            o - 899497514 + n[t] << 0) << 5 | o >>> 27) + (s ^ (i = i << 30 | i >>> 2) ^
            e) + r - 899497514 + n[t + 1] << 0) << 5 | r >>> 27) + (o ^ (s = s << 30 | s >>> 2) ^
            i) + e - 899497514 + n[t + 2] << 0) << 5 | e >>> 27) + (r ^ (o = o << 30 | o >>> 2) ^ s) +
            i - 899497514 + n[t + 3] << 0) << 5 | i >>> 27) + (e ^ (r = r << 30 | r >>> 2) ^ o) + s - 899497514 +
            n[t + 4] << 0, e = e << 30 | e >>> 2;
        this.h0 = this.h0 + s << 0, this.h1 = this.h1 + i << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + r <<
            0, this.h4 = this.h4 + o << 0
    }, t.prototype.hex = function () {
        this.finalize();
        var t = this.h0,
            h = this.h1,
            s = this.h2,
            i = this.h3,
            e = this.h4;
        return r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 &
        15] + r[t >> 4 & 15] + r[15 & t] + r[h >> 28 & 15] + r[h >> 24 & 15] + r[h >> 20 & 15] + r[h >> 16 &
        15] + r[h >> 12 & 15] + r[h >> 8 & 15] + r[h >> 4 & 15] + r[15 & h] + r[s >> 28 & 15] + r[s >> 24 &
        15] + r[s >> 20 & 15] + r[s >> 16 & 15] + r[s >> 12 & 15] + r[s >> 8 & 15] + r[s >> 4 & 15] + r[15 &
        s] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >>
        8 & 15] + r[i >> 4 & 15] + r[15 & i] + r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >>
        16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e]
    }, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () {
        this.finalize();
        var t = this.h0,
            h = this.h1,
            s = this.h2,
            i = this.h3,
            e = this.h4;
        return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255,
            255 & h, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s, i >> 24 & 255, i >> 16 & 255, i >> 8 &
            255, 255 & i, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e]
    }, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () {
        this.finalize();
        var t = new ArrayBuffer(20),
            h = new DataView(t);
        return h.setUint32(0, this.h0), h.setUint32(4, this.h1), h.setUint32(8, this.h2), h.setUint32(12, this.h3),
            h.setUint32(16, this.h4), t
    };
    var y = c();
    i ? module.exports = y : (h.md5 = y, e && define(function () {
        return y
    }))
}();


function Base64() {
    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    };

    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    };

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    };

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    };
};

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}

function getparam() {
    "use strict";
    var base64 = new Base64();
    var key = uuid();
    console.log(new Date().getTime());
    var time = (Math.floor((new Date().getTime() + 10010) / 99)).toString();
    var sign = window.md5(key + base64.encode(time) + 'xianyuplus');
    var param = {
        "key": key,
        "time": time,
        "sign": sign
    };
    return param
};
var result = getparam();
console.log(result);
"""

url = "http://js-crack-course-9-3.crawler-lab.com/list?key={}&time={}&sign={}"
# url = "http://js-crack-course-9-2.crawler-lab.com/list?key={}&time={}&sign={}"
t = str(float((int(time.time()*1000)+10010)/99))
ctx = execjs.compile(js_code)
parm = ctx.call("getparam")
uuid = ctx.call("uuid")
tmp_str = "{}{}xianyuplus".format(uuid, base64.b64encode(t.encode()))
sign = hashlib.sha1(tmp_str.encode()).hexdigest()

cookie = {
    "__cfduid": "dc05606102aea5dd71eff872a130050691583766709",
    "crawlerlab_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODM4NTYzMzYsImlkIjoxMjkzLCJuYW1lIjoiMTU2Mjc1MTI4NDAifQ.-JGnN9Bt2Lxzf6O1Gi99_leAl-GDOdbvMb5BzfQFmeg",
}

resp = requests.get(url=url.format(parm["key"], parm["time"], parm["sign"]), cookies=cookie)

print("befor modify md5:{}".format(sign))
print("affter modified md5:{}".format(parm["sign"]))
print(resp.text)

total = 0
average = 0
for one in resp.json()["data"]:
    total += one["read_count"]

item = {
    "total": total,
    "average": total//len(resp.json()["data"])
}

print(item)
print(len(resp.json()["data"]))

# befor modify md5:c574f0d0f57e235971540634b947e5826161bfdc
# affter modified md5:ec653a4c9962493458deecddae17d3088f5eb69a
# {"status":1,"data":[{"id":"2139","avatar_img":"asserts/img/avatar.png","title":"【已完结】500rmb 逆向某红书app sign、shield 参数12113","username":"zPBmTUJ7","read_count":16770},{"id":"18988","avatar_img":"asserts/img/avatar.png","title":"requests报错requests.exceptions.ConnectionError15775","username":"tf5cDZRy","read_count":81100},{"id":"17594","avatar_img":"asserts/img/avatar.png","title":"某电商平台H5页面的js12366","username":"agu4fyC7","read_count":40645},{"id":"12234","avatar_img":"asserts/img/avatar.png","title":"分析一个app的请求参数2205","username":"34yeRzN2","read_count":7031},{"id":"14490","avatar_img":"asserts/img/avatar.png","title":"论坛里某大佬的每周更新JS的GitHub上包括并不包含的JS逆向视频12912","username":"yAHeCUQ2","read_count":91},{"id":"18841","avatar_img":"asserts/img/avatar.png","title":"**bA0 6.1.1 hook9870","username":"gymj076E","read_count":85879},{"id":"808","avatar_img":"asserts/img/avatar.png","title":"requests报错requests.exceptions.ConnectionError19847","username":"VsJck1BY","read_count":93508},{"id":"2447","avatar_img":"asserts/img/avatar.png","title":"招聘高级爬虫工程师！Base北京！19933","username":"udNMWQ8c","read_count":8213},{"id":"3291","avatar_img":"asserts/img/avatar.png","title":"3000 寻求C++高手 某APP协议登录4424","username":"QuiEFM2x","read_count":30909},{"id":"13268","avatar_img":"asserts/img/avatar.png","title":"Selenium在百度搜索关键词然后把对应的标题跟对应的链接取出来15582","username":"z0q8gGwa","read_count":72666},{"id":"17812","avatar_img":"asserts/img/avatar.png","title":"【已完结】500rmb 逆向某红书app sign、shield 参数6579","username":"7MrNzwFa","read_count":68336},{"id":"12307","avatar_img":"asserts/img/avatar.png","title":"夜幕爬虫安全论坛总版规17550","username":"FfqWG2Xw","read_count":81389},{"id":"2151","avatar_img":"asserts/img/avatar.png","title":"碰到的体力活 *json.v51191","username":"O3CxJGtl","read_count":80778},{"id":"166","avatar_img":"asserts/img/avatar.png","title":"关于selenium用多线程多开窗口的问题13065","username":"l6PuGaom","read_count":44257},{"id":"1788","avatar_img":"asserts/img/avatar.png","title":"【已完结】500rmb 逆向某红书app sign、shield 参数875","username":"U0QJ47cT","read_count":62538},{"id":"6214","avatar_img":"asserts/img/avatar.png","title":"【已完结】某app登录以及其他操作的加密参数16503","username":"zZ3xs2lV","read_count":90539},{"id":"5961","avatar_img":"asserts/img/avatar.png","title":"【已完结】某app登录以及其他操作的加密参数958","username":"qSKh8rje","read_count":97982},{"id":"14225","avatar_img":"asserts/img/avatar.png","title":"sougou验证码样本15439","username":"8b3n1rpa","read_count":21702},{"id":"1143","avatar_img":"asserts/img/avatar.png","title":"分析一个app的请求参数11384","username":"4WJ2bdV0","read_count":12855},{"id":"19067","avatar_img":"asserts/img/avatar.png","title":"**bA0 6.1.1 hook19407","username":"fL4bWU5p","read_count":33232},{"id":"12710","avatar_img":"asserts/img/avatar.png","title":"关于selenium用多线程多开窗口的问题9164","username":"g4iBQyLJ","read_count":45738},{"id":"19386","avatar_img":"asserts/img/avatar.png","title":"论坛里某大佬的每周更新JS的GitHub上包括并不包含的JS逆向视频2366","username":"ZCjPqicH","read_count":32359},{"id":"1615","avatar_img":"asserts/img/avatar.png","title":"requests报错requests.exceptions.ConnectionError5890","username":"oQmLCB3w","read_count":13091},{"id":"2105","avatar_img":"asserts/img/avatar.png","title":"求问，scrapy使用代理 超时报错的问题6420","username":"AiN5eUhB","read_count":59855},{"id":"6852","avatar_img":"asserts/img/avatar.png","title":"为什么每一个爬虫工程师都应该学习 Kafka7202","username":"ajiqJcpv","read_count":17464},{"id":"15312","avatar_img":"asserts/img/avatar.png","title":"这棒子网站到底检查什么？！求助！17224","username":"ntpiyl8N","read_count":67309},{"id":"10797","avatar_img":"asserts/img/avatar.png","title":"【Android逆向】某电竞社交app9727","username":"iW603Fq1","read_count":26893},{"id":"16541","avatar_img":"asserts/img/avatar.png","title":"【Android逆向】某电商社区app14720","username":"Kbckp3OE","read_count":516},{"id":"10631","avatar_img":"asserts/img/avatar.png","title":"碰到的体力活 *json.v511304","username":"9sGOI5uF","read_count":91827},{"id":"3331","avatar_img":"asserts/img/avatar.png","title":"某电商平台H5页面的js14468","username":"TMiGJyo4","read_count":78329}]}
# {'total': 1463801, 'average': 48793}


