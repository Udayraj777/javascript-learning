// intro

// function saymyname(){
//     console.log('U')
//     console.log('D')
//     console.log('A')
//     console.log('Y')
// }

// saymyname()//when we add paranthesis this will be execution
// saymyname//this will be referance 

// 

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

addTwoNumbers(5,"6")


// we cant save output when we write some function like this which doesnt have return

// const result =addTwoNumbers(5,6)
// console.log(result)

function addTwoNumbers(number1,number2){
    
    const result =number1+number2
    return result//anything written after return is unreachable code 
}

const result =addTwoNumbers(5,6)
console.log(result)


// 


function logiUserMessage(username){
    //we will put checks to avoid undefined
    if (!username){  //undefined and null generally consider false so we use !username
        console.log("please enter a username");
        return 
    }

    return `${username} just logged in `
}
console.log(logiUserMessage()) //when we passed nothing undefined is print 
