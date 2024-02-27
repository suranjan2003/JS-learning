const user = {
    username: "hitesh",
    price: 999,

    welcomeMssge: function(){
        console.log(`${this.username}, welcome`);
    }
}
//user.welcomeMssge()


// arrow func

const chai = (sugar, tealeaf) => {
    return sugar + tealeaf
}

console.log(chai(2,4))