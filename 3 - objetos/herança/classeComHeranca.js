class Avo { //super classe
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //chamando a função construtora da super classe
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        //como tá sendo passado só o sobrenome ele herda a profissão da classe pai
        super('Rodrigues') 
    }
}

const filho = new Filho
console.log(filho)