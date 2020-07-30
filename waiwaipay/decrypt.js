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

var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    p = /[\t\n\f\r ]/g;


var my_inflate = function (e, t) {
    var n = new f(t);
    if (n.push(e, !0),
        n.err)
        throw n.msg || u[n.err];
    return n.result
};

var my_decode = function(e) {
    var t = (e = String(e).replace(p, "")).length;
    t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
    (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) && f("Invalid character: the string to be decoded is not correctly encoded.");
    for (var n, r, o = 0, i = "", a = -1; ++a < t; )
        r = d.indexOf(e.charAt(a)),
            n = o % 4 ? 64 * n + r : r,
        o++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * o & 6)));
    return i
}

function f(e) {
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

console.log(f(data))



// https://static.waitwaitpay.com/web/sd_se/index.html#/search/searchfor=vendor&keyword=%E7%B1%B3%E7%B2%89



