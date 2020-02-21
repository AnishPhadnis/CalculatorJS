const operationDispay = document.querySelector('#operationDisplay');
const userNumber = document.querySelectorAll('.userNumber');

const decimal = document.querySelector('#decimal');
const specialFunction = document.querySelectorAll('.specialFunc');
const specialFunctionChar = ['+', '-', '*', '/'];
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');

let userInput = '';
let isDecimalPressed = false;

// Button Event Listeners

// Numbers
for(let i = 0; i <= 9; i++){
    userNumber[i].addEventListener('click', function () {
        userInput = userNumber[i].textContent;
        showDisplay(userInput);
});
}

//Operations
[...specialFunction].forEach(specialFunc => {
    specialFunc.addEventListener('click', function(){
        showDisplay(specialFunc.textContent);
        isDecimalPressed = false;
    });
});

decimal.addEventListener('click', displayDecimal);

clear.addEventListener('click', displayClear);
equals.addEventListener('click', evaluateDisplay);
backspace.addEventListener('click', removeLast);

window.addEventListener('keyup', (e) => {
    if(e.keyCode === 8){
        removeLast();
    }

    else if(!(isNaN(e.key))){
        showDisplay(e.key.toString())
    }

    else if(specialFunctionChar.includes(e.key)){
        console.log('hi');
        showDisplay(e.key.toString());
    }
});


function getDisplay(){
    let display = document.querySelectorAll('.calcDisplay');
    let string = '';
    display.forEach(function(index) {
        string += index.textContent;
    });

    return string
    
}

function showDisplay(string = userInput.textContent){
    let calcDisplay = document.createElement('p');
    calcDisplay.classList.add('calcDisplay');
    calcDisplay.appendChild(document.createTextNode(string));

    calcDisplay.style.margin = '2% 2%';
    calcDisplay.style.display = 'inline-block';
    calcDisplay.style.fontSize = '25px';

    operationDisplay.appendChild(calcDisplay);

}

function displayClear(){
    let num = document.querySelectorAll('p');

    for(let i = 0; i < num.length; i++){
        num[i].remove();
    }
}

function evaluateDisplay(){
    let display = getDisplay().replace(/\s/g, '');
    let result = eval(display);
    isDecimalPressed = false;

    displayClear();

    if(result === Infinity){
        showDisplay('Error - Cannot divide by 0.')
    }
    else{
        showDisplay(result.toString());
    }
    
}

function removeLast() {
    let allChar = document.querySelectorAll('.calcDisplay');
    let lastChar = allChar[allChar.length - 1];

    lastChar.remove();
}

function displayDecimal(){
    if(!isDecimalPressed){
        showDisplay('.');
        isDecimalPressed = true;
    }
}