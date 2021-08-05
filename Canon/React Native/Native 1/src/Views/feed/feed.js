import React, { Fragment , useState, useEffect } from 'react';
import {ScrollView, FlatList, StatusBar, Platform} from 'react-native';

import Cabecalho from '../../../src/Components/cabecalho/Cabecalho';
import {Foto} from '../../../src/Components/foto/index';
import lerFotos from '../../../src/API/feed';
import Comentarios from '../../../src/Components/comentarios/Comentarios';
import { curtirFoto, imgLike } from '../../API/curtidas';
import {AdicionarComentario} from '../../API/comentarios';

const Feed = () => {

  const [fotos, setFotos] = useState([]);

  useEffect(() => {
  
    lerFotos(setFotos);

  }, []);
  
  let altura = Platform.OS === 'ios' ? 'marginTop:34' : '';

  return (
    
    <ScrollView style={altura} horizontal={true}>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>  
        <FlatList data={fotos} keyExtractor={(item) => item.id.toString()} renderItem={({item})=>
          <>

          <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL}/>
          <Foto urlFoto={item.url} descricao={item.description} qntLikes={item.likes} curtirFoto={curtirFoto} imgLike={imgLike}/>
          <Comentarios comentarios={item.comentarios} adicionarComentario={AdicionarComentario} />
          </>
          
          
         }/>      
        
        
    </ScrollView>);

};

export default Feed;
