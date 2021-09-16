import { React, Component } from 'react';
import './App.css';
import FormulatioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import { validarSenha, validarCpf } from './components/FormularioCadastro/models/cadastro';
import ValidacoesDeCadastro from './components/FormularioCadastro/contexts/ValidacoesDeCadastro';
class App extends Component{
  handleSubmit = (e) => {
    console.log(e);

  };
  render(){
  return (
    <Container align='center' maxWidth="sm" component='article'>
    <Typography variant='h3' component='h1'>Formulário de cadastro</Typography>
      <FormulatioCadastro handleSubmit={this.handleSubmit}/>
    

    </Container>
  );
  }
}

export default App;
