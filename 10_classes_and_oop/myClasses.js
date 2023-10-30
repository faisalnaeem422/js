//ES6
// class User{
//    constructor(username , email , password){
//     this.username = username;
//     this.email = email ;
//     this.password = password
//    }

//    encryptPassword(){
//     return `${this.password}asdf`
//    }

//    changeUsername(){
//     return `${this.username.toUpperCase()}`
//    }
// }

// const chai = new User("chai" , "chai@chai.com" , "234")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//Behind the scene
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}fdsa`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@tea.com", "432");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
