'use strict';
export abstract class Animal {
  isHealthy: boolean;
  healthCost: number;
  name: string;
  adoptable: boolean;
  constructor(name: string, healthCost: number, isHealthy: boolean) {
    this.healthCost = healthCost;
    this.name = name;
    this.isHealthy = isHealthy;
  }
  heal(): void {
    this.isHealthy = true;
  }
  isAdoptable(): boolean {
    return this.isHealthy;
  }
  toString(): void {
    if (this.isAdoptable) {
    console.log(`${this.name}  is healthy and adoptable`);
    } else {
      console.log(`${this.name}  is not healthy  ${this.healthCost}  EUR, and not adoptable`);
    }
  }
}
