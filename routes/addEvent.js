var data = require("../events.json");

exports.addNewEvent = function(req, res) {    
		data['events'].push({
			title: req.query.title,
			when: req.query.when,
			whoisgoing: req.query.whoisgoing
		});
		res.render('addEvent');
 }