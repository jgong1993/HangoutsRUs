var data = require("../events.json");

exports.view = function(req, res) {
	res.render('index', data);
}