


var $_CHIJ = function(t, e, n) {
    var $_CAIBv = KBBji.$_Co
        , $_CAIAE = ['$_CAIEs'].concat($_CAIBv)
        , $_CAICw = $_CAIAE[1];
    $_CAIAE.shift();
    var $_CAIDg = $_CAIAE[0];

    var r = this
        , o = r[$_CAICw(96)]
        , i = {
        "lang": o[$_CAIBv(124)] || $_CAICw(187),
        "userresponse": $_CFm(t, o[$_CAIBv(158)]),
        "passtime": n,
        "imgload": r[$_CAICw(794)],
        "aa": e,
        "ep": r[$_CAIBv(795)]()
    };
    o[$_CAICw(154)] && (i[$_CAICw(382)] = t),
        i[$_CAIBv(718)] = $_CGf(o[$_CAICw(117)] + o[$_CAIBv(158)][$_CAICw(38)](0, 32) + i[$_CAICw(731)]);


    var s = r[$_CAIBv(789)]()
        , a = AES[$_CAIBv(309)](gjson[$_CAICw(264)](i), r[$_CAICw(791)]())
        , _ = Base64[$_CAICw(780)](a)
        , u = {
        "gt": o[$_CAICw(117)],
        "challenge": o[$_CAICw(158)],
        "lang": i[$_CAIBv(124)],
        "pt": r[$_CAICw(665)],
        "client_type": r[$_CAIBv(670)],
        "w": _ + s
    };
}


w = $_CHIJ();
console.log();


