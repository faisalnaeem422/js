//Story of this keyword
//this keyword refer to current context

//lets create a user object
const user={
    username:"Faisal",
    age:23,
    greetingMessage : function(){
        console.log(`${this.username}, welcome to the website`)
    }
}

// user.greetingMessage();
//let change the username in the user object
// user.username = "Naeem"
// user.greetingMessage()


//it return empty object because in this case cureent context (global) is empty when you are using node js
console.log(this)
