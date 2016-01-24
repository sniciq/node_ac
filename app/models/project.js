module.exports = function(orm, db){
	var Project = pool.getConnection().define('project', {
		id: Number,
		name: String,
		createUser: Number
	}, {
		
	});
};

//module.exports = function(){
//	var Project = pool.getConnection().define('project', {
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
//};


//module.exports = function (orm, pool) {
//	var Project = pool.getConnection().define('project', {
//		id: Number,
//		name: String,
//		createUser: Number
//	}, {
//		
//	});
//};

//module.exports = function(){
//	this.add = function(a, b) {
//		return a + b;
//	}
//};
//
//	console.log('project');
//	
//	var orm = require("orm");
//	
//	var Project = pool.getConnection().define('project', {
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
