import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  wallet = 0;

  constructor() { }

  get() {
    return this.wallet;
  }

  add(amount) {
    this.wallet += amount;
    this.wallet = Math.round(this.wallet * 100) / 100;
  }

  empty() {
    this.wallet = 0;
  }

  verify(amount) {
    if (this.wallet < amount) {
      alert('Not Enough Money');
    } else if (this.wallet > amount) {
      alert('To Much Money');
    } else {
      alert('OK');
    }
  }
}
