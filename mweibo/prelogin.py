#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2019/12/24 15:02
# @Author   : qizai
# @File     : prelogin.py
# @Software : PyCharm

import re
import time
from urllib.parse import quote_plus
import requests
import base64
import json
import execjs


# headers = {
#     "Accept": "*/*",
#     "Accept-Encoding": "gzip, deflate, br",
#     "Accept-Language": "zh-CN,zh;q=0.9",
#     "Connection": "keep-alive",
#     # "Cookie": "login=6ec7f45fe2ef20765c00bb7efc116593; SINAGLOBAL=183.6.112.71_1577169900.372838; Apache=183.6.112.71_1577169900.372839; SUB=_2AkMpXTzBdcPxrAFUmvAWz27kbI1H-jyaiFU3An7tJhMyAhhu7msNqSdutBF-XBCn5ACD3PhLQ0HRyu4I6bAz6fXV; SUBP=0033WrSXqPxfM72wWs9jqgMF55529P9D9WWofOfe78QiPRCZNab0b.pw5JpV2K2fS0e0S0zp1K95MP2Vqcv_",
#     "Host": "login.sina.com.cn",
#     "Referer": "https://weibo.com/",
#     "Sec-Fetch-Mode": "no-cors",
#     "Sec-Fetch-Site": "cross-site",
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
# }
#
#
# def get_prelogin(user_name=None, su=None):
#     _url = "https://login.sina.com.cn/sso/prelogin.php?"
#     parms_prelogin = {
#         "entry": "weibo",  # 不知道啥，固定即可，不同登录版本，估计不一样
#         "callback": "sinaSSOController.preloginCallBack",  # 固定即可，回调的函数名+.preloginCallBack
#         "su": su,  # 编码后的用户名,先进行url编码、再base64编码
#         "rsakt": "mod",  # 不知道啥，固定即可
#         "checkpin": 1,  # 不知道啥，固定即可(checkpin=1 时，会返回showpin告诉你是否需要验证码，如果返回的showpin=0表示不需要验证码)
#         "client": "ssologin.js(v1.4.19)",  # 猜 登录版本，固定即可
#         "_": int(time.time()*1000),  # int(当前的时间戳*1000)  可有可无
#
#     }
#     for k, v in parms_prelogin.items():
#         _url += "{}={}&".format(k, v)
#
#     resp = requests.get(url=_url, headers=headers)
#     try:
#         adict = json.loads(re.search("(?<=\()(.*?)(?=\))", resp.text).group())
#     except json.JSONDecodeError as e:
#         print("不是json对象,获取登录前参数失败，请重新尝试")
#         adict = {}
#     print(adict)
#     return adict
#
#
# def get_sp(pubkey, server_time, nonce, user_name):
#     """获取加密参数value_sp"""
#     sp_js = ""
#     with open("./sp.js", "r", encoding="utf8") as f:
#         sp_js = f.read()
#         f.close()
#     js_content = execjs.compile(sp_js)
#     value_sp = js_content.call("get_sp", pubkey, server_time, nonce, user_name)
#     print(value_sp)
#     return value_sp
#
#
# def login_sina(user_name=None):
#     su = base64.b64encode(quote_plus(user_name).encode("utf8")).decode()
#     adict = get_prelogin(user_name, su)
#     if not adict:
#         raise ValueError("登录失败")
#     _headers = {
#         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
#         "Accept-Encoding": "gzip, deflate, br",
#         "Accept-Language": "zh-CN,zh;q=0.9",
#         "Cache-Control": "max-age=0",
#         "Connection": "keep-alive",
#         "Content-Length": "640",
#         "Content-Type": "application/x-www-form-urlencoded",
#         # "Cookie": "login=6ec7f45fe2ef20765c00bb7efc116593; SINAGLOBAL=183.6.112.71_1577169900.372838; Apache=183.6.112.71_1577169900.372839; SUB=_2AkMpXTzBdcPxrAFUmvAWz27kbI1H-jyaiFU3An7tJhMyAhhu7msNqSdutBF-XBCn5ACD3PhLQ0HRyu4I6bAz6fXV; SUBP=0033WrSXqPxfM72wWs9jqgMF55529P9D9WWofOfe78QiPRCZNab0b.pw5JpV2K2fS0e0S0zp1K95MP2Vqcv_",
#         "Host": "login.sina.com.cn",
#         "Origin": "https://weibo.com",
#         "Referer": "https://weibo.com/",
#         "Sec-Fetch-Mode": "nested-navigate",
#         "Sec-Fetch-Site": "cross-site",
#         "Sec-Fetch-User": "?1",
#         "Upgrade-Insecure-Requests": "1",
#         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
#     }
#
#     value_sp = get_sp(adict["pubkey"], adict["servertime"], adict["nonce"], user_name)
#
#     _url = "https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.19)"
#     data = {
#         "entry": "weibo",
#         "gateway": "1",
#         "from": "",
#         "savestate": "7",
#         "qrcode_flag": "false",
#         "useticket": "1",
#         "pagerefer": "",
#         "vsnf": "1",
#         "su": su,
#         "service": "miniblog",
#         "servertime": int(time.time()*1000),
#         "nonce": adict["nonce"],
#         "pwencode": "rsa2",
#         "rsakv": adict["rsakv"],
#         "sp": value_sp,  # TODO 这个需要测试
#         "sr": "1920*1080",
#         "encoding": "UTF-8",
#         "prelt": "5312",
#         "url": "https://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack",
#         "returntype": "META"
#     }
#     resp = requests.post(url=_url, headers=_headers, data=data)
#     print(resp.text)
#     print(resp.status_code)
#
#
# if __name__ == '__main__':
#     # get_prelogin(user_name="123456@qq.com")
#     login_sina(user_name="123456@qq.com")
#     """参考github链接，思路还是一样的：https://github.com/huiyadanli/SinaLogin"""
#
#     import psutil  # 获取详细系统参数
#     print(psutil.test())  # 如Linux的ps


# def consumer():
#     r = ''
#     while True:
#         n = yield r
#         if not n:
#             print("??????????????????")
#             return
#         print('[CONSUMER] Consuming %s...' % n)
#         r = '200 OK'
#
#
# def produce(c):
#     c.send(None)
#     n = 0
#     while n < 500:
#         n = n + 1
#         print('[PRODUCER] Producing %s...' % n)
#         r = c.send(n)
#         print('[PRODUCER] Consumer return: %s' % r)
#     c.close()
#
#
# c = consumer()
# produce(c)


import base64
import lzstring

ic = {"name": "root", "password": "123456"}
print("源字符串:", ic)
print("b64encode:", base64.b64encode(str(ic).encode()).decode())  # 这个是base64编码

x = lzstring.LZString()
compressed = x.compressToBase64(str(ic))  # 对字符串进行压缩成类base64的编码
print("compressToBase64:", compressed)
decompressed = x.decompressFromBase64(compressed)  # 对压缩的字符串进行解压
print("decompressFromBase64", decompressed)
