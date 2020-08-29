let aprovados = ['Adri', 'Antonio', 'Gabriel']; //forma literal
console.log(aprovados);
console.log(aprovados[1]);

/*
    Adicionando um novo elemento dentro do array(corre o 
    risco de sobrescrever algum outro elemento)
*/
aprovados[3] = 'Rodrigues';
console.log(aprovados);

//adicionando um novo elemento no último índice
aprovados.push('Scooby');
console.log(aprovados);

//lendo tamanho do array
console.log(aprovados.length);

//reordenando o array
console.log(aprovados.sort());

//deletando a partir de um índice(fica como indefinido o que deletou)
delete aprovados[2];
console.log(aprovados)

//adicionando e removendo elementos com splice
aprovados.splice(2, 1) //índice e quantos elementos
console.log(aprovados);
aprovados.splice(0, 3, 'Elemento1', 'Elemento2'); //índice, quantos elementos e adicionando dois
console.log(aprovados);