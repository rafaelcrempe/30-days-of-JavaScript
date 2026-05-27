const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


// 1.Find a union b

const unionAB = new Set([...a, ...b]);
console.log(unionAB)

// 2. Find a intersection b
const setB = new Set(b); 

const intersectionAB = new Set([...a].filter(x => setB.has(x)));
console.log(intersectionAB)

// 3. Find a with b

const differenceAB = new Set([...a].filter(x => !setB.has(x)));
console.log([...differenceAB]);