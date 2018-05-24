'use strict'
function Comparator() {
   
    let temp = [];
    temp.push(myArray[0]);
    for (let i: number = 0; i < myArray.length-1; i++) {
        //console.log (myArray [i]);
        for (let j: number = 0;j<myArray.length;j++){
        if (temp [i] [1]=== myArray [j][0]) {
            temp.push (myArray[j]);

            
        }
        
    }

    //return 0;
}
console.log (temp);
}

let myArray = [
    [5, 2],
    [4, 6],
    [1, 5],
    [6, 7],
    [2, 4],
    [7, 1]
];

//myArray = myArray.sort(Comparator);
Comparator()