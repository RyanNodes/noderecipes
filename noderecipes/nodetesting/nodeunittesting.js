

var test = require('nodeunit');

module.exports = {
	'nodeunittesting': {
			'equal': function(test) {
				test.equal(3, '3', '3 equals "3"');
				test.done();
			},
			'strictEqual': function(test) {
				test.strictEqual('3', 3, '3 and "3" are not strictly equal');
				test.done();
			},
			'notEqual': function(test) {
				test.notEqual(3, 'three', '3 does not equal "three"');
				test.done();
			},
			'ok': function(test) {
				test.ok(false, 'not truthy');
				test.done();
			}

	}
};