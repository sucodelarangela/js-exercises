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

  withdraw(value) {
    let tax = 1;
    return this._withdraw(value, tax);
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
