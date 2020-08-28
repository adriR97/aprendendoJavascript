function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]; //invertendo os valores
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40]));

//passando só o valor minimo
console.log(rand([30]));

//passando só o valor máximo
console.log(rand([, 50]));

//passando um array vazio
console.log(rand([]));

