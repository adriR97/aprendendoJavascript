function trataErro(erro){
    //throw new Error('Algo de errado não está certo');
    //throw 10
    //throw true
    //throw 'Testando o erro';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function toUpper(palavra){
    try {
        console.log(palavra.name.toUpperCase() + '!!!');
    } catch (e) {
        trataErro(e);
    } finally {
        console.log('Sempre executa');
    }
}

const nome = { nome : 'Adri' }; 
toUpper(nome);