//extraindo dados de um array
const [n1, /* pulando um número*/ , n3, ,n5 = 4] = [10, 5, 7, 2]
console.log(n1, n3, n5)

//pegando um valor de um array dentro de outro array
const [, [, nota]] = [[8, 3, 6], [9, 4, 2]]
console.log(nota)