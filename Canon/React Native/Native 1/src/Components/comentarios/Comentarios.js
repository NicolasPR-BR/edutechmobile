import {Text, View, FlatList, Image, TextInput, TouchableOpacity} from 'react-native';
import React, { Fragment, useState} from 'react';
import estilo from './estilo';

const Comentarios = ({comentarios}) =>{
    const [Comentarios, setComentarios] = useState(comentarios);
    

    const adicionarComentario = () =>{
         console.warn(conteudoCampoInput);
         campoInput.clear();
         const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Bugan"
        }
        setComentarios([...Comentarios,novoComentario]);
    }
    let campoInput;
    let conteudoCampoInput = '';

    return(
        <>
    <FlatList data={Comentarios} keyExtractor={(item, index) => index.toString()} renderItem={({item})=>
            <View style={estilo.inline}>
                <Text>{item.userName} </Text>
                
                <Text> {item.text}</Text>
            
            </View>
            
        }/>

        <View  style={estilo.inline}>
        <TextInput ref={TextInput => campoInput = TextInput} onChangeText={texto => conteudoCampoInput = texto} placeholder={'Deixe seu comentario'} style={{flex:1}}/>
        <TouchableOpacity onPress={adicionarComentario}>
        <Image style={estilo.send} source={require('../../../res/img/send.png')}/>
        </TouchableOpacity>
        </View>
        </>
   );
};
export default Comentarios;