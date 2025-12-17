const tinderUser= new Object()//this is the singleton object

// const tinderUser={}  this is the non singleton object

console.log(tinderUser)

tinderUser.name="uday",
tinderUser.age=22
tinderUser.phone=9436000032

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"uday",
            LastName:"mishra"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstName);
// this question mark above protect us when we are dealing with api like if their is fullname 

const obj1 = {1:"a",2:"b"}
const obj2={2:"a",4:"b"}

// const obj3={obj1,obj2}

Object.assign(obj1,obj2)//here obj1 is target and obj2 is source 

console.log(obj1);//only obj1 is modified


// so generally
Object.assign({},obj1,obj2)
// simplest method to add two objects 

const obj3={...obj1,...obj2}
console.log(obj3);


// sometime we have array of object 

const users=[
    {
        id:1,
        name:"user1"
    },
    {
        id:2,
        name:"user2"
    },{
        id:3,
        name:"user3"
    },{
        id:4,
        name:"user4"
    }
]

const name =users[1].name
console.log(name);

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


// sometime when we are looping through object for some value sometime it didnt exist 
console.log(tinderUser.hasOwnProperty('age'))