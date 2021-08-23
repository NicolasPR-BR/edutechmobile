import './App.css';
import { useState, useRef } from 'react';
const io = require('socket.io-client');
 
function App() {
  const [data, setData] = useState({
    "height": 0,
    "position":[0,0,0],
    "thrust": 0,
    "dynamic_pressure": 0,
    "mass":0,
    "tplus": 0,
    "latitude":0,
    "longitude":0,
  });
  const opcao = {
    rememberUpgrade: true,
    transports: ['websocket'],
    reconnectionDelay: 5000,
    reconnectionDelayMax: 10000,
  }
  const [socket, setSocket] = useState(io("ws://localhost:3030", opcao));
  const [isConnected, setConnected] = useState(false);
  let counter = 0;

  socket.on('connect', () =>{
    console.log('logged');
    setConnected(true);
  })
  socket.on('client_data', (data) =>{
    //console.log(data);
    setData(data);
    counter++;
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Telemetry Server connected?
        {isConnected === true ?<> True</>:<> False</>}</p>

        <p>Update counter {counter}</p>
        <p>T+: {data.tplus}</p>
        <p>Height: {data.height} m</p>
        <p>Pos <br/>X: {data.position[0]} Y: {data.position[1]} Z: {data.position[2]}</p>
        <p>GPS <br/>Latitude: {data.latitude} <br/>Longitude: {data.longitude}</p>
        <p>Thrust Newtons: {data.thrust}</p>
        <p>Q (Pascal): {data.dynamic_pressure}</p>
        <p>Mass kg: {data.mass}</p>
      </header>
    </div>
  );
}

export default App;
