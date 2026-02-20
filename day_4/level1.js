let prompt = require("prompt-sync")()

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = Number(prompt('Enter your age: '))

console.log(age >=18 ? `You are old enough to drive` : `You have to wait ${18 - age} years to drive!`)

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 31
let yourAge = Number(prompt('Enter your age: '))

if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you`)
} else {
    console.log(`You are ${yourAge - myAge} years older than me!`)
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways: using if else and ternary operator.

let a = Number(prompt("Enter the value of a: "))
let b = Number(prompt("Enter the value of b: "))

if (a > b){
    console.log("a is greater than b")
} else {
    console.log("b is greater than a")
}

console.log(a > b ? "a is greater than b" : "b is greater than a")

// 4.  Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = Number(prompt("Enter a number: "))

console.log(number % 2 === 0 ? `The number ${number} is even` : `The number ${number} is odd`)