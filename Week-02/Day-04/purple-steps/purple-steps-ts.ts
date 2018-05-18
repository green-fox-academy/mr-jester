'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let c1: number = 0;
let c2: number = 0;
const c3: number = 40;
const c4: number = 40;
function drawandMultiply(n: number, m: number, w: number, h: number) {
let n:number = 0;
let m:number = 0;
let w: number = 40;
let h: number = 40;
    for (let i: number = 0; i <= 5; i++) {
        ctx.fillStyle = 'purple';
        ctx.fillRect(n, m, w, h);
       // ctx.stroke();

        n= n+80;
        
    }
}

drawandMultiply(c1, c2, c3, c4);