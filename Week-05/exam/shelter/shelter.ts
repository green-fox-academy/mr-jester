import { Animal } from './animal';
import { Dog } from './dog';
import { Cat } from './cat';
import { Parrot } from './parrot';

class Shelter {
  budget: number;
  animalsList: Animal[];
  adoptorsList: string[];
  constructor() {
    this.animalsList = [];
    this.adoptorsList = [];
    this.budget = 50;
  }
  rescue(animal: Animal): number {
    this.animalsList.push(animal);
    return this.animalsList.length;
  }
  doctor() {
    this.animalsList.sort(function (a, b) { return (a === b) ? 0 : a ? -1 : 1 });
    if (this.budget < this.animalsList[0].healthCost) {
      throw ("Not enough money :(")
    }
    else if (!this.animalsList[0].isHealthy) {
      this.animalsList[0].heal();
      this.budget -= this.animalsList[0].healthCost;
      return 1;
    } else {
      return 0;
    }
  }
  addAdopter(adopterName: string): void {
    this.adoptorsList.push(adopterName);
  }
  findOwner(): void {
    let healthyAnumals: Animal[] = []
    if (this.animalsList.length > 0 && this.adoptorsList.length > 0) {
      for (let i: number = 0; i < this.animalsList.length; i++) {
        if (this.animalsList[i].isAdoptable()) {
          healthyAnumals.push(this.animalsList[i]);
        }
      }
    }
    let adoptedAnimal: Animal = healthyAnumals[Math.floor(Math.random() * healthyAnumals.length)];
    let adoptors: string = this.adoptorsList[Math.floor(Math.random()) * this.adoptorsList.length];
    this.animalsList.splice(this.animalsList.indexOf(adoptedAnimal), 1);
    this.adoptorsList.splice(this.adoptorsList.indexOf(adoptors), 1);
  }
  earnDonation(amount: number): number {
    this.budget += amount;
    return this.budget;
  }
  toString() {
    console.log('Budget' + this.budget + ' €, There are ' + this.animalsList.length + ' animal(s) and ' + this.adoptorsList.length + ' potential adopter(s)');
    this.animalsList.forEach(element => {
      element.toString();
    })
  }
}

