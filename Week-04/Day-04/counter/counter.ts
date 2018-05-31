'use strict'

export function letterCounter(text: string): object {
    let counter: object = {};
    for (let i: number = 0; i < text.length; i++) {
        let letter = text[i];
        if (counter[letter]) {
            counter[letter]++;
        } else {
            counter[letter] = 1
        }
    }
    return counter
}
