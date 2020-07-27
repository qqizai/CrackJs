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

var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var p = "/[\\t\\n\\f\\r ]/g";

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


var a = {
    default: {
        "version": "0.1.0",

        "decode": function(e) {
            debugger
            e = String(e).replace(p, "");
            var t = e.length;
            if (t % 4 == 0){
                e = e.replace("/==?$/", "")
                t = e.length
            }

            for (var n, r, o = 0, i = "", a = -1; ++a < t;) {
                r = d.indexOf(e.charAt(a));
                n = o % 4 ? 64 * n + r : r, o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
            }
            return i
        },

        "encode": function (e) {
            e = String(e), /[^\\0-\xFF]/.test(e) && f(
                "The string to be encoded contains characters outside of the Latin1 range.");
            for (var t, n, r, o, i = e.length % 3, a = "", u = -1, l = e.length - i; ++u < l;) t = e.charCodeAt(u) << 16, n = e
                .charCodeAt(++u) << 8, r = e.charCodeAt(++u), a += d.charAt((o = t + n + r) >> 18 & 63) + d.charAt(o >> 12 & 63) +
                d.charAt(o >> 6 & 63) + d.charAt(63 & o);
            return 2 == i ? (t = e.charCodeAt(u) << 8, n = e.charCodeAt(++u), a += d.charAt((o = t + n) >> 10) + d.charAt(o >>
                4 & 63) + d.charAt(o << 2 & 63) + "=") : 1 == i && (o = e.charCodeAt(u), a += d.charAt(o >> 2) + d.charAt(o <<
                4 & 63) + "=="), a
        }
    }

}

function s(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
//
// var r = n(428)
//     , o = n(46)
//     , i = n(207)
//     , a = n(209)
//     , u = n(129)
//     , l = n(208)
//     , s = n(431)
//     , c = Object.prototype.toString;




function oe(e) {
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
function ie(e) {
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

    var t;
    return e && e.state ? ((t = e.state).wsize = 0,
        t.whave = 0,
        t.wnext = 0,
        oe(e)) : g
}
function ae(e, t) {
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

var l = function () {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0,
        this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
}

var my_r = {
    Buf16: Uint16Array
};

var r = {
    inflateInit2: function ue(e, t) {
        var n, o;

        if (e){
            return (o = new function () {
                this.mode = 0;
                this.last = !1;
                this.wrap = 0;
                this.havedict = !1;
                this.flags = 0;
                this.dmax = 0;
                this.check = 0;
                this.total = 0;
                this.head = null;
                this.wbits = 0;
                this.wsize = 0;
                this.whave = 0;
                this.wnext = 0;
                this.window = null;
                this.hold = 0;
                this.bits = 0;
                this.length = 0;
                this.offset = 0;
                this.extra = 0;
                this.lencode = null;
                this.distcode = null;
                this.lenbits = 0;
                this.distbits = 0;
                this.ncode = 0;
                this.nlen = 0;
                this.ndist = 0;
                this.have = 0;
                this.next = null;
                this.lens = new my_r.Buf16(320);
                this.work = new my_r.Buf16(288);
                this.lendyn = null;
                this.distdyn = null;
                this.sane = 0;
                this.back = 0;
                this.was = 0;
            },
            e.state = o,
            o.window = null,
            ae(e, t),
            n=0,
            n)
        }else {
            return -2
        }

        /*return e ? (o = new function () {
            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check =
                0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0,
                this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0,
                this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0,
                this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new my_r.Buf16(320), this.work =
                new my_r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was =
                0
        // }, e.state = o, o.window = null, (n = ae(e, t)) !== h && (e.state = null), n) : g
        }, e.state = o, o.window = null, false, n) : -2*/
    },

    inflateGetHeader: function (e, t) {
        var n;
        // return e && e.state ? 0 == (2 & (n = e.state).wrap) ? g : (n.head = t, t.done = !1, h) : g
        return e && e.state ? 0 == (2 & (n = e.state).wrap) ? -2 : (n.head = t, t.done = !1, 0) : -2
    },

    inflate: function (e, t) {

        var u = function (e, t, n, l, s, c, f, d) {
            var p, h, m, y, g, v, b, _, w, S = d.bits,
                E = 0,
                x = 0,
                T = 0,
                k = 0,
                O = 0,
                P = 0,
                C = 0,
                R = 0,
                I = 0,
                A = 0,
                j = null,
                M = 0,
                F = new Uint16Array(16),
                D = new Uint16Array(16),
                L = null,
                N = 0;
            for (E = 0; E <= 15; E++) F[E] = 0;
            for (x = 0; x < l; x++) F[t[n + x]]++;
            for (O = S, k = 15; k >= 1 && 0 === F[k]; k--);
            if (O > k && (O = k), 0 === k) return s[c++] = 20971520, s[c++] = 20971520, d.bits = 1, 0;
            for (T = 1; T < k && 0 === F[T]; T++);
            for (O < T && (O = T), R = 1, E = 1; E <= 15; E++)
                if (R <<= 1, (R -= F[E]) < 0) return -1;
            if (R > 0 && (0 === e || 1 !== k)) return -1;
            for (D[1] = 0, E = 1; E < 15; E++) D[E + 1] = D[E] + F[E];
            for (x = 0; x < l; x++) 0 !== t[n + x] && (f[D[t[n + x]]++] = x);
            if (0 === e ? (j = L = f, v = 19) : 1 === e ? (j = o, M -= 257, L = i, N -= 257, v = 256) : (j = a, L = u, v = -1),
                A = 0, x = 0, E = T, g = c, P = O, C = 0, m = -1, y = (I = 1 << O) - 1, 1 === e && I > 852 || 2 === e && I >
            592) return 1;
            for (;;) {
                b = E - C, f[x] < v ? (_ = 0, w = f[x]) : f[x] > v ? (_ = L[N + f[x]], w = j[M + f[x]]) : (_ = 96, w = 0), p =
                    1 << E - C, T = h = 1 << P;
                do {
                    s[g + (A >> C) + (h -= p)] = b << 24 | _ << 16 | w | 0
                } while (0 !== h);
                for (p = 1 << E - 1; A & p;) p >>= 1;
                if (0 !== p ? (A &= p - 1, A += p) : A = 0, x++, 0 == --F[E]) {
                    if (E === k) break;
                    E = t[n + f[x]]
                }
                if (E > O && (A & y) !== m) {
                    for (0 === C && (C = O), g += T, R = 1 << (P = E - C); P + C < k && !((R -= F[P + C]) <= 0);) P++, R <<= 1;
                    if (I += 1 << P, 1 === e && I > 852 || 2 === e && I > 592) return 1;
                    s[m = A & y] = O << 24 | P << 16 | g - c | 0
                }
            }
            return 0 !== A && (s[g + A] = E - C << 24 | 64 << 16 | 0), d.bits = O, 0
        };


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

        var n, ee, te, ne, oe, ie, ae, ue, le, se, ce, pe, he, me, ye, ge, ve, be, _e, we, Se, Ee, xe, Te, ke = 0,
            Oe = new Uint8Array(4),
            Pe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return g;
        // (n = e.state).mode === j && (n.mode = M), oe = e.next_out, te = e.output, ae = e.avail_out, ne = e.next_in, ee = e.input,
        (n = e.state).mode === 12 && (n.mode = M), oe = e.next_out, te = e.output, ae = e.avail_out, ne = e.next_in, ee = e.input,
            // ie = e.avail_in, ue = n.hold, le = n.bits, se = ie, ce = ae, Ee = h;
            ie = e.avail_in, ue = n.hold, le = n.bits, se = ie, ce = ae, Ee = 0;
        e: for (;;) switch (n.mode) {
            case S:
                if (0 === n.wrap) {
                    n.mode = M;
                    break
                }
                for (; le < 16;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                if (2 & n.wrap && 35615 === ue) {
                    n.check = 0, Oe[0] = 255 & ue, Oe[1] = ue >>> 8 & 255, n.check = i(n.check, Oe, 2, 0), ue = 0,
                        le = 0, n.mode = E;
                    break
                }
                if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & ue) << 8) + (ue >> 8)) %
                31) {
                    e.msg = "incorrect header check", n.mode = Z;
                    break
                }
                if ((15 & ue) !== w) {
                    e.msg = "unknown compression method", n.mode = Z;
                    break
                }
                if (le -= 4, Se = 8 + (15 & (ue >>>= 4)), 0 === n.wbits) n.wbits = Se;
                else if (Se > n.wbits) {
                    e.msg = "invalid window size", n.mode = Z;
                    break
                }
                n.dmax = 1 << Se, e.adler = n.check = 1, n.mode = 512 & ue ? I : j, ue = 0, le = 0;
                break;
            case E:
                for (; le < 16;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                if (n.flags = ue, (255 & n.flags) !== w) {
                    e.msg = "unknown compression method", n.mode = Z;
                    break
                }
                if (57344 & n.flags) {
                    e.msg = "unknown header flags set", n.mode = Z;
                    break
                }
                n.head && (n.head.text = ue >> 8 & 1), 512 & n.flags && (Oe[0] = 255 & ue, Oe[1] = ue >>> 8 & 255,
                    n.check = i(n.check, Oe, 2, 0)), ue = 0, le = 0, n.mode = x;
            case x:
                for (; le < 32;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                n.head && (n.head.time = ue), 512 & n.flags && (Oe[0] = 255 & ue, Oe[1] = ue >>> 8 & 255, Oe[2] =
                    ue >>> 16 & 255, Oe[3] = ue >>> 24 & 255, n.check = i(n.check, Oe, 4, 0)), ue = 0, le = 0,
                    n.mode = T;
            case T:
                for (; le < 16;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                n.head && (n.head.xflags = 255 & ue, n.head.os = ue >> 8), 512 & n.flags && (Oe[0] = 255 & ue, Oe[1] =
                    ue >>> 8 & 255, n.check = i(n.check, Oe, 2, 0)), ue = 0, le = 0, n.mode = k;
            case k:
                if (1024 & n.flags) {
                    for (; le < 16;) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    n.length = ue, n.head && (n.head.extra_len = ue), 512 & n.flags && (Oe[0] = 255 & ue, Oe[1] =
                        ue >>> 8 & 255, n.check = i(n.check, Oe, 2, 0)), ue = 0, le = 0
                } else n.head && (n.head.extra = null);
                n.mode = O;
            case O:
                if (1024 & n.flags && ((pe = n.length) > ie && (pe = ie), pe && (n.head && (Se = n.head.extra_len -
                    n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), r.arraySet(
                    n.head.extra, ee, ne, pe, Se)), 512 & n.flags && (n.check = i(n.check, ee, pe,
                    ne)), ie -= pe, ne += pe, n.length -= pe), n.length)) break e;
                n.length = 0, n.mode = P;
            case P:
                if (2048 & n.flags) {
                    if (0 === ie) break e;
                    pe = 0;
                    do {
                        Se = ee[ne + pe++], n.head && Se && n.length < 65536 && (n.head.name += String.fromCharCode(
                            Se))
                    } while (Se && pe < ie);
                    if (512 & n.flags && (n.check = i(n.check, ee, pe, ne)), ie -= pe, ne += pe, Se) break e
                } else n.head && (n.head.name = null);
                n.length = 0, n.mode = C;
            case C:
                if (4096 & n.flags) {
                    if (0 === ie) break e;
                    pe = 0;
                    do {
                        Se = ee[ne + pe++], n.head && Se && n.length < 65536 && (n.head.comment += String.fromCharCode(
                            Se))
                    } while (Se && pe < ie);
                    if (512 & n.flags && (n.check = i(n.check, ee, pe, ne)), ie -= pe, ne += pe, Se) break e
                } else n.head && (n.head.comment = null);
                n.mode = R;
            case R:
                if (512 & n.flags) {
                    for (; le < 16;) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    if (ue !== (65535 & n.check)) {
                        e.msg = "header crc mismatch", n.mode = Z;
                        break
                    }
                    ue = 0, le = 0
                }
                n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = j;
                break;
            case I:
                for (; le < 32;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                e.adler = n.check = re(ue), ue = 0, le = 0, n.mode = A;
            case A:
                if (0 === n.havedict) return e.next_out = oe, e.avail_out = ae, e.next_in = ne, e.avail_in = ie, n.hold =
                    ue, n.bits = le, y;
                e.adler = n.check = 1, n.mode = j;
            case j:
                if (t === d || t === p) break e;
            case M:
                if (n.last) {
                    ue >>>= 7 & le, le -= 7 & le, n.mode = Y;
                    break
                }
                for (; le < 3;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                switch (n.last = 1 & ue, le -= 1, 3 & (ue >>>= 1)) {
                    case 0:
                        n.mode = F;
                        break;
                    case 1:
                        if (fe(n), n.mode = H, t === p) {
                            ue >>>= 2, le -= 2;
                            break e
                        }
                        break;
                    case 2:
                        n.mode = N;
                        break;
                    case 3:
                        e.msg = "invalid block type", n.mode = Z
                }
                ue >>>= 2, le -= 2;
                break;
            case F:
                for (ue >>>= 7 & le, le -= 7 & le; le < 32;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                if ((65535 & ue) != (ue >>> 16 ^ 65535)) {
                    e.msg = "invalid stored block lengths", n.mode = Z;
                    break
                }
                if (n.length = 65535 & ue, ue = 0, le = 0, n.mode = D, t === p) break e;
            case D:
                n.mode = L;
            case L:
                if (pe = n.length) {
                    if (pe > ie && (pe = ie), pe > ae && (pe = ae), 0 === pe) break e;
                    r.arraySet(te, ee, ne, pe, oe), ie -= pe, ne += pe, ae -= pe, oe += pe, n.length -= pe;
                    break
                }
                n.mode = j;
                break;
            case N:
                for (; le < 14;) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                if (n.nlen = 257 + (31 & ue), ue >>>= 5, le -= 5, n.ndist = 1 + (31 & ue), ue >>>= 5, le -= 5, n.ncode =
                    4 + (15 & ue), ue >>>= 4, le -= 4, n.nlen > 286 || n.ndist > 30) {
                    e.msg = "too many length or distance symbols", n.mode = Z;
                    break
                }
                n.have = 0, n.mode = V;
            case V:
                for (; n.have < n.ncode;) {
                    for (; le < 3;) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    n.lens[Pe[n.have++]] = 7 & ue, ue >>>= 3, le -= 3
                }
                for (; n.have < 19;) n.lens[Pe[n.have++]] = 0;
                if (n.lencode = n.lendyn, n.lenbits = 7, xe = {
                    bits: n.lenbits
                // }, Ee = u(l, n.lens, 0, 19, n.lencode, 0, n.work, xe), n.lenbits = xe.bits, Ee) {
                }, Ee = u(l, n.lens, 0, 19, n.lencode, 0, n.work, xe), n.lenbits = xe.bits, Ee) {
                    e.msg = "invalid code lengths set", n.mode = Z;
                    break
                }
                n.have = 0, n.mode = B;
            case B:
                for (; n.have < n.nlen + n.ndist;) {
                    for (; ge = (ke = n.lencode[ue & (1 << n.lenbits) - 1]) >>> 16 & 255, ve = 65535 & ke, !((ye =
                        ke >>> 24) <= le);) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    if (ve < 16) ue >>>= ye, le -= ye, n.lens[n.have++] = ve;
                    else {
                        if (16 === ve) {
                            for (Te = ye + 2; le < Te;) {
                                if (0 === ie) break e;
                                ie--, ue += ee[ne++] << le, le += 8
                            }
                            if (ue >>>= ye, le -= ye, 0 === n.have) {
                                e.msg = "invalid bit length repeat", n.mode = Z;
                                break
                            }
                            Se = n.lens[n.have - 1], pe = 3 + (3 & ue), ue >>>= 2, le -= 2
                        } else if (17 === ve) {
                            for (Te = ye + 3; le < Te;) {
                                if (0 === ie) break e;
                                ie--, ue += ee[ne++] << le, le += 8
                            }
                            le -= ye, Se = 0, pe = 3 + (7 & (ue >>>= ye)), ue >>>= 3, le -= 3
                        } else {
                            for (Te = ye + 7; le < Te;) {
                                if (0 === ie) break e;
                                ie--, ue += ee[ne++] << le, le += 8
                            }
                            le -= ye, Se = 0, pe = 11 + (127 & (ue >>>= ye)), ue >>>= 7, le -= 7
                        }
                        if (n.have + pe > n.nlen + n.ndist) {
                            e.msg = "invalid bit length repeat", n.mode = Z;
                            break
                        }
                        for (; pe--;) n.lens[n.have++] = Se
                    }
                }
                if (n.mode === Z) break;
                if (0 === n.lens[256]) {
                    e.msg = "invalid code -- missing end-of-block", n.mode = Z;
                    break
                }
                if (n.lenbits = 9, xe = {
                    bits: n.lenbits
                }, Ee = u(s, n.lens, 0, n.nlen, n.lencode, 0, n.work, xe), n.lenbits = xe.bits, Ee) {
                    e.msg = "invalid literal/lengths set", n.mode = Z;
                    break
                }
                if (n.distbits = 6, n.distcode = n.distdyn, xe = {
                    bits: n.distbits
                }, Ee = u(c, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, xe), n.distbits = xe.bits, Ee) {
                    e.msg = "invalid distances set", n.mode = Z;
                    break
                }
                if (n.mode = H, t === p) break e;
            case H:
                n.mode = z;
            case z:
                if (ie >= 6 && ae >= 258) {
                    e.next_out = oe, e.avail_out = ae, e.next_in = ne, e.avail_in = ie, n.hold = ue, n.bits = le, a(
                        e, ce), oe = e.next_out, te = e.output, ae = e.avail_out, ne = e.next_in, ee = e.input,
                        ie = e.avail_in, ue = n.hold, le = n.bits, n.mode === j && (n.back = -1);
                    break
                }
                for (n.back = 0; ge = (ke = n.lencode[ue & (1 << n.lenbits) - 1]) >>> 16 & 255, ve = 65535 & ke, !(
                    (ye = ke >>> 24) <= le);) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                if (ge && 0 == (240 & ge)) {
                    for (be = ye, _e = ge, we = ve; ge = (ke = n.lencode[we + ((ue & (1 << be + _e) - 1) >> be)]) >>>
                        16 & 255, ve = 65535 & ke, !(be + (ye = ke >>> 24) <= le);) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    ue >>>= be, le -= be, n.back += be
                }
                if (ue >>>= ye, le -= ye, n.back += ye, n.length = ve, 0 === ge) {
                    n.mode = K;
                    break
                }
                if (32 & ge) {
                    n.back = -1, n.mode = j;
                    break
                }
                if (64 & ge) {
                    e.msg = "invalid literal/length code", n.mode = Z;
                    break
                }
                n.extra = 15 & ge, n.mode = W;
            case W:
                if (n.extra) {
                    for (Te = n.extra; le < Te;) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    n.length += ue & (1 << n.extra) - 1, ue >>>= n.extra, le -= n.extra, n.back += n.extra
                }
                n.was = n.length, n.mode = U;
            case U:
                for (; ge = (ke = n.distcode[ue & (1 << n.distbits) - 1]) >>> 16 & 255, ve = 65535 & ke, !((ye = ke >>>
                    24) <= le);) {
                    if (0 === ie) break e;
                    ie--, ue += ee[ne++] << le, le += 8
                }
                if (0 == (240 & ge)) {
                    for (be = ye, _e = ge, we = ve; ge = (ke = n.distcode[we + ((ue & (1 << be + _e) - 1) >> be)]) >>>
                        16 & 255, ve = 65535 & ke, !(be + (ye = ke >>> 24) <= le);) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    ue >>>= be, le -= be, n.back += be
                }
                if (ue >>>= ye, le -= ye, n.back += ye, 64 & ge) {
                    e.msg = "invalid distance code", n.mode = Z;
                    break
                }
                n.offset = ve, n.extra = 15 & ge, n.mode = q;
            case q:
                if (n.extra) {
                    for (Te = n.extra; le < Te;) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    n.offset += ue & (1 << n.extra) - 1, ue >>>= n.extra, le -= n.extra, n.back += n.extra
                }
                if (n.offset > n.dmax) {
                    e.msg = "invalid distance too far back", n.mode = Z;
                    break
                }
                n.mode = G;
            case G:
                if (0 === ae) break e;
                if (pe = ce - ae, n.offset > pe) {
                    if ((pe = n.offset - pe) > n.whave && n.sane) {
                        e.msg = "invalid distance too far back", n.mode = Z;
                        break
                    }
                    pe > n.wnext ? (pe -= n.wnext, he = n.wsize - pe) : he = n.wnext - pe, pe > n.length && (pe = n
                        .length), me = n.window
                } else me = te, he = oe - n.offset, pe = n.length;
                pe > ae && (pe = ae), ae -= pe, n.length -= pe;
                do {
                    te[oe++] = me[he++]
                } while (--pe);
                0 === n.length && (n.mode = z);
                break;
            case K:
                if (0 === ae) break e;
                te[oe++] = n.length, ae--, n.mode = z;
                break;
            case Y:
                if (n.wrap) {
                    for (; le < 32;) {
                        if (0 === ie) break e;
                        ie--, ue |= ee[ne++] << le, le += 8
                    }
                    if (ce -= ae, e.total_out += ce, n.total += ce, ce && (e.adler = n.check = n.flags ? i(n.check,
                        te, ce, oe - ce) : o(n.check, te, ce, oe - ce)), ce = ae, (n.flags ? ue : re(ue)) !==
                    n.check) {
                        e.msg = "incorrect data check", n.mode = Z;
                        break
                    }
                    ue = 0, le = 0
                }
                n.mode = X;
            case X:
                if (n.wrap && n.flags) {
                    for (; le < 32;) {
                        if (0 === ie) break e;
                        ie--, ue += ee[ne++] << le, le += 8
                    }
                    if (ue !== (4294967295 & n.total)) {
                        e.msg = "incorrect length check", n.mode = Z;
                        break
                    }
                    ue = 0, le = 0
                }
                n.mode = $;
            case $:
                Ee = m;
                break e;
            case Z:
                Ee = v;
                break e;
            case Q:
                return b;
            case J:
            default:
                return g
        }
        return e.next_out = oe, e.avail_out = ae, e.next_in = ne, e.avail_in = ie, n.hold = ue, n.bits = le, (n.wsize || ce !==
            e.avail_out && n.mode < Z && (n.mode < Y || t !== f)) && de(e, e.output, e.next_out, ce - e.avail_out) ? (n
            .mode = Q, b) : (se -= e.avail_in, ce -= e.avail_out, e.total_in += se, e.total_out += ce, n.total += ce, n
            .wrap && ce && (e.adler = n.check = n.flags ? i(n.check, te, ce, e.next_out - ce) : o(n.check, te, ce, e.next_out -
            ce)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === j ? 128 : 0) + (n.mode === H || n.mode ===
        D ? 256 : 0), (0 === se && 0 === ce || t === f) && Ee === h && (Ee = _), Ee)
    },

}


function my_f(e) {
    /*if (!(this instanceof f))
        return new f(e);*/

    this.options = o.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
    }, e || {});
    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
    0 === t.windowBits && (t.windowBits = -15));

    !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32);
    t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15);

    this.err = 0,
    this.msg = "",
    this.ended = !1,
    this.chunks = [],
    this.strm = new l,
    this.strm.avail_out = 0;
    var n = r.inflateInit2(this.strm, t.windowBits);
    console.log(n)
    // if (n !== my_a.Z_OK)
    //     throw new Error(u[n]);

    // if (this.header = new s,
    if (this.header = {"text":0,"time":0,"xflags":0,"os":0,"extra":null,"extra_len":0,"name":"","comment":"","hcrc":0,"done":false},
        r.inflateGetHeader(this.strm, this.header),
    t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = i.string2buf(t.dictionary) : "[object ArrayBuffer]" === c.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)),
    t.raw && (n = r.inflateSetDictionary(this.strm, t.dictionary)) !== my_a.Z_OK))
        throw new Error(u[n])
}

my_f.prototype.push = function(e, t) {
    var n, u, l, s, f, d = this.strm, p = this.options.chunkSize, h = this.options.dictionary, m = !1;
    if (this.ended){
        return !1;
    }
    // u = t === ~~t ? t : !0 === t ? my_a.Z_FINISH : my_a.Z_NO_FLUSH,
    u = t === ~~t ? t : !0 === t ? 4 : 0;
    // "string" == typeof e ? d.input = i.binstring2buf(e) : "[object ArrayBuffer]" === c.call(e) ? d.input = new Uint8Array(e) : d.input = e,
    d.input = e;
    d.next_in = 0;
    d.avail_in = d.input.length;
    do {
        /*if (0 === d.avail_out && (d.output = new o.Buf8(p),
            d.next_out = 0,
            d.avail_out = p),
        (n = r.inflate(d, my_a.Z_NO_FLUSH)) === my_a.Z_NEED_DICT && h && (n = r.inflateSetDictionary(this.strm, h)),
        n === my_a.Z_BUF_ERROR && !0 === m && (n = my_a.Z_OK,
            m = !1),
        n !== my_a.Z_STREAM_END && n !== my_a.Z_OK)
            return this.onEnd(n),
                this.ended = !0,
                !1;*/

        if (0 === d.avail_out){
            d.output = new o.Buf8(p);
            d.next_out = 0;
            d.avail_out = p;
        }

        n = r.inflate(d, my_a.Z_NO_FLUSH)
        if(n === my_a.Z_NEED_DICT){
            if (h){
                n = r.inflateSetDictionary(this.strm, h)
            }
        }
        if(n === my_a.Z_BUF_ERROR){
            if (true === m){
                n = my_a.Z_OK;
                m = false;
            }
        }
        if(n !== my_a.Z_STREAM_END){
            if(n !== my_a.Z_OK){
                this.onEnd(n);
                this.ended = !0;
                return false
            }
        }


        /*d.next_out && (0 !== d.avail_out && n !== my_a.Z_STREAM_END && (0 !== d.avail_in || u !== my_a.Z_FINISH && u !== my_a.Z_SYNC_FLUSH) || ("string" === this.options.to ? (l = i.utf8border(d.output, d.next_out),
            s = d.next_out - l,
            f = i.buf2string(d.output, l),
            d.next_out = s,
            d.avail_out = p - s,
        s && o.arraySet(d.output, d.output, l, s, 0),
            this.onData(f)) : this.onData(o.shrinkBuf(d.output, d.next_out)))),
        0 === d.avail_in && 0 === d.avail_out && (m = !0)*/

        if(d.next_out){

            if(0 !== d.avail_out){
                if(n !== my_a.Z_STREAM_END){
                    if ((0 !== d.avail_in || u !== my_a.Z_FINISH && u !== my_a.Z_SYNC_FLUSH)){

                    }
                }
            }
            else {
                if ("string" === this.options.to){
                    l = i.utf8border(d.output, d.next_out);
                    s = d.next_out - l;
                    f = i.buf2string(d.output, l);
                    d.next_out = s;
                    d.avail_out = p - s;
                    if(s){
                        o.arraySet(d.output, d.output, l, s, 0);
                        this.onData(f)
                    }
                }else {
                    this.onData(o.shrinkBuf(d.output, d.next_out));
                }
            }

        }

        if(0 === d.avail_in){
            if(0 === d.avail_out){
                m = true;
            }
        }


    } while (
        (d.avail_in > 0 || 0 === d.avail_out) && n !== my_a.Z_STREAM_END
        );

    /*return n === my_a.Z_STREAM_END && (u = my_a.Z_FINISH),
        u === my_a.Z_FINISH ? (n = r.inflateEnd(this.strm),
            this.onEnd(n),
            this.ended = !0,
        n === my_a.Z_OK) : u !== my_a.Z_SYNC_FLUSH || (this.onEnd(my_a.Z_OK),
            d.avail_out = 0,
            !0)*/

    n === my_a.Z_STREAM_END && (u = my_a.Z_FINISH);
    if(u === my_a.Z_FINISH){
        n = r.inflateEnd(this.strm);
        this.onEnd(n);
        this.ended = !0

        return n === my_a.Z_OK;
    }else {

        if (u !== my_a.Z_SYNC_FLUSH){
            return true
        }else {
            this.onEnd(my_a.Z_OK);
            d.avail_out = 0;
            return true;
        }
    }

}
my_f.prototype.onData = function(e) {
    this.chunks.push(e)
}
my_f.prototype.onEnd = function(e) {
        e === my_a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)),
            this.chunks = [],
            this.err = e,
            this.msg = this.strm.msg
    }


var o = {
    default: {
        inflate: function d(e, t) {
            var n = new my_f(t);
            debugger;
            console.log(n.push(e, !0))
            console.log(n.err)
            console.log(n.result)
            if (n.push(e, !0), n.err) throw n.msg || u[n.err];
            return n.result
        },
        /*Inflate: function f(e) {
            if (!(this instanceof f)) return new f(e);
            this.options = o.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
            }, e || {});
            var t = this.options;
            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -
                15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits >
            15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !
                1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
            var n = r.inflateInit2(this.strm, t.windowBits);
            if (n !== my_a.Z_OK) throw new Error(u[n]);
            if (this.header = new s, r.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" == typeof t.dictionary ?
                    t.dictionary = i.string2buf(t.dictionary) : "[object ArrayBuffer]" === c.call(t.dictionary) && (t.dictionary =
                    new Uint8Array(t.dictionary)), t.raw && (n = r.inflateSetDictionary(this.strm, t.dictionary)) !== my_a.Z_OK
            )) throw new Error(u[n])
        },*/

    },
    assign: function (e) {
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }

        for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
            var n = t.shift();
            if (n) {
                if ("object" !== (void 0 === n ? "undefined" : r(n))) throw new TypeError(n + "must be non-object");
                for (var o in n) i(n, o) && (e[o] = n[o])
            }
        }
        return e
    },
    Buf8: Uint8Array,
}



function f(e) {
    var t = void 0;
    var t = a.default.decode(e).slice(10);
    t = t.split("");
    var x = []
    for(var aa=0; aa<t.length; aa++){
       x.push(t[aa].charCodeAt(0))
    }

    t = x;
    t = new Uint8Array(t);
    t = o.default.inflate(t);
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



console.log(f(data))



// https://static.waitwaitpay.com/web/sd_se/index.html#/search/searchfor=vendor&keyword=%E7%B1%B3%E7%B2%89



