import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Tabela extends Component {

    render() {

        const { autores, removeAutor } = this.props;

        return (
            <Table>
                <TableHead>
                </TableHead>
                <TableBody>
                    {
                        autores.map((autor) => (
                            <TableRow key={autor.id}>

                                <TableCell>{autor.nome}</TableCell>
                                <TableCell>{autor.livro}</TableCell>
                                <TableCell>{autor.preco}</TableCell>
                                <TableCell><button onClick={() => { removeAutor(autor.id) }} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
                <tableHead />

                <tableBody autores={autores} removeAutor={removeAutor} />
            </Table>
        );
    }
}

export default Tabela;