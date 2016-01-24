module.exports = function(app) {
	app.get('/hello/:name', function(req, res) {
		console.log(req.params.name);
		var dataList = [{id:1, name:'aaa'},{id:2, name:'bbb'}];
		res.json(dataList);
		res.end();
	});
}