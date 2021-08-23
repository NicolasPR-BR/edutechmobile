import './App.css';
import { useState } from 'react';
const io = require('socket.io-client');
 
function App() {
  const [data, setData] = useState({
    "height": 0,
    "position":[0,0,0],
    "thrust": 0,
    "dynamic_pressure": 0,
    "mass":0,
  });
  const [socket, setSocket] = useState(io("http://localhost:3030"));
  const [isConnected, setConnected] = useState(false);
  const [counter, setCounter] = useState(0);  

  socket.on('connect', () =>{
    console.log('logged');
  })
  socket.on('data', (data) =>{
    console.log(data);
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Telemetry Server connected?
        {isConnected === true ?<> True</>:<> False</>}</p>

        <p>Update counter {counter}</p>
        <p>Height: {data.height} m</p>
        <p>Pos <br/>X: {data.position[0]} Y: {data.position[1]} Z: {data.position[2]}</p>
        <p>Thrust Newtons: {data.thrust}</p>
        <p>Q (Pascal): {data.dynamic_pressure}</p>
        <p>Mass kg: {data.mass}</p>
      </header>
    </div>
  );
}

export default App;
