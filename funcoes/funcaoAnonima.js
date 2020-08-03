//função sem nome
const soma = function(x, y){
    return x + y;
}


const imprimirSoma = function (a, b, operacao = soma) { 
    console.log(operacao(a, b));
}

/* 
    Quando o valor do terceiro parametro for nulo ela assumirá 
    a função soma
*/
imprimirSoma(5, 3);

/* 
    Nesse caso como está sendo passado uma função como terceiro 
    parâmetro ela vai ignorar a função soma
*/
imprimirSoma(5, 3, function(x, y){
    return x - y;
});

//passando uma arrow function, as funções arrow sempre são anônimas
imprimirSoma(5, 3, (x, y) => x * y);

//função anônima dentro de um objeto
const pessoa = {
    nome: function(){
        console.log('Adri');
    }
};

pessoa.nome();