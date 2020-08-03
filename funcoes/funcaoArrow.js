/*---------- Função arrow com parametro ----------*/

let dobro = function (a){
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; //return implícito

/*---------- Função arrow sem parametro ----------*/

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';