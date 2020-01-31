//função sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(5, 2)

//função com retorno
function soma(a, b = 3){
    return a + b
}
console.log(soma(2))

//armazenando uma função em uma variável
const somando = function(a, b){
    console.log(a + b)
}
somando(5, 7)

//armazenando uma função arrow em uma variável
const somaAB = (a, b) => {
    return a + b
}
console.log(somaAB(10, 20))

//retorno implícito de uma função arrow de forma mais simples
const somaAB2 = (a, b) => a + b
console.log(somaAB2(5, 4)) 