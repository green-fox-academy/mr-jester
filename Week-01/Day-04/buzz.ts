'use strict';
export { };

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let k: number = 1;

while (k<=100) {

    if ((k%15) == 0) {
        console.log('Fizz Buzz');

    }
    else if ((k%5) ===0) {
        console.log ('Buzz');
    }
    else if ((k%3) ===0) {
        console.log('Fizz');
    }
    else if ((k%3) !=0 && (k%5) !=0 && (k%15) !=0) {
        console.log (k);
    }
    k++;
}