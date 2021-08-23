  let dataToSend;
  const io = require('socket.io')(3030,{
    origins: ['http://localhost:3000'],
    rejectUnauthorized: false
  })

  //io.listen(3030)  
  io.on('connection', (socket) =>{
    console.log('conectado')
    socket.on('data_received', (data)=>{
    console.log("data", data);
    io.emit('client_data', data);

    })
  io.on('connection', (socket) => {
  socket.on('disconnecting', (reason) => {
    let rooms = Object.keys(socket.rooms);
    // ...
  });
});
})




