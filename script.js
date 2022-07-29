//Access all the html elements

let txtNumber = document.getElementById('txtNumber')
let selectBase = document.getElementById('base')
let convertBtn = document.getElementById('btnConvert')
let spanEl =document.getElementById('convertedValue')

//Add event listener to the button

convertBtn.addEventListener('click', function (){
    let num = +txtNumber.value;
    let base = +selectBase.value;

    if (num ===NaN){
        spanEl.textContent = "Please enter a valid number"
        spanEl.style.color = '#EF5350'
    }else{
        let convertedValue = num.toString(base)
        spanEl.textContent = convertedValue.toUpperCase()
        spanEl.style.color = '#81C784'
        spanEl.style.fontWeight = 'bold'
    }
    
    
})




































