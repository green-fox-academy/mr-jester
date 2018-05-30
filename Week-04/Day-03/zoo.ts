'use strict';
abstract class animal {
 species: string;
 age: number;
 gender: string;
 ferocity: boolean;
 constructor(spicies: string, age: number, gender: string, ferocity: boolean) {
  this.species = spicies;
  this.age = age;
  this.gender = gender;
  this.ferocity = ferocity;
 }
 eat(): void {
  console.log('Im not hungary anymore');
 }
 drink(): void {
  console.log('I feel renewed');
 }
}
interface breeding {
 method: string;
 breedingMethod(): void
}
class reptile extends animal implements breeding {
 method: string;
 constructor(spicies: string, age: number, gender: string, ferocity: boolean, method: string) {
  super(spicies, age, gender, ferocity);
  this.method = method;
 }
 getName(): string {
  return this.species;
 }
 breedingMethod() {
  return this.method;
 }
}

class birds extends animal implements breeding {
 method: string;
 constructor(spicies: string, age: number, gender: string, ferocity: boolean, method: string) {
  super(spicies, age, gender, ferocity)
  this.method = method
 }
 getName(): string {
  return this.species;
 }
 breedingMethod() {
  return this.method;
 }
}

class mammals extends animal implements breeding {
 method: string;
 constructor(spicies: string, age: number, gender: string, ferocity: boolean, method: string) {
  super(spicies, age, gender, ferocity);
  this.method = method;
 }
 getName(): string {
  return this.species;
 }
 breedingMethod(): string {
  return this.method;
 }
}
const aligator = new reptile('aligator', 13, 'male', true, 'laying eggs');
const koala = new mammals('koala', 5, 'female', false, 'delivering babies');
const parrot = new birds('parrot', 14, 'female', false, 'laying eggs');
console.log(aligator.getName() + " is breeding by " + aligator.breedingMethod());
console.log(koala.getName() + " is breeding by " + koala.breedingMethod());
console.log(parrot.getName() + " is breeding by " + parrot.breedingMethod());



