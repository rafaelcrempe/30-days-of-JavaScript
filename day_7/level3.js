const prompt = require("prompt-sync")();

// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number
// of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  const numberOfCharacters = Number(
    prompt("How many characters you want on your ID? "),
  );
  const numberOfIds = Number(
    prompt("How many IDs do you want me to generate? "),
  );

  for (let j = 0; j < numberOfIds; j++) {
    let id = "";
    for (let i = 0; i < numberOfCharacters; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
    console.log(id);
  }
}

// userIdGeneratedByUser();

// 2. Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
  let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  console.log(rgb);
}

rgbColorGenerator();

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors() {
  let numberOfColors = Number(prompt("How many colors do you want? "));
  let hexDigits = "0123456789ABCDEF";
  let colors = [];

  for (let i = 0; i < numberOfColors; i++) {
    let color = "#";

    for (let j = 0; j < 6; j++) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }

  console.log(colors);
}

// arrayOfHexaColors();

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(x) {
  let numberOfColors = Number(prompt("How many colors do you want? "));
  let rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  const rgbArray = [];

  for (i = 0; i <= numberOfColors; i++) {
    rgbArray.push(rgb);
  }

  console.log(rgbArray);
}

// arrayOfRgbColors(3);

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(type, count) {
  const colors = [];

  const generateHex = () => {
    const chars = "0123456789abcdef";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += chars[Math.floor(Math.random() * 16)];
    }
    return hex;
  };

  const generateRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  for (let i = 0; i < count; i++) {
    if (type === "hexa") {
      colors.push(generateHex());
    } else if (type === "rgb") {
      colors.push(generateRgb());
    } else {
      console.log('Invalid type. Use "hexa" or "rgb".');
      return;
    }
  }

  const result = count === 1 ? colors[0] : colors;
  console.log(result);
}

generateColors("hexa", 3);

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

//apparently this is called 'Fisher–Yates shuffle algorithm'

function shuffleArray(arr) {
  const newArray = [...arr];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  console.log(newArray);
}

shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(x) {
  let factorial = 1;

  for (let i = 1; i <= x; i++) {
    factorial *= i;
  }

  console.log(factorial);
}

factorial(3);

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(x) {
  if ((x === null) | (x === undefined)) {
    console.log("It's empty!");
  } else {
    console.log(x);
  }
}

isEmpty();

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

function sum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  console.log(sum);
}

sum(1, 2);

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
// Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log("All items inside the array should be numbers!");
    }
    sum += arr[i];
  }
  console.log(sum);
}

sumOfArrayItems([1, 2, 3]);

// 13. Write a function called average, it takes an array parameter and returns the average of the items.
// Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      console.log("All items inside the array should be numbers!");
    }
    sum += arr[i];
  }

  let average = sum / arr.length;
  console.log(`The average of the array items is ${average}`);
}

average([1, 2, 3]);

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item
//  of the array and return the array. If the array length is less than five it return 'item not found'.

function modifyArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("Parameter is not an array!");
  }

  if (arr.length < 5) {
    console.log("Not found");
    return;
  }

  arr[4] = arr[4].toUpperCase();
  console.log(arr);
}

modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"]);
modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"]);
modifyArray(["Google", "Facebook", "Apple", "Amazon"]);

// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(number) {

  if (typeof number != 'number') {
    console.log(`${number} is not a number`)
    return
  }

  if (number <= 1) {
    console.log(`${number} is not prime!`);
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`${number} is not prime!`);
    }
  }
  console.log(`${number} IS PRIME!`);
}

isPrime(13);

// 16. Write a function that checks if all items are unique in the array.

function areAllItemsUnique(arr) {

  if (!Array.isArray(arr)) {
    console.log('Input must be an array');
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log('NOT all items are unique!');
        return;
      }
    }
  }

  console.log('ALL items are unique');
}

areAllItemsUnique([1, 2, 3]);

// 17. Write a function which checks if all the items of the array are the same data type.

function areSameDataType(arr) {

  if (!Array.isArray(arr)) {
    console.log('Input must be an array');
    return;
  }

  let firstType = typeof arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== firstType) {
      console.log('The items are NOT of the same type');
      return;
    }
  }

  console.log("All of the items are the same type");
}


areSameDataType([1, 2, 3]);

// 18. 