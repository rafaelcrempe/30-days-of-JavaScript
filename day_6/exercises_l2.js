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
  'Kenya'
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

// 1. Develop a small script which generate any number of characters random id

let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"

let id = ""
let idSize = Math.floor((Math.random() * 50) + 1)

for (let i = 0; i < idSize; i++) { 
        const random = Math.floor(Math.random() * char.length);
        id += char[random];
}

console.log(id)

// 2. Write a script which generates a random hexadecimal number.

  let hexdec = '';
    const hexIndex = '0123456789abcdef';

    for (let i = 0; i < Math.floor(Math.random() * 16); i++) {
        const random = Math.floor(Math.random() * hexIndex.length);
        hexdec += hexIndex[random];
    }

    console.log(`#${hexdec}`)

// 3. Write a script which generates a random rgb color number.

let num1 = Math.floor(Math.random() * 256)
let num2 = Math.floor(Math.random() * 256)
let num3 = Math.floor(Math.random() * 256)

let rgb = `rgb(${num1},${num2},${num3})`

console.log(rgb)

// 4. Using the above countries array, create the following new array.

let upperCaseArray = []

for (let i = 0; i < countries.length; i++) {
upperCaseArray.push(countries[i].toUpperCase())
    
}

console.log(upperCaseArray)

// 5. Using the above countries array, create an array for countries length.

let arrayWordLength = []

for (i = 0; i < countries.length; i++) {
  arrayWordLength.push(countries[i].length)
}

console.log(arrayWordLength)

// 6. Use the countries array to create the following array of arrays:

let ArrayOfArrays = []

for (i = 0; i < countries.length; i++) {
  let country = countries[i].slice(0, 3).toUpperCase()
  let number = countries[i].length

  ArrayOfArrays.push([countries[i], country, number])
}

console.log(ArrayOfArrays)

/* 7. In above countries array, check if there is a country or countries containing the word 'land'. 
If there are countries containing 'land', print it as array. 
If there is no country containing the word 'land', print 'All these countries are without land'. */

let countriesWithLand = []

for(i=0; i < countries.length; i++) {
  
  if (countries[i].includes('land')) {
    countriesWithLand.push(countries[i])
  }
}

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}

/* 8. In above countries array, check if there is a country or countries end with a substring 'ia'. 
If there are countries end with, print it as array. 
If there is no country containing the word 'ai', print 'These are countries ends without ia'.*/

let countriesEndingIa = []

for(i=0; i < countries.length; i++) {
  
  if (countries[i].endsWith('ia')) {
    countriesEndingIa.push(countries[i])
  }
}

if (countriesEndingIa.length > 0) {
  console.log(countriesEndingIa);
} else {
  console.log("These are countries ends without 'ia'");
}

// 9. Using the above countries array, find the country containing the biggest number of characters.

let longestCountry = '';
let length = 0;

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > length) {
    length = countries[i].length;
    longestCountry = countries[i];
  }
}

console.log(`The country with the biggest number of characters is: ${longestCountry}`);

// 10. Using the above countries array, find the country containing only 5 characters.

let countriesWith5 = []

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    countriesWith5.push(countries[i])
  }
}

console.log(countriesWith5)

// 11. Find the longest word in the webTechs array

let longestWord = '';
let wordSize = 0;

for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > length) {
    longestWord = webTechs[i].length;
    longestWord = webTechs[i];
  }
}

console.log(`The longest word in the webTechs array is '${longestWord}'`);

// 12. 