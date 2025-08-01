/* array.reduce()
reduce() is a high-order array func that executes user-supplied "callback function" and reduces all elements of an array to a single value (like sum, product, object, etc.).

How? It works by applying callback func to each element and accumulating a result step-by-step in "accumulator" variable.

Syntax using arrow func: 
array.reduce( (accumulator, currentValue) => {
  // return updated accumulator
}, initialValue);

accumulator: The value that stores the result.

currentValue: The current element of the array.

If no initial value is provided, it uses the first array element as initial accumulator and starts from index 1.
*/

// Qs. Find sum of first 5 natural no.s

const myNums = [1, 2, 3, 4, 5]

// const sum = myNums.reduce( function(acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
// }, 0)


// arrow
// const sum = myNums.reduce( (acc, curr) => acc + curr, 0)

// console.log(sum);


// Important example of array.reduce() for array of objects

const shoppingCart = [
    {
        course: "JS course",
        price: 2999
    },
    {
        course: "PY course",
        price: 999
    },
    {
        course: "Mobile Dev course",
        price: 4999
    },
    {
        course: "Data Science course",
        price: 8999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);
