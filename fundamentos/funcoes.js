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