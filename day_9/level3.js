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

const languageCount = {};

countries_data.forEach((country) => {
  country.languages.forEach((language) => {
    languageCount[language] = (languageCount[language] || 0) + 1;
  });
});

const sortedLanguages = Object.entries(languageCount)
  .map(([language, count]) => ({
    language,
    count,
  }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 10);

console.log(sortedLanguages);

// 3. Use countries_data.js file create a function which create the ten most populated countries

function getTenMostPopulatedCountries(countries) {
  return countries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10)
    .map((country) => ({
      country: country.name,
      population: country.population,
    }));
}

const result = getTenMostPopulatedCountries(countries_data);
console.log(result);