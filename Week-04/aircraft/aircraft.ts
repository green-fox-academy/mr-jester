'use strict';
export class aircraft {
    protected model: string;
    protected ammo: number;
    protected baseDamage: number;
    protected maxAmmo: number;
    public firstPriority: boolean;
    public seconPriority: boolean;
    constructor(baseDamage: number, maxAmmo: number, firstPriority: boolean, seconPriority: boolean) {
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
        this.firstPriority = firstPriority;
        this.seconPriority = seconPriority;
    }
    fight(): number {
        console.log(this.baseDamage * this.maxAmmo);
        return this.baseDamage*this.maxAmmo;
    }
    refill(n: number): number {
    
        this.ammo = this.maxAmmo;

        console.log(this.ammo, n - this.maxAmmo);
        return this.maxAmmo;
    }
}
