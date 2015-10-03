

var test = require('nodeunit');

var squareAsync = function(a, cb) {
	result = a * a;
	cb(result);
};

var three = 3;

module.exports = {
	'nodeunittesting2': {
		'squareAsync': function(test) {
			test.expect(2);
			squareAsync(three, function(result) {
				test.equal(result, 9, 'three squared is nine');
			});
			squareAsync('three', function(result) {
				test.ok(isNaN(result), 'squaring a string returns NaN');
			});
			test.done();
		}
	}
};