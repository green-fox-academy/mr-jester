import {Animal} from './animal';

export class Parrot extends Animal {
  constructor (){
    super ('parrot',Math.floor((Math.random()*10)+4),false);
  }
}
