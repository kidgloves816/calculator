const clearButton = document.querySelector('button.clear');
const numberButtons = document.querySelectorAll('div.numbers div button');
const currentDisplay = document.getElementById('display');
const addButton = document.querySelector('button.add');
const subtractButton = document.querySelector('button.subtract');
const multiplyButton = document.querySelector('button.multiply');
const divideButton = document.querySelector('button.divide');
const equalButton = document.querySelector('button.equals');

let displayedNumber = '';
let storedNumber;
let operator = '';
let a;
let b;
let previousSolution;

const add = function(...args) {
    let sum = 0;
    for (let i = 0; i < arguments.length;i++){
        sum+= +arguments[i];
    }
    return +sum;
};


const subtract = function(...args) {
    let sum = arguments[0];
    for (let i = 1; i < arguments.length;i++){
        sum-= +arguments[i];
    }
    return +sum;
};

const divide = function(...args){
    let sum = arguments[0];
    for (let i = 1; i < arguments.length;i++){
        sum /= +arguments[i];
    }
    return +sum;
}
const multiply = function(...args){
    let sum = arguments[0];
    for (let i = 1; i < arguments.length;i++){
        sum *= +arguments[i];
    }
    return +sum;
}

const clearDisplay = () => {
    currentDisplay.value = "";
}

const clearCurrentNumber =  () => {
    displayedNumber = '';
}

const clearStoredNumbers = () => {
    a = undefined;
    b = undefined;
}

const clearOperator = () => {
    operator = '';
}

const clearPreviousSolution = () => {
    previousSolution = undefined;
}

const operate = () => {
    b = +displayedNumber;
    if (operator === 'add'){
        previousSolution = add(a,b);
        currentDisplay.value = add(a,b);
        clearCurrentNumber();
        clearOperator();
        return add(a,b);
    }
    else if (operator === 'subtract'){
        previousSolution = subtract(a,b);
        currentDisplay.value = subtract(a,b);
        clearCurrentNumber();
        clearOperator();
        return subtract(a,b);
    }
    else if (operator === 'multiply'){
        previousSolution = multiply(a,b);
        currentDisplay.value = multiply(a,b);
        clearCurrentNumber();
        clearOperator();
        return multiply(a,b);
    }
    else if (operator === 'divide'){
        if (b !== 0){
            previousSolution = divide(a,b);
            currentDisplay.value = divide(a,b);
            clearCurrentNumber();
            clearOperator();
            return divide(a,b);
        }

        else {
            currentDisplay.value = 'You can\'t do that';
            clearCurrentNumber();
            clearOperator();
            return undefined;
        }
    }
}

const addFromButton = function(){
    if (typeof a === 'undefined'){
        operator = 'add';
        a = +displayedNumber;
        currentDisplay.value = '';
        clearCurrentNumber();
    }

    else {
        currentDisplay.value=`${operate()}`;
        a = +currentDisplay.value;
        b = undefined;
        operator = 'add';
    }
}

const subtractFromButton = function(){
    if (typeof a === 'undefined'){
        operator = 'subtract';
        a = +displayedNumber;
        currentDisplay.value = '';
        clearCurrentNumber();
    }

    else {
        currentDisplay.value=`${operate()}`;
        a = +currentDisplay.value;
        b = undefined;
        operator = 'subtract';
    }
}

const multiplyFromButton = function(){
    operator = 'multiply';
    a = +displayedNumber;
    currentDisplay.value = '';
    displayedNumber = currentDisplay.value;
}

const divideFromButton = function(){
    operator = 'divide';
    a = +displayedNumber;
    currentDisplay.value = '';
    displayedNumber = currentDisplay.value;
}

function populateDisplay(e){
    displayedNumber += this.textContent;
    currentDisplay.value = displayedNumber;
}


clearButton.addEventListener('click',() => {
    clearDisplay();
    clearCurrentNumber();
    clearStoredNumbers();
    clearPreviousSolution();
});

addButton.addEventListener('click',addFromButton);
subtractButton.addEventListener('click',subtractFromButton);
multiplyButton.addEventListener('click',multiplyFromButton);
divideButton.addEventListener('click',divideFromButton);

equalButton.addEventListener('click',() => {
    operate();
    clearStoredNumbers();
});


for(i=0; i<numberButtons.length;i++){  //add event listeners to all number buttons
    numberButtons[i].addEventListener('click',populateDisplay)
}