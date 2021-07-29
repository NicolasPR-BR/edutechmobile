import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    constructor(agencia,cliente,){
       super(0,cliente,agencia);
    }
   sacar(valor){
    const taxa = 1;
    super.saque(valor,taxa);
   }
}
