import { render } from '@testing-library/react';
import React, {Component, Fragment} from 'react';
import Header from './header';
import Datatable from './Datatable';

class Autores extends Component{
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
        ]
    };

    render(){
        return(
        <Fragment>
            <Header/>
            <div className='container'>
                <Datatable dados={this.state.autores} colunas={'nome'}/>
                </div>
                <h1>Sobre</h1>
        </Fragment>)
    }
}
export default Autores;