class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value
  }

  get password(){
    return `${this._password}thisisthepassword`
  }

  set password(value){
    this._password  = value;
  }
}


const faisal = new User("Faisal" , "Faisal@gmail.com" , "passwordwithgetterandsetter")
console.log(faisal.password);
console.log(faisal.email);