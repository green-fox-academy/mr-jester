'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];
let match: string[] =[];

let max: number = Math.max(girls.length, boys.length);
function list(boys, girls){
    for (let i:number = 0; i < max; i++){
       if (girls[i]!==undefined){
           match.push(girls[i]);
       }
       
    if (boys[i]!== undefined){
        match.push(boys[i]);
    }
    
    }

return match;
}
console.log(list(boys, girls));