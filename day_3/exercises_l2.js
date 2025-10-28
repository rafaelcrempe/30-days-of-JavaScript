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

