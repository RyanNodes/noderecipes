

function log(msg) {
	if (typeof msg === 'object') {
		msg = JSON.stringify(msg);
	}

process.stdout.write(msg + '\n');
}

process.on('power::init', function() {
	log(' power initialized ');
});

process.on('power::begin', function() {
	log('power calc beginning');
});

process.on('exit', function() {
	log(process.uptime());
	log('process exiting... ');
});

process.on('uncaughtException', function(err) {
	log('error in process ' + err.message + '\n');
});

log(process.cwd());
process.chdir('..');
log(process.cwd());
log(process.execPath);
log(process.env.HOME);
log(process.version);
log(process.pid);
log(process.platform);
log(process.memoryUsage());
log(process.arch);

var pow = require('./power');

var out = pow.power(42, 42);
log(out);

setTimeout(pow.error, 1e3);

