var CryptoJS = require("C:/Users/Administrator/AppData/Roaming/npm/node_modules/crypto-js");
// var CryptoJS = require("crypto-js");  // 运行报错 Error: Cannot find module 'crypto-js',因此需要指定路径进行导入这个依赖
// console.log(module.paths);  // 上面的报错信息可以使用这个来查看导入的模块路径有哪些
// 然后查看安装路径：
// $ npm prefix -g   # node安装路径
// /Users/xxx/.nvm/versions/node/v10.16.0
// $ npm -g root  # 查看依赖安装路径
// /Users/xxx/.nvm/versions/node/v10.16.0/lib/node_modules  // 然后将这里的路径复制到上面导入的路径处

var _PADCHAR = "=";
var _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var _VERSION = "1.0";


function _getbyte64(s, i) {
    var idx = _ALPHA.indexOf(s.charAt(i));
    if (idx === -1) {
        throw "Cannot decode base64"
    }
    return idx
}

function _decode(s) {
    var pads = 0, i, b10, imax = s.length, x = [];
    s = String(s);
    if (imax === 0) {
        return s
    }
    if (imax % 4 !== 0) {
        throw "Cannot decode base64"
    }
    if (s.charAt(imax - 1) === _PADCHAR) {
        pads = 1;
        if (s.charAt(imax - 2) === _PADCHAR) {
            pads = 2
        }
        imax -= 4
    }
    for (i = 0; i < imax; i += 4) {
        b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12) | (_getbyte64(s, i + 2) << 6) | _getbyte64(s, i + 3);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255))
    }
    switch (pads) {
        case 1:
            b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12) | (_getbyte64(s, i + 2) << 6);
            x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
            break;
        case 2:
            b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12);
            x.push(String.fromCharCode(b10 >> 16));
            break
    }
    return x.join("")
}


function _getbyte(s, i) {
    var x = s.charCodeAt(i);
    if (x > 255) {
        throw "INVALID_CHARACTER_ERR: DOM Exception 5"
    }
    return x
}


function _encode(s) {
    if (arguments.length !== 1) {
        throw "SyntaxError: exactly one argument required"
    }
    s = String(s);
    var i, b10, x = [], imax = s.length - s.length % 3;
    if (s.length === 0) {
        return s
    }
    for (i = 0; i < imax; i += 3) {
        b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8) | _getbyte(s, i + 2);
        x.push(_ALPHA.charAt(b10 >> 18));
        x.push(_ALPHA.charAt((b10 >> 12) & 63));
        x.push(_ALPHA.charAt((b10 >> 6) & 63));
        x.push(_ALPHA.charAt(b10 & 63))
    }
    switch (s.length - imax) {
        case 1:
            b10 = _getbyte(s, i) << 16;
            x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt((b10 >> 12) & 63) + _PADCHAR + _PADCHAR);
            break;
        case 2:
            b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8);
            x.push(_ALPHA.charAt(b10 >> 18) + _ALPHA.charAt((b10 >> 12) & 63) + _ALPHA.charAt((b10 >> 6) & 63) + _PADCHAR);
            break
    }
    return x.join("")
}


function decrypt(g) {  // TODO 这里是第一步
    var l = {
        content: "",
        keys: [],
        accessKey: ""
    };
    // var s = d.extend({}, l, g);  // TODO 第二步判断，这句话的意思是将对象l和g合并到前面的空对象上{}，而不影响原对象的值；解析：其实就是将g合并到l上(等于复制一份g)，所以可以直接s=g
    var s = g;
    var n = s.content;
    var r = s.keys;
    var t = s.keys.length;
    var q = s.accessKey;
    var o = q.split("");
    var m = o.length;
    var k = new Array();
    k.push(r[(o[m - 1].charCodeAt(0)) % t]);
    k.push(r[(o[0].charCodeAt(0)) % t]);
    for (i = 0; i < k.length; i++) {

        n = _decode(n);// n = d.base64.decode(n); // n = Buffer.from(n, 'base64').toString();  // TODO 错误的××
        // TODO 第三步：需要对上面这个进行解密，但是这里很坑的地方是：
        // 这里的base64加解密方式并不是nojs里面的base64的加解密方式，而这里是使用了网站自己的加解密方式，
        // 所以需去找 d.base64.decode()这个解密方法，本人在这里踩了巨坑

        var p = k[i];


        // 源代码:var j = d.base64.encode(n.substr(0, 16)); 错误代码:Buffer.from(n.substr(0, 16)).toString('base64');TODO 第四步，同理可得，需要找到网站自己封装的decode/encode方法
        // 源代码var f = d.base64.encode(n.substr(16));错误代码：var f=Buffer.from(n.substr(16)).toString("base64");TODO 需要转为为网站的encode方法
        var j = _encode(n.substr(0, 16));
        var f = _encode(n.substr(16));


        var h = CryptoJS.format.OpenSSL.parse(f.toString());
        n = CryptoJS.AES.decrypt(h, CryptoJS.enc.Base64.parse(p), {
            iv: CryptoJS.enc.Base64.parse(j),
            format: CryptoJS.format.OpenSSL
        });
        if (i < k.length - 1) {
            n = n.toString(CryptoJS.enc.Base64);
            // 源代码：n = d.base64.decode(n); 错误代码 n = Buffer.from(n, "base64").toString(); todo 需要转为为网站的decode方法
            n = _decode(n);
        }
    }
    return n.toString(CryptoJS.enc.Utf8)
};

// 加密参数：accessKey为其中一个接口; content、keys为另外一个接口，组装起来即可。
var res = {
    "accessKey": "yabC3GWR",
    "content": "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",
    "keys": [
        "tiiIyOMRCbHXeBAAiDUQHfsLuRHMriUiUx16w2c1Cuo=",
        "PypMtjfBjjqPkvkLGWgSKCt9NVeHIr9UCNTDKJbxVN4=",
        "L0jTNyLRRmNzHc6PJe7r/7cpHoj52J2sfjE8GhKdNJo=",
        "r4+O+jxu1OnrkaluGD8xuH27G3B0Iq9eQ0GD+HtV01U=",
        "HlFJihbIuIedo2NC4ynGD6CY71FedOCAhpEC23AZK4U=",
        "ICtwtfvvcyV1Jtb8ojMy+ibNKBnMyONzLdgZ2/opCew=",
        "XauU1LJ/c8hU7dduiJVKL2gsJSHQZud9tG/14V/gwao=",
        "UV6B41/cNtucC9j6l30Zw7BPQF/Wwx5JSLSlwxtpCiY=",
        "TiuEyTBuVbPUqpFvIRIvdrjXULW6CmuR/RWeAhSapJI=",
        "ZNqtCqNCI0rhf1Ppp4+x0tob6aBAUZmTkJJhaxx4iIs=",
        "B/Atkfhon89wFaW+c32mhDZ8enIJJANNdlhPLDSCAnY="
    ]
};

console.log(decrypt(res));


