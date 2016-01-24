
/**
 * Module dependencies.
 */
var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: '127.0.0.1',
	database: 'code_gen',
	user: 'root',
	password: '123456'
});
pool.query('select * from project', function(err, rows, fields){
	if(err) {
		throw err;
	}
	
	console.log('总记录数：' + rows.length);
	if(rows.length > 0) {
		console.log(rows[0]);
	}
});

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var orm = require('orm');

var app = express();
app.use('/resources', express.static(__dirname + '/resources'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


app.get('/hello?:name', function(req, res) {
	console.log(req.params.name);
	var dataList = [{id:1, name:'aaa'},{id:2, name:'bbb'}];
	res.json(dataList);
	res.end();
});

app.get('/list', function(req, res) {
	console.log(req.params.name);
	var dataList = [{id:1, name:'aaa'},{id:2, name:'bbb'}];
	res.json(dataList);
	res.end();
});


app.listen(8080);
console.log('app listening on port 8080...');