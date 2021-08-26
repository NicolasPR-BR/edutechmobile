import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Chart from './Components/chart/chart';
import socket from './API/Socket/socket';

function App() {
  let counter = 0;
  
  const [data, setData] = useState({
    "height": 0,
    "thrust": 0,
    "dynamic_pressure": 0,
    "mass":0,
    "tplus": 0,
    "latitude":0,
    "longitude":0,
  });

  const [heightPlot, setHeight] = useState([
    {
    'height': data.height,
    'tplus': data.plus,
    'amnt': 100
    },
  ]);
  const [isConnected, setConnected] = useState(false);
  
  socket(setConnected, setHeight, setData, heightPlot, data)

  const Body = React.memo(() =>{
    return (
      <>
        <p>Telemetry Server connected?
        {isConnected === true ?<> True</>:<> False</>}</p>
       

        <p>T+: {data.tplus}</p>
        <p>GPS <br/>Latitude: {data.latitude} <br/>Longitude: {data.longitude}</p>
        <p>Thrust Newtons: {data.thrust}</p>
        <p>Q (Pascal): {data.dynamic_pressure}</p>
        <p>Mass kg: {data.mass}</p>
      </>
    )
  }, data)

  return (
    <div className="App">
      <header className="App-header">
        <Chart props={heightPlot}/>
        <Body/>

      </header>
    </div>
  );
}

export default App;
