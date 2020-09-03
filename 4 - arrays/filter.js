//filtrando um array
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 5200, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.45, fragil: true },
    { nome: 'Copo de Plástico', preco: 3.65, fragil: false }
];

//função que retorna produtos acima de 500 reais
const caro = produto => produto.preco >= 500;
//função que retorna se o produto é frágil
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));