const user = {
    username: "hitesh",
    price: 999,

    welcomeMssge: function(){
        console.log(`${this.username}, welcome`);
    }
}
//user.welcomeMssge()

// this can be used only in objects, Not in functions

// arrow func

const chai = (sugar, tealeaf) => {
    return sugar + tealeaf
}

console.log(chai(2,4))

//for one liner arrow functions we can avoid curly bresses
const addtwo = (num1,num2) => num1 + num2             // ok
console.log(addtwo(8,4))
const addtwo2 = (num1,num2) => (num1 + num2)          // ok
console.log(addtwo2(8,4))
// const addtwo3 = (num1,num2) => {num1 + num2}       // not ok
// console.log(addtwo3(8,4))
const addtwo4 = (num1,num2) => {return num1 + num2}    // ok
console.log(addtwo4(8,4))

// return objects
const func = () => ({username: 'hitesh'})   // while returning objects, we must use first braket atleast
console.log(func())