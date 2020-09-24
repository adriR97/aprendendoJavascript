/* ----------------------------------- let e const ----------------------------------- */

{
    var a = 2 
    let b = 3 // tem escopo de bloco, não é possível acessar de fora
    const c = 5 // tbm tem escopo de bloco
    console.log(b)
}

console.log(a)

/* --------------------------------- template string --------------------------------- */

const produto = 'iPad'
console.log(`${produto} é caro`)

/* ------------- Destructuring (tirando algo de dentro de uma estrutura) ------------- */

const [l, e, ...tras] = "Adriane"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome} = { nome: 'Adri', idade: 22 }
console.log(i, nome);