const avo = { atributo1: 'A' };
const pai = { __proto__: avo, atributo2: 'B' };
const filho = { __proto__: pai, atributo3: 'C' };

console.log(filho.atributo1); //herdando do avô

/******************************************************************/

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais (delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing(sombreando a velocidade de 200)
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}` //referenciando e sombreando o status
    }
}

Object.setPrototypeOf(ferrari, carro); //estabelecendo relação
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(300);
console.log(ferrari.status());