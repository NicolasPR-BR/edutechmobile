const WebSocket = require('ws');
const server = new WebSocket.Server({port: 3040})
const io = require('socket.io')(3030,{
    cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling','websocket']
  })

server.on('connection', (socket) => {
  const sendData = (message)=> {
    console.log(message);
    socket.send(JSON.stringify(message))
  }
  require('events').EventEmitter.prototype._maxListeners = 100;
  let dataToSend;
  let counter = 0;
  
  let dados = {
    "height": 0,
    "thrust": 0,
    "dynamic_pressure": 0,
    "mass":0,
    "tplus": 0,
    "latitude":0,
    "longitude":0,
    
  }

  io.setMaxListeners(50);
  io.on('connection', (socket) =>{
    counter++;
    console.count('conectado', counter)
    socket.on('data_received', (data)=>{
      //console.log("data", data);
     // if(counter >= 10){
      sendData(data);
    //  }else{
       // dados = [...dados];
     // }

    })
  io.on('connection', (socket) => {
  socket.on('disconnecting', (reason) => {
    let rooms = Object.keys(socket.rooms);
    // ...
  });
});
})

});

  




