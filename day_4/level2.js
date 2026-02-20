let prompt = require("prompt-sync")()

// 1. Write a code which can give grades to students according to theirs scores: 
//(90-100: A, 70-89: B, 60-69: C, 50-59: D, 0-49: F)

    let score = Number(prompt('Enter your student score: '))

    if (score >= 90 && score <= 100) {
            console.log('Your grade is A!')
        } else if (score >= 70 && score < 90) {
            console.log('Your grade is B!')
        } else if (score >= 60 && score < 70) {
            console.log('Your grade is C!')
        } else if (score >= 50 && score < 60) {
            console.log('Your grade is D!')
        } else if (score >= 0 && score < 50) {
            console.log('Your grade is F!')
        } else {
            console.log("Please enter a valid score (between 0 and 100)")
        }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//    September, October or November, the season is Autumn.
//    December, January or February, the season is Winter.
//    March, April or May, the season is Spring
//    June, July or August, the season is Summer

    let month = prompt('Enter a month: ').toLowerCase()

    monthConverted = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    if (month === 'september' || month === 'october' || month === 'november') {
        console.log(`${monthConverted} is in Autumn`)
    } else if (month === 'december' || month === 'january' || month === 'february') {
        console.log(`${monthConverted} is in Winter`)
    } else if (month === 'march' || month === 'april' || month === 'may') {
        console.log(`${monthConverted} is in Spring`)
    } else if (month === 'june' || month === 'july' || month === 'august') {
        console.log(`${monthConverted} is in Summer`)
    } else {
        console.log('You have entered an invalid month')
    }

    // 3. Check if a day is weekend day or a working day. Your script will take day as an input.

    let weekday = prompt('Enter the day of the week: ').toLowerCase()

    switch (weekday) {
    case 'monday':
        console.log("It's a working day!")
        break
    case 'tuesday':
            console.log("It's a working day!")
        break
    case 'wednesday':
            console.log("It's a working day!")
        break
    case 'thursday':
            console.log("It's a working day!")
        break
    case 'friday':
            console.log("It's a working day!")
        break
    case 'saturday':
            console.log("It's the weekend!")
        break
    case 'sunday':
            console.log("It's the weekend!")
        break
    default:
        console.log('Invalid day!')
    }