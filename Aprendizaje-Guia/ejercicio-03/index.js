function division(numerador, denominador){

    if(typeof(numerador) != "string" && typeof(denominador) != "string" && denominador != 0){
        return console.log(`El resultado de dividir ${numerador} entre ${denominador} es: ${numerador / denominador}`);
    } else{
        return console.log('Digite valores de tipo entero y/o verifique que el denominador sea distinto de cero (0)');
    }

}

console.log('--------------------------------Numerador de tipo Cadena--------------------------------');
division("7",1);
console.log('\n');
console.log('--------------------------------Denominador de tipo Cadena--------------------------------');
division(7,"1");
console.log('\n');
console.log('--------------------------------Denominador con Valor Cero(0)--------------------------------');
division(7,0);
console.log('\n');
console.log('--------------------------------numerador con Valor Cero(0)--------------------------------');
division(0,1);
console.log('\n');
console.log('--------------------------------Numerador y Denominador de tipo Cadena--------------------------------');
division("7","1");
console.log('\n');
console.log('--------------------------------Numerador y Denominador de tipo Entero--------------------------------');
division(24,3);