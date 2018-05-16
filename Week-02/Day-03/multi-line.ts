// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.
'use strict';
export { };
declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let length: number = 5;
let temp: string[] = [];

function writeToFile(filePath: string, content: string, length: number) {
    try {
        fs.writeFileSync(filePath, content);
        console.log('file writing succesful');
    } catch (error) {
        console.log(error.message);
        console.log(`Unable to write file:  ${filePath}`);
    }
}
function final(temp) {
    for (let i: number = 0; i < length; i++) {
        temp = temp.concat('apple');

    }
    return temp;
}
writeToFile('newFile.txt', final(temp), 1);