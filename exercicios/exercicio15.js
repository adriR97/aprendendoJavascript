/* Concatenar vetores */

let vetorInteiro = [1, 2, 3, 4];
let vetorString = ['Adri', 'Matheus', 'Rosangela'];

function concatenar(...args) {
    resultado = [];
    for(let i=0; i<arguments.length; i++) {
        resultado = resultado.concat(arguments[i]);
    }
    return resultado;
}

console.log(concatenar(vetorString, vetorInteiro));