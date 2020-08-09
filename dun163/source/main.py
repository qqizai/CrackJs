#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/8/9 19:26
# @Author   : qizai
# @File     : main.py
# @Software : PyCharm

import re
import json
import requests

# from dun163.source.trace_generator import HandleSliderImg3, get_trace_list, get_track
from trace_generator import HandleSliderImg3, get_trace_list, get_track
from gap import get_gap


class YiDun:

    def __init__(self, captcha_id, url_items):
        self.captcha_id = captcha_id
        self.url_items = url_items

        self.token_url = "https://c.dun.163.com/api/v2/get"
        self.check_url = "https://c.dun.163.com/api/v2/check"

        pass

    def get_token(self):
        headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'DNT': '1',
            'Host': 'c.dun.163yun.com',
            'Referer': 'https://dun.163.com/trial/jigsaw',
            'Pragma': 'no-cache',
            'Proxy-Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }
        cb = requests.get(self.url_items.get("get_cb2")).text
        fp = requests.get(self.url_items.get("get_fp3")).text
        my_callback = requests.get(self.url_items.get("get_callback")).text
        params = {
            "id": self.captcha_id,
            "fp": fp,
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
        resp = requests.get(url=self.token_url, headers=headers, params=params)

        matcher = re.search(r"\{.*?(?=\))", resp.text)
        if matcher:
            my_json = json.loads(matcher.group())
            print(my_json)
            self.download_img(my_json["data"]["bg"][0], "1.jpg")
            self.download_img(my_json["data"]["front"][0], "2.png")
            self.my_token = my_json["data"]["token"]
            print(f"self.my_token: {self.my_token}")
        return self.my_token

    def download_img(self, img_url, file_name):
        _resp = requests.get(img_url)
        with open(file_name, "wb") as f:
            f.write(_resp.content)
        print(f"保存 {file_name} 成功")

    def encrypt_data(self):
        # left_x = HandleSliderImg3("1.jpg", "2.png").main()
        # left_x = left_x[0][0]
        left_x = get_gap() + 5
        # trace_list = get_trace_list(left_x)
        trace_list = get_track(left_x)
        params = {
            "trace_list": trace_list,
            "position_left": left_x,
            # "position_left": trace_list[-1][0]-10,
            "token": self.my_token,
        }
        resp = requests.post(self.url_items.get("get_trace_data"), data=params)
        print(f"params: {params}")
        print("encrypt_data: {}".format(resp.text))
        return json.loads(resp.text)

    def check_data(self):
        data = self.encrypt_data()
        print(data)

        cb = requests.get(self.url_items.get("get_cb2")).text
        my_callback = requests.get(self.url_items.get("get_callback")).text
        params = {
            "id": self.captcha_id,
            "token": self.my_token,
            "acToken": "",
            "data": data,
            "width": "320",
            "type": "2",
            "version": "2.14.1",
            "cb": cb,
            "extraData": "",
            "runEnv": "10",
            # "referer": "https://dun.163.com/trial/jigsaw",
            'Referer': 'https://dun.163.com/trial/sense',
            # "callback": my_callback,
            "callback": '__JSONP_w7mwv6b_6'
        }
        print(f"params: {params}")

        headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'DNT': '1',
            'Host': 'c.dun.163yun.com',
            'Referer': 'https://dun.163.com/trial/jigsaw',
            'Pragma': 'no-cache',
            'Proxy-Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }
        resp = requests.get(url=self.check_url, headers=headers, params=params)
        print(resp.status_code, resp.text)
        pass

    def run(self):
        self.get_token()
        self.check_data()
        pass




if __name__ == "__main__":

    captcha_id = "5a0e2d04ffa44caba3f740e6a8b0fa84"
    sdk_url = "http://127.0.0.1:8088"

    url_items = {
        "get_cb": f"{sdk_url}/get_cb",
        "get_cb2": f"{sdk_url}/get_cb2",
        "get_fp": f"{sdk_url}/get_fp",
        "get_fp2": f"{sdk_url}/get_fp2",
        "get_fp3": f"{sdk_url}/get_fp3",
        "get_uuid": f"{sdk_url}/get_uuid",
        "get_callback": f"{sdk_url}/get_callback",
        "get_trace_data": f"{sdk_url}/get_trace_data",
    }

    yidun = YiDun(captcha_id, url_items)
    yidun.run()

    pass




