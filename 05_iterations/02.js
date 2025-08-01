// while: The while loop executes a block of code repeatedly as long as the given condition is true. it checks the condition before running the loop.

let index = 0
while(index <= 10){
    // console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myArray = ['thor', "spiderman", 'ironman']

let arr = 0
while(arr < myArray.length){
    // console.log(`Value at index ${arr} is ${myArray[arr]}`);
    arr++;
    
}

// do-while loop: The do...while loop runs the block at least once, and then continues if the condition is still true.
// since it first runs the loop then, checks the condition. so, it always runs atleast once.

let score = 11

do {
    // console.log(`the score is ${score}`)
    score++
} while (score <= 10);