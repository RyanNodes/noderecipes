

var events = require('events'),
	emitter = new events.EventEmitter();

emitter.once('oneTime', function() {
	console.log('one time only');
});

emitter.emit('oneTime');
emitter.emit('oneTime');