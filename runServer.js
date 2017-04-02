var express = require('express');
var appExpressModule = express();
var httpProtocol = require('http').Server(appExpressModule);
var io = require('socket.io')(httpProtocol);

appExpressModule.get('/', function(receiveRequest, giveResponse){
	giveResponse.sendFile(__dirname + '/index.html');
});

appExpressModule.use("/bower_components", express.static(__dirname + "/bower_components"));

io.on('connection', function(socket){
	socket.on('myMessage', function(msg){
	io.emit('myMessage', msg);
  });
});

httpProtocol.listen(4000, function(){
  console.log('listening on *:4000');
});
