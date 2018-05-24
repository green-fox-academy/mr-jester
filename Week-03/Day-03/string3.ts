// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.
'use strict';
export { };

let defStr: string = 'xxxxabcxasdxx';

function star(str: string): string {
    let counter: number = 0;
    if (counter ===str.length){
        return str;
    }
    else if (counter >= 0 && counter % 2 !== 0 && counter <str.length) {
        return str;
    }
    else {
        str = star(str.replace(str.charAt(counter), '*'));

    }
 counter = counter++;
 return str;

}
console.log(star(defStr));