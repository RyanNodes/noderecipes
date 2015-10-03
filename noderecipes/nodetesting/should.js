

var should = require('should');

var three = 3;

should.equal(three, '3', '3 == "3"');

should.strictEqual('3', three.toString(), '3 and "3" are not strict equal');

true.should.be.ok;
false.should.not.be.ok;

three.should.be.a.Number

var squareAsync = function(a, cb) {
	result = a *a;
	cb(result);
};

squareAsync(three, function(result) {
	result.should.equal(9, 'three ^ 2 is nine');
});

