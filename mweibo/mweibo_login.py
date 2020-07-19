#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2019/12/20 15:52
# @Author   : qizai
# @File     : mweibo_login.py
# @Software : PyCharm

# import time
# import requests
#
# session = requests.Session()
#
# header = {
#     "Accept": "*/*",
#     "Accept-Encoding": "gzip, deflate, br",
#     "Accept-Language": "zh-CN,zh;q=0.9",
#     "Connection": "keep-alive",
#     "Content-Length": "272",
#     "Content-Type": "application/x-www-form-urlencoded",
#     # "Cookie": "_T_WM=70014030552; login=d434df472bb5ab59af1d4577b2b5d916; WEIBOCN_FROM=1110005030; MLOGIN=0; M_WEIBOCN_PARAMS=uicode%3D10000011%26fid%3D102803",
#     "Host": "passport.weibo.cn",
#     "Origin": "https://passport.weibo.cn",
#     "Referer": "https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=https%3A%2F%2Fm.weibo.cn%2F",
#     "Sec-Fetch-Mode": "cors",
#     "Sec-Fetch-Site": "same-origin",
#     "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Mobile Safari/537.36"
# }
#
# url = "https://passport.weibo.cn/sso/login"
# data = {
#     "username": "1573372196@qq.com",
#     "password": "19960112LdZ",
#     "savestate": "1",
#     "r": "https://m.weibo.cn/",
#     "mainpageflag": "1",
#     "pagerefer": "https://m.weibo.cn/login?backURL=https%253A%252F%252Fm.weibo.cn%252F",
#     "entry": "mweibo",
#     # "ec": "0",
#     # "wentry": "",
#     # "loginfrom": "",
#     # "client_id": "",
#     # "code": "",
#     # "qq": "",
#     # "hff": "",
#     # "hfp": ""
# }
#
# # resp = session.post(url=url, headers=header, data=data)
# #
# # print(resp.status_code, resp.text)
# # print(resp.cookies.get_dict())
# # # time.sleep(5)
# # cookies = ""
# # for k, v in resp.cookies.items():
# #     cookies += "{}={};".format(k, v)
# # header.update({"Cookie": cookies})
# # print(header)
# #
# # resp = session.get(headers=header, url="https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E5%9B%9E%E5%BD%92%E7%A5%96%E5%9B%BD20%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23&Refer=new_time")
# # print(resp.status_code, resp.text)
# #
# # time.sleep(5)
# header = {
#     "Accept": "*/*",
#     "Accept-Encoding": "gzip, deflate, br",
#     "Accept-Language": "zh-CN,zh;q=0.9",
#     "Connection": "keep-alive",
#     "Content-Length": "272",
#     "Content-Type": "application/x-www-form-urlencoded",
#     "Host": "passport.weibo.cn",
#     "Origin": "https://passport.weibo.cn",
#     "Referer": "https://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=https%3A%2F%2Fm.weibo.cn%2F",
#     "Sec-Fetch-Mode": "cors",
#     "Sec-Fetch-Site": "same-origin",
#     # "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Mobile Safari/537.36",
#     # "Referer": "https://imgs.t.sinajs.cn/t6/style/css/module/global/WB_outframe.css?version=42212210b087ca50",
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
# }
# resp = requests.get(url="https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E5%9B%9E%E5%BD%92%E7%A5%96%E5%9B%BD20%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23&Refer=new_time", headers=header)
#
# print(resp.text)
# time.sleep(1)
# print(resp.status_code)
#


import requests
import hashlib
import time
import getpass


def get_login(phone, pwd):
    new_time = str(int(time.time()))
    sign = new_time + '_' + hashlib.md5((phone + pwd + new_time).encode("utf-8")).hexdigest()

    print(sign)
    url = "https://appblog.sina.com.cn/api/passport/v3_1/login.php"
    data = {
        "cookie_format": "1",
        "sign": sign,
        "pin": "e3eb41c951f264a6daa16b6e4367e829",
        "appver": "5.3.2",
        "appkey": "2546563246",
        "phone": phone,
        "entry": "app_blog",
        "pwd": pwd
    }
    headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 5.1.1; nxt-al10 Build/LYZ28N) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/39.0.0.0 Mobile Safari/537.36 sinablog-android/5.3.2 (Android 5.1.1; zh_CN; huawei nxt-al10/nxt-al10)",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    }
    # r = requests.post(url=url, data=data, headers=headers)
    session = requests.Session()
    r = session.post(url=url, data=data, headers=headers)
    print("login: {}".format(r.json()))
    print("cookies: {}".format(r.cookies.get_dict()))

    url = "https://m.weibo.cn/comments/hotflow?id=4451505240900957&mid=4451505240900957&max_id_type=0"
    resp = session.get(cookies=r.cookies.get_dict(), url=url, headers=headers)
    print(resp.text)
    print(resp.status_code)


if __name__ == '__main__':
    phone = input("你输入你的账号:")
    # 这里输入密码不可见
    # pwd = getpass.getpass("password:")
    pwd = input("password:")
    # phone = "123@qq.com"
    # pwd = ""

    get_login(phone, pwd)




