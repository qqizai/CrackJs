var express = require("express")
var sdk = require("./tnp")
var sdk2 = require("../source/fingerprint2")
var bodyParser = require("body-parser")


var api = express()

api.use(
    bodyParser.urlencoded(
        {
            parameterLimit: 50000,
            limit: "50mb",
            extended: false  // 是否将请求参数解析为json格式，详情请看解说：https://www.zhihu.com/question/36962099
        }
    )
)



api.get("/get_cb", function (req, res) {
    var cb = sdk.get_cb();
    res.send(cb);
})

api.post("/get_trace_data", function (req, res) {
    var token = req.body.token;
    var trace_list = JSON.parse(req.body.trace_list);
    var position_left = req.body.position_left;

    var result = sdk.get_data(token, trace_list, position_left);
    result = JSON.stringify(result);
    res.send(result)
})

api.get("/get_fp", function (req, res) {
    var fp = sdk2.get_fp3();
    res.send(fp);
})

api.get("/get_callback", function (req, res) {
    var mycallback = sdk2.get_callback();
    res.send(mycallback);
})

var port = 8088;
var server = api.listen(port, function () {

})

console.log("server start listen on: http://127.0.0.1:"+port);



