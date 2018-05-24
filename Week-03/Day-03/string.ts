// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.
'use strict';

let defStr: string = 'xxxxabcxasdxx';

function rmX(str:string): string {
  if (str.indexOf('x') >= 0) {
    str = rmX(str.replace('x', 'y'));
  }
  return str;
}
console.log(rmX(defStr));
