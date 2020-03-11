#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2019/11/5 14:06
# @Author   : qizai
# @File     : test.py
# @Software : PyCharm

from pprint import pprint
from faker import Faker
from memory_profiler import profile

faker = Faker("zh_CN")

adict = {
    "name": faker.name(),
    "address": faker.address(),
    "text": faker.text(),
    "phone_number": faker.phone_number(),
    "job": faker.job(),

}


pprint(adict)
pprint(faker.providers)


