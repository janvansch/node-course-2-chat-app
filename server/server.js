require('./config/config');

const path = require('path');
const http = require('http'); //required for socket.io
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;

var app = express();
var server = http.createServer(app); //required for socket.io
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
})

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
