// const coding=['js','ruby','java','python','cpp']

// const value=coding.forEach((item)=>{
//     return item
// })

// console.log(value)
// // forEach returns nothing 

// similar to foreach we have filter operation
// const myNums=[1,2,3,4,56,7,7,8,]

// const newNums=myNums.filter((nums)=>{
//     return nums>4;
// })
// console.log(newNums);

// const newNums=myNums.filter((nums)=>nums>4)
// console.log(newNums);

// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// // const userBook=books.filter((bk)=>bk.genre==='History')
// // const userBook=books.filter((bk)=>bk.publish>=2000)
// const userBook=books.filter((bk)=>{
//     return bk.genre==='History'&&bk.publish>1995
// })

// console.log(userBook)

// // maps
// const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// // const newNums=myNumbers.map((num)=>num+10)
// // console.log(newNums);

// // chaining
// const newNums=myNumbers.map((num)=>num*10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num>=40)
// console.log(newNums);

// reduce

// const myNum=[1,2,3,4,5]

// const myTotal=myNum.reduce((acc,curval)=>{
//     console.log(`acc:${acc} and curval:${curval}`);
//     return acc+curval
// },0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"java course",
        price:1999
    },
    {
        itemName:"cpp course",
        price:999
    }]

    const totalvalue=shoppingCart.reduce((acc,item)=>{return acc+item.price},0)
    console.log(totalvalue);