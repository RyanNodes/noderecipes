

var crypto = require('crypto'),
	hashes = crypto.getHashes();

//console.log(hashes.join(', '));

hashes.forEach(function(hash) {
	['', 'The dog is good'].forEach(function(txt) {
		var hashed;
		try {
			hashed = crypto.createHash(hash).update(txt).digest('hex');
		} catch (ex) {

			if (ex.message === 'Digest method not supported') {
				//not supported
			} else {
				console.log(ex, hash);
			}
		}
		console.log(hashed, hash);
	});
});


