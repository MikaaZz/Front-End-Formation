var botaoAdicionar = document.querySelector("#adicionar-paciente");



botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo infos
    var paciente = obtendoPaciente(form);
    // trazendo propriedades do paciente
    var pacienteTr = montaTr(paciente);
    // montando paciente
    var erro = validaPaciente(paciente);

    if (erro.legth > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li); // Ul = var cirada antes com nome "ul"
    })
}

function obtendoPaciente(formulario) {

    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }

    return paciente;
    // Objeto
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    // CriandoTr

    // var nomeTd = montaTd(paciente.nome , "info-nome");
    // var pesoTd = montaTd(paciente.peso , "info-peso");
    // var alturaTd = montaTd(paciente.altura , "info-altura");
    // var gorduraTd = montaTd(paciente.gordura , "info-gordura");
    // var imcTd = montaTd(paciente.imc , "info-imc");
    // Criando Td , porem da para reduzir o codigo e por igual abaixo

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome deve ser preenchido");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido");
    }
    if (!validaAltura(paciente)) {
        erros.push("Altura é inválida");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura deve ser preenchida")
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso deve ser preenchido")
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura deve ser preenchida")
    }

    return erros;
}