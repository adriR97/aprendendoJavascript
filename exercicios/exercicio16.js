/* 
    Crie uma função que recebe dois parâmetros, um vetor com apenas valores numéricos 
    e um número inteiro. Faça com que a função retorne outro vetor que será resultado 
    da multiplicação de cada elemento pelo número passado como parâmetro.
*/

let vetor = [1, 2, 3, 4, 5];

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = [];
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado;
}

console.log(multiplicaVetor(vetor, 3));
