'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
//ctx.fillStyle = '#f00';
function hexa1() {
    let x: number = 180;
    let y: number = 10;
    let z: number = 0;
    let w: number = 0;
    for (let j: number = 0; j < 4; j++) {
  

    for (let i: number = 0; i < 4; i++) {
        
        ctx.beginPath();
        ctx.moveTo((x - w), (y + z));
        ctx.lineTo((x + 20 - w), (y + z));
        ctx.lineTo((x + 30 - w), (z + y + 20));
        ctx.lineTo((x + 20 - w), (z + y + 40));
        ctx.lineTo((x - w), (z + y + 40));
        ctx.lineTo((x - 10 - w), (z + y + 20));
        ctx.lineTo(x - w, (z + y))
        ctx.closePath();
        ctx.stroke();
        w -= 30;
        z += 20;
    }
    console.log (x);
    x -= 150;
    y -= 60;    
}

    
}
/*ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(250, 0);
ctx.lineTo(275, 50);
ctx.lineTo(250, 100);
ctx.lineTo(200, 100);
ctx.lineTo(175, 50);
ctx.lineTo(200, 0)
ctx.closePath();
ctx.stroke();*/
hexa1();