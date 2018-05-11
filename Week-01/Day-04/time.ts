'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let total: number = 0
let day: number = (24 * 60 * 60);

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

total = (currentHours * 1200) + (currentMinutes * 60) + currentSeconds;
console.log(day - total);
//console.log (day);
