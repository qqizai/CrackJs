
#### 详细步骤说明：

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


##### 赞赏

如果你觉得笔者辛苦了，可以的话请我喝杯咖啡，感谢你的支持

![zanshangma](../statics/zanshangma.png)

你的赞赏就是我的动力

