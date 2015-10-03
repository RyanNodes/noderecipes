

var chai = require('chai');

var assert = chai.assert;
var three = 3;

assert.equal(three, '3', '3 == "3"');

assert.ok(true, 'is truthy');

var expect = chai.expect;

expect(three).to.be.a('number');

var should = chai.should();

three.should.be.a('number');