// basic comparison between same data types. no problem.
// they give boolean answers. true/false.
// console.log(2>1)
// console.log(2>=1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// comparing different data types
// console.log("2" > 1); // gives true coz "2" is converted to number 2
// console.log("02" > 1); // same

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
/*
Reason is that equality check == and comparisons(>,<,>=,<=) work differently in JS.
Here, for comparisons, null is converted to 0 and then compared.
*/

// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false
/*
Reason is that undefined is not converted to a number, for comparisons or equality checks.
*/

// strict check (===)

// strict check compares both value and type. it does not make type conversions.

console.log("2" === 2);
