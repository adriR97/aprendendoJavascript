class Lancamento {    
    constructor(nome = 'Genérico', valor = 0){
        //o construtor será chamado no momento que o objeto for instanciado
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //array de lancamentos
    }

    addLancamentos(...lancamentos) { //recebe um ou mais lancamentos
        //pegando cada valor array
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

//instanciando os lançamentos
const salario = new Lancamento('Salário', 7800);
const contaDeLuz = new Lancamento('Luz', -230);

//instanciando ciclo financeiro
const contas = new CicloFinanceiro(8, 2020);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
