
// write the table from 0 to 10
// for (let i = 0; i <= 10; i++) {
//     console.log(`tabel for i equal ${i}`)
//     for(let j=1;j<=10;j++){
//         console.log(`${i}`+' * '+`${j}`+'='+i*j)
//     }
// }

// array loops
// let myArray=['flash','batman','superman'];
// console.log(myArray.length)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }
// javascript doesnt have outofbound exception so it will print undefined if index go out of bound of array


// keyword for break and continue

for (let index = 1; index < 20; index++) {
    if (index==7){
        console.log(`detect 7`);
        break;
    }
    console.log(`value of index equal to ${index}`);
    
}
// break make the loop stop 

for (let index = 1; index < 20; index++) {
    if (index==7){
        console.log(`detect 7 skip it`);
        continue;
    }
    console.log(`value of index equal to ${index}`);
    
}

// continue make the loop skip the perticular iteration after written code 