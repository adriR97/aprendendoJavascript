function verdadeiro(valor){
    if(valor){
        console.log('É verdadeiro: ' + valor);
    } else {
        console.log('É falso: ' + valor);
    }
}

verdadeiro();
verdadeiro(null);
verdadeiro(undefined);
verdadeiro(NaN);
verdadeiro('');
verdadeiro(0);
verdadeiro(-1);
verdadeiro(' ');
verdadeiro('?');
verdadeiro([]);
verdadeiro([1, 2]);
verdadeiro({});