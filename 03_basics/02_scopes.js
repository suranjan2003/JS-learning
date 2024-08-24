/*
if(true){
    let a = 10
    const b = 20
    var c = 30    // var has a special motive
}
console.log(c) // we have declared c inside the paranthesis '{}' but still we r able to get its value outside paranthesis
               // this is the working of var
*/


// let a = 20
// if(true){
//     let a = 10
//     console.log(`inside paranthesis a = ${a} (local variable)`)
// }
// console.log(`outside paranthesis a = ${a} (global variable)`)


// function one(){
//     const name = 'hitesh'

//     function two(){
//         const website = 'youtube'
//         console.log(name)
//     }
//     //console.log(website)
//     two()
// }
// one()



/***********interesting***********/

//normal functions
console.log(addone(5)) // working fine even after placing above the function
function addone(num){
    return num+1
}
console.log(addone(5))

//this is also function. but also called as expression
//console.log(addTwo(5))  // giving error since it is place above its declaration
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))