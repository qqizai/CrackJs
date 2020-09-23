import execjs
import time
import hashlib
import requests
import json
import base64
from Crypto.Cipher import AES


paydata = {"AREACODE":"",
       "M_PROJECT_TYPE":"",
       "KIND":"GCJS",
       "GGTYPE":"1",
       "PROTYPE":"A01",
       "timeType":"6",
       "BeginTime":"2020-03-16 00:00:00",
       "EndTime":"2020-09-16 23:59:59",
       "createTime":[],
       "pageNo":2,
       "pageSize":10,
       "total":40317,
       "ts":int(time.time() * 1000)
    }

et = execjs.compile("""
function l(t, e) {
    return t.toString().toUpperCase() > e.toString().toUpperCase() ? 1 : t.toString().toUpperCase() == e.toString().toUpperCase() ? 0 : -1
}
function s(t) {
    for (var e = Object.keys(t).sort(l), n = "", a = 0; a < e.length; a++)
        if (void 0 !== t[e[a]])
            if (t[e[a]] && t[e[a]]instanceof Object || t[e[a]]instanceof Array) {
                var c = JSON.stringify(t[e[a]]);
                n += e[a] + c
            } else
                n += e[a] + t[e[a]];
    return n
}
function getSign(t) {
    for (var e in t)
        "" !== t[e] && void 0 !== t[e] || delete t[e];
    var n = "3637CB36B2E54A72A7002978D0506CDF" + s(t);
    return n
}
""")
dd = et.call('getSign', paydata)
portal_sign = hashlib.md5(dd.encode(encoding='UTF-8')).hexdigest()
print(portal_sign)

heade = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Cookie': '_qdda=4-1.1; _qddab=4-yystkg.kf5b823v; __root_domain_v=.fujian.gov.cn; _qddaz=QD.hif5jc.tl4rwl.kf5b8a88; _qddamta_2852155767=4-0',
    'Host': 'ggzyfw.fujian.gov.cn',
    'Origin': 'https://ggzyfw.fujian.gov.cn',
    'portal-sign': portal_sign,
    'Pragma': 'no-cache',
    'Referer': 'https://ggzyfw.fujian.gov.cn/web/index.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36'
}

url = 'https://ggzyfw.fujian.gov.cn/Trade/TradeInfo'
res = requests.post(url, headers=heade, data=json.dumps(paydata)).json()
print(res)

t = "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"
def pkcs7unpadding(text):
    try:
        length = len(text)
        unpadding = ord(text[length-1])
        return text[0:length-unpadding]
    except Exception as e:
        pass

def aes_decode(key, content):
    key_bytes = bytes(key, encoding='utf-8')
    iv = b'A8909931867B0425'
    cipher = AES.new(key_bytes, AES.MODE_CBC, iv)
    aes_encode_bytes = base64.b64decode(content)
    aes_decode_bytes = cipher.decrypt(aes_encode_bytes)
    result = str(aes_decode_bytes, encoding='utf-8')
    result = pkcs7unpadding(result)
    return result


print(aes_decode('BE45D593014E4A4EB4449737660876CE', res['Data']))
