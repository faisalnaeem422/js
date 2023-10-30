class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}




const Faisal = new User("Faisal")
// console.log(Faisal.createId());


class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iPhone =new Teacher("iPhone" , "i@phone.com")
console.log(iPhone.createId())