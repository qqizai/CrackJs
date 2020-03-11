var CryptoJS = require("C:/Users/Administrator/AppData/Roaming/npm/node_modules/crypto-js");

const askM5e1s3RNQ = "aoSJCSb2siC4CRW8";
const asimiSNsUeVG = "bbfezGfJWMNrLRvC";
const askJ1w39vTPm = "aMmoMdZug9PXB17u";
const asiu5g3841N6 = "bwuBhleQDAr194a7";
const ackBZ2CVnykN = "dtNUERO2jr55ABbM";
const acim4fVttr1t = "f2eyVR6OsE9ohCxo";
const dskktCJvwqzM = "hD9apg8UcihwuijL";
const dsiwBHe3B6XJ = "xBAcJwABW3wZ95KO";
const dskpiKO7ojVA = "hi1GbaSfF1Vadkre";
const dsirdAcrpwoA = "xh0hV8HaKCzNd301";
const dckp9hdBDfQz = "oyqlYsSaNHGOz8qt";
const dcilojPdzC9E = "ps2DNV166bT2ILz0";
const aes_local_key = 'emhlbnFpcGFsbWtleQ==';
const aes_local_iv = 'emhlbnFpcGFsbWl2';


var AES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(16, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(0, 16);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.AES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};

var localStorageUtil = {
    save: function(name, value) {
        var text = JSON.stringify(value);
        text = BASE64.encrypt(text);
        text = AES.encrypt(text, aes_local_key, aes_local_iv);
        try {
            console.log(name, text)
            // localStorage.setItem(name, text)
        } catch (oException) {
            if (oException.name === 'QuotaExceededError') {
                console.log('超出本地存储限额！');
                // localStorage.clear();
                // localStorage.setItem(name, text)
            }
        }
    },
    check: function(name) {
        console.log(name)
        return "测试"
        // return localStorage.getItem(name)
    },
    getValue: function(name) {
        // var text = localStorage.getItem(name);
        var text = {};
        var result = null;
        if (text) {
            text = AES.decrypt(text, aes_local_key, aes_local_iv);
            text = BASE64.decrypt(text);
            result = JSON.parse(text)
        }
        return result
    },
    remove: function(name) {
        localStorage.removeItem(name)
    }
};

function Base64() {
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        this.encode = function(a) {
            var c, d, e, f, g, h, i, b = "", j = 0;
            for (a = _utf8_encode(a); j < a.length; )
                c = a.charCodeAt(j++),
                    d = a.charCodeAt(j++),
                    e = a.charCodeAt(j++),
                    f = c >> 2,
                    g = (3 & c) << 4 | d >> 4,
                    h = (15 & d) << 2 | e >> 6,
                    i = 63 & e,
                    isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64),
                    b = b + _keyStr.charAt(f) + _keyStr.charAt(g) + _keyStr.charAt(h) + _keyStr.charAt(i);
            return b
        }
        ,
        this.decode = function(a) {
            var c, d, e, f, g, h, i, b = "", j = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < a.length; )
                f = _keyStr.indexOf(a.charAt(j++)),
                    g = _keyStr.indexOf(a.charAt(j++)),
                    h = _keyStr.indexOf(a.charAt(j++)),
                    i = _keyStr.indexOf(a.charAt(j++)),
                    c = f << 2 | g >> 4,
                    d = (15 & g) << 4 | h >> 2,
                    e = (3 & h) << 6 | i,
                    b += String.fromCharCode(c),
                64 != h && (b += String.fromCharCode(d)),
                64 != i && (b += String.fromCharCode(e));
            return b = _utf8_decode(b)
        }
        ,
        _utf8_encode = function(a) {
            var b, c, d;
            for (a = a.replace(/\r\n/g, "\n"),
                     b = "",
                     c = 0; c < a.length; c++)
                d = a.charCodeAt(c),
                    128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(192 | d >> 6),
                        b += String.fromCharCode(128 | 63 & d)) : (b += String.fromCharCode(224 | d >> 12),
                        b += String.fromCharCode(128 | 63 & d >> 6),
                        b += String.fromCharCode(128 | 63 & d));
            return b
        }
        ,
        _utf8_decode = function(a) {
            for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length; )
                d = a.charCodeAt(c),
                    128 > d ? (b += String.fromCharCode(d),
                        c++) : d > 191 && 224 > d ? (c2 = a.charCodeAt(c + 1),
                        b += String.fromCharCode((31 & d) << 6 | 63 & c2),
                        c += 2) : (c2 = a.charCodeAt(c + 1),
                        c3 = a.charCodeAt(c + 2),
                        b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3),
                        c += 3);
            return b
        }
}


var BASE64 = {
    encrypt: function(text) {
        var b = new Base64();
        return b.encode(text)
    },
    decrypt: function(text) {
        var b = new Base64();
        return b.decode(text)
    }
};

var DES = {
    encrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.encrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString()
    },
    decrypt: function(text, key, iv) {
        var secretkey = (CryptoJS.MD5(key).toString()).substr(0, 16);
        var secretiv = (CryptoJS.MD5(iv).toString()).substr(24, 8);
        secretkey = CryptoJS.enc.Utf8.parse(secretkey);
        secretiv = CryptoJS.enc.Utf8.parse(secretiv);
        var result = CryptoJS.DES.decrypt(text, secretkey, {
            iv: secretiv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8)
    }
};

function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | (~d)), a, b, x, s, t)
}

function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t)
}


function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t)
}

function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
}

function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF)
}

function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
}

function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t)
}

function rstr2binl(input) {
    var output = Array(input.length >> 2);
    for (var i = 0; i < output.length; i++)
        output[i] = 0;
    for (var i = 0; i < input.length * 8; i += 8)
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
    return output
}


function binl_md5(x, len) {
    x[len >> 5] |= 0x80 << ((len) % 32);
    x[(((len + 64) >>> 9) << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd)
    }
    return Array(a, b, c, d)
}

function binl2rstr(input) {
    var output = "";
    for (var i = 0; i < input.length * 32; i += 8)
        output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
    return output
}

function str2rstr_utf8(input) {
    var output = "";
    var i = -1;
    var x, y;
    while (++i < input.length) {
        x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++
        }
        if (x <= 0x7F)
            output += String.fromCharCode(x);
        else if (x <= 0x7FF)
            output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
        else if (x <= 0xFFFF)
            output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
        else if (x <= 0x1FFFFF)
            output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F))
    }
    return output
}

function rstr_md5(s) {
    return binl2rstr(binl_md5(rstr2binl(s), s.length * 8))
}

function rstr2hex(input) {
    try {
        hexcase
    } catch (e) {
        hexcase = 0
    }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for (var i = 0; i < input.length; i++) {
        x = input.charCodeAt(i);
        output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F)
    }
    return output
}

function hex_md5(s) {
    return rstr2hex(rstr_md5(str2rstr_utf8(s)))
}


function getDataFromLocalStorage(key, period) {
    if (typeof period === 'undefined') {
        period = 0
    }
    var d = DES.encrypt(key);
    d = BASE64.encrypt(key);
    var data = localStorageUtil.getValue(key);
    if (data) {
        const time = data.time;
        const current = new Date().getTime();
        if (new Date().getHours() >= 0 && new Date().getHours() < 5 && period > 1) {
            period = 1
        }
        if (current - (period * 60 * 60 * 1000) > time) {
            data = null
        }
        if (new Date().getHours() >= 5 && new Date(time).getDate() !== new Date().getDate() && period === 24) {
            data = null
        }
    }
    return data
}


// 加密参数位置
var pivCqbS1Zrr66qy6 = (function() {
        function ObjectSort(obj) {
            var newObject = {};
            Object.keys(obj).sort().map(function(key) {
                newObject[key] = obj[key]
            });
            return newObject
        }
        return function(method, obj) {
            var appId = '4b33e1ddc2bb8253a1692c94f1f015d0';
            var clienttype = 'WEB';
            var timestamp = new Date().getTime();
            var param = {
                appId: appId,
                method: method,
                timestamp: timestamp,
                clienttype: clienttype,
                object: obj,
                secret: hex_md5(appId + method + timestamp + clienttype + JSON.stringify(ObjectSort(obj)))
            };
            param = BASE64.encrypt(JSON.stringify(param));
            param = AES.encrypt(param, ackBZ2CVnykN, acim4fVttr1t);
            return param
        }
    }
)();

var resp_data = "OFRZZVhiYnJtVW8vVDJJNzlqand0Nm9EM0VvQjBDY1o2dkdDTExpY1h3eDNhK3o2eUtYQVJsZC9sVXVVdnpLeVpyVlB6QkN3U2VQQ2NBQ01XYUM2TlFabitBT2ZnaFI0UEdsa1kxN0dxemZKbXF0THRkMk00TlRSL3RzTXEzR3dNU2pCVG1aYmJDelFhWkRzR0hZQ1JNQXVOY05RT1Z5WENVM0xWb1pzS2ovVGxqb0Z1SWpHWWxXUkd4dWhEOFppUzFRbWd3SVJNRGV1aENoQ3ZOeEVLekYwLy83V1BBNlhFS20vZHhMZUp0cUgyVnZZODZhSXZDVGQ1OXY4YlVPT3h5Y2d0ZkhYdDYveVorZEFEazdxek5TMmRuMUNlZ2huejFybCt4Y3dLMkQ3NHdJNnFabnhnbHphTzZIUHVtQ2pDTlJqN0JUV2hjVTlQVk1Ib29hd2prQlhtdUVmQmJMU3lxOUhzTkxEQ3FiMHd3QjBRUmc4QXQzN0FCcDZOM0dBVk1YUCtZL3lCMzYzR1Bjbk9lY3VUdHVlQnJTZ0o2aGEzdUVwWEM2cmpmZWYyRFlOWlMzdTlES3NOR1hwU0luTnlTQ0NEWmt3WTlTcHh2S3cxVHJXaS9oU3o1bWZMbWZUR3hyWWJneXNncXBvYWpsUkgvZWdRcitLUWkrZUlZN3FZR1NRMHVyOXVtVmNrWjg5eDVucWlTVjlya05DbUdUNzZ3Uk9mTmlZTXNScCswM0dQSEppZ3gzUGdGYnd1M2xtQUNNbmg1dVhXb2NJRXZOV1g5NXJXMG1lZ2o2YlBLVzI4VDBJTVJqTGpmcHVRckhrZzd5YWVPS1M2NmhmTGdIdFNiaHhEZzRKT0ZOOGJZUnBtdkZHeHIrbGlGUVI1RjFQYXYrQ2s4Vlc4eDhoUktqSE9wNHRNK2hsZG1wY1ZWVGRlV3JzNlM0eWhodmhqc3RLcDJWUThSSzdVQXNPNHJndEdzRGJVMmRUdkw5amM2a1FOMGhPWUlMVXdCdFMwLzNUcmhGUTZXTk5jZEU0N1dldFRtKzNaMStXaW9hbE9nb09vd0RwRDNILzhiaFNuQUhYbTc0TDRlYXoxSTEvZTZjYm4wK0lrYUlyalpMNEFpeDY5NlBobE8xVVRBQUtwVnBZVHZ2eFZKdk5kQTdzMWJBM3BPdFNvL21NbEVUVzg3djZ1ZlNxTjBkblVGRC9HMzZKS0dNQ3RtUEJCUVdjemNsM0VkbTlEaWRuYkFZY29GbWhMUHZsdmZzdUNwWFFiOGpVdSt2djViV01FZGQ5c1ZGQzJBdzQyRXNkWDRldmM4bVJqbmlPdUlJNEREVkZHQjEvVWdjVzQ3L3ZwTk03R2RvbzU4VUxYcCtBcWlML0VFd0llY1JQZzFZK0JGUy9aY3NIQ2IxSmlERFBLUTBDSnZGYmZiNDZLSDE1THJURE9scmpBdk45N0orNTgxU2JRSmxNNDhVUlNGa25BUlhJK0Jpdk9nMEczakIwejZoQXJHSi9nanI2UzFMTEJrbnZhaFNDOUpzMzJrOTBtTjlSMHRGaFIrcUJVU3ordmtoYjNGazBwZzJBME14VS8xcVBHTlBRTC90TEdUU1Arc1hWS1AxMnFta2sydER3azgxdmtqVHA5SDRXYU92TnlmcDdRK0t0U0J2MFFUdittT1N6L2s5Qk1kU0JDWWpVREZRQ1JWMlFZd0owQzlmZFg3TlZ5NURaOWdMb3Y0ZnpkUDFtZ3g2b2V6aGF5WjN3Y3FrVUEvbUZTT3Rjcy80enE4cUtnSnRMcG8zWlp6cW1GRkVoa2V3ZXJ3K3NoQnBQUm1IaXVKZDlkdHd3dVUvTWxabklibU1ZcmZ1dkFDWmdRNmgzWGpnRnAwQmpoWnYvL3JIcWZ1bXFTVkJBekhUUFRaWHJncy9hTTBwTTJwczA5dk1NQnBaaTg2MlVtUno1YWtzUktBT3BLbDZIZ2gyUTN2eE9NYm9EblhlWkUyS2Y0WVBHMVBuTFdMeTNKMWFQSUJJNlF3bnJ0VWFLRVRMamo1Ti9NZDRWSUlDdzlaaWtqV2VvYUNxYnk5UHdUeXJJbDJvdXU4cWRRMEF4Wmdsd1M3bzRhNFBUdVpCVTB0UEExRUpCaURjMWszNkVVS2YrbWJ3d0lVbzJ3empaRUlvZ2g0bytNd0NiYXFaN1JGQWdRUktBS0ZUdFZoTzZveWpKWS84RGJFSDNzZGd2eEhpSE4rMFlUa0hCM1VhNkFiZUc4dUpNaHl4ckZkYkQzVS81YzRiS096aEtXcjdLbldzd21zNEx4dm5SekM1a05pM2NqT1VURzhjc3k5TmhvcDJ2STlxdG4wL0g5emxEVFFTNzRDKzVXOTYwY2lXVkxxMnB4cU83dEFTdlVObCswV1J2a3FDSGFremxPWmQzTlZwbURUYXF3dzZoZUZSbWlBMm9HUUs5bGxXaXl1NjFtbi96bHljeEJRaCtnMldBcEJYNG5sYTNsdEp5U0QzNnozbXR1bkszWFAwc29DRDRQVEcxSVZvL1RUektQNEF1R2d4MDdlSmY0YnR4UXZhTUFsUHYvVXJmOFBZa2ZRZHY2WExSVjFQdXpFcEJidEZHSXB2eTNsVTgrL3FxMDZIT0hWUU4rL1cwTjZ6QnlkcWpORnlZRFpNYjZULzRkWG5iZ1FDc3QzZEZvYy8rcDNHbDl1cXdva1ZNbi9UZUFwaTZVaGswVWpETHZDZkptMTduVTFJRlc4bEhidUdMRHRtMUw0bTNsZWE1cE9BbFZpN0doRHFTZmVYcE5BRmlnZWoxT3NHRXpBZGxwZTJuUjlCM3BySldsRFl1dWUyK0JkdnpaeTZHQmdnZjd2VEZ3aFdNaVJ1eWlDdzBBZWdzQnhReU54UGlzZmZKQW1wUXo4NERqR00yR0VGaXlzNU5qV2I2OVlCN2VyMlhIYkJUNUlyall4d2dobFgydm40MzB0MzU4MzIxVWJCSFdLamJ0NGZHc0pRQ0Jnb3hFYkRRT3B5YjJ1dlBTanFYa0FjNDVzQjBVaVE1T1gweFhCUUNCU25pTUtTVUs2TWYrcVJsbERwdjFzV09wR1NpRXdqSW9RRnNkcFRlcXRoVGNOUkd5V1Fqam8ycDAxMU5lZktDNnhsRWJ2WWhYTy9ieExTTFhib3NGQ3BxcjBSbWdJalVDREFnMlJMNFM1VThCOHVBWXVjL3lNaGtqb0xuTis0Z1RNb3V0Y3pWNG5TYU1jYTFjeUQwaHBMODNPMVVxSkZtTWl2L0lMeXdCb2lvOW1HRlI1SGVKaW9vd3RQRyt3S2tUS0RUOVRHSEp4RzhIK3M3eGJUU3BxTHpjM2ZteUFOamRqeDRjYVI1UWtNMzBna3FOUjFFR0lwUGFpb3pkbjNCVE82azIrSlI0aHN4eUg0MGJpRTZicGNNOEppUVNQM2xFRDlTSEFjYXNjN20weGRhNi9QdDFOQVhGTnJjRm9xQzQzbmhFZGxwRytUZWlONDJZNVZtcU1zeEIwUzY1Rk9Va2xXWjJWTVh1UmtXTnQ4UjA5TmU5NVlORnMwV1JEa0dMQnV5UU54U2htQzk3RXpFTlhjQWdISktCQmdJRklTczh2cDA3SkhjUVdLTGw1dFdlN3FrbUk4c3dwTTNYMXpHWERoUVMrV25FTlNwWitpKzk3THM0Rm1BWkVIaEg5Zmd0Nk9UaUZ5eWMxUUg5d0tsbUkzcVpTTlExZHd3a2RnWThiOVlMNHVMSUllbXlyME43M2cycFFNc1QzcEpNOFBnS1I2aTREVlJNNVc4VG5qVVhXSUNLdXlqUUhMcmx4T1hKWDRpZmVGOXJHWVQ5cE4rMXNxa2dMVDNjV3ovak5RZFdhVm9uOTdkd1dQRTV0aFNMZjcrVkxiUm5wUE9hMmhaaFJTcjV4d2dJWHU2L2t2OUdxK2RSQVhxY3h3bzV1a1RPbitYTzRmcHZxVFAvcHJSRmJWNVdhUWw0dUlVMXI1R2VoZkZVSzY5ckVzd0ZaQ2pQMkNma2p5NlhFNjF1bGVNdkV3Ny93MjZQSTJKcmhVZDNCZVR1NGlDVDJhSFNxYW1GcjVucFl4OXpxeHJlVnc5WkhKeERaeHBTYkFuQ0dmTlU4SkZtdEpmRUVRQjFLa04yUWlNT25yQmJFMWdvYUxuRDhxUVdaNWQvakhVVlBaQ2NOVTVMZmMzSVRIOXlybXQxazZCNkFwdzZZMGRqWVdibGtRZEpVQ291MTVVTktqS2kwUUNrVG9hMklwMlphWVdGQkh1MG5rbTVQdjJKeHh5UUxpOENWNDhjcVo0K1BYYU5SQThjcnV6Y2ZYUGtXYWE1QytaV01jMld0WGpIOUdDdExLemVtSEdJcmRUUERLclU4UXBNaHJKK3ZrNTFVTmc4UEZ4RXhtdjkzSU53TWxsMTVMN3cvMVY1Mmd3VnhkSHhjRDc1UExTNG44Q2k3Z1laVlVDZmlaUE8rZDhzbUUweFR0amJ5eHQvQ0ZVU0lkUXhXWXltMGQ0c1U2NVc5aVp5Q2FILzZJQmRrd21lNzVGaWNWb29hYXNqK09NSnNmVXV0Q2hpTElMRlN0ZlBxNXpZNHhhYjQ3cGNHRlN4Z0NSNDNjR3JoWTc4dmpPVTJuSHhxTDFMdk1sKzZuQUpwT2N2MklxN3VYMFhuRTAvcS80elhMQ0U3VWtFTGt5citPb3gwSkh5R0RHS01mMCtuRlEwazJBQUJFdG9GVG0wQVh3Q29QcGxDWWI1UU5hQUZvZWJMMFZ3RTlJZkJ6K29zbmJ3UmpyUUJ6MUNUNGZGNCt1ZEEycmNPUjhKTWx5eGs2bVdUbW5WYzJHMWFSSmZ6MTJvRXREenpqNk1aTi9lMzVoUVRtQXVpdGQyNjdnUmdJQ0E5S1h6VGF2OWRVVWQrY0NFZkE5U3BHb2x4ZlNQeHpzc1pDM1Y3Ry96eVJzeU9yUC9nT3JCTXM1OHpvSWV2YmovR0V1UTA0VHlxVWcvRXN4eXJZSUFQUEV0OUhHZ3E5dmFkb24yVDNLUTd6b0x0OFZZRERxNHllemZlN2ZGSnB3YTd5b2hlTTJOWCtKOGkralMrVjBDaTljQ0plU3loeURXUzEyaEhNU3ZKV1YrZVJFM25uT2VsUndGK3ltaXhKM3UwRzgyKzh5eE5jdUo3SWNlUUFOVWI1R3N2dmpUL1FxTXB1b3RoNjhlZjlzaFhJUEd4QS9jMDdZSEhMUkFlYWFiVzdGbFlHaStJZURoMnRDalhxN1luL3lpTmtEcHU4ZjNwc2Flcm9hRXJrMCsxOTY1UkF1R2VWTXM0UUJvazkycTcrT0t1cHVpanRGSEJITHZ2QmNaa2ZWYmFWbjdRYUJBU0IyUVZCOTFYbGpKM2R6QnBUdnY2UlhtMHl6LzQyU2pnSTVFWEFFeGFHU1J4UTNHUHNoenZsdjZ3MnR0TU0yK1R0OFJsY3NnaFp3SzFMV1JpdU9hRHo3dmFEa3VTaHg5OGdlSmppZnZackxWVmNmenl5RFpFeHg5ak1lQ0tCZllMVjY1alZnd2FnR0FLVTFLcWlWWktlRFp3RkxIU1d2emppM3lyU3FqdUZoVnZOdlZXcCtNZkM1S1orc3Q4bG9kckJIUklidXlOSVVtMEFJMFZiUGswdnRPQ0JPVXFHaHFlMWhHUXVYZlR3c24zUlJudE9ESGlFblE1SXBhUC9abHNYaFM2Wk5Db1JwUnhmRWhHTGJxZStZWDlNVXFNaFRqRHhrUUFJOGEyYVRxRnVHZHZ1MHhuN1VlSjZkVWZEQ0pTeENFNUpZSXVuNkdpdFhHOEYzRVAreDVYeDNtOFhyVmhjckgwMllJZXNhNGlTVUVyMndRSDVuUWNrZW9HYmo1TEN5aDlMTjA0cFNtVG9NR1NPUzMwd0w3dVVlNnlKSERPRFpYdDlDVWQ1bzM4KzU4eFhSODJGMWk3V0dXcWp4RjhPVTFUZFVuVDRSRmRoSUZEdFZWMWV3bThudmRBWDR5Slg2RHJQREtXVGQ2RUhxT3N3YnhIRzJ5cFhKK1FlRTk2MDduSklubGF0QWh4VnhlQkwvdkg0Zk8vNDhuTVJkWDhIODhGZ05rWCsrZlg2a3hDSWZmbTk5Uk5XdTFXM0F2UHFqZGRrY1FPamVTS3BnNllpem1qV2s2bHVsdGt4dlg0eDU2bGdJYVV6RzNIMm8yMGphK1BMbytzSVgyU2ZxRzZzNER4QkdVUFdMMHpUT05GWDNoeFpGeTVDRDZBdmprd0M1Yks5aysveG5vNmJnd21nTk11UFhyS0llaERNclo5bU1GZFF2eXhOR1NrVWdEWU16THk4R3NOYlNPM2VEcjdiRHlXMWlsT1ovSEhpdjBLSjlsOG83dThFdkQvNmtuL3VSU2VIbm0zN2Z6TURoSmtEYUNsTzlnUXRmQlM1ZStvWUpuOG96djFGSzhsRnFaUm0zVlBHQlRLbUZHb2ltWFFXc0NkQ2VVaWVJaFU2MldMRE44V2orMU5zblZnbGFMODFxU0R5Mm9VUU1QV2p1aDJuSXBpS2s1aTFDbmFwcEhFVHZxREZxVVltUzExK0kzNDJUYmNQMHVlOTZaVXdxMWpyNXh3ODNRODJ3eXRWN2V6ZjR2RHZkcnJibW92K0cwUDdJZjczVTBudjgwYzRYWjdid01ESWh1bUdSRFlId2t3emtiUUM5dEYzdUhSbFZES2JsMjBXbDlJTnlBQUxDdno3b05GNlp3cFlPb08yUHVPakFsOGVFZDNsaUpaeVUzSGJYbTYxbmVLY3NwRzkvbko0Z0twejJmc3VQakF2WFhzVkZrNkc5RFYxSDh2VEJFcTVUYWt1bFZQYnk2MWJteEl1TEJRZE1Mb3c3bUp4V1BXbCtFdHpwbzNjZ2NCRVVQT0EwNmlSdzZjTmo5cjgzdGFHSm1WRkpQWjlIM1NOdkVDUmtiOVllMHdmWnlZQVMvZEJFK3Rrc2RubFRGbFVJNFlsbU82b0UvTmVtNXJobzVqdm44bm5ZTmJTOTVyczRVT3BPTjR3UUlSUlhYQ0IzTlBCQjRHVE9YYVdudzN1VEpuWHVwazBPdVpPM3BkMTdnTUxEWnNtbm15OXgvTHdGN3lkYitNYmloQW1MVHp6RmNnTlM0eVZicGZzc0s4aGFPTnE0YzJ3aG9QczNwaHF5U2ZyNzhDOU5lSndxUlhjNW5FcXNFQWR1TWQ0THg0bUJBUDlrUlFlYm9UYTFZaU5lMkZNMVdabTk2aHl3YmxNT0xUOWxNZlZQZFpLd0dJSzFkLzFsRlZkOE12SnI2SUVJSko5UFB6MVdjMG5zOFQwRHp4bnZodWxPQjYxZVJJZW96bnA4bm9RbGphVXp5cWttTWRTQ09FSzNEMGxZLzVka21CUjFxSmtLcjVTWXJHWWNXRlFObmNJR2o4V1hSRW1Wc1BGVmhCY1Rnd0dNeEVLODFwR1p2REk0cFlsL2RjcmFGczFIaTgvL3NtQURsUW9CdFZ5SjVQMnpZcTZXZ21hcVAyQWtjVDd5RVdrdmVoTlNlNW11Zm1QOTVIVlhjZEpxV0ZvendtcE8weTJzWjV2cGNLNXdSRVdIT1FFSXZsNjJsQ21zVXp4UXhxaTZoZkVMUW15Ykh4clcvRUVybDcvOG45U25qMlRNOVdYUW1UeVNwMC8ySEdhZGZqaDVwdzRzN0d3QkVTZktXOEluUTdScmNrWDlQSE41VmZaN1IydmJSY1FvTUZoR3J4dWtnMXR5WGlIeE5sY1BUVGJQWWw3RHY3a2I5N3lHSnE4dm1UNUVyQUhMME9UWXVDQXlHRGthT3N2dStvZEN2WXBCSnZ1YTlJeENqZk5NaDRuM1UxOXNUQytZT0t0WXpQTml4RU82TEdNSWxoVGxBM3NkcGtidzl6YS9HQnJMY2pJVklMcWswZ2NIYXhkRC91dmVIR0s2eEZSdzdhM0o0TmI4dFZCVy9rQjU0K0xEZkpkb2dQeEgxYk11MVRXbmluSjJBY1M5eUZ0SWRzQlkzWlZYL1lqVFZab2tyR3ExMU9Hb0NBaXgzU2xjUzloNTcxUGNFMGZzUlc1emlYTHBFTHpaQ1dqZXlZTWpBajVTY0hvSWZCNlg3VGxOZlMzaVVEeC9zZW4xaUxndzNSWEY3UXNkSjc4VzUwdVFZMzJXU1p2U3ZXYUQzNlgxdlBEWERpdk1Bb1BVbEhZSEYyVnNVSElmWW9aRjdzbHhqeWhGS3hNeUJQa2czUHJRQVFqd0JEeXQyRVVVZDF1RFVTcmpueEhCdFpCTTMxODZLZlpWYTdBZjM2d01oYWVRSkZwK0VNbFoxWnkrSGtRa25XdlFiVDR6bGpBQXNvcW82b2UzVjNabElOQk9ZYzFIK1FLYzVpWmhTUmxZNWpSNFBEWFpJTXR4UmRiQjR0UE9zRG4weTVpK2laY3BUZHczUFg2RGpsQkJwZjNONEk1MlBraXNYamIyWUNFbmJBUDcvT3Y0WW05bzJQUXFDVTNzQVAxL2lIV0o0SUtuNFRYeTJLSHBtMXNiNkg4b2JmaCtTekxLRk5FTmpqZHN6aHczY1ZXVURFaTkwUG1CRFlIamVuV2xUSThtME1kUUVCbUJ4QnBIQjR6VGhGM3pPdTUwck9JOTdlTTN0ZWQwemRQS2I0L04veFpwMFNOSXR1RDdMdlZOOVAzUksxVzB1a2FubGRhMmMzSXJqVlpETTFLbzBBV0xnSW5jTEREdzd2eW1FV0ZUTmp0T3lIdHE4Z09jaDI1S2hpYVBiMnpCQkFOREVOUU9VZWZrVFNkQjUyM1NPUXhib0ZGeUYvWDVBWmwvd0lTSFFvMkQ4UGlLWGRobzM4QXNwTFg2S3NST20vekRpdEIxenlNUnB3cU1iQTE0VzVIdG50U2JiT3I1NFl5RDlBVTQvTW9CdnhHdm8zN2VJOXJrZDFPc2xOeU0ybVFNaEFxajlNQ3NoNEFiVG5DcDhQTm16UFdxUjNhVkd3SkJCYmczRURRWDJldG5NbnlaQ1lYZks1RzZIT0NqQ3J6YVNnUEJsZkRYeDJSb0NIVTR6aFRNdFh0Y2ZMY1liMENGSml0c3gyVGIzYmFFbFdkMFNvd2s2b0xOQU5QbHR0ZXJTd1VLSzJtdHM3VUNVZjlqUkZMTHdkY2R3UFNNdlMvZEJLMVhsNTc2UHlkRUJONHFMZFh1S3g2OVJOWndjRG5hem5EUEdETUU0dkhMOTRoWHpYK1FEQ093YWg2TEFXL24zcllTWnE4ZTdjK0J6T3h2Q2ZWV0o0alJmMzJpVzBaWE5ZMVA2Rk5BUGZuTyt2Mkx0Mjl0RklCM2hBamI1eVVmL3FrZHNMOXpaMnp6MW5VOWNEckdwSGQvWjVZTHA5NmVOanFtYU5QcksraTFVWGNmRmFRME9KNTljd0xkaGJldFRZa3JpRGVMVWdJcmtIR1p5WCthcno2aXZPanpad0x4cWpNODlqVm0vTG5WbzF4NjZzOUMwblZyQXNxTENiNzk0WjEwRXdCQ2F2cGRBNWd6cDFCOFZSS0NQOFlqclZ1WkdwdTFRVkVBSERTdGMzc29KZ0p3d1U5cVVwOUVLSEZ4RFl6QkVkcWhJeGRHclpLUmw4OU5pMUgwbGNIcVZoZXV2eDhGNjJyTUNpWlJzVnRkdWJyQjRKVEdvN3JkeXJHeUc4Y3ZXclpQdXhvL0FjdENlem1SckdtZEM3MlMzT2l3RGZKNkJSS2gzZHFGZlFrajFCSmhPMU41NXE3M3M1Q3JCUWhqTlZHa0ZtS0NmWnFPdFFUaGkyZkUrS1lMT1hmVnhzQldQSXRDdUVnd3cvWHFIa3QwSlArNmZUaWc4SmloMVNGK0pvUXA5UHNhWXIzb09ydkxxVDNINmlXajdxY2c3MkpiVnpDbmtkQm9jd1NIU1lPWUNRc1BxTk5TWTZnL3h3U2VWTC9tUmNHcXloUGZIUkg2WHF2VzQ4N0EyOWdFYUl0VXlhRmVkTlVTV3FNbUVDdkptaktpWlJ4Mi90WG01RExZOFlYNjVZdmJ1Umk3aTdDUHlFb3JkaERJY3RabExOTjVseUdSSUZZN2JaOU1zUDdWTkFtMStsRFpNMml4a0pkNzQrSzhBUTRDUzkwVGcycStJVnJueTFnZi9Bc0ZFL1ZoZ0k2NVJzcGM4ZjB2Uy9pcmRzSERKelhLWmlOVTBFaWw3OTFmQkU0eWFjWkIvQjBONEVpdHo2dFo1VU8yaG15Q3ovMDlNTUNVRmxPenc3YmVOUjFIcXhoMkdZWU9PQm5CVU8yRG5iNVRCaGZjVnF5cXFtZUU0aGpiUFpjME9HeWZsOXFvUkhzcHlUZjRvd1Q0NURpZk5SNk9MaUppc3NrT1JTZlNtL0FjTnY5SGNuMkhpUUxYTTN0TzBVWDJZQThtY1cyRFVGU05obE03aTdRU1AvQndvMGJ1UzYrZGlTWGVwZWZhbHE2d3hDM0VMUjhhZUVhRXNka3UwU3BQbk5aa29scFM2bDI3SS9wOVBtdlU3MnlBWVluOGUxNTcyZ1ZnQ2MveG41Q1VubkxCYmJJNFM4U3JiRmJYYWJQTjY5eEx6VS9kUGRFQmd6eS9GNmFqNzVmZ3BNZXRzY2hwTDcveks0NlJ3NUt0dW1uTFpkdW10eGJrbHhMTG0wOTVpcVpVNG1iSjBFN2lWSko1ZVZtdGMvVUZPek1IbFdFbTB5MGp6c0orOEJJbm83Nm5sMTdLdi9tZnZZMldRUHhFVGllWmZhK0ttdFVyeER2SmZoM0xmLy9hRGNnRVE5ckVBZDh1dmRzakphZ0taanZnMXowWEpOd216V2JqeDN6YTF5V3htTHVQU3JUSTlGQW0rZGhUZXdtNDZaQ1RnV3ZBeXloRzh1c2xrSVBCZ3BPZk1zc3h2Wm9uMEdCWUpZYWcraWRQYXcvUmJoR1VvR2R5ME83K0JUVHFDNnE5U1hmak1DQ0VMTGFyVHkxUFE0bXNyNmpJanllWUdXZmo3Yk1DQmcwL2YxMEJOV01yaVRyd0JldEhnV2IxWnlySkVFOHpKOXBlMGR6NklkNXJUYklPNEdvNkhMUVlNNDl2VGY5dGI1VlVHbzQvTWJFT0pRTVpvczhzenEvbUE4RUlLU01BTGkwSkphYllhY2xPU3dyS2o0YThGWnMxS0Z3Wks4ZDVDR2ttZ2dhZDcvOWhNTGgzaUk3TFo4U3VqVGlUUzZBWWVMaTFtdlBhY0tEUEFQZ2pZQkd6L0pCQkk3clZpbzlZNGVIajNybVNvRDIwdld0TVgwbC80NTF6eTdrRnZwTTdEbVhZZWZuS0lITWp5NXJvTWtDU1FkVVNpVEpId1VqeUxVSXRGRTM0RG5zRVpGaFJUL0VUaWNaQWdML1BDN3FWcUgydXlhaE5YVHIzaFMrYVJ6ZkxtT0RyWTJGbC9GZmttSTZVVlFsZThNR25XWk9mL3VZU1JadDR6WHNFc2JKYkpoNDh4cTZrSTQvZFdCbUJoZ2NJQUU2TkZ4Y0NCRGFNUWVXblk5b3JVRTdPYndrQWw4anZlLzYvSCtONm12M1k1amdQdUxoN2I1cjZsYmV5ZEFudjlRN1hQbWFDWFFIeHJQbGVlZmNvUVZIRzdTem56UW9QeDliUUFYSjZUYnp3Q2QvTitFSk5RMDBteXNNc0JSNThObE5zTG5iSDM2Zlcva1Q2eFRESDJtaTFpNmJ0ODJLVjBRb2tObnJ4aDRvU2UrN3Z0RGdRbnROVUNSeGoxdUhyM3gzKzdETkhzUWFaeUtQTjJnUHh6eW1PWHFoMUg3TzBNTTltS3dDSHdrUS9ZWitRbCs2dGN5WEpOeUNNVXZ5NEs1OHNpM2lvSHVuKzhPNGhZdDdFT2NPNTFyZmVOWGRFNWZwVWYwNi9Mc3E5emg5RzZvN2xDa05vallNWm5JYTFsNExHM2I2TUpHTGhFaFUwQ3RpRlJEYm0rYUNPWEdxYjZKdVMvK2IvY0krZ2Z4ZHpKMmNwb0xzYWdNbEsxNVVPa29RMnJiZ1RWTm9EMXFwNmFBQVVIaER6bmNpSitUNDNWVXlycmVyVEo5bnV0M2RpckpPZkppOGlScjJyamdZak4zTlhOZlhoS3NXVnM0RTdlQTE1K1ZQbDkrbzVzSk94MVh5SlBKTnhJYzIxSitQKzFieGdGQjVUenJKM0RUTGRRSkRCTVYyVU9rS0ZjWFY0YTE2dmpCOUh5WDc0SzRBazVrZWRXL3UrRTZyb0pPTDVpckU0U1M5ZVhjTEJIVituamN6MkpiMmk5S0tGclVXUWc2K3NzRjNWU3NjbTFUR0ltT242RENKYVdqN3BQc3dld3hsYnpoa0lFcDNteHcrdjhoK1VZOEVXU1pRbWZndExqdlRJMzBkSmVYbitIZjVIdE5lL3FXRW1YYWQ5bjRqYURTOWljem1CdThyREE2TkgvdU45NmpXRFlmZFE0a3N5VUxJZVU1dkhWQmRwcHhTcDFxZXcrZmxQdENic1dmWUxUSTlGcnd0bGZBZ1hUTWcrb1g0SXJ3eVBzZ0wxR0RKTVZqMGwyODJqVm5hcjhMWHErQWNmdjlOTHM4bTF3bkZnMElDeSs3bFFxamhlbU5uNEI1M2grRWREU1Nxc1JNWlF2ejFKTUtpc3lGbzBTU3JSaEUvcFpKSDM4SHBYYVJjUkpwNjZ0YmJXQVNhdDFpT2VVNk81TEg0aVdQVWxUVkpQMDRmUm9RcS9EUXp6ZVFNekVURlkxYWN2elNUaGtidXZWS0ttNE9pWElPamk4cEt6bGxpd00yUHhkWnd2OWpjYmhZM0FrSDEraDJveUpxTEkyTGN3NWZNdEhZUVptMVBXNk9kZEozQnlFM01LaTUwZUxDd0JUVDVMajBsN1pYZVg2ZDM4QmJpQjBUenBQd0ZjeFRYUS9PeWp3MzdLcUlsL1lkZ2J3Q2pKYThTZ0hHeHNZYnAydzlqVTJSWlRVSGdUR1AzNTB6bXZudndOeWhNWTBZQlgvdnNiVzlibHdCL2hheUlNY2xPMnM3NDJadW1sVlltbkwzRlZzOUpQWUxXd1Rqby9zeU9mcUVScUdpc3IvcXJub3VZZFRBSFQ2d2JXTDBBRTIwTllWcjB4cE9nSDVwVUphN0lxY3lIMHc1M2lOamVsWlpPaU45YUtJMElVdlJadjFJeHpsNUdrQ3NNNi9lVU9EM2w5cTVsWGwrV25MNlFqbE9ZVmdGNEg2eVI4SWdSMU13S1llMmhZNDVBZFBQeEV6dW1kbnNna0xxM0dYSktUUUQvU2hBWkpLOHlXaCtUUlBhUkw4NG5MT0pKdDRxRzdLcjZ0QjJoc3hzLzhhVUJyaVhWQUtXZTdwN1NzYUY1ZjJ1NjNFelF6L3RPWG96M2hmUnJqSEIxZXIzdTZKQmpPaGpIQVFjT2ErOHF4QUlucFY0cWFsQTBZY3lzcExZVXNJdjM2TG9jVXRydWRsaGkwbDRwV3lnYW1LTHV5Q05GU1g4MWxTMHkwd1FrQlhNRTBsc2ZzdFRnNE0wbUNrWVpJREl6SU54YUc5dTlHOTFwY3AwTjZMUHN1akdqbGNRTzdkem1aWHdXU2liVlhkVHRSU1RER2FyYlRNUFNhdG5aU1hQeDVJeVJOTkJaT0hFakJSUEZVemJNTW1oWlNCVUJMWDNUUWlXVDdjWWVZcTJ4VHVaejRsdXpYQkFocVhYU3ZydlFldGhPYmZySEJPWXBCRjZ2QlBxNW82b294Q2cxVnZ0WlhjOE5yLzk1VUhpTnRvNEM1NGZLelpBYWJDMXZHU0YvbEsvZXl4ZjZmNnNYcUdvS0VDemlncUFZRUYxZUM0Y1Z0eVdrSVkrWC9Ub2YyY0paYVBVbmNVVmVhWDgzRDJUeUk3dUwzTXQ1VXoyam1GNTROc2d3QVFZczhFSFB5V01ZYTZhSTkrVWNRUE5xalJJNENYU1hESVRHckhUZzNINy9ZUFNkRTNkRFc0VUcwUGtJR0FiY2o5YU0rbGtraDZiWTh1RWp0ZU9BRE42emg5Mkdpa2lyQ094bllFWlc0MVBDSzZsQ2ZKWWowbUxCcE5maDVLN3dMMkFWaUpRQ3RXeW9EL2lnZ1VGQW9ta0IvTU1NY1FPR0VMeGdBbTZhVGU0VXl0bkJwYTlGL20xSUxBRjA5Sm5heDdab3BQR0ZXMHpxZVlweVUxSjBNNDMzZDcxSmwvQ0JFd3JvTTBUZmJKOGFxQkxFbDh3eTJjK1E3ZlJCT0hqa0k0bjM2b01IaGcwNHJJcnVZdHQ0M1l6d2g0V2FPenp6cnZnb0VyOC9la1NsTFVzU1l3WnVRVGpXa0tRMkI5aVFaU2Z1bkp5dkpUMTV0YnN3blFnb0JMd0dseHpPcE05eEdtQXAwUDMvRXZQekpiSCtJRXM0MFJVMU5nNVl1M0tJZ051NkkrbzB4WVNubS9KdWVFZnJhMTc5VXdkMzJwL0Fpcy9yTXViOWx3NzBmWmZQY2ZYNXFIMW85OWt6V2pTd1FwQUFXK0dFczFJMWdmTnkvM2xodGtCN0NhK3k0Zk1HbEZOU3dRM1lYQ2twQXExaFIxOWFpYWYvZVNzUEVDTWt4bnJVU0NWem9OODBCTVNTZGo0MTIrQ3hYVnE0dE5DR2xxSjk5TGZsRHpPenpreWpGYXdNY0ZEM1FJZHlRSmcwM2k0Q05hL1RoVGpTenlhSnFjY0VTOG5XSUNoWU1sSXQvZk9JMFRQZjNZUVc0RGY2NkFKajUraG5teW4zWUpGWnVqYWVZNVZTaTJ1NzAvTnlwK1VDeldXQXNiSHZHVXlZTnR0RE1zYWZZT3gyeUdyVndGcTZaU1F0RURBcUR5Nm54b09wenp4OTRlNmlxT0xSNW1QMWNkYk5HZmVnSm1UMHRKWjY2NVNzNEFVbkM2c0lXRU5pNmI2TzZFT0pLSXNTcTBxd1BZVmNBZkVxbEJpZnpXei9wenJzblV1cS96cTB5VkJLRzNoSWxwUFB6K1h3K1ZhS0REaEZ0Yy9NQU5NNXZDVWVwWkxOUm42eGphNVJEblo0TlRHaVo3MTB0WHRDSUdvS2laa2Y0djFHVGVFWnpCbHNocEhKS29OMi9YVUdKNExnN01ycGxiWXFQN2ZKMmIvU1dwUjJBRlhNQWZUbEFucUhyZEF6M1B5dDNwT3BiZ1ZMNkFlaXNma21hTjZEWW9sb2dXV1JXUjdOZDlrdThaUEduaTl0VnpXZ2o0a0R6QXh6OVdGb29taTllUzhpSmVESGV4THNvM1hhWSs5M0xwOUtHemRheXBQTFZuY0pYVUtYU0ppTTM2LzdONTk1emx2c2NqSWtTcFVyRDlqa0pqQ2lNWlpPYkFhRU1nTXBMS2xFODJGMzRuNzllVjBodHM4dnhreEtMdkM0N1dwdENKNXpramM0MWtSY3dVa3JwWEYvUE1rV0JZNWMrWFpXTTBRY2VyRTV1MDBGNjc4N1M4UFRWMzQySTJjeE9FWXpOT3MvZ1Nva21UK05pUDVubjNreDQvakErTXErSTRaVnh2Z0drYklqelBzM2QvZEl5bUhDWEFKaEFrblptOGdXVDhPNlY5OXNNejRNV2J1YnNweFoyTTd5MlppemV0di9WSVdvTTJWR0pQdDYxZ3l3M1F6eGhuR0NqRVhLVFE0eGJIS2NEdUtkS3hmZ1BIUFVLWWFKYS9iRk41YUtUcTFwejZWWUE5RWhWYWRXcjJyTWt6bHJ4eXd6U3ZNZnk4TFRTTkRlZ0NZRFBFZVVwTkZSeXJlK1hic1I1cEZEM0FjamVyLzBjaVJrb3pLT2JIQ0lDM2hHeEJ1amZjS1ppRGU2NnFuazY2Yk5Md2VhZVkyWnp0RnlIUjIxQUFFZzNGcEVYcjRjWGpZYStXeE0zcFREMnBDbStlR3BjaEFYY2NkVVVQWGc3VFZwdFJReDZQNGVjRzUwSTFjOE9BZFhXMXIwQWpWQld3cVYyOHZFa0ZuaVJldjRSbGo1U3RFT2FIaG5TMFhsbGdGSStGU0JLRmdFcDg2dXc5K2I3VHV6RFFaeUpWMTJtYkJpOHJtNTN3bUN3NlJnUnlTWkRXcnVmRUhpM0UwSFlQdnpCZjFlRUFtOUJLSGFCMGRQRW9kUXBhQjJidytiY09GbnJGSk9udmVqT1A3WTRsTEFGMm1ZblRMMUlMNHBJZEVNUkk1UzR0M3ZHTmxvM21FVHdWVHk5NWViYlJyREZBMXF3R3lBcmxjemtXR1REVEJGSXM4T1ZhaFRQaEtzcTB5Q0dRTzlxcmZhNEc3c1FVUzdxQWRwemx2MEtmOGRJSjJPNHZyalRiVlRjY0VKNmRCd0NBTG92Z3B0emZaZjRXc2tlSEhpc3FnNGkwZFhpdWE3azY5VFF2c0RwaXA1U3IxS0NncHBBSnJiOXIvb1dyVkdMWWZUd0RFSmp3QUhDWnByRG9qWi9XUG5CK09UckFDOElHejFUMFVFSVRQR29JQ0pLTlhXOEY1UW5INVFiV2pSMEZPb3JCSUxFWFI3cEpzbWRtd0JaR24zd0R2RVVnaVNFeW5rUnBjdVVqOWRoRGYzV0VBbDg2K1M3MzcvWW1VYUxOakNPOE0rbmVnbElkNEJDWFM3OGJSSk1kdE1WbVVOZ0RmWHZNeGozc2xNNkZxTEw5RWF5YmZ3RHdJYjFaeUhnUVVZQzNwUEVGSVVNTEZ1NnlBVGJvLzFpZmxnWHdKYURnZ282RnZmNytJZTJUNnNxQmVQTExSREZDK0RuT2VvaUxpSHVCM3h4OWlFZW1jMm1Fek9yRDVPK0ZScWlOVWhMa1c0OWc3b2NJT3FJMDhBYTFIbXlMZWN2T05ndXQ3bTQzd29mOEhHUmpaNFRmREdDWXJramQ3Z2pwb0dROWlFTlFweFhpVFdtb2lEU1JjQW1pcUc3bzlQUklhaDEybzAzUHlZVGFBQStoUXg4NXB2Q05nNmp1MEpGWkpzcVBXQ0J1NHd0ak1Jald5Q3A3MFdmejdyTE1YaStaazhxTUxZK29BV1IwNmxTYmNSQUdkY1poVXRHVDExeU85dWNUNUtGK0ZKMFV4TWlvZGQxZ28wTldBTGhwWkVoSVlxdVhERWFxdk0xUkpZYW96cEF1cGUwd1ZvYVFIVG5YMDdNQnZTdzE0Z0RFayt3M3VlWEZKbmNYVlBHc0NzaUIvaU5MY1FWRzRsZUo5R3QvRnlESDhvNTJmUktocVYyd2Nhek56bnpEWFcvVEFJNnRIY3ptNkN0a1pwakRpdWx6SnpQd3NLeExrYk41WTd2OWVHd2RJQUlzaUlWMzVzNzZEdUlneGpPUU1jdkxsRXNRanpQNEYrU2VUZ3E2c2s2NnVSZG92dmhnQmRZNkZNRlBEYjBZcHpRVmZNam5BSUhCZXpZVnFETHBDMElnaVBLcjVyWjZ1RHpTc2JYQU56enM0SzRTbTRoaGt0RzlIQk9lOXdieFNpQVNzSW5FMmloN0JPNDV4UmR6S1J4enBhWGRnR2d5UktiT243ZHpDZ3l2NGVUV3M1T294QTg2OUJvc2xVVW5KYUFDSlFDOWttcjBWeTg0TFpjN2dqdDJCdjBpaFgzRmhTVnlPOHZ2S05IOWVsQkN3VXJrcDVZaTg4NVVxaGswZU1XeFI3RFE2VkFBY0RPaUxCOXBxYlBHTTNPYWdKQVBOZGJYUU91bkxPNENoSExYdGlFYXFqSmdERm9EYVZhNnY1RjdYYlM5eWNxTlZjdGhROWJ4eTBCbzFMbWJmeCtPYm42bXh5TERyYXk0bVovYzMvTlZ4eTFQOEhUenJreWdCVUNUNURmaDdGbTYrNE1GOXdWTlF1Si9OL2NYcUdOOUp1V09EODJVWEpTNGE2UmtKK2h4TXlGb05EVzVBTkVUb24vNUpjSkRBZHJ1OHllYVpNY2llNENGMXUwRGdLOGUxSUJnWU5sb0d3SGdRS2s3emxXa0ZpaDBVSVgrZ094VVBkQ3UveU5FZk5iMVFLSTdMUGJSQTcvcVpjd2Zaa1BSL2hBMm03YnppWmNoZ1UxdXVtdWhJaDRCOEYxWGNqaHlRdW5mYmJzSWhETGljbmxQdzZ6djZuL3M5R0p4dm5lR3JqaGZWZzRHNUxZMG5VdGFJbjE2bHh0cEg4Y3FFdjFYYi9QWnRURXpVNkRmMEV6ODR4K1YzMTBjTXBDL0J1WTZvelNUV1hldTdUc0Zhb3cwb1JlRVQ1WWk5b2dlU3JOeTlIL0VJMmYyVVo3OW5TdkNoZS8vcWtoUmpMa01qakZlbFFCaTRHeHdDQ3M3ZW11c3lsL3FjbWFRRmNLVStuc29GVFpUcDNyRTIvWVcwWDdyckVwWElOTk5uUk4rVTNpVVh6aXNxZ0tXRW1hNEd6b0FVWEtRRWVZaHI0THNRMzBsRG1RVmRLTmlYZEIrbGl2NklEQnMwUVRxdVlkeDkzdm56ZVhXekgvcTFtelliM1p2bGh4US84R3NLM0R2UlBZUDlHaWxHay9PUzM4TVVsVmkwWk9SOVRzVkpybDJWRWg3TzJ2aU1QdGVUbGFrc0VQUGFHMmE2R2tjWG56dG10Q2d1UjJ1OW9wRUwrS0pGcVBmYXYzQTFPQzBkU1FSVFl5YSswcCtGVEJWdmp3eUJnRk1tdllzRHVweUlqU05rNmdyTFNHYzN6SlVGNXRMZHpreS92blFOaWhyTXRaRks3aEJ2TXMzNjhtV3BITEl6bjdTTHh5azU0QkNtN2RHQ2xidnJGME9PYU9IbUkvNGdValA2UExnTzlINXZlay9OVytPaHFaamloQVlmU2FCWmRVMC9VPQ==";
//解密服务器返回的数据
function dcN5CDYUCjXdTL5pu(data) {
    data = BASE64.decrypt(data);
    data = DES.decrypt(data, dskktCJvwqzM, dsiwBHe3B6XJ);
    data = AES.decrypt(data, askM5e1s3RNQ, asimiSNsUeVG);
    data = BASE64.decrypt(data);
    return data
}
console.log(dcN5CDYUCjXdTL5pu(resp_data));

function sqd6RCWbUoJqIHcvLl8T(method, object, callback, period) {
    const key = hex_md5(method + JSON.stringify(object));
    // const data = getDataFromLocalStorage(key, period);
    // 检查本地是否有缓存，没有的话，再去请求服务器，所以干脆设置为null好了
    const data = null;
    if (!data) {
        var param = pivCqbS1Zrr66qy6(method, object);
        console.log("parm:", param);
        $.ajax({
            url: 'api/historyapi.php',
            data: {
                hc6xTEMhi: param
            },
            type: "post",
            success: function(data) {
                data = dnCn8cPXX7TIabPI7XRL(data);
                obj = JSON.parse(data);
                if (obj.success) {
                    if (period > 0) {
                        obj.result.time = new Date().getTime();
                        localStorageUtil.save(key, obj.result)
                    }
                    callback(obj.result)
                } else {
                    console.log(obj.errcode, obj.errmsg)
                }
            }
        })
    } else {
        callback(data)
    }
}

function loaddata() {
    var method = 'GETDAYDATA';
    var param = {};
    param.city = "北京";
    param.month = "201312";
    sqd6RCWbUoJqIHcvLl8T(method, param, function(obj) {
        // console.log(obj);
        obj = obj.data;
        items = obj.items;
        showTable(items);
        var data = obj.datas;
        var min = obj.min;
        var avg = obj.avg;
        var max = obj.max;
        showHistoryChart(data, min, avg, max);
        var level = obj.level;
        showPieChart(level.level1, level.level2, level.level3, level.level4, level.level5, level.level6);
    }, 6);
}

console.log(loaddata());