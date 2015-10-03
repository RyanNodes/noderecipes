/**
* Debugging
*/

exports.doSomething = function(callback) {
	debugger;
	callback(null, { status: 'okay', data: ['a', 'b', 'c']});
};