let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelectorAll(".paciente");
// Retorna array e lenght = tamanho

for (var i = 0; i < paciente.lenght; i++) {

    let paciente = paciente[i]; // chamando array para indicar todos os pacientes

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 400) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
    }
    if (altura <= 0 || altura >= 3) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
    }

    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }

}
