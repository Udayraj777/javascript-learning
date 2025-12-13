let mytimestamp= Date.now()

console.log(mytimestamp)

// this will give us no. of milli second from base date

let myCreatedDate= new Date("01-07-2003")

console.log(myCreatedDate.getTime())


// convert millisecond to second

console.log(Math.floor(Date.now()/1000))


const newDate= new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)


console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:'numeric',
    month:'long',
   
}))