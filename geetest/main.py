#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/6/29 15:10
# @Author   : qizai
# @File     : main.py
# @Software : PyCharm

import time
import json
import logging
import requests


logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)


class GeeTest(object):

    def __init__(self):
        self.headers = {
            # 'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
            'accept': 'application/json, text/plain, */*',
            'referer': 'https://www.geetest.com/Sensebot',
            'authority': 'www.geetest.com',
            # 'cookie': 'Hm_lvt_25b04a5e7a64668b9b88e2711fb5f0c4=1593413399; sajssdk_2015_cross_new_user=1; 461cca3146ff093d059dee9439aa6b26=4f7a470a-9670-42f4-b68f-9e9f229ab945; Hm_lpvt_25b04a5e7a64668b9b88e2711fb5f0c4=1593414290; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22172fed6f32c475-0764af862c7b8e-3a65420e-2073600-172fed6f32d88a%22%2C%22%24device_id%22%3A%22172fed6f32c475-0764af862c7b8e-3a65420e-2073600-172fed6f32d88a%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwww.geetest.com%2FSensebot%22%7D%7D'
        }

        self.sess = requests.Session()
        pass

    def get_gt_challenge(self):
        url = "https://www.geetest.com/demo/gt/register-fullpage-official?t={}"
        resp = self.sess.get(url.format(int(time.time()*1000)), headers=self.headers)
        logger.debug(resp.text)
        try:
            resp_json = resp.json()
            self.gt = resp_json.get("gt", "")
            self.challenge = resp_json.get("challenge", "")
        except Exception as e:
            self.gt = ""
            self.challenge = ""
            logger.critical("[GET gt/challenge failed, the resp is not a json.] resp content:{}".format(resp.text))

    def get_w(self):
        url = "https://api.geetest.com/ajax.php?gt={}&challenge={}&lang=zh-cn&pt=0&client_type=web&w={}&callback=geetest_1593416906604"
        
    pass



if __name__ == '__main__':
    begin = GeeTest()

    begin.get_gt_challenge()


    pass







