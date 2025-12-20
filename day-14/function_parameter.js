// ex in ecom website their is shopping cart where we didnt know how many things user is going to add

function calculateCartPrice(num1){
return num1
}

console.log(calculateCartPrice(200,400,600))//this will output only first value 

// to solve this problem we use rest operator whose syntax is same as spread but in this situation it is called rest 
// it make the bundle of input and return it as array of thos input 


function calculateCartPrice2(...num2){
    return num2
}
console.log(calculateCartPrice2(200,300,400))


// famous interview question 

function calculateCartPrice3(var1,var2,...num3){
    return num3
}

console.log(calculateCartPrice3(100,200,300,400))


// object handling
const user={
    username:"uday",
    price:200
}

function handleObject(anyobject){
    // we have to sometime check type safety with if else thats why developer love typescript
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
//we can direct input object

handleObject({
    username:"uday2",
    price:45
})

const myNewArray=[200,400,600,100]

function retursSecondValue(getArray){
    return getArray[1]
}
console.log(retursSecondValue(myNewArray))
// similarly as object we can directly pass array

console.log(retursSecondValue([100,200,300,400]))