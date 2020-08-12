#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/7/22 13:32
# @Author   : qizai
# @File     : demo.py
# @Software : PyCharm

import re
import json
import time
import random
import requests

# from dun163.source.trace_generator import HandleSliderImg, HandleSliderImg2, HandleSliderImg3, get_trace_list, get_track
from trace_generator import HandleSliderImg, HandleSliderImg2, HandleSliderImg3, HandleSliderImg4, get_trace_list, get_track


class YiDun:

    def __init__(self, my_id, sdk_url):
        self.index = 102

        if sdk_url is None or my_id is None:
            raise ValueError("sdk_url/my_id cann't be None.")

        self.cb_url = sdk_url+"/get_cb"
        self.fp_url = sdk_url+"/get_fp2"
        self.callback_url = sdk_url+"/get_callback"
        self.encrypt_trace_url = sdk_url+"/get_trace_data"
        self.my_id = my_id
        self.count1 = 0
        self.count2 = 0

        self.success = 0
        self.total = 0

        self.url_conf = "https://c.dun.163yun.com/api/v2/getconf"
        self.url_get = "https://c.dun.163.com/api/v2/get"
        self.check_url = "https://c.dun.163.com/api/v2/check"

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

        # self.headers = {
        #     'Accept': '*/*',
        #     'Accept-Encoding': 'gzip, deflate',
        #     'Accept-Language': 'zh-CN,zh;q=0.9',
        #     'Cache-Control': 'no-cache',
        #     'DNT': '1',
        #     'Host': 'c.dun.163yun.com',
        #     'Referer': 'https://dun.163.com/trial/jigsaw',
        #     'Pragma': 'no-cache',
        #     'Proxy-Connection': 'keep-alive',
        #     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        # }

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

    def get_image(self):
        self.headers["Host"] = "c.dun.163.com"
        cb = requests.get(self.cb_url).text
        self.fp = requests.get(self.fp_url).text
        my_callback = requests.get(self.callback_url).text
        data = {
            "id": self.my_id,
            "fp": self.fp,
            "https": "true",
            "type": "2",
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

        _resp = requests.get(url=self.url_get, params=data, headers=self.headers)

        print("get_1: {}".format(_resp.text))

        matcher = re.search(r"\{.*?(?=\))", _resp.text)
        if matcher:
            my_json = json.loads(matcher.group())
            print(my_json)
            self.download_img(my_json["data"]["bg"][0], "./captcha/bg_{}000001.jpg".format(self.index))
            self.download_img(my_json["data"]["front"][0], "./captcha/bg_{}000002.png".format(self.index))
            self.my_token = my_json["data"]["token"]
            print(f"self.my_token: {self.my_token}")
            self.index += 1
        return _resp.text

    def download_img(self, img_url, file_name):
        _resp = self.session.get(img_url)
        with open(file_name, "wb") as f:
            f.write(_resp.content)
        print(f"保存 {file_name} 成功")
        pass

    def encrypt_data(self):
        #handle_img2 = HandleSliderImg("bg.jpg", "front.png")
        #handle_img2 = HandleSliderImg2("bg.jpg", "front.png")
        #handle_img2 = HandleSliderImg3("bg.jpg", "front.png")
        handle_img2 = HandleSliderImg4("bg.jpg", "front.png")
        result2 = handle_img2.main()
        trace_list = get_trace_list(result2[0][0])
        # trace_list = get_track(result2[0][0])
        params = {
            "trace_list": json.dumps(trace_list),
            "position_left": result2[0][0]-10,
            # "position_left": trace_list[-1][0],
            "token": self.my_token,
        }
        resp = self.session.post(self.encrypt_trace_url, data=params)
        my_data = json.loads(resp.text)
        return my_data

    def check_data(self):
        data = self.encrypt_data()
        cb = requests.get(self.cb_url).text
        my_callback = requests.get(self.callback_url).text
        params = {
            "id": self.my_id,
            "token": self.my_token,
            "acToken": "",
            "data": str(data),
            "width": "320",
            "type": "2",
            "version": "2.14.1",
            "cb": cb,
            "extraData": "",
            "runEnv": "10",
            "referer": "https://dun.163.com/trial/sense",
            "callback": "__JSONP_hhjwbon_4",
            # "callback": my_callback,
        }

        headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'DNT': '1',
            # 'Host': 'c.dun.163yun.com',
            'Host': 'c.dun.163.com',
            'Referer': 'https://dun.163.com/trial/jigsaw',
            'Pragma': 'no-cache',
            'Proxy-Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }

        print(params)
        resp = requests.get(url=self.check_url, headers=headers, params=params)

        print(resp.text)
        print(resp.status_code)
        return resp.text


if __name__ == '__main__':

    my_id = "5a0e2d04ffa44caba3f740e6a8b0fa84"
    sdk_url = "http://127.0.0.1:8088"
    dun = YiDun(my_id, sdk_url)

    success = 0
    total = 0
    while True:
        fail_flag = False

        # dun.get_conf()
        _text = dun.get_image()

        # time.sleep(1)
        #
        # # dun.encrypt_data()
        # _text = dun.check_data()
        #
        # if '{"result":false' not in _text:
        #     success += 1
        total += 1
        print("目前成功率为：{} {}/{}".format(success / total, success, total))
        print("-"*200)
        print()
        if total > 100:
            break
    pass



