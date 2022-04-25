function tocaSom(seletorTagAudio) {
    const elemento = document.querySelector(seletorTagAudio);

    if (elemento != null && elemento.localName === 'audio') { // != difernte de algo
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for (let contador = 0; contador < listaDeTeclas.length; contador++) { // length utiliza tamanho da lista

    const tecla = listaDeTeclas[contador]; // definindo const para tecla
    const instrumento = tecla.classList[1]; // selecionando segunda class

    const idAudio = `#som_${instrumento}`; // template string

    // guardando numero variavel
    tecla.onclick = function () { // apenas criando a funçao sem chama-la
        tocaSom(idAudio); // aqui chama a função assim que o usuario clica
    }

    tecla.onkeydown = function (event) { // normalmente utilizado (e)
        if (event.code === 'Space' || event.code === 'Enter') { // || significa OU
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    //console.log(contador);
}