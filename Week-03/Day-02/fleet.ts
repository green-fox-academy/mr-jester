'use strict';
export { };

class Thing {
    public name: string;
    public completed: boolean;

    constructor(name: string) {
        this.name = name;
    }
    public complete() {
        this.completed = true;
    }
}

class Fleet {
    public things: Thing[];

    constructor() {
        this.things = [];


    }
    add(thing: Thing) {

        this.things.push(thing);
    }
}
let fleet = new Fleet();
let milk = new Thing('Get Milk');
let Remove = new Thing('Remove the obstacles');
let standUp = new Thing('Stand up');
let lunch = new Thing('Eat lunch');
standUp.complete();
lunch.complete();

fleet.add(milk);
fleet.add(Remove);
fleet.add(standUp);
fleet.add(lunch);

//console.log (fleet);
for (let i: number = 0; i < fleet.things.length; i++) {
    if (fleet.things[i].completed) {
        console.log(`${i + 1} [x] ${fleet.things[i].name}`)
    }
    else {
        console.log(`${i + 1} [ ] ${fleet.things[i].name}`)
    }
}



//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */