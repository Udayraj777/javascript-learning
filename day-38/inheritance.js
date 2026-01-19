class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)//this super keyword did all the behind the scene for call this .
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const tea=new Teacher("chai","chai@google.com","123")

tea.addCourse()

console.log(tea instanceof Teacher)
console.log(tea instanceof User)
