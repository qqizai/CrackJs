#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/7/22 13:32
# @Author   : qizai
# @File     : demo.py
# @Software : PyCharm

import time
import random
import requests


class YiDun:

    def __init__(self, my_id, sdk_url):
        if sdk_url is None or my_id is None:
            raise ValueError("sdk_url/my_id cann't be None.")

        self.cb_url = sdk_url+"/get_cb"
        self.fp_url = sdk_url+"/get_fp2"
        self.uuid_url = sdk_url+"/get_uuid"
        self.callback_url = sdk_url+"/get_callback"
        self.my_id = my_id
        self.count1 = 0
        self.count2 = 0

        self.success = 0
        self.total = 0

        self.url_conf = "https://c.dun.163yun.com/api/v2/getconf"
        self.url_get = "https://c.dun.163.com/api/v2/get"

        self.headers = {
            # 'Connection': 'keep-alive',
            # 'Pragma': 'no-cache',
            # 'Cache-Control': 'no-cache',
            'Host': "c.dun.163.com",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
            # 'Accept': '*/*',
            # 'Sec-Fetch-Site': 'same-site',
            # 'Sec-Fetch-Mode': 'no-cors',
            # 'Sec-Fetch-Dest': 'script',
            'Referer': 'https://dun.163.com/trial/sense',
            # 'Accept-Language': 'zh-CN,zh;q=0.9',
        }

        self.session = requests.Session()

    def get_ramdom_str(self, length):
        """获取指定长度的随机字符串"""
        my_str = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA"
        _result = ""
        for _ in range(length):
            i = int(random.random()*62)
            _result += my_str[i]
        return _result

    def get_conf(self):
        self.headers["Host"] = "c.dun.163.com"
        my_callback = self.session.get(self.callback_url).text
        data = {
            "id": self.my_id,
            "ipv6": "false",
            "runEnv": 10,
            "referer": "https://dun.163.com/trial/sense",
            "callback": my_callback,
        }
        _resp = self.session.get(url=self.url_conf, headers=self.headers, params=data)
        print("get_conf: ", _resp.text)

    def get_1(self):
        self.headers["Host"] = "c.dun.163.com"
        cb = requests.get(self.cb_url).text
        self.fp = requests.get(self.fp_url).text
        my_callback = requests.get(self.callback_url).text
        data = {
            "id": self.my_id,
            "fp": "",
            "https": "true",
            "type": 2,
            "width": 320,
            "version": "2.14.0",
            "dpr": "1",
            "dev": "1",
            "cb": cb,
            "ipv6": "false",
            "runEnv": "10",
            "group": "",
            "scene": "",
            "referer": "https://dun.163.com/trial/sense",
            "callback": my_callback,
        }

        _resp = requests.get(url=self.url_get, params=data, headers=self.headers)

        print("get_1: {}".format(_resp.text))
        return _resp.text


if __name__ == '__main__':

    my_id = "07e2387ab53a4d6f930b8d9a9be71bdf"
    sdk_url = "http://127.0.0.1:8088"
    dun = YiDun(my_id, sdk_url)

    success = 0
    total = 0
    while True:
        fail_flag = False

        dun.get_conf()
        _text = dun.get_1()
        if "param check error" in _text:
            fail_flag = True
        if not fail_flag:
            success += 1

        total += 1

        print("目前成功率为：{} {}/{}".format(success / total, success, total))
        print("-"*200)
        print()
        time.sleep(1)
        if total > 100:
            break
    pass



