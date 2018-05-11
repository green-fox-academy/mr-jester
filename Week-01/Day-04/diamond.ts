'use strict';
export { };


let lineCount: number = 7;
//const c: number = 13;


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let line: string = '*';

for (let i = 1; i <= lineCount; i++) {

    let spaces: string = '';

    for (let k = 1; k <= (lineCount - i); k++) {
        spaces += ' ';
    }
    /*for (let j = 1; j <= i; j++) {
      //  console.log(line);
        line += '*';
    }*/
    console.log(spaces + line);
    line += '**';


}
let line2: string = '*';
for (let i = 7; i >= lineCount; i--) {
    let spaces: string = '';
    //let line2: string = '*';
for (let k = 7; k<(lineCount+1); k--){
    spaces += ' '
  //  for (let k = 7; (k > 1); k--) {
    }
    
    console.log( spaces + line2);
    line2 += '**'; 

}
    
    