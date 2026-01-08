// generate random colour

const randomColor= function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let IntervalId
const startChangingColor=function(){
    if(!IntervalId){
        IntervalId=setInterval(changeBgColor,1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
    console.log("color start changing")
};
const stopChangingColor=function(){
    clearInterval(IntervalId);
    IntervalId=null;
    console.log("color stop changing")
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);