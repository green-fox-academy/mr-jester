'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(250, 250, 50, 0, Math.PI * 2);
ctx.fill();