let userInput = '';

const userNumber = document.querySelectorAll('.userNumber');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
clear.addEventListener('click', function (){
    displayClear();
});

for(let i = 0; i < 9; i++){
    userNumber[i].addEventListener('click', function () {
        userInput = userNumber[i];
        console.log(userInput.textContent);
        showDisplay();
});
}
    

function showDisplay(){
    let calcDisplay = document.createElement('p');
    calcDisplay.classList.add('calcDisplay');
    calcDisplay.appendChild(document.createTextNode(userInput.textContent));

    calcDisplay.style.margin = '10% 10%';
    calcDisplay.style.display = 'inline';

    display.appendChild(calcDisplay);

}

function displayClear(){
    let num = document.querySelectorAll('p');

    for(let i = 0; i < num.length; i++){
        num[i].remove();
    }
}

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate(operation, a, b){
    if(operation == 'add'){
        return add(a, b)
    }

    else if(operation == 'subtract'){
        return subtract(a, b)
    }
    
    else if(operation == "multiply"){
        return multiply(a, b)
    }

    else if(operation == 'divide'){
        return divide(a, b)
    }
        
}