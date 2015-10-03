

var fs = require('fs');

fs.writeFile('write.txt', 'writeFile', function(err) {
	if (err) {
		console.log(err);
	}

	console.log('writeFile complete');
});

try {
	fs.writeFileSync('./doesnotexist/newfile.txt', 'content');
} catch(err) {
	console.log('unable to create a file in a non existant directory');
	console.log(err);
}

fs.appendFile('write.txt', ' appendFile', function(err) {
	if (err) {
		console.log(err);
	}
	console.log('append file commplete');
});

var ws = fs.createWriteStream('write.txt', {
	start: 20
});

ws.write('WriteStream!', function() {
	console.log('WriteStream complete');
});

