console.log('Working with loops')
const cityList = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro',
  'São Luís'
)
console.log(cityList)

const buyerAge = 17
const isWithSomeoneOfAge = true
let hasBoughtATicket = false
const destiny = 'Rio de Janeiro'
const canBuy = buyerAge >= 18 || isWithSomeoneOfAge == true

let counter = 0
let destinyExists = false

/* while (counter < 4) {
  if (cityList[counter] == destiny) {
    console.log('Destiny found.')
    destinyExists = true
    break
  }
  counter += 1
} */

for (let i = 0; i < 4; i++) {
  if (cityList[i] == destiny) {
    console.log('Destiny found.')
    destinyExists = true
  }
}

if (canBuy && destinyExists) {
  cityList.splice(2, 1)
  console.log('Have a nice trip!')
} else {
  console.log('Sorry, something went wrong...')
}
console.log('Available destinies:')
console.log(cityList)
