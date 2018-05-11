'use strict';
export { };

// Create a program that prints all the even numbers between 0 and 500
let k: number = 1;

while (k<=500) {
    if ((k%2) === 0) {
        console.log (k);
    }
    k++;
}