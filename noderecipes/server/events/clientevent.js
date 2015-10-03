

var http = require('http');

var clientOptions = {
	host: 'localhost',
	port: '8080',
	path: '/',
	method: 'GET',
	headers: {
		'Connection': 'Upgrade',
		'Upgrade': 'websocket',
		'Sec-WebSocket-Key': 'dGhlIHNhbXBsZSBub25jZQ==',
		'Origin': 'localhost',
		'Sec-WebSocket-Protocal': 'chat',
		'Sec-WebSocket-Version': 13
	}
};

var clientReq = http.request(clientOptions, function(res) {
	console.log('status code', res.statusCode);
	switch(res.statusCode) {
		case 200:
			console.log('200');
			break;
		case 404:
			console.log('404');
			break;
	}
});

clientReq.on('upgrade', function(res, socket, head) {
	console.log('client upgrade');
});

clientReq.on('error', function(error) {
	console.log(error);
});

clientReq.end();