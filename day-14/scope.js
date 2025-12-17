
let a=400
if (true){//these curly braces are scope these let and const variable that are declare inside curly braces only accessible inside curly braces 
    let a=10
    const b=20
    var c=30
    d=9
}

console.log(c)//only this will work because var leak out of block 
console.log(d)//thas why dont use var and undeclare variable 
// there is two kind of scope 
// local and global
console.log(a)