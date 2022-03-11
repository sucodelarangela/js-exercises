// Step1 - Declaring our first client.
/*

const client1Name = 'Angela'
const client1CPF = 11122233399
const client1Agency = 1001
const client1Balance = 0

*/
// Step1.1 - Declaring a client like this requires a lot of code repetition, which is not recommended. To avoid this, we can use CLASSES to interact with these objects and create as many clients as we want from a single piece of code. CLASSES can have attributes (properties/variables) and methods (or functions)
class Client {
  name
  rg
  cpf
  agency
  balance
}

// Step1.2 - Create a new client (we call it "new instance")
const client1 = new Client()
const client2 = new Client()

client1.name = 'Angela'
client1.rg = 123456789
client1.cpf = 11122233399
client1.agency = 1001
client1.balance = 0

client2.name = 'Tereza'
client2.cpf = 99988877766
client2.agency = 1001
client2.balance = 0

console.log(client1, client2)
