
function getPin() {
    const pin = generatePin ();
    const pinString = pin + '';
    if (pinString.length === 4 ) {
        return pin ;
    }
    else{
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random ;
}


document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin() ;
    const displayPinFild = document.getElementById('display-pin')
    displayPinFild.value = pin ;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText
    const newTypeNumber = document.getElementById('type-number')
    const previusTypeNumber = newTypeNumber.value ;
    if (isNaN(number)) {
        if (number === 'c') {
            typeNumber.value = '' ;
        }
        else if (number === '<') {
            const digits = previusTypeNumber.split('');
             digits.pop(); 
            
        } 
    }
    else{
        const newTypeNumber = previusTypeNumber + number ;
        typeNumber.value = newTypeNumber ;
    }
})