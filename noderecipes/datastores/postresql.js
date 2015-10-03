

var pg = require('pg');

var connectionString = 'postgres://ryan:@localhost/postgres';

var client = new pg.Client(connectionString);

client.connect(function(err) {
	if (err) throw err;

	client.query('SELECT NOW() AS "THE TIME"', function( err, result ) {
		if (err) throw err;

		console.log(result.rows[0]);

		client.end();
	});
});