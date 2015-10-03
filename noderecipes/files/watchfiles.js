

var fs = require('fs'),
	file = 'file.txt';

fs.watchFile(file, function(current, previous) {
	for (var key in current) {
		if (current[key] !== previous[key]) {
			console.log(key + ' altered. prev: ' + previous[key] + ' curr: ' + current[key]);
		}
	}
});

fs.watch(file, function(event, filename) {
	if (filename) {
		console.log(filename + ' : ' + event);
	} else {
		console.log(file + ' : ' + event);
	}
});
