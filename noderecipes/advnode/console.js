

console.log('console log in Node.js');

console.info('console.info writes same as console.log');

console.error('writes to stderr');

console.warn('same as console.error');

console.time('timer');

setTimeout(console.timeEnd, 2e3, 'timer');

console.dir({
	name: 'console.dir',
	logs: ['the', 'string representation', 'of objects']});

var yo = 'yo';
console.trace(yo);

try {
	console.assert(1 === '1', 'one does not equal "one"');
} catch(ex) {
	console.error('an error occured', ex.message);
}