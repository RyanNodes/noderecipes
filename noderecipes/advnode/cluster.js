

var cluster = require('cluster'),
	cpuCount = require('os').cpus().length;

cluster.setupMaster({
	exec: 'server.js'
});

if (cluster.isMaster) {
	for(var i = 0; i < cpuCount; i++){
		cluster.fork();
	}

	cluster.on('fork', function(worker) {
		console.log(worker.id + ' worker is forked');
	});

	cluster.on('listening', function(worker, address) {
		console.log(worker.id + ' is listening on ' + address);
	});

	cluster.on('online', function(worker) {
		console.log(worker.id + ' is online');
	});

	cluster.on('disconnect', function(worker) {
		console.log(worker.id + ' disconnected');
	});

	cluster.on('exit', function(worker, code, signal) {
		console.log(worker.id + 'died');
	});


}