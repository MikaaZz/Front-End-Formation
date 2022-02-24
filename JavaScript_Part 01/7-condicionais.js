console.log(`Trabalhando com listas:`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 18;
const estaAcompanhada = false; // valor buleano "true or false"
const temPassagemComprada = true;

listaDeDestinos.splice(1, 1);
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem! \n");
} else {
    console.log("Comprador menor de idade e desacompanhado, não pode ser vendido \n");
}

console.log("Embarque:")

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Sente-se, Boa Viagem!");
} else {
    console.log("Não será possível embarcar!")
}



// || significa "ou"
// && significa "e"

// console.log(idadeComprador > 18); // maior que
// console.log(idadeComprador < 18); // menor que
// console.log(idadeComprador >= 18); // maior ou igual
// console.log(idadeComprador <= 18); // menor ou igual
// console.log(idadeComprador == 18); // igual 'Usar dois sinais'

// ALT + SHIFT + F identa todo o codigo

// listaDeDestinos.splice(1, 1);
// console.log("Destinos possíveis:");
// console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade");
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
// } else {
//     console.log("Comprador menor de idade e desacompanhado, não pode ser vendido");
// }