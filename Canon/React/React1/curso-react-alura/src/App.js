import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './tabela';
import Formulario from './formulario';
import Header from './header';
import PopUp from './PopUp.js';



class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],
  }

  removeAutor = index => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    })
  PopUp.exibeMensagem('error', 'Autor removido');
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem('success', 'Formulário enviado');
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
          
        </div>
      </Fragment>
    );
  }
}

export default App;
