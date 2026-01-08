const form = document.querySelector('form')
// during submitting form default action are to give value in url we have to stop the default action
form.addEventListener('submit',function (e) {
    e.preventDefault()//this prevent default action

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if(height === ''||height<0||isNaN(height)){
        result.innerHTML=`please give a valid height ${height}`
    }else if(weight === ''||weight<0||isNaN(weight)){
        result.innerHTML=`please give a valid height ${weight}`
    }else{
        const answer =parseFloat((weight/((height*height)/10000)).toFixed(1))
        let category=''
        if(answer<18.6){
            category='Under Weight'
        }else if(answer>=18.6 && answer<=24.9){
            category="Normal Range"
        }else{
            category="Overweight"
        }
        result.innerHTML=`result: ${answer} category: ${category}`

    }

    

    
})