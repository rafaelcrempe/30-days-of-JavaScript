import countries from './countries.js';
import webTechs from './web_techs.js';

//2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[.,]/g, '').split(' ');

console.log(words)
console.log(words.length)

// 3. In the following shopping cart add, remove, edit items
//      add 'Meat' in the beginning of your shopping cart if it has not been already added
//      add Sugar at the end of you shopping cart if it has not been already added
//      remove 'Honey' if you are allergic to honey
//      modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[3] = 'Green Tea'

console.log(shoppingCart)

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
    console.log(countries)
}

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.includes('Saas')) {
    console.log('Saas is a CSS preprocess')
} else {
    webTechs.push('Saas')
    console.log(webTechs)
}

//6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

