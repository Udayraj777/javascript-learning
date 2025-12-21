// immediately invoked function expression(IIFE)

(function chai(){
    console.log(`DB connected`)
})();

// iife is the function which immediately executed by creating the private scope that is not polluted by gobal scope variable
// when we write  iffe semicolon at end is compulsory
((name)=>{
    console.log(`my name is ${name}`)
})('uday');

// thats how we write iife with named and unamed declaration and pass parameters