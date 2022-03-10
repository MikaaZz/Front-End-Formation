export class ContaCorrente { //Representa
    agencia;
    cliente;



    // Arquivo com _ esta privado, não acesse ele fora das classes.
    _saldo = 0;

    sacar(valor) { // parenteses mostra que é operação e o "valor" serve para fazer as contas
        if (this._saldo >= valor) { // this = desta ( no caso, conta corrente )
            this._saldo -= valor; // pega o valor da conta corrente e subtrai o valor sacado
            return valor;
        } else {
            console.log("Voce nao possui este valor em conta!")
        }
    }

    depositar(valor) { // () = paramentros que recebe ou argumentos
        if (valor <= 0) {
            return; // early return
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "São Paulo";
        valor = 20;
    }
}