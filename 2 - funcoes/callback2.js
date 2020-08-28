const notas = [6.2, 8.3, 3.7, 4.1, 9.0, 6.8, 7.6];

/* ---------- Sem callback ---------- */
const notasBaixasSemCallback = [];

for(let i in notas) {
    if(notas[i] < 7) {
        //adicionando o elemento no array notasBaixasSemCallback
        notasBaixasSemCallback.push(notas[i]); 
    }
}

console.log(notasBaixasSemCallback);

/* ---------- Com callback ---------- */
const notasBaixasComCallback = notas.filter(function(nota) {
    return nota < 7;
});

console.log(notasBaixasComCallback);

const notasBaixasComCallback2 = notas.filter(nota => nota < 7);
console.log(notasBaixasComCallback2);