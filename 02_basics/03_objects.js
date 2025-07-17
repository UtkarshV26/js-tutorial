// two ways of declaring objects: as literal and as constructor
// When we declare object as literal, it is not singleton
// But when created using constructor, it is always a singleton(one of a kind).

// 1. Object Literals


/* Syntax: {
    key: value,
}

*/

// Interview Question: How to print a symbol in symbol form by accessing it as object literal?
const mySym = Symbol("key1")

const JsUser = {
    name: "Utkarsh",
    "full name": "Utkarsh Verma",
    [mySym]: "mykey1",
    age: 22,
    city: "Shahjahanpur",
    email: "utkarsh@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Friday"]
}

/* 
concept of adding symbol as a symbol literal property to object:
When we add a symbol to object properties in normal syntax, its data type is acc. to its value.
But when we add it enclosed in square brackets, then its data type remains a symbol.
*/

 

// accessing object

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(typeof mySym);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser[mySym]);


// console.log(JsUser["full name"])

// Changing value of object properties

// JsUser.email = "utkarsh@yahoo.com" 
// Object.freeze(JsUser) 

/*
Freezing an object makes it immutable (read-only). No new properties can be added. Existing properties cannot be removed. Existing values of properties cannot be changed.
*/

// JsUser.email = "utkarsh@mail.com"

// console.log(JsUser)

// adding function to object properties

JsUser.greeting = function(){
    console.log("Hello JS User.")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

