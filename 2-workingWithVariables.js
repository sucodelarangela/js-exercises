// Typo on purpose to understand errors on console:
// JS is case-sensitive
// Console.log('Working with variables')
console.log('Working with variables')

// Using the variable without specifying its type will make the variable have global scope, so be careful with it
idade = 29
Idade = 30
console.log(idade)
console.log(Idade)

// Ideally, you should always declare a variable
const name = 'Angela'
let year = 2022

console.log(name + ' in ' + year)
