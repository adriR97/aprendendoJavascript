/* 
    Serve para mapear um array para outro array do mesmo tamanho, transformando os dados
*/

const numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(function(e){
    //transformando os números no dobro
    return e * 2;
});

console.log(resultado);

//criando 3 funções
const soma10 = e => e + 10;
const triplo = e => e * 3;
const converteReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

//chamando o map de forma encadeada das funções
resultado = numeros.map(soma10).map(triplo).map(converteReal);
console.log(resultado);