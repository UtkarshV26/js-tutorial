// Arrays

// ways to create array
const myArr = [0, 1, 2, 3, 4, 5];

const myHeroes = ["IronMan", "Spiderman", "Thor", "Hulk", "Captain America"];

const myArr2 = new Array(1, 3, 5, 7, 9, 11, 13);

// console.log(typeof myHeroes)
// console.log(myArr.length);
// console.log(myArr[2]); // accessing elements

// performing operations on arrays

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes last element

// myArr.unshift(321) // adds element at start of array and shifts other elements forward
// unshift is not a good practice for large arrays as it can be time consuming and puts load on memory.

// myArr.shift() // opposite of unshift, removes first element of array and shifts other elements backward

// console.log(myArr)

// questions on arrays

// console.log(myArr.includes(8)) // returns true/false
// console.log(myArr.indexOf(12)) // returns index of element, if not found returns -1

// join - adds all elements of array and converts into a string separated by a specified separator.
// syntax: array.join(separator)
// if no separator is specified, it defaults to a comma(,).
const myNewArr = myArr.join()

// console.log(typeof myNewArr)
// console.log(myNewArr)

// slice, splice

console.log("A", myArr)


const sliceArr = myArr.slice(1, 3)

console.log("sliceArr", sliceArr)
console.log("B", myArr)

// so slice method gives a new array from beginning index to end index (exclusive) of the array. But, it does not modify the original array.

const spliceArr = myArr.splice(1, 3)

console.log("spliceArr", spliceArr)
console.log("C", myArr)

// so spilce method also gives a new array from beginning index to end index (inclusive of end index). But, it modifies the original array by removing the elements.













