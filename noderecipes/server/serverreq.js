

var http = require('http'),
	url = require('url');

var server = http.createServer(function(req, res) {
	if (req.headers.dnt == 1) {
		console.log('Do Not Track');
	}

	var url_parsed = url.parse(req.url, true);

	if (req.method === 'GET') {
		handleGetRequest(res, url_parsed);
	} else if (['POST', 'PUT', 'DELETE'].indexOf(req.method) > -1) {
		handleApiRequest(res, url_parsed, req.method);
	} else {
		res.end('Method not supported');
	}
});
var handleGetRequest = function(res, parsed_url) {
	console.log('search: ' + parsed_url.search);
	console.log('query ' + JSON.stringify(parsed_url.query));
	console.log('pathname: ' + parsed_url.pathname);
	console.log('path: ' + parsed_url.path);
	console.log('href' + parsed_url.href);
	res.end('GET\n');
};
var handleApiRequest = function(res, url_parsed, method) {
	if (url_parsed.path !== '/api') {
		res.statusCode = 404;
		res.end('404\n');
	}
	res.end(method);
};

server.listen(8080);

