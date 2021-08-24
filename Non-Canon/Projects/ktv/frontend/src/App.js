import './App.css';
import React, { useState, useRef } from 'react';
import Chart from './Components/chart/chart';

const io = require('socket.io-client');


function App() {
  const [data, setData] = useState({
    "height": 0,
    "thrust": 0,
    "dynamic_pressure": 0,
    "mass":0,
    "tplus": 0,
    "latitude":0,
    "longitude":0,
  });
  const opcao = {
    rememberUpgrade: true,
    //transports: ['websocket'],
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
  }
  const [heightPlot, setHeight] = useState([
    {
    'height': data.height,
    'tplus': data.plus,
    'amnt': 100
    },
  ]);
 
  const [socket, setSocket] = useState(io("http://localhost:3030", opcao));
  const [isConnected, setConnected] = useState(false);
  let counter = 0;

  socket.on('connect', () =>{
    console.log('logged');
    setConnected(true);
  })

  socket.on('client_data', (dados) =>{
    //console.log(data);
    if(dados !== data){
    setData(dados);
    }
    //if(counter >= 2){
        const novosDados = {
          'height': dados.height, 
          'tplus': parseInt(dados.tplus), 
          'amnt': 100
        }
        setHeight ([...heightPlot, novosDados]);
    //}
  })
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Telemetry Server connected?
        {isConnected === true ?<> True</>:<> False</>}</p>
        <Chart props={heightPlot}/>
       

        <p>T+: {data.tplus}</p>
        <p>GPS <br/>Latitude: {data.latitude} <br/>Longitude: {data.longitude}</p>
        <p>Thrust Newtons: {data.thrust}</p>
        <p>Q (Pascal): {data.dynamic_pressure}</p>
        <p>Mass kg: {data.mass}</p>
      </header>
    </div>
  );
}

export default App;
