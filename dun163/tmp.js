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


document = new Object();
document.createElement = function (name) {
    return "<" + name + ">" + "</" + name + ">"
};
document.createElement.toString = function () {
    return "function createElement() { [native code] }"
};
window.document = document;

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






var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
;

var G = window[e[81]],J = window[e[117]]


function e() {
    var e = "bi1euljfv3Yg4RyX".split("");
    this.d = function(t) {
        if (null == t || void 0 == t)
            return t;
        if (0 != t.length % 2)
            throw Error("1100");
        for (var n = [], i = 0; i < t.length; i++) {
            0 == i % 2 && n.push("%");
            for (var r = e, o = 0; o < r.length; o++)
                if (t.charAt(i) == r[o]) {
                    n.push(o.toString(16));
                    break
                }
        }
        return decodeURIComponent(n.join(""))
    }
}
var t = (new e).d
    , i = (new e).d
    , r = (new e).d
    , o = (new e).d
    , a = (new e).d;
var e = [a("u3jyjjjXlujlfvfu"), i("f1jRjXjefv1yl1jljij4lbj4jif3jlf11bufe11buejXjyfuf1jXj4"), i("j3uRjlfejv1bfbj4fljfj3jy"), t("l1jljij4uujXffjyj4jXjijujlf11blbj4fljfj3jy"), o("lef3jRjijyfujlje1blbugu31buej4j3jljyfu"), a("lXfbjvjijyfujXjR"), o("ufuuu41buXj1jYjljefu1blfjlj11blbj4fljf1Rj3jy1beiej1yebeb"), o("ffjlj1jfj4"), t("ylvRvyyj3jvfylYyvgyugR3e"), i("fejef1jljljy"), o("j1jXjuf3"), a("lul1u3uiuyufu4ullXlelul1u3lb"), o("jyeR"), t("luj4ffjfuRjXjyjX"), t("1feY1f"), o("u4jXjfuRjlu3jy1blbj4fljfj3jy1bei1yeb1yeb1ye3eeel"), r("jjfljyjefuj3jXjy"), t("jejXjyfujlfvfu1yjvjifejvuejXjujl"), t("uif1jejvj3ueuiuu"), o("ljull1luullvlXleuvuiuuull1"), t("llj1fljyfufl"), i("ujjijejlj1jXjXjg1blbj4fljfj3jy"), a("uijefuj3fjjluejifbfuj3jXjy"), t("yfggvjyj3vvyyugR3e"), t("uRjij4jffljy1bufjXfujvj3je"), i("uyjlfffe1bufjXfujvj3je1buRlu"), i("uejifbfuj3jXjylujlfvfu"), t("jilYj1l3ebjelvjulfeijlljjje1lljfeelujveulej3l1eljYlijgejlbj4uXefjRuyjyevuRjXu4e3fbugfiuYf1u3feuvfuufflujfjulffuufvuef3u1fYui"), i("uujljYjiljfl1bu4ufue1blejijyfe1buRjXjyjX"), r("uejXfbfbjlf1fbj4jifujl1bufjXfujvj3je1bu4j3jfjvfu"), a("lejljfjXjl1blbf1j3jyfu"), t("lejiffjifejujljl"), a("u1jifljvjiflfe1be3ee"), r("uejvjij4jgjuflfefujlf1"), i("uij1jijuj31buRlu1buejXjyjujljyfejlju1bu4j3jfjvfu"), t("u4fljej3juji1bu1f1j3jfjvfu"), o("lfj3jujl1bu4jifuj3jy"), o("jjjXjyfu1bjujlfujljefu1bjlf1f1jXf1"), o("ugjXfYfljgji1bufjXfujvj3je1blbf1ejuy"), o("uvfujRj4el1bj4jXjejifuj3jXjy1bfbf1jXfjj3jujlf1"), r("uuj3fjlv1blbj4flfe1blfjlj11blbj4jif3jlf1"), r("ljj4jijuj3jRj3f11blejef1j3fbfu"), a("ujj3j4jl1buujXffjyj4jXjijujlf11blbj4fljf1Rj3jy"), r("jXj1"), o("uijujXjuj11ylefuf1jljijR"), i("uRjljyj4jX"), r("jejij4j4lbjvjijyfujXjR"), t("lfjXj4jjf1jijR1buRjifujvjljRjifuj3jeji"), t("uejifujij4j3jyjiuff1jXflfb1bllfbjujifujl"), t("ulf1jife1bu1jXj4ju1bu3luue"), r("uujlfjjij4ljl1lvuefuf1j41yuujlfjjij4ljl1lvuefuf1j41yei"), t("ylvRvyyj3jvfyfggvjy3gg3i"), t("jijujuu1jljvjifjj3jXf1"), i("fbji"), t("u1j3fufefuf1jljijR1bljjlf1ji1blejlf1j3jj"), a("1vjjfljyjefuj3jXjy1v13fgf1jlfuflf1jy1beie1eeegfR131v13eg"), o("fbj3"), t("lujljyjejljyfu1bujluuy1bfbj4fljf1Rj3jy"), t("f1jljRjXfjjluejvj3j4ju"), o("ujjXj4fv1bee1bu1f1jXfffejlf11blbj4fljfj3jy"), i("flfejllbf1jXjff1jijR"), a("jvjXfefujyjijRjl"), t("fbjvjijyfujXjR1yj3jyjYjljefuuYfe"), o("lejvjXjejgffjifjjlujj4jifejv1ylejvjXjejgffjifjjlujj4jifejv"), i("f1jfj1ji1veiebe1141be1ebeu141beb141beb1yef13"), t("uijuj1j4jXjejglbj4fljfj3jy"), i("u1jijejgjff1jXfljyju"), r("uijfuejXjyfuf1jXj41yuijfuejXjyfuf1jXj4"), a("lbjvjXfujXuejljyfujlf1lbj4fljfj3jyei1yei1ye11ye1"), o("uffljyjflejljX"), o("feeR"), a("jujljejXjujllll1u3"), a("yj3jg3yjYRYeyvvv31yugR3e"), t("ylvRvyyj3jvfyj3jgby3YRvX"), a("eie1ee"), r("ffjlj1jfj41bjlfvjejlfbfuj3jXjy"), a("f1jl"), r("lfuRlbj4jif3jlf11yuXuelv"), t("efe1fbfv"), i("uifbfblfjXf1jgfefbjijejl"), t("uvj3jfjvj4j3jfjvfu"), t("jujXjefljRjljyfu"), r("l3jijyjujlfv1buRjljuj3ji1blbj4fljfj3jy"), r("ulleuy1bu4jifljyjejv1buRjXfYj3j4j4ji1blbj4fljfj3jy"), r("efebfbfv1b1fuif1j3jij41f"), r("j3jyjYjljefuuYfe"), r("u4jXjRji"), r("u1j3fuuejXjRjlfuuijfjljyfu"), t("uejij4j3j1f1j3"), a("u1jXjXjgjRjijy1buXj4ju1blefuf3j4jl"), i("fejlfefej3jXjylefujXf1jijfjl"), i("llfujXfbj3ji"), r("jejXjRfbj3j4jllejvjijujlf1"), r("jlfejejifbjl"), t("lejef1jXj4j4j1jif1"), a("lfj3jyjujXff"), o("y33Ygjyug3Yj"), i("ugjifefbjlf1fejgf31blbjifefeffjXf1ju1buRjijyjijfjlf1"), a("uRj3jyjfu4j3ll1Rulfvfuu1"), o("jfjlfu1bfef3fefujljR1bjejXj4jXf1fe1bjlfvjejlfbfuj3jXjy"), a("lejgf3fbjl1yuujlfujljefuj3jXjy"), a("ujj3j4jlu4jij11bfbj4fljfj3jy"), o("jyfbuilbu31blbj4fljfj3jy"), r("jyjXfulXjlfvj3fefulXjvjXfefu"), t("e1ju"), r("uijefuj3fjjllvuXj1jYjljefu"), o("uujXfufljR"), t("lbuuuj1Rlvuejvjijyjfjl1bljj3jlffjlf1"), r("lbuRj3jyjfu4j3ll"), i("jejXj4jXf1uujlfbfujv"), i("uyjXjgj3ji1bleflj3fujl1buljyjij1j4jlf11blbj4fljfj3jy"), t("l1jljij4ljj3jujljX1yl1jljij4ljj3jujljX1vfujR131buijefuj3fjjllv1buejXjyfuf1jXj41b1veee11Rj1j3fu13"), t("uRjijfjyjlfujX"), a("uijujXj1jlulfvuRjijyueueuujlfujljefu"), o("lXe3efelelfvjYjujlfefvfvjulX"), o("ufjij1f1j3jXj4ji"), a("lbj4jif3j1j3j4j4"), o("jyjifjj3jfjifujXf1"), i("l1jijejvjijyji"), r("luff1buejljy1buRlu1buejXjyjujljyfejlju1bulfvfuf1ji1bu1jXj4ju"), a("liliuRj3jyj3uuu41blbj4fljfj3jy"), a("1ejjejeb"), a("jjj3j4j4l1jljefu")]
    , s = [o("eRjyflj4j4eg1bfbjifujveR1Xeg1bjujXjRjij3jyeR"), o("uujljjjiflj4fu1bu1f1jXfffejlf11buvjlj4fbjlf1"), o("ujf1jljyjejv1blejef1j3fbfu1buRlu"), i("yjYbvfyjYlgfyugR3e"), a("jljyjejXjujllll1u3"), t("lljRfbflfejv"), i("j3jefb"), r("ylvRvyyj3jvfyf3bYlyfvXvb"), o("jef1jljifujllbf1jXjff1jijR"), i("jRjXjyjXfefbjijejl"), r("u1flfufujXjylejvjijujXff"), i("u1jXjujXjyj31buRlu"), a("leluuiluu3uelXuul1uilf"), t("y3gg3iyugR3e"), r("jujXffjyj4jXjijullfbjujifujlf1"), a("uij4j3jljuj3fu1blbj4fljf1Ru3jy"), t("lbuuuj1bj3jyfujljff1jijujX1bjujX1blfjlj1ugj3fu"), o("fljyj3jjjXf1jRuXjjjjfejlfu"), o("jljyjejXjujllll1u3uejXjRfbjXjyjljyfu"), r("lbj3jejifeji"), t("uijujXj1jl1bujjijyjffejXjyjf1blefuju"), a("j1j3jyjuu1fljjjjjlf1"), r("uiljuf1blej3fujllejijjjlfuf31bfbj4fljfj3jy"), r("uXf1j1j3fu1buujXffjyj4jXjijujlf1"), t("jejXj4jXf1"), r("jvj3jujujljy"), r("j4jXjejij4lefujXf1jijfjl"), i("ufjXjXjfj4jl1blujij4jg1buljjjjjljefufe1blbj4fljfj3jy"), a("j3jyjujlfvjljuuuu1"), a("u4fljej3juji1bujjifv"), r("uijRjifYjXjyuRlbeeuujXffjyj4jXjijujlf1lbj4fljfj3jy"), i("jef1jljifujlu1fljjjjjlf1"), o("uejifefujlj4j4jif1"), t("j4j3jyjglbf1jXjff1jijR"), o("uejij4j3jjjXf1jyj3jijy1buju1"), i("lujvf1jljluuuvj3jfjvj4j3jfjvfu"), o("jef1jljifujllejvjijujlf1"), t("ufflj4j3jR"), a("uyf3fvu4jifljyjejvjlf1"), r("l3jXflluflj1jl1blbj4fljf1Rj3jy"), a("yjYlgfyugR3elXufu1e1eeeie1"), o("lelfuefuj41ylelfuefuj4"), a("ufjXjXjfj4jl1buljif1fujv1blbj4fljf1Rj3jy"), t("liliuujXffjyj4jXjiju1blbj4fljfj3jy"), r("uyjXf1fujXjy1bu3jujljyfuj3fuf31blejijjjl"), o("fbjif1fejlu3jyfu"), i("lej3jRfbj4jl1blbjifefe"), i("uejXj4jXjyjyji1buRlu"), r("fYjijgjX"), a("jfjlfulljyj3jjjXf1jRu4jXjejifuj3jXjy"), r("fejvjijujlf1lejXflf1jejl"), o("uujXffjyj4jXjijujlf1fe1bfbj4fljfj3jy"), i("j4jXjejifuj3jXjy"), i("uvjlf1jXjlfe1b1j1bufjljyjlf1jij4fe1bj4j3fjjl"), i("ffj3jyjujXff"), i("lejvjXffjejif1ju1bufjXfujvj3je"), r("ylgyYyyvgRYXyjYRYey3gg3iyugR3e"), o("ylvRvyyj3jvfyvYiv4yjYlgf"), o("ufj3jyjfjlf1"), a("l1jXjejguRjlj4fu1bllfbjujifujl"), t("lfj3jyjujXffujf1jijRjl"), t("jljyjij1j4jlljjlf1fujlfvuifufuf1j3j1uif1f1jif3"), t("ugjijefefuuXjyjl"), t("jifufuf1j3j1flfujl1bfjjljee11bjifufuf1ljjlf1fujlfveg1bfjjif1f3j3jyjf1bfjjljee11bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujleg1bfljyj3jjjXf1jR1bfjjljee11bfljyj3jjjXf1jRuXjjjjfejlfueg1bfjjXj3ju1bjRjij3jy1v131bfg1b1b1bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujl1beR1bjifufuf1ljjlf1fujlfv1b1g1bfljyj3jjjXf1jRuXjjjjfejlfueg1b1b1bjfj4lXlbjXfej3fuj3jXjy1beR1bfjjljeeu1vjifufuf1ljjlf1fujlfv141beb141bei13eg1bfR"), a("lbjlf1fbjlfuflji"), i("jXfbjljyuujifujij1jifejl"), a("jejijyfjjife"), i("j3ufjlfufujlf1lejef1j3fbfujij1j4jllbj4fljfj3jy"), r("u3jyjjjXf1jRjij41bl1jXjRjijy"), a("uyj3fuf1jX1blbuuuj1blbj4fljf1Ru3jy"), r("uRfefvjRj4e11ylvuRu4uvlululb"), t("ylvRvyyj3jvfy3gg3iyugR3e"), o("uylbu4jifefulbjifefe"), i("lujvf1jljluuujjijejl"), o("u4jifefulbjifefe"), t("eYeY"), o("fbjif1fejlujj4jXjifu"), i("ylvRvyyj3jvfy33Ygjyug3Yj"), i("eg1b"), i("jfjlfuuifufuf1j3j1u4jXjejifuj3jXjy"), a("fg1fjyjijRjl1feY"), a("uyf3jij4ji"), i("jyjXfulXjlfvj3fefulXjvjXfefujyjijRjl"), i("l41f"), o("ufujuiueul1blbj4fljfj3jy"), r("fljyjujljjj3jyjlju"), a("yj3jgbylYyvgyugR3e"), a("l41y"), a("uRjifuflf1ji1buRlu1blejef1j3fbfu1buejifbj3fujij4fe"), i("uif1j3jij41bu1j4jijejg"), i("ujjijyjflejXjyjf"), a("jRffue1bjyjgj1jijjjYjXf1ju1bfbjvfejfj4f31bjlfvfjfu1bfYfij3fl141byigRYb1bfufbjvfefu1XeY1Xfljvj1jffuj3je1yjRjX1Xj4jlfjfjji"), r("u1f1jijfjfjijujXjej3jX"), i("uvjif1jRjXjyf31bujj3f1jljjjXfv1blbj4fljfj3jy"), t("lbjij4jijejl1blejef1j3fbfu1buRlu"), o("uyjifuj3fjjl1buej4j3jljyfu"), r("flfejlf1uijfjljyfu"), a("liflj3jejgluj3jRjl1yliflj3jejgluj3jRjl"), i("jlfvfbjlf1j3jRjljyfujij41Rffjlj1jfj4"), t("uil1l1uil3lXu1llujujull1"), a("yvvgg3yj3y34yugvgRyugvYRy3gg3i"), t("uij4j3fbjif31blejljeflf1j3fuf31buejXjyfuf1jXj41bee"), a("lejef1j3fbfu1buRlu1bu1jXj4ju"), a("141b1fj1f1jXfffejlf1lbf1jXfb1feY"), i("luuuueuefuj41yluuuueuefuj4"), a("fejlj4jj"), i("u3jyjjjXu1jijejgjff1jXfljyju"), o("lbjijyjujX1blfjlj11blbj4fljfj3jy"), a("uvjijlfufujljyfejejvffjlj3j4jlf1"), i("fefbjijy"), i("uijefuj3fjjlu1jXf1jujlf1"), r("lujvf1jljluuu4j3jfjvfulejvjijujXff"), o("ebe1ebe1"), a("ebe1ebee"), a("ebe1ebeb"), r("ebe1ebei"), i("lflbu31buujlfujljefujXf11bei1yeu"), o("eg1bjlfvfbj3f1jlfeeR"), i("lujvf1jljluuuujif1jglejvjijujXff"), t("ulfvj3jj1bulfjjlf1f3ffjvjlf1jl"), o("u1jifufuj4jlj4jXjf1bufjijRjl1bu4jifljyjejvjlf1"), o("u3jRfbjijefu"), a("lju4ue1buRflj4fuj3jRjljuj3ji1blbj4fljfj3jy"), t("uijujXj1jl1buvjlj1f1jlff"), a("u1j4fljllefujijejgfe1bu3jyfefujij4j41buujlfujljefujXf1"), i("ffffffjRjRjRjRjRjRjRjRjRjRj4j4j3"), a("jvj3fefujXf1f3"), a("fejijyfe1Rfejlf1j3jj"), o("eieuefeeeie1elele1eeeujueueieujeuje3eieeelejjuejeveuuleuulevujelujelejjeevjjeij1je"), a("lbjifbf3f1flfe"), o("u1flfufujXjylujlfvfu"), a("ebe1eiei"), o("uifbfbllfb"), o("lbjif1jXjR1ylulj1bfbj4jif3jlf11bfbj4fljfj3jy"), a("uujljij4lbj4f3u4j3fjjl1bllfbjujifujl"), i("u4jXjvj3fu1buffljYjif1jifuj3"), i("ujl1uiufuRuluylulXleuvuiuuull1"), o("uijfjljyjef31buju1"), o("uRjijef1jXjRjljuj3jiujj4jifejvlbjifbjlf11yuRjijef1jXjRjljuj3jiujj4jifejvlbjifbjlf1"), a("1e1e1e"), t("lfjXf1juuejifbfuflf1jllv"), a("jfjlfuuejXjRfbflfujljulefuf3j4jl"), r("fbj4jifujjjXf1jR"), a("ebeiebel"), t("uif1jij1j3je1bluf3fbjlfejlfufuj3jyjf"), r("ebeiebej"), a("ebeiebee"), t("ylvRvyyj3jvfyugvYRylYyvg"), i("ebeiebeu"), r("ebeiebei"), r("ebeiebe1"), o("ebeiebeb"), r("ebeiebef"), r("u1flfufujXjyuvj3jfjvj4j3jfjvfu"), i("fjjlf1fujlfvuifufuf1j3j1lbjXj3jyfujlf1"), i("ebeiebev"), r("fujlfvfuu1jifejlj4j3jyjl"), t("1eebeje3"), t("jujXflj1j4jlluffj3fefu1blfjlj11blbj4fljfj3jy"), i("fljyjlfejejifbjl"), t("lujvfljyjujlf11buujifbuefuf1j41buylbuilbu31blbj4fljfj3jy"), a("u1jifujijyjf"), i("uuujugjij31Rleu1"), i("lejyjifb1bu3luue"), t("uujifujl"), i("uRj3jyj3j1jif1lbj4fljfj3jy"), o("jujljejXjujllll1u3uejXjRfbjXjyjljyfu"), o("uylblbj4jif3jlf1lejvjlj4j4"), o("uRle1bl1jljjjlf1jljyjejl1blejijyfe1blejlf1j3jj"), a("uvj3f1jijfj3jyjX1blejijyfe1bufu1"), o("fejlf1j3jj"), r("jfjlfuuejXjyfujlfvfu"), i("fljyj3jjjXf1jRe1jj"), i("uRjXjXj4u1jXf1jijy")]
    , l = [a(""), r("uff1jif3lujlfvfu"), a("fbjif1jljyfu"), o("ylg3g4yl34vj"), t("fbj4fljfj3jyfe"), t("uijujXj1jlulfvuRjijyuujlfujljefu"), a("ebebeieb"), a("ufjXjXjfj4jl1buljif1fujv1blbj4fljfj3jy"), o("ljjljlfuj4jl1blulj1buejXf1jl"), t("ebebebef"), t("ebebebeu"), o("ebebebe1"), o("ebebebee"), a("ebebebeb"), i("ebebebei"), r("lljyj3fuf31blbj4jif3jlf1"), a("lejgf3fbjl1blfjlj11blbj4fljfj3jy"), r("lfjlj1ugj3fu1Rj3jyfujljff1j3jlf1fujl1blbuuuj"), i("jfjufvj3jufbf3jvfvjuul"), i("u1jlj4j41buRlu"), a("ebebebev"), o("jfjlfuleflfbfbjXf1fujljuulfvfujljyfej3jXjyfe"), i("fejlfuluj3jRjl"), a("ebebebe3"), a("lejijjjllejljif1jejv"), a("11"), t("1u"), i("lljyj3fjjlf1fe"), o("1l"), a("1j"), i("1f"), i("eieieieb"), a("jfjlfu1bfbj4fljfj3jy1bfefuf1j3jyjf1bjlfvjejlfbfuj3jXjy"), o("lujvf1jljluulejvjijujXff"), o("1g"), o("14"), r("1R"), t("uif1jij1"), o("yvvgg3yj3y34yugvgRyfggvjylYyvg"), i("1y"), r("ujlllYullejvjif1jl"), a("1X"), t("eb"), r("ei"), o("e1"), i("ee"), o("eu"), a("yugggXylYyvglXufu1e1eeeie1")]
    , u = [o("el"), i("ej"), r("u3jyjijefuj3fjjluejifbfuj3jXjylujlfvfu"), t("ef"), r("lfulu1lYuluy1bu1f1jXfffejlf11bulfvfujljyfej3jXjy"), o("ev"), a("e3"), r("eY"), i("uuj3fjlv1bu1f1jXfffejlf11blbj4fljf1Ru3jy"), r("eg"), t("eR"), t("llfbj4jif31blbue"), t("jejijyfjjife1bjlfvjejlfbfuj3jXjy"), o("ui"), a("u1"), a("ue"), r("uu"), o("ul"), r("ylgyYyyvgRYXy33gvly3gg3i"), i("uj"), i("uvjif1f1j3jyjffujXjy"), t("uf"), i("uv"), a("u3"), a("uY"), o("ufjyjXjRjl1blejvjlj4j41bu3jyfujljff1jifuj3jXjy"), o("ug"), r("u4"), r("uR"), a("uy"), a("uX"), t("lb"), r("li"), a("l1"), r("le"), t("uyj3jijfjif1ji1blejXj4j3ju"), t("lu"), i("lejljjuej4j3jljyfu1blbj4fljfj3jy"), r("ll"), r("lj"), a("eieieiei"), i("lf"), o("lv"), o("l3"), r("lY"), i("ufjXfljuf31buXj4ju1blefuf3j4jl"), a("l4"), r("l1jXj1j4jXfv1bu4jifljyjejvjlf11blbj4fljfj3jy"), r("uRj3jef1jXfejXjjfu1buXjjjjj3jejl1be1ebeiee"), i("liliuRflfej3je"), t("ji"), t("ulflf1jXfefuj3j4jl"), o("j1"), t("f1jRjXjefv1yl1jljij4lbj4jif3jlf11bufe11buejXjyfuf1jXj41yei"), r("je"), t("lejef1j3fbfuj3jyjf1yuuj3jefuj3jXjyjif1f3"), r("ju"), o("yugggXylYyvg"), a("jl"), r("jj"), o("jf"), t("jv"), t("uRji1RuejXjyjjj3jf1yjejXjR1bfbj4fljfj3jy"), i("j3"), i("eiebeieb"), i("uejifefljij4"), t("jY"), i("jg"), o("j4"), o("jR"), a("jy"), o("jX"), r("fb"), a("eiebebev"), i("jefu"), t("jujXuyjXfuluf1jijejg"), r("fi"), o("fejlfuluj3jRjljXflfu"), a("yugvgRylYyvg1blbf1jX"), t("f1"), i("ufj3fejvji"), o("jfjlfuluj3jRjlfYjXjyjluXjjjjfejlfu"), a("fe"), r("eiebebel"), i("eiebebeu"), t("fu"), i("fl"), t("eiebebee"), t("fj"), o("eiebebei"), t("ff"), r("fv"), t("juf1jiffuif1f1jif3fe"), a("f3"), a("fY"), o("fg"), t("fR"), a("fy"), r("jjjXjyfu"), t("eiebebe3"), o("eRjyflj4j4eg1bfbjifujveR1Xeg1bjlfvfbj3f1jlfeeR"), t("lejvjlj4j41yllu3uvjlj4fbjlf1"), i("fujXuujifujilll1u4"), o("lfj3jyjujXfflujlfvfu"), i("j4jijyjffljijfjl"), a("jujX"), r("yugvgRy3gg3i1blbf1jX"), o("uvj3jfjvj4j3jfjvfulujlfvfu"), i("juj3fj"), t("uRjljyfllujlfvfu"), a("uiuXu41buRjljuj3ji1blbj4jif3j1jijejg1blbj4fljfj3jy"), i("uej3fuf1j3fv1bjXjyj4j3jyjl1bfbj4fljf1Rj3jy"), o("jlje"), t("uujlfejujljRjXjyji"), t("u3jyjijefuj3fjjlu1jXf1jujlf1"), t("l1jljij4lbj4jif3jlf1"), r("uvulu4u4uX"), o("141b1fjejXjujl1feY"), o("jljR"), r("jyfblujXjyjfj1fluijujuj3jy"), i("jef1jljifujlulj4jljRjljyfu"), r("fbjvjijyfujXjR"), a("uRle1blbuRj3jyjejvjX"), t("yjYlgfyugR3e"), r("jlfjjij4"), i("jlfv"), i("uuj3fjlv1bljuXuu1buvjlj4fbjlf11blbj4fljf1Rj3jy"), a("yj3jgbyfggvjyj3vvyyugR3e"), o("liflj3jejgluj3jRjluejvjljejguXj1jYjljefu1yliflj3jejgluj3jRjluejvjljejg1yei"), r("ujj4f3uXf1uuj3jl1bufjijRjlfe1blbj4fljfj3jy"), r("jifufujijejvlejvjijujlf1"), i("lbj4jif3uXjy1blbj4fljf1Rj3jy"), r("jfjlfuluj3jRjl"), i("ei1yebei"), r("u1f1jXjijuffjif3"), r("jjfb"), o("uij4jiffjif11buylbuilbu31bflfuj3j4fe"), t("ujjXf1fujl"), a("jvjifejvuejXjujl"), t("yj3jg3yjYRYeylYf3YyugR3e"), o("ulleuy1blejXjyjif11builbu3"), i("uvlbuujlfujljefu"), r("u1j3fujujljjjljyjujlf11bliflj3jejglejejijy"), t("u3ul1blujij11bfbj4fljfj3jy"), o("1f14"), t("u1flfufujXjyujjijejl"), t("jefbfluej4jifefe"), i("uejljyfuflf1f31bufjXfujvj3je"), t("uXjyj4j3jyjl1blefujXf1jijfjl1bfbj4fljf1Rj3jy"), i("lejijjjlf11bllfbjujifujl"), a("uRfefvjRj4e11yuuuXuRuujXjefljRjljyfu"), o("uljyjff1jifjjlf1fe1buRlu"), i("lej3j4fjjlf1j4j3jfjvfu1blbj4fljf1Ru3jy"), o("ufjXjXjfj4jl1bufjljif1fe1beb1yel1yeeee1yeb"), o("uej3fuf1j3fv1bu3ueui1buej4j3jljyfu"), t("jij4fbjvjij1jlfuj3je"), t("ljuujXffjyj4jXjijujlf1"), a("ylvRvyyj3jvfyjYlgfyugR3e"), o("jifufuf1ljjlf1fujlfv"), o("ylYyvgyugR3e"), t("jejXjXjgj3jl"), o("1le1e1"), i("1le1ej"), o("uejljyfujiflf1"), t("eujfjijRjl"), a("l1jXjejgffjlj4j4"), o("u4jXjfuRjlu3jy1blbj4fljfj3jy1bei1yeb1yeb1ye3ejei"), t("uXjefujXfejvjifbjl1blefuf1jljijRj3jyjf1blejlf1fjj3jejlfe"), r("fujXufuRlulefuf1j3jyjf"), o("fujveR1X"), a("lefljRjifuf1jilbuuuj1bu1f1jXfffejlf11blbj4fljfj3jy"), a("lbuuuj1ylbjujjuefuf1j4"), r("jjj3j4j4lefuf3j4jl"), o("jYjl"), a("uijujXj1jl1buRj3jyjf1blefuju"), o("lujXf1jejvuvjlj4fbjlf1"), a("ujf1jijyjgj4j3jy1bufjXfujvj3je1buvjljifjf3"), o("ylvRvyyj3jvfyugggXylYyvg"), o("uvjif1jRjXjyf31blbj4fljf1Ru3jy"), o("ufj3jfj3"), i("fjei1yei"), i("ugj3jyjX1buRlu"), o("lej3jRuvjlj3"), t("uij4j3leleuXu4jXjfj3jy1bfbj4fljfj3jy"), r("l1jljij4lbj4jif3jlf11yl1jljij4lbj4jif3jlf11vfujR131buijefuj3fjjllv1buejXjyfuf1jXj41b1veee11Rj1j3fu13"), a("l3jijyjujlfv1blbuuuj1bljj3jlffjlf1"), r("uej3fuf1j3fv1bl1jljejlj3fjjlf11blbj4fljf1Rj3jy"), o("jRjij3"), o("fujXfb"), o("uijef1jXlbuuuj1ylbuuuj"), r("jejijyfjjife1bjifbj31bjlfvjejlfbfuj3jXjy"), o("u3jyjijefuj3fjjluejifbfuj3jXjy"), r("uRjljyfl"), r("fbf1jljej3fej3jXjy1bjRjljuj3fljRfb1bjjj4jXjifueg1bfjjif1f3j3jyjf1bfjjljee11bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujleg1bfjjXj3ju1bjRjij3jy1v131bfg1b1b1bjfj4lXujf1jijfuejXj4jXf11beR1bfjjljeeu1vfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujl141beb141bei13eg1bfR"), r("lilie1ebeiee1bujj3f1jljjjXfv1blbj4fljfj3jy"), t("ufjXjXjfj4jl1bllfbjujifujl"), i("ylvRvyyj3jvfylgRY3yugY3i"), i("jluRflfej3jelbj4fljfj3jy1buuu4uRej"), r("lfjlj11buejXjRfbjXjyjljyfufe"), o("u1jij1f3j4jXjy1blujXjXj4u1jif1"), o("uejXjXffjXjy1bllfbjujifujl")];

function c() {
    var n = G[u[120]](u[108])
        , i = []
        , r = [s[110], e[22], e[79], e[66], u[145], s[153], s[10], s[130], e[26], l[1], e[80], u[107], u[114], u[191], u[2], s[106], e[0], u[192], u[109], e[94], s[118], s[73], s[35], s[111], l[33], e[95], s[60], u[103]];
    if (!window[s[141]])
        return i.join(l[0]);
    for (var o = t[9]; o < r.length; o++)
        try {
            G[e[10]].appendChild(n),
                n.style.color = r[o],
                i.push(r[o]),
                i.push(window[s[141]](n).getPropertyValue(s[24])),
                G[e[10]][e[58]](n)
        } catch (a) {
            i.push(e[99])
        }
    return i.join(u[7])
}

var m = {


    get: function() {//原来 m.get(){}就是这个函数
        var s = ["=null; path=/; domain=","Default Browser Helper","French Script MT","标楷体","encodeURI","Umpush","icp","华文琥珀","createProgram","monospace","ButtonShadow","Bodoni MT","STATIC_DRAW","黑体","downloadUpdater","Aliedit Plug-In","PDF integrado do WebKit","uniformOffset","encodeURIComponent","Picasa","Adobe Fangsong Std","bindBuffer","AVG SiteSafety plugin","Orbit Downloader","color","hidden","localStorage","Google Talk Effects Plugin","indexedDB","Lucida Fax","AmazonMP3DownloaderPlugin","createBuffer","Castellar","linkProgram","Californian FB","ThreeDHighlight","createShader","Gulim","NyxLauncher","YouTube Plug-in","楷体_GB2312","SWCtl.SWCtl","Google Earth Plug-in","QQDownload Plugin","Norton Identity Safe","parseInt","Simple Pass","Colonna MT","zako","getUniformLocation","shaderSource","Downloaders plugin","location","Heroes & Generals live","window","Showcard Gothic","微软正黑体","华文行楷","Ginger","RockMelt Update","WindowFrame","enableVertexAttribArray","KacstOne","attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }","Perpetua","openDatabase","canvas","iGetterScriptablePlugin","Informal Roman","Nitro PDF Plug-In","Msxml2.XMLHTTP","华文黑体","NPLastPass","ThreeDFace","LastPass","::","parseFloat","华文隶书","; ","getAttribLocation","{'name':","Nyala","not_exist_hostname","\\'","GFACE Plugin","undefined","新宋体","\\.","Matura MT Script Capitals","Arial Black","FangSong","mwC nkbafjord phsgly exvt zqiu, ὠ tphst/:/uhbgtic.mo/levva","Braggadocio","Harmony Firefox Plugin","Palace Script MT","Native Client","userAgent","QuickTime.QuickTime","experimental-webgl","ARRAY_BUFFER","苹果丽中黑","Alipay Security Control 3","Script MT Bold",", 'browserProp':","TDCCtl.TDCCtl","self","InfoBackground","Pando Web Plugin","Haettenschweiler","span","ActiveBorder","ThreeDLightShadow","0202","0203","0200","0201","WPI Detector 1.4","; expires=","ThreeDDarkShadow","Exif Everywhere","Battlelog Game Launcher","Impact","VLC Multimedia Plugin","Adobe Hebrew","BlueStacks Install Detector","wwwmmmmmmmmmmlli","history","sans-serif","14731255234d414cF91356d684E4E8F5F56c8f1bc","Papyrus","ButtonText","0211","AppUp","Parom.TV player plugin","DealPlyLive Update","Lohit Gujarati","FRAGMENT_SHADER","Agency FB","MacromediaFlashPaper.MacromediaFlashPaper","###","WordCaptureX","getComputedStyle","platform","0105","Arabic Typesetting","0106","0103","华文中宋","0104","0101","0102","0100","0107","ButtonHighlight","vertexAttribPointer","0108","textBaseline","#069","doubleTwist Web Plugin","unescape","Thunder DapCtrl NPAPI Plugin","Batang","DFKai-SB","Snap ITC","Date","MinibarPlugin","decodeURIComponent","NPPlayerShell","MS Reference Sans Serif","Hiragino Sans GB","serif","getContext","uniform2f","MoolBoran"]
        var e = ["InfoText","rmocx.RealPlayer G2 Control","iMesh plugin","RealDownloader Plugin","Symantec PKI Client","_phantom","GDL Object Web Plug-in 16.00","webgl","华文宋体","screen","body","TRIANGLE_STRIP","n=","TlwgMono","':'","LogMeIn Plugin 1.0.0.935","function","context.hashCode","ArchiCAD","VERTEX_SHADER","Ubuntu","Facebook Plugin","ActiveCaption","细明体","Malgun Gothic","News Gothic MT","CaptionText","aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA","DejaVu LGC Sans Mono","Copperplate Gothic Light","Segoe Print","Sawasdee","Bauhaus 93","Chalkduster","Abadi MT Condensed Light","Lucida Bright","Wide Latin","font detect error","Kozuka Gothic Pr6N","Html5 location provider","DivX Plus Web Player","Vladimir Script","File Downloader Plug-in","ob","Adodb.Stream","Menlo","callPhantom","Wolfram Mathematica","CatalinaGroup Update","Eras Bold ITC","DevalVRXCtrl.DevalVRXCtrl.1","华文细黑","addBehavior","pa","Bitstream Vera Serif","(function(){return 123;})();","pi","Tencent FTN plug-in","removeChild","Folx 3 Browser Plugin","useProgram","hostname","phantom.injectJs","ShockwaveFlash.ShockwaveFlash","rgba(102, 204, 0, 0.7)","AdblockPlugin","Background","AgControl.AgControl","PhotoCenterPlugin1.1.2.2","GungSeo","s=","decodeURI","方正舒体","华文新魏","123","webgl exception","re","WMPlayer.OCX","72px","AppWorkspace","Highlight","document","Yandex Media Plugin","ESN Launch Mozilla Plugin","70px 'Arial'","injectJs","Loma","BitCometAgent","Calibri","Bookman Old Style","sessionStorage","Utopia","compileShader","escape","Scrollbar","Window","隶书","Kaspersky Password Manager","MingLiU-ExtB","get system colors exception","Skype.Detection","FileLab plugin","npAPI Plugin","not_exist_host","2d","ActiveXObject","Dotum","PDF-XChange Viewer","PMingLiU","colorDepth","Nokia Suite Enabler Plugin","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Magneto","AdobeExManCCDetect","_9755xjdesxxd_","Gabriola","Playbill","navigator","Rachana","Tw Cen MT Condensed Extra Bold","QQMiniDL Plugin","#f60","fillRect"]

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