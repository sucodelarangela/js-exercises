/* 
  Being authenticable means having the "authenticate" method.
*/

export class Authentication {
  static login(authenticable, password) {
    return authenticable.authenticate(password);
  }
}
