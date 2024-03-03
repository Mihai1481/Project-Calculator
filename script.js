const add = function(a,b){
    return a + b
}

const substract = function(a,b){
    return a - b
}

const multiply = function(a,b){
    return a*b
}

const divide = function(a,b){
    if( b === 0) return null
    return a/b
}


console.log(add(1,2));
console.log(add(50,30));
console.log(substract(1,2));
console.log(substract(10,2));
console.log(multiply(1,2));
console.log(multiply(31,2));
console.log(divide(1,2));
console.log(divide(1,0));
console.log(divide(10,2));
