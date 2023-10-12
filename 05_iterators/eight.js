// const myNumbers = [1, 2, 3, 4];
// let initialValue = 0;
// const myTotal = myNumbers.reduce((accu, currVal) => {
//     console.log(`Accumulator ${accu} , Current Value ${currVal}`);
//   return accu + currVal;
// },initialValue );

// console.log(myTotal);

//shopping cart example with reduce function

const shoppingCart =[
  {
    item:"js course",
    price:999
  },
  {
    item:"Html course",
    price:1299
  },
  {
    item:"css course",
    price:899
  },
  {
    item:"flutter course",
    price:1999
  },
  {
    item:"ai course",
    price:9999
  },
];

const priceToPay = shoppingCart.reduce((acc , item)=>{
  return acc + item.price
},0);

console.log(priceToPay);