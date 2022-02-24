console.log("Trabalhando com Atribuição de Var");

const primeiroNome = "Mikhael";
const sobrenome = "Zimmermann";

//console.log(nome + sobrenome); Imprimi juntos
//console.log(nome, sobrenome); Imprime separado
console.log(primeiroNome + " " + sobrenome); // Imprime Separado
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + sobrenome; // erro pois ja existe uma const em "nome"

console.log(nomeCompleto)
//Boas praticas: tentar usar o maximo de "const"

let contador = 0;
contador = contador + 1;

let idade; //declarando variavel
idade = 26; //atribuindo valor
idade = idade + 1;
console.log(idade);