import {Animal} from './animal';

export class Cat extends Animal {
  constructor (){
    super ('cat',Math.floor(Math.random()*6),false);
  }
}
