

var fs = require('fs'),
	args;

args = process.argv.splice(2);

args.forEach(function(arg) {
	fs.readFile(arg, 'utf-8', function(err, data) {
		if (err) {
			console.log(err);
		}

		console.log(data);
	});

	var file = fs.readFileSync(arg, 'utf8');
	console.log(file);

	var readstrm = fs.createReadStream(arg, 'utf8');
	console.log(file);

	var readstrm = fs.createReadStream(arg, { flag: 'r', encoding: 'utf8' });

	readstrm.on('data', function(d) {
		console.log(d);
	});
});