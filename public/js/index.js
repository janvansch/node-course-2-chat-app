var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  socket.emit('newMessage', {
    from: 'jen@example.com',
    text: 'Hey, My message.'
  });
});

socket.on('publishMessage', function (message) {
  console.log('New message', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
