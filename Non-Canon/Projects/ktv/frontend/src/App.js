import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Chart from './Components/chart/chart';
import socket from './API/Socket/socket';

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
  const [heightPlot, setHeight] = useState([
    {
    'height': data.height,
    'tplus': parseInt(data.tplus),
    'amt': 100
    }]
  );

  const [isConnected, setConnected] = useState(false);

  const update = (data, data2) =>{
    console.log("updater")
    heightPlot = ([...data, ...data2]);
  }

  useEffect(() => {
    socket(setConnected, setHeight, setData, heightPlot, data, update);    

  }, [])
  
  //console.log(heightPlot)
  const Body = React.memo(() =>{
    //<p>Height: {heightPlot.height}</p>
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

  //   <Chart props={[...heightPlot,{
  //  'height': data.height,
  // 'tplus': parseInt(data.tplus),
  //  'amt': 100
  //  }]}/>
  let counter = 0;
  useEffect(() => {
    if(counter >= 0){
    if(data.height !== 0 ){
    setHeight([{
    'height': data.height,
    'tplus': parseInt(data.tplus),
    'amt': 100
    }])

    counter = 0;
    
  }
    counter++;
  
  }
  }, [data])

  
  return (
    <div className="App">
      <header className="App-header">
        <Chart data={heightPlot}/>      
        <Body/>
      </header>
    </div>
  );
}

export default App;
