/* ------------- Arrow Function ------------- */

const soma = (a, b) => a + b
console.log(soma(3, 12))

/* ------------- Parametro default ------------- */

function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Outro valor')

/* ------------- Operador rest ------------- */

function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(4, 7, 1, 2))
