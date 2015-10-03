

var http = require('http');

var server = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.writeHead('json content');
	res.write('{ "wizard": "mithandrir" }');
	res.end();
});

server.listen(8080);