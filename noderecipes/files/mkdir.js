//make dir

var fs = require('fs'),
	args;

args = process.argv.splice(2);

args.forEach(function(arg) {
	fs.mkdir(arg, function(err) {
		if (err) {
			handleError(err);
		}
	});
});

function handleError(err) {
	console.log(err);

	if (err.code === 'EEXIST') {
		console.log('That directory already exists');
	} else {
		console.log("An error occured creating that directory");
	}
}