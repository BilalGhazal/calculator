let firstOperand;
let secondOperand;
let operator;


function add(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
} 

function divide(firstOperand, secondOperand) {
    return firstOperand / secondOperand;
}


function operate(firstOperand, secondOperand, operator) {

    switch (operator) {
        case "+":
            return add(firstOperand, secondOperand);

        case "-":
            return subtract(firstOperand, secondOperand);

        case "*":
            return multiply(firstOperand, secondOperand);

        case "/":
            return divide(firstOperand, secondOperand)
    }
}
