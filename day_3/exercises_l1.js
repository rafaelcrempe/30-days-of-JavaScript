// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

    const firstName = "Rafael"
    const lastName = "Crempe"
    const country = "Brazil"
    const city = "SP"
    const age = 30;
    const isMarried = false;
    const year = new Date().getFullYear();

    console.log(typeof firstName)
    console.log(typeof lastName)
    console.log(typeof country)
    console.log(typeof city)
    console.log(typeof age)
    console.log(typeof isMarried)
    console.log(typeof year)

// 2.Check if type of '10' is equal to 10

    let num = '10'

    console.log(typeof num === 10)

// 3.Check if parseInt('9.8') is equal to 10

    let num2 = parseInt('9.8')
    console.log(num2 === 10)

// 4. Boolean value is either true or false.
    // 4.1 Write three JavaScript statement which provide truthy value.

    console.log(Boolean(1))
    console.log(Boolean("hello"))
    console.log(Boolean([]))

// 4.2 Write three JavaScript statement which provide falsy value.

    console.log(Boolean(0))
    console.log(Boolean(""))
    console.log(Boolean(null))

// 7. Use the Date object to do the following activities
 
    let date = new Date()

    // 7.1 What is the year today?

    console.log(date.getFullYear())

    // 7.2 What is the month today as a number?

    console.log(date.getMonth())

    // 7.3 What is the date today?

    console.log(date.getDate())

    // 7.4 What is the day today as a number?

    console.log(date.getDay())

    // 7.5 What is the hours now?

    console.log(date.getHours())

    // 7.6 What is the minutes now?

    console.log(date.getMinutes())

    // 7.7 Find out the numbers of seconds elapsed from January 1, 1970 to now.

    console.log(date.getTime())


 