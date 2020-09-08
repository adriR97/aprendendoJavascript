//A factory retorna um novo objeto

module.exports = () => {
    return {
        valor: 1,
        incrementando() {
            this.valor++;
        }
    }
}