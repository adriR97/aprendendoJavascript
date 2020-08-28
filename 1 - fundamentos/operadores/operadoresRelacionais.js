console.log("Iguais: ", '1' == 1);
console.log("Estritamente iguais: ", '1' === 1); 
console.log("Diferente: ", '3' != 3);
console.log("Estritamente diferentes: ", '3' !== 3);
console.log("Maior que: ", 3 > 2);
console.log("Menor que: ", 3 < 2);
console.log("Maior ou igual: ", 3 >= 2);
console.log("Menor ou igual: ", 3 <= 2);

const data1 = new Date(0); //0 significa 1° de janeiro de 1970
const data2 = new Date(0);

console.log(data1 === data2); //falso pq está comparando o endereço de memória
console.log(data1 == data2); //mesma coisa do anterior
console.log(data1.getTime() === data2.getTime());

console.log(undefined == null);
console.log(undefined === null);