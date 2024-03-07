
let a = null;
let b = null;
let op = null;

const currentScreen = document.querySelector(".currentScreen");
const previousScreen = document.querySelector('.previousScreen');


const clear = document.querySelector('.clearButton');
clear.addEventListener('click',function() {resetCalculator()} );


const numberButtons = document.querySelectorAll('.inputButton');
numberButtons.forEach(button => button.addEventListener('click', function () { showOnScreen(button.textContent) }));


const operatorButtons = document.querySelectorAll('.operatorButton');
operatorButtons.forEach(button => button.addEventListener('click', function(){operatorPress(button)}));

const deleteButton = document.querySelector('.deleteButton');
deleteButton.addEventListener('click', function(){ deleteLastCharacter()});


const equalButton = document.querySelector('.equalsButton');
equalButton.addEventListener('click', function () { resolve() });


function resolve() {

    if (!previousScreen.textContent.includes('=')) {
        b = Number(currentScreen.textContent);
    }


    if (op === '%'){
        let percentResult = percent(a);
        previousScreen.textContent = `${a} ${op}  = `;
        currentScreen.textContent = `${percentResult}`;
        a = percentResult;

    }
    else if (op === null) {
        previousScreen.textContent = `${b} = `;
        currentScreen.textContent = `${b}`;
    }
     else {
        let result = operate(op, a, b);
        result = Math.round((result + Number.EPSILON) * 1000000) / 1000000;

        if (result === null) {
            currentScreen.textContent = 'Cannot divide by 0'
        } else {
            previousScreen.textContent = `${a} ${op} ${b} = `;
            currentScreen.textContent = `${result}`;
            a = result;
        }
    }
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
    resetCalculator();
    }
    currentScreen.textContent += text;
}


function deleteLastCharacter(){
    currentScreen.textContent = currentScreen.textContent.slice(0,-1);
}

function operatorPress(button) {

    if (previousScreen.textContent !== '' && !(previousScreen.textContent.includes('='))) {
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
    } else if (op === '%'){
        return percent(a);
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
    return (a / b);
}

function percent(a){
return (a/100);
}