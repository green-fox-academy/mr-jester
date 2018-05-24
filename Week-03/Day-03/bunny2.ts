'use strict'
export { };

function littleDevils(bunny: number): number {
    let ears: number;
    if (bunny === 1) {
        return 2;
    }
    else if (bunny % 2 !== 0 && bunny !== 1) {
        return ears = 2 + littleDevils(bunny - 1);

    }
    else {
        return ears = 3 + littleDevils(bunny - 1);

    }

}
console.log('I can see', littleDevils(3), 'ears');