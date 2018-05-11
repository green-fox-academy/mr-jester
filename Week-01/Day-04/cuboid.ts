'use strict';
export { };

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let L: number = 4;
let H: number = 3;
let B: number = 3;

console.log("Surface Area: ", ((L * H * 2) + (L * B * 2) + (H * B * 2)));
console.log("Volume: ", (L * B * H));