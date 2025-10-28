const words = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const digitPattern = /\d+/g;
let digitWords = words.match(digitPattern);

let inc1 = parseInt(digitWords[0]);
let inc2 = parseInt(digitWords[1]);
let inc3 = parseInt(digitWords[2]);

let totalIncome = inc1 + inc2 + inc3;
console.log(`Total Income: ${totalIncome}`);