const pai = {nome: 'Adri', corCabelo: 'castanho'};
const filha1 = Object.create(pai); //definindo o protótipo 
console.log(filha1.corCabelo);

/*********************************************************************/

const filha2 = Object.create(pai, { 
    //estabelendo o protótipo e definindo mais valores
    nome: { value: 'Fabi', writable: false, enumerable: true }
});
console.log(filha2.nome);

/*********************************************************************/

filha2.nome = 'Jéssica'; //tentando alterar o nome
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

/*********************************************************************/

for (let key in filha2) {
    //verificando cada atributo e indicando se recebeu por herança
    filha2.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`);
}
