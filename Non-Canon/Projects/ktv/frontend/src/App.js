import './App.css';
import {useState, useEffect } from 'react';
import io from 'socket.io-client';

function App() {

  const [height, setHeight] = useState(0);
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [q, setQ] = useState(0);

  const [socket, setSocket] = useState(io("http://localhost:3030"));

  useEffect(() => {
   //setTimeout(() => socket.emit('height'), 3000);
  }, [])

 
  socket.on('connect', () =>{
    console.log('connected')
    console.log(socket.listenersAny());

  })
  socket.on("data_received", (number)=>{
    if(number){
      //const altura = number.height.split('\n',5)[0];      
      setHeight(parseInt(number.height));
      setPosition(number.position)
      setSpeed(number.speed)
      setQ(parseInt(number.dynamic_pressure))
    }

  })

  return (
    <div className="App">
      <header className="App-header">
        Telemetry Viewer
        <p>Height: {height} m</p>
        <p>X: {position[0]} <br/>Y: {position[1]} <br/>Z: {position[2]}</p>
        <p>Speed: {speed}</p>
        <p>Q (Pascal): {q}</p>
      </header>
    </div>
  );
}

export default App;
