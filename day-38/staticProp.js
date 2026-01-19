class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username : ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const uday = new User("Uday")
// console.log(uday.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone= new Teacher("iphone", "i@phone.com");
console.log(iphone.logMe())
// and we cant use static keyword to stop everyone to using it 
// it cant be inherited 