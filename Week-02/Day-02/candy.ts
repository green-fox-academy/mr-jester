'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"
let max: number = Math.max(shopItems.length);
let list: string []= [];
function sweets(yum){
for (let i:number = 0 ; i<max ; i++){
    
    if (yum[i]===2) {
        list.splice(i++,1,'Crossant');
    }
    if (yum[i]==false){
        list.splice(i++,1,'Ice cream');
    
    }
    if (yum[i]!==undefined)
list.push (yum[i]);
}
return list;
}
console.log (sweets(shopItems));
export = sweets;