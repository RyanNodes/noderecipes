

var exec = require('child_process').exec

exec('ls -g', function(error, stdout, stderr) {
	if (error) console.log(error);

	console.log(stdout);
});

exec('ps ax | grep node', function(error, stdout, stderr) {
	if (error) console.log(error);

	console.log(stdout);
});