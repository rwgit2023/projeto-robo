// Existem funções anônimas e funções nomeadas
// As funções nomeadas podem ser reutilazadas em diversos momentos
// As funções anônimas servem quando o código será utilizado apenas 1x

// Toda vez que for input é um value     
// Toda vez que for um texto é um textContent

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')


 controle.forEach(function(elemento) {             //usamos o foreach para buscar dentro do array do controle os botões existentes e assim retornando o elemento dentro dele do btao (+ ou -)
    elemento.addEventListener("click", function(evento){//  Escutador de click do evento
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) // Estou enviando 2 parâmetros para a função 1 - O sinal de + ou -   2 - Qual o pai dos controles (display que sera alterado)
        atualizaEstatisticas (evento.target.dataset.peca) 
    } )
    
})

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector('[data-contador]')

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach(function(elemento){

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]

    })
}
