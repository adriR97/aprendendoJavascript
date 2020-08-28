let v_f = true

// o !! faz com retorne o valor original
// o ! é uma negação

console.log("Valores verdadeiros:")
console.log(v_f)
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log("-------------------------------")
console.log("Valores que retornam falso:")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(v_f = false))

console.log("-------------------------------")
let nome = ''
//se tiver valor imprimirá o nome, senão desconhecido
console.log(nome || 'Desconhecido')
