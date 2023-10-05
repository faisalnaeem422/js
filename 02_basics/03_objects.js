//singleton

//object literals

const mySymbol = Symbol("Key1")

const jsUser={
    //object store key value pair
    name:"Faisal",
    "full name":"Faisal Naeem",
    [mySymbol]:"myKey1",
    age:26,
    location:"Islamabad",
    email:"Faisal@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Thursday"]
}

//change value of object keys with objectName.key = "your new value"
jsUser.email ="Faisal@chatgpt.com"

//to freeze object that no one can change it
// Object.freeze(jsUser)
//now object name value can't change
jsUser.name = "Muhammad Faisal Naeem "
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser["email"]);
// console.log(typeof jsUser[mySymbol]);

jsUser.greeting = function(){
    console.log(`Welcome to js series ${this["full name"]}`);
}
jsUser.greetingTwo = function(){
    console.log(`Welcome to js series, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());