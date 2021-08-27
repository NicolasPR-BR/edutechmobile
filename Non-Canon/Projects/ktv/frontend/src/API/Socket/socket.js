import {useEffect} from 'react';

const io = require('socket.io-client');
const opcao = {
    rememberUpgrade: true,
    transports: ['websocket'],
    reconnectionDelay: 2000,
    reconnectionDelayMax: 5000,
  }
const server = io("ws://127.0.0.1:3030", opcao);

async function socket(setConnected, setHeight, setData,heightPlot, data){

    server.on('connect', () =>{
    console.log('logged');
    setConnected(true);
     })

    let counter = 0;

    server.on('client_data', (dados) =>{
    //console.log(data);
     if(counter >= 5){
        const novosDados = {
          'height': dados.height, 
          'tplus': parseInt(dados.tplus), 
          'amnt': 100
        }
        setHeight ([novosDados, {
         'height': data.height, 
          'tplus': parseInt(data.tplus), 
          'amnt': 100
        }]);
    }

    counter++;
    if(counter === 2){
      setData(dados);
      
     }
    })
}
export default socket;