const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 2. Define a callback function before you use it in forEach, map, filter or reduce.

function saudacao(nome, callback) {
    console.log("Olá " + nome);
    callback();
}

function despedida(){
    console.log("Até logo!");}

saudacao("Rafael", despedida);

// 3. Use forEach to console.log each country in the countries array.

countries.forEach(country => {console.log(country)})

// 4. Use forEach to console.log each name in the names array.

names.forEach(name => {console.log(name)})

// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach(number => {console.log(number)})

// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const upperCaseCountries = countries.map(country => country.toUpperCase())
console.log(upperCaseCountries)

// 7. Use map to create an array of countries length from countries array.

const countriesLenght = countries.map(country => country.length)
console.log(countriesLenght)

// 8. Use map to create a new array by changing each number to square in the numbers array.

const squareNumbers = numbers.map(num => num * num)
console.log(squareNumbers)

// 9. Use map to change to each name to uppercase in the names array

const namesUpperCase = names.map(name => name.toUpperCase())
console.log(namesUpperCase)

// 10. Use map to map the products array to its corresponding prices.

const prices = products.map(product => product.price);
console.log(prices);

// 11. Use filter to filter out countries containing land.

const countriesWithLand = countries.filter(country => country.includes('land'))
console.log(countriesWithLand)

// 12. Use filter to filter out countries having six character.

const countriesWithSixCharacters = countries.filter(country => country.length === 6)
console.log(countriesWithSixCharacters)

// 13. Use filter to filter out countries containing six letters and more in the country array.

const countriesWithSixorMoreCharacters = countries.filter(country => country.length >= 6)
console.log(countriesWithSixorMoreCharacters)

// 14. Use filter to filter out country start with 'E';

const countriesStartsWithE = countries.filter(country => country.startsWith('E'))
console.log(countriesStartsWithE)

// 15. Use filter to filter out only prices with values.

const priceWithValue = products.filter(product => typeof product.price === 'number')
console.log(priceWithValue)

// 16. Declare a function called getStringLists which takes an array as a parameter and then 
// returns an array only with string items.

function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

// 17. Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum)

// 18. Use reduce to concatenate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const allCountries = ['Estonia', ...countries];

const sentence = allCountries.reduce((acc, country, index, arr) => {
  if (index === 0) return country;
  if (index === arr.length - 1) return `${acc} and ${country}`;
  return `${acc}, ${country}`;
}, '') + ' are north European countries';

console.log(sentence);

// 19. Use some to check if some names' length greater than seven in names array

const namesGreaterThanSeven = names.some(name => name.length > 7)
console.log(namesGreaterThanSeven)

// 20. Use every to check if all the countries contain the word land

const allCountriesContainLand = countries.every(country => country.includes('land'))
console.log(allCountriesContainLand)

// 21. Use find to find the first country containing only six letters in the countries array.

const countryWithSixLetters = countries.find(country => country.length === 6)
console.log(countryWithSixLetters)

// 22. Use findIndex to find the position of the first country containing only six letters in the countries array

const indexOfCountryWithSixLetters = countries.findIndex(country => country.length === 6)
console.log(indexOfCountryWithSixLetters)

// 23. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const positionOfNorway = countries.findIndex(country => country === 'Norway')
console.log(positionOfNorway)

// 24. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.


const positionOfRussia = countries.findIndex(country => country === 'Russia')
console.log(positionOfRussia)

