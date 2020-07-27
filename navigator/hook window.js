
/*******************************/
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

var window = {};
window = getter_setter(window);
/*******************************/


window.a = {
    b: {
        c: function () {
            return "123"
        },
    }
}


var test = window.a.b.c();
console.log(test)

window.a.b = {
    abc: function () {
        return "456"
    }
}


