export class Funcionario{
        #nome;
        #salario;
        #cpf;
        #senha =0;
        #bonificação;
     constructor(nome,salario,cpf){
       
        this.#nome = nome;
        this.#salario = salario;
        this.#cpf = cpf;
       
        this.#bonificação = 1;
        this.#senha = 0;
    }
    get nome(){
        return this.#nome;
    }
   set cadastrarSenha(senha){
        
        this.#senha = senha;
        return "Senha cadastrada";
   }
   senha(senha){
    if(senha == this.#senha){
        return true;
    }
    return false;
}

}