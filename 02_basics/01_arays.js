//=================== Arrays ================

const myArr = [1,2,3,4,5, true, "Faisal"];
// console.log(myArr[3])

const myHeros = ["Muhammad Ali Jinnah" , "Allama Iqbal"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2)

//============= Array Methods ====================
//Add new element to existing array
// myArr.push(5)
// myArr.push(8)

//remove last element from array
// myArr.pop()

//Add new element to 0 index
// myArr.unshift(0)

//Remove elemet from 0 index
// myArr.shift()

//Check wether element exists or not in the array
// console.log(myArr.includes(9));

//find index of specific element
// console.log(myArr.indexOf(2))

//join all element of array and change type to string
// const newArray = myArr.join() 

//slice , splice

//Original Array
console.log("A" , myArr)

//Sliced Array
const slicedArray = myArr.slice(1,3)
console.log("B" ,myArr)
console.log(slicedArray)


//Spliced Array
const splciedArray = myArr.splice(1,3)
console.log("C",myArr)
console.log(splciedArray)
