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


// console.log(add(1,2));
// console.log(add(50,30));
// console.log(substract(1,2));
// console.log(substract(10,2));
// console.log(multiply(1,2));
// console.log(multiply(31,2));
// console.log(divide(1,2));
// console.log(divide(1,0));
// console.log(divide(10,2));


function operate(op , a , b){
    if ( op === '+'){
       return add(a,b);
    } else if ( op === '-'){
       return subtract(a,b);
    } else if ( op === '*'){
       return  multiply(a,b);
    } else if (op === '/') {
       return divide(a,b);
    }
}   

// console.log(operate('+',2,2));
// console.log(operate('-',1,2));
// console.log(operate('*',3,2));
// console.log(operate('/',10,2));
