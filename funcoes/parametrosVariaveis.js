function soma(){
    let soma = 0;
    for(i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
//passando parametro para uma função sem parametro
console.log(soma(3));
console.log(soma(3.2, 5.6));