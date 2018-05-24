function numAdder(num: number): number {
    if (num === 1) {
        return 1;
    }
    else {
        return num + numAdder(num - 1);
    }
}
console.log('The sum of all evil is', numAdder(13));