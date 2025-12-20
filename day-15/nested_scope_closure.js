// nestedScope

function one(){
    const username="uday"
    function two(){
        const website="youtube"
        console.log(username);
    }
    two()
    // console.log(website);
   
}

one()

// usually in nested function child function can access variable from parent funtion that is generally closure


//interesteing function 
console.log(addone(5))
function addone(num){
    return num+1
}

// console.log(addone(5))
console.log(addtwo(5))
const addtwo=function(num){
    return num+2
}

// console.log(addtwo(5))

// i can write function in two ways simple and contain it in variable when access it before declaration in first way we can see it worked and when we access function in second way we cant access it 
