function numeroEnteroPositivoPerfecto(numero) {

    if (typeof numero === 'number' && Number.isInteger(numero) && numero > 0) {
        let contador = 0, i = 1;

        //Se puede realizar con un for, pero para esta ocación decidí utilizar un while
        while (i <= (numero / 2)) {
            if (numero % i === 0) {
                console.log(`Los divisores del numero ingresado son: ${i}`);
                contador += i;
            }
            i++;
        }

        if (contador != 0 && contador === numero) {
            return console.log(`El numero ${numero} es perfecto`);
        }

        return console.log(`El numero ${numero} no es perfecto`);

    } else {
        return console.log('Digitar únicamente un numero que sea de tipo entero y sea mayor a cero(0)');
    }


}

process.stdout.write('Digite la cantidad de iteraciones a realizar: ');

process.stdin.on('data', function (data) {
    let iteraciones = Number(data.toString());
    let i = 1;
    //console.log('Iteraciones' + typeof iteraciones);
    do {
        //nuevoNumero es generado aleatoriamente
        let nuevoNumero = Math.round(Math.random()*100);

        console.log(`------------------------------Iteración # ${i}------------------------------`)
        console.log(`----------------------Número a evaluar: ${nuevoNumero}----------------------`)
        numeroEnteroPositivoPerfecto(nuevoNumero);
        console.log(`----------------------------------------------------------------------------\n`)

        iteraciones--;
        i++;
    } while (iteraciones > 0);
    process.exit();
});