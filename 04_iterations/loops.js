//for loop

// const array = [1,2,3,4]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// const arr = [1,2,3,4]
// for(const num of arr){
//     console.log(num);
// }


// do loop
// let score = 11;
// do {
//     console.log(`score is = ${score}`)
//     score++
// }while(score<=10);
// in do loop, kam pehle hota hai aur check baad mein hota hai  (udhari ki zindagi)
// in while loop check pehle hota hai kam baad mein  (govt office)


//*****maps*************

//const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// //console.log(map)

// for(const [key,val] of map){
//     console.log(`key= ${key} and value= ${val}`)
// }

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )   // num become 1*10 => 10
                .map( (num) => num + 1)      // num become 10+1 => 11
                .filter( (num) => num >= 40)   // checks is num >= 40 then only it will be added to the newNums

console.log(newNums);


//******object *******/

// const mygames = {
//     game1: 'ff',
//     game2: 'cod'
// }

// for(const [key,val] of mygames){                  THIS IS WRONG
//     console.log(`key= ${key} and value= ${val}`)    WE CANNOT DO FOR LOOP LIKE THIS FOR OBJECTS
// }

// in case of objects we use forin loop
// for (const key in mygames) {
//     console.log(`${key} : ${mygames[key]}`)
// }

// for each value of an array we can run a function
// const coding = ['js', 'cpp', 'java', 'python']
// console.log('by normal function')
// coding.forEach(function (val){
//     console.log(val);
// })
// console.log('by arrow function')
// coding.forEach((val) => {
//     console.log(val);
// })


//***get access to objects inside array ****/
// const myCoding = [
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     }
// ]
// myCoding.forEach((item) => {
//     console.log(item.languageFileName)
// })


//+++++ filter ++++++++++   want to get some set of numbers based on some condition

// const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums1 = nums.filter((num) => num>4 && num<9)      //method 1
// const newNums2 = nums.filter((num) => (num>4 && num<9))    //method 2
// const newNums3 = nums.filter((num) => {                    //method 3
//     return num>4 && num<9
// })

// console.log(newNums1)
// console.log(newNums2)
// console.log(newNums3)

//example
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// // i want to extract books with genre history

// const historyBooks = books.filter((bk) => bk.genre === 'History')

// console.log(historyBooks)