console.log("-----------------Construindo array-----------------")
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log("\n-----------Número de elementos do array------------")
console.log(valores.length)

console.log("---------------Adicionando elementos---------------")
/* por ser uma linguagem de tipagem fraca, 
ele aceita vários tipos de dados no array*/
valores.push(false, null, 'adri')
console.log(valores)

console.log("\n------------Excluindo o último elemento------------")
valores.pop()
console.log(valores)

console.log("\n-------------Limpando um valor do array------------")
delete valores[5]
console.log(valores)

