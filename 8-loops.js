console.log('Working with loops')
const cityList = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro',
  'São Luís'
)
console.log(cityList)

const buyerAge = 18
const isWithSomeoneOfAge = true
let hasBoughtATicket = false
const destiny = 'Salvador'
const canBuy = buyerAge >= 18 || isWithSomeoneOfAge == true

let counter = 0
while (counter < 4) {
  if (cityList[counter] == destiny) {
    console.log(cityList[counter])
  } else {
    console.log('Destiny is not available')
  }
  counter += 1
}

console.log('Boarding: \n\n')
if (buyerAge >= 18 || isWithSomeoneOfAge) {
  cityList.splice(2, 1)
  hasBoughtATicket = true
} else {
  console.log('Buyer is under age and cannot buy a ticket')
  hasBoughtATicket = false
}
console.log('Possible destinies:')
console.log(cityList)
