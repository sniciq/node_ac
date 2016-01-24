var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function(app) {
	app.configure(function() {
		app.use('/resources', express.static(__dirname + '/resources'));
		app.use(bodyParser.urlencoded({'extended':'true'}));
		app.use(bodyParser.json());                                     // parse application/json
		app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
		app.use(methodOverride());
	})
}