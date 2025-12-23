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