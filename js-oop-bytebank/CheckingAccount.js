import {Client} from './Client.js'

export class CheckingAccount {
  agency
  _client

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

  _balance = 0

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
