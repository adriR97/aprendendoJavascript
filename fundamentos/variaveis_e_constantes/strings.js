const nome = "adriane"

console.log(nome.charAt(4))                                  //retornando a letra que está no índice 4
console.log(nome.indexOf('a'))                               //retornando o índice da primeira letra a
console.log(nome.lastIndexOf('a'))                           //retornando o índice da última letra a 
console.log(nome.substring(1))                               //imprimindo a partir do índice 1
console.log(nome.substring(0, 4))                            //imprimindo do início até o índice 3
console.log(nome.concat(" Rodrigues"))                       //concatenação
console.log(nome.replace('e',3))                             //substituindo a letra e por 3
console.log("Adri, Adriane, Rodrigues".split(','))           //gerando um array a partir da vírgula
console.log(nome.length)                                     //quantidade de caracteres
console.log(nome.toUpperCase())                              //transformando todas as letras em maiúsculo
