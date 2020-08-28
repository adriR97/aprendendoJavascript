/* ------------------- Classe ------------------- */
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const pessoa1 = new Pessoa('Adriane');
pessoa1.falar();

/* --------------- Função Factory --------------- */
const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = pessoa("Adriane");
pessoa2.falar();

/* -------------- Função Construtora ------------ */
function DesafioPessoa(nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const pessoa3 = new DesafioPessoa('Adriane');
pessoa3.falar();