/*********Não é possível adicionar mais elementos pq é um array constante********/
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);

/***************************removendo último elemento****************************/
pilotos.pop();
console.log(pilotos);

/*************************adicionando elemento na última posição*****************/
pilotos.push('Verstappen');
console.log(pilotos);

/***********************removendo elemento da primeira posição*******************/
pilotos.shift();
console.log(pilotos);

/***********************adicionando um elemento na primeira posição**************/
pilotos.unshift('Hamilton');
console.log(pilotos);

/**************************adicionar e remover elementos*************************/
//a partir do índice 2, não remove ninguém e adiciona os dois pilotos
pilotos.splice(2, 0, 'Bottas', 'Massa'); 
console.log(pilotos);

//a partir do índice 3 exclui 1
pilotos.splice(3, 1);
console.log(pilotos);

/*******************retornando um novo array a partir do índice 2****************/
const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

//passando do índice 1 ao índice 3 para um novo array
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);