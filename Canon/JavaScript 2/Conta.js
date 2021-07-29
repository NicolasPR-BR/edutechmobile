//classe abstrata
export class Conta{
    static numeroDeContas =0;
    #agencia = 1001;
    #saldo = 0;
    #cliente = 0;
    
constructor(saldoInicial,cliente,agencia){
        if(this.constructor instanceof Conta){ 
         throw new Error(["Instanciar ContaCorrente ou Poupança, classe Conta deverá apenas ser herdada"]);
        }
        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldoInicial;
        Conta.numeroDeContas++;
     
}
saque(valor,tax){
    let taxa = 1;
  
    return this.#sacar(valor,taxa);
}
#sacar(valor,taxa){
 const valorSacado = taxa*valor;
 if(valor <= this.#saldo){
        this.#saldo -= valor;
        return valor;
    }
    return 0;
    
}
depositar(valor){
    if(valor > 0){
        this.#saldo += valor;
        console.log('Deposito feito');
    }

}

get Saldo(){
    return this.#saldo;
}
transferir(valor,conta){

    conta.cidade = 'São Paulo';
    const valorSacado = this.saque(valor);
    conta.depositar(valorSacado);
}
set cliente(valor){
    if(valor != 0 && valor != '' && valor != null){
        this.#cliente = valor;
    }
}
get cliente(){
    return this.#cliente;
}
}