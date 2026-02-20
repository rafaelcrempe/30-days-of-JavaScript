//1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// 1.1 Sort the array and find the min and max age

minAge = ages.sort()[0]
maxAge = ages.sort()[ages.length -1]

console.log(`The min age is ${minAge}`)
console.log(`The max age is ${maxAge}`)

//1.2 Find the median age (one middle item or two middle items divided by two)

const medianAge = (ages.sort()[4] + ages.sort()[5]) / 2;
console.log(medianAge)

// 1.3 Find the average age (all items divided by number of items)

let totalAge = 0
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i]
}

averageAge = totalAge / ages.length
console.log(averageAge)

//1.4 Find the range of the ages(max minus min)

const ageRange = maxAge - minAge
console.log(ageRange)

// 1.5 Compare the value of (min - average) and (max - average), use abs() method

const minAverage = Math.abs(minAge - averageAge)
const maxAverage = Math.abs(maxAge - averageAge)

console.log(minAverage, maxAverage)

