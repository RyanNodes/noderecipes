

var http = require('http');

var getReq = http.get('http://localhost:8080', function(res) {
	console.log('satus code', res.statusCode, ': ', http.STATUS_CODES[res.statusCode]);
})

getReq.on('error', function(error) {
	console.log(error);
});

var clientOptions = {
	host: 'localhost',
	port: 8080,
	path: '/',
	method: 'GET',
	headers: {
		'Connection': 'keep-alive',
		'Content-length': 0
	}
};

var clientReq = http.request(clientOptions, function(res) {
	console.log('status code', res.statusCode, ': ', http.STATUS_CODES[res.statusCode]);
});

clientReq.on('error', function(error) {
	console.log(error);
});

clientReq.end();