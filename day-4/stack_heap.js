// stack - no change in number 
let number=123
let newNum=number
newNum=321

console.log(number);
console.log(newNum);

// heap

let userOne={
    name:"Uday",
    email:"uday@test.com"
}

let userTwo = userOne;

userTwo.email="test@chage.com"

console.log(userOne.email)
console.log(userTwo.email)