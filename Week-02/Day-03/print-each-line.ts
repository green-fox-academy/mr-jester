// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

'use strict';
export { };
declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filepath: string) {
    try {

        return fs.readFileSync('./file.txt', charEncoding);
    } catch (error) {
        console.log('Unable to read file: file.txt');
        return null
    }

}
let result = readFromFile('file.txt');
if (result !== null) {
    result.split('\n\r').forEach(line => {
        console.log(line)

    });
}


