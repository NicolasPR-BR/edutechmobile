import React, {useState} from 'react'

export default function useErros(validacoes) {
    const estadoInicial = _criarEstadoInicial(validacoes);
    const [erros, setErros] = useState(estadoInicial)

    function validarCampos(e) {
    const { name, value } = e.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);

    setErros(novoEstado);

}
 function readyToSend() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }
  return [erros, validarCampos, readyToSend];
}
function _criarEstadoInicial(validacoes){
    const estadoInicial = {}
    for(let campo in validacoes){
        estadoInicial[campo] = {valido:true, texto: ""}
    }
    return estadoInicial
}
