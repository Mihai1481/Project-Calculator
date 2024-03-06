const screen = document.querySelector(".currentScreen");

let a;
let b;
let op;


const clear = document.querySelector('.clearButton');
clear.addEventListener('click',function() {resetCalculator()} );

function resetCalculator(){
    screen.textContent = '';
    a = null;
    b = null;
    op = null;
}

const buttons = document.querySelectorAll('.inputButton');
buttons.forEach(element => element.addEventListener('click', function () { showOnScreen(element) }));

function showOnScreen(button) {
    screen.textContent += button.textContent;
}

function operate(op, a, b) {
    if (op === '+') {
        add(a, b);
    } else if (op === '-') {
        subtract(a, b);
    } else if (op === '*') {
        multiply(a, b);
    } else if (op === '/') {
        divide(a, b);
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