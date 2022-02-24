console.log(`Trabalhando com listas:`)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
const idadeComprador = 18;
const estaAcompanhada = false; // valor buleano "true or false"
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true)

let contador = 0;
let destinoExiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

for ( let i = 0 ;i < 3 ; i++){
//Primeira Lacuna, inicia contador
//Segunda define a condição
//Terceira define comando do final do looping
// ++ é um atalho para += 1
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
    }
}