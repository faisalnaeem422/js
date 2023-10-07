

if (true) {
    // let a = 20;
        const b = 30;
    //never use var keyword to declare a varible 
    //var c= 40;
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "Faisal"

    function two(){
        const website = "youtube";
        console.log(username);
    }
    console.log(website)
    // two()
}

// one()


// scope is same in function or conditional statments

if(true){
    let username = "Faisal Naeem";

    if(username){
        let website = "Youtube.com";
        // console.log(`${username} ${website}`);
    }
    // it give error because website variable is in the block scope
    // console.log(website);
}
// it give error because username variable is in the block scope and you can not access block scope variables outside the scope
// console.log(username);




//============================== Interesting =================


//this is basic function
console.log(addOne(6))

function addOne(num){
    return num +1 ;
}

// when you create a function and store it in a variable, this called expression

const addTwo = function(num){
    return num + 2
}
addTwo(6)