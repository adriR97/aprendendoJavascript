console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    /* Agora o this aponta para a função e se torna global*/
    console.log(this === exports);
    console.log(this === global);
}

logThis();