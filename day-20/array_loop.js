// // for of
// // [" "," "," "]
// // [{},{},{}]

// const arr=[1,2,3,4,5]

// for (const val of arr) {
//  console.log(val);   
// }

// const greetings="Hello World!"

// for (const i of greetings) {
//     console.log(`each char is ${i}`)   
// }

// Maps

// const map = new Map()

// map.set('IND','INDIA')
// map.set('USA','UNITED STATES OF AMERICA')
// map.set('FR','France')
// map.set('IND','INDIA')

// console.log(map)

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

// // objects
// const myObject={
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// // for of loop doesnt work on objects we forin
// console.log("keys:-")
// for (const key in myObject) {
//     console.log(key);
// }
// console.log("values:-")
// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// const programming=['js','py','java','cpp']
// for (const key in object) {
    
//     console.log(programming[key])
// }

// map is not iterable in forin loop


// foreach loop
const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function(vak){
//     console.log(vak)
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        langName:"javascript",
        langFile:"js"
    },
    {
        langName:"python",
        langFile:"py"
    },
    {
        langName:"cplusplus",
        langFile:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langFile)
})