for(i=0; i<=100; i++){

    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log(`i: FizzBuzz = ${i}`);
    } else if((i % 3) == 0){
        console.log(`i: Fizz = ${i}`);
    }else  if((i % 5) == 0){
        console.log(`i: Buzz = ${i}`);
    } else {
        console.log(`i: ${i}`);
    }
    
}