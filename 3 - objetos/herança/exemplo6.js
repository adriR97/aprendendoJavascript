function Aula (nome, videoId) {
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula('Primeira aula', 111);
const aula2 = new Aula('Segunda aula', 222);
console.log(aula1, aula2);

//simulando o new
function novo(funcao, ...params) {
    const objeto = {}; //criando objeto vazio
    objeto.__proto__ = funcao.prototype; //assossiando o objeto a função Aula
    funcao.apply(objeto, params); //executando a função
    return objeto;
}

const aula3 = novo(Aula, 'Simulando o new', 333);
console.log(aula3);