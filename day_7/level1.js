// 1. Declare a function fullName and it print out your full name.

function fullName() {
  let name = "Rafael";
  let lastName = "Crempe";
  let fullName = name + " " + lastName;
  console.log(fullName);
}

fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
  let fullName = firstName + " " + lastName;

  console.log(fullName);
}

fullName2("Rafael", "Crempe");

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

addNumbers(2, 2);

// 4. An area of a rectangle is calculated as follows: area = length x width.
// Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  let area = length * width;
  console.log(`The area of the rectangle is ${area}`);
}

areaOfRectangle(10, 5);

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width).
// Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  console.log(`The perimeter of the rectangle is ${perimeter}`);
}

perimeterOfRectangle(2, 3);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height.
//  Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  console.log(`The volume of the rectangular prism is ${volume}`);
}

volumeOfRectPrism(2, 3, 4);

// 7. Area of a circle is calculated as follows: area = π x r x r.
// Write a function which calculates areaOfCircle.

function areaOfCircle(r) {
  let areaOfCircle = Math.PI * r * r;
  areaOfCircle = areaOfCircle.toFixed(2);
  console.log(`The area of the circle is ${areaOfCircle}`);
}

areaOfCircle(3);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr.
// Write a function which calculates circumOfCircle

function circumOfCircle(r) {
  let circumference = 2 * Math.PI * r;
  circumference = circumference.toFixed(2);
  console.log(`The circumference of the circle is ${circumference}`);
}

circumOfCircle(3);

// 9. Density of a substance is calculated as follows:density= mass/volume.
// Write a function which calculates density.

function density(mass, volume) {
  let density = mass / volume;
  console.log(`The density of this substance is ${density}`);
}

density(10, 2);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.

function speed(distance, time) {
  let speed = distance / time;
  speed = speed.toFixed(2);
  console.log(`The speed is ${speed}`);
}

speed(100, 60);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity.
// Write a function which calculates weight.

function weight(mass, gravity) {
  let weight = mass * gravity;
  console.log(`The weight is ${weight}`);
}

weight(100, 10);

// 12. Temperature in ºC can be converted to ºF using this formula: oF = (oC x 9/5) + 32.
// Write a function which convert ºC to ºF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}ºC is ${fahrenheit} ºF`);
}

convertCelsiusToFahrenheit(0);

/* 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
 Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
 Check if a person is underweight, normal, overweight or obese based the information given below.

    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more */

function calculateBMI(weight, height) {
  let bmi = weight / (height * height);
  bmi = Math.round(bmi * 100) / 100; // round to 2 decimals

  let category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return `Your BMI is ${bmi} (${category})`;
}

console.log(calculateBMI(70, 1.75));

// 14. Write a function called checkSeason, it takes a month parameter.
// Returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  month = month.toLowerCase();

  if (month === "december" || month === "january" || month === "february") {
    return "Winter";
  } else if (month === "march" || month === "april" || month === "may") {
    return "Spring";
  } else if (month === "june" || month === "july" || month === "august") {
    return "Summer";
  } else if (
    month === "september" ||
    month === "october" ||
    month === "november"
  ) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason("March"));

// 15. Math.max returns its largest argument.
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log(max);
}

findMax(30, 1, 10);
