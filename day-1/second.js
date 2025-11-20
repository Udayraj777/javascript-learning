const firstName="UDay";

// firstName="raj"
// const variable should never change
// let i =1;

// while(true){
//     i++;
//     if(i==10){
//         break;
//     }
// }

// console.log(i);

// previous code run and give result 10 means we can use outside create let variable in loop 

// let i =1

// while(true){
//     let i =1;
//     i++;
//     if(i==10){
//         break;
//     }
// }
// console.log(i)

// previous code stuck in infinite loop i try to test scope of i 

let i =4;

for(let i =5;i<=10;i++){
    console.log(i)
}
console.log(i)

// this is the perfect code to check the scope 

// this is new learning 

console.table([firstName,i]);