const nome = 'Adriane'

//exemplo de concatenação
const concatenacao = "Olá " + nome + "!"

//exemplo de template
/*
    ele considera as quebras de linha e os espaços
*/
const template = 
`   Olá     
${nome}!`

console.log(concatenacao)
console.log(template)

//expressões
console.log(`1 + 1 = ${1+1}`)

//usando uma função dentro do template
const up = texto => texto.toUpperCase()  
console.log(`Ei... ${up('cuidado')}!`)
