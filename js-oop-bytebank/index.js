// After saving each class in an unique file, we'll have inside index.js only the executions. And to make it work, we must create modules and import them inside this file
import {Client} from './Client.js';
import {CheckingAccount} from './CheckingAccount.js';
import {SavingsAccount} from './SavingsAccount.js';
import {Account} from './Account.js';

const client1 = new Client('Angela', 11122233399);
// client1.name = 'Angela'
// client1.cpf = 11122233399

const account1 = new CheckingAccount(client1, 1001);
const savingsAccount1 = new SavingsAccount(50, client1, 1001);
const account = new Account(0, client1, 1001);

console.log(account);

// Since we're not linking our script to any HTML files, we must config our Node.js to understand index.js is a module. To run modules using NodeJs, we must initialize it with the command 'npm init' and then add the setup inside the 'package.json' file
