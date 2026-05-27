import countries_data from '../data/countries_data.js'

// 1. How many languages are there in the countries object file.

const uniqueLanguages = new Set();

for (const country of countries_data) {
  if (country.languages) {
    for (const lang of country.languages) {
      uniqueLanguages.add(lang);
    }
  }
}

console.log(`Unique languages: ${uniqueLanguages.size}`);

// 2. Use the countries data to find the 10 most spoken languages

const languageCount = new Map();

for (const country of countries_data) {
  if (country.languages) {
    for (const lang of country.languages) {
      languageCount.set(lang, (languageCount.get(lang) || 0) + 1);
    }
  }
}

const sortedLanguages = Array.from(languageCount.entries())
  .sort((a, b) => b[1] - a[1]);

const top10 = sortedLanguages.slice(0, 10);

console.log('\n10 most spoken languages:');
top10.forEach(([lang, count], index) => {
  console.log(`${index + 1}. ${lang}: spoken in ${count} countries`);
});