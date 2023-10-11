//for each loop
const coding = ["js", "css", "rb", "cpp", "py", "java"];

//For each is a high order function
// coding.forEach(element => {
//     console.log(element);
// });

// you can also use arrow function as call back function

// coding.forEach((val)=>{
//     console.log(val);
// })

// you can use another function as call back
//create a fucntion and just pass its reference to foreach as callbak

function codingLanguages(item) {
  console.log(item);
}

// coding.forEach(codingLanguages)

//Other parameter
// coding.forEach((item , index, arr)=>{
//     console.log(item , index , arr);
// });

//Objects with in the array
const myCoding = [
  {
    langName: "Javascript",
    langExtension: "js",
  },
  {
    langName: "Java",
    langExtension: "java",
  },
  {
    langName: "Python",
    langExtension: "py",
  },
  {
    langName: "Ruby",
    langExtension: "rb",
  },
];


myCoding.forEach(lang => {
    console.log(lang.langName , lang.langExtension); 
});