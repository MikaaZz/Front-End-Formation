import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    // Arquivo com _ esta privado, não acesse ele fora das classes.
    _cliente;
    _saldo = 0;


    set cliente(novoValor){ // esta instancia faz com que meu cliente seja atribuido apenas um Cliente verdadeiro nao outros valores
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    get cliente(){ // isto faz com que eu possa visualizar o cliente mas nao posso atribuir nenhum valor
        return this._cliente;
    }
    get saldo(){ // isto faz com que eu possa visualizar meu saldo porem nao posso alterar ele
        return this._saldo;
    }

    constructor(cliente , agencia){ // valor dentro do parenteses, foi criado agora por mim, nao segue um padrao
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

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