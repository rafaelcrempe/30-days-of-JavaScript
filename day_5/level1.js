//1. Declare an empty array;

const array = [];

//2. Declare an array with more than 5 number of elements;

const numbers = [0,1,2,3,4,5,6,7,8,9];

//3. Find the length of your array;

console.log(numbers.length);

//4. Get the first item, the middle item and the last item of the array;

console.log(numbers[0], numbers[5], numbers.length -1);

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5;

const mixedDataTypes = ['JavaScript',10,true,null,{ language: 'JS' },[1, 2, 3]];

console.log(mixedDataTypes.length);

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon;

const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

//7. Print the array using console.log();

console.log(itCompanies);

//8. Print the number of companies in the array;

console.log(itCompanies.length)

//9. Print the first company, middle and last company;

console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length-1]);

//10. Print out each company;

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

//11. Change each company name to uppercase one by one and print them out;

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

console.log(itCompanies.join(', '))

//13. Check if a certain company exists in the itCompanies array. If it exists return the company else return a company is not found;

let company = 'IBM'

if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log('Company is not found');
}

//14. Filter out companies which have more than one 'o' without using the filter method;

//15. Sort the array using sort() method;

console.log(itCompanies.sort())

//16. Reverse the array using reverse() method;

console.log(itCompanies.reverse())

//17. Slice out the first 3 companies from the array;

console.log(itCompanies.slice(0,3))

//18. Slice out the last 3 companies from the array;

console.log(itCompanies.slice(-3));

//19. Slice out the middle IT company or companies from the array;

const middleIndex = Math.floor(itCompanies.length / 2);

let middleCompanies;
if (itCompanies.length % 2 === 0) {
  // se for par, pega os dois do meio
  middleCompanies = itCompanies.slice(middleIndex - 1, middleIndex + 1);
} else {
  // se for ímpar, pega apenas o do meio
  middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
}

console.log(middleCompanies);

//20. Remove the first IT company from the array;

console.log(itCompanies.shift())

//21. Remove the middle IT company or companies from the array;

const middle = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  // se o array tiver número par, remove os dois do meio
  itCompanies.splice(middle - 1, 2);
} else {
  // se tiver número ímpar, remove o do meio
  itCompanies.splice(middle, 1);
}
console.log(itCompanies);


//22. Remove the last IT company from the array;

console.log(itCompanies.pop())

//23. Remove all IT companies;

itCompanies.splice(0, itCompanies.length)
console.log(itCompanies)
