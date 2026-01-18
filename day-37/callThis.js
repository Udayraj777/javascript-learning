function SetUsername(username){
    // complex DB calls
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    // SetUsername(username) //this will called and his execution context will elemenate from stack 
    SetUsername.call(this,username)// call is used for holding the referance now to get the result in current execution context we will give existing this object 
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","1234")
console.log(chai);

