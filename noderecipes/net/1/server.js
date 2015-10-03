var net = require('net');

var server = net.createServer({ allowHalfOpen: true }, function(connectionListener) {

	console.log('connected');

	console.log(this.address())

	this.getConnections(function(err, count) {
		if (err) {
			console.log('Error getting connections');
		} else {
			console.log('Connection count: ', count);
		}
	});
	connectionListener.on('end', function() {
		console.log('disconnected');
	});
	
	connectionListener.on('error', function(err) {
		console.log(err);
	});

	connectionListener.write('hello\r\n');
});

server.on('error', function(err) {
	console.log('Server error: ', err);
});
server.on('data', function(data) {
	console.log(data.toString);
});

server.listen(8181, '127.0.0.1', 12, function() {
	console.log('server is listening');
});