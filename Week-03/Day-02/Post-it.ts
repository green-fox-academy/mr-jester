'use strict';
export class postIt {
    background: string;
    text: string;
    textColor: string;

constructor(text:string) {
    this.text = text;
        if (text==='Idea 1') {
            this.background = 'orange';
            this.textColor = 'blue';
        }
        else if (text === 'Awesome') {
            this.background = 'pink';
            this.textColor = 'black'; 
        }
        else if (text === 'Superb!') {
            this.background = 'yellow';
            this.textColor = 'green'; 
        }
}
}
let text1 = new postIt('Idea 1');
let text2 = new postIt ('Awesome');
let text3 = new postIt ('Superb!');
console.log (text1);