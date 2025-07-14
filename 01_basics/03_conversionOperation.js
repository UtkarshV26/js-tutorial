let score = undefined

// console.log(typeof score)
// console.log(typeof(score)) // here typeof is a method/function, so we can use it with or without parentheses.

let numberScore = Number(score) 
// conversion to number using Number() function
// console.log(typeof numberScore)
// console.log(numberScore)

// "33" => 33
// "33abc" => NaN (Not a Number)
// "utkarsh" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "utkarsh" => true
// "" => false


let newVar = 33

let stringNewVar = String(newVar)

// console.log(typeof stringNewVar)

// console.log(stringNewVar)

// --------Operations:------------

let value = 45
let negValue = -value

// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

// adding strings
let str1 = "utkarsh"
let str2 = " verma"

let str3 = str1 + str2
// console.log(str3)

// console.log("1"+"2")
// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) // if string is present first, then all will be treated as string concatenation.
// console.log(1 + 2 + "2") //but if string is present at the end, then it will be treated as normal addition in the beginning.

// console.log((3+4)*5/2) 

// console.log(true)
// console.log(+true)
// console.log(+"")

// console.log(true+) //this gives error

// prefix and postfix increment/decrement in js
let gameCounter = 100
++gameCounter;
console.log(gameCounter)
gameCounter++;
console.log(gameCounter)


