import { StyleSheet, Dimensions } from "react-native";

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    botaoView:{
       width:largura*0.4,
       marginLeft:'30%',
       marginBottom:50
    },
    botao:{
        
    },
    container:{
        justifyContent: 'center',
        flexGrow: 2,
        alignItems: 'center',
        
    },
    input:{
       width: largura*0.8,
       textAlign:'center'
    }

});

export default estilo;