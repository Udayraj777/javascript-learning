const userEmail='u@test.com'
if(userEmail){//we have truthy and falsy value like for some existing string we assume true some empty string is false array is true 
    console.log('got user email');
} else{
    console.log("don't have user email");
}
// thier is different truth and false value


// falsy value
// false,0,-0,BigInt 9n,"",null,undefined,NaN

// thruthy value
"0",'false'," ",[],{},function(){}

// to check a empty array
array=[]
if (array.length===0){
    console.log("array is empty")
}
// to check empty object
const emptyObj={}

if(Object.keys(emptyObj).length===0){
 console.log("object is empty")   
}

// Nullish Coalescing Operator(??): used for null undefined
// its used with database sometime when it return null we can run some function that will return some value 
let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
// val1=null??10??20

// console.log(val1)


// ternary operator

// condition ? true:false

const iceteaPrice=100

iceteaPrice>=80 ? console.log("price is greated than 80"):console.log("value less than 80")