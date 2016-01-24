var settings = {
	port: 8080,
	database : {
		protocol : "mysql",
	    query    : { pool: true },
	    host     : "127.0.0.1",
	    database : "code_gen",
	    user     : "root",
	    password : "123456"
	}
}

module.exports = settings;