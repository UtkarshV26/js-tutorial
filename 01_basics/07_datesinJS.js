let myDate = new Date(); //gives current date and time

// console.log(typeof myDate); 

// console.log(myDate); // format: YYYY-MM-DDTHH:mm:ss.sssZ
// console.log(myDate.toString()); // format: Day Month Date Year HH:mm:ss GMT+0000 (Timezone) 
// console.log(myDate.toLocaleString()) // format: MM/DD/YYYY, HH:mm:ss AM/PM (locale specific)

// let myCreatedDate = new Date(2023, 0, 23) // to create a specific date and time
// months are 0-indexed (0 = Jan)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2025-07-14") // syntax: yyyy-mm-dd

let myCreatedDate = new Date("07-15-2025") // syntax: mm-dd-yyyy



// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getMonth() + 1); // getMonth() returns month (0-11), so we add 1 to get the correct month number
// console.log(newDate.getDay()); // getDay() returns day of the week (0-6), where 0 is Sunday

console.log(`The current month is ${newDate.getMonth() + 1} and today's day is ${newDate.getDay()} of the week.`); // using date in string interpolation

// toLocaleString() can be used to format the date in a more readable way by using its options parameter. 
console.log(newDate.toLocaleString('en-IN',{
    timeZone: "Asia/Kolkata"
})) 













