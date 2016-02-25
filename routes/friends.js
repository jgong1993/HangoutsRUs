var friendList = require("../groups.json");

exports.viewFriends = function(req, res){
	res.render('friends', friendList);
};

exports.removeFriend = function(req,res) {
	var name = req.query.removename;
	
	for(var j = 0; j < friendList.friends.length; j++) {

		if(typeof friendList["friends"][j] === 'undefined') {
			continue;
		}
		else if(name == friendList["friends"][j].name) {
			console.log("matched with: " +friendList["friends"][j].name);
			delete friendList["friends"][j];
			break;
		}
	}
	
	res.render('friends', friendList);
};