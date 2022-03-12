// After saving each class in an unique file, we'll have inside index.js only the executions. And to make it work, we must create modules and import them inside this file
import {Client} from './Client.js'
import {CheckingAccount} from './CheckingAccount.js'

const client1 = new Client()
client1.name = 'Angela'
client1.cpf = 11122233399

const client2 = new Client()
client2.name = 'Tereza'
client2.cpf = 99988877766

const account1 = new CheckingAccount()
account1._balance = 0
account1.agency = 1001
account1.client = client1
account1.deposit(500)
console.log(account1)

// This is another way of creating a new client, but it's not a good practice. It's better to create a new client with private fields
const account2 = new CheckingAccount()
account2.client = client2
account2.agency = 102
account1.transfer(200, account2)

/*
account2.client = new Client()
account2.client.name = 'Tereza'
account2.client.cpf = 99988877766
account2.agency = 102
account1.transfer(200, account2)
*/
console.log(account2)
console.log(account1)

// Since we're not linking our script to any HTML files, we must config our Node.js to understand index.js is a module. To run modules using NodeJs, we must initialize it with the command 'npm init' and then add the setup inside the 'package.json' file
