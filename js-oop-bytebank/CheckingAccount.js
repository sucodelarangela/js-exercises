export class CheckingAccount {
  agency
  client

  _balance = 0

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
