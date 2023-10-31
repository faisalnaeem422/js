// const descriptor  =Object.getOwnPropertyDescriptor(Math , "PI");

// console.log(descriptor);

const chai ={
    name:'ginger chai',
    price:350,
    isAvailable:true,

    orderChai : function(){
        console.log("Order kro chai");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , 'name' , {
    //writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

//can not redefine property
// Object.defineProperty(Math , "PI" ,{
//     writable:true,
//     enumerable:true
// })
// console.log(Object.getOwnPropertyDescriptor(Math , "PI"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
   console.log(`${key}  : ${value}`);
}