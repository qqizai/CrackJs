var express = require("express")
var sdk = require("./encrypt.js")
var bodyParser = require('body-parser')

var api = express()

api.use(bodyParser.urlencoded({
    parameterLimit: 50000,
    limit: '50mb',
    extended: false
}));

api.get('/get_token', function(req, res){
    var token = sdk.jeeq()
    res.send(token)
});

api.post('/encrypt', function(req, res){
    var gt = req.body.gt;
    var challenge = req.body.challenge;
    var token = req.body.token;
    var token = sdk.encrypt(gt, challenge, token)
    res.send(token)
});

api.get("/", function (req, res) {
    res.send("Wellcom, this is my crackjs script, geetest.")
})

var server = api.listen(8090, function () {

})

console.log("server start listen on: http://127.0.0.1:8090");


