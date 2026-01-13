// # javascript and classes
// javascript is the prototype based language classes are just the syntactical sugar given to the programmer comes from c++ and java .



// ## OOP -programming structure

// their are other style to program a software like functional programming etc.

// ## Objects

// -collection of properties and methods
// ## why we use OOPS
// their is a term called spageti code where we are not able to use any part of it help in removing that 

// ## component of oops

// // object literals

// const User={
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,
//     getUserDetail:function(){
//         console.log('got user detail from database')
//         //this is used for current context as username is not define in this function it is out of scope 
//         //with the help of this we can get the access of current context 
//         console.log(`username: ${this.username}`)
//     }
// }
// console.log(User.loginCount)
// User.getUserDetail()

// // now if we want to create the user2 we have to write everything once again 
// // we can remove this work with the help of constructor function 
// const user2={
//     username:"hitesh",
//     loginCount:8,
//     signedIn:true,
//     getUserDetail:function(){
//         console.log('got user detail from database')
//         //this is used for current context as username is not define in this function it is out of scope 
//         //with the help of this we can get the access of current context 
//         console.log(`username: ${this.username}`)
//     }
// }

// // we know code like 
// const promiseOne=new Promise()
// const promiseTwo=new Promise()
// // this new keyword is the constructor function which allow us to create multiple instance of a object 

function User(username,loginCount,isloggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;


    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }

    return this //we are return the context even if we dont write this it still return it implicitly 


}

const userOne=User('Uday',24,true);
const userTwo=User('Raj',24,false);
// userTwo overwrite the value of userone we have the same context for both of them and when we do any changes 
// with the funtion it change the current context from the function 
// now when we use new it create a new context instance which is independent in memory

const userOne1= new User('Uday',24,true);
const userTwo2= new User('Raj',24,false);

// whenever we use new a empty object is created 
// then constructor function is called where we give the arguments
// in step-3 the argument with this is save in that object 



// console.log(userOne)
// console.log(userTwo)

// console.log(userOne1)
console.log(userTwo2.constructor)//this only point toward its constructor function 

// -constructor function 
// -prototypes
// -classes
// -instances(new,this)



// ## 4 pillars of oops

// abstraction 
// encapsulation
// inheritance
// polymorphism
