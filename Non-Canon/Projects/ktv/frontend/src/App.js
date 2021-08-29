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
    'name': 'Height',
    'Height': data.height,
    'yAxis': parseInt(data.tplus),
    'amt': 100
    },{
    'Height': data.height,
    'yAxis': parseInt(data.tplus),
    'amt': 100
    }]
  );
  const [mass, setMass] = useState([
    {
    'name': 'Mass',
    'Mass': data.mass,
    'yAxis': parseInt(data.tplus),
    'amt': 100
    },{
    'Mass': data.mass,
    'yAxis': parseInt(data.tplus),
    'amt': 100
    }]
  );

  const [thrustPlot, setThrust] = useState([
    {
    'name': 'Thrust',
    'Thrust': data.thrust,
    'yValue': parseInt(data.tplus),
    'amt': 100
    },{
    'Thrust': data.thrust,
    'yValue': parseInt(data.tplus),
    'amt': 100
    },
    {
    'Thrust': 5000,
    'yValue': parseInt(data.tplus),
    'amt': 100
    }]
  );
  const [Q, setQ] = useState([
    {
    'name': 'Pressure',
    'Pressure': parseInt(data.dynamic_pressure),
    'yValue': parseInt(data.tplus),
    'amt': 100
    },{
    'Pressure': parseInt(data.dynamic_pressure),
    'yValue': parseInt(data.tplus),
    'amt': 100
    }]
  );

  const [isConnected, setConnected] = useState(false);

  useEffect(() => {
    socket(setConnected, setHeight, setData, heightPlot, data);    

  }, [])
  
  //console.log(heightPlot)
  const Body = React.memo(() =>{
    //<p>Height: {heightPlot.height}</p>
    return (
      <>
        
        <p>Telemetry Server connected?
        {isConnected === true ?<> True</>:<> False</>}</p>
        <p>Height: {heightPlot.yAxis}</p>
        

        <p>T+: {data.tplus}</p>
        <p>GPS <br/>Latitude: {data.latitude} <br/>Longitude: {data.longitude}</p>
        <p>Thrust Newtons: {data.thrust}</p>
        <p>Q (Pascal): {data.dynamic_pressure}</p>
        <p>Mass kg: {data.mass}</p>
       

      </>
    )
  }, data)
  let counter = 5;

  useEffect(() => {
    counter++;

  if(counter >= 2){
    if(data.tplus !== 0 ){
    setHeight([{
    'Height': data.height,
    'yValue': parseInt(data.tplus),
    'amt': 100
    }])
    counter = 0; 

    setQ([{
    'Pressure': parseInt(data.dynamic_pressure),
    'yValue': parseInt(data.tplus),
    'amt': 100
    }])

    setMass([{
    'Mass': data.mass,
    'yValue': parseInt(data.tplus),
    'amt': 100
    }])}

    setThrust([{
    'Thrust': data.thrust,
    'yValue': parseInt(data.tplus),
    'amt': 100
    }])

    
  }
  
  }, [data])


  
  return (
    <div className="App">
      <header className="App-header">
        <div className='plot'>
        <Chart data={heightPlot}/>      
        <Chart data={thrustPlot}/>
        </div>
        <div className='plot'>
        <Chart data={Q}/>     
        <Chart data={mass}/>

        </div> 
        <Body/>
      </header>
    </div>
  );
}

export default App;
