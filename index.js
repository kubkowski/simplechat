var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('User connected');
    socket.on('disconnect', function () {
        console.log('User disconnected');
    });
    socket.on('chat message', function (msg) {
        console.log('message : ' + msg);
        io.emit('chat message', msg);
    });
});

http.listen(9000, function() {
    console.log('Listening on *:9000');
})