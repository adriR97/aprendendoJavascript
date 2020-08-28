const sequencia = {
    _valor: 1, //por convenção coloca-se o _
    get valor() {return this._valor++},
    set valor(valor) {this._valor = valor}
}

sequencia.valor = 1997;
console.log(sequencia.valor, sequencia.valor);