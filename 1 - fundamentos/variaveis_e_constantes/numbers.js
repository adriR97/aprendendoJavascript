let numero = 4
let numero2 = 5.768

console.log("-------------Verificando se é do tipo inteiro-------------")
console.log(Number.isInteger(numero2))

console.log("\n----------Multiplicando uma string com um inteiro---------")
console.log("20" * 3)

/////////////////////////////////////////////////////////////////////////////////////////////////////

const total = numero + numero2

console.log("\n--------Imprimindo o total (soma dos dois números)--------")
console.log(total)

console.log("\n----------------Limitando as casas decimais---------------")
console.log(total.toFixed(2))

console.log("\n------------Retornando o total como uma string------------")
console.log(typeof total.toString())

console.log("\n-------------Retornando o total como binário--------------")
console.log(numero.toString(2))