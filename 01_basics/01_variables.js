const accId = 144553
let accEmail = "suriya@google.com"
var accPassword = "12345"  //  here also we can write "let" in place of "var"
/*
prefder not to use var
bcz of issue in block scope and functional scope
*/
accCity = "Jaipur" // we can define variables like this also but this is not a good practice


//accId = 2  // not allowed to change value of constant

console.log(accId);

// print the values in form of table
console.table([accId, accEmail, accPassword, accCity])