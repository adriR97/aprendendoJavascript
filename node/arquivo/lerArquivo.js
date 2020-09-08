const fs = require('fs');
const caminho = __dirname + '/arquivo.json';

// Síncrono (vai primeiro ler o arquivo e depois continuar ~~Problema arquivos grandes~~)
const conteudo = fs.readFileSync(caminho, 'utf-8'); 
console.log(conteudo);

// Assíncrono
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host} : ${config.db.port}`);
});

// Lendo arquivos da pasta 
fs.readdir(__dirname, (erro, arquivos) => {
    console.log("Conteúdos da pasta atual:");
    console.log(arquivos);
});