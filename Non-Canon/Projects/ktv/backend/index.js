  require('events').EventEmitter.prototype._maxListeners = 100;
  let dataToSend;
  let counter = 0;
  const io = require('socket.io')(3030,{
    cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling','websocket']
  })
  io.setMaxListeners(50);
  io.on('connection', (socket) =>{
    counter++;
    console.count('conectado', counter)
    socket.on('data_received', (data)=>{
      //console.log("data", data);
      io.volatile.emit('client_data', data);

    })
  io.on('connection', (socket) => {
  socket.on('disconnecting', (reason) => {
    let rooms = Object.keys(socket.rooms);
    // ...
  });
});
})




