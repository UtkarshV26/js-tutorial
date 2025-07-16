const marvelHeroes = ["IronMan", "Thor", "Spiderman"]
const dcHeroes = ["Batman", "Superman", "Flash"]

// merging arrays

// 1. using push

// marvelHeroes.push(dcHeroes) // adds dcHeroes complete array as a single element to marvelHeroes, as arrays can accept any data type element.

// therefore, push  adds new elements to the end of an array, and returns the new length of the array. So, it works on existing array and returns it.

// console.log(marvelHeroes)
// console.log(marvelHeroes[3][0]); // accessing Batman

// not a good syntax for merging

// 2. using concat

// const allHeroes = marvelHeroes.concat(dcHeroes)

// console.log(allHeroes);

// concat : combines two or more arrays. This method returns a new array without modifying any existing arrays.

// 3. using spread (best syntax for merging arrays)
// reasons: 1. spread allows to add individual elements along with arrays more easily than concat.
// 2. spread syntax looks more modern nd flexible while working with more than 2 arrays also.

// const allNewHeroes = [...marvelHeroes, ...dcHeroes]

// console.log(allNewHeroes)

// flat: returns a new array for the given array with all elements of sub-arrays concatenated into it recursively up to the specified depth.

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [10, 11]]]

// const newAnotherArray = anotherArray.flat(Infinity)
// console.log(newAnotherArray);

console.log(Array.isArray("Utkarsh"))

console.log(Array.from("Utkarsh"))

console.log(Array.from({name: "Utkarsh"})) //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // gives array with given set of elements






