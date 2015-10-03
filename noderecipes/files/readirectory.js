var fs = require('fs');
var out;

console.log(__dirname);

fs.realpath(__dirname, function(err, path) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('realpath async: ' + path);
});

out = fs.realpathSync(__dirname);
console.log('realpath sync: ' + out);

fs.stat(__dirname, function(err, stat) {
	if (err) return;
	var isDir = false;

	fs.readdir(__dirname, function(err, contents) {
		if (err) return;
		contents.forEach(function(f) {
			console.log('contents: ' + f);
		});
	});
});