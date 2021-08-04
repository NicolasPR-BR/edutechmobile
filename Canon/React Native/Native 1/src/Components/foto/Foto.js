import React, {Fragment, useState} from 'react';
import { Text, Image, TouchableOpacity, View} from 'react-native';

import estilo from './estilo';
import { imgLike , curtirFoto} from '../../API/curtidas.js';

const Foto = ({urlFoto, descricao,qntLikes}) =>{

    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qntLikes);
    
    const clicouCurtir = () =>{
        const [Novocurtiu, amnt] = curtirFoto(curtiu,likes);
        setCurtiu(Novocurtiu);
        setLikes(amnt);
    }
     return (
            <>
                
                <Image style={estilo.imagem} source={{uri: urlFoto}}/>
                
                <Text>{descricao}</Text>
                <View style={estilo.viewLike}>
                <TouchableOpacity onPress={ clicouCurtir} style={{alignSelf: 'flex-start'}}>
                <Image style={estilo.like} source={imgLike(curtiu)}/>
                </TouchableOpacity>
                <Text>Curtidas {likes}</Text>
                </View>
            </>
            );
}
export default Foto;