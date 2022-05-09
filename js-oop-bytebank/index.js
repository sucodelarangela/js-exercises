import {Client} from './Client.js';
import {Manager} from './Employees/Manager.js';
import {Director} from './Employees/Director.js';
import {Authentication} from './Authentication.js';

const director = new Director('Rodrigo', 10000, 12345678900);
director.createPassword('123456789');
const manager = new Manager('Ricardo', 5000, 78945612301);
manager.createPassword('123');
const client = new Client('Laís', 45678912302, '456');

const directorIsLogged = Authentication.login(director, '123456789');
const managerIsLogged = Authentication.login(manager, '123');
const clientIsLogged = Authentication.login(client, '456');

console.log(managerIsLogged, directorIsLogged, clientIsLogged);
