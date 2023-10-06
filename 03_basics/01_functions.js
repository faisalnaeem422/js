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

// function loginUserMessage(username = "Faisal"){
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Faisal"))
// console.log(loginUserMessage("Naeem"))

//if you have multiple values but have no idea
//in this case you have to use rest operator to get all values given in the argument 
function calculateCartPrice(...item){
    return item
}

// console.log(calculateCartPrice(200,300,4000,5000));

const user ={
    name:"Faisal",
    age:25
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`) 
    return
}
// handleObject(user)
//  handleObject({
//     name:"Naeem",
//     age:20
//  })


const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([
    200,300,500
]))