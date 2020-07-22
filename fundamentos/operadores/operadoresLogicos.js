function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2; //se um dos dois for verdadeiro
    const comprarPs5 = trabalho1 && trabalho2; //se os dois forem verdadeiros
    const comprarPs3 = trabalho1 != trabalho2; //se um for verdadeiro e o outro falso
    const saudavel = !comprarSorvete; //se comprarSorvete for falso

    return {comprarSorvete, comprarPs5, comprarPs3, saudavel} // retornando um objeto
}

console.log(compras(true, false));