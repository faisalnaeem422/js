//There are two types of data type
//1. Primitive data types(call by value)
    //7 categories or types

    // 1. string
    let userName = "Faisal Naeem"

    //2. Number
    const score = 100;
    const scoreValue = 100.3;

    //3. Boolean
    const isLoggedIn = false;

    //4. Null (empty)
    const outsideTemp = null

    //5. Undefined
    let userEmail;

    //6. Symbol (to create unique value according to your requirement)
    const id = Symbol('123');
    const anotherId = Symbol('123');
    console.log(id === anotherId);

    //7. BigInt (to handle scientific values)
    const bigNumber = 231231231212n;

//2. Non-premitive data types (also called Reference type)
    //1. Arrays
    const heros =['Muhammad Ali Jinnah', 'Allama Iqbal' , 'Sir Syed Ahmad Khan' ];

    //2. Objects
    let myObj = {
        name:"objOne",
        age:23
    }

    //3. Functions
    const myFunction = function(){
        console.log("Welcome to js series");
    }

//How to check type of any data type in js
// by using typeof() function
console.log(`data type of bigint ${typeof(bigNumber)}`);
console.log(`data type of outsidetemp ${typeof(outsideTemp)}`)
console.log(`data type of scorevalue ${typeof(scoreValue)}`)


//Is javascript is dynamic type language or static type language?
    //javascript is dynamic type language
    //Typescript is static language

//================================== *** =====================================
//Memory
    //Two types of memory 
        //1. Stack
        //In primitive data type stack memory is used (you will get copy of the original value)
        let youtubeName = "YourYoutubeChannelName";
        let anotherName = youtubeName;
        anotherName = "chaiaurcode";
        console.log(youtubeName);
        console.log(anotherName);

       
        //2. Heap
        //In non primitive or reference type Heap memory is used (you will get reference of the original value)
        let userOne={
            email:"user@gmail.com",
            username:"userOne"
        }

        let userTwo = userOne

        userTwo.email = "Faisal@google.com"

        console.log(userOne.email);
        console.log(userTwo.email);
