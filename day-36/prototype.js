// as we know object is the superset of all type function ,array
// we can access the object and declare some prototype function which will be accessible 
// by array and function 


let myHeroes=["ironman","batman"]

let heroPower={
    thor:"Hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
// i will add a prototype function in Object that enables access this function in all the ds
Object.prototype.uday=function(){
    console.log("uday is gonna be great")
}

myHeroes.uday()

// now i will inject prower in array then it will not be access by above class
Array.prototype.heyUday=function(){
    console.log(`Uday says hello`)
}

myHeroes.heyUday()
heroPower.uday()
// heroPower.heyUday()


// Inheritance

const User={
    name:"UserName",
    email:"uday@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport,//now this object has all the property of teachingSupport
}


Teacher.__proto__=User//teacher has all the property of User

// this is quite old way of inheritance 

// New Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)//teaching support will have all the property of teacher also 


let anotherUserName="UdayRajMishra    "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()