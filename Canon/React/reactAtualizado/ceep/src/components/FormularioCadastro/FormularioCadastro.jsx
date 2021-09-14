import React, { Component } from "react";

import "./estilo.css";
class FormularioCadastro extends Component {
    
    constructor(props){
      super(props)
      this.titulo = "";
      this.texto = "";
      this.categoria = "Sem categoria";
      this.state = {
        categorias: []
      }
      this._novasCategorias = this._novasCategorias.bind(this);
    }
    componentDidMount(){
      
      this.props.categorias.inscrever(this._novasCategorias);
    }
    componentWillUnmount(){
      this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){

      this.setState({...this.state, categorias});

    }

    _criarCard = (e) =>{
      e.preventDefault();
      e.stopPropagation();
      
      this.props.criarNota(this.titulo, this.texto, this.categoria);
    }
    
  render() {
    
    return (
      <form onSubmit={this._criarCard} className="form-cadastro ">
        <select onChange={(e) => this.categoria = e.target.value} className="form-cadastro_input">
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}

        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={(e) => this.titulo = e.target.value}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={(e) => this.texto = e.target.value}
        />
        <button onSubmit={this._criarCard} className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
