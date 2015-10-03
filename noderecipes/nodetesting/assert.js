

var assert = require('assert');

var three = 3;

assert.equal(three, '3', '3 equals "3"');

assert.strictEqual('3', three.toString(), '3 and "3" are not strictly qual');

assert.ok(true, 'truthy');

var squareAsync = function(a, cb) {
	result = a * a;
	cb(result);
};

squareAsync(three, function(result) {
	assert.equal(result, 9, '3 squared is nine');
});