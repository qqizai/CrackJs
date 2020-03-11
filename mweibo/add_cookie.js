function objLength(obj) {
    var cnt = 0;
    if (typeof obj != "object") return 0;
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) cnt++;
    }
    return cnt;
}


function goToNextPage(obj) {
    var that = this;
    if (obj['toauth'] != 1) {
        var href = obj['loginresulturl'] ? obj['loginresulturl'] + '&savestate=1&url=' + "https%3A%2F%2Fm.weibo.cn%2F":"https://m.weibo.cn/";//LOGIN_SUCCESS_ADDRESS : win.decodeURIComponent(LOGIN_SUCCESS_ADDRESS);
        win.location.href = href;
    } else {
        if (obj['ticket']) {
            var ipt = document.createElement('input');
            that.postform.appendChild(ipt);
            ipt.id = 'ticket';
            ipt.name = 'ticket';
            ipt.type = 'hidden';
            ipt.value = obj['ticket'];
        }
        that.postform.submit();
    }
};



function addCookie(obj) {//添加cookie
    var that = this;

    setTimeout(function () {
    }, 5000);//过期时间不知道是什么单位，应该是秒，那么对应的是1.389小时
    var crossdomainlist = obj.crossdomainlist;
    var counter = objLength(crossdomainlist);
    if (counter == 0) {
        that.goToNextPage(obj);
    }
    // for (var d in crossdomainlist) {
    //     // console.log(d);
    // }
    return that;
};


var data = {
        "crossdomainlist": {
            "weibo.com": "https://passport.weibo.com/sso/crossdomain?entry=mweibo&action=login&proj=1&ticket=ST-MjUyODMzNTYwMA%3D%3D-1576820194-tc-3420CC4BE357D541E73D942BCE1BEDDD-1",
            "sina.com.cn": "https://login.sina.com.cn/sso/crossdomain?entry=mweibo&action=login&proj=1&ticket=ST-MjUyODMzNTYwMA%3D%3D-1576820194-tc-6232647E4425C7A72DA849F37985B3F1-1",
            "weibo.cn": "https://passport.sina.cn/sso/crossdomain?entry=mweibo&action=login&ticket=ST-MjUyODMzNTYwMA%3D%3D-1576820194-tc-D341F801AFD0BD27E9DAD2F294ACFE81-1"
        },
        "loginresulturl": "",
        "uid": "2528335600"
    }

console.log(addCookie(data))

