var groups = require("../groups.json");

exports.addNewGroup = function(req, res) {    
	// Your code goes here
	res.render('viewGroups',{ "groups": groups["groups"],"friends":groups["friends"], "note": "Group Successfully Added!"});

	var friends = req.query.friend;
	var name = req.query.name;
	var description = req.query.description;
	var obj = { "name": name, "members": friends, "description": description };
	console.log("friend: " +friends);
	console.log("name: " +name);
	console.log("description: " +description);

	groups["groups"].push(obj);
 };