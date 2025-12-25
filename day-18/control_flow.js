// if(condition){

// }//if condition true then code in scope will run if not it will not run 

// we use different comparison operator 
// <,>,<=,>=,==,!=,===,!==

// now for ex we have 

// temperature=40
// if(temperature<200){
//     console.log("temperature is less than 50")
// }
// console.log("temperature is greater than 50")

// we can see even if conditional statement is true still code which shouldnt run is running for this we use else

// let score=50
// if(score>100){
//     let power='fly'
//     console.log(`User power:${power}`)
// }else{
//     console.log(`score is less than 100 `)
// }
// scope is necessary in previous example we cant use power in else because it is out of scope

// we can also write execution in one line 
// const balance=200
// if(balance>1000) console.log("balance is greater than 1000"),console.log("3000")
//     else console.log("balace is less than 1000"),console.log('low balance')

// // nested if else
//     if(balance<500){
//         console.log("less than 500")
//     }
//     else if(balance<750) {
//         console.log("less than 750")
//     }
//     else if (balance<1000){
//         console.log("less than 1000")
//     }
//     else {
//         console.log("greater than 1000")
//     }

// // when we have to compare multiple condition 
// // else if make the block give single write decision and skip other if condition checks we got the write answer while if we use "if" in place of "else if" cpu will check every condition


// const userLoggedin=true
// const loggedinfromgoogle=false
// const loggedinfromEmail=true

// // AND condition check
// if(userLoggedin && loggedinfromgoogle){
//     console.log("allow signed in ")
// }
// // OR conditional check
// if(loggedinfromEmail||loggedinfromgoogle){
//     console.log("log them in ")
// }

// month=3
// switch (month) {
//     case 1:
//         console.log("jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     case 6:
//         console.log("june")
//         break;
//     case 7:
//         console.log("july")
//         break;
//     case 8:
//         console.log("august")
//         break;
//     case 9:
//         console.log("september")
//         break;
//     case 10:
//         console.log("october")
//         break;
//     case 11:
//         console.log("november")
//         break;
//     case 12:
//         console.log("december")
//         break;

//     default:
//         console.log("default case")
//         break;
// } we can use string also 
