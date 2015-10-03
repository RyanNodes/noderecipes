

var fs = require('fs'),
	args;

args = process.argv.splice(2);

args.forEach(function(arg) {
	fs.rmdir(arg, function(err) {
		if (err) {
			handleError(err);
		}
	});
});

function handleError(err) {
	console.log(err);

	if (err.code == 'ENOENT') {
		console.log('That directory does not exist');
	} else if (err.code == 'ENOEMPTY') {
		console.log('Cannot remove directory, not empty');
	} else {
		console.log('An error occured removing the directory');
	}
}