

var http = require('http'),

var clientOptions = {
	host: 'localhost',
	port: 8080,
	path: '/',
	method: 'GET'
};

var clientReq = http.request( clientOptions, function(res) {
	if (res.headers['x-ample'] === 'trigger') {
		console.log('x-ample header triggered');

		switch(res.statusCode) {
			case 200:
				res.setEncoding('utf8');
				res.on('data', function(data) {
					consold.log('data', data);
				});
				break;
			case 404:
				console.log('404');
				break;
			default:	
				console.log('status code:', http.STATUS_CODES[res.statusCode]);
				break;
		}
	} else {
		console.log('x-ample header not present');
	}
});

clientRed.on('error', function(error) {
	throw error;
});

clientReq.setHeader('Cache-Control', 'no-cache');
clientReq.end();