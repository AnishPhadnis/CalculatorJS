let userInput = '';

const userNumber = document.querySelectorAll('.userNumber');
const display = document.querySelector('#display');

const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');

const decimal = document.querySelector('#decimal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const specialFunction = document.querySelectorAll('.specialFunc');

//const specialFunctionDisplay = ['.', '+', '-', '/', '*'];

for(let i = 0; i <= 9; i++){
    userNumber[i].addEventListener('click', function () {
        userInput = userNumber[i].textContent;
        showDisplay(userInput);
});
}

[...specialFunction].forEach(specialFunc => {
    specialFunc.addEventListener('click', function(){
        showDisplay(specialFunc.textContent);
    });
});

// Button Event Listeners
clear.addEventListener('click', function (){
    displayClear();
});

equals.addEventListener('click', function () {
    evaluateDisplay();
    
})
 

function evaluateDisplay(){
    let display = getDisplay();
    let result = eval(display);

    displayClear();

    showDisplay(result.toString());
}

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

    calcDisplay.style.margin = '5% 5%';
    calcDisplay.style.display = 'inline';

    display.appendChild(calcDisplay);

}

function evaluate(string){
    if(string.eval() === Infinity){
        showDisplay('Cannot divide by 0');
    }

    else{
        showDisplay(string.eval());
    }
}

function displayClear(){
    let num = document.querySelectorAll('p');

    for(let i = 0; i < num.length; i++){
        num[i].remove();
    }
}

function addNum(a, b){
    return a + b
}

function subtractNum(a, b){
    return a - b
}

function multiplyNum(a, b){
    return a * b
}

function divideNum(a, b){
    return a / b
}

function executeOperation(operation, a, b){
    if(operation == 'add'){
        return addNum(a, b)
    }

    else if(operation == 'subtract'){
        return subtractNum(a, b)
    }
    
    else if(operation == "multiply"){
        return multiplyNum(a, b)
    }

    else if(operation == 'divide'){
        return divideNum(a, b)
    }
        
}