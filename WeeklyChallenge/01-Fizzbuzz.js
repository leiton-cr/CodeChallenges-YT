/* Fizz buzz*/
for(i=0; i<100; i++){
    console.log( 
            i % 3 == 0 && i % 5 == 0  ? "fizzbuzz" : 
            i % 3 == 0 ? "fizz" :
            i % 5 == 0 ? "buzz" : 
            i 
    )
}