
//************* trimming extra space *************
/*
const name = "  suranjan karmakar"

//before trim
console.log(name)

//after trim
console.log(name.trim())
*/

// ************* changing some elements inside *******
/*
 const url = "https://hitesh.com/hitesh%20choudhury"

 console.log(url.replace('%20','-'));  // a copy of url is created and %20 replaced by -
 console.log(url);       // the actual url still contains %20 only
*/

 //********* Numbers *********************/
// method 1 of defining number
const score = 400
console.log(score)             // observe output

//method 2 of defining numbers
const balance = new Number(100)
console.log(balance)            // observe output
console.log(balance.toString().length)  // converted to string 
                                        //i.e now we can use all the properties of string in our number too
console.log(balance.toFixed(2))    // decimal places required
                                    