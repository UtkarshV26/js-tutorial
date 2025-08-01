/* Truthy : values which act like true in condition statement.
Falsy: values which act like false in condition statement.
false, 0, -0, BigInt 0n, "", null, undefined, NaN 
these are all falsy, rest are truthy.
Some interesting truthy values are:
"0", 'false', " ", [], {}, function(){}
*/
const email = []

if(email){
    console.log("User got email"); 
} else{
    console.log("User not got email");
}

// how to check if array is empty

if(email.length === 0){
    console.log("Array is empty.");   
}

// how to check if object is empty

const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Object is empty.");
}

// Nullish Coalescing Operator (??): works only for null or undefined
// used to avoid getting null or undefined and instead have a backup (default) value when the L.H.S. value is null or undefined.

/* Syntax:
let varName = value1 ?? value2;
If value1 is not null or undefined, then use value1
Otherwise, use value2
*/

let val1
// val1 = 5 ?? 10
// val1 = null ?? 13
// val1 = undefined ?? 16
val1 = null ?? 7 ?? 16


console.log(val1);


/* Ternary operator:

one-line short form of if-else statement.

Syntax: condition ? valueIfTrue : valueIfFalse
*/

const itemPrice = 100

itemPrice <=50 ? console.log("Less than 50") : console.log("More than 50")

