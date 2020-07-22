function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}


var window = new Object();
window.parseFloat = parseFloat;
window.parseInt = parseInt;
window.isNaN = isNaN;
window.decodeURI = decodeURI;
window.decodeURIComponent = decodeURIComponent;
window.encodeURI = encodeURI;
window.encodeURIComponent = encodeURIComponent;
window.escape = escape;
window.unescape = unescape;
window.eval = eval;
window.Date = Date;

document = new Object();
document.createElement = function (name) {
    return "<" + name + ">" + "</" + name + ">"
};
document.createElement.toString = function () {
    return "function createElement() { [native code] }"
};
window.document = document;

var navigator = new Object();
navigator.appCodeName = "Mozilla";
navigator.appName = "Netscape";
navigator.appVersion = "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36";
navigator.cookieEnabled = true;
navigator.connection = {
    'connection': null,
    'effectiveType': "4g",
    'rtt': 50,
    'downlink': 10,
    'saveData': false
};
navigator.deviceMemory = 8;
navigator.hardwareConcurrency;
navigator.doNotTrack = null;
navigator.language = "zh-CN";
navigator.languages = ["zh-CN", "zh"];
navigator.onLine = true;
navigator.platform = 'Win32';
navigator.product = 'Gecko';
navigator.productSub = '20030107';
navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36";
navigator.vendor = "Google Inc.";
navigator.vendorSub = "";

plugins = [
    {
        'description': "APlayer III ActiveX hosting plugin for Firefox",
        'filename': "npaplayer.dll",
        'length': 1,
        'name': "APlayer ActiveX hosting plugin"
    },
    {
        'description': "ASUS Update",
        'filename': "npAsusUpdate3.dll",
        'length': 1,
        'name': "ASUS Update"
    }
];

any_plugins = true;

if (any_plugins) {
    for (var i = 0; i < 10; i++) {
        var p = {
            'description': randomString(parseInt(Math.random() * 20)),
            'filename': randomString(parseInt(Math.random() * 20)) + ".dll",
            'length': 1,
            'name': randomString(parseInt(Math.random() * 10))
        };

        plugins.push(p)
    }
}

navigator.plugins = plugins;

window.navigator = navigator;

location = new Object();
location.port = "";
location.protocol = "http:";

window.location = location;

history = new Object();
history.length = 5;
history.scrollRestoration = "auto";
history.state = null;
window.history = history;

screen = new Object();
screen.availHeight = 1040;
screen.availLeft = 2560;
screen.availTop = 0;
screen.availWidth = 1920;
screen.colorDepth = 24;
screen.height = 1080;
screen.pixelDepth = 24;
screen.width = 1920;
screen.orientation = {
    angle: 0,
    onchange: null,
    type: "landscape-primary"
};

window.getComputedStyle = function () {
    debugger
};

window.screen = screen;

window.parent = window;

window.top = window;

window.self = window;
window.window = window;



var url1 = "https://c.dun.163yun.com/api/v2/getconf?id=5a0e2d04ffa44caba3f740e6a8b0fa84&ipv6=false&runEnv=10&referer=https%3A%2F%2Fdun.163.com%2Ftrial%2Fsense&callback=__JSONP_tfe4b56_22";

var url2 = "https://c.dun.163yun.com/api/v2/getconf?id=5a0e2d04ffa44caba3f740e6a8b0fa84&ipv6=false&runEnv=10&referer=https%3A%2F%2Fdun.163.com%2Ftrial%2Fsense&callback=__JSONP_wp1u53a_23";


"id: 5a0e2d04ffa44caba3f740e6a8b0fa84\n" +
"ipv6: false\n" +
"runEnv: 10\n" +
"referer: https://dun.163.com/trial/sense\n" +
"callback: __JSONP_tfe4b56_22"


"id: 5a0e2d04ffa44caba3f740e6a8b0fa84\n" +
"ipv6: false\n" +
"runEnv: 10\n" +
"referer: https://dun.163.com/trial/sense\n" +
"callback: __JSONP_wp1u53a_23"

var token1 = "9ca17ae2e6fecda16ae2e6eeb5cb528ab69db8ea65bcaeaf9ad05b9c94a3a3c434898987d2b25ef4b2a983bb2af0feacc3b92ae2f4ee95a132e29aa3b1cd72abae8cd1d44eb0b7bb82f55bb08fa3afd437fffeb3"
var token2 = "9ca17ae2e6fecda16ae2e6eeb5cb528ab69db8ea65bcaeaf9ad05b9c94a3a3c434898987d2b25ef4b2a983bb2af0feacc3b92ae2f4ee95a132e29aa3b1cd72abae8cd1d44eb0b7bb82f55bb08fa3afd437fffeb3"

var my_id1 = "5a0e2d04ffa44caba3f740e6a8b0fa84"

console.log(token1===token2)
console.log(my_id1.length)

console.log(Math.random().toString(36).slice(2,9))

var a = {
    "timeout": 6000
}
var i = 10

var l, p, f = Math.random().toString(36).slice(2, 9), h = a.prefix || "__JSONP", d = a.name || h + ("_" + f) + ("_" + i++);

// console.log(l)
// console.log(p)
// console.log(f)


/*
* 下面是网易易盾
* */


function W() {
    // H(),
    window[me] = null,
    window[be] = null;
    var e = !0
        , n = {
        // v: u[180]
        v: "v1.1"
    }
        , h = I();
    console.log("初始化h："+h)
    h && (n[s[6]] = h),
        h = null,
        n[u[61]] = q;
    // var p = (new window[s[164]])[u[132]]() + de
    var p = (new window["Date"])["getTime"]() + de
        // , _ = p + t[302] * t[142] * t[142] * t[68] * t[297] * t[20];
        , _ = p + 1000 * 60 * 60 * 24 * 365 * 5;
    n[u[86]] = $(t[13]) + p + $(t[13]);
    try {
        var w = new m({
            b: ye,
            a: pe
        }).get();
        null != w && void 0 != w && w.length > t[9] ? n[u[135]] = w.join(l[35]) : (n[u[135]] = M(l[42], t[37]),
            n[u[112]] = l[43],
            e = !1)
    } catch (T) {
        n[u[135]] = M(l[42], t[37]),
            n[u[112]] = l[43],
            e = !1
    }
    try {
        var S = h = x(n)//S其实是等于 对象n的字符串形式，如："{'v':'v1.1','fp':'25662623634134,7139997656248','u':'D181595319310996V4r','h':'dun.163.com'}"
            , n = se;
        if (null == n || void 0 == n)
            throw Error(u[73]);
        null != S && void 0 != S || (S = l[0]);
        var E, w = S;
        E = o(null == S ? [] : d(S));
        //d(S) 是一个将 字符串S进行URL编码，然后再转换为ascii码，最后返回一个数组，一个字符串作为一个元素，其实最后返回的数组是可以还原字符串的.
        //再使用o()函数将其转换为指定的长度的加密后的数据
        var R = d(w + E)
            , k = d(n);
        null == R && (R = []),
            E = [];
        for (var C = t[9]; C < ae; C++) {
            var O = Math.random() * t[295]
                , O = Math.floor(O);
            E[C] = b(O)
        }
        var X, k = r(k), k = y(k, r(E)), C = k = r(k);
        if (null == R || void 0 == R || R.length == t[9])
            X = f(ie);
        else {
            var L = R.length
                , V = t[9]
                , V = L % ie <= ie - oe ? ie - L % ie - oe : ie * t[10] - L % ie - oe
                , O = [];
            c(R, t[9], O, t[9], L);
            for (var B = t[9]; B < V; B++)
                O[L + B] = t[9];
            c(j(L), t[9], O, L + V, oe),
                X = O
        }
        if (L = X,
        null == L || L.length % ie != t[9])
            throw Error(u[83]);
        X = [];
        for (var Y = t[9], F = L.length / ie, U = t[9]; U < F; U++) {
            X[U] = [];
            for (var z = t[9]; z < ie; z++)
                X[U][z] = L[Y++]
        }
        Y = [],
            c(E, t[9], Y, t[9], ae);
        for (var K = X.length, G = t[9]; G < K; G++) {
            var J, Q, Z = X[G];
            if (null == Z)
                Q = null;
            else {
                for (var ee = b(t[92]), F = [], te = Z.length, ne = t[9]; ne < te; ne++)
                    F.push(v(Z[ne], ee));
                Q = F
            }
            var re;
            if (F = Q,
            null == F)
                re = null;
            else {
                for (var ce = b(t[91]), U = [], je = F.length, ve = t[9]; ve < je; ve++)
                    U.push(v(F[ve], ce--));
                re = U
            }
            if (F = re,
            null == F)
                J = null;
            else {
                for (var ge = b(t[110]), U = [], _e = F.length, we = t[9]; we < _e; we++)
                    U.push(g(F[we], ge++));
                J = U
            }
            var Te, Se = y(J, k);
            if (F = Se,
                U = C,
            null == F)
                Te = null;
            else if (null == U)
                Te = F;
            else {
                for (var z = [], Ee = U.length, Re = t[9], ke = F.length; Re < ke; Re++)
                    z[Re] = b(F[Re] + U[Re % Ee]);
                Te = z
            }
            var Se = y(Te, C)
                , Ce = i(Se)
                , Ce = i(Ce);
            c(Ce, t[9], Y, G * ie + ae, ie),
                C = Ce
        }
        var Oe;
        if (null == Y || void 0 == Y)
            Oe = null;
        else if (Y.length == t[9])
            Oe = l[0];
        else {
            var Ie = t[13];
            try {
                for (var K = [], $e = t[9]; $e < Y.length; ) {
                    if (!($e + Ie <= Y.length)) {
                        K.push(a(Y, $e, Y.length - $e));
                        break
                    }
                    K.push(a(Y, $e, Ie)),
                        $e += Ie
                }
                Oe = K.join(l[0])
            } catch (Xe) {
                throw Error(u[64])
            }
        }
        h = Oe
    } catch (xe) {
        h = x({
            ec: l[44],
            em: xe.message
        }),
            e = !1
    }
    h = h + u[7] + p,//这个就是浏览器指纹
        A(le, h, e, _),
        D(le, h),
        P(h),//这个函数就是更新浏览器指纹的
        A(ue, fe, e, _),
        D(ue, fe),
        N(fe),
    window[u[77]] && window[u[77]](W, he)
}

W()

"E09yXNtBn2bUnPi+bmBTNzq16hn7rabc7QfZ41id\\Rj6ztpxxTVtrSeroiw8KoHxcJYr4vdefsj+3ojBq8cYexraVLJjCiJ\\I0a9poEppq6\\4VLJfSlw83y8Kby3I39youeHGCw10283UAWdSZ1vb\\zsrdoqbyvTBEEqDR9YrkV9Yy/i:159538965841"



