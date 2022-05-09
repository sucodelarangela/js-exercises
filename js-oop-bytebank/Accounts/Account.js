// Abstract class: it works only for inheritance and never to be instanced
export class Account {
  constructor(openingBalance, client, agency) {
    // avoiding instances of Account
    if (this.constructor == Account) {
      throw new Error(
        'Você não deveria instanciar diretamente um objeto do tipo Conta.'
      );
    }

    this._balance = openingBalance;
    this._client = client;
    this._agency = agency;
  }

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }

  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  // Abstract method
  withdraw(value) {
    // since the withdraw() method is planned to be extended and overwritten in each type of class (because every type of account has different tax values, in our case), we create the method with an empty block of code. This is called "abstract method"
    throw new Error('O método Sacar da conta é abstrato.');
  }

  _withdraw(value, tax) {
    const withdrawal = tax * value;
    if (this._balance >= withdrawal) {
      this._balance -= withdrawal;
      return withdrawal;
    }

    return 0; // if the balance is under the withdrawal value, returns 0
  }

  deposit(value) {
    if (value < 0) return;
    this._balance += value;
  }

  transfer(value, account) {
    const withdrawal = this.withdraw(value);
    account.deposit(withdrawal);
  }
}
