/* 
    Faça uma função que percorra um vetor e conte quantos números
    deste vetor estão no intervalo [10,20].
*/

function intervalo (vetor) {
    numerosNoIntervalo = 0;
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numerosNoIntervalo++;
        }
    }
    return `${numerosNoIntervalo} números dentro do intervalo.`;
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21];
console.log(intervalo(vetor));