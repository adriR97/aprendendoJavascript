function criarPessoa (nome, sobrenome) {
    //criando um novo objeto toda vez que a função é chamada
    return { 
        nome, 
        sobrenome
    }
}

console.log(criarPessoa('Adriane', 'Rodrigues'));
console.log(criarPessoa('Rosangela', 'Rodrigues'))