var friendData = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {

		//loops through the friendsList array
		for (var i = 0; i < friendsList.length - 1; i++) {
			console.log(friendsList[i].name);

			// next create a for loop to compare the data to find the match

			}
	});
};