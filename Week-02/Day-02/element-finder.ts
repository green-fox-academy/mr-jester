'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
let check: string[] = []
function containsSeven(check) {
   
    for (let i: number = 0; i < check.length ; i++ ){
        if (check.some ===7){
            console.log ("Hoorray");
        }
    
}


}
console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
export = containsSeven;