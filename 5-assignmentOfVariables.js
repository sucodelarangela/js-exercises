console.log('Working with assignment of variables')
const age = 37
// const name = 'Angela'
let name = 'Angela'
const surname = 'Caldas'
console.log(name + surname)
console.log(name, surname)
console.log(name + ' ' + surname)
// Template string
console.log(`My full name is ${name} ${surname}`)

// name = name + surname
// console.log(`My full name is ${name}`)
// The code above returns an error because we are trying to assign a new value to a constant, so we need to change 'const' to 'let' and then try again:
name = name + ' ' + surname
console.log(`My full name is ${name}`)

//Ideally we should always use 'const' unless we have specific goals with 'let'

let contador = 0
contador = contador + 1

let newAge // declaring a variable
newAge = 37 // giving it a value
newAge = newAge + 1
console.log(newAge)
