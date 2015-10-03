

var app = require('http').createServer(connectHandler),
   	io = require('socket.io').listen(app),
   	fs = require('fs');

app.listen(8080);

function connectHandler (req, res) {
  fs.readFile(__dirname + '/client.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading client.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var members = [];
io.on('connection', function(socket) {
  socket.on('joined', function(data) {
    var mbr = data;
    mbr.id = socket.id;
    members.push(mbr);
    socket.broadcast.emit('joined', data);
    console.log(data.name, 'joined the room');
  });

  socket.on('message', function(data) {
    socket.broadcast.emit('message', data);
  });

  socket.on('disconnect', function() {
    for (var i = 0; i < members.length; i++) {
      if (members[i].id === socket.id) {
        socket.broadcast.emit('disconnected', { name: members[i].name });
      }
    }
  });
});

