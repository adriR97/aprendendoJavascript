//causa desvio de fluxo no bloco mais próximo do tipo for, while ou switch

const numeros = [1, 2, 3, 4, 5];

console.log('--------------Break----------------');
for(x in numeros){
    if(x == 2){
        break;
    }
    console.log(`${x} = ${numeros[x]}`);
}

console.log('-------------Continue--------------');

for(y in numeros){
    if(y == 2){
        continue;
    }
    console.log(`${y} = ${numeros[y]}`);
}

console.log('------Desvio no bloco externo------');

externo: for(a in numeros) { //apelidando o bloco externo
    for(b in numeros){
        if(a == 2 && b == 3) break externo;
        console.log(`Par = ${a},${b}`);
    }
}