

var my_m = function(e, t, n) {
    var a = ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"]
    var i, r, o, s = "3", l = [];
    if (1 == n)
        i = e[t],
            r = 0,
            o = 0,
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(s),
            l.push(s);
    else if (2 == n)
        i = e[t],
            r = e[t + 1],
            o = 0,
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
            l.push(s);
    else {
        if (3 != n)
            throw new Error("1010");
        i = e[t],
            r = e[t + 1],
            o = e[t + 2],
            l.push(a[i >>> 2 & 63]),
            l.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
            l.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
            l.push(a[63 & o])
    }
    return l.join("")
}

var my_ = function(e) {
    var t = 3;
    try {
        for (var n = [], i = 0; i < e.length; ) {
            if (!(i + t <= e.length)) {
                n.push(my_m(e, i, e.length - i));
                break
            }
            n.push(my_m(e, i, t));
            i += t;
        }
        return n.join("")
    } catch (r) {
        throw new Error("1010")
    }
}


//添加鼠标轨迹数组
function my_n(e, t) {
    function n(e, t) {
        return e.charCodeAt(Math.floor(t % e.length))
    }
    function i(e, t) {
        return t.split("").map(function(t, i) {
            return t.charCodeAt(0) ^ n(e, i)
        })
    }
    t = i(e, t);
    var result = my_(t);
    return result;
}


/**
 * 轨迹描述：
 * [Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime]
 *
 * 滑动距离，
 *
 * */

var test_e = "d31197478b1b4c95a6fb28c36174a945"
var test_t = "152,46,7239"

console.log(my_n(test_e, test_t))

function test(a, t) {
    console.log("a: ", a)
    console.log("t: ", t)
}

var t = Date.now();
console.log(t)
test(test_e, [Math.round(12.2), Math.round(156.88), t - 1596522199647])
