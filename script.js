const operationDisplay = document.querySelector('#operationDisplay');
const userNumber = document.querySelectorAll('.userNumber');
const previousOperation = document.querySelector('#previousOperation');

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

window.addEventListener('keydown', (e) => {
    if(e.keyCode === 8){
        removeLast();
    }

    else if(!(isNaN(e.key))){
        showDisplay(e.key.toString())
    }

    else if(specialFunctionChar.includes(e.key)){
        showDisplay(e.key.toString());
    }

    else if(e.keyCode === 13 || e.keyCode == 187){
        evaluateDisplay();
    }

    else if(e.keyCode == 190){
        showDisplay('.');
    }
});

function previousOperationDisplay(){
    let display = getDisplay().replace(/\s/g, '');;
    displayClear();
    return display 
    
}


function getDisplay(){
    let display = operationDisplay.childNodes;
    let string = '';
    display.forEach(function(index) {
        string += index.textContent;
    });

    return string
    
}

function showDisplay(string = userInput.textContent, displayClass = operationDisplay){
    let calcDisplay = document.createElement('p');
    calcDisplay.classList.add('calcDisplay');
    calcDisplay.appendChild(document.createTextNode(string));

    calcDisplay.style.display = 'inline-block';
    calcDisplay.style.fontSize = '25px';
    formatSpaces(calcDisplay, string);

    displayClass.appendChild(calcDisplay);

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

    let previousDisplay = previousOperationDisplay();
    showDisplay(previousDisplay + "=" + eval(previousDisplay).toString(), previousOperation);

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

function formatSpaces(className, string){
    let allChild = document.querySelectorAll('.calcDisplay');
    let lastDisplay = allChild[allChild.length - 2];

    if(!(isNaN(string)) || string === '.'){
        className.style.margin = '0% 0%';
    }

    else{
        className.style.margin = '2% 2%';
    }

}
