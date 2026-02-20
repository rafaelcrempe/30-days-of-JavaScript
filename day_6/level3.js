const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
  'New Zealand',
  'Peru'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/* 1. Arrays are mutable. Create a copy of array which does not modify the original. 
Sort the copied array and store in a variable sortedCountries */

const sortedCountries = countries.sort()
console.log(sortedCountries)

// 2. Sort the webTechs array and mernStack array

const sortedWebTechs = webTechs.sort();
const sortedMernStack = mernStack.sort();

console.log(sortedWebTechs)
console.log(sortedMernStack)

// 3. Extract all the countries contain the word 'land' from the countries array and print it as array

const countriesWithLand = []

for(i=0; i < countries.length; i++) {
  
  if (countries[i].includes('land')) {
    countriesWithLand.push(countries[i])
  }
}

console.log(countriesWithLand);

// 4. Find the country containing the hightest number of characters in the countries array

let longestCountry = '';
let length = 0;

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > length) {
    length = countries[i].length;
    longestCountry = countries[i];
  }
}

// 5. Extract all the countries containing only four characters from the countries array and print it as array

let fourCharCountries= []

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    fourCharCountries.push(countries[i])
  }
}

if (fourCharCountries.length > 0) {
  console.log(fourCharCountries)
} else {
  console.log('There are no countries with only four characters in the array')
}

// 6. Extract all the countries containing two or more words from the countries array and print it as array

let multiWordCountries = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i].split(' ').length > 1) {
    multiWordCountries.push(countries[i])
  }
}

if (multiWordCountries.length > 0) {
  console.log('Countries with two or more words:', multiWordCountries);
} else {
  console.log('There are no countries with two or more words in the array')
}

// 7. Reverse the countries array and capitalize each country and stored it as an array

let reversedArray = countries.reverse()
let newCountriesArray = []

for (let i = 0; i < reversedArray.length; i++) {
  let capitalizedCountry = reversedArray[i].charAt(0).toUpperCase() + reversedArray[i].slice(1).toLowerCase();
  newCountriesArray.push(capitalizedCountry);
}

console.log(newCountriesArray)



