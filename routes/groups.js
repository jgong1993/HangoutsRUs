exports.viewGroups = function(req, res){
	//console.log(data);
	res.render('viewGroups', {
		"groups": [
			{
				"name": "Trash Squad",
				"members": ""
			},
			{
				"name": "Opera Fam",
				"members": ""
			},
					{
				"name": "Amanda's Room",
				"members": ""
			},
			{
				"name": "Team Marvel",
				"members": ""
			},
			{
				"name": "Puppy Bowl",
				"members": ""
			}
		]
	});
};