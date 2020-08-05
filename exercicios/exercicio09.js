/*
    Utilizando a estrutura do Switch faça um programa que simule uma 
    calculadora básica. O programa recebe como parâmetros dois valores 
    numéricos e uma string referente à operação.
*/

function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            return valor1 / valor2;
        default:
            return 'Operação inválida';
    }
}

console.log(calculadora(5, '+', 10));
console.log(calculadora(5, '-', 10));
console.log(calculadora(5, '*', 10));
console.log(calculadora(5, '/', 10));
console.log(calculadora(5, 'a', 10));
