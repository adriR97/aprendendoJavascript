//estratégias para gerar valor padrão
function soma(a, b, c){
    a = a || 1;    //caso o valor seja nulo será substituído por 1
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log("---------exemplo 1---------");
console.log(soma());
console.log(soma(1, 4));
console.log(soma(4, 2, 6));

function soma2(a, b, c){
    a = a !== undefined ? a : 1;    
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;           //mais recomendado antes do es2015
    return console.log(a, b, c);  
    
    /*
        o 1 no parametro b é o índice no array, 
        se fizesse o mesmo exemplo no c seria 2
    */ 
}

console.log("---------exemplo 2---------");
soma2();
soma2(3);
soma2(2, 7, 6);
soma2(5, 2, 'Teste');

//valor padrao do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log("---------exemplo 3---------");
console.log(soma3());
console.log(soma3(3, 5));