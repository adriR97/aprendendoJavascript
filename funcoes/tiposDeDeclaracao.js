/* ---------- function declaration ---------- */
console.log(soma(6, 2)); //é possível chamar antes neste caso
function soma (x, y) {
    return x + y;
}

/* ---------- function expression ----------- */
const subtracao = function (x, y) {
    return x - y;
}
console.log(subtracao(5, 2));

/* ---------- named function expression (pouco usada) ----------*/
const multiplicacao = function multiplicacao (x, y) {
    return x * y;
}
console.log(multiplicacao(2, 6));