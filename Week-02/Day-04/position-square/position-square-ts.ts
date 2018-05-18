'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let c1: number = 0;
let c2: number = 0;
const c3: number = 50;
const c4: number = 50;
function drawandMultiply(n: number, m: number, w: number, h: number) {

    for (let i: number = 0; i <= 2; i++) {
        ctx.fillStyle = 'red';
        ctx.fillRect(n, m, w, h);
       // ctx.stroke();
        m = m+50;
        n= n+50;
    }
}

drawandMultiply(c1, c2, c3, c4);