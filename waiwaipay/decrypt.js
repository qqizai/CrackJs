function getter_setter(window){
    /**
     * 监控 window 属性变化，用于补全浏览器环境
     * 这里只是扣了最多三层的get
     * **/

    var new_window = new Proxy(window, {
        get: function (target, key, receiver) {
            if(target[key] instanceof Object){
                return new Proxy(target[key], {
                    get: function (a, b, c) {
                        if(a[b] instanceof Object){
                            return new Proxy(a[b], {
                                get: function (d, e, f) {
                                    console.log("[Get]: window.get:", key, ".", b, ".", e, "=", d[e]);
                                    return d[e];
                                },
                                set: function (d, e, f, g) {
                                    console.log("[Set]: window.set:", key, ".", b, ".", e, "=", f);
                                    d[e] = f;
                                }
                            })
                        }else {
                            console.log("[Get]: window.get:", key, ".", b, "=", a[b]);
                            return a[b];
                        }

                    },
                    set: function(a, b, c, d){
                        console.log("[Set]: window.set:", key, ".", b, "=", c);
                        a[b] = c;
                    }
                })
            }else {
                debugger;
                console.log("[Get] window.get:", key, "=", target[key]);
            }
        },
        set: function (target, key, value, receiver) {
            target[key] = value;
            console.log("[Set]: window.set:", key, "=", value);
        }
    });

    return new_window;
}

var window = getter_setter({});

var my_d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    my_p = /[\t\n\f\r ]/g;

var my_a = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
}

var my_c = Object.prototype.toString;

var l = 0
    , s = 1
    , c = 2
    , f = 4
    , d = 5
    , p = 6
    , h = 0
    , m = 1
    , y = 2
    , g = -2
    , v = -3
    , b = -4
    , _ = -5
    , w = 8
    , S = 1
    , E = 2
    , x = 3
    , T = 4
    , k = 5
    , O = 6
    , P = 7
    , C = 8
    , R = 9
    , I = 10
    , A = 11
    , j = 12
    , M = 13
    , F = 14
    , D = 15
    , L = 16
    , N = 17
    , V = 18
    , B = 19
    , H = 20
    , z = 21
    , W = 22
    , U = 23
    , q = 24
    , G = 25
    , K = 26
    , Y = 27
    , X = 28
    , $ = 29
    , Z = 30
    , Q = 31
    , J = 32
    , ee = 852
    , te = 592
    , ne = 15;

var ae = function (e, t) {
    var n, r;
    return e && e.state ? (r = e.state,
        t < 0 ? (n = 0,
            t = -t) : (n = 1 + (t >> 4),
        t < 48 && (t &= 15)),
        t && (t < 8 || t > 15) ? g : (null !== r.window && r.wbits !== t && (r.window = null),
            r.wrap = n,
            r.wbits = t,
            ie(e))) : g
}

var inflateInit2 = function ue(e, t) {
    var n, o;
    return e ? (o = new function() {
        this.mode = 0,
        this.last = !1,
        this.wrap = 0,
        this.havedict = !1,
        this.flags = 0,
        this.dmax = 0,
        this.check = 0,
        this.total = 0,
        this.head = null,
        this.wbits = 0,
        this.wsize = 0,
        this.whave = 0,
        this.wnext = 0,
        this.window = null,
        this.hold = 0,
        this.bits = 0,
        this.length = 0,
        this.offset = 0,
        this.extra = 0,
        this.lencode = null,
        this.distcode = null,
        this.lenbits = 0,
        this.distbits = 0,
        this.ncode = 0,
        this.nlen = 0,
        this.ndist = 0,
        this.have = 0,
        this.next = null,
        this.lens = new Uint16Array(320),
        this.work = new Uint16Array(288),
        this.lendyn = null,
        this.distdyn = null,
        this.sane = 0,
        this.back = 0,
        this.was = 0
    }
        ,
        e.state = o,
        o.window = null,
    (n = ae(e, t)) !== h && (e.state = null),
        n) : g
};

var inflateGetHeader = function (e, t) {
    var n;
    return e && e.state ? 0 == (2 & (n = e.state).wrap) ? g : (n.head = t, t.done = !1, h) : g
}

var re = function (e) {
    return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
}

var oe = function (e) {
    var t;
    return e && e.state ? (t = e.state,
        e.total_in = e.total_out = t.total = 0,
        e.msg = "",
    t.wrap && (e.adler = 1 & t.wrap),
        t.mode = S,
        t.last = 0,
        t.havedict = 0,
        t.dmax = 32768,
        t.head = null,
        t.hold = 0,
        t.bits = 0,
        t.lencode = t.lendyn = new Uint32Array(ee),
        t.distcode = t.distdyn = new Uint32Array(te),
        t.sane = 1,
        t.back = -1,
        h) : g
}

var ie = function (e) {
    var t;
    return e && e.state ? ((t = e.state).wsize = 0,
        t.whave = 0,
        t.wnext = 0,
        oe(e)) : g
}

var my_l = function () {
    this.input = null,
    this.next_in = 0,
    this.input = null,
    this.next_in = 0,
    this.avail_in = 0,
    this.total_in = 0,
    this.output = null,
    this.next_out = 0,
    this.avail_out = 0,
    this.total_out = 0,
    this.msg = "",
    this.state = null,
    this.data_type = 2,
    this.adler = 0
    // return this;
}

var my_s = function () {
    this.text = 0,
    this.time = 0,
    this.xflags = 0,
    this.os = 0,
    this.extra = null,
    this.extra_len = 0,
    this.name = "",
    this.comment = "",
    this.hcrc = 0,
    this.done = !1
    // return this;
};


var my_arraySet = function(e, t, n, r, o) {
    if (t.subarray && e.subarray)
        e.set(t.subarray(n, n + r), o);
    else
        for (var i = 0; i < r; i++)
            e[o + i] = t[n + i]
}

var my_shrinkBuf = function(e, t) {
    console.log("e.subarray: ", e.subarray);
    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t,
        e)
}

var f2 = function (e) {

    this.options = {
        chunkSize: 16384,
        windowBits: 0,
        to: ""
    }

    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
    0 === t.windowBits && (t.windowBits = -15)),
    !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
    t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15),
        t.err = 0,
        t.msg = "",
        t.ended = !1,
        t.chunks = [],
        this.strm = new my_l(),
        this.strm.avail_out = 0;
    var n = inflateInit2(this.strm, t.windowBits);
    if (n !== my_a.Z_OK)
        throw new Error(u[n]);
    if (this.header = new my_s(),
        inflateGetHeader(this.strm, this.header),
    t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = i.string2buf(t.dictionary) : "[object ArrayBuffer]" === c.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)),
    t.raw && (n = r.inflateSetDictionary(this.strm, t.dictionary)) !== my_a.Z_OK))
        throw new Error(u[n])

    this.onData = function(e) {
        this.chunks.push(e)
    }

    this.onEnd = function(e) {
        e === my_a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
            this.chunks = [],
            this.err = e,
            this.msg = this.strm.msg
    }

    this.push = function (e, t) {
        var n, u, l, s, f, d = this.strm,
            p = this.options.chunkSize,
            h = this.options.dictionary,
            m = !1;
        if (this.ended) return !1;
        u = t === ~~t ? t : !0 === t ? my_a.Z_FINISH : my_a.Z_NO_FLUSH, "string" == typeof e ? d.input = i.binstring2buf(e) :
            "[object ArrayBuffer]" === my_c.call(e) ? d.input = new Uint8Array(e) : d.input = e, d.next_in = 0, d.avail_in = d.input.length;
        do {
            if (0 === d.avail_out && (d.output = new Uint8Array(p), d.next_out = 0, d.avail_out = p), (n = my_inflate(d, my_a.Z_NO_FLUSH)) ===
            my_a.Z_NEED_DICT && h && (n = my_inflateSetDictionary(this.strm, h)), n === my_a.Z_BUF_ERROR && !0 === m && (n = a
                .Z_OK, m = !1), n !== my_a.Z_STREAM_END && n !== my_a.Z_OK) return this.onEnd(n), this.ended = !0, !1;
            d.next_out && (0 !== d.avail_out && n !== my_a.Z_STREAM_END && (0 !== d.avail_in || u !== my_a.Z_FINISH && u !== my_a.Z_SYNC_FLUSH) ||
                ("string" === this.options.to ? (l = utf8border(d.output, d.next_out), s = d.next_out - l, f = buf2string(
                    d.output, l), d.next_out = s, d.avail_out = p - s, s && my_arraySet(d.output, d.output, l, s,
                    0), this.onData(f)) : this.onData(my_shrinkBuf(d.output, d.next_out)))), 0 === d.avail_in && 0 ===
            d.avail_out && (m = !0)
        } while ((d.avail_in > 0 || 0 === d.avail_out) && n !== my_a.Z_STREAM_END);
        return n === my_a.Z_STREAM_END && (u = my_a.Z_FINISH), u === my_a.Z_FINISH ? (n = my_inflateEnd(this.strm), this.onEnd(n),
            this.ended = !0, n === my_a.Z_OK) : u !== my_a.Z_SYNC_FLUSH || (this.onEnd(my_a.Z_OK), d.avail_out = 0, !0)
    }


    return this;
}

var my_inflate = function (e, t) {
    var n = new f2(t);
    if (n.push(e, !0),
        n.err)
        throw n.msg || u[n.err];
    return n.result
};

var my_inflateSetDictionary = function(e, t) {
    var n, r = t.length;
    return e && e.state ? 0 !== (n = e.state).wrap && n.mode !== A ? g : n.mode === A && o(1, t, r, 0) !== n.check ? v :
        de(e, t, r, r) ? (n.mode = Q, b) : (n.havedict = 1, h) : g
}

var my_inflateEnd = function (e) {
    if (!e || !e.state) return g;
    var t = e.state;
    console.log(e.state)
    return t.window && (t.window = null), e.state = null, h
}

var string2buf = function(e) {
    var t, n, o, i, a, u = e.length, l = 0;
    for (i = 0; i < u; i++)
        55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < u && 56320 == (64512 & (o = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (o - 56320),
            i++),
            l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    for (t = new Uint8Array(l),
             a = 0,
             i = 0; a < l; i++)
        55296 == (64512 & (n = e.charCodeAt(i))) && i + 1 < u && 56320 == (64512 & (o = e.charCodeAt(i + 1))) && (n = 65536 + (n - 55296 << 10) + (o - 56320),
            i++),
            n < 128 ? t[a++] = n : n < 2048 ? (t[a++] = 192 | n >>> 6,
                t[a++] = 128 | 63 & n) : n < 65536 ? (t[a++] = 224 | n >>> 12,
                t[a++] = 128 | n >>> 6 & 63,
                t[a++] = 128 | 63 & n) : (t[a++] = 240 | n >>> 18,
                t[a++] = 128 | n >>> 12 & 63,
                t[a++] = 128 | n >>> 6 & 63,
                t[a++] = 128 | 63 & n);
    return t
}

var buf2binstring = function(e) {
    return l(e, e.length)
}

var binstring2buf = function(e) {
    for (var t = new Uint8Array(e.length), n = 0, o = t.length; n < o; n++)
        t[n] = e.charCodeAt(n);
    return t
}

var buf2string = function(e, t) {
    var n, r, o, i, u = t || e.length, s = new Array(2 * u);
    for (r = 0,
             n = 0; n < u; )
        if ((o = e[n++]) < 128)
            s[r++] = o;
        else if ((i = a[o]) > 4)
            s[r++] = 65533,
                n += i - 1;
        else {
            for (o &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && n < u; )
                o = o << 6 | 63 & e[n++],
                    i--;
            i > 1 ? s[r++] = 65533 : o < 65536 ? s[r++] = o : (o -= 65536,
                s[r++] = 55296 | o >> 10 & 1023,
                s[r++] = 56320 | 1023 & o)
        }
    return l(s, r)
}

var utf8border = function(e, t) {
    var n;
    for ((t = t || e.length) > e.length && (t = e.length),
             n = t - 1; n >= 0 && 128 == (192 & e[n]); )
        n--;
    return n < 0 ? t : 0 === n ? t : n + a[e[n]] > t ? n : t
}

var my_decode = function(e) {
    var t = (e = String(e).replace(my_p, "")).length;
    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
    (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) ;
    // f_error("Invalid character: the string to be decoded is not correctly encoded.")
    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
        r = my_d.indexOf(e.charAt(a)),
            n = o % 4 ? 64 * n + r : r,
        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
    return i
}
//
function my_f(e) {
    var t = void 0;
    var t = my_decode(e).slice(10);
    t = t.split("");
    var x = []
    for(var aa=0; aa<t.length; aa++){
       x.push(t[aa].charCodeAt(0))
    }

    t = x;
    t = new Uint8Array(t);
    t = my_inflate(t);
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
    }(t = new Uint16Array(t));
    t = decodeURIComponent(t);
    console.log("最后的t: ", t)
    return JSON.parse(t)
}



var data = "ZWMyNTdiYWY3MHicxVPbbqMwEP2aeW8CBPNoE/LcP0AuuAsKt8XQaP++M0MA\n" +
    "02yQtn1YybIG45lz5swxhAqORzvoYbQYgCdxb68UHmPca2Ot/mWWX8uP3tix\n" +
    "Gu7nXKTRH+7n77HMru5BUTbDWic5gZAQCQ4ikB4F8gKRD4kPSoEKFyw7vg3l\n" +
    "UK0sDk66ABXcL4fn6f5Nl7Uud7AxZ0E6E/ZTJAKKYhAvkCBJNSNSdgDHwEW1\n" +
    "JmubPP1P4NdxBxKR4llrDyTWC0BgJbGHHUGE64VJhKBOhC0PIAMm4dNyCPQm\n" +
    "K3S/OOU5C0ng0QHpBOsUd2gg0wAkcg9JLkycdBPJxidIY2by0Y5ZYXqXiC3a\n" +
    "W5q1fWP6tNb93ZbvurLma1pqx66rym1+25kmLdp6093jrNDHkUeMFQ8tVLrr\n" +
    "0kbXBCJfX3mKKOaJgwP5du4bnfNe9rVTLWStExY9AemvV3WTmWor0IWLnmhI\n" +
    "QrhTYeK5GXRZ/Yz6HlEcggzn4Pw9onl7a6pW56njmb9SDekhCMXVzqA8doHg\n" +
    "E0G+UJPSF24kZqVxxfM1ebcPPiIsha+QnPX4PKb0w07bX1G/1zaqXP1JM93n\n" +
    "ez37RBftsDLm5jcnXFnxGJAVNRyQcejZPmsvZnNdOOuhHYKICGWCIKHdy0/4\n" +
    "/INNfq7gvD4BDLWZQA==\n"

console.log(my_f(data))



// https://static.waitwaitpay.com/web/sd_se/index.html#/search/searchfor=vendor&keyword=%E7%B1%B3%E7%B2%89



