const pessoa = {
    nome: 'Adri',
    idade: 22
}

//acessando as chaves
console.log(Object.keys(pessoa));

//acessando os valores
console.log(Object.values(pessoa));

//array de registros
console.log(Object.entries(pessoa));

//percorrendo com o foreach
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`);
});

//definindo propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //propriedade será listada quando utilizar entries
    writable: false, //definindo como propriedade que não pode ser alterada
    value: '08/12/1997'
});
console.log(pessoa.dataNascimento);

//concatenando objetos
const objeto1 = { a:1 };
const objeto2 = { b:2 };
const objeto3 = { c:3, a:4 }; //como já existe a chave A ele sobrepõe com o último adicionado
const objetoFInal = Object.assign(objeto1, objeto2, objeto3);
console.log(objetoFInal);