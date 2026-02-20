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

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

    for (i = 0; i <=10; i++) {
        console.log(i)
    }


    let j = 0
    while (j <=10) {
        console.log(j)
        j++
    }

    let k = 0
    do {
        console.log(k)
        k++
    } while (k <=10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

    for (i = 10; i >= 0; i--) {
        console.log(i)
    }


    let l = 10
    while (l >= 0) {
        console.log(l)
        l--
    }

    let m = 10
    do {
        console.log(m)
        m--
    } while (m >= 0)

// // 3. Iterate 0 to n using for loop

    for (let i = 0; i <= n; i++) {
        console.log(i);
    }

/* 4. Write a loop that makes the following pattern using console.log()

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

    let i = '#'

    do {
        console.log(i)
        i += '#'
    } while (i.length <= 7)

/*5. 
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/ 

let tab = 0

while (tab <=10) {
    console.log(`${tab} x ${tab} = ${tab * tab}`)
    tab++
}

/* 6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

*/
console.log('i \t i² \t i³')

for (let i = 0; i <= 10; i++) {
    let square = i * i
    let cube = i * i * i
    console.log(i + '\t' + square + '\t' + cube);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <=100;  i++) {
    
    if (i % 2 == 0) {
        console.log(i)
    }
    
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <=100;  i++) {
    
    if (i % 2 != 0) {
        console.log(i)
    }
    
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i)
        }
    }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0
for (let i = 0; i <= 100; i++) {
     sum += i;
}

console.log(sum)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd += i
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let sumEvenOdds = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvenOdds[0] += i;
    } else if (i % 2 > 0) {
        sumEvenOdds[1] += i;
    }
}
console.log(sumEvenOdds)

// 13. Develop a small script which generate array of 5 random numbers

let randomNumbersArray = []

for (i = 0; i <5; i++) {
    randomNumbersArray.push(Math.floor(Math.random() * 10))
}

console.log(randomNumbersArray)

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomArr = [];

while (randomArr.length < 5) {
    let randomNum = Math.floor(Math.random() * 10);
    if (!randomArr.includes(randomNum)) {
        randomArr.push(randomNum);
    }
}

console.log(randomArr);

// 15. Develop a small script which generate a six characters random id

let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"

let id = ""

for (let i = 0; i < 6; i++) { 
        const random = Math.floor(Math.random() * char.length);
        id += char[random];
}

console.log(id)


