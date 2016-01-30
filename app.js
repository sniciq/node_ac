var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var evn = require('./config/evn.js');
var helloCtrl = require('./app/controller/hello.js');

module.exports.start = function (done) {
	var app = express();
	evn(app);
	helloCtrl(app);
	var port = 8080;
	app.listen(port);
	console.log('app listening on port ' + port);
	
};

module.exports.start();
