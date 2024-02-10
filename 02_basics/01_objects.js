// singleton

/*
// object.create
// const tinderUser = new object()   // method 1 of defining object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoogedIn = false
//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        firstname: "suranjan",
        secondname: "karmakar"
    }
}
//console.log(regularUser.fullname.firstname)
*/


// objects  under array
/*
const user = [
    {
        id : "A",
        email : "hfjkghg@gmail.com"
    },
    {
        id : "B",
        email : "jglglbk@gmail.com"
    },
    {
        // like this we can insert as many objects as we want
    }
]
*/




// object literals

const JsUser = {
    name: "suranjan",
    "full name": "suranjan karmakar",
    age: 18,
    location: "Jaipur"
}
//console.log(JsUser.name)         // 1st method
//console.log(JsUser["name"])        // 2nd method

// but the key "full name" can be accesed by 2nd method only
//console.log(JsUser["full name"])


console.log(JsUser.name);     // no destructuring

const {name} = JsUser           //destructuring
console.log(name);