

var cp = require('child_process'),
	http = require('http');

var child = cp.fork('fork.js');

var server = http.createServer(function(req, res) {
	res.end('hello world');
}).listen(8080);

child.send('hello');

child.send('server', server);