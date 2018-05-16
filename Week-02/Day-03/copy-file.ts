
// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict';
export { };
declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';
let temp: string = '';
function writeToFile(SFP:string,content:string){
    try {
        fs.writeFileSync((fs.readFileSync ((FFP:String, charEncoding))content));//{
           // catch (error) {


      //  }

      writeToFile('FF.txt','SF.txt');







// function readFromFile(FFP: string) {
//     try {

//         return fs.readFileSync('FF.txt', charEncoding);
//     } catch (error) {
//         console.log('Unable to read file: file.txt');
//         return null
//     }
// }
// function writeToFile(filePath: string, content: string) {
//     try {
//         fs.writeFileSync(filePath, content);
//         console.log('file writing succesful');
//     } catch (error) {
//         console.log(`Unable to write file:  ${filePath}`);

//     }
//     function final(temp){
//         temp = temp.concat(readFromFile('FF.txt'));
//         return temp;
//     }
    
// }
// //writeToFile('SF.txt', readFromFile,);
// console.log (temp)