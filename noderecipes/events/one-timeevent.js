

var events = require('events'),
	emitter = new events.EventEmitter();

function listener() {
	//one time logic
	console.log('one time event');
	emitter.removeListener('oneTimer', listener);
}

emitter.on('oneTimer', listener);

emitter.emit('oneTimer');
emitter.emit('oneTimer');