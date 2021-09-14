import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from '../../assets/Img/delete.svg';

class CardNota extends Component {
  
  render() {
  
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={() =>this.props.apagarNota(this.props.index)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        
      </section>
    );
  }
}

export default CardNota;
