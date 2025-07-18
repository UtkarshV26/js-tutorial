/* Definition syntax:

function func_name(parameters){
    body of function
}
*/
function sayMyName(){
    console.log("U");
    console.log("t");
    console.log("k");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}

// function calling syntax: 
// sayMyName => reference part 
// (args) => execution part


// sayMyName()

// function addTwoNumbers(no1, no2){
//     console.log(no1 + no2)
// }

function addTwoNumbers(no1, no2){
    // let result = no1 + no2
    // return result;
    return no1 + no2
    console.log("Utkarsh's function") // Unreachable code b'coz it is a rule in functions, that after return statement, nothing is executed.
}
// returned thing is stored inside a variable like this
const result = addTwoNumbers(3, 4)

// console.log(`Result is: ${result}`)



function userLoggedIn(username = "sam"){ // here sam is default value for username, if no arg is passed in function calling, then default value is used.
    if(!username){ // this means if username is undefined or "" (empty string)
        console.log("Please enter a username.");
        
        return
    }
    return `${username} just logged in`
}

// // console.log(userLoggedIn("Utkarsh"))
// console.log(userLoggedIn(""))
// console.log(userLoggedIn()) // no arg given, returns username undefined if no default value.

// rest operator (...) : it is same as spread operator. just their use differentiates them.

// in functions rest operator is used when we pass more no. of args than no. of parameters.

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 200, 300, 1000, 2000));

// so, on the argument where rest operator is applied, it takes all the extra parameters passed and stores them as an array.


// passing obj to funcs

const user = {
    username: "Utkarsh",
    id: 101
}

function handleObject(anyObject){
    console.log(`user's username is ${anyObject.username} and id is ${anyObject.id}.`)
}

handleObject(user) 
/* 
1. No check for missing keys: If the object doesn’t have username or id, it will show undefined in the output.

2. No check for wrong data types: If username is not a string or id is not a number, it still runs — but the result may not make sense.

3. If empty object is passed, there will be no errors, just the output would be undefined.
*/

handleObject({
    username: "Ayush",
    ids: 102
})

// Passing arrays to functions
const myArray = [100, 200, 300, 400]

function calculateSecondValue(getArray){
    return getArray[1]
}

console.log(calculateSecondValue(myArray))

console.log(calculateSecondValue([500, 600, 700, 800]))