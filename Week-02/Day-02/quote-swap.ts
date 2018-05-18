'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let max: number = Math.max(words.length);

function quoteSwap(check){
    for (let i:number = 0 ; i<max ; i++){
        if (check[i] == 'cannot' && check.length ===1){
            check.splice (-3,1,'do');
        }
        if (check[i]== 'I') {
            check.splice (2,1,'cannot');
        }
    }
    return check;
}



console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;