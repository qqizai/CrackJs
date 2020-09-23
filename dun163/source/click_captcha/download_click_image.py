#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/9/23 14:46
# @Author   : qizai
# @File     : main.py
# @Software : PyCharm
"""点选验证码,下载数据集"""

import re
import json
import requests


class YiDunDownloadClickCaptcha(object):

    def __init__(self, my_id, sdk_url):
        self.index = 102

        if sdk_url is None or my_id is None:
            raise ValueError("sdk_url/my_id cann't be None.")

        self.cb_url = sdk_url+"/get_cb"
        self.fp_url = sdk_url+"/get_fp2"
        self.callback_url = sdk_url+"/get_callback"
        self.my_id = my_id

        self.success = 0
        self.total = 0

        self.url_get = "https://c.dun.163.com/api/v2/get"

        self.headers = {
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Host': "c.dun.163.com",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
            'Accept': '*/*',
            'Referer': 'https://dun.163.com/trial/sense',
            'Accept-Language': 'zh-CN,zh;q=0.9',
        }
        self.session = requests.Session()

    def download_img(self, img_url, file_name):
        _resp = self.session.get(img_url)
        with open(file_name, "wb") as f:
            f.write(_resp.content)
        pass

    def get_captcha(self):
        fp = requests.get(self.fp_url).text
        cb = requests.get(self.cb_url).text
        my_callback = requests.get(self.callback_url).text
        params = {
            "id": my_id,
            "fp": fp,
            "https": "true",
            "type": 3,
            "width": "320",
            "version": "2.14.1",
            "dpr": "1",
            "dev": "1",
            "cb": cb,
            "token": "",
            "ipv6": "false",
            "runEnv": "10",
            "group": "",
            "scene": "",
            "referer": "https://dun.163.com/trial/sense",
            "callback": my_callback,
        }

        resp = self.session.get(self.url_get, params=params, headers=self.headers)
        print(resp.text, resp.status_code)
        matcher = re.search(r"\{.*?(?=\))", resp.text)
        my_json = {}
        if matcher:
            my_json = json.loads(matcher.group())
            self.download_img(my_json["data"]["bg"][0], "../statics/demo_img/bg.jpg")
            # self.download_img(my_json["data"]["front"][0], "../statics/demo_img/front.png")
            # self.my_token = my_json["data"]["token"]
            # self.index += 1
            print(my_json)
        return my_json


    pass



if __name__ == '__main__':
    my_id = "347e9080f7a84e3e8cb79311f9e4cd3f"
    sdk_url = "http://127.0.0.1:8088"
    dun = YiDunDownloadClickCaptcha(my_id, sdk_url)

    success = 0
    total = 0
    fail = 0

    dun.get_captcha()

    pass




