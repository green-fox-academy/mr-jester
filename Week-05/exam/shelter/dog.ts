import {Animal} from './animal';

export class Dog extends Animal {
  constructor (){
    super ('dog',Math.floor((Math.random()*8)+1),false);
  }
}
