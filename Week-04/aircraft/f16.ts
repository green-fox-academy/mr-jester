'use strict';
import { aircraft } from './aircraft';

export class F16 extends aircraft {
    constructor() {
        super(30, 8, false, false);
    }
}
