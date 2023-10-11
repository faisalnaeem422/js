//For loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best number")
    }
    // console.log(element) 
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop:  ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop Values: ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);   
    }   
}

let myArray = ["Flash" , "Superman" , "Batman", "Spiderman"]
// console.log(`Array Length ${myArray.length}`);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


//Break and continue
//using break  when your condition match it will jump out from the loop
for (let index = 0; index <= 20; index++) {
    if(index==5){
        // console.log(`Detected 5`)
        break;
    }
    // console.log(`Value of index i s ${index}`);

}


//Continue
//Using continue when your condition match it will skip that value but does not jump out from the loop
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of index is ${index}`)   
}