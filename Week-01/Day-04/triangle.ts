'use strict';
export { };


let k: number = 0;
let line: string = ' * '

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
while (k<4) {
    console.log(line);
    line  += ' * ';
    k++;


}