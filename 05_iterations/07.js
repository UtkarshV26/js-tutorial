const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// add 10 in each and return array

const reqArr = myNumbers.map( (num) => {
    return num = num + 10
})
// console.log(reqArr);

// chaining: using more than one method at the same time together.

// working of chaining: the return resultant array of previous function is passed on to the next func in the chain as input array.

// ques: first multiply each by 10, then add 1 to each, then return only numbers greater than 40

const ansArr = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num > 40)

console.log(ansArr);
