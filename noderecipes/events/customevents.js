

var events = require('events'),
	emitter = events.EventEmitter();

function doATask(status) {
	if (status === 'success') {
		//task succeed"!
		emitter.emit('taskSuccess');
	} else if (status === 'fail') {
		emitter.emit('taskFail');
	}
}

emitter.on('taskSuccess', function() {
	console.log('task success!');
});

emitter.on('taskFail', function() {
	console.log('task failed');
});

setTimeout(doATask, 2000, 'success');

setTimeout(doATask, 4000, 'fail');