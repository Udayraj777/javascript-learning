// javascript is synchronous and single threaded
// execute one line of code at a time 
// console.log(1)
// console.log(2)
// each operation waits for the last one to complete before executing 
// remember call stack and memory heap 


// blocking code -block the flow of program-example read file sync
// Non-blocking Code- Does not block execution-example read file async


// js engine
// consist of memory heap and call stack 
// 

// web api have some async function like setTimeout and setInterval when we invoke it it call web api it go to register callback which put in task queue 
// their are some new api known as fectch which has promises that put in high priority task queue

// this queue put task in call stack when done with other task 