console.log('Working with conditionals')
const cityList = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro',
  'São Luís'
)
console.log(cityList)

const buyerAge = 18
const isWithSomeoneOfAge = true
const hasBoughtATicket = true

// if (buyerAge >= 18) {
//   console.log('Buyer is of age')
//   cityList.splice(1, 1)
// } else if (isWithSomeoneOfAge) {
//   console.log('Buyer is travelling with someone of age')
//   cityList.splice(1, 1)
// } else {
//   console.log('Buyer is under age and cannot buy a ticket')
// }
// console.log('Possible destinies:')
// console.log(cityList)

// Booleans
console.log(buyerAge > 18)
console.log(buyerAge < 18)
console.log(buyerAge <= 18)
console.log(buyerAge >= 18)
console.log(buyerAge == 18)

if (buyerAge >= 18 || isWithSomeoneOfAge) {
  cityList.splice(1, 1)
} else {
  console.log('Buyer is under age and cannot buy a ticket')
}
console.log('Possible destinies:')
console.log(cityList)

console.log('Boarding:')
if (buyerAge >= 18 && hasBoughtATicket) {
  console.log('Have a nice trip!')
} else {
  console.log("You're not allowed to board.")
}
