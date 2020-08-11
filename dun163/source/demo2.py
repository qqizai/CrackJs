#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/8/9 21:41
# @Author   : qizai
# @File     : demo2.py
# @Software : PyCharm

import json
import re
from urllib import request

import execjs
import requests

# from gap import get_gap
from dun163.source.trace_generator import get_trace_list, HandleSliderImg3


def main():
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
    with open('fingerprint2.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    fp = ctx.call('get_fp3')
    callback = ctx.call('get_callback')
    # fp = requests.get("http://127.0.0.1:8088/get_fp2").text
    # callback = requests.get("http://127.0.0.1:8088/get_callback").text
    # cb = requests.get("http://127.0.0.1:8088/get_cb2").text

    with open('../analysis/mouse_trace.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    cb = ctx.call('cb')
    data = {
        "id":"5a0e2d04ffa44caba3f740e6a8b0fa84",
        "fp":  fp,
        "https":"true",
        "type":"2",
        "version":"2.14.1",
        "dpr":"1",
        "dev":"1",
        "cb":cb,
        "ipv6":"false",
        "runEnv":"10",
        "group":"",
        "scene":"",
        "width":"320",
        "token":"",
        # "referer":"https://dun.163.com/trial/jigsaw",
        'Referer': 'https://dun.163.com/trial/sense',
        "callback":callback
    }
    r = requests.get('https://c.dun.163.com/api/v2/get', params=data, headers=headers)
    data = json.loads(re.findall('.*?\((.*?)\);', r.text)[0])
    print(f"data: {data}")
    token = data['data']['token']
    request.urlretrieve(data['data']['front'][0], '1.png')
    request.urlretrieve(data['data']['bg'][0], '2.jpg')
    # distance = get_gap() + 5
    distance = HandleSliderImg3("2.png", "1.jpg").main()[0][0]
    # trace = get_track(distance)
    trace = get_trace_list(distance)
    left = trace[-1][0]-10
    print(left, distance, trace)
    # data = ctx.call('get_data', token, trace, left)
    data = ctx.call('my_encrypt', trace, token, left)
    cb = ctx.call('cb')

    params = {
        "trace_list": trace,
        "position_left": distance,
        # "position_left": trace_list[-1][0]-10,
        "token": token,
    }
    # resp = requests.post("http://127.0.0.1:8088/get_trace_data", data=params)
    # cb = requests.get("http://127.0.0.1:8088/get_cb2").text
    # data = resp.text
    print(data)
    get_data = {
        "id": "5a0e2d04ffa44caba3f740e6a8b0fa84",
        "token": token,
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
        "callback": "__JSONP_hhjwbon_4"
    }
    print(f"data: {get_data}")
    r = requests.get('https://c.dun.163.com/api/v2/check', headers=headers, params=get_data)
    print(r.text)


if __name__ == '__main__':
    main()




