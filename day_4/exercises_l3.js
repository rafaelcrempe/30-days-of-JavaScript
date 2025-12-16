let prompt = require("prompt-sync")()

// 1. Write a program which tells the number of days in a month.

let month = prompt('Enter a month: ').toLowerCase();

let monthConverted = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

switch(month){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthConverted} has 31 days!`)
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${monthConverted} has 30 days`)
        break
    case 'february':
        console.log(`${monthConverted} has 28 days.`)
        break
    default:
        console.log("Invalid month!")
}

//2.Write a program which tells the number of days in a month considering leap years

let month2 = prompt('Enter a month: ').toLowerCase();
let monthConverted2 = month2.charAt(0).toUpperCase() + month2.slice(1).toLowerCase();

let year = new Date().getFullYear()
let leapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)

switch(month){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${monthConverted2} has 31 days!`)
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${monthConverted2} has 30 days`)
        break
    case 'february':
        console.log(`${monthConverted2} has ${leapYear ? '29 days (We are in a leap year)' : '28 days.'}`);
        break;
    default:
        console.log("Invalid month!")
}
