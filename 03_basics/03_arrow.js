// this: It is used to refer to the current context, i.e, variables present in the current scope.

const user = {
    username: "Utkarsh",
    id: 101,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to this website.`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// What happens when we print console.log(this)???
// It tells us about all the variables in the current context.

// console.log(this) 

/* Interview:
here in node env., global scope is empty object.
but in browser, it is window object.
*/

// function myFunc(){
//     let username = "Utkarsh"
//     console.log(this.username);
    
// }

// myFunc()

// const myFunc = function(){
//     let username = "Utkarsh"
//     console.log(this.username);
// }

// myFunc()

// So, this current context works in objects, but doesn't work inside functions.

// Arrow function: another syntax to create function
// const myFunc = () => {
//     let username = "Utkarsh"
//     console.log(this.username);
// }

// myFunc()

// so, this doesn't work for any type of func.

// ways of writing arrow function

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return, don't need to write return b'coz syntax is one-liner.
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// concept: If we wrap body of arrow function inside curly brackets, then we need to write return. but if parantheses, then no need to write return.

// const addTwo = (num1, num2) => {username: "Utkarsh"} // returns undefined

const addTwo = (num1, num2) => ({username: "Utkarsh"})


console.log(addTwo(6, 9))