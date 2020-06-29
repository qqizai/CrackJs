#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time    : 2020/3/17 22:06
# @Author  : qizai
# @File    : property.py
# @Software: PyCharm


class User:
    """docstring for user:"""

    def __init__(self, first_name, last_name, **user_info):
        self.first = first_name
        self.last = last_name
        self.info = user_info

        self.profile = {'first name': self.first, 'Last name': self.last}
        for key, value in self.info.items():
            self.profile[key] = value

    # 把方法变成属性即可，不需要调用括号，但是需要在方法的上面调用@property把方法变成属性来使用
    @property
    def returnprofile(self):
        # print('内部', self.profile)
        return self.profile

    def returnprofile2(self):
        return self.profile


user_1 = User('john', 'smith', age=0, lover='judy')


print(user_1.profile)
print(user_1.returnprofile)
print(user_1.returnprofile2)
print(user_1.returnprofile2())

