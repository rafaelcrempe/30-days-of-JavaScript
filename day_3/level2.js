let prompt = require("prompt-sync")()

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

    let base = Number(prompt('Enter the value of the base of the triangle: '))
    let height = Number(prompt('Enter the value of the height of the triangle: '))

    let areaTriangle = 0.5 * base * height

    console.log(`The area of the triangle is ${areaTriangle}.`)

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

    let sideA = Number(prompt("Enter side A of the triangle: "))
    let sideB = Number(prompt("Enter side B of the triangle: "))
    let sideC = Number(prompt("Enter side C of the triangle: "))

    let perimeter = sideA + sideB + sideC;

    console.log(`The perimeter of the triangle is ${perimeter}.`)

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

    let length = Number(prompt("Enter the length of the rectangle: "))
    let width = Number(prompt("Enter width of the rectangle: "))

    let areaOfRectangle = length * width
    let perimeterOfRectangle = 2 * (length + width)

    console.log(`The area of the rectangle is ${areaOfRectangle} and the perimeter is ${perimeterOfRectangle}.`)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

    let radius = Number(prompt('Enter the radius: '))

    let areaCircle = 3.14 * (radius * 2)
    let circumferenceCircle = 2 * 3.14 * radius 

    console.log(`The area of the circle is ${areaCircle} and the circumference is ${circumferenceCircle}`)

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

    function calcularY(x) {
        return (x * x) + (6 * x) + 9
    }

    for (let x = -100; x <= 100; x++) {
    let y = calcularY(x);
    console.log(`x = ${x}, y = ${y}`);

    if (y === 0) {
        console.log(`y é zero quando x = ${x}`);
        return
    }
    }

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    let hours = Number(prompt('Enter the number of hours: '))
    let rate = Number(prompt('Enter the rate per hour: '))

    let earning = hours * rate

    console.log(`Your payment is ${earning}`)

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

    let name = prompt('Enter your name: ')
    let nameCount = name.length

    console.log(nameCount > 7 ? 'Your name is long' : 'Your name is short.');

// 11. Compare your first name length and your family name length and you should get this output: "name" is longer than "lastname"


    let name2 = prompt('Enter your name: ')
    let lastname = prompt('Enter your last name: ')

    console.log(
    name.length > lastname.length
        ? `Your name (${name}) is longer than your last name (${lastname})`
        : name.length < lastname.length
            ? `Your last name (${lastname}) is longer than your name (${name})`
            : `Your name (${name}) and your last name (${lastname}) have the same length`
    );
// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

    let myAge = 31
    let yourAge = 37

//13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    let birthYear = Number(prompt('Enter birth year: '))
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear

    console.log(age >=18 ? `You are ${age}. You are old enough to drive` : `You are ${age}. You will be allowed to drive in ${18 - age} year(s).`)

//14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years.

    let yearsLived = Numer(prompt("Enter the number of years you have lived: "))
    let years_seconds = yearsLived * 31536000

    console.log(`You have lived ${years_seconds} seconds!`)

//15. Create a human readable time format using the Date time object

// 1) YYYY-MM-DD HH:mm
// 2) DD-MM-YYYY HH:mm
// 3) DD/MM/YYYY HH:mm

    const now = new Date()
    const pad = (x) => x < 10 ? '0' + x : x;

    const year = now.getFullYear()
    const month = pad(now.getMonth() + 1)
    const day = pad(now.getDate())
    const hour = pad(now.getHours())
    const minute = pad(now.getMinutes())

    const format1 = `${year}-${month}-${day} ${hour}:${minute}`
    const format2 = `${day}-${month}-${year} ${hour}:${minute}`
    const format3 = `${day}/${month}/${year} ${hour}:${minute}`

    console.log(format1)
    console.log(format2)
    console.log(format3)

