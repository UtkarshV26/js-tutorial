// 1. object literals

const tinderUser = {} // non-singleton object

tinderUser.id = "12345"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nesting of objects (object in object)

const regularUser = {
    email: "utkarsh@google.com",
    userName: {
        userFullName: {
            firstName: "Utkarsh",
            lastName: "Verma"
        }
    }
}

// Accessing nested objects properties "keys & values"


// console.log(regularUser);
// console.log(regularUser.userName);
// console.log(regularUser.userName.userFullName);
// console.log(regularUser.userName.userFullName.firstName);

// mereging of objects:

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// Syntax 1: (not good)
// const obj4 = {obj1, obj2, obj3}
// console.log(obj4)
// the problem with this above syntax is that it creates a new obj where the object variable names obj1, obj2, obj3 are keys and their values are objects themselves. (Each object becomes a value under its own key)

/* Syntax 2: Object.assign() function:
Used to copy the properties of one or more source objects into a target object — effectively merging them.
It returns the modified target object.

syntax: const modifiedTarget = Object.assign(target, source1, source2, ..., sourceN)

Properties in the target object are overwritten by properties in the sources if they have the same key(vale is overwritten). Similarly, later sources' properties overwrite earlier ones.

Note: Object.assign({}, source1, source2, ...) creates a new target object so original ones stay unchanged.
here target object = {}
*/
// const obj4 = Object.assign(obj1, obj2, obj3) // here target obj is obj1 which is copied to obj4.

// console.log(obj1);
// console.log(obj4);

// const obj4 = Object.assign({}, obj1, obj2, obj3)


// console.log(obj1);
// console.log(obj4);

// Syntax 3: Spread operator (best syntax)
// It is better bcoz it always returns a new object, no modifications in existing ones. whereas Object.assign() modifies the first argument object(target object).
// Also, it allows to easily add individual values in between as well.

const mergedObj = {...obj1, ...obj2}

// console.log(mergedObj);

/* Note: if same key exists while merging, then value of last one wins (just like in Object.assign()).
*/


// 2. Using Constructor:

// const tinderUser = new Object() // singleton object

// Database data example (objects inside array)

const Users = [
    {
        name: "Utkarsh",
        email: "utkarsh@google.com"
    },
    {
        name: "Ayush",
        email: "ayush@google.com"
    }
]

// console.log(Users[0].email);

// console.log(tinderUser);

// // object constructor functions/methods
// console.log(typeof Object.keys(tinderUser));
// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// // any object's possible functions/methods
// console.log(tinderUser.hasOwnProperty("isLogged")); // checks if that object has this property or not // true/false


// Destructuring in objects: Object destructuring allows you to extract properties from an object and assign them to variables for easy access. It also allows renaming them or providing default values to them.

const course = {
    name: "JS in Hindi",
    price: "999",
    courseTeacher: "hitesh"
}

// console.log(course.courseTeacher)

const {courseTeacher: Teacher} = course

console.log(Teacher)

// Concept of APIs: (json)

// {
//     "name": "Utkarsh",
//     "age": 22,
//     "email": "U@google.com"
// }

[
    {},
    {},
    {}
]