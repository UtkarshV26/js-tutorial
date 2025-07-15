const score1 = 400;

const score2 = new Number(123.879);

// console.log(score1)
// console.log(score2)

// prototypes/functions for Number object

// console.log(score2.toString());
// console.log(score2.toString().length)

// console.log(score2.toFixed(2)) // returns string with no. of decimal places
// console.log(score2.toPrecision(3)) // returns string with specified total digits (including decimal places)

const crore = 10000000

// console.log(crore.toLocaleString()) // returns strings with commas separator acc to default locale (international format)
// console.log(crore.toLocaleString('en-IN')) // returns strings with commas separator acc to Indian format


// ---------- Maths ----------

// console.log(Math);

// console.log(Math.abs(-4))
// console.log(Math.round(4.67))
// console.log(Math.ceil(4.67))
// console.log(Math.floor(4.67))
// console.log(Math.min(3, 5, 9, 7, 8))
// console.log(Math.max(3, 5, 9, 7, 8))

// console.log(Math.random()); // returns a random number between 0 and 1 (exclusive of 1). So, its range is [0, 1).

// console.log(Math.random()*10) // range is [0,10)

// console.log(Math.floor(Math.random()*10)) // integer values only in range [0,10)

// console.log(Math.floor(Math.random()*10) + 1) // integer values in range [1,10]

// Question: How to get a random number in range [10,20]?

const min = 10;
const max = 20;

const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min; // [10, 20]

console.log(randomInRange);




