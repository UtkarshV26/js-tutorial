const accountId = 23163
let accountEmail = "utkarsh23163@gmail.com"
var accountPassword = "12345678"
accountCity = "bareilly"
let accountState

/*
When a variable is defined but not given a value, it is undefined in javascript.
*/
/*
We can write variables in javascript using var and let. But now, we do not use var anymore.
Bcoz var keyword has issues in block scope and functional scope. because it gets changed globally. If it is changed at any place, it gets changed everywhere.
*/


// accountId = 23164
/*
Changing value of const variable is not allowed.
*/
console.log(accountId)

accountEmail = "23163@gmail.com"
accountPassword = "utkarsh"
accountCity = "bengaluru"

console.table([accountId, accountEmail,accountPassword,accountCity, accountState])