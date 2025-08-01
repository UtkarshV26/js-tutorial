// for-of loop: used to loop over values of an iterable object (array, string, etc.)
/* Syntax:
for (variable of iterable object){
  statements
}
*/
let myArr = [1, 2, 3, 4, 5]
for (const num of myArr) {
    // console.log(`the value is ${num}`)
    
}

let greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Char is ${greet}`);
    
}

/* Maps: Map object holds key-value pairs just like object, but here key can be of any data type. 
It remembers the original insertion order of the keys for printing purpose.
A key in the Map is always unique.
Iteration takes place in insertion order(order of 1st insertion of each key using set() function).
Setting the same key again will overwrite the previous value.
for...of loop returns a 2-member array of [key, value] for each iteration.
You can get the total number of entries using .size
map.set(key, value) → adds a key-value pair
map.get(key) → gets the value for a key
*/

const map = new Map()
map.set('IND', "India")
map.set("AUS", "Australia")
map.set("SA", 'South Africa')
map.set("AUS", "Australiaaaaaaaa")

// console.log(map);

// for...of loop on map

for (const country of map) {
    console.log(country);
    
}
for (const [countrycode, country] of map) {
    // console.log(countrycode, ":", country);
    
} // countrycode => key, country => value

const myObj ={
    'g1' : "NFS",
    'g2' : "GTA"
}

// for (const [key, value] of myObj) {
//     console.log(key, ":", value);
    
// }

// clearly, Objects in JS are not iterable by for...of loop