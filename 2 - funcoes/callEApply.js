function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 3500,
    desc: 0.15,
    getPreco
}

//chamando a função a partir de um objeto
console.log(produto.getPreco());

//chamando a função com o call e apply
console.log(getPreco.call(produto, 0.17, '$'));
console.log(getPreco.apply(produto, [0.17, '$']));