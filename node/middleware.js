//não contém amarração entre as funções

const { exec } = require("child_process");

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1';
    next();
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2';
    next();
}

const passo3 = contexto => contexto.valor3 = 'mid3';

const executando = (contexto, ...middlewares) => {
    const execPasso = indice => {
        /* 
            Verificando se middlewares foi setado e indice é 
            menor que o tamanho do array
        */
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1));
    }
    execPasso(0);
}

const contexto = {};
executando(contexto, passo2, passo1, passo3);
console.log(contexto);