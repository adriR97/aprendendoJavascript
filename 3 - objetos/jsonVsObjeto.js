const objeto = { 
    a:1, 
    b:2, 
    c:3,
    soma() {
        return a + b + c
    } 
};

/* 
    Passando o objeto para JSON, 
    a soma foi excluída pois o JSON é em formato textual de dados
*/
console.log(JSON.stringify(objeto));

/* Passando o JSON para objeto */
console.log(JSON.parse('{ "a":1, "b":"Uma String", "c":true, d:{}, e:[] }'));