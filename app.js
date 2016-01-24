var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var evn = require('./config/evn.js');
var settings = require('./config/settings.js');
var models = require('./app/models/');
var helloCtrl = require('./app/controller/hello.js');

module.exports.start = function (done) {
	var app = express();
	evn(app);
	helloCtrl(app);
	
	app.listen(settings.port);
	console.log('app listening on port ' + settings.port);
	
	
//	models.Project.find().limit(4).order('id').all(function(err, projects) {
//		console.log(projects[0].name);
//	});
};

module.exports.start();

//
///**
// * Module dependencies.
// */
//var mysql = require('mysql');
//var pool = mysql.createPool({
//	connectionLimit: 10,
//	host: '127.0.0.1',
//	database: 'code_gen',
//	user: 'root',
//	password: '123456'
//});
//pool.query('select * from project', function(err, rows, fields){
//	if(err) {
//		throw err;
//	}
//	
//	console.log('总记录数：' + rows.length);
//	if(rows.length > 0) {
//		console.log(rows[0]);
//	}
//});
//
//var express = require('express');
//var http = require('http');
//var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
//var orm = require('orm');
//
//var ormOpts = {
//	database: "code_gen",
//	protocol: "mysql",
//	host: "127.0.0.1",
//	username: "root",
//	password: "123456",
//    query: {
//        pool: true,
//    },
//}
//orm.connect(ormOpts, function (err, db) {
//	var Project = db.define('project', {
//		id: Number,
//		name: String,
//		createUser: Number
//	}, {
//		methods: {
//			fullName: function() {
//				return this.name + ' ' + this.createUser;
//			}
//		}
//	});
//	
//	Project.find().limit(4).order('id').all(function(err, projects) {
//		console.log(projects[0].name);
//	});
//});
//
//
//
////var Project = require("./models/project.js");
////var project = new Project();
////console.log(project.add(1, 2))
//
//
//
//var app = express();
//app.use('/resources', express.static(__dirname + '/resources'));
//app.use(bodyParser.urlencoded({'extended':'true'}));
//app.use(bodyParser.json());                                     // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());
//
//
//app.get('/hello?:name', function(req, res) {
//	console.log(req.params.name);
//	var dataList = [{id:1, name:'aaa'},{id:2, name:'bbb'}];
//	res.json(dataList);
//	res.end();
//});
//
//app.get('/list', function(req, res) {
//	console.log(req.params.name);
//	var dataList = [{id:1, name:'aaa'},{id:2, name:'bbb'}];
//	res.json(dataList);
//	res.end();
//});
//
//
//app.listen(8080);
//console.log('app listening on port 8080...');