// if-else statement

// const temperature = 55

// if(temperature<50){
//     console.log("Temp. less than 50");
    
// } else{
//     console.log("Temp. more than 50");
    
// }

// console.log("outside");

// Comparison operators: <,>,<=,>=,==(equality check), === (strict check)

const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User's power is ${power}`);
    
// } 
// console.log(`User's power is ${power}`) // gives error

// shorthand notation (not good) one-line syntax ended by semicolon

const balance = 1000

// if(balance > 500) console.log("Great"), console.log("Work");

// nested

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900");
} else {
    console.log("more than 900");
}

//multiple conditions
const loggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedIn && debitCard){
    console.log("User allowed");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}

