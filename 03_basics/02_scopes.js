var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("inside block, a is", a);
    
}

// console.log("a is", a);
// console.log("b is", b);
// console.log("c is", c);

/* Concept of Scopes:
{} this is called block scope. it is used in functions, if else statement, for loop, etc. Variables declared inside this scope remain accessible inside only.
the scope of the whole file is called global scope, the variables here can be accessed anywhere.

the problem with var is that it has global scope even if it is declared inside block scope. so, it creates problem.

Global scope variables can be accessed inside block scope, but things declared inside block scope should not be accessible outside it.
*/


// nesting funcs

function One(){
    const username = "Utkarsh"

    function Two(){
        function three(){
            console.log("Utkarsh Boy")
        }
        const email = "u@google.com"
        console.log(username);
        console.log("Calling three outside");
        
        three()
        
    }
    // console.log(email);
    // console.log("Executing Two outside");
    
    // Two()
    
}
console.log("Executing One outside")
One()

// calling of funcs has separate scope and call stack.

// main point in nesting of funcs is that child function can access the variables of parent function but vice versa is not true.

if (true){
    const firstName = "Utkarsh"
    if (firstName === "Utkarsh"){
        const lastName = " Verma"
        console.log(firstName + lastName);
    }
    // console.log(lastName); // gives error, child func var cannot be accessed by parent func
}
// console.log(firstName); // cannot be accessed by global scope

// ++++++++++++ interesting  concept ++++++++++++

console.log(addOne(5));
// this is acceptable.

function addOne(num){
    return num + 1
}



// declaring function using variable. // it is also called expression


// console.log(addTwo(8)) // gives error, not acceptable.

const addTwo = function(num){
    return num + 2
}
