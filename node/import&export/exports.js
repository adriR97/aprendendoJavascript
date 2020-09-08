//exportando algo do node
this.variavel1 = 'Exportando1'
exports.variavel2 = 'Exportando2'
module.exports.variavel3 = 'Exportando3'

module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite';
    }
}