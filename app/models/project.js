module.exports = function(orm, db) {
	var Project = db.define('project', {
		id: Number,
		name: String,
		createUser: Number
	}, {
		
	});
};
