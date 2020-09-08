/*
    Tornando algo global para utilizar em qualquer arquivo.
    Utilizando o freeze para não permitir que outros arquivos modifiquem
*/
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Apareço em todos os lugares';
    }
})