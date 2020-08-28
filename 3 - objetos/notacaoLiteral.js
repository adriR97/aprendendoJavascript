const a = 1; 
const b = 2;
const c = 3;

const objeto1 = {a:a, b:b, c:c}; //antigo
const objeto2 = {a, b, c}; //novo
console.log(objeto1, objeto2);

/********************************************************/
const nome = 'nota';
const valor = 4.75;

//antigo
const objeto3 = {}; 
objeto3[nome] = valor;
console.log(objeto3);

//novo
const objeto4 = {[nome]:valor};
console.log(objeto4); //mesmo resultado do objeto 3

/********************************************************/

const objeto5 = {
    //forma antiga de criar funções dentro do objeto
    funcao1: function() {
        // ...
    },

    //forma nova
    funcao2() {
        // ...
    }
}

console.log(objeto5);