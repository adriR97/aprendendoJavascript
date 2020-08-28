function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    //método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

console.log("---------- Verona ----------");
const verona = new Carro;
verona.acelerar();
console.log(verona.getVelocidadeAtual());
verona.acelerar();
verona.acelerar();
console.log(verona.getVelocidadeAtual());

console.log("---------- Ferrari ----------");
const ferrari = new Carro(350, 40);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());