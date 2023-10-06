//Simple Function
// function sayMyname(){
//     console.log("F");
//     console.log("a");
//     console.log("i");
//     console.log("s");
//     console.log("a");
//     console.log("l");
// }

// sayMyname()


//Add two numbers
// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumbers(4, 6);
//console.log(result)


//Anoter function with return statment Add two numbers
// function addTwoNumbers(number1 , number2){
//     // const result =number1 + number2;
//     return number1 + number2 ;
//     //After return statment code is unreachable in functions
//     // console.log("Faisal");
// }
// const result = addTwoNumbers(4, 6);

// console.log("Result : ",result)



//================ login user =====================

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Faisal"))
console.log(loginUserMessage())