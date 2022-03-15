console.log(`Trabalhando com listas:`)

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const ridoDeJaneiro = `Rio de Janeiro`;

//console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, ridoDeJaneiro);
// muito grande e trabalhoso

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Blumenau`) // adicionando itens na lista

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
// primeiro numero é de onde começa dentro da lista e o segundo é a quantidade que sera retirado
//a contagem da lista começa em 0, para o primeiro elemento
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
// mostrar apenas elemento desejavel


//CTRL + K+ C comenta tudo selecionado
//CTRL + K+ U descomenta tudo selecionado