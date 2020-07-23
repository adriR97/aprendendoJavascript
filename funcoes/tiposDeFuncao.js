//forma literal
function funcao(){}

//armazenar em uma variável
const funcaoNaVariavel = function(){}

//armazenar em um array
const array = [function(a,b) {return a + b}, funcao, funcaoNaVariavel]
console.log(array[0](2, 3));

//armazenar em um atributo de objeto
const obj = {};
obj.falar = function() {return 'Testando'};
console.log(obj.falar());

//passando uma função como parametro para outra
function vai(funcaoNaFuncao){
    funcaoNaFuncao();
}
vai(function(){console.log('Executando a função dentro de outra...')});

//uma função pode retornar/conter outra função
function soma(a,b){
    return function (c){
        console.log(a + b + c);
    }
}
soma(2, 3)(1);
const cincoMais = soma(2, 3);
cincoMais(1);