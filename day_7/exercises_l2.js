// 1. Linear equation is calculated as follows: ax + by + c = 0.
// Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c, x, y) {
  let linEq = a * x + b * y + c;
  console.log(linEq);
}

solveLinEquation(1, 2, 3, 4, 5);

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray([1, 2, 3, 4, 5]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  const now = new Date();

  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  let hour = now.getHours();
  let minutes = now.getMinutes();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;
  if (hour < 10) hour = `0${hour}`;
  if (minutes < 10) minutes = `0${minutes}`;

  console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
}

showDateTime();

// 5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
  let z = x;
  x = y;
  y = z;

  console.log(x, y);
}

swapValues(10, 1);

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array.

function reverseArray(arr) {
  const newArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }

  console.log(newArray);
}

reverseArray([1, 2, 3, 4, 5]);

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the capitalized array.

function capitalizeArray(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toUpperCase());
  }
  console.log(newArray);
}

capitalizeArray(["a", "b", "c", "d", "e"]);

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(x) {
  const items = [];
  items.push(x);
  console.log(items);
}

addItem("rice");

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(index) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.splice(index, 1);
  console.log(arr);
}

removeItem(2);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(x) {
  let sum = 0;
  for (let i = 0; i <= x; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbers(5);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range.

function sumOfOdds(x) {
  let sum = 0;

  for (let i = 0; i <= x; i++) {
    if (i % 2 != 0) {
        sum +=i
    }
  }
  console.log(sum)
}

sumOfOdds(4);

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that range.

function sumOfEven(x) {
     let sum = 0;

  for (let i = 0; i <= x; i++) {
    if (i % 2 == 0) {
        sum +=i
    }
  }
  console.log(sum)

}

sumOfEven(4);

// 13.Declare a function name evensAndOdds . It takes a positive integer as parameter 
// and it counts number of evens and odds in the number.

function evensAndOdds(x) {
    let even = 0
    let odd = 0
    
    for (let i = 0; i <= x; i++) {

    if(i % 2 == 0){even +=1} 
    else {odd +=1}
    }

    console.log(`The number of odds are ${odd}. The number of evens are ${even}.`)
}

evensAndOdds(100);

// 14. Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArguments() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}

sumOfArguments(1,2,3);

// 15. Write a function which generates a randomUserIp

function randomUserIp() {
    const ip = `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
    console.log(ip);
}

randomUserIp();

// 16. Write a function which generates a randomMacAddress

function randomMacAddress() {
    const hex = "0123456789ABCDEF";
    const randHex = () => hex[Math.floor(Math.random() * 16)] + hex[Math.floor(Math.random() * 16)];

    const mac = `${randHex()}:${randHex()}:${randHex()}:${randHex()}:${randHex()}:${randHex()}`;
    console.log(mac);
}

randomMacAddress(); 

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number.
//  The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    const hexDigits = "0123456789ABCDEF";
    let hex = "#";

    for (let i = 0; i < 6; i++) {
        hex += hexDigits[Math.floor(Math.random() * 16)];
    }

    console.log(hex)
}

randomHexaNumberGenerator();

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id.
//  The function return the id.

function userIdGenerator() {
    let digit = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456!@#$%&*'
    let id = ''

    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * digit.length);
        id += digit[randomIndex];
    }
    console.log(id)
}

userIdGenerator();