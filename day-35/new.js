// in javascript every thing is child of the object 
// javascript is the type of language which try find if some operation are available in parent class until null is found
// so array string and function sometime behave like object 

function multiplyBy5(num){
    this.num=num
    return num*5;
}

multiplyBy5.power=2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}

// const chai = createUser("chai",25)
// const tea= createUser("tea",250)

// chai.printMe()//it will give error 
// // new protoype property is created but we never inform variable that new prototype is created 
// // that will be known when we write new before using the function 

const chai = new createUser("chai",25)
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/