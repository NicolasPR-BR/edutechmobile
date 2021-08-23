import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';

function App() {

  const [data, setData] = useState({
    "height": 0,
    "position":[0,0,0],
    "thrust": 0,
    "dynamic_pressure": 0,
    "mass":0,
  });


  const [isConnected, setConnected] = useState(false);
  const opcao = {
    reconnection: false, 
    reconnectionAttempts: 5,
    reconnectionDelay:2000
  }
  const [socket, setSocket] = useState(io("http://localhost:3030", opcao));
  const [counter, setCounter] = useState(0);  

  socket.on('connect', () =>{
    console.log('connected')
    setConnected(true);

  })
  socket.on("client_data", (number)=>{
    if(number){
      //const altura = number.height.split('\n',5)[0];      
      setCounter(counter + 1);
      setData(number);
    }
  
  socket.on("reconnect_attempt", () => {
    setConnected(false);
  });
  socket.on("reconnect", (attempt) => {
    setConnected(true);
  });
  socket.on('disconnect', function(e){
    e.preventDefault();
    console.log("Failed logging");
    setCounter('tetedawdawdwadwafasfdwda');
  });
  socket.on('connect_error', function(e) {
    socket.reconnection(false);
    alert('');
  }); 

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
