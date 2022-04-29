import {Account} from './Account.js'

export class CheckingAccount extends Account {
  static numberOfAccounts = 0

  constructor(client, agency) {
    super(0, client, agency)
    CheckingAccount.numberOfAccounts += 1
  }

  // when declaring the method "withdraw" inside this class, it overwrites the method that was being extended from the Account class and so we can apply small differences to methods from each class. In the example below, we added a tax to withdrawals from the checking account

  withdraw(value) {
    let tax = 1.1

    // overwriting the method from the parent class
    return super._withdraw(value, tax) // or this._withdraw
  }
}

// extends uses everything that is inside Account class
// super() calls the methods from the parent class (in this case, Account class)
