/**
* using WebSocket-Node
*/

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    WebSocketServer = require('websocket').server;

var server = http.createServer(function(req, res) {
    var urlParsed = url.parse(req.url,true, true);

    fs.readFile(urlParsed.path.split('/')[1], function(err, data) {
        if (err) {
            res.statusCode = 404;
            res.end(http.STATUS_CODES[404]);
        }
        res.statusCode = 200;
        res.end(data);
    });
}).listen(8080);

var serverConfig = {
	httpServer: server,
	autoAcceptConnections: false
};

var wsserver = new WebSocketServer();

wsserver.mount(serverConfig);

wsserver.on('connect', function(connection) {
    connection.send('yo');
});

wsserver.on('request', function(req) {
    if (req.requestedProtocols[0] == 'echo-protocol') {
    	var connection = req.accept('echo-protocol', req.origin);

        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                var rt = JSON.parse(message.utf8Data);
                switch (rt.path) {
                    case 'route_a':
                        console.log('something cool on route a');
                        break;
                    case 'route_b':
                        console.log('something cool on route b', rt);
                        break;
                    default:
                        console.log('something awesome always can happen');
                        break;
                }
            }
            else if (message.type === 'binary') {
                console.log(message.binaryData);
            }
        });
        connection.on('close', function(reasonCode, description) {
            console.log('connection closed', reasonCode, description);
        });
    } else {
        console.log('protocol not acceptable');
    }

    });

wsserver.on('close', function(conn, reason, description) {
    console.log('closing', reason, description);
});