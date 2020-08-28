/* Coleção dinâmica de pares chave/valor */

//Instanciando e atribuindo valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;
console.log(produto);

//Excluindo os atributos do objeto
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

/* ------------------------------------------------ */

const carro = {
    modelo: 'Kombi',
    valor: 30400,
    proprietario: { //objeto dentro do objeto
        nome: 'Adri',
        idade: 22,
        endereco: {
            logradouro: 'Rua Dr Muricy',
            numero: 123
        }
    },
    condutores: [{ //array 
        nome: 'Adriane',
        idade: 23
    }, {
        nome: 'Rodrigues',
        idade: 24
    }],
    exemploDeFuncao: function() { //função
        //...
    }
}

//acessando com a notação ponto
carro.proprietario.endereco.numero = 1000;

//acessando com colchetes
carro['proprietario']['endereco']['logradouro'] = 'Novo nome';

delete carro.condutores;
console.log(carro);