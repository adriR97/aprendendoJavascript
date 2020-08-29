//é possível passar como parâmetro o valor, índice e array para o forEach

const aprovados = ['Adriane', 'Matheus', 'Aldo'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach(nome => console.log(nome)); //arrow function

const funcaoImprimirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(funcaoImprimirAprovados);