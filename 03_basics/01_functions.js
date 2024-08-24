

function makeArray(...num1){
    return num1
}
newArray = makeArray(200,400,600)   // array formed
console.log(newArray)  

/*
function makeArray(num1, num2, ...num3){
    return num3
}
newArray = makeArray(200,400,600,700)   // array formed
console.log(newArray)         // num1 got 200,  num2 got 400,  num3 got rest of the  elements
*/

//************ arrays and functions************/
// const JsUser = {
//     name: "suranjan",
//     "full name": "suranjan karmakar",
//     age: 18,
//     location: "Jaipur"
// }

// function handleObj(anyObj){
//     console.log(anyObj.location)
// }

// handleObj(JsUser)