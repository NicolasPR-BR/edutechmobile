import { React, Component } from 'react';
import './App.css';
import FormulatioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component{
  handleSubmit = (e) => {
    console.log(e);

  };
  validaCpf = (cpf) =>{
    if(cpf.length === 11){
      
      return {valido:true, texto:""}
    }else
    {
      return {valido:false, texto:"CPF deve ter 11 digitos"}
    }

  }

  render(){
  return (
    <Container align='center' maxWidth="sm" component='article'>
    <Typography variant='h3' component='h1'>Formulário de cadastro</Typography>
    
    <FormulatioCadastro handleSubmit={this.handleSubmit} validarCPF={this.validaCpf}/>

    </Container>
  );
  }
}

export default App;
