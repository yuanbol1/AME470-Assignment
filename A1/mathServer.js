var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;

app.get("/add", function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.send((a+b).toString());
    // send response body
});
app.get("/sub", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var result1 = a - b;
    res.send((a-b)).toString());
});

app.get("/mult", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var result2 = a * b;
    res.send((a*b)).toString());
});

app.get("/div", function (req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var result3 = a / b;
    res.send((a/b)).toString());
});

app.use(methodOverride());
app.use(bodyParser());
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
