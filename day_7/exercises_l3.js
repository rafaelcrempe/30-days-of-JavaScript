const prompt = require("prompt-sync")();

// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number 
// of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    const numberOfCharacters = Number(prompt("How many characters you want on your ID? "));
    const numberOfIds = Number(prompt("How many IDs do you want me to generate? "));

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
    let rgb = (`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
    console.log(rgb)
}

rgbColorGenerator();

//3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors() {
    let numberOfColors = Number(prompt('How many colors do you want? '));
    let hexDigits = "0123456789ABCDEF";
    let colors = [];

    for (let i = 0; i < numberOfColors; i++) {
        let color = '#'

        for(let j = 0; j <6; j++){
            color += hexDigits[Math.floor(Math.random() * 16)]
        }
        colors.push(color);
    }

    console.log(colors)
}

// arrayOfHexaColors();

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(x) {

    let numberOfColors = Number(prompt('How many colors do you want? '));
    let rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    const rgbArray = [];

    for (i = 0; i <= numberOfColors; i++) {
        rgbArray.push(rgb)
    }

console.log(rgbArray)
}

// arrayOfRgbColors(3);

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color. 
// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(type, count) {
  const colors = [];

  const generateHex = () => {
    const chars = '0123456789abcdef';
    let hex = '#';
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
    if (type === 'hexa') {
      colors.push(generateHex());
    } else if (type === 'rgb') {
      colors.push(generateRgb());
    } else {
      console.log('Invalid type. Use "hexa" or "rgb".');
      return;
    }
  }

  const result = count === 1 ? colors[0] : colors;
  console.log(result);
}

generateColors('hexa', 3);

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

shuffleArray([1,2,3,4,5,6,7,8,9,10]);

// 9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(x) {
    
    let factorial =  1

    for (let i = 1; i <= x; i++) {
    
        factorial *= i
    }

    console.log(factorial)
}

factorial(3);

// 10. 
