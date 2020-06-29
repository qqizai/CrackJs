/**
 * DESC: 通过查看xhr类型的接口，可以看到VM调用栈，点进去发现，其实就是服务端返回了一串代码，通过eval来执行的。
 * */

function getparam() {
    "use strict";
    let base64 = new Base64();
    let key = uuid();
    let time = (Math.floor((new Date().getTime() + 10010) / 99)).toString();
    console.log(key, time);
    let sign = md5(key + base64.encode(time) + 'xianyucoder11');
    let param = {
        "key": key,
        "time": time,
        "sign": sign
    };
    return param
};
render(getparam());