const myObj ={
    js: 'javascript',
    cpp:'C++',
    rb:"Ruby",
    swift: "Swift by Apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`); 
}

//check if for in loop works for array or not
const programming = ["js","rb","cpp","css","py"]
for (const key in programming) {
//    console.log(programming[key]);
}


//Map with for in loop
// const map = new Map();
// map.set("IN","India")
// map.set("PK","Pakistan")
// map.set("USA","United States of America")
// map.set("Fr","France")

// for (const key in map) {
//     console.log(key);
// }