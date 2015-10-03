

var net = require('net');

var connection = net.createConnection({ port: 8181, host: '127.0.0.1'}
	function() {
		console.log('connection success!');
	});

connection.on('error', function(err) {
	console.log(err);
});

conneection.on('close', function() {
	console.log('connection closed');
});

connection.on('data', function(data) {
	console.log(data.toString());
});