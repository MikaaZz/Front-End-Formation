import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
// Cliente é o objeto
const cliente1 = new Cliente("Mikhael" , 11196738955);
const cliente2 = new Cliente("Alice" , 88822233309);
let numeroDeContas = 0;
const contaCorrenteRicardo = new ContaCorrente(cliente1 , 1001);
contaCorrenteRicardo.depositar(1250);
const contaCorrenteAlice = new ContaCorrente(cliente2 , 1021);

let valor = 200;
contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log("Numero total de contas criadas: " , ContaCorrente.numeroDeContas);