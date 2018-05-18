'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function getRandomColor() {
    let letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function drawRight() {
    let a: number = 400;
    let b: number = 400;
    let c: number = 200;
    let d: number = 0
    let z: number = 0
    let y: number = 0
    let x: number = 0;
    for (let i: number = 0; i < 19; i++) {
        ctx.strokeStyle = getRandomColor();
        ctx.beginPath();
        ctx.moveTo(a - y, b);
        ctx.lineTo((c - z), (d + x));
        ctx.stroke();
        z += 20;
        y += 40;
        x += 40;
    }
}
function drawLeft() {
    let a: number = 0;
    let b: number = 400;
    let c: number = 200;
    let d: number = 0
    let z: number = 0
    let y: number = 0
    let x: number = 0;
    for (let i: number = 0; i < 19; i++) {
        ctx.strokeStyle = getRandomColor();
        ctx.beginPath();
        ctx.moveTo(a + y, b);
        ctx.lineTo((c + z), (d + x));
        ctx.stroke();
        z += 20;
        y += 40;
        x += 40;
    }
}
function drawMiddle() {
    let a: number = 400;
    let b: number = 400;
    let c: number = 0;
    let d: number = 400;
    let z: number = 0
    let y: number = 0
    let x: number = 0;
    for (let i: number = 0; i < 10; i++) {
        ctx.strokeStyle = getRandomColor();
        ctx.beginPath();
        ctx.moveTo(a - z, b - y);
        ctx.lineTo((c +z), (d - y));
        ctx.stroke();
        z += 20;
        y += 40;
        x += 40;
    }
}

ctx.beginPath();
ctx.moveTo(0, 400);
ctx.lineTo(200, 0);
ctx.stroke();
drawLeft();
drawRight();
drawMiddle();
