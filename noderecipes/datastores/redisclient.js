

var redis = require('redis'),
	client = redis.createClient();

client.on('error', function(err) {
	console.log('error: ', err);
});

client.get('key', 'value', redis.print);

client.hset('hash key', 'hashtest 1', 'some value', redis.print);
client.hset(['hash', 'hashtest 2', 'some other value'], redis.print);
client.hkeys('hash key', function(err, replies) {
	console.log(replies.length + ' replies: ');
	replies.forEach(function(reply, i) {
		console.log
	});

	client.quit();
});

client.hgetall('hash key', function(err, replies) {
	replies.forEach(function(reply) {
		console.log(reply);
	});
});

client.get('key', function(err, reply) {
	if (err) console.log(err);

	console.log(reply);
});



