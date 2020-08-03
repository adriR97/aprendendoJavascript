//função que é chamada sempre que um evento acontecer

const fabricantes = ["Ibanez", "Dean", "Strinberg"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

/*
    Nesses casos abaixo o evento é o loop, que chama a função toda vez
    que encontra um elemento
*/
fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));

