/* 
    Desenvolva uma função JavaScript para que ela receba um valor 
    como 0.30000000000000004 e retorne R$0,30
*/

function formatarDecimal(valor){
    reais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`;
    console.log(reais);
}

formatarDecimal(0.1 + 0.2);