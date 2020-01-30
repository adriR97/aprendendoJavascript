const nome = "adriane"

console.log("--------Retornando a letra que está no índice 4---------")
console.log(nome.charAt(4))   

console.log("\n--------Retornando o índice da primeira letra a---------")
console.log(nome.indexOf('a'))   

console.log("\n---------Retornando o índice da última letra a----------")
console.log(nome.lastIndexOf('a'))

console.log("\n------------Imprimindo a partir do índice 1-------------")
console.log(nome.substring(1))  

console.log("\n----------Imprimindo do início até o índice 3-----------")
console.log(nome.substring(0, 4))     

console.log("\n----------------------Concatenação----------------------")
console.log(nome.concat(" Rodrigues"))

console.log("\n--------------Substituindo a letra e por 3--------------")
console.log(nome.replace('e',3))

console.log("\n----------------Quantidade de caracteres----------------")
console.log(nome.length)

console.log("\n--------Convertendo todas as letras em maiúsculo--------")
console.log(nome.toUpperCase())

console.log("\n----------Gerando um array a partir da vírgula----------")
console.log("Adri, Adriane, Rodrigues".split(','))