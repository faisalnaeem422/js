//Immediately invoked function expression (IIFE)

//when you want to immediately execute a function put (function)()
(function chai(){
    console.log("DB Connected")
})(); //here semicolon is important

// you can also use arrow function for these

((name)=>{
    console.log(`Second Db Connected ${name}`);
})("Mongodb")