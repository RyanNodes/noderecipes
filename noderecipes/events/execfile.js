

var execFile = require('child_process').execFile;

execFile('./execfile.sh', function(error, stdout, stderr) {
	console.log(stdout);
	console.log(stderr);
	console.log(error);
});