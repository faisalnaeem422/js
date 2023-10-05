//when we create object using new keyword then its called singleton object
// const tinderUser = new Object() //singleton

//Non singleton object
const tinderUser = {}
tinderUser.id= 1
tinderUser.name="Faisal Naeem"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

//Another object
const regularUser ={
    email:"Faisal@google.com",
    fullname:{
        userFullName:{
            firstName:"Faisal",
            lastName:"Naeem"
        }
    }
}

//Question mark is use for nullable 
// console.log(regularUser?.fullname?.userFullName?.lastName);

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 ={...obj1 ,...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        name:"Faisal",
        email:"faisal@gmail.com"
    },
    {
        id:2,
        name:"Naeem",
        email:"naeem@gmail.com"
    }
]

console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));