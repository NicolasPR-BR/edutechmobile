import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Gerente } from "./funcionarios/Gerente.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";
function printf(valor){
    console.log(valor);
}

const gerente = new Gerente('Lily',2000,20201);

printf(gerente.nome);
gerente.cadastrarSenha = "1234";
//printf(SistemaDeAutenticacao.login(gerente,"1234"));

const cliente1 = new Cliente("Aria", 102012, 12345);

printf(SistemaDeAutenticacao.login(cliente1,12345));

///const contaCorrenteAria = new ContaCorrente(cliente1.nome,1001);

//contaCorrenteAria.cliente = cliente1;
//console.log(contaCorrenteAria);
//contaCorrenteAria.depositar(210);
//console.log(contaCorrenteAria);
//
//const valorSacado = contaCorrenteAria.saque(200);
//console.log('valor sacado', valorSacado);
//
//const contaPoupanca = new ContaPoupanca(100,cliente1,1001);
//console.log("Poupança",contaPoupanca.Saldo);
//
//
//console.log("retorna", contaPoupanca.sacar(30));