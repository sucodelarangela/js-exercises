console.log('Working with lists')
const salvador = 'Salvador'
const saoPaulo = 'São Paulo'
const rioDeJaneiro = 'Rio de Janeiro'
const saoLuis = 'São Luís'
console.log(salvador, saoPaulo, rioDeJaneiro, saoLuis)
// This variables could be puit in a list
const cityList = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro',
  'São Luís'
)
// Adding new items in the end of the list
cityList.push('Curitiba')
console.log('Possible destinies:')
console.log(cityList)

/* Removing items from the list, for instance, 'São Paulo'
  Lists always start from index 0
  (from this item index, delete this number of items) */
cityList.splice(1, 1)
