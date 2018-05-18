'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let s: number = 20;
let c: string = '#000000'

function getRandomColor(m: string) {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function drawAndMultiply(n: number, m: string) {
    let f: number = 100;
    let g: number = 0;
    let u: number = 400;
    let j: number = 400;
    for (let i: number = 0; i <= 20; i++) {
        ctx.fillStyle = getRandomColor();
        

        ctx.fillRect(f, g, u, j);
        f += 10;
        g += 10;
        u -= 20;
        j -= 20;
    }

}



drawAndMultiply(s,c); 
ctx.fillStyle = 'black';
ctx.fillRect(canvas.width/2-(s/2),canvas.height/2-(s/2),s,s);
