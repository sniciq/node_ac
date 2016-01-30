var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: '127.0.0.1',
	database: 'code_gen',
	user: 'root',
	password: '123456'
});
pool.query('select * from project limit 5', function(err, rows, fields){
	if(err) {
		throw err;
	}
	
	console.log('总记录数：' + rows.length);
	if(rows.length > 0) {
		console.log(rows);
	}
});