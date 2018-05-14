// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result
'use strict';
export { };
function sum(total:number=0): number {

    for (let i:number = total; i>0; i--){
        total= total+(i-1);

    }
    return total;
}

let number: number = sum(4);
console.log (number);