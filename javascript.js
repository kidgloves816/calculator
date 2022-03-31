const clearButton = document.querySelector('button.clear');
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
const operate = (a, b, operator) => {
    if (operator === 'add'){
        return add(a,b);
    }
    else if (operator === 'subtract'){
        return subtract(a,b);
    }
    else if (operator === 'multiply'){
        return multiply(a,b);
    }
    else if (operator === 'divide'){
        return divide(a,b);
    }
}



const clearDisplay = () => {
    const currentDisplay = document.getElementById('display');
    currentDisplay.value = "";
}

clearButton.addEventListener('click',clearDisplay);