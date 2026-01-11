

// CREATION and COSUMPTION OF PROMISE


// // promise is a object representing the eventual completion (or failure) of an asynchronous operation and its resulting value
// // how do we create a promise
// // now promise is an object in javascript if we need new instance of object is similar to how we take class object in other programming language
// const promiseOne=new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls,cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()//this connect created promise to .then consuming function means .then only run where we declare resolve 
//     },1000)
// })

// // now we created this promise which do a async call 
// // now we have to consume it 
// promiseOne.then(function(){
//     console.log("Promise consumed")
// })


// Promise without saving in variable 

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// how do we get some data from some promise lets see in promisethree

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Uday",email:"uday@test.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//            resolve({username:"UDay",password:"123"}) 
//         }else{
//             reject('Error:Something went wrong')
//         }
//     },1000)
// })

// // handle promise with then and catch

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("promise is either resolved and rejected"))

// we can also handle promise with async and await lets see in promiseFive

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"javascript",password:"123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response= await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()


// console.log("handling api data")

// async function getUser(){
//     try {
//     const response = await fetch('https://api.github.com/users/Udayraj777')
//     const data= await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getUser()

// with try catch format promise handling comes later

console.log("handling api data with catch and then")
fetch('https://api.github.com/users/Udayraj777')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error))