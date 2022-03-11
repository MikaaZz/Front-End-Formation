export class Cliente {
    nome;
    _cpf;

    get cpf(){
       return this._cpf;
    }

    constructor(nome , cpf){ // utiliza para criar uma vez e depois nao mexer mais
        this.nome = nome;
        this._cpf = cpf;
    }
}