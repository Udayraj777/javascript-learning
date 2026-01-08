let RandomNumber=parseInt((Math.random())*100+1)
console.log(RandomNumber)

const userInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const guesSlot=document.querySelector('.guesses')
const attempts=document.querySelector('.lastResult')
const loworHigh=document.querySelector('.lowOrHi')
const StartOver=document.querySelector('.resultParas')


const p = document.createElement('p');

let playGame=true;
let prevGuess=[];
let numguess=1;

if(playGame){
    
submit.addEventListener('click',function(e){
    e.preventDefault();
    const num=parseInt(userInput.value);
    console.log(num)
    console.log(typeof num)
    validateGuess(num);

})
}


function validateGuess(num){
     if(isNaN(num)){
        alert('Please enter a valid Number');
    }else if(num<1){
        alert('please enter number greater than 1');
    }else if(num>100){
        alert('please enter number less than 100');
    }else{
        prevGuess.push(num);
        if(numguess===11){
            Updatedisplay(num);
            displayMessage(`Game Over.Random number was ${RandomNumber}`);
            endGame();
        }else{
            Updatedisplay(num);
            checkGuess(num);
        }
    }
}

function checkGuess(guess){
    if(guess===RandomNumber){
        displayMessage('you guessed right')
        endGame()
    }else if (guess< RandomNumber){
        displayMessage('number is too low')
    }else if (guess>RandomNumber){
        displayMessage('number is too high')
    }
}

function Updatedisplay(num){
    userInput.value=''
    guesSlot.innerHTML+=`${num} ,`
    numguess++;
    attempts.innerHTML=`${11-numguess}`

}

function displayMessage(Message){
    loworHigh.innerHTML=`<h2>${Message}</h2>`
}


function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML='<h2 id ="newGame">Start new Game</h2>';
    StartOver.appendChild(p);
    playGame=false;
    newGame();

}



function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        RandomNumber=parseInt(Math.random()*100+1);
        numguess=1;
        guesSlot.innerHTML=''
        attempts.innerHTML=`${11-numguess}`
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        loworHigh.innerHTML=''

        playGame=true
        
    })
}
