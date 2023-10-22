const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB call , cryptography , network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise one is resolved");
});

//another way to create and consume promise
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Aysnc second task");
        resolve();
    },2000);
}).then(function() {
    console.log("second promise is consumed");
})