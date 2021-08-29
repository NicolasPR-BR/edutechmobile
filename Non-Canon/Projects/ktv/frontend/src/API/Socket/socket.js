import React, {useState, useEffect} from 'react';

const server = new WebSocket('ws://localhost:3040');

function socket(setConnected, setHeight, setData, heightPlot, data, update){

  server.onopen = () =>{
    console.log('Logado')
    setConnected(true);
    console.log(heightPlot)

      server.onmessage = (dados) =>{
      dados = JSON.parse(dados.data);
      
    if(1 === 3){
      let novosDados = [{
        'height': data.height, 
          'tplus': parseInt(data.tplus), 
          'amt': 100,
          }]
      setHeight(novosDados)
      console.log(novosDados)
      //setHeight([...heightPlot, ...novosDados])
      //update(novosDados)
      
      console.log(heightPlot);
    }
      
      setData(dados)
      
      }


  };
  
}
export default socket;