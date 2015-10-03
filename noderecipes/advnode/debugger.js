

var http = require('http'),
	mod = require('./7-7-2');

server = http.createServer(function(req, res) {
	if (req.url === '/') {
		debugger;
		mod.doSomething(function(err, data) {
			if (err) res.end('an error occured');

			res.end(JSON.stringify(data));
		});
	} else {
		res.end('404');
	}
});

server.listen(8080);