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
    var token = sdk.encrypt(gt, challenge, token);
    console.log(token);
    res.send(token)
});
var port = 8090;
var server = api.listen(port, function () {

})

console.log("server start listen on: http://127.0.0.1:8090");



