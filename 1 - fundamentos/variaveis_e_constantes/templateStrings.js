const nome = 'Adriane'

console.log("---------------Exemplo de concatenação---------------")
const concatenacao = "Olá " + nome + "!"
console.log(concatenacao)

console.log("\n----------------Exemplo de template------------------")
/*
    ele considera as quebras de linha e os espaços
*/
const template = 
`   Olá     
${nome}!`
console.log(template)

console.log("\n---------------------Expressões----------------------")
console.log(`1 + 1 = ${1+1}`)

console.log("\n--------Usando uma função dentro do template---------")
const up = texto => texto.toUpperCase()  
console.log(`Ei... ${up('cuidado')}!`)
