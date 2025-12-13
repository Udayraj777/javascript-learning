// declare a array

const myArr=[0,1,2,3,"uday"]

// array share same referance known as shallow copy

const myArr2= new Array(1,2,3,4,6)
// console.log(myArr2)

// array methods

myArr.push(6)
myArr.push(myArr2)
console.log(myArr);
myArr.pop();
console.log(myArr);

// unoptimised way of adding element at the start
myArr.unshift(27);
console.log(myArr);

// remove element from the start 
myArr.shift()
console.log(myArr)

// questioning operation on array

console.log(myArr.includes(3)) //answer in true and false 
console.log(typeof (myArr.indexOf('udy')))//return a number if something is not present return -1

// convert element of array in string
console.log(myArr.join())

// slice and splice 

console.log("A " ,myArr)

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log('B ' ,myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)
console.log('c ' ,myArr)
// splice modify the original array
