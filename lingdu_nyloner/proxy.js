/*
@Time    : 2019/8/7 23:15
@Author  : qizai
@File    : proxy.py
@Software: WebStorm
*/

function decode_str(scHZjLUh1) {
    scHZjLUh1 = Buffer.from(scHZjLUh1, 'base64').toString()// Base64["decode"](scHZjLUh1);  base64解密
    // console.log(scHZjLUh1);
    key = 'nyloner';
    len = key["length"];
    code = '';
    for (i = 0; i < scHZjLUh1["length"]; i++) {
        var coeFYlqUm2 = i % len;
        // code += window["String"]["fromCharCode"](scHZjLUh1["charCodeAt"](i) ^ key["charCodeAt"](coeFYlqUm2))
        code += String.fromCharCode((scHZjLUh1["charCodeAt"](i)) ^ key["charCodeAt"](coeFYlqUm2))
    }
    // return Base64["decode"](code)
    return Buffer.from(code, 'base64').toString()
}

// var scHZjLUh1 = "OUhcUg==";  // 加密字符串
var encode_str = "OUofBg89Mwc2BS4HKCYnACAFJ1U/PU1fIgdRCiM9DwYiJjMHGitWFwExJ08lLCcfPzowWCYHEhUnFz4fDDInBzYFLgcoGC8BIzxeEj0tSRsgLSQLIxMDFiAPHRQ3BSVXKTEsTiUCAhI7BBYLJgQgQCMAWBYjISMbNAY+FykYK0giPCcWOy0zGw1dL0InEwMIJw8ZWzY4BAcpMS8QCCgCESg9MFomLSwLIz0pWiIxM1o1OC5aLDYnACMFL1c9BDwUJgBVAScxHwYPPTMHNgUuBygmDUggBT9VPgQ8GyA9UQsjAzkGIiYzBxorVhcBMSdPJSwnUD06ElkmBxIVJxc+HwwyJwc2BS4HKBgvASM8XhI9LUkbIC0kCiATAxcgHx0UNi8lVykxLE4lAgISOwQWCyYEIAsjOlhbIxxGFjQoKhsoJi8QICwvDBEpQBULLSxEJzolWiExGVswBRgJLBw8CQ44Oww9BzgFIgQkCiEqXBghJkIZNi8uFismAUkiFQESPD0zVSMtJ0UnFAAYJw8dCTAGKhcoMVpNIRZaHT8qGhkgOiAbIjotBg0iSxcdLyZYLDEnTCM7BVA7Bw4LJgA3AgwuOQYhDDMHNAYuFiohXg4jLF4SPS04FCEqCgggLQMVITY4VzUvLVksHwIOJQUBAjsEPFgiLVEKIy0LGiMPIxQ1BipdKzEnCiUsJBIQXTNcJgQKFScTORUjMTtaMAUYCSwcPAkOODsMPQc4BSIEJAohKlwYISZCGTYvLhYrNgEAIjsBHDwHM1UjLSdFJxQAGCcPHQkwBjYZKRgrAyAFPxw+BDxYJgcSFScXLhkNCyMHNgUuByomBUwjPCcWOy0zXA45VB4nEwMIJw87GTQ4BBooNgkNISsJAj86KFoiBDBEIxM1Bgg2BQkcFSUeBjEnTyUsJx09KjAZIhQwByE9NRojDzdeMAUYCSwcLA8PAT8MPQc4BSA6DkchKiUcJyY4Xhg7XgIsGAEeJQUnEj86EhgiKgIGIz0LCCMxI1g0ODpYKCYjEAo8GQIXFzMcDC0sRCc6JRcjMT8bNDgmFikYJw4gBSccOwcOCyYAJwQNFz0GIQwzBzY4BFsqIScKJSwkVRM5SAAmBAoVJxMlGCMxGRo0KAgaKDYJHiE7P1M/KihaITogGwgqGwgLHDgeGi8mWCwxJwEiBSMQPwQ4XCMELEIgEFgWIyEZBzUvLgcGNVcACCwnUzstMFkgOg5HJxAbCCcLIB4bOzoHKhsvECEFLx09PUkbIC1VBSE6LRcgIR0ZNygAXisbJEAgLCxSOwMVGyYEChUnEyldIxxGFzQoPhsoGD8OIAUnHD8XMB8mLS8FDEomXycPHQkwBgRbKiYFECAsLwwWKRUYNT0sRCc6JRYjITdbNTguWikmL00lKytVPQQ4XCAENEAnF1wcJy0BBxg0LgcqGy8QITsNHT4EPBQjBCgLIhMlXyEmOx0wLyUZB0EkSSUFAQI7BBJZIDoOGyI6LQYKIh4aIz8mWCwxJwAhKytQPjo4WCM6JEYnPSlfIQ8zXjYGPhYsHF4KJScdDBM2OAUgByQbIy01FSIPOxk3L1sXKzY7DCIrOww+LTgFDClcCwo6JVknJjtbNjgEWywbGR4lATwVEDksBSAHJBsjEy0XITZCGTYvXxkqMS8BIRUBVD8UFlwiFy9LIjouWCcIHhkwBgAJLBgnSiAFPx8+BDxYIT1RCiAtDwYiJjMHGitWFwExJ08lLCdQPToSWSYHEhUnFz4fDDInBzYFLgcoGC8BIzxeEj0tSRsgLSQKIwMDXyMfHRc3BSVXKTEsTiUCAhI7BBYLJgQgQCMAWBYjISMbNAY+XikYDUglBhkCOwA7GgwANBshEC0GITEZWzY/Jh0sMSRJDThfCTsEFgsmBCwFIy0HGyMhFRo0KAgJKCYjTyIrI1M/BCwFCThVTw==";
console.log(decode_str(encode_str));  // 传递加密字符串进去

// JS逆向 | 助力新手 , 两个JS逆向喂饭教程

// 本次js解密过程，首先观察网页数据，查看加密情况，发现是将返回的数据进行解码的
// 1、那么肯定网页标签是有id可以定位的，于是去查看ip地址标签，发现一个 ip-list这个id
// 2、那肯定搜就完事了，反正也不知道是不是，那就先试试水嘛
// 3、然后发现好几处都是有，然后一个一个观察上下文，随便附近打断点
// 4、进行调试，慢慢调试，即可发现了一个decode_str和encode_str，长得这样的顾名思义的，可能是解密的方法，进去看就完事了
// 5、发现一调试就是对的
// 6、接下来就是扣函数，扣decode_str函数，将加密字符串传递过去，本地运行
// 7、缺啥找啥，发现Base64["\x64\x65\x63\x6f\x64\x65"](scHZjLUh1);  其中\x64\x65\x63\x6f\x64\x65就是decode的意思，说明这个就是base64解码
//    那么转换过来nodejs就是Buffer.from(scHZjLUh1, 'base64').toString()
// 8、下面继续调试发现缺少windows对象，发现是调用windows对象String.fromCharCode()方法，
//    那么这就是直接能够够用String.fromCharCode((scHZjLUh1["charCodeAt"](i))来替换原来的window["String"]["fromCharCode"](scHZjLUh1["charCodeAt"](i)
// 9，继续调试，然后也是将base64解密转换为nodejs的base64解密，最后得出答案，恭喜，又破解一个网站！！！
// 完毕！！
