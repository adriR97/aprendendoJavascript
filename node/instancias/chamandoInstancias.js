const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');
const contadorC = require('./instanciaNova')(/*função factory*/);
const contadorD = require('./instanciaNova')();

/* 
    O contador A gera cache, portando quando 
    for instanciado o contador B continua contando 
*/
contadorA.incrementando();
contadorA.incrementando();
console.log(contadorB.valor); 

/* 
    O contador C não gera cache, quando chamar o 
    contador D é retornado um novo objeto 
*/
contadorC.incrementando();
contadorC.incrementando();
console.log(contadorD.valor);