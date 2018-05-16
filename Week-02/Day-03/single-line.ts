//Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

'use strict';
export { };
declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
function writeToFile(filePath: string, content: string) {
    try {
        fs.writeFileSync(filePath, content);
        console.log('file writing succesful');
    } catch (error) {
        console.log(`Unable to write file:  ${filePath}`);
    }
}
writeToFile('my-file.txt', 'Ehsan Salimy');