const user={
    username:"uday",
    price:999,

    welcomeMessage:function() {
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username="rishi"
user.welcomeMessage()

// this is only use for context you can see what is in this with console.log and at line 12 we change it context change 

// in node there is no global context when console.log "this" it return a empty object 

console.log(this)
// but in browser it return an window object when we have different function to use in context 


function chai(){
    const username="uday"
    console.log(this.username)
}
chai()

// when we declare username inside function and try to access it with this we cant it return undefined so this cant access local scope in function it applicable in object only