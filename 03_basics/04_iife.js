/* Immediately Invoked Function Expressions (IIFE)
An IIFE is a function that is defined and executed immediately after its creation.
Hence, it is self-calling and self-executing.
Reason of use: is widely used to create a private scope for variables and functions,means declared inside are not accessible from outside, preventing global namespace pollution.
*/


(function myFunc(){
    console.log(`named IIFE`)
})();

(function (){
    console.log(`anonymous IIFE`)
})();

// Syntax: ()()
// first parantheses is for writing func, 2nd is for execution/calling.

// Imp. Note: to end the scope/context of an iife, we must write an semicolon; after func.

( () => {
    console.log(`arrow function IIFE`);   
} )();

( (name) => {
    console.log(`Hello ${name}, this is IIFE with parameters`);   
} )("Utkarsh");