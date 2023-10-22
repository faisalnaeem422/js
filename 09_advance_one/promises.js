// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //DB call , cryptography , network
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise one is resolved");
// });

//another way to create and consume promise
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Aysnc second task");
//         resolve();
//     },2000);
// }).then(function() {
//     console.log("second promise is consumed");
// })

//Third promise
// const thirdPromise = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({username:"Faisal",email:"faisal@example.com"});
//     }, 1000);
// })

// thirdPromise.then(function(user){
//     console.log(user);
// })

// Fourth Promise
// const fourthPromise = new Promise(function (resolve , reject) {
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolve({username:"Faisal", password:"faisal123"});
//         }else{
//             reject("Error : Something went wrong")
//         }
//     }, 1000);
// })

// //consume fourth promise
// fourthPromise.then((user) =>{
//     console.log(user.username)
//     return user.username
// }).then(function(username) {
//     console.log(username);
// }).catch(function(error) {
//     console.log(error);
// }).finally(function() {
//     console.log("The promise is either resolved or rejected");
// })

// //fifth promise
// const fifthPromise =new Promise(function(resolve,reject) {
//     setTimeout(() => {
//         let error  = false;
//         if(!error){
//             resolve({username:"Faisal Naeem", email:"Faisalnaeem@gmail.com"})
//         }else{
//             reject("ERROR: JS went wrong")
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {

//     const response = await fifthPromise
//     console.log(response)
//     } catch (error) {
//      console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   console.log(response)
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error: " , error);
//   }
// }

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
