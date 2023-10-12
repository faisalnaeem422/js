const myNumbers = [1, 2, 3, 4];
let initialValue = 0;
const myTotal = myNumbers.reduce((accu, currVal) => {
    console.log(`Accumulator ${accu} , Current Value ${currVal}`);
  return accu + currVal;
},initialValue );

console.log(myTotal);
