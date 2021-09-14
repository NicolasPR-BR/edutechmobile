import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './dados/categorias';
import ArrayDeNotas from './dados/notas';
import "./assets/App.css";
import './assets/index.css';

class App extends Component{

  constructor(){
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  
  render(){
    return (
      <section className='conteudo'>
        <FormularioCadastro categorias={this.categorias} criarNota={this.notas.criarNota.bind(this.notas)}/>
        <main className="conteudo-principal">


          <ListaDeCategorias adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} categorias={this.categorias}/>
          <ListaDeNotas apagarNota={this.notas.deletarNota.bind(this.notas)} notas={this.notas}/>
        </main>
        
      </section>
    );
  }
}

export default App;
