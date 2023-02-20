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

const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

somar.addEventListener("click", function(){
    braco.value = parseInt(braco.value) +1
})

subtrair.addEventListener("click", function(){
    braco.value = parseInt(braco.value) -1
})



