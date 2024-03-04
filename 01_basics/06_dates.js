
// ********* Dates ***************


let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log((myDate.toDateString()))


// create new date
let created_date1 = new Date(2013, 3, 23)     // months starts with 0
console.log((created_date1.toDateString()))

let created_date2 = new Date("2013-3-23")       // months starts with 1
console.log((created_date2.toDateString()))
