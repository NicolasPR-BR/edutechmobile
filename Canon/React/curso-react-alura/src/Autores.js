import React, { Component, Fragment } from 'react';
import Header from './Header';

import DataTable from './DataTable';
import UseFetch from './UseFetch';

class Autores extends Component {

    constructor(props) {
        super(props);

        this.state = {
          nomes:[],
          titulo: 'Autores',
        }
    }
    componentDidMount(){
      UseFetch.ListaNomes().then(res => {
        this.setState({nomes: [...this.state.nomes, ...res.data]})
      })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />

                </div>
                
            </Fragment>
        );
    }
}
export default Autores;