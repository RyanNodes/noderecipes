

var http = require('http'),
	fs = require('fs'),
	crypto = require('crypto');

var req = http.get('http://nodejs.org/dist/v0.10.28/node.exe', function(res) {
	var hash = crypto.createHash('sha1');

	res.on('data', function(data) {
		hash.update(data);
	});

	res.on('end', function() {
		var dig = hash.digest('hex');
		if (dig = '57e565d7a2c10dd9299c15b98ab752e01ab3b4e0') {
			console.log('matches!!');
		} else {
			console.log('no matchy');
		}
	});
});