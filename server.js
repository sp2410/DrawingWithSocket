var express = require('express');
var app = express();

//listen on port for requests
var server = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io');

var io = socket(server);

function newConnection(socket){
	//console.log('new connection: '+ socket.id);
	socket.on('mouse', mouseMsg);

	function mouseMsg(data){
		socket.broadcast.emit('mouse', data);
		//console.log(data)
	}

}

io.sockets.on('connection', newConnection);

