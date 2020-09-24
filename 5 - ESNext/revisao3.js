/* ------------- Object.values/Object.entries ------------- */

const objeto = {a: 1, b: 2, c: 3}
console.log(Object.values(objeto)) //valores
console.log(Object.entries(objeto)) //chave e valor

/* ------------- Melhorias notação literal ------------- */

const nome = 'Adri'
const pessoa = {
    nome, //nome: 'Adri'
    ola() {
        return 'Oi'
    }
    /* versão anterior
        ola: function() {
            return 'Oi'
        }
    */

}
console.log(pessoa.nome, pessoa.ola())

/* ------------- Classes ------------- */

class Animal { }

class Cachorro extends Animal {
    latir() {
        return 'Au au!'
    }
}

console.log(new Cachorro().latir())