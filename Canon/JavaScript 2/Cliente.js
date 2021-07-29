export class Cliente{
    #cpf = 0;
    #nome = 0;
    #senha;
    constructor(nome, cpf,senha){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#senha = senha;
    }
    get cpf(){
        return this.#cpf;
    }
    get nome(){
        return this.#nome;
    }
    senha(senha){
        if(senha == this.#senha){
            return true;
        }
        return false;
    }
}