var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    var alvoEvento = event.target; // tabela escuta e tira o "evento"
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function () {
        paiDoAlvo.remove();
    }, 500)
});