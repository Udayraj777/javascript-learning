// function chai(){
//     let username="uday"
//     console.log(this.username);
// }
// this cant be used for context in function 
// chai();

// const chai=function(){
//     let username="uday"
//     console.log(this.username);
// }

// chai();

// const chai=()=>{
//     let username="uday"
//     console.log(this.username);
// }

// chai();

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addtwo(3,4))

// IMPLICIT RETURN-we assume we didnt need to write return keyword


// const addTwo=(num1,num2)=>num1+num2;
// const addTwo=(num1,num2)=>(num1+num2);
// if we wrap output in curly braces then we had to write return 
// for example if we return object it should wrap in parathesis otherwise it will not run 
const addTwo=(num1,num2)=>({username:"uday"})

console.log(addTwo(1,2))