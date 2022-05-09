/* 
  Being authenticable means having the "authenticate" method.
*/

export class Authentication {
  static login(authenticable, password) {
    if (Authentication.isAuthenticable(authenticable)) {
      return authenticable.authenticate(password);
    }
    return false;
  }

  static isAuthenticable(authenticable) {
    return (
      'authenticate' in authenticable &&
      authenticable.authenticate instanceof Function
    );
  }
}
