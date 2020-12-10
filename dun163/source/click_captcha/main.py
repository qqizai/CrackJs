#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/10/31 9:52
# @Author   : qizai
# @File     : main.py
# @Software : PyCharm
import base64
import os
import re
import json
import time
import random
import requests
import shutil

# from dun163.source.common.trace_generator import get_trace_list_by_random
#
# predict_url = "http://127.0.0.1:8000/captcha"
#
#
# class YiDunClickSelectCaptcha:
#
#     def __init__(self, my_id, sdk_url, my_token=None):
#
#         if sdk_url is None or my_id is None:
#             raise ValueError("sdk_url/my_id cann't be None.")
#
#         self.cb_url = sdk_url+"/get_cb"
#         self.fp_url = sdk_url+"/get_fp2"
#         self.callback_url = sdk_url+"/get_callback"
#         self.encrypt_trace_url = sdk_url+"/get_trace_data"
#         self.encrypt_trace_for_click_url = sdk_url+"/get_trace_data_for_click"
#         self.encrypt_one_position_url = sdk_url+"/encrypt_one_position"
#         self.encrypt_func_b_url = sdk_url+"/encrypt_func_b"
#
#         self.predict_url = predict_url
#         self.my_id = my_id
#         self.my_token = my_token
#         self.count1 = 0
#         self.count2 = 0
#
#         self.success = 0
#         self.total = 0
#
#         self.url_get = "https://c.dun.163.com/api/v2/get"
#         self.check_url = "https://c.dun.163.com/api/v2/check"
#
#         self.headers = {
#             'Connection': 'keep-alive',
#             'Pragma': 'no-cache',
#             'Cache-Control': 'no-cache',
#             'Host': "c.dun.163.com",
#             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
#             'Accept': '*/*',
#             'Referer': 'https://dun.163.com/trial/sense',
#             'Accept-Language': 'zh-CN,zh;q=0.9',
#         }
#         self.session = requests.Session()
#
#     def download_img(self, img_url, file_name):
#         _resp = self.session.get(img_url)
#         with open(file_name, "wb") as f:
#             f.write(_resp.content)
#
#     def get_captcha(self):
#         fp = requests.get(self.fp_url).text
#         cb = requests.get(self.cb_url).text
#         my_callback = requests.get(self.callback_url).text
#         params = {
#             "id": my_id,
#             "fp": fp,
#             "https": "true",
#             "type": 3,
#             "width": "320",
#             "version": "2.14.1",
#             "dpr": "1",
#             "dev": "1",
#             "cb": cb,
#             "token": "",
#             "ipv6": "false",
#             "runEnv": "10",
#             "group": "",
#             "scene": "",
#             "referer": "https://dun.163.com/trial/sense",
#             "callback": my_callback,
#         }
#
#         resp = self.session.get(self.url_get, params=params, headers=self.headers)
#         matcher = re.search(r"\{.*?(?=\))", resp.text)
#         my_json = {}
#         try:
#             if matcher:
#                 my_json = json.loads(matcher.group())
#                 img_url = my_json["data"]["bg"][0]
#                 img_text = my_json["data"]["front"]
#                 img_name = r"E:\datas\python\data_captchas\yidun\JPEGImages\%s" % img_url.split("/")[-1]
#                 self.download_img(img_url, img_name)
#
#                 my_json["img_path"] = img_name
#                 my_json["front"] = img_text
#         except Exception as e:
#             print(e)
#         return my_json
#
#     def predict_position(self, img_path):
#         """
#         {'msg': 'success', 'code': 200, 'data': {
#             '蓬': {'x': 94, 'y': 83, 'source_data': {'sx': 76, 'sy': 66, 'width': 37, 'height': 35}},
#             '味': {'x': 48, 'y': 63, 'source_data': {'sx': 30, 'sy': 45, 'width': 36, 'height': 37}},
#             '土': {'x': 256, 'y': 91, 'source_data': {'sx': 237, 'sy': 72, 'width': 38, 'height': 39}},
#             '余': {'x': 208, 'y': 86, 'source_data': {'sx': 191, 'sy': 69, 'width': 34, 'height': 35}}
#             }
#         }
#         """
#         f = open(img_path, 'rb')
#         s = base64.b64encode(f.read()).decode()
#         res = requests.post(url=self.predict_url, data=json.dumps({'img': s}))
#         print(res.text)
#         data = res.json()
#         print(f"预测返回结果: {data}")
#         data = data.get('data')
#         return data
#
#     def test(self):
#         params = {
#             "token": self.my_token,
#             "position": "238,63,972",
#         }
#         resp = self.session.post(self.encrypt_one_position_url, data=params)
#         print(resp.text)
#
#         pass
#
#     def encrypt_data(self):
#         tmp_data = {
#             "d": "",
#             "m": "",  # 鼠标轨迹加密
#             "p": "",  # 三个文字的综合加密
#             "ext": "",
#         }
#
#         data_captcha = self.get_captcha()
#         data_predict_position = {}
#         if data_captcha or data_captcha["img_path"]:
#             data_predict_position = self.predict_position(data_captcha["img_path"])
#         else:
#             # 请求失败
#             print("请求识别验证码失败，请检查服务器是否出现异常")
#             return None
#
#         if not data_predict_position:
#             print("识别验证码位置失败")
#             return None
#
#         # 分别获取每个 点选位置 加密后的参数
#         # 先判断预测的三个文字是否都有返回，没有就是识别失败了
#         fronts = data_captcha["front"]
#
#         data_front_encrypt = []
#
#         for index, one_front in enumerate(fronts):
#             if one_front in data_predict_position.keys():
#                 # 逐个位置去加密
#                 data_one_position = data_predict_position.get(one_front)
#
#                 x_y_t = "{},{},{}".format(data_one_position.get("x"), data_one_position.get("y"), random.randint(901, 2999))
#                 params = {
#                     "token": self.my_token,
#                     "position": x_y_t,
#                 }
#                 resp = self.session.post(self.encrypt_one_position_url, data=params)
#                 print(f"{one_front} 位置为: {x_y_t}  对应加密后参数为: {resp.text}")
#
#                 data_front_encrypt.append(resp.text)
#             else:
#                 print(f"没有识别出来: {index} -> {one_front} -> 已终止. < {fronts} >--< {''.join(data_predict_position.keys())} >")
#                 return None
#
#         tmp_data["p"] = ":".join(data_front_encrypt)
#
#         trace_list = get_trace_list_by_random()
#         params = {
#             "trace_list": json.dumps(trace_list),
#             "p": tmp_data["p"],
#             "token": self.my_token,
#         }
#         resp = self.session.post(self.encrypt_trace_for_click_url, data=params)
#         my_data = json.loads(resp.text)
#         return my_data
#
#     def check_data(self):
#         data = self.encrypt_data()
#         if data is None:
#             return "false"
#         cb = requests.get(self.cb_url).text
#         my_callback = requests.get(self.callback_url).text
#         params = {
#             "id": self.my_id,
#             "token": self.my_token,
#             "acToken": "",
#             "data": str(data),
#             "width": "320",
#             "type": "3",  # 文字点选3，滑动2
#             "version": "2.14.1",
#             "cb": cb,
#             "extraData": "",
#             "runEnv": "10",
#             "referer": "https://dun.163.com/trial/sense",
#             "callback": my_callback,
#         }
#
#         resp = requests.get(url=self.check_url, headers=self.headers, params=params)
#         return resp.text
#
#
# if __name__ == '__main__':
#
#     # my_id = "5a0e2d04ffa44caba3f740e6a8b0fa84"
#     my_id = "347e9080f7a84e3e8cb79311f9e4cd3f"
#     my_token = "9e4f85c0cc6b4fe48ec03dde380e408f"
#     sdk_url = "http://127.0.0.1:8088"
#     dun = YiDunClickSelectCaptcha(my_id, sdk_url, my_token)
#
#     success = 0
#     total = 0
#     fail = 0
#
#     while True:
#
#         time.sleep(0.3)
#         _text = dun.check_data()
#
#         if 'false' not in _text:
#             success += 1
#         else:
#             fail += 1
#             # shut il.move("bg.jpg", "../statics/fail_img/bg_{}.jpg".format(fail))
#             # shut il.move("front.png", "../statics/fail_img/front_{}.png".format(fail))
#             # shut il.move("bg_res.jpg", "../statics/fail_img/bg_res_{}.jpg".format(fail))
#         total += 1
#         print("目前成功率为：{} {}/{}".format(success / total, success, total))
#         print("-"*200)
#         print()
#         # if total > 1000:
#         #     break
#     pass
#
#
#
