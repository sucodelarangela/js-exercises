import {Account} from './Account.js';

export class SalaryAccount extends Account {
  constructor(client) {
    super(0, client, 100);
  }

  withdraw(value) {
    let tax = 1.01;
    // overwriting the method from the parent class
    return super._withdraw(value, tax); // or this._withdraw
  }
}
