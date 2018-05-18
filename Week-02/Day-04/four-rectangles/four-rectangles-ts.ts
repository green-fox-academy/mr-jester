'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.
let x: number = Math.floor((Math.random() * 100) + 1);
let y: number = Math.floor((Math.random() * 100) + 1);
let z: number = Math.floor((Math.random() * 100) + 1);
let a: number = Math.floor((Math.random() * 100) + 1);

function getRandomColor() {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function drawandMultiply(n: number, m: number, w: number, h: number) {

    for (let i: number = 0; i <= 3; i++) {
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(n, m, w, h);
        ctx.stroke();
        m = Math.floor((Math.random() * 100) + 1);
        n = Math.floor((Math.random() * 100) + 1);
        h = Math.floor((Math.random() * 100) + 1);
        w = Math.floor((Math.random() * 100) + 1);
    }
}


drawandMultiply(x, y, z, a);
