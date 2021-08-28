import React, {useState, useEffect} from 'react';

const server = new WebSocket('ws://localhost:3040');

function socket(setConnected, setHeight, setData, heightPlot, data){

  server.onopen = () =>{
    console.log('Logado')
    setConnected(true);
    console.log(heightPlot)
    server.onmessage = (dados) =>{
      dados = JSON.parse(dados.data);
        
      let counter = 0;  
       if(counter >= 50){
         let novosDados = [{
           'height': data.height, 
           'tplus': parseInt(data.tplus), 
           'amt': 100,
         }]
        
        setHeight((heightPlot) => [{...heightPlot},{...novosDados}])
         //setHeight(novosDados)
         console.log(heightPlot);
       }

     
     setData(dados)
     counter++;
    }
  };
  
}
export default socket;