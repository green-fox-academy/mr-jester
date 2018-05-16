// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';
let input: number = 7
function division(number: number) {
    if (number === 0) {
        console.log('fail');
    }
    return (10 / number);
}
console.log(division(input));