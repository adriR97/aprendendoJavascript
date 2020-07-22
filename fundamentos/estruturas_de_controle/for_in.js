const notas = [6.7, 3.5, 9.6, 1.1, 4.2, 6.5];

for(let i in notas){               
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Adriane',
    sobrenome: 'Rodrigues',
    idade: 22
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`);
}