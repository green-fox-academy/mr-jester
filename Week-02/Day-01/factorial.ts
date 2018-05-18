// -  Create a function called `factorio`
//    that returns it's input's factorial
'use strict';
export { };
function factorio(total: number = 5): number {

    for (let i: number = total; i > 1; i--) {
        total = total * (i - 1);
    }
    return total;
}
let number: number = factorio();
console.log(number);