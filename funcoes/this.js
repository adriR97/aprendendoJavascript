/* O this no javascript pode variar conforme a maneira que é chamado, 
ele só não muda em relação a funções arrow*/

const pessoa = {
    saudacao: 'Bom dia!!!',    
    falar(){
        console.log(this.saudacao);  //acessando o atributo do objeto pessoa
    }
}

pessoa.falar();

//conflito causado pela variação do this que já não representa o objeto pessoa
const falar = pessoa.falar;
falar();

//amarrando o this no objeto pessoa com o bind
const falarResolvido = pessoa.falar.bind(pessoa);
falarResolvido();