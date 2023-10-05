const score = 400;
// console.log(`Score ${score}`);

//put decimal point after the number
const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length)
console.log(balance.toFixed(2));
//get the precision of the number (when you sure about the return value)
const otherNumber = 123.78672;
// console.log(otherNumber.toPrecision(3))

//convert a large number to standard (by putting commas)
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'))


//=================================== maths =================================

// console.log(Math.abs(-100));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(100,234,123,432,124));
// console.log(Math.max(100,234,123,432,124));
console.log(Math.random());
console.log(Math.floor((Math.random()*10 ) + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min)