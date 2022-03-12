export class Client {
  name
  _cpf

  get cpf() {
    return this._cpf
  }

  constructor(name, cpf) {
    this.name = name
    this._cpf = cpf
  }
}

// By using the constructor function, we can attribute the name and the cpf of the client when creating a new client. And with only a getter, we avoid the possibility of changing the cpf number, because we are not giving any access for this to happen (we don't have a setter)
