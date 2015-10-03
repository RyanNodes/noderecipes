var fs = require('fs');
var args;

args = process.argv.splice(2);

args.forEach(function(arg) {

	fs.realpath(arg, function(err, path) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('realpath: ' + path);
	});

	fs.stat(arg, function(err, contents) {
		if (err) return;
		console.log('readdire contents: ' + contents);
	});
});
