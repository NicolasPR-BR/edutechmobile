

export class SistemaDeAutenticacao{
    static login(funcionario,senhas){
        if(SistemaDeAutenticacao.autenticavel(funcionario)){
        var e = funcionario.senha(senhas);

        return e;
        }
        return false;
    }
    static autenticavel(funcionario){
        return "senha" in funcionario && funcionario.senha instanceof Function;
    }
}