#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/7/22 13:32
# @Author   : qizai
# @File     : demo.py
# @Software : PyCharm

import requests
import random
import time

url = "https://c.dun.163.com/api/v2/get?id={id}&fp={fp}&https=true&type=undefined&width=0&version=2.14.0&dpr=1&dev=1&cb={cb}&ipv6=false&runEnv=10&group=&scene=&referer=https%3A%2F%2Fdun.163.com%2Ftrial%2Fsense&callback={my_callback}"

payload = {}
headers = {
  'Connection': 'keep-alive',
  'Pragma': 'no-cache',
  'Cache-Control': 'no-cache',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
  'Accept': '*/*',
  'Sec-Fetch-Site': 'same-site',
  'Sec-Fetch-Mode': 'no-cors',
  'Sec-Fetch-Dest': 'script',
  'Referer': 'https://dun.163.com/trial/sense',
  'Accept-Language': 'zh-CN,zh;q=0.9',
  'Cookie': '_ga=GA.1.285e8ffa8848f.79f5b9b3a7e3ea765458; Hm_lvt_4671c5d502135636b837050ec6d716ce=1595395863; Hm_lpvt_4671c5d502135636b837050ec6d716ce=1595395863; __root_domain_v=.163.com; _qddaz=QD.faxdwr.567oli.kcwxi6ut'
}

id = "74b1d03fcaf944b4aa3a862b2a1893e1"
cb = "yn442/LkYOw+/qSl0wlBwuPpu/Iy0gXlhKou76P+COx\4plz1M/D6v7d5Gsl5U0d"
fp = "zWORbzGloEInoeyLKuQIlIho/TbqcP9od9StTG6aEDXo8cEKlOrzGCA\9pGCEmkhpC1KiQug67IjQfjMyycUxdH6Pl3z0WRODzNA/TArTS8UePUvc5+xBMoO7ImyXCwk0DncWMHfXzqUjdGH46NrG26wbBjbQvM5ZtyIWhW6Sv6VV5WW:1595396815384900000"
my_callback = "__JSONP_{}_1".format("ca63KRF")  # __JSONP_3erm6b0_2

# response = requests.request("GET", url.format(id=id, fp=fp, cb=cb, my_callback=my_callback), headers=headers, data=payload)
#
# print(response.text.encode('utf8'))


class YiDun:

    def __init__(self, my_id, sdk_url):
        if sdk_url is None or my_id is None:
            raise ValueError("sdk_url/my_id cann't be None.")

        self.cb_url = sdk_url+"/get_cb"
        self.fp_url = sdk_url+"/get_fp"
        self.uuid_url = sdk_url+"/get_uuid"
        self.callback_url = sdk_url+"/get_mycallback"
        self.my_id = my_id

        self.url_conf1 = "https://c.dun.163yun.com/api/v2/getconf?id={id}&ipv6=false&runEnv=10&referer=https://dun.163.com/trial/sense&callback={my_callback}"
        self.url_conf2 = "https://c.dun.163yun.com/api/v2/getconf?id={id}&ipv6=false&runEnv=10&referer=https://dun.163.com/trial/sense&callback={my_callback}"
        self.url_get1 = "https://c.dun.163.com/api/v2/get?id={id}&fp={fp}&https=true&type=undefined&width=0&version=2.14.0&dpr=1&dev=1&cb={cb}&ipv6=false&runEnv=10&group=&scene=&referer=https://dun.163.com/trial/sense&callback={my_callback}"
        self.url_get2 = "https://c.dun.163.com/api/v2/get?id={id}&fp={fp}&https=true&type=undefined&width=&version=2.14.0&dpr=1&dev=1&cb={cb}&ipv6=false&runEnv=10&group=&scene=&referer=https://dun.163.com/trial/sense&callback={my_callback}"

        self.headers = {
            'Connection': 'keep-alive',
            # 'Pragma': 'no-cache',
            # 'Cache-Control': 'no-cache',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
            # 'Accept': '*/*',
            # 'Sec-Fetch-Site': 'same-site',
            # 'Sec-Fetch-Mode': 'no-cors',
            # 'Sec-Fetch-Dest': 'script',
            'Referer': 'https://dun.163.com/trial/sense',
            'Accept-Language': 'zh-CN,zh;q=0.9',
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
        _url = self.url_conf1.format(id=self.my_id, my_callback="__JSONP_{}_1".format(self.get_ramdom_str(7)))
        _resp = self.session.get(url=_url, headers=self.headers)
        print("get_conf1: ", _url)
        print("resp1: ", _resp.text)
        pass

    def get_conf2(self):
        _url = self.url_conf2.format(id=self.my_id, my_callback="__JSONP_{}_2".format(self.get_ramdom_str(7)))
        _resp = self.session.get(url=_url, headers=self.headers)
        print("get_conf2: ", _url)
        print("resp2: ", _resp.text)
        pass

    def get_1(self):
        self.headers["Host"] = "c.dun.163.com"
        cb = requests.get(self.cb_url).text
        self.fp = requests.get(self.fp_url).text
        print(self.fp)
        self.count = 1
        random_cb_str = requests.get(self.callback_url).text

        _url = self.url_get1.format(id=self.my_id, cb=cb, fp=self.fp, my_callback="__JSONP_{}_{}".format(random_cb_str, self.count))
        _resp = self.session.get(url=_url, headers=self.headers)
        self.count += 1
        print("get_conf2: ", _url)
        print("resp2: ", _resp.text)
        pass

    def get_2(self):
        self.headers["Host"] = "c.dun.163.com"
        cb = requests.get(self.cb_url).text
        random_cb_str = requests.get(self.callback_url).text

        _url = self.url_get2.format(id=self.my_id, cb=cb, fp=self.fp, my_callback="__JSONP_{}_{}".format(random_cb_str, self.count))
        _resp = self.session.get(url=_url, headers=self.headers)
        print("get_conf2: ", _url)
        print("resp2: ", _resp.text)
        pass

    pass


if __name__ == '__main__':

    my_id = "74b1d03fcaf944b4aa3a862b2a1893e1"
    sdk_url = "http://127.0.0.1:8088"
    dun = YiDun(my_id, sdk_url)

    dun.get_conf1()
    time.sleep(0.5)
    dun.get_conf2()

    time.sleep(1)

    dun.get_1()
    time.sleep(1)
    dun.get_2()

    pass



