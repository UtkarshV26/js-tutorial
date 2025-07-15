/* 
statically typed lang
Data types are checked at compile time. So, we need to declare type of variables.

dynamically typed lang
Data types are checked at runtime. So, we do not need to declare type to a variable. It is guessed automatically.

JS is a dynamically typed language.
let x = 10; // x is a number
*/

// Primitive : 7 types: Number, String, Boolean, Null, Undefined, Symbol, BigInt

// symbol data type
// const Id = Symbol("123");
// const secondId = Symbol("123");

// // console.log(Id === secondId); // false, because symbols are unique

// // BigInt data type
// const bigNumber = 12123456789n

// // Reference (Non primitive) : Array, Objects, Functions

// const marvel = ["IronMan", "Thor", "Hulk"];

// let myObj = {
//     name: "Utkarsh",
//     age: 22,
// };

// let myFunction = function(){
//     console.log("Hello, World!");
// }


// How to check data type in JS? using typeof operator.
// console.log(typeof secondId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* Return datatype by typeof operator
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function(object)
       Object  =>  object
*/

/* Stack and heap memory
Stack memory => Primitive
Heap memory => Non-primitive(Referenced)

*/


//stack
let myName = "Utkarsh"
let anotherName = myName
anotherName = "Ayush"

console.log(myName);
console.log(anotherName);


//heap
let userOne = {
    email: "utkarsh@google.com",
    upi: "utkarsh@upi",
};
let userTwo = userOne;
userTwo.email = "ayush@google.com";

console.log(userOne.email);
console.log(userTwo.email);

