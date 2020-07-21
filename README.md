# CrackJs
记录一下js逆向的网站

先写到这里吧~~~~ 下次再会(2020.07.20)

如果多人关注的话，会继续更新，且更新更频繁，你给的星星star就是我的动力，越多，更新越快！

#### 综合类：

- [百du指数](https://github.com/qqizai/CrackJs/tree/master/baidu_index) ☆
- [谷ge学术镜像网](https://github.com/qqizai/CrackJs/tree/master/google_images) ☆
- [阿li文学(同刺猬猫加解密思路一样)](https://github.com/qqizai/CrackJs/tree/master/aliwx) ☆
- [空气质量监测](https://github.com/qqizai/CrackJs/tree/master/aqistudy)
- [刺猬mao小说](https://github.com/qqizai/CrackJs/tree/master/ciweimao) ☆☆
- [梦幻xi游](https://github.com/qqizai/CrackJs/tree/master/wy_menghuanxiyou) ☆☆
- [犀niu数据](https://github.com/qqizai/CrackJs/tree/master/xiniudata) ☆☆
- [零du代理](https://github.com/qqizai/CrackJs/tree/master/lingdu_nyloner) ☆☆
- [微bo登录](https://github.com/qqizai/CrackJs/tree/master/mweibo) ☆☆☆



#### 爬虫练习类：

- [glidesky相关爬虫练习题目](https://blog.csdn.net/weixin_41173374) 请查看CSDN文章，目前只发了少量的文章



#### 验证码类：

- [ji验验证码w参数 - 2020.07.06(后续会继续更新ji验验证码)](https://github.com/qqizai/CrackJs/tree/master/geetest) ☆☆☆☆  
- [某易易盾 - 2020.07.18 解密中](https://github.com/qqizai/CrackJs/tree/master/dun163) 暂未定多少星，正在解密ing
- [天yan验证码 - 官网已经挂掉,只剩首页空壳](https://github.com/qqizai/CrackJs/tree/master/tiantest) 目前只扣了初始化的js


#### 其他练习等脚本类：

- [m3u8视频下载](https://github.com/qqizai/CrackJs/tree/master/m3u8_video) ☆
- [鼠标轨迹](https://github.com/qqizai/CrackJs/tree/master/mouse_trace)
- [navigator属性检测](https://github.com/qqizai/CrackJs/tree/master/navigator)
- [相关学习PDF文档](https://github.com/qqizai/CrackJs/tree/master/pdf)
- [JSON数据转HTML](https://github.com/qqizai/CrackJs/tree/master/jsonToHTML)
- [工具tools](https://github.com/qqizai/CrackJs/tree/master/tools)


#### 了解前端知识：

- [图解Js event对象offsetX, clientX, pageX, screenX, layerX, x区别](https://blog.csdn.net/weixin_41173374/article/details/107463063)
- [前端边距-反爬遇到的前端知识必知](https://blog.csdn.net/weixin_41173374/article/details/104536561)


-----------------------------------------------------------------------------------------------------------------

下面是前面提到的部分网站的分析步骤

#### 部分步骤：

0x00、[百du指数](https://github.com/qqizai/CrackJs/tree/master/baidu_index) ☆

说明：

1.调试后，你会发现其实就是一个 decrypt 解密函数，直接将对应的 key 和 加密内容传递进去即可;

2.提供了两种方法，1-使用 execjs 来执行 js 代码，因为 js 代码比较简单；2-使用 Python 来改写 js 解密代码.

-----------------------------------------------------------------------------------------------------------------


0x01、[谷ge学术镜像网](https://github.com/qqizai/CrackJs/tree/master/google_images) ☆

说明：

1.调试后，你会发现其实就是网站的url进行加密了，但是，这里的加密分发很简单.

2.加密方式：使用两串字符进行加密，解密 js 已经抠出来 

-----------------------------------------------------------------------------------------------------------------


0x02、[阿li文学(同刺猬猫加解密思路一样)](https://github.com/qqizai/CrackJs/tree/master/aliwx) ☆

说明：

1.调试后，你会发现其实网站对小说的文本内容进行加密再返回本地，然后本地通过js解密再渲染到前端

2.加密方式：不详，网站使用自己的封装的函数

3.同刺猬mao小说加解密思路一样

-----------------------------------------------------------------------------------------------------------------


0x03、[刺猬mao小说](https://github.com/qqizai/CrackJs/tree/master/ciweimao) ☆☆

说明：

1.调试后，你会发现其实网站对小说的文本内容进行加密再返回本地，然后本地通过js解密再渲染到前端

2.加密方式：不详，网站使用自己的封装的函数

3.同阿li文学加解密思路一样

4.建议练习一下扣 js 的过程，主要是学习如何使定位 js 代码 

-----------------------------------------------------------------------------------------------------------------


0x04、[梦幻xi游](https://github.com/qqizai/CrackJs/tree/master/wy_menghuanxiyou) ☆☆

##### 强烈建议练习一下这个例子的扣 js 的过程

说明：

1.坑：atob在nodejs里面就是使用Buffer.from(要解密的字符串, 'base64').toString());

2.遇到window对象的话，看看是否是使用了指定的方法进行解密，比如eval、ato、

3.这种是window对象的String、fromCharCode、parseInt,

4.如：_0xcbc80b['String']['fromCharCode'](_0xcbc80b['parseInt'](_0x1c0cdf[_0x33c80e], 0x2))可以写成String.fromCharCode(parseInt(_0x1c0cdf[_0x33c80e], 0x2))

5. _0xcbc80b['eval']('\x28' + _0x1c0cdf + '\x29')可以直接写成 eval('\x28' + _0x1c0cdf + '\x29')

6. Buffer.from(_0x1c0cdf, 'base64').toString()等于Buffer(_0x1c0cdf, 'base64').toString()，这两种写法是一样的

7. _0xcbc80b['atob'](_0x1c0cdf)可以写成 Buffer.from(_0x1c0cdf, 'base64')

8. 以上的总结中，_0xcbc80b就是window对象

9.强烈建议练习一下这个例子的扣 js 的过程，主要是学习如何使定位 js 代码 

*10.总的来说，这里面的思路就是，将前端页面的一串字符串，经过指定的解码，得到的正确答案*

-----------------------------------------------------------------------------------------------------------------


0x05、[犀niu数据](https://github.com/qqizai/CrackJs/tree/master/xiniudata) ☆☆

说明：

1.调试后，你会发现 请求前后都是进行了对应的加密、解密的操作

2.这里是加密函数，是将指定参数进行加密之后，进行post请求，然后再对返回来的response参数进行解密

-----------------------------------------------------------------------------------------------------------------



0x06、[零du代理](https://github.com/qqizai/CrackJs/tree/master/lingdu_nyloner) ☆☆ (网站好像已经挂了)

*详细步骤说明*

本次js解密过程，首先观察网页数据，查看加密情况，发现是将返回的数据进行解码的

- 1、那么肯定网页标签是有 id 可以定位的，于是去查看 ip 地址标签，发现一个 ip-list 这个 id
- 2、那肯定搜就完事了，反正也不知道是不是，那就先试试水嘛
- 3、然后发现好几处都是有，然后一个一个观察上下文，随便附近打断点
- 4、进行调试，慢慢调试，即可发现了一个 decode_str 和 encode_str ，长得这样的顾名思义的，可能是解密的方法，进去看就完事了
- 5、发现一调试就是对的
- 6、接下来就是扣函数，扣 decode_str 函数，将加密字符串传递过去，本地运行
- 7、缺啥找啥，发现Base64["\x64\x65\x63\x6f\x64\x65"](scHZjLUh1);  其中 \x64\x65\x63\x6f\x64\x65 就是 decode 的意思，说明这个就是 base64 解码
   那么转换过来 nodejs 就是 Buffer.from(scHZjLUh1, 'base64').toString()
- 8、下面继续调试发现缺少 windows 对象，发现是调用 windows 对象 String.fromCharCode() 方法，
   那么这就是直接能够够用 String.fromCharCode((scHZjLUh1["charCodeAt"](i)) 来替换原来的 window["String"]["fromCharCode"](scHZjLUh1["charCodeAt"](i)
- 9，继续调试，然后也是将 base64 解密转换为 nodejs的base64 解密，最后得出答案，恭喜，又破解一个网站！！！
完毕！！

-----------------------------------------------------------------------------------------------------------------



0x07、[微bo登录](https://github.com/qqizai/CrackJs/tree/master/mweibo) ☆☆☆

说明：

1.最主要就是 sp 参数

-----------------------------------------------------------------------------------------------------------------



0x08、[ji验验证码w参数 - 2020.07.06(后续会继续更新ji验验证码)](https://github.com/qqizai/CrackJs/tree/master/geetest) ☆☆☆☆

说明：

1.最主要就是 w 参数

-----------------------------------------------------------------------------------------------------------------




