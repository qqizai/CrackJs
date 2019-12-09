#!/usr/bin/python3
# -*- coding: utf-8 -*-
# @Time     : 2019/11/5 13:31
# @Author   : qizai
# @File     : baidu_index.py
# @Software : PyCharm

import execjs


js = """function decrypt(t, e) {
            for (var n = t.split(""), i = e.split(""), a = {}, r = [], o = 0; o < n.length / 2; o++)
                a[n[o]] = n[n.length / 2 + o];
            for (var s = 0; s < e.length; s++)
                r.push(a[i[s]]);
            return r.join("")
        }"""


def decrypt(key, value):
    """调用执行指定的js文件"""
    exec = execjs.compile(js)
    return exec.call("decrypt", key, value)


if __name__ == '__main__':
    key = "cvQdX%8JOt.qG3a14,652-%9+.0837"
    # value = "XXG3%QXX3qXQdv%XqQd%GGaQdcdXdQdcqvvQdcaq3QX%GvOQXa3GcQXa33qQdqOvdQdvcadQXOdOcQvG%3qQvdva%QXGa3vQdqvdcQO3qvaQaGcqaQdvda3QXqdc3QXqvXaQXGGOqQXGccGQXd3OdQdcaGaQaaO3aQXaaOOQXqOvGQdc3%v"
    value = "vqOXaQ3GvadQ3vqG%Q3vOccQ3v3cOQ33OaaQ3X%OvQ3GqdaQ3c3a3Q3%cdvQ3vdqvQ3aOcdQ3dq3OQ3vqadQ33cvGQ3ca3OQ3%X%aQvGc%aQvqOcaQ3X%O%Q33GXaQ3Xv33Q3qX3aQ3qqO%Q%OvcGQ33qccQvqOdXQ3GXavQ3vaOGQ3%vqO"
    # value = "66sm.j66mX6jox.6Xjo.ssEjoqo6ojoqXxxjoqEXmj6.sxVj6Emsqj6EmmXjoXVxojoxqEoj6VoVqjxs.mXjxoxE.j6sEmxjoXxoqjVmXxEjEsqXEjoxoEmj6Xoqmj6Xx6Ej6ssVXj6sqqsj6omVojoqEsEjEEVmEj6EEVVj6XVxsjoqm.x"
    result = decrypt(key, value)
    print(result)


