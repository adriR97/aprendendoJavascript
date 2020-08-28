//notação literal
const objetoLiteral = {}
console.log(objetoLiteral);

//função construtora Object
const object = new Object;
console.log(object);

//criando função construtora
function Produto(nome, preco, desc) {
    this.nome = nome; //atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

//função factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario/30) * (30-faltas);
        }
    }
}

const funcionario = criarFuncionario('Adri', 7500, 5);
console.log(funcionario.getSalario());

//Object.create
const pessoa = Object.create(null);
pessoa.nome = 'Adri';
console.log(pessoa);

//transdormando JSON em objeto
const fromJSON = JSON.parse('{"info": "Texto em Json"}');
console.log(fromJSON.info);