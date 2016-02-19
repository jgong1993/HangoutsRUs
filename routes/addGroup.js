var groups = require("../groups.json");

exports.addNewGroup = function(req, res) {    
	// Your code goes here
	res.render('addGroup',groups);

	var friend = req.query.friend;
	var name = req.query.name;
	var description = req.query.description;
	var obj = { "name": name, "members": friend, "description": description };
	console.log("friend: " +friend);
	console.log("name: " +name);
	console.log("description: " +description);

	groups["groups"].push(obj);
 };