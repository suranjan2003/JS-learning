
//***method 1 *******/

// creation of promises
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // database calls, cryptography, network
    setTimeout(function(){
        //console.log('async task is complete')
        resolve()  // connects promiseOne with then
    }, 1000)
})

// promise consume
promiseOne.then(function(){
    //console.log('promise consumed')
})



/********method 2 **********/

new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log('async task 2 is done')
        resolve()
    }, 1000)
}).then(function(){
    //console.log('async 2 resolved')
})


/** promise 3 **********/ // parameter in resolve

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        
        resolve({
            username: 'chai',
            email: 'chai@example.com'
        })  // resolve can also take parameters ( mainly objects)
    }, 1000)
})

promiseThree.then(function(user){
    //console.log(user['email'])
})


/***** promise 4 *******/  //if there is Error

const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        
        let error = false
        if(!error){
            resolve({
                username: 'chai',
                password: 'hitesh123'
            })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// promiseFour.then(function(user){
//     console.log(user['username'])
// }).catch(function(error){         // to catch the error
//     console.log(error)
// })

// promiseFour.then(function(user){
//     return user['username']     // it returns the value to the next then
// }).then((uName)=>{
//     console.log(uName)
// }).catch(function(error){
//     console.log(error)
// })

// promiseFour.then(function(user){
//     return user['username']
// }).then((uName)=>{
//     console.log(uName)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{           // conclusion
//     console.log('the promise is either resolved or rejected')
// })


/***** promise 5 *******/  // trying async syntax instead of then()

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
        
        let error = false
        if(!error){
            resolve({
                username: 'java',
                password: 'hitesh123'
            })
        }
        else{
            reject('ERROR: java went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{   // no error
        const response = await promiseFive
        //console.log(response);
    }
    catch(error){   // if there is an error
        //console.log(error)
    }
}

consumePromiseFive()


/************* fetching data from diff source *****************/

// simply
/*
async function getAllUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()  // to access readability
    console.log(data)
}
getAllUsers()
*/

// error bhi to aa sakta hai bacche ( take care of errors)
/*
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //const data = response.json()  // to access readability 
        // .json() takes so some time that's why it will give a 'pending' response while trying to run the code

        // resolving the 'pending' messge
        const data = await response.json()
        console.log(data)  // we can observe the data is an array so we can do data[0] or data[1] or so and so
    } catch (error) {
        console.log('ERROR')
    }
}
getAllUsers()
*/

// using then catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})