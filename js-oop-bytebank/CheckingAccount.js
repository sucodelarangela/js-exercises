import {Client} from './Client.js'

export class CheckingAccount {
  static numberOfAccounts = 0
  // We use static when declaring a parameter that is common to all instances of the class, and not particular of each one. In our case, every time a new instance of CheckingAccount is created, this variable will be incremented, because it is not particular of one CheckingAccount but of all of them.
  // agency
  // _client
  // _balance = 0
  // properties above will be initiallized in the constructor

  constructor(client, agency) {
    this.agency = agency
    this._client = client
    this._balance = 0
    CheckingAccount.numberOfAccounts += 1
  }

  // By using set, we can validate that the new client must only be a class Client object. This way, we cannot set any value for a client on index.js, only instances of Client. It works as a protection
  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue
    }
  }

  // By using get, we can have access to the client info just like we did with the value returned from withdraw
  get client() {
    return this._client
  }

  // In this case, if we use only a getter and we try to change the balance through index.js, the console will warn us that is not possible to change the value of a class that only has getter and no setter
  get balance() {
    return this._balance
  }

  withdraw(value) {
    if (this._balance >= value) {
      this._balance -= value
      return value
    }
  }

  deposit(value) {
    if (value < 0) return
    this._balance += value
  }

  transfer(value, account) {
    const withdrawal = this.withdraw(value)
    account.deposit(withdrawal)
    // We must be careful when making modifications in objects inside the methods. For instance, if we add here:
    // "account.city = 'São Paulo"
    // The original object Client which will be referenced here will add this modifications.
  }
}
