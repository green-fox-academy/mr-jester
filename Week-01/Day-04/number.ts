'use strict';
export { };


let a: number = 3
let b: number = 100;
let c: number = 44;
let d: number = 125;
let e: number = 8;
let f1: number = 123;
let f2: number = 345;
let g1: number = 350;
let g2: number = 200;
let h: number = 1357988018575474;
let i1: number = 10;
let i2: number = 3;
let j: number = 1521;
let k: string = 'apple';
let check: number = 1;

if (f1 > f2) {

  console.log(true);

}
else if (f1 < f2) {
  console.log(false);

}

if ((g1 * 2) > g2) {
  console.log(true);
}
else if ((g1 * 2) < g2) {

  console.log(false);
}

if ((h % 11) == 0) {

  console.log(true);

}

else if ((h % 11) !== 0) {
  console.log(true);

}

if ((i2 ** 2) < i1 && i1 < (i2 ** 3)) {
  console.log(true);

} else if ((i2 ** 2) > i1 || i1 > (i2 ** 3)) {
  console.log(false);

}

// tell if j is dividable by 3 or 5 (as a boolean)
if ((j % 3) === 1 || (j % 5) === 1) {
  console.log(true);
}
else {
  console.log(false);

}

// fill the k variable with its content 4 times


for (let i: number = 0; i < 3; i++) {
  // k += 'apple';
}

let temp = 1;
while (temp < 4) {
  k += ' apple ';
  temp++;
}

console.log(k);

console.log(k)









console.log(a + 10);
console.log(b - 7);
console.log(c * 2);
console.log(d / 5);
console.log(e ** 3);
console.log()