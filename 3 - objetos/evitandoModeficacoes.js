/********************Não deixa adicionar novos atributos*********************/
const produto = Object.preventExtensions({
    nome: 'Adriane', preco: 1.99, tag: 'promocao'
});

produto.nome = 'Borracha'; //sobrescrevendo o nome
produto.descricao = 'Borracha escolar branca'; //não deixa adicionar
delete produto.tag; //permite apagar o atributo
console.log(produto);

/***********Não permite adicionar novos elementos e nem excluir**************/
const pessoa = { nome: 'Adri', idade: 12 };
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa)); //verificando se está selado

pessoa.sobrenome = 'Rodrigues';
delete pessoa.nome;
pessoa.idade = 22;
console.log(pessoa);

/***********Não permite alterar, nem adicionar, nem excluir******************/
const aluno = { nome: 'Sem nome', id: 123 };
Object.freeze(aluno);

delete aluno.id;
aluno.nome = 'Adriane';
aluno.sobrenome = 'Rodrigues';
console.log(aluno);