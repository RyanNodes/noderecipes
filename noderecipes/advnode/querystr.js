

var qs = require('querystring');

var incomingQS = [ 'foo=bar&foo=baz',
					'trademark=%E2%84%A2',
					'%7BlOTR%7D=frodo%20baggins' ];

incomingQS.forEach(function(q) {
	console.log(qs.parse(q));
});

var outgoingQS = {
	good: 'night',
	v: '0.10.28',
	hello: 'worl with spaces'
};

console.log(qs.stringify(outgoingQS));

var newQS = qs.stringify(outgoingQS, '|', '~');

console.log(qs.parse(newQS));