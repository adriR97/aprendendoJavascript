//criando o objeto
const pessoa = {
    nome: 'Adriane',
    idade: 22, 
    endereco: {
        logradouro: 'sei la', 
        numero: 1234
    }
}

//extraindo o nome e a idade do objeto
const {nome, idade} = pessoa
console.log(nome, idade)

//extraindo o nome e a idade do objeto e renomeando
const {nome: n, idade: i} = pessoa
console.log(n, i)

//extraindo informações do endereço
const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)