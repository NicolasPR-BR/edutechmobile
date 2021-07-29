import React from 'react';

const Datatable = props =>{
    let linhas = props.dados.map(item =>
        <tr key={item.id}>
            {props.colunas.map(coluna => <td key={'${item.id}${item[coluna]}'}> {item[coluna]}</td>)}
        </tr>);
}

export default Datatable 