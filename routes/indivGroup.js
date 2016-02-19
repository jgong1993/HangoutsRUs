var groups = require("../groups.json");

exports.thisGroup = function(req, res){
	//console.log(data);
	var name = req.params.name;
	var members = "";
	var desciption = "";

	for(var i = 0; i < groups.groups.length; i++) {
		if(groups["groups"][i].name == name) {
			members = groups["groups"][i].members;
			description = groups["groups"][i].description;
			console.log("FOR: " + members);
			break;
		}
	}

 	console.log("The project name is: " + name); 
    console.log(members);

	res.render('indivGroup', {
		'groupName': name,
		'members': members,
		'description': description,
		'friends': groups["friends"]
	});

};

exports.editGroup = function(req, res){
	//console.log(data);

	var friends = req.query.friend;
	var name = req.query.name;
	var description = req.query.description;
	var origName = req.query.origName;
	origName = origName.substring(7);

	console.log("friend: " +friends);
	console.log("name: " +name);
	console.log("description: " +description);
	console.log("origName: " +origName);

	for(var i = 0; i < groups.groups.length; i++) {
		if(groups["groups"][i].name == origName) {
			groups["groups"][i].members.push(friends);
			groups["groups"][i].name = name;
			groups["groups"][i].description = description;
			break;
		}
	}

	res.render('indivGroup', {
		'groupName': name,
		'members': groups["groups"][i].members,
		'description': description,
		'friends': groups["friends"]
	});

};

