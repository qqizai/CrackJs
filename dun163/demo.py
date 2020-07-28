#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/7/22 13:32
# @Author   : qizai
# @File     : demo.py
# @Software : PyCharm

import requests
import random
import time


class YiDun:

    def __init__(self, my_id, sdk_url):
        if sdk_url is None or my_id is None:
            raise ValueError("sdk_url/my_id cann't be None.")

        self.cb_url = sdk_url+"/get_cb"
        self.fp_url = sdk_url+"/get_fp3"
        self.uuid_url = sdk_url+"/get_uuid"
        self.callback_url = sdk_url+"/get_mycallback"
        self.my_id = my_id
        self.count1 = 0
        self.count2 = 0

        self.success = 0
        self.total = 0

        self.url_conf1 = "https://c.dun.163yun.com/api/v2/getconf?id={id}&ipv6=false&runEnv=10&referer=https://dun.163.com/trial/sense&callback={my_callback}"
        self.url_conf2 = "https://c.dun.163yun.com/api/v2/getconf?id={id}&ipv6=false&runEnv=10&referer=https://dun.163.com/trial/sense&callback={my_callback}"
        self.url_get1 = "https://c.dun.163.com/api/v2/get?id={id}&fp={fp}&https=true&type=undefined&width=320&version=2.13.60&dpr=1&dev=1&cb={cb}&ipv6=false&runEnv=10&group=&scene=&referer=https://dun.163.com/trial/sense&callback={my_callback}"
        self.url_get2 = "https://c.dun.163.com/api/v2/get?id={id}&fp={fp}&https=true&type=undefined&width=320&version=2.13.6&dpr=1&dev=1&cb={cb}&ipv6=false&runEnv=10&group=&scene=&referer=https://dun.163.com/trial/sense&callback={my_callback}"

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
            # 'Cookie': '_ga=GA.1.285e8ffa8848f.79f5b9b3a7e3ea765458; Hm_lvt_4671c5d502135636b837050ec6d716ce=1595395863; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1595395863; __root_domain_v=.163.com; _qddaz=QD.faxdwr.567oli.kcwxi6ut'
        }

        self.session = requests.Session()

        pass

    def get_ramdom_str(self, length):
        """
        获取指定长度的随机字符串
        :param length:
        :return:
        """
        my_str = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA"
        _result = ""
        for _ in range(length):
            i = int(random.random()*62)
            _result += my_str[i]
        print("get_ramdom_str: ", _result)
        return _result

    def get_conf1(self):
        _url = self.url_conf1.format(id=self.my_id, my_callback="__JSONP_{}_{}".format(self.get_ramdom_str(7), self.count1))
        # _url = self.url_conf1.format(id=self.my_id, my_callback="__JSONP_{}_0".format(self.get_ramdom_str(7)))
        # _resp = self.session.get(url=_url, headers=self.headers)
        _resp = requests.get(url=_url, headers=self.headers)
        print("get_conf1: ", _url)
        print("resp1: ", _resp.text)
        self.count1 += 1
        pass

    def get_conf2(self):
        _url = self.url_conf2.format(id=self.my_id, my_callback="__JSONP_{}_{}".format(self.get_ramdom_str(7), self.count1))
        # _url = self.url_conf2.format(id=self.my_id, my_callback="__JSONP_{}_0".format(self.get_ramdom_str(7)))
        # _resp = self.session.get(url=_url, headers=self.headers)
        _resp = requests.get(url=_url, headers=self.headers)
        print("get_conf2: ", _url)
        print("resp2: ", _resp.text)
        self.count1 += 1
        pass

    def get_1(self):
        self.fail_flag = False

        self.headers["Host"] = "c.dun.163.com"
        cb = requests.get(self.cb_url).text
        self.fp = requests.get(self.fp_url).text
        print("self.fp: {}".format(self.fp))
        random_cb_str = requests.get(self.callback_url).text

        _url = self.url_get1.format(id=self.my_id, cb=cb, fp=self.fp, my_callback="__JSONP_{}_{}".format(random_cb_str, self.count2))
        # _url = self.url_get1.format(id=self.my_id, cb=cb, fp=self.fp, my_callback="__JSONP_{}_0".format(random_cb_str))
        # _resp = self.session.get(url=_url, headers=self.headers)
        _resp = requests.get(url=_url, headers=self.headers)
        self.count2 += 1
        print("get_conf2: ", _url)
        print("resp2: ", _resp.text)

        if "param check error" in _resp.text:
            self.fail_flag = True
        pass

    def get_2(self):
        self.headers["Host"] = "c.dun.163.com"
        cb = requests.get(self.cb_url).text
        random_cb_str = requests.get(self.callback_url).text

        _url = self.url_get2.format(id=self.my_id, cb=cb, fp=self.fp, my_callback="__JSONP_{}_{}".format(random_cb_str, self.count2))
        # _url = self.url_get2.format(id=self.my_id, cb=cb, fp=self.fp, my_callback="__JSONP_{}_0".format(random_cb_str))
        # _resp = self.session.get(url=_url, headers=self.headers)
        _resp = requests.get(url=_url, headers=self.headers)
        print("get_conf2: ", _url)
        print("resp2: ", _resp.text)
        self.count2 += 1

        if "param check error" in _resp.text:
            self.fail_flag = True

        if not self.fail_flag:
            self.success += 1

        self.total += 1

        print("目前成功率为：{} {}/{}".format(self.success/self.total, self.success, self.total))
        pass

    pass


if __name__ == '__main__':

    my_id = "5a0e2d04ffa44caba3f740e6a8b0fa84"
    sdk_url = "http://127.0.0.1:8088"
    dun = YiDun(my_id, sdk_url)

    i = 0
    while True:
        dun.get_conf1()
        # time.sleep(2)
        dun.get_conf2()

        # time.sleep(0.5)

        dun.get_1()
        # time.sleep(2)
        dun.get_2()

        print("-"*200)
        print()
        print()
        print()
        time.sleep(0.5)
        # if i > 6:
        #     break
        i += 1
    pass



