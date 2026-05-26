import countries_data from '../data/countries_data.js';

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population

const countriesByName = [...countries_data].sort((a, b) => a.name.localeCompare(b.name));
console.log(countriesByName);

const countriesWithCapital = countries_data.filter(c => c.capital);
const sortedByCapital = [...countriesWithCapital].sort((a, b) => a.capital.localeCompare(b.capital));
console.log(sortedByCapital);

const countriesByPopulation = [...countries_data].sort((a, b) => a.population - b.population);
console.log(countriesByPopulation);

// 2. Find the 10 most spoken languages

