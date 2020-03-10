/*
@Time    : 2019/7/27 16:56
@Author  : qizai
@File    : dwz.cn.py
@Software: WebStorm
//https://dwz.cn/KEFOMj8h 梦幻西游，游戏装备信息解密
*/
var document = "";
var _0x3012 = ['\x73\x75\x62\x73\x74\x72\x69\x6e\x67', '\x61\x74\x6f\x62', '\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74', '\x70\x75\x73\x68', '\x74\x65\x73\x74'];
//                ['substring',                          'atob',                 'charCodeAt',                           'push',                'test']

function _0x3a8e(_0xc40c11, _0x32bbb2) {
    _0xc40c11 = _0xc40c11 - 0x0;
    var _0x4e269a = _0x3012[_0xc40c11];
    return _0x4e269a;
}

function g(_0x1c0cdf) {
    var _0x36ab38 = (/\b_k=([^;]*)/['\x65\x78\x65\x63'](document['\x63\x6f\x6f\x6b\x69\x65']) || [])[0x1] || '';
    if (_0x1c0cdf = _0x1c0cdf['\x72\x65\x70\x6c\x61\x63\x65'](/^@|@$/g, ''),
        /^[^@]+@[\s\S]+/['\x74\x65\x73\x74'](_0x1c0cdf)) {
        var _0x33c80e = _0x1c0cdf['\x69\x6e\x64\x65\x78\x4f\x66']('\x40');
        // console.log(Buffer.from(_0x1c0cdf, 'base64').toString());
        // console.log(Buffer(_0x1c0cdf, 'base64').toString());
        // _0x36ab38 = Buffer.from(_0x1c0cdf, 'base64').toString();
        _0x36ab38 = _0x1c0cdf['substring'](0x0, _0x33c80e);  // 这个转换为下面的base64用法
        _0x1c0cdf = _0x1c0cdf['substring'](_0x33c80e + 0x1);
        // console.log(JSON.stringify(Buffer.from(_0x1c0cdf, 'base64').toString()));
    }
    // console.log("测试啊" + Buffer.from(_0x1c0cdf, 'base64').toString())
    // console.log(Buffer.from(_0x1c0cdf, "base64").toString())
    var _0x1b3f48 = function s(_0x1c0cdf) {
        return eval(('\x28' + _0x1c0cdf + '\x29'))
        // try {
        //     return _0xcbc80b['\x65\x76\x61\x6c']('\x28' + _0x1c0cdf + '\x29');  // eval
        // } catch (_0x40b9c3) {
        //     return null;
        // }
        //         _0x36ab38 = Buffer.from(_0x1c0cdf, 'base64').toString();
    }(_0x1c0cdf = Buffer.from(_0x1c0cdf, 'base64').toString());  //  _0xcbc80b['\x61\x74\x6f\x62'](_0x1c0cdf) 换成base64

    console.log(_0x1b3f48)

    _0x1b3f48 && '\x6f\x62\x6a\x65\x63\x74' == typeof _0x1b3f48 && _0x1b3f48['\x64'] && (_0x1b3f48 = _0x1b3f48['\x64']);
    for (var _0x20b9fa = [], _0x10503c = 0x0, _0x1a524d = 0x0; _0x1a524d < _0x1b3f48['\x6c\x65\x6e\x67\x74\x68']; _0x1a524d++) {
        var _0x3641ed = _0x1b3f48['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x1a524d)
            , _0x341952 = _0x36ab38['charCodeAt'](_0x10503c % _0x36ab38['\x6c\x65\x6e\x67\x74\x68']);
        _0x10503c += 0x1,
            _0x3641ed = 0x1 * _0x3641ed ^ _0x341952,
            _0x20b9fa['push'](_0x3641ed['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x2));
    }
    console.log(_0x1c0cdf)
    return function d(_0x1c0cdf) {
        for (var _0x36ab38 = [], _0x33c80e = 0x0; _0x33c80e < _0x1c0cdf['\x6c\x65\x6e\x67\x74\x68']; _0x33c80e++)
            // _0x36ab38['push'](_0xcbc80b['String']['fromCharCode'](_0xcbc80b['parseInt'](_0x1c0cdf[_0x33c80e], 0x2)));
            // _0x36ab38['push'](String.fromCharCode(parseInt(_0x1c0cdf[_0x33c80e], 0x2)));
            _0x36ab38['push'](String.fromCharCode(parseInt(_0x1c0cdf[_0x33c80e], 0x2)));
        return _0x36ab38['\x6a\x6f\x69\x6e']('');
    }(_0x20b9fa);
}
var equip_desc_value = "@PzbyOkTBcfMGLzbT@eyJkIjogInNcYlx1N2IyYlx1N2VkZW9aZnJDRlx1NGVkOVx1ODgwYmxcdTZjNGVBJnNcYlx1NGY0Nlx1NWJjYW9AZ3tVRlx1NTQzMFx1NGU2YWxRVGxgWVx1MDAxMFx1ODA2OVx1NGUwYVx1NWVjZHRwU1FtZ1x1NGZhMlx1NzQ3Y1x1NTk1M1x1OGQ3MXBLXHU2YjQzWj1cdTk1NTBcdTcwZThcdTdiMGJcdTdlYzRGfHZsWlx1OTUxNFx1NWQxOFx1NWJjZFx1Nzc4OUJcdTU5NTNcdTk2N2NcdTc3OThcdTMwNTViXHU3ZWMxXHU3M2ZkXHU3NDE0ZFx1MDAxNVlcdTAwMTB3M04mO1x1MDAwZS1gXHU3MjNiXHU2NTJiXHVmZjdjbiR4PiBcdTAwMTVcdTAwMTZOXHU2NTgyXHU3ZWRlXHU1MjY0XHU5NjNiXHU1MjYyYTpFP2RcdTAwMGJcdTVmN2FcdThmYjJcdTViMDBcdTY1MjBcdWZmNjBWXHU1YjJkYF9cdTViMDBiS1x1NTNhYXlcdTViMTNlWSV3XCJcdTdiNWNcdTc3OTFDb1x1NGYzOFx1OGQ3Y2JIV21cdTRmNjNcdTViZmZaSWV+T0FcdTAwMTdsLHcwXHU3YjQ1XHU3Nzk1d2dcdTUyZDdcdTkxYjVCXHUwMDdmYVpcdTZjNzZcdTg4MzlvQGVyQFxiblx1MDAwMG9cYlx1N2I0NFx1NzdhN2paXHU1MmY5XHU5MWI2b0BlYlx1NmM3N1x1ODgyNm1sfUpBOnM9QVx1MDAwYlx1N2I2OVx1Nzc5OG5iXHU2Yzc3XHU4ODI2bWx9T0JcdTkwNGJcdTVlZjZaSUhhXncsQCFuNVx1NjY1M1x1NGYzN1x1ZmY3OFx1OTA0Ylx1NWVmNlpJS2xcdTAwMDV3XHUwMDA1QFx1MDAxNFx1NjY1Mlx1NzZiZlx1NGVkZVx1NTQ3Mlx1ZmY3OFx1NGYwN1x1OGQ3OFpJS2xcdTAwMTl3ISYjdXVcdD9cdTdiNDRcdTc3YTdcdTdlOTRcdTU0NzJYWVx1NTljZFx1NjE2NFx1OTE4NVx1N2JjZlx1N2I0NVx1Nzc5NW41XHU5NWE0XHU2ZDQ0XHU2NzAzXHU0ZWEyXHVmZjRhXHU4MmNiXHU2N2ZlXHU1YzA4b0gmXHU5MGFhXHU0ZjJlXHU2NzA3XHU0ZWJiXHVmZjVkXHU2YjJhXHU1NjEyQndcIlx1NThlNFx1NTJjMlx1OTU5MVx1NmQ3MVx1NjJlYlx1ODBhOVx1NTljMFx1NjE2Y1x1OTFiN1x1N2JjMFx1N2IwZVx1N2VlYk5cdTdlYzV3XHRZXHUwMDEwWlx1MDAxOFx1NTI1ZFx1OTA3NFx1ODA0N1x1ZmY3OVx1MzAzNlx1NjM1N1x1NjA4Mlx1OGQ1MVx1OGI4MFx1MDBkMndcdFpCIn0=@";
console.log(g(equip_desc_value))

// 总的来说，这里面的思路就是，将前端页面的一串字符串，经过指定的解码，得到的正确答案
//坑：atob在nodejs里面就是使用Buffer.from(要解密的字符串, 'base64').toString());
// 遇到window对象的话，看看是否是使用了指定的方法进行解密，比如eval、ato、
// 这种是window对象的String、fromCharCode、parseInt,
// 如：_0xcbc80b['String']['fromCharCode'](_0xcbc80b['parseInt'](_0x1c0cdf[_0x33c80e], 0x2))可以写成String.fromCharCode(parseInt(_0x1c0cdf[_0x33c80e], 0x2))
// _0xcbc80b['eval']('\x28' + _0x1c0cdf + '\x29')可以直接写成 eval('\x28' + _0x1c0cdf + '\x29')
// Buffer.from(_0x1c0cdf, 'base64').toString()等于Buffer(_0x1c0cdf, 'base64').toString()，这两种写法是一样的
// _0xcbc80b['atob'](_0x1c0cdf)可以写成 Buffer.from(_0x1c0cdf, 'base64')

// 以上的总结中，_0xcbc80b就是window对象，所以window对象的方法直接可以拿出来使用，不知道这样说准不准确


