'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//function total() {

function leftSide() {
    let x: number = 0;
    let y: number = 200;
    let z: number = 5;
    for (let i: number = 0; i < 16; i++) {
        ctx.strokeStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, y + z);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(300, y - z);
        ctx.stroke();
        x += 20;
        z += 14;
    }
}
function rightSide() {
    let a: number = 600;
    let b: number = 200;
    let c: number = 5;
    for (let j: number = 0; j < 16; j++) {
        ctx.strokeStyle = "pink";
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(300, b + c);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(a, b);
        ctx.lineTo(300, b - c);
        ctx.stroke();
        a -= 20;
        c += 14;
    }
}
leftSide();
rightSide();