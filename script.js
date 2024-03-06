
let a;
let b;
let op;

const currentScreen = document.querySelector(".currentScreen");
const previousScreen = document.querySelector('.previousScreen');


const clear = document.querySelector('.clearButton');
clear.addEventListener('click',function() {resetCalculator()} );


const numberButtons = document.querySelectorAll('.inputButton');
numberButtons.forEach(button => button.addEventListener('click', function () { showOnScreen(button.textContent) }));


const operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach(button => button.addEventListener('click', function(){operatorPress(button)}));




const equalButton = document.querySelector('.equalsButton');
equalButton.addEventListener('click', function () { resolve() });


function resolve(){
    if (!previousScreen.textContent.includes('=')) {
        b = Number(currentScreen.textContent);
    }
    const result = operate(op, a, b);

    previousScreen.textContent = `${a} ${op} ${b} = `;
    currentScreen.textContent = `${result}`;
    a = result;
}




function resetCalculator(){
    previousScreen.textContent = '';
    currentScreen.textContent = '';
    a = null;
    b = null;
    op = null;
}


function showOnScreen(text) {
   
    if (previousScreen.textContent.includes('=')) {
        previousScreen.textContent = '';
        currentScreen.textContent = '';
        a = null;
        b = null;
        op = null;
    }
    currentScreen.textContent += text;
}


function operatorPress(button) {

    if (previousScreen.textContent !== '') {
        resolve();
    }

    op = button.textContent;
    a = Number(currentScreen.textContent);
    previousScreen.textContent = `${currentScreen.textContent} ${op}`;
    currentScreen.textContent = '';
}

function operate(op, a, b) {
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return subtract(a, b);
    } else if (op === '*') {
       return  multiply(a, b);
    } else if (op === '/') {
        return divide(a, b);
    }
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}