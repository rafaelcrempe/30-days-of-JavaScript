const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. Create an empty set

const emptySet = new Set();

// 2. Create a set containing 0 to 10 using loop

const setNumeros = new Set();

for (let i = 0; i <= 10; i++) {
    setNumeros.add(i);    
}

console.log(setNumeros)

// 3. Remove an element from a set

setNumeros.delete(0)

console.log(setNumeros)

// 4. Clear a set

setNumeros.clear()

// 5. Create a set of 5 string elements from array

const stringArray = ["apple", "banana", "orange", "grape", "strawberry"];
const setStrings = new Set(stringArray);

console.log(setStrings);

// 6. Create a map of countries and number of characters of a country

const mapCountries = new Map();

for (let country of countries) {
  mapCountries.set(country, country.length);
}

console.log(mapCountries);
