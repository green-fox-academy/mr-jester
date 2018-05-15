'use strict';
export { };
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];
let final: string[] = []

function appendA(a: string[]) {
    for (let i: number = 0; i < a.length; i++) {
        final.push(a[i] + 'a');
    }
    return final;
}
console.log(appendA(far));


// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;