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
  cpf
}

// Step 2 - Create a checking account class. Then we'll get agency and balance and put them inside this new class
class CheckingAccount {
  agency
  // #balance = 0 Proposal for private fields available in https://github.com/tc39/proposal-class-fields#private-fields (still not implemented)
  // It's a good practice to declare a private field using '_', even though it'll not bee really private. But if you find a field like this, you should understand it must not be altered in any circunstances outside the class context
  _balance = 0

  withdraw(value) {
    if (this._balance >= value) {
      this._balance -= value
      // Step3.1 - Return the value so we can show them in the console log after the withdrawal
      // The return must always come in the end of the block because it acts like a break, avoiding the rest of the function to run
      return value
    }
  }

  deposit(value) {
    // Step3.2 - A better way to make validations is to declare everything you DON'T want to happen and IF everything passes, then we make the deposit. In this case, IF the VALUE is LESS THAN 0, we don't want to return anything, we will break that function at that point and after that validation, we can authorize the deposit. This method is called EARLY RETURN. Also, if the code block in one line only, it's not necessary to use {}, we can write the code this way:
    if (value < 0) return
    this._balance += value
  }
}

// Step1.2 - Create a new client (we call it "new instance")

const client1 = new Client()
client1.name = 'Angela'
client1.cpf = 11122233399

const client2 = new Client()
client2.name = 'Tereza'
client2.cpf = 99988877766

// Step 2.1 - Create a new checking account
const checkingAccountAngela = new CheckingAccount()
checkingAccountAngela._balance = 0
checkingAccountAngela.agency = 1001
// Step 2.2 - Simulate a deposit
checkingAccountAngela.deposit(100)
checkingAccountAngela.deposit(200)
// Step 2.3 - Simulate a withdrawal
/*
let withdrawalValue = 200
if (checkingAccountAngela.balance >= withdrawalValue) {
  checkingAccountAngela.balance -= withdrawalValue
}
console.log(checkingAccountAngela.balance)
*/
// We can (and must) declare these deposit and withdrawal functions inside the scope of the class so we can avoid repetition of them for each client

// Step2.4 - Execute withdrawal:
// Step3 - To return the value of the withdrawal to the client, we must save tits value inside a variable and, then, we must use a return inside the class method. If we don't use the return, the console log below will return 'undefined'
const withdrawal = checkingAccountAngela.withdraw(50)
console.log(withdrawal)
console.log(checkingAccountAngela)
