import {Account} from './Account.js'
import {Client} from './Client.js'

export class CheckingAccount extends Account {
  static numberOfAccounts = 0

  constructor(client, agency) {
    super(0, client, agency)
    CheckingAccount.numberOfAccounts += 1
  }
}

// extends uses everything that is inside Account class
// super() calls the methods from the parent class (in this case, Account class)
