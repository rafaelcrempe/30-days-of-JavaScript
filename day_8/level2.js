const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const countries = {
  Brazil: {
    capital: "Brasília",
    population: 213000000,
    languages: ["Portuguese"]
  },
  Italy: {
    capital: "Rome",
    population: 59000000,
    languages: ["Italian"]
  },
  Egypt: {
    capital: "Cairo",
    population: 111000000,
    languages: ["Arabic"]
  },
  Uruguay: {
    capital: "Montevideo",
    population: 3500000,
    languages: ["Spanish"]
  }
};

// 1. Find the person who has many skills in the users object.

let maxSkills = 0;
let personWithMostSkills = '';

for (const [name, user] of Object.entries(users)) {
  if (user.skills.length > maxSkills) {
    maxSkills = user.skills.length;
    personWithMostSkills = name;
  }
}

console.log(personWithMostSkills);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

let loggedUsers = 0
let userWith50PointsOrMore = 0

for (const [name, user] of Object.entries(users)) {
if (user.isLoggedIn == true) loggedUsers += 1;
if (user.points >= 50) userWith50PointsOrMore += 1;
}

console.log(`Users logged in: ${loggedUsers}\nUsers With 50 or more points: ${userWith50PointsOrMore}`)

// 3. Find people who are MERN stack developer from the users object

const mernStackDevs = [];

for (const [name, user] of Object.entries(users)) {
  const skills = user.skills;
  const hasMongoDB = skills.includes('MongoDB');
  const hasExpress = skills.includes('Express');
  const hasReact = skills.includes('React');
  const hasNode = skills.includes('Node') || skills.includes('Node.js');
  
  if (hasMongoDB && hasExpress && hasReact && hasNode) {
    mernStackDevs.push(name);
  }
}

if (mernStackDevs.length === 0) {
  console.log("There are no MERN Devs");
} else {
  console.log("MERN stack developers:", mernStackDevs);
}

// 4. Set your name in the users object without modifying the original users object

const usersWithMe = Object.assign({}, users, {
  Rafael: {
    email: 'rafael@example.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 31,
    isLoggedIn: true,
    points: 100
  }
});

console.log(usersWithMe);

// 5. Get all keys or properties of users object

const keys = Object.keys(users)
console.log(keys)

// 6. Get all the values of users object

const values = Object.values(users)
console.log(values)

// 7. Use the countries object to print a country name, capital, populations and languages.

for (const [country, data] of Object.entries(countries)) {
  console.log(`Country: ${country}`);
  console.log(`Capital: ${data.capital}`);
  console.log(`Population: ${data.population.toLocaleString()}`);
  console.log(`Languages: ${data.languages.join(", ")}`);
  console.log("-------------------");
}