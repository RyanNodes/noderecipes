

var spawn = require('child_process').spawn,
	pwd = spawn('pwd'),
	ls = spawn('ls', ['G']),
	nd = spawn('node', ['reducingcallbacks.js']);

pwd.stdout.setEncoding('utf8');

pwd.stdout.on('data', function(data) {
	console.log(data);
});

pwd.stderr.on('data', function(data) {
	console.log(data);
});

pwd.on('close', function() {
	console.log('pwd closed');
});

ls.stdout.setEncoding('utf8');

ls.stdout.on('data', function(data) {
	console.log(data);
});

nd.stdout.setEncoding('utf8');

nd.stdout.setEncoding('data', function(data) {
console.log(data);
});