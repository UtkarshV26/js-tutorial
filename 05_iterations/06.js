const coding = ["java", "cpp", "c", "swift", "javascript"]

// does forEach() function return anything??

const values = coding.forEach( (item) => {
    return item
})

// console.log(values); // returns undefined

// what to do when we want to iterate with condition or return anything?? forEach() will not work.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Question: return array of numbers greater than 4.

// const reqNums = myNums.filter( (num) => {
//     return num > 4
// })


// const reqNums = myNums.filter( (num) => num > 4 ) // single-line function

// console.log(reqNums);

// same thing using forEach():

const myReqNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        myReqNums.push(num)
    }
})

// console.log(myReqNums);


// example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

// 1. get history books

let userBooks = books.filter( (bk) => bk.genre === "History")

// 2. get science books published after 1995

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "Science"
})

console.log(userBooks);
