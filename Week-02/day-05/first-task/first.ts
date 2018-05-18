'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

   function upperSide() {
        let x: number = 100;
        let y: number = 0;
        let z: number = 5;
        for (let i: number = 0; i < 35; i++) {
            ctx.strokeStyle = "pink";
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo( 600,  y+z);
            ctx.stroke();
            x += 20;
            z+=20;
        }
}
function lowerSide (){
    let x: number = 500;
    let y: number = 400;
    let z: number = 5;
    for (let j: number = 0; j < 35; j++) {
        ctx.strokeStyle = "orange";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo( 0, y-z);
        ctx.stroke();
        x -= 20;
        z+=20;
    }
}
upperSide ();
lowerSide ();