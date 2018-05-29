import { aircraft } from './aircraft';
import { F16 } from './f16';
import { F35 } from './f35';
import { F14 } from './f14'

class carrier {
  protected totalAmmo: number;
  protected aircarft: aircraft[];
  protected health: number;
  constructor(totalAmmo: number = 10000, health: number = 100000) {
    this.aircarft = [];
    this.health = health;
    this.totalAmmo = totalAmmo;
  }

  aircraftAdd() {
    for (let i: number = 0; i < 10; i++) {
      this.aircarft.push(new F14, new F14, new F14);
      this.aircarft.push(new F16, new F16);
      this.aircarft.push(new F35, new F35);
    }
  }

  fight() {
    for (let i: number = 0; i < this.aircarft.length; i++) {
      this.health -= this.aircarft[i].fight();
    }

  }

  refill() {
    for (let i: number = 0; i < this.aircarft.length; i++) {
      if (this.aircarft[i].firstPriority === true, this.aircarft[i].seconPriority === true) {
        this.totalAmmo -= this.aircarft[i].refill(this.totalAmmo);
      }
      else if (this.aircarft[i].firstPriority === true, this.aircarft[i].seconPriority === false) {
        this.totalAmmo -= this.aircarft[i].refill(this.totalAmmo);
      }
      else if (this.aircarft[i].firstPriority === false, this.aircarft[i].seconPriority === false) {
        this.totalAmmo -= this.aircarft[i].refill(this.totalAmmo);
      }
    }
  }
}



