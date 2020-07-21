function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = {max:350, min:789};
console.log(rand(obj));

//passando só o valor mínimo
console.log(rand({min: 988}));

//passando um objeto vazio
console.log(rand({}));
