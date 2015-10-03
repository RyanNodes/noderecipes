

var nano = require('nano')('http://localhost:5984');

nano.db.create('products', function(err, body, header) {
	if (err) console.log(err);

		console.log(body, header);
});

var products = nano.db.use('products', function(err, body, header) {
	if (err) console.log(err);

	console.log(body, header);
});

products.insert({ name: 'sandals', description: 'for your feet', price: 12.00}, 'sandals', function(err, body, header) {
	if (err) console.log(err);

	console.log(body, header);
});

products.get('sandals', { ref_info: true }, function(err, nody, header) {
	if (err) console.log(err);

	console.log(body, header);
});

products.get('sandals', function(err, body, header) {
	if (!err) {
		products.insert({
			name:'sandals', 
			description: 'flip flops',
			price: 12.50
			_rev: body._rev
		}, function(err, body, header) {
			if (!err) {
				console.log(body, header);
			}
		});
	}
});