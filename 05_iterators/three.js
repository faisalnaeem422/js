//for of
//["","",""]
//[{},{},{}]

//for of with array
// const arr =[1,2,3,4,5]
// for (const val of arr) {
//     console.log(val);
// }

//for of with string
let greetings ="Welcome to JS series";

for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}

//Maps in JS
//Every thing is js is an object
const map = new Map();
map.set("IN","India")
map.set("PK","Pakistan")
map.set("USA","United States of America")
map.set("Fr","France")

// console.log(map);

for (const [key ,value] of map) {
    console.log(value);
}

//for of loop with object (it get error that obj is nor iterable)
//for of loop is not working with objects
const myObj ={
    game1:"NFS",
    game2:"GTA",
    game3:"Spiderman"
}

for (const [key , value] of myObj) {
    console.log(key, " : " , value);
}