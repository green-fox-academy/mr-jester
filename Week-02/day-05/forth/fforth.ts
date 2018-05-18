'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let size:number = 100;
let x :number = 100;
let y: number = 100;

canvas.beginPath();
canvas.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));

for (let side:number =1; side < 7; side++) {
canvas.lineTo(x + size * Math.cos(side * 2 * Math.PI / 6), y + size * Math.sin(side * 2 * Math.PI / 6));
}

canvas.fillStyle = "#333333";
canvas.fill();