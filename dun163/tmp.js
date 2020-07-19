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

console.log(l)
console.log(p)
console.log(f)




