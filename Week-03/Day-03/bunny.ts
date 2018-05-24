// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
function littleDevils(bunny: number): number {
    let ears : number ;
    if (bunny === 1) {
        return 2;
    }
    else {
       return ears = 2 + littleDevils(bunny - 1);
    }
    
}
console.log('I can see', littleDevils(5), 'ears');