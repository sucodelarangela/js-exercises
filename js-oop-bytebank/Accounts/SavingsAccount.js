import {Account} from './Account.js';

export class SavingsAccount extends Account {
  constructor(openingBalance, client, agency) {
    super(openingBalance, client, agency);
  }

  withdraw(value) {
    let tax = 1.02;
    // overwriting the method from the parent class
    return super._withdraw(value, tax); // or this._withdraw
  }
}
