
//获取当前时间
// var p = (new window["Date"])["getTime"]() + de, _ = p + 1000 * 60 * 60 * 24 * 365 * 5;
var p = new Date().getTime() + 900000, my_ = p + 1000 * 60 * 60 * 24 * 365 * 5;
console.log(p)
console.log(my_)

function b(e) {
    if (e < -128)
        return b(1218 - (-128 - e));
    if (e >= -128 && e <= -127)
        return e;
    if (e > -127)
        return b(-129 + e - (-127));
    throw Error("1001")
}

//参数E的生成
var E = []
for (var C = 0; C < 4; C++) {
    var O = Math.random() * 256
        , O = Math.floor(O);
    console.log("O: ", O);
    E[C] = b(O)
    console.log("E[C]: ", E[C])
}


console.log(b(123))
console.log("参数E："+E)


//函数c，用于更新传递进来的参数i；目前看到传递进来的n，r都是为0的，这就很尴尬了，明显看出来就是将参数e，一个一个赋值给参数i
function c(e, n, i, r, o) {
    if (null != e && e.length != 0) {
        if (null == i)
            throw Error(u[84]);
        if (e.length < o)
            throw Error(u[87]);
        for (var a = 0; a < o; a++)
            i[r + a] = e[n + a]
            // i[0 + a] = e[0 + a]//这tm就是等于复制一份啊
    }
}

//参数Y在下面的逗号表达式，调用函数c的时候会更新
Y = [],
// c(E, t[9], Y, t[9], ae);
c(E, 0, Y, 0, 4);//E就是前面生成的参数，可以写死，因为是随机生成的：本地生成：[-128, -127, -127, -128]；浏览器生成：[120, 41, 62, -96]
// c([120, 41, 62, -96], 0, Y, 0, 4);//E就是前面生成的参数，可以写死，因为是随机生成的：本地生成：[-128, -127, -127, -128]；浏览器生成：[120, 41, 62, -96]
//上面两行分析出现错误，没想到，最后的Y是等于这个：
/**
 [120,41,62,-96,115,75,61,-94,-117,88,65,15,-58,-63,-113,-100,-9,-38,42,117,127,-99,29,62,47,-87,5,21,30,77,-102,26,-71,127,86,55,31,-4,-81,72,-83,107,28,-39,-17,37,56,-111,-8,14,10,59,110,-24,-23,-123,54,12,27,10,118,-7,-23,113,-70,118,63,-62,-8,-114,-16,5,-92,39,70,-70,61,20,10,-51,-75,-101,16,-34,122,74,-21,33,105,-94,76,119,-102,127,91,96,97,-70,9,94,-82,-76,-119,105,25,40,-99,-98,106,-24,118,-40,-118,24,5,-75,-106,-75,-4,110,127,-26,-125,112,-13,-54,-39,100,6,110,92,-121]
 * */
Y = [120,41,62,-96,115,75,61,-94,-117,88,65,15,-58,-63,-113,-100,-9,-38,42,117,127,-99,29,62,47,-87,5,21,30,77,-102,26,-71,127,86,55,31,-4,-81,72,-83,107,28,-39,-17,37,56,-111,-8,14,10,59,110,-24,-23,-123,54,12,27,10,118,-7,-23,113,-70,118,63,-62,-8,-114,-16,5,-92,39,70,-70,61,20,10,-51,-75,-101,16,-34,122,74,-21,33,105,-94,76,119,-102,127,91,96,97,-70,9,94,-82,-76,-119,105,25,40,-99,-98,106,-24,118,-40,-118,24,5,-75,-106,-75,-4,110,127,-26,-125,112,-13,-54,-39,100,6,110,92,-121]
Y = [-62, 39, 21, 127, 6, 15, -70, 106, 127, -70, -38, 9, -24, -63, -23, 62, -99, 110, 118, 119, -13, -83, 56, 110, 94, 26, -76, -99, -123, -125, -102, 54, -82, 70, -71, -70, 61, -51, -16, 97, -17, 10, -121, -26, 30, -102, -58, 117, -7, -23, 122, 24, 115, 16, 91, 42, 100, 28, -39, 20, -94, -118, -8, 33, 113, 86, 76, -4, 112, 10, 37, 92, -113, 14, -4, 118, 127, 55, -98, -92, 120, -75, 62, 27, -81, -34, 72, -39, 75, -100, -54, -101, 40, 105, -24, 25, 10, 63, -21, -119, 65, 77, 107, 12, -8, -111, 118, 5, 5, 110, -9, 96, 5, -96, 127, 105, 31, 29, -75, 61, 47, 74, 41, -117, 88, -106, -87, -75, -114, 59, -40, -94]

function randArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        var iRand = parseInt(arr.length * Math.random());
        var temp = arr[i];
        arr[i] = arr[iRand];
        arr[iRand] = temp;
    }
    return arr;
}
Y = randArr(Y)
console.log("参数Y："+Y)

//参数Oe的生成：
function a(e, n, i) {
    var t = [66,60,79,60,7,17,33,96,68,0,2,1423857449,-2,3,-3,3432918353,1555261956,4,2847714899,-4,5,-5,2714866558,1281953886,6,-6,198958881,1141124467,2970347812,-7,7,3110523913,8,-8,2428444049,-9,9,10,-10,-11,11,2563907772,-12,12,13,2282248934,-13,2154129355,-14,14,15,-15,16,-16,17,-17,-18,18,19,-19,20,-20,21,-21,-22,22,-23,23,24,-24,25,-25,-26,26,27,-27,28,-28,29,-29,30,-30,31,-31,33,-33,-32,32,-34,-35,34,35,37,-37,36,-36,38,39,-39,-38,40,41,-41,-40,42,-43,-42,43,45,-45,-44,44,47,-46,-47,46,48,-49,-48,49,-50,51,-51,50,570562233,53,-52,52,-53,-54,-55,55,54,503444072,57,-56,-57,56,59,58,-59,-58,60,61,-61,-60,62,63,-63,-62,-64,711928724,-66,67,-65,65,-67,66,64,-71,-69,69,68,70,-68,-70,71,-72,3686517206,-74,-73,73,75,74,-75,72,-79,76,79,78,-78,-76,77,-77,3554079995,-81,81,-82,-83,80,-80,82,83,-84,84,85,-86,-87,86,-85,87,90,-88,-89,-90,88,89,91,-91,94,92,95,-94,93,-93,-95,-92,-98,97,98,-97,-99,96,99,-96,-100,3272380065,102,-102,-101,-103,103,100,101,-107,-104,105,104,106,-106,-105,107,109,-109,-108,-111,110,-110,111,108,251722036,115,-115,112,-114,-112,113,114,-113,-117,119,-116,-119,117,-118,118,116,123,-120,122,-121,120,-122,-123,121,125,127,3412177804,-127,126,-126,124,-125,-124,-128,128,-129,1843258603,3803740692,984961486,3939845945,4195302755,4066508878,255,1706088902,256,1969922972,365,2097651377,376229701,853044451,752459403,1000,426522225,3772115230,615818150,3904427059,4167216745,4027552580,3654703836,1886057615,879679996,3518719985,3244367275,2013776290,3373015174,1759359992,285281116,1622183637,1006888145,10000,1231636301,83908371,1090812512,2463272603,1373503546,2596254646,2321926636,1504918807,2181625025,2882616665,2747007092,3009837614,3138078467,397917763,81470997,829329135,2657392035,956543938,2517215374,2262029012,40735498,2394877945,3266489909,702138776,2808555105,2936675148,1258607687,1131014506,3218104598,3082640443,1404277552,565507253,534414190,1541320221,1913087877,2053790376,1789927666,3965973030,3826175755,4107580753,4240017532,1658658271,3579855332,3708648649,3453421203,3317316542,1873836001,1742555852,461845907,3608007406,1996959894,3747672003,3485111705,2137656763,3352799412,213261112,3993919788,1.01,3865271297,4139329115,4275313526,282753626,1068828381,2768942443,2909243462,936918000,3183342108,27492,141376813,3050360625,654459306,2617837225,1454621731,2489596804,2227061214,1591671054,2362670323,4294967295,1308918612,2246822507,795835527,1181335161,414664567,4279200368,1661365465,1037604311,4150417245,3887607047,1802195444,4023717930,2075208622,1943803523,901097722,628085408,755167117,3322730930,3462522015,3736837829,3604390888,2366115317,0.4,2238001368,2512341634,2647816111,-0.2,314042704,1510334235,900000,58964,1382605366,31158534,450548861,3020668471,1119000684,3160834842,2898065728,1256170817,2765210733,3060149565,3188396048,2932959818,124634137,2797360999,366619977,62317068,-0.26,1202900863,498536548,1340076626,2405801727,2265490386,1594198024,1466479909,2547177864,249268274,2680153253,2125561021,3294710456,855842277,3423369109,0.732134444,3705015759,3569037538,1994146192,1711684554,1852507879,997073096,733239954,4251122042,601450431,4111451223,167816743,3855990285,3988292384,3369554304,3233442989,3495958263,3624741850,65535,453092731,-0.9,2094854071,1957810842,325883990,4057260610,1684777152,4189708143,3915621685,162941995,1812370925,3775830040,783551873,3134207493,1172266101,2998733608,2724688242,1303535960,2852801631,112637215,1567103746,651767980,1426400815,906185462,2211677639,1047427035,2344532202,2607071920,2466906013,225274430,544179635,2176718541,2312317920,1483230225,1342533948,2567524794,2439277719,1088359270,671266974,1219638859,840000,953729732,3099436303,2966460450,817233897,2685067896,2825379669,4089016648,4224994405,3943577151,3814918930,476864866,1634467795,335633487,1762050814,1,2044508324,-1,3401237130,3268935591,3524101629,3663771856,1907459465]
    var u = ["5","6","InactiveCaptionText","7","WEBZEN Browser Extension","8","9",":","DivX Browser Plug-In",";","=","Uplay PC","canvas exception","A","B","C","D","E","微软雅黑","F","Harrington","G","H","I","J","Gnome Shell Integration","K","L","M","N","O","P","Q","R","S","Niagara Solid","T","SefClient Plugin","U","V","1111","W","X","Y","Z","Goudy Old Style","\\","Roblox Launcher Plugin","Microsoft Office 2013","QQMusic","a","Eurostile","b","rmocx.RealPlayer G2 Control.1","c","Scripting.Dictionary","d","仿宋","e","f","g","h","Ma-Config.com plugin","i","1010","Casual","j","k","l","m","n","o","p","1008","ct","doNotTrack","q","setTimeout","丽宋 Pro","r","Gisha","getTimezoneOffset","s","1005","1004","t","u","1003","v","1001","w","x","drawArrays","y","z","{","}","~","font","1009","=null; path=/; expires=","Shell.UIHelper","toDataURL","WindowText","language","do","丽黑 Pro","HighlightText","div","MenuText","AOL Media Playback Plugin","Citrix online plug-in","ec","Desdemona","InactiveBorder","RealPlayer","HELLO",", 'code':","em","npTongbuAddin","createElement","phantom","MS PMincho","楷体","eval","ex","DivX VOD Helper Plug-in","新细明体","QuickTimeCheckObject.QuickTimeCheck.1","FlyOrDie Games Plugin","attachShader","PlayOn Plug-in","getTime","1.01","Broadway","fp","Alawar NPAPI utils","Forte","hashCode","方正姚体","ESN Sonar API","HPDetect","Bitdefender QuickScan","IE Tab plugin","',","ButtonFace","cpuClass","Century Gothic","Online Storage plug-in","Safer Update","Msxml2.DOMDocument","Engravers MT","Silverlight Plug-In","Google Gears 0.5.33.0","Citrix ICA Client","alphabetic","VDownloader","华文楷体","attrVertex","宋体","cookie","%22","%26","Centaur","4game","Rockwell","LogMeIn Plugin 1.0.0.961","Octoshape Streaming Services","toGMTString","th=/","SumatraPDF Browser Plugin","PDF.PdfCtrl","fillStyle","je","Adobe Ming Std","TorchHelper","Franklin Gothic Heavy","华文仿宋","Harmony Plug-In","Gigi","v1.1","Kino MT","SimHei","AliSSOLogin plugin","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","Yandex PDF Viewer","Citrix Receiver Plug-in","mai","top","AcroPDF.PDF","canvas api exception","InactiveCaption","Menu","precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }","QQ2013 Firefox Plugin","Google Update","华文彩云","eMusicPlugin DLM6","Web Components","Babylon ToolBar","Coowon Update"]
    var l = ["", "GrayText", "parent", "幼圆", "plugins", "AdobeExManDetect", "0010", "Google Earth Plugin", "Veetle TV Core", "0007", "0004", "0002", "0003", "0000", "0001", "Unity Player", "Skype Web Plugin", "WebKit-integrierte PDF", "gdxidpyhxdE", "Bell MT", "0008", "getSupportedExtensions", "setTime", "0009", "SafeSearch", "\"", "$", "Univers", "%", "&", "'", "1110", "get plugin string exception", "ThreeDShadow", "+", ",", "-", "Arab", "苹果丽细宋", ".", "FUZEShare", "/", "0", "1", "2", "3", "4", "仿宋_GB2312"]


    var r;
    // var o = [l[44], l[46], l[42], u[50], u[43], u[22], u[63], u[32], u[91], u[27], u[46], u[44], u[86], u[59], u[39], u[68], u[60], u[5], u[82], u[31], u[28], u[33], u[1], u[56], u[21], u[67], u[42], u[88], u[30], l[41], u[15], u[52], u[90], u[6], u[41], u[16], u[66], l[43], u[17], u[36], u[93], u[23], u[34], u[54], u[69], u[58], u[71], u[24], u[94], l[45], u[3], u[76], u[85], u[61], u[14], u[79], u[38], l[34], u[26], u[29], u[13], u[0], u[72], u[70]];
    // var a = u[19];
    var a = "F";
    var s = [];
    //目前先暂定o为：
    var o = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"];

    if (i == t[535])
        i = e[n],
            r = t[9],
            s.push(o[i >>> t[10] & t[147]]),
            s.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
            s.push(a),
            s.push(a);
    else if (i == t[10])
        i = e[n],
            r = e[n + t[535]],
            e = t[9],
            s.push(o[i >>> t[10] & t[147]]),
            s.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
            s.push(o[(r << t[10] & t[142]) + (e >>> t[24] & t[13])]),
            s.push(a);
    else {
        if (i != t[13])
            throw Error(u[64]);
        i = e[n],
            r = e[n + t[535]],
            e = e[n + t[10]],
            s.push(o[i >>> t[10] & t[147]]),
            s.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
            s.push(o[(r << t[10] & t[142]) + (e >>> t[24] & t[13])]),
            s.push(o[e & t[147]])
    }
    return s.join(l[0])
}

var Oe = "";
var Ie = 3;
// for (var K = [], $e = t[9]; $e < Y.length; ) {
for (var K = [], $e = 0; $e < Y.length; ) {
    if (!($e + Ie <= Y.length)) {
        K.push(a(Y, $e, Y.length - $e));
        break
    }
    K.push(a(Y, $e, Ie)),
        $e += Ie
}
// Oe = K.join(l[0])
Oe = K.join("")

var h = Oe;
// h = h + u[7] + p
// h = h + ":" + p
var _t = new Date().getTime() + 900000;
h = h + ":" + _t
console.log(h)

/*

["27747153094550", "30084913513448"]

7vJVfgfvcS5yZlpa4euTlQryOKUZIcsgZe4KALm4jRx4mea/uXhGVZ8jgq0hGRpgQVfkVRxmPQB96UbU8CcfLgyqKmWl/7MVMdHwbNSihsJQusBgkZsbrXp3cmH5B3RZf8wKm7JyoXhDZmVimYgWDXdvoWPe/UsI0NPanht8Y0mS0xrD:1595944380625

1595944380625

*/



/*
* 目前发现的常量：
* je = 62
* de = 900000
* ie=64
* t[9]=0
* t[295]=256
* ae=4
* t[302]=1000
* t[142]=60
* t[68]=24
* t[297]=365
* t[20]=5
* t[13]=3
* u[19]="F"
*
*


直接将t数组抠出来了：
t =
[66,60,79,60,7,17,33,96,68,0,2,1423857449,-2,3,-3,3432918353,1555261956,4,2847714899,-4,5,-5,2714866558,1281953886,6,-6,198958881,1141124467,2970347812,-7,7,3110523913,8,-8,2428444049,-9,9,10,-10,-11,11,2563907772,-12,12,13,2282248934,-13,2154129355,-14,14,15,-15,16,-16,17,-17,-18,18,19,-19,20,-20,21,-21,-22,22,-23,23,24,-24,25,-25,-26,26,27,-27,28,-28,29,-29,30,-30,31,-31,33,-33,-32,32,-34,-35,34,35,37,-37,36,-36,38,39,-39,-38,40,41,-41,-40,42,-43,-42,43,45,-45,-44,44,47,-46,-47,46,48,-49,-48,49,-50,51,-51,50,570562233,53,-52,52,-53,-54,-55,55,54,503444072,57,-56,-57,56,59,58,-59,-58,60,61,-61,-60,62,63,-63,-62,-64,711928724,-66,67,-65,65,-67,66,64,-71,-69,69,68,70,-68,-70,71,-72,3686517206,-74,-73,73,75,74,-75,72,-79,76,79,78,-78,-76,77,-77,3554079995,-81,81,-82,-83,80,-80,82,83,-84,84,85,-86,-87,86,-85,87,90,-88,-89,-90,88,89,91,-91,94,92,95,-94,93,-93,-95,-92,-98,97,98,-97,-99,96,99,-96,-100,3272380065,102,-102,-101,-103,103,100,101,-107,-104,105,104,106,-106,-105,107,109,-109,-108,-111,110,-110,111,108,251722036,115,-115,112,-114,-112,113,114,-113,-117,119,-116,-119,117,-118,118,116,123,-120,122,-121,120,-122,-123,121,125,127,3412177804,-127,126,-126,124,-125,-124,-128,128,-129,1843258603,3803740692,984961486,3939845945,4195302755,4066508878,255,1706088902,256,1969922972,365,2097651377,376229701,853044451,752459403,1000,426522225,3772115230,615818150,3904427059,4167216745,4027552580,3654703836,1886057615,879679996,3518719985,3244367275,2013776290,3373015174,1759359992,285281116,1622183637,1006888145,10000,1231636301,83908371,1090812512,2463272603,1373503546,2596254646,2321926636,1504918807,2181625025,2882616665,2747007092,3009837614,3138078467,397917763,81470997,829329135,2657392035,956543938,2517215374,2262029012,40735498,2394877945,3266489909,702138776,2808555105,2936675148,1258607687,1131014506,3218104598,3082640443,1404277552,565507253,534414190,1541320221,1913087877,2053790376,1789927666,3965973030,3826175755,4107580753,4240017532,1658658271,3579855332,3708648649,3453421203,3317316542,1873836001,1742555852,461845907,3608007406,1996959894,3747672003,3485111705,2137656763,3352799412,213261112,3993919788,1.01,3865271297,4139329115,4275313526,282753626,1068828381,2768942443,2909243462,936918000,3183342108,27492,141376813,3050360625,654459306,2617837225,1454621731,2489596804,2227061214,1591671054,2362670323,4294967295,1308918612,2246822507,795835527,1181335161,414664567,4279200368,1661365465,1037604311,4150417245,3887607047,1802195444,4023717930,2075208622,1943803523,901097722,628085408,755167117,3322730930,3462522015,3736837829,3604390888,2366115317,0.4,2238001368,2512341634,2647816111,-0.2,314042704,1510334235,900000,58964,1382605366,31158534,450548861,3020668471,1119000684,3160834842,2898065728,1256170817,2765210733,3060149565,3188396048,2932959818,124634137,2797360999,366619977,62317068,-0.26,1202900863,498536548,1340076626,2405801727,2265490386,1594198024,1466479909,2547177864,249268274,2680153253,2125561021,3294710456,855842277,3423369109,0.732134444,3705015759,3569037538,1994146192,1711684554,1852507879,997073096,733239954,4251122042,601450431,4111451223,167816743,3855990285,3988292384,3369554304,3233442989,3495958263,3624741850,65535,453092731,-0.9,2094854071,1957810842,325883990,4057260610,1684777152,4189708143,3915621685,162941995,1812370925,3775830040,783551873,3134207493,1172266101,2998733608,2724688242,1303535960,2852801631,112637215,1567103746,651767980,1426400815,906185462,2211677639,1047427035,2344532202,2607071920,2466906013,225274430,544179635,2176718541,2312317920,1483230225,1342533948,2567524794,2439277719,1088359270,671266974,1219638859,840000,953729732,3099436303,2966460450,817233897,2685067896,2825379669,4089016648,4224994405,3943577151,3814918930,476864866,1634467795,335633487,1762050814,1,2044508324,-1,3401237130,3268935591,3524101629,3663771856,1907459465]
[66,60,79,60,7,17,33,96,68,0,2,1423857449,-2,3,-3,3432918353,1555261956,4,2847714899,-4,5,-5,2714866558,1281953886,6,-6,198958881,1141124467,2970347812,-7,7,3110523913,8,-8,2428444049,-9,9,10,-10,-11,11,2563907772,-12,12,13,2282248934,-13,2154129355,-14,14,15,-15,16,-16,17,-17,-18,18,19,-19,20,-20,21,-21,-22,22,-23,23,24,-24,25,-25,-26,26,27,-27,28,-28,29,-29,30,-30,31,-31,33,-33,-32,32,-34,-35,34,35,37,-37,36,-36,38,39,-39,-38,40,41,-41,-40,42,-43,-42,43,45,-45,-44,44,47,-46,-47,46,48,-49,-48,49,-50,51,-51,50,570562233,53,-52,52,-53,-54,-55,55,54,503444072,57,-56,-57,56,59,58,-59,-58,60,61,-61,-60,62,63,-63,-62,-64,711928724,-66,67,-65,65,-67,66,64,-71,-69,69,68,70,-68,-70,71,-72,3686517206,-74,-73,73,75,74,-75,72,-79,76,79,78,-78,-76,77,-77,3554079995,-81,81,-82,-83,80,-80,82,83,-84,84,85,-86,-87,86,-85,87,90,-88,-89,-90,88,89,91,-91,94,92,95,-94,93,-93,-95,-92,-98,97,98,-97,-99,96,99,-96,-100,3272380065,102,-102,-101,-103,103,100,101,-107,-104,105,104,106,-106,-105,107,109,-109,-108,-111,110,-110,111,108,251722036,115,-115,112,-114,-112,113,114,-113,-117,119,-116,-119,117,-118,118,116,123,-120,122,-121,120,-122,-123,121,125,127,3412177804,-127,126,-126,124,-125,-124,-128,128,-129,1843258603,3803740692,984961486,3939845945,4195302755,4066508878,255,1706088902,256,1969922972,365,2097651377,376229701,853044451,752459403,1000,426522225,3772115230,615818150,3904427059,4167216745,4027552580,3654703836,1886057615,879679996,3518719985,3244367275,2013776290,3373015174,1759359992,285281116,1622183637,1006888145,10000,1231636301,83908371,1090812512,2463272603,1373503546,2596254646,2321926636,1504918807,2181625025,2882616665,2747007092,3009837614,3138078467,397917763,81470997,829329135,2657392035,956543938,2517215374,2262029012,40735498,2394877945,3266489909,702138776,2808555105,2936675148,1258607687,1131014506,3218104598,3082640443,1404277552,565507253,534414190,1541320221,1913087877,2053790376,1789927666,3965973030,3826175755,4107580753,4240017532,1658658271,3579855332,3708648649,3453421203,3317316542,1873836001,1742555852,461845907,3608007406,1996959894,3747672003,3485111705,2137656763,3352799412,213261112,3993919788,1.01,3865271297,4139329115,4275313526,282753626,1068828381,2768942443,2909243462,936918000,3183342108,27492,141376813,3050360625,654459306,2617837225,1454621731,2489596804,2227061214,1591671054,2362670323,4294967295,1308918612,2246822507,795835527,1181335161,414664567,4279200368,1661365465,1037604311,4150417245,3887607047,1802195444,4023717930,2075208622,1943803523,901097722,628085408,755167117,3322730930,3462522015,3736837829,3604390888,2366115317,0.4,2238001368,2512341634,2647816111,-0.2,314042704,1510334235,900000,58964,1382605366,31158534,450548861,3020668471,1119000684,3160834842,2898065728,1256170817,2765210733,3060149565,3188396048,2932959818,124634137,2797360999,366619977,62317068,-0.26,1202900863,498536548,1340076626,2405801727,2265490386,1594198024,1466479909,2547177864,249268274,2680153253,2125561021,3294710456,855842277,3423369109,0.732134444,3705015759,3569037538,1994146192,1711684554,1852507879,997073096,733239954,4251122042,601450431,4111451223,167816743,3855990285,3988292384,3369554304,3233442989,3495958263,3624741850,65535,453092731,-0.9,2094854071,1957810842,325883990,4057260610,1684777152,4189708143,3915621685,162941995,1812370925,3775830040,783551873,3134207493,1172266101,2998733608,2724688242,1303535960,2852801631,112637215,1567103746,651767980,1426400815,906185462,2211677639,1047427035,2344532202,2607071920,2466906013,225274430,544179635,2176718541,2312317920,1483230225,1342533948,2567524794,2439277719,1088359270,671266974,1219638859,840000,953729732,3099436303,2966460450,817233897,2685067896,2825379669,4089016648,4224994405,3943577151,3814918930,476864866,1634467795,335633487,1762050814,1,2044508324,-1,3401237130,3268935591,3524101629,3663771856,1907459465]

u =
["5","6","InactiveCaptionText","7","WEBZEN Browser Extension","8","9",":","DivX Browser Plug-In",";","=","Uplay PC","canvas exception","A","B","C","D","E","微软雅黑","F","Harrington","G","H","I","J","Gnome Shell Integration","K","L","M","N","O","P","Q","R","S","Niagara Solid","T","SefClient Plugin","U","V","1111","W","X","Y","Z","Goudy Old Style","\\","Roblox Launcher Plugin","Microsoft Office 2013","QQMusic","a","Eurostile","b","rmocx.RealPlayer G2 Control.1","c","Scripting.Dictionary","d","仿宋","e","f","g","h","Ma-Config.com plugin","i","1010","Casual","j","k","l","m","n","o","p","1008","ct","doNotTrack","q","setTimeout","丽宋 Pro","r","Gisha","getTimezoneOffset","s","1005","1004","t","u","1003","v","1001","w","x","drawArrays","y","z","{","}","~","font","1009","=null; path=/; expires=","Shell.UIHelper","toDataURL","WindowText","language","do","丽黑 Pro","HighlightText","div","MenuText","AOL Media Playback Plugin","Citrix online plug-in","ec","Desdemona","InactiveBorder","RealPlayer","HELLO",", 'code':","em","npTongbuAddin","createElement","phantom","MS PMincho","楷体","eval","ex","DivX VOD Helper Plug-in","新细明体","QuickTimeCheckObject.QuickTimeCheck.1","FlyOrDie Games Plugin","attachShader","PlayOn Plug-in","getTime","1.01","Broadway","fp","Alawar NPAPI utils","Forte","hashCode","方正姚体","ESN Sonar API","HPDetect","Bitdefender QuickScan","IE Tab plugin","',","ButtonFace","cpuClass","Century Gothic","Online Storage plug-in","Safer Update","Msxml2.DOMDocument","Engravers MT","Silverlight Plug-In","Google Gears 0.5.33.0","Citrix ICA Client","alphabetic","VDownloader","华文楷体","attrVertex","宋体","cookie","%22","%26","Centaur","4game","Rockwell","LogMeIn Plugin 1.0.0.961","Octoshape Streaming Services","toGMTString","th=/","SumatraPDF Browser Plugin","PDF.PdfCtrl","fillStyle","je","Adobe Ming Std","TorchHelper","Franklin Gothic Heavy","华文仿宋","Harmony Plug-In","Gigi","v1.1","Kino MT","SimHei","AliSSOLogin plugin","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","Yandex PDF Viewer","Citrix Receiver Plug-in","mai","top","AcroPDF.PDF","canvas api exception","InactiveCaption","Menu","precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }","QQ2013 Firefox Plugin","Google Update","华文彩云","eMusicPlugin DLM6","Web Components","Babylon ToolBar","Coowon Update"]

l =
["", "GrayText", "parent", "幼圆", "plugins", "AdobeExManDetect", "0010", "Google Earth Plugin", "Veetle TV Core", "0007", "0004", "0002", "0003", "0000", "0001", "Unity Player", "Skype Web Plugin", "WebKit-integrierte PDF", "gdxidpyhxdE", "Bell MT", "0008", "getSupportedExtensions", "setTime", "0009", "SafeSearch", "\"", "$", "Univers", "%", "&", "'", "1110", "get plugin string exception", "ThreeDShadow", "+", ",", "-", "Arab", "苹果丽细宋", ".", "FUZEShare", "/", "0", "1", "2", "3", "4", "仿宋_GB2312"]

ce = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA"

e =
["InfoText","rmocx.RealPlayer G2 Control","iMesh plugin","RealDownloader Plugin","Symantec PKI Client","_phantom","GDL Object Web Plug-in 16.00","webgl","华文宋体","screen","body","TRIANGLE_STRIP","n=","TlwgMono","':'","LogMeIn Plugin 1.0.0.935","function","context.hashCode","ArchiCAD","VERTEX_SHADER","Ubuntu","Facebook Plugin","ActiveCaption","细明体","Malgun Gothic","News Gothic MT","CaptionText","aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA","DejaVu LGC Sans Mono","Copperplate Gothic Light","Segoe Print","Sawasdee","Bauhaus 93","Chalkduster","Abadi MT Condensed Light","Lucida Bright","Wide Latin","font detect error","Kozuka Gothic Pr6N","Html5 location provider","DivX Plus Web Player","Vladimir Script","File Downloader Plug-in","ob","Adodb.Stream","Menlo","callPhantom","Wolfram Mathematica","CatalinaGroup Update","Eras Bold ITC","DevalVRXCtrl.DevalVRXCtrl.1","华文细黑","addBehavior","pa","Bitstream Vera Serif","(function(){return 123;})();","pi","Tencent FTN plug-in","removeChild","Folx 3 Browser Plugin","useProgram","hostname","phantom.injectJs","ShockwaveFlash.ShockwaveFlash","rgba(102, 204, 0, 0.7)","AdblockPlugin","Background","AgControl.AgControl","PhotoCenterPlugin1.1.2.2","GungSeo","s=","decodeURI","方正舒体","华文新魏","123","webgl exception","re","WMPlayer.OCX","72px","AppWorkspace","Highlight","document","Yandex Media Plugin","ESN Launch Mozilla Plugin","70px 'Arial'","injectJs","Loma","BitCometAgent","Calibri","Bookman Old Style","sessionStorage","Utopia","compileShader","escape","Scrollbar","Window","隶书","Kaspersky Password Manager","MingLiU-ExtB","get system colors exception","Skype.Detection","FileLab plugin","npAPI Plugin","not_exist_host","2d","ActiveXObject","Dotum","PDF-XChange Viewer","PMingLiU","colorDepth","Nokia Suite Enabler Plugin","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Magneto","AdobeExManCCDetect","_9755xjdesxxd_","Gabriola","Playbill","navigator","Rachana","Tw Cen MT Condensed Extra Bold","QQMiniDL Plugin","#f60","fillRect"]


s =
["=null; path=/; domain=","Default Browser Helper","French Script MT","标楷体","encodeURI","Umpush","icp","华文琥珀","createProgram","monospace","ButtonShadow","Bodoni MT","STATIC_DRAW","黑体","downloadUpdater","Aliedit Plug-In","PDF integrado do WebKit","uniformOffset","encodeURIComponent","Picasa","Adobe Fangsong Std","bindBuffer","AVG SiteSafety plugin","Orbit Downloader","color","hidden","localStorage","Google Talk Effects Plugin","indexedDB","Lucida Fax","AmazonMP3DownloaderPlugin","createBuffer","Castellar","linkProgram","Californian FB","ThreeDHighlight","createShader","Gulim","NyxLauncher","YouTube Plug-in","楷体_GB2312","SWCtl.SWCtl","Google Earth Plug-in","QQDownload Plugin","Norton Identity Safe","parseInt","Simple Pass","Colonna MT","zako","getUniformLocation","shaderSource","Downloaders plugin","location","Heroes & Generals live","window","Showcard Gothic","微软正黑体","华文行楷","Ginger","RockMelt Update","WindowFrame","enableVertexAttribArray","KacstOne","attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }","Perpetua","openDatabase","canvas","iGetterScriptablePlugin","Informal Roman","Nitro PDF Plug-In","Msxml2.XMLHTTP","华文黑体","NPLastPass","ThreeDFace","LastPass","::","parseFloat","华文隶书","; ","getAttribLocation","{'name':","Nyala","not_exist_hostname","\\'","GFACE Plugin","undefined","新宋体","\\.","Matura MT Script Capitals","Arial Black","FangSong","mwC nkbafjord phsgly exvt zqiu, ὠ tphst/:/uhbgtic.mo/levva","Braggadocio","Harmony Firefox Plugin","Palace Script MT","Native Client","userAgent","QuickTime.QuickTime","experimental-webgl","ARRAY_BUFFER","苹果丽中黑","Alipay Security Control 3","Script MT Bold",", 'browserProp':","TDCCtl.TDCCtl","self","InfoBackground","Pando Web Plugin","Haettenschweiler","span","ActiveBorder","ThreeDLightShadow","0202","0203","0200","0201","WPI Detector 1.4","; expires=","ThreeDDarkShadow","Exif Everywhere","Battlelog Game Launcher","Impact","VLC Multimedia Plugin","Adobe Hebrew","BlueStacks Install Detector","wwwmmmmmmmmmmlli","history","sans-serif","14731255234d414cF91356d684E4E8F5F56c8f1bc","Papyrus","ButtonText","0211","AppUp","Parom.TV player plugin","DealPlyLive Update","Lohit Gujarati","FRAGMENT_SHADER","Agency FB","MacromediaFlashPaper.MacromediaFlashPaper","###","WordCaptureX","getComputedStyle","platform","0105","Arabic Typesetting","0106","0103","华文中宋","0104","0101","0102","0100","0107","ButtonHighlight","vertexAttribPointer","0108","textBaseline","#069","doubleTwist Web Plugin","unescape","Thunder DapCtrl NPAPI Plugin","Batang","DFKai-SB","Snap ITC","Date","MinibarPlugin","decodeURIComponent","NPPlayerShell","MS Reference Sans Serif","Hiragino Sans GB","serif","getContext","uniform2f","MoolBoran"]


指纹生成的路上，校验了：
window属性有：
    sessionStorage
    localStorage
    hostname
    indexedDB
    e[52]="addBehavior", window.body.addBehavior,然后判断这个window["body"]["addBehavior"]是什么类型，然后返回类型，如果没有的话就是undefined





* */

