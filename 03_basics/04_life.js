//Immediately invoked function expression (IIFE)

//when you want to immediately execute a function put (function)()
(function chai(){
    //named IIFE
    console.log("DB Connected")
})(); //here semicolon is important

// you can also use arrow function for these

((name)=>{
    //Simple IIFE
    console.log(`Second Db Connected ${name}`);
})("Mongodb")