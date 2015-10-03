

process.on('message', function(msg, hndl) {
	console.log(msg);

	if (msg === 'server') {
		hndl.on('connection', function() {
			console.log('connected');
		});
	}
});