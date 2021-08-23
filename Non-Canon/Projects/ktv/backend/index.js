  let dataToSend;
  const io = require('socket.io')(3030,{
    cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling','websocket']
  })

  //io.listen(3030)  
  io.on('connection', (socket) =>{
    console.log('conectado')
    socket.on('data_received', (data)=>{
      console.log("data", data);
      io.emit('client_data', data);
      data = null;
    })
  io.on('connection', (socket) => {
  socket.on('disconnecting', (reason) => {
    let rooms = Object.keys(socket.rooms);
    // ...
  });
});
})




