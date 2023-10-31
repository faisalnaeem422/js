const User ={
    _email :'faisal@fn.com',
    _password:'faisal@fn',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);