// Given a string, compute recursively a new string where all the 'x' chars have been removed.
'use strict';
export{};

let defStr: string = 'xxxxabcxasdxx';

function rmX(str:string): string {
  if (str.indexOf('x') >= 0) {
    str = rmX(str.replace('x', ''));
  }
  return str;
}
console.log(rmX(defStr));