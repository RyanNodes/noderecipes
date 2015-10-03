

var http = require('http'),
	args = process.argv.splice(2);

var clientOptions = {
	host: 'localhost',
	port: 8080,
	path: '/',
	method: 'GET'
};

args.forEach(function(arg) {
	switch(arg) {
		case 'GET':
			clientOptions.method = 'GET';
			break;
		case 'SUBMIT':
		case 'POST':
			clientOptions.method = 'POST';
			clientOptions.method = '/api';
			break;
		case 'UPDATE':
		case 'PUT':
			clientOptions.method = 'PUT';
			clientOptions.method = '/api';
			break;
		case 'REMOVE':
		case 'DELETE':
			clientOptions.method = 'DELETE';
			clientOptions.method = '/api';
			break;
		default:
			clientOptions.method = 'GET';
			break;
	}

var clientReq = http.request(clientOptions, function(res) {
	console.log('status code ', res.statusCode);
	switch(res.statusCode) {
		case 200:
			res.setEncoding('utf8');
			res.on('data', function(data) {
				console.log('data', data);
			});
			break;
		case 404:
			console.log('404 error');
			break
	}
});

	clientReq.on('error', function(error) {
		throw error;
	});

	clientReq.end();
});
