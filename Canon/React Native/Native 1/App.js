import React, { Fragment , useState, useEffect} from 'react';
import {ScrollView, FlatList} from 'react-native';

import Cabecalho from './src/Components/cabecalho/Cabecalho';
import {Foto} from './src/Components/foto/index';
import lerFotos from './src/API/feed';
import Comentarios from './src/Components/comentarios/Comentarios';



const App = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
  
    lerFotos(setFotos);

  }, []);
  

  return (
    
    <ScrollView horizontal={true}>
      
        <FlatList data={fotos} keyExtractor={(item) => item.id.toString()} renderItem={({item})=>
          <>

          <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL}/>
          <Foto urlFoto={item.url} descricao={item.description} qntLikes={item.likes}/>
          <Comentarios comentarios={item.comentarios}></Comentarios>
          </>
          
          
         }/>      
        
        
    </ScrollView>);

};

export default App;
