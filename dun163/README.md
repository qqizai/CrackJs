
##### 某易易盾

doing list：

- 点选参数生成

---

点选验证参数步骤：

1.对比之前滑动的话，变动的地方就是：这里的验证参数里面，只是在于点选的位置参数有变化，其他没有什么变化.

可以直接搜索 ``` coord: f(this.$store.state.token, [Math.round(t), Math.round(n), s.now() - this.beginTime] + "")```

这个就是你所点选的三个文字的位置参数加密地方，其他地方跟滑动的一样.

另外，获取文字的位置，需要打码或者深度学习来识别；深度学习的话，大佬们说，大部分需求优先从目标检测、卷积来思考，能不能满足、解决问题。

我自己也在学习这些，加油吧，兄弟萌.

```javascript
//1.知道文字的  x，y 坐标后，通过下面这个方法生成加密参数

coord: f(this.$store.state.token, [Math.round(t), Math.round(n), s.now() - this.beginTime] + "")

/*其中最主要是这里：
    [文字 x 坐标整数, 文字 y 坐标整数， 所经过的时间差，毫秒]
    [Math.round(t), Math.round(n), s.now() - this.beginTime]

函数 f 就是跟之前滑动的一模一样的：*/

    function n(e, t) {
        function n(e, t) {
            return e.charCodeAt(Math.floor(t % e.length))
        }
        function i(e, t) {
            return t.split("").map(function(t, i) {
                return t.charCodeAt(0) ^ n(e, i)
            })
        }
        return t = i(e, t),
        _(t)
    }


//2.上面的解析都是针对于源代码：

    addPoint: function(e) {
        var t = e.left
          , n = e.top;
        this.pointsStack.length || this.$parent.getAnticheatToken({
            timeout: 1e3
        });
        var i = this.pointsStack.length + 1;
        if (!(i > this.MAX_POINTS)) {
            var r = document.createElement("div");
            r.className = "yidun_icon-point yidun_point-" + i,
            a.css(r, "left: " + (t - 10) + "px; top: " + (n - 25) + "px;"),
            this.$bgImg.appendChild(r);
            debugger;
            this.pointsStack.push({
                el: r,
                coord: f(this.$store.state.token, [Math.round(t), Math.round(n), s.now() - this.beginTime] + "")
            }),
            this.shouldVerifyCaptcha()
        }
    },
    shouldVerifyCaptcha: function() {
        var e = this.pointsStack;
        if (e.length === this.MAX_POINTS) {
            var t = e.map(function(e) {
                return e.coord
            })
              , n = this.traceData;
            debugger;
            this.onVerifyCaptcha({
                data: JSON.stringify({
                    d: "",
                    m: u(s.sample(n, h).join(":")),
                    p: u(t.join(":")),  // 这里是将前面每个文字的加密后的参数，用于 : 来连接起来，再用 u 函数去加密, u 函数就是之前的 B 函数
                    ext: u(f(this.$store.state.token, this.clickCounts + "," + n.length))
                })
            })
        }
    }

```

---

滑动类型目测步骤：

1.一次请求获取图片链接、token

2.二次请求就是验证滑块参数

---

#### 最后测试情况：998/1000，通过率为：99.98%

PS：如需要提高准确率的话，可以使用深度学习来识别滑块缺口的位置，但是本人比较懒，目前的通过率已经够用了


2020.08.12

1.破解滑块轨迹，根据滑块距离随机生成轨迹加密参数

2.需要注意的是指纹 fp 的生成，本文件里面提供了好几个生成 fp 的函数，具体自己去查看代码


2020.07.29

请求步骤2/3是没有问题的，但是到了请求步骤4/5，就出现通过率很低的情况，约为15%.

这个通过率很惨啊！！

![生成的fp经测试，通过率很低](./statics/生成的fp经测试，通过率很低.png)


鄙人还没找到是哪里隐藏了检测点，希望有高人指点一下，谢谢.


PS：本地已经补全了：屏幕大小、色彩/像素深度、浏览器插件、语言、GMT时差 等属性，

![检测颜色](./statics/检测颜色.png)


但是就是请求拿token的时候，就常常不通过，{"error":100,"msg":"param check error"}，报参数错误，

请大佬们指点一下，存在什么问题，导致通过率这么低。

而且我发现浏览器，对指纹fp参数错误的情况也是能够通过请求的，这就很尴尬了：比如下面这种情况：

![浏览器生成失败的fp都能正确返回数据01](./statics/浏览器生成失败的fp都能正确返回数据01.png)

![浏览器生成失败的fp都能正确返回数据02](./statics/浏览器生成失败的fp都能正确返回数据02.png)


小弟知道哪里错了！！！


在这里，这个get请求，不能直接将参数放到url里面去请求；

得需要单独拿出来，作为字典参数请求！！！

将：

![大佬我错了](./statics/大佬我错了.png)

改为下面这种请求方式：

![大佬我错了02](./statics/大佬我错了02.png)


目前测试 165 次，全部通过




---

目录介绍：
    
- analysis： 里面的文件是源码分析的，部分代码有注释
- source：   最后的整合后的目录
- statics：  静态文件，保存图片的，有失败的图片，可以查看，备于分析原因


##### 赞赏

如果你觉得笔者辛苦了，可以的话请我喝杯咖啡，感谢你的支持

![zanshangma](../statics/zanshangma.png)

你的赞赏就是我的动力

