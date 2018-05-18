'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.
ctx.strokeStyle = 'red';
let x: number = 20;
let y: number = 20
function draw(n: number, m: number) {
    for (let i: number = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(n, m);
        ctx.lineTo(300, 200);
        ctx.stroke();
        m = m + 30;
        n = n + 30;
    }
    return n && m;
}
draw(x, y);