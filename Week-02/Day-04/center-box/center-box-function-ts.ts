'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
 let s:number = 100;
// let sS:number = s/2;
 function drawAndMultiply(n: number) {
  
    for (let i: number = 0; i <= 2; i++) {
        ctx.strokeStyle = 'red';
       
        ctx.strokeRect(canvas.width/2-(n/2),canvas.height/2-(n/2),n,n);
       n +=30;
    }
    
}
drawAndMultiply(s);