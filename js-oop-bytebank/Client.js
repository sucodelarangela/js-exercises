export class Client {
  // name
  // _cpf
  // Those properties are unnecessarily declared outside the constructor so we can delete them from here (as they are initialized inside the constructor)

  get cpf() {
    return this._cpf;
  }

  constructor(name, cpf, password) {
    this.name = name;
    this._cpf = cpf;
    this._password = password;
  }

  authenticate() {
    return true;
  }
}

// By using the constructor function, we can attribute the name and the cpf of the client when creating a new client. And with only a getter, we avoid the possibility of changing the cpf number, because we are not giving any access for this to happen (we don't have a setter)
