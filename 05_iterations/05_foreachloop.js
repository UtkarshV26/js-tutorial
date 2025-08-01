/* "forEach()" loop:
forEach() is a built-in method(function) of JavaScript arrays.
executes provided function one-by-one for each element of array.
Basic Syntax:
forEach(function (iterator variable){
    function body
})
*/

const coding = ["java", "cpp", "c", "swift", "javascript"]

// coding.forEach( function (lang){
//     console.log(lang);
// })

// coding.forEach( (lang) => {
//     console.log(lang);
// })

// passing pre-defined function as a parameter to forEach()

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

/* General Syntax of forEach():
array.forEach(function(iterator, index, array) {
  // code to run for each element
})
*/

coding.forEach((element, index, arr) => {
    // console.log(element, index, arr);
})

// Case: array of objects: ["", "", ""]

const myLang = [
    {
        langName: "c++",
        langFile: "cpp"
    },
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "python",
        langFile: "py"
    }    
]

myLang.forEach( (item) => {
    console.log(item.langName);
    
})

// it is very important because data fetched from database comes in arrays where every element is an object.