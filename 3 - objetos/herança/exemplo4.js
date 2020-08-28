function MeuObjeto() {}

//instanciando dois objetos a partir da função
const objeto1 = new MeuObjeto;
const objeto2 = new MeuObjeto;
console.log(objeto1.__proto__ === objeto2.__proto__);
console.log(MeuObjeto.prototype === objeto1.__proto__);

//todosos objetos instanciados a partir da função terão os meus atributos 
MeuObjeto.prototype.nome = 'Anônimo'; 
MeuObjeto.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}!`);
}

objeto1.falar();

objeto2.nome = 'Adri'; //sobrescrevendo o anônimo
objeto2.falar();

const objeto3 = {};
objeto3.__proto__ = MeuObjeto.prototype; //instanciando de outra forma
objeto3.nome = 'Rodrigues';
objeto3.falar();