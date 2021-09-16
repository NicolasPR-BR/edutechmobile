
function validarCpf(cpf){
    if(cpf.length === 11){
      
      return {valido:true, texto:""}
    }else
    {
      return {valido:false, texto:"CPF deve ter 11 digitos"}
    }

}
function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
        return {valido:false, texto: "Senha dever ser maior que 4 e menor que 72"}        
    }else{
        return {valido:true, texto: ""}
    }
}
export {validarSenha, validarCpf}