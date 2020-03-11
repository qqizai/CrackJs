(function () {
    window._tiantest = window._tiantest ? window._tiantest : {};
    _tiantest.utils = _tiantest.utils ? _tiantest.utils : {};

    //暴露接口
    if (typeof window === "undefined") {
        throw new Error("天验需要在浏览器中运行");
    }

    function loadScript(url, cb) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement("script");
        script.charset = "UTF-8";
        script.async = true;
        script.onerror = function () {
            cb(true);
        };
        var loaded = false;
        script.onload = script.onreadystatechange = function () {
            if (!loaded &&
                (!script.readyState ||
                    "loaded" === script.readyState ||
                    "complete" === script.readyState)) {
                cb(false);
                cb = function () {
                };
            }
        };
        setTimeout(function () {
            cb(true);
        }, 10000);
        script.src = url;
        head.appendChild(script);
    }

    function Config(config) {
        for (var k in config) {
            if (config.hasOwnProperty(k))
                this[k] = config[k];
        }
    }

    Config.prototype = {
        api_server: 'api.tiantest.com',
        res_server: null,
        _render: null,
        protocol: (document.location.protocol ? document.location.protocol : "https:") + '//',
        lang: "zh-cn",
        https: true,
        theme: 'normal',
        height: null
    };

    function TianTest() {
        this._callbacks = [];
    }

    TianTest.prototype.render_to = function (name) {
        this._render = document.querySelector(name);
        if (!this._render) {
            throw new Error("无法找到渲染位置");
        }
        return this
    };

    TianTest.prototype.show = function () {
        if (window._tiantest._load) {
            window._tiantest._load();
            return
        }
        setTimeout(function () {
            this.show();
        }, 50)
    };

    TianTest.prototype.ready = function (func) {
        this._callbacks.push(["ready", func]);
        return this;
    };

    TianTest.prototype.success = function (func) {
        this._callbacks.push(["success", func]);
        return this;
    };

    TianTest.prototype.error = function (func) {
        this._callbacks.push(["error", func]);
        return this;
    };

    TianTest.prototype.release = function () {
        if (window._tiantest._destroy) {
            window._tiantest._destroy();
        }
        return this;
    };

    function loadJS(files, protocol, domains) {
        function loadScriptWithDomain(count, i) {
            var url = "https://" + domains[count] + "/js" + files[i];
            if (_tiantest._tiantest_config.no_cache)
                url += "?" + Math.random();

            loadScript(url, function (err) {
                if (!err) {
                    if (i + 1 < files.length)
                        loadScriptWithDomain(0, i + 1);
                } else if (err && count < domains.length - 1) {
                    loadScriptWithDomain(1, i);
                } else {
                    throw new Error("Error Loading JS");
                }
            })
        }

        loadScriptWithDomain(0, 0);
    }

    function loadCSS(files, protocol, domains) {
        function loadCSSWithDomain(file, count) {
            var head = document.getElementsByTagName('head').item(0);
            var css = document.createElement('link');
            var url = "https://" + domains[count] + "/css" + file;
            if (_tiantest._tiantest_config.no_cache)
                url += "?" + Math.random();

            css.href = url;
            css.rel = 'stylesheet';
            css.type = 'text/css';
            head.appendChild(css);
            return css;
        }
        var css = [];
        for (var i = 0; i < files.length; i++) {
            css.push(loadCSSWithDomain(files[i], 0));
        }
        return css;
    }

    window.initTianTest = function (config, handler) {
        if (!config || !handler || !config.site_id) {
            throw new Error("必要参数不全");
        }
        if (typeof config.https !== "undefined") {
            config.protocol = !config.https ? "http://" : "https://";
        } else {
            config.protocol = "https://"
        }

        var tiantest_config = new Config(config);

        var tiantest_object = new TianTest();
        handler(tiantest_object);
        var initTime = new Date().getTime();

        var callback = function (data, state) {
            var callbacks = tiantest_object._callbacks;
            if (data.code !== 0) {
                var err = data.code + ": " + data.msg;
                for (var i = 0; i < callbacks.length; i++) {
                    if (callbacks[i][0] === "error")
                        callbacks[i][1](data.code, data.msg);
                }
            }
            if (err)
                throw err;

            //设置为全局
            tiantest_config.delay = new Date().getTime() - initTime;

            _tiantest._tiantest_handle = tiantest_object;
            _tiantest._tiantest_config = tiantest_config;
            _tiantest._tiantest_config._task_id = data.data.task_id;

            //初始化资源
            if (data && data.data) {
                loadCSS(data.data.css, tiantest_config.protocol, data.data.domain);
                loadJS(data.data.js, tiantest_config.protocol, data.data.domain)
            }
        };

        function get(url, success) {
            var request = false;
            try {
                request = new XMLHttpRequest();
            } catch (e) {
                try {
                    request = new ActiveXObject("MSXML2.XMLHTTP");
                } catch (e2) {
                    try {
                        request = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (e3) {
                        alert("你的浏览器不支持XMLHTTP对象，请升级到IE6以上版本！");
                        request = false;
                    }
                }
            }
            request.onreadystatechange = function () { // 状态发生变化时，函数被回调
                if (request.readyState === 4) { // 成功完成
                    return success(request.status === 200 ? JSON.parse(request.responseText) : {
                        "code": 8000 + request.status,
                        "msg": "HTTP ERROR " + request.status
                    });
                }
            };
            request.open("get", url);
            request.withCredentials = true;
            request.send();
        }

        get(tiantest_config.protocol + tiantest_config.api_server + "/client/conf?site_id=" +
            tiantest_config.site_id + "&lang=" + tiantest_config.lang +
            "&ie=" + (!!window.ActiveXObject || "ActiveXObject" in window) +
            (tiantest_config.res_server ? "&res_server=" + tiantest_config.res_server : ""), callback);
    }
})();