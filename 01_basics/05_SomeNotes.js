
// ************* trimming extra space *************

// const name = "  suranjan karmakar"

//before trim
// console.log(name)

//after trim
// console.log(name.trim())


// ************* changing some elements inside *******

 const url = "https://hitesh.com/hitesh%20choudhury"

 console.log(url.replace('%20','-'));  // a copy of url is created and %20 replaced by -
 console.log(url);       // the actual url still contains %20 only