const name= new String('URMishra');

console.log(name[3]);

console.log(name.toUpperCase());

// console.log(name.__proto__);
// console.log(name.__proto__.toUpperCase());
console.log(name.charAt(3))
console.log(name.indexOf('i'))

const newString=name.substring(0,4);
console.log(newString);

const anotherString=name.slice(-6,4);
console.log(anotherString);

const new2String=" Uday  "
console.log(new2String)
console.log(new2String.trim())


const url = "https://uday.com/uday%20mishra"

// url.replace('%20',' ')

// console.log(url)

console.log(url.replace('%20',' '));
console.log(url.includes('Uday'))

lastName='Raj-Mishra'
console.log(lastName.split('-'));