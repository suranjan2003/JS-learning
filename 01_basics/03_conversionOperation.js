let score = "33"

console.log(typeof score)

let value_in_num = Number(score)  // string to number conversion

console.log(typeof value_in_num)

// "33" == 33
// "33abc" == NaN  Not a Number
// true == 1; false == 0


let isLoggedIn = 0
let boolIsLoggedIn = Boolean(isLoggedIn)

console.log(boolIsLoggedIn) // number to boolean conversion