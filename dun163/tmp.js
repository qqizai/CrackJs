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


// var window = new Object();
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


var m = {
    get: function() {//原来 m.get(){}就是这个函数
        var s = ["=null; path=/; domain=","Default Browser Helper","French Script MT","标楷体","encodeURI","Umpush","icp","华文琥珀","createProgram","monospace","ButtonShadow","Bodoni MT","STATIC_DRAW","黑体","downloadUpdater","Aliedit Plug-In","PDF integrado do WebKit","uniformOffset","encodeURIComponent","Picasa","Adobe Fangsong Std","bindBuffer","AVG SiteSafety plugin","Orbit Downloader","color","hidden","localStorage","Google Talk Effects Plugin","indexedDB","Lucida Fax","AmazonMP3DownloaderPlugin","createBuffer","Castellar","linkProgram","Californian FB","ThreeDHighlight","createShader","Gulim","NyxLauncher","YouTube Plug-in","楷体_GB2312","SWCtl.SWCtl","Google Earth Plug-in","QQDownload Plugin","Norton Identity Safe","parseInt","Simple Pass","Colonna MT","zako","getUniformLocation","shaderSource","Downloaders plugin","location","Heroes & Generals live","window","Showcard Gothic","微软正黑体","华文行楷","Ginger","RockMelt Update","WindowFrame","enableVertexAttribArray","KacstOne","attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }","Perpetua","openDatabase","canvas","iGetterScriptablePlugin","Informal Roman","Nitro PDF Plug-In","Msxml2.XMLHTTP","华文黑体","NPLastPass","ThreeDFace","LastPass","::","parseFloat","华文隶书","; ","getAttribLocation","{'name':","Nyala","not_exist_hostname","\\'","GFACE Plugin","undefined","新宋体","\\.","Matura MT Script Capitals","Arial Black","FangSong","mwC nkbafjord phsgly exvt zqiu, ὠ tphst/:/uhbgtic.mo/levva","Braggadocio","Harmony Firefox Plugin","Palace Script MT","Native Client","userAgent","QuickTime.QuickTime","experimental-webgl","ARRAY_BUFFER","苹果丽中黑","Alipay Security Control 3","Script MT Bold",", 'browserProp':","TDCCtl.TDCCtl","self","InfoBackground","Pando Web Plugin","Haettenschweiler","span","ActiveBorder","ThreeDLightShadow","0202","0203","0200","0201","WPI Detector 1.4","; expires=","ThreeDDarkShadow","Exif Everywhere","Battlelog Game Launcher","Impact","VLC Multimedia Plugin","Adobe Hebrew","BlueStacks Install Detector","wwwmmmmmmmmmmlli","history","sans-serif","14731255234d414cF91356d684E4E8F5F56c8f1bc","Papyrus","ButtonText","0211","AppUp","Parom.TV player plugin","DealPlyLive Update","Lohit Gujarati","FRAGMENT_SHADER","Agency FB","MacromediaFlashPaper.MacromediaFlashPaper","###","WordCaptureX","getComputedStyle","platform","0105","Arabic Typesetting","0106","0103","华文中宋","0104","0101","0102","0100","0107","ButtonHighlight","vertexAttribPointer","0108","textBaseline","#069","doubleTwist Web Plugin","unescape","Thunder DapCtrl NPAPI Plugin","Batang","DFKai-SB","Snap ITC","Date","MinibarPlugin","decodeURIComponent","NPPlayerShell","MS Reference Sans Serif","Hiragino Sans GB","serif","getContext","uniform2f","MoolBoran"]
        var i = []
            , o = [];
        // if (K) {
        var K = true
        if (K) {
            var l;
            try {
                l = !!window[e[90]]
            } catch (f) {
                l = !0
            }
            i.push(l);
            var h;
            try {
                h = !!window[s[26]]
            } catch (p) {
                h = !0
            }
            if (i.push(h),
                i.push(!!window[s[28]]),
                G[e[10]] ? i.push(n(G[e[10]][e[52]])) : i.push("undefined"),
                i.push(n(window[s[65]])),
                i.push(J[u[146]]),
                i.push(J[s[142]]),
                l = m.i)
                try {
                    var y = G[u[120]](s[66]);
                    l = !(!y[s[171]] || !y[s[171]](e[104]))
                } catch (v) {
                    l = !1
                }
            if (l)
                try {
                    i.push(j()),
                    m.b && i.push(a())
                } catch (g) {
                    i.push(u[12])
                }
            i.push(c()),
            m.a && o.push(r()),
                o.push(J[s[96]]),
                o.push(J[u[104]]),
                o.push(window[e[9]][e[109]]),
            m.j && (y = window[e[9]] ? [window[e[9]].height, window[e[9]].width] : [t[9], t[9]],
            ("undefined" == typeof y ? "undefined" : n(y)) !== s[85] && o.push(y.join(u[91]))),
                o.push((new Date)[u[81]]()),
                o.push(J[u[75]]),
                o.push(d())
        }
        return y = [],
            m.e ? (y.push(m.e(i.join(s[139]))),
                y.push(m.e(o.join(s[139])))) : (y.push(_(i.join(s[139]))),
                y.push(_(o.join(s[139])))),
            y
    }
}


console.log(m.get())