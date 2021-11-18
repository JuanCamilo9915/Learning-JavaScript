function metodoQueHaceAlgo(numero){
    if(numero < 3){
        return console.log(numero);
    }

    return metodoQueHaceAlgo(numero-1)*metodoQueHaceAlgo(numero-2);
}
/*--------------------------------------------------------------------------------------*/
function metodoQueHaceAlgoCadena(cadena){
    if(cadena < 3){
        return console.log(cadena);
    }

    return metodoQueHaceAlgo(cadena-1)*metodoQueHaceAlgo(cadena-2);
}

console.log('--------------------------------Parámetro de tipo Entero--------------------------------');
metodoQueHaceAlgo(5);

console.log('--------------------------------Parámetro de tipo Cadena--------------------------------');
metodoQueHaceAlgoCadena("5");