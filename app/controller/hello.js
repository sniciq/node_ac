var pool = require('../../config/dbpool.js').pool;

module.exports = function(app) {
	app.get('/hello/:name', function(req, res) {
		console.log(req.params.name);

			pool.query('SELECT * from project', function(err, rows, fields) {
			  if (err) {
			  	throw err;
			  }

			  console.log('The project count: ', rows.length);

			  res.json(rows);
			  res.end();
			});
		
	});
}