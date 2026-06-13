import {users} from '../data/day11_data.js';

// 1. Iterate through the users array and get all the keys of the object using destructuring

const getKeys = (user) => {
  const objectKeys = Object.keys(user);
  console.log(objectKeys);
}

users.forEach(user => getKeys(user));


// 2. Find the persons who have less than two skills

function getUsersWith2Skills(users) {
    let usersWith2Skills = [];
    
    for (const user of users) {
        if (user.skills.length < 2) {
            usersWith2Skills.push(user.name);
        }
    }
    
    console.log(usersWith2Skills);
}

getUsersWith2Skills(users);