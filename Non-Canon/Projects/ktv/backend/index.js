const {spawn} = require('child_process');
const {PythonShell} = require('python-shell');

let dataToSend;
 const io = require("socket.io")(3030, {cors:{origins: ['http://localhost:300']}});
 //io.listen(3030)
  io.on('connection', socket =>{
  console.log("Connected");

  socket.on('data_received', (data)=>{
    console.log("data", data)
    io.emit('data_received', data);
  })
})





