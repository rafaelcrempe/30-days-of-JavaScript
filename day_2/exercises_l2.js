// 1. Using console.log() print out the following statement:
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let quote1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote1)

// 2.Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let checkType = '10' // string
console.log(typeof parseInt(checkType))

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let number = parseFloat('9.8')

console.log(Math.ceil(number))

// 5. Check if 'on' is found in both python and jargon

let word1 = 'python', word2 = 'jargon'

console.log(word1.includes('on'))
console.log(word2.includes('on'))

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.

let phrase = 'I hope this course is not full of jargon.'
console.log(phrase.includes('jargon'))

// 7. Generate a random number between 0 and 100 inclusively.

let random1 = Math.random() * 100
console.log(Math.ceil(random1))

// 8. Generate a random number between 50 and 100 inclusively.

let random2 = (Math.random() * 51) + 50
console.log(Math.floor(random2))

// 9. Generate a random number between 0 and 255 inclusively.

let random3 = Math.random() * 255
console.log(Math.ceil(random3))

// 10. Access the 'JavaScript' string characters using a random number.

let string = 'JavaScript'
const randomIndex = Math.floor(Math.random() * string.length)
console.log(string[randomIndex])

// 11. Use console.log() and escape characters to print the following pattern.

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = "You cannot end a sentence with because because because is a conjunction";
let newSentence = sentence.substring(31, 54); 
console.log(newSentence); 
