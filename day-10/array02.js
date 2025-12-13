const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][2])

// to simplify we can use concatenate

const heros= marvel_heros.concat(dc_heros);
console.log(heros);


// we can also use spread operator
const all_heros=[...marvel_heros,...dc_heros]
console.log(all_heros)

// if we have recursive array mean their is array inside array
const another_array=[1,2,3,4,[5,6,7,8],[9,10,[11,12]]]
// we can make it single array
const single_array=another_array.flat(Infinity)
console.log(single_array)


// we can ask if something an array
console.log(Array.isArray("uday"))
// it can convert any string into array
console.log(Array.from('uday'))

// it can be difficult to convert object to array 
console.log(Array.from({name:"hitesh"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))