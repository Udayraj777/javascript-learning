// //ES6

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const uday=new User("uday","uday@google.com","1234")

// console.log(uday.encryptPassword());
// console.log(uday.changeUsername());

// Behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@facebook.com","12453")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
