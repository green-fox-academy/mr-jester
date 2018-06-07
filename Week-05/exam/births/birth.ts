// Create a function that
// - takes a filename as a parameter,
// - reads a csv file which rows contains data in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happend.

// You can find such a csv file in this directory: births.csv
// If you pass births.csv to your function, the result should be 2006.

'use strict';
export { };
declare function require(path: string): any;
let fs = require('fs');
let charEncoding = 'utf-8';

function readFromFile(filepath: string) {
    try {
        let result: string = fs.readFileSync(filepath, charEncoding);
        return result;
    } catch (error) {
        console.log(`Unable to read file: ${filepath}`);

    }
}
function birthday(filepath): void {
    let result = readFromFile(filepath)
    let birthday: any[] = result.split(/[-;\n\r]+/);
    let temp: any[] = [];
    for (let i: number = 0; i < birthday.length; i++) {
        if (Math.floor(i % 5) === 1) {
            temp.push(birthday[i]);
        }
    }

    temp.sort();
    let counts :object = {};
  for (let i = 0; i < temp.length; i++) {
    let date: number = temp[i];
    counts[date] = counts[date] ? counts[date] + 1 : 1;
  }

  let final: any [][]=[]
  for (let year in counts) {
      final.push([year,counts[year]]);
      final.sort(function(a,b) {
          return a[1] - b[1];
        });
      }
  return final [final.length-1][0];
}

console.log (birthday('./birth.txt'))
