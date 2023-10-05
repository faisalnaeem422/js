//============================== Dates in Javascript ==============================

let myDate = new Date();
// console.log(myDate.toDateString())
//return date from your date object
// console.log(myDate.toLocaleDateString("en-CA"))
// console.log(typeof(myDate))
// console.log(myDate.toLocaleTimeString())

//create your own date
// let myCreatedDate = new Date("2023-02-12") //yyyy-mm-dd
let myCreatedDate = new Date("12-02-2023") //mm-dd-yyyy
//just return time from your date object
// console.log(myCreatedDate.toLocaleTimeString())
// console.log(myCreatedDate.toLocaleString())

//Time Stamp in javascript
let timeStamp = Date.now();
// console.log(timeStamp )
// console.log(myCreatedDate.getTime())
//get seconds from mili seconds
// console.log(Math.floor(timeStamp / 1000 ))

let newDate = new Date();
// console.log(newDate.getUTCFullYear());
let exploreDate =  newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(exploreDate)