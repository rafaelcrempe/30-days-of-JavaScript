import countries from "../countries.js";
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Find the total price of products by chaining two or more array iterators
// (eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice = products
  .map((product) => product.price)
  .filter((price) => typeof price === "number")
  .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);

// 2. Find the sum of price of products using only reduce.

const totalPriceOnlyReduce = products.reduce((sum, product) => {
  const price = product.price;
  return typeof price === "number" ? sum + price : sum;
}, 0);

console.log(totalPriceOnlyReduce);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern

function categorizeCountries(category) {
  return countries.filter((country) => country.includes(category));
}

console.log(categorizeCountries('land'));

// 4. Create a function which return an array of objects, which is the letter and 
// the number of times the letter use to start with a name of a country.

function countingLetters(){
   const countMap = {};
  
  countries.forEach(country => {
    const firstLetter = country[0];
    countMap[firstLetter] = (countMap[firstLetter] || 0) + 1;
  });
  
  const result = Object.keys(countMap).map(letter => ({
    letter: letter,
    count: countMap[letter]
  }));
  
  return result;
}

console.log(countingLetters());

// 5. Declare a getFirstTenCountries function and return an array of ten countries. 
// Use different functional programming to work on the countries.js array

function getFirstTenCountries() {
  return countries.reduce((acc, country, index) => {
    if (index < 10) acc.push(country);
    return acc;
  }, []);
}

console.log(getFirstTenCountries());

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries() {
  return countries.reduce((acc, country, index, arr) => {
    if (index >= arr.length - 10) acc.push(country);
    return acc;
  }, []);
}

// 7. Find out which letter is used many times as initial for a country name from the countries array 
// (eg. Finland, Fiji, France etc)

const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia',
  'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

function mostFrequentInitial(countriesArray) {

  const countMap = countriesArray.reduce((acc, country) => {
    const letter = country[0];
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(countMap));

  const mostFrequentLetters = Object.keys(countMap).filter(
    letter => countMap[letter] === maxCount
  );

  return {
    letters: mostFrequentLetters,
    count: maxCount
  };
}

console.log(mostFrequentInitial(countries));
