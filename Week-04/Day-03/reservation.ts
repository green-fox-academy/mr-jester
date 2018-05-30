'use strict'

interface Reservation {
  getDowBooking(n: number): string
  getCodeBooking(n: number): string
}

class Resrvator implements Reservation {
  getCodeBooking(): string {
    let text: string = '';
    let possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i: number = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  getDowBooking(): any {
    let text: string[] = [];
    let possible: string[] = ['SAT', 'SUN', 'MON', 'TUS', 'WED', 'THU', 'FRI'];
    text.push(possible[Math.floor(Math.random() * possible.length)]);
    return text;
  }
}

let reservation = new Resrvator();
for (let i: number = 0; i < 10; i++) {
  console.log('Booking# ' + reservation.getCodeBooking() + ' for ' + reservation.getDowBooking());
}
