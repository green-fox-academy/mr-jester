'use strict';

let lineCount: number = 4;
let line: string = '*';



for (let i = 1; i <= lineCount; i++) {
    let spaces: string = '';
    
    for (let k = 1; k <= (lineCount - i); k++) {
        spaces += ' ';
    }
    
    console.log (spaces + line);
    line += '**';


}


