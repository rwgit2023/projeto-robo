// Existem funções anônimas e funções nomeadas
// As funções nomeadas podem ser reutilazadas em diversos momentos
// As funções anônimas servem quando o código será utilizado apenas 1x


// const robotron = document.querySelector('.robo')

// robotron.addEventListener("click", function(evento){
//     console.log(evento)
// })

// function dizOi(nome){
//     alert(nome + ' Bem vindo ao Robotron')  
// }

// const subtrair = document.querySelector('#subtrair')
// const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

const controle = document.querySelectorAll('.controle-ajuste')

 controle.forEach(function(elemento) {             //usamos o foreach para buscar dentro do array do controle os botões existentes e assim retornando o elemento dentro dele do btao (+ ou -)
    elemento.addEventListener("click", function(evento){//  Escutador de click do evento
        manipulaDados(evento.target.textContent)
    
    } )
    
})




// somar.addEventListener("click", function(){
//     manipulaDados("somar")
// })

// subtrair.addEventListener("click", function(){
//     manipulaDados("subtrair")
// })



function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}


