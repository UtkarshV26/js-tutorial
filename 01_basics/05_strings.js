const name = "Utkarsh"
const branch = "CSE"
// old syntax of concatenation. (not good)
// console.log(name + branch + " 3rd year"); 

// modern syntax is using backticks (template literals) for string interpolation. We create placeholders using ${} inside backticks for injecting variables.
console.log(`My name is ${name} and my branch is ${branch}`);
// more readable and cleaner syntax.

const inGameName = new String('utkarshXD')

// console.log(typeof inGameName); // returns object coz we are using String constructor.
// console.log(inGameName[5]);
// console.log(inGameName.length);
// console.log(inGameName.__proto__); // returns String.prototype object.
// console.log(inGameName.toUpperCase());

// console.log(inGameName.charAt(6));
// console.log(inGameName.indexOf('X')); // gives index of first occurrence

const newString = inGameName.substring(0,3)
// gives substring with characters from index 0 to 3 (exlusive i.e., not including 3).
// console.log(newString);

const anotherString = inGameName.slice(0,3);
// console.log(anotherString);
// using negative index for start in slice, it tells it to start from the end of the string.
const negativeSlice = inGameName.slice(-3); // here end index is not specified, so it will slice and take till the end of string.
// console.log(negativeSlice);

// we cannot use negative index in substring, if used, it will treat it as 0.


//trim removes whitespaces from both ends of a string.
const newStringOne = "   Utkarsh   ";
console.log(newStringOne);

console.log(newStringOne.trim())

// to remove whitespaces from just one end, we can use trimStart() or trimEnd().
console.log(newStringOne.trimEnd())

//replace() method replaces a substring with another substring.
const demoString = "https://www.utkarsh-verma.com"

console.log(demoString.replace('-', 'plus'))

//includes() method checks if a string contains a substring.
console.log(demoString.includes('plus'));

//split() method splits a string into an array of substrings based on a specified separator.
// syntax: string.split(separator, limit)
// console.log(demoString.split("."));

// console.log(demoString.split("")); //gives an array of all characters as elements

console.log(demoString.split()) // if no separator, then array has a single element of whole string

// limit tells how many entries to return in the array. 
// if limit is 0, it returns [] empty array.

// read mdn documentation for more methods on strings.
