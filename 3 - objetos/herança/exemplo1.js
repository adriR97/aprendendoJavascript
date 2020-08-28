const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//acessando o objeto pai que o caso não é nulo
console.log(ferrari.__proto__); 

//verificando o tipo
function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto);


