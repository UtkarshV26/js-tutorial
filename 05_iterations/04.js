const myObject = {
    js: "javascript",
    cpp: "c++",
    swift: "swift by apple"
}

// since, objects are not iterable by for...of loop, so, here we try for...in loop

/* for...in loop: used to loop through the keys of an object.
it loops over countable no. of keys including inherited ones.
no order of keys
used when to iterate through keys of an object.
not recommended for arrays
Syntax:
for (const key in object) {
  // code to run
}
*/

for (const lang in myObject) {
    // console.log(lang); // prints all keys of object
    // console.log(`${lang} is for ${myObject[lang]}`); // prints keys + values
}

// for...in loop iteration on arrays

const myLang = ["java", "c", "cpp", "javascript"]

for (const key in myLang) {
  // console.log(key); // print keys of arrays , i.e., indexes in array.
  // console.log(myLang[key]);
}

const map = new Map()
map.set('IND', "India")
map.set("AUS", "Australia")
map.set("SA", 'South Africa')
map.set("AUS", "Australiaaaaaaaa")

// for (const key in map) {
//   console.log(key); // prints nothing
// }

/*
for...in doesn't print anything for Map because Map's keys are not enumerable keys like in plain objects.
*/

