export class Authentication {
  static login(employee, password) {
    return employee.password == password;
  }
}
