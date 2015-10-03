

var child = require('child_process');

child.exec('mv ./c.js ./b.js', function(err, stdout, stderr) {
	console.log('out: ' + stdout);
	if (stderr) console.log('stderr: ' + stderr);
	if (err) console.log('err: ' + err);
});