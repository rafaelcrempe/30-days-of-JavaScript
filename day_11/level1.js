import { constants, countries, rectangle } from "../data/day11_data.js";

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(`e: ${e}, pi: ${pi}, gravity: ${gravity}, humanBodyTemp: ${humanBodyTemp}, waterBoilingTemp: ${waterBoilingTemp}`)

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

let [fin, est, sw, den, nor] = countries;
console.log(`fin: ${fin}, est: ${est}, sw: ${sw}, den: ${den}, nor: ${nor}`)

// 3. Destructure the rectangle object by its properties or keys.

let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter)
