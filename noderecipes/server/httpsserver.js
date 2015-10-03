

var https = require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('privatekey.pem'),
	cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, function(req, res) {
	res.writeHead(200);
	res.write('https!');
	res.end();
}).listen(8080);
