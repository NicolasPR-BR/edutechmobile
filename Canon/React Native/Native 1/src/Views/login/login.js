import AsyncStorage from '@react-native-community/async-storage';

import React, {useState} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

import efetuarLogin from '../../API/login';
import estilo from './estilo';

const Login = ({navigation}) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const tentarLogar = async () => {
    try{ 
      const token = await efetuarLogin(usuario,senha);
      await AsyncStorage.setItem('instalura_token', token);

      navigation.replace("Feed");
      
    }catch(erro){
      setError(erro.message)
    }
  }

  return (<>
    <View style={estilo.container}>
    <Text style={{fontSize:20, marginBottom:20}}>Login</Text>
    
    <TextInput onChangeText={text => setUsuario(text)} style={estilo.input} placeholder={'Usuario'}></TextInput>
    <TextInput onChangeText={text => setSenha(text)} style={estilo.input} secureTextEntry={true} placeholder={'senha'}></TextInput>
    
    <Text>{error}</Text>
    
    </View>
    
    <View style={estilo.botaoView}>
      <Button onPress={tentarLogar} style={estilo.botao} title='Log-in'/>
    </View>
    </>
    );
  }

export default Login;
