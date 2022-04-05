const clearButton = document.querySelector('button.clear');
const numberButtons = document.querySelectorAll('div.numbers div button');
const currentDisplay = document.getElementById('display');
const addButton = document.querySelector('button.add');
const subtractButton = document.querySelector('button.subtract');
const multiplyButton = document.querySelector('button.multiply');
const divideButton = document.querySelector('button.divide');
const equalButton = document.querySelector('button.equals');

let number = '';
let operator = '';
let a;
let b;

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
const operate = () => {
    b = +number;
    if (operator === 'add'){
        currentDisplay.value = add(a,b);
        return add(a,b);
    }
    else if (operator === 'subtract'){
        currentDisplay.value = subtract(a,b);
        return subtract(a,b);
    }
    else if (operator === 'multiply'){
        return multiply(a,b);
    }
    else if (operator === 'divide'){
        return divide(a,b);
    }
}

const addFromButton = function(){
    a = +number;
    currentDisplay.value = '';
    number = currentDisplay.value;
    operator = 'add';
}

const subtractFromButton = function(){
    a = +number;
    currentDisplay.value = '';
    number = currentDisplay.value;
    operator = 'subtract';
}

function populateDisplay(e){
    number += this.textContent;
    currentDisplay.value = number;
}

const clearDisplay = () => {
    currentDisplay.value = "";
    number = '';
}

clearButton.addEventListener('click',clearDisplay);
addButton.addEventListener('click',addFromButton);
subtractButton.addEventListener('click',subtractFromButton);
equalButton.addEventListener('click',operate);

for(i=0; i<numberButtons.length;i++){  //add event listeners to all number buttons
    numberButtons[i].addEventListener('click',populateDisplay)
}