var friendData = require('../data/friends.js');
var path = require('path');
var totalDifference = 0;

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData = req.body;
		var usrName = usrData.name;
		var usrImage = usrData.image;
		var usrScores = usrData.scores;

		var totalDifference = 0;

		//loops through the friendsList array
		for (var i = 0; i < friendsList.length - 1; i++) {
			console.log(friendsList[i].name);
			totalDifference = 0;

			for (var j = 0; j < 10; j++) {

				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friendsList[i].scores[j]));

				if (totalDifference <= greatMatch.friendDifference) {
					greatMatch.name = friendsList[i].name;
					greatMatch.photo = friendsList[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friendsList.push(usrData);

		res.json(greatMatch);
	});
};