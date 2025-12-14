// singleton - when we make object with constructor object is singleton it is of only one kind

// object literals-method of declaring objects
const symbol=Symbol('sym1')

const jsUser={
    name:"Uday",
    age:24,
    location:"Agra",
    email:"uday@test.com",
    "father-name":"S.M. Mishra",
    [symbol]:"user1"
    
}
// to access value we use . this is not good practice
console.log(jsUser.name);
// good practice is behind the scene every key value is treated as string

console.log(jsUser["name"])
console.log(jsUser["father-name"])

// we want to use symbol datatype in object 
// firs declare it 

const mysym=Symbol("symbol1")

const anotherjsUser={
    [mysym]:"key1",
    name:"newobj"
}
console.log(anotherjsUser[mysym])

// we can change value in objects 

anotherjsUser.name="Harshit"
// we can freeze our object so that no one can change our object
Object.freeze(anotherjsUser)
anotherjsUser.name="uday"
console.log(anotherjsUser)

// we can add function in object ex like we want to add greetings

jsUser.greetings=function(){
    console.log("inside-function(greetings)")
}
console.log(jsUser)
jsUser.greetings()

// now we want to use parameter of object in function 
jsUser.greetinsTwo=function(){
    console.log(`hello!, lets become great ${this["name"]}`)
}

jsUser.greetinsTwo()