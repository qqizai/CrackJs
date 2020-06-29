#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2020/4/8 15:42
# @Author   : qizai
# @File     : tmp.py
# @Software : PyCharm
from keras.layers import Dense

class Cat():
    def __init__(self, name="TomCat", age=10, addr="开源大道188号", *args, **kwargs):
        self.name = name
        self.age = 10
        self.addr = addr

    def __call__(self, *args, **kwargs):
        my_property = {
            "name": self.name,
            "age": self.age,
            "addr": self.addr,
        }
        if "desc" in kwargs.keys():
            my_property.update({"desc": kwargs.get("desc")})

        return my_property


a_cat = Cat(name="a cat", age=13, addr="香雪牌坊", desc="1333333")
print(a_cat.name)
print(a_cat.age)
print(a_cat.addr)
try:
    print(a_cat.desc)
except:
    print("报错了，没有desc属性")
print(a_cat(desc="汤姆猫游戏"))

