class Cliente {
    nome;
    cpf;
} // Classe é o molde

class ContaCorrente { //Representa
    agencia;
    saldo;

    sacar(valor) { // parenteses mostra que é operação e o "valor" serve para fazer as contas
        if (this.saldo >= valor) { // this = desta ( no caso, conta corrente )
            this.saldo -= valor; // pega o valor da conta corrente e subtrai o valor sacado
        } else {
            console.log("Voce nao possui este valor em conta!")
        }
    }
}

// Cliente é o objeto
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0; // .saldo = chamar o saldo para lhe dar um valor
contaCorrenteRicardo.agencia = 1001;

console.log("Seu saldo é de: ", contaCorrenteRicardo.saldo, "R$"); // imprime o valor da conta corrente

contaCorrenteRicardo.saldo += 100; // adiciona 100 na conta corrente
contaCorrenteRicardo.saldo += 372;
console.log("Seu saldo é de: ", contaCorrenteRicardo.saldo, "R$"); // imprime novo valor da conta corrente
contaCorrenteRicardo.sacar(92); // seta o valor da operação dentro do ()
console.log("Seu saldo é de: ", contaCorrenteRicardo.saldo, "R$"); // imprime a conta com o valor sacado ( negativa )

//console.log(cliente1);
//console.log(cliente2);