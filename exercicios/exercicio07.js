/* 
    Elabore uma função que recebe um ano e calcula se ele é ano bissexto, 
    imprimindo no console a mensagem e retornando true ou false
*/

function calcularAnoBissexto (ano) {
    if(ano <= 0) {
        return false;
    } else if (ano % 400 == 0) {
        return true;
    } else if (ano % 100 == 0) {
        return false;
    } else if (ano % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(calcularAnoBissexto(1997));
console.log(calcularAnoBissexto(2012));
console.log(calcularAnoBissexto(1959));
console.log(calcularAnoBissexto(2015));